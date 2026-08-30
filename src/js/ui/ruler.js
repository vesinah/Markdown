import { State } from '../core/state.js';

export const RulerModule = {
  rulerBar: null,
  rulerTrack: null,
  rulerScale: null,
  handleLeft: null,
  handleRight: null,
  guideLeft: null,
  guideRight: null,
  container: null,
  scrollPane: null,
  onSaveUi: null,

  defaultPadLeft: 60,
  defaultPadRight: 60,
  minContentWidth: 180,

  init(rulerBar, rulerTrack, rulerScale, handleLeft, handleRight, guideLeft, guideRight, container, scrollPane, onSaveUi) {
    this.rulerBar = rulerBar;
    this.rulerTrack = rulerTrack;
    this.rulerScale = rulerScale;
    this.handleLeft = handleLeft;
    this.handleRight = handleRight;
    this.guideLeft = guideLeft;
    this.guideRight = guideRight;
    this.container = container;
    this.scrollPane = scrollPane;
    this.onSaveUi = onSaveUi;

    if (!this.rulerTrack) return;

    this.setupInteractions();
    this.drawScale();

    window.addEventListener('resize', () => {
      this.drawScale();
    });
  },

  setMargins(padLeft, padRight, save = true) {
    const l = (typeof padLeft === 'number' && !isNaN(padLeft)) ? Math.max(16, Math.round(padLeft)) : this.defaultPadLeft;
    const r = (typeof padRight === 'number' && !isNaN(padRight)) ? Math.max(16, Math.round(padRight)) : this.defaultPadRight;
    
    State.ui.padLeft = l;
    State.ui.padRight = r;

    document.documentElement.style.setProperty('--md-pad-left', l + 'px');
    document.documentElement.style.setProperty('--md-pad-right', r + 'px');

    if (save && this.onSaveUi) {
      this.onSaveUi();
    }
  },

  drawScale() {
    if (!this.rulerScale || !this.rulerTrack) return;
    const width = this.rulerTrack.clientWidth || window.innerWidth;
    if (width <= 0) return;

    let svgHtml = `<svg width="${width}" height="20" xmlns="http://www.w3.org/2000/svg">`;
    svgHtml += `<line x1="0" y1="19" x2="${width}" y2="19" stroke="var(--border2)" stroke-width="1"/>`;

    for (let x = 0; x <= width; x += 10) {
      if (x % 100 === 0) {
        svgHtml += `<line x1="${x}" y1="8" x2="${x}" y2="19" stroke="var(--text3)" stroke-width="1"/>`;
        if (x > 0 && x < width - 24) {
          svgHtml += `<text x="${x + 3}" y="9" font-size="8.5" fill="var(--text3)" font-family="sans-serif">${x}</text>`;
        }
      } else if (x % 50 === 0) {
        svgHtml += `<line x1="${x}" y1="12" x2="${x}" y2="19" stroke="var(--text3)" stroke-width="1"/>`;
      } else {
        svgHtml += `<line x1="${x}" y1="15" x2="${x}" y2="19" stroke="var(--border)" stroke-width="1"/>`;
      }
    }

    svgHtml += '</svg>';
    this.rulerScale.innerHTML = svgHtml;
  },

  setupInteractions() {
    let activeDrag = null;

    const startDrag = (type, e) => {
      activeDrag = type;
      document.body.classList.add('dragging-ruler');
      if (type === 'left' && this.handleLeft) this.handleLeft.classList.add('dragging');
      if (type === 'right' && this.handleRight) this.handleRight.classList.add('dragging');

      window.addEventListener('mousemove', onMouseMove, { passive: false });
      window.addEventListener('mouseup', onMouseUp, { once: true });
    };

    const onMouseMove = e => {
      if (!activeDrag || !this.rulerTrack) return;
      const rect = this.rulerTrack.getBoundingClientRect();
      const trackWidth = rect.width;
      if (trackWidth <= 0) return;

      const mouseX = e.clientX - rect.left;

      if (activeDrag === 'left') {
        const curRight = (typeof State.ui.padRight === 'number') ? State.ui.padRight : this.defaultPadRight;
        const maxLeft = Math.max(16, trackWidth - curRight - this.minContentWidth);
        const newLeft = Math.max(16, Math.min(maxLeft, Math.round(mouseX)));
        this.setMargins(newLeft, curRight, false);
      } else if (activeDrag === 'right') {
        const curLeft = (typeof State.ui.padLeft === 'number') ? State.ui.padLeft : this.defaultPadLeft;
        const maxRight = Math.max(16, trackWidth - curLeft - this.minContentWidth);
        const rightPos = trackWidth - mouseX;
        const newRight = Math.max(16, Math.min(maxRight, Math.round(rightPos)));
        this.setMargins(curLeft, newRight, false);
      }
    };

    const onMouseUp = () => {
      document.body.classList.remove('dragging-ruler');
      if (this.handleLeft) this.handleLeft.classList.remove('dragging');
      if (this.handleRight) this.handleRight.classList.remove('dragging');
      activeDrag = null;

      window.removeEventListener('mousemove', onMouseMove);

      if (this.onSaveUi) this.onSaveUi();
    };

    // 1. Direct handle drag
    if (this.handleLeft) {
      this.handleLeft.addEventListener('mousedown', e => {
        if (e.button !== 0) return;
        startDrag('left', e);
      });
    }

    if (this.handleRight) {
      this.handleRight.addEventListener('mousedown', e => {
        if (e.button !== 0) return;
        startDrag('right', e);
      });
    }

    // 2. Track click to jump & drag
    if (this.rulerTrack) {
      this.rulerTrack.addEventListener('mousedown', e => {
        if (e.button !== 0) return;
        if (e.target.closest('.ruler-handle')) return;

        const rect = this.rulerTrack.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const trackWidth = rect.width;
        if (trackWidth <= 0) return;

        const curLeft = (typeof State.ui.padLeft === 'number') ? State.ui.padLeft : this.defaultPadLeft;
        const curRight = (typeof State.ui.padRight === 'number') ? State.ui.padRight : this.defaultPadRight;
        const rightPos = trackWidth - curRight;

        const distLeft = Math.abs(mouseX - curLeft);
        const distRight = Math.abs(mouseX - rightPos);

        if (distLeft <= distRight) {
          const maxLeft = Math.max(16, trackWidth - curRight - this.minContentWidth);
          const newLeft = Math.max(16, Math.min(maxLeft, Math.round(mouseX)));
          this.setMargins(newLeft, curRight, false);
          startDrag('left', e);
        } else {
          const maxRight = Math.max(16, trackWidth - curLeft - this.minContentWidth);
          const newRightPos = trackWidth - mouseX;
          const newRight = Math.max(16, Math.min(maxRight, Math.round(newRightPos)));
          this.setMargins(curLeft, newRight, false);
          startDrag('right', e);
        }
      });
    }

    // 3. Double click to reset
    if (this.handleLeft) {
      this.handleLeft.addEventListener('dblclick', e => {
        e.stopPropagation();
        this.setMargins(this.defaultPadLeft, State.ui.padRight || this.defaultPadRight, true);
      });
    }

    if (this.handleRight) {
      this.handleRight.addEventListener('dblclick', e => {
        e.stopPropagation();
        this.setMargins(State.ui.padLeft || this.defaultPadLeft, this.defaultPadRight, true);
      });
    }

    if (this.rulerBar) {
      this.rulerBar.addEventListener('dblclick', e => {
        if (e.target.closest('.ruler-handle')) return;
        this.setMargins(this.defaultPadLeft, this.defaultPadRight, true);
      });
    }
  }
};
