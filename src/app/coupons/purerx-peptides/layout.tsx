import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "purerx-peptides",
});

export default function PureRxPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("purerx-peptides")} />
      {children}
    </>
  );
}
