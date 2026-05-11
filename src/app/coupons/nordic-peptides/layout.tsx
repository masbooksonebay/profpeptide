import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/nordic-peptides",
  title: "Nordic Peptides Discount Code (May 2026) | Prof. Peptide",
  description:
    "Get the latest Nordic Peptides discount code and promo code. Save on research-grade pen-peptides from Norway and Iceland. Verified by Prof. Peptide.",
});

export default function NordicPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Nordic Peptides Discount Code\",\"description\":\"Discount code coming soon for Nordic Peptides\",\"url\":\"https://profpeptide.com/coupons/nordic-peptides\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Nordic Peptides\"}}" }} />
      {children}
    </>
  );
}
