import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { breadcrumbNode, pageMetadata, webPageNode } from "@/lib/seo";

export function aboutMetadata(locale: Locale): Metadata {
  const t = getContent(locale).pages.about;
  return pageMetadata({ locale, route: "about", title: t.metaTitle, description: t.metaDescription });
}

export function AboutPage({ locale }: { locale: Locale }) {
  const { pages, site, home } = getContent(locale);
  const t = pages.about;
  const crumbs = [
    { name: site.breadcrumbHome, path: href(locale, "home") },
    { name: site.nav.about, path: href(locale, "about") },
  ];

  return (
    <>
      <PageHero crumbs={crumbs} breadcrumbsLabel={site.breadcrumbs} title={t.title} lead={t.lead} />

      <section className="bg-canvas">
        <div className="wrap section-pad grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 className="type-h2 max-w-[12ch]">{t.why.title}</h2>
          <div className="max-w-xl space-y-5 text-[1.1rem] leading-relaxed text-fg-muted">
            {t.why.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-canvas-raised">
        <div className="wrap section-pad">
          <h2 className="type-h2 max-w-[16ch]">{t.focus.title}</h2>
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {t.focus.items.map((item) => (
              <li key={item.title} className="spotlight spotlight-edge rounded-card border border-hairline bg-surface p-8">
                <Icon name={item.icon} size={30} className="text-accent-ink" />
                <h3 className="type-h3 mt-6 text-fg">{item.title}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-fg-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="principles" className="bg-canvas">
        <div className="wrap section-pad grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 id="principles" className="type-h2 max-w-[12ch]">
            {t.principlesTitle}
          </h2>
          <ul className="divide-y divide-hairline border-y border-hairline">
            {home.principles.items.map((principle) => (
              <li key={principle.title} className="py-7">
                <h3 className="type-h3 text-fg">{principle.title}</h3>
                <p className="mt-2 text-[1.02rem] leading-relaxed text-fg-muted">{principle.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-hairline bg-canvas-raised">
        <div className="wrap section-pad">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="type-h2 max-w-[14ch]">{t.process.title}</h2>
            <p className="type-lead max-w-xl text-fg-muted">{t.process.lead}</p>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-panel border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-4">
            {home.process.steps.map((step, index) => (
              <li key={step.title} className="spotlight bg-surface p-8">
                <span className="text-[0.9rem] font-semibold tabular-nums text-accent-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="type-h3 mt-3 text-fg">{step.title}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-fg-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <Link href={href(locale, "services")} className="btn btn-ghost mt-10">
            {t.servicesCta} <Icon name="arrowRight" size={18} />
          </Link>
        </div>
      </section>

      <CtaBand locale={locale} />

      <JsonLd
        nodes={[
          webPageNode(locale, {
            name: t.metaTitle,
            description: t.metaDescription,
            path: href(locale, "about"),
            type: "AboutPage",
          }),
          breadcrumbNode(crumbs),
        ]}
      />
    </>
  );
}
