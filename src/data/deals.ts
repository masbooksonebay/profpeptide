// /deals — vendor promotions using the vendors' OWN creatives. Vendors supply promotional images
// to affiliates; this is where PP puts them (and the landing page for X posts about a sale).
//
// Import-free by design (no `vendors` import here) — kept exec'able by the generator/check scripts
// the same way faqQuestions.ts and labs.ts are. `vendorSlug` is validated against the live vendor
// registry by scripts/check-deals.mjs (wired into `npm run build`), NOT here, so this file has no
// build-order dependency on vendors.ts.
//
// NEWEST FIRST is maintained by INSERTION ORDER — a new deal is unshifted to the top of this array.
// There's no separate `postedAt`/`startsAt` field (not in the spec); if hand-ordering ever gets hard
// to eyeball, add one then.
export interface Deal {
  /** Must resolve against the vendor registry (src/data/vendors.ts) — checked by
   *  scripts/check-deals.mjs, which fails the build on a typo'd or retired slug. */
  vendorSlug: string;
  /** Path to the creative, self-hosted under /public. NEVER a vendor-hosted URL — the vendor's own
   *  copy can be swapped or pulled without notice, and hotlinking would break silently. */
  image: string;
  imageAlt: string;
  /** Rendered ABOVE the image. Tells the reader PP's code beats what's printed on the flyer — it
   *  does not argue with the image, it instructs past it. */
  headline: string;
  /** ISO-8601 timestamp. Present -> the entry disappears once past (see activeDeals). Absent ->
   *  stays live until Mark removes it by hand (some vendor emails say "ending soon" with no date). */
  endsAt?: string;
  /** Short exclusions line, e.g. "Excludes bundles already on sale." */
  terms?: string;
}

export const deals: Deal[] = [
  {
    vendorSlug: "nura-peptide",
    // PLACEHOLDER — Mark supplies the real file. See the build report for the exact drop-in path
    // and the width/height this entry currently assumes (must be updated to the real file's
    // intrinsic pixel dimensions, or the rendered image will be stretched/squished).
    image: "/deals/nura-peptide-labor-day-2026.jpg",
    imageAlt: "Nura Peptide Labor Day promotional flyer listing codes LABOR20 and GLPBOGO",
    headline:
      "Use code PROFPEPTIDE instead — 25% off, more than the code on this flyer, and it still stacks with GLPBOGO.",
    // No endsAt: Nura's email said "ENDING SOON" with no date.
  },
];

/**
 * Deals not past `endsAt`, in the array's own (newest-first) order. Takes `now` as a param rather
 * than reading the clock itself so the /deals page's ISR revalidation (see its route segment
 * config) is what actually re-runs this, not a value frozen at module load.
 */
export function activeDeals(now: Date): Deal[] {
  return deals.filter((d) => !d.endsAt || new Date(d.endsAt).getTime() > now.getTime());
}
