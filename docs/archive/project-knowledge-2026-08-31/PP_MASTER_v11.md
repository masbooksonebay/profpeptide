# Prof Peptide (PP) — Master Ref Doc

**Status:** ACTIVE REFERENCE — single-doc format
**Version:** v11 (May 27, 2026) — blends > supplements strategic priority lock, OG image route built (pending tomorrow's redesign iteration), Phase 2 Batch 4 supplements ready to push
**Cross-referenced in:** SCS_MP v6.6
**Domain:** profpeptide.com
**Repo:** ~/Desktop/profpeptide (Next.js, Vercel auto-deploy from main)

---

## v10 → v11 CHANGELOG

**Strategic priority correction:**
- ✅ **Blends/stacks content > supplements in revenue value** — strategic priority lock per Mark's signal May 27, 2026
- ✅ **Existing blend roster documented** — 4 blends already exist: Wolverine, GH stack, KLOW, GLOW
- ✅ **Phase 1 blend content scope clarified** — 15-25 NEW blend/stack profile pages to add for comprehensive coverage
- ✅ **PP brand promise reinforced** — "comprehensive" means blends + stacks must have profile coverage, not just peptides + supplements

**Architecture additions:**
- ✅ **Dynamic OG image route built** at `src/lib/coupon-og.tsx` + 18 thin per-vendor wrappers (one per `src/app/coupons/<slug>/opengraph-image.tsx`)
- ⏳ **OG image visual refinement pending tomorrow's session** — current iteration looks worse than original placeholder; horizontal balance + typography needs another pass

**Operational:**
- ✅ **Phase 2 Batch 4 supplements conversion complete** — 9 pages converted: l-arginine, l-citrulline, l-citrulline-malate, maca-root, tongkat-ali, glutamine, hyaluronic-acid, vitamin-c, zinc. ~5,840 lines new content. Ready to push pending Mark's spot-check approval.

---

## 📍 Status Snapshot (May 27, 2026)

**SITE STATE:** Operating cleanly under v4.4 template spec (peptides) + v4.4-supp template spec (supplements)

**APP STATE (Prof Peptide iOS):**
- v1.0.1 LIVE on App Store worldwide (175 countries since May 13, 2026)
- v1.0.2 was submitted May 15 (24-48h expected review window); status to be verified in ASC
- App Store URL: https://apps.apple.com/app/prof-peptide/id6761995269

**X PRESENCE:**
- @profpeptideapp — app's dedicated X account
- PP / PREM / PEAK / CORE — promotional accounts (Cycle 4 in progress, v3.3 format lock per PP_X_POSTS v21)

**OG IMAGE ROUTE STATE:**
- Built and tested locally
- Uses vendors.ts as source-of-truth for code + discount per vendor
- 18 per-vendor wrappers + shared `coupon-og.tsx` helper
- Architecture: static folders preserved (no dynamic [slug] refactor)
- Fallback rendering for missing slugs (e.g., glacier-aminos — not in vendors.ts)
- Current iteration NOT pushed — visual refinement pending tomorrow

---

## 🎯 STRATEGIC PRIORITY LOCK (NEW v11)

**Blends/stacks content > supplements in revenue value.**

Implications for workstream ordering:
1. **Phase 2 supplement conversion remaining batches (5 + 6) finish first** — completion of in-flight work, ~16 slugs to convert
2. **Phase 1 blend/stack content** becomes the NEXT major content workstream after supplements wrap, not parallel-or-later
3. **PP brand promise:** comprehensive coverage of peptides + supplements + blends + stacks. Anything that affects research-grade decisions for users belongs on PP.

---

## 🧪 Content Inventory & Roadmap (UPDATED v11)

### Peptides
- Status: complete on v4.4 template
- Full peptide library reflects v4.4 spec across all profiles

### Supplements (v4.4-supp)
- **42 of 53 v4.4-supp converted (79%)** as of Batch 4 push pending
- Phase 2 progress through Batches 1-4
- **Batch 5 queued (7 slugs):** no-peptide-analogue group (creatine, bcaas, beta-alanine, electrolyte-powders) + gut (prebiotics, probiotics) + vitamin-d3 → 49 of 53 (92%)
- **Batch 6 queued (3 slugs + cleanup):** metabolic cluster (green-tea-extract, garcinia-cambogia, glucomannan) → 53 of 53 (100% spec complete)

### Blends/Stacks (NEW comprehensive coverage)

**Existing roster (4 profiles):**
- Wolverine (template precedent)
- GH stack
- KLOW
- GLOW

**Phase 1 expansion target: 15-25 new profile pages.** Strategic priority workstream after supplement Phase 2 completes.

**Phase 1 candidate categories** (to be scoped in detail when workstream opens):
- Common informal stacks: CJC-1295 + Ipamorelin (separate from blend brand name), BPC-157 + TB-500, Sema + Reta protocols, GH-axis combos
- Branded vendor blends: review vendor catalogs for branded blends worth profile pages
- Goal-driven stacks: recovery, healing, GH-axis, longevity, sexual health, cognitive

### Vendor coupon pages
- `/coupons` (main directory)
- `/coupons/[vendor]` per-vendor detail pages (18 vendors)
- OG image route: dynamic per-vendor (built v11, pending visual refinement)

---

## 🔓 Vendor Code Exception Map (UNCHANGED — synced with vendors.ts)

### Default code: `PROFPEPTIDE`

### Discount cache (vendors.ts is source-of-truth — corrected v11 from previous master map errors)

| Vendor | Code | Discount |
|---|---|---|
| Ascension Peptides | PROFPEPTIDE | 50% |
| Vital Core Research | PROF20 | 20% |
| Oasis Labs | PROF15 | 15% |
| Peptide Partners | PROFPEPTIDE | 10% |
| Royal Peptides | PROF10 | 10% |
| Glacier Aminos | PROF10 | 10% |
| Behemoth Labz | PROF10 | 10% |
| PureRawz | PROF10 | 10% |
| EZ Peptides | PROFPEPTIDE | 10% |
| Almighty Peptides | PROFPEPTIDE | 10% |
| Apollo Peptides | PROFPEPTIDE | 10% |
| BioCollex | PROFPEPTIDE | 10% |
| Ignite Peptides | PROFPEPTIDE | 10% |
| Integrative Peptides | PROFPEPTIDE | 10% |
| Limitless Life | PROFPEPTIDE | 10% |
| Particle Peptides | PROFPEPTIDE | 10% |
| Spartan Peptides | PROFPEPTIDE | 10% |

**SOURCE-OF-TRUTH:** `src/data/vendors.ts` — read from there, not from this cache. This table is a sync reference, not authoritative.

### Data gap flagged
- **Glacier Aminos** has a `/coupons/glacier-aminos` detail page but is NOT in vendors.ts. OG image renders fallback. Fix queued: add Glacier to vendors.ts with code: "PROF10" / discount: "10% off". Separate CC task.

---

## 🔒 v4.4 + v4.4-supp Template Spec (UNCHANGED)

[See PP_MASTER v7 for full v4.4 peptide spec, PP_V44-supp-1_Phase1_CC_prompt.md for full v4.4-supp spec]

Key conventions:
- Question-format H2s used identically in TOC and on-page headings
- Plain-language intro paragraphs on most sections
- Metadata block: Also Known As / Peptide Class / Regulatory Status (NO Half-Life)
- Last reviewed date near H1
- Bold lead-ins (bold-then-period pattern)
- Increased internal cross-linking density
- Peptides: "Reported benefits:" / "Common research dose:"
- Supplements: "Common dose:" / "serving size" (FDA-compliant terminology, not "research dose")

### Locked patterns from supplement Phase 2:
- **Sub-tier Evidence Tier breakdowns** for mechanism/biomarker/hard-endpoint splits (resveratrol exemplar from Batch 3)
- **Context-dependent Moderate** beats forced Mixed-for-symmetry (ashwagandha testosterone, tongkat-ali testosterone)
- **Load-bearing trial divergence** treated centrally (fish-oil REDUCE-IT vs STRENGTH, hyaluronic-acid Oe 2016/Nelson 2015 vs older skepticism via molecular-weight discussion)
- **Dual/multi-cluster cross-link** when mechanism evidence supports (gaba, apigenin)
- **Option A scope-distinction** for parent/variant pairs (vitamin-c/vitamin-c-skin, zinc/zinc-carnosine, collagen-peptides/collagen-peptides-skin, l-citrulline/l-citrulline-malate)

---

## 📅 Local Spot-Check Routine (LOCKED — UNCHANGED from spot-check addendum)

When CC reports batch complete and Mark needs review of unpushed changes:
1. Terminal command `cd ~/Desktop/profpeptide && npm run dev` in code block (if dev server not already running)
2. Clickable http://localhost:[PORT]/supplements/[slug] links — flagged/judgment-call pages first, then full slug list
3. Note to wait for "Ready" message before clicking

Pattern extends to HR/SC/WN with repo path substitution.

---

## 📅 Changelog

**May 27, 2026 (v10 → v11):**
- ✅ **Blends/stacks > supplements priority lock**
- ✅ **Existing blend roster documented** (Wolverine, GH stack, KLOW, GLOW)
- ✅ **Phase 1 blend content scope:** 15-25 new profiles, queued post-supplement Phase 2
- ✅ **Dynamic OG image route built** — `src/lib/coupon-og.tsx` + 18 per-vendor wrappers
- ⏳ **OG image visual refinement pending** — current iteration looks worse than placeholder, tomorrow's session iterates
- ✅ **Batch 4 supplements complete** — 9 pages, ~5,840 lines, ready to push
- ✅ **Vendor discount cache corrected** — vendors.ts is source-of-truth (EZ at 10% not 15%, etc.)
- ✅ **Glacier Aminos vendors.ts data gap flagged** for separate fix

**Prior session entries:** unchanged. See v10 history.

---

## 🎯 Next Milestones

1. **Push Batch 4 supplements** (pending Mark's spot-check approval)
2. **Iterate OG image design tomorrow** — current iteration parked
3. **Batch 5 supplements** (no-peptide-analogue + gut + vitamin-d3) → 92% spec complete
4. **Batch 6 supplements** (metabolic cluster + cleanup) → 100% spec complete
5. **PP Phase 1 blend/stack content** — 15-25 new profiles, post-supplements priority workstream
6. **Glacier Aminos vendors.ts entry** — quick CC task
7. **JSON-LD audit sweep on v4.3 pages** — lions-mane truncation precedent caught in Batch 3
8. **Switch X post URLs** from `/coupons` to `/coupons/[vendor]` once OG image redesign approved + pushed

---

## 🔗 Cross-References

- **SCS_MP v6.6** — parent doc
- **PP_X_POSTS v21** — promotional post conventions + vendor code exception map sync + v3.3 format lock
- **PP_INDEXING v20** — sitemap + indexing state
- **PP_COMMISSIONS** — affiliate revenue tracking

---

*PP master ref doc. Updated as content phases complete, strategic priorities lock, architecture additions ship.*
