import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "peptira",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("peptira")} />
      {children}
    </>
  );
}
