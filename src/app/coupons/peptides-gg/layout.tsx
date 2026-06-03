import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/peptides-gg",
  title: "Peptides.gg Coupon Code & Discount — Save 15% (2026) | Prof. Peptide",
  description:
    "Peptides.gg coupon code PROF15 — verified discount code and promo code for 2026. Save 15% on US-made research peptides, third-party tested per batch with COAs.",
});

export default function PeptidesGgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Peptides.gg Discount Code - Save 15%\",\"description\":\"Use code PROF15 for 15% off at Peptides.gg\",\"url\":\"https://profpeptide.com/coupons/peptides-gg\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Peptides.gg\"}}" }} />
      {children}
    </>
  );
}
