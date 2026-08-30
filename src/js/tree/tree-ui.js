import { State } from '../core/state.js';
import { isPdf, isImg, esc } from './tree-node.js';
import { isNodeVisible } from './tree-exp.js';

export function renderTree(container) {
  const q = State.search.q.trim();
  const html = [];

  for (const n of State.flat) {
    if (!isNodeVisible(n)) continue;
    const dir = n.kind === 'root' || n.kind === 'directory';
    const open = State.expanded.has(n.path);
    const active = State.current && State.current.path === n.path;
    const hit = State.search.fileHits.has(n.path);
    const twisty = dir ? `<span class="twisty">${open ? '▾' : '▸'}</span>` : '<span class="twisty"></span>';

    let iconSvg = '';
    if (dir) {
      iconSvg = '<svg class="ico" viewBox="0 0 16 16" width="15" height="15"><path fill="var(--folder-stroke)" fill-opacity=".25" stroke="var(--folder-stroke)" stroke-opacity=".7" d="M1.75 2.5h3.2c.2 0 .4.08.54.22l1.03 1.03H14.25c.41 0 .75.34.75.75v7.75a1.25 1.25 0 0 1-1.25 1.25H1.75A1.25 1.25 0 0 1 .5 12.25v-8.5a1.25 1.25 0 0 1 1.25-1.25Z"/></svg>';
    } else if (isPdf(n.name)) {
      iconSvg = '<svg class="ico" viewBox="0 0 16 16" width="15" height="15"><path fill="#f85149" fill-opacity=".25" stroke="#f85149" stroke-opacity=".9" d="M4 1.75c0-.69.56-1.25 1.25-1.25h4.09c.33 0 .65.13.88.36l2.42 2.42c.23.23.36.55.36.88v9.09c0 .69-.56 1.25-1.25 1.25H5.25c-.69 0-1.25-.56-1.25-1.25V1.75Z"/><text x="4.5" y="11.5" font-size="4.5" font-weight="bold" fill="#f85149">P</text></svg>';
    } else if (isImg(n.name)) {
      iconSvg = '<svg class="ico" viewBox="0 0 16 16" width="15" height="15"><rect x="1.5" y="2.5" width="13" height="11" rx="1.5" fill="#3fb950" fill-opacity=".22" stroke="#3fb950" stroke-opacity=".9"/><circle cx="5" cy="6" r="1.2" fill="#3fb950"/><path fill="#3fb950" d="M2.5 12l3-3.5 2.5 3 2.5-2 3 2.5v.5h-11z"/></svg>';
    } else {
      iconSvg = '<svg class="ico" viewBox="0 0 16 16" width="15" height="15"><path fill="var(--file-stroke)" fill-opacity=".2" stroke="var(--file-stroke)" stroke-opacity=".8" d="M4 1.75c0-.69.56-1.25 1.25-1.25h4.09c.33 0 .65.13.88.36l2.42 2.42c.23.23.36.55.36.88v9.09c0 .69-.56 1.25-1.25 1.25H5.25c-.69 0-1.25-.56-1.25-1.25V1.75Z"/></svg>';
    }

    html.push(
      `<div class="node ${dir ? (open ? 'folder open' : 'folder') : 'file'}" data-path="${esc(n.path)}">` +
      `<div class="node-row ${active ? 'active' : ''} ${hit ? 'hit' : ''}" data-kind="${n.kind}" style="padding-left:${8 + n.depth * 14}px">` +
      twisty + iconSvg + `<span class="nm">${esc(n.name)}</span></div></div>`
    );
  }

  if (!State.flat.length) {
    container.innerHTML = '<div style="padding:16px;color:var(--text3);text-align:center;">ยังไม่มีโฟลเดอร์ — กด “+ เพิ่มโฟลเดอร์” ด้านบน</div>';
  } else if (!html.length) {
    container.innerHTML = `<div style="padding:16px;color:var(--text3);text-align:center;">ไม่พบผลลัพธ์ที่ตรงกับ “${esc(q)}”</div>`;
  } else {
    container.innerHTML = html.join('');
  }
}
