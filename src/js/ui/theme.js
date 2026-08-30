import { State } from '../core/state.js';

export const THEMES = ['light', 'dark', 'cream', 'deepblue'];

export function themeDefaultTx(theme) {
  return { light: '#1f2328', dark: '#e6edf3', cream: '#3d3527', deepblue: '#dbe7f7' }[theme] || '#1f2328';
}

export function applyTheme(txColorInput) {
  document.documentElement.dataset.theme = State.ui.theme;
  document.documentElement.style.setProperty('--fscale', State.ui.fscale);
  if (State.ui.sbWidth) document.documentElement.style.setProperty('--sbw', State.ui.sbWidth + 'px');
  if (State.ui.tx) document.documentElement.style.setProperty('--tx', State.ui.tx);
  else document.documentElement.style.removeProperty('--tx');

  document.querySelectorAll('.mb-swatch').forEach(b => {
    b.classList.toggle('on', b.dataset.theme === State.ui.theme);
  });

  if (txColorInput) {
    txColorInput.value = State.ui.tx || themeDefaultTx(State.ui.theme);
  }
}
