# PP SEO — v15

**Status:** ACTIVE
**Version:** v15 (July 9, 2026) — **GSC DATA ANALYSIS + corrected priority plan.** Supersedes the ChatGPT design/SEO audits' assumptions with actual Search Console data. Establishes **coupon-page CTR optimization as the #1 SEO priority** (data-driven), and deprioritizes the peptide-content-page build the audit proposed.
**Supersedes:** v14. All v14 affiliate-program content carries forward unchanged; this adds the SEO diagnosis + plan.
**Data source:** GSC exports (Queries.csv, Pages.csv) pulled July 9, 2026 via CINC, saved to project folder. 28-day headline: 21.7K impressions, 151 clicks, 0.7% CTR, avg position 17.3.

---

## 🔑 The core finding (overturns the audit's plan)

Three external audits (ChatGPT: content, visual, SEO) were run. The SEO audit proposed building **peptide intent pages** (semaglutide dosage, BPC-157 benefits, retatrutide dosage, etc.). **The actual GSC data says do NOT prioritize that** — because ChatGPT couldn't see the Search Console data, its plan targeted queries PP barely gets impressions on.

**What the GSC data actually shows:** PP's search demand is overwhelmingly **coupon/vendor-code queries**, and its biggest, cheapest wins are **CTR fixes on coupon pages that already rank on page 1**.

### Where the impressions actually are (Pages.csv, by impressions)
| Page | Impr | Pos | CTR | Read |
|---|---|---|---|---|
| **/coupons/amino-club** | **6,092** | 6.6 | 0.87% | #1 page — 28% of all impressions, badly under-clicked |
| /supplements/glucomannan | 2,057 | 12.3 | 0.05% | Big content opportunity — near-zero CTR |
| /coupons/glacier-aminos | 1,914 | 7.1 | 0.73% | Page 1, under-clicked |
| /guides/syringes-and-injection | 1,363 | 12.0 | 0.22% | Content opportunity |
| /peptides/klow | 752 | 11.4 | 0.27% | Borderline |
| /peptides/igf-1-lr3 | 702 | 54.5 | 0% | Ranking page 6 — deprioritize |
| /peptides/tb-500 | 572 | 64.3 | 0% | Page 7 — deprioritize |
| /coupons/midwest-peptide | 379 | 9.7 | **3.17%** | Good CTR — title style to replicate |
| /coupons/oasis-labs | 329 | 7.0 | 0.91% | Under-clicked |
| /coupons/royal-peptides | 250 | 8.6 | **0.0%** | Page 1, zero clicks — title problem |
| /coupons/synthesis-peptides | 162 | 12.4 | **5.56%** | Good CTR — replicate |

### Top queries (Queries.csv) — coupon-dominated
"amino club promo code" (1,268 impr, pos 7.25, 0.39% CTR) · "amino club discount code" (815, pos 6.33) · "glacier aminos" (468, pos 9.6) · "amino club coupon code" (401, pos 4.95) · dozens more coupon variants. The **amino club cluster alone ≈ 4,000+ impressions**, mostly positions 4–7, mostly sub-1.5% CTR.

Peptide-content queries the audit targeted barely register: "tirzepatide" pos 87, "thymosin beta 4" pos 70, "igf-1 lr3" pos 61 — tiny impressions, unwinnable positions.

### The diagnostic tell
Midwest (3.17% CTR) and Synthesis (5.56%) get **far better CTR than amino-club (0.87%) and royal (0.0%)** at similar positions. → the low-CTR pages have a **fixable title/meta problem**, proven by the higher-CTR coupon pages. This is the cheapest, highest-ROI fix in SEO: you already rank, you're just not getting clicked.

---

## 📋 Corrected priority plan (data-driven)

### PRIORITY 1 — Coupon-page CTR rewrites (do first, highest ROI, = affiliate revenue)
Rewrite `<title>` + meta description on the high-impression/low-CTR coupon pages so the snippet earns the click. No authority-building needed — pages already rank. Order by impressions:
amino-club (6,092) → glacier-aminos (1,914) → oasis-labs → royal-peptides (0% CTR!) → midwest (replicate its winning style).
**Title pattern (use REAL verified codes/discounts):** "[Vendor] Discount Code — Save X% (Verified, 2026) | Prof. Peptide". CC prompt issued July 9.

### PRIORITY 2 — Push position 8–10 coupon queries onto page 1
"glacier aminos" (pos 9.6, 468 impr), "royal peptides coupon code" (pos 8.6) — just off page 1 with real volume. On-page + internal-linking pushes. Winnable.

### PRIORITY 3 — Two surprise content pages (title/CTR + ranking push)
`/supplements/glucomannan` (2,057 impr, pos 12, 0.05% CTR) and `/guides/syringes-and-injection` (1,363 impr, pos 12, 0.22%). Huge impressions, near-zero clicks, top of page 2. Fix titles to match search intent + small ranking push. These — NOT semaglutide dosage — are the real content opportunities.

### DEPRIORITIZED — peptide intent pages (the audit's plan)
semaglutide/BPC-157/retatrutide dosage pages: PP has almost no impressions here, ranks 60–90 where it does, and would fight Mayo/FDA/GoodRx (audit itself: 60–70% authority-bound). **Do not build these now.** Revisit only if GSC shows emerging impressions. Faint exception: "peptide bac water calculator" (pos 11.6, 10% CTR) — the calculator has a pulse; minor optimization worthwhile.

---

## ⚠️ Data caveats (RULE #0)
- Analyzed Queries.csv (1,000 rows — GSC's export cap; a longer tail may exist) + Pages.csv (144 rows). Filenames didn't separate 3-month vs 28-day exports; pattern is unmistakable regardless.
- CTR fixes affect live SEO — CC shows before/after for approval before pushing; codes/discounts verified from vendors.ts/live page, never fabricated in titles.
- Visual redesign work (dossier header, editorial type, etc. from the visual audit) is **parked behind SEO** per Mark's sequencing — SEO first, visuals after.

---

## 📅 Changelog
**v15 (July 9, 2026):** GSC data pulled + analyzed. Core finding: PP demand is coupon/vendor-query dominated; biggest wins are CTR fixes on already-ranking coupon pages (amino-club = 6,092 impr / 0.87% CTR the flagship). Overturns the ChatGPT SEO audit's peptide-intent-page thesis (targeted queries with ~no impressions). New priority order: (1) coupon-page title/meta CTR rewrites, (2) push pos-8–10 coupon queries to page 1, (3) two surprise content pages (glucomannan, syringes guide). Deprioritized peptide dosage pages. Visual redesign parked behind SEO.

---

**Cross-ref:** PP_MASTER · PP_COMMISSIONS v3 · PP_SEO_LEDGER · PP_X_POSTS · SCS_MP
**NEXT:** (a) CC coupon-page title/meta rewrites (prompt issued, awaiting before/after review) → (b) push glacier/royal to page 1 → (c) glucomannan + syringes-guide title/intent fixes → (d) later: revisit peptide content only if GSC impressions emerge; visual redesign after SEO.
