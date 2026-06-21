import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/log",
  title: "Peptide Protocol Log & Reconstitution Tracker | Prof. Peptide",
  description:
    "Free peptide reconstitution log and dose tracker. Record each vial's mg, BAC water volume, concentration, draw volume, and U-100 syringe units, plus source, lot, and discard-by date. No account — entries stay on your device. Pairs with the reconstitution calculator.",
});

export default function LogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
