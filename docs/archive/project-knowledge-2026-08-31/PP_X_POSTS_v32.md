# PP X Posts — Active Tracker — v32

**Status:** ACTIVE REFERENCE — vendor-day log + rotation state. **Format spec lives in FROZEN v30** — re-read v30 before drafting any post.
**Version:** v32 (June 12, 2026) — logs the **Peptide Partners re-run vendor day** (4 posts drafted, not yet fired). Supersedes the **v31** active tracker (Synthesis Peptides day + OG-card root-cause finding — both carried forward below). Format spec **v30 unchanged**.

---

## 🆕 Peptide Partners — vendor day (June 12) — DRAFTED, NOT YET FIRED — *RE-RUN*

> This is Peptide Partners' **second** day (first fired **June 1**). Treat as a fresh re-run round; set the account→category assignment at pre-flight.

- **Slug/link:** `/coupons/peptide-partners`. **Code: `PROFPEPTIDE` · 10% off** (pulled live from the coupon hub). Affiliate URL `https://peptide.partners/ref/48/` lives in the coupon-page Shop button — **never in the tweet**.
- **De-domain:** NOT needed — "Peptide Partners" (spoken name, space, no dot-TLD) is safe as written. (Their domain is peptide.partners; the brand text doesn't trigger an auto-link.)
- **Catalog read (live `/shop`, "Showing all 36 results"):** every product renders with Select options + live price, **no out-of-stock flags** → treat all as purchasable (confirm on the logged-in catalog at pre-flight). Deep in **Metabolic, Growth Hormone, Skin, Longevity.** Items NOT in PP's `/peptides` taxonomy → do **not** name: Humanin, SLU-PP-332, Meta-Z, Z's Total B. **Epitalon is NOT a standalone product** (appears on the certifications page but not on `/shop`) — don't name it.
- **Testing line (line 4, from `/independent-certifications/`):** third-party tested via **TrustPointe & Kovera** (also Chromate, BioRegen); **publicly/independently verifiable COAs** (they emphasize COAs validatable on the lab's own site); **99%+ purity** (COA table runs 99.3–99.99%). Also publish endotoxin (USP <85>), heavy-metal (USP), and sterility testing. US-based (Sarasota FL area; support 10–5 ET, (941) 231-0291).
- **4 posts drafted** (the 4 deepest PP categories):
  - **Metabolic** — anchor **Retatrutide**; ex. Tirzepatide, Semaglutide, Cagrilintide (MOTS-c also available).
  - **Growth Hormone** — anchor **CJC-1295 + Ipamorelin** (both in stock); ex. Sermorelin, Tesamorelin.
  - **Recovery** — anchor **BPC-157 + TB-500** (both in stock); line 3 leans on the in-stock **BPC-157 + TB-500 blend** (only other Recovery member; Wolverine Stack not carried).
  - **Skin + Longevity combined (Post 4)** — anchor **GHK-Cu**; ex. GLOW, KLOW (skin) + NAD+, SS-31 (longevity), all in stock.
- **Cognitive alternate provided** (clean swap for Recovery if Mark prefers all line-3 items to be literal same-category members): anchor **Semax**; ex. **Selank**.
- **Line-4 variant offered:** lab-named version — "Third-party tested by TrustPointe & Kovera — COAs verifiable on the lab's site. 99%+ purity." (pushes a couple posts slightly over the fold; fine for promos).
- **NOT fired.** Pre-flight open: set rotation row (below), confirm in-stock anchors on the logged-in catalog, mind the OG-card caveat.

## 🆕 Synthesis Peptides — vendor day (June 8) — DRAFTED, NOT YET FIRED [carried from v31]
Slug `/coupons/synthesis-peptides`. **Code `PROFPEPTIDE10` · 10% off.** No de-domain. Testing line: every batch third-party tested, ≥99% HPLC, COAs on request, US (Las Vegas, NV). 4 posts drafted (Metabolic / GH / Skin+Longevity / Recovery) + Cognitive alt. Still not fired.

## 🔁 OG-card root cause — IMPORTANT [carried from v31, unchanged]
The per-vendor route `/coupons/[slug]/opengraph-image` injects the per-vendor **code** but renders a **hard-coded "All Research Peptides" headline** — the **vendor name is NOT drawn on the image** (site-wide). `og:image:alt` IS per-vendor, so the name is available to the route, just not rendered. **CC fix issued:** render the vendor name in the headline + trim og:title/twitter:title to ≤70 chars; staged-files-only, pause-before-push. **X Card Validator is RETIRED** (no force-rescrape). **Canonical tag blocks `?x=N` cache-busting.** To control the card on a tweet now: **attach an image** or use the **`/coupons` hub link**.

---

## 🔁 Rotation state — UNRECONCILED (do not guess the next row)

Accounts (fixed order): **PP** @peptide_pros · **PREM** @premierpeptides · **CORE** @corepeptides · **PEAK** @peakpeptides. Last cleanly-confirmed row = **PureRawz (Jun 2)**. Royal, Peptides.gg, Midwest (Jun 6), Ignite (Jun 7), **Synthesis (Jun 8)**, and the **Peptide Partners re-run (Jun 12)** are unassigned/unconfirmed in the log → current advance point **not verified**. Before firing: confirm the last day that actually fired + on which accounts, then advance one row (no account repeats its prior category).

| Vendor-day | PP | PREM | CORE | PEAK |
|---|---|---|---|---|
| Peptide Partners (Jun 1, fired) | GH | Retatrutide | All-3 | Recovery |
| PureRawz (Jun 2, fired) | Recovery | All-3 | GH | Retatrutide |
| Royal / Peptides.gg / Midwest / Ignite | *unreconciled — see frozen v30 changelog* | | | |
| **Synthesis (Jun 8)** | *unassigned — set at pre-flight* | | | |
| **Peptide Partners RE-RUN (Jun 12)** | *unassigned — set at pre-flight* | | | |

---

## 🔒 Carried-forward rules [Unchanged — see v27 / frozen v30]
- **De-domain rule (#11):** vendor names that are live domains → render without the dot-TLD ("Peptides.gg" → "Peptides GG").
- **Reta-leads (Metabolic anchor):** Retatrutide on line 1 whenever in stock.
- **Cross-promo account rebrand (in progress):** functional display names (Peptide Codes / Deals / Coupons / Discounts), "by Prof. Peptide" bios; @handles unchanged.

## 🔗 Cross-references
- **PP_X_POSTS v30** — FROZEN format spec (re-read before drafting).
- **PP_SEO · PP_MASTER (+ addenda) · WL_MASTER v2.3 · SCS_MP**

---

## 📅 Changelog
**v32 (June 12, 2026):** Peptide Partners **re-run** vendor day drafted (PROFPEPTIDE / 10%; Metabolic/GH/Recovery/Skin+Longevity + Cognitive alt; no de-domain; testing line from `/independent-certifications/` — TrustPointe/Kovera, independently verifiable COAs, 99%+ purity; lab-named line-4 variant offered). Catalog read clean (36 products, all purchasable; Humanin/SLU-PP-332/Meta-Z/Z's-Total-B and Epitalon excluded — not in PP taxonomy / not stocked standalone). Rotation flagged unreconciled; Peptide Partners' Jun-1 row noted as the prior day. Supersedes v31; frozen v30 unchanged.

---

*Active tracker only — HOW to draft lives in frozen v30. Peptide Partners (re-run) + Synthesis both drafted, not fired (pending rotation row + in-stock confirm + OG-card caveat).*
