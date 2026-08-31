# PP INDEXING — v20

**Date:** 2026-05-24
**Status:** Active tracker. Replaces v19.

---

## Peptide pages — baseline (from v19, unchanged)

134 URL baseline. June 6, 2026 escalation threshold if GSC indexing issues C1-C3 not resolved.

Locked indexing rules (see v19 for full detail):
- GSC quota stop — no more than 5 URL inspection requests per session
- Resubmission cadence: 14-day intervals minimum
- C1-C3 issue tracking continues

---

## Supplement pages — baseline LOCKED (May 23, 2026)

**GSC export pulled May 24, 2026 via CINC. CSVs archived as session reference.**

### Aggregate metrics (6-month window: Nov 23, 2025 – May 23, 2026)

| Metric | Value |
|---|---|
| Total supplement pages | 53 |
| Pages with >0 impressions | 41 (77%) |
| Pages with 0 impressions in 6 months | 12 (23%) |
| Total impressions | 1,070 |
| Total clicks | 0 |
| CTR | 0% |
| Average position | 70.1 |

### Top 10 supplement pages by impressions

| Rank | Slug | Impressions | CTR | Avg Position |
|---|---|---|---|---|
| 1 | alpha-gpc | 241 | 0% | 78.5 |
| 2 | caffeine-l-theanine | 221 | 0% | 82.7 |
| 3 | zinc-carnosine | 141 | 0% | 59.5 |
| 4 | bacopa-monnieri | 82 | 0% | 77.4 |
| 5 | glycine | 77 | 0% | 78.5 |
| 6 | spermidine | 59 | 0% | 75.6 |
| 7 | chromium | 43 | 0% | 77.6 |
| 8 | biotin | 25 | 0% | 62.2 |
| 9 | coq10 | 22 | 0% | 14.5 |
| 10 | zma | 22 | 0% | 69.3 |

### Notable position outliers (low impressions, page-1 positions)

| Slug | Impressions | Avg Position | Note |
|---|---|---|---|
| probiotics | 1 | 2.0 | Top-3 rank, ~zero search volume |
| creatine | 1 | 4.0 | Top-5 rank, ~zero search volume |
| protein-powder | 6 | 6.0 | Page 1, low volume |
| vitamin-c | 1 | 6.0 | Top-10, ~zero volume |
| berberine | 5 | 7.4 | Page 1, low volume — **Phase 1 quick-win candidate** |
| nad-plus | 5 | 8.4 | Page 1, low volume |
| tart-cherry | 11 | 9.1 | Page 1, low volume |
| collagen-peptides | 2 | 9.5 | Page 1, very low |

### Triage candidates

**12 pages with 0 impressions in 6 months** — appear in supplements/* directory but never surfaced by Google. Requires separate indexing investigation. Key one flagged:
- **Magnesium** — page exists but Google never surfaces. Likely thin content or canonical/indexing issue. NOT a V44-supp-1 wave candidate until investigated.

**`/supplements/tongkat-ali` canonical issue:**
- Shows on `www.profpeptide.com/supplements/tongkat-ali` (with `www.` subdomain)
- All other supplement pages on apex `profpeptide.com`
- Probable redirect inconsistency causing canonical confusion
- One-minute fix: verify Vercel redirect configuration

**`/supplements/gaba` at position 100.0:**
- 1 impression, position 100 = essentially "indexed but never genuinely surfaced"
- Different failure mode than Magnesium (zero impressions); GABA at least appears occasionally
- Wave conversion may not improve unless content is materially better

---

## Diagnosis — position over metadata

**The 0% CTR is primarily a POSITION problem, not a metadata problem.**

CTR by Google position (industry benchmarks):
- Position 1: ~28% CTR
- Position 10: ~2.5% CTR
- Position 50: ~0.2% CTR
- Position 80+: ~0% CTR

Top-impression supplement pages average position 70-100 (pages 7-10 of Google). Even with perfect titles and meta descriptions, position 78 produces near-zero CTR. The wave's primary lever is RANKING (content quality, internal link authority, cross-linking) — not metadata polish.

**Metadata still matters at the margin:**
- Title tag + meta description optimization included in v4.4-supp spec
- Targets question-style or curiosity-hook framing
- 150-160 char meta descriptions answering search intent
- This captures any user who reaches the SERP, but the deeper unlock is ranking improvement

---

## Query intent analysis (Queries.csv, top patterns)

Real queries the supplement pages are being shown for:

| Query | Impressions | Position | Note |
|---|---|---|---|
| zinc carnosine | 56 | 59 | Brand name |
| alpha gpc | 37 | 82 | Brand name |
| bacopa monnieri | 27 | 83 | Brand name |
| alpha gpc dosage | 21 | 80 | High-intent dosage query |
| theanine caffeine | 17 | 92 | Stack query |
| spermidine | 16 | 78 | Brand name |
| glycine for sleep | 14 | 86 | Use-case query |
| bacopa monnieri capsules for memory | 12 | 59 | Long-tail use-case |
| caffeine theanine | 11 | 62 | Stack query |
| what is alpha gpc | 7 | 90 | Definitional query |

### Critical cross-link evidence

Queries showing users searching at the peptide-supplement intersection:
- `biotin peptide` — 7 impressions, position 75
- `nmn peptide` — 5 impressions, position 55

**Direct validation of asymmetric cross-link strategy.** Users are already searching for this connection; the wave captures them.

### Sophisticated audience signal

Operator-filtered queries excluding social media junk:
- `"ubiquinol" -site:reddit.com -site:twitter.com -site:youtube.com ...` — position 6.3, 6 impressions
- `"ubiquinone" -site:reddit.com ...` — position 8.8, 6 impressions
- `"coq10" -site:reddit.com ...` — position 4.0, 5 impressions

These are biohacker-grade users filtering for quality sources. profpeptide.com surfaces in their results at positions 4-9. Strong audience-fit signal.

---

## Schema gap — Search_appearance.csv empty

**No rich result types appearing for any supplement page** in 6 months. No FAQ snippets, no how-to cards, no recipe results, no review markup.

v4.4-supp spec mandates:
- FAQPage JSON-LD wrapping the FAQ H2 section
- Article JSON-LD on the page itself
- Author + dateModified + datePublished + reviewedBy fields populated
- Schema markup must validate cleanly via Google's Rich Results Test

Adding schema is a quick win that compounds with the content + cross-linking work.

---

## Audience profile (Devices + Countries data)

| Dimension | Top values | Note |
|---|---|---|
| Device | Desktop 94% / Mobile 6% / Tablet <1% | Biohacker research audience, not mobile casual |
| Country | US 47% / UK 11% / Canada 9% / Australia 6% | English-speaking Western markets dominant |
| India | 17 impressions, avg position 52 | Best positioning of any country (lower competition) |

---

## Pre-V44-supp-1 baseline locked

These metrics serve as the comparison baseline when measuring wave impact at 30/60/90 day checkpoints:

| Metric | Pre-wave value | Target |
|---|---|---|
| Pages with >0 impressions | 41 of 53 | 53 of 53 |
| Total monthly impressions | ~178 (1,070 / 6) | Target: 500+/mo at 90 days |
| Avg position (top 10 by impressions) | 70-100 | Target: 20-40 at 90 days |
| Pages on Google page 1 (pos ≤10) | ~8 | Target: 15+ at 90 days |
| GSC clicks/month | 0 | Target: 30+ at 90 days |
| Amazon Associates clicks/month | 15 | Target: 40+ at 90 days |
| Amazon sales/month | 1 | Target: 4+ at 90 days |

Screenshot of Amazon dashboard (May 23, 2026) saved as session reference.

---

## Backlog (carried forward + new)

From v19:
- Peptide page indexing C1-C3 issues
- FAQItem bug
- GSC redirect items

New:
- Magnesium 0-impression indexing investigation (separate from V44-supp-1 wave)
- `/supplements/tongkat-ali` canonical/redirect inconsistency
- 11 other 0-impression supplement pages (audit during V44-supp-1 Phase 2)
- Phase 1 / Phase 2 / Phase 3 / 90-day post-wave GSC re-check checkpoints
