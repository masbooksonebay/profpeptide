// scripts/check-codes.mjs — the discount-code drift guard.
//
// A discount code lives in ONE place: src/data/vendors.ts (vendors[slug].code). Any code
// string rendered on a page must equal that vendor's registry code. A hardcoded code that
// disagrees is invisible to every other check and ships a wrong code to readers — exactly
// how /best-peptide-vendors served Glacier's stale PROF10 after the registry moved to
// PROFPEPTIDE. This makes that drift a build failure.
//
// TWO TIERS (both slug-bound, so there's no ambiguity about which vendor a code belongs to):
//   Tier 1 — every code literal in src/app/coupons/<slug>/page.tsx must equal
//            vendors[<slug>].code. (The code CARD already derives; this covers FAQ/prose.)
//   Tier 2 — every VendorHighlightBlock entry `{ slug: "X", note: "…CODE…" }` must have its
//            note code equal vendors[X].code.
// Free prose that named a vendor's code in English with no slug (e.g. "peptides.gg discount
// code (PROF15)") is NOT marked here — it was migrated to <VendorCode slug> (derived), so the
// literal is gone and there's nothing to verify. Prefer <VendorCode> over a new code literal.
//
// Passing on day one is the point, not a weakness: it locks in ~100 hardcoded-but-correct
// prose codes so the next registry code change can't silently rot one of them.
//
// Run:  npm run check:codes      Exit: 0 = all codes match the registry; 1 = at least one drifted.
//
// ─────────────────────────────────────────────────────────────────────────────────────────
// CODE-CHANGE SOP — a code change must propagate to FOUR surfaces. This guard covers only #1.
// The other three are outside the repo and no build can see them; the codes-manifest.json
// emitted each build (scripts/gen-codes-manifest.mjs) is the handle a future diff-check uses
// to reconcile them.
//
//   1. THE SITE — edit vendors.ts (single source of truth). This guard + check-sitemap etc.
//      then verify every on-site surface derives correctly. This is the only automated step.
//   2. LIVE X POSTS — reissue/repost anything carrying the old code. Old tweets are immutable;
//      the code in them can't be edited, so post a correction if the reach matters.
//   3. SIMPLYCODES + HOTDEALS LISTINGS — all 41 codes were submitted to HotDeals and 22 to
//      SimplyCodes with expiry 2100-12-31, so a listing NEVER lapses on its own. A retired or
//      changed code advertises itself indefinitely until someone edits the listing by hand.
//      Diff the new codes-manifest.json against the last committed one to see what to edit.
//   4. GOOGLE'S CACHE — request re-indexing in Search Console for the changed pages. The
//      snippet AND the AI Overview can lag days or never refresh on their own.
//
//   WORKED EXAMPLE — Glacier: code changed PROF10 → PROFPEPTIDE on Aug 6. The site was fixed,
//   but Google's SERP snippet AND its AI Overview were still serving PROF10 two days later,
//   and any HotDeals/SimplyCodes listing would keep showing PROF10 until edited. Surfaces
//   2–4 don't self-heal — walk this list on every code change.
// ─────────────────────────────────────────────────────────────────────────────────────────

import ts from "typescript";
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const APP = join(root, "src/app");

// --- read the registry (transpile + execute vendors.ts; same pattern as gen-vendor-slugs) --
const { outputText } = ts.transpileModule(readFileSync(join(root, "src/data/vendors.ts"), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
});
const moduleObj = { exports: {} };
new Function("module", "exports", "require", outputText)(moduleObj, moduleObj.exports, () => {
  throw new Error("vendors.ts must stay import-free");
});
const vendors = moduleObj.exports.vendors;

// The six canonical code shapes — nothing else counts as a code token (so "PROFILE",
// "PROF" alone, ref tokens like cknlhxrm, etc. are never matched).
const CODE_RE = /\bPROF(?:PEPTIDE(?:10|15)?|10|15|20)\b/g;
const lineOf = (text, index) => text.slice(0, index).split("\n").length;

const offenders = [];
let tier1Pages = 0, tier1Codes = 0, tier2Notes = 0, tier2Codes = 0;

// --- Tier 1: coupon pages ------------------------------------------------------------------
const couponsDir = join(APP, "coupons");
for (const slug of readdirSync(couponsDir).sort()) {
  const page = join(couponsDir, slug, "page.tsx");
  if (!existsSync(page)) continue;
  const expected = vendors[slug]?.code;
  if (!expected) { offenders.push({ file: `src/app/coupons/${slug}/page.tsx`, line: 1, found: "—", expected: "(slug not in registry)" }); continue; }
  tier1Pages++;
  const text = readFileSync(page, "utf8");
  for (const m of text.matchAll(CODE_RE)) {
    tier1Codes++;
    if (m[0] !== expected) offenders.push({ file: `src/app/coupons/${slug}/page.tsx`, line: lineOf(text, m.index), found: m[0], expected, tier: 1, slug });
  }
}

// --- Tier 2: VendorHighlightBlock { slug, note } entries (anywhere under src/app) -----------
const NOTE_RE = /slug:\s*["']([a-z0-9-]+)["']\s*,\s*note:\s*["']([^"']*)["']/g;
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".tsx")) out.push(p);
  }
  return out;
}
for (const file of walk(APP)) {
  const rel = relative(root, file).split(sep).join("/");
  const text = readFileSync(file, "utf8");
  for (const nm of text.matchAll(NOTE_RE)) {
    const slug = nm[1], note = nm[2];
    const expected = vendors[slug]?.code;
    for (const cm of note.matchAll(CODE_RE)) {
      tier2Notes++; tier2Codes++;
      if (!expected) { offenders.push({ file: rel, line: lineOf(text, nm.index), found: cm[0], expected: "(slug not in registry)", tier: 2, slug }); continue; }
      if (cm[0] !== expected) offenders.push({ file: rel, line: lineOf(text, nm.index), found: cm[0], expected, tier: 2, slug });
    }
  }
}

if (offenders.length) {
  console.error(`\ncheck:codes FAILED — ${offenders.length} code(s) disagree with src/data/vendors.ts:`);
  for (const o of offenders) console.error(`    • ${o.file}:${o.line}  found ${o.found}, expected ${o.expected}${o.slug ? `  (${o.slug})` : ""}`);
  console.error(`\n  Fix the page to match the registry (or fix vendors.ts if the registry is wrong).\n  Then walk the CODE-CHANGE SOP at the top of this file — surfaces 2–4 don't self-heal.`);
  process.exit(1);
}

console.log(`check:codes OK — Tier 1: ${tier1Codes} codes across ${tier1Pages} coupon pages; Tier 2: ${tier2Codes} in ${tier2Notes} highlight notes; all match the registry.`);
