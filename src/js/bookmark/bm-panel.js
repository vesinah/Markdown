import { State } from '../core/state.js';
import { BookmarkStore } from './bm-store.js';
import { normalizeText } from './bm-anchor.js';
import { esc } from '../tree/tree-node.js';
import { scrollToHighlight, restoreHighlights } from './bm-highlight.js';

const PANEL_HTML = `
  <div class="bm-header">
    <span class="bm-title">บุ๊คมาร์คและคอมเมนต์</span>
    <button type="button" id="bm-close" class="bm-close-btn" title="ปิดแผงบุ๊คมาร์ค">
      <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" d="M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 1.06L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06Z"/></svg>
    </button>
  </div>
  <div class="bm-tabs">
    <button type="button" class="bm-tab active" data-tab="doc">เอกสารนี้</button>
    <button type="button" class="bm-tab" data-tab="all">ทั้งโปรแกรม</button>
  </div>
  <div class="bm-body" id="bm-body-doc"></div>
  <div class="bm-body" id="bm-body-all" hidden></div>
`;

let currentTab = 'doc';
let orphanIds = new Set();

export const BookmarkPanel = {
  init() {
    const panel = document.getElementById('bm-panel');
    if (!panel) return;
    panel.removeAttribute('hidden');
    panel.innerHTML = PANEL_HTML;

    panel.addEventListener('click', e => {
      const tab = e.target.closest('.bm-tab');
      if (tab) {
        currentTab = tab.dataset.tab;
        panel.querySelectorAll('.bm-tab').forEach(t => t.classList.toggle('active', t === tab));
        document.getElementById('bm-body-doc').hidden = currentTab !== 'doc';
        document.getElementById('bm-body-all').hidden = currentTab !== 'all';
        BookmarkPanel.refresh();
        return;
      }
      if (e.target.closest('#bm-close')) {
        toggleBookmarkPanel(false);
        return;
      }
      const item = e.target.closest('.bm-item');
      if (item) {
        const id = item.dataset.id;
        if (!e.target.closest('.bm-del')) {
          if (!scrollToHighlight(id)) {
            item.classList.add('flash');
            setTimeout(() => item.classList.remove('flash'), 1200);
          }
          if (typeof window !== 'undefined' && window.innerWidth <= 768) {
            toggleBookmarkPanel(false);
          }
        }
      }
    });

    panel.addEventListener('click', async e => {
      const del = e.target.closest('.bm-del');
      if (!del) return;
      e.stopPropagation();
      const id = del.closest('.bm-item').dataset.id;
      await BookmarkStore.del(id);
      orphanIds.delete(id);
      BookmarkPanel.refresh();
      restoreHighlights();
    });
  },

  setOrphans(ids) {
    orphanIds = new Set(ids || []);
  },

  async refresh() {
    const docBody = document.getElementById('bm-body-doc');
    const allBody = document.getElementById('bm-body-all');
    if (!docBody || !allBody) return;

    // Tab 1: เอกสารนี้
    const cur = State.current;
    if (!cur) {
      docBody.innerHTML = '<div class="bm-empty">ยังไม่ได้เปิดเอกสาร</div>';
    } else {
      const file = await getFileOf(cur);
      const fileKey = file ? BookmarkStore.makeFileKey(cur.name, file.size) : BookmarkStore.makeFileKey(cur.name, '?');
      const items = await BookmarkStore.getByFileKey(fileKey);
      if (!items.length) {
        docBody.innerHTML = '<div class="bm-empty">ยังไม่มีบุ๊คมาร์คหรือคอมเมนต์ในเอกสารนี้<br><small>ไฮไลต์ข้อความเพื่อเริ่มใช้งาน</small></div>';
      } else {
        docBody.innerHTML = items.map(r => renderItem(r, fileKey)).join('');
      }
    }

    // Tab 2: ทั้งโปรแกรม — กลุ่มตามเอกสาร เรียงตามลำดับ tree ฝั่งซ้าย
    const all = await BookmarkStore.getAll();
    if (!all.length) {
      allBody.innerHTML = '<div class="bm-empty">ยังไม่มีรายการในโปรแกรม</div>';
      return;
    }

    const groups = new Map();
    for (const r of all) {
      if (!groups.has(r.docName)) groups.set(r.docName, []);
      groups.get(r.docName).push(r);
    }

    // เรียงลำดับเอกสารตาม State.flat (tree ซ้าย)
    const docOrder = [];
    const seen = new Set();
    for (const n of State.flat) {
      if (n.kind !== 'file') continue;
      if (seen.has(n.name)) continue;
      if (groups.has(n.name)) {
        docOrder.push(n.name);
        seen.add(n.name);
      }
    }
    const missing = [...groups.keys()].filter(k => !seen.has(k)).sort((a, b) => a.localeCompare(b, 'th'));

    let html = '';
    for (const docName of docOrder) {
      html += renderGroup(docName, groups.get(docName));
    }
    if (missing.length) {
      html += '<div class="bm-missing-header">เอกสารไม่พบในพื้นที่ทำงาน</div>';
      for (const docName of missing) {
        html += renderGroup(docName, groups.get(docName), true);
      }
    }
    allBody.innerHTML = html;
  },

  revealItem(id) {
    // จากการคลิก mark ในเนื้อหา → เลื่อน panel ไปรายการ
    switchTabToDoc();
    const el = document.querySelector(`.bm-item[data-id="${CSS.escape(id)}"]`);
    if (el) {
      el.classList.add('flash');
      el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      setTimeout(() => el.classList.remove('flash'), 1200);
    }
  }
};

function switchTabToDoc() {
  const panel = document.getElementById('bm-panel');
  if (!panel) return;
  const docTab = panel.querySelector('.bm-tab[data-tab="doc"]');
  if (docTab && !docTab.classList.contains('active')) docTab.click();
}

function renderItem(r, activeFileKey) {
  const orphan = orphanIds.has(r.id);
  const kindIcon = r.kind === 'comment'
    ? '<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5C14.216 1 15 1.784 15 2.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/></svg>'
    : '<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0L11.5 12.66V2.75a.25.25 0 0 0-.25-.25Z"/></svg>';
  return `
    <div class="bm-item${orphan ? ' orphan' : ''}" data-id="${esc(r.id)}" title="${orphan ? 'ไม่พบตำแหน่งเดิมในเอกสาร (ข้อความอาจถูกแก้ไข)' : 'คลิกเพื่อไปยังตำแหน่งในเอกสาร'}">
      <div class="bm-item-head">
        <span class="bm-kind ${r.kind}">${kindIcon}</span>
        <span class="bm-quote">${esc(r.quote.length > 90 ? r.quote.slice(0, 90) + '…' : r.quote)}</span>
        <button type="button" class="bm-del" title="ลบรายการ">
          <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"/></svg>
        </button>
      </div>
      ${r.comment ? `<div class="bm-comment">${esc(r.comment)}</div>` : ''}
      ${orphan ? '<div class="bm-orphan-note">⚠ ไม่พบตำแหน่งเดิม</div>' : ''}
    </div>
  `;
}

function renderGroup(docName, items, isMissing = false) {
  return `
    <div class="bm-group${isMissing ? ' missing' : ''}">
      <div class="bm-group-header" title="${esc(docName)}">
        <span class="bm-group-name">${esc(docName)}</span>
        <span class="bm-group-count">${items.length}</span>
      </div>
      ${items.map(r => renderItem(r)).join('')}
    </div>
  `;
}

async function getFileOf(node) {
  try { return await node.handle.getFile(); } catch (e) { return null; }
}

async function deleteAnnotation(id) {
  await BookmarkStore.del(id);
  orphanIds.delete(id);
  BookmarkPanel.refresh();
  restoreHighlights();
}

// ---------- Panel toggle ----------

export function toggleBookmarkPanel(force) {
  const body = document.body;
  const isOpen = body.classList.contains('bm-open');
  const show = (typeof force === 'boolean') ? force : !isOpen;
  body.classList.toggle('bm-open', show);
  body.classList.toggle('bm-closed', !show);

  const btn = document.getElementById('btn-bm-toggle');
  if (btn) {
    btn.classList.toggle('active', show);
    btn.title = show ? 'ปิดแผงบุ๊คมาร์ค' : 'เปิดแผงบุ๊คมาร์คและคอมเมนต์';
  }

  if (show) BookmarkPanel.refresh();

  // แจ้ง ruler ให้วาดใหม่เพราะความกว้าง viewport เปลี่ยน
  setTimeout(() => {
    if (window.RulerModule && window.RulerModule.drawScale) window.RulerModule.drawScale();
  }, 220);
}

// expose ให้โมดูลอื่นเรียกข้ามได้ (build รวมเป็น single script)
window.BookmarkPanel = BookmarkPanel;
window.toggleBookmarkPanel = toggleBookmarkPanel;
