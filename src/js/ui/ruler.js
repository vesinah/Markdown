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
  tooltip: null,
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

    this.ensureTooltip();
    this.setupDrag();
    this.setupDblClick();
    this.syncScrollbar();
    this.drawScale();

    window.addEventListener('resize', () => {
      this.syncScrollbar();
      this.clampMargins();
      this.drawScale();
    });

    if (typeof ResizeObserver !== 'undefined' && this.scrollPane) {
      const ro = new ResizeObserver(() => {
        this.syncScrollbar();
        this.clampMargins();
      });
      ro.observe(this.scrollPane);
    }
  },

  ensureTooltip() {
    if (this.tooltip || !this.rulerTrack) return;
    let tt = document.getElementById('ruler-tooltip');
    if (!tt) {
      tt = document.createElement('div');
      tt.id = 'ruler-tooltip';
      tt.className = 'ruler-tooltip';
      this.rulerTrack.appendChild(tt);
    }
    this.tooltip = tt;
  },

  syncScrollbar() {
    const sbW = this.scrollPane ? Math.max(0, this.scrollPane.offsetWidth - this.scrollPane.clientWidth) : 0;
    document.documentElement.style.setProperty('--md-sb-w', sbW + 'px');
    return sbW;
  },

  getUsableWidth() {
    if (!this.rulerTrack) return window.innerWidth;
    const rect = this.rulerTrack.getBoundingClientRect();
    const sbW = this.syncScrollbar();
    return Math.max(0, rect.width - sbW);
  },

  clampMargins() {
    const usableWidth = this.getUsableWidth();
    if (usableWidth <= 0) return;

    let curLeft = (typeof State.ui.padLeft === 'number' && !isNaN(State.ui.padLeft)) ? State.ui.padLeft : this.defaultPadLeft;
    let curRight = (typeof State.ui.padRight === 'number' && !isNaN(State.ui.padRight)) ? State.ui.padRight : this.defaultPadRight;

    if (curLeft + curRight + this.minContentWidth > usableWidth) {
      const available = Math.max(0, usableWidth - this.minContentWidth);
      const ratio = (curLeft + curRight > 0) ? (curLeft / (curLeft + curRight)) : 0.5;
      curLeft = Math.max(16, Math.floor(available * ratio));
      curRight = Math.max(16, Math.floor(available * (1 - ratio)));
      this.setMargins(curLeft, curRight, false);
    }
  },

  setMargins(padLeft, padRight, persist = true) {
    const l = (typeof padLeft === 'number' && !isNaN(padLeft)) ? Math.max(16, Math.round(padLeft)) : this.defaultPadLeft;
    const r = (typeof padRight === 'number' && !isNaN(padRight)) ? Math.max(16, Math.round(padRight)) : this.defaultPadRight;
    
    State.ui.padLeft = l;
    State.ui.padRight = r;

    document.documentElement.style.setProperty('--md-pad-left', l + 'px');
    document.documentElement.style.setProperty('--md-pad-right', r + 'px');
    this.syncScrollbar();

    if (persist && this.onSaveUi) {
      this.onSaveUi();
    }
  },

  drawScale() {
    if (!this.rulerScale || !this.rulerTrack) return;
    const width = this.rulerTrack.clientWidth || window.innerWidth;
    if (width <= 0) return;

    this.syncScrollbar();

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

  setupDrag() {
    let activeDrag = null;

    const onPointerDown = (type, e) => {
      e.preventDefault();
      activeDrag = type;
      document.body.classList.add('dragging-ruler');
      this.ensureTooltip();
      if (this.tooltip) this.tooltip.classList.add('active');

      if (type === 'left' && this.handleLeft) this.handleLeft.classList.add('dragging');
      if (type === 'right' && this.handleRight) this.handleRight.classList.add('dragging');

      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('mouseup', onPointerUp);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);

      onPointerMove(e);
    };

    const onPointerMove = e => {
      if (!activeDrag || !this.rulerTrack) return;
      const rect = this.rulerTrack.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const trackWidth = rect.width;
      const sbW = this.syncScrollbar();
      const usableWidth = Math.max(0, trackWidth - sbW);

      if (activeDrag === 'left') {
        const curRight = (typeof State.ui.padRight === 'number') ? State.ui.padRight : this.defaultPadRight;
        const maxLeft = Math.max(16, usableWidth - curRight - this.minContentWidth);
        const newLeft = Math.max(16, Math.min(maxLeft, Math.round(mouseX)));
        const contentWidth = Math.max(0, usableWidth - newLeft - curRight);

        this.setMargins(newLeft, curRight, false);

        if (this.tooltip) {
          this.tooltip.style.left = `${newLeft}px`;
          this.tooltip.innerHTML = `ระยะซ้าย: <b>${newLeft}px</b> · เนื้อหา: <b>${contentWidth}px</b>`;
        }
      } else if (activeDrag === 'right') {
        const curLeft = (typeof State.ui.padLeft === 'number') ? State.ui.padLeft : this.defaultPadLeft;
        const maxRight = Math.max(16, usableWidth - curLeft - this.minContentWidth);
        const rightPos = trackWidth - sbW - mouseX;
        const newRight = Math.max(16, Math.min(maxRight, Math.round(rightPos)));
        const contentWidth = Math.max(0, usableWidth - curLeft - newRight);
        const markerPos = trackWidth - sbW - newRight;

        this.setMargins(curLeft, newRight, false);

        if (this.tooltip) {
          this.tooltip.style.left = `${markerPos}px`;
          this.tooltip.innerHTML = `ระยะขวา: <b>${newRight}px</b> · เนื้อหา: <b>${contentWidth}px</b>`;
        }
      }
    };

    const onPointerUp = () => {
      if (!activeDrag) return;
      document.body.classList.remove('dragging-ruler');
      if (this.handleLeft) this.handleLeft.classList.remove('dragging');
      if (this.handleRight) this.handleRight.classList.remove('dragging');
      if (this.tooltip) this.tooltip.classList.remove('active');
      activeDrag = null;

      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);

      if (this.onSaveUi) this.onSaveUi();
    };

    if (this.handleLeft) {
      this.handleLeft.addEventListener('mousedown', e => onPointerDown('left', e));
      this.handleLeft.addEventListener('pointerdown', e => onPointerDown('left', e));
    }
    if (this.handleRight) {
      this.handleRight.addEventListener('mousedown', e => onPointerDown('right', e));
      this.handleRight.addEventListener('pointerdown', e => onPointerDown('right', e));
    }
  },

  setupDblClick() {
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
