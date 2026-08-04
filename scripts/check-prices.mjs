// scripts/check-prices.mjs — the price-plausibility guard.
//
// The price pull has structural guards (row counts, link resolution, zero rows, the 50% floor)
// but nothing on whether a PRICE is sane. Two data-correctness bugs shipped that a sanity check
// would have caught by itself: NOVA in AED (every row ~3.67x) and Royal's kit total shown as a
// single ($570 for a 1mg vial). This flags rows whose $/mg is wildly off its peers.
//
// RULE: group price rows by (compound, size). For a group with >= MIN_VENDORS distinct vendors,
// take the median $/mg and flag any row whose $/mg is >= N x median or <= median / N. Comparing
// WITHIN a size keeps it apples-to-apples (per-mg legitimately falls as vial size grows).
//
// COVERAGE: a median needs enough vendors to mean anything (2 lets one kit drag the midpoint and
// flag both; 1 has no median). Compounds where NO size reaches MIN_VENDORS are printed as an
// explicit "unchecked" list — that's exactly where low-vendor kits hide, and name-based kit
// detection is the only net there. Surfacing the blind spot beats pretending it's covered.
//
// SEVERITY: WARN, ALWAYS exit 0. A legitimately cheap or premium vendor must never gate a pull or
// deploy — this is a "look at this", like check:freshness's stamp-age warning. A warning nobody
// reads is worse than none, so it stays short: systematic vendors collapse to one line each.
//
// Run:  npm run check:prices   (also in the build chain; never fails it)

import ts from "typescript";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const N = 4;                 // flag $/mg >= N x or <= 1/N x the same-size median
const MIN_VENDORS = 3;       // distinct vendors needed at a (compound, size) for a usable median
const SYSTEMIC_FRAC = 0.5;   // vendor with >= this share of its checked rows flagged-high = systematic
const SYSTEMIC_MIN = 3;      // ...and at least this many flags (so a 2-row vendor isn't "systematic")

function execModule(relPath) {
  const { outputText } = ts.transpileModule(readFileSync(join(root, relPath), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const m = { exports: {} };
  new Function("module", "exports", "require", outputText)(m, m.exports, () => ({}));
  return m.exports;
}

const entries = execModule("src/data/prices.generated.ts").generatedPriceEntries;
const median = (a) => {
  const s = [...a].sort((x, y) => x - y);
  const n = s.length;
  return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
};

// group by compound|size
const groups = new Map();
for (const e of entries) {
  if (!e.sizeMg || e.basePrice == null) continue;
  const k = `${e.compound}|${e.sizeMg}`;
  (groups.get(k) || groups.set(k, []).get(k)).push(e);
}

const flags = [];                 // { vendor, compound, size, price, ppm, medppm, ratio, dir }
const checkedByVendor = new Map(); // vendor -> {checked, high}
const checkedCompounds = new Set();
const allCompounds = new Set(entries.map((e) => e.compound));

for (const [k, rows] of groups) {
  const vendors = new Set(rows.map((r) => r.vendor));
  if (vendors.size < MIN_VENDORS) continue;               // too few vendors → not a usable median
  const [compound, size] = k.split("|");
  checkedCompounds.add(compound);
  const med = median(rows.map((r) => r.basePrice));       // same size → $/mg ratio == price ratio
  for (const r of rows) {
    const cv = checkedByVendor.get(r.vendor) || { checked: 0, high: 0 };
    cv.checked++;
    const ratio = r.basePrice / med;
    if (ratio >= N || ratio <= 1 / N) {
      if (ratio >= N) cv.high++;
      flags.push({
        vendor: r.vendor, compound, size: `${size}mg`, price: r.basePrice,
        ppm: (r.basePrice / r.sizeMg).toFixed(2), medppm: (med / r.sizeMg).toFixed(2),
        ratio: ratio >= N ? `${ratio.toFixed(1)}x` : `1/${(1 / ratio).toFixed(1)}x`,
        dir: ratio >= N ? "high" : "low",
      });
    }
    checkedByVendor.set(r.vendor, cv);
  }
}

// systematic vendors (most rows off — currency/unit smell) vs isolated rows (kit / data error)
const systematic = new Set();
for (const [v, { checked, high }] of checkedByVendor) {
  if (high >= SYSTEMIC_MIN && high / checked >= SYSTEMIC_FRAC) systematic.add(v);
}

const uncheckedCompounds = [...allCompounds].filter((c) => !checkedCompounds.has(c)).sort();

// ── output ──────────────────────────────────────────────────────────────────
console.log(
  `check:prices OK (warn-only) — ${flags.length} implausible row(s) across ` +
  `${checkedCompounds.size} checked compound(s); ${uncheckedCompounds.length} compound(s) unchecked.`
);

if (systematic.size) {
  console.warn(`\n  ⚠ SYSTEMATIC — most rows off vs same-size peers; likely a currency/unit bug, not kits:`);
  for (const v of [...systematic].sort()) {
    const { checked, high } = checkedByVendor.get(v);
    const sample = flags.find((f) => f.vendor === v && f.dir === "high");
    console.warn(`    • ${v}: ${high}/${checked} rows ≥${N}x  (e.g. ${sample.compound} ${sample.size} $${sample.price} = ${sample.ratio} vs $${sample.medppm}/mg)`);
  }
}

const isolated = flags.filter((f) => !systematic.has(f.vendor)).sort((a, b) =>
  parseFloat(b.ratio) - parseFloat(a.ratio));
if (isolated.length) {
  console.warn(`\n  ⚠ ISOLATED — single rows off vs same-size peers; likely a leaked kit or data error:`);
  for (const f of isolated) {
    console.warn(`    • ${f.vendor} ${f.compound} ${f.size} $${f.price} ($${f.ppm}/mg) = ${f.ratio} the median $${f.medppm}/mg`);
  }
}

if (uncheckedCompounds.length) {
  const show = uncheckedCompounds.slice(0, 20).join(", ");
  const more = uncheckedCompounds.length > 20 ? `, +${uncheckedCompounds.length - 20} more` : "";
  console.warn(`\n  UNCHECKED — no size reaches ${MIN_VENDORS} vendors, so no usable median (guard is blind here;`);
  console.warn(`  name-based kit detection is the only net): ${show}${more}`);
}
// Always succeed — warn, never fail.
