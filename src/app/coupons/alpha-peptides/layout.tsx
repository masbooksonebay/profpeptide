import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/alpha-peptides",
  title: "Alpha Peptides Coupon Code & Discount — Save 10% with PROFPEPTIDE (2026) | Prof. Peptide",
  ogTitle: "Alpha Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Alpha Peptides with code PROFPEPTIDE — a US East Coast supplier with a public COA page, a per-lot five-test verification panel run by an ISO 17025-aligned lab, and HPLC/mass-spec identity confirmation.",
});

export default function AlphaPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Alpha Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Alpha Peptides\",\"url\":\"https://profpeptide.com/coupons/alpha-peptides\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Alpha Peptides\"}}" }} />
      {children}
    </>
  );
}
