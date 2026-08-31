# PP MASTER — v10

**Date:** 2026-05-24
**Status:** Active tracker. Replaces v9.

---

## Current state

**Prof Peptide site (profpeptide.com):**
- 31 peptide profile pages, all on v4.4+ canonical (Wave V44-1 DEPLOYED May 24, 2026)
- 53 supplement profile pages, all on v4.3-supp legacy (49) or v4.3-supp-experimental (4)
- Compare pages: limited coverage (Cagrisema has none, several other peptides missing /compare/* entries)
- News articles: separate format, lower priority

**Prof Peptide iOS app:**
- v1.0.1 live in App Store
- v1.0.2 submitted for Apple review (tab reorder, Sleep & Recovery category, expo-store-review)
- Peptide library: 31 profiles (same data as web)

**X/Twitter accounts:**
- @profpeptideapp (app account) — thumbnail v3 LOCKED
- PP / PREM / CORE / PEAK (promo accounts) — vendor code-focused, Strategy A locked

---

## Wave V44-1 — CLOSED (deployed May 24, 2026)

**24 commits, range `a0a9d59` → `ad61d28`, pushed `9c42abf..ad61d28 main -> main`.**

All 31 peptide profiles now on v4.4+ canonical:
- 28 single-peptide pattern (14 H2s)
- 3 blend variant pattern (15 H2s with combination-mechanism)
- Variant forms documented: oral (MK-677), topical+injectable (GHK-Cu), multi-route (NAD+), nasal (Selank/Semax/PT-141), on-demand (PT-141/MT-II)

**Authoritative spec:** `docs/spec/peptide-profile-v4.4-canonical.md` (828 lines, commit `ad61d28`)

**Locked conventions from V44-1:**
- 14-H2 taxonomy with question-style headers
- 3-line metadata block (Also Known As / Peptide Class / Regulatory Status)
- 6-row Aspect table
- Reconstitution table with U-100 unit math footnote
- VendorHighlightBlock with canonical 3 highlights per cluster
- "See all N verified vendors" tail link
- D1-D5 judgment criteria (Latest research / Dose escalation / Aspect content / Related Blends / New-to-research link)
- "Reported benefits:" locked label
- "Common research dose:" locked label
- bold-then-period lead-in pattern

---

## Wave V44-supp-1 — Phase 0 COMPLETE, Phase 1 LOCKED

**Phase 0 audit:** `docs/spec/wave-v44-supp-1-phase0-audit.md` (473 lines, commit `54668bc`, unpushed)

**All 12 spec questions resolved (May 24, 2026 — see audit doc Section 8 for question text):**

| Q | Resolution |
|---|---|
| Q1 | Amazon Associates current. Future-flex SupplementVendorBlock for Nutricost-style direct affiliates. |
| Q2 | Strong-tier study cards only (~15 pages); references-only for remaining |
| Q3 | 12-month window for Latest Research callout + omit-if-none |
| Q4 | 10-H2 supplement variant, plain-language question H2s, biohacker tone (not WebMD-alarmist) |
| Q5 | Full migration to question-style headers |
| Q6 | Conditional Storage H2: include only when refrigeration / oxidation / expiry concerns exist |
| Q7 | 6-row Aspect table; Standardization marker row replaces Missed dose |
| Q8 | Drop calculator CTA, no replacement (preserves asymmetric link equity) |
| Q9 | Rename Limitations H2 → "What we don't know yet" or "Where the research stands"; reframe curiosity-positive |
| Q10 | 5 exemplars (revised from CC's proposal — see Phase 1 Lineup below) |
| Q11 | GSC export pulled May 24, 2026 — see PP_INDEXING v20 for full data |
| Q12 | Asymmetric cross-link: peptide → supplement YES; supplement → peptide IN-CONTEXT ONLY (Stacks H2) |

**Additional spec mandates added based on GSC analysis:**
- Title tag + meta description optimization (question-style or curiosity-hook, 150-160 char meta)
- JSON-LD schema: FAQPage + Article required across all v4.4-supp pages
- Author byline + reviewed-date conventions match peptide pattern

---

## Phase 1 Lineup — LOCKED (data-driven, GSC-informed)

| Rank | Slug | Impressions (6mo) | Pos | Cross-link target | Spec dimension tested |
|---|---|---|---|---|---|
| 1 | `alpha-gpc` | 241 | 78.5 | Semax / Selank (cognitive) | Volume impact + cognitive cross-link |
| 2 | `caffeine-l-theanine` | 221 | 82.7 | Semax (focus) | **Stack/combo page format** |
| 3 | `zinc-carnosine` | 141 | 59.5 | BPC-157 / KPV (gut healing) | Near-page-1 + gut cluster cross-link |
| 4 | `berberine` | 5 | 7.4 | Sema / Tirz / Reta (GLP cluster) | **Quick-win position move + GLP cross-link** |
| 5 | `nmn` | 9 | 33.3 | NAD+ peptide + NAD+ supplement | **Tri-link variant test + longevity** |

**Phase 1 hard stop discipline:** After exemplar #1 (alpha-gpc) converts, HARD STOP for spec review. Validate the v4.4-supp spec on the first conversion before applying to the remaining 4. Same pattern as V44-1 Phase 1.

**Phase 1 exclusions and why:**
- Magnesium → 0 impressions in 6 months (deeper indexing issue, separate triage)
- Ashwagandha → only 2 impressions (defer to Phase 2)
- Tart Cherry → 11 impressions, defer to Phase 2 (will hit experimental-upgrade test anyway with Apigenin/Glycine/Melatonin)

---

## Phase 2 ordering — LOCKED

Phase 2 covers the remaining 48 supplements, ordered by GSC impressions descending. First batch (positions 6-15 by impressions):

bacopa-monnieri (82) → glycine (77) → spermidine (59) → chromium (43) → biotin (25) → coq10 (22) → zma (22) → phosphatidylserine (19) → caffeine (14) → tart-cherry (11)

Continue until all 53 supplements converted. Group into batches of 8-12 per session to maintain spec discipline.

---

## Backlog items

**V44-blend-1 (next wave after V44-supp-1):**
5 pre-Phase-1 blends need re-audit against the locked blend variant spec (15-H2, 4-line metadata, combination-mechanism section): GH-Stack, GLOW, KLOW, Semax-Selank, Wolverine

**V44-xref-1 (companion to V44-supp-1 Phase 2):**
Add Related Supplements block to peptide pages where strong-match exists. Apply per the 5 exemplar pairings in Phase 0 audit Section 6.3:
1. GLP cluster ↔ Berberine
2. NAD+ peptide ↔ NMN + NAD+ supplement (tri-link)
3. GH-axis peptides ↔ Ashwagandha + GABA
4. Healing cluster (BPC-157/TB-500/KPV) ↔ Curcumin + Collagen + Glutamine
5. Russian sleep/cognitive (DSIP/Selank/Semax) ↔ Apigenin + Glycine + Melatonin

**Magnesium triage (separate from V44-supp-1):**
0 impressions in 6 months despite page existing. Needs indexing investigation. Check: indexed in GSC? canonical URL? content thinness? Possibly content rewrite required before any conversion attempt.

**`/supplements/tongkat-ali` canonical issue:**
Showing on `www.` subdomain in GSC; everything else on apex. Probable redirect/canonical inconsistency. One-minute check + fix.

**FAQItem bug + GSC redirect items:**
See cross-references in V44-1 spec doc (`docs/spec/peptide-profile-v4.4-canonical.md`)

---

## Locked App / X conventions (carried forward unchanged from v9)

- iOS app v1.0.2 pending Apple review
- App Store submission via CINC with explicit pause-before-submit checkpoints — never auto-chained
- CINC never clicks "Release This Version" buttons — always Mark's call
- Organic App Store reviews from friends/family acceptable if not coordinated/templated/incentivized
- @profpeptideapp thumbnail v3 LOCKED — minimal horizontal design (1200×630), navy #0f172a, teal #0891b2, divider slate #334155
- Source colors from `src/components/Header.tsx`
- See PP_X_POSTS v20 for full thumbnail + strategy notes

---

## Affiliate baseline (pre-V44-supp-1 wave)

**Amazon Associates dashboard (May 23, 2026):**
- 30-day clicks: 15
- 30-day sales: 1
- 30-day commission: $0.30
- Conversion: 11.11% (healthy; bottleneck is traffic volume)

**GSC supplement performance (Nov 23, 2025 – May 23, 2026):**
- 41 of 53 supplement pages with >0 impressions
- 0 organic clicks across all 1,070 impressions
- Position diagnosis: top-impression pages averaging position 70-100 (pages 7-10 of Google)
- Audience: 94% desktop, US/UK/Canada/Australia dominant

**Internal traffic compound thesis CONFIRMED:** Amazon affiliate clicks (15/mo) come from non-organic sources (direct, internal nav, social). Bidirectional peptide → supplement cross-linking is the unrealized traffic compound opportunity.

---

## Reference doc architecture

- `docs/spec/peptide-profile-v4.4-canonical.md` — peptide canonical spec, authoritative
- `docs/spec/wave-v44-supp-1-phase0-audit.md` — supplement audit + spec adaptation proposal
- Both are pushed (peptide) / committed-unpushed (supplement audit)
- Future CC sessions should read the spec doc directly rather than reconstructing from ref docs

---

## Next session kickoff

V44-supp-1 Phase 1 starts with alpha-gpc conversion. Click-to-copy prompt available as `PP_V44-supp-1_Phase1_CC_prompt.md` deliverable.

Pre-fire checklist:
- [ ] Read `docs/spec/wave-v44-supp-1-phase0-audit.md` for spec adaptations
- [ ] Confirm Phase 1 lineup (alpha-gpc → caffeine-l-theanine → zinc-carnosine → berberine → nmn)
- [ ] Optional: pull which supplement converted for the $0.30 Amazon sale (informs Phase 2 prioritization)
- [ ] Fire CC Phase 1 prompt
