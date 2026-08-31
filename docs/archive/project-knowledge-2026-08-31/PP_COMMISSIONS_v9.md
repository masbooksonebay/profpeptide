# PP_COMMISSIONS v9
**Supersedes v8. Updated 2026-08-19.**

---

## 1. 🔴 THE TWO BIGGEST EARNERS

**Peptide Partners** — roughly **51% of total commission history.** The single largest revenue source.

**Amino Club** — **117 conversions and $2,366 since the first commission on June 7, 2026.** Roughly $20 per conversion over about ten weeks.

⚠️ **These two together dominate PP's revenue.** Any decision touching either — rate, placement, page treatment — is a revenue decision, not a layout decision.

**Mark's first-hand observation:** referrals to Amino Club declined when its Google snippet disappeared. That's the causal link behind the snippet investigation — not inferred from CTR curves, observed on real revenue.

---

## 2. THE ATTRIBUTION MODEL

**Code-based, not click-based.** AffiliateWP data: **~116 of 120 Peptide Partners commissions had no tracked visit.** A buyer who reads `PROFPEPTIDE` from a SERP snippet and goes direct still pays a commission.

**Consequence:** the code in the snippet works *for vendors whose code is competitive.* For vendors running a better public offer, it's a giveaway — see §4.

---

## 3. 🔴 ATTRIBUTION CLASSIFICATION — and a correction

Lives in **`docs/PP_ATTRIBUTION_BASIS.md`** and **`src/data/attribution.ts`**. Enforcement is presence in the `LISTED` allowlist — cut vendors are ineligible for profile vendor blocks and Professor's Picks derivation.

### Ignite Peptides — corrected 2026-08-19, was wrongly cut

**The original cut was speculative and contradicted by its own data.** The reasoning comment read *"almighty + spartan + ignite all on PAP would explain the whole unbound cluster"* — but Ignite's fingerprint is **AffiliateWP, not PAP**, and the ledger already showed **$36.45 resolved**. It was cut despite recorded, paid commission.

**Vendor confirmation (Antonio, Partnerships Manager, 2026-08-19):** `PROF10` is bound to affiliate account 5024, **credits without a click**, used 3 times, paid out. `PROFPEPTIDE` is also configured at the same 10%, unused.

**Ripple of promoting to LISTED:** exactly one profile changed — `glutathione` swapped midwest-peptide for ignite-peptides in the featured block. Midwest keeps its price row. Professor's Picks unaffected (that runs on `editorsPick`, not `LISTED`).

### The other three cut vendors — differently grounded

| Vendor | Basis | Correctly cut? |
|---|---|---|
| **spartan** | 🔴 First-hand vendor confirmation 2026-08-10: runs PAP, "PROFPEPTIDE is NOT linked… credits nobody." Ledger entry explicitly superseded. | **Yes** — confirmed broken |
| **almighty** | $0 on high traffic, zero recorded commission — an *outcome*, plus the shared PAP speculation | **Partially.** Independent evidence, but never had a vendor email. **Queued for a re-check.** |
| **particle** | Binding unconfirmed **and** non-USD (EUR) | **Yes** — different basis; currency keeps it off the price surface regardless |

⚠️ **The systemic flaw:** one speculative hypothesis was applied to three vendors. Only Ignite was cut purely on it. **Almighty is the one worth a vendor email**, using the same method that corrected Ignite.

---

## 4. 🔴 VENDORS WHOSE PUBLIC OFFER BEATS PP'S CODE

For these, snippet visibility of the code is a **giveaway** — buyer reads it, goes direct, uses the better public offer, PP earns nothing.

| Vendor | PP rate | Public offer | Status |
|---|---|---|---|
| **midwest-peptide** | 10% | `SITEWIDE30` — 30%, footer banner on every page, verified in cart | 🔴 **PROFPEPTIDE returns "Invalid coupon code."** Mark emailed the owner — he attempted a PROF10→PROFPEPTIDE rename that didn't take |
| **behemoth-labz** | 10% | Two 15% offers — review-for-code, newsletter signup. Neither displays the code publicly | Gated, less severe |
| **amino-club** | **35%** | `ENZGE`, `AMINOFIT` at 35% | **Resolved** — PP matched at 35% through Aug 31 |
| **nura** | **25%** | Public `welcome20` matched PP's old 20% — 95 visits, 0 referrals | **Resolved** — negotiated to 25% |

**Unchecked:** purerawz (flagged 15% newsletter vs PP's 10%), real-peptides, peptidology.

**Planned response:** the reveal gate — code removed from every crawlable surface, replaced by a click-to-reveal modal with an affiliate link. Blocked on `/go/` click tracking.

---

## 5. TEMPORARY RATES

**Amino Club: 35% through Mon Aug 31, 11:59 PM EDT**, then reverts to 20%.

⚠️ **`vendors.ts` has no dated-expiry mechanism.** The revert is recorded three ways: `skip-ledger.json` `_pending_reverts`, an inline `vendors.ts` comment, and CC memory. **Aug 31 is a Sunday** — the weekend pull day, which is the natural anchor.

⚠️ Amino Club is the only vendor that routinely boosts, so a general expiry mechanism wasn't built. If a manual revert ever slips, revisit that.

**Glacier, Ameano and Nura have all had temporary rates this month.** Amino Club is the most frequent but not unique.

---

## 6. CODE CONSOLIDATION

**Five vendors deliberately use `PROF10`:** behemoth, ignite, purerawz, royal, swiss-chems. Peptides.gg and Purity use `PROF15`; Vital Core uses `PROF20`. Everyone else is `PROFPEPTIDE`.

**Ignite pending:** Antonio confirmed both `PROF10` and `PROFPEPTIDE` are bound. **Held** on his answer to whether `PROF10` still credits after a switch — switching first could orphan anyone holding the old code.

⚠️ The FAQ **hardcodes** the code on the Ignite page, so `check:codes` Tier 1 would fail the build if `vendors.ts` changed alone. The guard forces correctness.

---

## 7. MEASUREMENT — the gap

**PP has no first-party click tracking.** Outbound links go straight to the vendor's affiliate URL; the only record is the vendor's dashboard, delayed and not normalizable against page traffic.

**Built and parked:** `/go/{slug}?from={surface}` → count in Vercel KV → 302 to the raw affiliate URL. Blocked on Mark provisioning the KV store.

Once live, the funnel becomes observable: GSC page clicks → `/go/` affiliate clicks → vendor-ledger conversions.

---

## 8. INBOUND VENDORS — nine unanswered

🔴 **Every contact-form auto-reply silently failed for four months.** The sender was Resend's sandbox `onboarding@resend.dev`, which only delivers to the account owner's own address. Mark's Gmail notification arrived every time; the submitter's auto-reply never sent.

**Fixed 2026-08-19** — verified domain `mail.profpeptide.com`, sender `contact@mail.profpeptide.com`, delivery to a non-owner address proven.

**Owed a reply:** Peptira (established program, $2,500/month minimum), Full Scale, Peptriva, One Aminos, plus five unvetted — Bioleno, Optimized Aminos, PurPath, Validated Peptides, PeptiCaribe.

### One Aminos — assessed 2026-08-19

Offered 25–35% commission **plus $150 store credit and paid placement** — an email to PP's list, in-app notification, premium placement. ⚠️ **Declined the placement**: PP's affiliate disclosure states relationships never determine inclusion or ranking.

**Testing is real but has gaps.** United Laboratories (Derabassi, Punjab, India), Lab Director Bhavrat Singh, verification codes printed on each report. Seven-point panel with three-vial conformity, measured net content, ICP-MS heavy metals, kinetic LAL endotoxin, spike recovery and QC data.

⚠️ **But: no accreditation claimed anywhere** — no ISO 17025, no A2LA, no NABL. The sterility test states on its own face that it's *"a preliminary quality-control screen"*, not USP <71>, while their COA index says simply "Sterility — Pass." And every report shares one issue date, so it's a single catalog-wide round rather than per-batch-as-shipped.

**Verification was down when checked.** Do not publish a "verify at UnitedLaboratories.Org" claim until it's confirmed working.
