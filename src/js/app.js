import { Store } from './core/store.js';
import { State } from './core/state.js';
import { rescanWorkspaces, ensurePermission, findFileByPath, resolvePath } from './core/fs.js';
import { isMd, isPdf, isImg, isDoc, fmtBytes, esc } from './tree/tree-node.js';
import { getFinalExpandedPaths, expandOnlyFinal, collapseAllTruly } from './tree/tree-exp.js';
import { renderTree } from './tree/tree-ui.js';
import { renderMarkdownContent } from './reader/markdown.js';
import { PDFViewer } from './reader/pdf-engine.js';
import { ImageViewer } from './reader/img-engine.js';
import { SearchEngine } from './search/search.js';
import { setupSidebarResizer } from './ui/resizer.js';
import { RulerModule } from './ui/ruler.js';
import { applyTheme, THEMES } from './ui/theme.js';

const D = {};
['btn-add', 'btn-add2', 'search-input', 'search-content', 'search-info', 'ws-bar', 'tree', 'stat',
 'btn-final', 'btn-collapse-all',
 'sb-toggle', 'sb-resizer', 'sidebar', 'reader-viewport', 'md-view',
 'md-reader-container', 'md-ruler-bar', 'ruler-track', 'ruler-scale', 'ruler-handle-left', 'ruler-handle-right',
 'md-scroll-pane', 'margin-guide-left', 'margin-guide-right', 'md-content', 'toc-panel', 'toc-list',
 'pdf-view', 'pdf-canvas-container', 'pdf-page-num', 'pdf-total-pages', 'pdf-zoom-val', 'pdf-prev', 'pdf-next',
 'pdf-zoom-in', 'pdf-zoom-out', 'pdf-zoom-reset', 'pdf-fit-width',
 'img-view', 'img-preview-frame', 'img-meta-badge', 'empty-state',
 'file-crumb', 'fs-dec', 'fs-inc', 'fs-reset', 'tx-color', 'tx-reset']
.forEach(id => D[id.replace(/-(\w)/g, (_, c) => c.toUpperCase())] = document.getElementById(id));

export function switchView(type) {
  D.mdView.hidden = (type !== 'md');
  D.pdfView.hidden = (type !== 'pdf');
  D.imgView.hidden = (type !== 'img');
  D.emptyState.style.display = (type === 'empty') ? 'flex' : 'none';
  if (type === 'md') {
    setTimeout(() => RulerModule.drawScale(), 50);
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
    padRight: State.ui.padRight
  });
}

function updateStat(currentFile) {
  const files = State.flat.filter(n => n.kind === 'file' && isDoc(n.name));
  const dirs = State.flat.filter(n => n.kind === 'directory');
  const nmd = files.filter(n => isMd(n.name)).length;
  const npdf = files.filter(n => isPdf(n.name)).length;
  const nimg = files.filter(n => isImg(n.name)).length;

  let info = `${nmd} .md · ${npdf} .pdf`;
  if (nimg) info += ` · ${nimg} รูปภาพ`;
  
  if (currentFile) {
    D.stat.textContent = State.roots.length
      ? `${State.roots.length} โฟลเดอร์ · ${dirs.length} โฟลเดอร์ย่อย · ${info} — ไฟล์ปัจจุบัน ${fmtBytes(currentFile.size)}`
      : `ไฟล์ปัจจุบัน ${fmtBytes(currentFile.size)}`;
  } else {
    D.stat.textContent = State.roots.length
      ? `${State.roots.length} โฟลเดอร์ · ${dirs.length} โฟลเดอร์ย่อย · ${info}`
      : '';
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
  renderWsBar();
  renderTree(D.tree);
  updateStat();
  await saveWorkspace();
});

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
    D.fileCrumb.textContent = node.path;

    if (isPdf(node.name)) {
      switchView('pdf');
      PDFViewer.load(file);
    } else if (isImg(node.name)) {
      switchView('img');
      ImageViewer.render(file, node);
    } else {
      switchView('md');
      const text = await file.text();
      await renderMarkdownContent(text, node, D.mdContent, D.tocPanel, D.tocList);
      SearchEngine.highlightDoc();
    }

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

D.sbToggle.addEventListener('click', () => {
  document.body.classList.toggle('sb-closed');
  saveUi();
  setTimeout(() => RulerModule.drawScale(), 200);
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

D.pdfZoomIn.addEventListener('click', () => PDFViewer.zoomIn());
D.pdfZoomOut.addEventListener('click', () => PDFViewer.zoomOut());
D.pdfZoomReset.addEventListener('click', () => PDFViewer.zoomReset());
D.pdfFitWidth.addEventListener('click', () => PDFViewer.fitWidth());

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

  PDFViewer.init(D.pdfCanvasContainer, D.pdfPageNum, D.pdfTotalPages, D.pdfZoomVal, D.pdfPrev, D.pdfNext);
  ImageViewer.init(D.imgPreviewFrame, D.imgMetaBadge);
  SearchEngine.init(D.searchInput, D.searchContent, D.searchInfo, D.mdContent, () => renderTree(D.tree));
  setupSidebarResizer(D.sbResizer, D.sidebar, () => {
    saveUi();
    RulerModule.drawScale();
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
  }
  applyTheme(D.txColor);
  RulerModule.setMargins(State.ui.padLeft, State.ui.padRight);

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
