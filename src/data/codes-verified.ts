import { VENDORS_VERIFIED_ISO, VENDORS_VERIFIED_SLUGS } from "./vendors-verified.generated";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

/**
 * "Month Year" the coupon pages render as the verified date — DERIVED from the machine
 * link-check stamp (VENDORS_VERIFIED_ISO, written only by a clean scripts/check-vendors.mjs
 * run) rather than hand-set. This is the fix for the class that bit us: the old
 * CODES_VERIFIED_DATE was a hand-typed constant in vendors.ts that silently went stale at
 * every month boundary. Now the "verified" month can never diverge from the last actual
 * verification — bump it by running check:vendors, not by editing a string.
 *
 * The claim it backs stays "verified and working": codes come from each vendor's own
 * affiliate dashboard (first-party) and the destination link is checked each run — that the
 * code is current and the link resolves is exactly what we attest.
 */
export const CODES_VERIFIED_DATE = (() => {
  const [y, m] = VENDORS_VERIFIED_ISO.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
})();

const VERIFIED_SET = new Set(VENDORS_VERIFIED_SLUGS);

/**
 * Was this vendor actually verified in the last check:vendors run? The stamp now records
 * WHICH vendors were reachable (VENDORS_VERIFIED_SLUGS), not just the date — a vendor whose
 * link was dead is excluded, so its coupon page must NOT display a verified date claiming a
 * verification it didn't get. Gate the visible "✓ Code verified …" badge on this.
 */
export function isCodeVerified(slug: string): boolean {
  return VERIFIED_SET.has(slug);
}
