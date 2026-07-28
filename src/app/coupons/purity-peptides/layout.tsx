import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";
import { vendors } from "@/data/vendors";

const v = vendors["purity-peptides"];

export const metadata = buildCouponMetadata({
  slug: "purity-peptides",
  title: "Purity Peptides Coupon & Promo Code 2026 — Verified 15% Off",
  description: `Verified, working Purity Peptides coupon, promo & discount code: ${v.code} = 15% off — not a fake aggregator. 99%+ HPLC/mass-spec tested, third-party COAs.`,
});

export default function PurityPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("purity-peptides")} />
      {children}
    </>
  );
}
