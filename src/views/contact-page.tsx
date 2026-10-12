import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { breadcrumbNode, pageMetadata, webPageNode } from "@/lib/seo";
import { company } from "@/lib/site";

export function contactMetadata(locale: Locale): Metadata {
  const t = getContent(locale).pages.contact;
  return pageMetadata({ locale, route: "contact", title: t.metaTitle, description: t.metaDescription });
}

export function ContactPage({ locale }: { locale: Locale }) {
  const { pages, site } = getContent(locale);
  const t = pages.contact;
  const crumbs = [
    { name: site.breadcrumbHome, path: href(locale, "home") },
    { name: site.footer.links.contact, path: href(locale, "contact") },
  ];

  return (
    <>
      <PageHero crumbs={crumbs} breadcrumbsLabel={site.breadcrumbs} title={t.title} lead={t.lead} />

      <section className="bg-canvas-raised">
        <div className="wrap section-pad grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <h2 className="type-h2 max-w-[12ch]">{t.expectations.title}</h2>
            <ol className="mt-10 space-y-8">
              {t.expectations.items.map((item, index) => (
                <li key={item.title} className="flex gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-hairline bg-surface text-accent-ink">
                    <Icon name={item.icon} size={24} />
                  </span>
                  <div>
                    <p className="text-[0.85rem] font-semibold tabular-nums text-accent-ink">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-[1.15rem] font-semibold tracking-tight text-fg">{item.title}</h3>
                    <p className="mt-1.5 text-[1rem] leading-relaxed text-fg-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-12 border-t border-hairline pt-8">
              <h2 className="text-[1.15rem] font-semibold tracking-tight text-fg">{t.direct.title}</h2>
              <p className="mt-1.5 max-w-sm text-[1rem] leading-relaxed text-fg-muted">{t.direct.text}</p>
              <a
                href={`mailto:${company.email}`}
                className="mt-4 inline-flex items-center gap-2.5 text-[1.08rem] font-[560] text-accent-ink"
              >
                <Icon name="mail" size={20} />
                <span className="link-quiet">{company.email}</span>
              </a>
            </div>
          </div>
          <ContactForm locale={locale} t={t.form} email={company.email} />
        </div>
      </section>

      <JsonLd
        nodes={[
          webPageNode(locale, {
            name: t.metaTitle,
            description: t.metaDescription,
            path: href(locale, "contact"),
            type: "ContactPage",
          }),
          breadcrumbNode(crumbs),
        ]}
      />
    </>
  );
}
