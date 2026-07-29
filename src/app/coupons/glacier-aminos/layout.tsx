import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";
import { vendors } from "@/data/vendors";

const v = vendors["glacier-aminos"];

export const metadata = buildCouponMetadata({
  slug: "glacier-aminos",
  title: `Glacier Aminos Discount Code: ${v.code} — Save 10%`,
});

export default function GlacierAminosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("glacier-aminos")} />
      {children}
    </>
  );
}
