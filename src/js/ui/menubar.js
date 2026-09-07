import { State } from '../core/state.js';
import { applyTheme, THEMES } from './theme.js';
import { PetManager } from '../pet/pet-manager.js';
import { toggleBookmarkPanel } from '../bookmark/bm-panel.js';

let _menubarD = null;
let saveUiFn = () => {};
let drawScaleFn = () => {};

export const MenubarController = {
  init(domMap, options = {}) {
    _menubarD = domMap;
    saveUiFn = options.saveUi || (() => {});
    drawScaleFn = options.drawScale || (() => {});

    this.bindSidebarToggle();
    this.bindThemeTools();
    this.bindShortcuts();

    const petBtn = (_menubarD && _menubarD.btnMenubarPet) || document.getElementById('btn-menubar-pet');
    if (petBtn) {
      petBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (PetManager && PetManager.openManagementModal) {
          PetManager.openManagementModal();
        }
      });
    }

    if (_menubarD && _menubarD.btnBmToggle) {
      _menubarD.btnBmToggle.addEventListener('click', () => {
        toggleBookmarkPanel();
      });
    }

    State.on('theme:change', () => {
      this.updateActiveThemeDot();
      this.updateThemeSwatches();
    });
  },

  bindSidebarToggle() {
    if (!_menubarD || !_menubarD.sbToggle) return;
    _menubarD.sbToggle.addEventListener('click', () => {
      this.toggleSidebar();
    });
  },

  toggleSidebar(force) {
    const isClosed = document.body.classList.contains('sb-closed');
    const close = (typeof force === 'boolean') ? force : !isClosed;
    document.body.classList.toggle('sb-closed', close);
    if (!close && typeof window !== 'undefined' && window.innerWidth <= 768) {
      document.body.classList.remove('toc-mobile-open');
      document.body.classList.remove('bm-open');
    }
    this.updateSbToggleUI();
    saveUiFn();
    setTimeout(() => drawScaleFn(), 200);
    State.emit('sidebar:toggle', { closed: close });
  },

  updateSbToggleUI() {
    if (!_menubarD || !_menubarD.sbToggle) return;
    const isClosed = document.body.classList.contains('sb-closed');
    _menubarD.sbToggle.classList.toggle('active', isClosed);
    _menubarD.sbToggle.title = isClosed ? 'แสดงแถบรายการไฟล์ (Ctrl+B)' : 'ซ่อนแถบรายการไฟล์ (Ctrl+B)';
  },

  bindThemeTools() {
    if (_menubarD && _menubarD.btnThemeToggle) {
      _menubarD.btnThemeToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleThemeTools();
      });
    }

    if (_menubarD && _menubarD.themeToolsWrap) {
      _menubarD.themeToolsWrap.addEventListener('click', (e) => e.stopPropagation());
    }

    document.addEventListener('click', () => {
      if (_menubarD && _menubarD.themeToolsWrap && _menubarD.themeToolsWrap.classList.contains('open')) {
        this.toggleThemeTools(false);
      }
    });

    document.querySelectorAll('.mb-swatch').forEach(sw => {
      sw.addEventListener('click', () => {
        const theme = sw.dataset.theme;
        if (theme && THEMES.includes(theme)) {
          State.ui.theme = theme;
          applyTheme(_menubarD ? _menubarD.txColor : null);
          saveUiFn();
          this.updateActiveThemeDot();
          this.updateThemeSwatches();
          State.emit('theme:change', theme);
        }
      });
    });

    if (_menubarD && _menubarD.fsDec) {
      _menubarD.fsDec.addEventListener('click', () => {
        State.ui.fscale = Math.max(0.7, +(State.ui.fscale - 0.05).toFixed(2));
        applyTheme(_menubarD.txColor);
        saveUiFn();
      });
    }

    if (_menubarD && _menubarD.fsInc) {
      _menubarD.fsInc.addEventListener('click', () => {
        State.ui.fscale = Math.min(1.8, +(State.ui.fscale + 0.05).toFixed(2));
        applyTheme(_menubarD.txColor);
        saveUiFn();
      });
    }

    if (_menubarD && _menubarD.fsReset) {
      _menubarD.fsReset.addEventListener('click', () => {
        State.ui.fscale = 1;
        applyTheme(_menubarD.txColor);
        saveUiFn();
      });
    }

    if (_menubarD && _menubarD.txColor) {
      _menubarD.txColor.addEventListener('input', () => {
        State.ui.tx = _menubarD.txColor.value;
        applyTheme(_menubarD.txColor);
        saveUiFn();
      });
    }

    if (_menubarD && _menubarD.txReset) {
      _menubarD.txReset.addEventListener('click', () => {
        State.ui.tx = '';
        applyTheme(_menubarD.txColor);
        saveUiFn();
      });
    }
  },

  toggleThemeTools(force) {
    if (!_menubarD || !_menubarD.themeToolsWrap) return;
    const isOpen = _menubarD.themeToolsWrap.classList.contains('open');
    const show = (typeof force === 'boolean') ? force : !isOpen;
    _menubarD.themeToolsWrap.classList.toggle('open', show);
    if (show && typeof window !== 'undefined' && window.innerWidth <= 768) {
      document.body.classList.add('sb-closed');
      document.body.classList.remove('toc-mobile-open');
      document.body.classList.remove('bm-open');
      if (_menubarD.docInfoPopover) _menubarD.docInfoPopover.hidden = true;
    }
    if (_menubarD.btnThemeToggle) {
      _menubarD.btnThemeToggle.classList.toggle('active', show);
      _menubarD.btnThemeToggle.title = show ? 'พับเก็บชุดเครื่องมือปรับธีม' : 'ปรับแต่งธีมและการแสดงผล (คลิกเพื่อขยาย)';
    }
  },

  updateThemeSwatches() {
    document.querySelectorAll('.mb-swatch').forEach(sw => {
      sw.classList.toggle('on', sw.dataset.theme === State.ui.theme);
    });
  },

  updateActiveThemeDot() {
    const dot = document.getElementById('theme-active-dot');
    if (!dot) return;
    const isCustomFont = State.ui.fscale !== 1;
    const isCustomColor = !!State.ui.tx;
    const isCustomTheme = State.ui.theme !== 'light';
    dot.classList.toggle('active', isCustomFont || isCustomColor || isCustomTheme);
  },

  toggleZenMode(force) {
    const isZen = document.body.classList.contains('zen-mode');
    const nextZen = (typeof force === 'boolean') ? force : !isZen;
    document.body.classList.toggle('zen-mode', nextZen);
    if (nextZen) {
      document.body.classList.add('sb-closed');
      this.updateSbToggleUI();
    }
    setTimeout(() => drawScaleFn(), 250);
    State.emit('zen:toggle', { active: nextZen });
  },

  bindShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl+B: Toggle sidebar
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b' && !e.altKey && !e.shiftKey) {
        e.preventDefault();
        this.toggleSidebar();
      }
      // Alt+Z: Toggle Zen Mode
      if (e.altKey && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        this.toggleZenMode();
      }
      // Escape: Close theme tools if open
      if (e.key === 'Escape') {
        if (_menubarD && _menubarD.themeToolsWrap && _menubarD.themeToolsWrap.classList.contains('open')) {
          this.toggleThemeTools(false);
        }
        if (document.body.classList.contains('zen-mode')) {
          this.toggleZenMode(false);
        }
      }
    });
  }
};
