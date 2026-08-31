# PP_MASTER — Prof. Peptide

**Version:** v17 (August 4, 2026) — 41 vendors, derived counts sitewide, `AE` region added. Supersedes v16.

---

## Roster — 41 active vendors

**Added in SCS 28:**

| Vendor | Code | Discount | Commission | Notes |
|---|---|---|---|---|
| **NOVA Labs** | PROFPEPTIDE | 10% | 15% | **First Middle East vendor.** UAE/GCC. Brand "NOVA Labs", storefront `nova-biolabs.com`. Commission denominated in **AED** |
| **Legendary Peptides** | PROFPEPTIDE | 10% | 15% | Facts empty at build — published nothing verifiable. **Vendor has since replied with COA claims — see queue #8** |
| **BioPure** | PROFPEPTIDE | 5% | — | Ties lowest on roster. Their 10% signup is one-time and doesn't stack |
| **Licensed Peptides** | PROFPEPTIDE | 5% | 10% | Path-based `/ref/60815/`. **Originally issued `Affiliate5` — a shared code given to every affiliate, attributable to nobody.** Swapped on request |

**Already existed, confirmed:** Nura Peptide (15%, 25% commission — highest on roster), 99 Purity (10% published; **their dashboard says 15% — publish 10%, understating is safe**).

**Two at 5%** — BioPure and Licensed Peptides — a visible bottom tier on `/coupons`. Honest, but deliberate.

**Still unapplied:** GLP1 Research Lab (30%, highest rate identified).

---

## 🆕 Region union extended — `AE`

`region` was a closed union `US | CA | UK | EU | IS` with **no Middle East member**, and both `regionFlag` and `REGION_WORD` are exhaustive `Record<Vendor["region"], string>` maps — so `region: "AE"` was a **tsc error**, not a silent fallback.

Extended properly: union + 🇦🇪 flag + "UAE-based". The type system enforced updating both maps.

> Forcing a UAE vendor into "US" would have produced a false statement on the page. **When a type system blocks something, that's usually the correct answer, not an obstacle.**

**International section on `/coupons` already existed and is registry-driven** — four sections built by filtering: Featured (`editorsPick`), Best Deals (`bestDeal`), US (`region === "US"`), International (`region !== "US"`). Empty sections drop. Currently 2 vendors: Purity Peptides 🇨🇦, NOVA 🇦🇪. **Not worth splitting further until 5–6.**

---

## 🆕 ALL COUNTS NOW DERIVED — and guarded

**Five stale hardcoded counts found and fixed.** The worst: the **root-layout default description said "40+ peptides"** when there were 62 — inherited by every page without its own description.

| Surface | Was | Now | Source |
|---|---|---|---|
| `/peptides` title + desc | 54 | **62** | `profileCount` |
| `/supplements` title + desc | 51 | **53** | `supplementCount` |
| root default desc | **40+** | **60+** | `appPeptideFloor` |
| `/app` copy ×3 | 60+ literal | **60+** | `appPeptideFloor` |
| homepage stat | "Price comparisons" | **"Compounds compared" · 65** | `indexablePriceCount()` |
| `/prices` | "36 Vendors" | **"35 Vendors With Published Pricing"** | `priceVendorCount()` |

**Sources created:** `peptideCategories.ts` exports `profileCount` + `appPeptideFloor` · new `src/data/supplements.ts` with `supplementCount` · `prices.ts` exports `indexablePriceCount()`.

**"Vendors" means two different things and that's correct:** 41 (all active) on `/coupons`, homepage, `/vendor-testing-index`; **35** (with price data) on `/prices`. The qualifier "with published pricing" makes the smaller number self-explaining.

**`check:counts` — FAILS the build.** Phrase whitelist scoped to 9 chrome routes, strips `${…}` so derived passes. Paired with drift assertions in `check:surfaces` (WARN) confirming constants match route directories. **Honest limit: cannot catch a hardcoded count on a content page**, because those carry world-facts a scan can't distinguish.

---

## Homepage — SCS 28 changes

**Hero, under the H1:**
> Prof. Peptide is an independent research library covering 62 peptide profiles, 40 vendor reviews, price comparisons across all vendors, and verified discount codes.
> Plus a precision dosage calculator and an all-in-one protocol tracker app.

Order mirrors the nav. Both counts derived. The app moved into sentence two as a tool rather than sitting only in a panel Google quotes.

**OG image:** now 1200×630 via `opengraph-image.tsx` / `twitter-image.tsx`, current vector wordmark, no numbers. Old 1024² `og-image.png` reference removed. **Content pages still carry the square mismatch — queue #12.**

**`/app` retitled:** `Peptide Tracker App for iOS | Prof. Peptide` (43 chars). H1 and description unchanged.

**App Store links canonicalized** to `https://apps.apple.com/us/app/prof-peptide-protocol-tracker/id6761995269`, one shared constant in `src/lib/app-store.ts`.

**Homepage `<title>` still unchanged** — queue #3.

---

## SEO state

**Favicon now showing in Google results** as of Aug 4.

**`/vendor-testing-index` noindex LIFTED** — page is complete (40 rows registry-derived) and linked from `/coupons`. Worth requesting indexing.

**⚠️ Google has not recrawled the homepage since July 28.** Every homepage change since is unseen. Don't judge the snippet fix or reach for `data-nosnippet` until a crawl lands.

**Sitemap "Temporary processing error" has cleared** — 272 pages discovered, child sitemap last read Aug 3.

**Crawl frequency is NOT the constraint.** 19 of 20 inspected URLs indexed; PureRx and Peptide Giants were crawled next-day. **The constraint is ranking depth** — position 50–90 on pages Google indexes fine. That makes backlinks and content quality the levers, and indexing requests largely pointless.

**Brand-query entity problem:** Google's AI Overview attributes "The Peptide Professor" to Anthony Castore, an unrelated strength coach with YouTube and elitefts presence. `sameAs` tells Google what you claim; **what moves an entity is what others say** — which is why the inbound vendor-link mechanism matters more than another schema pass.

---

## Supplements — parked deliberately

**Mark's position:** supplements are a footer link, not a growth bet. Thousands of sites cover them in depth; PP isn't competing head-to-head.

**Given that, the section is correctly scoped and Google's judgment costs nothing.** 21 pages with zero clicks is the expected outcome of a section not being competed in.

**If it ever gets attention**, start with the peptide-adjacent ones — collagen peptides, NAD+ precursors, glutathione, arginine, citrulline — not the melatonin end.

**Honest caveat:** the claim that low-value pages drag a domain's overall assessment is a reasonable inference, not a proven mechanism.

---

## Changelog

**v17 (Aug 4, 2026):** 41 vendors · `AE` region added · all counts derived + `check:counts` guard · homepage hero/OG/`/app` retitle · favicon live · vendor-testing-index indexed · crawl-frequency diagnosis corrected · supplements parked with reasoning.
