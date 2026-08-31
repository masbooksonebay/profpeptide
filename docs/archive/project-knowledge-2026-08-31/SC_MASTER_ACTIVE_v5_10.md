# Strength Cycle (SC) — Master Active Tracker

**Status:** ACTIVE TRACKER — dynamic state for the SC iOS app workstream.
**Version:** v5.10 (May 23, 2026 evening) — Waves J-4 + J-5 + E3-C added, Ask Coach workstream CLOSED, v1.0.4 ship gate = sim audit only
**Parent:** SC_MASTER_FROZEN v5.1 [unchanged]
**Cross-referenced in:** SCS_MP v6.4, HR_MASTER v6 (E3-C lives in hybrid-rockstar-api)

---

## 📍 Status Snapshot (May 23, 2026 evening)

**PHASE:** v1.0.4 polish — all waves complete. Sim audit pending. EAS production build pending. TestFlight pending.

**v1.0.4 SHIP GATE = sim audit pass on J-1 (11 surfaces) + J-4 (4 dismiss paths).** All code committed. All API work deployed. Only thing blocking the build is Mark's visual verification.

**TWO REPOS:**
- `~/Desktop/strength-cycle` — SC frontend (10 commits in v1.0.4 cycle)
- `~/Desktop/hybrid-rockstar-api` — Shared API backend (3 commits in v1.0.4 cycle, 1 deploy this session for E3-C)

---

## 🚀 v1.0.4 Polish Phase — Full Commit Table

[Waves A through J-1 unchanged — see v5.9 for full table]

### NEW in v5.10 (May 23, 2026 evening)

| Wave | Repo | SHA | Status | Description |
|---|---|---|---|---|
| **J-4** | SC | `218bd4f` | Committed (unpushed) | fix(ask-coach): keyboard layout — input return-to-bottom on drag-down + tap-outside dismiss (both keyboardWillHide AND keyboardDidHide listeners + onBlur fallback) |
| **J-5** | API | (E2/E3-B push verification) | Deployed | API push verification step — E2/E3-B sat unpushed on local main; commits `7ecc37f` pushed this session, Vercel deployed; live tested "Should I start with 3x5 or texas method?" — clean response |
| **E3-C** | API | `3e635a9` | Deployed | fix(coach): soften condescending opener patterns across all coach prompts. Mirrored TM E3-B template (COACHING CORRECTIONS extraction + advisory framing + Good/Bad tone-example pair) onto STARTING_STRENGTH_SYSTEM_PROMPT and WENDLER_531_SYSTEM_PROMPT. Lives in hybrid-rockstar-api but closes the SC Ask Coach quality workstream. |

### Complete wave list (v1.0.4 cycle, all repos, all waves)

| Wave | Repo | SHA | Topic |
|---|---|---|---|
| A | SC | — | Investigation only |
| B | SC | `d837dbb` | polish + branding |
| C | SC | `5fe5e95` | onboarding combine |
| D | SC | `390ca6d` | settings program-aware |
| G | SC | `af40d39` | dev tools seeding |
| F | SC | `b64c1fd` | track program-aware |
| E1 | SC | `10070be` | ask-coach SS rules + Guide |
| E2 | API | `6d1ac5b` | SS system prompt branch |
| E3-A | SC | `343ac65` | content branding sweep |
| H | SC | `ded0283` | onboarding switcher fix |
| I | SC | `e0659d9` | track program-aware |
| E3-B | API | `7ecc37f` | anti-bias + TM softening |
| **J-1** | SC | `bf26b88` | InputAccessoryView focus-binding fix (11 surfaces) |
| **J-4** | SC | `218bd4f` | Ask Coach keyboard layout (4 dismiss paths) |
| **J-5** | API | (verification of `7ecc37f`) | Push verification gate — root cause of recurring Ask Coach bias bug |
| **E3-C** | API | `3e635a9` | Opener tone softening across all coach prompts |

**SC commits unpushed:** `bf26b88` (J-1), `218bd4f` (J-4). Bundle with v1.0.4 EAS build.
**API commits pushed:** `7ecc37f` (E3-B, verified live), `3e635a9` (E3-C, verified live).

---

## 🧪 v1.0.4 Sim Audit Checklist (PENDING — Mark drives)

### Wave J-1 — InputAccessoryView stray Done bar (11 surfaces)

Pattern: focus input → keyboard up with Done bar → dismiss → verify NO stray Done bar pinned to screen bottom.

- [ ] SS setup (NEW — gained Done affordance via shared component migration)
- [ ] Wendler531 setup
- [ ] TexasMethod setup
- [ ] Settings → 1RM edit modal
- [ ] Settings → working-weight edit
- [ ] Settings → rest timer
- [ ] Settings → +1 input
- [ ] Wendler531WorkoutScreen → notes input
- [ ] Wendler531WorkoutScreen → new-lift name input
- [ ] TexasMethodWorkoutScreen → notes input
- [ ] HistorySubview → tag-edit (new consumer added during J-1 sweep)

### Wave J-4 — Ask Coach keyboard fix (1 surface, 4 dismiss paths)

- [ ] Tab to Ask Coach → tap chat input → keyboard up → tap **Done** button → input returns to bottom, tab bar taps work
- [ ] Tap chat input → keyboard up → **tap outside** → input returns to bottom, tab bar taps work
- [ ] Tap chat input → keyboard up → **drag-down dismiss** on message scroll area → input returns to bottom, tab bar taps work
- [ ] Tap chat input → keyboard up → **tap a different tab** without dismissing → no stray state on next screen, return to Ask Coach to confirm clean

### Wave E3-C — Opener tone (already verified live by Mark this session)

✅ "What do you recommend after TM?" — no "getting ahead of yourself" opener
✅ "Should I start with 3x5 strength or texas method?" — E3-B fix intact
✅ 5/3/1 coach test — no condescending opener

**E3-C verified DONE. Ask Coach tone workstream CLOSED.**

---

## ⚓ v1.0.4 Ship Gate

**Required for EAS production build:**

1. ✅ All code committed (SC + API)
2. ✅ All API work deployed and verified
3. ⏳ J-1 11-surface sim audit — Mark verifies
4. ⏳ J-4 4-path sim audit — Mark verifies

**Build sequence (post-audit):**
1. `eas build --platform ios --profile production`
2. Wait for build success
3. `eas submit --platform ios --profile production` → TestFlight
4. Internal testing → external testing → App Store submission

**Standing rules (locked):**
- CINC/CC never click "Release This Version" — always Mark
- Organic friends/family reviews acceptable if not coordinated/templated/incentivized
- Never modify App Privacy declarations without re-verifying Data Not Collected

---

## 🎯 Ask Coach Final State (closure)

The recurring Ask Coach quality workstream that bounced across multiple sessions is now CLOSED with full alignment across all three coach prompts:

| Coach | Program routing (E2) | Anti-bias (E3-B) | Opener tone (E3-C) |
|---|---|---|---|
| 3x5 Strength | ✅ | ✅ | ✅ |
| 5/3/1 (Wendler) | (existed) | ✅ | ✅ |
| Texas Method | (existed) | ✅ | ✅ (in E3-B itself) |

**Root cause analysis from this session — multi-root-cause:**
1. **Unpushed API commits** (J-5 finding) — E2/E3-B sat unpushed for hours while Vercel served stale `171d5be`. Process gap: API push verification step now part of wave workflow.
2. **Prompt structure** (E3-C finding) — push-back triggers were inline as a bullet under COACHING STYLE rather than extracted to a top-level COACHING CORRECTIONS section with advisory framing. The structural extraction is what makes the softening work.

**Locked process pattern for future coach prompt work:**
- Extract push-back into top-level COACHING CORRECTIONS section (separate from COACHING STYLE)
- Add advisory framing intro ("Forward-looking questions deserve a substantive answer first — never open by telling the user they're getting ahead of themselves")
- Add Good/Bad tone-example pair to TONE EXAMPLES block
- This is the canonical pattern for all future coach prompts and tone discipline

---

## 📦 Upcoming (Post-v1.0.4 Cycle)

[Unchanged — see v5.9 for full v1.1+ backlog]

**Near-term after v1.0.4 ships:**
- v1.0.5 polish cycle (Wave J-2 consolidation candidates, J-3 minor items)
- v1.1 — Apple Health integration (deferred)
- Apple Watch app (deferred until v1.1+ shipping cadence stabilizes)

---

## 🔗 Cross-References

- **SCS_MP v6.4** — parent doc, three-lane architecture
- **HR_MASTER v6** — hybrid-rockstar-api shared backend (E3-C commit cross-listed there)
- **SC_MASTER_FROZEN v5.1** — unchanged frozen architecture/strategy

---

*v1.0.4 ship gate is sim audit only. All code work complete. Ready to fly once Mark clears J-1 + J-4 surfaces.*
