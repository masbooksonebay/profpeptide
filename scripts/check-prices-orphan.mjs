// scripts/check-prices-orphan.mjs — no indexable price page ships orphaned.
//
// /prices/[compound] generateStaticParams builds a page for every source it spreads (today:
// priceCompounds() + priceBlends()). check-links proves those URLs RESOLVE, but not that anything
// LINKS to them — an indexable page reachable only via the sitemap is orphaned. This guard makes
// the hub the required entry point: every price SOURCE the route renders must be surfaced on the
// /prices hub. Singles are surfaced by <PricesMaster> (iterates the full category index); blends by
// the hub's priceBlends() section. A NEW source added to the route but not the hub FAILS here.
//
// Run:  npm run check:prices-orphan
// Exit: 0 = every route price-source is surfaced on the hub; 1 = an orphaned source.

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const routeSrc = readFileSync(join(root, "src/app/prices/[compound]/page.tsx"), "utf8");
const hubSrc = readFileSync(join(root, "src/app/prices/page.tsx"), "utf8");

// price sources the route turns into pages (inside generateStaticParams)
const gsp = routeSrc.match(/generateStaticParams\s*\(\)\s*\{([\s\S]*?)\n\}/);
const routeSources = new Set([...(gsp ? gsp[1] : "").matchAll(/\b(price[A-Za-z]+)\s*\(/g)].map((m) => m[1]));

// how each known source is surfaced on the hub (a check the hub actually renders it)
const SURFACED = {
  priceCompounds: () => /<PricesMaster\b/.test(hubSrc),                       // singles → full category index
  priceBlends: () => /priceBlends\s*\(/.test(hubSrc) && /\/prices\/\$\{/.test(hubSrc), // blends → hub section links each
};

const failures = [];
for (const src of routeSources) {
  if (!(src in SURFACED)) {
    failures.push(`route renders pages from ${src}() but this guard doesn't know how the hub surfaces it — add ${src} to SURFACED (and link it on /prices) so it can't ship orphaned`);
  } else if (!SURFACED[src]()) {
    failures.push(`${src}() pages are not surfaced on the /prices hub (orphaned — reachable only via sitemap)`);
  }
}

if (failures.length) {
  console.error("check:prices-orphan FAILED — an indexable price page is orphaned:\n");
  for (const f of failures) console.error(`  ✗ ${f}`);
  console.error("\nFix: link the source on the /prices hub (src/app/prices/page.tsx).");
  process.exit(1);
}

console.log(`check:prices-orphan OK — all ${routeSources.size} price source(s) surfaced on the /prices hub (${[...routeSources].join(", ")}).`);
