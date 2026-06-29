import { buildPageMetadata } from "@/lib/seo";
import { vendors } from "@/data/vendors";

const v = vendors["purity-peptides"];

export const metadata = buildPageMetadata({
  path: "/coupons/purity-peptides",
  title: "Purity Peptides Coupon & Promo Code 2026 — Verified 15% Off",
  description: `Verified, working Purity Peptides coupon, promo & discount code: ${v.code} = 15% off — not a fake aggregator. 99%+ HPLC/mass-spec tested, third-party COAs.`,
});

export default function PurityPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Purity Peptides Discount Code - Save 15%\",\"description\":\"Use code PROF15 for 15% off at Purity Peptides\",\"url\":\"https://profpeptide.com/coupons/purity-peptides\",\"validFrom\":\"2026-06-01\",\"priceValidUntil\":\"2026-06-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Purity Peptides\"}}" }} />
      {children}
    </>
  );
}
