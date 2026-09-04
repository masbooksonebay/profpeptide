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
 *   - "Learn More" is gone. This card has NO full-bleed overlay Link (unlike /vendors' card) — the
 *     vendor NAME is already a <Link> to this same detailPage?from=... href, so "Learn More" was a
 *     second control pointing at a destination the card already offered. Nothing is lost by cutting it.
 * Also gone: `description`/`purityBadge`/`specialBadge`/`url`/`comingSoon` — toCard() in
 * coupons/page.tsx never populated the first four, and the fifth was read nowhere (the "Coming
 * soon" placeholder below branches on `v.code` being falsy, not on `v.comingSoon`). All five were
 * dead since this card was written; removed rather than carried forward.
 * Shop now renders through VendorShopButton (previously a bare <a href="/go/...">) — the plain
 * anchor let a reveal-gated vendor's Shop click skip the gate VendorCodeChip enforces one column
 * over. VendorShopButton is the exact fix already shipped for /vendors' card; reused here rather
 * than re-solved.
 */
export function CouponsHubCard({ v, anchorKey }: { v: CouponsHubVendor; anchorKey?: string }) {
  return (
    <div
      id={`vendor-${v.slug}`}
      className="rounded-xl overflow-hidden border border-[#D9DEE4] dark:border-slate-600 shadow-sm hover:shadow-md hover:border-[#3A759F]/40 transition-all duration-200 bg-white dark:bg-[#0f172a]"
    >
      <div className="px-5 py-2.5 bg-gray-50 dark:bg-[#1e293b] border-b border-gray-100 dark:border-slate-700 flex items-center justify-between gap-3">
        {v.detailPage ? (
          <Link
            href={`${v.detailPage}?from=${backLinkParam("coupon-hub-card", anchorKey)}`}
            className="font-bold text-base leading-tight text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-all duration-150 hover:scale-105 origin-left truncate"
          >
            {v.name}
          </Link>
        ) : (
          <span className="font-bold text-base leading-tight text-[#16181B] dark:text-slate-100 truncate">{v.name}</span>
        )}
        <span className="text-xs font-bold text-[#3A759F] bg-[#3A759F]/15 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
          {v.discount}
        </span>
      </div>

      <div className="px-5 py-3 flex flex-wrap items-center justify-between gap-3">
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

        <div className="flex items-center gap-2 flex-shrink-0">
          {v.code ? (
            <VendorCodeChip slug={v.slug} code={v.code} size="chip" from="coupon-hub-card" />
          ) : (
            <span className="h-9 inline-flex items-center px-2.5 rounded-md text-xs text-center text-gray-500 dark:text-slate-400 italic border border-[#D9DEE4] dark:border-slate-600">
              Coming soon
            </span>
          )}
          <div className="w-28">
            <VendorShopButton slug={v.slug} from="coupon-hub-shop" />
          </div>
        </div>
      </div>
    </div>
  );
}
