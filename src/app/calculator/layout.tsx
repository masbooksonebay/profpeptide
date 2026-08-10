import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/calculator",
  title: "Peptide Reconstitution & Dosage Calculator — BAC Water Tool | Prof. Peptide",
  description:
    "Free peptide dosage calculator. Calculate reconstitution volumes, BAC water ratios, and injection amounts for research peptides. Simple and accurate.",
  // Defer OG image to this segment's opengraph-image.tsx (page-specific card).
  useDefaultOgImage: false,
});

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
