import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";
import { vendors } from "@/data/vendors";

const v = vendors["glacier-aminos"];

export const metadata = buildCouponMetadata({
  slug: "glacier-aminos",
  title: `Glacier Aminos Discount Code: ${v.code} — Save 10%`,
  description: `Use code ${v.code} at Glacier Aminos to save 10% sitewide — verified and working for 2026. Batch-traceable COAs and cold-chain shipping.`,
});

export default function GlacierAminosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("glacier-aminos")} />
      {children}
    </>
  );
}
