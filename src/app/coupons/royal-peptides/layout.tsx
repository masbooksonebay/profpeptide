import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/royal-peptides",
  title: "Royal Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "Royal Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Royal Peptides with discount code PROF10 — verified promo code for 2026. cGMP & ISO-certified labs, 99%+ purity, batch-tested.",
});

export default function RoyalPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Royal Peptides Discount Code - Save 10%\",\"description\":\"Use code PROF10 for 10% off at Royal Peptides\",\"url\":\"https://profpeptide.com/coupons/royal-peptides\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Royal Peptides\"}}" }} />
      {children}
    </>
  );
}
