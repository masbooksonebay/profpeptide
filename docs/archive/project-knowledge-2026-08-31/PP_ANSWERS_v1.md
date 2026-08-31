# PP_ANSWERS — v1

**Status:** SCOPING. Nothing built. This doc exists so the section is designed before it is built, not discovered afterward.
**Date:** 2026-08-22

---

## 1. WHAT THIS IS

A new PP section answering the questions people actually type into Google about peptides — needle sizes, reconstitution, side effects, compound comparisons — as standalone pages, each matching one question.

**Nav position (Mark's call):** between **Peptides** and **Vendors**.

**Working name: "Answers."** Alternatives considered and why they lost:
- **Q&A** — an abbreviation among full words in the nav (Peptides, Vendors, Prices, Codes); reads as a support section
- **Research** — sounds authoritative but signals primary literature, and PP already overloads "research" via research-use-only
- **Guides** — taken; `/guides` exists
- **FAQ** — implies a support page
- **Ask** — inviting but implies interactivity these pages won't have

⚠️ **Not settled.** Mark raised Q&A and Research; the decision is open.

---

## 2. 🔴 THE EVIDENCE — GSC, pulled 2026-08-22

**213 of 1,000 queries in the export are question-shaped. 212 of them get ZERO clicks** — ~701 impressions converting essentially nothing. That gap is the entire reason for this section.

### Clusters, by impressions

| Impr | Clicks | Cluster | Representative queries |
|---:|---:|---|---|
| **186** | 0 | **Needles / syringes** | "can you use insulin needles for peptides" · "is 5 16 needle good for peptides" · "what size needle for peptides" · "what syringe to use for peptides" |
| **162** | 0 | **X vs Y comparisons** | "epitalon vs nad+" (29 alone, pos 6.7) · "tb 500 vs thymosin beta 4" · "tb4 vs tb500" · "creatine vs beta alanine" |
| **69** | 0 | **Side effects** | "thymosin beta 4 side effects" (17) · "igf-1 lr3 side effects" · "kpv peptide side effects liver" |
| **60** | 3 | **Reconstitution / bac water** | "peptide bac water calculator" (29) · "how much bac water for 10mg peptide" |
| **31** | 0 | Legality / safety | "follistatin legal" · "is glucomannan safe" |
| **23** | 0 | Dosing | "thymosin beta 4 dosage" · "how many mg is 40 units of tirzepatide" |
| **17** | 0 | What is / is it a peptide | "is tirzepatide a peptide" · "what is tb4" |
| 1 | 0 | Storage / handling | "does klow need to be refrigerated" |

**Reconstitution is the only cluster earning clicks** — and only because the calculator ranks, not because a page answers the question.

⚠️ **The same question appears in many phrasings.** "Can you use insulin needles for peptides" / "can i use" / "do you use" / "can you use insulin syringes" are four rows for one page. Cluster before building.

---

## 3. 🔴 CHECK WHAT EXISTS BEFORE BUILDING

**Two of the top three clusters may already have pages that underperform rather than missing pages.**

- **Needles:** `/guides/syringes-and-injection` **EXISTS**. PP ranks 7–20 on needle queries and converts nothing. ⚠️ Mark searched PP's own site for "needles" and got only a news article — **PP's internal search doesn't match the word people use.** That's a second, separate defect.
- **Comparisons:** `/compare` **EXISTS**. "epitalon vs nad+" sits at position 6.7 with 29 impressions and zero clicks.

> **Rule: for every cluster, establish whether a page already exists before writing a new one.** Fixing a page that already has impressions is cheaper than earning new ones — and a duplicate competes with PP's own page in search.

---

## 4. 🔒 THE COLLISION RULE (locked)

**Question pages answer narrowly and link into the canonical page for depth. The profile stays canonical.**

If `/answers/what-dose-was-used-in-retatrutide-trials` and `/peptides/retatrutide` both answer the same thing at the same depth, they compete with each other in Google. The question page gives the direct answer and hands off.

Same applies to `/compare` and `/guides` — a question page must not become a second version of an existing page.

---

## 5. WHAT'S IN SCOPE

**In:** what a compound is · what dose was *reported* in trials or published literature · reported side effects · comparisons between compounds · reconstitution math · needle and syringe mechanics · storage and handling · legality and regulatory status · vendor-agnostic practical questions.

**Out:** personal advice. PP reports what has been published and observed; it does not tell an individual what to take or how to run a protocol.

⚠️ **The line is personal advice, not dosing content.** PP's profiles already carry reported trial dosing — Retatrutide Phase 2 ranges and similar. "What dose was used in the trials" is squarely in scope and always has been. "What dose should I take" is not.

---

## 6. PAGE SHAPE

The whole cluster has to match the query, not just the URL:

- **URL** in question form — `/answers/what-size-needle-for-peptide-injections`
- **H1** restates the question
- **The answer in the first sentence or two.** No preamble. This is what wins featured snippets and AI Overview inclusion — and PP already earns Overview placement on some coupon queries, so the mechanism is proven on this domain.
- Supporting detail below the answer
- **A link into the canonical page** (profile, guide, `/compare`, calculator) for depth

**Framing:** say what PP has — answers drawn from published research, vendor COAs, and current price data.

⚠️ **Do not position against Reddit in the copy.** Reddit's value is many people's lived experience; PP can't replicate that and shouldn't claim to. Content that exists to intercept rather than inform reads as such. PP's advantage is that it has cited PK values, COA-verified testing records and live price data in one place — say that, don't compare.

---

## 7. OPEN — decide before building

1. **Nav label** — Answers / Q&A / Research. Unresolved.
2. **Categories and sub-categories** — Mark: figure out as the section builds. Don't over-architect up front.
3. **Needles:** fix `/guides/syringes-and-injection`, or write a question page that links to it? Cluster is the largest and converts nothing either way.
4. **PP's internal search doesn't match "needles."** Separate defect, worth fixing regardless of this section.
5. **Does any comparable site do this well?** Unresearched. Worth looking at how other health/science sites structure a question section before settling the template.

---

## 📅 CHANGELOG

**v1 (2026-08-22):** Created during scoping. GSC evidence, cluster table, collision rule, scope boundary, page shape, open questions. Nothing built.
