import { Store } from './core/store.js';
import { State } from './core/state.js';
import { rescanWorkspaces, ensurePermission, findFileByPath, resolvePath } from './core/fs.js';
import { isMd, isPdf, isImg, isTxt, isHtml, isXml, isRdf, isCode, isDoc, ALL_FILTER_TYPES, isFileAllowedByFilter, fmtBytes, esc } from './tree/tree-node.js';
import { getFinalExpandedPaths, expandOnlyFinal, collapseAllTruly } from './tree/tree-exp.js';
import { renderTree } from './tree/tree-ui.js';
import { renderMarkdownContent, renderCodeContent } from './reader/markdown.js';
import { PDFViewer } from './reader/pdf-engine.js';
import { ImageViewer } from './reader/img-engine.js';
import { SearchEngine } from './search/search.js';
import { setupSidebarResizer } from './ui/resizer.js';
import { RulerModule } from './ui/ruler.js';
import { applyTheme, THEMES } from './ui/theme.js';

const D = {};
['btn-add', 'btn-add2', 'search-input', 'search-content', 'search-info', 'ws-bar', 'tree', 'stat-title', 'stat-filesize', 'sb-progress-bar',
 'btn-filter-toggle', 'type-filter-dropdown',
 'btn-filter-all', 'btn-filter-none', 'btn-filter-reset',
 'btn-final', 'btn-collapse-all',
 'sb-toggle', 'btn-toc-toggle-menu', 'sb-resizer', 'sidebar', 'reader-viewport', 'md-view',
 'md-reader-container', 'md-ruler-bar', 'ruler-track', 'ruler-scale', 'ruler-handle-left', 'ruler-handle-right',
 'md-scroll-pane', 'margin-guide-left', 'margin-guide-right', 'md-content',
 'toc-panel', 'toc-header', 'toc-list', 'btn-toc-collapse', 'btn-toc-expand', 'toc-rail-list', 'toc-rail-logo',
 'pdf-view', 'pdf-frame',
 'img-view', 'img-preview-frame', 'img-meta-badge', 'empty-state',
 'file-crumb', 'fs-dec', 'fs-inc', 'fs-reset', 'tx-color', 'tx-reset',
 'btn-theme-toggle', 'theme-tools-wrap', 'theme-tools-content',
 'btn-doc-info', 'doc-info-popover', 'doc-info-ext', 'doc-info-name', 'doc-info-type',
 'doc-info-path', 'doc-stat-words', 'doc-stat-chars', 'doc-stat-size', 'doc-stat-lines',
 'btn-copy-path', 'doc-info-wrap']
.forEach(id => D[id.replace(/-(\w)/g, (_, c) => c.toUpperCase())] = document.getElementById(id));

export function switchView(type) {
  D.mdView.hidden = (type !== 'md');
  D.pdfView.hidden = (type !== 'pdf');
  D.imgView.hidden = (type !== 'img');
  D.emptyState.style.display = (type === 'empty') ? 'flex' : 'none';
  if (type === 'empty') {
    if (D.docInfoPopover) D.docInfoPopover.hidden = true;
  }
  if (type === 'md') {
    setTimeout(() => {
      if (RulerModule) {
        RulerModule.syncScrollbar();
        RulerModule.clampMargins();
        RulerModule.drawScale();
      }
    }, 50);
  }
}

async function saveWorkspace() {
  const roots = [];
  for (const r of State.roots) {
    try {
      if (await r.handle.queryPermission({ mode: 'read' }) === 'granted') {
        roots.push({ name: r.name, handle: r.handle });
      }
    } catch (e) {}
  }
  Store.set('workspace', {
    roots,
    expanded: [...State.expanded],
    collapsed: [...State.collapsed]
  });
}

function saveUi() {
  Store.set('ui', {
    sbClosed: document.body.classList.contains('sb-closed'),
    sbWidth: State.ui.sbWidth,
    theme: State.ui.theme,
    fscale: State.ui.fscale,
    tx: State.ui.tx,
    padLeft: State.ui.padLeft,
    padRight: State.ui.padRight,
    tocMini: State.ui.tocMini
  });
}

function updateSbToggleUI() {
  if (!D.sbToggle) return;
  const isClosed = document.body.classList.contains('sb-closed');
  D.sbToggle.classList.toggle('active', isClosed);
  D.sbToggle.title = isClosed ? 'แสดงแถบรายการไฟล์ (Ctrl+B)' : 'ซ่อนแถบรายการไฟล์ (Ctrl+B)';
}

export function toggleTocMini(force) {
  const isMini = (typeof force === 'boolean') ? force : !State.ui.tocMini;
  State.ui.tocMini = isMini;
  if (D.tocPanel) {
    D.tocPanel.classList.toggle('toc-mini', isMini);
  }
  saveUi();
  setTimeout(() => {
    if (RulerModule) {
      RulerModule.syncScrollbar();
      RulerModule.clampMargins();
      RulerModule.drawScale();
    }
  }, 200);
}

function saveFilters() {
  Store.set('filters', {
    types: [...State.filters.types]
  });
}

function updateFilterChipsUI() {
  const checkboxes = document.querySelectorAll('input[name="type-filter"]');
  checkboxes.forEach(cb => {
    const isChecked = State.filters.types.has(cb.value);
    cb.checked = isChecked;
    const chip = cb.closest('.filter-chip');
    if (chip) {
      chip.classList.toggle('unchecked', !isChecked);
    }
  });

  if (D.btnFilterToggle) {
    const isFiltered = State.filters.types.size < ALL_FILTER_TYPES.length;
    D.btnFilterToggle.classList.toggle('has-filter', isFiltered);
    D.btnFilterToggle.title = isFiltered
      ? `ตัวกรองชนิดไฟล์ (เลือก ${State.filters.types.size}/${ALL_FILTER_TYPES.length})`
      : 'ตัวกรองชนิดไฟล์ (Dropdown)';
  }
}

function applyFilterChange() {
  saveFilters();
  renderTree(D.tree);
  updateStat();
  if (State.search.q) {
    SearchEngine.run();
  }
}

function updateStat(currentFile) {
  const allDocFiles = State.flat.filter(n => n.kind === 'file' && isDoc(n.name));
  const filteredFiles = allDocFiles.filter(n => isFileAllowedByFilter(n.name, State.filters && State.filters.types));
  const dirs = State.flat.filter(n => n.kind === 'directory');
  const nmd = filteredFiles.filter(n => isMd(n.name)).length;
  const npdf = filteredFiles.filter(n => isPdf(n.name)).length;
  const nimg = filteredFiles.filter(n => isImg(n.name)).length;
  const ntxt = filteredFiles.filter(n => isTxt(n.name)).length;
  const nhtml = filteredFiles.filter(n => isHtml(n.name)).length;
  const nxml = filteredFiles.filter(n => isXml(n.name)).length;
  const nrdf = filteredFiles.filter(n => isRdf(n.name)).length;
  const total = filteredFiles.length;

  const statTitle = document.getElementById('stat-title');
  const statFilesize = document.getElementById('stat-filesize');
  const progressBar = document.getElementById('sb-progress-bar');

  if (statTitle) {
    if (!State.roots.length) {
      statTitle.textContent = 'ยังไม่ได้เพิ่มโฟลเดอร์';
    } else if (State.filters && State.filters.types && State.filters.types.size === 0) {
      statTitle.textContent = 'ไม่ได้เลือกชนิดไฟล์';
    } else if (!total) {
      statTitle.textContent = allDocFiles.length ? 'ไม่มีไฟล์ตรงตามตัวกรอง' : 'ไม่มีไฟล์';
    } else {
      statTitle.textContent = `สัดส่วนเอกสาร (${total.toLocaleString()} ไฟล์)`;
    }
  }

  if (statFilesize) {
    if (currentFile && typeof currentFile.size === 'number') {
      statFilesize.textContent = fmtBytes(currentFile.size);
      statFilesize.title = `ขนาดไฟล์ปัจจุบัน: ${fmtBytes(currentFile.size)}`;
    } else {
      statFilesize.textContent = '';
      statFilesize.title = '';
    }
  }

  if (progressBar) {
    if (!total) {
      progressBar.innerHTML = '';
      progressBar.title = '';
    } else {
      const segs = [];
      const addSeg = (count, cls, label) => {
        if (!count) return;
        const pct = ((count / total) * 100).toFixed(1);
        segs.push(`<div class="sb-progress-seg ${cls}" style="width:${pct}%" title="${label}: ${count.toLocaleString()} ไฟล์ (${pct}%)"></div>`);
      };
      addSeg(nmd, 'md', '.md');
      addSeg(npdf, 'pdf', '.pdf');
      addSeg(nhtml, 'html', '.html');
      addSeg(ntxt, 'txt', '.txt');
      addSeg(nxml, 'xml', '.xml');
      addSeg(nrdf, 'rdf', '.rdf');
      addSeg(nimg, 'img', 'รูปภาพ');
      progressBar.innerHTML = segs.join('');
    }
  }
}

function renderWsBar() {
  if (!State.roots.length) { D.wsBar.innerHTML = ''; return; }
  D.wsBar.innerHTML = State.roots.map((r, i) =>
    `<span class="ws-chip" title="${esc(r.name)}"><b>${esc(r.name)}</b><button data-i="${i}" title="เอาโฟลเดอร์นี้ออก">×</button></span>`
  ).join('');
}

D.wsBar.addEventListener('click', async e => {
  const b = e.target.closest('button[data-i]');
  if (!b) return;
  const i = +b.dataset.i;
  State.roots.splice(i, 1);
  State.flat = State.flat.filter(n => n.rootIdx !== i);
  for (const n of State.flat) if (n.rootIdx > i) n.rootIdx--;
  State.byPath = new Map(State.flat.map(n => [n.path, n]));
  for (const n of State.flat) if (n.kind !== 'root') n.parent = n.path.includes('/') ? State.byPath.get(n.path.slice(0, n.path.lastIndexOf('/'))) : null;
  for (const n of State.flat) if ((n.kind === 'root' || n.kind === 'directory') && n.kids) n.kids = n.kids.filter(k => k.rootIdx !== i);
  if (State.current && State.current.rootIdx === i) {
    State.current = null;
    switchView('empty');
  }
  SearchEngine.clearCache();
  renderWsBar();
  renderTree(D.tree);
  updateStat();
  await saveWorkspace();
});

function countTextStats(text) {
  if (!text) return { words: 0, chars: 0, lines: 0 };
  let words = 0;
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    try {
      const segmenter = new Intl.Segmenter('th', { granularity: 'word' });
      for (const seg of segmenter.segment(text)) {
        if (seg.isWordLike) words++;
      }
    } catch (e) {
      words = text.trim().split(/\s+/).filter(Boolean).length;
    }
  } else {
    words = text.trim().split(/\s+/).filter(Boolean).length;
  }
  const chars = text.length;
  const lines = text.split(/\r\n|\r|\n/).length;
  return { words, chars, lines };
}

function updateDocInfo(node, file, text) {
  if (!D.btnDocInfo) return;
  D.btnDocInfo.hidden = false;
  if (!node) {
    if (D.docInfoExt) D.docInfoExt.textContent = '-';
    if (D.docInfoName) D.docInfoName.textContent = 'ยังไม่ได้เปิดเอกสาร';
    if (D.docInfoType) D.docInfoType.textContent = 'มาร์คมาก';
    if (D.docInfoPath) D.docInfoPath.textContent = 'กรุณาเลือกไฟล์เอกสารจากรายการด้านซ้าย';
    if (D.docStatWords) D.docStatWords.textContent = '-';
    if (D.docStatChars) D.docStatChars.textContent = '-';
    if (D.docStatLines) D.docStatLines.textContent = '-';
    if (D.docStatSize) D.docStatSize.textContent = '-';
    return;
  }

  const ext = node.name.includes('.') ? ('.' + node.name.split('.').pop().toLowerCase()) : '';
  if (D.docInfoExt) D.docInfoExt.textContent = ext || '.file';
  if (D.docInfoName) {
    D.docInfoName.textContent = node.name;
    D.docInfoName.title = node.name;
  }
  if (D.docInfoPath) {
    D.docInfoPath.textContent = node.path;
    D.docInfoPath.title = node.path;
  }

  let typeLabel = 'เอกสาร';
  if (isMd(node.name)) typeLabel = 'Markdown Document';
  else if (isPdf(node.name)) typeLabel = 'PDF Document';
  else if (isImg(node.name)) typeLabel = `รูปภาพ (${ext.replace('.', '').toUpperCase()})`;
  else if (isTxt(node.name)) typeLabel = 'ข้อความ Text';
  else if (isHtml(node.name)) typeLabel = 'HTML Document';
  else if (isXml(node.name)) typeLabel = 'XML Document';
  else if (isRdf(node.name)) typeLabel = 'RDF / Turtle';
  else if (isCode(node.name)) typeLabel = 'Source Code';
  if (D.docInfoType) D.docInfoType.textContent = typeLabel;

  if (D.docStatSize) D.docStatSize.textContent = fmtBytes(file ? file.size : 0);

  if (isMd(node.name) || isTxt(node.name) || isHtml(node.name) || isXml(node.name) || isRdf(node.name) || isCode(node.name)) {
    const stats = countTextStats(text);
    if (D.docStatWords) D.docStatWords.textContent = stats.words.toLocaleString('th-TH') + ' คำ';
    if (D.docStatChars) D.docStatChars.textContent = '~' + stats.chars.toLocaleString('th-TH') + ' ตัวอักษร';
    if (D.docStatLines) D.docStatLines.textContent = stats.lines.toLocaleString('th-TH') + ' บรรทัด';
  } else if (isPdf(node.name)) {
    if (D.docStatWords) D.docStatWords.textContent = 'เอกสาร PDF';
    if (D.docStatChars) D.docStatChars.textContent = 'PDF File';
    if (D.docStatLines) D.docStatLines.textContent = '-';
  } else if (isImg(node.name)) {
    if (D.docStatWords) D.docStatWords.textContent = 'ไฟล์รูปภาพ';
    if (D.docStatChars) D.docStatChars.textContent = 'Image File';
    if (D.docStatLines) D.docStatLines.textContent = '-';
  } else {
    if (D.docStatWords) D.docStatWords.textContent = '-';
    if (D.docStatChars) D.docStatChars.textContent = '-';
    if (D.docStatLines) D.docStatLines.textContent = '-';
  }
}

export async function openFile(node, opt = {}) {
  if (!node || node.kind !== 'file' || !isDoc(node.name)) return;
  try {
    const hasPerm = await ensurePermission(node);
    if (!hasPerm) {
      alert('กรุณาอนุญาตการเข้าถึงโฟลเดอร์เพื่อเปิดอ่านไฟล์');
      return;
    }

    const file = await node.handle.getFile();
    State.current = node;
    renderTree(D.tree);
    if (D.fileCrumb) D.fileCrumb.textContent = node.path;

    let fileText = '';
    if (isPdf(node.name)) {
      switchView('pdf');
      await PDFViewer.load(file);
      SearchEngine.highlightDoc();
    } else if (isImg(node.name)) {
      switchView('img');
      ImageViewer.render(file, node);
    } else if (isMd(node.name)) {
      switchView('md');
      fileText = await file.text();
      await renderMarkdownContent(fileText, node, D.mdContent, D.tocPanel, D.tocList);
      SearchEngine.highlightDoc();
      if (RulerModule) {
        RulerModule.syncScrollbar();
        RulerModule.clampMargins();
      }
    } else {
      switchView('md');
      fileText = await file.text();
      await renderCodeContent(fileText, node, D.mdContent, D.tocPanel, D.tocList);
      SearchEngine.highlightDoc();
      if (RulerModule) {
        RulerModule.syncScrollbar();
        RulerModule.clampMargins();
      }
    }

    updateDocInfo(node, file, fileText);
    updateStat(file);
    if (!opt.silent && D.mdScrollPane) D.mdScrollPane.scrollTop = 0;
    Store.set('lastFile', node.path);
  } catch (err) {
    console.error('openFile error:', err);
    alert('เปิดไฟล์ไม่สำเร็จ: ' + (err.message || err));
  }
}

async function addFolder() {
  if (!State.hasFSA) {
    alert('เบราว์เซอร์นี้ไม่รองรับ File System Access API — กรุณาใช้ Google Chrome');
    return;
  }
  try {
    const h = await window.showDirectoryPicker({ mode: 'read' });
    for (const r of State.roots) {
      try { if (await r.handle.isSameEntry(h)) return; } catch (e) {}
    }
    State.roots.push({ handle: h, name: h.name });
    await rescanWorkspaces();
    SearchEngine.clearCache();
    expandOnlyFinal();
    renderWsBar();
    renderTree(D.tree);
    updateStat();

    const first = State.flat.find(n => n.kind === 'file' && isDoc(n.name));
    if (first && !State.current) openFile(first, { silent: true });
    await saveWorkspace();
  } catch (err) {
    if (err && err.name !== 'AbortError') console.warn(err);
  }
}

[D.btnAdd, D.btnAdd2].forEach(b => b.addEventListener('click', addFolder));

D.btnFinal.addEventListener('click', () => {
  expandOnlyFinal(saveWorkspace);
  renderTree(D.tree);
});

D.btnCollapseAll.addEventListener('click', () => {
  collapseAllTruly(saveWorkspace);
  renderTree(D.tree);
});

function toggleFilterDropdown(force) {
  if (!D.typeFilterDropdown) return;
  const isHidden = D.typeFilterDropdown.hidden;
  const show = (typeof force === 'boolean') ? force : isHidden;
  D.typeFilterDropdown.hidden = !show;
  if (D.btnFilterToggle) {
    D.btnFilterToggle.classList.toggle('open', show);
  }
}

if (D.btnFilterToggle) {
  D.btnFilterToggle.addEventListener('click', e => {
    e.stopPropagation();
    toggleFilterDropdown();
  });
}

if (D.typeFilterDropdown) {
  D.typeFilterDropdown.addEventListener('click', e => {
    e.stopPropagation();
  });
}

function toggleThemeTools(force) {
  if (!D.themeToolsWrap) return;
  const isOpen = D.themeToolsWrap.classList.contains('open');
  const show = (typeof force === 'boolean') ? force : !isOpen;
  D.themeToolsWrap.classList.toggle('open', show);
  if (D.btnThemeToggle) {
    D.btnThemeToggle.classList.toggle('active', show);
    D.btnThemeToggle.title = show ? 'พับเก็บชุดเครื่องมือปรับธีม' : 'ปรับแต่งธีมและการแสดงผล (คลิกเพื่อขยาย)';
  }
}

if (D.btnThemeToggle) {
  D.btnThemeToggle.addEventListener('click', e => {
    e.stopPropagation();
    toggleThemeTools();
  });
}

if (D.themeToolsContent) {
  D.themeToolsContent.addEventListener('click', e => {
    e.stopPropagation();
  });
}

function toggleDocInfoPopover(force) {
  if (!D.docInfoPopover) return;
  const isHidden = D.docInfoPopover.hidden;
  const show = (typeof force === 'boolean') ? force : isHidden;
  D.docInfoPopover.hidden = !show;
  if (D.btnDocInfo) {
    D.btnDocInfo.classList.toggle('active', show);
  }
}

if (D.btnDocInfo) {
  D.btnDocInfo.addEventListener('click', e => {
    e.stopPropagation();
    toggleDocInfoPopover();
  });
}

if (D.docInfoPopover) {
  D.docInfoPopover.addEventListener('click', e => {
    e.stopPropagation();
  });
}

if (D.btnCopyPath) {
  D.btnCopyPath.addEventListener('click', e => {
    e.stopPropagation();
    if (!State.current) return;
    const path = State.current.path;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(path).catch(() => {});
      }
    } catch (err) {}

    const btn = D.btnCopyPath;
    const origHTML = btn.innerHTML;
    btn.innerHTML = `<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/></svg>`;
    btn.classList.add('copied');
    btn.title = 'คัดลอก Path แล้ว';
    setTimeout(() => {
      btn.innerHTML = origHTML;
      btn.classList.remove('copied');
      btn.title = 'คัดลอก Path';
    }, 1500);
  });
}

document.addEventListener('click', e => {
  if (D.themeToolsWrap && D.themeToolsWrap.classList.contains('open')) {
    if (!e.target.closest('#theme-tools-wrap')) {
      toggleThemeTools(false);
    }
  }
  if (D.typeFilterDropdown && !D.typeFilterDropdown.hidden) {
    if (!e.target.closest('#type-filter-dropdown') && !e.target.closest('#btn-filter-toggle')) {
      toggleFilterDropdown(false);
    }
  }
  if (D.docInfoPopover && !D.docInfoPopover.hidden) {
    if (!e.target.closest('#doc-info-wrap')) {
      toggleDocInfoPopover(false);
    }
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (D.themeToolsWrap && D.themeToolsWrap.classList.contains('open')) {
      toggleThemeTools(false);
    }
    if (D.typeFilterDropdown && !D.typeFilterDropdown.hidden) {
      toggleFilterDropdown(false);
    }
    if (D.docInfoPopover && !D.docInfoPopover.hidden) {
      toggleDocInfoPopover(false);
    }
  }
});

if (D.btnFilterAll) {
  D.btnFilterAll.addEventListener('click', () => {
    State.filters.types = new Set(ALL_FILTER_TYPES);
    updateFilterChipsUI();
    applyFilterChange();
  });
}

if (D.btnFilterNone) {
  D.btnFilterNone.addEventListener('click', () => {
    State.filters.types.clear();
    updateFilterChipsUI();
    applyFilterChange();
  });
}

if (D.btnFilterReset) {
  D.btnFilterReset.addEventListener('click', () => {
    State.filters.types = new Set(ALL_FILTER_TYPES);
    updateFilterChipsUI();
    applyFilterChange();
  });
}

document.querySelectorAll('input[name="type-filter"]').forEach(cb => {
  cb.addEventListener('change', e => {
    const val = e.target.value;
    if (e.target.checked) {
      State.filters.types.add(val);
    } else {
      State.filters.types.delete(val);
    }
    const chip = e.target.closest('.filter-chip');
    if (chip) chip.classList.toggle('unchecked', !e.target.checked);
    applyFilterChange();
  });
});

D.tree.addEventListener('click', e => {
  const row = e.target.closest('.node-row');
  if (!row) return;
  const node = State.byPath.get(row.parentElement.dataset.path);
  if (!node) return;

  if (node.kind === 'root' || node.kind === 'directory') {
    if (node.kids && node.kids.length) {
      if (State.expanded.has(node.path)) {
        State.expanded.delete(node.path);
        State.collapsed.add(node.path);
      } else {
        State.expanded.add(node.path);
        State.collapsed.delete(node.path);
      }
      renderTree(D.tree);
      saveWorkspace();
    }
    return;
  }
  openFile(node);
});

if (D.sbToggle) {
  D.sbToggle.addEventListener('click', () => {
    document.body.classList.toggle('sb-closed');
    updateSbToggleUI();
    saveUi();
    setTimeout(() => {
      if (RulerModule) {
        RulerModule.syncScrollbar();
        RulerModule.clampMargins();
        RulerModule.drawScale();
      }
    }, 200);
  });
}

if (D.tocHeader) {
  D.tocHeader.addEventListener('click', () => toggleTocMini(true));
}
if (D.btnTocCollapse) {
  D.btnTocCollapse.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleTocMini(true);
  });
}
if (D.btnTocExpand) {
  D.btnTocExpand.addEventListener('click', () => toggleTocMini(false));
}
if (D.tocRailLogo && D.sbToggle) {
  D.tocRailLogo.addEventListener('click', () => {
    D.sbToggle.click();
  });
}

document.addEventListener('keydown', e => {
  // Ctrl + B: Toggle Sidebar
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
    e.preventDefault();
    if (D.sbToggle) D.sbToggle.click();
  }
  // Alt + T or Ctrl + Shift + T: Toggle TOC Mini-Rail
  if ((e.altKey && e.key.toLowerCase() === 't') || ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 't')) {
    e.preventDefault();
    toggleTocMini();
  }
});

document.querySelectorAll('.mb-swatch').forEach(b => b.addEventListener('click', () => {
  State.ui.theme = b.dataset.theme;
  applyTheme(D.txColor);
  saveUi();
}));
D.fsInc.addEventListener('click', () => { State.ui.fscale = Math.min(1.8, +(State.ui.fscale + 0.1).toFixed(2)); applyTheme(D.txColor); saveUi(); });
D.fsDec.addEventListener('click', () => { State.ui.fscale = Math.max(0.7, +(State.ui.fscale - 0.1).toFixed(2)); applyTheme(D.txColor); saveUi(); });
D.fsReset.addEventListener('click', () => { State.ui.fscale = 1; applyTheme(D.txColor); saveUi(); });
D.txColor.addEventListener('input', () => { State.ui.tx = D.txColor.value; applyTheme(D.txColor); saveUi(); });
D.txReset.addEventListener('click', () => { State.ui.tx = ''; applyTheme(D.txColor); saveUi(); });

D.mdContent.addEventListener('click', async e => {
  const a = e.target.closest('a.internal');
  if (!a) return;
  e.preventDefault();
  const href = a.getAttribute('href');
  const target = findFileByPath(resolvePath(State.current.path, href));
  if (target && target.kind === 'file' && isDoc(target.name)) {
    openFile(target);
    return;
  }
  if (target && target.kind === 'file') {
    try {
      const file = await target.handle.getFile();
      const url = URL.createObjectURL(file);
      window.open(url, '_blank');
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch (err) {}
    return;
  }
  alert('หาไฟล์ปลายทางไม่พบ: ' + href);
});

export async function initApp() {
  await Store.open();

  PDFViewer.init(D.pdfFrame);
  ImageViewer.init(D.imgPreviewFrame, D.imgMetaBadge);
  SearchEngine.init(D.searchInput, D.searchContent, D.searchInfo, D.mdContent, () => renderTree(D.tree));
  setupSidebarResizer(D.sbResizer, D.sidebar, () => {
    saveUi();
    if (RulerModule) {
      RulerModule.syncScrollbar();
      RulerModule.clampMargins();
      RulerModule.drawScale();
    }
  });

  RulerModule.init(
    D.mdRulerBar,
    D.rulerTrack,
    D.rulerScale,
    D.rulerHandleLeft,
    D.rulerHandleRight,
    D.marginGuideLeft,
    D.marginGuideRight,
    D.mdReaderContainer,
    D.mdScrollPane,
    saveUi
  );

  const ui = await Store.get('ui');
  if (ui) {
    if (ui.sbClosed) document.body.classList.add('sb-closed');
    if (ui.sbWidth && ui.sbWidth >= 200) State.ui.sbWidth = ui.sbWidth;
    if (ui.theme && THEMES.includes(ui.theme)) State.ui.theme = ui.theme;
    if (ui.fscale) State.ui.fscale = ui.fscale;
    if (typeof ui.tx === 'string') State.ui.tx = ui.tx;
    if (typeof ui.padLeft === 'number') State.ui.padLeft = ui.padLeft;
    if (typeof ui.padRight === 'number') State.ui.padRight = ui.padRight;
    if (typeof ui.tocMini === 'boolean') State.ui.tocMini = ui.tocMini;
  }
  applyTheme(D.txColor);
  RulerModule.setMargins(State.ui.padLeft, State.ui.padRight);
  toggleTocMini(!!State.ui.tocMini);
  updateSbToggleUI();

  const savedFilters = await Store.get('filters');
  if (savedFilters && Array.isArray(savedFilters.types)) {
    State.filters.types = new Set(savedFilters.types);
  } else {
    State.filters.types = new Set(ALL_FILTER_TYPES);
  }
  updateFilterChipsUI();

  const rec = await Store.get('workspace');
  if (rec && rec.roots && rec.roots.length) {
    for (const r of rec.roots) State.roots.push({ handle: r.handle, name: r.name });
    await rescanWorkspaces();
    renderWsBar();
    updateStat();

    if (rec.expanded && rec.expanded.length) {
      State.expanded = new Set(rec.expanded.filter(p => State.byPath.has(p)));
      State.collapsed = new Set((rec.collapsed || []).filter(p => State.byPath.has(p)));
    } else {
      State.expanded = getFinalExpandedPaths();
    }
    renderTree(D.tree);

    const lastPath = await Store.get('lastFile');
    if (lastPath) {
      const n = State.byPath.get(lastPath);
      if (n && n.kind === 'file') {
        openFile(n, { silent: true });
        return;
      }
    }
  }

  switchView('empty');
}

initApp();
