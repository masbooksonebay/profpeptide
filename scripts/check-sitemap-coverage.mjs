// scripts/check-sitemap-coverage.mjs — the sitemap COVERAGE guard.
//
// The exact inverse of check:sitemap-noindex. That guard catches a noindex page that leaked
// INTO the sitemap; this one catches an indexable page that fell OUT of it. Coupon pages briefly
// went missing this way (a vendor route momentarily absent from the build manifest), and the two
// content hubs /peptides + /supplements were silently absent for weeks because searchParams made
// them dynamic. A page Google can't discover from the sitemap is an output-correctness bug, so
// this FAILS the build (exit 1), it does not warn.
//
// MECHANISM — RESOLVED reality, not a re-derived count:
//   • Every prerendered page in .next/server/app is a route that actually exists (same source
//     check:og-metadata reads). A page is INDEXABLE unless its rendered <head> carries
//     robots:noindex, or it is a known 3xx redirect (retired coupon pages 308 -> /coupons; the
//     legacy /research family 301 -> /peptides). Those are excluded, exactly as next-sitemap
//     excludes them.
//   • Every indexable route MUST appear in the generated public/sitemap-*.xml (same file
//     check:sitemap-noindex consumes).
// Reading prerendered HTML (not a hand-kept list) is the point: a NEW page of any type is covered
// automatically the moment it prerenders, so this can't rot the way a static allowlist would.
//
// MUST RUN AFTER `next build` (needs .next/server/app) AND `next-sitemap` (needs the sitemap) —
// it sits at the end of the build chain alongside check:sitemap-noindex and check:og-metadata.
//
// Run:  npm run check:sitemap-coverage
// Exit: 0 = every indexable route is in the sitemap; 1 = at least one is missing (or inputs absent).

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const NEXT_APP = join(root, ".next", "server", "app");
const PUBLIC = join(root, "public");
const SITE = "https://profpeptide.com";

// ── 1. the generated sitemap's <loc> set ──────────────────────────────────────
const smFiles = existsSync(PUBLIC) ? readdirSync(PUBLIC).filter((f) => /^sitemap-\d+\.xml$/.test(f)) : [];
if (!existsSync(NEXT_APP) || !smFiles.length) {
  console.error(
    "check:sitemap-coverage FAILED — missing inputs (.next/server/app or public/sitemap-*.xml).\n" +
      "  It runs after `next build` + `next-sitemap`; a normal build satisfies it.",
  );
  process.exit(1);
}
const norm = (u) => u.replace(/\/+$/, "") || "/";
const sitemapPaths = new Set();
for (const f of smFiles) {
  for (const m of readFileSync(join(PUBLIC, f), "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)) {
    let u = m[1].trim();
    if (u.startsWith(SITE)) u = u.slice(SITE.length);
    sitemapPaths.add(norm(u));
  }
}

// ── 2. known 3xx redirect routes (their page.tsx prerenders HTML but never serves 200) ─────────
// Retired coupon pages 308 -> /coupons (kept on disk, redirected in next.config.js); derived from
// the SAME registry the sitemap uses so the two can't drift. The /research family 301 -> /peptides.
const retired = new Set(
  (JSON.parse(readFileSync(join(root, "src/data/vendors.slugs.json"), "utf8")))
    .filter((v) => v.retired)
    .map((v) => `/coupons/${v.slug}`),
);
const isRedirect = (route) => retired.has(route) || route === "/research" || route.startsWith("/research/");

// ── 3. indexable prerendered routes that MUST be in the sitemap ────────────────
const missing = [];
let checked = 0;
(function walk(dir) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, name.name);
    if (name.isDirectory()) walk(full);
    else if (name.name.endsWith(".html") && !name.name.startsWith("_")) {
      const rel = relative(NEXT_APP, full).replace(/\.html$/, "").split(sep).join("/");
      const route = rel === "index" ? "/" : `/${rel}`;
      const html = readFileSync(full, "utf8");
      const robots = (html.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/) || [])[1] || "";
      if (/noindex/i.test(robots)) continue; // correctly excluded
      if (isRedirect(route)) continue; // 3xx, never a 200 to index
      checked++;
      if (!sitemapPaths.has(norm(route))) missing.push(route);
    }
  }
})(NEXT_APP);

// ── 4. report ─────────────────────────────────────────────────────────────────
if (missing.length) {
  console.error(`check:sitemap-coverage FAILED — ${missing.length} indexable route(s) absent from the sitemap:\n`);
  for (const r of missing.sort()) console.error(`  ✗ ${r}`);
  console.error(
    "\n  Each of these prerenders a 200, indexable page but has no <loc> in public/sitemap-*.xml.\n" +
      "  If it should be indexed, ensure next-sitemap emits it (manifest discovery or additionalPaths in\n" +
      "  next-sitemap.config.js). If it should NOT be indexed, give it robots:{index:false} (and add it to\n" +
      "  check:sitemap-noindex's DROP set) or redirect it.",
  );
  process.exit(1);
}

console.log(
  `check:sitemap-coverage OK — all ${checked} indexable prerendered route(s) are present in the sitemap ` +
    `(${sitemapPaths.size} sitemap URLs).`,
);
