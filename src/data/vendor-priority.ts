import { vendors } from "./vendors";
import { LISTED } from "./attribution";

// 🔒 THE PRIORITY VENDORS, in card order (Mark, 2026-08-30).
//
// WHY THIS EXISTS: internal link authority decides which coupon page Google serves for a vendor's
// own brand query. The audit behind this file measured it — Amino Club had 98 distinct internal
// referrers (33 profiles + 24 FAQ pages, because it was pinned and hardcoded into the FAQ trio)
// and wins its query outright; Royal Peptides had 32, every one from /prices, and loses its own
// brand query to the /coupons hub. Placement is therefore not a cosmetic choice — it is the lever.
//
// 🔴 STOCK GATES THE CARD. A vendor appears here only on profiles where it has a real price row.
// A card for a vendor that does not sell the compound is a broken click, and it would also be the
// kind of identical-everywhere block Google discounts. Varying by page for a real reason (actual,
// verified stock) is the property that earns the link.
//
// The matrix of who stocks what is generated, never hand-kept:
//     node scripts/gen-vendor-placement.mjs   ->   docs/PP_VENDOR_PLACEMENT.md
//
// 🔴 NURA PEPTIDE WAS REMOVED from every placement surface on 2026-08-30 — it is not converting.
// It keeps its coupon page, registry entry and price rows; only the profile/FAQ card slots go.
// Its 20 pins had been taking those slots from vendors that would otherwise have derived into
// them (the pin header records Glacier alone losing 12 profiles to that rollout), so dropping it
// returns that equity rather than destroying it.
export const PRIORITY_VENDORS = [
  "capstone-peptides",
  "amino-club",
  "peptide-partners",
  "glacier-aminos",
] as const;

/** Total cards a profile's vendor block renders. Priority vendors fill it first; any remaining
 *  slots go to other vendors that genuinely stock the compound (see priorityHighlightVendors). */
export const CARD_SLOTS = 4;

export function isPriorityVendor(slug: string): boolean {
  return (PRIORITY_VENDORS as readonly string[]).includes(slug);
}

/** Priority vendors that are LISTED and not retired — the eligible set before the stock gate. */
export function eligiblePriorityVendors(): string[] {
  return (PRIORITY_VENDORS as readonly string[]).filter(
    (s) => LISTED.has(s) && !vendors[s]?.retired,
  );
}
