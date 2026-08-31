# PP_INDEXING v24
**Supersedes v23. Updated 2026-08-19.**

---

## 1. 🔴 THE QUOTA IS 10, NOT 11

Observed 2026-08-16 and confirmed 2026-08-18. Nine submissions plus one accidental duplicate hit the ceiling; the eleventh URL returned **Quota Exceeded**.

⚠️ **A duplicate resubmission consumes a slot.** Google dedupes for ranking purposes but the quota still counts the attempt.

**CINC submits.** It does not pause for confirmation on indexing requests.

---

## 2. 🔴 GSC REFLECTS LAST CRAWL, NOT NOW

**This has produced five false alarms in one week.** Every one looked like a live defect and wasn't.

| Reading | Assumed | Actually |
|---|---|---|
| `/prices/na-selank` "unknown to Google — no referring sitemaps" | Missing from the sitemap | In the live sitemap. One day old, not yet crawled |
| `/peptides/bpc-157` "Duplicate without user-selected canonical" | Missing canonical tag | Canonical renders correctly, class-wide. Stale from an Aug 7 crawl |
| Amino Club showing "50% off storewide" in a SERP | Rate drift, possibly transposed with Ascension | Stale Google cache; the string lives on Ascension's page where it's correct |

**The rule: before treating any GSC or SERP reading as a live defect, verify against the artifact.** Curl the sitemap. Curl the page. Check the last-crawl date against when the page changed.

⚠️ A page under ~48 hours old reporting "unknown to Google" means **not yet crawled**, not missing.

---

## 3. WHAT'S WORTH SUBMITTING

Quota is scarce. Spend it on pages where the change is **substantial** and the page is **commercially important**.

**Worth it:** new indexable pages · price grids that gained or lost a vendor · a new article · a page whose visible content materially changed.

**Not worth it:** a derived value that renders the same number · a nav change · a layout reorder that doesn't alter the text · anything CC has proven byte-identical.

⚠️ Resubmitting alone never fixes a snippet. It makes Google re-read a page. If the page hasn't changed, the result won't either.

---

## 4. THE EXPERIMENT PAGES — do not resubmit

Eleven URLs are in the salience series — seven treated, four controls. **Resubmitting them distorts the crawl timing the test depends on.**

⚠️ Amino Club is the exception: resubmitted 2026-08-18 after its rate changed to 35%, which is a real content change.

**Baselines recorded 2026-08-16 before submission**, in `docs/serp-observations/`. All eleven recrawled by Aug 17 — seven treated in an 8:13–8:29 PM window on Aug 16, midwest at 1:48 AM the 17th.

⚠️ **Two controls recrawled in the same window as the treated set.** A broad crawl swept part of the site that evening, which weakens the timing comparison further.

---

## 5. THE MEASUREMENT TRIGGER

**The event is the recrawl, not a calendar date.**

Google's documentation says a requested recrawl can take days to weeks, and **reprocessing lags the crawl** — one observed case showed 19 hours between a correct crawl and a corrected snippet.

**So: check last-crawl daily. When a URL's date advances, that page is ready to observe on the *next* check, not the same day.**

⚠️ URL Inspection is free. Only Request Indexing consumes quota. Daily inspection of a watch list costs nothing.

---

## 6. SCHEDULED CINC TASKS

**Daily, mid-morning** — inspect the eleven experiment URLs, report only those whose last-crawl advanced. If none moved, one line.

⚠️ Both scheduled tasks depend on the browser being open and logged into GSC. They report "couldn't reach GSC" rather than failing silently.

⚠️ **Decide an end condition.** After a week of "none moved" it becomes noise. Suggested: stop once all eleven have recrawled, or after 21 days.

---

## 7. OUTSTANDING

- **`/prices/tb-500`** — hit Quota Exceeded 2026-08-19, never submitted
- **`/coupons`** — hit Quota Exceeded 2026-08-18, never submitted
- **`/prices/peg-mgf`** — "Crawled, currently not indexed." Google visited and declined. It's a cta-only page with no profile; a parent-profile link shipped 2026-08-19. Recheck in a week rather than acting now.

---

## 8. THE 30-PAGE TREATMENT — not yet submitted

23 coupon pages received the full salience treatment on 2026-08-19 (`76d79db` then `fcabfbe`). **None has been submitted for indexing.**

⚠️ Worth deciding whether to submit them at all. Google will recrawl on its own, and 23 pages is more than two days of quota. The pages that matter most commercially would be the ones to spend it on.
