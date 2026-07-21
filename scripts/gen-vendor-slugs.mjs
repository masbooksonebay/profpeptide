// Generates src/data/vendors.slugs.json — a minimal { slug, retired } registry
// derived from the single source of truth (src/data/vendors.ts).
//
// Why this exists: next-sitemap.config.js is CommonJS and cannot import the
// TypeScript vendors module directly. Rather than hand-maintain a parallel list
// (which drifts), we transpile and execute the real vendors.ts here and emit the
// slug+retired pairs the sitemap config needs. Wired into `npm run build` ahead
// of next-sitemap, so it regenerates on every build and can never go stale.
//
// The output is a build artifact (gitignored); the sitemap config reads it to
// decide coupon-page inclusion, making vendors.ts authoritative for the sitemap.

import ts from "typescript";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcPath = join(root, "src/data/vendors.ts");
const outPath = join(root, "src/data/vendors.slugs.json");

// Transpile vendors.ts (types stripped) to CommonJS, then execute it in an
// isolated context to read the real `vendors` object. vendors.ts has no runtime
// imports, so execution is self-contained and safe.
const { outputText } = ts.transpileModule(readFileSync(srcPath, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
});

const moduleObj = { exports: {} };
const requireGuard = (name) => {
  throw new Error(`vendors.ts must stay import-free for slug generation (saw require("${name}"))`);
};
new Function("module", "exports", "require", outputText)(moduleObj, moduleObj.exports, requireGuard);

const vendors = moduleObj.exports.vendors;
if (!vendors || typeof vendors !== "object") {
  throw new Error("gen-vendor-slugs: could not read `vendors` export from vendors.ts");
}

const registry = Object.keys(vendors)
  .sort()
  .map((slug) => ({ slug, retired: Boolean(vendors[slug].retired) }));

writeFileSync(outPath, JSON.stringify(registry, null, 2) + "\n");
console.log(
  `gen-vendor-slugs: wrote ${registry.length} vendors ` +
    `(${registry.filter((v) => v.retired).length} retired) -> ${outPath}`
);
