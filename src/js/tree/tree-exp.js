import { State } from '../core/state.js';

export function getFinalExpandedPaths() {
  const expanded = new Set();
  for (const r of State.roots) expanded.add(r.name);

  const finalNodes = State.flat.filter(n => (n.kind === 'directory' || n.kind === 'root') && n.name.toLowerCase() === 'final');
  
  if (finalNodes.length > 0) {
    for (const fn of finalNodes) {
      expanded.add(fn.path);
      let p = fn.parent;
      while (p) {
        expanded.add(p.path);
        p = p.parent;
      }
    }
  }
  return expanded;
}

export function expandOnlyFinal(saveWsCallback) {
  State.expanded = getFinalExpandedPaths();
  State.collapsed.clear();
  if (saveWsCallback) saveWsCallback();
}

export function collapseAllTruly(saveWsCallback) {
  State.expanded.clear();
  State.collapsed.clear();
  if (saveWsCallback) saveWsCallback();
}

export function isNodeVisible(n) {
  if (n.kind === 'root') return true;
  let p = n.parent;
  while (p) {
    if (!State.expanded.has(p.path)) return false;
    p = p.parent;
  }
  return true;
}
