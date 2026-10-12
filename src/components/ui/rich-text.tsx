import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import type { Block } from "@/content/types";

const INLINE = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Renders **bold** and [label](href) inside a text string. */
export function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(INLINE)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    if (match[1]) {
      parts.push(<strong key={index}>{match[1]}</strong>);
    } else {
      const target = match[3];
      parts.push(
        target.startsWith("/") && !target.startsWith("/.well-known") ? (
          <Link key={index} href={target}>
            {match[2]}
          </Link>
        ) : (
          <a key={index} href={target} {...(target.startsWith("http") ? { rel: "noopener" } : {})}>
            {match[2]}
          </a>
        ),
      );
    }
    last = index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** Long-form content blocks inside .prose-vardena. */
export function RichText({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-vardena">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p key={index}>
                <Inline text={block.text} />
              </p>
            );
          case "h2":
            return (
              <h2 key={index} id={block.id}>
                {block.text}
              </h2>
            );
          case "h3":
            return <h3 key={index}>{block.text}</h3>;
          case "ul":
          case "ol": {
            const List = block.type;
            return (
              <List key={index}>
                {block.items.map((item) => (
                  <li key={item}>
                    <Inline text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case "table":
            return (
              <div key={index} className="not-prose -mx-1 overflow-x-auto">
                <table className="w-full min-w-[32rem] border-collapse text-left text-[0.98rem] leading-snug">
                  {block.caption ? (
                    <caption className="pb-3 text-left text-[0.9rem] text-fg-subtle">{block.caption}</caption>
                  ) : null}
                  <thead>
                    <tr className="border-b border-hairline-strong">
                      {block.head.map((cell) => (
                        <th key={cell} scope="col" className="px-1 py-3 font-semibold text-fg">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-hairline">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-1 py-3 align-top text-fg-muted">
                            <Inline text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "note":
            return (
              <aside key={index} className="rounded-2xl border border-hairline bg-surface p-6 text-[1.02rem]">
                {block.title ? <p className="font-semibold text-fg">{block.title}</p> : null}
                <p className={block.title ? "mt-1.5" : undefined}>
                  <Inline text={block.text} />
                </p>
              </aside>
            );
          default:
            return <Fragment key={index} />;
        }
      })}
    </div>
  );
}
