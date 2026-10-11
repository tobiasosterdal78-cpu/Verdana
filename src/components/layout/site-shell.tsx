import "@fontsource-variable/instrument-sans/standard.css";
import "@/app/globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { NAV_VERSIONS } from "@/components/home/nav-timeline";
import { SiteHeader, type HeaderFeature, type HeaderService, type HeaderTopicGroup } from "@/components/layout/site-header";
import { Spotlight } from "@/components/spotlight";
import { getContent } from "@/content";
import { LOCALE_TAGS, type Locale } from "@/lib/i18n";
import { href, insightHref, serviceHref, SERVICE_IDS } from "@/lib/routes";
import { PLACE_SCRIPT } from "@/lib/keep-place";
import { BOOT_SCRIPT, THEME_COLOR } from "@/lib/theme";

/**
 * The document, shared by both languages' root layouts and by
 * app/global-not-found.tsx, which renders outside every layout.
 */
export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const { site, services, businessCentral, home } = getContent(locale);
  const headerServices: HeaderService[] = SERVICE_IDS.map((id) => ({
    id,
    name: services[id].name,
    menu: services[id].menu,
    icon: services[id].icon,
    phase: services[id].phase,
    href: serviceHref(locale, id),
  }));
  const headerTopics: HeaderTopicGroup[] = businessCentral.guide.groups.map((group) => ({
    title: group.title,
    topics: group.topics.map((topic) => ({
      id: topic.id,
      label: topic.label,
      summary: topic.summary,
      icon: topic.icon,
      href: href(locale, "businessCentral", topic.id),
    })),
  }));
  const today = new Date();
  const monthYear = new Intl.DateTimeFormat(LOCALE_TAGS[locale], { month: "long", year: "numeric" });
  const headerFeature: HeaderFeature = {
    navLabel: home.nav.until,
    navDates: NAV_VERSIONS.slice(-3).map((item) => {
      const end = new Date(`${item.end}T23:59:59`);
      return { version: item.version, date: monthYear.format(end), ended: end <= today };
    }),
    modules: home.businessCentral.capabilities
      .filter((item) => !item.premium)
      .map(({ icon, title }) => ({ icon, title })),
  };

  return (
    <html lang={LOCALE_TAGS[locale]} data-theme="light" data-scroll-behavior="smooth" suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element -- shared document for both root layouts */}
      <head>
        <meta name="theme-color" content={THEME_COLOR.light} />
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-[560] focus:text-on-accent"
        >
          {site.skipToContent}
        </a>
        <SiteHeader
          t={site}
          services={headerServices}
          topics={headerTopics}
          feature={headerFeature}
          links={{
            home: href(locale, "home"),
            services: href(locale, "services"),
            businessCentral: href(locale, "businessCentral"),
            insights: href(locale, "insights"),
            about: href(locale, "about"),
            contact: href(locale, "contact"),
            featured: insightHref(locale, "navToBusinessCentral"),
            pricing: insightHref(locale, "pricing"),
            navEndOfLife: insightHref(locale, "navEndOfLife"),
          }}
        />
        <main id="content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter locale={locale} />
        <script dangerouslySetInnerHTML={{ __html: PLACE_SCRIPT }} />
        <Spotlight />
      </body>
    </html>
  );
}
