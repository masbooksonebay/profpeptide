# PP_FAQ — v4
**Status:** ACTIVE. The governing doc for the FAQ section. Supersedes v3 and all earlier versions; PP_ANSWERS v1–v2 remain research records.
**Date:** 2026-08-25 (second pass)

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
| 1 | Needle cluster (186 impr) | ✅ **LIVE** — pilot + insulin-needles page |
| 2 | Reconstitution / bac water (60 impr, only cluster w/ clicks) | ✅ **LIVE** |
| 3 | Compound dosing questions | ✅ **LIVE** — reta, tirz, sema, CJC/Ipa, BPC-157, TB-500 |
| 4 | **Side effects (69 impr)** | **NEXT** — pilot: thymosin beta-4 (17 impr, largest single query) |
| 5 | TRT questions | Greenfield — for citation, not near-term traffic; feeds the app guide |
| — | Comparisons | Stay on /compare; diagnose suppression separately |

**Nine pages live as of `f4fd5c4`:** what-size-needle · can-you-use-insulin-needles · how-much-bac-water · how-often-is-retatrutide-dosed · tirzepatide · semaglutide · cjc-1295-and-ipamorelin · bpc-157 · tb-500.

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

**v4 (2026-08-25, second pass):** §4 rewritten — corrected build order with reasoning, nine-page state table, the evidence-split rule (citations decide the shape; honest no-protocol template recorded), standing rules from the built pages (Common-question pattern, Where-to-Buy pinned trio, hub format, search boundary). §5 findings resolved and the profile-audit queue item added (uncited dosing sections on BPC-157/TB-500 profiles).

**v3 (2026-08-25):** Hub format recorded as shipped. Inline-link rule added — overlapping accordion answers carry the "Full answer →" link inside the accordion, not only in the In-depth section; applies from page 2 onward. `/faq/` URL pattern settled as correct, marked do-not-revisit.

**v2 (2026-08-24):** §4b added — the agreed ranking and click strategy. Internal linking promoted to a first-class, ship-blocking step; specificity-in-the-snippet locked as the click incentive; citations-not-sessions confirmed as the metric. Two rows added to the §2 shape table.

**v1 (2026-08-24):** Created at Mark's direction after the project's intent was re-explained multiple times without sticking. §1 is the crystallized framing; the cannibalization non-concern is recorded so it stops being re-raised.
