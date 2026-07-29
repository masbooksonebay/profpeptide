import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";


export const metadata = buildCouponMetadata({
  slug: "purity-peptides",
});

export default function PurityPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("purity-peptides")} />
      {children}
    </>
  );
}
