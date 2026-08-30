export const Store = {
  db: null,
  open() {
    return new Promise(res => {
      const rq = indexedDB.open('mdbrowse_v2', 1);
      rq.onupgradeneeded = () => rq.result.createObjectStore('kv');
      rq.onsuccess = () => { Store.db = rq.result; res(true); };
      rq.onerror = () => res(false);
    });
  },
  get(key) {
    return new Promise(res => {
      if (!Store.db) return res(undefined);
      try {
        const rq = Store.db.transaction('kv').objectStore('kv').get(key);
        rq.onsuccess = () => res(rq.result);
        rq.onerror = () => res(undefined);
      } catch (e) { res(undefined); }
    });
  },
  set(key, val) {
    if (!Store.db) return;
    try {
      Store.db.transaction('kv', 'readwrite').objectStore('kv').put(val, key);
    } catch (e) {}
  }
};
