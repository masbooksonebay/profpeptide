import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "ignite-peptides",
});

export default function IgnitePeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("ignite-peptides")} />
      {children}
    </>
  );
}
