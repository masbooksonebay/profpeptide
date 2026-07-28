import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "almighty-peptides",
  title: "Almighty Peptides Coupon Code & Discount — Save 20% (2026) | Prof. Peptide",
  ogTitle: "Almighty Peptides Coupon — Save 20% | Prof. Peptide",
  description:
    "Save 20% at Almighty Peptides with discount code PROFPEPTIDE — verified promo code for 2026. HPLC & mass spec tested, Buy 1 Get 1 FREE on most products.",
});

export default function AlmightyPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("almighty-peptides")} />
      {children}
    </>
  );
}
