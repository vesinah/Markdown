import { State } from '../core/state.js';

export const PDFViewer = {
  container: null,
  pageNumInput: null,
  pageTotalEl: null,
  zoomValEl: null,
  btnPrev: null,
  btnNext: null,
  currentDoc: null,
  renderTasks: new Map(),

  init(container, pageNumInput, pageTotalEl, zoomValEl, btnPrev, btnNext) {
    this.container = container;
    this.pageNumInput = pageNumInput;
    this.pageTotalEl = pageTotalEl;
    this.zoomValEl = zoomValEl;
    this.btnPrev = btnPrev;
    this.btnNext = btnNext;

    if (this.btnPrev) this.btnPrev.onclick = () => this.prevPage();
    if (this.btnNext) this.btnNext.onclick = () => this.nextPage();
    if (this.pageNumInput) {
      this.pageNumInput.onchange = () => {
        const p = parseInt(this.pageNumInput.value, 10);
        if (p >= 1 && p <= State.pdf.totalPages) this.jumpToPage(p);
      };
    }
    if (this.container) {
      this.container.addEventListener('scroll', () => this.onScroll());
    }
  },

  async load(file) {
    this.cancelAllRenders();
    this.container.innerHTML = '<div style="padding:40px;color:var(--text2);text-align:center;">กำลังโหลด PDF...</div>';
    try {
      const arrayBuffer = await file.arrayBuffer();
      if (!window.pdfjsLib) {
        this.container.innerHTML = '<div style="padding:40px;color:#cf222e;text-align:center;">ไม่พบ PDF.js library</div>';
        return;
      }
      const data = new Uint8Array(arrayBuffer);
      const loadingTask = window.pdfjsLib.getDocument({ data });
      const doc = await loadingTask.promise;
      this.currentDoc = doc;
      State.pdf.doc = doc;
      State.pdf.totalPages = doc.numPages;
      State.pdf.pageNum = 1;
      State.pdf.scale = 1.2;

      this.updateToolbar();
      await this.renderAllPages();
    } catch (err) {
      console.error('PDF load error:', err);
      this.container.innerHTML = `<div style="padding:40px;color:#cf222e;text-align:center;">โหลด PDF ไม่สำเร็จ: ${err.message || err}</div>`;
    }
  },

  cancelAllRenders() {
    this.renderTasks.forEach(task => {
      try { task.cancel(); } catch (e) {}
    });
    this.renderTasks.clear();
  },

  updateToolbar() {
    if (this.pageNumInput) this.pageNumInput.value = State.pdf.pageNum;
    if (this.pageTotalEl) this.pageTotalEl.textContent = `/ ${State.pdf.totalPages}`;
    if (this.zoomValEl) this.zoomValEl.textContent = `${Math.round(State.pdf.scale * 100)}%`;
    if (this.btnPrev) this.btnPrev.disabled = State.pdf.pageNum <= 1;
    if (this.btnNext) this.btnNext.disabled = State.pdf.pageNum >= State.pdf.totalPages;
  },

  async renderAllPages() {
    if (!this.currentDoc) return;
    this.cancelAllRenders();
    this.container.innerHTML = '';

    for (let i = 1; i <= State.pdf.totalPages; i++) {
      const pageWrapper = document.createElement('div');
      pageWrapper.className = 'pdf-page-wrapper';
      pageWrapper.id = `pdf-page-${i}`;
      pageWrapper.dataset.pageNumber = i;

      const canvas = document.createElement('canvas');
      pageWrapper.appendChild(canvas);
      this.container.appendChild(pageWrapper);

      await this.renderPage(i, pageWrapper, canvas);
    }
  },

  async renderPage(pageNumber, wrapper, canvas) {
    if (!this.currentDoc) return;
    try {
      const page = await this.currentDoc.getPage(pageNumber);
      const viewport = page.getViewport({ scale: State.pdf.scale });
      const outputScale = window.devicePixelRatio || 1;

      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = Math.floor(viewport.width) + 'px';
      canvas.style.height = Math.floor(viewport.height) + 'px';

      wrapper.style.width = Math.floor(viewport.width) + 'px';
      wrapper.style.height = Math.floor(viewport.height) + 'px';

      const ctx = canvas.getContext('2d');
      ctx.scale(outputScale, outputScale);

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };
      const renderTask = page.render(renderContext);
      this.renderTasks.set(pageNumber, renderTask);
      await renderTask.promise;
    } catch (e) {
      if (e && e.name === 'RenderingCancelledException') return;
      console.warn(`Render PDF page ${pageNumber} error:`, e);
    }
  },

  zoomIn() {
    State.pdf.scale = Math.min(3.0, +(State.pdf.scale + 0.15).toFixed(2));
    this.updateToolbar();
    this.renderAllPages();
  },

  zoomOut() {
    State.pdf.scale = Math.max(0.4, +(State.pdf.scale - 0.15).toFixed(2));
    this.updateToolbar();
    this.renderAllPages();
  },

  zoomReset() {
    State.pdf.scale = 1.2;
    this.updateToolbar();
    this.renderAllPages();
  },

  fitWidth() {
    if (!this.container) return;
    const containerW = this.container.clientWidth - 48;
    if (this.currentDoc && containerW > 200) {
      this.currentDoc.getPage(1).then(page => {
        const unscaledViewport = page.getViewport({ scale: 1.0 });
        State.pdf.scale = Math.max(0.5, Math.min(2.5, +(containerW / unscaledViewport.width).toFixed(2)));
        this.updateToolbar();
        this.renderAllPages();
      });
    }
  },

  jumpToPage(num) {
    const el = document.getElementById(`pdf-page-${num}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      State.pdf.pageNum = num;
      this.updateToolbar();
    }
  },

  prevPage() {
    if (State.pdf.pageNum > 1) {
      this.jumpToPage(State.pdf.pageNum - 1);
    }
  },

  nextPage() {
    if (State.pdf.pageNum < State.pdf.totalPages) {
      this.jumpToPage(State.pdf.pageNum + 1);
    }
  },

  onScroll() {
    const wrappers = this.container.querySelectorAll('.pdf-page-wrapper');
    const containerTop = this.container.scrollTop + 60;
    for (const w of wrappers) {
      if (w.offsetTop + w.offsetHeight >= containerTop) {
        const p = parseInt(w.dataset.pageNumber, 10);
        if (p && p !== State.pdf.pageNum) {
          State.pdf.pageNum = p;
          this.updateToolbar();
        }
        break;
      }
    }
  }
};
