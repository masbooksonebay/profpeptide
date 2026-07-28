import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "science-based-peptides",
  title: "Science Based Peptides Coupon Code & Discount — Save 10% with PROFPEPTIDE (2026) | Prof. Peptide",
  ogTitle: "Science Based Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Science Based Peptides with code PROFPEPTIDE — a US research supplier with a downloadable Certificate of Analysis on every product, batch number and tested date shown per lot, and HPLC/mass-spec batch-level documentation.",
});

export default function ScienceBasedPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("science-based-peptides")} />
      {children}
    </>
  );
}
