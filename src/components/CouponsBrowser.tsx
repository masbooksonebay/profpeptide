"use client";

// Client-side search + A–Z browser for the /coupons hub (57 vendors, one alphabetical run below a
// featured Professor's Picks block). Mirrors HubCategoryBrowser's shape for the SAME reason: the
// server renders the FULL list (every card, every letter divider) so crawlers and no-JS readers see
// everything regardless of script — this component only narrows what's VISIBLE, entirely client-side
// state, never written back to the URL.
//
// Search and the A–Z bar interact by REPLACING the featured/alphabetical structure, not filtering it
// in place: a non-empty query flattens BOTH Professor's Picks and the alphabetical vendors into one
// unlabeled result list — no letter dividers (a filtered set is already short; dividers over 2–3
// results are clutter) and the A–Z bar goes fully inert (every letter greyed, no href — jumping
// doesn't do anything useful when the whole page is already the filtered list). Clearing the query
// restores the normal Picks block + lettered run + live A–Z bar.
//
// SCROLL RESTORE (`?from=coupon-hub-card:<letter>` → `#letter-<x>`, see back-link-sources.ts): a
// native browser fragment jump on load turned out NOT to fire reliably on this route (confirmed by
// loading /coupons#letter-a directly and checking window.scrollY — it stayed 0), so the mount effect
// below reads `window.location.hash` itself and scrolls the matching element into view. Per the
// site's convention this reads via window.location, not useSearchParams — not because the route
// would opt into dynamic rendering (it's already "use client"), but for one way of reading the URL
// across the site.

import { useEffect, useMemo, useState } from "react";
import { CouponsHubCard, type CouponsHubVendor } from "@/components/CouponsHubCard";

const LETTERS = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

/** Buckets a vendor by the first character of its name — a lowercase letter or a digit. */
function firstKey(name: string): string {
  const c = name[0]?.toLowerCase() ?? "";
  return /[a-z0-9]/.test(c) ? c : "#";
}

export function CouponsBrowser({
  picks,
  vendors,
}: {
  picks: CouponsHubVendor[];
  vendors: CouponsHubVendor[];
}) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const activeLetters = useMemo(() => new Set(vendors.map((v) => firstKey(v.name))), [vendors]);

  // One-time, on mount only: a hash present on load (from a back link) jumps to its letter group.
  // Never re-runs on query changes — while searching, the lettered run isn't even rendered, and a
  // reader who starts typing has already left the "just arrived" moment this restores.
  //
  // Deferred one frame: the App Router runs its OWN scroll-restoration pass on navigation, which
  // resets scroll to 0 when it doesn't recognize the hash target at commit time — running in the
  // same tick raced it and consistently lost (confirmed: an un-deferred scrollIntoView() here left
  // window.scrollY at 0 in the browser). One rAF puts this after that pass.
  //
  // `behavior: "instant"` is NOT optional — globals.css sets `html { scroll-behavior: smooth }`
  // site-wide, so a bare scrollIntoView() (no explicit behavior) starts an ANIMATED scroll, and that
  // animation was getting interrupted before it finished (confirmed: it consistently left scrollY a
  // few px from 0, nowhere near the target). Passing "instant" makes it a single-frame jump that
  // can't be interrupted mid-flight — confirmed this actually lands on the target on a cold load.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const raf = requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "instant" });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const filtered = useMemo(() => {
    if (!q) return null;
    const match = (v: CouponsHubVendor) => v.name.toLowerCase().includes(q);
    return [...picks, ...vendors].filter(match).sort((a, b) => a.name.localeCompare(b.name));
  }, [q, picks, vendors]);

  return (
    <div>
      {/* Own row, full width — was squeezed beside the A–Z bar (sm:flex-row), which left it narrow
          and easy to lose. Sizing matches SearchOverlay (py-4, text-base): the site's own precedent
          for "a search box you can actually read what you typed in," not an invented size. */}
      <div className="relative mb-4">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-slate-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search vendors"
          aria-label="Search vendors"
          className="w-full pl-12 pr-4 py-4 rounded-lg border border-[#D9DEE4] dark:border-slate-600 bg-white dark:bg-[#0f172a] text-base text-[#16181B] dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3A759F]/40"
        />
      </div>
      <div className="mb-6 flex flex-wrap gap-0.5" aria-label="Jump to letter">
        {LETTERS.map((l) =>
          !q && activeLetters.has(l) ? (
            <a
              key={l}
              href={`#letter-${l}`}
              className="w-6 h-6 flex items-center justify-center text-[11px] font-semibold uppercase rounded text-[#3A759F] hover:bg-[#3A759F]/10 transition-colors"
            >
              {l}
            </a>
          ) : (
            <span
              key={l}
              aria-hidden="true"
              className="w-6 h-6 flex items-center justify-center text-[11px] font-semibold uppercase rounded text-gray-300 dark:text-slate-700"
            >
              {l}
            </span>
          )
        )}
      </div>

      {filtered ? (
        <div className="space-y-4 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500">
            {filtered.length} {filtered.length === 1 ? "result" : "results"}
          </p>
          {filtered.map((v) => (
            <CouponsHubCard key={v.slug} v={v} />
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-gray-500 dark:text-slate-400 py-6 text-center">
              No vendors match &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>
      ) : (
        <>
          {picks.length > 0 && (
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3 pb-1.5 border-b border-gray-100 dark:border-slate-700">
                Professor&rsquo;s Picks
              </p>
              <div className="space-y-4">
                {picks.map((v) => (
                  <CouponsHubCard key={v.slug} v={v} />
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4 mb-10">
            {vendors.map((v, i) => {
              const key = firstKey(v.name);
              const isFirstOfLetter = i === 0 || firstKey(vendors[i - 1].name) !== key;
              return (
                <div key={v.slug}>
                  {isFirstOfLetter && (
                    <div id={`letter-${key}`} className="pt-2 pb-2 scroll-mt-24">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-300 dark:text-slate-600">
                        {key}
                      </span>
                    </div>
                  )}
                  <CouponsHubCard v={v} anchorKey={key} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
