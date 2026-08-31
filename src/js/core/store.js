export const Store = {
  db: null,

  open() {
    return new Promise(res => {
      try {
        const rq = indexedDB.open('mdbrowse_v2', 1);
        rq.onupgradeneeded = () => {
          if (!rq.result.objectStoreNames.contains('kv')) {
            rq.result.createObjectStore('kv');
          }
        };
        rq.onsuccess = () => {
          Store.db = rq.result;
          res(true);
        };
        rq.onerror = () => res(false);
      } catch (e) {
        res(false);
      }
    });
  },

  get(key) {
    return new Promise(res => {
      if (!Store.db) {
        try {
          const raw = localStorage.getItem('mdbrowse_' + key);
          return res(raw ? JSON.parse(raw) : undefined);
        } catch (e) {
          return res(undefined);
        }
      }
      try {
        const tx = Store.db.transaction('kv', 'readonly');
        const rq = tx.objectStore('kv').get(key);
        rq.onsuccess = () => {
          if (rq.result !== undefined) {
            res(rq.result);
          } else {
            try {
              const raw = localStorage.getItem('mdbrowse_' + key);
              res(raw ? JSON.parse(raw) : undefined);
            } catch (e) {
              res(undefined);
            }
          }
        };
        rq.onerror = () => {
          try {
            const raw = localStorage.getItem('mdbrowse_' + key);
            res(raw ? JSON.parse(raw) : undefined);
          } catch (e) {
            res(undefined);
          }
        };
      } catch (e) {
        try {
          const raw = localStorage.getItem('mdbrowse_' + key);
          res(raw ? JSON.parse(raw) : undefined);
        } catch (e2) {
          res(undefined);
        }
      }
    });
  },

  set(key, val) {
    // Dual-store serializable JSON data into localStorage for resilience & backup
    try {
      if (key === 'workspace') {
        if (val && Array.isArray(val.roots)) {
          const meta = {
            roots: val.roots.map(r => ({ name: r.name, addedAt: r.addedAt || Date.now() })),
            expanded: val.expanded || [],
            collapsed: val.collapsed || [],
            savedAt: Date.now()
          };
          localStorage.setItem('mdbrowse_workspace_meta', JSON.stringify(meta));
        }
      } else {
        localStorage.setItem('mdbrowse_' + key, JSON.stringify(val));
      }
    } catch (e) { console.warn('[store] localStorage set failed:', e.message); }

    return new Promise(res => {
      if (!Store.db) return res(false);
      try {
        const tx = Store.db.transaction('kv', 'readwrite');
        const rq = tx.objectStore('kv').put(val, key);
        rq.onsuccess = () => res(true);
        rq.onerror = () => res(false);
      } catch (e) {
        res(false);
      }
    });
  },

  del(key) {
    try {
      localStorage.removeItem('mdbrowse_' + key);
      if (key === 'workspace') localStorage.removeItem('mdbrowse_workspace_meta');
    } catch (e) { console.warn('[store] localStorage remove failed:', e.message); }

    return new Promise(res => {
      if (!Store.db) return res(false);
      try {
        const tx = Store.db.transaction('kv', 'readwrite');
        const rq = tx.objectStore('kv').delete(key);
        rq.onsuccess = () => res(true);
        rq.onerror = () => res(false);
      } catch (e) {
        res(false);
      }
    });
  },

  exportJson() {
    try {
      const data = {
        ui: JSON.parse(localStorage.getItem('mdbrowse_ui') || '{}'),
        filters: JSON.parse(localStorage.getItem('mdbrowse_filters') || '{}'),
        workspace: JSON.parse(localStorage.getItem('mdbrowse_workspace_meta') || '{}'),
        lastFile: JSON.parse(localStorage.getItem('mdbrowse_lastFile') || 'null'),
        exportedAt: new Date().toISOString()
      };
      return JSON.stringify(data, null, 2);
    } catch (e) {
      return '{}';
    }
  }
};
