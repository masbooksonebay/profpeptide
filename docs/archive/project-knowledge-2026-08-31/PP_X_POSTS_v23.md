# PP X Posts — v3.3 Format Spec (CORRECTED) — v23

**Status:** ACTIVE REFERENCE — locked format correction
**Version:** v23 (May 30, 2026) — corrects v3.3 format drift; locks the 4 canonical post templates, account rotation, content rules, and an errors-to-never-repeat list
**Supersedes:** the "v3.3 Format" section of PP_X_POSTS v22. All other v22 sections (vendor cache, cycle tracker, login-lockout rules, cross-references) carry forward UNCHANGED.

---

## ⚠️ READ FIRST — Compaction guard

If this session was compacted, **re-read this spec from the ref doc before drafting ANY X post.** Do NOT draft from a compaction summary — the summary garbles the format. (This was the root cause of the May 30 drift: posts were rebuilt from a lossy summary instead of this doc.)

Also: before drafting, pull the vendor's **live** `/coupons/[vendor]` page (or `vendors.ts`) for the real code + discount. Never assume a default.

---

## 🔒 The 4 canonical posts (one per vendor day)

Every vendor day = **4 posts, one per account.** The 4 post **types are fixed**; which **account** leads which type **ROTATES** each vendor day (see Rotation).

Shared rules for all four: opener ends `!` · 🔥 ONLY on the code line · peptides spelled out · ≤275 chars · link = `/coupons/[vendor-slug]` (per-vendor OG card, NOT the `/coupons` hub).

### Post 1 — Retatrutide
```
[Vendor] has Retatrutide in stock!

Use code [CODE] for [DISCOUNT]. 🔥

[Vendor] also has Semaglutide and Tirzepatide.

[Differentiator]

https://profpeptide.com/coupons/[vendor-slug]
```

### Post 2 — All 3 GLPs
```
[Vendor] has all 3 GLPs — Semaglutide, Tirzepatide, and Retatrutide — in stock!

Use code [CODE] for [DISCOUNT]. 🔥

[Differentiator]

https://profpeptide.com/coupons/[vendor-slug]
```

### Post 3 — GH peptides  (anchor = CJC-1295 + Ipamorelin)
```
[Vendor] has CJC-1295 and Ipamorelin in stock!

Use code [CODE] for [DISCOUNT]. 🔥

[Vendor] also has Sermorelin, Tesamorelin, and MK-677.

[Differentiator]

https://profpeptide.com/coupons/[vendor-slug]
```

### Post 4 — Recovery / anti-aging  (anchor = BPC-157 + TB-500)
```
[Vendor] has BPC-157 and TB-500 in stock!

Use code [CODE] for [DISCOUNT]. 🔥

[Vendor] also has GHK-Cu, KPV, and Epitalon.

[Differentiator]

https://profpeptide.com/coupons/[vendor-slug]
```

**Anchors are fixed** — Retatrutide / all-3 GLPs / **CJC-1295 + Ipamorelin** / **BPC-157 + TB-500**. Only change an anchor if the vendor genuinely doesn't carry it.

**"Also has" peptides** are the default lineup; substitute the next-most-popular peptide the vendor actually carries if it lacks one. Swap any default that a vendor doesn't stock.

---

## 🔁 Account rotation (LOCKED)

The 4 accounts rotate which post type they lead each vendor day. **Never let an account lead the same post type two vendors in a row.** Over 4 vendors, each account cycles through all 4 types.

| Vendor-day position | PP | PREM | CORE | PEAK |
|---|---|---|---|---|
| **Ascension (May 30)** | Retatrutide | All-3 GLPs | GH | Recovery |
| next (+1) | All-3 GLPs | GH | Recovery | Retatrutide |
| next (+2) | GH | Recovery | Retatrutide | All-3 GLPs |
| next (+3) | Recovery | Retatrutide | All-3 GLPs | GH |
| (then repeats from top) | | | | |

Track the current position in the Cycle tracker and advance one row per vendor day.
Accounts: **PP** = @peptide_pros · **PREM** = @premierpeptides · **PEAK** = @peakpeptides · **CORE** = @corepeptides.

---

## 🔒 Content rules (restated, locked)

- Opener ends `!` (not `.`).
- 🔥 ONLY on the code line (P2). No other emoji anywhere.
- Peptides SPELLED OUT (Retatrutide not Reta, Semaglutide not Sema, etc.). Brand blend names (KLOW, GLOW, Wolverine) stay as-is.
- ≤275 chars (280 hard limit; keep a safety margin).
- **NO** prices · **NO** dosing · **NO** vial mentions (not even the word "vial") · **NO** marketing language ("amazing," "incredible") · **NO** urgency ("limited time," "act fast").
- **Differentiator = factual only:** third-party lab (named if known), HPLC, 99%+ purity, public COAs, US-based, years operating. No vial language.
- Link = `/coupons/[vendor-slug]` on its own line (renders the per-vendor OG card). **Never** the `/coupons` hub. **Never** the vendor's own URL.
- Code + discount: pull from live `vendors.ts` / the live vendor page before drafting. **Never** assume a default discount.

---

## ✅ Pre-flight check — run BEFORE delivering any vendor post (LOCKED)

Never hand Mark a vendor post (or link) until ALL of these are verified for that vendor. If any can't be verified, say so and stop — don't deliver an unverified link.

1. **Vendor is real + code/discount confirmed** — confirm the vendor exists at `/coupons/[slug]` and pull the exact code + discount from the live page / `vendors.ts`. Never assume.
2. **Per-vendor OG card (thumbnail) renders** — confirm the `/coupons/[slug]` link produces a real per-vendor card, NOT a fallback to the generic `og-image.png` (bare thumbnail). Verify by reading the page's `og:image` tag (web_fetch) and/or confirming the vendor has complete OG-card data in `vendors.ts`. If the card can't be confirmed, flag it and do NOT deliver the link until it's fixed. *(This is the Ascension/Ignite bare-thumbnail failure — it must be checked every time.)*
3. **Catalog/stock for every named peptide** — each anchor and "also has" peptide must be confirmed **in stock** on the vendor's live products page. Catalog presence ≠ in stock. Swap or drop any peptide that's out of stock; never write "[X] in stock!" for an out-of-stock item.
4. **Rotation position** — confirm which account leads which post type for this vendor day (advance one row from the prior vendor; never repeat an account's prior type).

---

## 🚫 Errors to NEVER repeat (captured May 30)

0. **NEVER guess, theorize, assume, or reconstruct from memory.** Before drafting or answering anything with a knowable correct value — post format, anchors, "also has" lineups, vendor codes/discounts, catalog contents, whether a page or card exists, account assignments — go check the source: this ref doc, `vendors.ts`, the live page (web_fetch), or fresh web research. If the source can't be reached, SAY the value is unverified rather than filling it in. A confident-sounding guess that turns out wrong costs far more time than the 30 seconds it takes to verify. When unsure, stop and check — do not proceed on a hunch.
1. **GH post must anchor CJC-1295 + Ipamorelin** — never lead with Sermorelin/Tesamorelin (those belong in "also has").
2. **Recovery post anchors BPC-157 + TB-500** (both). "Also has" = GHK-Cu / KPV / Epitalon (recovery + anti-aging) — **never** MOTS-C (that's metabolic) or the Wolverine stack (redundant with the anchor).
3. **Retatrutide post keeps its "also has Semaglutide, Tirzepatide" line** — don't drop it to 4 paragraphs.
4. **Rotate accounts every vendor day** — never freeze one account (e.g., PP) on the same post type repeatedly.
5. **Link to `/coupons/[vendor]`**, not the `/coupons` hub — the hub has no per-vendor card, so X shows a bare-link thumbnail.
6. **No "vial" language at all** — not just vial sizes.
7. **After a compaction, re-read this spec** — never draft from the summary.
8. **Verify the per-vendor OG card (thumbnail) renders before delivering any link** — confirm the `/coupons/[slug]` link shows a real per-vendor card, not the generic `og-image.png` fallback. A correct URL with a broken/missing card still posts as a bare thumbnail. Check every vendor, every time.
9. **Confirm every named peptide is in stock** (not just in the catalog) on the vendor's live products page before writing "[X] in stock!" — out-of-stock anchors must be swapped or dropped.

---

## 📅 Changelog

**May 30, 2026 (v22 → v23):**
- Corrected v3.3 format drift introduced after a mid-session compaction.
- Locked the 4 canonical post templates with explicit anchors + "also has" default sets.
- Locked account **rotation** (replaces the v21 "fixed assignments" line — that freeze caused PP to repeat BPC-157 on every vendor day).
- Added "Errors to never repeat" + a compaction guard + a verify-code-before-drafting reminder.
- Added the **#0 no-guessing / verify-first rule** at the top of the errors list — check the ref doc, vendors.ts, the live page, or fresh research before drafting; never proceed on a hunch.
- Added a **Pre-flight check** section (run before delivering any vendor post): vendor/code confirmed, **per-vendor OG card/thumbnail renders** (no generic-image fallback), every named peptide **in stock** (not just in catalog), rotation position confirmed. Mirrored as errors #8 (thumbnail) and #9 (stock).
- All other v22 sections (vendor cache, cycle tracker, login-lockout rules, cross-references) unchanged.

---

*v23 locks the corrected v3.3 format + account rotation. Drop-in replacement for the v3.3 Format section of v22.*
