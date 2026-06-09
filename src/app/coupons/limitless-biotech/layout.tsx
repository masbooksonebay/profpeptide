import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/limitless-biotech",
  title: "Limitless Biotech Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "Limitless Biotech Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Limitless Biotech with discount code PROFPEPTIDE — verified promo code for 2026. 90+ compounds, HPLC + LC-MS testing, worldwide shipping, 30-day guarantee.",
});

export default function LimitlessBiotechLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Limitless Biotech Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Limitless Biotech\",\"url\":\"https://profpeptide.com/coupons/limitless-biotech\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Limitless Biotech\"}}" }} />
      {children}
    </>
  );
}
