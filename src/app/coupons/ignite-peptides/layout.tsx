import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/ignite-peptides",
  title: "Ignite Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at Ignite Peptides with discount code WELCOME10 — verified promo code for 2026. 99%+ purity, two-stage independent testing, COA on every product.",
});

export default function IgnitePeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Ignite Peptides Discount Code - Save 10%\",\"description\":\"Use code WELCOME10 for 10% off at Ignite Peptides\",\"url\":\"https://profpeptide.com/coupons/ignite-peptides\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Ignite Peptides\"}}" }} />
      {children}
    </>
  );
}
