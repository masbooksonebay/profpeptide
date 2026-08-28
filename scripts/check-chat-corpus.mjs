// scripts/check-chat-corpus.mjs — fails the build if the committed AI-chat corpus is STALE.
//
// The corpus (src/lib/chat-corpus.generated.ts) is derived from the site's own page.tsx content
// and src/data/faqQuestions.ts by scripts/gen-chat-corpus.mjs. This guard re-runs that derivation
// and byte-compares it to the committed file: if a profile's prose changes (e.g. a future audit
// rewrites a dosing sentence), a coupon page's copy changes, or a page is added/removed, the
// regenerated output differs and this FAILS — the exact hardcoded-value drift class the profile
// audits exist to prevent, now extended to the retrieval corpus. FAILS, not warns: a stale corpus
// is a chat that can quote a sentence the pages no longer say.
//
// It also asserts one invariant explicitly: NO page in the corpus may contain a residual coupon
// code or dollar price (the AST + regex redaction in the generator should already have caught it —
// this is the belt-and-suspenders check that nothing slipped through).
//
// Run:  node scripts/check-chat-corpus.mjs   (also in `npm run build`)
// Exit: 0 = fresh and clean; 1 = stale, or a redaction leaked.

import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildCorpus, serialize } from "./gen-chat-corpus.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (...p) => join(root, ...p);
const GEN = P("src/lib/chat-corpus.generated.ts");

const failures = [];

// 1. Staleness: regenerated output must equal the committed file exactly.
const pages = buildCorpus();
const fresh = serialize(pages);
const committed = existsSync(GEN) ? readFileSync(GEN, "utf8") : "";
if (fresh !== committed) {
  failures.push(
    "src/lib/chat-corpus.generated.ts is STALE — a source page or faqQuestions.ts changed but the " +
      "corpus was not regenerated. Fix: `node scripts/gen-chat-corpus.mjs` and commit the result."
  );
}

// 2. Leak check: no page's extracted text may contain a real coupon code or dollar price. The
// generator redacts these at build time; this re-scans the COMMITTED file as an independent check
// (same code/price pattern family, applied to the final artifact rather than trusted from the
// generator's own accounting).
const CODE_RE = /\bPROF[A-Z0-9]{2,}\b/g;
const PRICE_RE = /\$\d[\d,]*(?:\.\d{1,2})?/g;
for (const p of pages) {
  const codeHit = p.fullText.match(CODE_RE);
  const priceHit = p.fullText.match(PRICE_RE);
  if (codeHit) failures.push(`${p.url} — corpus text still contains a code-shaped token: ${codeHit.join(", ")}`);
  if (priceHit) failures.push(`${p.url} — corpus text still contains a dollar amount: ${priceHit.join(", ")}`);
}

if (failures.length) {
  console.error("check:chat-corpus FAILED:\n");
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}

const totalTokens = pages.reduce((s, p) => s + p.tokenEstimate, 0);
const totalRedactions = pages.reduce((s, p) => s + p.redactions, 0);
console.log(
  `check:chat-corpus OK — ${pages.length} pages, ${totalTokens.toLocaleString()} tokens (est.), ` +
    `${totalRedactions} redaction(s), fresh and clean.`
);
