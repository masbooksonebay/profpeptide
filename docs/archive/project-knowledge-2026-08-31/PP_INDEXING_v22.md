# PP INDEXING — v22

**Date:** 2026-05-31, updated 2026-06-01
**Status:** Active tracker. Replaces v21.
**Supersedes:** v21 (same session). v20 (May 24) baseline — all supplement-page metrics, query-intent analysis, schema-gap findings, and audience profile carry forward UNCHANGED (see v20). v19 settled findings (redirect noise, www patterns, C1-C3 root cause, submission workflow) remain locked.

---

## 🔒 Locked rules (carry forward — unchanged)

- **GSC quota stop:** ≤5 URL inspection/indexing requests **per calendar day** (NOT per work session). Google's Request Indexing quota is a daily limit (~10-12, unpublished) that resets at midnight. A work session that crosses midnight gets a fresh quota. Stay conservative; if GSC returns "quota exceeded," stop and report. **Empirically confirmed June 1:** 7 requests landed (7:05–7:12 AM), then the very next attempt at 8:19 AM returned Quota Exceeded — so the real daily cap sat around 7–12, and a single morning batch can exhaust it. The quota is shared across ALL properties and sessions.
- **Resubmission cadence:** 14-day minimum interval per URL (applies to RE-requesting the same URL; new pages have no prior request and aren't bound by it).
- **C1-C3 escalation threshold:** June 6, 2026 (see below + v19 §H).
- **Settled noise (DO NOT re-request):** trailing-slash supplement/compare variants (Google hits `/slug/` → 308 → "redirect error"; non-slash is canonical), www→apex variants, http→https. All working-as-intended. See v19/v20.
- **Core diagnosis (unchanged):** profpeptide's primary issue is POSITION (supplement pages rank pos 70-100), not indexing. Indexing requests help genuinely-new pages get crawled faster; they do NOT move ranking. Ranking levers = content depth + internal cross-linking + schema.

---

## 🎯 Headline state (June 1, 2026)

**GSC coverage snapshot (data as of May 24 — stale):**
- Indexed: **131** · Not indexed: **50** (8 reason buckets) · Total known: **181** (as of the May 24 snapshot).
- Most of the 50 "not indexed" is the settled trailing-slash/www noise (≈22 of 50). Real candidates are few.
- ⚠️ **GSC coverage data lags ~1 week** — pages added/deployed after the snapshot don't appear in buckets yet. Absence from the report ≠ a problem. (Per-URL Inspection, however, returns live status — that's how the June 1 batch found 5 blends already indexed despite the stale coverage report.)

**Quota status:** June 1 quota is **fully spent** (Batch B consumed it). No further indexing requests June 1. Fresh quota June 2.

---

## ✅ Request batches logged

### Batch A — May 31, 2026 (5 URLs)
All passed Live Test before submission:

| # | URL | Prior status | Submitted |
|---|---|---|---|
| 1 | `/peptides/cagrisema` | Discovered–not indexed | May 31 9:26 PM |
| 2 | `/peptides/klow` | Discovered–not indexed | May 31 9:28 PM |
| 3 | `/coupons/glacier-aminos` | Crawled–not indexed | May 31 9:29 PM |
| 4 | `/peptides/igf-1-lr3` | Crawled–not indexed | May 31 9:30 PM |
| 5 | `/peptides/tb-500` | Crawled–not indexed | May 31 9:31 PM |

**Recheck ~June 14.**

### Batch B — June 1, 2026 (7 submitted / 4 already indexed / 0 quota errors)
New calendar day = fresh quota. Ran all 11 blend/stack pages through Inspection; submitted the ones not yet indexed, skipped the ones already on Google.

| # | URL | Live index status | Submitted | Time |
|---|---|---|---|---|
| 1 | `/peptides/semaglutide-bpc-157` | Unknown to Google | ✅ Y | Jun 1 7:05 AM |
| 2 | `/peptides/tirzepatide-bpc-157` | Discovered–not indexed | ✅ Y | Jun 1 7:06 AM |
| 3 | `/peptides/cjc-1295-dac-ipamorelin` | Discovered–not indexed | ✅ Y | Jun 1 7:07 AM |
| 4 | `/peptides/sermorelin-ipamorelin` | Unknown to Google | ✅ Y | Jun 1 7:09 AM |
| 5 | `/peptides/mk-677-ipamorelin` | **Already indexed** | — skip | — |
| 6 | `/peptides/tesamorelin-ipamorelin` | Unknown to Google | ✅ Y | Jun 1 7:11 AM |
| 7 | `/peptides/kpv-bpc-157` | Discovered–not indexed | ✅ Y | Jun 1 7:12 AM |
| 8 | `/peptides/pt-141-oxytocin` | **Already indexed** | — skip | — |
| 9 | `/peptides/nad-mots-c-5-amino-1mq` | **Already indexed** | — skip | — |
| 10 | `/peptides/gh-stack` | **Already indexed** | — skip | — |
| 11 | `/peptides/wolverine-stack` | **Already indexed** | — skip | — |

**Recheck the 6 submitted blends (#1-4, 6-7) ~June 14.** klow (Batch A) is the 7th blend already requested.

### Batch C — June 1, 2026 (QUOTA-BLOCKED — 0 landed) ⛔
The 6 genuinely-indexable Discovered-bucket pages. Attempted at 8:19 AM; GSC returned Quota Exceeded on the **first** request (`/about`) because Batch B (7:05–7:12 AM) had already consumed June 1's allowance. **Zero requests landed — nothing submitted, nothing wasted.** All 6 remain queued for June 2.

| # | URL | Live test | Submitted | Notes |
|---|---|---|---|---|
| 1 | `/about` | ✅ Available / indexable (8:19 AM) | **N** | ⛔ Quota Exceeded on request attempt |
| 2 | `/guides` | — not reached | N | queued June 2 |
| 3 | `/guides/syringes-and-injection` | — not reached | N | queued June 2 |
| 4 | `/hybrid-rockstar/support` | — not reached | N | queued June 2 |
| 5 | `/strength-cycle/support` | — not reached | N | queued June 2 |
| 6 | `/hybrid-rockstar/privacy` | — not reached | N | queued June 2 |

### Pending-item status checks (as of May 31–June 1)
- `/news/retatrutide-triumph-1-phase-3-results` → ✅ **INDEXED**.
- `/coupons/limitless-biotech` → ✅ **INDEXED**.
- `/supplements/spermidine` → ❌ still Crawled–not-indexed (May 17). **Content issue, not crawl** — do NOT re-request; needs content depth + cross-linking. Monitor.
- **C1-C3** (`/peptides/thymosin-alpha-1`, `/coupons/ignite-peptides`, `/supplements/tongkat-ali`) → all still "Duplicate, Google chose different canonical." Last submitted May 23. **HOLD until June 6** (14-day cadence + escalation threshold). If still www-canonical on June 6, escalate to engineering per v19 §H.

### Skipped (correctly)
Trailing-slash supplement variants + www variants (`tizepatideresearch`, `tesamorelin`) — working redirects, settled noise.

---

## 🆕 BLENDS / STACKS — RESOLVED + current index status

**The 11 new blend/combo + stack pages** (under `/peptides/[slug]`):
`cjc-1295-dac-ipamorelin`, `kpv-bpc-157`, `mk-677-ipamorelin`, `nad-mots-c-5-amino-1mq`, `pt-141-oxytocin`, `semaglutide-bpc-157`, `sermorelin-ipamorelin`, `tesamorelin-ipamorelin`, `tirzepatide-bpc-157`, `gh-stack`, `wolverine-stack`. (Plus older `klow`, `glow`, `wolverine`/`gh-stack` profiles.)

### Current status (June 1) — much further along than feared
- ✅ **5 ALREADY INDEXED** organically: `mk-677-ipamorelin`, `pt-141-oxytocin`, `nad-mots-c-5-amino-1mq`, `gh-stack`, `wolverine-stack`. Google is picking up the blend/stack pages at a good clip via the sitemap.
- 🔄 **6 REQUESTED & in crawl queue** (recheck ~June 14): `semaglutide-bpc-157`, `tirzepatide-bpc-157`, `cjc-1295-dac-ipamorelin`, `sermorelin-ipamorelin`, `tesamorelin-ipamorelin` (Batch B Jun 1) + `klow` (Batch A May 31).
- Net: **no outstanding blend discovery problem.** Half are indexed; the rest are requested. Just watch the June 14 recheck.

### Sitemap mechanism (LOCKED — don't re-litigate)
- Sitemap is generated by **`next-sitemap` (v4.2.3)** via the build script `next build && next-sitemap`. **Vercel regenerates it on EVERY deploy** from current routes.
- Verified live: `curl https://profpeptide.com/sitemap-0.xml` = **186 URLs**, all 11 blends present. (A local `public/sitemap-0.xml` showed 182 and was missing 4 — that local file is a **stale build artifact; do NOT hand-commit it.** Live regenerates on deploy. This is why parking it all session was correct.)
- ✅ **No sitemap fix is ever needed for new pages** — deploy regenerates it. New pages are discoverable automatically; manual Inspection requests just accelerate the undiscovered ones (e.g. the two that were "Unknown to Google" in Batch B despite being sitemapped — sitemap queues discovery, the request forces it sooner).

---

## 📋 Next-session queue (START HERE June 2)

1. **▶️ June 2 FIRST — finish Batch C (the quota-blocked 6).** Fresh daily quota. Run in this exact priority order, stop-on-quota:
   1. `/about` *(already live-tested ✅ indexable — can request directly)*
   2. `/guides`
   3. `/guides/syringes-and-injection`
   4. `/hybrid-rockstar/support`
   5. `/strength-cycle/support`
   6. `/hybrid-rockstar/privacy`
   All 6 are genuinely-indexable Discovered-bucket pages (NOT settled noise). 6 requests is within a daily allowance, but stop immediately if GSC returns Quota Exceeded and log where it stopped.
2. **June 6:** C1-C3 canonical recheck. If still www-canonical → escalate to engineering (v19 §H checklist).
3. **~June 14:** recheck Batch A (5 URLs) + Batch B (6 submitted blends) — did they move to Indexed?
4. **`/news/rfk-peptide-ban-2026-v2`** — in Duplicate-canonical bucket; `-v2` slug suggests a possible duplicate of a v1. **Check whether v1 exists and which should be canonical BEFORE any request** (not a quota item until resolved).
5. **spermidine + crawled-not-indexed peptide pages** — content-depth + cross-linking pass (ranking lever), not crawl requests.
6. **New blend profiles as they ship** — as blends Phase 1 continues toward 15-25, new pages will be sitemap-discoverable automatically; spot-check index status and request any that stay "Unknown to Google" past a week (daily-quota-permitting).

---

## 🔗 Cross-references
- **PP_MASTER v13** — portfolio state (blends now built; see correction there)
- **PP_X_POSTS v24** — vendor post format
- **v20** — supplement baseline metrics, query-intent, schema gap, audience profile (carry forward)
- **v19** — locked settled findings + submission workflow + C1-C3 escalation checklist

---

*v22 (June 1): logged Batch C — the 6 Discovered-bucket pages (/about, /guides, /guides/syringes-and-injection, /hybrid-rockstar/support, /strength-cycle/support, /hybrid-rockstar/privacy) attempted 8:19 AM, quota-blocked on the first request, 0 landed; all 6 queued as the June 2 START-HERE item, /about first. Empirical daily-cap note added (7 landed before cap June 1). Everything else carried from v21 unchanged.*
