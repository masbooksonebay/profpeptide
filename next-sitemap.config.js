/** @type {import('next-sitemap').IConfig} */

const fs = require("fs");
const path = require("path");

// next-sitemap discovers URLs from the Next.js build manifest (every prerendered
// route). That correctly picks up all real content pages — /peptides/*,
// /supplements/*, /news/*, /compare/*, and every top-level page — automatically
// as new page folders are added, with no manual list to maintain. But the
// manifest ALSO contains per-route image endpoints and noindex/redirect routes
// that must never be in a sitemap. We strip those here.
//
// COUPON PAGES ARE THE EXCEPTION: their inclusion is driven by vendors.ts, NOT
// by the build manifest. Manifest-based discovery is implicit — if a vendor's
// route is momentarily absent from the manifest at generation time, it silently
// drops from the sitemap (this is what briefly happened to ascension-peptides).
// To make it deterministic, every /coupons/<slug> detail page is stripped from
// manifest discovery below (transform returns null) and re-added explicitly via
// additionalPaths from the vendor registry: an active (non-retired) vendor that
// has a real page dir is ALWAYS emitted; a retired one or a registry entry with
// no deployed page is NEVER emitted. vendors.ts is the single source of truth.

// { slug, retired }[] generated from src/data/vendors.ts by
// scripts/gen-vendor-slugs.mjs (runs in `npm run build` before next-sitemap).
const vendorRegistry = require("./src/data/vendors.slugs.json");

const COUPONS_DIR = path.join(__dirname, "src", "app", "coupons");
const hasCouponPage = (slug) =>
  fs.existsSync(path.join(COUPONS_DIR, slug, "page.tsx"));

// Active + deployed vendors -> the coupon URLs the sitemap explicitly emits.
// Presence check guards against a registry entry whose page isn't deployed
// (would otherwise emit a sitemap URL pointing at a 404).
const activeCouponSlugs = vendorRegistry
  .filter((v) => !v.retired && hasCouponPage(v.slug))
  .map((v) => v.slug);

// Retired vendors -> excluded (their page.tsx is kept on disk and 308-redirects
// to /coupons via next.config.js, so it stays in the manifest). Derived from the
// same registry so flipping `retired: true` de-sitemaps a vendor automatically.
const retiredCouponPaths = vendorRegistry
  .filter((v) => v.retired)
  .map((v) => `/coupons/${v.slug}`);

// Matches a coupon DETAIL page (/coupons/<slug>) but not the /coupons hub.
const COUPON_DETAIL = /^\/coupons\/[a-z0-9-]+$/;

// Per-route utility endpoints + icon routes: dropped at any depth.
const DROP_PATTERNS = [
  /\/opengraph-image$/,
  /\/twitter-image$/,
  /^\/(icon|apple-icon)(\.png)?$/,
];

// Exact paths to drop: noindex pages (must match the page's robots metadata).
const DROP_EXACT = new Set([
  "/contact", // src/app/contact -> metadata.robots { index: false }
  "/prototype/profile", // design sandbox -> metadata.robots { index: false }
  "/prototype/logo", // logo comparison (dev) -> metadata.robots { index: false }
  "/prices", // gated: placeholder price data -> metadata.robots { index: false }
]);

module.exports = {
  siteUrl: "https://profpeptide.com",
  generateRobotsTxt: true,
  trailingSlash: false,
  exclude: [
    // Legacy /research and /research/* -> 301 redirect to /peptides/* (next.config.js).
    // Canonical lives at /peptides/<slug>, which IS included.
    "/research",
    "/research/*",
    // Per-route OG/Twitter image endpoints (belt-and-suspenders with transform()).
    "/*/opengraph-image",
    "/*/twitter-image",
    // Retired vendors -> 308 redirect to /coupons (next.config.js). Derived from
    // vendors.ts `retired: true` so this can't drift from the registry.
    ...retiredCouponPaths,
    // Design sandbox (noindex, dev-only preview) — never in the sitemap.
    "/prototype",
    "/prototype/*",
    // Price comparison — gated on placeholder data (noindex). /prices and every
    // /prices/<compound> page. Remove when real vendor prices land.
    "/prices",
    "/prices/*",
  ],
  transform: async (config, path) => {
    if (DROP_EXACT.has(path)) return null;
    if (DROP_PATTERNS.some((re) => re.test(path))) return null;
    // Coupon detail pages come from the vendor registry (additionalPaths), not
    // the manifest — drop the manifest copy so inclusion is deterministic and
    // never duplicated.
    if (COUPON_DETAIL.test(path)) return null;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  additionalPaths: async (config) =>
    activeCouponSlugs.map((slug) => ({
      loc: `/coupons/${slug}`,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    })),
};
