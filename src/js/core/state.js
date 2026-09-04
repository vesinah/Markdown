const _stateListeners = new Map();

export const State = {
  roots: [],
  flat: [],
  byPath: new Map(),
  current: null,
  expanded: new Set(),
  collapsed: new Set(),
  blobUrls: new Map(),
  filters: {
    types: new Set(['md', 'pdf', 'txt', 'html', 'xml', 'rdf', 'img'])
  },
  sort: {
    by: 'name',
    order: 'asc'
  },
  search: {
    q: '',
    content: false,
    busy: false,
    gen: 0,
    hits: [],
    fileHits: new Set(),
    snippets: new Map(),
    inDoc: [],
    idx: -1
  },
  toc: [],
  ui: {
    theme: 'light',
    fscale: 1,
    tx: '',
    sbWidth: 320,
    sbClosed: false,
    tocMini: false
  },
  pdf: {
    doc: null,
    pageNum: 1,
    totalPages: 0,
    scale: 1.2
  },
  hasFSA: typeof window !== 'undefined' && 'showDirectoryPicker' in window,

  on(event, handler) {
    if (typeof handler !== 'function') return () => {};
    if (!_stateListeners.has(event)) _stateListeners.set(event, new Set());
    _stateListeners.get(event).add(handler);
    return () => this.off(event, handler);
  },

  off(event, handler) {
    const handlers = _stateListeners.get(event);
    if (handlers) {
      handlers.delete(handler);
      if (handlers.size === 0) _stateListeners.delete(event);
    }
  },

  emit(event, data) {
    const handlers = _stateListeners.get(event);
    if (handlers && handlers.size > 0) {
      for (const h of Array.from(handlers)) {
        try {
          h(data);
        } catch (err) {
          console.warn(`[state] Error in event listener for "${event}":`, err && err.message);
        }
      }
    }
  }
};

