import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "alpha-peptides",
  ogTitle: "Alpha Peptides Coupon — Save 10% | Prof. Peptide",
});

export default function AlphaPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("alpha-peptides")} />
      {children}
    </>
  );
}
