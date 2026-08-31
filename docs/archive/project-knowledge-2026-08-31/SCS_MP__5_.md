# SCS MASTER PRINCIPLES v6.1

**Status:** ACTIVE REFERENCE — cross-cutting operating principles for Strength Cycle Studios, LLC
**Version:** v6.1 (May 19, 2026 evening — workflow lesson delta from v6)
**Source:** Updated from SCS_MP v6 (May 16, 2026) — adds Capstone deployment workflow lessons + CINC pause-discipline correction + Mark identity (attorney) lock + compaction-summary reliability lesson + Vercel cache lag verification pattern
**Cross-referenced in:** PP_MASTER v6, HR_MASTER v3, SC_MASTER_FROZEN v5.2, SC_MASTER_ACTIVE v5.7, WN_MASTER_FROZEN, WN_MASTER_ACTIVE, WL_MASTER_FROZEN, WL_MASTER_ACTIVE v1.3

---

## v6 → v6.1 CHANGELOG

**Mark identity LOCKED this session (durable context):**
- 🆕 **Mark is an attorney.** Affects WL/Capstone risk discussions (Path C enforcement assessment), trademark posture decisions, LLC structuring, legal/IP/compliance discussions. Skip basics, focus on tactical detail.

**CINC workflow corrections (major):**
- 🆕 **CINC pause-discipline scope CORRECTED.** Pauses are App-Store-Connect-specific risk management for irreversible release-gating actions, NOT general CINC behavior. New hierarchy:
  - **Mandatory pauses:** authentication needs + irreversible release-gating
  - **Conditional pauses:** unexpected state needing judgment
  - **No pauses:** standard form fills + reversible config (DNS, web dashboards)
- 🆕 **CINC handles any web dashboard task by default** — Cloudflare DNS, registrars, all reversible config = CINC territory, NOT Mark-manual handoff. Prior workflow assumption that "DNS = Mark" was wrong.
- 🆕 **CINC Cloudflare proxy toggle convention:** use direct mouse click, NOT `form_input` checkbox-set method. The form_input approach showed visual grey state momentarily but didn't persist through save (Cloudflare UI quirk).

**Vercel deploy verification pattern:**
- 🆕 **Edge-cache lag verification.** Post-deploy, canonical URLs may serve stale HTML for ~30-60 seconds. Cache-buster URLs (`?v=N`) are always fresh but don't verify the user-facing canonical path. Pattern: after `git push` + Vercel auto-deploy wait, curl-verify the canonical URL with grep for the expected change, polling until refresh.

**Compaction-summary reliability lesson:**
- 🆕 **When CC's working-tree audit conflicts with the prompt's premise, the audit wins, not the prompt.** Session compaction summaries can over-state confidence about repo state. SC Wave 1b lesson: prompt assumed "Wave 1b never started," audit revealed Mark's own canonical May 12 Wave 2 implementation in the working tree. Audit overrode spec. Future SC/HR/PP prompts that touch repo state should be written to allow CC to discover actual state before committing to a design.

**Capstone deployment pattern (NEW v6.1):**
- 🆕 **Reference template for future SCS brand site launches.** Vercel + Cloudflare + Next.js single-page, ~8-min end-to-end deployment cycle. CC builds repo → Vercel project imports → CINC handles Vercel domain config + Cloudflare DNS → SSL auto-issued → live verification.

**Gmail tool noise rule REINFORCED:**
- 🆕 **Gmail tools auto-load every turn and must be silently ignored.** No calls, no mentions, no acknowledgments. Carries forward from prior session compaction.

**Short app codes context-switch convention:**
- 🆕 **Standalone short app code messages** (pp, hr, sc, wn, wl, scs, oly, cf, cali, cp) = context-switch signal to that workstream. Surface that workstream's current state and open items rather than treating it as a typo or asking for clarification.

---

## v5 → v6 CHANGELOG (CARRIED FORWARD FROM v6)

[Unchanged — see SCS_MP v6 for full v5 → v6 changelog covering White Label business unit addition, three-lane portfolio architecture, PP systematize mode lock, capacity planning framework, PP audit + commit workflow, HR sim handoff sequence, v4.4 spec annotation clarity, HR trademark, vendor domicile verification.]

---

## ANTHROPIC ACCOUNT / WORKFLOW DETAILS (UNCHANGED from v6)

[Unchanged — see v6 for Mark identity baseline, LLC/Corporate details for SCS LLC and planned WL LLC, distribution credentials, Apple Team ID, D-U-N-S, EIN, etc.]

**ADDED v6.1:** Mark is an attorney. Affects all WL/Capstone discussions.

---

## PORTFOLIO ARCHITECTURE (UNCHANGED from v6)

[Unchanged — three-lane model: Apps (LANE 1, 6 apps at full buildout) + PP Affiliate (LANE 2, profpeptide.com) + White Label / Capstone Peptides (LANE 3, separate LLC subsidiary). Capacity planning: 30-50 hrs/week steady-state total.]

**STATUS UPDATE v6.1:**
- LANE 3 brand surface live: capstonepeptides.com coming-soon page deployed May 19, 2026
- LANE 2 PP commits this session: GH Stack v4.4 patch (`30445bc`), PageDisclaimer Amazon cleanup (`538f4bb`)
- LANE 1 milestones this session: HR v1.0.0 submitted to Apple Review; SC Wave 2 audit complete (canonical Mark work, commit pending)

---

## Critical Permanent Rules — Meta/Process (UNCHANGED from v6)

[Unchanged — RULE #A self-contained frozen snapshots; RULE #B project knowledge file storage; RULE #C frozen+active split + never auto-rewrite mid-session; RULE #D SCS asset default ownership with WL carve-out; Universal Execution Rules #1-3.]

---

## Glossary of Terms (UPDATED v6.1)

[All v6 entries unchanged]

**UPDATED v6.1:**
- **WL** = White Label business unit (operating brand: **Capstone Peptides**). Peptide ecommerce subsidiary of SCS. LLC not yet formed. Full state in WL_MASTER_FROZEN + WL_MASTER_ACTIVE v1.3.
- **CP** = Capstone Peptides (the WL business unit's operating brand — used interchangeably with WL in informal context)

---

## Repo Paths (Mac Desktop) (UPDATED v6.1)

```
/Users/mark/Desktop/profpeptide          — PP website (Next.js → profpeptide.com)
/Users/mark/Desktop/profpeptide-app      — PP Expo mobile app → TestFlight
/Users/mark/Desktop/strength-cycle       — SC Expo app (ASC 6762101377)
/Users/mark/Desktop/hybrid-rockstar      — HR Expo app (ASC 6762101905)
/Users/mark/Desktop/hybrid-rockstar-api  — HR backend (Next.js on Vercel)
/Users/mark/Desktop/capstone-peptides    — Capstone coming-soon page (Next.js → capstonepeptides.com on Vercel) — NEW v6.1
```

DO NOT CONFUSE: profpeptide (website) vs profpeptide-app (mobile app).

**v6 NOTE on Desktop folder + macOS TCC:** [Unchanged from v6]

---

## CINC WORKFLOW RULES (CORRECTED v6.1)

### ASC Submission Prompts (UNCHANGED)
[Unchanged — explicit pause-before-submit checkpoints, never click Release This Version, note compliance modal absence, survey-before-action, screenshot capture at decision points]

### General CINC Pause-Discipline Hierarchy (CORRECTED v6.1)
Pauses-between-phases are App-Store-Connect-specific risk management, NOT general CINC behavior. Applied incorrectly to DNS work in prior session design.

**Corrected hierarchy:**
- **Mandatory pauses:** authentication needs (credential entry, login walls, 2FA) + irreversible release-gating buttons (App Store submission, processor account changes, payment-stack live edits, anything affecting existing customer state at scale)
- **Conditional pauses:** unexpected state needing judgment (custom DNS records suggesting active email or third-party services, unfamiliar fields in forms, anomalous prior records)
- **No pauses:** standard form fills, configuration changes on pre-launch infrastructure, audit-then-action sequences where the action is reversible in seconds

Validated by 8-min end-to-end Cloudflare DNS + Vercel verification cycle on capstonepeptides.com (May 19, 2026).

### CINC Web Dashboard Coverage (NEW v6.1)
CINC handles ANY web dashboard task by default — not just ASC or Vercel.
- Cloudflare DNS ✅
- Domain registrar dashboards ✅
- Vercel project config ✅
- All reversible config tasks ✅
- Default to CINC, not Mark-manual handoff

### CINC Cloudflare Proxy Toggle Convention (NEW v6.1)
Use **direct mouse click on the toggle**, NOT `form_input` checkbox-set method. The form_input approach showed visual grey state momentarily but didn't persist through save. Cloudflare UI quirk — both records must show grey cloud icon post-save.

---

## CC WORKFLOW RULES (UPDATED v6.1)

### PP Commit Workflow (UNCHANGED from v6)
[Unchanged]

### PP Audit Workflow (REFINED v6.1)
Skip localhost dev-server entirely for PP work. CC commits + pushes → Vercel auto-deploys → audit on profpeptide.com with cache-bust query strings.

**ADDED v6.1: Vercel edge-cache lag verification pattern.** Post-deploy, canonical URLs may serve stale HTML for ~30-60 seconds. Cache-buster URLs (`?v=N`) are always fresh but don't verify user-facing path. Pattern: curl-verify the canonical URL with grep for expected change, polling until refresh. Adopted from PageDisclaimer cleanup verification.

### HR Sim Handoff Sequence (UNCHANGED from v6)
[Unchanged]

### v4.4 Spec Annotation Clarity (UNCHANGED from v6)
[Unchanged]

### General CC Rules (UNCHANGED from v6)
[Unchanged — Mark drives sim, CC handles tsc + code + sim refresh, all commits require Mark approval, milestone reporting]

### Working-Tree Audit Trust (NEW v6.1)
When CC reports a working-tree state that conflicts with the prompt's premise, **the audit wins, not the prompt.** Session compaction summaries can over-state confidence about repo state. Prompts touching uncommitted work should be written to allow CC to discover actual state before committing to a design direction.

SC Wave 1b lesson (May 19, 2026): prompt assumed "Wave 1b never started"; audit revealed Mark's own canonical May 12 Wave 2 implementation already in the working tree with different design vocabulary than the draft spec. The audit corrected the prompt.

---

## STANDING RULES — Communication / Voice / Format

### Category 1: Voice/Format Rules (UNCHANGED from v6)
[All 22 rules unchanged from v6]

### Category 2: CC Workflow Rules (UNCHANGED from v6)
[Rules 23-30 unchanged]

### Category 3: Architectural Insights (UPDATED v6.1)
[Rules 31-35 from v6 unchanged]

**ADDED v6.1:**
36. **CAPSTONE DEPLOYMENT PATTERN as future SCS brand-site template.** Vercel + Cloudflare + Next.js single-page, ~8 min end-to-end. CC builds repo → Vercel project imports → CINC handles Vercel domain config + Cloudflare DNS (both grey cloud) → SSL auto-issued by Let's Encrypt → live verification. Stack consolidation across portfolio is worth considering at a later cycle (Capstone diverges from PP/HR's Next 14 + Tailwind v3 to Next 16 + Tailwind v4 because `create-next-app@latest` defaults shifted).

37. **GMAIL TOOL SILENT-IGNORE RULE.** Gmail tools auto-load every turn and must be silently ignored. No calls, no mentions, no acknowledgments. Standing rule across all SCS sessions.

38. **SHORT APP-CODE CONTEXT SWITCH.** Standalone short app code messages (pp, hr, sc, wn, wl, scs, oly, cf, cali, cp) = context-switch signal to that workstream. Surface that workstream's current state and open items rather than treating as typo or asking for clarification.

---

## THINGS TO NEVER DO (UPDATED v6.1)

### Universal (UNCHANGED)
[Unchanged]

### App / ASC (UNCHANGED)
[Unchanged]

### Site (UNCHANGED)
[Unchanged]

### White Label / Capstone Peptides (UNCHANGED from v6 + UPDATED naming)
[Rules unchanged from v6; brand-name updates reflect Capstone Peptides as operating brand. "WL" and "Capstone Peptides" used interchangeably in informal context.]

### Credentials (UNCHANGED)
[Unchanged]

### Workflow (UPDATED v6.1)
[Existing rules unchanged]

**ADDED v6.1:**
- **Never trust the session compaction summary over CC's working-tree audit** when the two conflict on repo state
- **Never pause CINC mid-workflow for reversible config tasks** (DNS, web dashboards, registrar work) — pauses are App-Store-Connect-specific
- **Never use `form_input` checkbox method for Cloudflare proxy toggles** — use direct mouse click

---

## CURRENT WORKSTREAMS (May 19, 2026 evening)

### Active Apps
- **PP** — v1.0.1 LIVE; v1.0.2 in Apple Review (tab reorder + Sleep & Recovery + in-app review prompt)
- **HR** — **v1.0.0 SUBMITTED TO APPLE REVIEW this session** (24-48h window)
- **SC** — Wave 1a shipped + unpushed (c4b1d1c, May 12); Wave 2 (SS state machine + TM stall refactor) canonical in working tree, commit prompt drafted

### Active Sites
- **profpeptide.com** — GH Stack v4.4 patch shipped (`30445bc`); PageDisclaimer Amazon cleanup shipped portfolio-wide (`538f4bb`); Glacier Aminos #18 vendor in flight (CC prompt drafted)
- **capstonepeptides.com (NEW)** — Coming-soon page LIVE as of May 19, 2026 evening; Vercel + Cloudflare + Next.js stack; commit `a7a12c0`

### Active Content
- **PP X Posts Cycle 3** — 10 of ~15 vendors complete; Royal Peptides + Glacier Aminos in next queue (both PROF10 exception code)
- **PP Indexing** — Maintenance mode (see v18)

### Capstone Peptides
- Coming-soon brand surface live
- Path A/B/C decision still pending Mark's risk tolerance assessment
- Partner Tier 1 shortlist locked; discovery inquiries on hold pending Path

### Queued Ref Doc Updates
All updated this session: SC_MASTER_ACTIVE v5.7, HR_MASTER v3, PP_MASTER v6, PP_X_POSTS v16, WL_MASTER_ACTIVE v1.3, SCS_MP v6.1.

---

## SOURCE-DOC INDEX (UPDATED v6.1)

**PERMANENT CANONICAL REF DOCS (project knowledge files):**
- SCS_MP.md v6.1 — **THIS DOC** (May 19, 2026 evening). Supersedes v6.
- **PP_MASTER.md v6** — Updated this session. Supersedes v5.
- **SC_MASTER_FROZEN.md v5.2** + **SC_MASTER_ACTIVE.md v5.7** — Active updated this session.
- **HR_MASTER.md v3** — Updated this session. Supersedes v2.
- **WN_MASTER_FROZEN.md v1.0** + **WN_MASTER_ACTIVE.md v1.0** — Unchanged this session.
- **WL_MASTER_FROZEN.md v1.1** + **WL_MASTER_ACTIVE.md v1.3** — Active updated this session.

**ACTIVE WORKSTREAM REF DOCS:**
- **PP_X_POSTS.md v16** — Updated this session.
- PP_INDEXING.md v18 — Unchanged this session.
- PP_COMMISSIONS.md v1 — Unchanged this session.

**ACTIVE SPECS:**
- PP CONTENT TEMPLATE v4.4+ (May 19 refinements per PP_MASTER v6)
- HR Cycle 1 v3.2 PROGRAMMING DOC

**LEGAL/FINANCIAL (preserve permanently):**
[Unchanged from v6]

**ARCHIVED MP VERSIONS** (preserve forever): SCS MP v1-v6.

---

*End of SCS MASTER PRINCIPLES v6.1 — May 19, 2026 evening. Capstone deployment workflow lessons captured. CINC pause-discipline scope corrected. Mark identity (attorney) locked. Compaction-summary-vs-working-tree-audit trust hierarchy established. Vercel edge-cache lag verification pattern locked. Capstone brand surface live. HR submitted to Apple Review. SC Wave 2 audit complete.*
