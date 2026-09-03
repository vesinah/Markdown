import { Store } from './core/store.js';
import { State } from './core/state.js';
import { rescanWorkspaces, ensurePermission, findFileByPath, resolvePath, requestRootPermission } from './core/fs.js';
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
import { PetManager } from './pet/pet-manager.js';
import { BookmarkStore } from './bookmark/bm-store.js';
import { BookmarkPanel, toggleBookmarkPanel } from './bookmark/bm-panel.js';
import { initHighlights, restoreHighlights, clearHighlights, setActiveDoc } from './bookmark/bm-highlight.js';
import { ViewRouter, switchView, openFile } from './core/router.js';
import { MenubarController } from './ui/menubar.js';
import { DocInfoController } from './ui/doc-info.js';
import { ReadingProgress } from './ui/reading-progress.js';

export { switchView, openFile };

const D = {};
['btn-add', 'btn-add2', 'search-input', 'search-content', 'search-info', 'tree', 'stat-title', 'stat-filesize', 'sb-progress-bar',
 'btn-filter-toggle', 'type-filter-dropdown',
 'btn-filter-all', 'btn-filter-none', 'btn-filter-reset',
 'btn-final', 'btn-collapse-all',
 'sb-toggle', 'sb-resizer', 'sidebar', 'reader-viewport', 'md-view',
 'md-reader-container', 'md-ruler-bar', 'ruler-track', 'ruler-scale', 'ruler-handle-left', 'ruler-handle-right',
 'md-scroll-pane', 'margin-guide-left', 'margin-guide-right', 'md-content',
 'toc-panel', 'toc-header', 'toc-list', 'btn-toc-collapse', 'btn-toc-expand', 'toc-rail-list', 'toc-rail-logo',
 'pdf-view', 'pdf-frame',
 'img-view', 'img-preview-frame', 'img-meta-badge', 'empty-state',
 'fs-dec', 'fs-inc', 'fs-reset', 'tx-color', 'tx-reset',
 'btn-theme-toggle', 'theme-tools-wrap', 'theme-tools-content', 'btn-menubar-pet',
 'btn-doc-info', 'doc-info-popover', 'doc-info-ext', 'doc-info-name', 'doc-info-type',
 'doc-info-path', 'doc-stat-words', 'doc-stat-chars', 'doc-stat-size', 'doc-stat-lines',
 'btn-copy-path', 'doc-info-wrap', 'sb-loading', 'sb-loading-text', 'bm-panel', 'btn-bm-toggle', 'reading-progress-bar']
.forEach(id => D[id.replace(/-(\w)/g, (_, c) => c.toUpperCase())] = document.getElementById(id));

function showLoading(msg) {
  if (D.sbLoading) {
    D.sbLoading.hidden = false;
    if (D.sbLoadingText && msg) D.sbLoadingText.textContent = msg;
  }
  if (D.tree) D.tree.style.display = 'none';
}

function hideLoading() {
  if (D.sbLoading) D.sbLoading.hidden = true;
  if (D.tree) D.tree.style.display = '';
}

async function saveWorkspace() {
  const roots = State.roots.map(r => ({
    name: r.name,
    handle: r.handle,
    addedAt: r.addedAt || Date.now()
  }));
  await Store.set('workspace', {
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
    tocMini: State.ui.tocMini,
    bmOpen: document.body.classList.contains('bm-open')
  });
}

export function toggleTocMini(force) {
  const isMini = (typeof force === 'boolean') ? force : !State.ui.tocMini;
  State.ui.tocMini = isMini;
  if (D.tocPanel) {
    D.tocPanel.classList.toggle('toc-mini', isMini);
  }
  saveUi();
  setTimeout(() => {
    if (RulerModule && RulerModule.drawScale) RulerModule.drawScale();
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
  State.emit('filter:change', State.filters.types);
}

function updateStat(currentFile) {
  const allDocFiles = State.flat.filter(n => n.kind === 'file' && isDoc(n.name));
  const filteredFiles = allDocFiles.filter(n => isFileAllowedByFilter(n.name, State.filters && State.filters.types));
  let nmd = 0, npdf = 0, nimg = 0, ntxt = 0, nhtml = 0, nxml = 0, nrdf = 0;
  for (const n of filteredFiles) {
    const name = n.name;
    if (isMd(name)) nmd++;
    else if (isPdf(name)) npdf++;
    else if (isImg(name)) nimg++;
    else if (isTxt(name)) ntxt++;
    else if (isHtml(name)) nhtml++;
    else if (isXml(name)) nxml++;
    else if (isRdf(name)) nrdf++;
  }
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

export async function removeWorkspaceRoot(rootIdx) {
  const i = rootIdx;
  if (i < 0 || i >= State.roots.length) return;
  State.roots.splice(i, 1);
  State.flat = State.flat.filter(n => n.rootIdx !== i);
  for (const n of State.flat) if (n.rootIdx > i) n.rootIdx--;
  State.byPath = new Map(State.flat.map(n => [n.path, n]));
  for (const n of State.flat) if (n.kind !== 'root') n.parent = n.path.includes('/') ? State.byPath.get(n.path.slice(0, n.path.lastIndexOf('/'))) : null;
  for (const n of State.flat) if ((n.kind === 'root' || n.kind === 'directory') && n.kids) n.kids = n.kids.filter(k => k.rootIdx !== i);

  for (const p of State.expanded) {
    if (!State.byPath.has(p)) State.expanded.delete(p);
  }
  for (const p of State.collapsed) {
    if (!State.byPath.has(p)) State.collapsed.delete(p);
  }

  if (State.current && (State.current.rootIdx === i || !State.byPath.has(State.current.path))) {
    ViewRouter.closeCurrentFile();
  }
  SearchEngine.clearCache();
  if (State.search.q) {
    SearchEngine.run();
  }
  renderTree(D.tree);
  updateStat();
  await saveWorkspace();
}

export async function unlockAndReloadWorkspace(rootIdx) {
  const ok = await requestRootPermission(rootIdx);
  if (!ok) {
    alert('ไม่ได้รับการอนุญาตเข้าถึงโฟลเดอร์ กรุณากดยินยอมในหน้าต่างแจ้งเตือนของเบราว์เซอร์');
    return false;
  }
  showLoading('กำลังสแกนไฟล์...');
  await rescanWorkspaces();
  expandOnlyFinal();
  hideLoading();
  renderTree(D.tree);
  updateStat();
  await saveWorkspace();

  const lastPath = await Store.get('lastFile');
  if (lastPath && !State.current) {
    const n = State.byPath.get(lastPath);
    if (n && n.kind === 'file') {
      openFile(n, { silent: true });
    }
  } else if (!State.current) {
    const first = State.flat.find(n => n.kind === 'file' && isDoc(n.name));
    if (first) openFile(first, { silent: true });
  }
  return true;
}

async function addFolder() {
  if (!State.hasFSA) {
    alert('เบราว์เซอร์นี้ไม่รองรับ File System Access API — กรุณาใช้ Google Chrome');
    return;
  }
  try {
    const h = await window.showDirectoryPicker({ mode: 'read' });
    for (const r of State.roots) {
      try { if (await r.handle.isSameEntry(h)) return; } catch (e) { console.warn('[app] isSameEntry check failed:', e.message); }
    }
    State.roots.push({ handle: h, name: h.name, addedAt: Date.now(), isLocked: false, permission: 'granted' });
    showLoading('กำลังสแกนไฟล์...');
    await rescanWorkspaces();
    SearchEngine.clearCache();
    expandOnlyFinal();
    hideLoading();
    renderTree(D.tree);
    updateStat();

    const first = State.flat.find(n => n.kind === 'file' && isDoc(n.name));
    if (first && !State.current) openFile(first, { silent: true });
    await saveWorkspace();
  } catch (err) {
    if (err && err.name !== 'AbortError') console.warn(err);
  }
}

if (D.btnAdd) D.btnAdd.addEventListener('click', addFolder);
if (D.btnAdd2) D.btnAdd2.addEventListener('click', addFolder);

if (D.btnFinal) {
  D.btnFinal.addEventListener('click', () => {
    expandOnlyFinal(saveWorkspace);
    renderTree(D.tree);
  });
}

if (D.btnCollapseAll) {
  D.btnCollapseAll.addEventListener('click', () => {
    collapseAllTruly(saveWorkspace);
    renderTree(D.tree);
  });
}

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

document.addEventListener('click', e => {
  if (D.typeFilterDropdown && !D.typeFilterDropdown.hidden) {
    if (!e.target.closest('#type-filter-dropdown') && !e.target.closest('#btn-filter-toggle')) {
      toggleFilterDropdown(false);
    }
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (D.typeFilterDropdown && !D.typeFilterDropdown.hidden) {
      toggleFilterDropdown(false);
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

if (D.tree) {
  D.tree.addEventListener('click', async e => {
    const delBtn = e.target.closest('.btn-root-del');
    if (delBtn) {
      e.stopPropagation();
      const rootIdx = +delBtn.dataset.rootIdx;
      await removeWorkspaceRoot(rootIdx);
      return;
    }

    const row = e.target.closest('.node-row');
    if (!row) return;
    const node = State.byPath.get(row.parentElement.dataset.path);
    if (!node) return;

    if (node.kind === 'root') {
      if (node.isLocked && node.rootIdx !== undefined) {
        await unlockAndReloadWorkspace(node.rootIdx);
        return;
      }
      if (node.kids && node.kids.length) {
        if (State.expanded.has(node.path)) {
          State.expanded.delete(node.path);
          State.collapsed.add(node.path);
        } else {
          State.expanded.add(node.path);
          State.collapsed.delete(node.path);
        }
        renderTree(D.tree);
        await saveWorkspace();
      }
      return;
    }

    if (node.kind === 'directory') {
      if (node.kids && node.kids.length) {
        if (State.expanded.has(node.path)) {
          State.expanded.delete(node.path);
          State.collapsed.add(node.path);
        } else {
          State.expanded.add(node.path);
          State.collapsed.delete(node.path);
        }
        renderTree(D.tree);
        await saveWorkspace();
      }
      return;
    }
    openFile(node);
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

export function factoryResetUI() {
  State.ui.theme = 'light';
  State.ui.fscale = 1;
  State.ui.tx = '';
  State.ui.sbWidth = 320;
  State.ui.sbClosed = false;
  State.ui.tocMini = false;
  State.ui.padLeft = 60;
  State.ui.padRight = 60;

  document.body.classList.remove('sb-closed');
  if (D.txColor) D.txColor.value = '#1f2328';
  applyTheme(D.txColor);
  RulerModule.setMargins(60, 60, false);
  toggleTocMini(false);
  MenubarController.updateSbToggleUI();
  RulerModule.drawScale();
  saveUi();
}

document.addEventListener('keydown', e => {
  // Alt + T or Ctrl + Shift + T: Toggle TOC Mini-Rail
  if ((e.altKey && e.key.toLowerCase() === 't') || ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 't')) {
    e.preventDefault();
    toggleTocMini();
  }
  // Ctrl + Alt + R: Emergency Factory Reset
  if ((e.ctrlKey || e.metaKey) && e.altKey && e.key.toLowerCase() === 'r') {
    e.preventDefault();
    factoryResetUI();
    alert('รีเซ็ตการแสดงผลและระยะขอบทั้งหมดสู่ค่าเริ่มต้น (Factory Reset) เรียบร้อยแล้ว');
  }
});

if (D.mdContent) {
  D.mdContent.addEventListener('click', async e => {
    const a = e.target.closest('a.internal');
    if (!a) return;
    e.preventDefault();
    const href = a.getAttribute('href');
    if (!State.current) return;
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
      } catch (err) { console.warn('[app] Failed to open file in new tab:', err.message); }
      return;
    }
    alert('หาไฟล์ปลายทางไม่พบ: ' + href);
  });
}

export async function initApp() {
  await Store.open();
  await BookmarkStore.open();

  // Initialize ViewRouter
  ViewRouter.init(D, {
    renderTree: () => renderTree(D.tree),
    updateStat
  });

  // Bookmark & Comment System
  BookmarkPanel.init();
  initHighlights();

  // Initialize Subsystem Controllers
  MenubarController.init(D, {
    saveUi,
    drawScale: () => RulerModule.drawScale()
  });

  DocInfoController.init(D);
  ReadingProgress.init(D.readingProgressBar, D.mdScrollPane);

  PDFViewer.init(D.pdfFrame);
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
  window.RulerModule = RulerModule;

  const ui = await Store.get('ui');
  if (ui) {
    if (ui.sbClosed) document.body.classList.add('sb-closed');
    if (ui.sbWidth && ui.sbWidth >= 200) State.ui.sbWidth = ui.sbWidth;
    if (ui.theme && THEMES.includes(ui.theme)) State.ui.theme = ui.theme;
    if (ui.fscale) State.ui.fscale = ui.fscale;
    if (typeof ui.tx === 'string') State.ui.tx = ui.tx;
    if (typeof ui.padLeft === 'number' && !isNaN(ui.padLeft) && ui.padLeft >= 16 && ui.padLeft <= 400) {
      State.ui.padLeft = ui.padLeft;
    } else {
      State.ui.padLeft = 60;
    }
    if (typeof ui.padRight === 'number' && !isNaN(ui.padRight) && ui.padRight >= 16 && ui.padRight <= 400) {
      State.ui.padRight = ui.padRight;
    } else {
      State.ui.padRight = 60;
    }
    if (typeof ui.tocMini === 'boolean') State.ui.tocMini = ui.tocMini;
    if (typeof ui.bmOpen === 'boolean' && ui.bmOpen) toggleBookmarkPanel(true);
  }
  applyTheme(D.txColor);
  RulerModule.setMargins(State.ui.padLeft, State.ui.padRight, false);
  toggleTocMini(!!State.ui.tocMini);
  MenubarController.updateSbToggleUI();

  // Desktop Pets Integration
  PetManager.init();

  const savedFilters = await Store.get('filters');
  if (savedFilters && Array.isArray(savedFilters.types)) {
    State.filters.types = new Set(savedFilters.types);
  } else {
    State.filters.types = new Set(ALL_FILTER_TYPES);
  }
  updateFilterChipsUI();

  const rec = await Store.get('workspace');
  if (rec && rec.roots && rec.roots.length) {
    for (const r of rec.roots) {
      if (r && r.handle) {
        State.roots.push({
          handle: r.handle,
          name: r.name,
          addedAt: r.addedAt || Date.now(),
          isLocked: true,
          permission: 'prompt'
        });
      }
    }
    showLoading('กำลังสแกนไฟล์...');
    await rescanWorkspaces();
    updateStat();

    if (rec.expanded && rec.expanded.length) {
      State.expanded = new Set(rec.expanded.filter(p => State.byPath.has(p)));
      State.collapsed = new Set((rec.collapsed || []).filter(p => State.byPath.has(p)));
    } else {
      State.expanded = getFinalExpandedPaths();
    }
    hideLoading();
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

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  initApp();
}
