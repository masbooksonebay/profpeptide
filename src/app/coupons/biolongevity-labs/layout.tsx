import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "biolongevity-labs",
  title: "Biolongevity Labs Coupon Code & Discount — Save 15% with PROFPEPTIDE (2026) | Prof. Peptide",
  ogTitle: "Biolongevity Labs Coupon — Save 15% | Prof. Peptide",
  description:
    "Save 15% at Biolongevity Labs with code PROFPEPTIDE — a US manufacturer whose stated standard is triple third-party lab verification per batch, with COAs, HPLC purity reports, and LC-MS molecular confirmation on every order and a public COA library.",
});

export default function BiolongevityLabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("biolongevity-labs")} />
      {children}
    </>
  );
}
