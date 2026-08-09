// scripts/check-sitemap-noindex.mjs — the noindex-in-sitemap guard.
//
// A page carrying `robots: { index: false }` must never appear in the sitemap. Listing a
// noindex URL in the sitemap is a mixed signal — the sitemap says "crawl + index," the page
// says "don't index on arrival" — and it wastes crawl budget. /vendors and
// /vendor-testing-index leaked this way (both noindex, both in the sitemap) until Aug 2026,
// because next-sitemap.config.js's DROP_EXACT set was never kept in lockstep with the pages'
// robots metadata. This makes that drift loud instead of silent.
//
// MUST RUN AFTER next-sitemap — it reads the GENERATED public/sitemap-*.xml. It is the last
// link in the `build` chain for exactly that reason.
//
// Robots state is read STATICALLY from source — never by rendering:
//   • Static pages/layouts: a literal `robots: { index: false }` in page.tsx / layout.tsx.
//   • The conditional /prices/[compound] route (robots depends on vendor count) is expanded
//     via src/data/prices.index.json — a slug is noindex iff `indexable === false`. That's
//     the SAME source the sitemap's own price-exclusion uses, so the two can't disagree.
//
// Redirects are NOT noindex and are deliberately out of scope: retired coupon pages 308 to
// /coupons via next.config.js and carry no robots:index:false, so they never enter the
// noindex set and can't double-flag.
//
// Run:  npm run check:sitemap-noindex   (after a build; needs public/sitemap-*.xml)
// Exit: 0 = no noindex page is in the sitemap; 1 = at least one leaked (or sitemap missing).

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const APP = join(root, "src/app");
const PUBLIC = join(root, "public");
const SITE = "https://profpeptide.com";

// --- 1. collect every <loc> path from the generated sitemap(s) -----------------
const smFiles = readdirSync(PUBLIC).filter((f) => /^sitemap-\d+\.xml$/.test(f));
if (!smFiles.length) {
  console.error(
    "check:sitemap-noindex FAILED — no public/sitemap-*.xml found.\n" +
      "  This check runs AFTER next-sitemap in the build chain; run `next-sitemap` first.",
  );
  process.exit(1);
}
const sitemapPaths = new Set();
for (const f of smFiles) {
  const xml = readFileSync(join(PUBLIC, f), "utf8");
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    let u = m[1].trim();
    if (u.startsWith(SITE)) u = u.slice(SITE.length);
    u = u.replace(/\/+$/, "") || "/";
    sitemapPaths.add(u);
  }
}

// --- 2. derive the noindex route set from source (static parse, no render) ------
// A literal robots object with index:false. The prices ternary (`robots: vendorCount >= 3
// ? undefined : { index: false, ... }`) does NOT match this — `robots:` is not immediately
// followed by `{` — so conditional routes fall through to the price-index expansion below.
const STATIC_NOINDEX = /robots\s*:\s*\{[^}]*index\s*:\s*false/;

function routeFromFile(absFile) {
  const relDir = relative(APP, dirname(absFile)).split(sep).join("/");
  const segs = relDir.split("/").filter((s) => s && !/^\(.*\)$/.test(s)); // drop route groups
  return "/" + segs.join("/");
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name === "page.tsx" || name === "layout.tsx") out.push(p);
  }
  return out;
}

const noindexRoutes = new Map(); // route -> human-readable source
const dynamicBlindSpots = []; // dynamic routes with a hardcoded static noindex we can't expand

for (const file of walk(APP)) {
  const rel = relative(root, file).split(sep).join("/");
  const text = readFileSync(file, "utf8");
  if (rel.includes("[")) {
    // Dynamic segment. /prices/[compound] is handled via the price index below. Any OTHER
    // dynamic route that hardcodes a static noindex is a coverage gap — surface it loudly
    // rather than pass silently (it may or may not be de-listed from the sitemap).
    if (STATIC_NOINDEX.test(text) && !rel.includes("prices/[compound]")) dynamicBlindSpots.push(rel);
    continue;
  }
  if (STATIC_NOINDEX.test(text)) {
    const route = routeFromFile(file);
    if (!noindexRoutes.has(route)) noindexRoutes.set(route, rel);
  }
}

// --- 2b. conditional /prices/<slug>: noindex iff indexable === false ------------
const priceIndex = JSON.parse(readFileSync(join(root, "src/data/prices.index.json"), "utf8"));
for (const p of priceIndex) {
  if (!p.indexable) {
    noindexRoutes.set(`/prices/${p.slug}`, "src/app/prices/[compound]/page.tsx (indexable:false in prices.index.json)");
  }
}

// --- 3. any noindex route present in the sitemap is a contradiction --------------
const offenders = [...noindexRoutes.keys()].filter((r) => sitemapPaths.has(r)).sort();

if (dynamicBlindSpots.length) {
  console.warn(
    `check:sitemap-noindex — note: ${dynamicBlindSpots.length} dynamic route(s) hardcode a static ` +
      `noindex and aren't slug-expanded here:\n    ${dynamicBlindSpots.join("\n    ")}\n` +
      `  Add explicit index-based expansion if any of these can emit sitemap URLs.`,
  );
}

if (offenders.length) {
  console.error(`\ncheck:sitemap-noindex FAILED — ${offenders.length} noindex page(s) present in the sitemap:`);
  for (const route of offenders) console.error(`    • ${route}  — noindex via ${noindexRoutes.get(route)}`);
  console.error(
    `\n  A page with robots:{ index: false } must not be in the sitemap (mixed signal + wasted\n` +
      `  crawl budget). Add each path to DROP_EXACT in next-sitemap.config.js (or, for a price\n` +
      `  page, confirm its indexable flag), then rebuild so the sitemap regenerates.`,
  );
  process.exit(1);
}

console.log(
  `check:sitemap-noindex OK — ${sitemapPaths.size} sitemap URLs, ${noindexRoutes.size} noindex routes, 0 overlap.`,
);
