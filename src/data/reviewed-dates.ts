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
