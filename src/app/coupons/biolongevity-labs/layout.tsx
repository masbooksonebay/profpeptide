import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/biolongevity-labs",
  title: "Biolongevity Labs Coupon Code & Discount — Save 15% with PROFPEPTIDE (2026) | Prof. Peptide",
  ogTitle: "Biolongevity Labs Coupon — Save 15% | Prof. Peptide",
  description:
    "Save 15% at Biolongevity Labs with code PROFPEPTIDE — a US manufacturer whose stated standard is triple third-party lab verification per batch, with COAs, HPLC purity reports, and LC-MS molecular confirmation on every order and a public COA library.",
});

export default function BiolongevityLabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Biolongevity Labs Discount Code - Save 15%\",\"description\":\"Use code PROFPEPTIDE for 15% off at Biolongevity Labs\",\"url\":\"https://profpeptide.com/coupons/biolongevity-labs\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Biolongevity Labs\"}}" }} />
      {children}
    </>
  );
}
