import { State } from '../core/state.js';

export function buildToc(contentEl, tocPanel, tocList) {
  const hs = contentEl.querySelectorAll('h1,h2,h3,h4,h5,h6');
  State.toc = [];
  tocList.innerHTML = '';

  const railList = tocPanel.querySelector('#toc-rail-list');
  if (railList) railList.innerHTML = '';

  const scrollPane = contentEl.closest('.md-scroll-pane') || document.getElementById('md-scroll-pane') || contentEl;

  // Track numbering for H1 and H2 if not explicitly numbered
  let h1Count = 0;
  let h2Count = 0;

  hs.forEach((h, i) => {
    const lvl = +h.tagName[1];
    State.toc.push({ el: h, lvl });

    // 1. Build Full TOC Item
    const a = document.createElement('a');
    a.href = '#' + (h.id || ('heading-' + i));
    a.textContent = h.textContent;
    a.className = 'l' + lvl;
    a.dataset.for = h.id;
    a.dataset.idx = String(i);
    tocList.appendChild(a);

    // 2. Build Mini-Rail Item
    if (railList) {
      const item = document.createElement('div');
      item.className = 'rail-item';
      item.dataset.for = h.id;
      item.dataset.idx = String(i);

      let innerBtn = '';
      const text = h.textContent.trim();

      // Extract number from heading if present (e.g. "บทที่ 1", "1.1", "2.")
      const matchNum = text.match(/^(?:บทที่\s*)?(\d+(?:\.\d+)*)/i);

      if (lvl === 1) {
        h1Count++;
        h2Count = 0;
        const numLabel = matchNum ? matchNum[1] : String(h1Count);
        innerBtn = `<button type="button" class="rail-btn-h1" title="${text}">${numLabel}</button>`;
      } else if (lvl === 2) {
        h2Count++;
        const numLabel = matchNum ? matchNum[1] : `${h1Count || 1}.${h2Count}`;
        innerBtn = `<button type="button" class="rail-btn-h2" title="${text}">${numLabel}</button>`;
      } else {
        innerBtn = `<div class="rail-dot" title="${text}"></div>`;
      }

      const popover = `
        <div class="rail-popover">
          <span class="popover-level">${lvl === 1 ? 'บทหลัก (H1)' : (lvl === 2 ? 'หัวข้อ (H2)' : 'ข้อย่อย (H' + lvl + ')')}</span>
          <span class="popover-title">${text}</span>
        </div>
      `;

      item.innerHTML = innerBtn + popover;
      railList.appendChild(item);
    }
  });

  tocPanel.style.display = State.toc.length ? '' : 'none';
  tocPanel.classList.toggle('toc-mini', !!State.ui.tocMini);

  if (!State.toc.length) {
    if (scrollPane) scrollPane.onscroll = null;
    return;
  }

  const onScroll = () => {
    const scrollPaneTop = scrollPane.scrollTop;
    const scrollHeight = scrollPane.scrollHeight;
    const clientHeight = scrollPane.clientHeight;

    // When scrolled near bottom, activate last heading
    if (scrollHeight > clientHeight && scrollPaneTop + clientHeight >= scrollHeight - 30) {
      const last = State.toc[State.toc.length - 1];
      if (last) {
        const lastId = last.el.id || '';
        for (const a of tocList.children) {
          a.classList.toggle('on', a.dataset.for === lastId);
        }
        if (railList) {
          for (const item of railList.children) {
            item.classList.toggle('on', item.dataset.for === lastId);
          }
        }
        const on = tocList.querySelector('a.on');
        if (on) on.scrollIntoView({ block: 'nearest' });
        return;
      }
    }

    const paneRect = scrollPane.getBoundingClientRect();
    let cur = State.toc[0];
    for (const t of State.toc) {
      const topOffset = t.el.getBoundingClientRect().top - paneRect.top;
      if (topOffset <= 80) {
        cur = t;
      } else {
        break;
      }
    }

    const curId = cur && cur.el.id;
    for (const a of tocList.children) {
      a.classList.toggle('on', a.dataset.for === curId);
    }
    if (railList) {
      for (const item of railList.children) {
        item.classList.toggle('on', item.dataset.for === curId);
      }
    }
    const on = tocList.querySelector('a.on');
    if (on) on.scrollIntoView({ block: 'nearest' });
  };

  scrollPane.onscroll = onScroll;

  const handleHeadingClick = e => {
    const targetEl = e.target.closest('a, .rail-item');
    if (!targetEl) return;
    e.preventDefault();

    let h = null;
    if (targetEl.dataset.idx !== undefined && State.toc[+targetEl.dataset.idx]) {
      h = State.toc[+targetEl.dataset.idx].el;
    }
    if (!h && targetEl.dataset.for) {
      h = document.getElementById(targetEl.dataset.for);
    }

    if (h) {
      const pane = contentEl.closest('.md-scroll-pane') || document.getElementById('md-scroll-pane') || contentEl;
      const targetTop = h.getBoundingClientRect().top - pane.getBoundingClientRect().top + pane.scrollTop - 20;
      pane.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    }
  };

  tocList.onclick = handleHeadingClick;
  if (railList) railList.onclick = handleHeadingClick;

  onScroll();
}
