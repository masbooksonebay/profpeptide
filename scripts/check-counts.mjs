// scripts/check-counts.mjs — FAILS the build when a hardcoded count describing SITE CONTENTS
// appears in a site-chrome page. A stale "54 profiles" / "40+ peptides" is an output-correctness
// bug of the same class as an over-budget meta description, so this FAILS (exit 1), it does not warn.
//
// WHY A WHITELIST, NOT A BLANKET SCAN: digits legitimately sit next to content-ish nouns all over
// the site — "90 compounds" (a vendor's catalog), "176+ reviews" (a vendor), "19 peptides" (an FDA
// list), "50 mg/day … supplements" (a dose), "33%" (a vitamin). A general "number near a noun"
// detector would fire on dozens of world-facts and get muted. So this is a POSITIVE whitelist:
//   1. SCOPE — only site-chrome routes whose copy describes OUR data (list below). Per-vendor and
//      per-study world-facts don't live in these files. /best-peptide-vendors is DELIBERATELY
//      excluded: it's a curated ranking dense with vendor facts ("over 90 compounds", "176+
//      reviews") where digit+noun is almost always a vendor fact — and it holds no site count today.
//   2. PHRASES — only the specific phrases we use for our own counts. Bare "peptides"/"compounds"
//      are NOT flagged (they appear in names like "GLP-1 peptides" and in vendor facts). The two
//      approximation forms REQUIRE the trailing "+", which our chrome uses ("60+ peptides") but a
//      peptide NAME never does ("GLP-1 peptides" passes).
//   3. LITERAL-ONLY — ${...} interpolations are stripped before matching, so a DERIVED value passes
//      and only a hand-typed literal trips it. Comments are scrubbed too (they aren't output).
//
// HONEST LIMIT: this cannot catch a hardcoded count in a NON-chrome page (a peptide-detail or news
// page), because those pages carry world-facts and can't be whitelisted without false positives.
// That's the accepted narrow scope; the counts that actually rot live in the chrome pages below.
//
// Run:  npm run check:counts   (also in the build chain; FAILS the build on any hit)

import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Site-chrome routes whose copy describes our data. Per route we scan page/layout/OG files.
const ROUTE_DIRS = ["", "app", "peptides", "supplements", "vendors", "prices", "compare", "coupons", "vendor-testing-index"];
const FILES = ["page.tsx", "layout.tsx", "opengraph-image.tsx", "twitter-image.tsx"];

// Canonical SITE-CONTENT count phrases. A NUMERIC LITERAL immediately before one of these fails.
const PATTERNS = [
  { re: /\d+\s+(?:research\s+)?peptide profiles?/i,   fix: "import profileCount from @/data/peptideCategories" },
  { re: /\d+\s+(?:natural\s+)?supplement profiles?/i, fix: "import supplementCount from @/data/supplements" },
  { re: /\d+\+\s+peptides\b/i,                         fix: "import appPeptideFloor from @/data/peptideCategories" },
  { re: /\d+\+\s+natural supplements\b/i,              fix: "derive from supplementCount (@/data/supplements)" },
  { re: /\d+\s+vendors\b/i,                            fix: "import activeVendorCount from @/data/vendors, or priceVendorCount() from @/data/prices" },
  { re: /\d+\s+(?:verified\s+)?(?:discount\s+)?codes\b/i, fix: "import activeVendorCount from @/data/vendors" },
  { re: /\d+\s+compounds compared\b/i,                 fix: "import indexablePriceCount() from @/data/prices" },
  { re: /\d+\s+price comparisons?\b/i,                 fix: "import indexablePriceCount() from @/data/prices" },
];

// Strip what isn't rendered output: block/JSX comments (newline-preserving so line numbers hold),
// full-line // comments, and ${...} interpolations (a derived value must pass — only literals fail).
function scrub(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/^\s*\/\/.*$/gm, " ")
    .replace(/\$\{[^}]*\}/g, " ");
}

const offenders = [];
for (const dir of ROUTE_DIRS) {
  for (const f of FILES) {
    const rel = ["src/app", dir, f].filter(Boolean).join("/");
    const abs = join(root, rel);
    if (!existsSync(abs)) continue;
    scrub(readFileSync(abs, "utf8")).split("\n").forEach((line, i) => {
      for (const p of PATTERNS) {
        const m = line.match(p.re);
        if (m) offenders.push({ file: rel, line: i + 1, text: m[0].trim().replace(/\s+/g, " "), fix: p.fix });
      }
    });
  }
}

if (offenders.length) {
  const bar = "=".repeat(78);
  console.error(`\n${bar}`);
  console.error(`check:counts FAILED — ${offenders.length} hardcoded site-content count(s) found.`);
  console.error("A count describing our own data must be DERIVED, never typed as a literal — it rots.");
  console.error(bar);
  for (const o of offenders) {
    console.error(`  ${o.file}:${o.line}  "${o.text}"`);
    console.error(`      → ${o.fix}`);
  }
  console.error(`\nReplace the literal with the interpolated constant, then re-run.\n`);
  process.exit(1);
}

console.log(`check:counts OK — no hardcoded site-content counts in ${ROUTE_DIRS.length} chrome route(s).`);
