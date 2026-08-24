// scripts/check-search-index.mjs — fails the build if the committed search index is STALE.
//
// The index (src/lib/search-index.generated.ts) is derived from the site's single sources by
// scripts/gen-search-index.mjs. This guard re-runs that derivation and byte-compares it to the
// committed file: if a page was added/removed, a peptide/supplement/news/glossary entry changed,
// or a vendor's `retired` flag flipped, the regenerated output differs and this FAILS — the same
// "generated file must be regenerated" contract as the price + vendor-slug generators.
//
// It also asserts two invariants explicitly (belt-and-suspenders, loud on the specific defect):
//   • every content page dir on disk (/peptides, /supplements, /compare, /guides) has an entry
//   • NO retired vendor is indexed (a coupon result that 308-redirects is a defect)
//
// Run:  node scripts/check-search-index.mjs   (also in `npm run build`)
// Exit: 0 = fresh; 1 = stale or an invariant broke.

import { readFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildEntries, serialize } from "./gen-search-index.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (...p) => join(root, ...p);
const GEN = P("src/lib/search-index.generated.ts");

const failures = [];

// 1. Staleness: regenerated output must equal the committed file exactly.
const entries = buildEntries();
const fresh = serialize(entries);
const committed = existsSync(GEN) ? readFileSync(GEN, "utf8") : "";
if (fresh !== committed) {
  failures.push(
    "src/lib/search-index.generated.ts is STALE — a source or page changed but the index was not " +
      "regenerated. Fix: `node scripts/gen-search-index.mjs` and commit the result."
  );
}

// 2. Coverage: every content page dir on disk must have an index entry.
const urls = new Set(entries.map((e) => e.url));
const dirsIn = (rel) => {
  const dir = P(rel);
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(dir, d.name, "page.tsx")))
    .map((d) => d.name);
};
for (const [rel, prefix] of [
  ["src/app/peptides", "/peptides"],
  ["src/app/supplements", "/supplements"],
  ["src/app/compare", "/compare"],
  ["src/app/guides", "/guides"],
]) {
  for (const slug of dirsIn(rel)) {
    if (!urls.has(`${prefix}/${slug}`)) failures.push(`${prefix}/${slug} exists on disk but is not in the search index.`);
  }
}

// 3. Retired vendors must NOT be indexed. Retired flag parsed from the committed vendors.ts
// (same top-level-block regex the OG-route guard uses) — no dependency on the gitignored slug file.
const vendorsTs = readFileSync(P("src/data/vendors.ts"), "utf8");
for (const m of vendorsTs.matchAll(/^ {2}"([a-z0-9-]+)":\s*\{([\s\S]*?)^ {2}\},/gm)) {
  if (/\bretired:\s*true\b/.test(m[2]) && urls.has(`/coupons/${m[1]}`)) {
    failures.push(`retired vendor ${m[1]} is in the search index (would 308-redirect on click).`);
  }
}

if (failures.length) {
  console.error("check:search-index FAILED:\n");
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log(`check:search-index OK — ${entries.length} entries, fresh and fully covering pages on disk.`);
