# Hybrid Rockstar (HR) — Master Ref Doc

**Status:** ACTIVE TRACKER
**Version:** v6 (May 23, 2026 evening) — Ask Coach workstream CLOSED (E2 + E3-B + E3-C all deployed), HR FB community outreach workstream QUEUED (awaiting admin approval)
**Cross-referenced in:** SCS_MP v6.4, SC_MASTER v5.10 (shared coach prompts in hybrid-rockstar-api)
**Domain:** (none — app-only, no marketing site yet)
**Repos:**
- `~/Desktop/hybrid-rockstar` — HR iOS frontend
- `~/Desktop/hybrid-rockstar-api` — Shared API backend (also serves SC's Ask Coach)

---

## 📍 Status Snapshot (May 23, 2026 evening)

**APP STATE:** HR LIVE on App Store
- 12-week training program for Hyrox-style racing prep
- All 8 stations + running blocks + periodization
- Active feature set: Train tab (week-aware), Week detail (session-aware), Achievements/Track, Settings

**ACTIVE WAVE WORK:** Currently no in-flight HR-frontend waves. The recurring Ask Coach quality workstream — which spans both SC and HR's shared API — is CLOSED as of this session.

**ACTIVE PROMO WORKSTREAM:** FB Hyrox community outreach Phase 1 queued, pending admin approval on HYROX UK Community group.

---

## ✅ Ask Coach Workstream — CLOSED

The Ask Coach AI quality issues that recurred across multiple sessions are fully resolved. All three coach prompts (3x5 Strength, 5/3/1, Texas Method) are now aligned on three dimensions:

| Coach | Program routing (E2) | Anti-bias (E3-B) | Opener tone (E3-C) |
|---|---|---|---|
| 3x5 Strength | ✅ deployed | ✅ deployed | ✅ deployed |
| 5/3/1 (Wendler) | (existed) | ✅ deployed | ✅ deployed |
| Texas Method | (existed) | ✅ deployed | ✅ deployed (in E3-B) |

### Final deployed commits (hybrid-rockstar-api `main`)

- `7ecc37f` — Wave E3-B: 3x5 Strength branding sweep + 5/3/1 anti-program bias + TM opener tone softening
- `3e635a9` — Wave E3-C: Soften condescending opener patterns across all coach prompts (SS + 531 mirrored from TM template)

Both pushed to GitHub, deployed to Vercel, verified live in SC sim with these queries:
- "What do you recommend after TM?" → no "getting ahead of yourself" opener
- "Should I start with 3x5 strength or texas method?" → clean cross-program response
- 5/3/1 outgrowing question → substantive engagement, no condescending opener

### Root cause analysis — multi-root-cause

The bug appeared to be a single recurring code defect. Investigation surfaced TWO independent root causes:

1. **Unpushed API commits** (J-5 finding) — E2/E3-B sat unpushed on local `main` for hours while Vercel served stale `171d5be`. Symptom: prompts that LOOKED correct in code but acted incorrect in production.
2. **Prompt structure** (E3-C finding) — Push-back triggers lived inline as a single bullet under COACHING STYLE rather than extracted to a top-level COACHING CORRECTIONS section. Symptom: condescending opener patterns despite anti-bias content rules.

**Lesson:** When something keeps regressing, audit BOTH the deploy chain AND the prompt structure independently. Each can mask the other. This pattern is now codified in SCS_MP v6.4 push-verify and multi-root-cause-investigation principles.

### Locked process pattern for future coach prompt work

Any new coach prompt or tone-discipline work follows this template:

1. **Extract push-back triggers** into top-level COACHING CORRECTIONS section (separate from COACHING STYLE)
2. **Advisory framing intro** on that section — explicit instruction that forward-looking questions deserve substantive answers first; never open by telling the user they're getting ahead of themselves or haven't earned the question
3. **Good/Bad tone-example pair** in TONE EXAMPLES block — concrete examples of correct and incorrect openers
4. **Type-check clean** (`npx tsc --noEmit` exit 0)
5. **Push verification** — confirm `git log --oneline origin/main..main` is empty before declaring deploy complete

---

## 📢 HR Promotion Workstream — Phase 1: FB Hyrox Community Outreach (QUEUED)

**Status:** Queued — Mark has applied to join HYROX UK Community (30K members, private). Awaiting admin approval before any post action.

### Strategy

**Why FB groups first:**
- Highest signal-to-noise audience for HR (members literally training for Hyrox)
- Admin-gated quality (properly approached, gets shown to engaged users with no ad spend)
- UK/Ireland is the densest active Hyrox scene globally
- Lower friction than Reddit (r/Hyrox is more hostile to commercial mentions even with permission)

**Target group sequence:**
1. **HYROX UK Community** (30K members, private, 6 posts/day) — APPLIED, pending approval
2. **HYROX UK** (865 members, public) — warmup ground if needed
3. **HYROX IRELAND community support** — next geo expansion
4. **HYROX (Official Community)** — biggest pool but most caution (may be corporate-run; trademark sensitivity)
5. **r/Hyrox** on Reddit — only after FB presence established
6. **Hyrox-affiliated UK/Ireland gyms** — direct gym outreach for B2B

### Locked principles

- **Never post without explicit admin permission.** Admin DM is the gate. No exceptions.
- **Trademark posture:** nominative fair use only — "Hyrox training prep," "for Hyrox races," "12-week program for Hyrox" are fine. NEVER claim affiliation, "official," "endorsed by," or use Hyrox as a branding element in the app.
- **Group rules acknowledgment:** read all group rules carefully before approaching admin. Address relevant rules in the DM directly.

### Offer hook

**Free to the first 100 group members.** No upsell, no premium tier, no follow-up sales pitch. After the first 100, normal price like everyone else.

**Mechanism (TBD):** App Store promo codes (~100 per app per quarter, ~28-day expiry) is the recommended fit — perfect numerical alignment with the "first 100" framing AND limits downside if the post takes off. Confirm HR's current promo code allocation status before posting.

### Cached admin DM template (use for HYROX UK Community)

```
Hi [admin name],

Just joined HYROX UK Community — appreciate the work running it.

I read the group rules carefully and want to ask permission before
posting anything. Specifically thinking about Rule 4 — totally agree
with the spirit (no aesthetics/MLM/crypto pitches). Wanted to check
with you whether what I'd like to share falls under it.

I'm Mark, an indie iOS developer based in the US. I built a 12-week
training app for Hyrox-style racing prep — all 8 stations, running
blocks, periodization to peak for race day. Just launched on the
App Store.

The ask: I'd like to offer the app free to the first 100 group
members who want it. No upsell, no premium tier, no follow-up sales
pitch — first 100 from the group post get it free, full stop. After
that, normal price like everyone else.

Since nothing's being sold to group members, I'm hoping that puts it
outside Rule 4 — but you call it. Happy to share the post copy with
you for review before it runs. If it's not a fit, totally understood
and I won't post.

Mark
```

### Rule 4 reference (HYROX UK Community)

> "We are not interested in promoting your aesthetics business, bitcoin trading or any other MLM business you are involved in."

Read: the rule targets MLM/crypto/aesthetics promotion specifically. A free indie fitness app from a community member with no commercial transaction to group members is structurally distinct. Acknowledge in DM and let admin decide.

### Post copy (draft — submit to admin first if requested)

To be drafted after admin approval. Should:
- Lead with the free-to-100 hook (the actual value)
- Position as community resource, not "the app you really need"
- Include direct App Store link
- Promo code redemption mechanism explicit
- Skip any sales/marketing language

---

## 🎯 Next Milestones

1. **HYROX UK Community admin approval** — pending (no timeline)
2. **HR App Store promo code allocation check** — verify quarterly allocation status before first post
3. **Post copy draft** — after admin approval, draft and submit for admin review before publishing
4. **Phase 2 expansion** — Ireland group, then other geos, then Reddit, then gym outreach
5. **HR frontend work** — none currently queued; v1.1 backlog includes splash screen bug fix, expo-store-review prompt, achievements/badges expansion, Apple Health integration

---

## 🔗 Cross-References

- **SCS_MP v6.4** — parent doc; multi-root-cause and push-verify discipline codified
- **SC_MASTER v5.10** — shared coach prompts in hybrid-rockstar-api; E3-C closes SC's Ask Coach workstream too
- **HR_MASTER_FROZEN** (if exists) — frozen architectural state (not modified this session)

---

*Ask Coach workstream closed. FB promo workstream awaiting admin approval. No active code work.*
