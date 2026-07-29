import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "swiss-chems",
  ogTitle: "Swiss Chems Coupon — Save 10% | Prof. Peptide",
});

export default function SwissChemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("swiss-chems")} />
      {children}
    </>
  );
}
