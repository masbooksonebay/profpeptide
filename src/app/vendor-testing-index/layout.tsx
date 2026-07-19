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
  // Intentionally hidden pending complete vendor data: the page stays live at
  // its URL for continued work, but is noindexed and unlinked from global
  // chrome until the testing data is complete. (The page is a client component,
  // so robots is set here in the route layout — the repo's metadata pattern for
  // client-component pages.)
  robots: { index: false, follow: true },
};

export default function VendorTestingIndexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
