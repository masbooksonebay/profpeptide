# PP Indexing — Master Ref Doc

**Version:** 19.0
**Last updated:** May 23, 2026 (post-CINC C1-C3 third resubmission + net-new audit + GSC 28d diagnostic)
**Status:** Active tracking. C1-C3 resubmission round 3 complete. June 6 escalation threshold locked. Site GROWING (not declining) per 28d aggregate.
**Supersedes:** v18 (May 17, 2026)

---

## 🎯 Headline State

- **Sitemap total:** 134 URLs (up from 129 in v18 — net +5; v18's narrative count was likely an undercount)
- **Indexed:** ~134 URLs (most net-new silently indexed on apex)
- **Active issue set:** C1-C3 (canonical-stuck-on-www, third resubmission May 23) + 1 net-new submission (retatrutide-triumph-1, Discovered-not-indexed)
- **Strategic state:** Maintenance mode + June 6 escalation pending

---

## 🔒 SETTLED FINDINGS (carried from v18 — DO NOT RE-INVESTIGATE)

[Unchanged — see v18 sections A, B, C, D, E for full detail]

**Foundational concepts (locked):** redirects not indexed; "Not indexed" count misleading; GSC 4-7 days stale; daily quota ~10-12; 4hr-past-midnight-PT buffer

**Resolved URL patterns (locked):** trailing-slash supplements/compares, /research/* deprecations, www→apex, http→https, deleted v2 drafts, old www/retatrutide 404

**Resolved one-off investigations (locked):** Calculator → /research stale signal, fusion-peptide www dashboard artifact, C1-C3 root cause (external backlinks pointing to www)

**Locked diagnostic methodologies:** pattern spot-check, live HTML verification, curl redirect verification, sample inspection

**v17 submission workflow (still current):** click textbox at coordinate (716, 38), wait ~18s, read result, Test Live URL gate, Request Indexing.

---

## 🆕 NEW SETTLED FINDINGS (v19 additions)

### F. New tracking categories — failure modes are distinct

**"Crawled, currently not indexed"** (spermidine exemplar)
- Google evaluated the page and chose NOT to index
- Distinct from "Duplicate – www chosen" (C1-C3) and "Discovered – not indexed"
- Common causes: thin content, perceived low quality, duplicate patterns, site authority too weak for category
- Not auto-submitted per quota discipline
- Worth monitoring through one cycle; if persists, audit content depth + internal linking density

**"Discovered, currently not indexed"** (retatrutide-triumph-1 exemplar)
- Google knows about the URL (via sitemap or internal link) but hasn't fetched it
- Distinct from "Crawled" (which means Google fetched and rejected) and "Duplicate" (canonical assignment issue)
- Resolves to either indexed or escalates based on next recheck
- Submission via Request Indexing pushes Google's crawl queue

### G. v18 baseline undercount (resolved)

v18 narrative count of "129 URLs" was a snapshot-time undercount. Live sitemap on May 23 shows 134 URLs. Confirmed net-new since v18: 3 URLs (particle-peptides, retatrutide-triumph-1, eco2026-oral-glp1-recap). The other 2 of the +5 delta were almost certainly in v18's actual sitemap but not enumerated in v18's narrative ship log (likely spermidine and one comparison/supplement page).

**v19 anchor: trust the live sitemap count, not narrative undercount.**

### H. C1-C3 escalation threshold (LOCKED)

If C1-C3 recheck on/around **June 6, 2026** still shows www-canonical despite the May 23 resubmission (third attempt — May 9/11, May 11, May 23), the pattern is no longer responsive to GSC submissions alone. Escalate to engineering investigation:

1. Audit canonical tag rendering on apex pages (curl + view-source with fresh query strings)
2. Audit hreflang patterns (if any)
3. Check robots.txt + meta robots tags
4. Investigate Vercel response headers (apex vs www variants)
5. Audit 301/308 redirect chain integrity
6. Consider rel=canonical via `<head>` vs HTTP header

### I. Sitemap-discovery signal inconsistency (observed)

Only 1 of 8 inspected URLs on May 23 (fda-pcac-meeting-agenda-july-2026) shows `sitemap-0.xml` as referring source. Others show "No referring sitemaps detected" or "Temporary processing error." Worth a Sitemaps tab health check next session — not blocking indexation (4/8 indexed regardless) but worth understanding the pattern.

### J. Site GROWTH framing (GSC 28d diagnostic May 23)

**The site is NOT declining.** Earlier read of the daily impressions chart was misinterpretation:

- Clicks: 2 → 26 (13× growth)
- Impressions: 228 → 6,910 (30× growth)
- CTR drop and position "worsening" are arithmetic artifacts of new pages entering the index at deep SERPs (positions 50-90), pulling down averages

**Locked framing:** Watch the absolute indexed/impressions counts trending up — do NOT use average position or average CTR as decline signals during early-growth phase.

---

## 📊 Current State (as of May 23, 2026 evening)

### Indexed status

- 134 URLs in sitemap
- 3 confirmed net-new since v18 (all on apex canonical):
  - `/coupons/particle-peptides` — silently indexed (May 7 crawl predates v18)
  - `/news/eco2026-oral-glp1-recap-may-2026` — silently indexed within ~24h
  - `/news/retatrutide-triumph-1-phase-3-results` — was Discovered-not-indexed, submitted May 23 8:06 PM

### Active issues

| URL | Status | Last submitted | Next recheck |
|---|---|---|---|
| `/coupons/ignite-peptides` (C1) | www-canonical stuck | May 23 8:03 PM | June 6 |
| `/peptides/thymosin-alpha-1` (C2) | www-canonical stuck | May 23 8:04 PM | June 6 |
| `/supplements/tongkat-ali` (C3) | www-canonical stuck | May 23 8:01 PM (first) | June 6 |
| `/news/retatrutide-triumph-1-phase-3-results` | Discovered → SUBMITTED | May 23 8:06 PM | ~May 26 |
| `/supplements/spermidine` | Crawled-not-indexed | (not submitted) | Monitor — flag if persists |

### Quota state

- Cycle (May 23 8:00 PM start): 4-5 of 12 used (worst case if triumph-1 double-counted)
- Remaining for cycle: 7-8 slots
- Quota resets ~24h rolling

---

## 📋 Forward Action Plan

### June 6, 2026 — C1-C3 escalation checkpoint

CINC read-only inspection of C1-C3:
- If apex-canonical → RESOLVED, settled finding update
- If still www-canonical → escalate per Section H protocol (engineering audit)

### Monitoring (no action required between now and June 6)

- retatrutide-triumph-1 indexation (~3-7 day window post-submission)
- spermidine status (Crawled-not-indexed — may resolve naturally or persist)
- Recurring sitemap-discovery signal inconsistency

### Deferred / lower-priority

[Unchanged from v18]
- fusion-peptide www canonical hygiene investigation (low priority)
- Backlink audit for C1-C3 (low ROI for small affiliate site)

---

## 🤝 CINC Workflow (UNCHANGED from v18)

[Unchanged — see v18 sections D, E for full submission protocol and pattern spot-check methodology]

Key locked rules:
- Read-only inspections are FREE (no quota cost)
- Test Live URL clicks are FREE
- Only successful Request Indexing submissions count toward quota
- ~10-12/24h rolling cap
- HARD STOPS for Mark approval before any submission batch
- DO NOT submit URLs without explicit Mark go-ahead

---

## 📰 Session Log

**May 23, 2026 (this session — v18 → v19):**

✅ **CINC C1-C3 third resubmission round** — tongkat-ali first (8:01 PM), ignite-peptides (8:03 PM), thymosin-alpha-1 (8:04 PM)
✅ **retatrutide-triumph-1 submitted** — Discovered-not-indexed (8:06 PM)
✅ **Phase 0 sitemap pull** — 134 URL baseline
✅ **Phase 1.5 inspections** — nmn-vs-niacin (already indexed apex, predates v18), spermidine (Crawled-not-indexed, new failure mode logged)
✅ **GSC 28d diagnostic** — confirmed site growing 30× on impressions, declining-narrative debunked
✅ **June 6 escalation threshold locked**
✅ **New failure mode tracking categories added** (Section F)

**Quota used this session:** 4-5 of 12 (worst case if triumph-1 double-click double-counted)

---

## 🔗 Cross-References

- **PP_MASTER v9** — site spec, conversion tracker, GSC diagnostic findings
- **SCS_MP v6.4** — parent doc

---

*v19 anchor for current baseline. June 6 the next required CINC trigger. Maintenance mode otherwise.*
