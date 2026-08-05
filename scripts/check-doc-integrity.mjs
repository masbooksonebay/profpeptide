// scripts/check-doc-integrity.mjs — structural integrity of the master price doc.
//
// docs/PP_PRICE_DATA_MASTER_v1.md is the single source of truth for the price grid. Two hand-edits
// corrupted it (a glued "---## VENDOR:" boundary; 12 silently-eaten blank lines). check:grids only
// fails when a section renders ZERO rows — a section that lost a boundary but still parses would be
// invisible. This asserts the doc's STRUCTURE directly, independent of how an edit was made:
//   1. no glued boundary ("---##"), every "## VENDOR:" header alone on its own line;
//   2. every section name resolves to a vendors.ts entry (no orphan / misspelled / merged header);
//   3. no duplicate section for a vendor;
//   4. every section that HAS Single-compounds rows produces rows in prices.generated
//      (exempt: retired vendors — kept in data, filtered at render; UNREACHABLE — scope-zero).
//
// Run:  npm run check:doc-integrity   (also in the build chain; FAILS on any structural defect)

import ts from "typescript";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
function execModule(rel) {
  const { outputText } = ts.transpileModule(readFileSync(join(root, rel), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const m = { exports: {} };
  new Function("module", "exports", "require", outputText)(m, m.exports, () => ({}));
  return m.exports;
}

// Structurally scope-zero by construction (mirrors check-grids UNREACHABLE): in the registry but
// the peptide-scope filter yields 0 rows — a section with doc rows that renders 0 is EXPECTED here.
const UNREACHABLE = new Set(["integrative-peptides"]);

const { vendors } = execModule("src/data/vendors.ts");
const name2slug = {};
for (const [slug, v] of Object.entries(vendors)) name2slug[v.name] = slug;
const genVendors = new Set(execModule("src/data/prices.generated.ts").generatedPriceEntries.map((e) => e.vendor));

const raw = readFileSync(join(root, "docs/PP_PRICE_DATA_MASTER_v1.md"), "utf8");
const lines = raw.split("\n");
const errors = [];

// 1. glued boundary / header-not-at-line-start
if (raw.includes("---##")) errors.push(`glued boundary "---##" present`);
lines.forEach((ln, i) => {
  if (ln.includes("## VENDOR:") && !ln.startsWith("## VENDOR:"))
    errors.push(`line ${i + 1}: "## VENDOR:" not at line start: ${JSON.stringify(ln.slice(0, 60))}`);
});

// parse sections (name -> single-compounds data-row count)
const sections = [];
let cur = null, inSingles = false;
for (const ln of lines) {
  const mv = ln.match(/^## VENDOR: (.+)/);
  if (mv) { cur = { name: mv[1].trim(), rows: 0 }; sections.push(cur); inSingles = false; continue; }
  if (/^### Single compounds/.test(ln)) { inSingles = true; continue; }
  if (/^### /.test(ln)) { inSingles = false; continue; }
  if (cur && inSingles && ln.startsWith("| ") && !ln.startsWith("| ---") && !ln.includes("| Compound ")) cur.rows++;
}

// 2 & 3. orphan + duplicate section names
const seen = new Set();
for (const s of sections) {
  const slug = name2slug[s.name];
  if (!slug) errors.push(`orphan section "## VENDOR: ${s.name}" — no vendors.ts entry (misspelled / merged / stale)`);
  else if (seen.has(slug)) errors.push(`duplicate section for ${slug} ("${s.name}")`);
  else seen.add(slug);
  s.slug = slug;
}

// 4. non-empty section must render (unless retired / UNREACHABLE)
for (const s of sections) {
  if (!s.slug || s.rows === 0) continue;
  const retired = vendors[s.slug]?.retired === true;
  if (!genVendors.has(s.slug) && !retired && !UNREACHABLE.has(s.slug))
    errors.push(`${s.slug}: ${s.rows} doc rows but 0 in prices.generated (parses but yields nothing — possible corruption)`);
}

if (errors.length) {
  console.error(`check:doc-integrity FAILED — ${errors.length} structural defect(s):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}
console.log(`check:doc-integrity OK — ${sections.length} well-formed sections, all map to the registry, all non-empty sections render.`);
