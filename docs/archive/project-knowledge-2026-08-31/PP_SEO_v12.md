# PP SEO — v12

**Status:** ACTIVE (narrative / strategy / diagnosis)
**Version:** v12 (June 28, 2026) — adds the **vendor-promotion trio completion** (Glacier + Peptide Partners run the full Amino Club playbook), the **6/28 CTR-leak backlog** (top-25-by-impressions pull → ranked rewrite targets; Tier 1 shipped), the **indexing-is-solved reframe** (ongoing indexing = just the New-Page Index Watch), and the **ongoing rank-improvement program** as the real forward SEO work. Carries v11 forward intact.
**Supersedes:** v11.
**Pairs with:** PP_SEO_LEDGER v3 (operational per-URL tracker + not-indexed registry + new-page watch). **Review BOTH at the start of every SEO session.**

---

## 🧭 WHERE SEO STANDS (6/28 reframe — read this first)

Two workstreams, clearly separated now:

1. **Indexing — SOLVED + systematized.** The not-indexed pool is ~98% expected noise (OG image endpoints + redirect variants), fully classified in the LEDGER's 8-bucket registry. New pages auto-index via the sitemap. **The ONLY ongoing indexing task is the New-Page Index Watch** (LEDGER Section D): when we ship a new page, log it → CINC requests/confirms it → drop it. That's it. Stop treating "100+ not indexed" as alarming — it's catalogued and benign.

2. **Position / CTR — THE REAL ONGOING WORK.** The core diagnosis has always been *position/CTR, not indexing.* This is where all forward SEO effort goes: (a) **CTR-leak rewrites** (capture impressions we already rank for), (b) **rank improvement** (internal linking + depth to push page-1-edge pages into the click zone), (c) **vendor-promotion playbook** (repeat the Amino Club treatment on strong vendors). Run in focused blocks.

---

## ✅ VENDOR-PROMOTION TRIO — COMPLETE (6/27–6/28)

The Amino Club playbook (v11 §2) was extended to the two other top vendors. **All three top vendors now run the full treatment:**

| Vendor | Peptide-page surfacing | Title/meta (verified + anti-aggregator + real differentiator) | Badge |
|---|---|---|---|
| **Amino Club** | ✅ 14 pages (`187f8b2`) — note: ISO 17025 tested · batch COAs | ✅ (`2986149`) | Editor's Pick |
| **Glacier Aminos** | ✅ 24 pages (`36b98f5`) — note: batch-traceable COAs · cold-chain | ✅ (`2d57db3`) — lowest-tracked Reta price hook | Editor's Pick |
| **Peptide Partners** | ✅ already surfaced (in the 5-card set) | ✅ (`d5bde65`) — 4 independent batch tests hook | Editor's Pick |

**Density decision (LOCKED):** peptide pages carry up to **5 vendor cards** (3+2 grid); Mark eyeballed retatrutide (5 cards) and approved — "5 looks good, leaving it." Ceiling for future vendors = **5**. If ever trimming, the natural core trio = **Amino Club + Glacier + Peptide Partners** (the three Featured/Editor's-Pick vendors). Ascension + Vital Core stay for now (Mark's call 6/28).

**Each vendor's note uses its OWN verified differentiator** — never borrowed (RULE #0). Amino Club = ISO 17025; Glacier = batch-traceable COAs + cold-chain + lowest-reta-price; Peptide Partners = 4 independent batch tests (purity/endotoxin/heavy-metals/sterility); Ascension = HPLC-UV-MS via MZ Biolabs + rare compounds; Vital Core = per-product COAs.

---

## 📊 6/28 CTR-LEAK BACKLOG (top-25-by-impressions → ranked rewrite targets)

CINC pulled GSC Performance → Pages, 28-day, sorted by impressions (the "find the leaks" view). **Totals: 138 clicks / 20,302 impr / 0.7% CTR / pos 17.9.** The richest vein: page-1 pages earning ~0 clicks (ranking done, snippet broken).

### ✅ Tier 1 — SHIPPED 6/28 (`e11531a`) — page-1 zero-click, highest ROI:
- **/peptides/cardiogen** — was pos 9.2, 255 impr, **0 clicks**. Root cause: title ~87 chars + meta ~250–290 chars (both over limit → truncated jargon). Rewrote to research/what-it-is angle (it's the cardiac Khavinson bioregulator AEDR). New: title 52 / meta 153.
- **/coupons/royal-peptides** — was pos 8.3, 193 impr, **0 clicks**. Confirmed LIVE vendor (PROF10/10%, cGMP/ISO labs, 99%+ purity). Rewrote to the standard verified/anti-aggregator vendor pattern. New: title 58 / meta 151.

### 🔜 Tier 2 — queued (high-value, focused-session work):
1. **/supplements/glucomannan** — pos 11.9, **2,341 impr, 1 click** (biggest-volume leak). May need a small ranking nudge too (bottom of page 1), not just a snippet fix.
2. **/coupons/amino-club** — pos 7.0, **4,042 impr, 37 clicks, 0.9%** (the LEVERAGE play). Even 0.9%→3% = +40 clicks at this volume. The "amino club promo code" branded query alone = 700 impr / 0.4% CTR — badly underperforming for a branded query at pos 7. Meta/title sharpen.
3. **/guides/syringes-and-injection** — pos 11.8, **1,944 impr, 4 clicks, 0.2%** (high-volume leak).
4. **/compare/semaglutide-vs-tirzepatide-vs-retatrutide** — pos 9.8 (page-1 edge), 531 impr, 0.2%.

### 🔻 Tier 3 — banked (lower priority):
/peptides/klow (854 impr, 0.1%), /supplements/green-tea-extract (429 impr, 0%), /peptides/5-amino-1mq (290 impr, 0%), /peptides/cortagen (165 impr, 0%), /news/fda-pcac-meeting-agenda-july-2026 (311 impr, 0.3% — dry agenda-style title), /coupons/oasis-labs (pos 6.2, could be higher).
*(Low-priority/skip: pages at pos 40–72 — too buried for a snippet fix to matter; need ranking work or are junk.)*

> **Rewrite pattern (proven):** verify the page's REAL identity/differentiator first (RULE #0), then concise within-limit snippet — coupon pages get the verified/anti-aggregator/query-family treatment; content pages get the what-it-is/benefit angle. Title ≤60, meta ≤155 (decoded — watch `&amp;`/em-dash byte inflation). Per-page `layout.tsx` (or `page.tsx` if no layout) via `buildPageMetadata`; affects only that page.

---

## 📋 §6 — STRUCTURED LOW-HANGING-FRUIT BACKLOG (carried from v11, updated)

Ordered by leverage. 🟢 = data-confirmed; 🟡 = verify-it's-a-real-gap first.

1. **Vendor-page surfacing** 🟢 — **DONE** for the trio (Amino Club/Glacier/Peptide Partners). Future: next-strongest vendors as data warrants; vendor review/comparison pages ("[Vendor] review", "[Vendor] vs [competitor]") are high-intent queries aggregators own — we have real data to build them.
2. **High-impression/low-CTR sweep** 🟢 — the 6/28 backlog above is the live list. Tier 1 done; Tier 2/3 queued.
3. **Internal-linking audit** 🟡 — related-peptide cross-links (BPC-157 ↔ TB-500, GLP family, stack components ↔ stack page); News → peptide/coupon links (News has residual authority). The Amino Club case proved internal links move rank (14 links to push its "promo code" query toward top-7). Verify current state first.
4. **Rankings without pages** 🟡 — mine GSC for pos 8–15 terms with no dedicated page.
5. **Blends/stacks buildout** 🟡 — 15–25 profiles (Wolverine template); also a vendor-surfacing + highlights-block gap (wolverine-stack/glow/klow have no `VendorHighlightBlock`). Apply the citation gate.
6. **/best-peptide-vendors optimization** 🟡 — high-intent head term; check GSC perf, optimize if ranking-but-not-converting.

> **Meta-pattern:** *demand or structure we already have but aren't capturing.* Confirm 🟡 before acting; act freely on 🟢.

---

## 🔑 LOCKED RULES-OF-THUMB (carried, still governing)

- **Render path for peptide-page vendors = the hardcoded `highlights` array in each peptide `page.tsx`** (via `VendorHighlightBlock`), NOT `peptide-vendors.json` (inert/dead — rendered nowhere).
- **Compete on TRUST, not inflated discount numbers** (LOCKED positioning) — vs aggregator SERP spam claiming fake 40–50% codes, PP wins on verified/actually-working/real-editorial-source/third-party-tested. The moat for the entire coupon section + every title/meta.
- **RULE #0 on catalogs + differentiators:** a vendor goes only on peptides it actually carries; its note uses its own verified differentiator (never borrowed). Verify from the live page, not memory.
- **Per-vendor coupon metadata = own `layout.tsx` via `buildPageMetadata`** (per-page override; root has no `title.template`). Char limits decoded: title ≤60, meta ≤155.
- **Mandatory NCBI citation gate** on every AI-written profile/news/supplement/blend — verify PMIDs at write time; never trust a remembered/model-generated ID.

---

## 📌 Open items
- **CTR Tier 2/3 rewrites** — queued for a focused SEO session (glucomannan, Amino Club meta-sharpen, syringes guide first).
- **New-Page Index Watch** — log new pages as they ship (LEDGER Section D); CINC requests/confirms each run.
- **Validate-Fix runs** (redirect 9 + noindex `/contact`) — re-check ~7/19.
- **Internal-linking audit** — verify current cross-link state, then build the high-value links.
- **Amino Club affiliate email** — deeper real permanent code given traffic volume (business move).

---

## 📅 Changelog
**v12 (June 28, 2026):** Vendor-promotion trio complete (Glacier `36b98f5`/`2d57db3` + Peptide Partners `d5bde65` join Amino Club). 6/28 CTR-leak backlog added (top-25 pull; Tier 1 cardiogen+royal shipped `e11531a`; Tier 2/3 ranked + queued). Indexing-is-solved reframe + New-Page Index Watch as the sole ongoing indexing task (operational detail in LEDGER v3). Density ceiling locked at 5 cards. Supersedes v11.
**v11 (June 27):** CTR-recovery + vendor-promotion workstream; Amino Club playbook; §6 backlog; nav focus. Supersedes v10.

---
**Cross-ref:** **PP_SEO_LEDGER v3** (operational tracker + registry + index-watch — read alongside) · PP_MASTER · PP_X_POSTS · PP_VENDOR_PAGES · SCS_MP.
