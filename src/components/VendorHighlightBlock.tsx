"use client";

import Link from "next/link";
import { vendors } from "@/data/vendors";
import { CopyCode } from "@/components/CopyCode";
import { compoundVendorCount } from "@/data/prices";
import { LISTED } from "@/data/attribution";

export interface VendorHighlight {
  slug: string;
  note?: string;
}

export interface VendorHighlightBlockProps {
  highlights: VendorHighlight[];
  /** The compound this profile is about. When set AND the compound has an indexable /prices page
   *  (>=3 vendors), a server-rendered "Compare prices across N vendors" CTA is shown beside the vendor
   *  cards. Passed explicitly (not derived from the route) so the link is in the STATIC HTML — a
   *  client-only usePathname link doesn't render server-side and wouldn't be crawlable. Omitted on
   *  non-profile hosts (e.g. /peptide-sciences-alternatives); the ~17 blend/stack profiles below the
   *  threshold render no CTA, so the link is never dead. */
  compoundSlug?: string;
}

export default function VendorHighlightBlock({ highlights, compoundSlug }: VendorHighlightBlockProps) {
  // Promote only attribution-proven / graced-in vendors (see src/data/attribution.ts). A code
  // that works at checkout but credits nobody earns nothing and costs the click. Source lists
  // are already pruned to LISTED and check:attribution enforces it — this is the render-layer
  // guarantee. Floor rule: if nothing survives, hide the block entirely (never an empty grid).
  const listed = highlights.filter((h) => LISTED.has(h.slug));
  if (listed.length === 0) return null;
  const vendorCount = compoundSlug ? compoundVendorCount(compoundSlug) : 0;
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {listed.map((h) => {
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
    {compoundSlug && vendorCount >= 3 && (
      <Link
        href={`/prices/${compoundSlug}`}
        className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#3A759F]/40 bg-[#3A759F]/10 px-4 py-3 text-sm font-semibold text-[#3A759F] hover:bg-[#3A759F]/15 transition-colors"
      >
        Compare prices across {vendorCount} vendors &rarr;
      </Link>
    )}
    </>
  );
}
