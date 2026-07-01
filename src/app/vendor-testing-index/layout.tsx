import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/vendor-testing-index",
  title: "Peptide Vendor COA & Testing Transparency Index",
  description:
    "A verified index of peptide vendors' third-party lab testing, published COAs, purity standards, and testing methods — honest 'pending' where unconfirmed.",
  ogTitle: "Peptide Vendor COA & Testing Transparency Index",
  ogDescription: "Verified third-party testing, COAs, and purity standards for research-peptide vendors.",
  useDefaultOgImage: false,
});

export default function VendorTestingIndexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
