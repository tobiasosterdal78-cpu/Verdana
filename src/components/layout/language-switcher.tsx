"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { LOCALE_NAMES, LOCALE_SHORT, LOCALE_TAGS, LOCALES, localePath, splitLocale, type Locale } from "@/lib/i18n";
import { rememberPlace } from "@/lib/keep-place";
import { alternates, routeFromPathname } from "@/lib/routes";

/**
 * The current page in every language; the home page where a page has no
 * counterpart. Following a counterpart keeps the reader's place on the page.
 */
export function useLanguageChoices() {
  const pathname = usePathname();
  const { locale: current } = splitLocale(pathname);
  const route = routeFromPathname(pathname);
  const paths = route ? alternates(route) : undefined;
  const choices = LOCALES.map((locale) => {
    const href = paths?.[locale] ?? localePath(locale, "/");
    const keep = () => {
      if (paths && locale !== current) rememberPlace(href);
    };
    return { locale, href, keep };
  });
  return { current, choices };
}

/**
 * A globe and the current language; opens a list of the same page in each
 * language. A native <details>, so it works before hydration; the script
 * adds closing on Escape, outside clicks and when focus leaves.
 */
export function LanguageSwitcher({ label }: { label: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const root = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);
  const { current, choices } = useLanguageChoices();

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  // A tap before hydration opens the list natively; sync state with it.
  useEffect(() => {
    if (root.current?.open) setOpen(true);
  }, []);

  return (
    <details
      ref={root}
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
      suppressHydrationWarning
      className="group/lang relative shrink-0"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          setOpen(false);
          trigger.current?.focus({ preventScroll: true });
        }
      }}
    >
      <summary
        ref={trigger}
        onClick={(event) => {
          event.preventDefault();
          const next = !root.current?.open;
          if (root.current) root.current.open = next;
          setOpen(next);
        }}
        aria-label={`${LOCALE_SHORT[current]}, ${label}: ${LOCALE_NAMES[current]}`}
        className="flex h-10 cursor-pointer list-none items-center gap-1.5 rounded-full border border-hairline-strong px-3 text-[0.8rem] font-[560] tracking-wide text-fg-muted transition hover:border-control-edge hover:text-fg [&::-webkit-details-marker]:hidden"
      >
        <Icon name="globe" size={17} />
        {LOCALE_SHORT[current]}
        <Icon name="chevronDown" size={12} className="transition-transform group-open/lang:rotate-180" />
      </summary>
      <div className="absolute right-0 top-full z-50 mt-2 min-w-40 overflow-hidden rounded-2xl border border-hairline-strong bg-surface p-1.5 shadow-[var(--shadow-lg)]">
        {choices.map(({ locale, href, keep }) => (
          <LanguageOption
            key={locale}
            locale={locale}
            href={href}
            current={locale === current}
            onSelect={() => {
              keep();
              setOpen(false);
            }}
          />
        ))}
      </div>
    </details>
  );
}

function LanguageOption({
  locale,
  href,
  current,
  onSelect,
}: {
  locale: Locale;
  href: string;
  current: boolean;
  onSelect: () => void;
}) {
  return (
    <Link
      href={href}
      hrefLang={LOCALE_TAGS[locale]}
      lang={LOCALE_TAGS[locale]}
      onClick={onSelect}
      aria-current={current ? "true" : undefined}
      className={`flex min-h-11 items-center justify-between gap-4 rounded-xl px-3 text-[0.95rem] transition-colors hover:bg-surface-2 ${
        current ? "font-[560] text-fg" : "text-fg-muted hover:text-fg"
      }`}
    >
      {LOCALE_NAMES[locale]}
      <span className="text-[0.75rem] font-[560] tracking-wide text-fg-subtle">{LOCALE_SHORT[locale]}</span>
    </Link>
  );
}
