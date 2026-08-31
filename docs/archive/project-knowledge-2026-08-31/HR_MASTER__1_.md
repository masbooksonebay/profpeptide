# Hybrid Rockstar — Master Ref Doc

**Version:** v3 (May 19, 2026 evening)
**Status:** ACTIVE — single doc structure (frozen + active sections combined for HR until codebase complexity warrants split)
**Source:** Updated from v2 (May 16, 2026) — Wave 3D v5 → Wave 3E shipped + app submitted to Apple Review
**Cross-referenced in:** SCS_MP v6.1

---

## v2 → v3 CHANGELOG

**Major milestone:**
- ✅ **HR v1.0.0 SUBMITTED TO APPLE REVIEW** (24-48h window from earlier this session)

**Wave 3D v5 (committed `07c5146`, May 16):**
- Phase 1-6 complete + 3 fixes (leadingEdgeWeek + COMPLETE predicate + Up Next Option A walk-forward)
- Three-card visual treatment (CURRENT / COMPLETE / NEUTRAL)
- Green checkmark for completed week cards (intentional, distinct from blue session-level completion indicators on detail screen)
- Race date now informational only; leadingEdgeWeek drives CURRENT in both race + no-race modes

**Wave 3E (shipped this session leading to submission):**
- Splash screen bug fix (sim was showing SC instead of HR on refresh — transparent-bg fix)
- In-app review prompt integration via `expo-store-review`
- EAS production build → TestFlight → App Store submission

**Critical hold for v1.0.1:**
- Cloudflare Email Routing for hybridrockstar.app (currently in-app feedback links to .shop; switch to .app)
- In-app feedback email domain update from .shop → .app

---

## 📍 Status Snapshot (May 19, 2026 evening)

| Component | State |
|---|---|
| App version | v1.0.0 submitted to Apple Review |
| ASC ID | 6762101905 |
| Repo | `~/Desktop/hybrid-rockstar` (Expo) |
| Backend repo | `~/Desktop/hybrid-rockstar-api` (Next.js on Vercel) |
| Latest commit | Wave 3E (commit hash to be confirmed post-submission state) |
| Apple Review status | Submitted, awaiting verdict |
| Expected verdict window | 24-48 hours from submission |

---

## 🔒 Locked Design Decisions

### Trademark
- **"Hyrox" is a registered trademark.** NEVER appears in HR consumer-facing copy. App name, App Store description, screenshots, in-app text, marketing copy — all use "hybrid fitness," "race preparation," or generic descriptors. Internal docs and engineering comments may reference for clarity.

### Visual hierarchy
- **Green family = week-level** (Train screen week cards, completion checkmarks)
- **Blue family = session-level** (Week detail screen, individual workout completion)
- Distinct color families map to distinct UI levels — deliberate, not accidental

### Train screen leading-edge algorithm
- `leadingEdgeWeek` drives CURRENT week determination
- Works in both race-mode (race date provided) and no-race mode (rolling current)
- Race date is informational only — does NOT drive scheduling math

### Three-card visual treatment
- CURRENT (active week) — distinct visual emphasis
- COMPLETE (past weeks with all sessions done) — green checkmark
- NEUTRAL (future weeks or partially complete) — base styling

---

## 🚧 Pending Work (Apple Review verdict-dependent)

### On approval (automatic release fires):
1. App goes live in territories (TBD — likely US default + Mark's geographic expansion strategy)
2. Monitor first-week reviews + crash reports
3. Begin v1.0.1 cycle

### On rejection:
1. Apple Resolution Center workflow
2. Diagnose rejection reason
3. Resubmission cycle

### v1.0.1 prep (regardless of v1.0.0 verdict):
1. **Cloudflare Email Routing for hybridrockstar.app** (CINC task — set up routing for hello@hybridrockstar.app or similar)
2. **CC prompt to update in-app feedback email domain** from .shop → .app
3. Splash screen final polish (if any items from review feedback)

---

## 🔜 Wave Roadmap (Post-v1.0.0)

### Wave 3F — Achievements / badges system
- First workout, first block, first cycle
- 10/25/50 workout milestones
- 7-day streak
- Visual treatment + Apple Health integration prep

### v1.1 — Apple Health integration
- Workout export to Health app
- Heart rate / calorie tracking integration
- Deferred from current cycle to v1.1

---

## 📋 Standing Rules (Inherited from prior versions)

### CC sim handoff sequence (mandatory final step for any CC HR prompt requiring sim audit)
```
killall "Simulator" 2>/dev/null; sleep 2
open -a Simulator
sleep 5
xcrun simctl openurl booted exp://localhost:8081
```

### Sim verification posture
- Mark drives the sim directly for visual audit
- CC NEVER captures sim screenshots
- CC handles tsc, code changes, sim refresh only

### Build profile
- TestFlight: `eas build --profile production`
- Ad hoc (Mark's iPhone testing): `eas build --profile preview`
- Default to ad hoc for iteration

### Repo discipline
- Single main branch
- Commits include Wave label (e.g., "Wave 3E: review prompt + splash bg fix")
- Git email must be `masbooksonebay@gmail.com` for Vercel compatibility (HR backend)

---

## ❌ Things to Never Do

- **Never say "Hyrox" in consumer-facing copy** (trademark)
- **Never instruct CC to capture sim screenshots** — Mark drives sim
- **Never click "Release This Version" in ASC** — release timing is Mark's call, even with Automatic Release configured (Automatic Release fires on approval, but configuration changes mid-review require explicit Mark approval)
- **Never re-introduce deleted UI elements** without conscious design rationale (BlockFlowIndicator deletion lesson — green checkmark on completed week cards is intentional)

---

## 📅 Changelog

**May 19, 2026 evening (this session):**
- ✅ **HR v1.0.0 SUBMITTED TO APPLE REVIEW** (24-48h window)
- ✅ Wave 3E shipped (splash bg fix + review prompt + EAS production build + TestFlight + ASC submission)

**May 16, 2026:**
- ✅ Wave 3D v5 committed (`07c5146`) — Phase 1-6 complete + 3 fixes (leadingEdgeWeek + COMPLETE predicate + Up Next Option A walk-forward)
- Three-card visual treatment locked
- Green/blue color family distinction locked

**Earlier history:** see HR_MASTER v2.

---

## 🔗 Cross-References

- **SCS_MP v6.1** — parent doc, three-lane portfolio architecture
- **SC_MASTER_ACTIVE v5.7** — sibling app, shared Expo + EAS workflow patterns
- **PP_MASTER v6** — sibling content site, shared Next.js + Vercel patterns

---

*Active master ref doc for Hybrid Rockstar iOS app. v1.0.0 in Apple Review as of May 19, 2026 evening.*
