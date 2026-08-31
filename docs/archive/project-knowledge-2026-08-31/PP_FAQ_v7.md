# PP_FAQ — v7
**Status:** ACTIVE. The governing doc for the FAQ section. Supersedes v4 and all earlier versions; PP_ANSWERS v1–v2 remain research records.
**Date:** 2026-08-31 — v7 records the BUILT state (7 categories live, 42+ URLs) and the locked presentation rules. Prior: v6 — v6 adds §1b (WHY question pages, not profiles — the user-behaviour reasoning, recorded so Mark stops having to explain it) and §2b (the category × compound matrix: the three-level cluster, locked).

---

## 1. 🔴 WHAT THIS PROJECT IS — Mark's own framing

**People type specific questions into Google. PP provides the answer to that specific question — one comprehensive answer, one page, one click — so they don't have to scour Reddit threads to assemble it themselves.**

That's the entire project. Everything else in this doc is implementation.

### The three sentences that define it

1. **We answer the specific question asked** — not a comprehensive guide handed to someone who asked one thing.
2. **The answer itself is comprehensive** — complete enough that the reader never needs Reddit. Comprehensive *answer*, narrow *question*.
3. **We report, we don't advise** — what studies and trials used, what's been reported. Never personal advice.

### What this is NOT

- ❌ Not a content-gap project. Whether PP "already covers" a topic somewhere is not the question — **whether PP has a page matching the query is.**
- ❌ Not a guide section. Guides are the deep resource a question page links to. Different shape, different job.
- ❌ Not blocked by cannibalization worries. **Mark, explicitly: the profiles aren't getting clicks anyway.** A question page that wins the query costs nothing that's currently being earned. Don't re-raise this.
- ❌ Not a support FAQ. The existing 21-question /faq page is adjacent, but the section is about peptide/TRT questions people google.

---

## 1b. 🔒 WHY QUESTION PAGES AND NOT PROFILES — recorded so it stops being re-explained

**Mark has now explained this three times. It is written here so it never needs a fourth.**

### The problem
People google specific questions. **They do not find PP's profiles** — and when they occasionally do, the profile is the wrong artifact for the moment.

### The reasoning, in full
1. **Someone with a specific question wants a specific answer.** They typed six words into Google. They did not ask for a compound monograph.
2. **A long profile makes them bounce.** Landing on a 3,000-word reference page when you asked "how much bac water for retatrutide" means scanning, scrolling, failing to find the paragraph, and leaving. That bounce is a ranking signal *against* the page, so the profile doesn't rank for the question, which is where this started.
3. **A focused page that answers the question, then offers the profile, is better on both counts** — better for the reader (their question is answered in the first 40–60 words) and better for search (the page matches the query, satisfies the intent, and the reader who wants more clicks *deeper* rather than bouncing).
4. **The profile is not the loser in this.** It becomes the destination for readers who have already been served and want depth. That is a warmer click than a cold search landing.

### 🔴 CANNIBALIZATION IS SETTLED — DO NOT RE-RAISE IT
Recorded in v5 and re-raised anyway on 2026-08-30, which is why it is being restated more forcefully:

**The profiles are not getting the clicks. A question page that wins a query costs nothing that is currently being earned.**

The only real duplication rule — and it is about *text*, not about page count:
🔒 **Spoke and profile must not share paragraphs.** Different text, spoke links to profile, profile links to spoke. Two pages covering the same subject from different angles is a topical cluster; two pages carrying the same paragraphs is cannibalization. **The rule is the text, not the topic.**

Same rule as the hub accordion vs the spoke: hub carries a short summary in different words, spoke carries the answer.

---

## 2b. 🔒 THE STRUCTURE — category × compound matrix (locked 2026-08-30)

**Three levels. This is the shape.**

```
/faq                        →  directory of categories
  └ category page           →  in-depth general answer + the compound list
      └ per-compound spoke  →  the specific answer for that compound
```

### The categories
Mirroring the question types people actually google, and aligned to what the profile TOCs already establish so the site's two navigation systems use the same vocabulary:

| # | Category | Spokes |
|---|---|---|
| 1 | **What are research peptides** | General/definitional questions. Few or no per-compound spokes |
| 2 | **What are peptides used for / tested for** | One per compound — "what is retatrutide tested for" |
| 3 | **How to reconstitute peptides** | One per compound — "how much bac water for retatrutide" |
| 4 | **How are peptides dosed** | One per compound — "how is retatrutide dosed in research" |
| 5 | **What are the side effects** | One per compound |
| 6 | **Legality & regulation** | Built 2026-08-30 — `/faq/are-research-peptides-legal` is the pilot spoke |

### 🔒 The rules that make it work

**Every category page is a real page, not a list of links.** It answers the general question in depth — "how are peptides dosed" as a concept — and *then* lists the compounds. A dropdown containing 64 links is a directory, not a page that can rank.

**Per-compound spokes are built where the compound can support one.** ⚠️ "What are retatrutide's side effects" has trial data behind it. "What are DSIP's side effects" may not. **A category that ships 20 strong pages and 44 thin ones dilutes the whole cluster.** Build where the profile can actually carry it; leave the rest to the profile.

**Scale, stated honestly:** categories 2–5 at 64 compounds is ~256 spokes at the theoretical maximum. That is the correct long-term shape and the per-compound search demand is real — but it is built compound-by-compound on evidence, never generated wholesale.

### 🔒 BUILD ORDER — locked
1. **The general category pages first** (the six above).
2. **Then one retatrutide spoke under each category**, as the pilot set.
3. **Then roll**, compound by compound, where the supporting content exists.

Retatrutide already has two of them: `/faq/how-much-bac-water-for-retatrutide` and `/faq/how-is-retatrutide-dosed-in-research`.

### ⚠️ Before building the categories
Read the actual **"On this page" TOCs on the peptide profiles** and name the categories to match that vocabulary. Two navigation systems using near-synonyms for the same thing is drift that compounds.

---

## 2. THE SHAPE — locked

**One question → one page.**

| Element | Rule |
|---|---|
| **URL** | Question form: `/faq/how-often-is-retatrutide-dosed` |
| **Title + H1** | Mirror the question as typed — the salience lesson from the coupon pages, proven there, applies here |
| **Opening** | **The answer, in the first 40–60 words.** No preamble. This is what wins snippets and AI Overview citations |
| **Body** | The comprehensive version: what trials used, what's reported, the details that would otherwise take a Reddit dig |
| **Handoff** | Link to the canonical page — the compound profile, the guide, the calculator — for depth beyond the question |
| **Inbound links** | 🔴 Every question page gets linked FROM the canonical pages it relates to — see §4b. A page nothing links to is invisible to Google regardless of quality |
| **Meta description** | 🔴 Carries the SPECIFIC FIGURES — see §4b. Specificity is the click incentive |
| **Schema** | FAQPage/QAPage JSON-LD **derived from the same source as the visible text** — never a hand-maintained second copy (§5) |

**Example — "how often do you take reta":**
`/faq/how-often-is-retatrutide-dosed` answers with what the Phase 2 trial protocols used (weekly subcutaneous dosing, the titration schedule), notes it's what studies report rather than a recommendation, and links to `/peptides/retatrutide` for the full profile.

**Dosing questions are IN SCOPE.** PP profiles already carry reported trial dosing. "What dose did trials use" is reportable; "what should I take" is not. The line is personal advice, not the topic.

---

## 3. WHERE IT LIVES

- **Nav label: FAQ**, between Peptides and Vendors. (Mark's call. "Answers"/"Q&A"/"Research" considered and dropped — familiarity wins, and §1's insight is that most visitors arrive at a page from Google, not through the nav.)
- **Hub: the existing /faq page** — it keeps its 21 brief answers and becomes the pillar linking to question pages. Brief answer inline, link for depth. Don't gut it.

### 🔒 The hub format — shipped 2026-08-24, refined 2026-08-25

The hub is: the general Q&A accordions at the top → an **"In-depth answers"** section below them (one card per question page: question, one-line description, "Full answer →") → the "Still have questions?" cross-links block.

**As the section grows:** group the in-depth cards by topic cluster (injection basics, dosing, side effects) once there are enough to warrant it. One card looks sparse; that resolves itself with volume.

🔒 **The inline-link rule (Mark-approved 2026-08-25):** when a brief accordion answer and a question page cover the SAME question, the "Full answer →" link goes **inside the accordion answer as well** — not only in the In-depth section. A reader who expands the brief answer must not have to discover a separate section to find the full page. The needle pilot doesn't hit this (its brief entry IS the in-depth card); the first reta-class page will, since it overlaps existing accordion content. Apply from page 2 onward wherever overlap exists.

**URL pattern settled:** `/faq/question-form-slug` is correct for SEO. Path words are a minor factor at most — the slug does the descriptive work, and a consistent `/faq/*` section aids site-structure understanding and lets GSC measure the section by path filter. Sectioned paths are the industry norm (Healthline `/health/*`, GoodRx `/conditions/*`). Do not revisit.
- **Pages: `/faq/[slug]`** — routing doesn't exist yet; audit says trivial (static route, no children, no conflict). ⚠️ Every new route needs its OG image pair or `check:og-routes` fails — Crush, Treasure Coast and Modern Aminos all shipped without one.

---

## 4. BUILD ORDER AND STATE — updated 2026-08-25

**Corrected order** (v2's original order put compound questions second; the data said otherwise — reconstitution had 60 impressions and the only clicks, and finishing the injection cluster built topical authority before opening a new class):

| # | Cluster | State |
|---|---|---|
| 1 | Needle cluster (186 impr) | ✅ LIVE — 2 pages |
| 2 | Reconstitution / bac water (60 impr, the clicks cluster) | ✅ LIVE |
| 3 | Compound dosing | ✅ LIVE — 6 pages (reta, tirz, sema, CJC/Ipa, BPC-157, TB-500) |
| 4 | Side effects (69 impr) | ✅ LIVE — 3 pages, 3 shapes (TB4 thin-data · IGF-1 LR3 hybrid · KLOW per-component) |
| 5 | TRT questions | ✅ LIVE — 4 pages (cypionate, enanthate, subq, timeline) |
| — | Comparisons | Stay on /compare; diagnose suppression separately |

🔴 **THE BUILD IS COMPLETE — SIXTEEN PAGES LIVE as of `37006d4`.** The project is now in flywheel mode: indexing (16 pages, zero requests, gated on the CINC/GSC tab), measurement (AI Overview citations + GSC presence, ~2-wk lag; the needle cluster is the early indicator), the profile audit (§5), and incremental pages as new googled questions surface (follistatin-344 side effects is the largest unbuilt query at ~4 impressions).

### 🔒 THE TRT CLASS RULES (proven across 4 pages)
- **Sourcing = named primary documents fetched directly** — FDA labels (DailyMed), clinical guidelines (Endocrine Society 2018, Bhasin JCEM 103(5):1715 Table 5), journal papers (Saad 2011 EJE; AJHP 2018 SC-vs-IM) — every claim attributed by name. No site profile exists; no community practice, ever.
- **NO whereToBuy — hard rule.** Schedule III prescription drug; zero vendor implication. The PageDisclaimer affiliate line auto-suppresses when whereToBuy is absent (guard shipped at `07659ad`).
- **Handoff = /app** (level curves), not a profile.
- **Timelines and effects are reported findings, never promises** — the timeline page carries a "how to read these numbers" section.
- 🔴 **Class rationales don't transfer between compounds** — the enanthate lesson: its label cites a 10–100 min half-life + depot absorption, NOT cypionate's ~8-day figure. Each compound's own documents speak; carrying a sibling's rationale is fabrication. (The same lesson as the evidence split, at document level.)
- The footer's "Not for human consumption" clause on TRT pages is a NOTED open item — global chrome, Mark's legal-wording call.

### 🔒 SEARCH BOUNDARY MECHANISM — alias, not tags
Misrouted bare compound-identity forms get **token aliases mapping to canonical** ("igf1→igf-1", parallel to "tb4→tb-500") — never tag surgery. A page whose title contains the compound name will always fuzzy-match identity queries; tags decorate one page, aliases fix the query class. Abbreviations ("test cyp", "test e") get NO tags and correctly return nothing.

### 🔴 THE EVIDENCE SPLIT — which template a compound gets

The dosing batch proved the reta template replicates **only where the profile carries genuine cited human-trial/label dosing.** Two shapes now exist:

- **Cited-protocol page** (reta, tirz, sema; CJC/Ipa by cited-PK *frequency* with amounts framed as convention): the lede reports the trial/label figures.
- **Honest no-protocol page** (BPC-157, TB-500): the lede states plainly that **no human trial established a dosing frequency and the circulating figures are community convention, not trial data** — then reports what the cited literature actually studied. 🔒 **Convention numbers are NAMED as existing but never printed as the answer.**

🔒 **Read the profile's citations FIRST; the citations decide the shape.** A dosing section without citation markers cannot source a cited-protocol page. Community-practice lines ("some users…", "standard practice is…", evening-injection habits) are excluded from FAQ pages in both shapes.

### 🔒 STANDING RULES, from the built pages

- **Profile→FAQ link pattern:** in the profile's dosing section, immediately after the paragraph the question answers: **"Common question: {question} →"** linking the FAQ page. Repeat per compound page.
- **Where to Buy (Mark, 2026-08-25):** every compound FAQ page ends with the pinned vendor trio — **amino-club → capstone-peptides → peptide-partners** — via `VendorHighlightBlock`'s per-render `pinSlugs` (profiles untouched; rates derive so temporary-rate reverts flow automatically). ⚠️ Pinning means Capstone renders even on compounds it has no price row for — its card is a coupon card, accepted ("for now" = deliberate curated set).
- **Hub format:** accordions (17, peptide/site only — supplement FAQs live on /supplements with their own single FAQPage) → In-depth answers cards → cross-links block. The inline-link rule (v3) stands: direct same-question overlap gets "Full answer →" inside the accordion; incidental mention doesn't.
- **Search boundary, proven nine times:** question phrasings surface the FAQ page; the bare compound name keeps the profile first. Verify per page at build.

---

## 4b. 🔒 RANKING AND THE CLICK — agreed 2026-08-24

Mark asked whether the plan was the best way to (1) rank and (2) earn the click. The agreed additions:

### Ranking — what's controllable beyond the page

**On-page (titles mirroring the query, answer-first) is necessary but mostly not sufficient — ranking is authority, and Reddit outranks PP on authority for these queries.** What PP controls:

1. **Internal linking is a FIRST-CLASS step, not an afterthought.** Every question page gets linked from the canonical pages it relates to — the compound profile, the price page, relevant coupon pages. The reta dosing question page is linked from `/peptides/retatrutide`, `/prices/retatrutide`, and coupon pages listing Retatrutide. 468 existing pages are the authority the new section borrows. **A question page shipped without its inbound links is not shipped.**
2. **The hub is load-bearing.** `/faq` links to every question page; question pages cross-link within their cluster (needle pages to each other, reta questions to each other).
3. **Expectations by cluster:** the needle cluster is winnable in weeks — PP already ranks 7–20. The reta-class compound questions are longer games. Don't judge the section on its slowest pages.

### The click — specificity is the incentive

**~89% of these queries carry an AI Overview; most searchers never click anything.** The click that remains is earned by signaling what the box didn't give. PP's edge over both Reddit and the Overview is NUMBERS.

🔒 **Meta descriptions and openings carry the specific figures.** Not "Learn about retatrutide dosing" but "Weekly subcutaneous injection, titrated 1–12 mg over 48 weeks, per Phase 2 trial protocols." A searcher who sees real figures knows the page contains the answer rather than SEO filler.

### The metric — citations, not sessions

**PP already earns AI Overview citations on coupon queries — that mechanism is proven on this domain.** The realistic distribution win for question pages is being the cited source inside the box, brand visible, even without the click. Judge the section on citations and presence; sessions will understate it (PP_ANSWERS v2 §2b).

---

## 5. STANDING FINDINGS — updated 2026-08-25

- ✅ **RESOLVED:** the hub schema drift (single source since `fb06f13`) · the needle→syringe alias hiding the pilot (additive expandQuery, `08ec753`) · the dynamic-OG 500s (`outputFileTracingIncludes` + `check:og-assets`, `cdffeb3` — /prices/* cards had been dead since Aug 6).
- **AI Overviews remain the environment:** ~89% of health queries carry one; CTR drops ~61%. **The metric is citations and presence, not sessions** (PP_ANSWERS v2 §2b). Judge the section accordingly.
- **PP emits FAQPage schema on ~135+ pages;** Google restricts FAQ rich results to gov/health domains — the schema's value is machine-readability for AI engines, not SERP decoration.
- 🆕 **The BPC-157 and TB-500 PROFILES carry uncited dosing sections** — convention figures, the Huberman protocol, a mcg/kg conversion, no citation markers. The FAQ pages route around it, but the profiles now make less-defensible claims than the FAQ pages sourced from them. **Queued: a profile content/consistency audit** (Mark, 2026-08-25: CC may audit profiles for content and consistency). Scope: citation coverage of dosing sections roster-wide, consistency of the "Common question" placement, and whether other profiles carry the same class of uncited convention content.

## 6. VOICE

- Report, attribute, cite: "Phase 2 trials used…", "The prescribing information states…", "Vendor states…" for unverifiable vendor facts.
- Never "you should". Never personal advice. RUO framing holds everywhere.
- Don't mention Reddit on the pages. The pitch is what PP has — cited sources, COA-verified vendor data, live prices — not what Reddit isn't.

---

## 📅 CHANGELOG

**v5 (2026-08-26):** BUILD COMPLETE — 16 pages at `37006d4`; flywheel mode. TRT class rules recorded (primary-doc sourcing, no-vendor hard rule, app handoff, disclaimer guard, the enanthate don't-transfer lesson). Alias-not-tags boundary mechanism. Side-effects shapes and TRT added to the state table.

**v4 (2026-08-25, second pass):** §4 rewritten — corrected build order with reasoning, nine-page state table, the evidence-split rule (citations decide the shape; honest no-protocol template recorded), standing rules from the built pages (Common-question pattern, Where-to-Buy pinned trio, hub format, search boundary). §5 findings resolved and the profile-audit queue item added (uncited dosing sections on BPC-157/TB-500 profiles).

**v3 (2026-08-25):** Hub format recorded as shipped. Inline-link rule added — overlapping accordion answers carry the "Full answer →" link inside the accordion, not only in the In-depth section; applies from page 2 onward. `/faq/` URL pattern settled as correct, marked do-not-revisit.

**v2 (2026-08-24):** §4b added — the agreed ranking and click strategy. Internal linking promoted to a first-class, ship-blocking step; specificity-in-the-snippet locked as the click incentive; citations-not-sessions confirmed as the metric. Two rows added to the §2 shape table.

**v1 (2026-08-24):** Created at Mark's direction after the project's intent was re-explained multiple times without sticking. §1 is the crystallized framing; the cannibalization non-concern is recorded so it stops being re-raised.


---

## 7. 🆕 BUILT STATE — Aug 31, 2026

**SEVEN categories live** (not six): Frequency split from Dosing (how much vs how often — different Google intents; also resolved the picker label collision since reta's two spokes land in different categories). TRT stays its own category — queries say "injected" not "dosed", testosterone isn't a peptide (CC's call, kept).

**Category pages:** basics · uses · reconstitution & preparation (kept `injection` key, retitled) · dosing · frequency · side-effects · legality. **Four TOC sections deliberately NOT promoted:** storage + how-to-take (cannibalize /guides + reconstitution category), mechanism (thin after the basics primer), limitations (no search demand). ⚠️ No generic query-volume data existed for these calls — reasoned from query shape; re-test storage/mechanism if keyword data ever lands.

**Compound spoke sets complete:** retatrutide ×5 · semaglutide ×4 · tirzepatide ×4 (incl. bac-water pages with label-anchored dose tables). **The uses template split into TWO working variants:** evidence-stage (investigational w/ trial programme) and label-vs-molecule (approved — the Ozempic-vs-Wegovy confusion IS the arriving question). 🔴 **The INVERTED template for ~50 no-programme compounds (BPC-157, TB-500 first) is UNBUILT — next pilot.**

**🔒 PRESENTATION RULES, locked:**
- Picker labels = COMPOUND NAME only, alphabetical; URLs stay full-question. Labels derived from peptideCategories (brand suffixes stripped), never hand-written. Collision guard: if trimming makes two labels identical, both revert to full names.
- Picker threshold 5, self-managing — never force one.
- Links must be in raw HTML with pickers closed (CSS-collapsed, never JS-injected) — curl-verify after any picker change.
- Related: category → other categories · spoke → same compound across categories + category page + profile (suppressed when handoff points there). Never an arbitrary subset of a list already on the page.
- Handoff line DERIVED with per-page override (16 overrides live — informative variants survive). ⚠️ faqQuestions.ts must stay import-free (corpus/search generators transpile-execute it).
- Foot = "Research use only. Not medical advice." single line. The epistemics paragraph lives on /methodology + DosingContext only.
- reviewAfter field on readout-tied spokes; check:freshness WARNS past date, never fails, never renders.

**🔴 SEMA HAS FOUR LABELS** (Ozempic 5d / Wegovy 2d-proximity / Rybelsus skip / oral Wegovy day-ladder 1.5→25mg) + Mounjaro 10mg pediatric ceiling. Attribute per label, NEVER "the semaglutide label." Profiles brought into line `dcf3295`.

**42+ crawlable /faq/ URLs.** Guard: check:faqs-advisory (both faqs[] arrays and coupon FAQItem JSX — the blind spot that escaped SEVEN sweeps is structurally closed).
