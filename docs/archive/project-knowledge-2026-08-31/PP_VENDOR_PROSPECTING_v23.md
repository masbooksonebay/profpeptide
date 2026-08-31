# PP VENDOR PROSPECTING — v23

**Status:** ACTIVE. Full replacement, supersedes v21 and the v22 addendum.
**Date:** August 6, 2026
**Scope:** vetting standard · applications and outcomes · outstanding codes · build queue · targets.

> **v21 and v22 both listed vendors as prospects who were already live.** Following them meant re-applying to vendors PP already had. Corrected below — see §7.

---

## 1. THE VETTING STANDARD

Before a newly-discovered vendor gets a page:

1. **Site age** — asset upload dates, copyright year, domain registration. Under ~3 months = wait unless something else is compelling.
2. **Independent review footprint** — Trustpilot, PeptideCritic, PeptiPrices, Reddit. Absence isn't disqualifying alone, but it removes the ability to verify anything.
3. **Verifiable US-registered entity + physical address.** A state registration lookup takes two minutes. Naming an LLC beats naming nothing; naming nothing is the strongest single signal.
4. **COA library contents, not its existence.** A `/coas` link proves nothing until a certificate is opened.
5. **Pricing sanity** — dramatically below market on GLP-1s is a known counterfeit signal.

**None is individually disqualifying. Three or more together means wait.**

### 🔴 A failed fetch is NOT a failed check

If a site blocks automated access, that is a statement about **our access**, not about the vendor.

**Try the direct-asset path first** — `/wp-content/uploads/…` PDFs and images return 200 even where the HTML 403s a bot. This works on most WordPress vendors and is how five vendors' certificates were finally read.

If that fails too, report **UNREACHABLE-BY-FETCH** and **ask Mark for a paste.** Never record "no COA," "COAs on request," or "fails check 4" from a fetch failure.

> Five roster vendors had their testing understated because a fetch obstacle was converted into a claim about them. Every vendor on the roster publishes COAs from real labs. **Assume they do; ask when you can't see it.**

### On the origin question

A rule reading "brand name sounds foreign" is unreliable and not something to put in writing on a site PP operates. Most research peptides are synthesized in China regardless of seller. **The meaningful distinction is whether a US entity is accountable** — no named entity, no address, template copy, no accumulating COA record. That's what checks 3 and 4 already test.

---

## 2. THE DISPOSITIVE CHECK — AFFILIATE TERMS

**Do coupon and discount-code sites earn commission?** PP is exactly that. A clause voiding commission traced to a coupon platform ends the conversation regardless of how good the vendor looks.

**Prime Performance Peptides is excluded on this basis.**

**Also check whether the vendor circulates a public code deeper than PP's.** Licensed Peptides' `save10` is 10% against PP's 5% and stacks — so a reader gets more from a code PP doesn't own, and if the program voids attribution when another coupon is applied, PP earns nothing on those orders. Ask if the terms don't say.

---

## 3. DORMANCY RULE

**Two follow-ups, no response, 30 days → mark dormant, record the date, remove from the active list.**

Not a rejection — a code may still arrive — but a dormant vendor shouldn't keep appearing as "outstanding" and implying action.

---

## 4. CODE CASE — SETTLED

**Codes are case-insensitive at checkout across the roster. PP always renders them UPPERCASE.** Confirmed on enough vendors to stop checking per-vendor.

---

## 5. VETTING OUTCOMES

| Vendor | Verdict | Basis |
|---|---|---|
| **After Hours Peptides** | ❌ **Decline** | Fails 4 of 5. ~6-week site, no address, **no named entity at all**, 6 COAs all dated the same day, unsubstantiated "GMP Certified" + "ISO 9001" with no registrar or certificate number |
| **Order My Peptides** | ⏸️ **Hold 60–90 days** | ~6-week site, zero review footprint, no address, New Life Health Labs LLC, "any strength" GLP-1 pricing that would undercut the roster |
| **Pur Path Project** | ⏸️ **Hold, re-vet ~Nov 2026** | Domain registered **2026-06-17** — ~7 weeks, and for **one year only**. Passes on entity (Pur Path Project LLC, 300 S Mountain Ave #1067, Upland CA) and makes no false certification claims. But the **entire commercial surface is login-gated** — catalog, pricing and COA library — and **no affiliate program exists at all** |
| **Prime Performance Peptides** | ❌ **Excluded** | Terms void commission traced to coupon sites |

**Pur Path re-vet conditions:** domain passes ~3 months with a clean footprint · affiliate terms published and explicitly permitting coupon-traced commission · **COA library made publicly viewable** so the lab can be verified independently · catalog reachable.

> **Worth flagging on Pur Path:** a vendor asking a public comparison site to list them while keeping their evidence behind a login is asking PP to vouch for something PP can't see. That's a listing question independent of domain age.

**The standard is working.** After Hours took ten minutes to reject on defensible grounds. Every other roster vendor that claims accreditation names it.

---

## 6. OUTSTANDING CODES — 3

**Certified-Pep · Modern Research · Lumera Labs** — all chased more than once, no reply. The dormancy rule applies.

**LiveWell Peptides** — code broken both ways: `PROFPEPTID` live but truncated at 10 characters, `PROFPEPTIDE` "awaiting review." **No page until one is correct.** Likely a 10-char field limit → `PROF15` fits and matches PP's pattern.

**Wolverine** — pending since July 13, no reply. Dormant.

---

## 7. 🔴 CORRECTIONS TO v21 / v22

**Licensed Peptides is NOT a target.** They are an **active vendor** — code `PROFPEPTIDE`, 5% discount, 10% commission, live coupon page with bespoke OG images, path-based affiliate link `/ref/60815/`. v21 and v22 both list them under "remaining application targets — direct."

**BioPure Peptides is NOT a target.** Active vendor, `PROFPEPTIDE`, 5%.

**99 Purity's code is `PROFPEPTIDE`, not `PROFPEPTIDE10`** — reissued August 6. The page is **built and live**; v22's "BLOCKED, do not build" is obsolete.

**Nura Peptide** — approved at 15% off / **25% commission, the highest on the roster**. Verify whether the page shipped before treating it as queued.

---

## 8. THE 99 PURITY DISCOUNT — ✅ RESOLVED: 10%

**Mark verified it at checkout on August 6. The code deducts 10%.** That is definitive and closes the conflict.

For the record, two of the vendor's own surfaces had disagreed:

| Source | Said |
|---|---|
| Welcome email | 10% — "they get 10% off their order, and you get 10% commission" |
| Affiliate dashboard | "YOUR COUPON CODE (15% OFF)" |

**The email was right; the dashboard was stale.** PP had been publishing 10% deliberately as the safe direction, and that turned out to be correct rather than merely cautious. The `/prices` grid's "after 10%" math holds. No change needed anywhere.

> **The method that settled it:** add an item to a cart and apply the code. Whatever checkout deducts is the answer. Publishing a percentage two sources disagree about is the failure that suppressed Amino Club's SERP snippet — Google saw the copy claim one figure while the structured data carried another and stopped rendering the description. The whole title/description/JSON-LD chain derives from one `discount` field so they can't disagree; a wrong value at the source defeats that. **When a vendor's own surfaces conflict, the cart test is the tiebreak.**

---

## 9. REMAINING APPLICATION TARGETS

**Direct:**
- **GLP1 Research Lab** — `glp1researchlab.com/affiliate-program/` — **30%, the best rate identified anywhere**, in PP's top-converting category. **Still unapplied.** This is the highest-value item in this document.
- Onyx Biolabs · Ion Peptide · Peptide Supply
- Physique Peptides ⚠️ *$750/mo minimum or terminated*

**Email — no public affiliate page:** Peptide Crafters · Profound Aminos

**Removed:** Nura, 99 Purity, Licensed Peptides, BioPure — all approved.

---

## 10. OPEN QUESTIONS WITH VENDORS

| Vendor | Question |
|---|---|
| **Licensed Peptides** | Does stacking another code alongside `PROFPEPTIDE` void referral attribution? Is `save10` permanent or sale-tied? |
| **Glacier** | Does the old `PROF10` still redeem? Four posts went out with it before the change. |
| **PureRx** | Q1, still unanswered since July: is commission earned when a customer uses PureRx's **own** public code rather than PP's? |
| **Nura** | Their banner offers 20% off a first order for email signup — more than PP's 15%. **Does it stack?** If not, a first-time buyer is better off ignoring PP's code entirely. |

---

## 11. NEW-PAGE REQUIREMENTS

Every new coupon page ships with:
- The **card-top layout** — H1 → facts subtitle → single code card above the fold
- **`opengraph-image.tsx` AND `twitter-image.tsx`** — Crush, Treasure Coast and Modern Aminos all shipped without them and fell back to the generic square on X
- A `facts` object populated **from an actual certificate**, not marketing copy
- An `ONBOARDING_BACKLOG` entry with a reason and date if the vendor won't have price rows

**Modern Aminos EU/CA: dropped, don't chase.** Building EU and CA storefronts would split one vendor relationship across three near-identical pages for an audience that buys from the US store.

---

*Apply broadly, build selectively. A code in hand costs nothing; a page costs research, price-pull onboarding, X posts, and ongoing verification. Never publish a discount percentage that two sources disagree about.*
