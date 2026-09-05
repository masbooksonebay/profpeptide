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
  /** ISO-8601 timestamp (a real instant — include the UTC offset or "Z"). Present -> the entry
   *  disappears once past (see activeDeals) AND its deadline renders on the card. Absent -> stays
   *  live until Mark removes it by hand, and the card renders an honest no-date line instead (some
   *  vendor emails say "ending soon" with no date) — never a blank, and never a guessed date. */
  endsAt?: string;
  /** IANA zone the deadline displays in, e.g. "America/Chicago". Vendors state their deadlines in
   *  several different zones — this is what keeps "Ends {time}" honest instead of silently
   *  relabeling everyone's deadline as Eastern. Omit only when the vendor's own stated zone really
   *  is DEFAULT_ENDS_AT_ZONE; meaningless without `endsAt`. */
  endsAtZone?: string;
  /** Short exclusions line, e.g. "Excludes bundles already on sale." */
  terms?: string;
  /** CSS `aspect-ratio` value, e.g. "2/3". Vendors' creatives vary in shape (a square social tile,
   *  a tall email flyer, …) — this sizes the image's reserved box (see DealsPage) to that specific
   *  creative so it renders edge to edge instead of letterboxing inside a box sized for a different
   *  vendor's asset. Omit to fall back to DEFAULT_DEAL_ASPECT_RATIO. */
  aspectRatio?: string;
}

/** Fallback box shape for an entry that omits `aspectRatio` — a generic portrait-flyer ratio,
 *  reasonable until the actual creative is known. Chosen, not measured: no real Deal should stay on
 *  this default for long, since it's very unlikely to exactly match whatever gets dropped in. */
export const DEFAULT_DEAL_ASPECT_RATIO = "4/5";

/** Fallback display zone for a deal that omits `endsAtZone` — PP and most of its roster are
 *  US-based on Eastern time. A vendor stating its deadline in a different zone must set
 *  `endsAtZone` explicitly; this default is not a substitute for reading what the vendor said. */
export const DEFAULT_ENDS_AT_ZONE = "America/New_York";

/**
 * The card's deadline line — always renders something, never blank and never a guessed date.
 * `endsAt` present -> "Ends {month day, h:mm AM/PM ZONE}" in the deal's own stated zone
 * (Intl.DateTimeFormat resolves the abbreviation, e.g. EDT vs EST, from the actual date, so this
 * stays correct across a DST boundary rather than hardcoding a label that could go stale).
 * `endsAt` absent -> an honest line saying so, rather than a card with no timing information at
 * all (the actual gap this exists to close: nothing on the card previously told a reader whether a
 * promo was live today or three weeks stale).
 */
export function formatEndsAt(deal: Pick<Deal, "endsAt" | "endsAtZone">): string {
  if (!deal.endsAt) return "No end date given — confirm current availability with the vendor.";
  const formatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
    timeZone: deal.endsAtZone ?? DEFAULT_ENDS_AT_ZONE,
  }).format(new Date(deal.endsAt));
  return `Ends ${formatted}`;
}

export const deals: Deal[] = [
  {
    vendorSlug: "nura-peptide",
    image: "/deals/nura-peptide-labor-day-2026.jpg",
    imageAlt: "Nura Peptide Labor Day promotional flyer listing codes LABOR20 and GLPBOGO",
    headline:
      "Use code PROFPEPTIDE instead — 25% off, more than the code on this flyer, and it still stacks with GLPBOGO.",
    // No endsAt: Nura's email said "ENDING SOON" with no date.
    // The real file (Mark's "Nura Labor Day Promo.jpg") is 1024x1536px = 2/3 — set explicitly so
    // it renders edge to edge rather than falling back to DEFAULT_DEAL_ASPECT_RATIO's 4/5, which
    // would letterbox a poster designed to fill its own frame.
    aspectRatio: "2/3",
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
