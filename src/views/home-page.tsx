import type { Metadata } from "next";
import Link from "next/link";
import { NavTimeline } from "@/components/home/nav-timeline";
import { OrderFlow } from "@/components/home/order-flow";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PinField } from "@/components/pin-field";
import { CtaBand } from "@/components/ui/cta-band";
import { FaqList } from "@/components/ui/faq-list";
import { SectionHead } from "@/components/ui/section-head";
import { getContent } from "@/content";
import type { Phase } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { href, insightHref, serviceHref, SERVICE_IDS } from "@/lib/routes";
import { faqNode, organizationNode, pageMetadata, webPageNode, websiteNode } from "@/lib/seo";

const PHASES: Phase[] = ["implement", "operate"];

export function homeMetadata(locale: Locale): Metadata {
  const { home } = getContent(locale);
  return pageMetadata({ locale, route: "home", title: home.metaTitle, description: home.metaDescription });
}

export function HomePage({ locale }: { locale: Locale }) {
  const { home: t, site, services } = getContent(locale);

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="tone-night relative overflow-hidden">
        <PinField />
        <div className="wrap relative pb-20 pt-20 sm:pt-28 lg:pb-28 lg:pt-32">
          <h1 id="hero-title" className="type-display">
            <span className="block max-w-[15ch]">{t.hero.title[0]}</span>{" "}
            <span className="block text-fg-subtle">{t.hero.title[1]}</span>
          </h1>
          <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="max-w-[34rem] text-[1.2rem] font-[480] leading-snug tracking-[-0.01em] text-fg sm:text-[1.35rem]">
                {t.hero.lead[0]}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={href(locale, "contact")} className="btn btn-primary">
                  {t.hero.primaryCta} <Icon name="arrowRight" size={18} />
                </Link>
                <Link href="#how-we-work" className="btn btn-ghost">
                  {t.hero.secondaryCta}
                </Link>
              </div>
            </div>
            <p className="max-w-[36rem] text-[1.05rem] leading-relaxed text-fg-muted lg:pt-1">{t.hero.lead[1]}</p>
          </div>
        </div>
      </section>

      {/* Services: the heading stays in view while the list scrolls past. */}
      <section aria-labelledby="services-title" className="bg-canvas">
        <div className="wrap section-pad">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 id="services-title" className="type-h2 max-w-[13ch]">
                {t.services.title}
              </h2>
              <p className="type-lead mt-6 max-w-md text-fg-muted">{t.services.lead}</p>
              <Link href={href(locale, "services")} className="btn btn-ghost mt-9">
                {t.services.all} <Icon name="arrowRight" size={18} />
              </Link>
            </div>
            <div className="space-y-16">
              {PHASES.map((phase) => (
                <div key={phase}>
                  <h3 className="text-[1.2rem] font-semibold tracking-tight text-fg">{site.phases[phase].title}</h3>
                  <p className="mt-2 max-w-xl text-[1.02rem] leading-relaxed text-fg-subtle">{site.phases[phase].intro}</p>
                  <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                    {SERVICE_IDS.filter((id) => services[id].phase === phase).map((id) => (
                      <li key={id}>
                        <Link
                          href={serviceHref(locale, id)}
                          className="spotlight group -mx-4 flex items-center gap-5 rounded-xl px-4 py-7 sm:gap-6"
                        >
                          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink transition-colors group-hover:bg-accent group-hover:text-on-accent">
                            <Icon name={services[id].icon} size={26} weight="duotone" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-[1.2rem] font-semibold tracking-tight text-fg sm:text-[1.35rem]">
                              {services[id].name}
                            </span>
                            <span className="mt-1 block text-[0.98rem] leading-snug text-fg-subtle">
                              {services[id].blurb}
                            </span>
                          </span>
                          <Icon
                            name="arrowRight"
                            size={22}
                            className="shrink-0 text-fg-subtle transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent-ink"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamics NAV */}
      <section aria-labelledby="nav-title" className="bg-canvas-raised">
        <div className="wrap section-pad">
          <SectionHead title={t.nav.title} lead={t.nav.lead} id="nav-title" />
          <div className="mt-14">
            <NavTimeline locale={locale} t={t.nav} />
          </div>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-[0.9rem] text-fg-subtle">{t.nav.source}</p>
            <div className="flex flex-wrap gap-3">
              <Link href={serviceHref(locale, "migration")} className="btn btn-primary">
                {t.nav.primary} <Icon name="arrowRight" size={18} />
              </Link>
              <Link href={insightHref(locale, "navToBusinessCentral")} className="btn btn-ghost">
                {t.nav.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Central */}
      <section aria-labelledby="bc-title" className="bg-canvas">
        <div className="wrap section-pad">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <div>
              <h2 id="bc-title" className="type-h2 max-w-[13ch]">
                {t.businessCentral.title}
              </h2>
              <div className="mt-6 max-w-lg space-y-5 text-[1.08rem] leading-relaxed text-fg-muted">
                {t.businessCentral.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Link href={href(locale, "businessCentral")} className="btn btn-ghost mt-9">
                {t.businessCentral.more} <Icon name="arrowRight" size={18} />
              </Link>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-panel border border-hairline bg-hairline sm:grid-cols-2">
              {t.businessCentral.capabilities.map((item) => (
                <li key={item.title} className="spotlight flex gap-4 bg-surface p-6">
                  <Icon name={item.icon} size={24} className="mt-0.5 shrink-0 text-accent-ink" />
                  <div>
                    <p className="flex flex-wrap items-center gap-2 font-semibold tracking-tight text-fg">
                      {item.title}
                      {item.premium ? (
                        <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[0.72rem] font-[560] text-accent-ink">
                          {t.businessCentral.premium}
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-1 text-[0.95rem] leading-snug text-fg-subtle">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16 rounded-panel border border-hairline bg-canvas-raised px-6 py-10 sm:px-8 lg:py-12">
            <OrderFlow t={t.businessCentral.flow} />
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section aria-labelledby="integrations-title" className="tone-night relative overflow-hidden">
        <div className="wrap section-pad relative">
          <SectionHead title={t.integrations.title} lead={t.integrations.lead} id="integrations-title" />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-panel border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {t.integrations.items.map((item) => (
              <li key={item.title} className="spotlight bg-[#070c1a]/95 p-6 lg:p-7">
                <Icon name={item.icon} size={26} className="text-glacier" />
                <p className="mt-5 font-semibold tracking-tight text-fg">{item.title}</p>
                <p className="mt-2 text-[0.95rem] leading-snug text-fg-subtle">{item.text}</p>
              </li>
            ))}
          </ul>
          <Link href={serviceHref(locale, "integrations")} className="btn btn-ghost mt-10">
            {t.integrations.cta} <Icon name="arrowRight" size={18} />
          </Link>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="how-we-work" className="bg-canvas-raised">
        <div className="wrap section-pad">
          <SectionHead title={t.process.title} lead={t.process.lead} id="how-we-work" />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.process.steps.map((step, index) => (
              <li key={step.title} className="spotlight spotlight-edge flex flex-col rounded-card border border-hairline bg-surface p-7">
                <span className="text-[0.9rem] font-semibold tabular-nums text-accent-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="type-h3 mt-3 text-fg">{step.title}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-fg-muted">{step.text}</p>
                <p className="mt-auto border-t border-hairline pt-5 text-[0.93rem] leading-snug text-fg">
                  <span className="font-semibold">{t.process.outcome}: </span>
                  {step.outcome}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-title" className="bg-canvas">
        <div className="wrap section-pad grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <h2 id="principles-title" className="type-h2 max-w-[14ch]">
              {t.principles.title}
            </h2>
            <p className="type-lead mt-6 max-w-md text-fg-muted">{t.principles.lead}</p>
            <Link href={href(locale, "about")} className="btn btn-ghost mt-9">
              {t.principles.cta} <Icon name="arrowRight" size={18} />
            </Link>
          </div>
          <ul className="divide-y divide-hairline border-y border-hairline">
            {t.principles.items.map((item) => (
              <li key={item.title} className="grid gap-3 py-8 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-10">
                <h3 className="type-h3 text-fg">{item.title}</h3>
                <p className="text-[1.02rem] leading-relaxed text-fg-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="border-t border-hairline bg-canvas-raised">
        <div className="wrap section-pad grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <h2 id="faq-title" className="type-h2 max-w-[12ch]">
              {t.faq.title}
            </h2>
            <p className="type-lead mt-6 max-w-md text-fg-muted">{t.faq.lead}</p>
          </div>
          <FaqList faqs={t.faq.items} />
        </div>
      </section>

      <CtaBand locale={locale} />

      <JsonLd
        nodes={[
          organizationNode(t.metaDescription),
          websiteNode(),
          webPageNode(locale, { name: t.metaTitle, description: t.metaDescription, path: href(locale, "home") }),
          faqNode(t.faq.items),
        ]}
      />
    </>
  );
}
