# Prof Peptide (PP) — Master Ref Doc

**Status:** ACTIVE REFERENCE — single-doc format (no frozen/active split)
**Version:** v9 (May 23, 2026 evening) — v4.4+ canonical spec section LOCKED, conversion tracker established, Phase 1 Wave V44-1 conversions logged, Ascension 50% discount lock, Ask Coach workstream closure cross-ref
**Cross-referenced in:** SCS_MP v6.4, HR_MASTER v6, PP_INDEXING v19
**Domain:** profpeptide.com
**Repo:** ~/Desktop/profpeptide (Next.js, Vercel auto-deploy from main)

---

## 📍 Status Snapshot (May 23, 2026 evening)

**SITE STATE:** Operating under v4.4+ canonical spec (evolved from v4.4 — see new spec section below)

**APP STATE (Prof Peptide iOS):**
- v1.0.1 LIVE on App Store
- v1.0.2 submitted, status TBD in ASC
- App Store URL: https://apps.apple.com/app/prof-peptide/id6761995269

**X PRESENCE:**
- @profpeptideapp (app account), PP/PREM/PEAK/CORE (promo accounts)

**ACTIVE WAVE:**
- **Wave V44-1** — Peptide profile v4.4+ structural refactor IN FLIGHT
- Phase 1 complete (Follistatin, IGF-1 LR3, Epitalon)
- Phase 2 (20 remaining PARTIAL pages) queued, pending Mark go-ahead
- Phase 3 (canonical spec extraction for PP_MASTER) post-Phase 2

---

## 🔒 v4.4+ CANONICAL SPEC (LOCKED — supersedes prior v4.4 spec)

**The v4.4 spec captured in v7/v8 (14 canonical sections, 6×2 + 3×7 reference tables) has evolved. The live converted pages (Retatrutide, Semaglutide, Tirzepatide as canonical exemplars) reflect the v4.4+ pattern documented below. This section is the authoritative spec going forward.**

### Live exemplar pages (use as implementation reference)

- `/peptides/retatrutide` — most-complete exemplar (33 internal links)
- `/peptides/semaglutide` — structural baseline (no Latest research callout, no Related Blends)
- `/peptides/tirzepatide` — structural baseline (same as Semaglutide)
- **Tirzepatide is the recommended structural exemplar** (cleanest minimum viable canonical shape); lift conditional patterns from Retatrutide when warranted.

### Section taxonomy (15 H2s, canonical order)

| # | Section ID | H2 (templated) |
|---|---|---|
| 0 | overview (rendered before TOC) | What is [Peptide]? |
| 1 | mechanism | How does [Peptide] work? |
| 2 | research | What is [Peptide] used for? |
| 3 | timeline | How long does [Peptide] take to work? |
| 4 | dosing | How is [Peptide] dosed? |
| 5 | how-to-take | How is [Peptide] administered? |
| 6 | stacks | What does [Peptide] stack well with? |
| 7 | side-effects | What are the side effects of [Peptide]? |
| 8 | interactions | Does [Peptide] interact with other drugs? |
| 9 | storage | How should [Peptide] be stored? |
| 10 | limitations | What are the limitations of [Peptide] research? |
| 11 | where-to-buy | Where to source [Peptide] |
| 12 | faq | [Peptide] FAQ |
| 13 | references | References |
| 14 | studies | Published Studies |

**Important departures from the pre-v4.4+ list:**
- "Half-Life and Bioavailability" is NO LONGER its own section. Half-life data lives in the **6-row Aspect table** inside how-to-take (section 5).
- "Legal and Regulatory Status" is NO LONGER its own section. Regulatory framing lives in **limitations** (section 10).
- "Storage and Handling" remains as section 9 but is renamed "How should [Peptide] be stored?"
- "Stacks and blends" renamed to "What does [Peptide] stack well with?"
- "Vs related compound" comparison merged into related-block at page bottom (not its own section)

### Required elements per page

**Header block (above TOC):**
1. **H1 tag pair** — category label + regulatory status (e.g., "Metabolic & Weight Loss" + "Investigational" or "FDA-Approved")
2. **Last reviewed date** near H1
3. **3-line metadata block:**
   - Also Known As: [comma-separated aliases]
   - Peptide Class: [class category]
   - Regulatory Status: [status with brief context]
4. **Latest research callout** (CONDITIONAL — see judgment criteria below)

**Overview section (section 0, before TOC):**
- Plain-language intro paragraph(s) about what the peptide is
- "Reported benefits:" locked label + bulleted overview list
- "Common research dose:" locked label + dose summary paragraph
- "Where to buy:" inline link to `/coupons` (NOT `/best-peptide-vendors`)
- "New to peptide research? Start with the basics →" link (single-peptide pages)

**How-to-take section (section 5):**
- Canonical timing prose paragraph
- **6-row Aspect table** — required structure:
  - Frequency
  - Best time of day
  - Food
  - Injection site rotation
  - Half-life
  - Steady-state
- **Reconstitution table** — 3 rows (BAC water options) × 6 columns (BAC water / Concentration / 4 dose columns)
- *Draw exceeds...* italic footnote under recon table
- "Units vs mcg" explanation paragraph with link to syringes-and-injection-technique guide

**Where-to-source section (section 11):**
- VendorHighlightBlock with 3 highlights + "See all 17 verified vendors →" tail
- Vendor selection per peptide-vendors.json carriage (do NOT pad with non-carriers)

**FAQ section (section 12):**
- ~8 question/answer pairs, mix of string + JSX answers with cross-links

**References section (section 13):**
- Numbered list, links open in new tab, break-words styling for long URLs

**Published Studies section (section 14):**
- Cards format: journal · year + Open Access/Paywalled badge + plain-English summary

**Bottom blocks (after section 14, in this order):**
1. **Tags row** — 4 tag pills
2. **Related Peptides block** (gray bg) — 4-5 internal links to other peptide pages
3. **Related Blends block** (gray bg) — CONDITIONAL (see judgment criteria below)
4. **Comparisons block** (cyan-tinted bg) — only when `/compare/*` URLs exist
5. **Bottom calculator card** — "Need to calculate a dose?" + Open Calculator button
6. **PageDisclaimer** + ContactLink

**JSON-LD metadata:**
- Article schema + BreadcrumbList schema

### Conditional elements (judgment criteria)

**Latest research callout:**
- Include ONLY when peptide has a fresh news beat to surface (e.g., recent Phase 3 readout, FDA approval, major trial result)
- DO NOT fabricate or stretch — better to omit than force
- Format: cyan-tinted box above overview text, ~1-2 sentence summary + "Read the full breakdown →" link

**Dose escalation table in how-to-take:**
- Include WHEN dose tiers are complex (multi-step escalations with conditional logic, 4+ tiers)
- SKIP WHEN dosing is fixed protocol or only 1-2 steps
- Format: 4-row Week / Typical dose / Notes table

**Related Blends block:**
- Include WHEN peptide has natural blend tie-ins (GLP class → CagriSema/GH stacks; recovery peptides → Wolverine/GLOW/KLOW; GH-axis peptides → GH Stack; etc.)
- SKIP WHEN no genuine blend relationship exists (e.g., standalone longevity peptides like Epitalon)

**Comparisons block:**
- Include WHEN `/compare/*` URLs exist for this peptide
- SKIP when no comparison pages exist (opportunity for content creation workstream — adding /compare/* pages unlocks cross-linking for more peptides)

### Locked labels (do not deviate)

- **"Reported benefits:"** — overview bullets
- **"Common research dose:"** — dose number paragraph
- **"Where to buy:"** — inline link in overview to /coupons
- **"New to peptide research? Start with the basics →"** — overview link

### Imports per page

```typescript
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageDisclaimer from '@/components/PageDisclaimer'
import PageTOC from '@/components/PageTOC'
import ContactLink from '@/components/ContactLink'
import VendorHighlightBlock from '@/components/VendorHighlightBlock'
import { buildPageMetadata } from '@/lib/buildPageMetadata'
```

---

## 📊 v4.4+ Conversion Tracker

**Status:** 11 of 31 peptide profiles converted to v4.4+ (35%)

### ✅ CONVERTED (11)

**GLP-cluster exemplars (3) — canonical reference:**
- Retatrutide (33 internal links)
- Semaglutide (23 internal links)
- Tirzepatide (24 internal links)

**Stack/blend pages (4) — converted:**
- GH-Stack (31 links)
- GLOW (27 links, blend)
- KLOW (26 links, blend)
- Semax-Selank (20 links, blend)
- Wolverine-Stack (25 links, blend)

**Phase 1 Wave V44-1 conversions (3 — May 23 evening):**
- Follistatin — commit `a0a9d59` (+284/−99) — Blends ✅, Compare ❌, Escalation ❌, Latest ❌
- IGF-1 LR3 — commit `bdc2c6d` (+286/−101) — Blends ✅, Compare ❌, Escalation ❌, Latest ❌
- Epitalon — commit `e6d4759` (+297/−107) — Blends ❌, Compare ✅, Escalation ❌, Latest ❌

### 🟡 PARTIAL — Phase 2 queue (20 remaining)

Per priority (high-impression first per GSC 28d data, then alphabetical):
- (PARTIAL pages already touched, now CONVERTED — see above)

**Phase 2 batch candidates (alphabetical):**
- AOD-9604, BPC-157, CJC-1295, Cagrilintide, DSIP, GHK-Cu, Ipamorelin, KPV, MK-677, MOTS-C, Melanotan-II, NAD+, PT-141, Selank, Semax, Sermorelin, TB-500, Tesamorelin, Thymosin Alpha-1

**Blend variant outlier (1):**
- Cagrisema — HARD STOP for blend-variant spec discussion before applying

### Commits (Wave V44-1 Phase 1)

All on `main`, unpushed (bundle for end-of-wave push decision):
- `a0a9d59` (Follistatin)
- `bdc2c6d` (IGF-1 LR3)
- `e6d4759` (Epitalon)

---

## 🛠️ Wave V44-1 Workflow Pattern

**Approach:** Live exemplar pattern-matching (use Tirzepatide as structural baseline + lift Retatrutide elements when warranted) rather than working from frozen spec alone.

**Per-page execution:**
1. `web_fetch` live page with fresh `?v=v44-{slug}` query string (site fetch rule)
2. Read converted exemplar in parallel
3. Apply canonical pattern + per-page judgment on conditional elements
4. Preserve existing content where it maps cleanly to new structure (restructure + addition, not rewrite)
5. Individual commits per page; brief diff summary after each
6. Type-check clean (`npx tsc --noEmit` exit 0)
7. NO push until end of wave (push protocol locked)

**Per-page judgment criteria locked in this wave:**
- Latest research callout: include only when fresh news exists, don't fabricate
- Dose escalation table: include when dose tiers complex
- Related Blends: include when natural blend tie-ins exist
- Comparisons: include when /compare/* URLs exist

---

## 🤝 Vendor Code Map (UPDATED v9)

### Default code: `PROFPEPTIDE`
Used by most affiliate vendors as the standard PP code.

### Exception codes (vendor-specific) — LOCKED

| Vendor | Code | Discount | Notes |
|---|---|---|---|
| Royal Peptides | `PROF10` | 10% off | Vendor-specific exception |
| Glacier Aminos | `PROF10` | 10% off | Vendor-specific exception |
| Vital Core Research | `PROF20` | 20% off | Swapped from PROFPEPTIDE in v7 |
| **Ascension Peptides** | **`PROFPEPTIDE`** | **50% off** | **HIGH-DISCOUNT EXCEPTION** — flagged after May 23 X-post error used default 15% |

### **CRITICAL: Ascension Peptides discount lock**

**Ascension uses PROFPEPTIDE code but at 50% off — NOT the default 15%.** This is the "Best Deal" vendor exception. Source of truth: PP_MASTER vendor list (PP_MASTER v5).

**Sync target:** PP_X_POSTS vendor profile cache (Ascension entry) must explicitly state "DISCOUNT = 50% off" to prevent future post errors.

**v3.2 X post template references the discount in paragraph 2 ("Use code [CODE] for [DISCOUNT].")** — error mode is defaulting to "15%" instead of looking up vendor-specific discount. Lock this as exception-map check before drafting any Ascension posts going forward.

### Code source of truth
- For codes on `/coupons/[vendor]` detail pages: hardcoded per vendor file
- For codes on peptide profile pages (VendorHighlightBlock): `src/data/vendors.ts`
- For codes in JSON-LD metadata: hardcoded per vendor `layout.tsx`
- For codes in X posts: per PP_X_POSTS exception map (sync with this doc's exception map)

---

## 🏗️ Site Architecture Insight

[Unchanged — see v7/v8]

- `vendors.ts` canonical source for vendor codes
- Single-edit propagation pattern via VendorHighlightBlock
- next-sitemap regenerates on Vercel build (no manual sitemap commits)
- buildPageMetadata helper for SEO/JSON-LD consistency

---

## 📈 SEO Context (NEW v9)

### GSC 28-day diagnostic findings (May 23, 2026)

**Site is GROWING, not declining** — earlier read of the daily impressions chart as "declining" was an artifact of new deep-rank pages entering the index pulling down averages.

**Aggregate 28d vs prior 28d:**
- Clicks: 2 → 26 (13×)
- Impressions: 228 → 6,910 (30×)
- Average CTR: 0.9% → 0.4% (arithmetic artifact of impression expansion at depth)
- Average position: 28.5 → 32.0 (same — new pages enter at deeper SERPs)

### High-impression PARTIAL pages (data-informed Phase 2 priority)

These pages have impression volume but sit at deep positions; v4.4+ conversion should move the needle:
- Follistatin (384 impressions, position 53.7) — CONVERTED in Phase 1
- IGF-1 LR3 (243 impressions, position 68.1) — CONVERTED in Phase 1
- Epitalon (101 impressions, position 40.9) — CONVERTED in Phase 1

### Top commercial-intent performers (coupon pages)

| Page | Impressions | CTR | Position |
|---|---|---|---|
| /coupons/particle-peptides | 174 | 2.3% | 8.0 |
| /coupons/royal-peptides | 102 | 2.0% | 9.8 |
| /coupons/vital-core-research | 10 | 20% | 5.8 |

Coupon pages convert at 0.5-20% CTR vs 0% for informational peptide pages at depth.

### Observations and watch items

- Mobile vs Desktop split striking: Mobile 85% of clicks (22/26), Desktop 88% of impressions (6,113/788). Mobile CTR 28× Desktop CTR.
- Mobile position regression: 13.3 → 25.1 (possibly composition shift from new deep-rank pages). Watch for v20 cycle.
- Rich result eligibility = "No data" — schema (Breadcrumbs valid) is shipping but no rich-result SERP slot earned in 56 days. May resolve naturally as site authority grows.
- `/compare/*` page expansion identified as backlog opportunity — would unlock cross-linking for more peptide pages.

---

## 📰 Content Ship Log — Recent

| Item | Status |
|---|---|
| Follistatin v4.4+ refactor (Wave V44-1 Phase 1a) | ✅ COMMITTED `a0a9d59` (unpushed) |
| IGF-1 LR3 v4.4+ refactor (Wave V44-1 Phase 1b) | ✅ COMMITTED `bdc2c6d` (unpushed) |
| Epitalon v4.4+ refactor (Wave V44-1 Phase 1c) | ✅ COMMITTED `e6d4759` (unpushed) |
| `/coupons/particle-peptides` net-new | ✅ SILENTLY INDEXED (May 7 crawl) |
| `/news/retatrutide-triumph-1-phase-3-results` | 🟡 Discovered-not-indexed → SUBMITTED May 23 |
| `/news/eco2026-oral-glp1-recap-may-2026` | ✅ SILENTLY INDEXED (~24h post-ship) |

---

## 🎯 Next Milestones

1. **Wave V44-1 Phase 2** — 20 remaining PARTIAL pages (await Mark "Go" after this ref doc update)
2. **Wave V44-1 Phase 3** — Spec extraction from converted pages → integrate into this doc
3. **Cagrisema blend-variant spec discussion** — required before Cagrisema conversion
4. **Ascension X-post correction** — drafted at 50% off (PP/PREM/PEAK/CORE accounts; PP-only fired or pending)
5. **`/compare/*` page expansion** — backlog content workstream to unlock cross-linking
6. **June 6 GSC C1-C3 escalation checkpoint** — see PP_INDEXING v19

---

## 🔗 Cross-References

- **SCS_MP v6.4** — parent doc; vendor verification rules, site fetch rule
- **PP_X_POSTS v19** — promo post conventions + Ascension 50% lock (synced)
- **PP_INDEXING v19** — sitemap baseline 134, June 6 escalation
- **HR_MASTER v6** — Ask Coach workstream closure (cross-app coach prompts)
- **PP_COMMISSIONS** — affiliate revenue tracking
- **WL_MASTER_ACTIVE v1.6** — Capstone Peptides (separate entity)

---

*v4.4+ canonical spec locked. Conversion workstream in flight. Use live exemplars (Tirzepatide structural baseline + Retatrutide conditional patterns) for ongoing Phase 2 work.*
