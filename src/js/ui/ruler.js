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

    this.setupDrag();
    this.setupDblClick();
    this.drawScale();

    window.addEventListener('resize', () => this.drawScale());
  },

  setMargins(padLeft, padRight) {
    const l = (typeof padLeft === 'number' && !isNaN(padLeft)) ? Math.max(16, padLeft) : this.defaultPadLeft;
    const r = (typeof padRight === 'number' && !isNaN(padRight)) ? Math.max(16, padRight) : this.defaultPadRight;
    State.ui.padLeft = l;
    State.ui.padRight = r;

    document.documentElement.style.setProperty('--md-pad-left', l + 'px');
    document.documentElement.style.setProperty('--md-pad-right', r + 'px');
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

  setupDrag() {
    let activeDrag = null;

    const onMouseDown = (type, e) => {
      e.preventDefault();
      activeDrag = type;
      document.body.classList.add('dragging-ruler');
      if (type === 'left' && this.handleLeft) this.handleLeft.classList.add('dragging');
      if (type === 'right' && this.handleRight) this.handleRight.classList.add('dragging');

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = e => {
      if (!activeDrag || !this.rulerTrack) return;
      const rect = this.rulerTrack.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const trackWidth = rect.width;
      const minDistance = 180;

      if (activeDrag === 'left') {
        const curRight = State.ui.padRight || this.defaultPadRight;
        const maxLeft = trackWidth - curRight - minDistance;
        const newLeft = Math.max(16, Math.min(maxLeft, Math.round(mouseX)));
        this.setMargins(newLeft, curRight);
      } else if (activeDrag === 'right') {
        const curLeft = State.ui.padLeft || this.defaultPadLeft;
        const maxRight = trackWidth - curLeft - minDistance;
        const rightPos = trackWidth - mouseX;
        const newRight = Math.max(16, Math.min(maxRight, Math.round(rightPos)));
        this.setMargins(curLeft, newRight);
      }
    };

    const onMouseUp = () => {
      if (!activeDrag) return;
      document.body.classList.remove('dragging-ruler');
      if (this.handleLeft) this.handleLeft.classList.remove('dragging');
      if (this.handleRight) this.handleRight.classList.remove('dragging');
      activeDrag = null;

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (this.onSaveUi) this.onSaveUi();
    };

    if (this.handleLeft) this.handleLeft.addEventListener('mousedown', e => onMouseDown('left', e));
    if (this.handleRight) this.handleRight.addEventListener('mousedown', e => onMouseDown('right', e));
  },

  setupDblClick() {
    if (this.handleLeft) {
      this.handleLeft.addEventListener('dblclick', e => {
        e.stopPropagation();
        this.setMargins(this.defaultPadLeft, State.ui.padRight || this.defaultPadRight);
        if (this.onSaveUi) this.onSaveUi();
      });
    }

    if (this.handleRight) {
      this.handleRight.addEventListener('dblclick', e => {
        e.stopPropagation();
        this.setMargins(State.ui.padLeft || this.defaultPadLeft, this.defaultPadRight);
        if (this.onSaveUi) this.onSaveUi();
      });
    }
  }
};
