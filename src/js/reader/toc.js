import { State } from '../core/state.js';

export function buildToc(contentEl, tocPanel, tocList) {
  const hs = contentEl.querySelectorAll('h1,h2,h3,h4,h5,h6');
  State.toc = [];
  tocList.innerHTML = '';

  const scrollPane = contentEl.closest('.md-scroll-pane') || document.getElementById('md-scroll-pane') || contentEl;

  hs.forEach((h, i) => {
    const lvl = +h.tagName[1];
    State.toc.push({ el: h, lvl });
    const a = document.createElement('a');
    a.href = '#' + (h.id || ('heading-' + i));
    a.textContent = h.textContent;
    a.className = 'l' + lvl;
    a.dataset.for = h.id;
    a.dataset.idx = String(i);
    tocList.appendChild(a);
  });

  tocPanel.style.display = State.toc.length ? '' : 'none';
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
        for (const a of tocList.children) {
          a.classList.toggle('on', a.dataset.for === (last.el.id || ''));
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

    for (const a of tocList.children) {
      a.classList.toggle('on', a.dataset.for === (cur && cur.el.id));
    }
    const on = tocList.querySelector('a.on');
    if (on) on.scrollIntoView({ block: 'nearest' });
  };

  scrollPane.onscroll = onScroll;

  tocList.onclick = e => {
    const a = e.target.closest('a');
    if (!a) return;
    e.preventDefault();

    let h = null;
    if (a.dataset.idx !== undefined && State.toc[+a.dataset.idx]) {
      h = State.toc[+a.dataset.idx].el;
    }
    if (!h && a.dataset.for) {
      h = document.getElementById(a.dataset.for);
    }

    if (h) {
      const pane = contentEl.closest('.md-scroll-pane') || document.getElementById('md-scroll-pane') || contentEl;
      const targetTop = h.getBoundingClientRect().top - pane.getBoundingClientRect().top + pane.scrollTop - 20;
      pane.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    }
  };

  onScroll();
}
