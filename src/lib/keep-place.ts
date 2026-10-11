/**
 * Keeps the reader's place when switching language. Each language has its
 * own root layout, so the switch loads the other page from scratch and would
 * start at the top. Before it leaves, the switch notes the section at the
 * top of the screen and how far into it the reader is; the new page runs
 * PLACE_SCRIPT inline after the footer, before first paint, and scrolls to
 * the same point. Both languages share one page structure, so sections line
 * up by position; if they do not, the share of the page scrolled is used.
 */

const KEY = "place";

type Place = { path: string; index: number; count: number; into: number; share: number };

/** The page's sections in order: each top-level section of main, then the footer. */
function sections(): HTMLElement[] {
  const list = [...document.querySelectorAll<HTMLElement>("main section")].filter(
    (section) => !section.parentElement?.closest("section"),
  );
  const footer = document.querySelector<HTMLElement>("main ~ footer");
  return footer ? [...list, footer] : list;
}

/** Notes where the reader is, for the page at `path` to pick up. */
export function rememberPlace(path: string) {
  if (window.scrollY < 1) return;
  const line = document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 0;
  const list = sections();
  const index = list.findIndex((section) => section.getBoundingClientRect().bottom > line);
  if (index < 0) return;
  const box = list[index].getBoundingClientRect();
  const room = document.documentElement.scrollHeight - window.innerHeight;
  const place: Place = {
    path,
    index,
    count: list.length,
    into: Math.max(0, (line - box.top) / box.height),
    share: room > 0 ? window.scrollY / room : 0,
  };
  try {
    sessionStorage.setItem(KEY, JSON.stringify(place));
  } catch {
    // Storage blocked: the new page simply starts at the top.
  }
}

/** Inline, after the footer: returns the reader to the noted place. Web fonts
 *  can still move lines once loaded, so it settles again when they are ready. */
export const PLACE_SCRIPT =
  `(function(){var p;try{p=JSON.parse(sessionStorage.getItem('${KEY}')||'null');sessionStorage.removeItem('${KEY}')}catch(e){return}` +
  `if(!p||p.path!==location.pathname)return;` +
  `function go(){var l=[].filter.call(document.querySelectorAll('main section'),function(s){return!s.parentElement.closest('section')});` +
  `var f=document.querySelector('main ~ footer');if(f)l.push(f);` +
  `var h=document.querySelector('.site-header'),line=h?h.getBoundingClientRect().bottom:0,d=document.documentElement,y;` +
  `if(l.length===p.count){var b=l[p.index].getBoundingClientRect();y=window.scrollY+b.top+p.into*b.height-line}` +
  `else y=p.share*(d.scrollHeight-window.innerHeight);` +
  `window.scrollTo({top:Math.max(0,Math.round(y)),behavior:'instant'});return window.scrollY}` +
  `var at=go();if(document.fonts)document.fonts.ready.then(function(){if(Math.abs(window.scrollY-at)<2)go()})})()`;
