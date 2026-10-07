/**
 * src/js/ui/auth-gate.js
 * Cloudflare Security Gate — First-layer password authentication modal (PIN: 112213)
 */

export const AUTH_PASSWORD = '112213';
export const AUTH_STORAGE_KEY = 'markmak_auth';

export const AuthGate = {
  _eventsBound: false,

  isTargetEnvironment() {
    if (typeof window === 'undefined' || typeof location === 'undefined') return false;
    const hostname = (location.hostname || '').toLowerCase();
    const protocol = (location.protocol || '').toLowerCase();
    const search = location.search || '';

    // Explicit query override for testing (?auth=1, ?auth=true, ?test_auth=1)
    if (/[?&](auth|test_auth)(?:=1|=true)?(?:&|$)/i.test(search)) {
      return true;
    }

    // Cloudflare Pages deployment or Cloudflare domains
    if (hostname.endsWith('.pages.dev') || hostname === 'pages.dev' || hostname.includes('cloudflare')) {
      return true;
    }

    // Remote HTTPS deployment excluding local development
    if (protocol === 'https:' && hostname !== 'localhost' && hostname !== '127.0.0.1') {
      return true;
    }

    return false;
  },

  isUnlocked() {
    try {
      if (typeof window === 'undefined') return true;
      const sVal = sessionStorage.getItem(AUTH_STORAGE_KEY);
      if (sVal === AUTH_PASSWORD) return true;
      const lVal = localStorage.getItem(AUTH_STORAGE_KEY);
      if (lVal === AUTH_PASSWORD) return true;
    } catch (e) {}
    return false;
  },

  init() {
    const isTarget = this.isTargetEnvironment();
    const lockBtn = document.getElementById('btn-auth-lock');
    const lockDivider = document.getElementById('auth-lock-divider');

    if (!isTarget) {
      // Offline desktop app or local dev without ?auth — keep gate hidden
      this.setLockedState(false);
      if (lockBtn) lockBtn.hidden = true;
      if (lockDivider) lockDivider.hidden = true;
      return;
    }

    // It's Cloudflare / Web deployment
    if (lockBtn) lockBtn.hidden = false;
    if (lockDivider) lockDivider.hidden = false;

    if (this.isUnlocked()) {
      this.setLockedState(false);
    } else {
      this.showModal();
    }

    this.bindEvents();
  },

  setLockedState(locked) {
    if (typeof document === 'undefined') return;
    if (locked) {
      document.documentElement.classList.add('auth-locked');
      document.body.classList.add('auth-locked');
    } else {
      document.documentElement.classList.remove('auth-locked');
      document.body.classList.remove('auth-locked');
      const modal = document.getElementById('auth-modal');
      if (modal) modal.hidden = true;
    }
  },

  showModal() {
    this.setLockedState(true);
    const modal = document.getElementById('auth-modal');
    const input = document.getElementById('auth-password-input');
    const errMsg = document.getElementById('auth-error-msg');
    const inputGroup = input ? input.closest('.auth-input-group') : null;

    if (modal) modal.hidden = false;
    if (errMsg) errMsg.hidden = true;
    if (inputGroup) inputGroup.classList.remove('has-error');
    if (input) {
      input.value = '';
      setTimeout(() => {
        try { input.focus(); } catch (e) {}
      }, 80);
    }
  },

  unlock(password, remember) {
    if (password === AUTH_PASSWORD) {
      try {
        sessionStorage.setItem(AUTH_STORAGE_KEY, AUTH_PASSWORD);
        if (remember) {
          localStorage.setItem(AUTH_STORAGE_KEY, AUTH_PASSWORD);
        } else {
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      } catch (e) {}

      const submitBtn = document.getElementById('auth-submit-btn');
      const card = document.getElementById('auth-card');

      if (submitBtn) {
        submitBtn.classList.add('success');
        submitBtn.innerHTML = '<span>✓ เข้าสู่ระบบสำเร็จ...</span>';
      }

      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.96)';
      }

      setTimeout(() => {
        this.setLockedState(false);
        const lockBtn = document.getElementById('btn-auth-lock');
        const lockDivider = document.getElementById('auth-lock-divider');
        if (lockBtn) lockBtn.hidden = false;
        if (lockDivider) lockDivider.hidden = false;

        // Reset submit button state for future locks
        if (submitBtn) {
          submitBtn.classList.remove('success');
          submitBtn.innerHTML = `
            <span>ปลดล็อกเข้าสู่ระบบ</span>
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path fill-rule="evenodd" d="M1 8a.75.75 0 0 1 .75-.75h11.59L9.72 3.63a.75.75 0 0 1 1.06-1.06l4.82 4.82a.75.75 0 0 1 0 1.06l-4.82 4.82a.75.75 0 0 1-1.06-1.06l3.63-3.63H1.75A.75.75 0 0 1 1 8Z"/>
            </svg>
          `;
        }
        if (card) {
          card.style.opacity = '';
          card.style.transform = '';
        }
      }, 260);

      return true;
    } else {
      // Wrong password
      const errMsg = document.getElementById('auth-error-msg');
      const card = document.getElementById('auth-card');
      const input = document.getElementById('auth-password-input');
      const inputGroup = input ? input.closest('.auth-input-group') : null;

      if (errMsg) errMsg.hidden = false;
      if (inputGroup) inputGroup.classList.add('has-error');

      if (card) {
        card.classList.remove('auth-shake');
        void card.offsetWidth;
        card.classList.add('auth-shake');
        setTimeout(() => card.classList.remove('auth-shake'), 480);
      }

      if (input) {
        input.value = '';
        input.focus();
      }

      return false;
    }
  },

  lock() {
    try {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (e) {}
    this.showModal();
  },

  bindEvents() {
    if (this._eventsBound) return;
    this._eventsBound = true;

    const form = document.getElementById('auth-form');
    const input = document.getElementById('auth-password-input');
    const toggleBtn = document.getElementById('btn-auth-toggle-pwd');
    const rememberMe = document.getElementById('auth-remember-me');
    const lockBtn = document.getElementById('btn-auth-lock');

    const handleUnlock = () => {
      const pwd = input ? input.value.trim() : '';
      const rem = rememberMe ? rememberMe.checked : false;
      this.unlock(pwd, rem);
    };

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleUnlock();
      });
    }

    if (input) {
      input.addEventListener('input', () => {
        const errMsg = document.getElementById('auth-error-msg');
        const inputGroup = input.closest('.auth-input-group');
        if (errMsg) errMsg.hidden = true;
        if (inputGroup) inputGroup.classList.remove('has-error');
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleUnlock();
        }
      });
    }

    if (toggleBtn && input) {
      toggleBtn.addEventListener('click', () => {
        if (input.type === 'password') {
          input.type = 'text';
          toggleBtn.textContent = '🙈';
          toggleBtn.title = 'ซ่อนรหัสผ่าน';
        } else {
          input.type = 'password';
          toggleBtn.textContent = '👁️';
          toggleBtn.title = 'แสดงรหัสผ่าน';
        }
        input.focus();
      });
    }

    if (lockBtn) {
      lockBtn.addEventListener('click', () => {
        this.lock();
      });
    }

    // Intercept keyboard shortcuts in capture phase while locked
    window.addEventListener('keydown', (e) => {
      if (document.documentElement.classList.contains('auth-locked') || document.body.classList.contains('auth-locked')) {
        // Allow typing within auth modal inputs
        if (e.target && e.target.closest && e.target.closest('#auth-modal')) {
          return;
        }
        // Block other keys/shortcuts from reaching app behind modal
        e.stopPropagation();
      }
    }, true);
  }
};

if (typeof window !== 'undefined') {
  window.AuthGate = AuthGate;
}
