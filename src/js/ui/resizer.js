import { State } from '../core/state.js';

export function setupSidebarResizer(resizerEl, sidebarEl, onSaveUi) {
  if (!resizerEl || !sidebarEl) return;
  let startX, startW;

  const onMouseMove = e => {
    const maxW = Math.floor(window.innerWidth * 0.65);
    const newW = Math.max(200, Math.min(maxW, startW + (e.clientX - startX)));
    State.ui.sbWidth = newW;
    document.documentElement.style.setProperty('--sbw', newW + 'px');
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.body.classList.remove('resizing');
    resizerEl.classList.remove('dragging');
    if (onSaveUi) onSaveUi();
  };

  resizerEl.addEventListener('mousedown', e => {
    e.preventDefault();
    startX = e.clientX;
    startW = sidebarEl.getBoundingClientRect().width;
    document.body.classList.add('resizing');
    resizerEl.classList.add('dragging');
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
}
