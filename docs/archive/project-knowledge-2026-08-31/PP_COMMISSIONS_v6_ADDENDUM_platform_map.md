# PP_COMMISSIONS — ADDENDUM: THE AFFILIATE PLATFORM MAP

**Insert as §7, after the existing sections.**
**Added:** August 10, 2026

---

## 🔒 WHY THIS EXISTS

**Tracking failures cluster by platform, not by vendor.**

Spartan confirmed on August 10 that they run **Post Affiliate Pro** and that `PROFPEPTIDE` is **not linked to the affiliate account** — the code discounts at checkout and credits nobody. Almighty and Ignite show the same signature.

If that's a platform default rather than three separate vendor mistakes, then **every vendor on that platform is suspect**, and PP can find the rest by looking at the platform column instead of waiting for each to show zero.

> **The rule: when a tracking failure is confirmed, check the platform before checking the next vendor.**

---

## 📊 THE MAP

⚠️ **This table is INCOMPLETE and partly inferred. CINC is running a platform sweep.** Rows marked UNVERIFIED are guesses from portal appearance and must not be treated as fact.

### 🟢 GoAffPro — confirmed, ~16 programs on one account

One authenticated session covers the whole set via the store switcher. Coupon binding is **visible in the portal** — a Coupons tab either exists with the code in it, or it doesn't.

**Confirmed:** Royal Peptides · Peptide Giants · PureRx · EZ Peptides · Glacier Aminos · Vital Core · Amino Club · Oasis Labs · NextGen · Mile High · Treasure Coast · Swiss Chems · Modern Aminos · AMP Peptides · Improved Peptides · Valkyrie Peptides

**Key facts:**
- **Royal, Peptide Giants and PureRx share the token `urunwnog`** — same GoAffPro affiliate account, not a collision. Settled; do not re-flag.
- The switcher is an **incomplete index** — EZ, Glacier and Vital Core are on the same account (ID 18589083) but omitted from the dropdown.
- Portal path: read `partner_portal_subdomain` from the live `__goaffpro` object.

**🟢 Binding is verifiable here.** The Coupons tab is the check.

---

### 🔴 POST AFFILIATE PRO — the suspect platform

**Confirmed:** **Spartan Peptides** — vendor stated directly, Aug 10: they run PAP and PP's code is **not bound** to the affiliate account.

**Strongly suspected, same signature:**
- **Almighty Peptides** — 589 recorded visits, **$0 attributed**, no Coupons section in the portal (ID 1230, Approved, link correct). Code works at checkout.
- **Ignite Peptides** — **no Coupons tab at all**. Code works. All 3 referrals came via link only.

⚠️ **The shared signature:** the affiliate portal has **no coupon section**, so a code can't be bound even in principle. Orders placed with the code discount the buyer and credit nobody.

**Detection traces:** `PostAffTracker` in page source · a script under `/scripts/` or `/affiliate/` loading `trackjs.js` · portal at `/affiliates/` or a `*.postaffiliatepro.com` subdomain · "Powered by Post Affiliate Pro" in the portal footer.

**🔴 Every vendor found on PAP is suspect until the binding is confirmed.**

---

### 🟡 EVERFLOW

**Confirmed:** **Particle Peptides** · **Limitless Biotech**

**⚠️ Limitless is the one to watch.** It has recorded sales — one conversion last month at $59.61 — so attribution works *sometimes*. **Mark suspects the same class of failure as Spartan and Ignite.** Sales existing does not mean all sales are captured; a link-attributed order records while a code-only order doesn't, and the two are indistinguishable from the earnings figure alone.

**🔴 And Everflow exposes NO per-coupon binding view** in PP's portal — so unlike GoAffPro, **binding cannot be self-verified.** It has to be asked.

**Particle:** binding **UNCONFIRMED**. They said the code was created "for your affiliate account" — the same ambiguous phrasing that preceded three confirmed failures. Previously showed a €0 lifetime balance traced to a hardcoded link bypassing `?refs=18075`.

---

### 🟡 SOLID AFFILIATE

**Confirmed:** **Oasis Labs** *(GoAffPro-branded portal running Solid Affiliate underneath)*

⚠️ **Payment email field was blank** on a $474.60 balance — the largest on the roster. Separate issue from binding, same lesson: check the portal's fields, don't assume.

---

### ⬜ UNKNOWN / TO BE MAPPED

**In-house or custom portals:** Almighty *(`/affiliates/`)* · Royal *(`/affiliates/#signup`)* · Legendary · Behemoth · PureRawz · Ascension · Licensed Peptides · Ion Peptide · BioCollex · Integrative · Peptidology · Science Based · Alpha · Aero · LA Peptides · Crush Research · BioLongevity · Nura · Ameano · Midwest · Purity · 99 Purity · Peptides.gg · Real Peptides · BioPure · NOVA Labs · Amino X

**⚠️ BioCollex has no portal found at all** — `?ref=profpeptidehq` with nowhere to log in.

---

## 🔍 WHAT THE SWEEP MUST ESTABLISH

Per vendor: **platform · does a Coupons section exist · is the code bound where determinable.**

⚠️ **The absence of a Coupons section is the tell.** It was the diagnostic on Almighty and Ignite before either vendor confirmed anything.

⚠️ **Do not infer a platform from a portal's appearance.** Several white-label. Oasis looks like GoAffPro and runs Solid Affiliate. Say UNVERIFIED rather than guessing.

---

## 🔴 THE STANDING RULE

**A vendor with recorded commission is NOT proof that binding works.**

Attribution can succeed on link-referred orders and fail on code-only ones, and the earnings figure looks identical either way. **Limitless is the live example** — real sales, suspected binding failure.

**The diagnostic that actually settles it:** place a small order using the code **without clicking the affiliate link**, then check whether it appears in the portal. Days rather than weeks, and it's what PP would want before pulling a page or trusting a vendor on a profile.

**The signature of a broken binding:**
1. Recorded visits with **zero attributed orders** — Almighty's 589 is the archetype
2. **No Coupons section** in the affiliate portal
3. The code **works at checkout** anyway
4. Vendor describes it as created "for your affiliate account" — ambiguous phrasing that has preceded three confirmed failures

---

## 📋 CONFIRMED STATUS — August 10, 2026

| Vendor | Platform | Binding | Note |
|---|---|---|---|
| **Spartan** | 🔴 Post Affiliate Pro | ❌ **NOT BOUND** — vendor confirmed | Also: 10% against a published 7/15/20 ladder |
| **Almighty** | 🔴 PAP *(suspected)* | ❌ Not bound · **says it will connect** | 589 visits, $0 — largest confirmed loss |
| **Ignite** | 🔴 PAP *(suspected)* | ❌ Not bound · emailed, no response | No Coupons tab at all |
| **Particle** | 🟡 Everflow | ⏳ **Says it will connect** — unconfirmed | Wording still ambiguous |
| **Limitless** | 🟡 Everflow | ⚠️ **SUSPECT** — has sales, suspected partial capture | Mark's read; worth the order test |
| **Oasis** | 🟡 Solid Affiliate | ✅ Bound — **46 of 47 referrals via the coupon** | The proof case for code attribution |
| **AMP** | 🟢 GoAffPro | ✅ Bound · cart-verified −$6.75/$45 | |
| **Improved** | 🟢 GoAffPro | ✅ Bound · cart-verified −$9.75/$65 | |
| **Ion Peptide** | ⬜ Unknown | ✅ Portal shows a coupon-linked URL | `?apply-promo=…&ref=…` — promising, unproven |

---
