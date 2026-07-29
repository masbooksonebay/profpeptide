import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "spartan-peptides",
  ogTitle: "Spartan Peptides Coupon — Save 10% | Prof. Peptide",
});

export default function SpartanPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("spartan-peptides")} />
      {children}
    </>
  );
}
