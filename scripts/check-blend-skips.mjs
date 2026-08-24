// scripts/check-blend-skips.mjs — makes blend-row losses impossible to hide.
//
// THE ASYMMETRY THIS CLOSES: check:prices-sync proves every EMITTED row matches the doc, but it
// never proved every DOC row got emitted-or-accounted. So a blend row the pipeline silently dropped
// (blend_unmapped was computed and never printed — it ate two GHK-Cu/KPV rows) left no trace. The
// single-compound track has the excl[] counters + the "arithmetic closes" invariant; blends now have
// src/data/blend-skips.generated.json (the ledger, one entry per dropped row with a reason + date).
//
// This guard does two things:
//   (1) COVERAGE — independently parses the master doc's ### Blends tables, counts data rows, and
//       asserts  docRows === emittedRows + ledgerRows.  If a drop path isn't in the ledger, the sum
//       won't close and this FAILS. That is the doc-rows-emitted check check:prices-sync couldn't do.
//   (2) BASELINE — a reviewed snapshot of how many rows drop, per reason. Blend drops today are
//       overwhelmingly legitimate (below-gate packs, retired vendors, unverified codes), so a
//       fail-on-any-drop guard would fail on 65 benign rows. Instead this FAILS when drops WORSEN:
//         • a reason string not in the baseline (a NEW, unanticipated drop path — the silent class); or
//         • the total, or any single reason's count, EXCEEDS its baseline.
//       A drop count that DECREASES only WARNS (recovery happened — bump the baseline). Improvement
//       must never block a deploy.
//
// Run:  npm run check:blend-skips   (also in the build chain; FAILS on a broken invariant or worsened drops)

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const docPath = join(root, "docs/PP_PRICE_DATA_MASTER_v1.md");
const blendsPath = join(root, "src/data/prices.blends.generated.ts");
const ledgerPath = join(root, "src/data/blend-skips.generated.json");

// ── BASELINE ────────────────────────────────────────────────────────────────
// Reviewed 2026-08-24. 65 blend rows drop, all accounted and (per the diagnosis) legitimate or
// recoverable-but-parked. Raise a count here ONLY after confirming the new drops are acceptable;
// a bump is a deliberate act, not a silent one. Reasons: see _reasonLegend in the ledger.
const BASELINE_TOTAL = 65;
const BASELINE_BY_REASON = {
  "below-vendor-gate": 22,
  "cjc-form-unresolved": 19,
  "config-dedup": 11,
  "retired-vendor": 6,
  "coded-unverified": 3,
  "unmapped": 2,
  "backlog": 1,
  "no-size-or-price": 1,
  // "uncaptured-malformed-row": 0  // no rows today; listed as a known reason so it isn't "new"
};
const KNOWN_REASONS = new Set([...Object.keys(BASELINE_BY_REASON), "uncaptured-malformed-row"]);

// ── (1) independently count doc ### Blends data rows (mirrors to_prices.py's excl['blends']) ──
// A blend block runs from a "### Blends" line to the next "### " or "## " line. Count table rows
// that start "| ", are not the "|---" separator, and whose first cell doesn't name a header
// ("blend"/"product") — exactly the rows to_prices.py counts.
function countDocBlendRows(doc) {
  let inBlend = false, n = 0;
  for (const line of doc.split("\n")) {
    if (line.startsWith("### Blends")) { inBlend = true; continue; }
    if (line.startsWith("### ") || line.startsWith("## ")) { inBlend = false; continue; }
    if (!inBlend) continue;
    if (!line.startsWith("| ")) continue;
    if (/^\|\s*:?-+/.test(line)) continue;                 // separator row
    const first = line.replace(/^\|/, "").split("|")[0].trim().toLowerCase();
    if (first.includes("blend") || first.includes("product")) continue;  // header row
    n++;
  }
  return n;
}

const doc = readFileSync(docPath, "utf8");
const docRows = countDocBlendRows(doc);

// emitted rows = generatedBlendEntries lines in the committed artifact
const emittedRows = (readFileSync(blendsPath, "utf8").match(/^\s*\{\s*blend:/gm) || []).length;

// ledgered rows
let ledger;
try {
  ledger = JSON.parse(readFileSync(ledgerPath, "utf8"));
} catch (e) {
  console.error(`check:blend-skips FAILED — cannot read the ledger ${ledgerPath}: ${e.message}`);
  console.error(`Regenerate: python3 scripts/price-pull/to_prices.py`);
  process.exit(1);
}
const ledgerRows = ledger.entries.length;

const failures = [];
const warnings = [];

// ── coverage invariant ────────────────────────────────────────────────────────
if (docRows !== emittedRows + ledgerRows) {
  failures.push(
    `COVERAGE BROKEN: doc has ${docRows} blend rows but emitted(${emittedRows}) + ledgered(${ledgerRows}) = ` +
    `${emittedRows + ledgerRows}. A dropped blend row is NOT in the ledger — a silent loss. ` +
    `Trace the new drop path in to_prices.py and route it through _skip_blend().`
  );
}
// the ledger's own denominator must agree with the independent doc parse + emitted count
if (ledger.docBlendRows !== docRows) {
  failures.push(`ledger.docBlendRows=${ledger.docBlendRows} but the doc parses to ${docRows} blend rows.`);
}
if (ledger.emittedBlendRows !== emittedRows) {
  failures.push(`ledger.emittedBlendRows=${ledger.emittedBlendRows} but the artifact has ${emittedRows} emitted rows.`);
}
if (ledger.skippedBlendRows !== ledgerRows) {
  failures.push(`ledger.skippedBlendRows=${ledger.skippedBlendRows} but entries[] has ${ledgerRows} rows.`);
}

// ── baseline: fail when drops worsen, warn when they improve ──────────────────
const byReason = ledger.byReason || {};
for (const reason of Object.keys(byReason)) {
  if (!KNOWN_REASONS.has(reason)) {
    failures.push(`NEW drop reason "${reason}" (${byReason[reason]} rows) — an unanticipated blend-drop path. ` +
      `If legitimate, add it to KNOWN_REASONS + BASELINE_BY_REASON here; otherwise fix the pipeline.`);
  } else if (byReason[reason] > (BASELINE_BY_REASON[reason] || 0)) {
    failures.push(`drops for "${reason}" rose to ${byReason[reason]} (baseline ${BASELINE_BY_REASON[reason] || 0}) — ` +
      `new blend rows are being lost to this reason.`);
  } else if (byReason[reason] < (BASELINE_BY_REASON[reason] || 0)) {
    warnings.push(`"${reason}" dropped to ${byReason[reason]} (baseline ${BASELINE_BY_REASON[reason] || 0}) — recovery; lower the baseline.`);
  }
}
if (ledgerRows > BASELINE_TOTAL) {
  failures.push(`total blend drops rose to ${ledgerRows} (baseline ${BASELINE_TOTAL}).`);
} else if (ledgerRows < BASELINE_TOTAL) {
  warnings.push(`total blend drops fell to ${ledgerRows} (baseline ${BASELINE_TOTAL}) — recovery; lower BASELINE_TOTAL.`);
}

// ── report ────────────────────────────────────────────────────────────────────
if (failures.length) {
  console.error("check:blend-skips FAILED:\n");
  for (const f of failures) console.error(`  ✗ ${f}`);
  console.error(`\nLedger: ${ledgerPath}`);
  process.exit(1);
}

console.log(`check:blend-skips OK — coverage closes: doc ${docRows} = emitted ${emittedRows} + ledgered ${ledgerRows}.`);
console.log(`  drops by reason: ${JSON.stringify(byReason)}`);
for (const w of warnings) console.warn(`  ⚠ ${w}`);
