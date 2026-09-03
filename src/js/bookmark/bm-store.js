import { State } from '../core/state.js';
import { Store } from '../core/store.js';

const STORE = 'annotations';

export const BookmarkStore = {
  // ใช้ connection เดียวกับ Store (เปิดเป็น v2 แล้วที่ store.js)
  open() {
    if (Store.db) return Promise.resolve(true);
    return Store.open();
  },

  _tx(mode) {
    if (!Store.db) return null;
    try {
      return Store.db.transaction(STORE, mode).objectStore(STORE);
    } catch (e) {
      console.warn('[bm-store] tx failed:', e.message);
      return null;
    }
  },

  _req(rq) {
    return new Promise(res => {
      if (!rq) return res(null);
      rq.onsuccess = () => res(rq.result);
      rq.onerror = () => {
        console.warn('[bm-store] req failed:', rq.error && rq.error.message);
        res(null);
      };
    });
  },

  async add(record) {
    const os = BookmarkStore._tx('readwrite');
    if (!os) return null;
    const rec = Object.assign({
      id: (crypto.randomUUID ? crypto.randomUUID() : 'bm-' + Date.now() + '-' + Math.random().toString(36).slice(2)),
      fileKey: '',
      docName: '',
      docPath: '',
      rootName: '',
      kind: 'bookmark',
      quote: '',
      prefix: '',
      suffix: '',
      sectionId: '',
      comment: '',
      createdAt: Date.now(),
      updatedAt: Date.now()
    }, record);
    await BookmarkStore._req(os.put(rec));
    return rec;
  },

  async update(id, patch) {
    const os = BookmarkStore._tx('readwrite');
    if (!os) return;
    const existing = await BookmarkStore._req(os.get(id));
    if (!existing) return;
    Object.assign(existing, patch, { updatedAt: Date.now() });
    await BookmarkStore._req(os.put(existing));
  },

  async del(id) {
    const os = BookmarkStore._tx('readwrite');
    if (!os) return;
    await BookmarkStore._req(os.delete(id));
  },

  async getByFileKey(fileKey) {
    const os = BookmarkStore._tx('readonly');
    if (!os || !fileKey) return [];
    const idx = os.index('fileKey');
    const all = await BookmarkStore._req(idx.getAll(fileKey));
    return (all || []).sort((a, b) => a.createdAt - b.createdAt);
  },

  async getAll() {
    const os = BookmarkStore._tx('readonly');
    if (!os) return [];
    const all = await BookmarkStore._req(os.getAll());
    return all || [];
  },

  async clear() {
    const os = BookmarkStore._tx('readwrite');
    if (!os) return;
    await BookmarkStore._req(os.clear());
  },

  // fileKey = ชื่อไฟล์ + ขนาดไฟล์ → ตัวตนของเอกสารสำหรับผูก annotation
  makeFileKey(name, size) {
    return (name || '') + '|' + (typeof size === 'number' ? size : '?');
  },

  async fileKeyExistsInWorkspace(fileKey) {
    if (!fileKey) return false;
    const name = fileKey.slice(0, fileKey.lastIndexOf('|'));
    const size = Number(fileKey.slice(fileKey.lastIndexOf('|') + 1));
    const key = BookmarkStore.makeFileKey(name, size);
    const docFiles = State.flat.filter(n => n.kind === 'file');
    for (const n of docFiles) {
      try {
        if (n.name !== name) continue;
        if (!n._bmSizeCache) n._bmSizeCache = {};
        if (n._bmSizeCache[size] === undefined) {
          const f = await n.handle.getFile();
          n._bmSizeCache[size] = f.size === size;
        }
        if (n._bmSizeCache[size]) return true;
      } catch (e) { /* ข้ามไฟล์ที่อ่านไม่ได้ */ }
    }
    return false;
  }
};
