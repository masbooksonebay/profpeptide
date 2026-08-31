# PP_X_POSTS v50
**Supersedes v49. Updated 2026-08-19.**

*This version records what changed. All rules in v49 not contradicted here remain in force.*

---

## 1. 🔴 NEW LOCKED ELEMENT — "Research Use Only."

**Every vendor post ends with `Research Use Only.` as the final line before the link.**

```
{Vendor} has {compound} in stock!

Use code {CODE} for {X}% off. 🔥

{Vendor} also carries other {category} peptides including {2-3 compounds}.

{Testing differentiator — line 4}

Research Use Only.

{link}
```

**Why:** every post names compounds and a discount code. RUO is the standard disclaimer for that content, and PP's site carries it in the footer and on every profile. The posts were the only surface without it.

⚠️ X truncates behind "Show more," and the RUO line sits below the testing paragraph — so it usually falls inside the truncated portion. Fine for a disclaimer. The code and percentage still must survive above the fold.

---

## 2. SALE POSTS WITH STACKING

When a vendor runs a public sale **and** confirms PP's code stacks on top, the discount line carries both plus the deadline:

> Their {sale name} takes {X}% off every peptide starting {when} — and code {CODE} stacks on top for another {Y}%. Ends {day, date}. 🔥

**Requirements:**
- ⚠️ **The deadline is mandatory.** It's what makes an elevated rate read as an event rather than a contradiction of the standing rate on the site.
- ⚠️ **Stacking must be vendor-confirmed in writing.** Never assume.
- **Link the vendor page** when PP's own rate is unchanged — the card's stated rate stays accurate. Link the hub only when PP's *own* rate is temporarily boosted, since the vendor card bakes the standing rate.

**Worked example — EZ Peptides, 2026-08-19:**
> Their Back to School sale takes 30% off every peptide starting tomorrow — and code PROFPEPTIDE stacks on top for another 10%. Ends Thursday, August 27. 🔥

---

## 3. NEWS POSTS — a different shape

News articles get a distinct format. **No code, no vendor, no fire emoji** — editorial content, and a discount code in a regulatory post undercuts what makes it worth reading.

**Structure:** the finding → the counterintuitive detail → why it matters → the link.

**Worked example, FDA 503B:**
> The FDA has proposed excluding semaglutide, tirzepatide and liraglutide from the 503B Bulks List — permanently closing bulk compounding for all three, even if a future shortage is declared.
>
> Meanwhile 12 peptides were removed from Category 2 in April. Zero have been confirmed in Category 1.
>
> Removal isn't authorization. Those two get conflated constantly, and the difference decides what a pharmacy can legally compound.

⚠️ **Link the article's own URL, not the `/news` hub.** The hub's OG card and title are the hub's, and as new articles publish the link stops pointing at the piece described.

---

## 4. FIRST-LINE VARIATION

The standard first line is `{Vendor} has {compound} in stock!` with the fire emoji on line 2.

**Mark may override** to name several compounds and move the emoji up:

> Capstone Peptides has Semaglutide, Tirzepatide, and Retatrutide in stock! 🔥

⚠️ When this happens, the GLP disclosures (`(listed as GLP-3R)`) come **out** of line 1 — three parentheticals would bury the compound names. The vendor's own product titles usually self-decode at source.

---

## 5. LINE 4 — the testing differentiator

**Never write this from memory.** It names a vendor's laboratory and its testing panel. Read it from PP's own coupon page.

⚠️ **Never source it from a competitor's site.** Peptide Catalog, PepPal and PeptideStack all summarize vendor testing; using their description to write PP's post means sourcing your own site from a rival's.

**Verified examples:**

| Vendor | Line 4 basis |
|---|---|
| **Amino Club** | ISO/IEC 17025-accredited lab, full panel — HPLC purity vs a 99%+ standard, identity vs reference standard, ICP-MS heavy metals, PCR sterility, USP <85> endotoxin |
| **Capstone** | Accumark Labs, ≥98% purity specification, per-lot certificates in a public library, **measured peptide quantity**, verifiable by code on the lab's own domain. ⚠️ **Never claim accreditation** — Accumark's ISO 17025 is pending, not held |
| **Glacier** | Public batch-searchable COA library; recent lots from Kovera — three-vial conformity, LC-MS identity, HPLC vs ≥98%, net content, endotoxin, microbial, heavy metals, verifiable at koveralabs.com/verify |
| **EZ Peptides** | Janoshik, batch-numbered reports quantifying content across multiple vials, HPLC purity, unique key and QR verifying at janoshik.com/verify |
| **Nura** | Freedom Diagnostics — LC-MS identity, HPLC-UV purity, net content; recent reports add USP <85> endotoxin and PCR microbial. ⚠️ **Never claim a headline purity figure** — Nura deliberately publishes none |

---

## 6. THE X CARD CACHE

⚠️ **X caches OG cards permanently per URL and never re-fetches.**

`/coupons?v=2` is **burned to the old dark card.** `?v=3` was pasted into a compose box while the card was blank and may have cached that. **`?v=4` is the current hub URL.**

⚠️ **Pasting a URL into a compose box causes X to scrape it.** If the card renders blank at that moment, the blank may cache. Always check the card renders before sending a set; if it's blank, wait thirty seconds and re-paste before burning a new version.

⚠️ **And a related trap:** Next derives the `og:image` hash from the route module, not the rendered PNG. So when a vendor's rate changes, the image content changes but the **URL doesn't** — any platform caching that URL keeps serving the stale card.

---

## 7. STILL IN FORCE FROM v49

- **Retatrutide rule** — must appear in the first sentence of any metabolic post at a vendor stocking it
- **Vendor de-domain rule** — vendor names that are live domains get de-domained in body text (`Peptides.gg` → `Peptides GG`) to stop X hijacking the per-vendor OG card
- **Category structure** — metabolic (Retatrutide first) → recovery → growth hormone → dermal or nootropics
- **§0b thin-category rule** — a category with fewer than three nameable compounds doesn't get a post
- **No purity figures from a single batch** — state the specification, not one lot's result
