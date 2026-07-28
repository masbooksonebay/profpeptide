import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "peptidology",
  title: "Peptidology Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "Peptidology Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Peptidology with discount code PROFPEPTIDE — verified promo code for 2026. 14-point analytical testing per batch under ISO/IEC 17025:2017, COA with every order.",
});

export default function PeptidologyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("peptidology")} />
      {children}
    </>
  );
}
