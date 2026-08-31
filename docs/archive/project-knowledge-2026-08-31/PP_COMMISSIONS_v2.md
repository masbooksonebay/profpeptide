# PP COMMISSION TRACKER v2

**Status:** ACTIVE TRACKER — affiliate commission and referral activity
**Version:** v2 (June 14, 2026) — adds the **Notion "PP Affiliate Tracker" session snapshot** (15 vendor rows entered/updated), the **goaffpro → Notion field mapping**, the **broken-attribution cluster**, and the **Vital Core code change**. The v1 Gmail-email snapshot (May 18) is preserved below as historical.
**Primary sources:** live Notion "PP Affiliate Tracker" (current) · Gmail commission notification emails (historical)
**Companion file:** PP_Affiliate_Commission_Tracker.xlsx (locally on Mark's machine)

> **Source note:** the Notion figures below are **dashboard-derived lifetime-ish totals** and do **not** match the v1 Gmail-email snapshot (which captured only recent commission-notification emails as of May 18). Different source + timeframe — both are kept rather than reconciled into one number.

---

## 🆕 SESSION SNAPSHOT — June 14, 2026 (live Notion "PP Affiliate Tracker")

**Notion PP Affiliate Tracker data source ID:** `5548c2b6-c210-4843-a1df-af2095d07dc3`

### Entered / updated this session (15 vendor rows)
BioCollex · EZ · Fusion · Glacier · Ignite · Integrative · Limitless · Midwest · Oasis · Peptides.gg · PureRawz · Royal · Spartan · Synthesis · Vital Core.

### Top earners
| Vendor | Commission (approx) |
|---|---|
| **EZ** | ~$424 |
| **Glacier** | ~$326 |
| **Oasis** | ~$292 |

### Broken-attribution cluster (suspected tracking break)
- **Fusion** — 0 traffic.
- **Ignite** — 200 visits / **0 conversions**.
- **Spartan** — all zero. **Emailed vendor 2026-06-14** re: suspected tracking break — **awaiting reply.**
- **Likely cause:** a shared **coupon-not-linked-to-affiliate** config issue across these vendors (code works for the customer discount but isn't attributing the order back to the affiliate account).

### Payout status
- **Only vendor actually paid out:** **Integrative** — **$44.70**, store credit.
- **Early-stage, NOT broken:** **PureRawz** (11 visits) · **Synthesis** (3 visits, new partner).
- **Need a Payments tab for paid/unpaid split:** **Royal**, **Vital Core**.

### Code change
- **Vital Core** code changed **`PROFPEPTIDE` → `PROF20`.**

### goaffpro → Notion field mapping (CONFIRMED)
| goaffpro field | → Notion column |
|---|---|
| **Referrals** (clicks) | **Visits** |
| **Orders** | **Referrals** |
| **Sales** | **Total Sales** |
| **Earnings** | **Commission Earned** |

---

## SUMMARY — Gmail-email snapshot (as of 2026-05-18) [v1 — HISTORICAL]

| Vendor | Referrals (Email) | Sales (Email) | Commissions (Email) | Dashboard Total (Manual) |
|---|---|---|---|---|
| Peptide Partners | 12 | — | $426.06 | _to fill_ |
| Ascension Peptides | 7 | — | $205.98 | _to fill_ |
| EZ Peptides | 5 | $1,762.80 | $170.28 | _to fill_ |
| Royal Peptides | 7 | $1,547.28 | $82.35 | _to fill_ |
| Vital Core Research | 4 | $528.33 | $97.89 | _to fill_ |
| Oasis Labs | 5 | $759.85 | $68.66 | _to fill_ |
| Integrative Peptides | 2 | — | $44.70 | _to fill_ |
| **TOTAL** | **42** | **$4,598.26** | **$1,095.92** | _to fill_ |

Notes:
- "—" indicates sale amounts not in vendor's email notifications (commission-only emails)
- Dashboard Total column reserved for lifetime commission totals from each affiliate dashboard (use CINC to fetch)
- Email-derived data is recent activity only; PP dashboard in particular has substantial pre-notification history

---

## PER-VENDOR DETAIL [v1 — HISTORICAL Gmail-email data]

### Peptide Partners
- 12 commission notifications visible, $426.06 total
- Sender: support@peptide.partners → markshurtliff@gmail.com
- Email format: commission-only (no sale amounts)
- Activity range: 2026-05-10 through 2026-05-17
- Highest single referral: $110.07 (2026-05-16)
- Lifetime estimate from prior dashboard reference: $16,000+ in sales (~$800-1,000 commission at typical PP rate)
- **Real total lives in PP affiliate dashboard at peptide.partners**

### Ascension Peptides
- 7 commission notifications visible, $205.98 total
- Senders: affiliates@ascensionpeptides.com, sales@ascensionpeptides.com
- Email format: commission-only (no sale amounts)
- Activity range: 2026-05-08 through 2026-05-17
- Highest single referral: $76.55 (2026-05-16)
- 1 additional forwarded commission from 2026-05-01 (amount not captured in forwarded snippet)
- **Real total lives in Ascension affiliate dashboard**

### EZ Peptides
- 5 referral orders, $1,762.80 sales, $170.28 commission
- Sender: support@ezpeptides.com (via goaffpro platform)
- Email format: full data (order #, sale amount, commission)
- Activity range: 2026-05-10 through 2026-05-16
- Highest single order: #99862, $700, $66 commission (2026-05-13)
- Implied commission rate: ~10%

### Royal Peptides
- 7 referral orders, $1,547.28 gross sales, $82.35 effective commission
- Sender: no-reply@goaffpro.com (royalpeptides.goaffpro.com)
- Email format: full data with status updates
- 5 of 7 orders reverted to $0 commission after initial credit (unpaid/refunded status)
- Paid commissions:
  - Order #41503 (2026-05-18): $731.50 → $70.65 commission ✅
  - Order #33188 (2026-03-21): $132.00 → $11.70 commission ✅
- Unpaid/refunded: #21051, #33185, #33186, #33187, #40787
- Coupon code PROF10 confirmed working on backend

### Vital Core Research
- 4 referral orders, $528.33 sales, $97.89 commission
- Sender: no-reply@goaffpro.com (VitalCoreResearch.goaffpro.com)
- Email format: full data
- Activity range: 2026-05-14 through 2026-05-18
- Account was blocked 2026-05-09, reinstated mid-May, activity resumed
- Highest single order: #32748, $305.56, $61.11 commission (2026-05-14)
- Implied commission rate: ~18-20% (higher than most vendors per PP_MASTER vendor list)
- **Code update (June 14):** `PROFPEPTIDE` → `PROF20`

### Oasis Labs
- 5 referral notifications, $759.85 sales, $68.66 commission
- Sender: support@myoasislabs.com
- Email format: full data
- Activity range: 2025-11-18 through 2026-04-20
- Payout model: store credit, $100 minimum threshold
- Highest single referral: $393.39 (2025-11-18), $38.07 commission

### Integrative Peptides
- 2 commission events, $44.70 total
- Sender: info@integrativepeptides.com, andreae@integrativepeptides.com
- Payout model: monthly store credit (15th to 14th cycle)
- Payouts visible:
  - 2026-03-17: $15.00 store credit (Feb 15 – Mar 14 cycle)
  - 2025-11-17: $29.70 store credit (Oct 15 – Nov 14 cycle)
- Email format: commission/credit amount only
- **Only vendor with a confirmed paid-out payout to date.**

---

## VENDORS WITH NO COMMISSION ACTIVITY (TO DATE) [v1]

Approved affiliate accounts with no commission emails observed:
- Almighty Peptides
- Apollo Peptides
- Behemoth Labz
- BioCollex (recently approved 2026-04-12)
- Fusion Peptide
- Ignite Peptides
- Limitless Biotech
- PureRawz
- Spartan Peptides
- Particle Peptides (UK)
- XL Peptides
- Guru Peptides
- Peptides Warehouse
- Nordic Peptides
- Pure Life Peptides

Pending/under review:
- Astro Peptides USA
- Chemyo
- Precision Peptide Co.
- Polaris Peptides
- Regenics
- Solution Peptides
- UK Peptides
- Ameano Peptides
- Vigor Peptides

Denied:
- HydroPeptide

> **June 14 update:** Several of the "no activity" vendors now have Notion rows with traffic/earnings (BioCollex, Fusion, Ignite, Limitless, PureRawz, Spartan). Fusion / Ignite / Spartan are the **broken-attribution cluster** above — traffic with no/zero attributed conversions, not genuine no-demand.

---

## DATA SOURCE NOTES

- v2 current state lives in the **live Notion "PP Affiliate Tracker"** (data source `5548c2b6-c210-4843-a1df-af2095d07dc3`).
- v1 historical data compiled from Gmail commission notification emails connected to profpeptide@gmail.com (includes forwarded notifications from markshurtliff@gmail.com).
- Two vendor categories by email content:
  - **Full data vendors** (EZ Peptides, Royal Peptides, Vital Core Research, Oasis Labs): emails contain order number, sale amount, and commission
  - **Commission-only vendors** (Peptide Partners, Ascension Peptides, Integrative Peptides): emails contain commission amount only
- For commission-only vendors, the affiliate dashboard is the ground truth for lifetime totals
- Royal Peptides "Refunded/Unpaid" entries represent referral orders where commission was initially credited but later reverted to $0 by the vendor

---

## REFRESH PROCESS

1. Notion is the live tracker; this markdown is the project-folder canonical reference. Update Notion via CINC, then log material changes here.
2. For Gmail refresh: ask Claude "refresh the commission tracker from Gmail" — Claude re-runs the same search and regenerates the email snapshot.
3. **Open need:** add a **Payments tab** for the paid/unpaid split — specifically **Royal** and **Vital Core**.
4. Version bump (v1 → v2 → v3) on each refresh or material change.

---

## COMPANION XLSX

A spreadsheet version with full transaction-level detail and live formulas exists at `PP_Affiliate_Commission_Tracker.xlsx` on Mark's local machine (claude.ai project folder does not accept xlsx uploads, so this markdown version serves as the project-folder canonical reference). The xlsx can be regenerated from chat any time.

---

*End of PP COMMISSION TRACKER v2 — Notion is the live source; refresh as needed.*
