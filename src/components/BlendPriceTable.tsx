"use client";

import Link from "next/link";
import { blendPriceRows, type BlendRow } from "@/data/prices";
import { CopyCode } from "@/components/CopyCode";
import { backLinkParam } from "@/data/back-link-sources";

function fmt(n: number): string {
  return "$" + n.toFixed(2);
}

/**
 * One blend's vendor prices as a scannable grid — TOTAL price at the blend's modal
 * configuration (e.g. GLOW at 70 mg), NOT $/mg. Blends are multi-compound products, so per-mg
 * normalization is meaningless; every vendor is compared at the same standard vial. Mirrors
 * CompoundPriceTable's layout minus the unit toggle (there is only one meaningful figure).
 */
export default function BlendPriceTable({ blendSlug, config }: { blendSlug: string; config: string }) {
  const rows = blendPriceRows(blendSlug, config);
  if (rows.length === 0) {
    return <p className="text-sm text-gray-500 dark:text-slate-400">No blend price data yet.</p>;
  }

  const inStock = rows.filter((r) => r.inStock);
  const cheapest = rows.reduce((a, b) => (b.effectivePrice < a.effectivePrice ? b : a));
  const cheapestInStock = inStock.length ? inStock.reduce((a, b) => (b.effectivePrice < a.effectivePrice ? b : a)) : null;
  let bestRow: BlendRow | null = null, bestLabel = "";
  let secondRow: BlendRow | null = null, secondLabel = "";
  if (rows.length > 1) {
    bestRow = cheapest;
    bestLabel = "Best price";
    if (!cheapest.inStock && cheapestInStock) { secondRow = cheapestInStock; secondLabel = "Best in stock"; }
  }
  const badgeFor = (r: BlendRow) => (r === bestRow ? bestLabel : r === secondRow ? secondLabel : null);

  const GRID =
    "grid grid-cols-[minmax(0,1fr)_5rem_5rem_9rem_8rem_5rem] items-start justify-items-start gap-x-4 text-left";

  return (
    <div>
      <p className="text-xs text-gray-400 dark:text-slate-500 mb-4">
        Compared at the most common configuration across vendors: <span className="font-semibold">{config}</span> total.
      </p>

      {/* ── Desktop grid (≥ sm) ── */}
      <div className="hidden sm:block tabular-nums">
        <div className={`${GRID} pb-2 border-b border-[#D9DEE4] dark:border-slate-700 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500`}>
          <div>Vendor</div>
          <div>Config</div>
          <div>Stock</div>
          <div>Total price</div>
          <div className="justify-self-end">Code</div>
          <div />
        </div>
        {rows.map((r, i) => (
          <div key={i} className={`${GRID} py-2.5 border-b border-gray-100 dark:border-slate-800`}>
            <div className="min-w-0 self-baseline">
              {r.couponPage ? (
                <Link href={`${r.couponPage}?from=${backLinkParam("price-grid", blendSlug)}`} className="text-sm font-semibold text-[#3A759F] hover:underline">{r.vendorName}</Link>
              ) : (
                <span className="text-sm font-semibold text-[#16181B] dark:text-slate-100">{r.vendorName}</span>
              )}
              {badgeFor(r) && (
                <span className="ml-2 text-[10px] bg-[#3A759F]/10 text-[#3A759F] border border-[#3A759F]/20 px-1.5 py-0.5 rounded-full font-medium align-middle">{badgeFor(r)}</span>
              )}
            </div>
            <div className="self-baseline text-sm text-gray-600 dark:text-slate-300">{r.entry.config}</div>
            <div className={`self-baseline text-xs ${r.inStock ? "text-green-700" : "text-gray-400 dark:text-slate-500"}`}>{r.inStock ? "In stock" : "Out"}</div>
            <div className="self-baseline">
              <span className="text-sm font-bold text-[#16181B] dark:text-slate-100">{fmt(r.effectivePrice)}</span>
              {r.isAffiliate && r.discountPct > 0 && (
                <span className="ml-1.5 text-xs text-gray-400 dark:text-slate-500 line-through">{fmt(r.totalPrice)}</span>
              )}
            </div>
            <div className="justify-self-end">{r.isAffiliate && r.code ? <CopyCode code={r.code} /> : <span className="text-xs text-gray-300 dark:text-slate-600">—</span>}</div>
            <div>{r.isAffiliate && r.affiliateUrl ? <a href={`/go/${r.entry.vendor}?from=price-grid`} target="_blank" rel="sponsored nofollow noopener" className="btn-primary text-sm whitespace-nowrap h-9 py-0">Shop</a> : null}</div>
          </div>
        ))}
      </div>

      {/* ── Mobile stacked (< sm) ── */}
      <div className="sm:hidden space-y-2">
        {rows.map((r, i) => (
          <div key={i} className="panel-card p-3 tabular-nums">
            <div className="flex items-baseline justify-between gap-2">
              <div className="flex-1 min-w-0 flex items-baseline gap-2 flex-wrap">
                {r.couponPage ? (
                  <Link href={`${r.couponPage}?from=${backLinkParam("price-grid", blendSlug)}`} className="text-sm font-semibold text-[#3A759F] hover:underline">{r.vendorName}</Link>
                ) : (
                  <span className="text-sm font-semibold text-[#16181B] dark:text-slate-100">{r.vendorName}</span>
                )}
                <span className="text-xs text-gray-400 dark:text-slate-500">{r.entry.config}</span>
                <span className={`text-xs ${r.inStock ? "text-green-700" : "text-gray-400 dark:text-slate-500"}`}>{r.inStock ? "In stock" : "Out"}</span>
                {badgeFor(r) && <span className="text-[10px] bg-[#3A759F]/10 text-[#3A759F] border border-[#3A759F]/20 px-1.5 py-0.5 rounded-full font-medium">{badgeFor(r)}</span>}
              </div>
              <div className="shrink-0 min-w-[5rem] text-right">
                <span className="text-sm font-bold text-[#16181B] dark:text-slate-100">{fmt(r.effectivePrice)}</span>
                {r.isAffiliate && r.discountPct > 0 && <span className="ml-1.5 text-xs text-gray-400 dark:text-slate-500 line-through">{fmt(r.totalPrice)}</span>}
              </div>
            </div>
            <div className="flex items-center gap-3 mt-2">
              {r.isAffiliate && r.code && <CopyCode code={r.code} className="flex-[2]" />}
              {r.isAffiliate && r.affiliateUrl && <a href={`/go/${r.entry.vendor}?from=price-grid`} target="_blank" rel="sponsored nofollow noopener" className="btn-primary text-sm h-9 py-0 flex-[3]">Shop</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
