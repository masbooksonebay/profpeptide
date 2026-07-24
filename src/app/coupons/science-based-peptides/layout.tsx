import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/science-based-peptides",
  title: "Science Based Peptides Coupon Code & Discount — Save 10% with PROFPEPTIDE (2026) | Prof. Peptide",
  ogTitle: "Science Based Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Science Based Peptides with code PROFPEPTIDE — a US research supplier with a downloadable Certificate of Analysis on every product, batch number and tested date shown per lot, and HPLC/mass-spec batch-level documentation.",
});

export default function ScienceBasedPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Science Based Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Science Based Peptides\",\"url\":\"https://profpeptide.com/coupons/science-based-peptides\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Science Based Peptides\"}}" }} />
      {children}
    </>
  );
}
