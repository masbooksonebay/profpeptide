import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { vendors } from "@/data/vendors";
import { CODES_VERIFIED_DATE, isCodeVerified } from "@/data/codes-verified";
import { couponDescription } from "@/data/coupon-copy";
import { REVEAL_GATE_VENDORS } from "@/data/reveal-gate-vendors";
import { VENDORS_VERIFIED_ISO } from "@/data/vendors-verified.generated";

const SITE_URL = "https://profpeptide.com";

/** Discount percent parsed from a vendor's `discount` string ("20% off" → 20). */
function discountPct(slug: string): number {
  const m = vendors[slug]?.discount.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

/**
 * priceValidUntil = one year past the last verification. Because every monthly
 * check:vendors run pushes VENDORS_VERIFIED_ISO forward, the Offer's validity is
 * always in the future — it can never silently expire the way a hardcoded date
 * does. Derived from the stamp, never typed by hand.
 */
function priceValidUntilISO(): string {
  const [y, m, d] = VENDORS_VERIFIED_ISO.split("-");
  return `${Number(y) + 1}-${m}-${d}`;
}

/**
 * The affiliate Offer JSON-LD for a coupon page. Built entirely from vendors.ts so it
 * can't drift from what the page shows, with validFrom / priceValidUntil / dateModified
 * driven by the machine verification stamp (scripts/check-vendors.mjs) rather than
 * hardcoded dates that go stale. One Offer per coupon page.
 */
export function couponOffer(slug: string): Record<string, unknown> {
  const v = vendors[slug];
  const pct = discountPct(slug);
  // Gated vendors: the code must not appear in the JSON-LD Offer (a crawlable surface).
  const gated = REVEAL_GATE_VENDORS.has(slug);
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: `${v.name} Discount Code - Save ${pct}%`,
    description: gated ? `Save ${pct}% at ${v.name}` : `Use code ${v.code} for ${pct}% off at ${v.name}`,
    url: `${SITE_URL}/coupons/${slug}`,
    validFrom: VENDORS_VERIFIED_ISO,
    priceValidUntil: priceValidUntilISO(),
    dateModified: VENDORS_VERIFIED_ISO,
    seller: { "@type": "Organization", name: v.name },
  };
}

/**
 * Coupon-page metadata. Both the <title> and the description are COMPOSED here from
 * vendors.ts — layouts pass only a slug (a `title` or `description` is intentionally NOT
 * accepted), so there is no per-page drift and no hardcoded string to go stale.
 *
 * Title:  "{Vendor} Discount Code: {CODE} — Save {X}%" — the code-visible format proven by
 *   the two pages Google accepts (amino-club, glacier-aminos). No "| Prof. Peptide" (the
 *   domain already shows above the title) and no date (can't fit alongside the code at the
 *   ~60-char SERP cutoff; it lives in the description). Code beats freshness when one fits.
 * Description: the Style-A shape — "Use code {CODE} at {Vendor} to save {X}% sitewide —
 *   verified and working for {month}. {differentiator}" — code first (char 9), month DERIVED
 *   from the machine stamp (CODES_VERIFIED_DATE ← VENDORS_VERIFIED_ISO), only the
 *   differentiator varies. Composition lives in @/data/coupon-copy (import-free) so the
 *   build-time budget guard can execute it and prove every description fits under "September".
 */
export function buildCouponMetadata({
  slug,
  ...rest
}: { slug: string } & Omit<Parameters<typeof buildPageMetadata>[0], "path" | "title" | "description">): Metadata {
  const v = vendors[slug];
  const pct = discountPct(slug);
  // Gated vendors: strip the code from the <title> and the meta description (crawlable surfaces).
  const gated = REVEAL_GATE_VENDORS.has(slug);
  const title = gated
    ? `${v.name} Discount Code — Save ${pct}%`
    : `${v.name} Discount Code: ${v.code} — Save ${pct}%`;
  // 🔴 GATED ON isCodeVerified — the description must follow the pill. A vendor absent from the
  // last verified set renders no "✓ Verified" pill, and before this it still shipped a meta
  // description reading "…verified {month}." Orbitrex was live in exactly that state: no pill on
  // the page, a verification claim in the SERP snippet. The SERP is the surface where the claim
  // does the most work and gets the least scrutiny, so it is the one that most needs the gate.
  const description = couponDescription(
    slug, v.name, v.code, pct, isCodeVerified(slug) ? CODES_VERIFIED_DATE : null, gated,
  );
  return buildPageMetadata({ path: `/coupons/${slug}`, title, description, ...rest });
}
