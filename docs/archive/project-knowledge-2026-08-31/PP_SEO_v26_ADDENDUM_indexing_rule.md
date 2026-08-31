# PP_SEO — ADDENDUM: THE 20-URL INDEXING RULE

**Insert at the TOP of PP_SEO, above §1.**
**Added:** August 10, 2026

---

## 🔒 RULE — NEVER SEND CINC AN INDEXING LIST SHORTER THAN 20 URLs

**Every Search Console indexing prompt must contain at least 20 URLs, ranked in priority order.**

CINC submits until Google refuses. The ceiling is a rolling window with **no counter exposed anywhere in the Search Console UI** — the only way to discover it is to submit until it rejects. So the list must be long enough that **quota is always what stops the run, never the list.**

### Why this rule exists

Lists have repeatedly been sized to roughly the expected quota, which leaves no slack. Items drop out mid-run for reasons that can't be predicted when the prompt is written:

- **The 72-hour rule** — anything crawled recently is skipped as a wasted submission
- **404s** — invented or wrong slugs (`/prices/nad`, `/prices/sema` were both Claude's errors)
- **Misclicks** — a modal covering the search box caused a duplicate submission that burned a slot
- **Already-fresh pages** — a pre-check can reveal a submission isn't worth spending

**Observed runs:** Aug 9 — 11 submitted, quota hit at #13. Aug 10 — 10 submitted, quota hit at #11 with 16 on the list. Both runs ended with unused quota *potential* and an exhausted list.

### How to build the list

**Rank by need, not by type.** Genuinely unindexed pages first, then materially-changed pages, then stale-cache recrawls, then everything else.

**Priority order:**

1. **Unknown to Google** — new pages, `Discovered – currently not indexed`
2. **Substantially rewritten** — cert passes, prose reconciliations, new sections
3. **Materially stale cached titles** — where the stored vendor count or title no longer matches what the page serves
4. **Changed metadata** — OG or canonical fixes on already-indexed pages
5. **Filler** — any indexed page not crawled in 30+ days

**⚠️ Category 5 exists purely to reach 20.** It is never wasted: if quota runs out before reaching it, nothing is lost.

### What the prompt must always include

- **At least 20 URLs**, numbered, in priority order
- **A pre-check instruction** — report indexed status, last crawl, stored title and sitemap reference per URL
- **The 72-hour skip rule** — skip anything crawled within it, and say so rather than spending
- **A verify-before-submitting instruction** for any slug Claude constructed rather than read from the sitemap or a CC report

### ⚠️ Verify slugs before they reach CINC

Two invented slugs have now reached indexing lists — `/prices/nad` (real slug `nad-plus`) and `/prices/sema` (no such page). Both wasted CINC's time and one burned a check.

**Pull price-page slugs from the live sitemap or a CC report, never from memory.**

### ⚠️ Search Console state is last-crawl, not now

Recorded separately because it keeps causing wrong diagnoses: **"No referring sitemaps" and "unknown to Google" describe Google's most recent crawl, not current reality.** Five instances to date. Before treating a GSC report as evidence of a site defect, **check the live sitemap and the live page first.**

The Aug 10 run reported four vendor pages with no referring sitemap. All four were in the live sitemap with that day's lastmod. There was no defect.

---
