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

export function cmpNodes(a, b) {
  if (a.kind !== b.kind) return a.kind === 'directory' || a.kind === 'root' ? -1 : 1;
  return a.name.localeCompare(b.name, 'th', { numeric: true });
}
