import { State } from '../core/state.js';

export const PDFViewer = {
  frame: null,
  currentUrl: null,

  init(frame) {
    this.frame = frame;
  },

  async load(file) {
    this.unload();
    try {
      let arrayBuffer;
      if (typeof file === 'string') {
        const resp = await fetch(file);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}: ${resp.statusText}`);
        arrayBuffer = await resp.arrayBuffer();
      } else {
        arrayBuffer = await file.arrayBuffer();
      }
      const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
      this.currentUrl = URL.createObjectURL(blob);
      if (this.frame) {
        this.frame.src = this.currentUrl;
      }
    } catch (err) {
      console.error('PDF load error:', err);
      if (this.frame) {
        this.frame.src = 'about:blank';
      }
    }
  },

  jumpToPage(num) {
    if (this.frame && this.currentUrl) {
      this.frame.src = `${this.currentUrl}#page=${num}`;
    }
  },

  unload() {
    if (this.currentUrl) {
      URL.revokeObjectURL(this.currentUrl);
      this.currentUrl = null;
    }
    if (this.frame) {
      this.frame.src = 'about:blank';
    }
  }
};
