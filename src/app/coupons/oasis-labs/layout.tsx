import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/oasis-labs",
  title: "Oasis Labs Discount Code: PROF15 — Save 15%",
  description:
    "Use code PROF15 at Oasis Labs to save 15% sitewide \u2014 verified and working for 2026. Veteran-owned with QR-verified COAs on every vial.",
});

export default function OasisLabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Oasis Labs Discount Code - Save 15%\",\"description\":\"Use code PROF15 for 15% off at Oasis Labs\",\"url\":\"https://profpeptide.com/coupons/oasis-labs\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Oasis Labs\"}}" }} />
      {children}
    </>
  );
}
