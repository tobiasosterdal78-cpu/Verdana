/** Renders schema.org nodes as one JSON-LD graph, escaped against XSS. */
export function JsonLd({ nodes }: { nodes: object[] }) {
  const graph = { "@context": "https://schema.org", "@graph": nodes };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
