# PP X Posts — Active Tracker — v31

**Status:** ACTIVE REFERENCE — vendor-day log + a new OG-card learning. **Active tracker** (dynamic state); the **format spec lives in the FROZEN v30 doc** — re-read v30 before drafting any post.
**Version:** v31 (June 8, 2026) — logs the **Synthesis Peptides** vendor day (4 posts drafted, not yet fired) and the **OG-card root-cause finding** (generic-headline image + retired X Card Validator + canonical-blocks-cache-bust). Supersedes the **v27** active tracker (Peptides.gg day, de-domain rule #11, account rebrand — all carried forward below). Format spec **v30 unchanged**.

---

## 🆕 Synthesis Peptides — vendor day (June 8) — DRAFTED, NOT YET FIRED

- **Slug/link:** `/coupons/synthesis-peptides`. **Code: `PROFPEPTIDE10` · 10% off.** Affiliate URL `https://synthesispeptides.io/?synthaff=105` lives in the coupon-page Shop button — never in the tweet.
- **De-domain:** NOT needed — "Synthesis Peptides" (spoken name, with a space) has no dot-TLD, so X won't auto-link it. (The domain is synthesispeptides.io; the brand text is safe as written.)
- **Testing line (line 4, verified from their Testing/COA page):** every batch independently third-party tested, **≥99% purity by HPLC**, **COAs on request**, US-based (Las Vegas, NV).
- **Catalog read (live, partly login-gated — confirm in-stock at pre-flight):** in-stock anchors used = Retatrutide (GLP-3R), CJC-1295 (No DAC) + Ipamorelin, GHK-Cu, TB-500. **Standalone BPC-157 reads OOS** ("Read more" button) while **TB-500** and the **BPC-157 + TB-500 blend** are in stock; GLP-1S/2T/3R all in stock.
- **4 posts drafted** (the 4 deepest PP categories): **Metabolic** (anchor Retatrutide; ex. Tirzepatide/Semaglutide/Cagrilintide) · **Growth Hormone** (anchor CJC-1295 + Ipamorelin; ex. Sermorelin/Tesamorelin) · **Skin + Longevity combined** (anchor GHK-Cu; ex. GLOW/KLOW/Melanotan 2/NAD+/Epitalon — all in stock) · **Recovery** (anchor TB-500; ex. BPC-157 as carried-but-OOS + the in-stock BPC-157+TB-500 blend as the required in-stock example).
- **Post-4 alternate provided:** a fully-clean **Cognitive & Nootropic** post (anchor Semax; ex. Selank) if Mark prefers all line-3 items to be literally-listed PP same-category members rather than leaning on the BPC/TB blend in Recovery.
- **NOT fired.** Pre-flight still open: confirm code/OG card live, confirm in-stock anchors on the logged-in catalog, set rotation row, beat X cache.

## 🆕 OG-card root cause — IMPORTANT (fold into FROZEN pre-flight at next revision)

Diagnosed why the Synthesis card wasn't showing in X (CINC + opengraph.xyz, June 8):

1. **The per-vendor OG image renders a GENERIC headline.** `/coupons/[slug]/opengraph-image` (and `/twitter-image`) inject the per-vendor **code** (Synthesis = PROFPEPTIDE10, EZ = PROFPEPTIDE) but the headline is hard-coded **"All Research Peptides"** — the **vendor name is NOT drawn on the image**. This is **site-wide** (EZ behaves identically), and matches the **parked/uncommitted dynamic-OG route**. The `og:image:alt` IS correctly per-vendor ("Synthesis Peptides discount code PROFPEPTIDE10 — Save 10%"), so the name is available to the route — it just isn't rendered. **Meta tags are otherwise correct** (twitter:card=summary_large_image, 1200×630, valid canonical).
   - **Fix (CC):** render the vendor name in the card headline (same source as the code/alt); apply to both opengraph-image + twitter-image; **trim og:title/twitter:title to ≤70 chars** (currently ~75–79 → X truncates). Staged-files-only (parked files exist → never `git add -A`); pause-before-push. CC prompt issued this session.
2. **X Card Validator is RETIRED** (cards-dev.twitter.com/validator no longer exists) — **corrects the old assumption** that you can force a re-scrape there. Dead end.
3. **Canonical tag blocks `?x=N` cache-busting** — the coupon page declares a canonical URL, so X normalizes to it and reuses the cached card; query-string forcers don't work (consistent with the Ignite June-7 caveat).
4. **To control the card on an actual tweet now:** **attach the image as media** (you control the visual exactly) or use the **`/coupons` hub link** (generic Pp card). Native per-page unfurl refreshes only on X's cache TTL (~a week); it can't be reliably forced.

**Net:** the card *exists and is valid* (opengraph.xyz renders it), it's just generic; the "not popping up" in X is the cache-miss on a brand-new page. Real fix = ship the vendor-name OG route (CC), then verify on opengraph.xyz; for posting now, attach an image or use the hub link.

---

## 🔁 Rotation state — UNRECONCILED (do not guess the next row)

Accounts (fixed order): **PP** @peptide_pros · **PREM** @premierpeptides · **CORE** @corepeptides · **PEAK** @peakpeptides. Last cleanly-confirmed row = **PureRawz (Jun 2)**. Royal, Peptides.gg, **Midwest (Jun 6)**, and **Ignite (Jun 7)** assignments are proposed/unconfirmed in the log — so the current advance point is **not verified**. **Synthesis is not yet assigned.** Before firing Synthesis: confirm the last vendor day actually fired + on which accounts, then advance one row (no account repeats its prior category).

| Vendor-day | PP | PREM | CORE | PEAK |
|---|---|---|---|---|
| Peptide Partners (Jun 1, fired) | GH | Retatrutide | All-3 | Recovery |
| PureRawz (Jun 2, fired) | Recovery | All-3 | GH | Retatrutide |
| Royal (delivered; fire status unconfirmed) | Retatrutide | GH | Recovery | All-3 |
| Peptides.gg (Jun 3) | All-3 *(prop.)* | Recovery *(prop.)* | GH *(prop.)* | **Bioregulators (fired)** |
| Midwest (Jun 6) / Ignite (Jun 7) | — | — | — | *unreconciled — see frozen v30 changelog* |
| **Synthesis (Jun 8)** | *unassigned — set at pre-flight* | | | |

---

## 🔒 Carried-forward rules [Unchanged — see v27 / frozen v30]
- **De-domain rule (#11):** vendor names that are live domains → render without the dot-TLD ("Peptides.gg" → "Peptides GG"). (Synthesis doesn't trigger it.)
- **Reta-leads (Metabolic anchor):** Retatrutide on line 1 whenever in stock — already in the frozen v30 anchors table.
- **Cross-promo account rebrand (in progress):** functional display names (Peptide Codes / Deals / Coupons / Discounts), "by Prof. Peptide" bios, coupon-tag avatar in PP palette; @handles unchanged.

---

## 🔗 Cross-references
- **PP_X_POSTS v30** — FROZEN format spec (re-read before drafting; the OG-card finding above should fold into pre-flight #2/#5 + the errors list at the next frozen revision).
- **PP_SEO · PP_MASTER (+ addenda) · WL_MASTER v2.2 · SCS_MP**

---

## 📅 Changelog
**v31 (June 8, 2026):** Synthesis Peptides vendor day drafted (PROFPEPTIDE10 / 10%; Metabolic/GH/Skin+Longevity/Recovery + Cognitive alt; no de-domain; ≥99% HPLC + COA-on-request testing line; in-stock/OOS catalog read). **OG-card root cause logged:** per-vendor route renders a generic "All Research Peptides" headline (code injected, vendor name not) site-wide → CC fix to render the name + trim titles; **X Card Validator retired** (corrects prior assumption); canonical blocks `?x=N`; attach-image / hub-link to control the card now. Rotation flagged unreconciled (PureRawz Jun 2 last clean row). Supersedes the v27 active tracker; frozen v30 unchanged.

---

*Active tracker only — HOW to draft lives in frozen v30. Synthesis drafted, not fired (pending OG-card fix + in-stock confirm + rotation row). The OG-card finding is the headline learning this round.*
