import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { activeDeals, DEFAULT_DEAL_ASPECT_RATIO, type Deal } from "@/data/deals";
import { vendors, type Vendor } from "@/data/vendors";
import { VendorShopButton } from "@/components/VendorShopButton";

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
    <div className="section max-w-3xl">
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
        <div className="space-y-10">
          {entries.map(({ deal, vendor }, i) => (
            <article key={deal.vendorSlug} className="border border-[#D9DEE4] dark:border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#16181B] dark:text-slate-100 mb-2">{vendor.name}</h2>
              <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed mb-4">{deal.headline}</p>

              {/* fill + a fixed-aspect wrapper reserves the box before the image loads (no layout
                  shift) without needing next/image's width/height props, which aren't in the Deal
                  data shape. The ratio itself is set INLINE, not via a Tailwind aspect-[] class —
                  deal.aspectRatio is a runtime data value, and Tailwind's JIT scanner only generates
                  CSS for class strings it finds literally in source, so a template-interpolated
                  class name here would silently produce no rule at all. object-contain means a
                  creative whose real ratio doesn't match still letterboxes instead of stretching. */}
              <div
                className="relative w-full bg-[#F4F6F8] dark:bg-slate-800/40 rounded-lg overflow-hidden mb-4"
                style={{ aspectRatio: deal.aspectRatio ?? DEFAULT_DEAL_ASPECT_RATIO }}
              >
                <Image
                  src={deal.image}
                  alt={deal.imageAlt}
                  fill
                  className="object-contain"
                  loading={i === 0 ? undefined : "lazy"}
                  priority={i === 0}
                  sizes="(min-width: 768px) 672px, 100vw"
                />
              </div>

              <p className="text-sm text-gray-600 dark:text-slate-300 mb-1">
                PP code <strong className="text-[#16181B] dark:text-slate-100">{vendor.code}</strong> — {vendor.discount}
              </p>
              {deal.terms && <p className="text-xs text-gray-400 dark:text-slate-500 mb-1">{deal.terms}</p>}
              {deal.endsAt && (
                <p className="text-xs text-gray-400 dark:text-slate-500 mb-4">
                  Ends {new Date(deal.endsAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              )}

              <div className="mt-4 max-w-xs">
                <VendorShopButton slug={deal.vendorSlug} from="deals" />
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
