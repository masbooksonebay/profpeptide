# PP X Posts — v3.3 Format Spec (CORRECTED) — v28

**Status:** ACTIVE REFERENCE — locked format spec (the source of truth for HOW to draft a vendor post)
**Version:** v28 (June 6, 2026) — adds the **Mandatory vendor research** READ FIRST block (full catalog + all third-party-testing pages must be fetched autonomously before drafting) + **error #12**. All v24 format sections below carry forward verbatim.
**Supersedes:** the format-spec content of v24 (this is now the canonical format spec; cross-references to "the v24 spec" point here). The **v27 active tracker** (vendor-day log, rotation state, account rebrand, errors #11) carries forward UNCHANGED — this update does not touch it.

---

## ⚠️ READ FIRST — Mandatory vendor research before drafting ANY post (LOCKED — NEW v28)

Before drafting a single post for a vendor, Claude MUST autonomously fetch and review BOTH of the following — **without being asked, and without asking Mark to do it.** This is the first step of every vendor day, not a step to request permission for. Do NOT draft from the homepage / "featured" set alone, and do NOT draft from memory.

1. **THE FULL PRODUCT CATALOG** — fetch the vendor's complete products / all-products page (not the homepage featured subset) and confirm in-stock vs. out-of-stock / coming-soon for every item. Anchors and category examples come ONLY from the full **in-stock** catalog. The full catalog overrides the featured set — an item can show out-of-stock on the homepage but in stock on `/products`, or vice versa (Midwest, June 6: TB-500 read OOS on the homepage featured set but in stock on the full `/products` page).

2. **ALL THIRD-PARTY TESTING / QUALITY INFO** — fetch every page the vendor publishes on testing, purity, and COAs: typically **About, Testing, Quality, COA, and/or FAQ**. Fetch them yourself as a matter of course. The line-4 differentiator is built ONLY from verified testing/purity facts found on these pages — never from the homepage blurb alone and never from memory.

**Claude FETCHES all of this on its own by default.** The ONLY time Claude asks Mark to fetch a page is when Claude has already TRIED and the page genuinely cannot be retrieved (an age-gate that blocks the fetcher, a sign-in wall, or a JS-only page that returns an empty shell — e.g. a COA listing that renders only its `<title>`). In that case: state exactly which page failed and why, and ask Mark to paste it — never silently skip it, and never substitute memory. **Asking is the exception after a failed fetch, not the default.**

> Append a fresh unique query string (`?audit=N`) on each fetch to force a non-cached pull. Most vendor pages (homepage, `/products`, `/about`, `/faq`) render fine for the fetcher even behind a 21+ age-gate; only fully JS-rendered listings (some `/coa` pages) come back as empty shells — those are the case to ask Mark to paste.

---

## ⚠️ READ FIRST — Compaction guard

If this session was compacted, **re-read this spec from the ref doc before drafting ANY X post.** Do NOT draft from a compaction summary — the summary garbles the format. (This was the root cause of the May 30 drift: posts were rebuilt from a lossy summary instead of this doc.)

Also: before drafting, pull the vendor's **live** `/coupons/[vendor]` page (or `vendors.ts`) for the real code + discount, AND complete the **Mandatory vendor research** above (full catalog + all testing pages). Never assume a default.

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

### The category line (LOCKED — v24)

The third paragraph names the **peptide group/category** and gives **at least one in-stock example** from that group — multiple if the vendor stocks multiple popular ones from the same group. Exact phrasing:

> **"[Vendor] has other popular [category] peptides, including [X]."**
> or, for multiple: **"...including [X], [Y], and [Z]."**

- **List MULTIPLE examples whenever the vendor carries more than one other popular peptide in that group — not just one.** Observed pattern: the more popular peptides a post names, the more impressions it tends to get on X. So name every in-stock, popular same-group peptide the vendor has, not a single token example. (One example is the floor, used only when the group genuinely has just one other peptide in stock.)
- **Constraint — same group only:** additional examples must belong to the SAME peptide group as the anchor/category line. A GH post lists only other GH peptides; a recovery post lists only other recovery/tissue peptides. Never reach into another category to lengthen the list.
- **Every example must be confirmed in stock** (not just in the catalog) — same bar as the anchor. Never pad the list with an out-of-stock or non-carried peptide to make it longer. Truthful and shorter beats longer and false.
- Catalog depth caps the count: a vendor with only 2 peptides in a group yields 1 example; a vendor with 4 yields up to 3. Use what's genuinely there (e.g. BioCollex June 1 — Recovery post named GHK-Cu + KPV (2); GH/Cognitive/Longevity posts named 1 each because that's all those groups stocked).
- The category named must match the post's anchor group (GH post → "growth hormone peptides," recovery post → "recovery and tissue peptides," etc.).
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

## 🔀 Category substitution (LOCKED — v24)

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

The 4 accounts stay in a **fixed order**; what rotates each vendor day is **which post type each account leads.** Vendors and peptides rotate through the fixed account sequence. **Never let an account lead the same post type two vendors in a row.** Over 4 vendors, each account cycles through all 4 types.

| Vendor-day position | PP | PREM | CORE | PEAK |
|---|---|---|---|---|
| **Ascension (May 30)** | Retatrutide | All-3 GLPs | GH | Recovery |
| **Ignite (May 31)** | GLP pair | — | Recovery | GH |
| **Limitless (May 31)** | Skin/Anti-aging | GH | Recovery | Metabolic |
| next (+1) | advance one row | | | |

When the standard types are substituted (category posts), keep advancing the rotation so no account repeats a group two vendors running, as far as the available categories allow.
Accounts: **PP** = @peptide_pros · **PREM** = @premierpeptides · **PEAK** = @peakpeptides · **CORE** = @corepeptides.
*(Current rotation state + most recent vendor days live in the v27 active tracker — read it for the latest row to advance from. Account display-name rebrand, June 3: Peptide Codes / Deals / Coupons / Discounts; @handles unchanged.)*

---

## 🔒 Content rules (restated, locked)

- Opener ends `!` (not `.`).
- 🔥 ONLY on the code line (P2). No other emoji anywhere.
- Peptides SPELLED OUT (Retatrutide not Reta, Semaglutide not Sema, etc.). Brand blend names (KLOW, GLOW, Wolverine) stay as-is.
- ≤275 chars (280 hard limit; keep a safety margin). *(Going over the visible-fold cutoff is acceptable when a promo requires it — overflow sits below the fold; the discount hook + code line must land in the always-visible portion.)*
- **NO** prices · **NO** dosing · **NO** vial mentions (not even the word "vial") · **NO** marketing language ("amazing," "incredible") · **NO** urgency ("limited time," "act fast").
- **Differentiator (line 4) = testing/purity facts ONLY:** third-party lab (named if known), HPLC, 99%+ purity (or the vendor's actual stated range — don't claim a flat 99%+ if the vendor states 98–99%+), public COAs, US-based (city/state if known). Keep it focused on testing/purity/COA — do NOT pad line 4 with shipping speed, repeat-customer rate, payment discounts, or other non-testing marketing. No vial language.
- Link = `/coupons/[vendor-slug]` on its own line (renders the per-vendor OG card). **Never** the `/coupons` hub. **Never** the vendor's own URL. URL stays lowercase even when the code is uppercase (URLs are case-sensitive; the code-caps / URL-lowercase split is correct and consistent across all vendors).
- Code + discount: pull from live `vendors.ts` / the live vendor page before drafting. **Never** assume a default discount.
- **De-domain vendor names that are live domains** (error #11): if the brand name is a registrable domain (`.gg`, `.io`, `.co`, `.com`), render it WITHOUT the dot-TLD in body text ("Peptides.gg" → "Peptides GG") so X doesn't hijack the OG card with the vendor's own site. The `/coupons/[slug]` link path (hyphenated) is safe.

---

## ✅ Pre-flight check — run BEFORE delivering any vendor post (LOCKED)

Never hand Mark a vendor post (or link) until ALL of these are verified for that vendor. If any can't be verified, say so and stop — don't deliver an unverified link.

0. **Mandatory vendor research done** (NEW v28) — the full in-stock catalog AND all third-party-testing pages (About/Testing/Quality/COA/FAQ) have been fetched and reviewed. If any required page couldn't be fetched, Mark was asked to paste it — not skipped, not filled from memory.
1. **Vendor is real + code/discount confirmed** — confirm the vendor exists at `/coupons/[slug]` and pull the exact code + discount from the live page / `vendors.ts`. Never assume. (Note: the hub `coupons/page.tsx` keeps its OWN hardcoded code array separate from `vendors.ts` and can drift — vendors.ts + the per-vendor OG card are the source of truth.)
2. **Per-vendor OG card (thumbnail) renders** — confirm the `/coupons/[slug]` link produces a real per-vendor card, NOT a fallback to the generic `og-image.png`. Verify via the card route `/coupons/[slug]/opengraph-image` (with a `?v=N` cache-buster) and/or opengraph.xyz. The card pulls `vendor.code` from vendors.ts, so it doubles as a live code-confirm. If the card can't be confirmed, flag it and do NOT deliver the link.
3. **Catalog/stock for every named peptide** — each anchor AND each category example must be confirmed **in stock** on the vendor's live products/category page. Catalog presence ≠ in stock. Swap or drop any peptide that's out of stock; never write "[X] in stock!" for an out-of-stock item.
4. **Rotation position** — confirm which account leads which post type/category for this vendor day (advance one row from the prior vendor in the v27 active tracker; never repeat an account's prior group).
5. **X cache** — the per-vendor card may not show in X's compose preview even when it renders at the route (X caches per-URL). To force a fresh scrape, re-paste the link, or append a throwaway query string (`?x=1`, unique per post). The card attaches server-side on the published tweet regardless. Confirm via opengraph.xyz if certainty is needed pre-post.

---

## 🚫 Errors to NEVER repeat (captured May 30 – June 6)

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
10. **Use the category-framed line** ("[Vendor] has other popular [group] peptides, including [X]") — not the bare "also has X, Y, Z." Name the group + **every** in-stock popular same-group example, not just one (more popular peptides named → more X impressions). Only one example when the group has only one other in stock. Same group only; never pad with OOS/non-carried or cross-category peptides.
11. **De-domain vendor names that are live domains** — render "Peptides.gg" as "Peptides GG" in body text so X doesn't pull the vendor's own OG card. The `/coupons/[slug]` link path (hyphenated) is safe.
12. **Do the full vendor research yourself, up front — don't draft off the homepage and don't ask Mark to fetch what you can fetch.** (Captured June 6, Midwest.) Two failures in one: (a) drafted anchors/examples from the homepage *featured* set instead of the full `/products` catalog (missed in-stock peptides; mis-stated TB-500 stock), and (b) built line 4 from the homepage testing blurb and then *asked Mark to fetch* the COA/testing pages instead of fetching them. Fix: autonomously fetch the full catalog + all testing/COA/About/FAQ pages every vendor day (see the top READ FIRST block). Ask Mark to paste a page ONLY after a fetch genuinely fails (empty JS shell, sign-in wall) — never as the default, never silently skip.

---

## 📅 Changelog

**June 6, 2026 (v24 spec → v28):**
- **Added the top READ FIRST "Mandatory vendor research" block (LOCKED):** before drafting, Claude must autonomously fetch + review the FULL in-stock catalog AND all third-party-testing pages (About/Testing/Quality/COA/FAQ). Fetching is the default; asking Mark to paste is the exception, only after a fetch genuinely fails. Added as pre-flight #0 and **error #12**.
- Clarified **line 4 = testing/purity facts ONLY** (no shipping/repeat-rate/payment padding); allow the vendor's actual purity range rather than a forced flat "99%+."
- Noted the over-the-fold allowance for promo posts (overflow below the visible cutoff is fine; hook + code line stay visible).
- Folded the de-domain rule (error #11, from v27) into the content rules + errors list for completeness. Rotation section now points to the v27 active tracker for the current row + notes the fixed-account-order / rotating-type mechanic and the June 3 display-name rebrand.

**June 1, 2026 (v24 refinement):**
- **Multiple examples preferred.** The category line should name EVERY in-stock popular same-group peptide the vendor carries, not just one — observed: more popular peptides named → more X impressions. One example only when the group has just one other in stock. Same group only; no padding with OOS/non-carried or cross-category peptides. Error #10 updated.
- Logged the BioCollex round (June 1): nootropic-heavy catalog → GH / Recovery / Cognitive / Longevity substitution; Recovery post carried 2 examples (GHK-Cu + KPV), others 1 each (catalog depth-capped).

**May 31, 2026 (v23 → v24):**
- **Reframed the third paragraph** to the category-framed line: "[Vendor] has other popular [category] peptides, including [X]" — names the peptide group + at least one in-stock example (multiple if the vendor stocks multiple popular ones from that group). Replaces the bare "also has X, Y, Z." Locked as error #10.
- **Added Category substitution** section + Metabolic and Skin/Anti-aging as standard post types — when a vendor lacks GLPs/standard anchors, substitute the next peptide group (priority order documented) and rotate anchor + examples by what's in stock. Codified from the Ignite (Reta/CJC OOS) and Limitless (no GLPs) rounds.
- Logged Ignite + Limitless rotation rows; added "never pad to 4 with an OOS/non-carried claim — fewer truthful posts wins."
- Added URL-lowercase / code-uppercase note (Ignite WELCOME10) and the X per-URL cache + `?x=N` forcer (pre-flight #5).
- Noted the hub `coupons/page.tsx` hardcoded-code-array drift risk (Ignite PROFPEPTIDE→welcome10 fix) in pre-flight #1.
- All other v22 sections (vendor cache, cycle tracker, login-lockout rules, cross-references) unchanged.

**May 30, 2026 (v22 → v23):** corrected v3.3 format drift after compaction; locked 4 templates + anchors; locked account rotation; added errors list + compaction guard + #0 no-guessing rule + pre-flight check. (See v23 history.)

---

## 🔗 Cross-references
- **PP_X_POSTS v27** — active tracker (vendor-day log, current rotation state, account rebrand, de-domain rule #11). Read it for the latest rotation row to advance from.
- **PP_SEO** · **PP_MASTER (+ addenda)** · **WL_MASTER** · **SCS_MP**

---

*v28 hardens the front-end research step (full catalog + all testing pages, fetched autonomously) and is now the canonical format spec for HOW to draft. The v27 active tracker remains the source for current rotation state + vendor-day history.*
