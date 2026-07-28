import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "spartan-peptides",
  title: "Spartan Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "Spartan Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Spartan Peptides with discount code PROFPEPTIDE \u2014 verified promo code for 2026. HPLC + mass spec verified, \u226598% purity, independent third-party tested.",
});

export default function SpartanPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("spartan-peptides")} />
      {children}
    </>
  );
}
