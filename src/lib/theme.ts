export type Theme = "light" | "dark";

/** Browser chrome colour per theme; matches --canvas in globals.css. */
export const THEME_COLOR: Record<Theme, string> = { light: "#ffffff", dark: "#060a15" };

/**
 * Runs before first paint. The site is light by default; a choice made with
 * the theme switch applies for the rest of the browsing session
 * (sessionStorage, written only when the switch is pressed). Inline and
 * synchronous, so the wrong theme never flashes.
 */
export const BOOT_SCRIPT =
  `(function(){var d=document.documentElement,t;try{t=sessionStorage.getItem('theme')}catch(e){}` +
  `var dark=t==='dark';` +
  `d.setAttribute('data-theme',dark?'dark':'light');` +
  `var m=document.querySelector('meta[name="theme-color"]');` +
  `if(m)m.setAttribute('content',dark?'${THEME_COLOR.dark}':'${THEME_COLOR.light}')})()`;
