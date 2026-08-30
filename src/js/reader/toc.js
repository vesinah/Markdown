import { State } from '../core/state.js';

export function buildToc(contentEl, tocPanel, tocList) {
  const hs = contentEl.querySelectorAll('h1,h2,h3,h4,h5,h6');
  State.toc = [];
  tocList.innerHTML = '';

  hs.forEach(h => {
    const lvl = +h.tagName[1];
    State.toc.push({ el: h, lvl });
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    a.className = 'l' + lvl;
    a.dataset.for = h.id;
    tocList.appendChild(a);
  });

  tocPanel.style.display = State.toc.length ? '' : 'none';
  if (!State.toc.length) {
    contentEl.onscroll = null;
    return;
  }

  const onScroll = () => {
    const top = contentEl.scrollTop;
    let cur = State.toc[0];
    for (const t of State.toc) {
      if (t.el.offsetTop - 90 <= top) cur = t;
      else break;
    }
    for (const a of tocList.children) {
      a.classList.toggle('on', a.dataset.for === (cur && cur.el.id));
    }
    const on = tocList.querySelector('a.on');
    if (on) on.scrollIntoView({ block: 'nearest' });
  };

  contentEl.onscroll = onScroll;
  tocList.onclick = e => {
    const a = e.target.closest('a');
    if (!a) return;
    e.preventDefault();
    const h = document.getElementById(a.dataset.for);
    if (h) contentEl.scrollTo({ top: h.offsetTop - 24, behavior: 'smooth' });
  };
  onScroll();
}
