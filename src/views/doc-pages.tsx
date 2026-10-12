import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { ContactPrompt } from "@/components/ui/contact-prompt";
import { CtaBand } from "@/components/ui/cta-band";
import { DocBody } from "@/components/ui/doc-body";
import { FaqList } from "@/components/ui/faq-list";
import { PageHero } from "@/components/ui/page-hero";
import { RichText } from "@/components/ui/rich-text";
import { getContent } from "@/content";
import type { Block, BusinessCentralTopic } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { href, INSIGHT_IDS, INSIGHT_SLUGS, insightHref, type InsightId, type LegalId } from "@/lib/routes";
import { articleNode, breadcrumbNode, faqNode, pageMetadata, webPageNode } from "@/lib/seo";

const DATE_LOCALE: Record<Locale, string> = { en: "en-US", sv: "sv-SE" };

function formatDate(locale: Locale, iso: string) {
  return new Intl.DateTimeFormat(DATE_LOCALE[locale], { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(`${iso}T12:00:00`),
  );
}

/* ── Legal and trust pages ─────────────────────────────────────────── */

export function legalMetadata(locale: Locale, id: LegalId): Metadata {
  const doc = getContent(locale).legal[id];
  return pageMetadata({ locale, route: id, title: doc.metaTitle, description: doc.metaDescription });
}

export function LegalPage({ locale, id }: { locale: Locale; id: LegalId }) {
  const { legal, site, pages } = getContent(locale);
  const doc = legal[id];
  const crumbs = [
    { name: site.breadcrumbHome, path: href(locale, "home") },
    { name: doc.title, path: href(locale, id) },
  ];
  return (
    <>
      <PageHero
        crumbs={crumbs}
        breadcrumbsLabel={site.breadcrumbs}
        title={doc.title}
        lead={doc.lead}
        meta={
          <>
            {site.updated} <time dateTime={doc.updated}>{formatDate(locale, doc.updated)}</time>
          </>
        }
      />
      <DocBody
        doc={doc}
        contentsLabel={pages.businessCentral.contents}
        sourcesLabel={site.sources}
        closing={<ContactPrompt locale={locale} kind="legal" />}
      />
      <JsonLd
        nodes={[
          webPageNode(locale, { name: doc.metaTitle, description: doc.metaDescription, path: href(locale, id) }),
          breadcrumbNode(crumbs),
        ]}
      />
    </>
  );
}

/* ── Business Central hub ──────────────────────────────────────────── */

export function businessCentralMetadata(locale: Locale): Metadata {
  const doc = getContent(locale).businessCentral;
  return pageMetadata({ locale, route: "businessCentral", title: doc.metaTitle, description: doc.metaDescription });
}

export function BusinessCentralPage({ locale }: { locale: Locale }) {
  const { businessCentral: doc, site, pages } = getContent(locale);
  const path = href(locale, "businessCentral");
  const crumbs = [
    { name: site.breadcrumbHome, path: href(locale, "home") },
    { name: site.nav.businessCentral, path },
  ];
  const sections = topicSections(doc.body);
  const topics = new Map(doc.guide.groups.flatMap((group) => group.topics).map((topic) => [topic.id, topic]));
  for (const id of topics.keys()) {
    if (id !== "faq" && !sections.some((section) => section.id === id)) {
      throw new Error(`Business Central guide topic without a section: ${id}`);
    }
  }

  return (
    <>
      <PageHero
        crumbs={crumbs}
        breadcrumbsLabel={site.breadcrumbs}
        title={doc.title}
        lead={doc.lead}
        meta={
          <>
            {site.updated} <time dateTime={doc.updated}>{formatDate(locale, doc.updated)}</time>
          </>
        }
      />

      {/* Topic guide: pick what to read, grouped as in the header menu. */}
      <section id="topics" aria-labelledby="topics-title" className="bg-canvas">
        <div className="wrap section-pad">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 id="topics-title" className="type-h2 max-w-[14ch]">
              {doc.guide.title}
            </h2>
            <p className="type-lead max-w-xl text-fg-muted">{doc.guide.lead}</p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {doc.guide.groups.map((group) => (
              <div key={group.title} className="rounded-panel bg-canvas-raised p-2">
                <h3 className="px-4 pb-2 pt-4 text-[1.02rem] font-semibold tracking-tight text-fg">{group.title}</h3>
                <ul>
                  {group.topics.map((topic) => (
                    <li key={topic.id}>
                      <a href={`#${topic.id}`} className="spotlight group flex items-center gap-4 rounded-card p-4">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink transition-colors group-hover:bg-accent group-hover:text-on-accent">
                          <Icon name={topic.icon} size={24} weight="duotone" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[1.05rem] font-semibold tracking-tight text-fg">{topic.label}</span>
                          <span className="mt-0.5 block text-[0.95rem] leading-snug text-fg-subtle">{topic.summary}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <ContactPrompt locale={locale} kind="talk" className="mt-10" />
        </div>
      </section>

      {/* One band per topic: the heading stays in view while the text scrolls. */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          className={index % 2 === 0 ? "bg-canvas-raised" : "bg-canvas"}
        >
          <div className="wrap grid gap-10 py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 lg:py-24">
            <TopicHeading
              id={`${section.id}-title`}
              title={section.title}
              topic={topics.get(section.id)}
              allTopics={pages.businessCentral.allTopics}
            />
            <div className="min-w-0">
              <RichText blocks={section.blocks} />
            </div>
          </div>
        </section>
      ))}

      <section id="faq" aria-labelledby="faq-title" className={sections.length % 2 === 0 ? "bg-canvas-raised" : "bg-canvas"}>
        <div className="wrap grid gap-10 py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 lg:py-24">
          <TopicHeading
            id="faq-title"
            title={pages.businessCentral.faqTitle}
            topic={topics.get("faq")}
            allTopics={pages.businessCentral.allTopics}
          />
          <div>
            <FaqList faqs={doc.faqs} />
            <ContactPrompt locale={locale} kind="faq" className="mt-8" />
          </div>
        </div>
      </section>

      {doc.sources && doc.sources.length > 0 ? (
        <section
          aria-labelledby="sources-title"
          className={sections.length % 2 === 0 ? "bg-canvas" : "bg-canvas-raised"}
        >
          <div className="wrap py-14">
            <h2 id="sources-title" className="text-[0.95rem] font-semibold text-fg">
              {site.sources}
            </h2>
            <ul className="mt-5 grid gap-x-10 gap-y-2.5 text-[0.9rem] leading-snug sm:grid-cols-2 lg:grid-cols-3">
              {doc.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    rel="noopener"
                    className="text-fg-subtle underline decoration-hairline-strong underline-offset-4 transition-colors hover:text-fg"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CtaBand locale={locale} />
      <JsonLd
        nodes={[
          webPageNode(locale, { name: doc.metaTitle, description: doc.metaDescription, path }),
          breadcrumbNode(crumbs),
          faqNode(doc.faqs),
        ]}
      />
    </>
  );
}

/** Splits a body at each H2 into the topic sections of the hub page. */
function topicSections(body: Block[]) {
  const sections: { id: string; title: string; blocks: Block[] }[] = [];
  for (const block of body) {
    if (block.type === "h2") {
      if (!block.id) throw new Error(`Business Central heading without an id: ${block.text}`);
      sections.push({ id: block.id, title: block.text, blocks: [] });
    } else {
      const section = sections.at(-1);
      if (!section) throw new Error("The Business Central body must start with an H2.");
      section.blocks.push(block);
    }
  }
  return sections;
}

function TopicHeading({
  id,
  title,
  topic,
  allTopics,
}: {
  id: string;
  title: string;
  topic?: BusinessCentralTopic;
  allTopics: string;
}) {
  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      {topic ? (
        <span className="flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
          <Icon name={topic.icon} size={26} weight="duotone" />
        </span>
      ) : null}
      <h2
        id={id}
        className="mt-6 max-w-[15ch] text-[clamp(1.85rem,1.3rem+1.9vw,2.9rem)] font-semibold leading-[1.06] tracking-[-0.032em]"
      >
        {title}
      </h2>
      {topic ? <p className="mt-4 max-w-sm text-[1.02rem] leading-relaxed text-fg-subtle">{topic.summary}</p> : null}
      <a
        href="#topics"
        className="mt-8 hidden items-center gap-2 text-[0.92rem] font-[560] text-fg-muted transition-colors hover:text-fg lg:inline-flex"
      >
        <Icon name="arrowRight" size={15} className="-rotate-90" />
        {allTopics}
      </a>
    </div>
  );
}

/* ── Insights ──────────────────────────────────────────────────────── */

export function insightsMetadata(locale: Locale): Metadata {
  const t = getContent(locale).insightsIndex;
  return pageMetadata({ locale, route: "insights", title: t.metaTitle, description: t.metaDescription });
}

export function InsightsPage({ locale }: { locale: Locale }) {
  const { insightsIndex: t, articles, site, pages } = getContent(locale);
  const path = href(locale, "insights");
  const crumbs = [
    { name: site.breadcrumbHome, path: href(locale, "home") },
    { name: site.nav.insights, path },
  ];
  const list = INSIGHT_IDS.map((id) => articles[id]).sort((a, b) => b.published.localeCompare(a.published));
  return (
    <>
      <PageHero crumbs={crumbs} breadcrumbsLabel={site.breadcrumbs} title={t.title} lead={t.lead} />
      <section className="bg-canvas-raised">
        <div className="wrap section-pad">
          <h2 className="type-h3 text-fg">{pages.insights.latest}</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {list.map((article) => (
              <li key={article.id}>
                <Link
                  href={insightHref(locale, article.id)}
                  className="group flex h-full flex-col rounded-card border border-hairline bg-surface p-8 spotlight spotlight-edge lg:p-9"
                >
                  <span className="text-[0.85rem] font-[560] text-accent-ink">{article.category}</span>
                  <h2 className="type-h3 mt-4 max-w-[26ch] text-fg">{article.title}</h2>
                  <p className="mt-3 max-w-xl text-[1rem] leading-relaxed text-fg-muted">{article.summary}</p>
                  <span className="mt-auto flex items-center justify-between gap-4 pt-8 text-[0.9rem] text-fg-subtle">
                    <span>
                      {article.readingMinutes} {site.minutes}
                    </span>
                    <span className="inline-flex items-center gap-2 font-[560] text-accent-ink">
                      {pages.insights.read}
                      <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand locale={locale} />
      <JsonLd
        nodes={[
          webPageNode(locale, { name: t.metaTitle, description: t.metaDescription, path, type: "CollectionPage" }),
          breadcrumbNode(crumbs),
        ]}
      />
    </>
  );
}

export function insightIdFromSlug(locale: Locale, slug: string) {
  return INSIGHT_IDS.find((id) => INSIGHT_SLUGS[id][locale] === slug);
}

export function insightParams(locale: Locale) {
  return INSIGHT_IDS.map((id) => ({ slug: INSIGHT_SLUGS[id][locale] }));
}

export function articleMetadata(locale: Locale, id: InsightId): Metadata {
  const article = getContent(locale).articles[id];
  return pageMetadata({
    locale,
    route: { kind: "insight", id },
    title: article.metaTitle,
    description: article.metaDescription,
    type: "article",
    publishedTime: article.published,
    modifiedTime: article.updated,
  });
}

export function ArticlePage({ locale, id }: { locale: Locale; id: InsightId }) {
  const { articles, site, pages } = getContent(locale);
  const article = articles[id];
  const path = insightHref(locale, id);
  const crumbs = [
    { name: site.breadcrumbHome, path: href(locale, "home") },
    { name: site.nav.insights, path: href(locale, "insights") },
    { name: article.title, path },
  ];
  return (
    <>
      <PageHero
        crumbs={crumbs}
        breadcrumbsLabel={site.breadcrumbs}
        title={article.title}
        lead={article.lead}
        meta={
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            <span className="font-[560] text-accent-ink">{article.category}</span>
            <span>
              {site.updated} <time dateTime={article.updated}>{formatDate(locale, article.updated)}</time>
            </span>
            <span>
              {article.readingMinutes} {site.minutes}
            </span>
          </span>
        }
      />
      <DocBody
        doc={article}
        contentsLabel={pages.businessCentral.contents}
        sourcesLabel={site.sources}
        faqs={article.faqs}
        faqTitle={pages.service.faq}
        rail={<ContactPrompt locale={locale} kind="talk" className="text-[0.92rem]" />}
        closing={<ContactPrompt locale={locale} kind="faq" />}
      />
      <CtaBand locale={locale} />
      <JsonLd
        nodes={[
          articleNode(locale, {
            headline: article.title,
            description: article.metaDescription,
            path,
            datePublished: article.published,
            dateModified: article.updated,
          }),
          breadcrumbNode(crumbs),
          ...(article.faqs?.length ? [faqNode(article.faqs)] : []),
        ]}
      />
    </>
  );
}
