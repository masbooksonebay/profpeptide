# PP X Posts — Active Tracker — v34

**Status:** ACTIVE REFERENCE — vendor-day log + process state. **Format spec lives in FROZEN v30** — re-read v30 before drafting any post.
**Version:** v34 (June 14, 2026) — logs the **Midwest Peptide vendor day (DRAFTED, NOT YET FIRED)**. Behemoth (FIRED), Peptide Partners (re-run) + Synthesis carried forward from v33, both still drafted-not-fired. Rotation-ownership rule + OG-card status unchanged from v33. Format spec **v30 unchanged**.

---

## 🆕 Midwest Peptide — vendor day (June 14) — DRAFTED, NOT YET FIRED

- **Slug/link:** `/coupons/midwest-peptide`. **Code: `PROF10` · 10% off.** (Payout Zelle per PP_SEO; affiliate URL lives in the coupon-page Shop button — never in the tweet.)
- **De-domain:** NOT needed — "Midwest Peptide" (spoken name, space, no dot-TLD) is safe as written.
- **3 posts drafted:**
  - **Metabolic** — anchor **Retatrutide** (reta-leads).
  - **Growth Hormone** — anchor **CJC-1295 No-DAC**.
  - **Skin + Longevity** — anchor **GHK-Cu**.
- **Testing line (line 4):** ⚠️ **not captured in this handoff — pull from the live `/coupons/midwest-peptide` page before firing** (third-party lab / COA / purity facts only, per format spec). Do not invent.
- **Pre-flight before firing:** eyeball the OG card at `/coupons/midwest-peptide/opengraph-image` (confirm vendor name renders, ≤70-char title). Rotation is **Mark's** (see locked rule below) — not a Claude step.

## 🆕 Peptide Partners — re-run (June 12) — DRAFTED, NOT YET FIRED [carried from v33/v32]
Slug `/coupons/peptide-partners`. **Code `PROFPEPTIDE` · 10%.** No de-domain. Testing line from `/independent-certifications/`: TrustPointe & Kovera (also Chromate, BioRegen), independently verifiable COAs, 99%+ purity; US (Sarasota FL). 4 posts drafted (Metabolic Retatrutide / GH CJC-1295+Ipamorelin / Recovery BPC-157+TB-500 blend / Skin+Longevity GHK-Cu) + Cognitive alt (Semax/Selank). Exclude (not in PP taxonomy): Humanin, SLU-PP-332, Meta-Z, Z's Total B; Epitalon not standalone. Still not fired.

## 🆕 Synthesis Peptides — vendor day (June 8) — DRAFTED, NOT YET FIRED [carried from v31]
Slug `/coupons/synthesis-peptides`. **Code `PROFPEPTIDE10` · 10%.** No de-domain. Testing line: every batch third-party tested, ≥99% HPLC, COAs on request, US (Las Vegas, NV). 4 posts drafted (Metabolic / GH / Skin+Longevity / Recovery) + Cognitive alt. Still not fired.

## Behemoth Labz — vendor day (June 13) — ✅ FIRED [carried from v33]
Slug `/coupons/behemoth-labz`. **Code `PROF10` · 10%.** 4 posts fired (Metabolic Retatrutide / GH CJC-1295+Ipamorelin / Recovery BPC-157+TB-500 / Skin+Longevity Melanotan 2 + Epitalon). Testing line: Colmaric Analyticals (Goodlettsville TN), public COAs, 99%+ purity. OG card rendered correctly (Mark confirmed). Full catalog read in v33.

---

## 🔁 OG-card status — [Unchanged — see v33]
Per-vendor route `/coupons/[slug]/opengraph-image` previously rendered a hard-coded **"All Research Peptides"** headline. **The CC fix (render vendor name in headline + trim og:title/twitter:title ≤70 chars) now appears deployed** — Behemoth's card rendered correctly June 13 (Mark confirmed). Keep eyeballing each new vendor's card via `/coupons/[slug]/opengraph-image` before firing (← Midwest's pending eyeball). Fallbacks if a card is ever wrong: attach an image, or use the `/coupons` hub link (X Card Validator retired; canonical tag blocks `?x=N` cache-busting).

---

## 🔒 Carried-forward rules [Unchanged unless noted — see frozen v30]

- **ROTATION IS OWNED BY MARK (LOCKED — v33).** Claude does **NOT** assign accounts to categories, advance the rotation row, or reconcile rotation state. Claude drafts the category-labeled posts; **Mark handles which account posts which.** Supersedes frozen v30's "Account rotation" section and pre-flight #4. Do not ask about, guess at, or track rotation. *(The old rotation-state table is retired.)*
- **De-domain rule (#11):** vendor names that are live domains → render without the dot-TLD ("Peptides.gg" → "Peptides GG"). Spoken names with spaces (Behemoth Labz, Peptide Partners, Midwest Peptide) are safe.
- **Reta-leads (Metabolic anchor):** Retatrutide on line 1 whenever in stock.
- **Cross-promo account rebrand:** functional display names (Peptide Codes / Deals / Coupons / Discounts), "by Prof. Peptide" bios; @handles unchanged.

## 🔗 Cross-references
- **PP_X_POSTS v30** — FROZEN format spec (re-read before drafting; its rotation section + pre-flight #4 are superseded by the rotation-ownership rule above).
- **PP_SEO v5 · PP_MASTER v15 (+ addenda) · PP_COMMISSIONS v2 · PP_VENDOR_PAGES v1 · WL_MASTER · SCS_MP**

---

## 📅 Changelog
**v34 (June 14, 2026):** Logged **Midwest Peptide vendor day — DRAFTED, NOT YET FIRED** (`/coupons/midwest-peptide`; `PROF10`/10%; 3 posts — Metabolic Retatrutide / GH CJC-1295 No-DAC / Skin+Longevity GHK-Cu; testing line to be pulled from the live coupon page; OG-card eyeball pending; rotation is Mark's). **Deviation note:** the handoff listed "assign rotation" as a Midwest pre-flight step — NOT applied, because the v33 LOCKED rotation-ownership rule makes rotation Mark's, not a Claude step. Peptide Partners (re-run, Jun 12) + Synthesis (Jun 8) carried forward, still not fired; Behemoth (Jun 13) carried as FIRED. Rotation rule + OG-card status unchanged from v33; frozen v30 unchanged.
**v33 (June 13, 2026):** Behemoth Labz FIRED; rotation-ownership rule added + rotation-state table retired; OG-card fix confirmed deployed.

---

*Active tracker only — HOW to draft lives in frozen v30. Rotation is Mark's. Midwest + Peptide Partners (re-run) + Synthesis remain drafted-not-fired.*
