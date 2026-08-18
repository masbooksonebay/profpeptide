# SERP observations — Prof. Peptide coupon pages

Reference data. Manual Google SERP observations of Prof. Peptide's `/coupons/<vendor>`
pages, run as an ongoing coupon-salience experiment (see
`docs/PP_COUPON_SALIENCE_EXPERIMENT.md` for the experiment design). Two queries per
vendor per round:

- **Query A** — the vendor's coupon/discount code term
- **Query B** — a Prof-Peptide-branded discount query (e.g. "discount code prof peptide")

Each observation records whether a PP URL appears in the top 10, its rank, whether the
title is PP's own or a Google-rewritten one, whether a snippet renders, whether the code
or percentage reached the snippet, AI-overview presence, and the top competitor.

## Files

| File | Round | Rows | What it is |
|---|---|---|---|
| `round1_table.csv` | Round 1 (Aug 15 2026) | 28 observations | structured per-observation table |
| `round1.md` | Round 1 (Aug 15 2026) | per-observation notes | prose notes backing the table |
| `serpround5.csv` | Round 5 (Aug 17 2026) | 26 observations | structured per-observation table |
| `ROUND5report.md` | Round 5 (Aug 17 2026) | notes/summary | prose report for Round 5 |

Filenames are preserved exactly as recorded (Round 5 was captured under a different naming
convention than Round 1). A redundant redownload, `ROUND5report (1).md`, was byte-identical
to `ROUND5report.md` and was **not** committed.

## Locked observation environment

Every SERP was captured under the same fixed conditions:

- **Signed-out, incognito** browser session
- **Default search parameters** (no personalization, no custom filters)
- **US / English** locale
- **Screenshot + text capture** for each SERP
- **Full top-10 confirmed** before recording a page as `absent` — "absent" means verified
  not-in-top-10, not merely not-seen

## Provenance and gaps — READ BEFORE ANALYSIS

- 🔴 **Rounds 2, 3, and 4 are NOT in this repo.** They exist only in the chat history of a
  now-closed CINC session and were never exported. This dataset is Round 1 and Round 5 only.
- 🔴 **Round 5 was recorded standalone, with no baseline available at capture time.** The
  Round 1 ↔ Round 5 comparison below is reconstructed after the fact from these two files;
  the intermediate trajectory (Rounds 2–4) is unavailable.

## The Aug 16 2026 treatment

Five coupon pages received a five-part change on Aug 16 2026:

`amino-club`, `glacier-aminos`, `ez-peptides`, `midwest-peptide`, `mile-high-compounds`

- **Round 1 (before):** all five showed a Google-**rewritten** title with **no snippet** on
  their vendor page — confirmed in `round1_table.csv`.
- **Round 5 (after):** **four of the five** show PP's **own** title **with a snippet**.
  **`midwest-peptide` did not flip** — it still shows a rewritten title and no snippet in
  Round 5, despite having the same page structure as the four that flipped.

This is an observational before/after on five pages, not a controlled result — see below.

## 🔴 The control group is not valid — "did untreated pages also move?" is UNANSWERED

The experiment designated four untreated controls: `almighty`, `spartan`, `royal`,
`amino-x`. For a control to answer "did untreated pages move on their own," each needs a
Round 1 baseline showing its vendor page in the same stripped state (rewritten title, no
snippet) that the treated pages started from. Checking `round1_table.csv`:

- **`spartan` and `amino-x`** — **absent from Round 1 entirely.** No baseline.
- **`almighty`** — its only Round 1 entries are Query A (not in top 10) and Query B ranking
  the **`/coupons` hub**, not the almighty vendor page. **No vendor-page-stripped baseline.**
- **`royal`** — the exception: Round 1 **does** capture its vendor page stripped (Query B,
  `/coupons/royal-peptides` at ~#3, rewritten title, no snippet). But in Round 5 the ranked
  Query B result is the **hub** title, not the same vendor-page URL — so even royal is not a
  clean same-URL before/after.

**Net: three of the four designated controls have no usable baseline, and the fourth
(royal) changed which URL ranked between rounds.** So the question "did untreated pages also
move?" is **unanswered, not answered.** The four-of-five treatment flip must **not** be read
as causally established — there is no valid control arm in this data. Record any conclusion
accordingly.

*(Note: this corrects an earlier framing that all four controls lacked a baseline — royal
actually has one; it is just not a same-URL comparison.)*

## Build isolation

This folder is reference data only. Nothing in the build reads it: `next build`,
`next-sitemap`, and `tsc` do not glob `docs/` (the only `docs/` path any script references is
the exact file `docs/PP_PRICE_DATA_MASTER_v1.md`), and `.csv` / `.md` files are never
compiled or bundled. Adding files here has no live surface.
