import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "royal-peptides",
  ogTitle: "Royal Peptides Coupon — Save 10% | Prof. Peptide",
});

export default function RoyalPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("royal-peptides")} />
      {children}
    </>
  );
}
