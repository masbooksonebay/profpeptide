# PP_SITE_DESIGN — v4 ADDENDUM: Price grid improvements

**Status:** ACTIVE addendum to PP_SITE_DESIGN v3.
**Date:** August 16, 2026
**Source:** competitive scan of peptidecomp.com and peptidestack.io — see PP_COMPETITORS v1.

⚠️ **None of these is built.** This records the ideas, the reasoning, and the open questions so they don't need re-deriving.

---

## 1. SIZE TABS ON `/prices/<compound>` — highest value

**Today:** every size renders in one table. A 5mg row and a 60mg row sit in the same list, and the `$/mg` column carries the entire comparison.

**The change:** selectable size tabs above the vendor list — `5mg · 10mg · 20mg · 30mg · 50mg` — filtering to one size at a time.

**Why it matters:** a buyer knows what size they want before they arrive. Comparing 47 vendors across six sizes simultaneously is a harder read than comparing 8 vendors at 10mg. It also makes the total price meaningful again, not just `$/mg`.

**Open questions:**
- Which sizes get tabs? Sizes vary per compound and some are one-offs. Derive from the data or curate a standard ladder?
- What happens to a vendor with no row at the selected size — hidden, or shown as unavailable?
- Does the "cheapest" badge recompute per size? It should.
- Does this break the `≥3-vendor` indexable gate reasoning? The gate counts vendors per compound, not per size — a size tab with 2 vendors would look thin on an indexable page.

---

## 2. LAB AND PURITY INLINE, PER ROW — the differentiator

**Today:** the grid shows vendor, size, price, `$/mg`, stock. The lab name and purity standard live on `/coupons/<vendor>` and in `/vendor-testing-index`.

**The change:** render lab + purity in each price row — `Janoshik 99.6%`, `Accumark ≥98%`, `Freedom Diagnostics ≥99%`.

**Why it matters most of all of these:** price grids are trivially replicable — peptidecomp generated a plausible-looking one with fabricated numbers. **A grid that shows who tested each vendor's product is not replicable without doing the work PP has already done.** It merges PP's two strongest assets onto one surface.

⚠️ **Accuracy constraints:**
- `labName` is empty for vendors PP couldn't verify. Render nothing, not "unknown" — the testing index already uses a neutral "Pending" and that convention should carry.
- `labAccreditation` is separate from `labName`. Accumark states ISO 17025 as **pending**, not held — never render an accreditation PP hasn't confirmed.
- Purity is a **published standard**, not a measured batch result. `≥98% by HPLC` is quotable; a single lot's 99.52% is not.

---

## 3. PROGRESSIVE DISCLOSURE — top N, then expand

**Today:** every carrying vendor renders at once. Tesamorelin shows 45 rows.

**The change:** show the top handful, then "+ N more offers".

**Why it matters:** it's the answer to the "limit the grid to the top 20 vendors" question — **completeness in the data, brevity in the view.** Nothing is cut, the "compare prices across 39 vendors" claim stays true, and the page stops being a wall.

⚠️ **Do not implement by trimming the data.** The completeness claim is the differentiator. This is presentational only.

**Open question:** what's the sort for the visible top N — cheapest `$/mg`, or the derived vendor ranking? Cheapest is what a buyer wants; the derived order is what PP curates elsewhere.

---

## 4. DELIVERY WINDOW — worth collecting?

**The change:** `In stock · ships 1–2 days` per row.

⚠️ **Not obviously worth it.** Shipping time is per-vendor, not per-product, so it'd live in `vendors.ts` and render identically on every row for that vendor. That's a vendor-page fact, not a price-grid one — and it needs manual collection and maintenance across 48 vendors with no automated source.

**Recorded as considered, not recommended.** Revisit only if there's an easy source.

---

## 5. 🔴 WHAT NOT TO COPY

**Don't hide the code behind a click.** peptidecomp renders "Click for 15% off" rather than showing the code, which forces an affiliate click to reveal it. **PP's entire attribution model depends on the code being readable** — buyers see it, go direct, PP earns. Hiding it inverts the mechanism that produces the revenue.

**Don't strip the prose.** peptidecomp has no compound explanations, no methodology, no vendor reviews — just a grid. That prose is why PP ranks for compound queries at all, and it's what a generated site can't produce.

---

## Priority

**1 and 2 are the ones worth building.** Size tabs improve the core comparison; inline lab data makes the grid unreplicable. 3 is a nice-to-have that solves a real scroll problem. 4 is probably not worth the maintenance.

---

*Addendum to PP_SITE_DESIGN v3. Nothing built. Fold into the next full version.*
