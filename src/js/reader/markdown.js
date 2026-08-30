import { State } from '../core/state.js';
import { resolvePath, findFileByPath } from '../core/fs.js';
import { mimeByExt, fmtBytes, esc } from '../tree/tree-node.js';
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
    let id = String(h.textContent).toLowerCase().trim().replace(/[^\p{L}\p{M}\p{N}\s-]/gu, '').replace(/\s+/g, '-') || 'section';
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

export async function renderCodeContent(text, node, contentEl, tocPanel, tocList) {
  if (tocPanel) tocPanel.style.display = 'none';
  if (tocList) tocList.innerHTML = '';

  if (text && text.charCodeAt(0) === 0xFEFF) text = text.slice(1);

  const ext = node.name.includes('.') ? node.name.split('.').pop().toLowerCase() : '';
  let lang = 'plaintext';
  let langLabel = 'Plain Text';
  let displayContent = text;

  if (ext === 'json' || ext === 'jsonld') {
    lang = 'json';
    langLabel = 'JSON';
    try {
      const parsed = JSON.parse(text);
      displayContent = JSON.stringify(parsed, null, 2);
    } catch (e) {}
  } else if (ext === 'xml' || ext === 'rdf') {
    lang = 'xml';
    langLabel = 'XML';
  } else if (ext === 'html' || ext === 'htm') {
    lang = 'xml';
    langLabel = 'HTML';
  } else if (ext === 'py') {
    lang = 'python';
    langLabel = 'Python';
  } else if (ext === 'js' || ext === 'ts') {
    lang = 'javascript';
    langLabel = 'JavaScript';
  } else if (ext === 'css') {
    lang = 'css';
    langLabel = 'CSS';
  } else if (ext === 'yaml' || ext === 'yml') {
    lang = 'yaml';
    langLabel = 'YAML';
  } else if (ext === 'ttl') {
    lang = 'plaintext';
    langLabel = 'Turtle (TTL)';
  } else if (ext === 'csv') {
    lang = 'plaintext';
    langLabel = 'CSV';
  } else if (ext === 'tsv') {
    lang = 'plaintext';
    langLabel = 'TSV';
  } else if (ext === 'txt') {
    lang = 'plaintext';
    langLabel = 'Text';
  }

  const linesCount = displayContent.split('\n').length;
  const sizeStr = fmtBytes(new Blob([displayContent]).size);

  contentEl.innerHTML = `
    <div class="code-header-bar">
      <div class="code-meta-info">
        <span class="code-lang-badge">${esc(langLabel)}</span>
        <span class="code-stats">${linesCount.toLocaleString()} บรรทัด · ${sizeStr}</span>
      </div>
      <button class="btn small btn-copy-code" title="คัดลอกเนื้อหาทั้งหมด">
        <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"/><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/></svg>
        คัดลอก
      </button>
    </div>
    <pre class="code-viewer-pre"><code class="hljs language-${esc(lang)}">${esc(displayContent)}</code></pre>
  `;

  const copyBtn = contentEl.querySelector('.btn-copy-code');
  if (copyBtn) {
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(displayContent).then(() => {
        copyBtn.textContent = '✓ คัดลอกแล้ว';
        setTimeout(() => {
          copyBtn.innerHTML = `<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"/><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/></svg> คัดลอก`;
        }, 2000);
      });
    };
  }

  const codeEl = contentEl.querySelector('pre code');
  if (codeEl && window.hljs) {
    try {
      window.hljs.highlightElement(codeEl);
    } catch (e) {}
  }
}
