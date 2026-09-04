import Link from "next/link";
import { backLinkParam } from "@/data/back-link-sources";
import { VendorCodeChip } from "@/components/VendorCodeChip";
import { VendorShopButton } from "@/components/VendorShopButton";

export interface CouponsHubVendor {
  slug: string;
  name: string;
  code: string;
  discount: string;
  region: string;
  bestDeal?: boolean;
  detailPage?: string;
}

/**
 * `anchorKey` is the vendor's letter-group id ("m", "9", …) — passed by CouponsBrowser, which
 * already computes it once per card to decide letter-divider placement. It rides the back-link
 * `?from=` value so a reader returning from this vendor's coupon page lands back at that letter
 * group instead of the top of the hub (see back-link-sources.ts's AnchorSource). Left undefined for
 * Professor's Picks and search-result cards — neither sits under a letter divider, so the back link
 * resolves to the plain /coupons href.
 *
 * Redesigned 2026-09 to cut ~57 cards' worth of scroll. Two changes drove the height down:
 *   - The code chip is `size="chip"` (h-9, inline), not `size="large"` (a full-width block) — the
 *     hub's own previous choice, not VendorCodeChip's default.
 *   - "Learn More" was cut on the theory that the vendor NAME, already a <Link> to the same href,
 *     made it redundant. WRONG IN PRACTICE (Mark, 2026-09): a name styled as a heading doesn't read
 *     as clickable, so the destination went invisible, not redundant. Fixed below with the actual
 *     /vendors pattern — a full-bleed overlay Link — rather than bringing "Learn More" back.
 * Also gone: `description`/`purityBadge`/`specialBadge`/`url`/`comingSoon` — toCard() in
 * coupons/page.tsx never populated the first four, and the fifth was read nowhere (the "Coming
 * soon" placeholder below branches on `v.code` being falsy, not on `v.comingSoon`). All five were
 * dead since this card was written; removed rather than carried forward.
 * Shop now renders through VendorShopButton (previously a bare <a href="/go/...">) — the plain
 * anchor let a reveal-gated vendor's Shop click skip the gate VendorCodeChip enforces one column
 * over. VendorShopButton is the exact fix already shipped for /vendors' card; reused here rather
 * than re-solved.
 *
 * Polish pass (2026-09, post-launch): the first redesign scaled the card down but left every
 * element the same small size — no scan order. Scaled SELECTIVELY instead of padding the whole
 * card: name grows most (text-base → text-xl, the thing a reader scans for first), the discount
 * pill and code chip grow next (`size="chip-lg"`, a new CopyCode/VendorCodeChip variant — verified
 * against "PROFPEPTIDE", the longest live code, not wrapping at 11 chars), and the Shop button's
 * wrapper widens to match. Verified + region stay exactly as they were — they're confirmatory, not
 * primary, and growing all five would put them back in competition with the name.
 *
 * Whole-card click (2026-09): full-bleed overlay <Link> as the first child (`absolute inset-0 z-0`),
 * copied from /vendors' card — this session's own precedent for the pattern. The interactive
 * siblings (code chip, Shop button) each sit in their own `relative z-10` wrapper so they sit ABOVE
 * the overlay and remain independently clickable, never nested inside it (nesting a <button>/<a>
 * inside the overlay <Link> would be invalid HTML and make the click ambiguous — same reasoning
 * VendorShopButton.tsx documents for /vendors).
 * The vendor NAME is no longer its own <Link> — with the overlay covering the whole card, a second
 * anchor around just the name would be a nested `<a>` inside the overlay `<a>`, which is invalid
 * HTML browsers silently mangle (closing the outer anchor early). /vendors never had this problem
 * because its name was ALREADY plain text (an <h2>, styled via `group-hover:`, not a Link) — the
 * fix here is the same: the name renders as a plain heading, colored via the card's `group` class
 * so it still visibly reacts to a hover anywhere on the card, exactly like /vendors'.
 */
export function CouponsHubCard({ v, anchorKey }: { v: CouponsHubVendor; anchorKey?: string }) {
  return (
    <div
      id={`vendor-${v.slug}`}
      className="group relative rounded-xl overflow-hidden border border-[#D9DEE4] dark:border-slate-600 shadow-sm hover:shadow-md hover:border-[#3A759F]/40 transition-all duration-200 bg-white dark:bg-[#0f172a]"
    >
      {v.detailPage && (
        <Link
          href={`${v.detailPage}?from=${backLinkParam("coupon-hub-card", anchorKey)}`}
          aria-label={`View ${v.name} details`}
          className="absolute inset-0 z-0"
        />
      )}

      <div className="px-5 py-3.5 bg-gray-50 dark:bg-[#1e293b] border-b border-gray-100 dark:border-slate-700 flex items-center justify-between gap-3">
        <h2 className="font-bold text-xl leading-tight text-[#16181B] dark:text-slate-100 group-hover:text-[#3A759F] transition-colors duration-150 truncate">
          {v.name}
        </h2>
        <span className="text-sm font-bold text-[#3A759F] bg-[#3A759F]/15 px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0">
          {v.discount}
        </span>
      </div>

      <div className="px-5 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">
            Verified
          </span>
          {v.bestDeal && (
            <span className="text-xs bg-green-100 text-green-800 border border-green-300 px-2 py-0.5 rounded-full font-medium">
              Best Deal
            </span>
          )}
          {v.region && (
            <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-[#D9DEE4] dark:border-slate-600 px-2 py-0.5 rounded-full whitespace-nowrap">
              {v.region}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2.5 flex-shrink-0">
          {v.code ? (
            <div className="relative z-10">
              <VendorCodeChip slug={v.slug} code={v.code} size="chip-lg" from="coupon-hub-card" />
            </div>
          ) : (
            <span className="h-11 inline-flex items-center px-3.5 rounded-md text-sm text-center text-gray-500 dark:text-slate-400 italic border border-[#D9DEE4] dark:border-slate-600">
              Coming soon
            </span>
          )}
          <div className="relative z-10 w-32">
            <VendorShopButton slug={v.slug} from="coupon-hub-shop" />
          </div>
        </div>
      </div>
    </div>
  );
}
