"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { Icon } from "@/components/icons";
import { THEME_COLOR, type Theme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getSnapshot = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";

// The server renders light; the boot script has applied the real theme
// before hydration.
const getServerSnapshot = (): Theme => "light";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLOR[theme]);
}

/** Same decision as BOOT_SCRIPT: this session's choice, else light. */
function preferredTheme(): Theme {
  try {
    return sessionStorage.getItem("theme") === "dark" ? "dark" : "light";
  } catch {
    // Storage can be unavailable (private mode); the default applies.
    return "light";
  }
}

export function ThemeToggle({ toDark, toLight }: { toDark: string; toLight: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // A language switch remounts the document; restore this session's choice.
  useLayoutEffect(() => {
    applyTheme(preferredTheme());
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    // Colour transitions off for the flip, so everything changes on the
    // same frame (html.theme-switching in globals.css).
    const root = document.documentElement;
    root.classList.add("theme-switching");
    applyTheme(next);
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("theme-switching")));
    try {
      sessionStorage.setItem("theme", next);
    } catch {
      // The choice still applies to this page view.
    }
  }

  const label = theme === "dark" ? toLight : toDark;
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-hairline-strong text-fg-muted transition hover:border-control-edge hover:text-fg"
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
    </button>
  );
}
