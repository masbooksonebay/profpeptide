import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "swiss-chems",
  title: "Swiss Chems Coupon Code & Discount — Save 10% with PROF10 (2026) | Prof. Peptide",
  ogTitle: "Swiss Chems Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Swiss Chems with code PROF10 — a peptide-forward vendor with a public independent test-results page, per-product verification, and third-party HPLC/mass-spec testing to a 99%+ purity standard.",
});

export default function SwissChemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("swiss-chems")} />
      {children}
    </>
  );
}
