import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/royal-peptides",
  title: "Royal Peptides Discount Code: PROF10 — Save 10%",
  ogTitle: "Royal Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Use code PROF10 at Royal Peptides to save 10% sitewide — verified and working for 2026. cGMP/ISO-lab tested to 99%+ purity with batch COAs.",
});

export default function RoyalPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Royal Peptides Discount Code - Save 10%\",\"description\":\"Use code PROF10 for 10% off at Royal Peptides\",\"url\":\"https://profpeptide.com/coupons/royal-peptides\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Royal Peptides\"}}" }} />
      {children}
    </>
  );
}
