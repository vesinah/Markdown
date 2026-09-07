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
    if (!window.DOMPurify) {
      contentEl.textContent = text;
      console.warn('[markdown] DOMPurify not available, rendering as plain text for safety');
    } else {
      const clean = window.DOMPurify.sanitize(html, { ADD_ATTR: ['target', 'data-fn', 'data-fnref'], FORBID_TAGS: ['style', 'form'] });
      contentEl.innerHTML = clean;
    }
  } else {
    contentEl.textContent = text;
  }

  if (window.hljs) {
    contentEl.querySelectorAll('pre code').forEach(el => {
      try { window.hljs.highlightElement(el); } catch (e) { console.warn('[highlight] Failed:', e.message); }
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
  enhanceCallouts(contentEl);
  enhanceCodeBlocks(contentEl);
  buildToc(contentEl, tocPanel, tocList);
  await enhanceMermaid(contentEl);

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
    } catch (e) { console.warn('[katex] renderMath failed:', e.message); }
  }

  for (const img of contentEl.querySelectorAll('img.img-internal')) {
    const want = resolvePath(node.path, img.dataset.src);
    const f = findFileByPath(want);
    if (!f) {
      img.replaceWith(document.createTextNode(`⚠️ หารูปไม่พบ: ${img.dataset.src}`));
      continue;
    }
    try {
      let url = State.blobUrls.get(f.path);
      if (!url) {
        if (f.isRemote) {
          url = encodeURI(f.url || ('docs/' + (f.relPath || f.path)));
        } else {
          const file = await f.handle.getFile();
          const ext = f.name.split('.').pop().toLowerCase();
          url = URL.createObjectURL(new Blob([file], { type: mimeByExt[ext] || 'application/octet-stream' }));
          State.blobUrls.set(f.path, url);
        }
      }
      img.src = url;
      img.classList.remove('img-internal');
    } catch (e) {
      img.replaceWith(document.createTextNode('⚠️ อ่านรูปไม่สำเร็จ'));
    }
  }
}

export function enhanceCallouts(container) {
  if (!container) return;
  const ICONS = {
    note: '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>',
    tip: '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 0 .744.645h1.528a.75.75 0 0 0 .744-.645c.084-.594.337-1.079.621-1.49.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM6 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v.25a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75V12Zm1.5 2.5a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Z"/></svg>',
    important: '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM7.25 4.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0v-3.5ZM8 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>',
    warning: '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>',
    caution: '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M4.47.04C5.55-.01 6.64 0 7.73 0h.54c1.09 0 2.18-.01 3.26.04 1.25.06 2.37.56 3.23 1.42.86.86 1.36 1.98 1.42 3.23.05 1.08.04 2.17.04 3.26v.54c0 1.09.01 2.18-.04 3.26-.06 1.25-.56 2.37-1.42 3.23-.86.86-1.98 1.36-3.23 1.42-1.08.05-2.17.04-3.26.04h-.54c-1.09 0-2.18.01-3.26-.04-1.25-.06-2.37-.56-3.23-1.42-.86-.86-1.36-1.98-1.42-3.23C.01 10.45 0 9.36 0 8.27v-.54c0-1.09-.01-2.18.04-3.26.06-1.25.56-2.37 1.42-3.23.86-.86 1.98-1.36 3.23-1.42ZM2.53 2.53C1.94 3.12 1.59 3.93 1.54 4.88c-.05 1.03-.04 2.07-.04 3.12v.54c0 1.05-.01 2.09.04 3.12.05.95.4 1.76.99 2.35.59.59 1.4.94 2.35.99 1.03.05 2.07.04 3.12.04h.54c1.05 0 2.09.01 3.12-.04.95-.05 1.76-.4 2.35-.99.59-.59.94-1.4.99-2.35.05-1.03.04-2.07.04-3.12v-.54c0-1.05.01-2.09-.04-3.12-.05-.95-.4-1.76-.99-2.35-.59-.59-1.4-.94-2.35-.99-1.03-.05-2.07-.04-3.12-.04h-.54c-1.05 0-2.09-.01-3.12.04-.95.05-1.76.4-2.35.99ZM7.25 4.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0v-3.5ZM8 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>'
  };

  const LABELS = {
    note: 'Note',
    tip: 'Tip',
    important: 'Important',
    warning: 'Warning',
    caution: 'Caution'
  };

  container.querySelectorAll('blockquote').forEach(bq => {
    const firstP = bq.querySelector('p') || bq.firstElementChild;
    if (!firstP) return;
    const raw = firstP.innerHTML.trim();
    const match = raw.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:\s*<br\s*\/?>|\r?\n|\s+)?/i);
    if (!match) return;

    const type = match[1].toLowerCase();
    firstP.innerHTML = raw.slice(match[0].length).trim();
    if (!firstP.textContent.trim() && firstP.children.length === 0) {
      firstP.remove();
    }

    const card = document.createElement('div');
    card.className = `markdown-callout callout-${type}`;
    card.dataset.callout = type;

    const header = document.createElement('div');
    header.className = 'callout-header';
    header.innerHTML = `${ICONS[type] || ''}<span class="callout-title">${LABELS[type] || type.toUpperCase()}</span>`;

    const body = document.createElement('div');
    body.className = 'callout-body';
    while (bq.firstChild) {
      body.appendChild(bq.firstChild);
    }

    card.appendChild(header);
    card.appendChild(body);
    bq.replaceWith(card);
  });
}

export async function enhanceMermaid(contentEl) {
  if (!contentEl) return;
  const mermaidCodes = contentEl.querySelectorAll('code.language-mermaid');
  if (!mermaidCodes.length) return;

  if (window.mermaid) {
    try {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      window.mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        securityLevel: 'loose',
        fontFamily: 'var(--font-ui)'
      });
    } catch (e) {
      console.warn('[mermaid] initialize failed:', e && e.message);
    }
  }

  let counter = 0;
  for (const codeEl of mermaidCodes) {
    const pre = codeEl.closest('pre');
    if (!pre) continue;

    const rawCode = codeEl.textContent.trim();
    if (!rawCode) continue;

    const containerId = `mermaid-diag-${Date.now()}-${++counter}`;
    const diagDiv = document.createElement('div');
    diagDiv.className = 'mermaid-block';
    diagDiv.id = containerId;

    if (window.mermaid && typeof window.mermaid.render === 'function') {
      try {
        const res = await window.mermaid.render(containerId + '-svg', rawCode);
        diagDiv.innerHTML = res.svg;
        pre.replaceWith(diagDiv);
      } catch (err) {
        console.warn('[mermaid] render failed for diagram:', err && err.message);
        diagDiv.innerHTML = `
          <div class="mermaid-error" title="${err ? esc(err.message) : 'Mermaid Error'}">
            <span class="mermaid-error-label">⚠️ ไดอะแกรมไม่สามารถประมวลผลได้</span>
            <pre class="mermaid-error-code"><code>${esc(rawCode)}</code></pre>
          </div>
        `;
        pre.replaceWith(diagDiv);
      }
    } else {
      diagDiv.innerHTML = `
        <div class="mermaid-fallback">
          <div class="mermaid-fallback-title">📊 Mermaid Diagram</div>
          <pre><code>${esc(rawCode)}</code></pre>
        </div>
      `;
      pre.replaceWith(diagDiv);
    }
  }
}

export function enhanceCodeBlocks(container) {
  if (!container) return;
  container.querySelectorAll('pre').forEach(pre => {
    if (pre.closest('.code-viewer-pre') || pre.classList.contains('code-enhanced') || pre.closest('.mermaid-error') || pre.closest('.mermaid-fallback')) return;

    const code = pre.querySelector('code');
    if (!code) return;
    if (code.classList.contains('language-mermaid') || (code.className || '').includes('mermaid')) return;

    pre.classList.add('code-enhanced');

    let lang = '';
    const m = (code.className || '').match(/language-([a-z0-9_-]+)/i);
    if (m) lang = m[1];
    if (lang === 'undefined' || lang === 'none') lang = '';

    const bar = document.createElement('div');
    bar.className = 'code-pre-bar';
    bar.innerHTML = `
      <div class="code-pre-left">
        <svg class="code-pre-icon" viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
          <path d="M4.72 3.22a.75.75 0 0 1 1.06 1.06L2.06 8l3.72 3.72a.75.75 0 1 1-1.06 1.06L.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25Zm6.56 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L13.94 8l-3.72-3.72a.75.75 0 0 1 0-1.06Z"/>
        </svg>
        <span class="code-pre-lang">${esc(lang || 'CODE')}</span>
      </div>
      <button type="button" class="btn-code-copy" title="คัดลอกโค้ดนี้">
        <svg class="copy-icon" viewBox="0 0 16 16" width="12" height="12" fill="currentColor"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"/><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/></svg>
        <span class="copy-text">คัดลอก</span>
      </button>
    `;

    const copyBtn = bar.querySelector('.btn-code-copy');
    copyBtn.addEventListener('click', () => {
      const txt = code.textContent || '';
      navigator.clipboard.writeText(txt).then(() => {
        copyBtn.classList.add('copied');
        copyBtn.querySelector('.copy-text').textContent = '✓ คัดลอกแล้ว';
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.querySelector('.copy-text').textContent = 'คัดลอก';
        }, 1800);
      }).catch(() => {
        copyBtn.querySelector('.copy-text').textContent = 'คัดลอก';
      });
    });

    pre.parentNode.insertBefore(bar, pre);
  });
}

export async function renderCodeContent(text, node, contentEl, tocPanel, tocList) {
  if (tocPanel) tocPanel.style.display = 'none';
  if (tocList) tocList.innerHTML = '';

  if (text && text.charCodeAt(0) === 0xFEFF) text = text.slice(1);

  const ext = node.name.includes('.') ? node.name.split('.').pop().toLowerCase() : '';
  let displayContent = text;

  const LANG_MAP = new Map([
    ['json',   { lang: 'json',       label: 'JSON' }],
    ['jsonld', { lang: 'json',       label: 'JSON' }],
    ['xml',    { lang: 'xml',        label: 'XML' }],
    ['rdf',    { lang: 'xml',        label: 'XML' }],
    ['html',   { lang: 'xml',        label: 'HTML' }],
    ['htm',    { lang: 'xml',        label: 'HTML' }],
    ['py',     { lang: 'python',     label: 'Python' }],
    ['js',     { lang: 'javascript', label: 'JavaScript' }],
    ['ts',     { lang: 'javascript', label: 'JavaScript' }],
    ['css',    { lang: 'css',        label: 'CSS' }],
    ['yaml',   { lang: 'yaml',       label: 'YAML' }],
    ['yml',    { lang: 'yaml',       label: 'YAML' }],
    ['ttl',    { lang: 'plaintext',  label: 'Turtle (TTL)' }],
    ['csv',    { lang: 'plaintext',  label: 'CSV' }],
    ['tsv',    { lang: 'plaintext',  label: 'TSV' }],
    ['txt',    { lang: 'plaintext',  label: 'Text' }],
  ]);

  const langInfo = LANG_MAP.get(ext) || { lang: 'plaintext', label: 'Plain Text' };
  let lang = langInfo.lang;
  let langLabel = langInfo.label;

  if ((ext === 'json' || ext === 'jsonld') && text) {
    lang = 'json';
    langLabel = 'JSON';
    try {
      const parsed = JSON.parse(text);
      displayContent = JSON.stringify(parsed, null, 2);
    } catch (e) {
      console.warn('[code] JSON parse failed:', e.message);
    }
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
    } catch (e) { console.warn('[highlight] Code highlight failed:', e.message); }
  }
}
