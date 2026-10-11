import Link from "next/link";
import { BrandMark, BrandWordmark } from "@/components/brand";
import { FooterLanguages } from "@/components/layout/footer-languages";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";
import { href, insightHref, serviceHref, SERVICE_IDS } from "@/lib/routes";
import { company } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const { site, services } = getContent(locale);
  const t = site.footer;
  const l = t.links;

  const columns = [
    {
      title: t.columns.services,
      links: SERVICE_IDS.map((id) => ({ href: serviceHref(locale, id), label: services[id].name })),
    },
    {
      title: t.columns.businessCentral,
      links: [
        { href: href(locale, "businessCentral"), label: l.whatIsBc },
        { href: insightHref(locale, "pricing"), label: l.pricing },
        { href: insightHref(locale, "navEndOfLife"), label: l.navEndOfLife },
        { href: insightHref(locale, "navToBusinessCentral"), label: l.navToBc },
        { href: insightHref(locale, "switchingErp"), label: l.switchingErp },
        { href: href(locale, "insights"), label: l.allInsights },
      ],
    },
    {
      title: t.columns.company,
      links: [
        { href: href(locale, "about"), label: l.about },
        { href: href(locale, "home", "how-we-work"), label: l.howWeWork },
        { href: href(locale, "contact"), label: l.contact },
      ],
    },
    {
      title: t.columns.trust,
      links: [
        { href: href(locale, "about", "principles"), label: l.principles },
        { href: href(locale, "accessibility"), label: l.accessibility },
        { href: href(locale, "security"), label: l.security },
        { href: "/.well-known/security.txt", label: l.securityTxt },
      ],
    },
    {
      title: t.columns.legal,
      links: [
        { href: href(locale, "privacy"), label: l.privacy },
        { href: href(locale, "cookies"), label: l.cookies },
        { href: href(locale, "terms"), label: l.terms },
      ],
    },
  ];

  return (
    <footer className="tone-night relative overflow-hidden">
      <div className="wrap relative pt-20">
        <div className="max-w-sm">
          {/* The V alone, signed with a short blue rule like a quote. */}
          <Link href={href(locale, "home")} aria-label={site.homeLabel} className="inline-flex items-center gap-3.5 rounded-md">
            <span aria-hidden="true" className="h-[2px] w-6 rounded-full bg-accent" />
            <BrandMark className="h-7" />
          </Link>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-fg-muted">{t.tagline}</p>
          <p className="mt-5 text-[0.8rem] font-[560] tracking-wide text-fg-subtle">{t.region}</p>
          <div className="mt-3">
            <FooterLanguages label={t.languages} />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-[0.8rem] font-semibold tracking-wide text-fg">{column.title}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="link-quiet text-[0.92rem] text-fg-muted hover:text-fg">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-hairline pt-7 text-[0.8rem] leading-relaxed text-fg-subtle md:flex-row md:justify-between md:gap-12">
          <div className="shrink-0 space-y-1">
            <p>
              © {new Date().getFullYear()} Verdana. {t.rights}
            </p>
            <p>
              {t.orgNumber} {company.orgNumber}
            </p>
          </div>
          <p className="max-w-xl md:text-right">{t.trademarks}</p>
        </div>

        <BrandWordmark className="mt-14 mb-12 w-full md:mt-16 md:mb-16" />
      </div>
    </footer>
  );
}
