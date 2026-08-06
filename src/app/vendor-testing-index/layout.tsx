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
  // noindex, follow — under construction. Registry-derivation makes the ROWS complete, but not
  // the DATA: 28 of 40 vendors still render "Pending" (no verified lab), and several records were
  // wrong until f9e63d0 (Glacier/Peptidology COAs were misread as vendor-gated). A page making
  // third-party testing claims about named labs should not be indexed while incomplete. The COA-
  // collection job that would fill it in is NOT being pursued (no refresh mechanism when a vendor
  // changes labs — Glacier→Kovera would have gone silently wrong). `follow` keeps link equity
  // flowing; the route stays live and reachable via the /best-peptide-vendors prose link. Lift the
  // noindex only when the testing data is verified and kept current. (Prior history: noindexed as an
  // incomplete hand-typed table; lifted 2026-08-04 in SCS 28; re-applied here.)
  robots: { index: false, follow: true },
};

export default function VendorTestingIndexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
