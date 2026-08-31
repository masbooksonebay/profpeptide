# SC MASTER ACTIVE — v5.11

**Strength Cycle — 5/3/1 powerlifting iOS app**
**Date:** 2026-05-24
**Status:** Active tracker. Replaces v5.10. Minor change (sim audit still pending).

---

## App state (carried forward)

- Live in App Store
- v1.0.4 development complete
- Pending: sim audit + ship

---

## v1.0.4 readiness (carried forward from v5.10)

| Wave | Status | Commit |
|---|---|---|
| J-1 (UI cleanup, 11 surfaces) | ✅ Code complete | bf26b88 |
| J-4 (4 critical paths) | ✅ Code complete | 218bd4f |
| Ask Coach E3-C | ✅ Closed (last session) | (per HR_MASTER) |

**Ship gate:** Sim audit only. Pending Mark to drive sim through 11 surfaces (J-1) + 4 paths (J-4).

---

## Sim audit checklist (carry-forward)

### J-1 surfaces (11 to verify)
[List preserved from v5.10 — refer to repo notes for full surface list]

### J-4 paths (4 to verify)
[List preserved from v5.10]

**Discipline:** Mark drives sim directly. CC never instructed to capture sim screenshots. Visual verification is Mark's call.

---

## Post-audit actions (when audit clean)

1. Bump version to 1.0.4 in app.json
2. EAS production build
3. CINC submission to App Store Connect with explicit pause-before-submit
4. Apple review wait
5. Release decision = Mark's call (CINC never clicks "Release This Version")

---

## Backlog (carried forward unchanged)

- 5/3/1 program variants — additional templates
- Apple Health integration (deferred)
- Achievements / badges system
- Per-lift PR notification system
- Plate calculator improvements

---

## Tools & files (carried forward)

- Repo: `~/Desktop/strength-cycle`
- App icon: locked
- Expo/EAS pipeline: configured
- App Store Connect: established record

---

## Next session

SC is parked pending Mark's sim audit. No CC work scheduled.

When sim audit complete, click-to-copy EAS build + CINC submission prompt available on request.
