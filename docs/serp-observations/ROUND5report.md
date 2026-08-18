# CINC SERP Observation — Round 5 (standalone, absolute state)

**Environment:** Signed-out incognito · default parameters, no `num=` · Google US / English (`hl=en&gl=us`) · screenshot **and** text extraction on every SERP · full page-1 top-10 confirmed before recording "absent."
**Round window:** 2026-08-18 02:46 → 02:58 UTC (2026-08-17 22:46 → 22:58 EDT). First round run on a later date than Rounds 1–4.
**Session note:** This is a fresh session with **no Rounds 1–4 file and no Round 4 baseline** available. Everything below is Round 5 absolute state only. Claims about prior rounds (the "112/112" coupling, "all 5 treated were rewritten") are **your stated baseline, unverified here** — do not treat my report as confirming them.

---

## Headline results

**1. Does the title/snippet coupling still hold? — YES, zero exceptions this round.**
Across all 26 observations, every ProfPeptide (PP) result that appeared fits the rule: **own descriptive title → snippet present; rewritten short title → no snippet.**
- No page showed an **own title WITHOUT a snippet.**
- No page showed a **rewritten title WITH a snippet.**
- So no "first exception" appeared. The coupling is intact in Round 5.

**2. Do any TREATED pages now show PP's own title? — YES, 4 of the 5 do (on at least one query).**
Against your stated prior baseline (all 5 treated pages = rewritten title + no snippet in every prior round), this round shows a clear shift:

| Treated page | Query A ("… coupon code") | Query B ("… discount code prof peptide") |
|---|---|---|
| Amino Club | **OWN + snippet** | **OWN + snippet** |
| Glacier Aminos | **OWN + snippet** | **OWN + snippet** |
| EZ Peptides | **OWN + snippet** | **OWN + snippet** |
| Mile High Compounds | absent from top 10 | **OWN + snippet** |
| Midwest Peptide | REWRITTEN ("Midwest Peptide") + no snippet | REWRITTEN ("Midwest Peptide") + no snippet |

- **Amino Club, Glacier Aminos, EZ Peptides** now show the own descriptive title + snippet on **both** queries.
- **Mile High Compounds** shows own title + snippet on query B; on query A its result did not make the top 10 at all.
- **Midwest Peptide** is the lone treated holdout — still the rewritten short title "Midwest Peptide" with no snippet, on the `/coupons/midwest-peptide` URL, on both queries.

**Important interpretive caveat (don't over-read):** "own title + snippet" is **not unique to treated pages** this round — the untreated controls (Almighty, Spartan, Amino X) and untreated non-controls also show own title + snippet. So the treated group is *converging toward the same appearance the untreated group already has*. Whether that is the Aug-16 treatment taking effect or ordinary Google title-rewrite volatility cannot be separated from a single round without the Round 1–4 baseline you hold. Midwest not moving, and Mile High only appearing on the branded query, both argue for caution.

---

## Treated vs. untreated summary (Round 5 absolute)

| Group | Own title + snippet | Rewritten + no snippet | Absent from top 10 |
|---|---|---|---|
| **Treated** (5 vendors, 10 obs) | Amino Club A/B, Glacier A/B, EZ A/B, Mile High B (7 obs) | Midwest A/B (2 obs) | Mile High A (1 obs) |
| **Untreated** (4 vendors, 8 obs) | Ameano B, Modern Aminos B, Peptide Partners A/B, PureRawz B (5 obs) | — none | Ameano A, Modern Aminos A, PureRawz A (3 obs) |
| **Controls** (4 vendors, 8 obs) | Almighty A/B, Spartan A/B, Amino X A/B, Royal B (hub only) (7 obs) | — none | Royal A (1 obs) |

**Query effect:** On query A (`[vendor] coupon code`), PP is absent from the top 10 for several vendors (Mile High, Ameano, Modern Aminos, PureRawz, Royal). On query B (`[vendor] discount code prof peptide`), PP surfaces at rank 1 for almost every vendor — the branded "prof peptide" term pulls it up reliably, as expected.

**URL-type note:** Rewritten-title Midwest renders on the `/coupons/<slug>` path. But `/coupons/<slug>` alone does **not** cause the rewrite — Modern Aminos (B) and PureRawz (B) also render on `/coupons/<slug>` yet show the **own** title + snippet. Most own-title results show the `profpeptide.com › Discount Codes` breadcrumb. Midwest is the anomaly, not the URL form.

**Royal Peptides (control, "not recrawled since submission"):** No dedicated Royal PP coupon page appeared in either query's top 10. Query A: PP absent. Query B: only the `/coupons` hub ranked (~#5), with its own title + snippet listing code PROF10.

**Codes:** Most vendor pages use `PROFPEPTIDE`. Two exceptions observed: **PureRawz** and **Royal Peptides** pages use **`PROF10`**.

---

## ⚠️ Count discrepancy — please reconcile
Your brief says **14 pages / 28 observations**, but the vendor list you provided contains **13 vendors** (5 treated + 4 untreated + 4 controls), which is **26 observations**. I ran all 13 × 2 = 26 and did **not** invent a 14th page. If a page is missing from the list, tell me its slug + display name and I'll run its two queries to close the gap.

Full per-observation detail (rank · PP URL type · exact title · own/rewritten · snippet · code-in-snippet · Missing-notice · AI Overview · code-in-AIO · top competitor) is in `serp-round5.csv`.
