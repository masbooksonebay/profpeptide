// scripts/check-surfaces.mjs — completeness guard for HAND-MAINTAINED vendor surfaces.
//
// Some surfaces enumerate vendors from a hand-typed local array rather than the registry, and
// at least one — /vendor-testing-index — advertises itself as "a side-by-side record of EVERY
// vendor's documented third-party testing." When a new vendor is added to the registry but not
// to that array, the claim quietly goes false. This surfaces the gap.
//
// WARN ONLY (always exit 0). Same reasoning as the stamp-age check: a missing row is cosmetic;
// an undeployable site is not. This never blocks a build — it just prints what's out of sync.
//
// Scope: ONLY surfaces that CLAIM COMPLETENESS. Editorial surfaces (/best-peptide-vendors is a
// curated ranking; peptide-profile vendor cards are a curated top-5) are intentionally NOT here —
// their omissions are a human call, not a drift bug.
//
// Run:  npm run check:surfaces   (also runs in the build chain; never fails it)

import ts from "typescript";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function execModule(relPath, label) {
  const { outputText } = ts.transpileModule(readFileSync(join(root, relPath), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const m = { exports: {} };
  const guard = (name) => { throw new Error(`${label} must stay import-free (saw require("${name}"))`); };
  new Function("module", "exports", "require", outputText)(m, m.exports, guard);
  return m.exports;
}

const { vendors } = execModule("src/data/vendors.ts", "vendors.ts");
const active = new Set(Object.entries(vendors).filter(([, v]) => !v.retired).map(([s]) => s));
const retired = new Set(Object.entries(vendors).filter(([, v]) => v.retired).map(([s]) => s));

// Hand-maintained surfaces that claim to cover EVERY vendor. Each: a label + the page whose
// local array is parsed for `slug: "..."` entries. Add a surface here only if it claims completeness.
const SURFACES = [
  { label: "/vendor-testing-index", path: "src/app/vendor-testing-index/page.tsx" },
];

let warned = false;
for (const s of SURFACES) {
  const src = readFileSync(join(root, s.path), "utf8");
  const listed = new Set([...src.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]));
  const missing = [...active].filter((slug) => !listed.has(slug)).sort();
  const stale = [...listed].filter((slug) => retired.has(slug) || !vendors[slug]).sort();
  if (missing.length || stale.length) {
    warned = true;
    const bar = "-".repeat(74);
    console.warn(`\n${bar}`);
    console.warn(`check:surfaces WARNING — ${s.label} claims completeness but is out of sync:`);
    if (missing.length) console.warn(`  MISSING ${missing.length} active vendor(s): ${missing.join(", ")}`);
    if (stale.length) console.warn(`  STALE (retired/unknown, still listed): ${stale.join(", ")}`);
    console.warn(`  (warning only — build continues. Add/remove rows in ${s.path}.)`);
    console.warn(bar);
  } else {
    console.log(`check:surfaces OK — ${s.label} covers all ${active.size} active vendors.`);
  }
}

if (!warned) console.log("check:surfaces OK — all completeness surfaces in sync.");
// Always succeed — warn, never fail.
