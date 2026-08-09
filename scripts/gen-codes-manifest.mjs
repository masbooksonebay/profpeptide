// scripts/gen-codes-manifest.mjs — emits public/codes-manifest.json on every build.
//
// The manifest is the ONLY handle on the three code surfaces no build can see: live X posts,
// the SimplyCodes + HotDeals listings (submitted with expiry 2100-12-31, so they never lapse
// on their own — a retired code advertises itself indefinitely until edited), and Google's
// cache. It is the authoritative "what every advertised code should be right now," so a
// future reconciliation check (or a person) can DIFF it against those surfaces.
//
// COMMITTED, not gitignored — deliberately, unlike vendors.slugs.json. Two reasons:
//   • git history becomes the change-log: `git log -p public/codes-manifest.json` shows every
//     code change with its date, which is the checklist for the CODE-CHANGE SOP in
//     scripts/check-codes.mjs (reissue X, edit listings, re-index Google).
//   • it's under public/, so it's fetchable at https://profpeptide.com/codes-manifest.json —
//     external tooling can reconcile aggregator listings without cloning the repo.
// Output is deterministic (sorted by slug, no timestamp) so it changes ONLY when vendor data
// changes, keeping diffs meaningful. Active (non-retired) vendors only — the advertised set;
// a retiring vendor DROPS from the manifest, and that removal is the signal to pull its
// listings.
//
// Run: node scripts/gen-codes-manifest.mjs  (wired into `npm run build` before next build)

import ts from "typescript";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outPath = join(root, "public/codes-manifest.json");

const { outputText } = ts.transpileModule(readFileSync(join(root, "src/data/vendors.ts"), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
});
const moduleObj = { exports: {} };
new Function("module", "exports", "require", outputText)(moduleObj, moduleObj.exports, () => {
  throw new Error("vendors.ts must stay import-free");
});
const vendors = moduleObj.exports.vendors;

const manifest = Object.keys(vendors)
  .filter((slug) => !vendors[slug].retired)
  .sort()
  .map((slug) => {
    const v = vendors[slug];
    return { slug, name: v.name, code: v.code, discount: v.discount, url: v.url };
  });

writeFileSync(outPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(`gen-codes-manifest: wrote ${manifest.length} active vendor codes -> public/codes-manifest.json`);
