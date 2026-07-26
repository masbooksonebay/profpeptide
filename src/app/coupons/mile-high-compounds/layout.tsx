import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/mile-high-compounds",
  title: "Mile High Compounds Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "Mile High Compounds Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Mile High Compounds with discount code PROFPEPTIDE — verified promo code for 2026. 99%+ purity, 8x independent American third-party testing, public COAs.",
});

export default function MileHighCompoundsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Mile High Compounds Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Mile High Compounds\",\"url\":\"https://profpeptide.com/coupons/mile-high-compounds\",\"validFrom\":\"2026-07-01\",\"priceValidUntil\":\"2026-12-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Mile High Compounds\"}}" }} />
      {children}
    </>
  );
}
