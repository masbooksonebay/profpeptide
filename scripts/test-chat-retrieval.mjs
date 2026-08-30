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
const { searchCorpus, retrieveForChat, isRegulatoryQuery } = load("src/lib/chat-retrieval.ts", {
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

// ── retrieveForChat: the news slot the route actually injects ────────────────────────────────
// searchCorpus above is the pure ranker. retrieveForChat adds one news page for regulatory
// questions, because a profile's regulatory line is a snapshot ("Category 2 in 2023" on BPC-157)
// and answering compounding questions from it alone is stale-but-plausible. These cases pin both
// halves: that news IS added when it should be, and that nothing else is disturbed when it
// shouldn't be.
let augFailures = 0;
const aug = (label, ok) => {
  console.log(`\n${ok ? "✓" : "✗"} ${label}`);
  if (!ok) augFailures += 1;
};
const cats = (q) => retrieveForChat(q, 2).map((h) => h.page.category);
const urls = (q) => retrieveForChat(q, 2).map((h) => h.page.url);

console.log("\n--- retrieveForChat (news slot) ---");
aug('"Can pharmacies compound BPC-157?" keeps the profile FIRST and adds news',
  urls("Can pharmacies compound BPC-157?")[0] === "/peptides/bpc-157" &&
  cats("Can pharmacies compound BPC-157?").includes("news"));
aug('"What did Eli Lilly sue over?" retrieves the lawsuits article',
  urls("What did Eli Lilly sue over?")[0] === "/news/lilly-retatrutide-lawsuits-ruo-sellers-2026");
aug('regulatory phrasings are detected', ["Is BPC-157 legal?", "Is retatrutide banned?", "Can pharmacies compound BPC-157?"].every(isRegulatoryQuery));
aug('pharmacology phrasings are NOT treated as regulatory',
  !["What is BPC-157 used for in research?", "What doses were used in retatrutide trials?", "semaglutide BPC-157 blend"].some(isRegulatoryQuery));
aug('non-regulatory queries get NO extra page (ranking untouched)',
  ["What is BPC-157 used for in research?", "semaglutide BPC-157 blend"].every((q) => retrieveForChat(q, 2).length === 2));
aug('the injected news page is the most RECENT of the comparable ones, not just top-scoring',
  (() => { const n = retrieveForChat("Can pharmacies compound BPC-157?", 2).find((h) => h.page.category === "news");
           return !!n && n.page.dateIso >= "2026-08-01"; })());
aug('every news page carries a date', corpus.generatedChatCorpus.filter((p) => p.category === "news").every((p) => p.date && p.dateIso));

const asserted = QUERIES.filter((x) => x.expectTop !== null).length;
if (failures > 0 || augFailures > 0) {
  console.error(`\ntest:chat-retrieval FAILED — ${failures}/${asserted} ranking quer(ies) wrong, ${augFailures} news-slot check(s) failed.`);
  process.exit(1);
}
console.log(`\ntest:chat-retrieval OK — ${asserted}/${asserted} asserted queries rank as expected; news-slot checks pass.`);
