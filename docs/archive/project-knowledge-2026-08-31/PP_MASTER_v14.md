# Prof Peptide (PP) — Master Ref Doc

**Status:** ACTIVE REFERENCE — single-doc format
**Version:** v14 (June 7, 2026) — focused update: **iOS app v1.0.7 is LIVE on the App Store** (the big content sync shipped). Site / supplement / blends / OG / sitemap state all **[Unchanged — see v13]**.
**Cross-referenced in:** SCS_MP; PP_X_POSTS v28/v30; PP_INDEXING v22
**Domain:** profpeptide.com · **Repo:** ~/Desktop/profpeptide (Next.js, Vercel auto-deploy from main)

---

## v13 → v14 CHANGELOG

**APP STATE (Prof Peptide iOS) — v1.0.7 LIVE:**
- **v1.0.7 released to the App Store** (the version that contains the full content sync **plus** the DNA icon + relocated calculator disclaimer). Built via EAS, submitted, approved, released.
- **1.0.7 content / listing:**
  - Library now **48 peptide profiles + 53 supplement profiles**, **21 trusted suppliers**, two new categories (**Bioregulators**, **Sleep & Recovery**); new GH stacks, metabolic compounds, full bioregulator set; refreshed discount codes.
  - **What's New:** 48 peptide profiles, new GH stacks + metabolic compounds + bioregulators, two new categories, refreshed codes.
  - **Subtitle changed → "Peptide Dosage Calculator"** (ASO: dropped the low-volume "library" term; reinforces the highest-intent query in the highest-weight field). Keyword de-dupe across name/subtitle/keywords was discussed; verify the live keyword field in ASC before assuming the swap was applied.
  - Promotional Text + Description carried the corrected copy (48/53, 21 suppliers, "Choose from preset compounds," updated categories).
- **App Store URL (verified):** `https://apps.apple.com/app/prof-peptide/id6761995269`
- Build pipeline note: EAS auto-incremented buildNumber 1.0.6 → 1.0.7; ASC allows one in-flight draft, so the 1.0.5 draft was edited in place to 1.0.7 (build 4 removed, 1.0.7 build attached). The three "Release This Version"/"Add for Review"/submit clicks are Mark's alone (CINC never touches them).

**X posts:** app 1.0.7 update post (@profpeptideapp, two variants) + @profpeptidehq quote tweet drafted — see **PP_X_POSTS v28**. Native-image learning: attach the thumbnail on app posts (reach driver).

---

## 📍 Everything else — [Unchanged — see v13]
- **SITE STATE:** v4.4 (peptides) + v4.4-supp (supplements) specs operating cleanly; 11 blend/combo + stack pages live under `/peptides/[slug]`; all in the live sitemap.
- **SUPPLEMENT CONVERSION:** 40/53 (75%) after Batch 4; Batch 5 → 47/53; Batch 6 + 2 variant convergence → 53/53. Supplement Phase 2 not advanced this session.
- **OG IMAGE ROUTE:** generic route built, PARKED (worse than placeholder), uncommitted — needs redesign. Per-vendor `/coupons/[slug]/opengraph-image` cards ARE rendering + in active use on X.
- **SITEMAP:** next-sitemap regenerates on every Vercel deploy; don't hand-commit `public/sitemap-0.xml`.
- **Blends Phase 1** target 15–25 (~11 built); blend-aware calculator (v1.0.3+) still ahead.
- **Affiliate anchor:** Glacier Aminos (KLOW + GLOW).
- Deploy discipline: PP site = `git push origin main` only, never Vercel MCP (different account); staged-files-only git; no `git add -A` while parked files exist.

---

## 🎯 Next (carry forward)
1. Supplement Phase 2 → Batch 5/6 to 53/53.
2. Remaining blend/stack profiles + blend-aware calculator (app v1.0.3+).
3. Affiliate vendor outreach list (GSC-demand-validated).
4. PP contact form (scoped; Resend integrated).

## 🔗 Cross-references
- **PP_X_POSTS v28** (app post + QT) / **v30** (vendor format spec)
- **PP_INDEXING v22** · **PP_MASTER_ADDENDUM v2/v3** · **SCS_MP**

---

*PP app v1.0.7 LIVE (content sync + 48 profiles + new categories). Site/supplement/blend state unchanged from v13.*
