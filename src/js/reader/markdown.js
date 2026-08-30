import { State } from '../core/state.js';
import { resolvePath, findFileByPath } from '../core/fs.js';
import { mimeByExt } from '../tree/tree-node.js';
import { preprocessFootnotes, enhanceFootnotes } from './footnotes.js';
import { buildToc } from './toc.js';

export async function renderMarkdownContent(text, node, contentEl, tocPanel, tocList) {
  const fm = text.match(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---\s*(\r?\n|$)/);
  if (fm) text = text.slice(fm[0].length);

  text = preprocessFootnotes(text);

  if (window.marked) {
    window.marked.setOptions({ gfm: true, breaks: true });
    const html = window.marked.parse(text);
    const clean = window.DOMPurify ? window.DOMPurify.sanitize(html, { ADD_ATTR: ['target', 'data-fn', 'data-fnref'], FORBID_TAGS: ['style', 'form'] }) : html;
    contentEl.innerHTML = clean;
  } else {
    contentEl.textContent = text;
  }

  if (window.hljs) {
    contentEl.querySelectorAll('pre code').forEach(el => {
      try { window.hljs.highlightElement(el); } catch (e) {}
    });
  }

  const seen = new Map();
  contentEl.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(h => {
    let id = String(h.textContent).toLowerCase().trim().replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s+/g, '-') || 'section';
    const n = seen.get(id) || 0;
    seen.set(id, n + 1);
    if (n) id = id + '-' + n;
    h.id = id;
  });

  contentEl.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src') || '';
    if (/^(https?:|data:|blob:)/i.test(src)) return;
    img.removeAttribute('src');
    img.setAttribute('data-src', src);
    img.classList.add('img-internal');
  });

  contentEl.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.startsWith('#')) return;
    if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//')) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    } else {
      a.classList.add('internal');
    }
  });

  enhanceFootnotes(contentEl);
  buildToc(contentEl, tocPanel, tocList);

  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(contentEl, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
        ],
        throwOnError: false,
      });
    } catch (e) {}
  }

  for (const img of contentEl.querySelectorAll('img.img-internal')) {
    const want = resolvePath(node.path, img.dataset.src);
    const f = findFileByPath(want);
    if (!f) {
      img.replaceWith(document.createTextNode(`⚠️ หารูปไม่พบ: ${img.dataset.src}`));
      continue;
    }
    try {
      const file = await f.handle.getFile();
      let url = State.blobUrls.get(f.path);
      if (!url) {
        const ext = f.name.split('.').pop().toLowerCase();
        url = URL.createObjectURL(new Blob([file], { type: mimeByExt[ext] || 'application/octet-stream' }));
        State.blobUrls.set(f.path, url);
      }
      img.src = url;
      img.classList.remove('img-internal');
    } catch (e) {
      img.replaceWith(document.createTextNode('⚠️ อ่านรูปไม่สำเร็จ'));
    }
  }
}
