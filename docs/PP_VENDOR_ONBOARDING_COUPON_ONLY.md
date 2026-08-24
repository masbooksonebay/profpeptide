# Coupon-only vendor onboarding runbook

How to add a vendor that gets a `/coupons/<slug>` page and a registry entry but **no price
grid** — the "coupon-only" path. It's the counterpart to `PP_VENDOR_EXIT_CHECKLIST.md`.
The price-pull runbook (`scripts/price-pull/add-vendor.md`) does **not** cover this path; a
coupon-only vendor never runs `refresh.py` and never touches the master doc.

This procedure is written from what actually shipped, because the three coupon-only vendors
were done inconsistently:

- **capstone-peptides** (PR #20, 2026-08-15) — one atomic commit, clean. **This is the canonical
  reference. Copy this dir.**
- **valkyrie-peptides** (2026-08-10) — same template, confirms the pattern.
- **particle-peptides** (legacy, 2026-04) — the **anti-pattern**: it inlines its whole compound
  `<dl>`, pulls the code dynamically from `vendors[...]` instead of a literal H1, has ragged
  indentation, and still carries a residual prose typo. Migrated toward the standard card but never
  fully refactored. **Do not copy it.**

And two classes of thing shipped broken and needed a later sweep — this runbook exists to stop
both from recurring:
- **OG routes missing** — crush-research, treasure-coast-peptides, modern-aminos shipped with no
  `opengraph-image.tsx`/`twitter-image.tsx` and silently fell back to the generic square (step 5).
- **The verified pill missing** — forge came through the *price-pull* runbook and still shipped
  pill-less for days because no `check:vendors` run followed (step 9).

---

## ⚠️ The three judgment calls — these are NOT mechanical

Most of this runbook is copy-a-dir-and-swap-the-slug. Three steps are not, and they are the ones
that go wrong. A runbook that pretends they're mechanical is worse than none. Decide each with a
human before writing any file:

1. **The testing read (step 1).** Whether a vendor may claim a named third-party lab — and whether
   it may claim accreditation — is a judgment about *documents you actually opened on the lab's own
   portal*, not the vendor's marketing. Getting this wrong publishes a false testing claim.
2. **The decode confirmation (step 6).** A coded GLP name (`GLP-RT`) is asserted to a compound only
   from evidence (COA molecular weight/formula/CAS, or a self-identifying spec), never from the code
   convention. Unconfirmed → leave it coded and unmapped.
3. **The reveal-gate decision (step 2).** Whether the vendor's *public* offer meets or beats PP's
   affiliate rate — if it does, showing the code on a crawlable page sends the buyer to the better
   public deal and PP earns nothing. This is a look-at-their-store call.

---

## 1. Verify third-party testing — the record that gates inclusion

This is the most important and least-scriptable step. PP's public inclusion bar
(`src/app/best-peptide-vendors/page.tsx`) is: *third-party lab testing with published Certificates
of Analysis*, documented purity, transparent shipping, responsive service, positive reputation. A
vendor with no published COA and no nameable lab does not clear it.

**Two different "verified" things — do not conflate them:**
- The **"✓ Verified" pill** on the coupon page is **link-liveness only** — it means `check:vendors`
  reached the affiliate link (see step 9). It says nothing about testing.
- The **testing claim** ("Tested by {lab}") comes from `facts.labName` and renders on
  `/vendor-testing-index` and in the coupon-page prose. That is what this step establishes.

**What you read, and where.** Open the vendor's public COA library / verify pages (forge `/coas/` +
`/verify-a-coa/`; capstone's AccuVerify library; particle's COA Vault; valkyrie's per-lot certs).
The standard is confirming a certificate **on the issuing lab's own domain/portal** — by report
number, search, or QR — *not* on the vendor's own site (Accumark `accumarklabs.com/accuverify`,
Kovera `koveralabs.com/verify`, Liquilabs `base.liquilabs.cz`). Reading the actual certificate PDF
(molecular weight / formula / CAS / identity line, the purity spec, the panel contents) is the gold
standard. Forge was explicitly a library/verify-page-level read and its comment says so — record the
depth of the read honestly.

**Populate `facts` on the `vendors.ts` entry (interface `VendorFacts`).** The fields carry a strict
evidence distinction:

| field | put here | renders as |
|---|---|---|
| `labName` | a **specific proper-noun lab confirmed from the vendor's own COA** (ideally cross-checked on that lab's portal) | **"Tested by {labName}"** — a stated fact |
| `labClaim` | the vendor's **own unverified** testing description, when no lab is confirmable from a COA | **`Vendor states: "…"`** — attributed, muted |
| `labAccreditation` | an accreditation (e.g. `ISO/IEC 17025`) **printed on the vendor's own testing COA** | escalated wording; the ONLY field that yields an "accredited-lab" phrase |
| `coa` | `per-batch` / `per-product` / `library` / `on-request` / `login-gated` | how COAs are exposed |
| `testMethods`, `contaminants`, `purityStandard` | only what the certs actually show | testing-index columns |

The precedence is enforced in `deriveRow()` (`src/app/vendor-testing-index/page.tsx`):
`labName` → "Tested by X"; else `labClaim` / bare `labAccreditation` → muted `Vendor states: "…"`;
else `Pending`. **A named, COA-verified lab is the only thing that reads as fact; everything else
renders as the vendor's own assertion.**

### 🔴 The accreditation rule (ISO 17025) — the distinction that goes wrong

`labAccreditation` is a **higher, separate bar** than naming a lab. Set it **only when the
accreditation is printed on the vendor's own testing COA.**

- Named COA-verified lab, no accreditation printed → `labName` set, **`labAccreditation` stays
  empty. Never claim ISO.** This is the common case.
- **Manufacturing-facility certs never count.** ISO 9001 / ISO 13485 / WHO-GMP belong to the
  *manufacturer*, not a *testing lab* — excluded for particle (cites 13485). Do not launder them
  into a testing accreditation.

**Worked examples:**
- **capstone (the counter-example):** Accumark Labs COAs verified first-hand via AccuVerify codes on
  the lab's domain → `labName: "Accumark Labs"`. Accumark prints **no** accreditation → **`labAccreditation`
  empty; no ISO ever claimed for Capstone.** The page prose and FAQ say so explicitly.
- **valkyrie / particle / forge:** same shape — named/verified lab, accreditation **absent** because
  none is printed (valkyrie: Horizon; particle: Liquilabs, HPLC-UV — *don't* claim MS; forge: three
  labs, fentanyl screen, purity ≥99% is an aggregated result **not** a published minimum → **not**
  carried as `purityStandard`).
- **Contrast — accreditation legitimately set:** amino-x, glacier-aminos, vital-core (Vanguard,
  ISO 17025:2017) carry `labAccreditation` because it *is* printed on their certs. aero's ISO claim
  was **dropped** because it rested on an unnamed, unverified lab.

**What disqualifies or weakens the claim:** only a "Third Party Tested" badge naming no lab →
`coa: "on-request"`, no `labName`. Phantom lab/purity/method figures that appear nowhere on the
vendor's site → removed, not carried. Vendor claims broader panels (heavy metals, sterility,
"multiple labs") than the certs show → the extra panels go in **attributed prose only**, never in
`facts.contaminants`, and the overclaim is corrected. A weak testing record and a live "✓ Verified"
pill can coexist — the pill is not a testing badge.

## 2. Decide reveal-gating

Look at the vendor's **public, non-affiliate** offer. **Gate when the public offer meets or beats
PP's affiliate rate** — e.g. midwest-peptide's public `SITEWIDE30` (30%) dwarfs PP's `PROFPEPTIDE`
(10%), so a crawlable code would just route the buyer to the better public deal. Currently gated:
`peptidology`, `midwest-peptide`, `real-peptides` (`src/data/reveal-gate-vendors.ts`).

To gate: add the slug to the `REVEAL_GATE_VENDORS` set. That flips every **shared** generator
automatically (title/description drop the code, JSON-LD Offer drops "Use code…", OG alt + card drop
it, `CouponCodeCard` renders `<RevealCodeBox>` instead of the code box, salience sentence 1 switches
to the code-free variant). **Plus a manual edit:** the page's FAQ answers and catalog caption must be
rewritten so they never name the code. The code stays 100% correct in `vendors.ts` — gating is a
display change only. (A `?ref=PROFPEPTIDE`-style token in the affiliate `url` is fine; it appears
only in hrefs, never as displayed text.)

## 3. Add the registry entry (`src/data/vendors.ts`)

`vendors.ts` is the single source for `code`, `discount` (rate), and `url` (affiliate token). Model
it on capstone (the fullest coupon-only entry). Fields:

```ts
"new-vendor": {
  name: "New Vendor",
  code: "PROFPEPTIDE",                 // the human-typed checkout code; single source
  discount: "10% off",                 // rate is PARSED from this ("10% off" → 10); never type a competing %
  region: "US",                        // US | EU | …
  url: "https://newvendor.com/ref/34/",// affiliate URL — token EXACTLY as the vendor issued it (see below)
  detailPage: "/coupons/new-vendor",
  editorsPick: true,                   // OPTIONAL card-placement flag (capstone has it)
  blockNote: "Lab · one-line card caption",  // OPTIONAL short card caption
  facts: { /* from step 1 */ },
},
```

- **There is no `category` field on a vendor** — categorization is per-compound, from
  `src/data/peptideCategories.ts`. Don't invent one.
- **`code` vs `url` are independent attribution channels.** `code` is what the shopper types; the
  `url` carries the vendor's affiliate token, which may be a query ref (`?ref=…`), a path ref
  (`/ref/34/`), or another param entirely (`?sld=…`, `?coupon=…`, `?a_aid=…`). **The token is often
  NOT the coupon code** (aero's `?ref=PROF15` stayed fixed while its `code` changed). Paste the `url`
  byte-for-byte from the affiliate dashboard — the `/go/` route passes it through unmodified and
  `check:go-redirects` fails if that passthrough is ever broken.
- Add a short comment block above the entry recording *how* you confirmed the testing (capstone's
  and forge's are the model).

## 4. Create the coupon page directory — copy capstone

`src/app/coupons/<slug>/` needs **four** files. Copy them from
`src/app/coupons/capstone-peptides/` and swap the slug:

- **`page.tsx`** (`"use client"`) — the visible body. Structure: back-link → `<CouponBreadcrumb>` →
  `<h1>` (with the literal code, see step 5) → `<CouponCodeCard slug="…" className="mb-8" />` → a
  `space-y-8` wrapper with intro prose + a compound `<dl>` (use the local `Cat`/`P` helpers from
  capstone — **not** the inlined particle style) + a testing paragraph → an FAQ block. Per-vendor
  prose is bespoke; testing prose must follow step 1's evidence rules and step 8's guards.
- **`layout.tsx`** — identical shape across all vendors: `export const metadata = buildCouponMetadata({ slug })`
  and render `<JsonLd data={couponOffer(slug)} />` + children (both from `@/lib/coupon-page`).
- **`opengraph-image.tsx`** and **`twitter-image.tsx`** — see step 5.

## 5. Apply the salience treatment + the OG routes (both must ship, not be swept later)

**The five salience changes — every live coupon page carries all five; the control group is
dissolved, there are no exceptions:**

1. **Code in the H1** — literal, hand-typed:
   `<h1>New Vendor Discount Code: PROFPEPTIDE — Save {discountPct}%</h1>`, with
   `const discountPct = vendorDiscountPct("<slug>")` (`@/data/prices`). The literal code **must be
   byte-equal to `vendors[slug].code`** (`check:codes` Tier 1).
2. **The salience pair first** — the two verified-code sentences rendered by `CouponCodeCard`, which
   sits immediately under the H1. Enabled by adding the slug to
   **`src/data/coupon-sentence-vendors.ts`** (`COUPON_SENTENCE_VENDORS`) — a blanket list now; its
   header says "add every new coupon page here as it ships." **Do this or the page has no salience pair.**
3. **No `CouponFacts`** — do not import or render `src/components/CouponFacts.tsx` (the old H1
   subtitle). Nothing sits between the H1 and the salience pair. It is imported by zero pages; keep it
   that way.
4. **FAQ "coupon code" phrasing** — include the standing FAQ question
   `q="Does New Vendor have a coupon code?"`. The term "coupon code" must appear (pages otherwise only
   say "discount").
5. **Domain in the first paragraph** — bare domain in parentheses right after the vendor name in
   sentence 1: `New Vendor (newvendor.com) is a …`.

**The OG route** — both `opengraph-image.tsx` and `twitter-image.tsx`, each a thin wrapper:

```tsx
import { generateCouponOg, altFor } from "@/lib/coupon-og";
export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = altFor("new-vendor");
export default function Image() { return generateCouponOg("new-vendor"); }
```

Both files must exist and call `generateCouponOg(slug)`. Missing either → the page silently inherits
the generic `og-image.png` (the crush/treasure-coast/modern-aminos bug). `check:og-routes` fails the
build if an active coupon dir lacks either file.

## 6. Decode convention + category order

- **Decode convention on coupon prose is the bare parenthetical `Name (CODE)`** — never "listed as".
  Forge: `Retatrutide (GLP-RT)`, and the catalog `<dl>` renders `<P slug="retatrutide">Retatrutide</P> (GLP-RT)`.
  ("listed as" is the deliberate convention on the *price tables*, a different surface — don't use it
  on a coupon page.) A decode is asserted only from evidence (judgment call #2); unconfirmed stays coded.
- **Canonical category order** comes from `src/data/peptideCategories.ts` (`categoryOrder`): Metabolic
  & Weight Loss → Recovery & Tissue Repair → Performance & Energy → Growth Hormone → Cognitive &
  Nootropic → Skin Health & Anti-Aging → Gut Health & Immunity → Sleep & Recovery → Longevity →
  Bioregulators → Sexual Health. Group the coupon page's compound catalog in this order. Every
  compound you list must resolve to a canonical category (it must exist in `peptideCategories` or a
  price override), or it falls back to Bioregulators.

## 7. Wire attribution through `/go/`

Every outbound vendor link on a **Phase-A surface** (`/coupons` hub, `/prices/*`, `/peptides/*`,
`/best-peptide-vendors`, `/peptide-sciences-alternatives`) must route through
`/go/${slug}?from=…`, never the raw affiliate host. On a coupon page you get this for free by
rendering `<CouponCodeCard slug="…" />` — the card builds `/go/${slug}?from=coupon-card` (or the
reveal-modal href when gated), with `rel="sponsored nofollow noopener"`. **Do not hand-write the
affiliate URL in the page.** `check:go-routing` (post-build) fails if any Phase-A page emits an href
pointing at a vendor host; per-vendor `/coupons/{slug}` product deep-links are Phase-B and exempt.

## 8. Satisfy the prose ↔ registry guards

- **`check:codes`** — any `PROF…` code literal on the page (H1, prose, FAQ) must equal
  `vendors[slug].code`. Prefer deriving via the card / `<VendorCode slug="…">`; a literal must match
  exactly. No stray `PROF…` literals.
- **The rate is derived, never typed** — `vendorDiscountPct(slug)` and the card both parse
  `vendors[slug].discount`, so H1 + prose + card can't diverge. Don't write a competing number.
- **`check:coupon-prose`** (fails the build):
  - **Never** describe a vendor as withholding docs — no "does not publish a COA", "request it
    directly", "unverified", "not stated", "we could not…". Rule: verified → state it and name the
    lab; not verified → say nothing about testing; never claim withholding.
  - Any **star rating** (`4.7/5`) or **customer/order/researcher total** (`10,000 researchers`)
    stated on the page must carry an in-sentence attribution marker ("the vendor reports…",
    "self-reported", "according to…").

## 9. Activate the verified pill

Cross-reference: **step 7 of `scripts/price-pull/add-vendor.md`.** A newly-added active vendor is
absent from `VENDORS_VERIFIED_SLUGS` until a clean `npm run check:vendors` run adds it, so it ships
with no "✓ Verified" pill. Run `check:vendors`, confirm the slug lands in the set, and commit the
regenerated `src/data/vendors-verified.generated.ts` in the same PR. A `MISSING VERIFIED PILL`
warning in the build log is the actionable signal — not background noise (this is the gap that left
forge pill-less).

## 10. Verify

```
npx tsc --noEmit
npm run build      # runs the full guard chain
```
Confirm the vendor count ticked up by one everywhere it renders (all derived from
`activeVendorCount`), and eyeball the built `/coupons/<slug>` page and its OG image.

---

## Guardrails that catch mistakes on this path

- `check:og-routes` — an active coupon dir MUST have both `opengraph-image.tsx` + `twitter-image.tsx`
  (the crush/treasure-coast/modern-aminos bug).
- `check:og-metadata` — the page's `og:url` self-references and `og:title`/`og:description` aren't the
  inherited site default.
- `check:codes` — every on-page code literal equals the registry code; no stray `PROF…` literals.
- `check:coupon-prose` — no withholding language; ratings/totals carry attribution.
- `check:go-routing` / `check:go-redirects` — outbound links route through `/go/`; the affiliate token
  is passed byte-exact.
- `check:verified-membership` / `check:surfaces` — WARN if the new slug is missing from the verified
  set (step 9 not done).
- `check:freshness` — WARN if the stamp goes stale.

## What this runbook cannot make mechanical

The testing read (step 1), the decode confirmation (step 6), and the reveal-gate decision (step 2)
are judgment calls, not steps a script can run. Everything else is copy-capstone-and-swap-the-slug;
these three are where a coupon-only onboarding actually goes wrong. Decide them deliberately, record
*how* you confirmed each in the `vendors.ts` comment block, and never upgrade a claim (named lab,
accreditation, a confirmed decode) past what you actually saw in a document.
