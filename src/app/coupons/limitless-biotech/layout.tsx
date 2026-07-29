import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "limitless-biotech",
  ogTitle: "Limitless Biotech Coupon — Save 10% | Prof. Peptide",
});

export default function LimitlessBiotechLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("limitless-biotech")} />
      {children}
    </>
  );
}
