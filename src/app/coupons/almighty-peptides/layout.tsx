import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/almighty-peptides",
  title: "Almighty Peptides Coupon Code & Discount — Save 20% (2026) | Prof. Peptide",
  description:
    "Save 20% at Almighty Peptides with discount code profpep — verified promo code for 2026. HPLC & mass spec tested, Buy 1 Get 1 FREE on most products.",
});

export default function AlmightyPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Almighty Peptides Discount Code - Save 20%\",\"description\":\"Use code PROFPEPTIDE for 20% off at Almighty Peptides\",\"url\":\"https://profpeptide.com/coupons/almighty-peptides\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Almighty Peptides\"}}" }} />
      {children}
    </>
  );
}
