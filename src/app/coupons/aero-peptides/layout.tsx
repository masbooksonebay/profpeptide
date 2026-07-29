import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";


export const metadata = buildCouponMetadata({
  slug: "aero-peptides",
});

export default function AeroPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("aero-peptides")} />
      {children}
    </>
  );
}
