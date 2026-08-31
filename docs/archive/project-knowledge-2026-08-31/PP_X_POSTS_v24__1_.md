# PP X Posts — v3.3 Format Spec (CORRECTED) — v24

**Status:** ACTIVE REFERENCE — locked format correction
**Version:** v24 (May 31, 2026) — adds the category-framed "other popular [group] peptides, including [X]" convention + category-substitution rules (from the Ignite + Limitless rounds). Supersedes v23's post templates + "also has" guidance.
**Supersedes:** the "v3.3 Format" section of PP_X_POSTS v22/v23. All other v22 sections (vendor cache, cycle tracker, login-lockout rules, cross-references) carry forward UNCHANGED.

---

## ⚠️ READ FIRST — Compaction guard

If this session was compacted, **re-read this spec from the ref doc before drafting ANY X post.** Do NOT draft from a compaction summary — the summary garbles the format. (This was the root cause of the May 30 drift: posts were rebuilt from a lossy summary instead of this doc.)

Also: before drafting, pull the vendor's **live** `/coupons/[vendor]` page (or `vendors.ts`) for the real code + discount, AND the vendor's live products/category pages for actual in-stock peptides. Never assume a default.

---

## 🔒 The 4 canonical posts (one per vendor day)

Every vendor day = **4 posts, one per account.** Each post covers ONE peptide group/category. The standard 4 post **types** are fixed; which **account** leads which type **ROTATES** each vendor day (see Rotation). When a vendor doesn't carry a standard category, substitute the next category (see Category substitution).

Shared structure for all four (the locked anatomy):

```
[Vendor] has [ANCHOR peptide(s)] in stock!

Use code [CODE] for [DISCOUNT]. 🔥

[Vendor] has other popular [category] peptides, including [EXAMPLE(S)].

[Differentiator]

https://profpeptide.com/coupons/[vendor-slug]
```

Shared rules: opener ends `!` · 🔥 ONLY on the code line · peptides spelled out · ≤275 chars · link = `/coupons/[vendor-slug]` (per-vendor OG card, NOT the `/coupons` hub).

### The category line (LOCKED — NEW v24)

The third paragraph names the **peptide group/category** and gives **at least one in-stock example** from that group — multiple if the vendor stocks multiple popular ones from the same group. Exact phrasing:

> **"[Vendor] has other popular [category] peptides, including [X]."**
> or, for multiple: **"...including [X] and [Y]."**

- The category named must match the post's anchor group (a GH post names "growth hormone peptides," a recovery post names "recovery and tissue peptides," etc.).
- Every example named must be **confirmed in stock** (not just in the catalog) — same bar as the anchor.
- This replaces the older bare "[Vendor] also has X, Y, and Z." phrasing. Lead with the category, then the example(s).

### Standard post types + anchors

| Post type | Anchor (lead peptide[s]) | Category line names | Default in-stock examples to draw from |
|---|---|---|---|
| **GLP** | Retatrutide (solo) OR all 3 GLPs | GLP peptides | Semaglutide, Tirzepatide, Retatrutide |
| **GH** | CJC-1295 + Ipamorelin | growth hormone peptides | Sermorelin, Tesamorelin, MK-677 |
| **Recovery** | BPC-157 + TB-500 | recovery and tissue peptides | GHK-Cu, KPV, Epitalon |
| **Metabolic** | (next most popular in stock) | metabolic peptides | 5-Amino-1MQ, MOTS-C, AOD-9604 |
| **Skin / Anti-aging** | GHK-Cu | skin and anti-aging research peptides | GHK-Cu copper peptide serum, KPV, Anti-Wrinkle serums |

**Anchors are fixed for the standard types** (GLP / GH / Recovery). Only change an anchor if the vendor genuinely doesn't carry it.

### Example (Limitless Biotech, May 31 — the template)

```
Limitless Biotech has CJC-1295 and Ipamorelin in stock!

Use code PROFPEPTIDE for 10% off. 🔥

Limitless has other popular growth hormone peptides, including Sermorelin.

Third-party lab-tested, COA on every product. US-based out of Florida.

https://profpeptide.com/coupons/limitless-biotech
```

---

## 🔀 Category substitution (LOCKED — NEW v24)

The standard 4 types assume the vendor carries GLPs + GH + Recovery. Many don't. When a standard category is unavailable, **substitute the next most relevant peptide group** so you still ship 4 truthful posts.

**Substitution order (when a standard category is missing):**
1. **GLP** (Retatrutide / all-3) — if no GLPs at all, drop this slot and pull from the substitution pool.
2. **GH** — CJC-1295 + Ipamorelin.
3. **Recovery** — BPC-157 + TB-500.
4. Substitution pool, in priority order: **Metabolic** (5-Amino-1MQ, MOTS-C, AOD-9604) → **Skin/Anti-aging** (GHK-Cu, copper peptide serums, KPV) → **Cognitive/Nootropic** → **Longevity** (Epitalon, NAD+) → **Healing/GI** (KPV, larazotide).

**Within each post, the anchor + examples ROTATE based on what's actually in stock.** Pick the most popular in-stock peptide(s) in that group as the anchor; name a different in-stock one as the category example. Don't reuse the same peptide as both anchor and example.

**Worked precedents:**
- **Ignite (May 31):** Retatrutide + CJC-1295 OOS → no Retatrutide-solo post, no all-3-GLP post, GH couldn't anchor CJC-1295. Ran 3 truthful posts (GLP pair Sema+Tirz / GH as Ipamorelin+Sermorelin / Recovery BPC-157+TB-500+GHK-Cu). PEAK sat out rather than pad with an OOS claim.
- **Limitless (May 31):** No GLPs in catalog at all → substituted the 4th category. Ran GH (CJC-1295+Ipamorelin) / Recovery (BPC-157) / Metabolic (5-Amino-1MQ→MOTS-C) / Skin & Anti-aging (GHK-Cu). TB-500 not claimed (only a BPC/TB-fragment blend was stocked, not standalone TB-500).

**Rule:** never pad to 4 by claiming an out-of-stock or non-carried peptide. Fewer truthful posts > a false "in stock!" claim. If a vendor only supports 3 truthful posts, run 3.

---

## 🔁 Account rotation (LOCKED)

The 4 accounts rotate which post type they lead each vendor day. **Never let an account lead the same post type two vendors in a row.** Over 4 vendors, each account cycles through all 4 types.

| Vendor-day position | PP | PREM | CORE | PEAK |
|---|---|---|---|---|
| **Ascension (May 30)** | Retatrutide | All-3 GLPs | GH | Recovery |
| **Ignite (May 31)** | GLP pair | — | Recovery | GH |
| **Limitless (May 31)** | Skin/Anti-aging | GH | Recovery | Metabolic |
| next (+1) | advance one row | | | |

When the standard types are substituted (category posts), keep advancing the rotation so no account repeats a group two vendors running, as far as the available categories allow.
Accounts: **PP** = @peptide_pros · **PREM** = @premierpeptides · **PEAK** = @peakpeptides · **CORE** = @corepeptides.

---

## 🔒 Content rules (restated, locked)

- Opener ends `!` (not `.`).
- 🔥 ONLY on the code line (P2). No other emoji anywhere.
- Peptides SPELLED OUT (Retatrutide not Reta, Semaglutide not Sema, etc.). Brand blend names (KLOW, GLOW, Wolverine) stay as-is.
- ≤275 chars (280 hard limit; keep a safety margin).
- **NO** prices · **NO** dosing · **NO** vial mentions (not even the word "vial") · **NO** marketing language ("amazing," "incredible") · **NO** urgency ("limited time," "act fast").
- **Differentiator = factual only:** third-party lab (named if known), HPLC, 99%+ purity, public COAs, US-based (city/state if known), years operating. No vial language.
- Link = `/coupons/[vendor-slug]` on its own line (renders the per-vendor OG card). **Never** the `/coupons` hub. **Never** the vendor's own URL. URL stays lowercase even when the code is uppercase (URLs are case-sensitive; the code-caps / URL-lowercase split is correct and consistent across all vendors).
- Code + discount: pull from live `vendors.ts` / the live vendor page before drafting. **Never** assume a default discount.

---

## ✅ Pre-flight check — run BEFORE delivering any vendor post (LOCKED)

Never hand Mark a vendor post (or link) until ALL of these are verified for that vendor. If any can't be verified, say so and stop — don't deliver an unverified link.

1. **Vendor is real + code/discount confirmed** — confirm the vendor exists at `/coupons/[slug]` and pull the exact code + discount from the live page / `vendors.ts`. Never assume. (Note: the hub `coupons/page.tsx` keeps its OWN hardcoded code array separate from `vendors.ts` and can drift — vendors.ts + the per-vendor OG card are the source of truth.)
2. **Per-vendor OG card (thumbnail) renders** — confirm the `/coupons/[slug]` link produces a real per-vendor card, NOT a fallback to the generic `og-image.png`. Verify via the card route `/coupons/[slug]/opengraph-image` (with a `?v=N` cache-buster) and/or opengraph.xyz. The card pulls `vendor.code` from vendors.ts, so it doubles as a live code-confirm. If the card can't be confirmed, flag it and do NOT deliver the link.
3. **Catalog/stock for every named peptide** — each anchor AND each category example must be confirmed **in stock** on the vendor's live products/category page. Catalog presence ≠ in stock. Swap or drop any peptide that's out of stock; never write "[X] in stock!" for an out-of-stock item.
4. **Rotation position** — confirm which account leads which post type/category for this vendor day (advance one row from the prior vendor; never repeat an account's prior group).
5. **X cache** — the per-vendor card may not show in X's compose preview even when it renders at the route (X caches per-URL). To force a fresh scrape, re-paste the link, or append a throwaway query string (`?x=1`, unique per post). The card attaches server-side on the published tweet regardless. Confirm via opengraph.xyz if certainty is needed pre-post.

---

## 🚫 Errors to NEVER repeat (captured May 30–31)

0. **NEVER guess, theorize, assume, or reconstruct from memory.** Before drafting or answering anything with a knowable correct value — post format, anchors, category lineups, vendor codes/discounts, catalog contents, whether a page or card exists, account assignments — go check the source: this ref doc, `vendors.ts`, the live page (web_fetch), or fresh web research. If the source can't be reached, SAY the value is unverified rather than filling it in. When unsure, stop and check — do not proceed on a hunch.
1. **GH post must anchor CJC-1295 + Ipamorelin** — never lead with Sermorelin/Tesamorelin (those belong in the category line).
2. **Recovery post anchors BPC-157 + TB-500** (both, when both in stock). Category line = recovery and tissue peptides (GHK-Cu / KPV / Epitalon) — **never** MOTS-C (that's metabolic). If only one of BPC-157/TB-500 is in stock, anchor the one that is and don't claim the other (Limitless: TB-500 standalone not stocked → anchored BPC-157 only).
3. **GLP/Retatrutide posts keep their category line** — don't collapse to 4 paragraphs.
4. **Rotate accounts every vendor day** — never freeze one account on the same group repeatedly.
5. **Link to `/coupons/[vendor]`**, not the `/coupons` hub — the hub has no per-vendor card, so X shows a bare-link thumbnail.
6. **No "vial" language at all** — not just vial sizes.
7. **After a compaction, re-read this spec** — never draft from the summary.
8. **Verify the per-vendor OG card (thumbnail) renders before delivering any link** — confirm the `/coupons/[slug]` link shows a real per-vendor card, not the generic `og-image.png` fallback. A correct URL with a broken/missing card still posts as a bare thumbnail. Check every vendor, every time.
9. **Confirm every named peptide is in stock** (anchor AND category examples) on the vendor's live products page before writing "[X] in stock!" — out-of-stock items must be swapped or dropped.
10. **Use the category-framed line** ("[Vendor] has other popular [group] peptides, including [X]") — not the bare "also has X, Y, Z." Name the group + at least one in-stock example.

---

## 📅 Changelog

**May 31, 2026 (v23 → v24):**
- **Reframed the third paragraph** to the category-framed line: "[Vendor] has other popular [category] peptides, including [X]" — names the peptide group + at least one in-stock example (multiple if the vendor stocks multiple popular ones from that group). Replaces the bare "also has X, Y, Z." Locked as error #10.
- **Added Category substitution** section + Metabolic and Skin/Anti-aging as standard post types — when a vendor lacks GLPs/standard anchors, substitute the next peptide group (priority order documented) and rotate anchor + examples by what's in stock. Codified from the Ignite (Reta/CJC OOS) and Limitless (no GLPs) rounds.
- Logged Ignite + Limitless rotation rows; added "never pad to 4 with an OOS/non-carried claim — fewer truthful posts wins."
- Added URL-lowercase / code-uppercase note (Ignite WELCOME10) and the X per-URL cache + `?x=N` forcer (pre-flight #5).
- Noted the hub `coupons/page.tsx` hardcoded-code-array drift risk (Ignite PROFPEPTIDE→welcome10 fix) in pre-flight #1.
- All other v22 sections (vendor cache, cycle tracker, login-lockout rules, cross-references) unchanged.

**May 30, 2026 (v22 → v23):** corrected v3.3 format drift after compaction; locked 4 templates + anchors; locked account rotation; added errors list + compaction guard + #0 no-guessing rule + pre-flight check. (See v23 history.)

---

*v24 locks the category-framed line + category substitution. Drop-in replacement for the v3.3 Format section of v22/v23.*
