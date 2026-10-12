"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BrandLockup } from "@/components/brand";
import { Icon, type IconName } from "@/components/icons";
import { LanguageSwitcher, useLanguageChoices } from "@/components/layout/language-switcher";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import type { Phase, SiteCopy } from "@/content/types";
import { LOCALE_NAMES, LOCALE_TAGS } from "@/lib/i18n";

export type HeaderService = { id: string; name: string; menu: string; icon: IconName; phase: Phase; href: string };
export type HeaderTopicGroup = {
  title: string;
  topics: { id: string; label: string; summary: string; icon: IconName; href: string }[];
};
/** Facts shown in the menus' feature cards. */
export type HeaderFeature = {
  navLabel: string;
  navDates: { version: string; date: string; ended: boolean }[];
  modules: { icon: IconName; title: string }[];
};
export type HeaderLinks = {
  home: string;
  services: string;
  businessCentral: string;
  insights: string;
  about: string;
  contact: string;
  featured: string;
  pricing: string;
  navEndOfLife: string;
};

type MenuId = "services" | "businessCentral";

/** Menus in the order their triggers appear, which sets the slide direction. */
const MENUS: MenuId[] = ["services", "businessCentral"];
const PHASES: Phase[] = ["implement", "operate"];

export function SiteHeader({
  t,
  links,
  services,
  topics,
  feature,
}: {
  t: SiteCopy;
  links: HeaderLinks;
  services: HeaderService[];
  topics: HeaderTopicGroup[];
  feature: HeaderFeature;
}) {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuId | null>(null);
  const [lastMenu, setLastMenu] = useState<MenuId>("services");
  const [morph, setMorph] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const bar = useRef<HTMLElement>(null);
  const nav = useRef<HTMLElement>(null);
  const shell = useRef<HTMLDivElement>(null);
  const triggers = useRef<Partial<Record<MenuId, HTMLButtonElement | null>>>({});
  const panes = useRef<Partial<Record<MenuId, HTMLDivElement | null>>>({});
  const mobileButton = useRef<HTMLButtonElement>(null);
  const { current, choices } = useLanguageChoices();
  const shown = menu ?? lastMenu;

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenu(null);
    setMorph(false);
    setMobileOpen(false);
  }

  /** Opens a menu, or closes with null. Moving between open menus slides the content. */
  const openMenu = (next: MenuId | null) => {
    setMorph(menu !== null && next !== null && next !== menu);
    if (next) setLastMenu(next);
    setMenu(next);
  };

  useEffect(() => {
    // The glass blur waits until the page has scrolled fully under the
    // header; before that it would pick up the white page behind it.
    const onScroll = () => setStuck(window.scrollY > (bar.current?.offsetHeight ?? 64) + 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = overflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!menu && !mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (menu) {
        triggers.current[menu]?.focus();
        setMenu(null);
        setMorph(false);
      }
      if (mobileOpen) {
        setMobileOpen(false);
        mobileButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu, mobileOpen]);

  // A press anywhere outside the triggers and the panel closes the menu.
  useEffect(() => {
    if (!menu) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (nav.current?.contains(target) || shell.current?.contains(target)) return;
      setMenu(null);
      setMorph(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menu]);

  // The panel takes the height of the menu on show, so it can unroll to it
  // and resize when moving between menus.
  useLayoutEffect(() => {
    const panel = shell.current;
    const pane = panes.current[shown];
    if (!panel || !pane) return;
    const measure = () => panel.style.setProperty("--menu-h", `${pane.offsetHeight}px`);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(pane);
    return () => observer.disconnect();
  }, [shown]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const section: MenuId | null = isActive(links.services)
    ? "services"
    : isActive(links.businessCentral)
      ? "businessCentral"
      : null;
  const labels: Record<MenuId, string> = { services: t.nav.services, businessCentral: t.nav.businessCentral };
  const pages = [
    { href: links.insights, label: t.nav.insights },
    { href: links.about, label: t.nav.about },
  ];
  const navLink =
    "nav-link whitespace-nowrap rounded-full px-3 py-2 text-[0.95rem] font-[520] text-fg-muted xl:px-3.5 transition-colors hover:text-fg aria-[current=page]:text-fg aria-expanded:text-fg data-[current]:text-fg";

  return (
    <header
      ref={bar}
      data-stuck={stuck ? "" : undefined}
      data-menu={menu ? "" : undefined}
      className="site-header tone-night sticky top-0 z-50"
      onBlur={(event) => {
        // Focus moving out of the header closes the menu. A press outside is
        // handled on pointerdown, so a click on blank menu space does not.
        const next = event.relatedTarget as Node | null;
        if (next && !event.currentTarget.contains(next)) {
          setMenu(null);
          setMorph(false);
        }
      }}
    >
      <div aria-hidden="true" data-open={menu ? "" : undefined} className="menu-veil max-lg:hidden" />

      <div className="wrap flex h-16 items-center gap-3">
        <Link href={links.home} aria-label={t.homeLabel} className="-my-1 shrink-0 rounded-md py-1">
          <BrandLockup className="h-[1.6rem] sm:h-[2.1rem]" priority />
        </Link>

        <nav ref={nav} aria-label={t.primaryNav} className="ml-5 hidden shrink-0 lg:block xl:ml-12">
          <ul className="flex items-center">
            {MENUS.map((id) => (
              <li key={id}>
                <button
                  ref={(element) => {
                    triggers.current[id] = element;
                  }}
                  type="button"
                  aria-expanded={menu === id}
                  aria-controls={`menu-${id}`}
                  data-current={section === id ? "" : undefined}
                  onClick={() => openMenu(menu === id ? null : id)}
                  onKeyDown={(event) => {
                    if (event.key !== "ArrowDown") return;
                    event.preventDefault();
                    openMenu(id);
                    requestAnimationFrame(() => panes.current[id]?.querySelector<HTMLElement>("a")?.focus());
                  }}
                  className={`flex items-center gap-1.5 ${navLink}`}
                >
                  <span className="nav-label">{labels[id]}</span>
                  <Icon
                    name="chevronDown"
                    size={14}
                    className={`transition-transform duration-300 ${menu === id ? "rotate-180" : ""}`}
                  />
                </button>
              </li>
            ))}
            {pages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} aria-current={isActive(page.href) ? "page" : undefined} className={navLink}>
                  <span className="nav-label">{page.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle toDark={t.theme.toDark} toLight={t.theme.toLight} />
          <div className="hidden sm:block">
            <LanguageSwitcher label={t.language} />
          </div>
          <span aria-hidden="true" className="mx-2 hidden h-6 w-px bg-hairline-strong lg:block" />
          {/* Always within reach: a short label on phones, the full one from sm.
              Below 350px there is no room beside the lockup; the menu has it. */}
          <Link
            href={links.contact}
            className="btn btn-primary min-h-9 px-3.5 text-[0.875rem] max-[349px]:hidden sm:min-h-10 sm:px-5 sm:text-[0.95rem]"
          >
            <span className="sm:hidden">{t.footer.links.contact}</span>
            <span className="max-sm:hidden">{t.cta}</span>
          </Link>
          <button
            ref={mobileButton}
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
            className="-mr-1 flex size-10 items-center justify-center rounded-full border border-hairline-strong text-fg lg:hidden"
          >
            <span className="sr-only">{mobileOpen ? t.menu.close : t.menu.open}</span>
            <Icon name={mobileOpen ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {/* Desktop menus */}
      <div
        ref={shell}
        data-open={menu ? "" : undefined}
        data-morph={morph ? "" : undefined}
        inert={!menu}
        onClick={(event) => {
          if ((event.target as Element).closest("a")) openMenu(null);
        }}
        className="menu-shell max-lg:hidden"
      >
        {MENUS.map((id, index) => {
          const offset = index - MENUS.indexOf(shown);
          return (
            <div
              key={id}
              ref={(element) => {
                panes.current[id] = element;
              }}
              id={`menu-${id}`}
              data-active={offset === 0 ? "" : undefined}
              data-side={offset < 0 ? "before" : offset > 0 ? "after" : undefined}
              inert={menu !== id}
              className="menu-pane"
            >
              {id === "services" ? (
                <ServicesMenu t={t} links={links} services={services} feature={feature} isActive={isActive} />
              ) : (
                <BusinessCentralMenu t={t} links={links} topics={topics} feature={feature} />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t border-hairline bg-canvas lg:hidden"
      >
        <nav aria-label={t.menu.label} className="wrap flex min-h-full flex-col pb-8 pt-4">
          <ul className="divide-y divide-hairline">
            {[
              { href: links.services, label: t.nav.services },
              { href: links.businessCentral, label: t.nav.businessCentral },
              ...pages,
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="flex items-center justify-between py-4 text-[1.35rem] font-semibold tracking-tight text-fg-muted aria-[current=page]:text-fg"
                >
                  {item.label}
                  <Icon name="arrowRight" size={20} className="text-fg-subtle" />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 grid gap-1">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={service.href}
                  aria-current={isActive(service.href) ? "page" : undefined}
                  className="menu-link -mx-3 items-center text-[1.02rem] text-fg-muted aria-[current=page]:text-fg"
                >
                  <span className="menu-icon">
                    <Icon name={service.icon} size={20} />
                  </span>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-2 border-t border-hairline pt-6">
            <Icon name="globe" size={18} className="text-fg-subtle" />
            {choices.map(({ locale, href }) => (
              <Link
                key={locale}
                href={href}
                hrefLang={LOCALE_TAGS[locale]}
                lang={LOCALE_TAGS[locale]}
                aria-current={locale === current ? "true" : undefined}
                className="rounded-full px-3 py-1.5 text-[0.95rem] text-fg-muted aria-[current=true]:bg-surface-2 aria-[current=true]:font-[560] aria-[current=true]:text-fg"
              >
                {LOCALE_NAMES[locale]}
              </Link>
            ))}
          </div>
          <Link href={links.contact} className="btn btn-primary mt-auto w-full translate-y-4">
            {t.cta}
          </Link>
        </nav>
      </div>
      <ScrollProgress />
    </header>
  );
}

function MenuItem({
  href,
  icon,
  title,
  text,
  current,
}: {
  href: string;
  icon: IconName;
  title: string;
  text: string;
  current?: boolean;
}) {
  return (
    <Link href={href} aria-current={current ? "page" : undefined} className="menu-link spotlight">
      <span className="menu-icon">
        <Icon name={icon} size={22} />
      </span>
      <span className="min-w-0 pt-0.5">
        <span className="block text-[1.02rem] font-[560] leading-snug tracking-[-0.01em] text-fg">{title}</span>
        <span className="mt-0.5 block text-balance text-[0.9rem] leading-snug text-fg-subtle">{text}</span>
      </span>
    </Link>
  );
}

/**
 * A titled column of menu items. It runs on its parent's row tracks
 * (subgrid), so every row starts at the same height in every column,
 * however long the text in a neighbouring column is.
 */
function MenuGroup({ title, rows, children }: { title: string; rows: number; children: React.ReactNode }) {
  return (
    <div className="grid min-w-0 grid-rows-subgrid" style={{ gridRow: `span ${rows + 1}` }}>
      <p className="menu-label">{title}</p>
      <ul className="grid grid-rows-subgrid" style={{ gridRow: `span ${rows}` }}>
        {children}
      </ul>
    </div>
  );
}

function RailLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex shrink-0 items-center gap-2 font-[560] text-fg">
      {children}
      <Icon name="arrowRight" size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}

function ServicesMenu({
  t,
  links,
  services,
  feature,
  isActive,
}: {
  t: SiteCopy;
  links: HeaderLinks;
  services: HeaderService[];
  feature: HeaderFeature;
  isActive: (href: string) => boolean;
}) {
  const groups = PHASES.map((phase) => ({ phase, items: services.filter((service) => service.phase === phase) }));
  const rows = Math.max(...groups.map((group) => group.items.length));
  return (
    <div className="menu-inner">
      <div
        className="wrap grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.85fr)] gap-x-6 gap-y-1 py-9"
        style={{ gridTemplateRows: `auto repeat(${rows}, auto)` }}
      >
        {groups.map(({ phase, items }) => (
          <MenuGroup key={phase} title={t.phases[phase].title} rows={rows}>
            {items.map((service) => (
              <li key={service.id} className="grid">
                <MenuItem
                  href={service.href}
                  icon={service.icon}
                  title={service.name}
                  text={service.menu}
                  current={isActive(service.href)}
                />
              </li>
            ))}
          </MenuGroup>
        ))}
        <Link href={links.featured} className="menu-feature group" style={{ gridRow: `span ${rows + 1}` }}>
          <span className="w-fit rounded-full bg-white/10 px-2.5 py-1 text-[0.75rem] font-[560] text-[#cfdcff]">
            {t.servicesMenu.featuredLabel}
          </span>
          <span className="mt-3.5 block text-[1.25rem] font-semibold leading-snug tracking-[-0.015em] text-white">
            {t.servicesMenu.featuredTitle}
          </span>
          <span className="mt-5 block text-[0.8rem] font-[560] text-[#9fb0d0]">{feature.navLabel}</span>
          <span className="mt-2 grid gap-1">
            {feature.navDates.map((item) => (
              <span
                key={item.version}
                className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.06] px-3.5 py-2 text-[0.9rem]"
              >
                <span className="font-[560] text-white">{item.version}</span>
                <span className={item.ended ? "text-[#8a96ae] line-through decoration-1" : "tabular-nums text-[#cfe0ff]"}>
                  {item.date}
                </span>
              </span>
            ))}
          </span>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.92rem] font-[560] text-white">
            {t.servicesMenu.featuredCta}
            <Icon name="arrowRight" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
      <div className="menu-rail">
        <div className="wrap flex items-center justify-between gap-6 py-4 text-[0.95rem]">
          <p className="text-fg-muted">
            {t.servicesMenu.help}{" "}
            <Link href={links.contact} className="font-[560] text-fg underline decoration-white/30 underline-offset-4 hover:decoration-white">
              {t.cta}
            </Link>
          </p>
          <RailLink href={links.services}>{t.servicesMenu.all}</RailLink>
        </div>
      </div>
    </div>
  );
}

function BusinessCentralMenu({
  t,
  links,
  topics,
  feature,
}: {
  t: SiteCopy;
  links: HeaderLinks;
  topics: HeaderTopicGroup[];
  feature: HeaderFeature;
}) {
  const rows = Math.max(...topics.map((group) => group.topics.length));
  return (
    <div className="menu-inner">
      <div
        className="wrap grid grid-cols-3 gap-x-6 gap-y-1 py-9 xl:grid-cols-[minmax(0,1.15fr)_repeat(3,minmax(0,1fr))]"
        style={{ gridTemplateRows: `auto repeat(${rows}, auto)` }}
      >
        <Link
          href={links.businessCentral}
          className="menu-feature group hidden xl:flex"
          style={{ gridRow: `span ${rows + 1}` }}
        >
          <span className="block text-[1.25rem] font-semibold leading-snug tracking-[-0.015em] text-white">
            {t.businessCentralMenu.title}
          </span>
          <span className="mt-2 block text-[0.92rem] leading-relaxed text-[#b8c4dc]">{t.businessCentralMenu.text}</span>
          <span className="mt-6 grid grid-cols-2 gap-x-3 gap-y-2.5">
            {feature.modules.map((module) => (
              <span key={module.title} className="flex min-w-0 items-center gap-2.5 text-[0.86rem] text-[#dbe5ff]">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-[#9db6ff]">
                  <Icon name={module.icon} size={15} />
                </span>
                {module.title}
              </span>
            ))}
          </span>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.92rem] font-[560] text-white">
            {t.businessCentralMenu.cta}
            <Icon name="arrowRight" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
        {topics.map((group) => (
          <MenuGroup key={group.title} title={group.title} rows={rows}>
            {group.topics.map((topic) => (
              <li key={topic.id} className="grid">
                <MenuItem href={topic.href} icon={topic.icon} title={topic.label} text={topic.summary} />
              </li>
            ))}
          </MenuGroup>
        ))}
      </div>
      <div className="menu-rail">
        <div className="wrap flex items-center justify-between gap-6 py-4 text-[0.95rem]">
          <div className="flex min-w-0 items-center gap-6">
            <span className="shrink-0 text-fg-subtle">{t.businessCentralMenu.guides}</span>
            {[
              { href: links.pricing, label: t.footer.links.pricing },
              { href: links.navEndOfLife, label: t.footer.links.navEndOfLife },
              { href: links.featured, label: t.footer.links.navToBc },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="truncate text-fg-muted transition-colors hover:text-fg">
                {guide.label}
              </Link>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-6">
            <span className="xl:hidden">
              <RailLink href={links.businessCentral}>{t.businessCentralMenu.cta}</RailLink>
            </span>
            <RailLink href={links.insights}>{t.footer.links.allInsights}</RailLink>
          </div>
        </div>
      </div>
    </div>
  );
}
