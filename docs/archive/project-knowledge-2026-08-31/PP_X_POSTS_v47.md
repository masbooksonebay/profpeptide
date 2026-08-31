# PP X POSTS — v47

**Status:** ACTIVE. Full replacement, supersedes v46 and all addenda.
**Date:** August 6, 2026

> **Why X matters more than the traffic suggests:** code-based attribution drives the majority of PP revenue. Buyers see a code on X, go directly to the vendor, and PP earns commission with no site visit recorded. Peptide Partners generates ~51% of total commission history with negligible GSC impressions. **X posts, not search, likely drive the money.**

---

## 1. POST FORMAT (LOCKED)

```
{Vendor} has {ANCHOR} in stock!

Use code {CODE} for {X}% off. 🔥

{Vendor} also has {2-3 compounds}.

{Testing differentiator}

https://profpeptide.com/coupons/{slug}
```

- **≤275 characters** (280 limit, safety margin)
- Opener ends with **`!`**
- **🔥 only on the code line.** No other emoji anywhere.
- **Peptides spelled out** — Retatrutide not Reta, Semaglutide not Sema
- 3–4 compounds max in the "also has" line
- **No urgency language** ("limited time," "act fast") — except a real dated deadline
- **No vial sizes**
- **No dosing protocols, no medical voice**
- **Line 4 is testing/purity ONLY.** Not reviews, not shipping, not price.

**Rotation is Mark's.** Claude drafts by category; Mark assigns accounts and posts.

---

## 2. SALE POSTS

- **Deadline goes in the discount line**, not a separate line.
- **Link the `/coupons` hub, not the vendor page** — the per-vendor OG card bakes the standing rate into the image and would contradict a sale post.
- **No promo mechanics** — no giveaways, no spend thresholds, no top-spender contests.

### 🔒 The elevated-rate rule

An elevated-rate post carries **either a deadline in the text or "up to" phrasing.** Either one makes it age honestly and removes the cleanup step entirely.

A bare elevated number is the only version that needs deleting later.

*Proven both ways: Mile High's 30% posts carried "sale ends Sunday, August 9"; Amino Club's carried "up to 30%." Neither needed cleanup.*

### Stacking sales

When a vendor runs an automatic sitewide discount AND the affiliate code stacks, that's the strongest post available — it's news rather than a stock announcement.

**Do NOT state a combined percentage.** 25% then 10% compounds to 32.5%, not 35%. Write "25% off sitewide + 10% with code" and let the arithmetic happen at checkout.

**Verify stacking before posting.** A vendor's written statement is good evidence; a cart test is definitive. *(99 Purity precedent: whatever checkout deducts is the answer.)*

### ⚠️ Public codes that beat PP's

Check whether the vendor circulates a public code deeper than PP's. Licensed Peptides' `save10` is 10% against PP's 5% and stacks — so a reader gets more from a code PP doesn't own.

**The real risk is commission.** Many affiliate programs void attribution when another coupon is applied to the same order. If the vendor's terms don't address it, ask them before running a set.

---

## 3. CODED COMPOUNDS

When a vendor lists a compound under a code, the post names the compound **with the disclosure**: `Retatrutide (listed as LP3-R)`. A reader searching their store for "Retatrutide" otherwise finds nothing.

**Decode evidence hierarchy:** CAS number, molecular formula, MW, mechanism, or dev code. **Never the naming convention alone.** A `GLP-3` suffix is not evidence.

**Evidence-backed decodes:**

| Vendor | Code | Compound | Evidence |
|---|---|---|---|
| Licensed Peptides | LP3-R | Retatrutide | **CAS 2381089-83-2** on the vial; COA chromatogram peak labeled "Retatrutide" |
| Licensed Peptides | LP2-T | Tirzepatide | **CAS 2023788-19-2** on the vial |
| EZ Peptides | EZP-1P / 2P / 3P / CG | Semaglutide / Tirzepatide / Retatrutide / Cagrilintide | EZ's own COA page — Janoshik links list matching sizes |
| Mile High | MHC-1 SM / 2 TRZ / 3 RT | Semaglutide / Tirzepatide / Retatrutide | Mark's call |
| Glacier | GLA-1 SM / 2 TRZ / 3 RT · S-31-S | Semaglutide / Tirzepatide / Retatrutide · SS-31 | self-decoding key |

**Coded combos exist and are invisible to every rule:** peptide-giants `PG-3RT+C` and nura `GLP-3R / CAG` are both Retatrutide+Cagrilintide. Never post one as a single compound.

---

## 4. THE RETATRUTIDE-FIRST RULE

If a vendor stocks Retatrutide, the metabolic post names it **first**. It's PP's highest-demand compound.

---

## 5. DE-DOMAIN RULE

A vendor name that is a live domain gets de-domained in post body text — **"Peptides.gg" → "Peptides GG"** — or X hijacks the per-vendor OG card.

**Names with a space are safe:** EZ Peptides, Mile High Compounds, Glacier Aminos, Licensed Peptides. No de-domain needed.

---

## 6. TESTING DIFFERENTIATORS (line 4)

**Only what the vendor publishes, verified.** Never borrow another vendor's, never infer from a trust badge, never soften a missing claim into an implied one.

**If nothing is verifiable, drop the slot rather than fake it.** An attributed version — "Vendor states testing by independent US labs" — reads weakly on purpose, and that weakness is itself the signal.

**No purity figure from a single batch.** One COA at 99.927% doesn't license a blanket claim. Name the lab and the COA cadence instead.

| Vendor | Line 4 |
|---|---|
| Glacier | `Tested by Kovera Labs — per-batch COAs, verifiable at the lab.` |
| EZ Peptides | `Third-party tested by Janoshik, with public COAs.` |
| Mile High | `99%+ purity, HPLC/MS verified; third-party tested, public COAs.` |
| Licensed Peptides | `99%+ HPLC purity, third-party verified. Endotoxin screened.` |

> **The lab is named on the certificate, not in marketing copy.** Before concluding a vendor publishes nothing, try the direct-asset path (`/wp-content/uploads/…`) and then ask Mark. Five vendors were understated exactly this way.

---

## 7. VENDOR CODE MASTER

Read `vendors.ts` before drafting. The table below is a convenience copy and can go stale.

| Vendor | Code | Discount |
|---|---|---|
| Ascension Peptides | PROFPEPTIDE | **50%** |
| Amino Club | PROFPEPTIDE | 20% |
| Almighty Peptides | PROFPEPTIDE | 20% |
| Vital Core Research | PROF20 | 20% |
| Aero Peptides | PROFPEPTIDE15 | 15% |
| Amino X | PROF15 | 15% |
| Oasis Labs | PROF15 | 15% |
| Purity Peptides 🇨🇦 | PROF15 | 15% |
| PureRx Peptides | PROFPEPTIDE | 15% |
| Nura Peptide | PROFPEPTIDE15 | 15% |
| **Glacier Aminos** | **PROFPEPTIDE** | 10% — *changed from PROF10, Aug 6* |
| EZ Peptides | PROFPEPTIDE | 10% |
| Peptide Partners | PROFPEPTIDE | 10% |
| Mile High Compounds | PROFPEPTIDE | 10% |
| Peptide Giants | PROFPEPTIDE | 10% |
| BioCollex · Integrative · Limitless · Spartan | PROFPEPTIDE | 10% |
| Particle Peptides 🇪🇺 | PROFPEPTIDE | 10% |
| Ameano · Behemoth · Ignite · Midwest · Royal · PureRawz · Swiss Chems | PROF10 | 10% |
| Synthesis Peptides | PROFPEPTIDE10 | 10% |
| 99 Purity Peptides | PROFPEPTIDE10 | 10% *(published; dashboard says 15% — understating deliberately)* |
| **Licensed Peptides** | PROFPEPTIDE | **5%** |
| BioPure Peptides | PROFPEPTIDE | 5% |

**Codes are case-insensitive at checkout across the roster. PP always renders them UPPERCASE.**

**⚠️ Glacier's code changed Aug 6.** Four posts went out with PROF10. Confirm with Glacier that PROF10 still redeems, or those posts need reposting. And any `/coupons/glacier-aminos` link already shared to X or iMessage keeps showing the PROF10 card permanently — OG images cache per URL and cannot be refreshed.

---

## 8. POSTED

| Vendor | Set | Note |
|---|---|---|
| Mile High | 5 posts | 30% sale Aug 6–9, deadline in text |
| Glacier | 4 posts | PROF10 — see the code-change warning above |
| EZ Peptides | 4 posts | 25% sitewide + 10% stacking, through Aug 11 |
| Licensed Peptides | posted | 5% + stacking |

---

## 9. STANDING CAUTIONS

- **Verify stock before posting.** Stored profiles go stale in weeks. Survodutide was drafted for EZ and Licensed Peptides and doesn't exist in either catalog.
- **Domain traps.** Six "EZ Peptides" sites exist — ours is `ezpeptides.com`. Never trust an aggregator's data without checking the domain.
- **Never state a purity number** unless it's the vendor's published standard, and never as a measured figure.
- **New coupon pages need `opengraph-image.tsx` and `twitter-image.tsx`** — Crush, Treasure Coast and Modern Aminos shipped without them and fell back to the generic square.

---

*Full replacement. RULE #0 governs — read `vendors.ts` before drafting, never the cached table above.*
