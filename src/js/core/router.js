import { State } from './state.js';
import { Store } from './store.js';
import { ensurePermission } from './fs.js';
import { isMd, isPdf, isImg, isDoc } from '../tree/tree-node.js';
import { renderMarkdownContent, renderCodeContent } from '../reader/markdown.js';
import { PDFViewer } from '../reader/pdf-engine.js';
import { ImageViewer } from '../reader/img-engine.js';
import { SearchEngine } from '../search/search.js';
import { RulerModule } from '../ui/ruler.js';
import { BookmarkPanel } from '../bookmark/bm-panel.js';
import { setActiveDoc, restoreHighlights, clearHighlights } from '../bookmark/bm-highlight.js';
import { PetManager } from '../pet/pet-manager.js';

let _routerD = null;
let renderTreeCallback = () => {};
let updateStatCallback = () => {};

export const ViewRouter = {
  init(domMap, options = {}) {
    _routerD = domMap;
    renderTreeCallback = options.renderTree || (() => {});
    updateStatCallback = options.updateStat || (() => {});
  },

  switchView(type) {
    if (!_routerD) return;
    if (_routerD.mdView) _routerD.mdView.hidden = (type !== 'md');
    if (_routerD.pdfView) _routerD.pdfView.hidden = (type !== 'pdf');
    if (_routerD.imgView) _routerD.imgView.hidden = (type !== 'img');
    if (_routerD.emptyState) _routerD.emptyState.style.display = (type === 'empty') ? 'flex' : 'none';

    if (type === 'empty') {
      if (_routerD.docInfoPopover) _routerD.docInfoPopover.hidden = true;
    }
    if (type === 'md') {
      setTimeout(() => {
        if (RulerModule && RulerModule.drawScale) RulerModule.drawScale();
      }, 50);
    }
    State.emit('view:switch', type);
  },

  async openFile(node, opt = {}) {
    if (!node || node.kind !== 'file' || !isDoc(node.name)) return;
    try {
      const hasPerm = await ensurePermission(node);
      if (!hasPerm) {
        alert('กรุณาอนุญาตการเข้าถึงโฟลเดอร์เพื่อเปิดอ่านไฟล์');
        return;
      }

      const file = await node.handle.getFile();
      State.current = node;
      renderTreeCallback();
      if (_routerD && _routerD.fileCrumb) _routerD.fileCrumb.textContent = node.path;

      let fileText = '';
      if (isPdf(node.name)) {
        this.switchView('pdf');
        await PDFViewer.load(file);
        if (SearchEngine && SearchEngine.highlightDoc) SearchEngine.highlightDoc();
        setActiveDoc(null);
        clearHighlights();
      } else if (isImg(node.name)) {
        this.switchView('img');
        ImageViewer.render(file, node);
        setActiveDoc(null);
        clearHighlights();
      } else if (isMd(node.name)) {
        this.switchView('md');
        fileText = await file.text();
        await renderMarkdownContent(fileText, node, _routerD.mdContent, _routerD.tocPanel, _routerD.tocList);
        if (SearchEngine && SearchEngine.highlightDoc) SearchEngine.highlightDoc();
        setActiveDoc(node, file);
        await restoreHighlights();
      } else {
        this.switchView('md');
        fileText = await file.text();
        await renderCodeContent(fileText, node, _routerD.mdContent, _routerD.tocPanel, _routerD.tocList);
        if (SearchEngine && SearchEngine.highlightDoc) SearchEngine.highlightDoc();
        setActiveDoc(node, file);
        await restoreHighlights();
      }

      updateStatCallback(file);
      if (!opt.silent && _routerD && _routerD.mdScrollPane) _routerD.mdScrollPane.scrollTop = 0;
      await Store.set('lastFile', node.path);
      if (PetManager && PetManager.onDocumentOpened) PetManager.onDocumentOpened(node);
      if (document.body.classList.contains('bm-open') && BookmarkPanel && BookmarkPanel.refresh) {
        BookmarkPanel.refresh();
      }

      State.emit('file:open', { node, file, fileText });
    } catch (err) {
      console.error('[router] openFile error:', err);
      alert('เปิดไฟล์ไม่สำเร็จ: ' + (err.message || err));
    }
  },

  closeCurrentFile() {
    State.current = null;
    this.switchView('empty');
    updateStatCallback(null);
    Store.set('lastFile', '');
    State.emit('file:close');
  }
};

export const switchView = (type) => ViewRouter.switchView(type);
export const openFile = (node, opt) => ViewRouter.openFile(node, opt);
