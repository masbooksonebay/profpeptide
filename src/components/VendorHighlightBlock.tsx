"use client";

import Link from "next/link";
import { vendors } from "@/data/vendors";
import { CopyCode } from "@/components/CopyCode";
import { compoundVendorCount, deriveHighlightVendors, isBlendSlug, blendVendorCount } from "@/data/prices";
import { LISTED } from "@/data/attribution";

export interface VendorHighlight {
  slug: string;
  note?: string;
}

export interface VendorHighlightBlockProps {
  /**
   * OPTIONAL editorial input, NOT the primary vendor source. The featured vendors are DERIVED
   * from price rows (deriveHighlightVendors) — a vendor is shown because it demonstrably carries
   * the compound, ranked by attribution tier. `highlights` serves two narrow roles:
   *   1. Note source — a derived vendor inherits this list's `note` if one exists (blank otherwise).
   *   2. Fallback — for compounds the price grid doesn't track (blends / combos), where derivation
   *      returns nothing, this hand-curated list (filtered to LISTED) is used instead.
   * Editing a slug here has NO effect for a priced compound; derivation drives selection there.
   */
  highlights?: VendorHighlight[];
  /** The compound this profile is about. Drives BOTH the derived vendor block and the price CTA.
   *  The CTA (a link to /prices/<slug>) renders whenever the compound is indexable (>=3 price
   *  vendors), INDEPENDENT of whether any vendor cards render — so an indexable compound with no
   *  vetted vendor (e.g. igf-1-des) still links to its price page. Passed explicitly (not from the
   *  route) so the link sits in static, crawlable HTML. */
  compoundSlug?: string;
}

export default function VendorHighlightBlock({ highlights, compoundSlug }: VendorHighlightBlockProps) {
  // Selection: derive from price rows (demonstrable stock, ranked). Only where the grid tracks
  // nothing (blends/combos) fall back to the hand-curated list — always filtered to LISTED so a
  // cut vendor can never render. No invented pairings: a vendor appears only with a price row or
  // an explicit curated entry.
  const derived = compoundSlug ? deriveHighlightVendors(compoundSlug) : [];
  const selected: VendorHighlight[] =
    derived.length > 0
      ? derived.map((slug) => ({ slug, note: highlights?.find((h) => h.slug === slug)?.note }))
      : (highlights ?? []).filter((h) => LISTED.has(h.slug));

  // CTA is decoupled from the block: it depends only on the compound being indexable. Blends
  // price on a separate total-price surface (blendVendorCount), single compounds on $/mg.
  const isBlend = compoundSlug ? isBlendSlug(compoundSlug) : false;
  const vendorCount = compoundSlug
    ? isBlend
      ? blendVendorCount(compoundSlug)
      : compoundVendorCount(compoundSlug)
    : 0;
  const showCta = !!compoundSlug && vendorCount >= 3;

  // Nothing to say: no vendors and not indexable → render nothing (blends with no curation).
  if (selected.length === 0 && !showCta) return null;

  const cta = showCta ? (
    <Link
      href={`/prices/${compoundSlug}`}
      className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#3A759F]/40 bg-[#3A759F]/10 px-4 py-3 text-sm font-semibold text-[#3A759F] hover:bg-[#3A759F]/15 transition-colors"
    >
      Compare prices across {vendorCount} vendors &rarr;
    </Link>
  ) : null;

  // CTA-only: indexable compound with no vetted vendor to feature (e.g. igf-1-des). Give the link
  // context so it doesn't float as a bare button under the heading.
  if (selected.length === 0) {
    return (
      <div className="rounded-xl border border-[#D9DEE4] dark:border-slate-600 bg-gray-50 dark:bg-[#1e293b] px-4 py-4 space-y-3">
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          No vendor on our attribution-verified list is confirmed to carry this compound yet. You
          can still compare current market prices across every vendor that stocks it:
        </p>
        {cta}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {selected.map((h) => {
          const v = vendors[h.slug];
          if (!v) return null;
          return (
            <div
              key={h.slug}
              className="flex flex-col rounded-xl border border-[#D9DEE4] dark:border-slate-600 bg-gray-50 dark:bg-[#1e293b] overflow-hidden"
            >
              <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-gray-100 dark:border-slate-700">
                <Link
                  href={v.detailPage}
                  className="text-sm font-bold text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-colors"
                >
                  {v.name}
                </Link>
                <span className="text-xs font-bold text-[#3A759F] bg-[#3A759F]/15 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {v.discount}
                </span>
              </div>

              <div className="flex flex-col gap-2 px-4 py-3 flex-1">
                {(v.editorsPick || v.bestDeal) && (
                  <div className="flex flex-wrap gap-1.5">
                    {v.editorsPick && (
                      <span className="text-xs bg-[#eab308] text-[#1c1917] border border-[#ca8a04] px-2 py-0.5 rounded-full font-semibold">
                        Editor&apos;s Pick
                      </span>
                    )}
                    {v.bestDeal && (
                      <span className="text-xs bg-green-100 text-green-800 border border-green-300 px-2 py-0.5 rounded-full font-medium">
                        Best Deal
                      </span>
                    )}
                  </div>
                )}

                {h.note && (
                  <p className="text-xs text-gray-500 dark:text-slate-400 italic leading-relaxed">
                    {h.note}
                  </p>
                )}

                <div className="mt-auto space-y-2 pt-2">
                  <CopyCode code={v.code} size="large" />
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block text-xs py-2"
                  >
                    Shop {v.name}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {cta}
    </>
  );
}
