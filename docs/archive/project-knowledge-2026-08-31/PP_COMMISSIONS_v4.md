# PP COMMISSION TRACKER v3

**Status:** ACTIVE TRACKER — affiliate commission and referral activity
**Version:** v4 (July 16, 2026) — 🔴 **THE CHANNEL FINDING: commission does NOT track search impressions — the correlation is INVERTED.** Peptide Partners = ~51% of all commission on **96 GSC impressions / 256 lifetime visits / 46.88% conversion**; Amino Club has 45× the search demand and earns 1/6th as much. Code-based attribution means buyers use the code **without ever visiting profpeptide.com** — structurally invisible to GSC. **Two channels with different economics (code-driven vs link-driven) — treat separately.** ✅ **Amino Club PAID** (v3's #1 action item closed). ⚠️ Vendor sales are a structural risk to code revenue. **Prior version:** v3 (July 4, 2026) — adds the **full 19-vendor CINC dashboard pull (July 4)** with the **paid/unpaid split now captured for every vendor** (fills the v2 open need). Live **Notion "PP Affiliate Tracker" updated this session** to match (all 19 rows). v2 (June 14 Notion snapshot) and v1 (May 18 Gmail snapshot) preserved below as historical.
**Primary sources:** live Notion "PP Affiliate Tracker" (current) · CINC dashboard walk (July 4) · Gmail commission emails (historical)
**Companion file:** PP_Affiliate_Commission_Tracker.xlsx (local)
**Notion data source ID:** `5548c2b6-c210-4843-a1df-af2095d07dc3`

> **Pull method note:** dashboard URLs in `PP_COMMISSIONS_dashboard_urls.md`. CINC walked all 19 read-only (no payout/submit clicks), emailed the report to mark@capstonepeptides.com, Claude read it via Gmail + normalized + wrote all 19 Notion rows. Notion-read tools (query_data_sources / query_database_view) are **plan-gated (Business + Notion AI)** on this workspace — but `notion-search` retrieves page IDs and `notion-update-page` writes fine, so updates work without the query tools.

---

## 🔴 THE CHANNEL FINDING (July 16, 2026) — READ THIS BEFORE ANY SEO OR CONTENT DECISION

**Commission does NOT track search impressions. The correlation is inverted.**

| Vendor | Commission | GSC impr (28d) | **$ / impression** | Visits → Orders | Conv. rate |
|---|---|---|---|---|---|
| **Peptide Partners** | **$4,283.94** | **96** | **$44.62** | **256 → 120** | **46.88%** |
| **BioCollex** | $94.00 | 1 | **$94.00** | — | — |
| **EZ Peptides** | $424.08 | 17 | **$24.95** | 62 / 18 orders | — |
| **Ascension** | $134.99 (+$432 unpaid) | 12 | **$11.25** | 1,065 → 24 | **2.3%** |
| Oasis Labs | $467.88 | 329 | $1.42 | 740 → 21 | 2.8% |
| Glacier | $614.81 | 988 | $0.62 | — | — |
| **Amino Club** | $659.46 | **4,371** | **$0.15** | 101 → 31 | 31% |
| Almighty | $0.00 | 8 | $0.00 | 461 → 1 | 0.2% |

**Peptide Partners is ~51% of the entire commission history — on 96 search impressions and 256 lifetime visits.** Amino Club has **45× the search demand and earns one-sixth as much.**

### 🔑 The mechanism — PP's own attribution model
**Commission is code-based.** A buyer sees `PROFPEPTIDE` (X post, screenshot, word of mouth), goes **straight to the vendor**, uses the code. **PP gets paid. The buyer never touches profpeptide.com.** No impression, no click — **structurally invisible to GSC.**

**The proof, from PP's own AffiliateWP dashboard (July 16):**
- All-time: **256 visits → 120 referrals = 46.88% conversion.** Normal affiliate conversion is 1–5%.
- Last 30 days: 26 visits → 19 referrals = **73.08% conversion, DOWN 45.2%** — meaning the prior period exceeded **100%: more referrals than visits.**
- **>100% conversion is only possible if the code is used without clicking the link.**
- Contrast **Ascension: 1,065 visits → 24 orders = 2.3%** — a textbook link-driven number.

### 🔑 TWO CHANNELS, DIFFERENT ECONOMICS — treat them separately
| | **CODE-DRIVEN** | **LINK-DRIVEN** |
|---|---|---|
| Example | **Peptide Partners** | Ascension · Oasis · Almighty |
| Visits | few (256 lifetime) | many (1,065 · 740 · 461) |
| Conversion | **47–100%+** | 0.2–2.8% |
| $ / visit | **$16.73** | ~$0.13 |
| Source | X posts / word of mouth | affiliate links (site, search) |
| **Visible in GSC?** | ❌ **NO** | partially |

### ⚠️ WHAT THIS MEANS
1. **PP_SEO's entire analysis measures the LINK channel.** Valid for what it measures — but the link channel may not be where the money is. **Do not treat search rankings as a revenue proxy.**
2. **The "Ascension anomaly" was never an anomaly.** Position 5.3 / 12 impressions / real sales — it sells through code, not search. It was logged as a broken page in three ref docs. **It isn't.**
3. **X posts may be the primary revenue engine.** The X workstream has been treated as marketing garnish; the data suggests it's the business. *(Hypothesis — strongly indicated, not yet proven. See open item #1.)*
4. **Vendor sales are a STRUCTURAL RISK to code-based revenue.** Peptide Partners' referrals fell 40.6% while visits ROSE 7.7% — Mark: *"peptide partners has had huge 4th of July sales all month."* **If a vendor's sale beats the code, or doesn't stack, buyers take the sale and PP earns nothing.** Commissions dip on vendor promotions regardless of demand. **Worth knowing which vendors run frequent sales and whether codes stack — a real input to the apply queue.**
5. **Vendor-add priority should rank by CONVERSION, not by vendor traffic.** Amino Club is the largest vendor in the 59-site universe (376K/mo) and earns $0.15/impression. Peptide Partners is invisible in search and earns $44.62.

### 🔴 OPEN — the single highest-value unknown
**Pull the AffiliateWP referring-URL log: Peptide Partners dashboard → Visits → "View all."** 256 rows, first-party. If it logs referring URLs, **that names the channel outright** — X, /coupons, direct, or something nobody guessed — instead of reasoning backward from conversion rates. **This is worth more than any Similarweb pull.**

---

## ✅ AMINO CLUB — PAID (July ~13, 2026)

v3's #1 action item is **CLOSED.** Amino Club paid out everything, including the $551.35 that had been sitting unpaid with **$0 ever paid**. The relationship is functioning; it was a payout-schedule matter, not a collection problem.

**Remaining unpaid balances to chase:** Ascension **$432.47** · Peptides GG **$252.62** · Royal **$143.19** · BioCollex **$94.00**.

---


## 🆕 SESSION SNAPSHOT — July 4, 2026 (CINC dashboard pull → Notion)

### Full 19-vendor table (verified live from each dashboard)

| Vendor | Total Commission | **Unpaid** | Paid | Total Sales | Referrals / Visits | Notes |
|---|---|---|---|---|---|---|
| **Peptide Partners** | $4,283.94 | $44.46 | — | — | 119 / 242 | Top earner. Dashboard confirms far above the email-snippet estimate. |
| **Amino Club** | $659.46 | **$551.35** | $0.00 | — | 31 conv / 101 | ⚠️ **$0 ever paid out** — all owed. +$108.11 accruing. 30% boost Jul 4–6. Catalog login-walled. |
| **Glacier Aminos** | $614.81 | $71.28 | — | $6,148.11 | 48 / 28 orders | goaffpro YTD. |
| **Oasis Labs** | $467.88 | $69.11 | $398.77 | — | 21 / 740 | Store-credit payouts working. |
| **EZ Peptides** | $424.08 | $56.07 | — | $4,400.80 | 62 / 18 orders | goaffpro YTD. Bank details visible on Payments page (CINC read commission only). |
| **Peptides GG** | $252.63 | **$252.62** | — | — | 6 | Nearly all unpaid (available balance). |
| **Midwest Peptide** | $183.61 | $21.60 | — | — | — | Lifetime total. No sales/referral counts surfaced. |
| **Royal Peptides** | $143.19 | **$143.19** | — | $1,545.56 | 107 / 6 orders | goaffpro YTD. All pending. |
| **Ascension Peptides** | $134.99 | **$432.47** | — | — | 24 / 1,065 | ⚠️ **Unpaid > Total Earnings shown** — lifetime-vs-period dashboard mismatch; reconcile. |
| **BioCollex** | $94.00 | $94.00 | — | $466.52 | 16 / 2 orders | goaffpro YTD. All pending. |
| **Vital Core Research** | $87.89 | $0.00 | $87.89 | $439.47 | 36 / 4 orders | goaffpro YTD. All paid. Code PROF20. |
| **Integrative Peptides** | $44.70 | $0.00 | $44.70 | — | 2 / 93 | All paid (store credit). |
| **Ignite Peptides** | $36.45 | $36.45 | — | — | 3 / 212 | Previously broken-attribution — now showing referrals, tracking appears resolved. |
| **Spartan Peptides** | $27.90 | $27.90 | — | — | 17 clicks (8 uniq) | Tracking RESOLVED (Brian Lettieri). $0 pending on top of the $27.90 approved-unpaid. |
| **Almighty Peptides** | $0.00 | $0.00 | — | — | 1 / 461 | High traffic, no conversions. |
| **Behemoth Labz** | $0.00 | $0.00 | — | — | 0 / 18 | Code PROF10. |
| **PureRawz** | $0.00 | $0.00 | — | — | 0 / 11 | Early-stage. |
| **Limitless Biotech** | n/a (no lifetime total) | no field | — | — | 1 click (last mo: 1 conv $59.61) | Everflow portal — period-based only, no paid/unpaid field. |
| **Synthesis Peptides** | **SKIPPED** | — | — | — | — | ⚠️ Dashboard logged in as **"partierodriguez" (partierodriguez@gmail.com, Affiliate ID 56)** — a DIFFERENT identity, not Mark's. Commissions may be misattributing. Status → Pending. |

### Portfolio totals (of reported figures)
- **~$8,368 lifetime/YTD commission** across reporting vendors.
- **~$2,164 currently unpaid/owed.**
- **Top earners:** Peptide Partners ($4,284) · Amino Club ($659) · Glacier ($615) · Oasis ($468) · EZ ($424).

### 🚩 Action items surfaced by this pull
1. **Amino Club** — $551.35 unpaid, **$0 ever paid**. Query payout threshold/schedule with the vendor.
2. **Synthesis Peptides** — wrong-account login (partierodriguez). Confirm the vendor corrected the account/attribution before trusting any Synthesis numbers; PROFPEPTIDE10 referrals may be landing elsewhere. (Mark previously raised this — follow up.)
3. **Ascension** — unpaid ($432.47) exceeds shown total earnings ($134.99). Reconcile the lifetime-vs-period figures on their dashboard.
4. **Biggest unpaid balances to chase:** Amino Club $551 · Ascension $432 · Peptides GG $253 · Royal $143 · BioCollex $94.

### ⚠️ Data caveats (accurate, not errors)
- **goaffpro vendors** (BioCollex, EZ, Glacier, Royal, Vital Core) show **Jan 1–Jul 4 2026 (YTD)**, not true lifetime, for Sales/Referrals/Earnings. Payments-tab paid/pending figures ARE account totals.
- **Total Sales** only exposed by goaffpro dashboards; AffiliateWP / PostAffiliatePro / custom portals don't surface a gross sales figure ("—").
- **Unpaid mapping (locked):** goaffpro = Payments-tab "Amount Pending"; AffiliateWP = "Unpaid Earnings"; where a dashboard shows "Available Balance"/"Store Credit," that = commission (per Mark's note).
- **Limitless (Everflow)** has no lifetime total and no paid/unpaid field — period metrics only.

### goaffpro → Notion field mapping (CONFIRMED — carried from v2)
| goaffpro field | → Notion column |
|---|---|
| **Referrals** (clicks) | **Visits** |
| **Orders** | **Referrals** |
| **Sales** | **Total Sales** |
| **Earnings** | **Commission Earned** |

---

## SESSION SNAPSHOT — June 14, 2026 [v2 — HISTORICAL]

15 vendor rows entered/updated in Notion. Top earners then: EZ ~$424 · Glacier ~$326 · Oasis ~$292. Broken-attribution cluster: Fusion (0 traffic), Ignite (200 visits/0 conv), Spartan (all zero — emailed vendor). Only paid-out vendor: Integrative $44.70 store credit. Vital Core code changed PROFPEPTIDE → PROF20.

> **v3 reconciliation:** Glacier ($326→$615), Oasis ($292→$468), EZ (~$424, stable) all grew. Ignite + Spartan attribution now **resolved** (both showing referrals). Fusion still has a Notion row but no dashboard URL — no July data.

---

## SUMMARY — Gmail-email snapshot (as of 2026-05-18) [v1 — HISTORICAL]

| Vendor | Referrals (Email) | Sales (Email) | Commissions (Email) |
|---|---|---|---|
| Peptide Partners | 12 | — | $426.06 |
| Ascension Peptides | 7 | — | $205.98 |
| EZ Peptides | 5 | $1,762.80 | $170.28 |
| Royal Peptides | 7 | $1,547.28 | $82.35 |
| Vital Core Research | 4 | $528.33 | $97.89 |
| Oasis Labs | 5 | $759.85 | $68.66 |
| Integrative Peptides | 2 | — | $44.70 |
| **TOTAL** | **42** | **$4,598.26** | **$1,095.92** |

*(v1 = recent-activity email notifications only; dashboards hold substantial pre-notification history — hence v3's much larger lifetime figures. Both kept, not reconciled into one number.)*

---

## VENDORS WITH NO / MINIMAL ACTIVITY (July 4)
Almighty ($0, 461 visits/1 ref) · Behemoth ($0, 18 visits) · PureRawz ($0, 11 visits). Approved-but-no-dashboard-URL / not in this pull: Fusion, Astro, XL, Guru, Particle (UK), plus the pending/under-review roster from v1.

---

## REFRESH PROCESS
1. Notion is the live tracker; this markdown is the project-folder canonical reference.
2. **Dashboard pull:** CINC walks the URLs in `PP_COMMISSIONS_dashboard_urls.md` (read-only), emails the report to mark@capstonepeptides.com; Claude reads via Gmail, normalizes (goaffpro mapping), writes Notion rows via `notion-search` (get page IDs) + `notion-update-page`. Query tools are plan-gated — use search + update-page.
3. **Gmail refresh:** "refresh the commission tracker from Gmail" re-runs the email snapshot.
4. Version bump on each material change.

---

## COMPANION XLSX
`PP_Affiliate_Commission_Tracker.xlsx` on Mark's local machine (project folder doesn't accept xlsx). Regenerable from chat.

---

*End of PP COMMISSION TRACKER v3 — Notion is the live source (all 19 rows updated July 4). Paid/unpaid split now captured for every vendor. Chase: Amino Club (unpaid, never paid) + Synthesis (wrong-account).*
