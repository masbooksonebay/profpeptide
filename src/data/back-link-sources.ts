// SINGLE SOURCE OF TRUTH for the "where did the reader come from" back link on /coupons/<slug>.
//
// THE DEFECT THIS FIXES: all 57 coupon pages hardcoded `<BackLink href="/coupons">Back to Discount
// Codes</BackLink>`. A reader arriving from /vendors, a peptide profile, or a price grid clicked
// "back" and was sent to /coupons — a page they had never been on. The label and the target were
// both wrong for every inbound path except the hub.
//
// WHY A URL PARAM AND NOT document.referrer: the App Router navigates with pushState, and
// `document.referrer` does NOT update on a client-side soft navigation. Every inbound path below is
// a <Link> soft nav, so the referrer would read "google.com" (whatever loaded the document) in
// exactly the cases we need to distinguish. It is wrong where it matters and right only where
// there is nothing to fix.
//
// The `?from=` vocabulary deliberately REUSES the /go/ surface names (lib/go-count.ts GO_SURFACES:
// coupon-hub-card, vendors-card, profile-block, price-grid, featured-vendors) so one surface has
// one name across click attribution and back-navigation. Two entries are new because they have no
// /go/ counterpart: `also-stocking` and `vendor-testing`.
//
// LABELS FOR PER-PAGE FAMILIES ARE FAMILY-LEVEL ("Back to Peptide Profile"), not the compound name
// ("Back to BPC-157"). Resolving the name would mean importing peptideCategories into this module,
// and because BackLink reaches every one of its 152 call sites through the same module graph, that
// map would land in the client bundle of all 152 pages to label a back link. The family label is
// always correct and costs nothing. Upgrading is a one-line change to labelOf if that trade ever
// looks worth paying.

/** A source whose return target is a single fixed page. */
type FixedSource = { kind: "fixed"; href: string; label: string };
/** A source whose return target is per-page: the slug rides in the param as "<surface>:<slug>". */
type SlugSource = { kind: "slug"; prefix: string; label: string };
/**
 * A source whose PAGE is fixed but whose SCROLL POSITION on that page is per-card: the letter-group
 * id rides in the param the same way a SlugSource's slug does ("<surface>:<letter>"), but resolves
 * to a URL FRAGMENT (`${href}#letter-<x>`) instead of a path segment. Added for the /coupons hub's
 * A–Z redesign (2026-09) — coupon-hub-card was a FixedSource before, so a reader returning from a
 * coupon page always landed at the top of the 57-card list, regardless of which letter they left
 * from.
 */
type AnchorSource = { kind: "anchor"; href: string; label: string };

export type BackLinkSource = FixedSource | SlugSource | AnchorSource;

export const BACK_LINK_SOURCES: Record<string, BackLinkSource> = {
  // ── Fixed-target surfaces ────────────────────────────────────────────────────────────────────
  // coupon-hub-card carries the vendor's letter-group id as an anchor fragment (see AnchorSource
  // above), not a fixed href. Professor's Picks cards (outside the alphabetical run) pass no slug,
  // which resolves to the plain /coupons href below — correct, since there's no letter group to
  // return to.
  "coupon-hub-card": { kind: "anchor", href: "/coupons", label: "Back to Discount Codes" },
  // Upgraded to an AnchorSource 2026-09 alongside /vendors' own A–Z redesign — same reasoning as
  // coupon-hub-card above: without a letter-group anchor, a reader returning from a vendor's
  // coupon page always landed at the top of the 57-card list, not the letter they left from.
  "vendors-card": { kind: "anchor", href: "/vendors", label: "Back to Verified Vendors" },
  "featured-vendors": { kind: "fixed", href: "/best-peptide-vendors", label: "Back to Best Peptide Vendors" },
  "vendor-testing": { kind: "fixed", href: "/vendor-testing-index", label: "Back to Vendor Testing Index" },
  "ps-alternatives": { kind: "fixed", href: "/peptide-sciences-alternatives", label: "Back to Peptide Sciences Alternatives" },
  // ── Per-page surfaces — the slug rides along, e.g. "profile-block:bpc-157" ───────────────────
  // profile-block and also-stocking share a target family but keep distinct names so the surfaces
  // stay separable, the same reason /go/ names them apart.
  "profile-block": { kind: "slug", prefix: "/peptides", label: "Back to Peptide Profile" },
  "also-stocking": { kind: "slug", prefix: "/peptides", label: "Back to Peptide Profile" },
  "price-grid": { kind: "slug", prefix: "/prices", label: "Back to Price Comparison" },
};

/** The prerendered default — what every coupon page ships in its static HTML. */
export const BACK_LINK_DEFAULT = { href: "/coupons", label: "Back to Discount Codes" } as const;

// A slug we will paste into an href must be a slug and nothing else. Anything outside this shape —
// a path, a protocol, an encoded traversal, anyone's hand-edited experiment — fails the test and
// falls back, so a crafted ?from= can never steer the href off-site or inject markup.
const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,63}$/;

// An anchor id is a single letter-group key — one lowercase letter or digit (see
// CouponsBrowser.tsx's firstKey(), which buckets a vendor by its name's first character).
// Anything else (a path, a longer string, punctuation) is malformed input and falls back to the
// anchor-less href, never pasted into the fragment.
const ANCHOR_RE = /^[a-z0-9]$/;

/**
 * Resolve a raw `?from=` value to a back-link target.
 *
 * TOTAL BY CONSTRUCTION — every failure returns BACK_LINK_DEFAULT, mirroring how
 * go-count.ts normalizeFrom() collapses an unrecognised surface to "unknown". Unknown surface,
 * missing slug, malformed slug, a surface given a slug it does not take, null, empty: all default.
 * There is no input that yields a broken label or a broken href.
 */
export function resolveBackLink(raw: string | null | undefined): { href: string; label: string } {
  if (!raw) return BACK_LINK_DEFAULT;
  const sep = raw.indexOf(":");
  const name = sep === -1 ? raw : raw.slice(0, sep);
  const slug = sep === -1 ? "" : raw.slice(sep + 1);
  const src = Object.prototype.hasOwnProperty.call(BACK_LINK_SOURCES, name)
    ? BACK_LINK_SOURCES[name]
    : undefined;
  if (!src) return BACK_LINK_DEFAULT;
  if (src.kind === "fixed") {
    // A fixed surface handed a slug is malformed input, not a new destination.
    return slug ? BACK_LINK_DEFAULT : { href: src.href, label: src.label };
  }
  if (src.kind === "anchor") {
    // No slug (Professor's Picks cards) resolves to the plain href — there's no letter group to
    // return to. A malformed anchor key falls back the same way, never a broken/empty fragment.
    if (!slug || !ANCHOR_RE.test(slug)) return { href: src.href, label: src.label };
    return { href: `${src.href}#letter-${slug}`, label: src.label };
  }
  if (!SLUG_RE.test(slug)) return BACK_LINK_DEFAULT;
  return { href: `${src.prefix}/${slug}`, label: src.label };
}

/** Build the `?from=` value a linking surface appends. Keeps the "<surface>:<slug>" shape in one place. */
export function backLinkParam(surface: string, slug?: string): string {
  return slug ? `${surface}:${slug}` : surface;
}
