# PP_INDEXING — v23 Addendum (July 21, 2026)

**Status:** ACTIVE drop-in. CORRECTS the quota rule in PP_INDEXING v22 (governing). Append/version into v22.

---

## 🔧 CORRECTED QUOTA RULE (supersedes v22's "≤5 / ~7-12" figure)

**The GSC Request Indexing daily quota is 11 submissions per calendar day.** (Confirmed figure — supersedes v22's conservative "~5-12, stay under 5" guidance, which under-counted and left quota on the table.)

Key mechanics:
- **The cap is 11 ACTUAL Request-Indexing SUBMISSIONS per day.** Resets at midnight. Shared across all properties and sessions.
- **Already-indexed pages do NOT count against the quota.** URL Inspection is free — inspecting a page, finding it already indexed with a recent crawl, and SKIPPING it costs zero quota. Only clicking "Request Indexing" on a not-yet-indexed page consumes one of the 11.
- **Therefore: queue MORE than 11 URLs.** Because inspected-but-already-indexed pages are free skips, a batch should start from a queue larger than 11 (e.g. 20) and work down — CINC inspects each, skips the already-indexed ones (free), and submits the rest until 11 submissions have landed. Stopping at 11 queued URLs wastes the free skips.
- **Workflow:** CINC inspects + reports + pauses; **Mark clicks "Request Indexing"** (state-changing — CINC never clicks it). CINC keeps advancing the queue until 11 submissions land OR GSC returns "Quota Exceeded," then stops and reports which landed / which were free-skipped / which remain for tomorrow.

**Net rule change:** OLD = "≤5/day, stay conservative." NEW = "**11 submissions/day; already-indexed pages are free and don't count; queue 20, submit until 11 land.**"

## Favicon note (unchanged, restated)
Requesting indexing on the HOMEPAGE is the right lever for a SERP favicon refresh (that's where Google reads the favicon `<link>` tags), but the SERP favicon cache updates on Google's own schedule — the request nudges the recrawl but won't force an instant favicon flip.
