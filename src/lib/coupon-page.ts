import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { vendors } from "@/data/vendors";
import { VENDORS_VERIFIED_ISO, VENDORS_VERIFIED_DATE } from "@/data/vendors-verified.generated";

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
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: `${v.name} Discount Code - Save ${pct}%`,
    description: `Use code ${v.code} for ${pct}% off at ${v.name}`,
    url: `${SITE_URL}/coupons/${slug}`,
    validFrom: VENDORS_VERIFIED_ISO,
    priceValidUntil: priceValidUntilISO(),
    dateModified: VENDORS_VERIFIED_ISO,
    seller: { "@type": "Organization", name: v.name },
  };
}

/**
 * Coupon-page metadata — buildPageMetadata plus the machine-written "Verified <date>."
 * freshness stamp on the description (a documented CTR lever on coupon SERPs). The stamp
 * is PREPENDED, not appended: coupon descriptions already run past Google's ~160-char
 * truncation, so a trailing stamp would be cut off and never render — leading with it
 * keeps it visible. Date comes from check:vendors, never hardcoded.
 */
export function buildCouponMetadata({
  slug,
  title,
  description,
  ...rest
}: { slug: string } & Omit<Parameters<typeof buildPageMetadata>[0], "path">): Metadata {
  return buildPageMetadata({
    path: `/coupons/${slug}`,
    title,
    description: `Verified ${VENDORS_VERIFIED_DATE}. ${description}`,
    ...rest,
  });
}
