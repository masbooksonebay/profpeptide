# PP_SNIPPET_INVESTIGATION v2
**Supersedes v1. Updated 2026-08-19.**

---

## STATUS: intervention shipped, one round of post-treatment data, control group invalid

---

## 1. THE ORIGINAL PROBLEM

PP coupon pages fell into two SERP states, stable per page across observations:

- **STABLE** — PP's own descriptive title `[Vendor] Discount Code: PROFPEPTIDE — Save X%` **with** a snippet
- **STRIPPED** — a short rewritten title (`[Vendor] - Prof. Peptide` or just `[Vendor]`) with **no** snippet

**Title/snippet coupling held 112 for 112** across Rounds 1–4, zero exceptions. Snippet present → PP's own title. Snippet absent → rewritten title.

---

## 2. HYPOTHESES ELIMINATED (all with evidence)

1. Near-duplicate consolidation — Google-selected = Inspected URL on all 12
2. Empty head at crawl time — 5 live tests clean
3. Crawled-not-indexed — zero coupon pages in that bucket
4. Content uniqueness — AUC 0.500/0.497, both reversed
5. Internal link equity — AUC 0.456, reversed
6. Hub cannibalization — overlap identical across groups
7. Stale index — canonical shipped April 22, all crawls postdate it
8. **Micro-boilerplate** — proposed 2026-08-17, **withdrawn same day**. Peptide Stack runs `[Vendor] Promo Code: PSTACK` across every page — *more* boilerplate than PP's — and keeps its titles.
9. **Domain presence in prose** — tested 2026-08-19. Domain present on **100% of ranked pages and 96% of not-ranked**. First-sentence placement was **more** common among non-ranking pages. Rejected.

---

## 3. THE FINDING THAT DROVE THE INTERVENTION

Google's "About this result" panel for `/coupons/amino-club` on the query `amino club coupon code` stated:

> Search terms that appear in the result: **amino, club**
> A related term appears in the result: **coupons**

Google matched the vendor name and took "coupons" from the URL path — **not from the content.** The word "coupon" appeared **zero times** on the page; "promo" zero times. Only "discount," three times above the fold.

**Competitors that win the SERP repeat the terms.** Peptide Stack's snippet says the code twice and the vendor three times in two adjacent sentences.

---

## 4. THE TREATMENT (five changes)

1. Code in the H1, matching the `<title>`
2. Two prose sentences above the code card, carrying "coupon code" and "discount"
3. FAQ Q1 reads "coupon code"; Q2 stays "discount code"
4. Sentences render above the card
5. Facts line removed

**Change 2 is component-rendered** via `COUPON_SENTENCE_VENDORS` in `CouponCodeCard.tsx` — **invisible in `page.tsx` source.** This caused a real error (see §7).

---

## 5. RESULT — Round 5, 2026-08-17

**Four of five treated pages flipped** from rewritten-title/no-snippet to PP's own title with a snippet.

| Page | Round 1 (pre) | Round 5 (post) |
|---|---|---|
| amino-club | `Amino Club - Prof. Peptide`, no snippet | **own title + snippet, both queries** |
| glacier-aminos | `Glacier Aminos - Prof. Peptide`, no snippet | **own title + snippet, both queries** |
| ez-peptides | `EZ Peptides`, no snippet | **own title + snippet, both queries** |
| mile-high-compounds | `Mile High Compounds - Prof. Peptide`, no snippet | **own title + snippet, branded query only** |
| **midwest-peptide** | `Midwest Peptide`, no snippet | **UNCHANGED — still rewritten, no snippet** |

**The coupling held.** No page showed an own title without a snippet or a rewritten title with one.

**Amino Club's snippet is PP's own sentence, verbatim:**
> "Use code PROFPEPTIDE at Amino Club to save 20% on your order. The Amino Club coupon code is verified as of August 2026 and gives you a 20% discount at checkout."

---

## 6. 🔴 THE CONTROL GROUP WAS INVALID

Four pages were designated controls: almighty, spartan, royal, amino-x. **None is a usable control.**

- **spartan, amino-x** — not in the Round 1 file at all. No baseline.
- **almighty** — its only Round 1 entry is the `/coupons` **hub** ranking, not its vendor page.
- **royal** — has a valid Round 1 stripped baseline, but the ranked URL **changed between rounds** (vendor page → hub). Not a clean before/after.

**So "did untreated pages also move?" is UNANSWERED, not answered.** The treated pages' before-state is documented; the counterfactual is not.

⚠️ **Do not describe this as a controlled experiment.** Four of five treated pages moved from a documented stripped state after a specific change. That is suggestive and not proof.

---

## 7. 🔴 THE 4-OF-5 ERROR (2026-08-19)

During the 23-page rollout, both Claude and CC read `page.tsx` source, found no sentences above the card on the 7 treated pages, and concluded change #2 wasn't part of the treatment. **It is** — it's rendered by `CouponCodeCard` via a data toggle.

**Consequence:** 23 pages shipped at 4-of-5 (`76d79db`), then reached full parity hours later (`fcabfbe`) when the slugs were added to `COUPON_SENTENCE_VENDORS`.

**Both events are the same day.** If the next SERP round shows movement, that sequence matters.

**Lesson:** component-level toggles are invisible to source inspection. Check the rendered output.

---

## 8. CURRENT ROSTER STATE — 30 of 50 treated

**Treated (30):** the original 7 — amino-club, glacier-aminos, ez-peptides, midwest-peptide, mile-high-compounds, nura-peptide, capstone-peptides — plus 23 rolled out 2026-08-19.

**Untreated (20), each for a stated reason:**

| Group | Count | Reason |
|---|---|---|
| Already ranking, own title + snippet | 11 | Don't fix what isn't broken |
| Experiment controls | 4 | almighty, spartan, royal, amino-x — held despite being invalid, to avoid making the series unreadable |
| Top earner | 1 | peptide-partners — ~half of commission history, already working |
| Anti-attribution vendors | 3 | peptidology, midwest, real-peptides — need the **opposite** treatment |
| Retired | 2 | fusion-peptide, synthesis-peptides |

---

## 9. 🔴 THE ANTI-ATTRIBUTION PROBLEM

**Some vendors run public offers that beat PP's code.** For those, the code in the SERP is a free giveaway — the buyer reads it, goes direct, uses the better public offer, and PP gets no click and no attribution.

**Confirmed cases:**

| Vendor | PP rate | Public offer |
|---|---|---|
| **midwest-peptide** | 10% | `SITEWIDE30` — 30%, footer banner every page. 🔴 **PROFPEPTIDE returns "Invalid coupon code"** |
| **behemoth-labz** | 10% | Two 15% offers (review-for-code, newsletter) — gated, not banner-visible |
| **amino-club** | was 20% | `ENZGE`, `AMINOFIT` at 35% — **resolved**, PP raised to 35% through Aug 31 |
| **nura** (historical) | was 20% | Public `welcome20` matched it — 95 visits, 0 referrals. Negotiated to 25% |

**Unchecked:** purerawz (flagged 15% newsletter vs PP's 10%, never cart-verified), real-peptides, peptidology.

**The planned intervention — reveal gate.** Code removed from `<title>`, H1, sentences, FAQ, JSON-LD and OG; replaced by a reveal button → modal with the code + an affiliate link. Blocked on `/go/` tracking (§10).

---

## 10. MEASUREMENT — the gap and the fix

**PP has no on-site analytics.** No Vercel Analytics, no Plausible, no GA. Outbound links go straight to the vendor's affiliate URL, so the only record of a click is the vendor's dashboard.

**Built and parked (2026-08-19):** `/go/{slug}?from={surface}` — counts server-side, then 302s to the raw affiliate URL.

- **Guard `check:go-redirects`** — asserts the emitted `Location` equals `vendors[slug].url` byte-for-byte. **Caught 2 of 47 URLs** (amino-club, midwest) where `new URL()` would insert a `/` and mangle attribution.
- **Resilience proven** — hung KV socket and dead port both returned a correct 302 in ~13ms. A dropped count never breaks the link.
- **Blocked on:** Vercel KV provisioning (Mark's action).

⚠️ **CTR will fall on reveal-gated pages by design** — the code leaves the snippet. Success is affiliate clicks rising, not CTR.

---

## 11. WHAT'S SETTLED

- **The treatment moves presentation, not ranking.** Four of five flipped; **none changed rank.** Amino Club was #1 before and after.
- **PP ranks top-10 on only 10 of 33 surveyed vendors** on `[vendor] coupon code`. Much of the rest is entity confusion — Google resolving "AMP Peptides" to Ameano, "NOVA Labs" to Novaa Lab. Not fixable on-page.
- **Revenue context:** Amino Club has produced **117 conversions and $2,366 since June 7**. Mark observed referrals falling when its snippet disappeared. Amino Club and Peptide Partners are the two largest earners.

---

## 12. NEXT

1. Provision KV → push `/go/` → establish the affiliate-click baseline across all 50
2. Round 6 SERP observation, on a later calendar date
3. Reveal gate on the three anti-attribution vendors, once `/go/` is counting
4. Finish the public-code check — purerawz and real-peptides unchecked

---

## APPENDIX — DATA LOCATIONS

- `docs/serp-observations/` — Round 1 (28 obs) and Round 5 (26 obs) CSVs plus notes, with a README recording the invalid control group. **Rounds 2–4 exist only in a closed CINC session.**
- `docs/PP_COUPON_SALIENCE_EXPERIMENT.md` — cohorts, treatment definition, the 4-of-5 sequence
- `docs/PP_ATTRIBUTION_BASIS.md` — vendor attribution classification
