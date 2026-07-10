import type { ReactNode } from "react";

// Extract the exact visible text of a FAQ answer (string or JSX). JSX entities
// (&mdash;, &apos;, …) are already decoded by the compiler into their characters,
// and <Link>/<a> anchor text is included inline — so this yields precisely what
// the reader sees. Whitespace is collapsed the way HTML rendering collapses it.
export function nodeText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (typeof node === "object" && "props" in (node as { props?: unknown })) {
    return nodeText((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

export interface FaqEntry {
  q: string;
  a: ReactNode;
}

/**
 * Build FAQPage JSON-LD from an on-page `faqs` array. Every Q&A is taken
 * verbatim from the visible content. Pass `exclude` to drop entries that
 * shouldn't be marked up (e.g. promotional "where to buy" answers, which
 * Google's FAQ policy disallows).
 */
export function faqPageJsonLd(faqs: FaqEntry[], exclude?: (q: string) => boolean) {
  const items = faqs.filter((f) => !(exclude && exclude(f.q)));
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: nodeText(f.a).replace(/\s+/g, " ").trim(),
      },
    })),
  };
}

// Promotional "where to buy / where to source" FAQs are excluded from FAQPage
// markup (they point to discount codes; Google's FAQ guidelines prohibit
// advertising/promotional content in FAQ rich results).
export const isWhereToBuy = (q: string) => /where (can i |to )?(buy|source|get|purchase)/i.test(q);
