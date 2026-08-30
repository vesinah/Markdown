export const State = {
  roots: [],
  flat: [],
  byPath: new Map(),
  current: null,
  expanded: new Set(),
  collapsed: new Set(),
  blobUrls: new Map(),
  search: {
    q: '',
    content: false,
    busy: false,
    gen: 0,
    hits: [],
    fileHits: new Set(),
    inDoc: [],
    idx: -1
  },
  toc: [],
  ui: {
    theme: 'light',
    fscale: 1,
    tx: '',
    sbWidth: 320,
    sbClosed: false
  },
  pdf: {
    doc: null,
    pageNum: 1,
    totalPages: 0,
    scale: 1.2
  },
  hasFSA: 'showDirectoryPicker' in window
};
