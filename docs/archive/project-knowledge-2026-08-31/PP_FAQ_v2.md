# PP_FAQ — v2
**Status:** ACTIVE. The governing doc for the FAQ section. Supersedes v1 and the planning framing in PP_ANSWERS v1–v2 — those remain as research records; THIS doc states what the project is.
**Date:** 2026-08-24

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
- **Pages: `/faq/[slug]`** — routing doesn't exist yet; audit says trivial (static route, no children, no conflict). ⚠️ Every new route needs its OG image pair or `check:og-routes` fails — Crush, Treasure Coast and Modern Aminos all shipped without one.

---

## 4. WHAT TO BUILD, IN ORDER

Ordered by measured demand (GSC) and coverage:

1. **Needle cluster — 186 impressions, zero clicks.** Six phrasings, essentially two questions: *what size needle for peptide injections* · *can you use insulin syringes for peptides*. The syringe guide has the content but is shaped/titled as a units-conversion guide — the question pages win the query and hand off to it.
2. **Common per-compound questions — the "how often do you take reta" class.** Dosing frequency, "how long does X take", "what does X do". High-volume, currently unanswered in question form. Written from reported trial data.
3. **Side effects — 69 impressions.** The one cluster genuinely thin site-wide. Per-compound.
4. **TRT questions.** Greenfield (2 queries in the top 1000) — written for citation and completeness, not near-term traffic. Feeds the app's guide content too.
5. **Comparisons stay on /compare.** Those pages already match one query each; diagnose their suppression separately rather than duplicating them.

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

## 5. 🔴 STANDING FINDINGS THAT SHAPE THE WORK

- **The /faq page's JSON-LD is a hand-maintained duplicate and HAS DRIFTED** (legality answer: 813 chars visible vs 710 in schema). Fix by deriving both from one source — same single-source rule as prices, search, versions. Ride along with the routing change.
- **PP already emits FAQPage schema on ~135+ pages** (profiles, supplements, compares). ⚠️ Google restricts FAQ rich results to gov/health domains since 2023 — the markup mostly isn't earning rich results. The schema's value now is machine-readability for AI engines, not SERP decoration.
- **AI Overviews are the environment:** ~89% of health queries carry one; CTR drops ~61% when present. **The goal is being the cited source inside the box, not sessions.** Success = citations and presence, not clicks. Judge the section accordingly (PP_ANSWERS v2 §2b).
- **Position 7–20 with a non-matching title is the syringe guide's whole problem** — expected clicks at those positions on 186 impressions ≈ 1–3. Zero is near base rate. Title-matching is the fix this section exists to apply.

---

## 6. VOICE

- Report, attribute, cite: "Phase 2 trials used…", "The prescribing information states…", "Vendor states…" for unverifiable vendor facts.
- Never "you should". Never personal advice. RUO framing holds everywhere.
- Don't mention Reddit on the pages. The pitch is what PP has — cited sources, COA-verified vendor data, live prices — not what Reddit isn't.

---

## 📅 CHANGELOG

**v2 (2026-08-24):** §4b added — the agreed ranking and click strategy. Internal linking promoted to a first-class, ship-blocking step; specificity-in-the-snippet locked as the click incentive; citations-not-sessions confirmed as the metric. Two rows added to the §2 shape table.

**v1 (2026-08-24):** Created at Mark's direction after the project's intent was re-explained multiple times without sticking. §1 is the crystallized framing; the cannibalization non-concern is recorded so it stops being re-raised.
