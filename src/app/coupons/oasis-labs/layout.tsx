import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/oasis-labs",
  title: "Oasis Labs Discount Code — Save 15% (Verified 2026)",
  description:
    "Oasis Labs discount code PROF15 saves 15% sitewide. Verified for 2026 \u2014 veteran-owned, US-based, QR-verified COAs on every vial and FedEx 2Day shipping.",
});

export default function OasisLabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Oasis Labs Discount Code - Save 15%\",\"description\":\"Use code PROF15 for 15% off at Oasis Labs\",\"url\":\"https://profpeptide.com/coupons/oasis-labs\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Oasis Labs\"}}" }} />
      {children}
    </>
  );
}
