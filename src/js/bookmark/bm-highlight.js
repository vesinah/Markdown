import { State } from '../core/state.js';
import { BookmarkStore } from './bm-store.js';
import { createAnchorFromRange, resolveAnchor, normalizeText } from './bm-anchor.js';
import { esc } from '../tree/tree-node.js';
import { BookmarkPanel } from './bm-panel.js';

let popupEl = null;
let composerEl = null;
let activeFileKey = '';
let activeDocName = '';
let activeDocPath = '';
let activeSectionId = '';
let currentRange = null;

const SUPPORTED = name => /\.(md|markdown|mdown|mkdn|txt|log|csv|tsv|html?|xml|rdf|ttl|json|ya?ml|py|js|ts|css)$/i.test(name || '');

export function initHighlights(contentEl, scrollPane) {
  document.addEventListener('mouseup', e => {
    setTimeout(() => onSelectionSettled(e), 10);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') hidePopup();
  });
}

function inReader(sel) {
  if (!sel || sel.isCollapsed || sel.rangeCount === 0) return false;
  const mdContent = document.getElementById('md-content');
  if (!mdContent) return false;
  const anchorNode = sel.getRangeAt(0).startContainer;
  return mdContent.contains(anchorNode.nodeType === 1 ? anchorNode : anchorNode.parentNode);
}

function onSelectionSettled(evt) {
  // ถ้าคลิกภายใน popup/composer อย่าทำอะไร
  if (popupEl && (popupEl.contains(evt.target))) return;
  if (composerEl && composerEl.contains(evt.target)) return;

  const sel = window.getSelection();
  if (!inReader(sel)) { hidePopup(); return; }

  const range = sel.getRangeAt(0);
  const text = normalizeText(range.toString());
  if (!text || text.length < 2) { hidePopup(); return; }

  currentRange = range.cloneRange();
  showPopup(range);
}

function showPopup(range) {
  if (!popupEl) buildPopup();
  const rect = range.getBoundingClientRect();
  popupEl.hidden = false;
  const pw = popupEl.offsetWidth || 90;
  const ph = popupEl.offsetHeight || 36;
  let x = rect.left + rect.width / 2 - pw / 2;
  let y = rect.top - ph - 8;
  x = Math.max(8, Math.min(x, window.innerWidth - pw - 8));
  if (y < 8) y = rect.bottom + 8;
  popupEl.style.left = x + 'px';
  popupEl.style.top = y + 'px';
}

function hidePopup() {
  if (popupEl) popupEl.hidden = true;
}

function buildPopup() {
  popupEl = document.createElement('div');
  popupEl.id = 'bm-popup';
  popupEl.hidden = true;
  popupEl.innerHTML = `
    <button type="button" class="bm-popup-btn" data-act="bookmark" title="บุ๊คมาร์คข้อความที่ไฮไลต์">
      <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0L11.5 12.66V2.75a.25.25 0 0 0-.25-.25Z"/></svg>
    </button>
    <span class="bm-popup-sep"></span>
    <button type="button" class="bm-popup-btn" data-act="comment" title="คอมเมนต์ข้อความที่ไฮไลต์">
      <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5C14.216 1 15 1.784 15 2.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/></svg>
    </button>
  `;
  document.body.appendChild(popupEl);

  popupEl.addEventListener('mousedown', e => e.preventDefault());
  popupEl.addEventListener('click', e => {
    const btn = e.target.closest('.bm-popup-btn');
    if (!btn) return;
    e.stopPropagation();
    const act = btn.dataset.act;
    if (act === 'bookmark') {
      saveAnnotation('bookmark', '');
      hidePopup();
    } else if (act === 'comment') {
      openComposer();
    }
  });
}

function buildComposer() {
  composerEl = document.createElement('div');
  composerEl.id = 'bm-composer';
  composerEl.hidden = true;
  composerEl.innerHTML = `
    <div class="bm-composer-quote"></div>
    <textarea class="bm-composer-input" placeholder="พิมพ์คอมเมนต์..." rows="3"></textarea>
    <div class="bm-composer-actions">
      <button type="button" class="bm-composer-btn secondary" data-act="cancel">ยกเลิก</button>
      <button type="button" class="bm-composer-btn primary" data-act="save">บันทึก</button>
    </div>
  `;
  document.body.appendChild(composerEl);

  composerEl.addEventListener('mousedown', e => e.stopPropagation());
  composerEl.addEventListener('click', e => {
    const btn = e.target.closest('.bm-composer-btn');
    if (!btn) return;
    e.stopPropagation();
    if (btn.dataset.act === 'save') {
      const txt = composerEl.querySelector('.bm-composer-input').value.trim();
      saveAnnotation('comment', txt);
      hideComposer();
    } else {
      hideComposer();
    }
  });
  composerEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      const txt = composerEl.querySelector('.bm-composer-input').value.trim();
      saveAnnotation('comment', txt);
      hideComposer();
    } else if (e.key === 'Escape') {
      hideComposer();
    }
  });
}

function openComposer() {
  if (!composerEl) buildComposer();
  hidePopup();
  if (!currentRange) return;
  const q = normalizeText(currentRange.toString());
  composerEl.querySelector('.bm-composer-quote').textContent = q.length > 120 ? q.slice(0, 120) + '…' : q;
  composerEl.querySelector('.bm-composer-input').value = '';
  composerEl.hidden = false;
  const rect = currentRange.getBoundingClientRect();
  const cw = composerEl.offsetWidth || 280;
  let x = rect.left + rect.width / 2 - cw / 2;
  x = Math.max(8, Math.min(x, window.innerWidth - cw - 8));
  let y = rect.bottom + 8;
  if (y + composerEl.offsetHeight > window.innerHeight - 8) y = Math.max(8, rect.top - composerEl.offsetHeight - 8);
  composerEl.style.left = x + 'px';
  composerEl.style.top = y + 'px';
  composerEl.querySelector('.bm-composer-input').focus();
}

function hideComposer() {
  if (composerEl) composerEl.hidden = true;
}

async function saveAnnotation(kind, comment) {
  if (!currentRange || !activeFileKey) return;
  const anchor = createAnchorFromRange(currentRange, document.getElementById('md-content'));
  if (!anchor) return;

  const sel = window.getSelection();
  if (sel) sel.removeAllRanges();

  const rec = await BookmarkStore.add({
    fileKey: activeFileKey,
    docName: activeDocName,
    docPath: activeDocPath,
    rootName: activeRootName(),
    kind,
    quote: anchor.quote,
    prefix: anchor.prefix,
    suffix: anchor.suffix,
    sectionId: findSectionId(currentRange),
    comment
  });
  currentRange = null;
  if (rec) {
    wrapHighlight(rec);
    BookmarkPanel.refresh();
  }
}

function activeRootName() {
  try { return State.roots[State.current.rootIdx] ? State.roots[State.current.rootIdx].name : ''; } catch (e) { return ''; }
}

function findSectionId(range) {
  let node = range.startContainer;
  while (node && node !== document.body) {
    if (node.nodeType === 1 && /^H[1-6]$/.test(node.tagName)) return node.id || '';
    node = node.parentNode;
  }
  // หา heading ล่าสุดก่อนหน้า
  const headings = document.getElementById('md-content').querySelectorAll('h1,h2,h3,h4,h5,h6');
  let last = '';
  for (const h of headings) {
    if (range.comparePoint(h, 0) < 0) last = h.id || '';
    else break;
  }
  try {
    let lastId = '';
    for (const h of headings) {
      if (h.getBoundingClientRect().top <= range.getBoundingClientRect().top) lastId = h.id || lastId;
    }
    return lastId;
  } catch (e) { return last; }
}

export function setActiveDoc(node, file) {
  if (node && file && SUPPORTED(node.name)) {
    activeFileKey = BookmarkStore.makeFileKey(node.name, file.size);
    activeDocName = node.name;
    activeDocPath = node.path;
  } else {
    activeFileKey = '';
    activeDocName = '';
    activeDocPath = '';
  }
}

// วาด highlight ทั้งหมดของเอกสารปัจจุบัน (เรียกหลัง render markdown เสร็จ)
export async function restoreHighlights() {
  clearHighlights();
  if (!activeFileKey) return;
  const root = document.getElementById('md-content');
  if (!root) return;

  const items = await BookmarkStore.getByFileKey(activeFileKey);
  const pending = [];
  for (const rec of items) {
    // resolve ใหม่ทุกครั้ง (ข้อความอาจกลับมาเหมือนเดิม)
    const ok = wrapHighlight(rec);
    if (!ok) pending.push(rec);
  }
  if (pending.length) {
    BookmarkPanel.setOrphans(pending.map(p => p.id));
  }
}

export function clearHighlights() {
  const root = document.getElementById('md-content');
  if (!root) return;
  root.querySelectorAll('mark.bm-hl').forEach(m => {
    const parent = m.parentNode;
    while (m.firstChild) parent.insertBefore(m.firstChild, m);
    parent.removeChild(m);
    parent.normalize();
  });
  BookmarkPanel.setOrphans([]);
}

function wrapHighlight(rec) {
  const root = document.getElementById('md-content');
  if (!root) return false;
  const range = resolveAnchor(root, rec);
  if (!range) return false;

  const marks = splitAndWrap(range, rec.id);
  return marks.length > 0;
}

// คลุม range ด้วย <mark> โดยรองรับกรณีข้ามหลาย text node
function splitAndWrap(range, id) {
  const marks = [];
  try {
    const textNodes = [];
    const walker = document.createTreeWalker(
      range.commonAncestorContainer,
      NodeFilter.SHOW_TEXT,
      { acceptNode: n => range.intersectsNode(n) && n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT }
    );
    let n;
    while ((n = walker.nextNode())) textNodes.push(n);

    for (const node of textNodes) {
      let start = 0, end = node.nodeValue.length;
      if (node === range.startContainer) start = range.startOffset;
      if (node === range.endContainer) end = range.endOffset;
      if (start >= end) continue;

      const mid = node.splitText(start);
      mid.splitText(end - start);
      const mark = document.createElement('mark');
      mark.className = 'bm-hl';
      mark.dataset.id = id;
      mark.appendChild(document.createTextNode(mid.nodeValue));
      mid.parentNode.replaceChild(mark, mid);
      marks.push(mark);
    }
  } catch (e) {
    console.warn('[bm-hl] wrap failed:', e.message);
  }
  return marks;
}

// คลิกที่ mark → ให้ panel เลื่อนไปรายการนั้น
document.addEventListener('click', e => {
  const mark = e.target.closest('mark.bm-hl');
  if (!mark) return;
  BookmarkPanel.revealItem(mark.dataset.id);
});

export function scrollToHighlight(id) {
  const mark = document.querySelector(`mark.bm-hl[data-id="${CSS.escape(id)}"]`);
  if (!mark) return false;
  const pane = document.getElementById('md-scroll-pane');
  if (pane) {
    const top = mark.getBoundingClientRect().top - pane.getBoundingClientRect().top + pane.scrollTop - 60;
    pane.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  } else {
    mark.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  mark.classList.add('flash');
  setTimeout(() => mark.classList.remove('flash'), 1600);
  return true;
}
