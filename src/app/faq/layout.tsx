import { buildPageMetadata } from "@/lib/seo";

// Metadata only. The hub's FAQPage JSON-LD lives in page.tsx (NOT here) so it applies to
// /faq alone — a layout wraps every /faq/[slug] child too, and a question page must carry
// only its OWN one-question schema, not the hub's 21.
export const metadata = buildPageMetadata({
  path: "/faq",
  title: "Peptide FAQ — Common Questions About Research Peptides Answered | Prof. Peptide",
  description:
    "Answers to the most common questions about research peptides — what they are, how they work, storage, reconstitution, sourcing, and safety considerations.",
  // Defer OG image to this segment's opengraph-image.tsx (page-specific card).
  useDefaultOgImage: false,
});

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
