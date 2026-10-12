import type { Metadata } from "next";
import Link from "next/link";
import { AreaFigure, CareMock, DashboardMock, ProjectMock, WarehouseMock } from "@/components/home/area-mocks";
import { AreaIntro, AreaPoints, AreaText } from "@/components/home/area-text";
import { NavNotice } from "@/components/home/nav-timeline";
import { OrderFlow } from "@/components/home/order-flow";
import { Icon, type IconName } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PinField } from "@/components/pin-field";
import { ContactPrompt, ContactRow } from "@/components/ui/contact-prompt";
import { CtaBand } from "@/components/ui/cta-band";
import { FaqList } from "@/components/ui/faq-list";
import { SectionHead } from "@/components/ui/section-head";
import { getContent } from "@/content";
import type { Phase } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { href, insightHref, serviceHref, SERVICE_IDS } from "@/lib/routes";
import { faqNode, organizationNode, pageMetadata, webPageNode, websiteNode } from "@/lib/seo";

const PHASES: Phase[] = ["implement", "operate"];

/** The five areas in page order, with the anchor each one answers to. */
const AREAS = [
  { id: "projects", icon: "projects" },
  { id: "warehouse", icon: "warehouse" },
  { id: "commerce", icon: "ecommerce" },
  { id: "reporting", icon: "report" },
  { id: "care", icon: "support" },
] as const satisfies readonly { id: string; icon: IconName }[];

const AREA_ANCHOR = {
  projects: "area-projects",
  warehouse: "area-warehouse",
  commerce: "area-commerce",
  reporting: "area-reporting",
  care: "area-care",
} as const;

/** The section of the Business Central page that lists what the system covers. */
const COVERS_ANCHOR: Record<Locale, string> = { en: "what-it-covers", sv: "vad-det-tacker" };

/** Text link with an arrow, for the quieter ways onward from a section. */
function AreaLink({ href: target, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={target} className="group inline-flex items-center gap-2 text-[0.98rem] font-[560] text-accent-ink">
      {children}
      <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

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

      {/* Business Central: what the system is, before the page goes into five areas. */}
      <section aria-labelledby="bc-title" className="bg-canvas-raised">
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
        </div>
      </section>

      {/* Areas 01-03, each beside its illustration. 04 and 05 follow in bands of their own. */}
      <section aria-labelledby="areas-title" className="bg-canvas">
        <div className="wrap section-pad">
          <SectionHead title={t.areas.title} lead={t.areas.lead} id="areas-title" />
          <nav aria-label={t.areas.label} className="mt-10">
            <ul className="flex flex-wrap gap-2">
              {AREAS.map((area) => (
                <li key={area.id}>
                  <a
                    href={`#${AREA_ANCHOR[area.id]}`}
                    className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-4 py-2 text-[0.92rem] font-[560] text-fg-muted transition-colors hover:border-accent hover:text-fg"
                  >
                    <Icon name={area.icon} size={17} className="text-accent-ink" />
                    {t.areas[area.id].name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-32">
            <div
              id={AREA_ANCHOR.projects}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20"
            >
              <AreaText index={1} area={t.areas.projects} id="area-projects-title">
                <AreaLink href={href(locale, "businessCentral", COVERS_ANCHOR[locale])}>
                  {t.areas.projects.link}
                </AreaLink>
              </AreaText>
              <AreaFigure caption={t.areas.projects.caption}>
                <ProjectMock t={t.areas.projects.mock} />
              </AreaFigure>
            </div>

            <div
              id={AREA_ANCHOR.warehouse}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20"
            >
              <div className="lg:order-2">
                <AreaText index={2} area={t.areas.warehouse} id="area-warehouse-title">
                  <AreaLink href={href(locale, "businessCentral", COVERS_ANCHOR[locale])}>
                    {t.areas.warehouse.link}
                  </AreaLink>
                </AreaText>
              </div>
              <AreaFigure caption={t.areas.warehouse.caption}>
                <WarehouseMock t={t.areas.warehouse.mock} />
              </AreaFigure>
            </div>

            <div id={AREA_ANCHOR.commerce}>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
                <AreaIntro index={3} area={t.areas.commerce} id="area-commerce-title" />
                <div className="lg:pt-11">
                  <AreaPoints area={t.areas.commerce}>
                    <AreaLink href={serviceHref(locale, "integrations")}>{t.areas.commerce.link}</AreaLink>
                  </AreaPoints>
                </div>
              </div>
              <div className="mt-12 rounded-panel border border-hairline bg-canvas-raised px-6 py-10 sm:px-8 lg:py-12">
                <OrderFlow t={t.businessCentral.flow} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area 04: reporting, with the dashboards across the full width. */}
      <section id={AREA_ANCHOR.reporting} aria-labelledby="area-reporting-title" className="tone-night">
        <div className="wrap section-pad">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <AreaIntro index={4} area={t.areas.reporting} id="area-reporting-title" as="h2" />
            <div className="lg:pt-11">
              <AreaPoints area={t.areas.reporting}>
                <AreaLink href={serviceHref(locale, "integrations")}>{t.areas.reporting.link}</AreaLink>
              </AreaPoints>
            </div>
          </div>
          <div className="mt-14">
            <AreaFigure caption={t.areas.reporting.caption}>
              <DashboardMock t={t.areas.reporting.mock} />
            </AreaFigure>
          </div>
        </div>
      </section>

      {/* Area 05: application management and support. */}
      <section id={AREA_ANCHOR.care} aria-labelledby="area-care-title" className="bg-canvas-raised">
        <div className="wrap section-pad grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <AreaText index={5} area={t.areas.care} id="area-care-title" as="h2">
            <AreaLink href={serviceHref(locale, "support")}>{t.areas.care.link}</AreaLink>
            <AreaLink href={serviceHref(locale, "management")}>{t.areas.care.secondLink}</AreaLink>
          </AreaText>
          <AreaFigure caption={t.areas.care.caption}>
            <CareMock t={t.areas.care.mock} />
          </AreaFigure>
        </div>
      </section>

      {/* Integrations */}
      <section aria-labelledby="integrations-title" className="tone-night relative overflow-hidden">
        <div className="wrap section-pad relative">
          <SectionHead title={t.integrations.title} lead={t.integrations.lead} id="integrations-title" />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-panel border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
            {t.integrations.items.map((item) => (
              <li key={item.title} className="spotlight bg-[#070c1a]/95 p-6 sm:last:col-span-2 lg:p-7 lg:last:col-span-1">
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

      {/* Dynamics NAV: a notice, not a chapter. The guide and the service carry the detail. */}
      <section aria-labelledby="nav-title" className="bg-canvas">
        <div className="wrap py-16 lg:py-20">
          <div className="grid gap-9 rounded-panel border border-hairline bg-canvas-raised p-7 sm:p-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14 lg:p-11">
            <div>
              <h2 id="nav-title" className="type-h3 text-fg">
                {t.nav.title}
              </h2>
              <p className="mt-3 max-w-md text-[1.02rem] leading-relaxed text-fg-muted">{t.nav.lead}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
                <AreaLink href={serviceHref(locale, "migration")}>{t.nav.primary}</AreaLink>
                <AreaLink href={insightHref(locale, "navToBusinessCentral")}>{t.nav.secondary}</AreaLink>
              </div>
            </div>
            <div>
              <p className="text-[0.82rem] font-[560] text-fg-subtle">{t.nav.until}</p>
              <div className="mt-3">
                <NavNotice locale={locale} t={t.nav} />
              </div>
              <p className="mt-3 text-[0.8rem] leading-snug text-fg-subtle">{t.nav.source}</p>
            </div>
          </div>
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
          <ContactRow locale={locale} className="mt-12" />
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
            <ContactPrompt locale={locale} kind="faq" linkOnly className="mt-6" />
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
