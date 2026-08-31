# PP VENDOR PROSPECTING — v22 ADDENDUM (August 2, 2026)

**Status:** ACTIVE drop-in. Append into PP_VENDOR_PROSPECTING v21.
**Adds:** four approvals since v21 · the 99 Purity discount conflict · the build queue · corrected outstanding-code count.

---

## 🔴 99 PURITY PEPTIDES — APPROVED, **BLOCKED ON A DISCOUNT CONFLICT**

`99puritypeptides.com` · approved August 2, 2026.

**Two official sources state different discounts for the same code:**

| Source | Discount | Commission |
|---|---|---|
| Welcome email — "Your Custom 10% Discount Code" | **10% off** | 10% |
| Affiliate dashboard — "YOUR COUPON CODE (15% OFF)" | **15% off** | — |

Code is `PROFPEPTIDE10` in both. The email's body reinforces 10%: *"they get 10% off their order, and you get 10% commission."*

> ⚠️ **DO NOT BUILD THE PAGE UNTIL THIS IS RESOLVED.** Publishing the wrong percentage is the exact failure that suppressed Amino Club's SERP snippet — Google saw the copy claim one figure while the structured data carried another and stopped rendering the description. The whole title/description/JSON-LD chain now derives from one `discount` field precisely so the two can't disagree; a wrong value at the source defeats that.
>
> **Resolution:** ask the vendor directly, or add an item to a cart and apply `PROFPEPTIDE10` — whatever checkout deducts is the answer. Dashboard-vs-email conflicts usually mean a rate was changed on one surface and not the other.

**Also note:** the code name says `10` while the dashboard advertises 15%. If 15% is correct, the code name will look wrong to buyers — worth asking whether they'd reissue as `PROFPEPTIDE15` or `PROFPEPTIDE`.

**Verified facts (safe to use):**
- Affiliate link: `https://99puritypeptides.com/ref/profpeptide` — **path-based**, so it composes for deep links (`/<productPath>/ref/profpeptide/`), per the CINC composition test of July 29
- Commission: 10%, "Standard Tier" (implies higher tiers exist — worth asking what they require)
- Dashboard is a custom in-house build, not GoAffPro or AffiliateWP

---

## ✅ APPROVED SINCE v21 — four vendors

| Vendor | Code | Discount | Commission | Status |
|---|---|---|---|---|
| **PureRx Peptides** | `PROFPEPTIDE` | 15% | 10% | ✅ **LIVE on site** |
| **Peptide Giants** | `PROFPEPTIDE` | 10% | 10% | ✅ **LIVE on site** |
| **Nura Peptide** | `PROFPEPTIDE15` | 15% | **25%** | ⬜ Queued to build |
| **99 Purity Peptides** | `PROFPEPTIDE10` | ⚠️ **10% or 15% — unresolved** | 10% | 🔴 Blocked, see above |

**PureRx resolves a long-standing open item.** Their "up to 25% split between discount and commission" landed at **15% discount / 10% commission** — they chose the split. ⚠️ **Q1 is still unanswered**: is commission earned when a customer uses PureRx's *own* public code rather than PP's? Worth asking now the relationship is live.

**Peptide Giants** also carries a 50% Level 1 *network* commission — that's for recruiting other affiliates, not product sales. Internal only; never on the page.

**Nura Peptide is the highest commission rate on the roster at 25%.** ⚠️ Their site banner offers **20% off your first order** for email signup — more than PP's 15%. **Test whether they stack before the page ships.** If they don't, a first-time buyer is better off ignoring PP's code entirely — the same structural problem as Modern Aminos' GLP-1 sale, except that one stacked.

---

## 🔒 CODE CASE — GENERAL RULE (new)

**Discount codes are case-insensitive at checkout across the roster. PP always renders them UPPERCASE.**

Confirmed on Crush, Treasure Coast, Modern Aminos, and Nura. Enough vendors to stop checking per-vendor — treat as settled unless a vendor explicitly states otherwise.

---

## 📋 BUILD QUEUE

| # | Vendor | Blocker |
|---|---|---|
| 1 | **Nura Peptide** | None — ready. Test the 20% signup stack first |
| 2 | **99 Purity Peptides** | 🔴 Resolve 10% vs 15% |

Both will be built on the **card-top layout** (H1 → facts subtitle → single code card above the fold) that rolled out to all 35 pages on August 2. Include `opengraph-image.tsx` and `twitter-image.tsx` — Crush, Treasure Coast, and Modern Aminos all shipped without them and fell back to the generic square on X.

---

## 📊 OUTSTANDING CODES — still **3**

Certified-Pep · Modern Research · Lumera Labs — all chased more than once, no reply. **The v21 dormancy rule applies**: two follow-ups, 30 days, mark dormant.

**PureRx is no longer outstanding** — approved and live.

---

## ⬜ REMAINING APPLICATION TARGETS

**Direct:** GLP1 Research Lab (`glp1researchlab.com/affiliate-program/` — **30%, best rate on the list**, and PP's top-converting category) · Onyx Biolabs · Licensed Peptides · Ion Peptide · Peptide Supply · BioPure Peptides · Physique Peptides *(⚠️ $750/mo minimum or terminated)*

**Email — no public page:** Peptide Crafters · Profound Aminos

**Removed from the list:** Nura Peptide and 99 Purity Peptides — both now approved.

---

## 🚫 VETTING OUTCOMES — the v21 standard in use

| Vendor | Verdict |
|---|---|
| **Order My Peptides** | ⏸️ **Hold 60–90 days** — ~6-week-old site, zero review footprint, no address, operates as New Life Health Labs LLC, "any strength" GLP-1 pricing that would undercut the roster |
| **After Hours Peptides** | ❌ **Decline** — fails 4 of 5 checks. ~6-week-old site, no address, **no named entity at all**, 6 COAs all dated the same day, and **unsubstantiated "GMP Certified" + "ISO 9001 Certified" claims** with no registrar or certificate number |

**The standard is working.** After Hours took ten minutes to reject on defensible grounds. Every other vendor on the roster that claims accreditation names it — Crush cites A2LA #6377.01.01, Modern Aminos cites ISO 17025 via A2LA, Peptidology cites ISO/IEC 17025:2017.

### Sharpening one check

v21's "physical address + named operating entity" should require a **verifiable US-registered entity** — a state registration lookup takes two minutes. Order My Peptides at least names an LLC; After Hours names nothing. The standard should distinguish those.

**On the origin question:** a rule reading "brand name sounds foreign" is unreliable and not something to put in writing on a site PP operates. The defensible version is what v21 already tests — **no named entity, no address, template-grade copy, no accumulating COA record**. Most research peptides are synthesized in China regardless of seller; the meaningful distinction is whether a **US entity is accountable**, not where the powder originated.

---

## 📅 Changelog

**v22 (August 2, 2026):**
- 🔴 **99 Purity Peptides approved but BLOCKED** — welcome email says 10% off, dashboard says 15% OFF, same code `PROFPEPTIDE10`. Resolve before building; wrong percentage is the Amino Club snippet-suppression failure.
- ✅ **Four approvals logged** — PureRx (15%) and Peptide Giants (10%) live; Nura (15% off / **25% commission**) and 99 Purity queued.
- ✅ **PureRx split resolved** — 15% discount / 10% commission. Q1 (attribution on their own public code) still open.
- ⚠️ **Nura's 20% signup offer** flagged as a possible stacking conflict — test before shipping.
- 🔒 **Code case settled as a general rule** — case-insensitive at checkout, PP renders uppercase. Stop checking per vendor.
- ❌ **After Hours Peptides declined** on the v21 standard; **Order My Peptides** hold confirmed.
- 🔍 Entity check sharpened to require a **verifiable US-registered entity**.
- 📊 Outstanding codes remain **3** (Certified-Pep, Modern Research, Lumera Labs).

---

*Apply broadly, build selectively. Never publish a discount percentage that two sources disagree about.*
