import { Icon } from "@/components/icons";
import type { Faq } from "@/content/types";

/** Native disclosure widgets: keyboard accessible and readable without JS. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {faqs.map((faq) => (
        <details key={faq.question} className="faq-item group">
          <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-left text-[1.08rem] font-semibold leading-snug tracking-tight text-fg transition-colors hover:text-accent-ink md:text-[1.18rem]">
            <h3>{faq.question}</h3>
            <span className="faq-icon mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-hairline-strong text-fg transition-transform duration-300">
              <Icon name="plus" size={15} weight="bold" />
            </span>
          </summary>
          <div className="-mt-1 max-w-3xl pb-7 pr-12 text-[1.02rem] leading-relaxed text-fg-muted">{faq.answer}</div>
        </details>
      ))}
    </div>
  );
}
