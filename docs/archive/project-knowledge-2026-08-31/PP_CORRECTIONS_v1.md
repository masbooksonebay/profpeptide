# PP CORRECTIONS — v1

**Status:** ACTIVE. Read alongside any pre-August-2026 ref doc.
**Date:** August 6, 2026
**Purpose:** errors found in existing ref docs, each of which produced a wrong recommendation or nearly did. These docs are otherwise still useful — this file records what NOT to trust in them.

> A stale doc is a finding, not housekeeping. Every entry below cost real time or shipped a wrong action.

---

## PP_VENDOR_PAGES v2

**🔴 The Particle retirement commit is misattributed.**

v2 says `17068d4` removed Particle from the `/coupons` hub, the sitemap, `peptide-vendors.json` and the GHK-Cu block.

**It didn't.** `17068d4` changed **two files** — it added `redirect("/coupons")` to Particle's and Fusion's `page.tsx`. Nothing else.

**The real retirement is `0bc2733`**, six files: `next.config.js` redirect, `next-sitemap.config.js` exclude, the sitemap XML, the `/coupons` hub card, the GHK-Cu `VendorHighlightBlock`, and 5 carry-entries in `peptide-vendors.json`.

**Consequence:** a restore built from v2's description would have removed the redirect and left Particle absent from every list — a page that resolves but appears nowhere. CC caught it by reading the diff.

**Also note:** the hub and sitemap are now **registry-derived**, so two of `0bc2733`'s six edits have no manual inverse. Un-retiring in `vendors.ts` handles them automatically.

---

## PP_PRICES v2 *(superseded by v5 — these are the specific traps)*

**🔴 Mile High does NOT need a recurring manual CINC pass for sizes.**

v2 records ~37 products as needing manual sizing forever because the Vial Size dropdown isn't in the Store API.

The dropdown genuinely isn't. **But the size is stated in each product's `description`, which the API returns and the adapter already parses.** 35 of 37 recovered automatically on re-pull — verified read, not inferred, with varied sizes (GHK-Cu 50mg, NAD+ 500mg, BPC-157 10mg, Glutathione 1500mg, IGF-1 LR3 1mg).

Only SLU-PP-332 and Tesofensine genuinely need manual sizing — their descriptions state two sizes each, so the parser correctly abstained.

**🔴 "41 active vendors" — it's 40.**

**⚠️ "27 hardcoded coupon codes" overstates the problem.** For Glacier it was **two FAQ answers**. The code card, inline mentions, meta description, JSON-LD Offer and OG card all derive from `vendors.ts`. Hand-written FAQ prose is the exception, not the pattern.

---

## PP_VENDOR_PROSPECTING v21 and v22

**🔴 Licensed Peptides is listed under "remaining application targets — direct."**

They're an **active vendor** with an issued code — `PROFPEPTIDE`, 5% discount, 10% commission, live coupon page with bespoke OG images. Confirmed in the registry.

Following v21/v22 would mean re-applying to a vendor PP already has.

**Also stale:** Nura Peptide and 99 Purity Peptides are approved and live, not targets.

---

## PROJECT_INSTRUCTIONS v3

**🔴 §5 still says "PP's site auto-deploys on push to main — the push IS the deploy. Never a separate Vercel command."**

**Rescinded** by SCS_MP v6.21 on August 2, after the GitHub→Vercel webhook failed four times in three days — twice reporting healthy while delivering nothing.

Current rule: push, wait ~3 min, `npx vercel ls`, confirm a deployment fired, CLI-deploy if not, then verify live **content**.

This is the doc an executor is most likely to read, so the contradiction matters more than usual.

---

## SCS_29 HANDOFF

**"36 vendors with published pricing" — the live derived count was 35 at the time**, 37 after 99 Purity and BioPure onboarded. Probably counted NOVA, which is off `/prices` pending the currency decision.

---

## VENDOR TESTING — THE SYSTEMIC ONE

**🔴 The registry understates nearly every vendor's testing, and so does hand-written coupon-page prose.**

Five vendors were understated identically: Glacier, Peptidology, Amino Club, Licensed Peptides, and the eight resolved in the description-field audit. In each case **the lab is named on the certificate and nowhere else** — not in marketing copy, not in the registry. The registry reflects whatever was reachable on the day the vendor was onboarded.

**Worse, the prose can be actively wrong.** Licensed Peptides' coupon page told readers the vendor *"does not name the third-party lab… request that detail before purchase"* and claimed mass spectrometry. Their own product pages carry 40+ Vanguard Laboratory certificates, and the COAs show HPLC-UV/VIS. Hand-written prose is invisible to every guard and every type check.

**Corrected so far:**

| Vendor | Was | Is |
|---|---|---|
| Glacier | `labClaim: "independent US labs"`, `coa: login-gated` | **Kovera Labs**, `per-batch` |
| Peptidology | no lab, `labAccreditation` only | **Vanguard Laboratory** (A2LA #6377.01.01) + **Eagle Analytical Services** |
| Licensed Peptides | `coa: library`, "HPLC, mass spec", residual solvents | **per-batch**, **Vanguard Laboratory**, **HPLC-UV/VIS**, heavy metals + endotoxin + sterility |
| Mile High | no lab | **Chromate + Vanguard Laboratory** |
| Ascension | `"multi-stage"` | **MZ BioLabs** |
| Oasis | `"US labs"` | **Bioviridian** |
| Purity | `"accredited (N. America)"` | **MDX Biolabs** |
| Spartan | `"independent"` | **MZ BioLabs** |
| Ignite | `"US independent (ISO/GMP)"` | **Janoshik** + Freedom Diagnostics |
| EZ | absent | **Janoshik** |

**The standing rule this produced:** assume a vendor publishes real testing. A fetch failure is a statement about our access, not about them. Try the direct-asset path (`/wp-content/uploads/…`) before concluding anything, then ask Mark for a paste.

---

## HOW THESE SURVIVED

Every entry above sat in a doc that was written once and never re-read against reality. The addendum pattern made it worse — a base doc plus scattered addenda can't be reliably reconciled, and a superseded fragment reads identically to current truth in a search.

**Hence: ref docs are full replacements from now on.** Rewriting forces reconciliation. Prune history to the frozen snapshots.

---

*If this file disagrees with the code or a live page, the code and the page win.*
