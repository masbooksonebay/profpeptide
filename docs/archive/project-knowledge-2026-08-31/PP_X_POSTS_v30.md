# PP X Posts — v3.3 Format Spec (CORRECTED) — v30

**Status:** ACTIVE REFERENCE — locked format spec (the source of truth for HOW to draft a vendor post)
**Version:** v30 (June 7, 2026) — adds: **Post 4 = Skin Health & Anti-Aging + Longevity (combined).** The fourth post in the standard lineup now folds Longevity (Epitalon, NAD+, SS-31) into the Skin Health & Anti-Aging post under a Skin anchor, because Longevity is too thin to carry its own post. This is the **ONE sanctioned cross-category post** — the sole exception to the same-PP-category rule (errors #10/#13); every other post stays strictly same-category. Adds error #15.
**Supersedes:** the **v29** format spec — v30 REPLACES it (delete/replace v29 in the project folder). v30 carries forward all v29 content verbatim plus the Post 4 = Skin + Longevity rule. The **v27 active tracker** (vendor-day log, rotation state, account rebrand, error #11) carries forward UNCHANGED — this update does not touch it.

---

## ⚠️ READ FIRST — Mandatory vendor research before drafting ANY post (LOCKED — v28)

Before drafting a single post for a vendor, Claude MUST autonomously fetch and review BOTH of the following — **without being asked, and without asking Mark to do it.** This is the first step of every vendor day, not a step to request permission for. Do NOT draft from the homepage / "featured" set alone, and do NOT draft from memory.

1. **THE FULL PRODUCT CATALOG** — fetch the vendor's complete products / all-products page (not the homepage featured subset) and confirm in-stock vs. out-of-stock / coming-soon for every item. Anchors come ONLY from the full **in-stock** catalog. The full catalog overrides the featured set — an item can show out-of-stock on the homepage but in stock on `/products`, or vice versa (Midwest, June 6: TB-500 read OOS on the homepage featured set but in stock on the full `/products` page).

2. **ALL THIRD-PARTY TESTING / QUALITY INFO** — fetch every page the vendor publishes on testing, purity, and COAs: typically **About, Testing, Quality, COA, and/or FAQ**. Fetch them yourself as a matter of course. The line-4 differentiator is built ONLY from verified testing/purity facts found on these pages — never from the homepage blurb alone and never from memory.

**Claude FETCHES all of this on its own by default.** The ONLY time Claude asks Mark to fetch a page is when Claude has already TRIED and the page genuinely cannot be retrieved (an age-gate that blocks the fetcher, a sign-in wall, or a JS-only page that returns an empty shell — e.g. a COA listing that renders only its `<title>`). In that case: state exactly which page failed and why, and ask Mark to paste it — never silently skip it, and never substitute memory. **Asking is the exception after a failed fetch, not the default.**

> Append a fresh unique query string (`?audit=N`) on each fetch to force a non-cached pull. Most vendor pages (homepage, `/products`, `/about`, `/faq`) render fine for the fetcher even behind a 21+ age-gate; only fully JS-rendered listings (some `/coa` pages) come back as empty shells — those are the case to ask Mark to paste.

---

## ⚠️ READ FIRST — Align every post to PP's OWN live taxonomy (LOCKED — v29)

The post's category AND its line-3 examples must match how **profpeptide.com classifies each peptide** — not generic, ad-hoc, or remembered groupings. The X posts mirror PP's own library so the two stay consistent.

- **VERIFY the live taxonomy before drafting** — fetch `https://profpeptide.com/peptides` and read which category each peptide actually sits in. Do NOT guess; the categories have repeatedly surprised us (a "recovery-style" blend is filed under Skin on PP).
- **Every line-3 example must sit in the SAME PP category as the post's anchor — with ONE sanctioned exception: the combined Skin Health & Anti-Aging + Longevity post (the "Post 4" slot), where line 3 may span those two categories together.** See "Post 4 — Skin + Longevity (combined)" below. A Skin-only post still lists only Skin; the exception applies specifically to the combined Post 4.
- **Pick the 4 categories where the vendor has the most in-stock depth** (using PP's category names). If a category has only the anchor in stock and no same-category example to list, prefer a category with more depth (or use the carried-but-OOS allowance below to fill the line legitimately).

**Verified PP `/peptides` taxonomy (live, June 6, 2026) + the gotchas that have tripped us:**

| PP category | Members (live) | Watch out |
|---|---|---|
| **Metabolic & Weight Loss** | 5-Amino-1MQ, AOD-9604, Cagrilintide, CagriSema, Metabolic Blend, MOTS-c, Retatrutide, Semaglutide, Semaglutide+BPC-157, Tirzepatide, Tirzepatide+BPC-157 | **GLP weight-loss peptides (Retatrutide/Semaglutide/Tirzepatide/Cagrilintide) live HERE — a "GLP post" is a Metabolic post on PP.** |
| **Recovery & Tissue Repair** | BPC-157, TB-500, Wolverine Stack | Small category — only these 3. **Wolverine Stack is Recovery (not Skin).** |
| **Performance & Energy** | IGF-1 LR3, Follistatin | |
| **Growth Hormone** | CJC-1295, CJC-1295 DAC+Ipamorelin, CJC-1295+Ipamorelin (GH Stack), Ipamorelin, MK-677, MK-677+Ipamorelin, Sermorelin, Sermorelin+Ipamorelin, Tesamorelin, Tesamorelin+Ipamorelin | |
| **Cognitive & Nootropic** | Selank, Semax, Semax+Selank | |
| **Skin Health & Anti-Aging** | **GHK-Cu, GLOW, KLOW**, Melanotan I, Melanotan II | **GHK-Cu, GLOW, and KLOW are SKIN — not Recovery, not Longevity.** This is the one that's bitten us most. **Combined with Longevity for the Post 4 slot (v30).** |
| **Gut Health & Immunity** | KPV, KPV+BPC-157, Thymosin Alpha-1, VIP | |
| **Sleep & Recovery** | DSIP | |
| **Longevity** | Epitalon, NAD+, SS-31 (Elamipretide) | Thin category. **Does NOT run as a standalone post by default — combined with Skin Health & Anti-Aging for the Post 4 slot (v30).** |
| **Bioregulators** | Pinealon, Thymogen, Cortagen, Cardiogen | |
| **Sexual Health** | PT-141, PT-141+Oxytocin | |

*(48 profiles total. Re-fetch `/peptides` to confirm before each vendor day — the library grows. The taxonomy above is PP's literal classification; the Skin+Longevity combining is a posting convention, not a reclassification.)*

---

## ⚠️ In-stock vs. carried — what each line may claim (LOCKED — v29)

- **LINE 1 — the "in stock!" anchor — must be STRICTLY in stock.** That is the literal claim; it must be true. No exceptions, ever. If the standard anchor for a category is out of stock, anchor the in-stock peptide that *is* available in that category (e.g. GH normally anchors CJC-1295 + Ipamorelin, but if Ipamorelin is OOS, anchor CJC-1295 alone — same single-anchor logic as Recovery when only BPC-157 *or* TB-500 is in stock).

- **LINE 3 — "also carries…" — MAY name items the vendor CARRIES but that are currently out of stock.** This is honest: the product exists in the vendor's catalog and customers can request a back-in-stock notification ("Notify Me"). The line says **"carries,"** not "in stock," so it's literally true.

**Guardrails on naming OOS items in line 3:**
1. **At least one IN-STOCK example must appear in line 3** alongside any OOS ones. Never let an out-of-stock item be the *sole* example — that would imply "available now" when nothing in the line actually is.
2. **The item must be genuinely CARRIED** — present in the vendor's catalog, even if OOS. **Never name a peptide the vendor doesn't carry at all.** (Midwest, June 6: doesn't carry the Wolverine Stack → it can't appear in any Midwest post, OOS or not. OOS = nameable in line 3; not-carried = never nameable.)
3. **Phrasing: use "also carries" (not "has") on line 3** to keep the carries-not-necessarily-in-stock-today framing honest.

This **refines error #9:** #9 still bars writing "[X] in stock!" for an OOS item — that bar is about **line 1**. Line 3's "also carries" is exempt under the guardrails above.

---

## ⚠️ READ FIRST — Compaction guard

If this session was compacted, **re-read this spec from the ref doc before drafting ANY X post.** Do NOT draft from a compaction summary — the summary garbles the format. (This was the root cause of the May 30 drift: posts were rebuilt from a lossy summary instead of this doc.)

Also: before drafting, pull the vendor's **live** `/coupons/[vendor]` page (or `vendors.ts`) for the real code + discount, complete the **Mandatory vendor research** (full catalog + all testing pages), and confirm the **PP taxonomy** for every peptide named. Never assume a default.

---

## 🔒 The 4 canonical posts (one per vendor day)

Every vendor day = **4 posts, one per account.** Each post covers ONE peptide category (use PP's category names) — **except the fourth, which combines Skin Health & Anti-Aging + Longevity (see below).** Which **account** leads which category **ROTATES** each vendor day (see Rotation). Pick the 4 PP categories where the vendor has the most in-stock depth.

Shared structure for all four (the locked anatomy):

```
[Vendor] has [ANCHOR peptide(s)] in stock!

Use code [CODE] for [DISCOUNT]. 🔥

[Vendor] also carries other popular [PP category] peptides, including [EXAMPLE(S)].

[Differentiator — testing/purity only]

https://profpeptide.com/coupons/[vendor-slug]
```

Shared rules: opener ends `!` · 🔥 ONLY on the code line · peptides spelled out · link = `/coupons/[vendor-slug]` (per-vendor OG card, NOT the `/coupons` hub) · line 1 strictly in-stock · line 3 "also carries" (carried-but-OOS allowed per guardrails) · line 3 category + examples match PP's live taxonomy (except the combined Post 4).

### Post 4 — Skin Health & Anti-Aging + Longevity (combined) (LOCKED — NEW v30)

The standard lineup's **fourth post combines Skin Health & Anti-Aging with Longevity into a single post.** Longevity (Epitalon, NAD+, SS-31) is a thin category — a vendor rarely has more than one Longevity item in stock, not enough to carry its own post — so it rides with Skin under a Skin anchor.

- **Anchor (line 1):** normally an in-stock **Skin Health & Anti-Aging** peptide (GHK-Cu, or GLOW). If Skin has no in-stock anchor but Longevity does, anchor the in-stock **Longevity** peptide instead. Line 1 stays strictly in-stock either way.
- **Line 3:** may name examples from **BOTH** categories together — Skin (GLOW, KLOW, Melanotan I/II) and Longevity (NAD+, Epitalon, SS-31). Phrase the category line as **"skin health, anti-aging, and longevity peptides."**
- **This is the ONE sanctioned cross-category post.** It is the sole exception to the same-PP-category rule (errors #10/#13). Every OTHER post stays strictly same-category — a Metabolic post lists only Metabolic, a GH post only GH, a Recovery post only Recovery, etc. Do **not** combine any other categories.
- Carried-but-OOS items are allowed in line 3 per the in-stock vs. carried guardrails (≥1 in-stock example present; item genuinely carried).
- **Precedent (Ignite, June 7):** GHK-Cu anchor (in stock); line 3 named GLOW, KLOW, Melanotan II, and NAD+ — GLOW/Melanotan II/NAD+ in stock, KLOW carried-but-OOS. Category line read "...other popular skin health, anti-aging, and longevity peptides."

### Standard category anchors (use PP category names)

| PP category | Anchor (lead peptide[s], must be in stock) | Examples to draw from (same category) |
|---|---|---|
| **Metabolic & Weight Loss** | Retatrutide (or another in-stock GLP/metabolic) | Tirzepatide, Semaglutide, Cagrilintide, MOTS-c, 5-Amino-1MQ |
| **Growth Hormone** | **CJC-1295 + Ipamorelin** (both when in stock; else the in-stock one) | Tesamorelin, Sermorelin, MK-677, GH Stack |
| **Recovery & Tissue Repair** | BPC-157 + TB-500 (both when in stock) | Wolverine Stack (only same-category members exist here) |
| **Skin Health & Anti-Aging + Longevity** (combined — the "Post 4" slot) | GHK-Cu or GLOW (Skin anchor; or an in-stock Longevity peptide if Skin has none) | **Skin:** GLOW, KLOW, Melanotan I, Melanotan II · **Longevity:** NAD+, Epitalon, SS-31 |
| **Cognitive & Nootropic** | Semax (or Selank) | Selank, Semax+Selank |
| **Bioregulators** | Pinealon (or another carried bioregulator) | Cortagen, Thymogen, Cardiogen |

**GH anchor is CJC-1295 + Ipamorelin (LOCKED — error #1, reaffirmed v29):** put BOTH on line 1 whenever both are in stock — they're the most popular GH pairing. If only one is in stock, anchor that one alone and move the other to line 3 "also carries" (Midwest, June 6: Ipamorelin OOS → anchored CJC-1295 alone, named Ipamorelin + GH Stack in line 3).

### Example (Limitless Biotech, May 31 — the template)

```
Limitless Biotech has CJC-1295 and Ipamorelin in stock!

Use code PROFPEPTIDE for 10% off. 🔥

Limitless also carries other popular growth hormone peptides, including Sermorelin.

Third-party lab-tested, COA on every product. US-based out of Florida.

https://profpeptide.com/coupons/limitless-biotech
```

---

## 🔀 Category substitution (LOCKED — v24, mapped to PP categories)

The vendor may not carry every standard category. When a category isn't viable (no in-stock anchor, or no same-category depth even with the carried-OOS allowance), **substitute the next PP category where the vendor has depth** so you still ship 4 truthful posts.

**Substitution priority** (after the in-stock anchors are placed): Metabolic & Weight Loss → Growth Hormone → Recovery & Tissue Repair → **Skin Health & Anti-Aging + Longevity (combined)** → Cognitive & Nootropic → Gut Health & Immunity → Bioregulators → Sexual Health → Performance & Energy.

**Within each post, the anchor + examples rotate by what's actually in stock / carried.** Pick the most popular in-stock peptide in that PP category as the anchor; name different same-category ones as examples. Don't reuse the same peptide as both anchor and example.

**Worked precedents:**
- **Ignite (June 7):** Ran Metabolic (Retatrutide) / Growth Hormone (CJC-1295 + Ipamorelin) / Recovery (BPC-157 + TB-500) / **Skin + Longevity combined** (GHK-Cu anchor; GLOW, KLOW, Melanotan II, NAD+ in line 3). 40% stack deal (IGNITE30 + PROF10) in the body. Posted with the `/coupons` hub link after the per-vendor card hit an X-cache wall (see active tracker).
- **Ignite (May 31):** Retatrutide + CJC-1295 OOS → ran truthful posts only; PEAK sat out rather than pad with an OOS *anchor*.
- **Limitless (May 31):** No GLPs in catalog → substituted categories (GH / Recovery / Metabolic / Skin).
- **Midwest (June 6):** Semaglutide OOS, no standalone Ipamorelin, no Wolverine. Once GHK-Cu/GLOW/KLOW were correctly placed under **Skin** (per PP taxonomy), Recovery had only its two anchors in stock and no same-category example → ran **Metabolic / Growth Hormone / Skin Health & Anti-Aging / Longevity** instead (the 4 PP categories with the most Midwest depth). Line 3s used "also carries" and named carried-but-OOS items (Semaglutide, Ipamorelin/GH Stack, KLOW, NAD+) alongside in-stock examples. *(Under v30 the Skin + Longevity pair would collapse into one combined post.)*

**Rule:** never pad to 4 by claiming an out-of-stock or non-carried peptide on **line 1**. Fewer truthful posts > a false "in stock!" claim.

---

## 🔁 Account rotation (LOCKED)

The 4 accounts stay in a **fixed order**; what rotates each vendor day is **which category each account leads.** Vendors and peptides rotate through the fixed account sequence. **Never let an account lead the same category two vendors in a row.** Over 4 vendors, each account cycles through its set of categories.

Accounts: **PP** = @peptide_pros · **PREM** = @premierpeptides · **CORE** = @corepeptides · **PEAK** = @peakpeptides.
*(Current rotation row + most recent vendor days live in the v27 active tracker — read it for the latest row to advance from. Account display-name rebrand, June 3: Peptide Codes / Deals / Coupons / Discounts; @handles unchanged.)*

---

## 🔒 Content rules (restated, locked)

- Opener ends `!` (not `.`). **Line 1 anchor = strictly in stock.**
- 🔥 ONLY on the code line (P2). No other emoji anywhere.
- Peptides SPELLED OUT (Retatrutide not Reta; decode vendor codes like GLP-3 RT → Retatrutide, GLP-2 TZ → Tirzepatide, GLP-1 SM → Semaglutide). Brand blend names (KLOW, GLOW, Wolverine) stay as-is.
- ≤275 chars target (280 hard limit). Going over the visible-fold cutoff is acceptable when a promo requires it — overflow sits below the fold; the hook + code line must land in the always-visible portion.
- **Line 3 = "also carries other popular [PP category] peptides, including [X]"** — PP category + same-category examples; carried-but-OOS items allowed per the In-stock vs. carried guardrails. **Exception: the combined Post 4 may span Skin Health & Anti-Aging + Longevity** ("skin health, anti-aging, and longevity peptides").
- **NO** prices · **NO** dosing · **NO** vial mentions (not even the word "vial") · **NO** marketing language ("amazing," "incredible") · **NO** urgency ("limited time," "act fast").
- **Differentiator (line 4) = testing/purity facts ONLY:** third-party lab (named if known), HPLC, purity (use the vendor's actual stated figure/range — don't force a flat "99%+" if they state 98–99%+), public COAs, US-based (city/state if known). Do NOT pad line 4 with shipping speed, repeat-customer rate, payment discounts, or other non-testing marketing. No vial language.
- Link = `/coupons/[vendor-slug]` on its own line (per-vendor OG card). **Never** the vendor's own URL. URL stays lowercase even when the code is uppercase. *(Documented fallback — Ignite, June 7: when the per-vendor OG card is stuck on a stale value in X's cache and can't be force-rescraped, the `/coupons` hub link, which unfurls the generic Pp card, is an acceptable substitute; or attach an image to suppress the unfurl. The body must still carry the deal. See active tracker.)*
- Code + discount: pull from live `vendors.ts` / the live vendor page before drafting. **Never** assume a default discount. *(Note: `vendors.ts` reflects only PP's OWN affiliate code for a vendor; a vendor's own stackable store code — e.g. Ignite's IGNITE30 — is real and live even when absent from `vendors.ts`. Mark's direct on-site checkout test is ground truth over the data file.)*
- **De-domain vendor names that are live domains** (error #11): brand name that's a registrable domain (`.gg`, `.io`, `.co`, `.com`) → render WITHOUT the dot-TLD in body text ("Peptides.gg" → "Peptides GG"); the `/coupons/[slug]` link path (hyphenated) is safe.

---

## ✅ Pre-flight check — run BEFORE delivering any vendor post (LOCKED)

Never hand Mark a vendor post (or link) until ALL of these are verified. If any can't be verified, say so and stop.

0. **Mandatory vendor research done** — full in-stock catalog AND all third-party-testing pages fetched/reviewed. If a required page couldn't be fetched, Mark was asked to paste it — not skipped, not filled from memory.
0b. **PP taxonomy confirmed** — `/peptides` fetched; each post's category + line-3 examples match PP's live classification; every example is in the SAME PP category as the anchor — **except the combined Post 4, which may span Skin Health & Anti-Aging + Longevity.**
1. **Vendor real + code/discount confirmed** — exists at `/coupons/[slug]`; exact code + discount pulled from the live page / `vendors.ts`. (Hub `coupons/page.tsx` has its own hardcoded array that can drift — vendors.ts + the per-vendor OG card are the source of truth. A vendor's own store code, e.g. IGNITE30, won't be in vendors.ts — confirm with Mark's on-site test.)
2. **Per-vendor OG card renders** — `/coupons/[slug]` produces a real per-vendor card, not the generic `og-image.png` fallback. Verify via `/coupons/[slug]/opengraph-image` (`?v=N`) and/or opengraph.xyz. *(If X serves a stale cached card that can't be force-rescraped, fall back to the `/coupons` hub link or attach an image — see content rules + active tracker.)*
3. **In-stock vs. carried correct** — every **line-1 anchor** is in stock; every **line-3** item is at least carried (OOS allowed), with ≥1 in-stock example present and nothing named that the vendor doesn't carry at all.
4. **Rotation position** — confirm which account leads which category for this vendor day (advance one row from the prior vendor in the v27 active tracker; never repeat an account's prior category).
5. **X cache** — the per-vendor card may not show in X's compose preview even when it renders at the route. Re-paste or append a throwaway `?x=N` (unique per post) to force a fresh scrape; the card attaches server-side on the published tweet regardless. *(Caveat — Ignite, June 7: a query string does NOT bust X's cache when the page declares a canonical URL — X normalizes to canonical and reuses the cached card. In that case use the hub link or attach an image.)*

---

## 🚫 Errors to NEVER repeat (captured May 30 – June 7)

0. **NEVER guess, theorize, assume, or reconstruct from memory.** Before drafting/answering anything with a knowable correct value — format, anchors, category lineups, codes/discounts, catalog contents, PP taxonomy, whether a page/card exists, account assignments — check the source: this ref doc, `vendors.ts`, the live page (web_fetch), or fresh research. If unreachable, SAY it's unverified rather than filling it in. When unsure, stop and check. **Corollary (June 7): when Mark says he has directly verified something Claude structurally cannot see — checkout behavior, logged-in/auth-walled state, a live stack like IGNITE30 + PROF10 = 40% — Mark's verification is ground truth. Do not re-litigate it against a data file that can't see what he sees.**
1. **GH post anchors CJC-1295 + Ipamorelin** (both on line 1 when both in stock; the in-stock one alone otherwise). Never lead with Sermorelin/Tesamorelin (those go in line 3). Reaffirmed v29.
2. **Recovery post anchors BPC-157 + TB-500** (both when in stock). If only one is in stock, anchor it and move the other to line 3.
3. **Metabolic/GLP posts keep their category line** — don't collapse to 4 paragraphs. (GLP weight-loss peptides are filed under Metabolic & Weight Loss on PP.)
4. **Rotate accounts every vendor day** — never freeze one account on the same category.
5. **Link to `/coupons/[vendor]`**, not the `/coupons` hub. *(Documented exception — Ignite, June 7: the hub link is an acceptable fallback when the per-vendor card is stuck on a stale X cache; the hub unfurls the generic Pp card. Body must still carry the deal.)*
6. **No "vial" language at all.**
7. **After a compaction, re-read this spec** — never draft from the summary.
8. **Verify the per-vendor OG card renders before delivering any link.**
9. **Never write "[X] in stock!" (LINE 1) for an out-of-stock item.** (Line 3 "also carries" MAY name carried-but-OOS items under the v29 guardrails — that's the exemption, not a loophole for line 1.)
10. **Use the category-framed line** ("[Vendor] also carries other popular [PP category] peptides, including [X]") — name the PP category + every carried same-category example, not a bare list. Same PP category only — **except the combined Post 4 (Skin Health & Anti-Aging + Longevity), the one sanctioned cross-category post (see #15).**
11. **De-domain vendor names that are live domains** ("Peptides.gg" → "Peptides GG").
12. **Do the full vendor research yourself, up front** — fetch the full catalog + all testing/COA/About/FAQ pages every vendor day; don't draft off the homepage and don't ask Mark to fetch what you can fetch. Ask Mark to paste a page ONLY after a fetch genuinely fails. (Captured June 6, Midwest.)
13. **Align categories to PP's OWN live taxonomy — verify, don't guess.** (Captured June 6, Midwest.) GHK-Cu/GLOW/KLOW are **Skin Health & Anti-Aging** on PP (not Recovery, not Longevity); Wolverine Stack is **Recovery**; GLP weight-loss peptides are **Metabolic & Weight Loss**. Fetch `/peptides` and place each peptide where PP places it; every line-3 example must sit in the post's PP category — **except the combined Post 4 (see #15).**
14. **Line 4 is testing/purity ONLY** — no shipping speed, repeat-customer rate, payment-method discounts, or other non-testing marketing; use the vendor's actual stated purity figure. (Captured June 6, Midwest — first draft padded line 4 with repeat-rate/shipping/Zelle.)
15. **Post 4 = Skin Health & Anti-Aging + Longevity (combined) — and it is the ONLY cross-category post.** (Captured June 7, Ignite.) The fourth post folds Longevity (NAD+, Epitalon, SS-31) into the Skin post under a Skin anchor (or a Longevity anchor if Skin has no in-stock lead); line 3 reads "skin health, anti-aging, and longevity peptides." Do NOT combine any other categories — every other post stays strictly same-category (#10/#13). Do NOT run Longevity as a standalone post by default (too thin).

---

## 📅 Changelog

**June 7, 2026 (v29 → v30):**
- **Post 4 = Skin Health & Anti-Aging + Longevity (combined), LOCKED as error #15:** the fourth post in the standard lineup folds Longevity into the Skin post under a Skin anchor; line 3 may span both categories ("skin health, anti-aging, and longevity peptides"). This is the ONE sanctioned cross-category post — the sole exception to the same-PP-category rule (#10/#13). Longevity no longer runs standalone by default (too thin). Updated the taxonomy table, the anchors table (merged Skin + Longevity row), substitution priority, content rules, pre-flight #0b, and errors #10/#13.
- **Documented the Ignite June 7 round:** ran Metabolic / GH / Recovery / Skin+Longevity; IGNITE30 + PROF10 = 40% stack in the body; used the `/coupons` hub link as a fallback after the per-vendor card stuck on a stale welcome10 value in X's cache.
- **Two clarifications added (from the Ignite round):** (a) `vendors.ts` reflects only PP's affiliate code — a vendor's own stackable store code (IGNITE30) is real even when absent; Mark's on-site test is ground truth (content rules + error #0 corollary). (b) A query string does NOT bust X's card cache when the page declares a canonical URL — X normalizes to canonical; use the hub link or attach an image instead (pre-flight #5, content rules, error #5 exception).

**June 6, 2026 (v28 → v29):**
- **PP-taxonomy alignment (LOCKED, error #13):** post category + line-3 examples must match PP's live `/peptides` classification; verify by fetching `/peptides`, don't guess. Added the verified taxonomy table + gotchas (GHK-Cu/GLOW/KLOW = Skin; Wolverine = Recovery; GLPs = Metabolic).
- **In-stock vs. carried (LOCKED):** line 1 anchor strictly in-stock; line 3 "also carries" may name carried-but-OOS items, with guardrails (≥1 in-stock example present; item must be genuinely carried; never name a non-carried peptide). Refined error #9.
- **Line-3 phrasing → "also carries"** (from "has") to keep the carried-not-necessarily-in-stock framing honest.
- **GH anchor = CJC-1295 + Ipamorelin reaffirmed** (both on line 1 when in stock; single-anchor otherwise) — error #1 restated.
- **Line 4 = testing/purity only** locked as error #14 (no shipping/repeat-rate/payment padding; vendor's actual purity figure).
- Substitution + anchors tables rewritten to use PP category names. Logged the Midwest round.

**June 6, 2026 (v24 spec → v28):**
- Added the top READ FIRST "Mandatory vendor research" block (autonomous full-catalog + all-testing-page fetch; ask Mark only after a fetch fails). Added as pre-flight #0 and error #12. Noted the over-the-fold allowance for promo posts.

**June 1, 2026 (v24 refinement):** Multiple examples preferred (more named same-category peptides → more impressions). Logged the BioCollex round.

**May 31, 2026 (v23 → v24):** Reframed P3 to the category-framed line; added Category substitution + Metabolic/Skin as standard types; logged Ignite + Limitless; URL-lowercase/code-uppercase note; X per-URL cache `?x=N` forcer; hub-array drift note.

**May 30, 2026 (v22 → v23):** corrected v3.3 format drift after compaction; locked 4 templates + anchors + rotation; added errors list + compaction guard + #0 + pre-flight.

---

## 🔗 Cross-references
- **PP_X_POSTS v27** — active tracker (vendor-day log, current rotation row, account rebrand, de-domain rule #11). Read it for the latest rotation row to advance from.
- **PP_SEO** · **PP_MASTER (+ addenda)** · **WL_MASTER** · **SCS_MP**

---

*v30 adds the combined Skin Health & Anti-Aging + Longevity post (the "Post 4" slot) as the one sanctioned cross-category post, and documents the Ignite June 7 round (IGNITE30 + PROF10 = 40% stack; hub-link/canonical-cache fallback; vendor-store-code vs. vendors.ts clarification). Canonical format spec for HOW to draft; replaces v29. The v27 active tracker remains the source for current rotation state + vendor-day history.*
