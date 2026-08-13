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
const { generatedBlendEntries } = execModule(join(root, "src/data/prices.blends.generated.ts"), "prices.blends.generated.ts");

const singleRow = new Set(generatedPriceEntries.map((e) => `${e.compound}|${e.vendor}`));
const blendRow = new Set(generatedBlendEntries.map((e) => `${e.blend}|${e.vendor}`));
const carries = (slug, vendor) => singleRow.has(`${slug}|${vendor}`) || blendRow.has(`${slug}|${vendor}`);

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
    if (!carries(slug, vendor)) errors.push(`  ${slug}: "${vendor}" has no price row for this compound`);
  }
}

if (errors.length) {
  console.error(`check:vendor-pins FAILED — ${errors.length} problem(s):`);
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  `check:vendor-pins OK — ${Object.keys(VENDOR_PINS).length} pinned profile(s), ${pinCount} vendor-slot(s); ` +
    `every pinned vendor is LISTED and carries a price row.`,
);
