export const isMd = n => /\.(md|markdown|mdown|mkdn)$/i.test(n);
export const isPdf = n => /\.pdf$/i.test(n);
export const isImg = n => /\.(png|jpe?g|gif|webp|svg|bmp|ico|avif)$/i.test(n);
export const isTxt = n => /\.(txt|log|csv|tsv)$/i.test(n);
export const isHtml = n => /\.(html?|xhtml)$/i.test(n);
export const isXml = n => /\.(xml|xsl|xslt)$/i.test(n);
export const isRdf = n => /\.(rdf|ttl|owl|n3|nt)$/i.test(n);
export const isCode = n => /\.(html?|xml|json|jsonld|txt|csv|tsv|ya?ml|ttl|rdf|py|js|ts|css|sh|bat|cmd|wikitext|log|ini|conf|toml)$/i.test(n) || (!/\.[a-zA-Z0-9]+$/i.test(n) && !n.startsWith('.'));
export const isDoc = n => isMd(n) || isPdf(n) || isImg(n) || isCode(n);

export const ALL_FILTER_TYPES = ['md', 'pdf', 'txt', 'html', 'xml', 'rdf', 'img'];

export function getFileTypeCategory(name) {
  if (isMd(name)) return 'md';
  if (isPdf(name)) return 'pdf';
  if (isTxt(name)) return 'txt';
  if (isHtml(name)) return 'html';
  if (isXml(name)) return 'xml';
  if (isRdf(name)) return 'rdf';
  if (isImg(name)) return 'img';
  return 'other';
}

export function isFileAllowedByFilter(name, activeTypes) {
  if (!isDoc(name)) return false;
  if (!activeTypes || !(activeTypes instanceof Set)) return true;
  const cat = getFileTypeCategory(name);
  if (activeTypes.has(cat)) return true;
  if (cat === 'other' && activeTypes.size === ALL_FILTER_TYPES.length) return true;
  return false;
}

export const mimeByExt = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif', webp: 'image/webp', svg: 'image/svg+xml', bmp: 'image/bmp', ico: 'image/x-icon', avif: 'image/avif' };

export const fmtBytes = n => n < 1024 ? n + ' B' : n < 1048576 ? (n / 1024).toFixed(1) + ' KB' : (n / 1048576).toFixed(1) + ' MB';
export const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function extractDateFromName(name) {
  if (!name) return null;
  // 1. YYYY-MM-DD, YYYY_MM_DD, or YYYY.MM.DD
  let m = name.match(/(?:^|[^0-9])(19\d{2}|20\d{2})[-_.](\d{1,2})[-_.](\d{1,2})(?:[^0-9]|$)/);
  if (m) return Date.UTC(+m[1], +m[2] - 1, +m[3]);
  // 2. YYYYMMDD
  m = name.match(/(?:^|[^0-9])(19\d{2}|20\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(?:[^0-9]|$)/);
  if (m) return Date.UTC(+m[1], +m[2] - 1, +m[3]);
  // 3. DD-MM-YYYY or DD_MM_YYYY (Gregorian or Thai BE)
  m = name.match(/(?:^|[^0-9])(\d{1,2})[-_.](\d{1,2})[-_.](19\d{2}|20\d{2}|25\d{2})(?:[^0-9]|$)/);
  if (m) {
    let yr = +m[3];
    if (yr > 2400) yr -= 543;
    return Date.UTC(yr, +m[2] - 1, +m[1]);
  }
  return null;
}

export function getNodeDate(node) {
  if (!node) return 0;
  if (node._cachedDate !== undefined && node._cachedDate !== null) return node._cachedDate;
  let d = null;
  if (node.kind === 'file') {
    // For files: actual file creation/modification timestamp from OS is primary
    if (typeof node.mtime === 'number' && node.mtime > 0) {
      d = node.mtime;
    } else if (node.dateFromName) {
      d = node.dateFromName;
    }
  } else {
    // For directories/roots: date in folder name is primary, or max date of children
    if (node.dateFromName) {
      d = node.dateFromName;
    } else if (typeof node.mtime === 'number' && node.mtime > 0) {
      d = node.mtime;
    } else if (node.kids && node.kids.length) {
      let max = 0;
      for (const kid of node.kids) {
        const kd = getNodeDate(kid);
        if (kd > max) max = kd;
      }
      if (max > 0) d = max;
    }
  }
  node._cachedDate = d || 0;
  return node._cachedDate;
}

export function cmpNodes(a, b, sortBy = 'name', sortOrder = 'asc') {
  if (a.kind !== b.kind) return (a.kind === 'directory' || a.kind === 'root') ? -1 : 1;
  let res = 0;
  if (sortBy === 'date') {
    const da = getNodeDate(a);
    const db = getNodeDate(b);
    if (da !== db) {
      res = (da < db) ? -1 : 1;
    } else {
      res = a.name.localeCompare(b.name, 'th', { numeric: true });
    }
  } else {
    res = a.name.localeCompare(b.name, 'th', { numeric: true });
  }
  return sortOrder === 'desc' ? -res : res;
}
