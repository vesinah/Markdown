import { State } from '../core/state.js';
import { isMd, isDoc } from '../tree/tree-node.js';

export const SearchEngine = {
  input: null,
  contentCheckbox: null,
  infoEl: null,
  contentEl: null,
  onTreeUpdate: null,

  init(input, contentCheckbox, infoEl, contentEl, onTreeUpdate) {
    this.input = input;
    this.contentCheckbox = contentCheckbox;
    this.infoEl = infoEl;
    this.contentEl = contentEl;
    this.onTreeUpdate = onTreeUpdate;

    this.input.addEventListener('input', this.debounce(() => this.run(), 180));
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

  async run() {
    const q = this.input.value.trim();
    State.search.q = q;
    State.search.content = this.contentCheckbox.checked;

    if (!q) {
      State.search.hits = [];
      State.search.fileHits = new Set();
      State.search.inDoc = [];
      State.search.idx = -1;
      this.infoEl.hidden = true;
      if (this.onTreeUpdate) this.onTreeUpdate();
      this.clearDocHighlights();
      return;
    }

    const gen = ++State.search.gen;
    const lc = q.toLowerCase();
    const nameHits = [];

    for (const n of State.flat) {
      if (n.kind === 'file' && isDoc(n.name) && n.name.toLowerCase().includes(lc)) {
        nameHits.push(n.path);
      }
    }
    State.search.fileHits = new Set(nameHits);
    if (this.onTreeUpdate) this.onTreeUpdate();

    if (State.search.content) {
      this.infoEl.hidden = false;
      this.infoEl.textContent = 'กำลังค้นหาในเนื้อหา…';
      const matched = [];

      for (const n of State.flat) {
        if (gen !== State.search.gen) return;
        if (n.kind !== 'file' || !isMd(n.name)) continue;
        let txt = '';
        try {
          const fh = await n.handle.getFile();
          txt = await fh.text();
        } catch (e) { continue; }
        if (gen !== State.search.gen) return;
        if (txt.toLowerCase().includes(lc)) matched.push(n.path);
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
  },

  highlightDoc() {
    this.clearDocHighlights();
    const q = State.search.q;
    if (!q || !State.current || !isMd(State.current.name) || !State.search.content || !this.contentEl) return;

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
    if (!State.search.inDoc.length) return;
    State.search.idx = (State.search.idx + dir + State.search.inDoc.length) % State.search.inDoc.length;
    this.updateNav();
  }
};
