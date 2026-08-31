# PP SEO — v11

**Status:** ACTIVE (narrative / strategy / diagnosis)
**Version:** v11 (June 27, 2026) — adds the **CTR-recovery + vendor-promotion workstream** (the "capture demand you already have" lever), the **Amino Club promotion playbook** (peptide-page surfacing template), and a **structured low-hanging-fruit backlog** (Section §6) to reference at the start of every SEO/CTR session. Carries v10 forward intact.
**Supersedes:** v10 (carries its deploy-live confirmation, stale-GSC learning, news-canonical fix, citation gate forward).
**Pairs with:** PP_SEO_LEDGER v2 (operational per-URL index tracker). **Review BOTH at the start of every SEO session.**

---

## 🆕 Session work — June 27, 2026

### 1. ⭐ THE CTR/PROMOTION LEVER — "capture demand you already have"
The session's throughline, and the reframe worth keeping: **the highest-ROI SEO work is capturing demand that already exists, not chasing net-new rankings from zero.** Four shapes of "already exists but uncaptured" surfaced, all confirmed against live GSC or live site structure:
- **Impressions without clicks** — pages ranking page-1 but the snippet isn't earning the click (title/meta problem). Ex: `glucomannan` 2,341 impr / ~0 clicks; Amino Club "promo code" query 630 impr / pos 9.5 / ~0 clicks.
- **Rankings without pages** — queries we rank pos 8–15 for with no dedicated page (Google saying "you're almost relevant — make a page").
- **Pages without internal links** — content that exists but nothing links to it, so authority doesn't flow.
- **Traffic-driving vendors without placement** — top vendors absent from the peptide pages people actually land on.

**Reframe:** impressions = demand Google is already showing us; clicks = what we capture. High-impression/low-click pages are the richest vein because the hard part (ranking) is done; only the cheap part (the snippet that earns the click) is broken. This is the *position/CTR* lever the diagnosis has always pointed to — now with a concrete playbook.

### 2. ✅ AMINO CLUB PROMOTION PLAYBOOK (the template for any strong vendor)
Amino Club = the site's strongest vendor page (28-day GSC: **32 clicks, 3,810 impressions, avg pos 7.1**), ranking page-1 across a whole query family. Promoted four ways this session:
1. **Coupons-hub placement** — moved to Featured Vendors (first), badge synced to Editor's Pick across both badge systems (hub `sections` array + `vendors.ts` flags). *(Commits 11c7bab → 1da16dc → 0d4ee9d.)*
2. **Peptide-page surfacing (the high-leverage fix)** — added Amino Club to the hardcoded `VendorHighlightBlock` `highlights` array (first entry, note `ISO 17025 tested · batch COAs`) on **14 carried peptide pages**: retatrutide, cagrilintide, mots-c, aod-9604, cjc-1295, ipamorelin, tesamorelin, bpc-157, tb-500, ghk-cu, nad-plus, epitalon, semax, selank. **3 carried peptides skipped** (wolverine-stack, glow, klow — pages exist, no highlights block; don't fabricate one). *(Commit 187f8b2.)* This wires **14 internal links** into the Amino Club coupon page — the compounding lever to push its "amino club promo code" query (630 impr) from pos 9.5 → top-7 click-zone.
3. **Title/meta rewrite** — sharpened `/coupons/amino-club` for the full **coupon/promo/discount-code query family** (we rank for all three phrasings as distinct queries) on the **verified/trusted angle**. *(Prompt issued 6/27.)*
4. **Business move (pending)** — email Amino Club for a deeper *real* permanent code given the traffic volume we send them; a genuine 25%+ that *works* narrows the gap with the fake 40/50% aggregator claims honestly.

> **🔑 RULES-OF-THUMB FROM THE PLAYBOOK (reuse for every vendor):**
> - **The render path for peptide-page vendors is the hardcoded `highlights` array inside each peptide `page.tsx`** (via `VendorHighlightBlock`) — **NOT** `peptide-vendors.json`. That JSON is consumed by `WhereToBuy`, which is **rendered nowhere** (dead/inert). Editing the JSON surfaces nothing. *(RULE #0 catch, 6/27 — verified by CC tracing the actual render path. Don't repeat the wrong assumption.)*
> - **Curated, not exhaustive:** a peptide page's vendor block should carry **2–3 vendors max** — enough for real choice + multiple coupon-page links, without becoming a vendor directory that dilutes everyone. Don't add all 20.
> - **RULE #0 on catalogs:** a vendor only goes on peptides it *actually carries* (verify from its coupon-page catalog). CC must report which carried peptides it *skipped* (no page / no block).
> - **Compete on TRUST, not number (LOCKED positioning):** against coupon-aggregator SERP spam (HotDeals/ScoopCoupons/etc.) claiming fake 40–50% codes, profpeptide.com wins on **verified / actually-working / real editorial source / third-party-tested vendor** — never on an inflated discount we can't honestly back. This is the moat for the *entire* coupon section, and the angle for every vendor title/meta + peptide-page note.

### 3. ✅ NAV FOCUS (supports the brand-clarity SEO thesis)
Removed Supplements + News from the top nav (both confirmed dead-traffic via GSC: News 2 clicks/505 impr, Supplements 1 click/3,299 impr over 28 days); routes stay live, Supplements added to footer Learn; Log→Track label (route stays `/log`). *(Commit 21f004c.)* Rationale: **nav = statement of what the brand is about.** Peptides · Calculator · Track · (AI soon) as the pillars signals focus, which plausibly drives more total traction than surfacing everything. Strategic focus (peptides) over broad coverage (supplements/news) in a saturated space.

---

## 📋 §6 — STRUCTURED LOW-HANGING-FRUIT BACKLOG (reference this at the start of every SEO/CTR session)

Ordered by leverage. **Confidence tag:** 🟢 = data-confirmed (GSC numbers seen); 🟡 = inferred from site structure, **needs a "is this actually a gap?" check before acting** (RULE #0 — don't send CC to fix something already fine).

### Priority 1 — Vendor-page surfacing, scaled 🟢 (IN MOTION)
- **CINC vendor-traffic pull** (issued 6/27): rank every `/coupons/[vendor]` page by clicks/impressions/position, 28-day. → pick top ~3–5 performers.
- For each top vendor: **verify its catalog** → **surface on those peptide pages** (the `page.tsx` highlights pattern, 2–3 vendors max per page) with a short trust-note differentiator.
- Expected top performers: Amino Club (done), Peptide Partners (likely), Ascension (50% — deepest real discount). **Confirm with data, don't assume.**
- **Sub-opportunity — vendor comparison / review pages:** "[Vendor] review," "[Vendor] vs [competitor]" are high-commercial-intent queries aggregators own now; we have the vendor data to build real ones.

### Priority 2 — High-impression / low-CTR sweep 🟢 (the single richest vein)
- GSC Pages report, 28-day, **sort by impressions descending**, filter to pages with meaningful impressions + near-zero clicks. Bucket: (A) page-1 zero-click → **title/meta rewrite**; (B) buried pos 11–25 → ranking/depth; (C) thin → expand. (This is the existing weekend Bucket A/B/C routine run impressions-first to find the *leaks*.)
- **Known targets already surfaced:**
  - **glucomannan** — 2,341 impr / 1 click (~0.04% CTR). Pull its ranking queries + position; if page-1/near on a real term → rewrite title/meta. If pos 30+ junk → leave.
  - **Amino Club "promo code"** — 630 impr / pos 9.5 / ~0 clicks. Ranking lever (9.5→top-7) via the 14 new internal links + page depth; title/meta already being sharpened.

### Priority 3 — Internal-linking audit 🟡 (cheap, compounding)
- **Related-peptide cross-links:** do peptide pages link to *related* peptides (BPC-157 ↔ TB-500, GLP family ↔ each other, stack components ↔ stack page)? Keeps users on-site, passes authority around the highest-traffic cluster. *(Verify current state first — the locked first-mention rule covers in-profile linking; this is about cross-page related links.)*
- **News → peptide/coupon links:** News has small residual authority (505 impr). Ensure its articles internal-link to relevant peptide/coupon pages so the authority flows somewhere useful even though News left the nav.

### Priority 4 — Rankings without pages (content backlog, demand-pre-validated) 🟡
- Mine GSC queries for terms we rank **pos 8–15** on with **no dedicated page** — Google signaling "make a page and you'll rank." Systematized Bucket B.

### Priority 5 — Blends/stacks buildout 🟡 (higher effort; also a vendor-surfacing + highlights-block gap)
- Blend/stack profiles are higher-revenue than supplements; target 15–25 (Wolverine stack as template). Note: wolverine-stack/glow/klow currently have **no `VendorHighlightBlock`** (that's why Amino Club skipped them) — building these out is both a content *and* a vendor-surfacing opportunity. Apply the **citation gate** (carried below) to all blend content.

### Priority 6 — `/best-peptide-vendors` optimization 🟡
- High-intent head term ("best peptide vendors," "where to buy peptides"). Check how the page performs in GSC; optimize title/meta/content if it's ranking-but-not-converting.

> **Meta-pattern for the whole backlog:** *demand or structure we already have but aren't capturing.* Confirm 🟡 items are real gaps before acting; act freely on 🟢.

---

## Carried forward from v10 — UNCHANGED

- **🔒 Mandatory pre-publish NCBI citation-verification gate:** every AI-written/edited profile or news post citing literature must pass NCBI title+author verification at write time; never trust a remembered/model-generated ID; the two-pass resolve-then-reconfirm harness is standard. **Applies to the blend/stack buildout.**
- **Core diagnosis unchanged: position/CTR, not indexing** — reinforced by the stale-GSC findings (v10) and now operationalized by the §6 CTR backlog.
- **Site-wide citation repair COMPLETE** (47 pages, NCBI-verified, live).
- **Deploy stack live** (citation repair + Findings A/B serving; earlier "not live" = stale edge cache).
- **News-canonical durability fix** (`buildPageMetadata`, `43df03f`); maritide handled 3 ways.
- **Sitemap integrity** verified (49/49 /peptides/, native `sitemap.ts`, 167 URLs).
- Permanent-exclude registry → ledger Section C. `/compare/retatrutide-vs-semaglutide` decision still pending.
- Weekend GSC query-mining routine (Bucket A/B) — now expanded by §6.

---

## 📌 Open items
- **CINC vendor-traffic pull** — issued 6/27; paste table → pick next vendors to surface.
- **Amino Club title/meta rewrite** — prompt issued 6/27; verify live.
- **Amino Club affiliate email** — draft + send (deeper real code).
- **News JsonLd `url`** hand-typed → optional slug-derived helper (ledger backlog).
- **Validate-Fix** runs (redirect + noindex buckets) — recheck.
- **maritide / retatrutide** — let re-crawls land; re-verify live (both expected ✅).
- Apply the citation gate to every future AI-written profile/news/supplement/blend prompt.

---

## 📅 Changelog
**v11 (June 27, 2026):** Added the CTR-recovery + vendor-promotion workstream (§1) — "capture demand you already have." Logged the Amino Club promotion playbook (§2): coupons-hub placement + badge sync, peptide-page surfacing on 14 pages (187f8b2), title/meta rewrite, affiliate-email business move — plus the reusable rules-of-thumb (render path = hardcoded page.tsx highlights NOT the inert peptide-vendors.json; 2–3 vendors/page; RULE #0 on catalogs; compete-on-trust LOCKED positioning). Logged the nav-focus change (21f004c) + its brand-clarity SEO rationale. Added the structured low-hanging-fruit backlog (§6) with confidence tags. Supersedes v10.
**v10 (June 19–20, 2026):** Deploy stack confirmed live; stale-GSC learning; news-canonical durability fix; sitemap integrity; operational tracking split into PP_SEO_LEDGER.

---
**Cross-ref:** **PP_SEO_LEDGER v2** (operational per-URL tracker — read alongside this) · PP_BIOREGULATORS v1 · PP_MASTER v15 (+ Addendum v3) · PP_X_POSTS v34 · PP_VENDOR_PAGES v2 · SCS_MP.
