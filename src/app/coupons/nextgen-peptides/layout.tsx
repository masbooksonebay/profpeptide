import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "nextgen-peptides",
  title: "NextGen Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "NextGen Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at NextGen Peptides with discount code PROFPEPTIDE — verified promo code for 2026. ≥99% purity by HPLC, American third-party testing, COA library.",
});

export default function NextGenPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("nextgen-peptides")} />
      {children}
    </>
  );
}
