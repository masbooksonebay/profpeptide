import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/behemoth-labz",
  title: "Behemoth Labz Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at Behemoth Labz with discount code PROF10 — verified promo code for 2026. US-based, third-party tested by Colmaric Analyticals: peptides, SARMs, nootropics.",
});

export default function BehemothLabzLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Offer","name":"Behemoth Labz Discount Code - Save 10%","description":"Use code PROF10 for 10% off at Behemoth Labz","url":"https://profpeptide.com/coupons/behemoth-labz","validFrom":"2026-05-01","priceValidUntil":"2026-05-31","seller":{"@type":"Organization","name":"Behemoth Labz"}}) }} />
      {children}
    </>
  );
}
