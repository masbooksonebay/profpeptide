# PP_BRANDED_SEARCH_VOLUME_2026-07 — provenance & interpretation

Companion to `PP_BRANDED_SEARCH_VOLUME_2026-07.csv`. Kept separate so the CSV stays
machine-parseable for the downstream suite.

## Pull parameters
- **Source:** Google Ads **Keyword Planner → Plan historical metrics** (NOT forecasts).
- **Plan:** "Plan from Jul 24, 2026, 11 AM GMT-07:00".
- **Date range:** July 2025 – June 2026 (last 12 months; CSV row 2 reads "July 1, 2025 - June 30, 2026").
- **Network:** Google.
- **Geo / language:** United States, all languages.
- **Pulled:** 2026-07-24.
- **Scope:** 80 keyword rows across the 16 vendor brand terms (5 branded queries each:
  `<brand>`, `<brand> coupon`, `<brand> coupon code`, `<brand> discount code`, `<brand> review`).

## What the numbers mean
- **This is available brand DEMAND, not captured traffic.** Volume is what people search
  for the brand — not what any site received.
- **Volumes are ranges (no ad spend on the account).** Keyword Planner reports bucketed
  ranges when there's no active spend; the CSV encodes each bucket as a round number, not
  the literal "10K – 100K" string seen in the web UI. Bucket mapping:

  | CSV `Avg. monthly searches` | Range bucket |
  |---|---|
  | `50000` | 10K – 100K |
  | `5000`  | 1K – 10K |
  | `500`   | 100 – 1K |
  | `50`    | 10 – 100 |
  | `5` / `0` | 0 – 10 / no data |

## Calibration anchors (what makes the ranges interpretable)
These tie the bucketed KP demand to actual captured traffic (GSC), so the ranges can be
read as "available vs. what we're getting":

- **Amino Club** — KP `50000` (**10K–100K** available) vs **6,935** actual GSC
  impressions / 28d. High demand, partially captured.
- **Ascension** — KP `5000` (**1K–10K** available) vs **2** actual GSC impressions.
  Real demand exists; essentially none captured.

## Baseline note
Each pull gets its own dated file (this is `2026-07`). Do **not** overwrite — future pulls
land as `PP_BRANDED_SEARCH_VOLUME_YYYY-MM.csv` so trend/delta comparisons stay possible.
