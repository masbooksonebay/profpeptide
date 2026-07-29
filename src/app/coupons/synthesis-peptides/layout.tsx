import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "synthesis-peptides",
  title: "Synthesis Peptides Discount Code: PROFPEPTIDE10 — Save 10%",
  ogTitle: "Synthesis Peptides Coupon — Save 10% | Prof. Peptide",
});

export default function SynthesisPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("synthesis-peptides")} />
      {children}
    </>
  );
}
