import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";


export const metadata = buildCouponMetadata({
  slug: "amino-club",
});

export default function AminoClubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("amino-club")} />
      {children}
    </>
  );
}
