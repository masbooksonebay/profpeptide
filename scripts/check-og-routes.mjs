// scripts/check-og-routes.mjs — the missing-OG-route guard.
//
// Every per-vendor coupon page (src/app/coupons/<slug>/page.tsx) must ship its OWN
// file-based OpenGraph + Twitter image routes (opengraph-image.tsx + twitter-image.tsx,
// both calling generateCouponOg). In Next.js App Router a segment WITHOUT those files
// silently falls through to the site-wide default og:image (seo.ts OG_IMAGE = og-image.png)
// — a generic Prof. Peptide card instead of the vendor's own. That is not an error Next
// reports; the page builds and ships, and the miss is only ever caught by someone noticing
// a wrong card on a share. crush-research, modern-aminos and treasure-coast-peptides all
// shipped route-less (created in e64c095, never given routes) until they were retrofitted
// in 0db7913 — three pages, found by eye, never counted. This makes the class loud.
//
// Pure LOCAL analysis — a directory listing. No network. Safe on every build.
//
// FAILS (exit 1) when a coupon page directory is missing opengraph-image.tsx and/or
// twitter-image.tsx. There is no allowlist: the routes are one-line wrappers around
// generateCouponOg(slug) and every coupon page legitimately needs both. The coupons INDEX
// (src/app/coupons/page.tsx) is not a vendor page and is not checked.
//
// Run:  npm run check:og-routes
// Exit: 0 = every coupon page has both routes; 1 = at least one is missing a route.

import { readdirSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const couponsDir = join(root, "src/app/coupons");

const REQUIRED = ["opengraph-image.tsx", "twitter-image.tsx"];

const slugs = readdirSync(couponsDir).filter((name) => {
  const dir = join(couponsDir, name);
  return statSync(dir).isDirectory() && existsSync(join(dir, "page.tsx"));
});

const offenders = [];
for (const slug of slugs.sort()) {
  const missing = REQUIRED.filter((f) => !existsSync(join(couponsDir, slug, f)));
  if (missing.length) offenders.push({ slug, missing });
}

if (offenders.length) {
  console.error(`\ncheck:og-routes FAILED — ${offenders.length} coupon page(s) missing an OG/Twitter route.`);
  for (const { slug, missing } of offenders) {
    console.error(`    • ${slug} — missing ${missing.join(" + ")}`);
  }
  console.error(
    `  Each coupon page needs opengraph-image.tsx AND twitter-image.tsx (one-line wrappers around\n` +
    `  generateCouponOg("<slug>")). Without them the page falls back to the site-wide og-image.png\n` +
    `  default instead of its own per-vendor card. Copy the routes from any existing coupon page.`,
  );
  process.exit(1);
}

console.log(`check:og-routes OK — all ${slugs.length} coupon pages ship their own OpenGraph + Twitter card routes.`);
