export const isMd = n => /\.(md|markdown|mdown|mkdn)$/i.test(n);
export const isPdf = n => /\.pdf$/i.test(n);
export const isImg = n => /\.(png|jpe?g|gif|webp|svg|bmp|ico|avif)$/i.test(n);
export const isCode = n => /\.(html?|xml|json|jsonld|txt|csv|tsv|ya?ml|ttl|rdf|py|js|ts|css|sh|bat|cmd|wikitext|log|ini|conf|toml)$/i.test(n) || (!/\.[a-zA-Z0-9]+$/i.test(n) && !n.startsWith('.'));
export const isDoc = n => isMd(n) || isPdf(n) || isImg(n) || isCode(n);

export const mimeByExt = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif', webp: 'image/webp', svg: 'image/svg+xml', bmp: 'image/bmp', ico: 'image/x-icon', avif: 'image/avif' };

export const fmtBytes = n => n < 1024 ? n + ' B' : n < 1048576 ? (n / 1024).toFixed(1) + ' KB' : (n / 1048576).toFixed(1) + ' MB';
export const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function cmpNodes(a, b) {
  if (a.kind !== b.kind) return a.kind === 'directory' || a.kind === 'root' ? -1 : 1;
  return a.name.localeCompare(b.name, 'th', { numeric: true });
}
