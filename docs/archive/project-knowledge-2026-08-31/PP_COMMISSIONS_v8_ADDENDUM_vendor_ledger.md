# PP_COMMISSIONS — ADDENDUM v8: THE VENDOR ATTRIBUTION LEDGER

**Replaces the §7 platform map added earlier on August 10. That version's central theory was wrong — see the correction below.**
**Added:** August 11, 2026 — v8 corrects BioLongevity to **BOUND and code-attributing** ($912.28 verified), and retracts the claim that Everflow/TUNE expose no coupon binding view. They do — in Offer Details and the Conversion Report column picker.

---

## 🔴 CORRECTION — THE PLATFORM-CLUSTER THEORY IS REFUTED

The earlier addendum said tracking failures cluster by platform, and that "every vendor on Post Affiliate Pro is suspect." **CC fingerprinted all 47 vendors from page source and that's wrong.**

The three broken vendors run **three different platforms:**

| Vendor | Theory said | Actually runs |
|---|---|---|
| Spartan | Post Affiliate Pro ✅ | **Post Affiliate Pro** — the only PAP vendor on the entire roster |
| Ignite | PAP | **AffiliateWP** |
| Almighty | PAP | **Solid Affiliate + AffiliateWP** |

**And platform doesn't predict binding.** Peptide Partners, Integrative and Ascension all run **AffiliateWP and get credited** — the same plugin as broken Ignite.

> **🔒 THE CORRECTED RULE: binding is a PER-VENDOR CONFIG FACT, verifiable only by looking inside the portal. Fingerprinting tells you where to look; it never tells you the answer.**

**But there are now two distinct failure classes**, and the difference matters:

**Class 1 — configured but unassigned.** The platform supports coupon binding; the vendor never did it. **Spartan** is the case: PAP has a coupon feature, and Spartan's portal has no Coupons item under Promotion. *Fixable by the vendor in minutes.*

**Class 2 — no facility to bind.** The platform has no coupon-attribution capability at all. **Particle** is the case: its module exposes only Sponsor URL, Sponsor Email and Sponsor ID, and its affiliate GTC define the commissionable act as a Link the customer clicks. *Requires the vendor to build something.*

---

## 📊 PLATFORM MAP — 47 active vendors, fingerprinted August 10

| Platform | Count | Vendors |
|---|---|---|
| **GoAffPro** | 23 | aero · ameano · amp · biocollex · crush · ez · glacier · improved · la-peptides · legendary · mile-high · nextgen · nova-labs · peptide-giants · peptidology · purerx · royal · science-based · treasure-coast · valkyrie · vital-core · amino-club *(MED)* · swiss-chems *(MED)* |
| **AffiliateWP** | 7 | peptide-partners · ascension · integrative · real-peptides · behemoth · ignite · 99-purity |
| **Solid Affiliate** | 5 | oasis · almighty *(+AffiliateWP)* · biopure · nura · purity *(MED)* |
| **Everflow** | 1 | limitless |
| **TUNE / HasOffers** | 1 | biolongevity |
| **PrestaShop + ETS-Soft** | 1 | particle |
| **Post Affiliate Pro** | 1 | **spartan** |
| **UNVERIFIED** | 5 | alpha · amino-x · ion-peptide · midwest · licensed |
| **UNREACHABLE** | 3 | modern-aminos · peptides-gg · purerawz *(403)* |

⚠️ **Do not infer platform from a portal's appearance.** **Oasis emits no GoAffPro script at all on its storefront** — its portal reveals **Solid Affiliate** behind a GoAffPro-branded shell. Storefront fingerprinting returned *nothing*, not a false positive.

---

# 📒 PER-VENDOR ATTRIBUTION NOTES

## 🔴 BROKEN OR AT RISK

### Spartan Peptides — Post Affiliate Pro · ❌ NOT BOUND · **both paths broken**

**Confirmed by the vendor, Aug 10:** they run PAP and PROFPEPTIDE is **not linked** to the affiliate account.

**Portal signature, captured for reference** — this is what an unbound PAP portal looks like:
- Menu: Home · Getting Started · Promotion *(Campaigns, Banners & Links, Ad Channels, Advanced tools)* · Reports · My profile · Contact us
- **No Coupons item under Promotion.** The word "coupon" appears nowhere in the panel.
- When PAP's coupon feature is enabled and codes are assigned, a Coupons view appears in exactly that submenu.

**Stats:** 7 clicks / 5 unique over 30 days · **$0.00 commissions** — paid, pending and refunds all zero. Commissions report returns no data.

🔴 **SECOND DEFECT — the link path is broken too.** The portal advertises the affiliate link as **`https://www.example.com/?a_aid=profpeptide`**. **The campaign's destination URL was never configured off the PAP placeholder.** So clicks register against a placeholder domain and commissions never do.

⚠️ **Also unresolved: 10% against a published 7/15/20 ladder.**

**Status:** CUT from profiles. Follow-up email drafted covering binding, the `example.com` bug and the rate. **No response recorded.**

---

### Particle Peptides — PrestaShop + ETS-Soft · 🟡 **NO COUPON FACILITY EXISTS** · link path works

**Platform corrected:** not Everflow. **PrestaShop running ETS-Soft's `ets_affiliatemarketing` module** — the `?refs=` parameter belongs to that module.

🔴 **The affiliate surface has no coupon capability at all.** Entire portal: My Rewards *(Dashboard, Reward history, Withdrawals, Convert into vouchers)* and Affiliate Program *(How to refer friends?, My referrals)*. **Zero instances of coupon, promo code or discount code.** *(The "Vouchers" item is shopper-side store credit, unrelated.)*

Exposed instead: Sponsor URL `particlepeptides.com/en/?refs=18075` · Sponsor Email · Sponsor ID 18075. **Link, email and ID only.**

⚠️ **Their GTC define the commissionable act narrowly as placing a Link the customer clicks through, with no mention of codes.**

**🟢 Vendor response, Aug 11 — they confirmed it and escalated:**
> *"By default, attribution currently works through the affiliate referral link, so orders placed using the PROFPEPTIDE coupon alone would not automatically be attributed to your affiliate account. However, your point makes complete sense… We've forwarded this to our tech team and asked them to configure PROFPEPTIDE so that orders using the coupon are also attributed to your affiliate ID. We will let you know as soon as they confirm it has been set up."*

⚠️ **This is not a settings toggle.** The module has no coupon facility, so their tech team needs custom work. Genuinely possible, but a bigger ask than they may realize. **Await written confirmation, then verify with a code-only test order.**

**🟢 The link path is confirmed working.** Referral 33375 registered 08/11 12:30:30 · order 43387 four minutes later at 12:34:21 · **€407.23 spent, €32.67 reward, status Pending.**

**⚠️ €0 balance explained — it is NOT a bypass.** Pending commissions don't count toward balance. The earlier hardcoded-link theory is **retired.**

🟡 **RATE DISCREPANCY: €32.67 on €407.23 is 8.02%, not the 10% their terms state.** Unqueried.

**Status:** CUT from profiles — correct, for a reason nobody knew at the time.

---

### Almighty Peptides — Solid Affiliate + AffiliateWP · ❌ NOT BOUND · **largest confirmed loss**

**589 recorded visits, $0.00 attributed.** No Coupons section in the portal *(ID 1230, Approved, link correct)*. Code works at checkout.

**🟢 Says it will connect the code.** Monitoring — at 589 visits, a working binding should show conversions within weeks.

**Status:** CUT. Revisit when sales appear.

---

### Ignite Peptides — AffiliateWP · ❌ NOT BOUND

**No Coupons tab at all.** Code works at checkout. All 3 referrals came via link only. **$36.45 recorded** — all link-attributed.

**Status:** CUT. Emailed, **no response recorded.**

---

### Limitless Biotech — Everflow · ⚠️ **SUSPECTED PARTIAL CAPTURE** · 🔴 highest-value unresolved lookup

**Platform confirmed independently:** storefront *(limitlessbiotech.com → limitlesslifenootropics.com)* loads Everflow's SDK from `kb6dp3dq.com/scripts/main.js` and fires `EF.click({offer_id, affiliate_id, source_id, sub1…sub5})`. Portal: `limitless.everflowclient.io`, network account **"Limitless Marketing LLC"**.

**Has recorded sales — one conversion at $59.61.** So attribution works on *some* orders.

🔴 **But that's exactly the ambiguity.** Attribution can succeed on link-referred orders and fail on code-only ones, and **the earnings figure looks identical either way.**

🔴 **CORRECTION, Aug 11 — the claim that "Everflow exposes no per-coupon binding view" is WRONG, or at minimum untested.**

**TUNE is the older sibling of the same tracker lineage, and BioLongevity's TUNE portal exposes both things** — just not where anyone looked:

1. **Binding lives in Offer Details on the offer page**, as a **Promo Codes** field. Not in the sidebar, which is why it read as absent from outside.
2. **The link-vs-code breakout lives in the Conversion Report's column picker**, as a **Promo Code** column. Not a separate report.

**Everflow's partner portal is organised the same way.** So this went from unanswerable to two clicks once logged in.

**Login-walled; no live session on Mark's device.** Binding **UNVERIFIED.**

**🔴 THE SINGLE HIGHEST-VALUE LOOKUP REMAINING — and it's now two clicks.** Log into `limitless.everflowclient.io` and open:

1. **The offer detail page** for the Limitless offer → look for a **Promo Codes** field. If `PROFPEPTIDE` is in it, binding is configured.
2. **The Conversion Report's column/field selector** → enable any coupon or promo-code column, then look at the $59.61 row.

**If that row is blank in the coupon column, it was link-attributed and code-only orders are being dropped. If it carries PROFPEPTIDE, capture works and the single conversion is just low volume.**

**Incidental:** there is **no affiliate-program link anywhere on the storefront**, footer included — the program is unlinked or invite-only. *(`kb6dp3dq.com` serving no root page is normal for an Everflow tracking host — not the same signal as BioLongevity's 404.)*

**Status:** currently **PROMOTED on PP profiles**, labelled `proven` in `attribution.ts`. ⚠️ **Given the partial-capture doubt, `graced` is the more honest label.** Email drafted. **Reconcile after the lookup.**

---

### BioLongevity Labs — TUNE (HasOffers) · ✅ **BOUND AND CODE-ATTRIBUTING** — confirmed Aug 11

**Platform confirmed outright**, not inferred: the dashboard itself says tax forms must be *"filed with TUNE."* Portal `affiliates.biolongevitylabs.com`, affiliate account **ID 2702**.

**🟢 A coupon binding view EXISTS, and PROFPEPTIDE is in it.**
**Offers → My Live Offers → offer 1 → Offer Details** carries a **Promo Codes** field reading `PROFPEPTIDE`. Same panel: protocol Server Postback w/ Transaction ID · goal payout **Sale 15.00% CPS** · expiry **April 30, 2045**.

> **Binding here is not ambiguous vendor phrasing — it's a config value visible in the portal.**

**🔴 EVERY recorded conversion is CODE-attributed, not link-attributed.** The Conversion Report has a **Promo Code** column in Report Options — the exact link-vs-code breakout needed. Jan 1 – Aug 11, 2026, all Approved:

| Time | Promo Code | Sale | Payout | Source / Sub ID / Click ID |
|---|---|---|---|---|
| 2026-08-10 17:20:08 | profpeptide | $299.40 | $44.91 | **all empty** |
| 2026-08-08 00:08:04 | profpeptide | $359.94 | $53.99 | **all empty** |
| 2026-07-31 19:28:07 | profpeptide | $149.96 | $22.49 | **all empty** |
| 2026-07-24 14:53:45 | profpeptide | $102.98 | $15.45 | **all empty** |

**$912.28 of sales at a clean 15%, $136.84 payout.**

⚠️ **Note the direction — it's the mirror image of the failure being hunted elsewhere.** 10 clicks in the last 7 days and **zero** conversions carrying any click, source or sub-ID data. **Code capture works; link capture has produced nothing.**

🔴 **BLOCKED ON TAX DOCUMENTATION.** The dashboard prompts for W-9 / W-8BEN before payments process. **$136.84 is credited but not payable.** Mark's paperwork — CINC did not touch it.

**Status:** currently `graced` in `attribution.ts`. ⚠️ **Should be PROVEN** — $912.28 of code-attributed sales is the second-strongest evidence on the roster after Peptide Partners.

**⚠️ The drafted BioLongevity attribution email is now MOOT. Do not send it.**

⚠️ **Domain trap stands:** PP's `/coupons` link points at `go.biolongevitylabs.com`, the affiliate redirect host. The storefront is `biolongevitylabs.com`.

---

## 🟢 WORKING — VERIFIED

### Oasis Labs — Solid Affiliate *(behind a GoAffPro-branded shell)* · ✅ BOUND
**The proof case for code attribution: 46 of 47 recorded referrals came through the coupon, not the link.**
⚠️ **Code changed PROF15 → PROFPEPTIDE, Aug 10.** Site updated. **X posts and aggregator listings still carry PROF15 — surfaces 2 and 3 of the SOP are outstanding.**
⚠️ Payment email field was **blank** on a $474.60 balance, the largest on the roster.
🔴 **Storefront emits no GoAffPro script** — the platform is only visible from the portal. The white-label warning case.

### AMP Peptides — GoAffPro · ✅ BOUND
Cart-verified: Epithalon $45, uppercase PROFPEPTIDE → **−$6.75 = exactly 15%.**
⚠️ Public `LIGHTNING` code at 10% — PP's 15% beats it.

### Improved Peptides — GoAffPro · ✅ BOUND
Cart-verified: BPC-157 $65 → **−$9.75, total $55.25 = exactly 15%.**
⚠️ **Bundle pricing doesn't combine with promo codes** — test on a single unit or the result misleads.
⚠️ **20% commission, 15% customer discount.** Different numbers.

### Peptide Partners — AffiliateWP · ✅ WORKING
**$4,283.94 — the top earner by an order of magnitude.** AI Overview cites PROFPEPTIDE by name on an unbranded query.
⚠️ Coupons tab **UNVERIFIED** — the portal is login-walled. It's earning, so binding evidently works.

### Ion Peptide — UNVERIFIED platform · 🟡 promising
Portal exposes a **combined URL**: `?apply-promo=profpeptide&ref=PROFPEPTIDE` — auto-applies the code *and* carries the ref. **New to PP; no other vendor offers this.**
⚠️ **Not cart-verified** — checkout sits behind a Wholesale Research Supply Portal login. PP publishes the plain `?ref=` link until confirmed.

---

## 🔒 THE AffiliateWP CHECK — 7 vendors, 3 promoted

⚠️ **Not yet established, and deliberately not inferred.** But the check is known:

**AffiliateWP's coupon integration surfaces as a Coupons tab in the Affiliate Area tab strip**, alongside Affiliate URLs / Statistics / Graphs / Referrals / Payouts / Creatives / Settings, listing each code and the integration that generated it. **Absence of that tab is the tell.**

**Confirmable the moment Mark is logged into any one of:** peptide-partners *(promoted)* · ascension *(promoted)* · integrative *(promoted)* · real-peptides · behemoth · ignite *(known broken)* · 99-purity

⚠️ **This is platform documentation, not something observed in Almighty or Ignite.** Verify before relying on it.

---

## 🔒 STANDING RULES

**1. Recorded commission is NOT proof that binding works.** Attribution can succeed on link-referred orders and fail on code-only ones; the earnings figure is identical either way. **Limitless is the live example.**

**2. The test that settles any of them:** place a small order with the code and **no link click**, then check the portal. Days rather than weeks — and it's what PP should want before promoting a vendor on profiles.

**3. The signature of a broken binding:**
- Recorded visits with **zero attributed orders** *(Almighty's 589 is the archetype)*
- **No Coupons section** in the portal
- The code **works at checkout** anyway
- Vendor describes it as created "for your affiliate account" — ambiguous phrasing that has now preceded **four** confirmed failures

**4. Fingerprinting tells you where to look, never the answer.** Only the portal shows binding.

**5. When a vendor says they'll fix it, get written confirmation and then test.** Particle said the tech team was configuring it; their module has no coupon facility, so that's custom work, not a toggle.

---
