import { State } from '../core/state.js';

let progressEl = null;
let scrollPaneEl = null;

export const ReadingProgress = {
  init(barEl, paneEl) {
    progressEl = barEl;
    scrollPaneEl = paneEl;
    if (!progressEl || !scrollPaneEl) return;

    scrollPaneEl.addEventListener('scroll', () => this.update(), { passive: true });
    window.addEventListener('resize', () => this.update(), { passive: true });

    State.on('file:open', () => {
      this.reset();
      setTimeout(() => this.update(), 150);
    });

    State.on('view:switch', (type) => {
      if (type !== 'md') {
        if (progressEl) progressEl.style.width = '0%';
      } else {
        setTimeout(() => this.update(), 100);
      }
    });
  },

  update() {
    if (!progressEl || !scrollPaneEl) return;
    const max = scrollPaneEl.scrollHeight - scrollPaneEl.clientHeight;
    if (max <= 5) {
      progressEl.style.width = '0%';
      progressEl.classList.remove('active');
      return;
    }
    const current = scrollPaneEl.scrollTop;
    const pct = Math.min(100, Math.max(0, (current / max) * 100));
    progressEl.style.width = pct.toFixed(1) + '%';
    progressEl.classList.toggle('active', pct > 0 && pct < 100);
    State.emit('reading:progress', pct);
  },

  reset() {
    if (progressEl) {
      progressEl.style.width = '0%';
      progressEl.classList.remove('active');
    }
  }
};
