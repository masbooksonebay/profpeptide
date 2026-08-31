# PP_ANSWERS — v2

**Status:** SCOPING. Nothing built.
**Date:** 2026-08-23 · Supersedes v1

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

## 2b. 🔴 WHAT THE INDUSTRY ACTUALLY DOES — researched 2026-08-22

**No health or science site uses a nav tab called "Answers."** The dominant structure is a **pillar page with question clusters beneath it** — a broad topic page linking to narrow question pages, each answering one thing and linking back. GoodRx Health is the closest analogue ("find expert answers to your health questions") but it is a content hub, not a nav item.

**The format is settled and specific — answer-first.** The direct answer goes in the first **40–60 words** under each question heading, before any elaboration. That structure is what gets pulled into AI Overviews, Perplexity and ChatGPT responses. It is also exactly the format PP already earns Overview placement with on coupon queries.

**One authoritative page beats several thin ones.** Independent confirmation of the collision rule in §4 — near-duplicate pages targeting slightly different phrasings suppress each other.

### 🔴 THE FINDING THAT CHANGES THE GOAL

**AI Overviews appear on ~89% of healthcare queries.** When one appears, organic click-through drops from **1.6% to 0.6% — a 61% decline**. An Ahrefs study of 300,000 keywords found the top-ranking page earns **58% fewer clicks** when an Overview is present. Practices report clinical-page traffic falling **20–40% year over year while rankings hold steady**.

**So question pages built to earn clicks will mostly be read inside Google's answer box instead.**

⚠️ **For PP specifically this is acceptable — even good.** PP's revenue runs on code-based attribution, which needs no click: a reader who sees the code in an Overview and goes straight to the vendor still converts. PP already earns Overview placement on coupon queries.

**But it means the goal for this section is NOT traffic. It is being the cited source.** Measure success in Overview citations and brand presence, not sessions. A section judged on sessions will look like a failure while working exactly as intended.

**Health content is YMYL** — held to a higher standard for expertise and trustworthiness. PP's cited-sources posture is an asset here, not overhead.

---

## 3. 🔴 CHECK WHAT EXISTS BEFORE BUILDING

**Two of the top three clusters may already have pages that underperform rather than missing pages.**

- **Needles:** `/guides/syringes-and-injection` **EXISTS**. PP ranks 7–20 on needle queries and converts nothing.
  ✅ **The site-search half is FIXED (2026-08-23).** The index was a hand-typed 133-entry array missing all guides, all 48 coupon pages, 37 of 64 peptide profiles and 11 of 14 news articles; "syringe" returned Phosphatidylserine on a fuzzy match because the guide wasn't indexed at all. Rebuilt as a **derived index (330 entries)** generated at build time from the single sources, with a staleness guard in the build chain and a **query-expansion alias table at `src/data/search-aliases.ts`** — extendable without a code change. "syringe" and "needles" both now return the guide as the top result, verified live.
  ⚠️ **The Google half is unfixed** — the guide still ranks 7–20 and converts nothing. That is this section's problem to solve.
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
- **The answer in the first 40–60 words.** No preamble. This is the industry-standard answer-first structure and it is what AI engines extract. This is what wins featured snippets and AI Overview inclusion — and PP already earns Overview placement on some coupon queries, so the mechanism is proven on this domain.
- Supporting detail below the answer
- **A link into the canonical page** (profile, guide, `/compare`, calculator) for depth

**Framing:** say what PP has — answers drawn from published research, vendor COAs, and current price data.

⚠️ **Do not position against Reddit in the copy.** Reddit's value is many people's lived experience; PP can't replicate that and shouldn't claim to. Content that exists to intercept rather than inform reads as such. PP's advantage is that it has cited PK values, COA-verified testing records and live price data in one place — say that, don't compare.

---

## 7. OPEN — decide before building

1. **Nav label** — Answers / Q&A / Research. Unresolved.
2. **Categories and sub-categories** — Mark: figure out as the section builds. Don't over-architect up front.
3. **Needles:** fix `/guides/syringes-and-injection`, or write a question page that links to it? Cluster is the largest and converts nothing either way.
4. ~~PP's internal search doesn't match "needles."~~ **RESOLVED 2026-08-23** — see §3. New pages must be added to the derived index's generator, and any new vocabulary added to `search-aliases.ts`.
5. ~~Does any comparable site do this well?~~ **RESEARCHED 2026-08-22** — see §2b. No one uses an "Answers" nav tab; the pattern is pillar-plus-clusters with answer-first formatting.
6. 🆕 **What is this section measured on?** Given the AI Overview finding, sessions are the wrong metric. Decide before building whether success means Overview citations, brand presence, or something else — otherwise it will read as failing.

---

## 📅 CHANGELOG

**v2 (2026-08-23):** Industry research added (§2b) — no one uses an "Answers" tab; pillar-plus-clusters with answer-first 40–60 word structure is the norm. 🔴 AI Overview finding: ~89% of health queries carry one and CTR drops ~61%, so the goal is being the cited source, not traffic. Site-search defect resolved — derived 330-entry index with alias table. Open item added: decide the success metric before building.

**v1 (2026-08-22):** Created during scoping. GSC evidence, cluster table, collision rule, scope boundary, page shape, open questions. Nothing built.
