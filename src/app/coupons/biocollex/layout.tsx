import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/biocollex",
  title: "BioCollex Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at BioCollex with discount code PROFPEPTIDE — verified promo code for 2026. U.S.-based, 99% purity, same-day shipping, C-GMP certified.",
});

export default function BioCollexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"BioCollex Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at BioCollex\",\"url\":\"https://profpeptide.com/coupons/biocollex\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"BioCollex\"}}" }} />
      {children}
    </>
  );
}
