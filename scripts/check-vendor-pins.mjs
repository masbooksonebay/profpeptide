// check:vendor-pins — enforces the invariants behind src/data/vendor-pins.ts.
//
// A pin renders a fixed vendor set on a profile, overriding derivation. That is only
// safe while every pinned vendor (a) exists in the attribution allowlist (LISTED) and
// (b) actually carries a price row for that compound. Pinning a vendor onto a compound
// it doesn't stock is worse than not pinning at all — so if a future price pull drops a
// pinned vendor's row, THIS guard fails the build loudly instead of shipping a phantom
// card. That is how a pin survives a derivation change: derivation may reorder the
// unpinned profiles freely, but a pinned set is asserted here every build.
//
// Mirrors check-attribution.mjs: TS data modules are import-free by design, so we
// transpile → CJS → exec to read their exports without a bundler.
import ts from "typescript";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function execModule(path, label) {
  const { outputText } = ts.transpileModule(readFileSync(path, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const moduleObj = { exports: {} };
  const requireGuard = (name) => {
    throw new Error(`${label} must stay import-free for check:vendor-pins (saw require("${name}"))`);
  };
  new Function("module", "exports", "require", outputText)(moduleObj, moduleObj.exports, requireGuard);
  return moduleObj.exports;
}

const { VENDOR_PINS } = execModule(join(root, "src/data/vendor-pins.ts"), "vendor-pins.ts");
const { LISTED } = execModule(join(root, "src/data/attribution.ts"), "attribution.ts");
const { generatedPriceEntries } = execModule(join(root, "src/data/prices.generated.ts"), "prices.generated.ts");

const singleRow = new Set(generatedPriceEntries.map((e) => `${e.compound}|${e.vendor}`));

// A vendor CARRIES a compound if it stocks it directly OR inside a blend — the pin shows who carries
// the compound, not what has a standalone SKU today (Nura sells Cagrilintide only inside its
// Retatrutide/Cagrilintide blend). blend-carries.generated.json lists every blend slug -> vendors
// PRE-GATE (single-vendor blends never emit a comparison row, so the emitted blend surface can't be
// used here). Expand each blend to its components via normalize.BLEND_COMPONENTS (slug -> "A/B/C",
// slugified) so a component the vendor carries only inside a blend still counts.
const blendCarries = JSON.parse(readFileSync(join(root, "src/data/blend-carries.generated.json"), "utf8"));
const slugify = (s) =>
  s.toLowerCase().replace(/\+/g, "-plus").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const normSrc = readFileSync(join(root, "scripts/price-pull/pricepull/normalize.py"), "utf8");
const blendComponents = {};
const bcBlock = normSrc.match(/^BLEND_COMPONENTS\s*=\s*\{([\s\S]*?)^\}/m);
if (bcBlock) {
  for (const m of bcBlock[1].matchAll(/'([a-z0-9-]+)':\s*'([^']+)'/g)) {
    blendComponents[m[1]] = m[2].split("/").map((x) => slugify(x.trim()));
  }
}
const carriesViaBlend = new Set();
for (const [blendSlug, vendors] of Object.entries(blendCarries)) {
  for (const comp of blendComponents[blendSlug] || []) {
    for (const v of vendors) carriesViaBlend.add(`${comp}|${v}`);
  }
}
const carries = (slug, vendor) =>
  singleRow.has(`${slug}|${vendor}`) ||               // standalone single row
  (blendCarries[slug] || []).includes(vendor) ||      // the pinned compound IS a blend the vendor carries
  carriesViaBlend.has(`${slug}|${vendor}`);           // a blend the vendor carries whose components include it

const errors = [];
let pinCount = 0;
for (const [slug, set] of Object.entries(VENDOR_PINS)) {
  if (!existsSync(join(root, "src/app/peptides", slug))) {
    errors.push(`  ${slug}: no profile route (src/app/peptides/${slug})`);
    continue;
  }
  if (!Array.isArray(set) || set.length === 0) {
    errors.push(`  ${slug}: pin set is empty`);
    continue;
  }
  for (const vendor of set) {
    pinCount++;
    if (!LISTED.has(vendor)) errors.push(`  ${slug}: "${vendor}" is not in LISTED (attribution.ts)`);
    if (!carries(slug, vendor)) errors.push(`  ${slug}: "${vendor}" carries no row for this compound (no single, and no blend containing it)`);
  }
}

if (errors.length) {
  console.error(`check:vendor-pins FAILED — ${errors.length} problem(s):`);
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  `check:vendor-pins OK — ${Object.keys(VENDOR_PINS).length} pinned profile(s), ${pinCount} vendor-slot(s); ` +
    `every pinned vendor is LISTED and carries the compound (single row or a blend containing it).`,
);
