# Prof Peptide (PP) — Master Ref Doc

**Status:** ACTIVE REFERENCE — single-doc format
**Version:** v12 (May 28, 2026) — supplement inventory correction (40/53), Batch 4 live, Batch 5 in flight, Fusion fix live, Glacier data-gap resolved
**Cross-referenced in:** SCS_MP v6.7
**Domain:** profpeptide.com
**Repo:** ~/Desktop/profpeptide (Next.js, Vercel auto-deploy from main)

---

## v11 → v12 CHANGELOG

**Supplement Phase 2 progress + inventory correction:**
- ✅ **Batch 4 pushed live** (commit fe1f0f3) — 9 supplements: l-arginine, l-citrulline, l-citrulline-malate, maca-root, tongkat-ali, glutamine, hyaluronic-acid, vitamin-c, zinc
- ⚠️ **INVENTORY CORRECTION:** true converted count is **40/53 (75%)**, NOT 42. Two variant scope-distinction pages (`collagen-peptides-skin`, `vitamin-c-skin`) exist as v4.3 stubs that were overcounted as converted — they accept traffic + are cross-linked from parents but never got their own v4.4-supp deep-dive content.
- 🔄 **Batch 5 in flight** — CC converting 7 slugs (creatine, bcaas, beta-alanine, electrolyte-powders, prebiotics, probiotics, vitamin-d3) → 47/53 when pushed
- 📋 **Batch 6 planned** — 4 primary (garcinia-cambogia, glucomannan, green-tea-extract, magnesium) + 2 variant convergence (collagen-peptides-skin, vitamin-c-skin) → 53/53 (100%)

**Coupon infrastructure:**
- ✅ **Fusion Peptide coupon fix pushed** (commit 9762edd) — detail page code MARK15 → PROFPEPTIDE (visible UI + meta description; JSON-LD was already correct); affiliate ref ?ref=PROFPEPTIDE → ?ref=pacjbqyu across vendors.ts + directory + detail Shop link. Confirmed live.
- ✅ **Glacier Aminos data-gap appears resolved** — live directory renders Glacier (PROF10, 10%, ref=cknlhxrm, Editor's Pick). Old "not in vendors.ts / OG falls back" flag is likely stale. Pending one-line confirm: `grep -n glacier src/data/vendors.ts`.

---

## 📍 Status Snapshot (May 28, 2026)

**SITE STATE:** v4.4 (peptides) + v4.4-supp (supplements) template specs operating cleanly.

**APP STATE (Prof Peptide iOS):**
- v1.0.1 LIVE worldwide (175 countries since May 13, 2026)
- v1.0.2 submitted; verify status in ASC
- App: https://apps.apple.com/app/prof-peptide/id6761995269

**SUPPLEMENT CONVERSION:**
- **40 / 53 converted (75%)** after Batch 4
- Batch 5 (7 slugs) converting → 47/53 (89%)
- Batch 6 (4 primary + 2 variants) → 53/53 (100%)

**OG IMAGE ROUTE:** built, PARKED (current iteration worse than placeholder), uncommitted in working tree. Needs redesign pass. When fixed + pushed → switch X URLs to /coupons/[vendor].

---

## 🎯 STRATEGIC PRIORITY (unchanged from v11)

**Blends/stacks > supplements in revenue value.** Sequence: finish supplement Phase 2 (Batches 5-6 → 100%) → then PP blends/stacks Phase 1 (15-25 new profiles).

**Blends affiliate note (NEW v12):** Glacier Aminos stocks KLOW + GLOW (KLOW 80 is Glacier-exclusive: KPV + LL-37 + Oxytocin + Wolverine blend). Natural affiliate anchor for the KLOW/GLOW blend profile pages when the blends workstream opens.

---

## 🧪 Supplement Phase 2 — Batch Plan

### Batch 4 (DONE, live — fe1f0f3)
l-arginine, l-citrulline, l-citrulline-malate, maca-root, tongkat-ali, glutamine, hyaluronic-acid, vitamin-c, zinc

### Batch 5 (IN FLIGHT) — locked treatments
Order: creatine → bcaas → beta-alanine → electrolyte-powders → prebiotics → probiotics → vitamin-d3
- **creatine:** sub-tier breakdown (Strong strength/power, Moderate sarcopenia, Emerging-Moderate cognition) + forms-compared central (monohydrate gold standard; HCl/buffered/EE don't outperform) + vegetarian/vegan higher-response note
- **bcaas:** context-dependent Moderate + load-bearing trial divergence central (Wolfe 2017, Plotkin 2021; fasted/endurance niche, redundant with adequate protein)
- **beta-alanine:** Standard (Strong in ~60s–4min carnosine-buffering window; paresthesia caveat + sustained-release)
- **electrolyte-powders:** Standard category page; LMNT high-sodium vs balanced as positioning, NO variant split
- **prebiotics:** Standard with INTEGRATED fiber-type forms-compared (inulin/FOS/GOS/resistant starch); NOT sub-tier
- **probiotics:** sub-tier by strain-specific endpoint + "no strain = no indication" central framing; Suez 2018 caveat; critical-care/immunocompromised bacteremia safety caveat (research-context framing)
- **vitamin-d3:** vitamin-c parent pattern (deficiency-correction Strong vs supplementation-in-replete Mixed; VITAL null cancer/CV; Martineau 2017 modest respiratory). **Falls = Moderate/contested (USPSTF + high-dose-D-increases-falls signal), NOT flatly Strong.** Bone health = cleanest Strong endpoint. No scope-variant split.

### Batch 6 (PLANNED) → 100%
- Primary (4): garcinia-cambogia, glucomannan, green-tea-extract, magnesium
- Variant convergence (2): collagen-peptides-skin, vitamin-c-skin — **scope-limited pages** (cosmetic/skin scope only) cross-linked to parents for shared content, NOT full duplication

### Blends/Stacks (Phase 1, post-supplements)
Existing (4): Wolverine, GH stack, KLOW, GLOW. Target: 15-25 new profiles.

---

## 🔒 v4.4-supp Locked Patterns (unchanged)
- Labels: "Common dose:" (NOT "Common research dose:"), serving/serving size
- No peptide-specific terms (no research dose, investigational, RUO, vial, reconstitution)
- Sub-tier Evidence Tier breakdowns; context-dependent Moderate; load-bearing trial divergence handled centrally; Option A scope-distinction for parent/variant pairs

---

## 📅 Local Spot-Check Routine (LOCKED)
When CC reports batch complete: (1) `cd ~/Desktop/profpeptide && npm run dev` in code block; (2) clickable http://localhost:[PORT]/supplements/[slug] links — flagged/judgment-call pages first; (3) wait-for-"Ready" note. Commit stages ONLY the batch files — OG image files stay parked (no `git add -A`).

---

## 📅 Changelog

**May 28, 2026 (v11 → v12):**
- ✅ Batch 4 pushed live (fe1f0f3)
- ⚠️ Inventory correction: 40/53 (not 42) — 2 variant stubs overcounted
- 🔄 Batch 5 converting (7 slugs, treatments locked)
- 📋 Batch 6 + variant convergence plan locked
- ✅ Fusion coupon fix pushed (9762edd) + confirmed live
- ✅ Glacier data-gap likely resolved (directory renders PROF10/cknlhxrm; pending vendors.ts grep)
- ✅ Blends affiliate note: Glacier stocks KLOW + GLOW

**Prior entries:** see v11 history.

---

## 🎯 Next Milestones
1. Batch 5 bundle review → spot-check → push (47/53)
2. Batch 6 + variant convergence → 100%
3. PP blends/stacks Phase 1 (15-25 profiles)
4. OG image redesign → push → switch X URLs to /coupons/[vendor]
5. Glacier vendors.ts grep + Almighty/Limitless cache corrections
6. JSON-LD audit sweep on remaining v4.3 pages

---

## 🔗 Cross-References
- **SCS_MP v6.7** — parent doc
- **PP_X_POSTS v22** — vendor cache (live directory captured), v3.3 format, Fusion + Glacier drafts
- **PP_INDEXING v20** — sitemap/indexing
- **PP_COMMISSIONS** — affiliate revenue tracking

---

*PP master ref doc. Supplements at 75%, Batch 5 in flight, blends next. Fusion fix live.*
