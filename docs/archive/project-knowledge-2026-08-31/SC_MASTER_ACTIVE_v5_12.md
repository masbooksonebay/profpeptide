# Strength Cycle (SC) — Master Active Tracker

**Status:** ACTIVE TRACKER — dynamic state for the SC iOS app workstream
**Version:** v5.12 (May 27, 2026) — v1.0.4 in Apple Review; worldwide expansion shipped on v1.0.3
**Parent:** SC_MASTER_FROZEN v5.3
**Cross-referenced in:** SCS_MP v6.6

---

## 📍 Status Snapshot (May 27, 2026)

| Component | State |
|---|---|
| Currently live in App Store | v1.0.3 (worldwide as of May 27, 2026) |
| Submitted to Apple Review | v1.0.4 — sim audit complete, EAS production build shipped, CINC submission complete |
| Apple Review status | Waiting verdict |
| Territory | 175 countries (Processing to Available, propagating May 27, 2026) |
| ASC ID | 6762101377 |
| Repo | `~/Desktop/strength-cycle` (Expo) |
| API backend | `~/Desktop/hybrid-rockstar-api` (shared with HR) |

---

## 🌍 Territory History

| Date | Territory state |
|---|---|
| Pre-May 27 | 4 countries: Australia + Ireland + New Zealand + United Kingdom |
| May 27, 2026 | Expanded to "All Countries or Regions" (~175 countries) via CINC. Live version at expansion was v1.0.3. |
| Post-Apple-Review (v1.0.4) | When Mark clicks Release This Version on v1.0.4 approval, all 175 countries pull v1.0.4 automatically (no second action needed) |

**Soft-launch validation:** 1 download in 5 days across 4 territories confirmed zero infrastructure risk.

**Phased rollout strategy from SC_MASTER_FROZEN superseded:** Original plan was UK+IE (Phase 1, LIVE) → AU+NZ (Phase 2, planned with 1.0.3) → Canada (Phase 3) → US (Phase 4 "saved for last to maximize learning"). Phase 1+2 already silently completed pre-May 27. Phases 3+4 collapsed into worldwide expansion May 27, 2026. Frozen doc updated accordingly.

---

## 🚀 v1.0.4 Status — In Apple Review

### Completed
- ✅ **Sim audit** complete (J-1 surfaces + J-4 paths verified)
- ✅ **Version bump** to 1.0.4 in app.json
- ✅ **All 11 polish waves pushed** to origin/main (previously committed locally only)
- ✅ **EAS production build** shipped
- ✅ **CINC submission** to App Store Connect complete (with explicit pause-before-submit checkpoint observed)
- ⏳ **Apple Review** — currently waiting verdict

### v1.0.4 scope (in review)
- 5/3/1 AMRAP counter reset bug fix
- Program-switch 1RM elimination (UX improvement)
- SS onboarding leverages existing data (3x5 Strength onboarding pulls 1RMs from 5/3/1)
- In-app review prompt via `expo-store-review`
- Wave 1a + Wave 1b SS implementation (3x5 Strength program — Rippetoe-inspired methodology)
- 11 polish waves (B through J-1): tab reorder, 3x5 Strength rename, onboarding combine Welcome+Picker, settings program-aware sections, track tab program-aware, Ask Coach SS rules, branding sweeps, InputAccessoryView keyboard fix

### Pending (post-Apple-approval)
- Mark's manual "Release This Version" click — CINC NEVER clicks Release
- v1.0.4 propagates to all 175 worldwide countries on release

---

## 🚀 v1.0.5 Subscription Roadmap (LOCKED — unchanged)

**Option C — Free with AI cap, paid for unlimited AI**
- Free tier: All programs supported, full logging, e1RM tracking, AMRAP tracking, AI coach with weekly query cap
- Paid tier (SC Pro): Unlimited AI coach queries
- All methodology / programs stay free permanently — gating methodology would weaken brand promise

**Prerequisites for v1.0.5:**
- Paid Apps Agreement signing (Apple Developer agreement workflow)
- Bank account + tax info for SCS LLC
- Apple Dev account migration to SCS LLC team (currently registered under Mark's individual account)

**Pricing direction (not final):** $7.99/mo, $59.99/yr leaning. Mid-market positioning between Boostcamp ($4.99/$39.99) and Juggernaut ($35/mo).

---

## 📅 Changelog

**May 27, 2026 (v5.11 → v5.12):**
- ✅ **SC v1.0.4 submitted to Apple Review** — sim audit done, EAS build shipped, CINC submission complete (state evolution since v5.11's "pending sim audit + ship" notation)
- ✅ **Worldwide expansion shipped** — 175 countries Processing to Available; v1.0.3 currently live everywhere
- ✅ **Starting territory state corrected** — was 4 countries (AU + IE + NZ + UK), matching HR pattern as studio-standard soft-launch pattern
- ✅ **Phased rollout strategy superseded** — frozen doc updated; Phases 1-4 collapsed into worldwide ship May 27
- ✅ **v1.0.4 release sequencing** — when Apple approves, Mark clicks Release This Version; v1.0.4 propagates worldwide automatically (no second availability action)

**Prior session entries:** unchanged. See v5.11 history.

---

## 🎯 Next Milestones (Sequential)

1. **Apple Review verdict on v1.0.4** — monitor ASC, typical 24-72h window
2. **Mark's manual Release This Version click** on v1.0.4 approval (CINC never clicks Release)
3. **v1.0.4 propagates worldwide** — automatic, no second availability action needed
4. **Monitor v1.0.3 → v1.0.4 update adoption** — most iOS users have auto-update; existing 1 v1.0.3 user updates within days
5. **Watch for v1.0.3 1-star reviews** during worldwide propagation window before v1.0.4 lands — AMRAP counter reset bug is the known risk
6. **v1.0.5 subscription scope** — once v1.0.4 is stable, scope subscription implementation (Paid Apps Agreement signing, Apple Dev account migration to SCS LLC team)

---

## 🛠️ Workflow Notes

### Sim audit discipline (proven via v1.0.4)
- Mark drives sim directly (CC never captures sim screenshots)
- 11 J-1 surfaces + 4 J-4 paths verification before EAS build
- Item #20 from sim list was deferred to TestFlight (sim limitation, not a v1.0.4 blocker)

### CINC ASC pause discipline
- Mandatory pause before submit click
- Submission and verification NOT chained automatically
- CINC NEVER clicks Release This Version

### Worldwide expansion CINC pattern (validated May 27, 2026 — second instance after HR)
- ALWAYS read CINC's BEFORE screenshot before approving save
- Don't assume starting territory from ref docs — actual state may differ
- Pause-before-save discipline mandatory

---

## 🔗 Cross-References

- **SC_MASTER_FROZEN v5.3** — frozen rules, structural decisions (Territory Rollout Strategy now updated to reflect worldwide ship May 27, 2026)
- **SCS_MP v6.6** — parent doc, cross-cutting workflow lessons
- **HR_MASTER v8** — sibling iOS app reference
- **WN_MASTER_ACTIVE v1.1** — sibling iOS app reference (pre-build)
- **hybrid-rockstar-api repo** — server-side Ask Coach prompt host (shared with HR app)

---

*Active tracker for SC iOS app. Updated as v1.0.4 approval lands, worldwide propagates, v1.0.5 subscription scoped.*
