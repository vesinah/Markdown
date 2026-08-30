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

  const dot = document.getElementById('theme-active-dot');
  if (dot) {
    const themeColors = {
      light: '#0969da',
      dark: '#58a6ff',
      cream: '#a05a1c',
      deepblue: '#3b82f6'
    };
    dot.style.background = themeColors[State.ui.theme] || 'var(--accent)';
  }

  if (txColorInput) {
    txColorInput.value = State.ui.tx || themeDefaultTx(State.ui.theme);
  }
}
