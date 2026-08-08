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

const REQUIRED = ["opengraph-image.tsx", "twitter-image.tsx"];

// Every per-item page that wants its OWN card needs both route files. Coupon pages
// (generateCouponOg) and news ARTICLE pages (generateNewsOg) both qualify — each is a
// slug directory with a page.tsx. The /news hub's page.tsx sits directly in src/app/news
// (not a subdirectory), so it isn't scanned here; it ships its own routes separately.
const BASES = [
  { label: "coupon page", dir: join(root, "src/app/coupons"), gen: "generateCouponOg" },
  { label: "news article", dir: join(root, "src/app/news"), gen: "generateNewsOg" },
];

const offenders = [];
let total = 0;
for (const { label, dir, gen } of BASES) {
  const slugs = readdirSync(dir).filter((name) => {
    const d = join(dir, name);
    return statSync(d).isDirectory() && existsSync(join(d, "page.tsx"));
  });
  for (const slug of slugs.sort()) {
    total++;
    const missing = REQUIRED.filter((f) => !existsSync(join(dir, slug, f)));
    if (missing.length) offenders.push({ slug: `${label} ${slug}`, missing, gen });
  }
}

if (offenders.length) {
  console.error(`\ncheck:og-routes FAILED — ${offenders.length} page(s) missing an OG/Twitter route.`);
  for (const { slug, missing, gen } of offenders) {
    console.error(`    • ${slug} — missing ${missing.join(" + ")} (wrap ${gen}("<slug>"))`);
  }
  console.error(
    `  Each item page needs opengraph-image.tsx AND twitter-image.tsx (one-line wrappers around\n` +
    `  generateCouponOg / generateNewsOg). Without them the page falls back to the site-wide\n` +
    `  og-image.png default instead of its own card. Copy the routes from any sibling page.`,
  );
  process.exit(1);
}

console.log(`check:og-routes OK — all ${total} coupon + news-article pages ship their own OpenGraph + Twitter card routes.`);
