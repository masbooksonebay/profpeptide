import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "integrative-peptides",
  ogTitle: "Integrative Peptides Coupon — Save 10% | Prof. Peptide",
});

export default function IntegrativePeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("integrative-peptides")} />
      {children}
    </>
  );
}
