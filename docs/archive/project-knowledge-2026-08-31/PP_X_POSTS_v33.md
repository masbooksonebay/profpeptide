# PP X Posts — Active Tracker — v33

**Status:** ACTIVE REFERENCE — vendor-day log + process state. **Format spec lives in FROZEN v30** — re-read v30 before drafting any post.
**Version:** v33 (June 13, 2026) — logs the **Behemoth Labz vendor day (FIRED)**; adds the **rotation-ownership rule (Mark owns rotation; Claude does not assign/reconcile)** and retires the rotation-state table. Supersedes the **v32** active tracker (Peptide Partners re-run + Synthesis carried forward below). Format spec **v30 unchanged**.

---

## 🆕 Behemoth Labz — vendor day (June 13) — ✅ FIRED

- **Slug/link:** `/coupons/behemoth-labz`. **Code: `PROF10` · 10% off entire order** (pulled live from the coupon page). Affiliate URL `https://behemothlabz.com/aff/208/` lives in the coupon-page Shop button — **never in the tweet**.
- **De-domain:** NOT needed — "Behemoth Labz" (spoken name, space, no dot-TLD) is safe as written.
- **Catalog read** (live `/product-category/peptides/`, "Showing 1–20 of ~110–111 results", sorted by popularity): **page 1 (the 20 most popular) covered every anchor + example** — no need to page through all ~111. Deep in-stock depth across all 4 standard categories. **In stock (p1):** BPC-157, TB-500, BPC-157 + TB-500 blend, CJC-1295 (No DAC), CJC-1295 DAC+Ipamorelin+GHRP-2 blend, Ipamorelin, Sermorelin, Sermorelin+Ipamorelin, Tesamorelin, Retatrutide, Tirzepatide, Semaglutide, MOTS-c, AOD-9604, IGF-1 LR3, PT-141, Melanotan 2, SS-31 (Elamipretide), Epithalon. **OOS:** Adamax Peptide, Follistatin 315 98%, Follistatin 344 85%.
- **Testing line (line 4, from the PP coupon page):** third-party tested by **Colmaric Analyticals LLC**, accredited lab in **Goodlettsville, Tennessee**; **public COAs**; **99%+ purity**; US-based since 2014. Line used: *"Third-party tested by Colmaric Analyticals. Public COAs, 99%+ purity."*
- **4 posts fired** (the 4 deepest PP categories):
  - **Metabolic** — anchor **Retatrutide**; ex. Tirzepatide, Semaglutide. (Shortened category to "metabolic" for length/RUO tone.)
  - **Growth Hormone** — anchor **CJC-1295 + Ipamorelin** (both in stock); ex. Sermorelin. (Length capped to one example.)
  - **Recovery** — anchor **BPC-157 + TB-500** (both in stock); line 3 = **BPC-157 + TB-500 blend** (only other Recovery member in catalog; Wolverine Stack not carried — same blend-in-line-3 precedent as Peptide Partners).
  - **Skin + Longevity combined (Post 4)** — anchor **Melanotan 2** (Skin, in stock); ex. **Epitalon** (Longevity). SS-31 also in stock as an alternate/second example.
- **OG card:** per-vendor card rendered **correctly** (Mark confirmed "looks great") → the headline fix appears **deployed** (see OG-card note below). Posts fired June 13.

## 🆕 Peptide Partners — re-run (June 12) — DRAFTED, NOT YET FIRED [carried from v32]
Slug `/coupons/peptide-partners`. **Code `PROFPEPTIDE` · 10%.** No de-domain. Testing line from `/independent-certifications/`: TrustPointe & Kovera (also Chromate, BioRegen), independently verifiable COAs, 99%+ purity; US (Sarasota FL). 4 posts drafted (Metabolic Retatrutide / GH CJC-1295+Ipamorelin / Recovery BPC-157+TB-500 blend / Skin+Longevity GHK-Cu) + Cognitive alt (Semax/Selank). Exclude (not in PP taxonomy): Humanin, SLU-PP-332, Meta-Z, Z's Total B; Epitalon not standalone. Still not fired.

## 🆕 Synthesis Peptides — vendor day (June 8) — DRAFTED, NOT YET FIRED [carried from v31]
Slug `/coupons/synthesis-peptides`. **Code `PROFPEPTIDE10` · 10%.** No de-domain. Testing line: every batch third-party tested, ≥99% HPLC, COAs on request, US (Las Vegas, NV). 4 posts drafted (Metabolic / GH / Skin+Longevity / Recovery) + Cognitive alt. Still not fired.

---

## 🔁 OG-card status — UPDATED June 13
Per-vendor route `/coupons/[slug]/opengraph-image` previously rendered a hard-coded **"All Research Peptides"** headline (vendor name not drawn on the image, site-wide). **The CC fix (render vendor name in headline + trim og:title/twitter:title ≤70 chars) now appears deployed** — Behemoth's per-vendor card rendered correctly on June 13 (Mark confirmed). Keep eyeballing each new vendor's card via `/coupons/[slug]/opengraph-image` before firing. Fallbacks if a card is ever wrong: attach an image, or use the `/coupons` hub link (X Card Validator is retired; canonical tag blocks `?x=N` cache-busting).

---

## 🔒 Carried-forward rules [Unchanged unless noted — see frozen v30]

- **ROTATION IS OWNED BY MARK (LOCKED — NEW v33).** Claude does **NOT** assign accounts to categories, advance the rotation row, or reconcile rotation state. Claude drafts the 4 category-labeled posts; **Mark handles which account posts which.** This **supersedes frozen v30's "Account rotation" section and pre-flight #4** — treat those as Mark's responsibility, not a Claude step. Do not ask about, guess at, or track rotation. *(The old unreconciled rotation-state table is retired.)*
- **De-domain rule (#11):** vendor names that are live domains → render without the dot-TLD ("Peptides.gg" → "Peptides GG"). Spoken names with spaces (Behemoth Labz, Peptide Partners) are safe.
- **Reta-leads (Metabolic anchor):** Retatrutide on line 1 whenever in stock.
- **Cross-promo account rebrand:** functional display names (Peptide Codes / Deals / Coupons / Discounts), "by Prof. Peptide" bios; @handles unchanged.

## 🔗 Cross-references
- **PP_X_POSTS v30** — FROZEN format spec (re-read before drafting; its rotation section + pre-flight #4 are superseded by the rotation-ownership rule above).
- **PP_SEO · PP_MASTER (+ addenda) · WL_MASTER · SCS_MP**

---

## 📅 Changelog
**v33 (June 13, 2026):** Logged **Behemoth Labz vendor day — FIRED** (PROF10 / 10%; Metabolic/GH/Recovery/Skin+Longevity; Colmaric Analyticals / Goodlettsville TN / public COAs / 99%+ line 4; catalog read clean — page 1 covered all anchors, OOS = Adamax/Follistatin 315/344; OG card rendered correctly). Added **rotation-ownership rule** (Mark owns rotation; Claude does not assign/advance/reconcile — supersedes frozen v30 rotation section + pre-flight #4) and **retired the rotation-state table**. Updated **OG-card status** (CC headline fix appears deployed — confirmed on Behemoth). Peptide Partners re-run (Jun 12) + Synthesis (Jun 8) carried forward, still not fired. Supersedes v32; frozen v30 unchanged.

---

*Active tracker only — HOW to draft lives in frozen v30. Rotation is Mark's. Peptide Partners (re-run) + Synthesis remain drafted-not-fired.*
