import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "fusion-peptide",
  ogTitle: "Fusion Peptide Coupon — Save 15% | Prof. Peptide",
});

export default function FusionPeptideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("fusion-peptide")} />
      {children}
    </>
  );
}
