import { CODES_VERIFIED_DATE, isCodeVerified } from "@/data/codes-verified";

/**
 * Trust badge for the coupon code card — answers the buyer's one question ("does this code
 * still work?") where they're already looking, before they try checkout. DERIVED from the
 * single @/data/codes-verified module (VENDORS_VERIFIED_ISO → month, VENDORS_VERIFIED_SLUGS →
 * membership); NOT a fourth independently-maintained date.
 *
 * Renders ONLY for a vendor in the last clean check:vendors run — a vendor whose link was
 * dead is excluded from the set and shows no verified date rather than claiming one it didn't
 * get. Label is "Code verified" (not bare "Verified") to stay distinct from the grid caption's
 * "Prices current as of …" — the two visible dates mean different things (code check vs price
 * pull), and the labels now say which is which.
 *
 * Visual language matches the card: a centered small line like the discount text, in the
 * site's verified-green (same green as the "Verified" pills) — no new box/treatment.
 */
export function VerifiedBadge({ slug }: { slug: string }) {
  if (!isCodeVerified(slug)) return null;
  return (
    <p className="text-center text-xs text-green-700 dark:text-green-400 font-medium mt-1 mb-4">
      ✓ Code verified {CODES_VERIFIED_DATE}
    </p>
  );
}
