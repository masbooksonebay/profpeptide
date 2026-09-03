import BackLinkAnchor from "@/components/BackLinkAnchor";
import BackLinkFrom from "@/components/BackLinkFrom";
import { BACK_LINK_DEFAULT } from "@/data/back-link-sources";

// The "return to the listing" link at the head of a detail page.
//
// WHY THIS EXISTS: there was no owning component, so 143 pages each inlined their own
// `<Link ...>&larr; Back to X</Link>`. Identical className on all 143 — but nothing enforced that,
// and the labels had already drifted (/coupons was reached by both "Back to Discount Codes" ×54 and
// "Back to Vendor Coupons" ×1). One component makes the drift impossible rather than merely fixed.
//
// The markup itself lives in BackLinkAnchor so the static and source-aware paths render the same
// anchor. This file owns only the DECISION of what to link to.
//
// ── SOURCE-AWARE BACK NAVIGATION ────────────────────────────────────────────────────────────────
// A back link whose default target is the coupon hub is re-pointable: the reader may have arrived
// at /coupons/<slug> from /vendors, a peptide profile, a price grid or the featured-vendor list,
// and sending them to /coupons is sending them somewhere they have never been. Such a link renders
// through BackLinkFrom, which upgrades the target from ?from=. Every other href — /supplements,
// /compare, /news, /prices — is untouched: same server component, same markup, no client code.
//
// 🔴 WHY THIS IS DERIVED FROM href AND NOT AN OPT-IN PROP ON EACH PAGE. The obvious design is
// `<BackLink href="/coupons" resolveSource>` on each of the 57 coupon pages. That was built, and it
// FAILS check:content-dates — that guard hashes each coupon page's SOURCE (gen-content-dates.mjs
// contentHash = page.tsx + registry entry) to drive the sitemap's per-page lastmod, so adding one
// prop to 57 files re-dates all 57. It would collapse the coupon lastmod spread to a single date,
// which is the exact regression the glyph sweep caused once before and which gen-content-dates.mjs
// was written to prevent ("folding them in here would re-date all ~45 pages … recreating the
// flatness that got the last attempt reverted"). Deriving the behaviour here changes no page
// source, so every content date stays exactly as it was and the guard passes untouched.
//
// The one non-coupon page that links back to the hub — /peptide-sciences-alternatives — also routes
// through BackLinkFrom. Nothing links INTO it with a ?from=, so it always renders the default; the
// behaviour is identical and the cost is one small client component.
export default function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  if (href === BACK_LINK_DEFAULT.href) {
    return <BackLinkFrom href={href} label={String(children)} />;
  }
  return <BackLinkAnchor href={href}>{children}</BackLinkAnchor>;
}
