import { buildPageMetadata } from "@/lib/seo";

export const metadata = {
  ...buildPageMetadata({
    path: "/vendor-testing-index",
    title: "Peptide Vendor COA & Testing Transparency Index",
    description:
      "A verified index of peptide vendors' third-party lab testing, published COAs, purity standards, and testing methods — honest 'pending' where unconfirmed.",
    ogTitle: "Peptide Vendor COA & Testing Transparency Index",
    ogDescription: "Verified third-party testing, COAs, and purity standards for research-peptide vendors.",
    useDefaultOgImage: false,
  }),
  // HISTORY (do not re-add a noindex): this page was noindexed while it was an incomplete,
  // hand-typed table — it was missing ~17 of the active vendors — and unlinked from site chrome.
  // Both reasons are now gone: it DERIVES all rows from the vendor registry (so it cannot go
  // "incomplete"), and it is linked from /coupons. Indexing normally (no robots override) as of
  // 2026-08-04. If the data ever regresses, fix the registry — not the robots tag.
};

export default function VendorTestingIndexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
