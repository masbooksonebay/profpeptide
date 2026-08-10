// Editorial "last reviewed" dates — HUMAN review stamps, hand-set on purpose.
//
// Distinct from CODES_VERIFIED_DATE (src/data/codes-verified.ts), which is a MACHINE
// stamp derived from a clean scripts/check-vendors.mjs link/code run. "Reviewed" here
// means a person re-read and re-vetted the curated list — there is no machine signal for
// that, so the ISO below is bumped by hand when the review happens. The point of deriving
// the badge from this constant (rather than typing "Updated August 2026" inline) is that
// the date then lives in exactly ONE place and can't drift between the badge, the <title>,
// and the JSON-LD dateModified — the split that put a stale "(July 2026)" in the title and
// forced its removal in 42431fd.
//
// Format: "YYYY-MM". Bump the month when you re-review the page it names.

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

const monthYear = (iso: string): string => {
  const [y, m] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
};

/** ISO month the Featured Vendors hub (/best-peptide-vendors) was last editorially
 *  reviewed. Bump when you re-vet that curated list. */
export const FEATURED_VENDORS_REVIEWED_ISO = "2026-08";

/** "Month Year" the /best-peptide-vendors "Updated …" badge renders — derived from the ISO
 *  above so the badge, and any other on-page "when", can't silently go stale month to month. */
export const FEATURED_VENDORS_REVIEWED_DATE = monthYear(FEATURED_VENDORS_REVIEWED_ISO);

/** Full ISO date (first of the review month) for the JSON-LD `dateModified`, which wants a
 *  YYYY-MM-DD value. Same single source as the badge, so structured data and the visible
 *  stamp can't disagree (they did: dateModified sat at a hardcoded 2026-06-25 while the badge
 *  read August). */
export const FEATURED_VENDORS_REVIEWED_DATE_ISO = `${FEATURED_VENDORS_REVIEWED_ISO}-01`;

/** ISO month /methodology was last editorially reviewed. Bump when the standards page is
 *  re-read against current practice. Same pattern as FEATURED_VENDORS_REVIEWED_ISO: the visible
 *  "Last reviewed" stamp and the JSON-LD dateModified both derive from this one constant, so they
 *  can't drift (the page previously carried a hand-typed, stale "Last reviewed: June 2026"). */
export const METHODOLOGY_REVIEWED_ISO = "2026-08";

/** "Month Year" the /methodology "Last reviewed" line renders — derived from the ISO above. */
export const METHODOLOGY_REVIEWED_DATE = monthYear(METHODOLOGY_REVIEWED_ISO);

/** Full ISO date (first of the review month) for the /methodology JSON-LD `dateModified`. */
export const METHODOLOGY_REVIEWED_DATE_ISO = `${METHODOLOGY_REVIEWED_ISO}-01`;
