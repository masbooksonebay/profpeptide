import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/royal-peptides",
  title: "Royal Peptides Coupon & Promo Code 2026 — Verified 10% Off",
  ogTitle: "Royal Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Verified, working Royal Peptides coupon, promo & discount code: PROF10 = 10% off — not a fake aggregator. cGMP/ISO-lab tested, 99%+ purity, batch COAs.",
});

export default function RoyalPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Royal Peptides Discount Code - Save 10%\",\"description\":\"Use code PROF10 for 10% off at Royal Peptides\",\"url\":\"https://profpeptide.com/coupons/royal-peptides\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Royal Peptides\"}}" }} />
      {children}
    </>
  );
}
