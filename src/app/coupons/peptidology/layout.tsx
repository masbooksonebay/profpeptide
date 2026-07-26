import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/peptidology",
  title: "Peptidology Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "Peptidology Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Peptidology with discount code PROFPEPTIDE — verified promo code for 2026. 14-point analytical testing per batch under ISO/IEC 17025:2017, COA with every order.",
});

export default function PeptidologyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Peptidology Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Peptidology\",\"url\":\"https://profpeptide.com/coupons/peptidology\",\"validFrom\":\"2026-07-01\",\"priceValidUntil\":\"2026-12-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Peptidology\"}}" }} />
      {children}
    </>
  );
}
