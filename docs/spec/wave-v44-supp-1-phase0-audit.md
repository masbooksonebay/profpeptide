# Wave V44-supp-1 — Phase 0 Audit + Spec Adaptation Proposal

**Date:** 2026-05-24
**Wave:** V44-supp-1 (Phase 0 — audit only, no code edits)
**Predecessor:** Wave V44-1 (peptide v4.4+ canonical, locked at `docs/spec/peptide-profile-v4.4-canonical.md`, SHAs `a0a9d59`→`ad61d28`)
**Status:** Awaiting Mark review before Phase 1 conversion authorization.

---

## Executive Summary

53 supplement profile pages exist at `src/app/supplements/[slug]/page.tsx`, distributed across 10 site-defined categories. Two distinct page patterns are in use: a **legacy v4.3-supp** pattern (49 pages — Overview / Key Benefits tiles / How It Works / Research / How to Use / Side Effects / Related / References) and a newer **v4.3-supp-experimental** pattern (4 sleep-recovery pages added 2026 — apigenin, glycine, melatonin, tart-cherry — which introduce Quick Answer callouts, Key Facts blocks, question-style H2s, and FAQ arrays).

Compared to the peptide v4.4+ canonical, supplements diverge significantly:
- **No PageTOC** anywhere.
- **No "Last reviewed" date** anywhere.
- **No 3-line metadata block** — only inline "Also Known As" line + colored tagline subheader.
- **No VendorHighlightBlock** — single Amazon Associates link per page (tag=`profpeptide-20`).
- **No FAQ** on 49 of 53 pages.
- **No Studies plain-English summary cards** anywhere — only References ordered list.
- **No Latest research callout** anywhere.
- **No Comparisons block** except berberine.
- **Zero cross-links to peptide pages** from any supplement page.
- **Zero cross-links to supplement pages** from any peptide page (verified via grep across all 31 peptide profiles).

The bidirectional peptide↔supplement cross-linking gap is the single biggest content / SEO opportunity surfaced by this audit. Phase 1 conversion should unlock it.

---

## 1. Inventory

### 1.1 Page count and stats

| Metric | Value |
|---|---|
| Total `/supplements/[slug]/page.tsx` files | 53 |
| Index page (`/supplements/page.tsx`) | 1 |
| Sitemap `/supplements/*` URLs | 53 (in `sitemap-0.xml`) |
| All page last-modified | 2026-05-11 (uniform — likely batch reformat) |
| Vendor data file (`supplement-vendors.json`) | **Does not exist** — only `peptide-vendors.json` |
| Vendor catalog (`vendors.ts`) | Peptide-only (Almighty, Apollo, Ascension, etc.) |
| Pages with Amazon Associates link | 53 / 53 (100%) — tag=`profpeptide-20` |
| Pages with PP-affiliated vendor block | 0 |

### 1.2 Content depth tiers (by line count)

| Tier | Lines | Page count | Pattern |
|---|---|---|---|
| Thin / canonical seed | 99 | 16 | v4.3-supp (compact one-liner sections) |
| Standard | 127–142 | 30 | v4.3-supp |
| Slightly extended | 150–154 | 2 | v4.3-supp (creatine, berberine — w/ Comparisons block) |
| v4.3-supp-experimental | 183–190 | 4 | Quick Answer + Key Facts + question H2 + FAQ |

**Thin tier (99 lines, 16 pages):** chromium, coq10, fenugreek, fish-oil, l-citrulline, maca-root, magnesium, nmn, prebiotics, probiotics, quercetin, resveratrol, spermidine, tongkat-ali, vitamin-d3, zinc.

**v4.3-supp-experimental (4 pages):** apigenin (188), glycine (184), melatonin (183), tart-cherry (190). Added in commit `c135608` ("Add 4 new sleep-recovery supplement profiles"). These are the most content-rich pages on the site and the closest stylistic match to where the supplement canonical should land.

### 1.3 Full slug list (alphabetical)

`alpha-gpc`, `alpha-lipoic-acid`, `apigenin`, `ashwagandha`, `bacopa-monnieri`, `bcaas`, `berberine`, `beta-alanine`, `biotin`, `caffeine`, `caffeine-l-theanine`, `chromium`, `collagen-peptides`, `collagen-peptides-skin`, `coq10`, `creatine`, `curcumin`, `electrolyte-powders`, `fenugreek`, `fish-oil`, `gaba`, `garcinia-cambogia`, `glucomannan`, `glutamine`, `glycine`, `green-tea-extract`, `hyaluronic-acid`, `l-arginine`, `l-citrulline`, `l-citrulline-malate`, `l-theanine`, `lions-mane`, `maca-root`, `magnesium`, `melatonin`, `nad-plus`, `nmn`, `phosphatidylserine`, `prebiotics`, `probiotics`, `protein-powder`, `quercetin`, `resveratrol`, `rhodiola-rosea`, `spermidine`, `tart-cherry`, `tongkat-ali`, `vitamin-c`, `vitamin-c-skin`, `vitamin-d3`, `zinc`, `zinc-carnosine`, `zma`.

**Note on duplicates:** `collagen-peptides` + `collagen-peptides-skin` and `vitamin-c` + `vitamin-c-skin` are intentional doubles (skin-specific variants in different categories). Effective unique products = 51 (matches the index's "51 supplement profiles" claim).

---

## 2. Categorization

The supplements index (`src/app/supplements/page.tsx`) defines a typed taxonomy of 10 categories. Pages are tagged with 1–3 categories each.

### 2.1 Category taxonomy (locked in code)

| Slug | Display name | Page count (primary tag) |
|---|---|---|
| `metabolic` | Metabolic & Weight Loss | 9 |
| `recovery` | Recovery & Tissue Repair | 9 |
| `performance` | Performance & Energy | 9 |
| `cognitive` | Cognitive & Nootropic | 8 |
| `growth-hormone` | Growth Hormone Support | 5 |
| `skin-health` | Skin Health & Anti-Aging | 4 |
| `gut-health` | Gut Health & Immunity | 9 |
| `sleep-recovery` | Sleep & Recovery | 10 |
| `longevity` | Longevity | 12 |
| `sexual-health` | Sexual Health | 5 |

Multi-category pages (e.g., Caffeine in metabolic + performance + cognitive) drive the apparent total higher than 53 — pages can belong to up to 3 categories.

### 2.2 Category content density

**Strong / dense categories** (high research base, many pages):
- `longevity` (12 pages — NAD+, NMN, Resveratrol, Spermidine, Quercetin, CoQ10, Curcumin, Fish Oil, Apigenin, Lion's Mane, Alpha Lipoic Acid, Vitamin D3, Melatonin, Glycine, Green Tea Extract)
- `sleep-recovery` (10 pages — Ashwagandha, Apigenin, GABA, Glycine, L-Theanine, Magnesium, Melatonin, Phosphatidylserine, Tart Cherry)
- `metabolic` (9 pages — Berberine, Caffeine, Chromium, Garcinia Cambogia, Glucomannan, Green Tea Extract, Alpha Lipoic Acid, Fenugreek for GH-axis crossover)

**Thin categories:**
- `skin-health` (4 pages) — likely warrants consolidation pass post-conversion.
- `sexual-health` (5 pages) — small but well-defined.
- `growth-hormone` (5 pages) — high cross-link value with the peptide GH cluster.

### 2.3 Orphan / unclear groupings

- `gut-health` + `immunity` are combined into one tag, but conceptually distinct. Some pages (Zinc, Vitamin C, Vitamin D3) sit on the immunity side; others (Probiotics, Prebiotics, Glucomannan) sit on the gut-flora side. Phase 1 should preserve the existing tag but consider whether the spec needs a `digestive` vs `immune` subdivision.
- `recovery` overlaps significantly with `sleep-recovery`. The split makes sense (recovery = post-exercise / tissue-repair; sleep-recovery = sleep-quality / parasympathetic) but pages like Collagen Peptides + Tart Cherry straddle both.
- No orphan pages flagged — all 53 pages have at least one category tag.

---

## 3. Sample Page Structural Analysis

Five diverse pages read in full: **Magnesium** (mineral, thin 99 lines), **Berberine** (metabolic, extended 154 lines, has Comparisons), **Ashwagandha** (adaptogen / GH cluster, standard 137 lines), **NMN** (longevity, thin 99 lines), **Tart Cherry** (sleep-recovery, experimental 190 lines).

### 3.1 Magnesium (99 lines, thin tier, gut-health primary)

| Element | Status |
|---|---|
| Imports | Link, JsonLd, PageDisclaimer, ContactLink, buildPageMetadata (5 — missing `PageTOC`, `VendorHighlightBlock`) |
| JsonLd | Article + BreadcrumbList ✓ (matches peptide pattern) |
| Metadata block | None — just `<p>` "Also Known As:" + cyan tagline line |
| Last reviewed date | None |
| H2 section taxonomy | Overview, Key Benefits, How It Works, What the Research Shows, How to Use, Side Effects & Safety, Related Supplements, References (8 H2s) |
| Tables | None |
| FAQ array | None |
| Studies plain-English cards | None — only References ordered list (2 entries) |
| Latest research callout | None |
| Vendor block | Single Amazon Associates link in styled card |
| Internal cross-links | 4 → all supplements (Zinc, Vitamin D3, Fish Oil, ZMA). 0 → peptides. |
| Tags chips | 4 ("Sleep", "Blood Pressure", "300+ Enzymes", "45-68% Deficient") |
| Footer | PageDisclaimer + ContactLink ✓ |

### 3.2 Berberine (154 lines, extended tier, metabolic primary)

Same structural skeleton as Magnesium, **plus** a Comparisons block (`/compare/berberine-vs-metformin`). Only supplement page with a Comparisons block. Same 8 H2s, single Amazon link, no PageTOC, no FAQ. Mechanism section explicitly mentions GLP-1 ("Berberine induces secretion of glucagon-like peptide-1 (GLP-1) from intestinal L cells — the same pathway targeted by semaglutide and tirzepatide") **but does not link to those peptide pages.** This is the highest-leverage missed cross-link on the supplement side of the site.

### 3.3 Ashwagandha (137 lines, standard tier, growth-hormone primary)

Same 8 H2s. Related Supplements: Rhodiola Rosea, L-Theanine, ZMA, Magnesium — **all supplements, zero peptide links** despite Ashwagandha being categorized as `growth-hormone` (would naturally cross-link to CJC-1295, Ipamorelin, MK-677, Sermorelin, Tesamorelin). Mentions cortisol → testosterone → GH-axis effects in mechanism but does not link to peptide profiles.

### 3.4 NMN (99 lines, thin tier, longevity primary)

Same 8 H2s. Related Supplements: Resveratrol, CoQ10, Quercetin, Spermidine — **all supplements**. Overview explicitly references David Sinclair / NAD+ longevity research but **does not link to the NAD+ peptide profile** (`/peptides/nad-plus`) despite a near-perfect content match. Mentions "sirtuin activation", "mitochondrial biogenesis" — same mechanism vocabulary as the NAD+ peptide page.

### 3.5 Tart Cherry (190 lines, v4.3-supp-experimental, sleep-recovery primary)

**Different pattern entirely.** Structural elements:

| Element | Status |
|---|---|
| Imports | Same 5 (no PageTOC, no VendorHighlightBlock) |
| Quick Answer callout | ✓ — cyan-tinted block above sections (paralleling peptide Latest research callout color) |
| Key Facts block | ✓ — gray-tinted block with label/value pairs (Form, Common doses, Evidence tier, Active compounds, Best variety) |
| H2 section taxonomy | Question-style: "What does tart cherry do?", "What the research shows", "Considerations and unknowns", "How to evaluate quality", "Where to Buy", "FAQ" (6 H2s) |
| FAQ array | ✓ — 5 questions, plain-string answers |
| Tables | None |
| Studies plain-English cards | None — research is integrated into prose, not summarized as cards |
| Latest research callout | None (but Quick Answer occupies that slot) |
| Vendor block | Single Amazon link, integrated into "Where to Buy" H2 |
| Cross-links | 0 supplements, 0 peptides |
| Tags chips | 4 |

The other 3 v4.3-supp-experimental pages (apigenin, glycine, melatonin — added in same commit `c135608`) follow this structure. They are the closest existing pages to a canonical supplement v4.4 pattern and should serve as the structural baseline.

### 3.6 Broken pages / TS errors

None observed. All 5 sampled pages compile cleanly. Did not full-scan all 53; flagging only those examined.

---

## 4. Gap Analysis — Peptide Canonical vs Supplement Current vs Proposed Adaptation

| Element | Peptide canonical (v4.4+) | Supplement current | Proposed v4.4-supp adaptation |
|---|---|---|---|
| **Import set** | 7 imports incl. PageTOC + VendorHighlightBlock | 5 imports (no TOC, no vendor block) | 7 imports — add PageTOC; add new `SupplementVendorBlock` or reuse current Amazon styled card |
| **Metadata block** | 3-line: Also Known As / Peptide Class / Regulatory Status | Inline 1-line "Also Known As" + cyan tagline | **3-line: Also Known As / Supplement Class / Evidence Tier** (locked) — class = "Mineral", "Adaptogen", "NAD+ precursor", etc.; evidence tier = "Strong (≥3 RCTs / meta-analyses)" / "Moderate (≥1 RCT + mechanism)" / "Emerging (animal or pilot human)" |
| **Last reviewed date** | Yes, locked | None | **Add** — same `<p>Last reviewed: [date]</p>` pattern |
| **Latest research callout** | Cyan box, conditional (D1 90-day rule) | None | **Add** — same JSX pattern, same D1-supp criteria (see proposed spec §5) |
| **Overview block + Reported benefits** | Lead paragraph + bulleted benefits + Common dose + Where to buy | Overview paragraph + Key Benefits tile grid (gray-tinted boxes) | **Keep tile-grid Key Benefits** as a supplement-distinct element; adapt phrasing to match peptide canonical structure |
| **PageTOC** | Yes, between overview and section loop | None | **Add** |
| **Section H2 count** | 14 (canonical) / 15 (blend variant) | 8 (legacy) or 6 (experimental) | **10-H2 supplement canonical** — see proposed taxonomy in §5 |
| **H2 title style** | Question-style ("How does X work?") | Declarative ("How It Works") on legacy; question-style on experimental | **Question-style locked** (matches peptide canonical + better SEO via PAA snippets) |
| **Section shape** | intro + body[] / content / node | Mixed (mostly body[] inline) | **Same as peptide canonical** — intro + body / content / node |
| **How-to-take aspect table** | 6-row (Frequency / Best time / Food / Site rotation / Variant / Missed dose) | None | **6-row supplement-adapted** — see §5 |
| **Reconstitution table** | Yes (BAC water × dose tiers, U-100 units) | None | **REMOVE entirely** — oral supplements don't reconstitute. For powder-vs-capsule split, use a "Form comparison" callout instead. |
| **Dose escalation table** | Conditional (≥3 steps) | None | **Conditional, less common** — applies for niacin-flush titration, melatonin step-up, etc. Keep optional. |
| **Stacks section** | "What does X stack well with?" — peptide-internal | Implicit in "Related Supplements" but not framed as stacks | **Add stacks H2 explicitly** — 3 sub-areas: stacking with peptides, stacking with other supplements, stacking with lifestyle (training, fasting, circadian timing) |
| **Side effects / interactions** | 3-tier (common / less common / serious) + interactions H2 | Single paragraph combining both | **Split into 2 H2s** matching peptide canonical — 3-tier side effects + separate interactions section |
| **Storage** | Yes, H2 | None | **Add** for moisture/heat/light-sensitive supplements (NMN, fish oil, probiotics). Optional skip for stable powders. |
| **Limitations** | "What are the limitations of X research?" — investigational status, RUO framing, regulatory gray area | None | **Adapt** — supplements aren't RUO-investigational. New framing: **"What are the limitations of X evidence?"** — evidence quality (RCT vs observational), heterogeneity, dose-response uncertainty, population specificity. |
| **Where-to-buy / Vendor block** | VendorHighlightBlock (3 vetted vendors w/ codes) + "See all 17 verified vendors" tail | Single Amazon Associates link in styled card | **Tiered approach**: (a) for PP-affiliated supplement carriers (if any), use a SupplementVendorBlock; (b) Amazon Associates fallback; (c) "Quality markers" callout listing what to look for (third-party tested, GMP, standardized extract markers). See §5. |
| **FAQ** | 8–12 questions, mixed string/JSX answers | Only on 4 experimental pages | **Add to all 53** — 5–8 questions per page, matching peptide canonical render pattern |
| **References** | Numbered list, 5–10 entries, citation format | Numbered list, 2–5 entries, citation format | **Expand to 5–10 per page** (current pages average 2–3 — too thin) |
| **Studies plain-English cards** | 5–8 cards w/ journal + year + access + summary | None | **Add** for top-tier supplements (Strong evidence). Optional for Emerging tier. |
| **Related Peptides + Related Supplements + Comparisons** | Related Peptides block (3-5 internal peptides) + optional Comparisons | "Related Supplements" only — no Peptide links, no Comparisons (except berberine) | **Add bidirectional**: Related Peptides block (new), keep Related Supplements, add Comparisons when `/compare/*` exists. See §6 theme map. |
| **JsonLd Article + BreadcrumbList** | Yes ✓ | Yes ✓ | **Keep — already aligned** |
| **Tags chips + Calculator CTA + footer** | Yes | Tags chips ✓, no calculator CTA | **Keep tags. Skip calculator CTA** (no reconstitution math needed for oral supplements) — replace with "Read related peptide research →" CTA pointing to the cross-linked peptide cluster page. |
| **PageDisclaimer + ContactLink** | ✓ | ✓ | **Keep — already aligned** |

---

## 5. Proposed v4.4-supplement Canonical Spec (high-level)

This is the **high-level** spec. Full lock happens in Phase 2 after Mark review of this audit + resolution of open judgment calls in §8.

### 5.1 Metadata block — 3-line locked

```
Also Known As: [aliases, common forms, branded extracts]
Supplement Class: [Mineral / Adaptogen / NAD+ precursor / Polyphenol / Amino acid / Vitamin / Probiotic / etc.]
Evidence Tier: [Strong / Moderate / Emerging] — [one-sentence justification]
```

### 5.2 Proposed 10-H2 section taxonomy (canonical)

1. `mechanism` — How does [Supplement] work?
2. `research` — What does [Supplement] actually do? (evidence summary; aliased from peptide's "What is X used for?" to match supplement framing)
3. `dosing` — How is [Supplement] dosed?
4. `how-to-take` — How is [Supplement] administered? (includes Aspect table, form comparison)
5. `stacks` — What does [Supplement] stack well with? (peptides + other supplements + lifestyle)
6. `side-effects` — What are the side effects of [Supplement]?
7. `interactions` — Does [Supplement] interact with other drugs or supplements?
8. `limitations` — What are the limitations of [Supplement] evidence?
9. `where-to-buy` — Where to source [Supplement] (quality markers + vendor block)
10. `faq` — [Supplement] FAQ

Plus terminal `references` and `studies` (matching peptide canonical positions). Optional `storage` H2 inserted between `interactions` and `limitations` for moisture/heat/light-sensitive supplements.

**Compared to peptide canonical 14-H2:**
- **Dropped:** `timeline` (folded into mechanism / research), `storage` (optional).
- **Kept:** all others, renamed for supplement framing where appropriate.

**Total H2 count for supplement canonical = 12** (10 content + references + studies). Storage H2 brings it to 13 when included.

### 5.3 Aspect table — proposed 6-row supplement adaptation

| Row | Recommendation content example |
|---|---|
| **Frequency** | Once daily / Twice daily / Pre-workout only / etc. |
| **Best time of day** | Morning / Evening / Pre-meal / Bedtime |
| **Food** | With meals / Empty stomach / Doesn't matter |
| **Form** | Capsule / Powder / Sublingual / Liquid — preference with rationale |
| **Standardization marker** | What to look for (e.g., KSM-66 for Ashwagandha, ≥95% curcuminoids for Curcumin, EPA+DHA combined mg for Fish Oil) |
| **Cycling / Duration** | Continuous / Pulsed / 4-week on, 1-week off / etc. |

**Replaces peptide-only rows:** Injection site rotation → `Form`. Missed dose → `Standardization marker` (more useful for supplements; missed doses are less consequential).

### 5.4 No reconstitution table

Removed entirely for supplement profiles. Replaced by a **Form Comparison callout** when the supplement comes in multiple forms with materially different bioavailability or use cases (e.g., Magnesium glycinate vs citrate vs oxide; Curcumin vs Curcumin + piperine vs Meriva).

### 5.5 Latest Research callout — adapted D1-supp criteria

Render YES when:
- A meta-analysis, systematic review, or large RCT (≥500 participants) published in the last 12 months alters the evidence base.
- A major regulatory event affecting the supplement (e.g., FDA recall, monograph publication, NAD+ precursor patent ruling).
- A widely-cited media event (e.g., Huberman Lab episode, Attia podcast, NIH guideline update).

12-month window (vs peptide's 90-day) reflects the slower pace of supplement evidence vs phased clinical trial readouts.

### 5.6 Where-to-buy — tiered vendor approach

**Tier 1 (preferred):** PP-affiliated supplement carriers using new `SupplementVendorBlock` (paralleling `VendorHighlightBlock`). Requires building out a `supplement-vendors.json` data layer. Unknown which carriers exist — **open question in §8**.

**Tier 2 (fallback):** Amazon Associates link with quality-marker callout above. The callout lists 3–5 specific markers (standardization %, third-party testing org, GMP certification, etc.) before the link, so the reader can evaluate Amazon listings rather than just clicking blind.

**Tier 3 (specialty):** for supplements where direct-to-consumer brands dominate (Thorne, Pure Encapsulations, ProHealth, Renue By Science, Apollo Health), offer a branded card with no affiliate.

### 5.7 Stacks section — 3-area framing

```
1. With peptides — [supplement] pairs particularly well with [peptide-1] (mechanism rationale), [peptide-2] (mechanism rationale).
2. With other supplements — [supplement-1] (synergy), [supplement-2] (synergy).
3. With lifestyle — training timing, fasting state, circadian alignment, sleep stack integration.
```

This is the structural unlock for bidirectional cross-linking. Every supplement page's stacks section becomes a natural place to surface peptide links.

### 5.8 Locked imports (proposed)

```tsx
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import SupplementVendorBlock from "@/components/SupplementVendorBlock"; // new component, conditional
import { buildPageMetadata } from "@/lib/seo";
```

The `SupplementVendorBlock` is a new component. Until its data layer (`supplement-vendors.json`) is built, fall back to current single-Amazon styled card.

---

## 6. Cross-Linking Theme Map

### 6.1 Peptide cluster theme tags

Derived from `src/app/peptides/` content. Each peptide is mapped to one or more themes:

| Theme | Peptides |
|---|---|
| GLP-cluster / metabolic | Semaglutide, Tirzepatide, Retatrutide, Cagrilintide, Cagrisema |
| GH-axis | CJC-1295, Ipamorelin, Sermorelin, Tesamorelin, MK-677, GH-Stack |
| Healing / recovery | BPC-157, TB-500, KPV |
| Longevity / NAD+ | NAD+, Epitalon |
| Cognitive / nootropic | Semax, Selank, DSIP (sleep adjacent), Semax-Selank |
| Sexual health | PT-141, Melanotan II |
| Mitochondrial / metabolic adjacent | MOTS-c, AOD-9604 |
| Skin / aesthetics | GHK-Cu, Melanotan II, GLOW, KLOW |
| Sleep / recovery | DSIP |
| Immune / thymic | Thymosin Alpha-1, Selank, Semax |
| IGF / muscle | IGF-1 LR3, Follistatin |

### 6.2 Supplement cluster theme tags (from index categories)

| Theme | Supplements |
|---|---|
| Metabolic & weight | Berberine, Chromium, Garcinia Cambogia, Glucomannan, Green Tea Extract, Alpha Lipoic Acid, Caffeine |
| Performance / energy | Creatine, Beta-Alanine, BCAAs, L-Citrulline, Electrolytes, Protein Powder, CoQ10, Caffeine |
| Recovery | Tart Cherry, Curcumin, Collagen Peptides, Glutamine, Zinc Carnosine, BCAAs, Hyaluronic Acid |
| Cognitive | Lion's Mane, Alpha GPC, Bacopa, L-Theanine, Phosphatidylserine, Caffeine + L-Theanine, Rhodiola |
| Sleep | Apigenin, Glycine, Melatonin, Tart Cherry, GABA, Magnesium, L-Theanine, Phosphatidylserine |
| Longevity / NAD+ | NMN, NAD+, Resveratrol, Spermidine, Quercetin, Apigenin, Curcumin, Lion's Mane |
| Sexual health / hormones | Tongkat Ali, Fenugreek, L-Arginine, Maca Root, L-Citrulline |
| Growth-hormone support | Ashwagandha, GABA, Fenugreek, L-Arginine, Tongkat Ali |
| Skin | Collagen Peptides (skin variant), Vitamin C (skin variant), Hyaluronic Acid, Biotin |
| Gut / immune | Probiotics, Prebiotics, Zinc, Vitamin C, Vitamin D3, Fish Oil, Glutamine, Glucomannan |

### 6.3 5 Exemplar Bidirectional Pairings (highest leverage)

These are the highest-impact peptide↔supplement pairs that should anchor Phase 1 conversions. Each represents a natural bidirectional cross-link with mutually reinforcing mechanism / evidence content.

| # | Peptide | Supplement | Rationale |
|---|---|---|---|
| **1** | Semaglutide / Tirzepatide / Retatrutide (GLP-cluster) | **Berberine** | Berberine literally activates the GLP-1 secretion pathway (mentioned in current Berberine mechanism section, unlinked). Berberine is the leading "natural GLP-1" reference compound. Bidirectional unlock: GLP peptides reference Berberine as the natural-alternative inquiry path; Berberine references GLP peptides for users wanting prescription-grade efficacy. |
| **2** | NAD+ (peptide) | **NMN + NAD+ (supplement)** | The supplement NMN raises NAD+ levels; the peptide NAD+ delivers NAD+ directly. The two supplement pages (`/supplements/nad-plus`, `/supplements/nmn`) and one peptide page (`/peptides/nad-plus`) are a near-perfect tri-link. Currently zero cross-links between them. |
| **3** | CJC-1295 / Ipamorelin / Sermorelin / MK-677 (GH-axis) | **Ashwagandha + GABA** | Ashwagandha reduces cortisol → unlocks endogenous GH pulsatility. GABA stimulates pituitary GH release (mentioned in supplement Ashwagandha overview, unlinked). Both supplements are in the `growth-hormone` category but neither links to a single GH peptide. Bidirectional unlock: peptide users get "supplement adjuncts for natural GH support"; supplement users get "if you want more aggressive GH support, here are the peptides." |
| **4** | BPC-157 / TB-500 / KPV (healing cluster) | **Curcumin + Collagen Peptides + Glutamine** | The healing cluster is the most-searched peptide category. The supplement adjuncts (Curcumin for systemic anti-inflammation, Collagen for tendon/joint support, Glutamine for gut healing) are the natural complementary stack. Currently zero links between either side. |
| **5** | DSIP / Selank / Semax (sleep + cognitive Russian-origin cluster) | **Apigenin + Glycine + Melatonin** (v4.3-supp-experimental cluster) | Both clusters target sleep / cognitive endpoints. The supplement experimental cluster is the newest, deepest, most-linked content on the supplement side; the Russian peptide cluster is niche but high-intent. Bidirectional unlock here would significantly improve dwell time on both sides. |

### 6.4 Orphans / unclear matches

**Peptides without natural supplement matches:**
- PT-141, Melanotan II (sexual health / melanocortin) — partial supplement match in Tongkat Ali / Maca, but mechanistic distance is large.
- Epitalon (pineal) — no supplement equivalent.
- Cagrisema (blend) — covered by Berberine pairing via component peptides.
- IGF-1 LR3, Follistatin — no direct supplement equivalent; closest is BCAAs / Protein Powder but the mechanism distance is large.

**Supplements without natural peptide matches:**
- Vitamins (Vitamin C, Vitamin D3, Biotin) — pure micronutrients with no peptide analogue.
- Probiotics / Prebiotics — no peptide equivalent.
- Caffeine — pure stimulant, no peptide.
- Garcinia Cambogia, Glucomannan — weight-loss adjuncts; possible weak link to GLP peptides but mechanism is distant.
- Hyaluronic Acid — strongest skin-health match is GHK-Cu; worth considering.

These get standalone treatment — strong on supplement-internal cross-links, no forced peptide cross-link.

---

## 7. Phase 1 Priority Order Recommendation

### 7.1 Signal sources used

- **GSC impression data:** No GSC export found in repo (checked `/Users/mark/Desktop/profpeptide/data/`, `/exports/`, `/analytics/`, repo root). Signal not available. **Recommend Mark provide GSC top-pages CSV before Phase 1 commits** so we order by actual traffic.
- **Content depth proxy:** Line count + last-modified date.
- **Cross-link impact:** Pages that unlock the 5 exemplar bidirectional pairings first.
- **Category dominance:** Pages in the densest categories (longevity, sleep-recovery, metabolic) get earlier slots.

### 7.2 Recommended Phase 1 first batch (5 exemplar pages)

These are the highest-leverage conversions for establishing the v4.4-supp spec and proving the bidirectional cross-link pattern:

1. **`berberine`** — already has Comparisons block, mentions GLP-1, unlocks GLP-cluster cross-link. Best exemplar for the metabolic supplement pattern.
2. **`ashwagandha`** — adaptogen exemplar, GH-axis cross-link unlock, dense content base. Most-searched supplement in the GH category.
3. **`nmn`** — longevity exemplar, NAD+ cluster anchor. Cross-links to `/peptides/nad-plus` and `/supplements/nad-plus` (tri-link).
4. **`tart-cherry`** — already on v4.3-supp-experimental pattern (closest to canonical). Test case for converting the experimental subset to the new canonical with minimal effort.
5. **`magnesium`** — highest-traffic mineral baseline (best estimate without GSC data). Standalone treatment (no natural peptide cross-link) — proves the spec works for orphan supplements too.

### 7.3 Recommended Phase 2 batches (rest of corpus)

Group by theme cluster to maximize bidirectional cross-link unlock per batch:

- **Batch A — Metabolic** (8): chromium, alpha-lipoic-acid, green-tea-extract, garcinia-cambogia, glucomannan, fenugreek, caffeine, caffeine-l-theanine
- **Batch B — Recovery + Sleep** (10): curcumin, collagen-peptides, collagen-peptides-skin, glutamine, hyaluronic-acid, zinc-carnosine, apigenin, glycine, melatonin (+ tart-cherry from Phase 1)
- **Batch C — Cognitive** (7): alpha-gpc, bacopa-monnieri, l-theanine, phosphatidylserine, rhodiola-rosea, lions-mane, gaba
- **Batch D — Performance** (8): creatine, beta-alanine, bcaas, l-arginine, l-citrulline, l-citrulline-malate, protein-powder, electrolyte-powders
- **Batch E — Longevity** (7): nad-plus, resveratrol, coq10, spermidine, quercetin, vitamin-d3 (+ nmn from Phase 1)
- **Batch F — Sexual + GH-axis** (6): tongkat-ali, maca-root, zma, biotin (+ ashwagandha from Phase 1, + fenugreek from Batch A)
- **Batch G — Gut + Immune** (7): probiotics, prebiotics, zinc, vitamin-c, vitamin-c-skin, fish-oil
- **Standalone passes**: vitamins / minerals with no cross-link unlock — batch by file size.

**Total commits estimated:** ~58 individual commits (53 conversions + 5 spec-related: spec doc, supplement-vendors.json scaffold if approved, new SupplementVendorBlock component, peptide-side Related Supplements block additions, FAQ-bug regression test if applicable).

---

## 8. Open Judgment Calls for Mark to Resolve

Before Phase 1 conversion authorization, the following decisions need Mark input:

### Q1 — Vendor approach
Do PP-affiliated supplement carriers exist (e.g., Thorne, Pure Encapsulations partnerships, Renue By Science for NMN/NAD+)? If yes, build `supplement-vendors.json` + `SupplementVendorBlock`. If no, stay on Amazon Associates with the proposed quality-markers callout above each link.

### Q2 — Studies plain-English cards
Required for all 53 pages, or only `Strong evidence tier` (~15 pages)? Strong-tier-only saves ~38 pages × 5 cards = 190 study summaries.

### Q3 — Latest research D1-supp criteria
12-month window (proposed) or different? Supplements move slower than phased trials; 12-month feels right but is judgment-dependent.

### Q4 — 10-H2 vs 12-H2 vs match peptide 14-H2
Proposed 10-H2 drops timeline + makes storage conditional. Alternative: keep all 14 to maximize PageTOC parity with peptide pages. Trade-off: shorter pages but visually different TOCs; longer pages but consistent structure.

### Q5 — Title style: question vs declarative
Peptide canonical is question-style. v4.3-supp-experimental adopted question-style. Legacy 49 pages use declarative ("How It Works"). Confirm full migration to question-style.

### Q6 — Storage H2 inclusion
Always include / always omit / conditional? Proposed: conditional (include for NMN, fish oil, probiotics; omit for stable minerals). Lock the criterion explicitly.

### Q7 — Aspect table standardization-marker row
Proposed adds a `Standardization marker` row replacing peptide's "Missed dose" row. Alternative: keep Missed dose, add Standardization marker as 7th row. Trade-off: 6-row parity vs information density.

### Q8 — Calculator CTA replacement
Drop calculator footer entirely, or replace with "Read related peptide research →" CTA pointing to cluster page? Proposed: replace, since supplements don't need reconstitution math but bidirectional cross-link reinforcement is the wave's goal.

### Q9 — Limitations section framing
Peptide uses "investigational / RUO / regulatory gray area". Proposed supplement framing: "evidence quality / RCT vs observational / heterogeneity / dose-response uncertainty / population specificity". Confirm framing OK or propose alternative.

### Q10 — Phase 1 exemplar size
5 exemplars proposed (Berberine, Ashwagandha, NMN, Tart Cherry, Magnesium). Trade-off: 5 covers all theme variants; 3 (Berberine, Ashwagandha, NMN) is faster but doesn't test orphan or experimental conversion. Confirm 5 or pick subset.

### Q11 — GSC data
Can you export Search Console top 100 supplement-page impressions so Phase 1+ batches can be re-ordered by traffic? If not available, fall back to category dominance + file-size proxy.

### Q12 — Peptide-side Related Supplements block
Add to every peptide page, or only to peptides with a strong supplement match (per §6.3)? Trade-off: bidirectional symmetry vs forced cross-link noise on orphan peptides (PT-141, MT-II, Epitalon).

---

## 9. Estimated Scope

### Phase 1 — exemplar wave
- **Commits:** ~8 (5 exemplar page conversions + 1 spec doc lock + 1 component scaffold if Q1 = yes + 1 backlog tracker)
- **Time estimate:** 1 working session (3–4 hours of focused work) per exemplar page once spec is locked. ~20–25 hours total for Phase 1.
- **Outputs:** 5 converted exemplar pages, locked `docs/spec/supplement-profile-v4.4-canonical.md`, optional SupplementVendorBlock component, optional supplement-vendors.json scaffold.
- **Hard stop:** end of Phase 1 — review with Mark before Phase 2 batches fire.

### Phase 2 — corpus wave (remaining 48 pages)
- **Commits:** ~50 (48 conversions + 2 cleanup commits)
- **Time estimate:** ~2 working sessions per batch (A–G). 7 batches × 2 sessions ≈ 14 sessions / ~50–60 hours total.
- **Outputs:** all 53 supplement pages on v4.4-supp canonical, full bidirectional cross-link unlock, peptide-side Related Supplements blocks added per Q12 ruling.
- **Hard stop:** end of Phase 2 — wave V44-supp-1 complete; awaiting end-of-wave deploy decision per Mark.

### Phase 3 — spec extraction (optional, mirrors V44-1 Phase 3)
- **Commits:** 1 (supplement canonical spec doc + cross-reference updates to peptide canonical)
- **Time estimate:** 2–3 hours.
- **Outputs:** `docs/spec/supplement-profile-v4.4-canonical.md` finalized as authoritative; cross-references added to `peptide-profile-v4.4-canonical.md` linking the two spec docs.

**Total wave estimate:** ~70–90 hours / 8–10 working sessions for Phases 1 + 2 + 3. Significantly larger than V44-1 (which was ~30 hours) due to corpus size (53 vs 31) and the new component / data layer scaffolding.

---

## 10. Risks & Considerations Flagged During Audit

- **No supplement-vendors.json scaffolding** — Phase 1 will block on Q1 decision. If approved, building the data layer + component adds ~5 hours to Phase 1.
- **Bidirectional cross-link drift risk** — adding peptide-side Related Supplements blocks means future peptide page edits could break supplement-side links. Recommend a CI script or pre-commit hook that validates all internal links resolve. Out of scope for V44-supp-1; flag as separate backlog item.
- **v4.3-supp-experimental rework cost** — the 4 newest pages (apigenin, glycine, melatonin, tart-cherry) already have Quick Answer + Key Facts + FAQ. Decide whether the new canonical adopts or replaces those elements. Proposed spec replaces them with standard 3-line metadata + Latest research callout, but the existing Quick Answer pattern is arguably better UX than the metadata block for entry-level supplements. **Open as Q13 if needed.**
- **Duplicate-name pages** — `collagen-peptides` + `collagen-peptides-skin` and `vitamin-c` + `vitamin-c-skin`. Confirm both stay separate (current state) or consolidate during conversion. Adds ~30 min per case if consolidating.
- **Sitemap claims 51 profiles, but 53 files exist** — index page metadata says "51 supplement profiles" (matches effective unique products after dedup); sitemap-0.xml has 53 URLs (matches files). Minor inconsistency — flag and fix during Phase 1.
- **Last-modified uniformity (2026-05-11)** — all 53 pages touched on the same day, suggesting a batch reformat. None are stale in a content sense, but none are fresh either. Conversion is a content-quality upgrade, not just a structural refactor.

---

## End of Phase 0 Audit Report

**Next step:** Mark reviews this report + resolves Q1–Q12 (and Q13 if relevant). Phase 1 fires only after explicit go-ahead with resolutions noted.

**No code edits performed in Phase 0.** Single commit on this report only.
