import { FaqList } from "@/components/ui/faq-list";
import { RichText } from "@/components/ui/rich-text";
import type { Doc, Faq } from "@/content/types";

/** Body of a long-form page: contents rail, text, FAQs and sources. */
export function DocBody({
  doc,
  contentsLabel,
  sourcesLabel,
  faqs,
  faqTitle,
}: {
  doc: Doc;
  contentsLabel: string;
  sourcesLabel: string;
  faqs?: Faq[];
  faqTitle?: string;
}) {
  const headings = doc.body.filter(
    (block): block is Extract<Doc["body"][number], { type: "h2" }> => block.type === "h2" && Boolean(block.id),
  );

  return (
    <section className="bg-canvas">
      <div className="wrap section-pad grid gap-12 lg:grid-cols-4 lg:gap-12">
        {headings.length > 2 ? (
          <nav aria-label={contentsLabel} className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[0.8rem] font-semibold tracking-wide text-fg">{contentsLabel}</p>
              <ol className="mt-4 space-y-2.5 border-l border-hairline">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="-ml-px block border-l border-transparent pl-4 text-[0.9rem] leading-snug text-fg-subtle transition-colors hover:border-accent hover:text-fg"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
        ) : (
          <div className="hidden lg:block" />
        )}
        <div className="min-w-0 lg:col-span-3 lg:max-w-[46rem]">
          <RichText blocks={doc.body} />
          {faqs && faqs.length > 0 ? (
            <div className="mt-20">
              <h2 className="type-h3 mb-6 text-fg">{faqTitle}</h2>
              <FaqList faqs={faqs} />
            </div>
          ) : null}
          {doc.sources && doc.sources.length > 0 ? (
            <div className="mt-16 border-t border-hairline pt-8">
              <h2 className="text-[0.85rem] font-semibold tracking-wide text-fg">{sourcesLabel}</h2>
              <ul className="mt-4 space-y-2 text-[0.92rem] leading-snug">
                {doc.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} rel="noopener" className="text-fg-subtle underline decoration-hairline-strong underline-offset-4 hover:text-fg">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
