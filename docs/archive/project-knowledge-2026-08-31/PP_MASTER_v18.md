# PP MASTER — v18

**Status:** ACTIVE. Full replacement, supersedes v17.
**Date:** August 6, 2026
**Scope:** Prof. Peptide site state — roster, page structure, homepage, metadata, social cards, open items.

> Price data lives in **PP_PRICES v5**. X posts in **PP_X_POSTS v47**. Doc corrections in **PP_CORRECTIONS v1**.

---

## 1. STATE

| | |
|---|---|
| Active vendors | **40** |
| Live coupon pages | 40 |
| Vendors with price grids | 37 |
| Grid rows | 1,666 |
| Peptide profiles | 62 |
| Supplements | 53 |
| Comparisons | ~18 |

---

## 2. VENDOR SECTIONS ON `/coupons`

Registry-derived. Un-retiring a vendor in `vendors.ts` restores it to the hub and the sitemap automatically — both derive from the `retired` flag.

| Section | Members |
|---|---|
| **Professor's Picks** (`editorsPick`) | Amino Club · Glacier Aminos · Peptide Partners |
| **US Vendors** | everything else with `region: "US"` — includes Oasis and Ascension |
| **International** | Purity Peptides 🇨🇦 · NOVA 🇦🇪 · Particle 🇪🇺 |

**Best Deals section removed.** The `bestDeal` field stays on the type, dormant and revivable — and the `&& !bestDeal` exclusions were dropped from the US/International filters so a future `bestDeal` vendor isn't stranded off the page. Reviving means re-adding the section and the exclusions.

**Editor's Pick pill removed** from cards. Section membership carries the signal.

**Three deliberate labels, do not "reconcile" them:**
- `/coupons` section heading → **"Professor's Picks"**
- `/best-peptide-vendors` → **"Featured Vendors"**
- registry field → **`editorsPick`**

**And two different vendor pages:**
- `/vendors` = **"Verified Vendors"** everywhere
- `/best-peptide-vendors` = **"Featured Vendors"** everywhere
- Bare "Vendors" is the nav dropdown parent only, never a link label to either.

---

## 3. `routes.ts` — SINGLE SOURCE FOR LABELS

`src/data/routes.ts` holds `{ href, navLabel, longLabel, subline }` per destination. Consumers: Header, SearchOverlay, `page.tsx` (hero + cards), Footer. Layout and styling stay local.

| key | href | navLabel | longLabel |
|---|---|---|---|
| peptides | /peptides | Peptides | Peptide Library |
| verifiedVendors | /vendors | Verified Vendors | Verified Vendors |
| featuredVendors | /best-peptide-vendors | Featured Vendors | Featured Vendors |
| prices | /prices | Prices | Price Comparison |
| coupons | /coupons | Codes | Vendor Discount Codes |
| calculator | /calculator | Calculator | Peptide Reconstitution & Dosage Calculator |

**Two labels deliberately left inline** because they fit neither field: the `/coupons` **card** reads "Coupon Codes," and the **footer** `/calculator` link reads "Dosage Calculator" (the long form doesn't fit a footer).

**`verifiedVendors.subline` is inert** — no surface renders it.

---

## 4. HOMEPAGE

**Nine cards, three rows, nav order:**

```
Peptide Library    Bioregulator Guide   Comparisons
Featured Vendors   Prices               Coupon Codes
Peptide Recon. &   Get the App          News
Dosage Calculator
```

**Removed:** Supplement Library (1,070 impressions, **zero clicks** over six months, avg position 70.1 — same basis the nav removal used) · Protocol Tracking (duplicated Get the App) · FAQ. **All three keep their routes, footer links and sitemap entries.**

**Added:** Prices — there was no Prices card despite it being in the nav and the largest data asset on the site. Count derives from `activeVendorCount`.

**`<title>`:** `Prof. Peptide — Peptide Research, Prices & Discount Codes` (57 chars). Set once at `layout.tsx:17`; every other route overrides it. `og:title` and `twitter:title` are brand-only and don't mirror it.

**Calculator naming:** nav says "Calculator," the card and the page `<title>`/H1 say "Peptide Reconstitution & Dosage Calculator." The tool ranks for "bac water calculator" and got zero impressions for "peptide reconstitution calculator" — the title was the lever. **URL stays `/calculator`** — 72 inbound-link files make a 301 a bad trade.

---

## 5. SOCIAL CARDS

Three families, all 1200×630:

| Card | Pages |
|---|---|
| **Homepage vial card** (`generateHomeOg`) | `/` only |
| **Per-vendor coupon card** (`generateCouponOg`) | `/coupons` + all 40 vendor pages |
| **Content card** (`generateContentOg`) | peptides/[slug] · prices/[compound] · the hubs · vendors · faq · glossary · calculator · peptide-sciences-alternatives · bioregulators |
| Bespoke | `/about`, both `/guides`, `/app` |
| Plain tile (`og-image.png`) | supplements/* · compare/* children · news articles |

**Content card copy:** headline "Independent Peptide & Supplement Research," tagline "Evidence-based profiles, comparisons & price data." Broad enough to sit under a peptide profile, a supplement page, a comparison and a news article.

### 🔴 The precedence rule — proven, not assumed

A file route (`opengraph-image.tsx`) supplies the image **only for pages in its own segment.**

- Page with **no `openGraph` object** → inherits an ancestor route.
- Page with a `buildPageMetadata` `openGraph` → **needs a route in its own directory** plus `useDefaultOgImage: false`. A parent-segment route never reaches it.
- Page with an **explicit `images`** in a manual metadata object → that beats even a same-segment route. Remove the explicit image.

**A route file alone does nothing** — explicit metadata beats the file convention. Verified: adding a route to `/bioregulators` left it still serving `og-image.png`, with the generated route URL absent from the head.

**The cascade fails.** A parent route does not reach static child directories. Supplements (53), compare (17) and news (12) are per-name static dirs, so covering them would cost ~164 route files. **Left on the plain tile deliberately** — it's a correctly-sized 1200×630 wide brand card, and those are the lowest-demand families.

> **OG images cache per URL permanently on X and iMessage and cannot be force-refreshed.** Any already-shared link keeps its old card forever. **Never put a number, count or date on a card.**

---

## 6. `/vendor-testing-index` — NOINDEXED, NOT BUILDING

`noindex, follow` re-applied. Route live, removed from `/coupons`, still linked in `/best-peptide-vendors` prose.

**Why it isn't being built:** 28 of 40 vendors render "Pending," and no refresh mechanism exists when a vendor changes labs — Glacier moved to Kovera and nothing would have signalled it. A table that silently goes wrong is worse than none. Search demand is coupon and vendor-code queries, not lab attribution.

**The salvage:** testing detail belongs on the individual coupon pages, where readers land.

---

## 7. `facts` MODEL

```ts
facts?: {
  purityStandard?: string;   // the vendor's PUBLISHED standard
  coa?: "per-batch" | "per-product" | "library" | "on-request" | "login-gated";
  labAccreditation?: string;
  labName?: string;          // ONLY a verified, COA-sourced named lab
  labClaim?: string;         // the vendor's own description, rendered ATTRIBUTED
  testMethods?: string;
  contaminants?: string;
  coldChain?: boolean;
}
```

**`labName` vs `labClaim` renders as different sentence types**, plus a visual cue — verified renders dark, assertions render grey-italic:

- `labName` → **"Tested by Vanguard Laboratory"**
- `labClaim` → *Vendor states: "cGMP/ISO labs"*
- `labAccreditation` fallback → *Vendor states: "ISO/IEC 17025-accredited lab"* (also attributed — it's the vendor's claim too)
- neither → "Pending verification"

> **Purity is ALWAYS the vendor's *standard*, never a measured figure, and never implies PP tested anything.**

**Verified labs on record:** Glacier → Kovera Labs · Peptidology → Vanguard Laboratory (A2LA #6377.01.01) + Eagle Analytical Services · Licensed Peptides → Vanguard Laboratory · Mile High → Chromate + Vanguard · EZ → Janoshik · Ignite → Janoshik + Freedom Diagnostics · Ascension → MZ BioLabs · Spartan → MZ BioLabs · Oasis → Bioviridian · Purity → MDX Biolabs · NOVA → Janoshik · Behemoth → Colmaric Analyticals · Amino X → Kovera Labs · Peptide Partners → TrustPointe, Kovera, BioRegen, Chromate

**Casing normalized:** "MZ BioLabs" (was mismatched with Spartan's "MZ Biolabs" — same lab).

---

## 8. COUPON PAGE STRUCTURE (LOCKED)

```
← Back to Discount Codes
H1 — "{Vendor} Discount Code — Save {X}%"     ← carries the ranked phrase, never trim
Facts subtitle — composed by vendorFactsLine(slug)
Code card — code · ✓ Verified {Month} {Year} · Shop button
Prose
"{Vendor} catalog & prices" H2 + grid
FAQ
```

The H1 keeps the full phrase — PP's search demand is literally "{vendor} discount code." One code card, above the fold. No discount pill. The facts line is data-driven, never per-page text.

**Codes derive from `vendors.ts`** into the code card, inline mentions, meta description, JSON-LD Offer and the OG card. **FAQ answers are hand-written and hardcode the code** — changing a code means editing those too.

---

## 9. SITEMAP

`/peptides` and `/supplements` render **dynamic (ƒ)** because both read `searchParams` for the `?category=` filter. next-sitemap discovers only from the static prerender manifest, so both were silently absent. **Patched via `additionalPaths`.** The proper fix is moving the filter off `searchParams` — see the improvement backlog.

---

## 10. RECENT WORK

| Commit | What |
|---|---|
| `bf33c0d` | Particle Peptides restored — un-retired, region EU, 17 peptide links intact |
| `db5dec3` | Homepage 9-card grid |
| `42431fd` | Professor's Picks · Best Deals removed · July H1 dropped |
| `4e20537` | Quick Links + hero CTAs aligned to nav |
| `20c99c5` | `routes.ts` |
| `75f6b63` · `a3fdb26` | Card glyphs → lucide; shield twin |
| `9ca19a3` | Licensed Peptides facts + prose corrected |
| `ab13e44` | Glacier code PROF10 → PROFPEPTIDE |
| `d99c44d` | Content OG cards across 11 segments |
| `b642d6b` | `/news` FDA article — beat restarted after June 16 |
| `863a945` | `/vendor-testing-index` noindexed |

---

## 11. IMPROVEMENT BACKLOG

*Not queued. After current work.*

1. **Vendor testing data** — read one COA per vendor via the direct-asset path; populate `labName`, `labAccreditation`, `coa`, `testMethods`, `contaminants` from the certificate. **Surface on coupon pages**, not a comparison table.
2. **Audit coupon-page prose against the COAs.** Licensed Peptides' page asserted the vendor doesn't name a lab and claimed mass spectrometry — both false, both hand-written, both invisible to every guard. Five vendors were understated the same way; their prose likely carries the same errors.
3. **OG card v2** — update the generic brand card with the current logo.
4. **Title-as-headline OG cards** — a card saying BPC-157 beats a generic one. Feasible via `params` on dynamic routes; moderate cost.
5. **Restructure supplements / compare / news** from static per-name dirs to dynamic `[slug]` routes. Would make the content OG card cheap for all 82 pages **and** likely fix the `?category` dynamic-rendering issue keeping those hubs out of the sitemap. Two problems, one refactor.
6. **biolongevity affiliate link 404** — `go.biolongevitylabs.com/aff_c` → hasoffers redirect returns 404. Our own broken outbound link.

---

## 12. OPEN DECISIONS

| Item | |
|---|---|
| **Format comparability on `/prices`** | SLU-PP-332 spans 4239× across formats. See PP_PRICES v5 §10. |
| **`vetted` flag** | Proposed and **declined** — `/best-peptide-vendors` stays hand-maintained. A derived flag would encode the registry's understatement of vendor testing into a page that claims to vet. |
| **Vital Core** | 40 rows behind a verified hard login wall. Does PROF20 work post-registration? |

---

*Full replacement. RULE #0 governs. The artifact beats the doc.*
