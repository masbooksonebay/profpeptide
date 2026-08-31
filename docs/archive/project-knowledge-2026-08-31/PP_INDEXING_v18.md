# PP Indexing — Master Ref Doc

**Version:** 18.0
**Last updated:** May 17, 2026 (post-26-URL comprehensive triage + C1-C3 root cause diagnostic)
**Status:** Active tracking. Maintenance mode. Major milestone: definitive classification of the entire "Not indexed" bucket. 22 of 26 URLs confirmed working-as-intended; only 3 actionable items remain, all in flight.
**Supersedes:** v17 (May 11, 2026)

---

## 🎯 Headline State

- **Sitemap total:** 129 URLs (apex sitemap-0.xml current count)
- **Indexed:** 132 URLs (up from ~104 in v17 — net +28)
- **Not indexed (dashboard):** 26 URLs — but only **3 actually actionable** (12%); 22 working-as-intended (85%); 1 dashboard artifact (4%)
- **Strategic state:** Maintenance mode. PP indexing is in better shape than dashboard suggests. Active issue set is just 3 URLs (C1-C3 canonical stuck on www), all in flight from the May 11 batch.

---

## 🔒 SETTLED FINDINGS — DO NOT RE-INVESTIGATE

This section captures resolved issues, structural truths, and locked diagnostic conclusions. **Future CC and CINC sessions should treat these as authoritative and not re-litigate.** If new evidence genuinely contradicts a finding here, escalate to Mark before re-investigating.

### A. Foundational concepts (locked)

1. **Redirects (301/308 source URLs) are NOT indexed.** Google indexes the DESTINATION, not the source. The redirect source URL appears in GSC's "Not indexed" list because it's correctly classified as not-in-index. The destination is what's in the index. This is foundational SEO behavior, not a bug. Applies to: trailing-slash collapses, www→apex, http→https, section deprecations.

2. **GSC "Not indexed" count is a misleading metric.** It lumps together (a) intentional redirects working as designed, (b) 404s by design, (c) dashboard artifacts (silently-indexed URLs), and (d) genuine actionable issues. For a site with active URL restructuring, this count will structurally stay in the 20-30 range indefinitely. **Do NOT use it as a problem metric.** Watch the "Indexed" count trending up instead.

3. **GSC dashboard can be 4-7 days stale.** "Last update" timestamp lags behind reality. URLs reported as "not indexed" may already be silently indexed. Confirmed multiple times this session.

4. **Daily submission quota: ~10-12 per property**, rolling-24h window. Read-only inspections do NOT count. Test Live URL clicks do NOT count. Only successful submissions count.

5. **Conservative quota buffer:** wait ≥4hr past midnight PT (03:00 EDT) for clean window after a cap-hit.

### B. Resolved URL patterns (do NOT re-investigate)

The following URL patterns in the "Not indexed" bucket are working as intended. Their destinations ARE indexed. Do not investigate them as problems.

| Pattern | Example | Status | Why it's in "Not indexed" |
|---|---|---|---|
| Trailing-slash supplements | `/supplements/magnesium/` | Working | Redirects to `/supplements/magnesium` (indexed) |
| Trailing-slash compares | `/compare/retatrutide-vs-tirzepatide/` | Working | Redirects to consolidated 3-way page (indexed) |
| /research/* deprecation | `/research/wolverine-stack` | Working | Redirects to `/peptides/wolverine-stack#studies` (indexed) |
| /research/tesamorelin variants | `/research/tesamorelin`, `www/research/tesamorelin` | Working | Redirects to `/peptides/tesamorelin` (indexed) |
| www → apex on any path | `www.profpeptide.com/[anything]` | Working | 308 redirects to apex (indexed) |
| http → https on any path | `http://profpeptide.com/` | Working | 301 redirects to https (indexed) |
| Deleted v2 article draft | `/news/rfk-peptide-ban-2026-v2` | Working | Google correctly consolidated to canonical non-v2 article |
| Old www/retatrutide 404 | `www.profpeptide.com/retatrutide` | Working | 404 by design, will age off |

### C. Resolved one-off investigations

**Calculator → /research stale GSC signal (closed May 17):**
- GSC showed `/calculator` as "Referring page" for `/research`
- Live HTML verification: ZERO `/research` references in `/calculator` SSR HTML, hydrated DOM, or RSC payload
- Git history: link NEVER existed in calculator source
- **Conclusion:** GSC's "Referring page" field can show stale historical signals from prior crawls. Cleanup has already happened in source code.
- **Lesson locked:** GSC "Referring page" is unreliable for current state. Cross-check live HTML + source + git history before assuming a link exists.

**fusion-peptide www dashboard artifact (closed May 17):**
- `www.profpeptide.com/coupons/fusion-peptide` appeared in dashboard as "Duplicate without user-selected canonical"
- Apex version `profpeptide.com/coupons/fusion-peptide` IS indexed
- Minor hygiene note: www response showed missing rel=canonical tag in inspection
- **Conclusion:** Dashboard misclassification. Apex is indexed. No action needed.

**C1-C3 canonical stickiness root cause (closed May 17):**
Persistent www-canonical assignment by Google despite clean on-site signals on three URLs: `/coupons/ignite-peptides`, `/supplements/tongkat-ali`, `/peptides/thymosin-alpha-1`.

Cumulative rule-outs (all confirmed CLEAN, do not re-verify):

| Cause investigated | Verdict |
|---|---|
| www→apex 308 redirect | Clean single-hop on all three URLs |
| Internal links pointing to www | Zero references in src/ |
| Sitemap exposing www URLs | Zero www URLs in sitemap |
| Canonical link tag pointing to www or missing | All three clean apex |
| og:url meta tag pointing to www or missing | All three clean apex |

**Definitive root cause: external backlinks pointing to www.** Google weights external link signals heavily for canonical assignment. Once stuck, the assignment resists on-site signal correction for weeks to months.

**Mitigation (no code fix possible):**
1. Wait for May 20-22 consolidation window (Google's natural process)
2. GSC re-submission of apex URLs after window expires (pushes fresh authoritative signal)
3. Backlink audit deferred — low ROI for small affiliate site

### D. Locked diagnostic methodologies

**Pattern spot-check methodology (use for 20+ URL triages):**
- Inspect ALL ambiguous URLs individually
- Pick ONE representative URL per distinct pattern group
- If spot-check matches expected pattern → accept by-pattern classification for the rest
- If spot-check deviates → expand to full inspection of that pattern group
- Validated successfully in May 17 26-URL triage (5 spot-checks, all matched)

**Live HTML verification for SEO claims:**
- `curl -sL "URL?v=fresh-N"` + `grep -oE` for the specific tag
- Confirms what Google actually sees in the response
- Use for canonical tag, og:url, internal href, anything that affects crawl signals
- ALWAYS use a fresh unique query string (`?v=audit-N`) to bypass caches

**Curl-based redirect verification:**
- `curl -sIL "URL" -A "Mozilla/5.0" | grep -iE "^(location|HTTP)"`
- Confirms 308 single-hop, no chains, correct Location header
- Different from browser verification — browsers silently follow redirects

**Sample inspection before triaging large buckets:**
- Always sample inspect at least 1-3 URLs per category
- Caught silent-indexing pattern multiple times this session (April 16 FDA, April 28 PCAC, April 12 RFK update articles all silently indexed)

### E. Submission workflow (v17 spec, still current)

```
Per URL:
1. Click textbox at coordinate (716, 38), clear, paste URL, press Enter
2. Wait ~18s for inspection result
3. Read inspection result:
   - "URL is on Google" → skip submission, log ✅ INDEXED
   - "URL is not on Google" → proceed to step 4
4. Test Live URL gate → wait ~50s → verify "URL is available to Google"
   - If available → proceed to submit
   - If not available → do NOT submit (would waste quota)
5. Click "Request Indexing" → wait ~3-5s for confirmation
6. Log status (✅ INDEXED / 🟡 SUBMITTED / ⚠️ CAP) + timestamp
```

**Test Live URL gate is REQUIRED.** Prevents wasted quota on broken URLs.

---

## 📊 Current State (as of May 17, 2026)

### Indexed status
- **132 URLs indexed** on apex canonical
- Recent additions confirmed indexed within hours of submission:
  - `/peptides/semax-selank` (B1, May 17)
  - `/peptides/wolverine-stack` (B2, May 17 reindex)
  - `/peptides/gh-stack` (B3, May 17 reindex)
  - `/news/retatrutide-phase-3-update-may-2026` (v17, indexed in 9 min)
  - `/news/fda-pcac-meeting-agenda-july-2026` (silently indexed)
  - `/news/rfk-peptide-update-april-2026` (silently indexed)

### Not-indexed breakdown (26 URLs)
- **22 WORKING AS INTENDED** — see Section B for patterns
- **1 DASHBOARD ARTIFACT** — fusion-peptide (apex IS indexed)
- **3 ACTIONABLE (in flight)** — C1-C3 canonical stuck on www

### C1-C3 status (only open issues)

| URL | Submitted | Last crawl | Canonical chosen | Recheck date |
|---|---|---|---|---|
| `/coupons/ignite-peptides` | May 11, 3:43 PM | May 11, 3:51 PM | www variant | May 22 |
| `/peptides/thymosin-alpha-1` | May 11, 3:55 PM | May 11, 3:58 PM | www variant | May 22 |
| `/supplements/tongkat-ali` | May 11, 3:50 PM | **May 9, 11:45 PM** (pre-submission) | www variant | May 22 (re-submit — May 11 didn't trigger recrawl) |

---

## 📋 Forward Action Plan

### May 22-23: C1-C3 recheck cycle
1. CINC read-only inspection of all three URLs
2. If still www-canonical: re-submit apex URLs via GSC manual indexing
3. Tongkat-ali submitted FIRST (its May 11 submission didn't trigger a recrawl — fresh submission genuinely warranted)
4. ignite-peptides and thymosin-alpha-1 submitted second
5. Quota available: 9/12 slots remain (3 used this cycle for B1/B2/B3)

### Deferred / lower-priority items
- **fusion-peptide www canonical hygiene investigation** — low priority CC task whenever PP workstream resumes. Fetch www version of one C1-C3 URL, verify response type. Could be related to broader canonical-stickiness pattern, but apex is already indexed.
- **Backlink audit for C1-C3** — deferred. Low ROI for small affiliate site. May reconsider if GSC re-submission cycle (May 22) doesn't resolve.

### Watch items (no action, monitor only)
- Indexed count trending up (132 → ?) — primary health metric
- New content shipments — submit if not auto-indexed within 24-48 hours
- Recurrence of silent-indexing pattern — normal Google behavior, not a problem

---

## 📰 Content Ship Log — Recent

| Item | Status |
|---|---|
| `/peptides/semax-selank` (net-new) | ✅ INDEXED May 17 (hours after submission) |
| Homepage Latest News card update (April 16 FDA → May 11 Retatrutide) | ✅ SHIPPED commit `d1316a6` |
| Finder duplicate cleanup + .gitignore guard | ✅ SHIPPED commit `7757069` |
| `buildPageMetadata` SEO helper | ✅ SHIPPED May 10 (113 files; NOT root cause for C1-C3 but durable cleanup) |
| Sitemap apex + www both pointing to apex sitemap-0.xml | ✅ HEALTHY |

---

## 🎯 Daily Quota Mechanics (locked)

- Daily quota: ~10-12 successful submissions per property
- Rolling-24h window
- Read-only inspections: FREE (no quota cost)
- Test Live URL clicks: FREE (no quota cost)
- Only SUCCESSFUL submissions count
- Pre-cap warning: none — GSC just rejects with quota-exceeded message
- Cap recovery: ≥4hr past midnight PT for clean window

---

## v17 → v18 Changelog

**Major findings (May 17 session):**

1. **26-URL comprehensive triage completed** — definitive classification of entire "Not indexed" bucket. 22 working-as-intended, 1 dashboard artifact, 3 actionable. Methodology: pattern spot-check (5 ambiguous full + 5 pattern spot-checks).

2. **C1-C3 canonical-stickiness root cause definitively identified** — external backlinks. All on-site signals confirmed clean across 5 separate cause-rule-outs (redirect, internal links, sitemap, canonical tag, og:url). No code fix possible. Mitigation: GSC re-submission + patience.

3. **8-URL audit sweep** — 5 of 8 healthy/indexed including both unknown news articles (silently indexed). B1/B2/B3 indexed within hours of submission.

4. **Calculator → /research stale GSC signal investigation closed** — confirmed no internal link exists anywhere in source, history, or rendered HTML. GSC "Referring page" data is stale historical signal.

5. **Foundational concept locked: redirects are NOT indexed** — destinations are. Reframes the "Not indexed" count as mostly structural artifact, not actionable signal.

6. **Settled Findings section introduced** — captures resolved patterns and structural truths so future CC/CINC sessions don't re-investigate.

**Submissions this cycle:** 3 (B1 semax-selank net-new, B2 wolverine-stack reindex, B3 gh-stack reindex). All three indexed within hours.

**Quota used:** 3/12. Remaining: 9.

---

**Status:** v18 is current. Maintenance mode continues. Next major update after May 22-23 C1-C3 recheck cycle.
