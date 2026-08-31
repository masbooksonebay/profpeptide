# SCS MP — v6.5

**Strength Cycle Studios Master Process**
**Date:** 2026-05-24
**Status:** Active. Replaces v6.4.

---

## Identity (LOCKED — carried forward)

- **Mark Shurtliff** — sole founder
- **SCS LLC** — Virginia, EIN 42-1888796, VA Entity ID 12000401, D-U-N-S 144999413
- **Apple Team ID** — VCT64S7K6P
- **Apple LLC enrollment** — case 102887649950 escalated to internal team May 6 2026, no ETA
- **Git email** — masbooksonebay@gmail.com (Vercel compatibility required)

---

## Portfolio

| Code | Project | State |
|---|---|---|
| PP | Prof Peptide | Site v4.4+ canonical (31 peptide pages), iOS v1.0.2 in Apple review |
| HR | Hybrid Rockstar | Pre-Apple-submission, Ask Coach closed, Wave 3E pending |
| SC | Strength Cycle | v1.0.4 pending sim audit + ship |
| WL / Capstone | Capstone Peptides LLC | Formed, RF contract signed, Schedule A pending Mark signature |
| Oly | Olympic weightlifting | Spec stage |
| Cali | Calisthenics | Future (ranked #3 expansion) |
| CrossFit | CrossFit | Future (ranked #2 expansion) |
| Wizard | (removed) | Scrubbed from portfolio |
| WN | Russia methodology | Active, separate ref doc |

---

## Operating principles (LOCKED — carried forward)

- **Maximize autonomous execution** — handle every task without involving Mark unless genuinely blocked
- **Default to delegation** — multi-click browser → CINC; terminal/code → CC; scanning/verification → delegate with "report back"
- **Click-to-copy CC and CINC prompts in chat** — never tell Mark "go find the prompt in Gmail"
- **Proactive ideas** — SEO, monetization, site improvement, stock ideas surface without being asked; push back when Mark's ideas conflict with best practices
- **Default to Apple/iOS-native conventions** — when Mark doesn't answer UX/design questions, assume standard iOS Health/Fitness/Stocks/Settings convention
- **Default to industry standards** — Apple Health/Fitness, Strong, Hevy, Boostcamp as references
- **Fresh research** — for companies, vendors, opportunities, conduct exhaustive fresh web research rather than recycling

---

## Communication rules (LOCKED — carried forward)

- TL;DR required at end of responses >3 short paragraphs
- Markdown links for URLs in display text
- No wellness commentary (no rest/break/resume language)
- No time-of-day language unless Mark uses first
- No session-length references
- No emoji unless Mark uses one first
- No psychoanalysis or condescending tone

---

## Reference doc architecture — Rule #C (LOCKED)

**Frozen + active tracker split:**
- **Frozen** = stable rules, premise, definitions. Only updated on fundamental changes. Self-contained snapshots (Rule #A).
- **Active tracker** = dynamic state, recent changelog, current state. Under 1,500 words. May reference frozen doc.

**Mid-session updates:**
- NEVER auto-rewrite
- ALWAYS ASK Mark first
- Default to end-of-session batched updates

**Knowledge file updates (this project):**
- Same discipline — don't auto-edit knowledge files mid-session
- Propose updates, queue for end-of-session
- All ref docs delivered as downloadable .md files at session close

---

## RULE #7 — Multi-root-cause diagnosis (LOCKED — carried forward)

When Claude encounters a failure mode, generate 3+ candidate root causes BEFORE proposing fix. Avoids first-hypothesis bias. Especially important for indexing issues, deployment failures, CC drift.

---

## RULE #8 — API push verify (LOCKED — carried forward)

When CC reports a push completed, ALWAYS verify:
1. The exact SHA range pushed matches expected
2. The remote (GitHub) shows the new commits
3. Vercel deploy status before declaring victory

Avoids "push said success but didn't actually land" drift.

---

## RULE #9 — Terminal restart enumeration (LOCKED — carried forward)

When CC hangs/crashes/needs restart:
1. Enumerate every uncommitted change in WIP via `git status` before exit
2. Stash if necessary
3. Document in chat what was in-flight
4. Restart in clean state

Prevents lost work from rebuild interruption.

---

## RULE #10 — Multi-CC parallelism (NEW, LOCKED May 24, 2026)

Multiple CC sessions can run in parallel terminal tabs **as long as they don't edit the same files simultaneously**. Use cases proven this session:

- CC tab 1: peptide page content work (V44-1 conversions)
- CC tab 2: thumbnail generation (separate asset)
- CC tab 3: supplement audit (different docs/spec/ file)

**Discipline:**
- Rename Terminal tabs by repo + task (`pp-content`, `pp-thumbnail`, `pp-audit`)
- Don't paste a CC tab's prompt into the wrong tab
- If `git status` shows files from another tab's work, recognize that pattern (don't accidentally commit them)
- Background-worthy tasks (audits, asset generation) ideal for parallel tabs while primary work continues

---

## CC technical workflow (LOCKED — carried forward)

- **Wake-up sequence in separate code blocks:**
  - `cd ~/Desktop/[repo]`
  - `claude --dangerously-skip-permissions`
  - prompt
- **Parallelize CC across repo tabs**
- **`/exit` before `eas build`**
- **Git email must be masbooksonebay@gmail.com** for Vercel compatibility
- **CC never modifies icons** — use Perplexity → SVG → cloudconvert.com → CC handles Expo asset packaging only

---

## Site fetch rule — PP work (LOCKED)

Always use `web_fetch` to open profpeptide.com live pages directly before writing any CC prompt touching an existing page. Append fresh unique query string (`?v=2`, `?audit=N`) to force fresh fetch — never reuse a prior query string. Mark's browser is authoritative.

---

## Credentials policy (LOCKED)

NEVER receive credentials via chat. Identifiers (legal info, account IDs, paths) are safe. No EPP codes, passwords, API keys, 2FA codes, session tokens.

---

## Stock research rule (LOCKED)

For each stock: (1) complete fundamentals, (2) complete technicals, (3) macro at 3 levels — Global / Industry / Company. Objective analysis, not portfolio fit advice.

---

## Capstone state (NEW — carried over from WL_MASTER v1.7)

| Field | Value |
|---|---|
| Entity | Capstone Peptides, LLC |
| Status | Formed (VA Entity ID 12021441, EIN 42-2730855) |
| RF contract | Signed May 22, 2026 |
| Schedule A | Filled May 24, 2026; pending Mark signature + deposit + send |
| Operational start | Pending Schedule A submission + Gary onboarding confirmation |

Full detail in WL_MASTER v1.7.

---

## Tools & resources (carried forward)

- **CC (Claude Code)** — primary coding execution, per-repo terminal tabs
- **CINC (Claude in Chrome)** — App Store Connect, GSC, browser workflows
- **Expo / EAS** — build + submission pipeline
- **expo-store-review** — in-app review prompt
- **App Store Connect** — submission + management
- **profpeptide.com** — PP companion site
- **Vercel** — hosting / auto-deploy for profpeptide.com
- **GitHub** — repos under `masbooksonebay/`

---

## Cross-chat memory hygiene (LOCKED)

Cross-chat memory reserved for cross-cutting principles. Workflow-specific rules (vial-size prohibition, GSC quota stop, audit triggers, cycle defaults) belong in ref docs / knowledge files, not memory. Knowledge files load contextually in this project, so workflow-specific rules don't need memory redundancy.

---

## Session-close protocol

End of session:
1. Generate updated ref docs as .md files
2. Present via `present_files` for download
3. Mark drops files in SCS project knowledge folder (replacing prior versions)
4. Next Claude session loads them as context
5. Phase / wave continuation prompts delivered as separate .md if multi-step workstream pending

---

## Operational state snapshot (May 24, 2026)

| Workstream | State |
|---|---|
| PP Wave V44-1 | ✅ DEPLOYED (24 commits, 31 peptide profiles on v4.4+ canonical) |
| PP Wave V44-supp-1 Phase 0 | ✅ COMPLETE; 12 spec Q's resolved; Phase 1 lineup locked |
| PP app v1.0.2 | Awaiting Apple review |
| PP @profpeptideapp thumbnail v3 | ✅ LOCKED, in iPad Photos |
| SC v1.0.4 | Pending sim audit (J-1 11 surfaces + J-4 4 paths) |
| HR Ask Coach E3-C | ✅ CLOSED |
| HR FB outreach | Awaiting Mark DM to Emma Waring (HYROX UK admin) |
| Capstone RF Schedule A | Filled, awaiting Mark signature + ACH + send to Gary |
| Cycle 4 vendor posts | Almighty drafted (lower pri); Ascension fired; alphabetical queue |

Next-session priority: PP Wave V44-supp-1 Phase 1 fire (alpha-gpc first), per kickoff prompt deliverable.
