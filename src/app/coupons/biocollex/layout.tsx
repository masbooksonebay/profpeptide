import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "biocollex",
  title: "BioCollex Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at BioCollex with discount code PROFPEPTIDE — verified promo code for 2026. U.S.-based, 99% purity, same-day shipping, C-GMP certified.",
});

export default function BioCollexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("biocollex")} />
      {children}
    </>
  );
}
