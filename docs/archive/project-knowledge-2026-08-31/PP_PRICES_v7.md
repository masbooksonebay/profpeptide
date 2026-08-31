# PP_PRICES v7
**Supersedes v6. Updated 2026-08-19.**

---

## 1. THE WEEKEND CADENCE — how it actually runs

**Sunday is the pull day.** Aug 31 is a Sunday, which is also the Amino Club revert date.

**The rule Mark set (2026-08-17):** *a broken vendor gets skipped and retried next weekend.* Don't chase fixes on individual vendors — the roster is the asset, not any one entry.

---

## 2. GUARDS — what refuses a write

### The shrink floor — `ROW_DROP_FLOOR = 0.80`

Refuses to write a vendor whose row count falls more than **20%** against the current doc, unless `--allow-shrink` is passed. **Refuses that vendor and continues the run** — one broken vendor never blocks the others. The vendor keeps its existing rows: stale data beats wrong data.

🔴 **It was set to 0.65 briefly on 2026-08-17 and reverted the same day.** Normal churn tops out at ~19%, so 20% has adequate headroom; 35% would let a genuine 25% collapse through silently.

**Refusals print as a loud end-of-run block**, separate from the per-vendor stream. The inline `[FLOOR]` line alone was missed once.

**Proven on live regressions, twice in one weekend:**
- **purerawz** — 145 → 18 rows, −83%. Catalog genuinely broken: 42 of 53 products showing $0 with no variations.
- **purerx** — 47 → 8 products, all $0. Same failure.

### Other guards

- **Subscription** — drops WooCommerce `subscription`/`variable-subscription` types. Caught BioLongevity's Follistatin listed at the subscription rate.
- **Dedup collision counter** — counts silent single-compound collisions rather than dropping them invisibly.
- **`check:vendor-pins`** — fails the build if a pinned vendor lacks a price row for that compound. **Currently 21 pinned.**
- **`check:go-redirects`** — asserts `/go/` emits the affiliate URL byte-for-byte.

---

## 3. 🔴 THE BLEND_TOTAL FIX — 35 rows recovered

**Found 2026-08-17.** `blend_total`'s lone-total fallback read the total **only from the product name**. Amino Club moved its totals from the name into a `Size` variation attribute (`GLOW 70mg` → `GLOW` with `Size: "70MG"`), so its blends dropped as `[nototal]`.

**It was roster-wide.** Ten of twenty vendors carrying `[nototal]` blends were silently losing them:

| Vendor | Before → After |
|---|---|
| amino-club | 0 → 6 |
| science-based | 0 → 6 |
| synthesis | 0 → 6 |
| peptidology | 5 → 10 |
| royal-peptides | 1 → 5 |
| glacier-aminos | 7 → 9 |
| peptides-gg | 5 → 7 |
| amino-x | 0 → 2 |
| spartan, vital-core | +1 each |

**~29 rows recovered.** No gate crossings — every recovered row landed on an already-indexable blend. Wolverine 27→32 vendors, KLOW 23→27, GLOW 22→24.

🔴 **It surfaced only because Amino Club was PINNED on three affected blends and `check:vendor-pins` failed.** Without that pin it would still be running. **Pins have diagnostic value beyond placement.**

---

## 4. THE SKIP LEDGER — `scripts/price-pull/skip-ledger.json`

Machine-readable, read each weekend run and surfaced in the report. Records date and reason so a run says "skipped last week, still broken" rather than rediscovering it.

**Current entries:**

| Vendor | Reason | Recheck |
|---|---|---|
| purerawz | Catalog broken — 42/53 products $0, floor refused −83% | yes |
| behemoth-labz | Cloudflare bot-challenge (new 2026-08-16) | yes |
| la-peptides | Cloudflare WAF on `/wp-json`, storefront public | yes |
| swiss-chems | Incomplete pull, 429 rate-limit | yes |
| nova-labs | Store API in AED, unpriceable in USD | no |
| limitless-biotech | B2B login gate — permanent | no |
| aero-peptides | **manual-cinc** — Cloudflare; refreshes via CINC browser-read | no |
| ~~purerx-peptides~~ | **Permanent** — affiliate program discontinued, vendor removed 2026-08-19 | no |

---

## 5. AERO — the manual ingest path

Aero's Store API is Cloudflare-walled but the storefront renders in a browser.

**Re-runnable procedure:**
1. CINC reads `aeropeptides.com/products` in-browser — the whole catalog is on one page, no pagination
2. Output as JSON: `{name, size_mg, price_usd, in_stock}`
3. Overwrite `scripts/price-pull/fixtures/aero-peptides.cinc.json`
4. `python3 scripts/price-pull/load_cinc.py --vendor aero-peptides --write`

The loader runs the real `build.build_section`, so the decoder, `blend_total` and the shrink floor all apply.

⚠️ **Aero's GLP decoder keys on the compound word, not the GLP number** — Aero labels both Tirzepatide and Semaglutide as "GLP1."

---

## 6. VENDOR EXIT CHECKLIST — `docs/PP_VENDOR_EXIT_CHECKLIST.md`

Four vendors have exited with inconsistent process. The checklist now exists.

**Permanent** (nordic, apollo, purerx): delete the whole `coupons/<slug>/` dir · delete the vendors.ts entry · delete price rows · remove from `attribution.ts` LISTED · remove pipeline entries · next.config 308 redirect · skip-ledger `permanent`.

**Temporary** (fusion, synthesis): `retired: true` · `redirect()` in page.tsx · **delete opengraph-image.tsx and twitter-image.tsx** · keep price rows for re-onboard.

### 🔴 The guard was inverted and mandated an orphan

`check:og-routes.mjs` **required** every coupon dir to ship both image routes, with no retired allowlist. So a retired vendor whose dir was kept was **forced** to ship the exact files that leaked — `/coupons/fusion-peptide/opengraph-image` stayed live and crawlable for six weeks, and deleting it would have failed the build.

**Fixed 2026-08-19.** Active dirs must have both routes; retired dirs must have neither and must redirect. Verified by running the inverted guard against the untouched tree — it failed naming fusion and synthesis, then passed after cleanup.

---

## 7. CURRENT STATE

- **47 active vendors** (48 → 47 on the PureRx removal)
- **38 of 46 pulled cleanly** in the Aug 16–17 weekend run
- **Row count 2045 → 2071** (+26, driven by the blend recovery)
- **Capstone Peptides added** 2026-08-18 — 25 rows across 17 compounds and 3 blends, on 20 `/prices` pages. Above median on 15 of 17 compounds; only Semax beats median.
- **New grids:** `/prices/peg-mgf` (7 vendors), `/prices/na-selank` (6). Both cta-only, both now linked from their parent profile.
- **Stalest live data:** aero at ~24 days before its manual refresh

---

## 8. KNOWN ISSUES

- **BLEND_DISPLAY gap** — `/prices/cjc-1295-no-dac-ipamorelin` renders title-cased "Cjc 1295 No Dac Ipamorelin" for every vendor. Cosmetic, queued.
- 🔴 **Salience-sentence gating gap** — the sentence asserts "verified as of [month]" for any `COUPON_SENTENCE_VENDORS` slug **without** calling `isCodeVerified()`, while the visible pill does gate. Harmless today (all opted-in vendors verified). Bites the first `check:vendors` run that drops one. Note is in-code at the `isCodeVerified` gate.
- **EZ Peptides TB-500 row** links to `tb-500-frag-17-23-10mg` — the fragment, a different compound. Same silent-collision class as MGF and NA-Selank.
