import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/glacier-aminos",
  title: "Glacier Aminos Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at Glacier Aminos with discount code PROF10 — verified promo code for 2026. Cold-chain shipping, batch-traceable COAs, lowest tracked Retatrutide pricing.",
});

export default function GlacierAminosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Offer","name":"Glacier Aminos Discount Code - Save 10%","description":"Use code PROF10 for 10% off at Glacier Aminos","url":"https://profpeptide.com/coupons/glacier-aminos","validFrom":"2026-05-01","priceValidUntil":"2026-05-31","seller":{"@type":"Organization","name":"Glacier Aminos"}}) }} />
      {children}
    </>
  );
}
