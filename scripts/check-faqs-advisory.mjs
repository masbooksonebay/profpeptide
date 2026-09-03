// scripts/check-faqs-advisory.mjs — guards the FAQ-accordion blind spot.
//
// WHY THIS EXISTS: advisory language in FAQ accordions has escaped SEVEN separate content sweeps —
// igf-1-lr3 (twice), bpc-157, the 54 coupon pages, retatrutide (twice), the three GLP-1s in fix 5A,
// and dsip + igf-1-lr3 again in 5B. Every instance was found by accident, after the visible body
// prose had been declared clean. The cause is structural, not carelessness: an answer lives inside a
// data array or a collapsed <details>, so anyone reading the page as rendered prose — or grepping
// the body copy — does not see it. A surface that is invisible by construction needs a check, not a
// reminder.
//
// 🔒 THE LINE IT ENFORCES, the same one fixes 4, 5A and 5B applied:
//     PP REPORTS practice. PP does not INSTRUCT readers.
//       "Do not double-dose"                   -> a command from the site        ❌
//       "The convention is not to double-dose" -> a report of what is practised  ✅
//       "Start low and titrate up"                                               ❌
//       "The reported practice is to start at the low end"                       ✅
// Same information either way; only one has the site telling someone what to do.
//
// THE PATTERNS ARE DERIVED FROM THE ACTUAL FIXES, not from guesswork — every verb and phrase below
// was read out of the removed lines of 654c33e (fix 4), ffc502e (fix 5A) and d2eb1f1 (fix 5B).
//
// ⚠️ FALSE POSITIVES ARE THE FAILURE MODE. A guard that cries wolf gets disabled, and then the
// surface is unguarded AND believed guarded — worse than no guard. Everything excluded below is
// excluded for a reason recorded beside it.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// ── what counts as instructing ────────────────────────────────────────────────────────────────
// Sentence-initial imperatives. The verb list is exactly the set that appears in the fixes:
//   Use / Stay  (site rotation)      Take / Start / Titrate  (dosing)
//   Avoid / Drink / Skip / Resume    Increase / Decrease / Reduce / Hold / Split / Stop / Wait
// Deliberately ABSENT: Store, Refrigerate, Keep, Swab, Swirl, Shake, Discard, Mix, Inject, Reconstitute
// — mechanical handling is legitimately imperative and is NOT dosing advice (see EXCLUSIONS).
// Dose / Cycle / Run were in an earlier draft and are REMOVED: they are far more often nouns than
// imperatives on this site ("Dose frequency is governed by…", "Cycle length is 8-12 weeks"), and
// semax's "Dose frequency…" was a live false positive caught while building this. They were also
// guesses — no fix in 654c33e/ffc502e/d2eb1f1 involved them. Every verb below did appear in a fix.
const IMPERATIVE_VERBS =
  "Use|Stay|Take|Start|Titrate|Avoid|Drink|Skip|Resume|Increase|Decrease|Reduce|Hold|Split|Stop|Wait";

// A sentence-initial imperative NOT followed by a preposition. The preposition guard is what keeps
// noun phrases out: pt-141's "Use in men, postmenopausal women… is OFF-LABEL" is a NOUN ("Use"),
// not a command, and it was a real false positive in the 5B pass. An imperative takes an object
// ("Use a different site"); the noun takes a preposition ("Use in men").
const PREPOSITIONS = "in|of|for|with|during|as|by|among|amongst|across|under|over|within|per|on|at|from";

const PATTERNS = [
  {
    id: "imperative",
    re: new RegExp(`(?:^|[.!?]\\s+|\\u2014\\s+)(${IMPERATIVE_VERBS})\\s+(?!(?:${PREPOSITIONS})\\b)[a-z]`),
    why: "sentence-initial imperative — the site instructing the reader",
  },
  { id: "do-not", re: /\bDo not\s+(?!appear|show|exist|constitute|imply|equal|mean|require|guarantee|reflect|change|apply)[a-z]/, why: "\"Do not …\" — a command" },
  { id: "dont", re: /\bDon['\u2019]t\s+[a-z]/, why: "\"Don't …\" — a command" },
  { id: "you-should", re: /\byou (?:should|must|need to|ought to)\b/i, why: "second-person prescription" },
  { id: "should-be-verbed", re: /\bshould be (?:taken|used|dosed|injected|started|held|increased|reduced|avoided|split|cycled)\b/i, why: "prescription in the passive voice" },
  { id: "non-negotiable", re: /\bis non-negotiable\b/i, why: "unattributed authority claim" },
  { id: "standard-practice", re: /\bis (?:the )?standard practice\b/i, why: "unattributed authority claim — name whose practice, or attribute it" },
  { id: "best-to", re: /\b(?:find it |it is |it's )?best to (?:avoid|use|take|start|wait|skip|split)\b/i, why: "soft prescription" },
  { id: "recommends", re: /\b(?:we|the protocol|the site)\s+recommends?\b/i, why: "the site recommending" },
  { id: "take-as-remembered", re: /\btake as soon as remembered\b/i, why: "missed-dose instruction — report the practice instead" },
];

// ── exclusions, each with its reason ──────────────────────────────────────────────────────────
const EXCLUSIONS = [
  // The site-wide calculator CTA. Present on audited profiles; "your dose" here means "the dose you
  // are calculating", not a recommendation. Flagged wrongly in the 5A survey.
  { id: "calculator-cta", re: /Need to calculate your dose/i },
  // Mechanical handling. Legitimately imperative and not dosing advice — an instruction to swab a
  // stopper is not the site telling someone what to put in their body.
  { id: "mechanical-handling", re: /\b(?:swab|swirl|shake|refrigerat|reconstitut|stopper|lyophiliz|vial|syringe|bacteriostatic|alcohol wipe|original carton|protect from light|freeze|thaw)\b/i },
  // Already attributed to a named trial, label, or approved product — that is the fix, not the bug.
  { id: "attributed", re: /\b(?:TRIUMPH|SURMOUNT|SURPASS|SELECT|REDEFINE|STEP\s?\d|Phase\s?[123]|Ozempic|Wegovy|Mounjaro|Zepbound|prescribing information|the label|FDA label|approved label|trial protocol|the trials|per the label)\b/ },
  // Already reframed as reported practice — the shape fixes 4/5A/5B converged on.
  { id: "reported-as-convention", re: /\b(?:convention|conventionally|commonly reported|reported practice|the practice users report|is the community|no approved label|the literature|studies typically)\b/i },
  // Commerce mechanics. "Use code X at checkout", "Apply the code in the cart" — telling a reader how
  // to redeem a discount is not telling them what to put in their body. The standard this guard
  // enforces is about COMPOUND USE, and stretching it over checkout copy would flag all 54 coupon
  // pages on day one, which is how a guard gets switched off.
  { id: "commerce-mechanics", re: /\b(?:code|coupon|checkout|cart|discount|order|shipping|at\s+checkout|promo)\b/i },
  // Site navigation and tooling instructions — "Use the dosage calculator", "See the price grid".
  { id: "site-tooling", re: /\b(?:calculator|price grid|search|the hub|this page|the profile|our .{2,20} page)\b/i },
  // Quoting someone else's protocol by name is reporting, not instructing.
  { id: "named-third-party-protocol", re: /\b(?:Huberman|Russian protocol|the .{2,24} protocol) (?:recommends|calls for|uses)\b/i },
];

// ── extraction: BOTH accordion shapes ─────────────────────────────────────────────────────────
// Shape A: `const faqs = [ { q: "...", a: "..." }, … ]` — profiles, comparisons, guides (134 pages)
// Shape B: inline `<FAQItem q="…" a="…" />` — the 54 coupon pages, which have no faqs array at all.
// The Phase 2 corpus generator had to handle both for the same reason; missing shape B is precisely
// how the 54 coupon pages slipped a previous sweep.
function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .split("\n")
    .map((l) => (/^\s*\/\//.test(l) ? "" : l))
    .join("\n");
}

function unescape(s) {
  return s
    .replace(/\\n/g, " ")
    .replace(/\\"/g, '"')
    .replace(/&mdash;/g, "\u2014")
    .replace(/&ndash;/g, "\u2013")
    .replace(/&rsquo;/g, "\u2019")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function extractAnswers(src) {
  const s = stripComments(src);
  const out = [];
  // Shape A
  for (const block of s.matchAll(/const faqs\s*=\s*\[([\s\S]*?)\n\];/g)) {
    for (const m of block[1].matchAll(/\{\s*q:\s*(["'`])((?:(?!\1)[\s\S])*?)\1\s*,\s*a:\s*(["'`])((?:(?!\3)[\s\S])*?)\3/g)) {
      out.push({ q: unescape(m[2]), a: unescape(m[4]), shape: "faqs[]" });
    }
  }
  // Shape B — attribute order is q then a in every current call site; both quoted and `${}` template
  for (const m of s.matchAll(/<FAQItem\s+q=(["'`])((?:(?!\1)[\s\S])*?)\1\s*a=\{?(["'`])((?:(?!\3)[\s\S])*?)\3/g)) {
    out.push({ q: unescape(m[2]), a: unescape(m[4]), shape: "<FAQItem>" });
  }
  return out;
}

function sentences(text) {
  return text.split(/(?<=[.!?])\s+/).map((x) => x.trim()).filter((x) => x.length > 12);
}

function pageFiles() {
  const out = [];
  const walk = (dir) => {
    if (!existsSync(dir)) return;
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === "page.tsx") out.push(p);
    }
  };
  walk(join(root, "src/app"));
  return out.sort();
}

const findings = [];
let scannedPages = 0;
let scannedAnswers = 0;

// 🔴 SCOPE: /supplements is EXCLUDED, and this is a known backlog rather than a judgment that the
// language there is fine. Fixes 2-5 only ever touched src/app/peptides — the supplement profiles
// have never been through the audit, and this guard finds 34 genuinely advisory FAQ sentences across
// them ("Don't take melatonin in the middle of the night", "Take pre-bed if using for sleep").
// Wiring those into a blocking build today would fail it on day one, and a guard that has to be
// disabled to ship is worse than none. The exclusion is the honest way to protect the surfaces that
// ARE clean while naming the ones that are not.
// TO REMOVE THIS: run the fix-5 treatment over src/app/supplements, then delete these two lines.
const OUT_OF_SCOPE = [/^src\/app\/supplements\//];

for (const file of pageFiles()) {
  const rel = file.replace(root + "/", "");
  if (OUT_OF_SCOPE.some((re) => re.test(rel))) continue;
  const src = readFileSync(file, "utf8");
  if (!/const faqs\s*=|<FAQItem/.test(src)) continue;
  const answers = extractAnswers(src);
  if (answers.length === 0) continue;
  scannedPages += 1;
  for (const { q, a, shape } of answers) {
    scannedAnswers += 1;
    for (const sent of sentences(a)) {
      if (EXCLUSIONS.some((x) => x.re.test(sent))) continue;
      const hit = PATTERNS.find((p) => p.re.test(sent));
      if (hit) {
        findings.push({
          file: file.replace(root + "/", ""),
          shape,
          q: q.slice(0, 70),
          sentence: sent.slice(0, 150),
          why: hit.why,
          id: hit.id,
        });
      }
    }
  }
}

if (findings.length > 0) {
  console.error("check:faqs-advisory FAILED:\n");
  console.error(
    `  The site REPORTS practice; it does not INSTRUCT readers. ${findings.length} FAQ answer sentence(s)\n` +
      "  read as instructions. Reframe rather than delete — the information is worth keeping:\n" +
      '    "Do not double-dose"  ->  "The convention is not to double-dose"\n' +
      '    "Start low and titrate up"  ->  "The reported practice is to start at the low end"\n'
  );
  for (const f of findings) {
    console.error(`  \u2717 ${f.file}  [${f.shape}]`);
    console.error(`      Q: ${f.q}`);
    console.error(`      ${f.sentence}`);
    console.error(`      \u2192 ${f.why} (${f.id})\n`);
  }
  process.exit(1);
}

// ── TRT-slug drift guard ──────────────────────────────────────────────────────────────────────
// src/data/trt-faq-slugs.ts hand-maintains the category:"trt" slug list rather than importing
// faqQuestions.ts (2,500+ lines) into the client bundle FooterDisclaimer ships on every page \u2014 see
// that file's own header. A hand-maintained list can silently drift from the real data (a TRT page
// added/removed/recategorised without updating it), which would leave the wrong disclaimer on a
// page again \u2014 exactly the bug this whole fix exists to close. Asserted here rather than in a new
// script: this file already reads faqQuestions.ts as raw text for the shape-A/B extraction above.
const faqSrc = readFileSync(join(root, "src/data/faqQuestions.ts"), "utf8");
const realTrtSlugs = new Set();
for (const m of stripComments(faqSrc).matchAll(/slug:\s*"([a-z0-9-]+)"[\s\S]{0,400}?category:\s*"trt"/g)) {
  realTrtSlugs.add(m[1]);
}
const trtSlugsSrc = readFileSync(join(root, "src/data/trt-faq-slugs.ts"), "utf8");
const hardcodedTrtSlugs = new Set([...stripComments(trtSlugsSrc).matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]));

const missingFromHardcoded = [...realTrtSlugs].filter((s) => !hardcodedTrtSlugs.has(s));
const staleInHardcoded = [...hardcodedTrtSlugs].filter((s) => !realTrtSlugs.has(s));

if (missingFromHardcoded.length || staleInHardcoded.length) {
  console.error("check:faqs-advisory FAILED \u2014 src/data/trt-faq-slugs.ts has drifted from faqQuestions.ts:\n");
  if (missingFromHardcoded.length) {
    console.error(`  category:"trt" in faqQuestions.ts but MISSING from trt-faq-slugs.ts (would render RUO/"not for human use" wrongly):`);
    for (const s of missingFromHardcoded) console.error(`    + ${s}`);
  }
  if (staleInHardcoded.length) {
    console.error(`  in trt-faq-slugs.ts but NOT category:"trt" in faqQuestions.ts (would wrongly SUPPRESS correct RUO framing):`);
    for (const s of staleInHardcoded) console.error(`    - ${s}`);
  }
  console.error("\n  Fix: update src/data/trt-faq-slugs.ts to match the current category:\"trt\" set exactly.");
  process.exit(1);
}

console.log(
  `check:faqs-advisory OK \u2014 ${scannedAnswers} FAQ answer(s) across ${scannedPages} page(s) (both faqs[] and <FAQItem> shapes); none instruct the reader. TRT slug list matches faqQuestions.ts (${realTrtSlugs.size} slugs).`
);
