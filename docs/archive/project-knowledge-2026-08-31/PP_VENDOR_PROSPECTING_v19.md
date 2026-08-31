# PP Vendor Prospecting — Master Research Ledger

**Status:** ACTIVE — affiliate-vendor discovery, application tracking, and pipeline state
**Version:** v19 (July 27, 2026)
**What's new:** the **live roster is now recorded** (the doc's biggest defect — it tracked prospects but never listed current vendors, so prospecting passes kept re-suggesting existing partners), **full GoAffPro status**, a **three-stage pipeline vocabulary**, **two more dead discovery channels**, and **Peptide Sciences closed**.

---

## 🚦 RULE #0 REMINDER
Traffic tiers are estimates; treat as tiers, not counts. Verify a vendor sells peptides, check COA/testing, and check attribution BEFORE applying. **And check the live roster first** — see §1.

⚠️ **Similarweb trial expired ~July 18.** No traffic data is available for anything surfaced after that date. Terms and US-basing are verifiable; size is not.

---

## 1) 🆕 LIVE ROSTER — 30 vendors on `/coupons` (CHECK THIS FIRST)

**This section exists because it was missing.** On July 27 a prospecting pass suggested applying to Spartan Peptides and Purity Peptides — both already live partners — because the ledger had no record of who's onboarded.

**Source of truth: `vendors.ts` / `profpeptide.com/coupons`.** Regenerate this table whenever the ledger is updated.

### Featured (Editor's Pick)
| Vendor | Code | Discount |
|---|---|---|
| Amino Club | PROFPEPTIDE | 20% |
| Glacier Aminos | PROF10 | 10% |
| **Oasis Labs** | PROF15 | 15% |
| Peptide Partners | PROFPEPTIDE | 10% |

*Peptides.gg was swapped out of Featured for Oasis Labs (July 26).* ⚠️ **`/best-peptide-vendors` uses a hardcoded array and still shows Peptides.gg — live contradiction, see PP_PRICES v2.**

### Best Deals
| Ascension Peptides | PROFPEPTIDE | **50%** — verified at checkout, stacks with sale prices |

### US Vendors (24)
Aero (PROFPEPTIDE15, 15%) · Almighty (PROFPEPTIDE, 20%) · Alpha (PROFPEPTIDE, 10%) · Ameano (PROF10, 10%) · Amino X (PROF15, 15%) · Behemoth Labz (PROF10, 10%) · BioCollex (PROFPEPTIDE, 10%) · Biolongevity Labs (PROFPEPTIDE, 15%) · EZ Peptides (PROFPEPTIDE, 10%) · Ignite (PROF10, 10%) · Integrative (PROFPEPTIDE, 10%) · **LA Peptides (PROFPEPTIDE, 10%)** · Limitless Biotech (PROFPEPTIDE, 10%) · Midwest (PROF10, 10%) · **Mile High Compounds (PROFPEPTIDE, 10%)** · **NextGen (PROFPEPTIDE, 10%)** · Peptides.gg (PROF15, 15%) · **Peptidology (PROFPEPTIDE, 10%)** · PureRawz (PROF10, 10%) · Royal (PROF10, 10%) · Science Based (PROFPEPTIDE, 10%) · Spartan (PROFPEPTIDE, 10%) · Swiss Chems (PROF10, 10%) · Vital Core (PROF20, 20%)

### International (1)
| Purity Peptides | PROF15 | 15% | 🇨🇦 CA |

**Bold = added July 26.** Apollo Peptide Sciences is also an affiliate (Refersion) — not yet on `/coupons`.

> **KEY STRUCTURAL FACT:** GoAffPro accounts for only about a **third** of the live roster. Integrative, Biolongevity, Alpha, Behemoth, PureRawz, Peptide Partners, Almighty, Amino X, Amino Club, Ascension, Ignite, Oasis, Science Based, Spartan, Midwest, Peptides.gg, Limitless, Purity and Apollo all came from elsewhere. **Direct-apply has always been the dominant channel — it just wasn't tracked as one.**

---

## 2) 🆕 THE THREE-STAGE PIPELINE (vocabulary fix)

The old status set blurred approved-without-a-code with ready-to-build. They're different, and the middle stage is where things actually stall.

```
applied → approved → CODE RECEIVED → page live
```

**"Instant approval" only grants account access.** The discount code is a **separate request every time**, so a vendor isn't buildable until it arrives. SwissChems has been approved-and-waiting on a branded code since July 13.

Use these statuses: `prospect · applied · approved-no-code · code-requested · code-received · page-live · rejected · excluded`

---

## 3) 🆕 DISCOVERY CHANNELS — three dead ends now

| Channel | Status |
|---|---|
| **GoAffPro** | ✅ Searched (Jul 13) — 111 vendors. **Tier 1 (50K+) now exhausted** — applied to essentially all |
| **Post Affiliate Pro** | ❌ Dead end — per-merchant installs; editorial directory has zero peptide vendors |
| **Refersion** | ❌ **DEAD END — researched, very few peptide vendors.** *(v18 still listed this as "NEXT" — it was done and never written down, which caused a wasted recommendation on July 27.)* |
| **UpPromote** | ❓ Status unknown — may also have been checked. **Confirm before recommending.** |
| **Mainstream networks** (Impact/CJ/Awin/Rakuten/ShareASale) | ❌ Excluded by acceptable-use policy |
| **In-house direct** | ✅ **The remaining channel** |

**Consequence: discovery is now vendor-first, not platform-first.** There is no directory left to mine. Method = identify a vendor, check their site for `/affiliates`, apply. Slower, but it's the only route to the top of the market anyway.

---

## 4) 🆕 PEPTIDE SCIENCES — CLOSED

**The flagship direct-apply target in every prior version of this ledger is gone.** ~1.02M global rank, the largest in-house program, the vendor the whole "GoAffPro can't reach the big names" thread pointed at. **Permanently off the list, not pending.**

**Two consequences:**
1. PP has comparison/alternative content built around Peptide Sciences (the v14 "capture orphaned demand" play). **That content now describes a defunct vendor — audit what mentions them.** It may still be a valuable alternative-page target precisely *because* they're gone; the orphaned demand is now permanent.
2. It removes the main example behind "household names run in-house," which changes how much the direct-apply channel is worth relative to what remains.

*Open: confirm whether they shut down entirely or only closed the affiliate program, and roughly when.*

---

## 5) 🆕 GOAFFPRO — FULL STATUS (July 27)

**20 approved · 11 pending · 1 rejected**

### Approved — page live
LA Peptides · Peptidology · Mile High Compounds · NextGen · Glacier · Ameano · EZ · Royal · Aero · SwissChems* · BioCollex · Vital Core

*SwissChems is approved with an auto code (`ebdtshdy`) but has been waiting on a **branded** code since July 13. Live with PROF10.*

### Approved — code requested, awaiting response (7)
| Vendor | Domain | ID |
|---|---|---|
| PureRx Peptides | purerxpeptides.com | 7133617 |
| Certified-Pep | certified-pep.com | 7179571 |
| Crush Research Supply | crushresearch.shop | 7167117 |
| Modern Research Peptides | modernresearchpeptides.net | 7169584 |
| Modern Aminos (EU) | dashboard.modernaminos.eu | 7115645 |
| Modern Aminos (CA) | modernaminos.ca | 7115646 |
| Lumera Labs | mylumeralabs.com | 7181386 |

**Nothing here is stalled through inaction — every code has been requested.** This is the real bottleneck, and it isn't page-building.

### Pending approval (11)
NOVA Labs (nova-biolabs.ae) · NOVA Labs Europe (nova-biolabs.eu) · Treasure Coast · Gentleman · Orbitrex · Paramount · Moglabs · RUO · Modern Aminos (.com) · Peptide Tech · **Wolverine (pending since July 13 — two weeks, likely a soft no; follow up or mark dormant)**

### Excluded (2)
| Evolve Peptides | Declined the application |
| **Fusion Peptide** | **REMOVED FROM THE SITE — affiliate tracking and attribution are broken.** Commissions don't attribute, so listing them is unpaid promotion. **Do not re-suggest.** |

### Multi-storefront vendors
- **NOVA Labs** — `.ae` (UAE, canonical) and `.eu` are the **same operation**; `.ae` redirects. One relationship, two listings, both pending. **UAE-based → international section.** *Open: confirm US shipping and affiliate payout currency before building.*
- **Modern Aminos** — three listings: `.com` pending, `.eu` and `.ca` approved. If the US store is the one PP's audience would use, the two approvals may not be worth building until `.com` clears.

---

## 6) 🆕 CURRENT PROSPECTS — in-house, direct-apply

| Vendor | Domain | Terms | Status |
|---|---|---|---|
| **Genoscience** | genoscience.net | Up to 30% upfront + monthly milestone bonuses to $5,000. US (Sarasota FL), cGMP, 48h ship, paid by the 15th | ⏳ **APPLIED July 27** — awaiting reply |
| **LiveWell Peptides** | livewellpeptides.com | **Up to 22%**, US-based, every-batch tested + COA, 5-day review | prospect |
| **Onyx Biolabs** | onyxbiolabs.com | 10%, third-party HPLC + mass spec | prospect |
| **GLP1 Research Lab** | glp1researchlab.com | GLP-focused — fits PP's top-converting category | prospect |
| **Licensed Peptides** | licensedpeptides.com | — | prospect |

**Still unchecked from the original v2 trio:** **Eternal Peptides** — never verified. Core, Biotech, and Verified all resolved as no-program (→ alternative-page candidates).

---

## 7) GoAffPro Tier 1 — final disposition

| Vendor | Visits | Status |
|---|---|---|
| SwissChems | 915K | ✅ live |
| EZ Peptides | 269K | ✅ live |
| Beyond Peptides | 232K | ⚠️ Poland-based, geo-gated — deprioritised |
| nova-biolabs | 122K | ⏳ pending (UAE) |
| Orbitrex | 117K | ⏳ pending |
| Gentleman | 106K | ⏳ pending |
| Nova Peptides | 80K | ❓ domain unconfirmed — several Nova-named vendors exist; check GoAffPro's listed domain rather than inferring |
| Peptide Tech | 67K | ⏳ pending |
| Evolve | 63K | ❌ declined |
| Treasure Coast | 62K | ⏳ pending |
| PureRx | 54K | ✅ approved, code requested |
| LA Peptides | 49K | ✅ live |
| Royal | 45K | ✅ live |
| Cellpept | 43K | EU — not applied |

**Tier 2 remaining, unapplied:** Expert Peptides (20K) · Peptide Giants (20K ↑99%) · Lifestyle Peptides (19K, 20%) · Peptide Ritual (11K ↑125%) · True Form (15K, 5% comm) · Bayside (16K ↓90%, crashing).

---

## 8) Recommended next actions

1. **Chase the 7 outstanding codes** — this is the bottleneck, not page-building. Seven pages land the moment codes arrive.
2. **Apply to LiveWell, Onyx, GLP1 Research Lab, Licensed Peptides** — direct, in-house.
3. **Check Eternal Peptides** — open since v2.
4. **Follow up or close Wolverine** — pending two weeks.
5. **Confirm UpPromote's status** before treating it as a live channel.
6. **Audit Peptide Sciences references** on the site now that they've closed.
7. **Regenerate §1 from `vendors.ts`** on every ledger update.

---

## 📅 Changelog
**v19 (July 27, 2026):** Live roster recorded (30 vendors) — closes the defect that caused existing partners to be re-suggested as prospects. Full GoAffPro status: 20 approved / 11 pending / 1 rejected. Three-stage pipeline vocabulary added — the code-request stage is the real bottleneck. **Refersion confirmed dead** (researched, never logged). **Peptide Sciences CLOSED.** **Fusion excluded — broken attribution.** Genoscience applied. Four new in-house prospects. GoAffPro noted as only ~⅓ of the roster; direct-apply has always been dominant.

**v18 (July 13, 2026):** Geography screening factor; Beyond deprioritised as Poland-based.

---

*Check the live roster before prospecting. The bottleneck is codes, not pages. Discovery is now vendor-first — no directory left to mine.*
