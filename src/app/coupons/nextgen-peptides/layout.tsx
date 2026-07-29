import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "nextgen-peptides",
  ogTitle: "NextGen Peptides Coupon — Save 10% | Prof. Peptide",
});

export default function NextGenPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("nextgen-peptides")} />
      {children}
    </>
  );
}
