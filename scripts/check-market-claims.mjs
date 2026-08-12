// scripts/check-market-claims.mjs — MARKET-CLAIM guard for peptide-profile prose.
//
// A profile must not assert that a compound is SOLD / AVAILABLE / carried by vendors AS A
// PRE-BLENDED product unless PP actually prices that blend — i.e. its slug is in
// src/data/blends.index.json (an emitted, vendor-counted blend surface). Three times the prose
// drifted into "sold by specialty peptide vendors as pre-blended vials", "pre-blended GH Stack
// products almost always contain CJC-1295 without DAC", "the three vendors highlighted below
// carry CagriSema as a pre-blended 1:1 product" — market/form claims nothing in PP's data
// establishes. This guard makes that class un-shippable.
//
// The line to draw (same as the manual passes):
//   • KEEP compound pharmacology ("CagriSema IS a 1:1 combination"), reconstitution/reference
//     framing, and NEGATED prose ("Neither is available as a pre-blended vial", "rather than a
//     pre-blend", "incompatible with a pre-blend").
//   • CUT assertions that a pre-blend is SOLD / AVAILABLE / carried by vendors, on a profile with
//     no emitted blend surface backing it.
//
// FAILS the build (not warn): these are factual claims about the retail market on live, indexed
// pages that many vendors link to. Same severity as check:coupon-prose.
//
// Match = a `pre-blend(ed)` token that has (a) a SALE signal within ~50 chars on either side and
// (b) NO negation in the ~80 chars immediately preceding it. Profiles whose slug is in
// blends.index.json are skipped (their pre-blend claims are data-backed). Negated and
// definitional/reconstitution mentions do not match.

import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const emitted = new Set(
  JSON.parse(readFileSync(join(root, "src/data/blends.index.json"), "utf8")).map((b) => b.slug),
);

// A pre-blend is being SOLD / made AVAILABLE / carried — the market assertion.
const SALE =
  /\b(sold|for sale|available|on the market|vendors?\s+(?:sell|offer|carr(?:y|ies)|list|stock|ship|provide|suppl(?:y|ies))s?|(?:typically|commonly|usually|often)\s+(?:sold|available|supplied|offered|carried))\b/i;
// Negation immediately governing the claim → NOT a market assertion (keep).
// "no" as a negation, but NOT the form name "no-DAC"/"no DAC" (which is not a negation).
const NEG =
  /\b(not|no(?![- ]?dac)|neither|never|rather than|instead of|prevents?|incompatible|cannot|can['’]t|isn['’]t|aren['’]t|won['’]t|without|don['’]t|does not|do not|nor)\b/i;
const PREBLEND = /pre-?blend(?:ed)?/gi;

const stripTags = (s) => s.replace(/<[^>]+>/g, " ").replace(/&mdash;|&ndash;/g, "—").replace(/&apos;/g, "'").replace(/\s+/g, " ");

const peptidesDir = join(root, "src/app/peptides");
const slugs = readdirSync(peptidesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith("["))
  .map((d) => d.name);

const failures = [];
let scanned = 0;
for (const slug of slugs) {
  if (emitted.has(slug)) continue; // pre-blend claims are data-backed for emitted blends
  scanned++;
  const file = join(peptidesDir, slug, "page.tsx");
  let raw;
  try {
    raw = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  // Flatten to one tag-stripped prose string with an offset→source-line map, so a negation that
  // spans a JSX line break ("…are not\n available pre-blended…") is still seen as governing the
  // claim (else a line-by-line scan false-positives on honest negated prose).
  const lines = raw.split("\n");
  let flat = "";
  const lineAt = [];
  for (let i = 0; i < lines.length; i++) {
    const t = stripTags(lines[i]) + " ";
    for (let k = 0; k < t.length; k++) lineAt.push(i + 1);
    flat += t;
  }
  const seenLines = new Set();
  for (const m of flat.matchAll(PREBLEND)) {
    const idx = m.index ?? 0;
    const before = flat.slice(Math.max(0, idx - 90), idx);
    const windowFull = flat.slice(Math.max(0, idx - 90), idx + 50);
    if (SALE.test(windowFull) && !NEG.test(before)) {
      const ln = lineAt[idx] ?? 0;
      if (seenLines.has(ln)) continue; // one report per source line
      seenLines.add(ln);
      failures.push({
        slug,
        line: ln,
        sale: (windowFull.match(SALE)?.[0] ?? "").trim(),
        snippet: flat.slice(Math.max(0, idx - 55), idx + 35).trim(),
      });
    }
  }
}

if (failures.length) {
  console.error("check:market-claims FAILED — pre-blend market claim(s) on a profile with no emitted blend surface:\n");
  for (const f of failures) {
    console.error(`  ✗ /peptides/${f.slug}  (page.tsx:${f.line})  [sale signal: "${f.sale}"]`);
    console.error(`      …${f.snippet}…`);
  }
  console.error(
    "\nFix: cut the assertion that a pre-blend is SOLD/AVAILABLE/carried by vendors, or negate/reframe it\n" +
      "(keep compound pharmacology and reconstitution/reference framing). A pre-blend claim is only\n" +
      "allowed when the blend has an emitted price surface — its slug is in src/data/blends.index.json.",
  );
  process.exit(1);
}

console.log(
  `check:market-claims OK — ${scanned} non-emitted profile(s) scanned; no unbacked pre-blend market claims ` +
    `(${emitted.size} emitted blend(s) exempt: ${[...emitted].sort().join(", ")}).`,
);
