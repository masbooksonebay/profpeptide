// scripts/test-chat-linkify.mjs — allowlist/href tests for src/lib/chat-linkify.ts.
//
// This is a SECURITY boundary, not a formatting nicety: the text it parses is model output, and
// retrieved page content flows through the model. These cases pin both halves of the guarantee —
// what gets linked (the allowlist) and, more importantly, where a link can point (the rebuilt href).
//
// Run: node scripts/test-chat-linkify.mjs

import assert from "node:assert/strict";
import ts from "typescript";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "src/lib/chat-linkify.ts"), "utf8");
const { outputText } = ts.transpileModule(src, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
});
const mod = { exports: {} };
new Function("module", "exports", outputText)(mod, mod.exports);
const { linkifyPpUrls } = mod.exports;

const links = (t) => linkifyPpUrls(t).filter((s) => s.type === "link");
const text = (t) => linkifyPpUrls(t).map((s) => s.value).join("");

const cases = [
  // --- the core case: a cited PP URL becomes one link, href rebuilt onto the canonical origin ---
  ["bare host+path", () => {
    const l = links("See profpeptide.com/peptides/bpc-157 for details.");
    assert.equal(l.length, 1);
    assert.equal(l[0].href, "https://profpeptide.com/peptides/bpc-157");
    assert.equal(l[0].value, "profpeptide.com/peptides/bpc-157");
  }],
  ["with scheme", () => {
    assert.equal(links("https://profpeptide.com/coupons/hydro-research")[0].href,
      "https://profpeptide.com/coupons/hydro-research");
  }],
  ["with www", () => {
    assert.equal(links("www.profpeptide.com/peptides/klow")[0].href,
      "https://profpeptide.com/peptides/klow");
  }],
  ["scheme + www", () => {
    assert.equal(links("https://www.profpeptide.com/faq")[0].href, "https://profpeptide.com/faq");
  }],
  ["bare host, no path", () => {
    assert.equal(links("Visit profpeptide.com today")[0].href, "https://profpeptide.com");
  }],
  ["uppercase", () => {
    assert.equal(links("PROFPEPTIDE.COM/Peptides/BPC-157")[0].href,
      "https://profpeptide.com/Peptides/BPC-157");
  }],

  // --- trailing punctuation must NOT be swallowed into the href ---
  ["trailing period", () => {
    const l = links("Read profpeptide.com/peptides/bpc-157.");
    assert.equal(l[0].href, "https://profpeptide.com/peptides/bpc-157");
    assert.equal(l[0].value, "profpeptide.com/peptides/bpc-157");
  }],
  ["trailing comma", () => {
    assert.equal(links("profpeptide.com/peptides/tb-500, and more")[0].href,
      "https://profpeptide.com/peptides/tb-500");
  }],
  ["parenthesised", () => {
    assert.equal(links("(see profpeptide.com/peptides/glow)")[0].href,
      "https://profpeptide.com/peptides/glow");
  }],
  ["balanced parens in path survive", () => {
    assert.equal(links("profpeptide.com/a(b)")[0].href, "https://profpeptide.com/a(b)");
  }],
  ["period + space + next sentence", () => {
    assert.equal(text("Go to profpeptide.com/x. Next."), "Go to profpeptide.com/x. Next.");
  }],

  // --- 🔒 ALLOWLIST: everything else stays plain text ---
  ["other domain untouched", () => assert.equal(links("Tested by janoshik.com and finnrick.com").length, 0)],
  ["vendor site untouched", () => assert.equal(links("Buy at https://swisschems.is/product/x").length, 0)],
  ["lookalike suffix host", () => assert.equal(links("profpeptide.com.evil.example/steal").length, 0)],
  ["lookalike prefix host", () => assert.equal(links("notprofpeptide.com/x").length, 0)],
  ["subdomain not vouched for", () => assert.equal(links("evil.profpeptide.com.co/x").length, 0)],
  ["hyphen-prefixed host", () => assert.equal(links("fake-profpeptide.com/x").length, 0)],
  ["email-shaped", () => assert.equal(links("mail user@profpeptide.com now").length, 0)],

  // --- 🔒 href can only ever point at PP, even for adversarial shapes ---
  ["userinfo trick cannot retarget", () => {
    const l = links("https://profpeptide.com@evil.example/steal");
    assert.equal(l.length, 1);
    assert.equal(l[0].href, "https://profpeptide.com"); // NOT evil.example
  }],
  ["every produced href is same-origin", () => {
    const probe = [
      "profpeptide.com/a", "https://www.profpeptide.com/b?x=1#y", "PROFPEPTIDE.COM",
      "profpeptide.com/c) and profpeptide.com/d.", "profpeptide.com@evil.example",
    ].join(" ");
    for (const l of links(probe)) {
      assert.ok(l.href === "https://profpeptide.com" || l.href.startsWith("https://profpeptide.com/")
        || l.href.startsWith("https://profpeptide.com?") || l.href.startsWith("https://profpeptide.com#"),
        `href escaped the origin: ${l.href}`);
    }
  }],

  // --- lossless: text always reassembles exactly (nothing dropped or duplicated) ---
  ["lossless reassembly", () => {
    for (const t of [
      "", "no urls here", "profpeptide.com", "a profpeptide.com/x b janoshik.com c",
      "profpeptide.com/x, profpeptide.com/y. done", "notprofpeptide.com/x and profpeptide.com/z!",
      "line1\nprofpeptide.com/p\nline3",
    ]) assert.equal(text(t), t);
  }],
  ["multiple links in one answer", () => {
    const l = links("Compare profpeptide.com/peptides/bpc-157 and profpeptide.com/peptides/tb-500.");
    assert.equal(l.length, 2);
    assert.equal(l[1].href, "https://profpeptide.com/peptides/tb-500");
  }],

  // --- streaming: a partial URL still parses (it re-parses each render as more arrives) ---
  ["partial url mid-stream", () => {
    assert.equal(links("See profpeptide.com/pept")[0].href, "https://profpeptide.com/pept");
  }],
];

let failures = 0;
for (const [name, fn] of cases) {
  try { fn(); console.log(`  ✓ ${name}`); }
  catch (e) { failures += 1; console.error(`  ✗ ${name}: ${e.message}`); }
}
if (failures > 0) {
  console.error(`\ntest:chat-linkify FAILED — ${failures}/${cases.length} case(s) failed.`);
  process.exit(1);
}
console.log(`\ntest:chat-linkify OK — ${cases.length}/${cases.length} cases passed.`);
