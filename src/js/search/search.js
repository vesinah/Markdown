import { State } from '../core/state.js';
import { isMd, isPdf, isCode, isDoc, isFileAllowedByFilter } from '../tree/tree-node.js';
import { PDFViewer } from '../reader/pdf-engine.js';

const MAX_TEXT_CACHE = 200;

export const SearchEngine = {
  input: null,
  contentCheckbox: null,
  infoEl: null,
  contentEl: null,
  onTreeUpdate: null,
  textCache: new Map(),

  clearCache() {
    this.textCache.clear();
  },

  _cacheText(path, txt) {
    if (this.textCache.size >= MAX_TEXT_CACHE) {
      const oldest = this.textCache.keys().next().value;
      this.textCache.delete(oldest);
    }
    this.textCache.set(path, txt);
  },

  init(input, contentCheckbox, infoEl, contentEl, onTreeUpdate) {
    this.input = input;
    this.contentCheckbox = contentCheckbox;
    this.infoEl = infoEl;
    this.contentEl = contentEl;
    this.onTreeUpdate = onTreeUpdate;

    this.input.addEventListener('input', this.debounce(() => this.run(), 220));
    this.contentCheckbox.addEventListener('change', () => this.run());

    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
        e.preventDefault();
        this.input.focus();
        this.input.select();
      }
      if (document.activeElement === this.input) {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.stepInDoc(e.shiftKey ? -1 : 1);
        }
        if (e.key === 'Escape') {
          this.input.value = '';
          this.run();
          this.input.blur();
        }
      }
    });
  },

  debounce(fn, ms) {
    let t;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...a), ms);
    };
  },

  async extractPdfText(fh, gen) {
    if (!window.pdfjsLib) return '';
    try {
      const arrayBuffer = await fh.arrayBuffer();
      if (gen && gen !== State.search.gen) return '';
      const data = new Uint8Array(arrayBuffer);
      const loadingTask = window.pdfjsLib.getDocument({ data });
      const doc = await loadingTask.promise;
      let fullText = '';
      for (let i = 1; i <= doc.numPages; i++) {
        if (gen && gen !== State.search.gen) return '';
        const page = await doc.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + ' ';
      }
      return fullText;
    } catch (e) {
      return '';
    }
  },

  async getFileText(node, gen) {
    if (!node || node.kind !== 'file') return '';
    if (this.textCache.has(node.path)) {
      return this.textCache.get(node.path);
    }

    try {
      const fh = await node.handle.getFile();
      if (isPdf(node.name)) {
        const txt = await this.extractPdfText(fh, gen);
        if (txt) this._cacheText(node.path, txt);
        return txt;
      } else if (isMd(node.name) || isCode(node.name)) {
        const txt = await fh.text();
        this._cacheText(node.path, txt);
        return txt;
      }
    } catch (e) {
      return '';
    }
    return '';
  },

  async run() {
    const query = this.input.value.trim();
    State.search.q = query;
    State.search.content = this.contentCheckbox.checked;

    if (!query) {
      State.search.hits = [];
      State.search.fileHits = new Set();
      State.search.inDoc = [];
      State.search.idx = -1;
      State.search.pdfMatchingPages = [];
      State.search.pdfMatchIdx = -1;
      this.infoEl.hidden = true;
      if (this.onTreeUpdate) this.onTreeUpdate();
      this.clearDocHighlights();
      return;
    }

    const gen = ++State.search.gen;
    const lowerQuery = query.toLowerCase();
    const nameHits = [];

    for (const n of State.flat) {
      if (n.kind === 'file' && isFileAllowedByFilter(n.name, State.filters && State.filters.types) && n.name.toLowerCase().includes(lowerQuery)) {
        nameHits.push(n.path);
      }
    }
    State.search.fileHits = new Set(nameHits);
    if (this.onTreeUpdate) this.onTreeUpdate();

    if (State.search.content) {
      this.infoEl.hidden = false;
      this.infoEl.textContent = 'กำลังค้นหาในเนื้อหา…';
      const matched = [];
      const filesToScan = State.flat.filter(n =>
        n.kind === 'file' &&
        isFileAllowedByFilter(n.name, State.filters && State.filters.types) &&
        (isMd(n.name) || isCode(n.name) || isPdf(n.name))
      );

      let scanned = 0;
      for (const n of filesToScan) {
        if (gen !== State.search.gen) return;
        scanned++;
        if (filesToScan.length > 5 && scanned % 5 === 0) {
          this.infoEl.textContent = `กำลังค้นหาในเนื้อหา… (${scanned}/${filesToScan.length})`;
        }
        let txt = '';
        try {
          txt = await this.getFileText(n, gen);
        } catch (e) { continue; }
        if (gen !== State.search.gen) return;
        if (txt && txt.toLowerCase().includes(lowerQuery)) matched.push(n.path);
      }
      if (gen !== State.search.gen) return;
      State.search.hits = matched;

      const total = new Set(nameHits.concat(matched)).size;
      this.infoEl.textContent = total ? `พบในชื่อไฟล์ ${nameHits.length} · พบในเนื้อหา ${matched.length} ไฟล์` : 'ไม่พบผลลัพธ์';
      this.highlightDoc();
    } else {
      this.infoEl.hidden = false;
      this.infoEl.textContent = nameHits.length ? `พบ ${nameHits.length} ไฟล์` : 'ไม่พบผลลัพธ์';
      this.clearDocHighlights();
    }
  },

  clearDocHighlights() {
    if (!this.contentEl) return;
    for (const m of this.contentEl.querySelectorAll('mark')) {
      m.replaceWith(...m.childNodes);
    }
    State.search.inDoc = [];
    State.search.idx = -1;
    State.search.pdfMatchingPages = [];
    State.search.pdfMatchIdx = -1;
  },

  async highlightDoc() {
    this.clearDocHighlights();
    const q = State.search.q;
    if (!q || !State.current || !State.search.content) return;

    if (isMd(State.current.name) || isCode(State.current.name)) {
      if (!this.contentEl) return;
      const walker = document.createTreeWalker(this.contentEl, NodeFilter.SHOW_TEXT, {
        acceptNode(n) {
          if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          const p = n.parentElement;
          if (p && p.closest('pre, code, .katex')) return NodeFilter.FILTER_REJECT;
          return n.nodeValue.toLowerCase().includes(q.toLowerCase()) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });

      const targets = [];
      while (walker.nextNode()) targets.push(walker.currentNode);
      const hits = [];

      for (const t of targets) {
        const frag = document.createDocumentFragment();
        const txt = t.nodeValue, low = txt.toLowerCase(), ql = q.toLowerCase();
        let i = 0;
        for (;;) {
          const j = low.indexOf(ql, i);
          if (j < 0) { frag.appendChild(document.createTextNode(txt.slice(i))); break; }
          frag.appendChild(document.createTextNode(txt.slice(i, j)));
          const m = document.createElement('mark');
          m.textContent = txt.slice(j, j + q.length);
          frag.appendChild(m);
          hits.push(m);
          i = j + q.length;
        }
        t.parentNode.replaceChild(frag, t);
      }

      State.search.inDoc = hits;
      if (hits.length) State.search.idx = 0;
      this.updateNav();
    } else if (isPdf(State.current.name) && State.pdf.doc) {
      const doc = State.pdf.doc;
      const matchingPages = [];
      const ql = q.toLowerCase();
      for (let p = 1; p <= doc.numPages; p++) {
        try {
          const page = await doc.getPage(p);
          const textContent = await page.getTextContent();
          const str = textContent.items.map(item => item.str).join(' ').toLowerCase();
          if (str.includes(ql)) {
            matchingPages.push(p);
          }
        } catch (e) { console.warn('[search] PDF page text extraction failed:', e.message); }
      }
      State.search.pdfMatchingPages = matchingPages;
      State.search.pdfMatchIdx = matchingPages.length > 0 ? 0 : -1;
      if (matchingPages.length > 0) {
        PDFViewer.jumpToPage(matchingPages[0]);
        this.infoEl.hidden = false;
        this.infoEl.textContent = `ใน PDF นี้: พบ ${matchingPages.length} หน้า (หน้า ${matchingPages.slice(0, 5).join(', ')}${matchingPages.length > 5 ? '...' : ''})`;
      } else {
        this.infoEl.hidden = false;
        this.infoEl.textContent = 'ใน PDF นี้: ไม่พบข้อความ';
      }
    }
  },

  updateNav() {
    const { inDoc, idx } = State.search;
    inDoc.forEach((m, i) => m.classList.toggle('cur', i === idx));
    if (idx >= 0 && inDoc[idx]) inDoc[idx].scrollIntoView({ block: 'center' });
    if (State.search.q && State.search.content) {
      this.infoEl.hidden = false;
      this.infoEl.textContent = `ในไฟล์นี้: ${inDoc.length ? (idx + 1) + '/' + inDoc.length : 'ไม่พบ'}`;
    }
  },

  stepInDoc(dir) {
    if (State.current && isPdf(State.current.name) && State.search.pdfMatchingPages && State.search.pdfMatchingPages.length) {
      const pages = State.search.pdfMatchingPages;
      State.search.pdfMatchIdx = (State.search.pdfMatchIdx + dir + pages.length) % pages.length;
      const pageNum = pages[State.search.pdfMatchIdx];
      PDFViewer.jumpToPage(pageNum);
      this.infoEl.hidden = false;
      this.infoEl.textContent = `ใน PDF นี้: หน้า ${pageNum} (${State.search.pdfMatchIdx + 1}/${pages.length})`;
      return;
    }
    if (!State.search.inDoc.length) return;
    State.search.idx = (State.search.idx + dir + State.search.inDoc.length) % State.search.inDoc.length;
    this.updateNav();
  }
};
