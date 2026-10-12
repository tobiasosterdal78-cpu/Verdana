import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { ContactPrompt, ContactRow } from "@/components/ui/contact-prompt";
import { CtaBand } from "@/components/ui/cta-band";
import { FaqList } from "@/components/ui/faq-list";
import { PageHero } from "@/components/ui/page-hero";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";
import { href, SERVICE_SLUGS, serviceHref, type ServiceId } from "@/lib/routes";
import { breadcrumbNode, faqNode, pageMetadata, serviceNode, webPageNode } from "@/lib/seo";

/** The service id behind a slug in a language, or undefined. */
export function serviceIdFromSlug(locale: Locale, slug: string) {
  return (Object.keys(SERVICE_SLUGS) as ServiceId[]).find((id) => SERVICE_SLUGS[id][locale] === slug);
}

export function serviceParams(locale: Locale) {
  return (Object.keys(SERVICE_SLUGS) as ServiceId[]).map((id) => ({ slug: SERVICE_SLUGS[id][locale] }));
}

export function serviceMetadata(locale: Locale, id: ServiceId): Metadata {
  const service = getContent(locale).services[id];
  return pageMetadata({
    locale,
    route: { kind: "service", id },
    title: service.metaTitle,
    description: service.metaDescription,
  });
}

export function ServicePage({ locale, id }: { locale: Locale; id: ServiceId }) {
  const { services, site, pages } = getContent(locale);
  const service = services[id];
  const t = pages.service;
  const path = serviceHref(locale, id);
  const crumbs = [
    { name: site.breadcrumbHome, path: href(locale, "home") },
    { name: site.nav.services, path: href(locale, "services") },
    { name: service.name, path },
  ];

  return (
    <>
      <PageHero crumbs={crumbs} breadcrumbsLabel={site.breadcrumbs} title={service.title} lead={service.lead}>
        <div className="flex flex-wrap gap-3">
          <Link href={href(locale, "contact")} className="btn btn-primary">
            {t.primaryCta} <Icon name="arrowRight" size={18} />
          </Link>
          <Link href="#included" className="btn btn-ghost">
            {t.secondaryCta}
          </Link>
        </div>
      </PageHero>

      {/* Fit and scope */}
      <section className="bg-canvas">
        <div className="wrap section-pad grid gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="type-h2 max-w-[14ch]">{t.fit}</h2>
            <ul className="mt-10 space-y-5">
              {service.fit.map((item) => (
                <li key={item} className="flex gap-4 text-[1.06rem] leading-relaxed text-fg-muted">
                  <span className="mt-[0.62em] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div id="included" className="rounded-panel border border-hairline bg-canvas-raised p-8 md:p-10">
            <h2 className="type-h3 text-fg">{t.included}</h2>
            <ul className="mt-7 space-y-4">
              {service.included.map((item) => (
                <li key={item} className="flex gap-3.5 text-[1.02rem] leading-snug text-fg">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
                    <Icon name="check" size={13} weight="bold" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-t border-hairline bg-canvas-raised">
        <div className="wrap section-pad">
          <h2 className="type-h2 max-w-[16ch]">{t.outcomes}</h2>
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {service.outcomes.map((outcome) => (
              <li key={outcome.title} className="spotlight spotlight-edge rounded-card border border-hairline bg-surface p-8">
                <h3 className="type-h3 text-fg">{outcome.title}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-fg-muted">{outcome.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Steps */}
      <section className="tone-night relative overflow-hidden">
        <div className="wrap section-pad relative">
          <h2 className="type-h2 max-w-[16ch]">{t.steps}</h2>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-panel border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-4">
            {service.steps.map((step, index) => (
              <li key={step.title} className="spotlight bg-[#070c1a]/95 p-8">
                <span className="flex size-9 items-center justify-center rounded-full border border-glacier/40 text-sm font-semibold tabular-nums text-glacier">
                  {index + 1}
                </span>
                <h3 className="type-h3 mt-6 text-fg">{step.title}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-fg-subtle">{step.text}</p>
              </li>
            ))}
          </ol>
          <ContactRow locale={locale} className="mt-12" />
        </div>
      </section>

      {service.details ? (
        <section className="bg-canvas">
          <div className="wrap section-pad grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <h2 className="type-h2 max-w-[14ch]">{service.details.title}</h2>
            <div className="max-w-xl space-y-5 text-[1.08rem] leading-relaxed text-fg-muted">
              {service.details.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="border-t border-hairline bg-canvas-raised">
        <div className="wrap section-pad grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <h2 className="type-h2 max-w-[12ch]">{t.faq}</h2>
            <ContactPrompt locale={locale} kind="faq" className="mt-6" />
          </div>
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      {/* Related services */}
      <section className="bg-canvas">
        <div className="wrap section-pad">
          <h2 className="type-h2 max-w-[16ch]">{t.related}</h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {service.related.map((relatedId) => {
              const item = services[relatedId];
              return (
                <li key={relatedId}>
                  <Link
                    href={serviceHref(locale, relatedId)}
                    className="group flex h-full flex-col rounded-card border border-hairline bg-surface p-7 spotlight spotlight-edge"
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                      <Icon name={item.icon} size={26} weight="duotone" />
                    </span>
                    <span className="type-h3 mt-6 text-fg">{item.name}</span>
                    <span className="mt-2 text-[0.98rem] leading-snug text-fg-subtle">{item.blurb}</span>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.95rem] font-[560] text-accent-ink">
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

      <CtaBand locale={locale} />

      <JsonLd
        nodes={[
          webPageNode(locale, { name: service.metaTitle, description: service.metaDescription, path }),
          serviceNode(locale, {
            name: service.title,
            description: service.metaDescription,
            path,
            serviceType: service.serviceType,
          }),
          breadcrumbNode(crumbs),
          faqNode(service.faqs),
        ]}
      />
    </>
  );
}
