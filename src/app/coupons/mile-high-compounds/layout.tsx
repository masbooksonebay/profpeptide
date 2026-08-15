import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "mile-high-compounds",
});

export default function MileHighCompoundsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("mile-high-compounds")} />
      {children}
    </>
  );
}
