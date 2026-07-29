import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "midwest-peptide",
  ogTitle: "Midwest Peptide Coupon — Save 10% | Prof. Peptide",
});

export default function MidwestPeptideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("midwest-peptide")} />
      {children}
    </>
  );
}
