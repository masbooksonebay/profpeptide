# PP_MASTER — Addendum v4 (June 23, 2026)

Drop-in addendum to **PP_MASTER**. Captures the PP **app** (`~/dev/profpeptide-app`) git state after today's Schedule Tier 1a build, timezone fix, and Compounds+Research→Learn merge. Pairs with **PP_APP_REDESIGN_v1** (design direction for the premium redesign that builds on this base).

> Repo path note: current confirmed path is **`~/dev/profpeptide-app`** (older docs say `~/Desktop/` — `~/dev/` is correct).

---

## 1) Schedule Tier 1a — BUILT (record-only protocol builder)

Tier 1a = **record-only** protocol builder (no pre-fill; pre-fill/PK-curve deferred to Tier 2, gated on PeptideProfile dose data + Mark's disclaimer legal call). Strategy context: PP pivoting from info-app → comprehensive peptide **tracker**, GLP-1 front-door hook, half-life/PK curve elevated to **core differentiator**.

Files (commit `5ed8145`): `lib/scheduleMath.ts`, `lib/scheduleStore.ts` (AsyncStorage keys `pp_schedule_v1` + `pp_dose_log_v1`), `app/(tabs)/schedule.tsx`, `_layout.tsx`. Reuses `lib/reconstitution.ts` + `constants/theme.ts`.

iOS-sim verified (CC-desktop): created BPC-157 250mcg daily 08:00/20:00, logged Taken + Skipped, cold-restarted Expo Go → AsyncStorage persistence confirmed (genuine read-back). Record-only compliance + disclaimer held.

---

## 2) Timezone off-by-one — FIXED (commit `9fb9f14`)

Genuine bug: `createdAt` stored UTC while `todayISODate()` is local → evening-created daily protocols hidden in Today in negative-UTC-offset zones. Fix: local-date helpers (`localDateISOOf`/`localDateOfISO`, no `toISOString`); anchor precedence `cycle.startDateISO → protocol.startDateISO (local, captured at creation) → localDateOfISO(createdAt)`; `createdAt` kept UTC for audit only; backward-compat for existing protocols.

**New test suite stood up** (none existed before): `lib/scheduleMath.test.ts`, 16 tests, Node built-in `node:test`, `TZ=America/New_York` pinned, package.json test script, tsconfig `allowImportingTsExtensions`. 16/16 pass, tsc clean. Mark screenshot-confirmed the fix in sim.

> Correction logged: earlier-referenced "14 assertions" test suite was fictional — no suite existed until this fix created one. (RULE #0 / verify-before-asserting.)

---

## 3) Compounds + Research → "Learn" — MERGED (6 tabs → 5)

Both Compounds and Research were outbound profpeptide.com library surfaces (Compounds = searchable peptide/supplement cards w/ Learn-More deep-links; Research = category tiles → `/peptides?category=`). Merged into one **Learn** tab (`app/(tabs)/learn.tsx`, branch commit `ffe2715`): fixed header w/ Peptides/Supplements toggle + search, "browse by category" block on top (11 category chips + site + 3 socials, hides during search), searchable cards below. Data arrays byte-identical to originals (diff-verified); `compounds.tsx` + `research.tsx` removed; ~100 deep-links + 11 category URLs + socials preserved. tsc clean.

Decision rationale: chose Compounds+Research→Learn over Log+Schedule→Track because PP's "Log" is the **reconstitution log** (Calculator history), not a dose log. **Eventual end-state: 4 tabs** (Calculator + reconstitution-history · Schedule · Learn · Codes) — but Log→Calculator fold is **deferred** until after the notifications pass.

---

## 4) Current main state (LOCKED)

- **main HEAD: `f82f37f`** — merge commit, two parents: `9fb9f14` (tz fix) + `ffe2715` (Learn merge). Landed via `--no-ff` (ort strategy, no conflicts — the two branches touched disjoint files: tz = `lib/*`/`package.json`/`tsconfig.json`, Learn = `app/(tabs)/*`). Chose `--no-ff` over rebase to avoid rewriting already-verified commits.
- **Tabs on main: `index · log · schedule · learn · discounts`** — **5 tabs**. `compounds.tsx`/`research.tsx` gone.
- `tsc --noEmit` clean · `npm test` 16/16 pass.
- **main is 3 commits ahead of `origin/main` — NOT pushed.** Mark triggers the push.
- Both feature branches (`fix/schedule-tz-offbyone`, `feat/merge-learn-tab`) still exist at their original commits; deletable after push (`git branch -d …`).
- Only untracked: `.claude/` (fine).

---

## 5) Open loops (app)

1. **Push main to origin** (Mark's trigger) — RULE #8: verify SHA range + GitHub shows commits after.
2. **Eyeball Learn tab in sim** — browse-block-on-top layout vs. segmented-toggle alternative (small follow-up if cramped).
3. **Notifications pass (Tier 1b, expo-notifications)** — needs EAS dev build; touches `schedule.tsx` (overlaps redesign surface). **DO NOT START before design direction is locked** (see PP_APP_REDESIGN_v1) — anything visual risks building against a look about to change.
4. **Optional Log→Calculator fold** — bundle with the notifications pass.
5. **App content/data sync backlog** (from Addendum v2, still open): Codes tab missing Glacier Aminos + Peptides.gg, stale VCR code (`PROFPEPTIDE`/20% → should be `PROF20`); Compounds/Learn add Bioregulators + KLOW/GLOW. Confirm live ASC version first.

---

## 🔗 Cross-references
- **PP_MASTER v15** (parent) · **PP_APP_REDESIGN_v1** (redesign design direction) · **PP_MASTER Addendum v2/v3** · **SCS_MP**

---

## Changelog
**June 23, 2026 (v4):** Captured PP app Schedule Tier 1a build (`5ed8145`), timezone fix + new 16-test suite (`9fb9f14`), Compounds+Research→Learn merge (`ffe2715`), all landed on **main at `f82f37f`** (5 tabs, tsc clean, tests green, **NOT pushed** — 3 ahead of origin). Confirmed repo path `~/dev/profpeptide-app`. Notifications pass parked pending redesign direction.
