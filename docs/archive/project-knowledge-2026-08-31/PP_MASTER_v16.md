# PP MASTER — v16

**Date:** August 2, 2026
**Status:** ACTIVE. Supersedes v15.
**Covers:** July 31 – August 2. Coupon-page restructure, the freshness system, the facts model, and three evidence-honesty findings.

---

## 📊 STATE

| | |
|---|---|
| Active vendors | **37** |
| Live coupon pages | 37 (34 with price grids) |
| Layout | **Card-top** — H1 → facts subtitle → single code card above the fold |
| Verified month | Derived from a machine stamp, advances automatically on the 1st |

**Added this session:** PureRx Peptides (15%), Peptide Giants (10%), Nura Peptide (15%, **25% commission — highest on the roster**), 99 Purity Peptides (10%).

---

## 🎨 COUPON PAGE STRUCTURE (LOCKED)

```
← Back to Discount Codes
H1 — "{Vendor} Discount Code — Save {X}%"     ← carries the ranked phrase, do not trim
Facts subtitle — composed from vendors.ts
Code card — code · ✓ Verified {Month} {Year} · Shop button
Prose
"{Vendor} catalog & prices" H2 + grid
FAQ
```

**Four rules:**

1. **The H1 keeps the full phrase.** PP's search demand is literally "{vendor} discount code" — trimming to the vendor name would cost the exact match on 37 pages.
2. **One code card, above the fold.** A second card at the catalog section was built and removed as redundant. Verified visible at 375px on the longest-prose page.
3. **No discount pill.** The H1 already says "Save 20%"; a "20% OFF" pill directly beneath is the same fact twice.
4. **The facts line is data-driven.** Composed by `vendorFactsLine(slug)` from structured fields — never per-page text.

---

## 🧩 THE `facts` MODEL

```ts
facts?: {
  purityStandard?: string;      // the vendor's PUBLISHED standard, e.g. "≥99%"
  coa?: "per-batch" | "per-product" | "library" | "on-request" | "login-gated";
  labAccreditation?: string;    // "ISO/IEC 17025"
  labName?: string;             // "Janoshik", "Kovera Labs"
  testMethods?: string;
  contaminants?: string;
  coldChain?: boolean;
}
```

`vendorFactsLine(slug)` joins only present segments with `·`; absent fields drop cleanly. `region` is separate and always present.

**Two surfaces derive from it:** the coupon-page subtitle and `/vendor-testing-index` — which was hand-maintained and **missing 17 of 37 vendors while claiming to cover "every vendor."**

> 🔒 **Purity is ALWAYS rendered as the vendor's *standard*, never as a measured figure, and never implies PP tested anything.**

⚠️ **Two known modeling losses:** the index treated `publishedCoa` and `batchCoa` as independent booleans; `facts` has one `coa` enum, so a vendor that publishes non-batch COAs can't be distinguished. And Oasis's per-vial QR — arguably its most distinctive feature — fits no field. Revisit if that table becomes a differentiator.

**17 vendors show "Pending"** on the newer columns. Honest, and now visible rather than silently absent.

---

## 🕐 THE FRESHNESS SYSTEM

**The problem:** on August 1 every coupon page still read "verified and working for July 2026." One hand-set constant, 37 pages stale at midnight.

**The system now:**

1. `check:vendors` writes a **machine stamp** — ISO date, display date, **and the set of slugs actually verified** — only on a clean run.
2. `CODES_VERIFIED_DATE` **derives from the stamp.** The hand-set constant is deleted. The month cannot diverge from the last real check.
3. The **verified pill** renders per vendor via `isCodeVerified(slug)` — a vendor outside the last clean run shows no date. Correctly suppresses on the 3 retired vendors.
4. `check:freshness` **fails** on the description budget, **warns** on stamp age.
5. **GitHub Actions runs it monthly** — 16:00 UTC on the 1st, stamp-first/fail-last.

### 🔒 The month-length trap

Descriptions are capped at 155 chars. **July is the shortest month name of the year** — every subsequent month is longer, September worst at +5.

**The budget is computed against "September", the longest possible month.** Twelve differentiators were trimmed to fit. Without this, every month transition would break pages — August alone pushed 8 over.

### The stamp gate

A dead vendor no longer blocks the stamp for everyone: it advances for the **reachable set**, excludes the dead vendor from the verified slugs, and still exits non-zero so it gets fixed. Bot-walled (401/403/406/429/503) is tolerated and counts as verified.

⚠️ **New vendors need a `check:vendors` run to get their pill.** Added mid-month, they're absent from the last clean set and show no verified date. Fold it into vendor onboarding.

---

## ⚠️ THREE EVIDENCE-HONESTY FINDINGS

**1. PP published purity claims two vendors don't make.** `amino-x` and `purity-peptides` carried "≥99% Purity Verified" pills. Neither states a purity figure anywhere on their live sites. Hand-typed, never verified, never guarded — and PP was asserting them publicly.

**2. The "Verified" pill was wired to nothing.** A hardcoded literal on all 36 pages, connected to no data. It looked like a system signal.

**3. Homepage purity claims routinely overstate certificates.**

| Vendor | Homepage | Certificates |
|---|---|---|
| Crush Research | "99%+" | Epitalon **97.87%**, Sermorelin **98.86%** |
| EZ Peptides | — | MOTS-C **97.9%** |
| Amino Club | "99%+" | 99.14–99.85% ✅ **backed** |

> 🔒 **Precedence rule:** where a homepage badge conflicts with a method-attached spec, **the specific method-attached figure wins.** Aero publishes 99% on its homepage and ≥98% as its RP-HPLC area-percent spec — PP publishes ≥98%.

**Amino Club is the one that checked out** — and it *under*-labels itself, marketing "99%+ identity purity" while its COAs report the stronger HPLC area purity. Worth noting in its profile; certificates' formal PASS spec is ≥95%, so "99%+" is their internal target, not a certificate guarantee.

---

## 🖼️ OG CARDS

**Every coupon page needs `opengraph-image.tsx` AND `twitter-image.tsx`.** Crush, Treasure Coast and Modern Aminos shipped without them and fell back to the sitewide 1024×1024 square — which renders on X as a plain box with a caption.

**Add both files whenever a vendor page is created.** The structural template covers page and layout but not these.

⚠️ **`ez-peptides` renders text-only on X** while third-party validators render it fine. Not the `noindex` header (Glacier and the three new cards work with the same header) and not size (all ~586 KB). Unresolved; likely a stale X cache. Post the hub (`/coupons?v=2`) for that vendor until fixed.

---

## 🗂️ TWO VENDOR-CARD SYSTEMS — do not confuse them

| System | Feeds |
|---|---|
| Inline `<VendorHighlightBlock highlights={[...]}/>` | **Peptide profile pages** |
| `peptide-vendors.json` + `<WhereToBuy>` | Home, search, best-peptide-vendors |

Both look like "vendor cards for a peptide." Editing the JSON does **not** touch profile pages and **does** silently alter three other surfaces.

**Density ceiling: 5 cards per profile page, no exceptions.** Six profile pages had **zero** cards — `cardiogen`, `cortagen`, `pinealon`, `ss-31`, `vip`, `melanotan-i` — and therefore no path to revenue. All six now filled with established vendors leading.

⚠️ **~40 profile pages hardcode their five-vendor arrays** — roughly 200 hand-maintained entries. Every new vendor is invisible to all of them by default. The largest remaining instance of the hardcoded pattern.

---

## 📌 STILL UNTOUCHED — the ranking levers

| Item | State |
|---|---|
| **The 32 declined pages** | Never addressed. The only thing Google has actively rejected. Gates blend/stack expansion. |
| **Backlinks** | Never measured. The direct lever on the crawl-frequency constraint. |
| **Core Web Vitals** | Never measured. PureRawz now ~2,731 DOM nodes. |

**The best thing done for ranking this session was incidental:** 33 pages gained genuinely unique content — real compounds, prices, stock, varying length. That's the strongest available signal against the thin-content judgment behind the declined pages.

---

## 📅 Changelog

**v16 (August 2, 2026):**
- 🎨 **Card-top layout locked** across 37 pages; code above the fold at 375px; discount pill and second card removed.
- 🧩 **`facts` model added** — 7 structured fields driving the subtitle and the now-derived `/vendor-testing-index` (was missing 17 of 37 while claiming "every vendor").
- 🕐 **Freshness system** — machine stamp with verified-slug set, derived month, per-vendor pill, split-severity guard, monthly GitHub Action. **September-budget rule** locked.
- ⚠️ **Three evidence-honesty findings**, incl. PP publishing purity claims two vendors don't make.
- 🖼️ **OG card requirement** locked; ez-peptides X issue documented unresolved.
- 🗂️ **Two vendor-card systems distinguished**; six zero-card profiles filled; ~200 hardcoded profile entries flagged.

---

*Purity is the vendor's standard, never PP's measurement. The specific method-attached figure beats the homepage badge.*
