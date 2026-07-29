import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";


export const metadata = buildCouponMetadata({
  slug: "ameano-peptides",
});

export default function AmeanoPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("ameano-peptides")} />
      {children}
    </>
  );
}
