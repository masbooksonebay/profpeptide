# Hybrid Rockstar (HR) — Master Ref Doc

**Status:** ACTIVE REFERENCE — single-doc format
**Version:** v4 (May 20, 2026 evening) — Apple Review pending + Memorial Day weekend slowdown context + v1.0.1 prep queued
**Cross-referenced in:** SCS_MP v6.2

---

## 📍 Status Snapshot (May 20, 2026 evening)

**APP STATE:** v1.0.0 in Apple Review since yesterday evening (~24+ hours in as of session end)

**REVIEW WINDOW:** Apple's standard 24-48h, currently extended due to **Memorial Day weekend reviewer capacity reduction** (US-based App Review team scales down Thursday-Friday before the May 26 holiday)

**EXPECTED VERDICT:** Tuesday morning (May 27) at latest, unless something needs Mark's action

**TRADEMARK CONSTRAINT:** "Hyrox" confirmed as registered trademark — never appears in HR branding

---

## ⏳ Apple Review Tracking

### Submission state
- Submitted: yesterday evening (May 19, ~7-8 PM CST)
- Current status: "In Review" or "Waiting for Review" (Mark to verify in ASC)
- Time in queue: ~24+ hours as of session end

### When to escalate concern
| Time in queue | Action |
|---|---|
| 24-48h | Standard window — no action |
| 48-72h | Long tail of normal, no action |
| **>72h** | Check ASC for "Communication" or "Resolution" notification; status change beyond "In Review" |
| >7 days | Contact Apple Developer Support |

### Memorial Day weekend factor
Apple's US-based App Review team historically reduces capacity Thursday-Friday before the long weekend (Memorial Day = Monday May 26, 2026). Submissions hitting the queue late in the week often delay past the usual ~24h window. HR submitted yesterday evening = right on the edge of that reduced-capacity zone.

---

## 🚀 v1.0.1 Prep Queue (post-approval)

When v1.0.0 approval lands:

### Workstream 1: Cloudflare Email Routing
- Domain: hybridrockstar.app
- Email: feedback@hybridrockstar.app → markshurtliff@gmail.com (likely; confirm convention with Mark)
- Sets up real feedback channel from the in-app email link

### Workstream 2: In-app feedback email update
- Currently: `.shop` (legacy)
- Target: `.app` (correct domain)
- Single string swap in app config
- Ship as part of v1.0.1

### v1.0.1 scope summary
- Cloudflare Email Routing live
- Feedback email .shop → .app
- Any minor bug fixes surfaced during initial user usage
- TestFlight → production submission via EAS

---

## 📦 Wave 3 Programming State (LOCKED — UNCHANGED THIS SESSION)

### Wave 3D v5 committed as `07c5146` (prior session)
- Phase 1-6 + 3 fixes
- leadingEdgeWeek algorithm
- COMPLETE predicate
- Up Next Option A walk-forward
- Race date is informational only; leadingEdgeWeek drives CURRENT in both race and no-race modes

### Three-card visual treatment (locked)
- CURRENT: blue accent, active
- COMPLETE: green checkmark (deliberate visual hierarchy — green = week-level on Train screen; blue = session-level on Week Detail screen)
- NEUTRAL: gray

### Wave 3E queued (post-v1.0.1)
- Splash screen bug fix (sim shows SC instead of HR on refresh)
- Transparent-bg fix
- expo-store-review prompt integration

### Wave 3F queued (achievements/badges system)
- First workout, first block, first cycle milestones
- 10/25/50 workout milestones
- 7-day streak badge

### v1.1 deferred
- Apple Health integration

---

## 🛠️ Workflow Notes

### CINC App Store Connect pause discipline
- Mandatory pauses before submit + before "Release This Version" click
- Submission and verification must NOT be chained automatically
- CINC must NEVER click any "Release This Version" button — always Mark's call

### Organic review acceptance
- Friends/family reviews acceptable IF not coordinated, templated, or incentivized
- Sample reviews come in naturally as users discover the app

---

## 📅 Changelog

**May 20, 2026 (this session — v3 → v4):**
- ⏳ **Apple Review status:** ~24+ hours in, pending verdict
- ✅ **Memorial Day weekend lag context captured** — expected delay Thursday-Tuesday window
- ✅ **Escalation criteria locked:** 24-48h standard, 48-72h long tail, >72h check ASC, >7 days contact Apple
- ✅ **v1.0.1 prep queue captured:** Cloudflare Email Routing + .shop→.app feedback email swap

**Prior session entries:** unchanged. See v3 history.

---

## 🎯 Next Milestones (Sequential)

1. **Apple Review verdict** — monitor ASC, expect by Tuesday morning May 27 at latest
2. **v1.0.0 release** (if approved) — Mark's manual "Release This Version" click only
3. **Cloudflare Email Routing setup** for hybridrockstar.app (CINC prompt similar to Capstone pattern)
4. **v1.0.1 build** — .shop → .app email + feedback channel + any bug fixes
5. **TestFlight cycle** for v1.0.1
6. **v1.0.1 App Store submission**
7. **Wave 3E** — splash screen bug + transparent-bg + expo-store-review
8. **Wave 3F** — achievements/badges system

---

## 🔗 Cross-References

- **SCS_MP v6.2** — parent doc; HR sim handoff rules, EAS upload rule (working tree, not git history)
- **SC_MASTER_ACTIVE v5.8** — sibling iOS app reference

---

*Active tracker for HR iOS app. Updated as review states change, waves ship, milestones complete.*
