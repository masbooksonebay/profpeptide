// scripts/test-chat-format.mjs — unit tests for the discount-formatting backstop
// (src/lib/chat-format.ts). Plain node + node:assert, matching this repo's existing convention
// (no test framework installed) and the same transpile-and-run technique the check-*.mjs guards
// already use for import-free modules — chat-format.ts qualifies (no imports at all), so it can be
// executed directly.
//
// Run: node scripts/test-chat-format.mjs

import assert from "node:assert/strict";
import ts from "typescript";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "src/lib/chat-format.ts"), "utf8");
const { outputText } = ts.transpileModule(src, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
});
const mod = { exports: {} };
new Function("module", "exports", outputText)(mod, mod.exports);
const { normalizeDiscountFormatting } = mod.exports;

const cases = [
  // The two OBSERVED live-production strings, verbatim.
  ["save 10% off%", "save 10% off"],
  ["PROF20 for 20% off off", "PROF20 for 20% off"],
  // Variants: extra whitespace, multiple doublings, different discount values.
  // Doubling collapses regardless of the whitespace between the two "off"s; whitespace BEFORE the
  // first "off" is a separate, un-observed concern this function doesn't attempt to fix.
  ["20%  off   off", "20%  off"],
  ["10% off  %", "10% off"],
  ["15%%", "15%"],
  ["15% %", "15%"],
  ["save 25% off% today", "save 25% off today"],
  ["use PROFPEPTIDE for 10% off off off", "use PROFPEPTIDE for 10% off"], // triple doubling
  // Must NOT touch a clean, already-correct string.
  ["save 10% off on your order", "save 10% off on your order"],
  ["99% purity", "99% purity"], // a legitimate percent mention unrelated to "off" — untouched
  ["Ipamorelin has a 99% purity standard, off the shelf", "Ipamorelin has a 99% purity standard, off the shelf"],
];

let failures = 0;
for (const [input, expected] of cases) {
  const actual = normalizeDiscountFormatting(input);
  try {
    assert.equal(actual, expected);
    console.log(`  ✓ ${JSON.stringify(input)} -> ${JSON.stringify(actual)}`);
  } catch {
    failures += 1;
    console.error(`  ✗ ${JSON.stringify(input)} -> got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`);
  }
}

if (failures > 0) {
  console.error(`\ntest:chat-format FAILED — ${failures}/${cases.length} case(s) failed.`);
  process.exit(1);
}
console.log(`\ntest:chat-format OK — ${cases.length}/${cases.length} cases passed.`);
