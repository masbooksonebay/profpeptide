import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "science-based-peptides",
  ogTitle: "Science Based Peptides Coupon — Save 10% | Prof. Peptide",
});

export default function ScienceBasedPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("science-based-peptides")} />
      {children}
    </>
  );
}
