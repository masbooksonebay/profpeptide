// check:deals — enforces the invariant behind src/data/deals.ts: every `vendorSlug` must resolve
// against the live vendor registry. A typo'd or retired slug would render a /deals entry whose Shop
// button (VendorShopButton) either 404s or points at a vendor no longer on the site — this fails
// the build loudly instead of shipping that.
//
// Mirrors check-vendor-pins.mjs: TS data modules are import-free by design, so we transpile -> CJS
// -> exec to read their exports without a bundler.
import ts from "typescript";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function execModule(path, label) {
  const { outputText } = ts.transpileModule(readFileSync(path, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const moduleObj = { exports: {} };
  const requireGuard = (name) => {
    throw new Error(`${label} must stay import-free for check:deals (saw require("${name}"))`);
  };
  new Function("module", "exports", "require", outputText)(moduleObj, moduleObj.exports, requireGuard);
  return moduleObj.exports;
}

const { deals } = execModule(join(root, "src/data/deals.ts"), "deals.ts");
const { vendors } = execModule(join(root, "src/data/vendors.ts"), "vendors.ts");

const errors = [];
for (const d of deals) {
  const v = vendors[d.vendorSlug];
  if (!v) {
    errors.push(`  "${d.vendorSlug}": not in the vendor registry (src/data/vendors.ts)`);
    continue;
  }
  if (v.retired) errors.push(`  "${d.vendorSlug}" (${v.name}): retired — remove or replace this deal`);
  if (!d.image) errors.push(`  "${d.vendorSlug}": missing image`);
  if (!d.imageAlt) errors.push(`  "${d.vendorSlug}": missing imageAlt`);
  if (!d.headline) errors.push(`  "${d.vendorSlug}": missing headline`);
  if (d.endsAt && Number.isNaN(new Date(d.endsAt).getTime())) {
    errors.push(`  "${d.vendorSlug}": endsAt "${d.endsAt}" does not parse as a date`);
  }
  if (d.aspectRatio !== undefined && !/^\d+(\.\d+)?\s*\/\s*\d+(\.\d+)?$/.test(d.aspectRatio)) {
    errors.push(`  "${d.vendorSlug}": aspectRatio "${d.aspectRatio}" is not a "width/height" CSS aspect-ratio value`);
  }
}

if (errors.length) {
  console.error(`check:deals FAILED — ${errors.length} problem(s):`);
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`check:deals OK — ${deals.length} deal(s), every vendorSlug resolves against the active registry.`);
