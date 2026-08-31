# Hybrid Rockstar — Master Ref Doc

**Status:** ACTIVE — single doc structure (frozen + active sections combined for HR)
**Version:** v8 (May 27, 2026) — worldwide expansion shipped; Emma Waring HYROX UK community post live
**Cross-referenced in:** SCS_MP v6.6

---

## v7 → v8 CHANGELOG

**Major milestones:**
- ✅ **HR worldwide expansion shipped** — 175 countries Processing to Available as of May 27, 2026
- ✅ **Emma Waring HYROX UK Community FB post LIVE** — first confirmed organic channel activation for HR
- ✅ **Starting territory state corrected** — was 4 countries (AU + IE + NZ + UK), NOT AU/NZ-only as previously recorded

**State corrections:**
- HR_MASTER versions prior to v8 described soft-launch territory as "AU/NZ" — actual state at v1.0.0 launch was AU + IE + NZ + UK (4 English-speaking + kg-using countries)
- Studio-standard soft-launch pattern: 4 English-speaking + kg-using countries (validated by parallel SC starting state with identical 4 countries)

---

## 📍 Status Snapshot (May 27, 2026)

| Component | State |
|---|---|
| App version | v1.0.0 LIVE worldwide |
| ASC ID | 6762101905 |
| Repo | `~/Desktop/hybrid-rockstar` (Expo) |
| Backend repo | `~/Desktop/hybrid-rockstar-api` (Next.js on Vercel) |
| Territory | 175 countries (Processing to Available, propagating May 27, 2026) |
| Last commit | Wave 3E (live in production since May 22, 2026) |
| Apple Review status | Released and live |
| First downloads | 1 download in 5 days at 4-country soft launch (validated zero-risk-of-overwhelming hypothesis) |

---

## 🌍 Territory History

| Date | Territory state |
|---|---|
| May 22, 2026 | v1.0.0 released to 4 countries: Australia + Ireland + New Zealand + United Kingdom |
| May 27, 2026 | Expanded to "All Countries or Regions" (~175 countries) via ASC Pricing and Availability. CINC-driven change, propagation 2-12 hours typical, Apple states "within 24 hours." |

**Soft-launch validation:** 1 download in 5 days across 4 English-speaking territories confirmed zero infrastructure risk from worldwide expansion. Decision to expand made May 27.

**Why not earlier:** soft-launch hypothesis was contain-blast-radius while validating production. Hypothesis confirmed (no crashes, no critical bugs, 1 download).

**Why include US:** US is largest fitness app market. Hyrox trademark exposure is the same in all jurisdictions where the mark is registered (most major markets), so excluding US doesn't mitigate trademark concern. Mark's US-based promotional infrastructure (PP X portfolio, eventually SCS social) needed US availability for downstream promo activation.

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

## 📣 HYROX UK Community FB — Outreach Status (NEW v8)

**Emma Waring DM + community post: LIVE**

Background:
- 30K-member private HYROX UK FB group
- Admin Emma Waring (All-star contributor, first-listed admin) was DMed with locked script from HR_MASTER v7
- DM proposed: free lifetime access to first 100 community members in exchange for honest feedback
- Emma approved the community post

Current state:
- Post is LIVE in HYROX UK Community FB group
- First confirmed organic channel activation for HR
- Watch for:
  - Engagement signals on the post (comments, reactions, DMs)
  - UK download spike in next 48-72h via ASC Analytics (Apple won't show source directly, but UK download uptick is the proxy)
  - Early-supporter signups for first-100 grandfathering

**Next milestone in HYROX community outreach:**
- HYROX AU/NZ Facebook groups (now that AU + NZ are live + worldwide expansion confirmed)
- Same earn-first-post-second runway (1-2 weeks authentic participation before promo post)
- Same DM-admin-first script pattern adapted regionally

---

## 🚀 Post-Worldwide v1.0.1 Prep Queue

**Workstream 1: Cloudflare Email Routing**
- Domain: hybridrockstar.app
- Email: feedback@hybridrockstar.app → markshurtliff@gmail.com
- Increases urgency now that worldwide expansion may drive higher feedback volume
- Currently in-app feedback routes to .shop (legacy) — broken pipe

**Workstream 2: In-app feedback email update**
- Currently: `.shop` (legacy)
- Target: `.app` (correct domain)
- Single string swap in app config
- Ship as part of v1.0.1

**Workstream 3: Wave 3E follow-up items**
- Wave 3E was shipped in v1.0.0 (splash screen bug fix, transparent-bg fix, expo-store-review)
- Any post-worldwide bug reports get folded into v1.0.1

**v1.0.1 scope summary:**
- Cloudflare Email Routing live
- Feedback email .shop → .app
- Any bug fixes from worldwide rollout
- TestFlight → production submission via EAS

---

## 📦 Wave 3 Programming State (LOCKED — UNCHANGED FROM v7)

### Wave 3D v5 committed as `07c5146`
- Phase 1-6 + 3 fixes
- leadingEdgeWeek algorithm
- COMPLETE predicate
- Up Next Option A walk-forward

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
- Availability expansion (Pricing and Availability section) is NOT a Release click — separate action

### Organic review acceptance
- Friends/family reviews acceptable IF not coordinated, templated, or incentivized
- Worldwide expansion may drive organic reviews — monitor without coordinating

### Worldwide expansion CINC pattern (validated May 27, 2026)
- ALWAYS read the BEFORE screenshot from CINC before approving save
- Don't assume starting state from ref docs — actual state may differ
- Pause-before-save discipline mandatory

---

## 📅 Changelog

**May 27, 2026 (v7 → v8):**
- ✅ **HR worldwide expansion shipped** — 175 countries Processing to Available
- ✅ **Emma Waring HYROX UK Community FB post LIVE** — first confirmed organic channel activation
- ✅ **Starting territory state corrected** — was 4 countries (AU + IE + NZ + UK), not AU/NZ-only
- ✅ **Studio-standard soft-launch pattern documented** — 4 English-speaking + kg-using countries (matches SC parallel)
- ✅ **v1.0.1 urgency elevated** — worldwide expansion makes Cloudflare Email Routing + .shop→.app feedback channel a near-term priority

**Prior session entries:** unchanged. See v7 history.

---

## 🎯 Next Milestones (Sequential)

1. **Monitor worldwide propagation** — 24h window for Apple to push availability to all storefronts
2. **Watch Emma's FB post engagement** — engagement signals, DM responses, UK download uptick
3. **Expand HYROX community outreach** — HYROX AU/NZ FB groups now that AU/NZ are live + worldwide
4. **v1.0.1 build** — Cloudflare Email Routing + .shop→.app feedback + any post-worldwide bug fixes
5. **TestFlight cycle** for v1.0.1
6. **v1.0.1 App Store submission**
7. **Wave 3F** — achievements/badges system

---

## 🔗 Cross-References

- **SCS_MP v6.6** — parent doc; HR sim handoff rules, EAS upload rule
- **SC_MASTER_ACTIVE v5.12** — sibling iOS app reference
- **WN_MASTER_ACTIVE v1.1** — sibling iOS app reference (pre-build)

---

*Active tracker for HR iOS app. Updated as worldwide propagation completes, channels activate, v1.0.1 ships.*
