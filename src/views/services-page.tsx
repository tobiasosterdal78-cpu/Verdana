import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { getContent } from "@/content";
import type { Phase } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { href, serviceHref, SERVICE_IDS } from "@/lib/routes";
import { breadcrumbNode, pageMetadata, webPageNode } from "@/lib/seo";

const PHASES: Phase[] = ["implement", "operate"];

export function servicesMetadata(locale: Locale): Metadata {
  const t = getContent(locale).pages.services;
  return pageMetadata({ locale, route: "services", title: t.metaTitle, description: t.metaDescription });
}

export function ServicesPage({ locale }: { locale: Locale }) {
  const { pages, site, services } = getContent(locale);
  const t = pages.services;
  const crumbs = [
    { name: site.breadcrumbHome, path: href(locale, "home") },
    { name: site.nav.services, path: href(locale, "services") },
  ];

  return (
    <>
      <PageHero crumbs={crumbs} breadcrumbsLabel={site.breadcrumbs} title={t.title} lead={t.lead} />

      {PHASES.map((phase, index) => (
        <section
          key={phase}
          aria-labelledby={`group-${phase}`}
          className={index > 0 ? "border-t border-hairline bg-canvas-raised" : "bg-canvas"}
        >
          <div className="wrap section-pad">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
              <h2 id={`group-${phase}`} className="type-h2">
                {t.groups[phase].title}
              </h2>
              <p className="type-lead max-w-xl text-fg-muted">{t.groups[phase].text}</p>
            </div>
            <ul className={`mt-14 grid gap-5 ${phase === "implement" ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
              {SERVICE_IDS.filter((id) => services[id].phase === phase).map((id) => {
                const service = services[id];
                return (
                  <li key={id}>
                    <Link
                      href={serviceHref(locale, id)}
                      className="group flex h-full flex-col rounded-card border border-hairline bg-surface p-8 spotlight spotlight-edge"
                    >
                      <span className="flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent-ink transition-colors group-hover:bg-accent group-hover:text-on-accent">
                        <Icon name={service.icon} size={26} weight="duotone" />
                      </span>
                      <h3 className="type-h3 mt-7 text-fg">{service.name}</h3>
                      <p className="mt-3 text-[1.02rem] leading-relaxed text-fg-muted">{service.lead}</p>
                      <ul className="mt-6 space-y-2 border-t border-hairline pt-6">
                        {service.included.slice(0, 3).map((item) => (
                          <li key={item} className="flex gap-2.5 text-[0.92rem] leading-snug text-fg-subtle">
                            <Icon name="check" size={15} weight="bold" className="mt-0.5 shrink-0 text-accent-ink" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[0.95rem] font-[560] text-accent-ink">
                        {site.readMore}
                        <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ))}

      <CtaBand locale={locale} />

      <JsonLd
        nodes={[
          webPageNode(locale, {
            name: t.metaTitle,
            description: t.metaDescription,
            path: href(locale, "services"),
            type: "CollectionPage",
          }),
          breadcrumbNode(crumbs),
        ]}
      />
    </>
  );
}
