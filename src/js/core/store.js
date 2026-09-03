export const Store = {
  db: null,

  open() {
    // เปิดครั้งเดียวเป็น v2 (มี store 'kv' และ 'annotations')
    if (Store.db) return Promise.resolve(true);
    return new Promise(res => {
      try {
        const rq = indexedDB.open('mdbrowse_v2', 2);
        rq.onupgradeneeded = () => {
          const db = rq.result;
          if (!db.objectStoreNames.contains('kv')) {
            db.createObjectStore('kv');
          }
          if (!db.objectStoreNames.contains('annotations')) {
            const os = db.createObjectStore('annotations', { keyPath: 'id' });
            os.createIndex('fileKey', 'fileKey', { unique: false });
            os.createIndex('docName', 'docName', { unique: false });
          }
        };
        // แท็บอื่นเปิด v1 ค้างไว้ → หลังแท็บนั้นปิด จะอัปเกรดได้ แต่เราไม่รอ:
        // ถ้า blocked ให้ resolve(false) แล้วระบบบุ๊คมาร์คทำงานแบบ degraded (kv ยังใช้ได้)
        rq.onblocked = () => res(false);
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
  },

  async exportAllJson() {
    const base = JSON.parse(this.exportJson());
    try {
      if (typeof BookmarkStore !== 'undefined' && BookmarkStore.db) {
        base.annotations = await BookmarkStore.getAll();
      }
    } catch (e) { /* fallback: export ส่วนอื่นก่อน */ }
    return JSON.stringify(base, null, 2);
  }
};
