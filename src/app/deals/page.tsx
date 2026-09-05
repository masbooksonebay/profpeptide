import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { activeDeals, DEFAULT_DEAL_ASPECT_RATIO, type Deal } from "@/data/deals";
import { vendors, type Vendor } from "@/data/vendors";
import { VendorCodeChip } from "@/components/VendorCodeChip";

// AUTO-EXPIRY, without waiting for the next deploy: this page has no dynamic segment, so a plain
// static build would freeze `activeDeals(now)` at BUILD time and keep serving an expired entry
// until someone redeploys. `revalidate = 60` makes it time-based ISR instead — Next re-runs this
// module (and re-evaluates `new Date()` below) in the background at most once every 60s, so a
// promo disappears within 60 seconds of its `endsAt`, not whenever main happens to get pushed next.
//
// COST: up to 60s of staleness after an `endsAt` passes (the visitor who lands in that window still
// sees the expired entry; the NEXT visitor after the background regeneration doesn't). The
// alternative, `export const dynamic = "force-dynamic"`, would remove that window entirely but
// takes this page off the CDN edge cache and computes it on every request — the wrong trade for a
// page whose whole point is surviving a burst of clicks off a viral X post. ISR keeps it edge-cached
// for that traffic and bounds the staleness to well under a minute.
export const revalidate = 60;

// Height, not width, drives the creative's size (2026-09 resize). The PREVIOUS version was
// width-driven (w-full + aspect-ratio): fine in a single, full-width column, but once the grid
// below went to up to 3 columns the same technique would just make three narrower, still-as-tall
// cards — the actual complaint ("fills more than a screen") is a height problem, not a width one.
// Fixing height directly and deriving width from it (aspectRatio + height, width left to resolve)
// means the box's own shape already matches the image's real proportions, so object-contain has
// nothing to compensate for — a hard height ceiling AND zero letterboxing at the same time, not a
// trade-off between them. See the per-card comment below for the actual pixel budget and how it
// was checked.
const CREATIVE_HEIGHT_PX = 260;

export default function DealsPage() {
  const now = new Date();
  // Built as a plain loop (not .map/.filter) so TS narrows `vendor` to non-undefined without a
  // separate type-predicate — check-deals.mjs already fails the build on an unresolved slug; this
  // guard is belt-and-suspenders against a vendor retired after that check ran in the same build.
  const entries: { deal: Deal; vendor: Vendor }[] = [];
  for (const deal of activeDeals(now)) {
    const vendor = vendors[deal.vendorSlug];
    if (vendor && !vendor.retired) entries.push({ deal, vendor });
  }

  return (
    <div className="section">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Deals" }])} />
      <span className="tag mb-3 inline-block">Live Promotions</span>
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-3">Vendor Deals</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
        Promotional creatives straight from Prof. Peptide-listed vendors — with PP&apos;s own code
        called out wherever it beats what&apos;s printed on the flyer.
      </p>

      {entries.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-slate-400">No active promotions right now. Check back soon.</p>
      ) : (
        // GRID, not a stacked list (2026-09 resize): up to 3 per row on desktop, 2 on tablet, 1 on
        // mobile — same responsive breakpoints as the homepage's own feature grid (src/app/page.tsx),
        // reused rather than invented. A CSS grid's tracks are sized by the TEMPLATE
        // (grid-cols-*), not by how many children exist, so a single entry occupies exactly one
        // column's width and the other tracks sit empty — no extra rule needed to stop it stretching
        // full-width the way it would in a flex row.
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {entries.map(({ deal, vendor }, i) => {
            // Actual rendered width of the height-driven creative box, for next/image's `sizes`
            // hint — computed from the SAME aspectRatio the box itself uses, not guessed, since a
            // wrong constant here would just make Next fetch a mismatched srcset entry.
            const [aw, ah] = (deal.aspectRatio ?? DEFAULT_DEAL_ASPECT_RATIO).split("/").map(Number);
            const creativeWidthPx = Math.round(CREATIVE_HEIGHT_PX * (aw / ah));
            return (
            <article
              key={deal.vendorSlug}
              className="rounded-xl overflow-hidden border border-[#D9DEE4] dark:border-slate-600 shadow-sm hover:shadow-md hover:border-[#3A759F]/40 transition-all duration-200 bg-white dark:bg-[#0f172a] flex flex-col"
            >
              <div className="px-4 py-3 bg-gray-50 dark:bg-[#1e293b] border-b border-gray-100 dark:border-slate-700 flex items-center justify-between gap-2">
                <h2 className="font-bold text-base leading-tight text-[#16181B] dark:text-slate-100 truncate">{vendor.name}</h2>
                <span className="text-xs font-bold text-[#3A759F] bg-[#3A759F]/15 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                  {vendor.discount}
                </span>
              </div>

              <div className="p-4 flex flex-col gap-3">
                {/* Headline above the image (unchanged from the original spec) — the line telling
                    the reader PP's code beats the one printed on the flyer. */}
                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{deal.headline}</p>

                {/* Code button ABOVE the creative, not beside a separate Shop button — clicking the
                    image (below) IS the shop action now, so a second CTA would be redundant.
                    VendorCodeChip, not a bare CopyCode: same component CouponsHubCard uses, so a
                    gated vendor (REVEAL_GATE_VENDORS) gets the reveal-modal trigger here too instead
                    of leaking its code — this page has no gated vendor today, but the card
                    shouldn't need rebuilding the day it does. */}
                <div>
                  <VendorCodeChip slug={deal.vendorSlug} code={vendor.code} from="deals" size="chip-lg" />
                  <p className="text-xs text-gray-400 dark:text-slate-500 mt-1.5">Copy the code, then tap the image to shop.</p>
                </div>

                {/* THE WHOLE IMAGE IS THE LINK — a real <a> (not next/link: this leaves the site),
                    sibling to the code button above, not an ancestor of it, so there is no shared
                    DOM/z-index to get wrong the way an overlay card would: the two controls simply
                    don't occupy the same pixels, so a click can never land on the wrong one.
                    HEIGHT budget: CREATIVE_HEIGHT_PX (260px) + this card's header/text/code chrome
                    measured (in-browser, real render, not estimated) at ~510px total on Nura's
                    entry — comfortably inside a 1280x800/1366x768 laptop viewport's usable height
                    (screen height minus browser chrome minus the site's own sticky header). Fixed
                    height + aspectRatio + width left to resolve means the box's WIDTH is DERIVED
                    from the image's real shape (height x ratio), not the reverse — the box already
                    has the image's proportions, so object-contain has nothing to compensate for:
                    a hard height ceiling with no letterboxing, rather than a trade-off between them. */}
                <a
                  href={`/go/${deal.vendorSlug}?from=deals`}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  aria-label={`Shop ${vendor.name}`}
                  className="relative mx-auto block rounded-lg overflow-hidden bg-[#F4F6F8] dark:bg-slate-800/40"
                  style={{ height: CREATIVE_HEIGHT_PX, aspectRatio: deal.aspectRatio ?? DEFAULT_DEAL_ASPECT_RATIO }}
                >
                  <Image
                    src={deal.image}
                    alt={deal.imageAlt}
                    fill
                    className="object-contain"
                    loading={i === 0 ? undefined : "lazy"}
                    priority={i === 0}
                    sizes={`${creativeWidthPx}px`}
                  />
                </a>

                {(deal.terms || deal.endsAt) && (
                  <p className="text-xs text-gray-400 dark:text-slate-500">
                    {deal.terms}
                    {deal.terms && deal.endsAt ? " · " : ""}
                    {deal.endsAt &&
                      `Ends ${new Date(deal.endsAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
                  </p>
                )}
              </div>
            </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
