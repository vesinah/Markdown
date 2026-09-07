/**
 * @fileoverview Tree UI Rendering Engine (File Navigation & Catalog Tree)
 * @invariants
 * 1. Root Node (.node-row.node-root) on mobile must remain two-tier to prevent
 *    truncation of the 6,066-file research catalog title ("คลังงานวิจัย (Research Archive)").
 * 2. Mobile drawer touch targets must maintain min-height >= 36px.
 * 3. Indentation: padLeft = isRoot ? 8 : (8 + n.depth * 14).
 */

import { State } from '../core/state.js';
import { isPdf, isImg, isCode, isMd, esc, cmpNodes } from './tree-node.js';
import { isNodeVisible, getFilterVisiblePaths } from './tree-exp.js';

export function renderTree(container) {
  if (!container) return;
  const q = State.search.q.trim();
  const html = [];
  const filterVisible = getFilterVisiblePaths(State.filters && State.filters.types);

  let searchVisiblePaths = null;
  if (q) {
    searchVisiblePaths = new Set();
    const hits = new Set([...State.search.fileHits, ...(State.search.hits || [])]);
    for (const p of hits) {
      let node = State.byPath.get(p);
      while (node) {
        searchVisiblePaths.add(node.path);
        node = node.parent;
      }
    }
  }

  // Pre-calculate visible descendant counts (recursive) for each directory
  const nodeCounts = new Map();
  function computeCounts(n) {
    let files = 0;
    let dirs = 0;
    if (n.kids && n.kids.length) {
      for (const kid of n.kids) {
        if (!filterVisible.has(kid.path)) continue;
        if (searchVisiblePaths && !searchVisiblePaths.has(kid.path)) continue;

        if (kid.kind === 'directory' || kid.kind === 'root') {
          dirs += 1;
          const sub = computeCounts(kid);
          dirs += sub.dirs;
          files += sub.files;
        } else if (kid.kind === 'file') {
          files += 1;
        }
      }
    }
    const res = { files, dirs };
    nodeCounts.set(n.path, res);
    return res;
  }

  const rootsForCount = State.flat.filter(n => n.kind === 'root');
  for (const r of rootsForCount) {
    computeCounts(r);
  }

  function renderSingleNode(n) {
    if (!filterVisible.has(n.path)) return;
    if (searchVisiblePaths && !searchVisiblePaths.has(n.path)) return;

    const isRoot = n.kind === 'root';
    const dir = isRoot || n.kind === 'directory';
    const isLockedRoot = isRoot && !!n.isLocked;
    const open = searchVisiblePaths ? true : State.expanded.has(n.path);
    const active = State.current && State.current.path === n.path;
    const hit = State.search.fileHits.has(n.path) || (State.search.hits && State.search.hits.includes(n.path));
    const twisty = isLockedRoot
      ? '<span class="twisty" title="ต้องอนุญาตการเข้าถึงไฟล์ (คลิกเพื่อเชื่อมต่อ)">🔒</span>'
      : (dir ? `<span class="twisty">${open ? '▾' : '▸'}</span>` : '<span class="twisty"></span>');

    let iconSvg = '';
    if (isLockedRoot) {
      iconSvg = '<svg class="ico" viewBox="0 0 16 16" width="15" height="15"><path fill="#eab308" fill-opacity=".25" stroke="#ca8a04" stroke-opacity=".9" d="M1.75 2.5h3.2c.2 0 .4.08.54.22l1.03 1.03H14.25c.41 0 .75.34.75.75v7.75a1.25 1.25 0 0 1-1.25 1.25H1.75A1.25 1.25 0 0 1 .5 12.25v-8.5a1.25 1.25 0 0 1 1.25-1.25Z"/></svg>';
    } else if (isRoot && n.isRemote) {
      iconSvg = '<svg class="ico" viewBox="0 0 16 16" width="15" height="15"><path fill="#0969da" fill-opacity=".22" stroke="#0969da" stroke-opacity=".9" d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.244a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.244a2.25 2.25 0 0 0-1.756.843l-.25.3a.75.75 0 0 1-1.012 0l-.25-.3A2.25 2.25 0 0 0 5.003 13H.75a.75.75 0 0 1-.75-.75V1.75Z"/></svg>';
    } else if (dir) {
      iconSvg = '<svg class="ico" viewBox="0 0 16 16" width="15" height="15"><path fill="var(--folder-stroke)" fill-opacity=".25" stroke="var(--folder-stroke)" stroke-opacity=".7" d="M1.75 2.5h3.2c.2 0 .4.08.54.22l1.03 1.03H14.25c.41 0 .75.34.75.75v7.75a1.25 1.25 0 0 1-1.25 1.25H1.75A1.25 1.25 0 0 1 .5 12.25v-8.5a1.25 1.25 0 0 1 1.25-1.25Z"/></svg>';
    } else if (isPdf(n.name)) {
      iconSvg = '<svg class="ico" viewBox="0 0 16 16" width="15" height="15"><path fill="#f85149" fill-opacity=".25" stroke="#f85149" stroke-opacity=".9" d="M4 1.75c0-.69.56-1.25 1.25-1.25h4.09c.33 0 .65.13.88.36l2.42 2.42c.23.23.36.55.36.88v9.09c0 .69-.56 1.25-1.25 1.25H5.25c-.69 0-1.25-.56-1.25-1.25V1.75Z"/><text x="4.5" y="11.5" font-size="4.5" font-weight="bold" fill="#f85149">P</text></svg>';
    } else if (isImg(n.name)) {
      iconSvg = '<svg class="ico" viewBox="0 0 16 16" width="15" height="15"><rect x="1.5" y="2.5" width="13" height="11" rx="1.5" fill="#3fb950" fill-opacity=".22" stroke="#3fb950" stroke-opacity=".9"/><circle cx="5" cy="6" r="1.2" fill="#3fb950"/><path fill="#3fb950" d="M2.5 12l3-3.5 2.5 3 2.5-2 3 2.5v.5h-11z"/></svg>';
    } else if (/\.(html?|xml|rdf)$/i.test(n.name)) {
      iconSvg = '<svg class="ico" viewBox="0 0 16 16" width="15" height="15"><path fill="#e36209" fill-opacity=".2" stroke="#e36209" stroke-opacity=".9" d="M4 1.75c0-.69.56-1.25 1.25-1.25h4.09c.33 0 .65.13.88.36l2.42 2.42c.23.23.36.55.36.88v9.09c0 .69-.56 1.25-1.25 1.25H5.25c-.69 0-1.25-.56-1.25-1.25V1.75Z"/><path d="m5 8 1.4-1.4m0 2.8L5 8m6 0-1.4-1.4m0 2.8 1.4-1.4" stroke="#e36209" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
    } else if (/\.(json|jsonld)$/i.test(n.name)) {
      iconSvg = '<svg class="ico" viewBox="0 0 16 16" width="15" height="15"><path fill="#d4a72c" fill-opacity=".2" stroke="#d4a72c" stroke-opacity=".9" d="M4 1.75c0-.69.56-1.25 1.25-1.25h4.09c.33 0 .65.13.88.36l2.42 2.42c.23.23.36.55.36.88v9.09c0 .69-.56 1.25-1.25 1.25H5.25c-.69 0-1.25-.56-1.25-1.25V1.75Z"/><text x="3.8" y="11" font-size="4.5" font-weight="bold" fill="#b08800">{ }</text></svg>';
    } else if (isCode(n.name)) {
      iconSvg = '<svg class="ico" viewBox="0 0 16 16" width="15" height="15"><path fill="#8250df" fill-opacity=".2" stroke="#8250df" stroke-opacity=".9" d="M4 1.75c0-.69.56-1.25 1.25-1.25h4.09c.33 0 .65.13.88.36l2.42 2.42c.23.23.36.55.36.88v9.09c0 .69-.56 1.25-1.25 1.25H5.25c-.69 0-1.25-.56-1.25-1.25V1.75Z"/><line x1="4.5" y1="7" x2="11.5" y2="7" stroke="#8250df" stroke-width="1.1"/><line x1="4.5" y1="9.5" x2="9.5" y2="9.5" stroke="#8250df" stroke-width="1.1"/></svg>';
    } else {
      iconSvg = '<svg class="ico" viewBox="0 0 16 16" width="15" height="15"><path fill="var(--file-stroke)" fill-opacity=".2" stroke="var(--file-stroke)" stroke-opacity=".8" d="M4 1.75c0-.69.56-1.25 1.25-1.25h4.09c.33 0 .65.13.88.36l2.42 2.42c.23.23.36.55.36.88v9.09c0 .69-.56 1.25-1.25 1.25H5.25c-.69 0-1.25-.56-1.25-1.25V1.75Z"/></svg>';
    }

    const nameLabel = isLockedRoot
      ? `<span class="nm">${esc(n.name)} <span class="lock-tag" title="คลิกเพื่ออนุญาตการเข้าถึงโฟลเดอร์นี้">คลิกเพื่อเชื่อมต่อ</span></span>`
      : `<span class="nm">${esc(n.name)}</span>`;
    const rowTitle = isLockedRoot
      ? ' title="โฟลเดอร์นี้ต้องได้รับอนุญาตการเข้าถึงไฟล์ — คลิกเพื่อเชื่อมต่อ"'
      : '';

    const refreshBtn = isRoot
      ? `<button type="button" class="btn-root-refresh" data-root-idx="${n.rootIdx}" title="รีเฟรชโฟลเดอร์ “${esc(n.name)}”" aria-label="รีเฟรชโฟลเดอร์"><svg viewBox="0 0 16 16" width="11" height="11" fill="currentColor"><path fill-rule="evenodd" d="M8 2.5a5.487 5.487 0 0 0-4.131 1.869l-1.2-1.2A.75.75 0 0 0 1.4 3.7v3.55a.75.75 0 0 0 .75.75H5.7a.75.75 0 0 0 .53-1.28l-1.272-1.272A3.987 3.987 0 0 1 8 4a4 4 0 1 1-3.464 6 .75.75 0 0 0-1.3.75A5.5 5.5 0 1 0 8 2.5Z"/></svg></button>`
      : '';

    const delBtn = isRoot
      ? `<button type="button" class="btn-root-del" data-root-idx="${n.rootIdx}" title="${n.isRemote ? 'ปิดคลังงานวิจัย' : `ปิดโฟลเดอร์ “${esc(n.name)}” ออกจากแอป`}" aria-label="ปิดโฟลเดอร์">✕</button>`
      : '';

    // Folder counts badge (Option 3: Mini Icons with Counts)
    let countsBadge = '';
    if (dir && !isLockedRoot) {
      const counts = nodeCounts.get(n.path) || { files: 0, dirs: 0 };
      const tipParts = [];
      if (counts.dirs > 0) tipParts.push(`โฟลเดอร์ ${counts.dirs.toLocaleString()} รายการ`);
      if (counts.files > 0 || counts.dirs === 0) tipParts.push(`เอกสาร ${counts.files.toLocaleString()} รายการ`);
      const tooltip = tipParts.join(', ');

      const dirHtml = counts.dirs > 0
        ? `<span class="count-item count-dirs" title="โฟลเดอร์ย่อย"><svg class="count-ico folder" viewBox="0 0 16 16" width="12" height="12"><path fill="#d97706" fill-opacity=".3" stroke="#d97706" stroke-width="1.1" d="M1.75 2.5h3.2c.2 0 .4.08.54.22l1.03 1.03H14.25c.41 0 .75.34.75.75v7.75a1.25 1.25 0 0 1-1.25 1.25H1.75A1.25 1.25 0 0 1 .5 12.25v-8.5a1.25 1.25 0 0 1 1.25-1.25Z"/></svg><span class="count-num">${counts.dirs.toLocaleString()}</span></span>`
        : '';
      const fileHtml = `<span class="count-item count-files" title="เอกสาร/ไฟล์"><svg class="count-ico file" viewBox="0 0 16 16" width="11" height="11"><path fill="currentColor" fill-opacity=".2" stroke="currentColor" stroke-width="1.1" d="M3.75 1.5h5.5l3.5 3.5v9.25a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1V2.5a1 1 0 0 1 1-1Z"/><path fill="none" stroke="currentColor" stroke-width="1" d="M9.25 1.5v3.5h3.5"/></svg><span class="count-num">${counts.files.toLocaleString()}</span></span>`;

      countsBadge = `<span class="tree-folder-counts" title="${esc(tooltip)}">${dirHtml}${fileHtml}</span>`;
    }

    const rootClass = isRoot ? 'node-root' : '';
    const padLeft = isRoot ? 8 : (8 + n.depth * 14);

    let snippetHtml = '';
    if (!dir && State.search.snippets && State.search.snippets.has(n.path)) {
      const snippets = State.search.snippets.get(n.path);
      if (snippets && snippets.length > 0) {
        snippetHtml = `<div class="sb-search-snippets" style="padding-left:${padLeft + 18}px">` +
          snippets.map(s => `<div class="sb-snippet-item">${esc(s.before)}<mark class="sb-snippet-mark">${esc(s.match)}</mark>${esc(s.after)}</div>`).join('') +
          `</div>`;
      }
    }

    html.push(
      `<div class="node ${dir ? (open ? 'folder open' : 'folder') : 'file'}" data-path="${esc(n.path)}">` +
      `<div class="node-row ${rootClass} ${active ? 'active' : ''} ${hit ? 'hit' : ''} ${isLockedRoot ? 'locked' : ''}" data-kind="${n.kind}"${rowTitle} style="padding-left:${padLeft}px">` +
      twisty + iconSvg + nameLabel + countsBadge + refreshBtn + delBtn + `</div>` + snippetHtml + `</div>`
    );

    if (dir && open && n.kids && n.kids.length) {
      for (const kid of n.kids) {
        renderSingleNode(kid);
      }
    }
  }

  const sortBy = (State.sort && State.sort.by) || 'name';
  const sortOrder = (State.sort && State.sort.order) || 'asc';
  const roots = State.flat.filter(n => n.kind === 'root');
  roots.sort((a, b) => cmpNodes(a, b, sortBy, sortOrder));

  for (const r of roots) {
    renderSingleNode(r);
  }

  if (!State.flat.length) {
    container.innerHTML = '<div style="padding:16px;color:var(--text3);text-align:center;">ยังไม่มีโฟลเดอร์ — กด “+ เพิ่มโฟลเดอร์” ด้านบน</div>';
  } else if (!html.length) {
    if (q) {
      container.innerHTML = `<div style="padding:16px;color:var(--text3);text-align:center;">ไม่พบผลลัพธ์ที่ตรงกับ “${esc(q)}”</div>`;
    } else if (State.filters && State.filters.types && State.filters.types.size === 0) {
      container.innerHTML = '<div style="padding:16px;color:var(--text3);text-align:center;">ไม่ได้เลือกชนิดไฟล์ — กรุณาเลือกชนิดไฟล์ด้านบน</div>';
    } else {
      container.innerHTML = '<div style="padding:16px;color:var(--text3);text-align:center;">ไม่พบไฟล์ที่ตรงกับตัวกรองชนิดไฟล์</div>';
    }
  } else {
    container.innerHTML = html.join('');
  }
}
