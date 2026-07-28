import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "alpha-peptides",
  title: "Alpha Peptides Coupon Code & Discount — Save 10% with PROFPEPTIDE (2026) | Prof. Peptide",
  ogTitle: "Alpha Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Alpha Peptides with code PROFPEPTIDE — a US East Coast supplier with a public COA page, a per-lot five-test verification panel run by an ISO 17025-aligned lab, and HPLC/mass-spec identity confirmation.",
});

export default function AlphaPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("alpha-peptides")} />
      {children}
    </>
  );
}
