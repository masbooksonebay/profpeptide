// scripts/test-chat-retrieval.mjs — retrieval regression probe for the AI chat.
//
// Prints the ranked hits src/lib/chat-retrieval.ts returns for a fixed query set, so a scoring
// change can be diffed before/after rather than trusted. Retrieval scoring is global — every query
// shares one function — so a fix aimed at one query class (e.g. "canonical page should outrank
// blends") can silently demote another (blend queries, vendor pages, FAQ pages). This probe exists
// to make that tradeoff visible.
//
// EXPECTATIONS are asserted where a query has one unambiguously right answer; queries where several
// pages are legitimately good (e.g. a "difference between X and Y" question, which the blend and
// comparison pages both answer well) are printed for eyeballing but not asserted, because pinning
// them would encode a preference the content doesn't actually have.
//
// Run: node scripts/test-chat-retrieval.mjs

import ts from "typescript";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function load(rel, shim = {}) {
  const src = readFileSync(join(root, rel), "utf8");
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const mod = { exports: {} };
  new Function("module", "exports", "require", outputText)(mod, mod.exports, (n) => shim[n] ?? {});
  return mod.exports;
}

const corpus = load("src/lib/chat-corpus.generated.ts");
const { searchCorpus } = load("src/lib/chat-retrieval.ts", {
  "./chat-corpus.generated": corpus,
  "./chat-corpus": {},
});

// expectTop: the URL that MUST rank #1. null = no assertion, print only.
const QUERIES = [
  // --- the defect this change targets ---
  { q: "What is BPC-157 used for in research?", expectTop: "/peptides/bpc-157" },
  // --- must not regress (worked before the change) ---
  { q: "What doses were used in retatrutide trials?", expectTop: "/peptides/retatrutide" },
  { q: "BPC-157", expectTop: "/peptides/bpc-157" },
  { q: "retatrutide", expectTop: "/peptides/retatrutide" },
  // --- blends/stacks MUST still win their own queries (the opposite-direction bug) ---
  { q: "semaglutide BPC-157 blend", expectTop: "/peptides/semaglutide-bpc-157" },
  { q: "KLOW", expectTop: "/peptides/klow" },
  { q: "wolverine stack", expectTop: "/peptides/wolverine-stack" },
  { q: "GLOW blend", expectTop: "/peptides/glow" },
  // --- vendor pages ---
  { q: "Athena Peptides discount code", expectTop: "/coupons/athena-peptides" },
  { q: "Swiss Chems testing", expectTop: "/coupons/swiss-chems" },
  { q: "Hydro Research COAs", expectTop: "/coupons/hydro-research" },
  // --- FAQ pages ---
  { q: "how often is BPC-157 dosed", expectTop: "/faq/how-often-is-bpc-157-dosed" },
  { q: "does TRT cause hair loss", expectTop: "/faq/does-trt-cause-hair-loss" },
  // --- legitimately ambiguous: print, don't assert ---
  { q: "What's the difference between CJC-1295 and ipamorelin?", expectTop: null },
  { q: "which vendors publish batch COAs", expectTop: null },
];

let failures = 0;
for (const { q, expectTop } of QUERIES) {
  const hits = searchCorpus(q, 3);
  const top = hits[0]?.page.url ?? "(none)";
  const ok = expectTop === null || top === expectTop;
  if (!ok) failures += 1;
  const mark = expectTop === null ? "·" : ok ? "✓" : "✗";
  console.log(`\n${mark} ${q}`);
  for (const h of hits) {
    console.log(`     ${String(h.score).padStart(4)}  ${h.page.url}  [${h.page.category}]`);
  }
  if (!ok) console.log(`     EXPECTED TOP: ${expectTop}`);
}

const asserted = QUERIES.filter((x) => x.expectTop !== null).length;
if (failures > 0) {
  console.error(`\ntest:chat-retrieval FAILED — ${failures}/${asserted} asserted quer(ies) ranked wrong.`);
  process.exit(1);
}
console.log(`\ntest:chat-retrieval OK — ${asserted}/${asserted} asserted queries rank as expected.`);
