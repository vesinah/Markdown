import { State } from '../core/state.js';

export const THEMES = ['light', 'softcream', 'cream', 'sunflower', 'freshgreen', 'bananaleaf', 'oceangreen', 'rainbow', 'deepblue', 'dark'];

export function themeDefaultTx(theme) {
  return {
    light: '#1f2328',
    softcream: '#2d2926',
    cream: '#3d3527',
    sunflower: '#33250a',
    freshgreen: '#14351a',
    bananaleaf: '#192c15',
    oceangreen: '#0d2b29',
    rainbow: '#231834',
    deepblue: '#dbe7f7',
    dark: '#e6edf3'
  }[theme] || '#1f2328';
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
      softcream: '#a86e49',
      cream: '#a05a1c',
      sunflower: '#d97706',
      freshgreen: '#16a34a',
      bananaleaf: '#65a30d',
      oceangreen: '#0d9488',
      rainbow: 'linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4)',
      deepblue: '#3b82f6',
      dark: '#58a6ff'
    };
    dot.style.background = themeColors[State.ui.theme] || 'var(--accent)';
  }

  if (txColorInput) {
    txColorInput.value = State.ui.tx || themeDefaultTx(State.ui.theme);
  }
}
