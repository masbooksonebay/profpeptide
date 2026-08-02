import { vendors } from "@/data/vendors";
import { CODES_VERIFIED_DATE_SHORT, isCodeVerified } from "@/data/codes-verified";

/**
 * The coupon code card's value line — two weighted pills, side by side:
 *   • Discount (FILLED, PP blue, white bold) — the value proposition.
 *   • Verified (OUTLINE, muted green, ✓) — understated reassurance; a fact, not marketing.
 *
 * Discount % is derived from vendors[slug].discount. The verified pill derives from
 * @/data/codes-verified (isCodeVerified + abbreviated month) and renders ONLY for a vendor in
 * the last clean check:vendors run — retired / dead-link vendors show no verified pill.
 *
 * Sized to sit side by side at 375px without wrapping (short month, text-xs, compact padding);
 * flex-wrap is only a last-resort safety net, not the intended layout.
 *
 * `discount` (default true) toggles the discount pill. It's redundant when the H1 already
 * reads "Save X%" and the card sits right beneath it, so the code-card treatment passes
 * discount={false} to show only the (centered) verified pill. Default true keeps every other
 * page's inline card unchanged.
 */
export function CouponPills({ slug, discount = true }: { slug: string; discount?: boolean }) {
  const pct = vendors[slug]?.discount.match(/(\d+)/)?.[1];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-3 mb-4">
      {discount && pct && (
        <span className="inline-flex items-center rounded-full bg-[#3A759F] px-3 py-1 text-xs font-bold tracking-wide text-white">
          {pct}% OFF
        </span>
      )}
      {isCodeVerified(slug) && (
        <span className="inline-flex items-center rounded-full border border-green-600/40 px-3 py-1 text-xs font-medium text-green-700 dark:border-green-500/40 dark:text-green-400">
          ✓ Verified {CODES_VERIFIED_DATE_SHORT}
        </span>
      )}
    </div>
  );
}
