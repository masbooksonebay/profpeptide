# HR MASTER — v7

**Hybrid Rockstar — Hyrox training iOS app**
**Date:** 2026-05-24
**Status:** Active tracker. Replaces v6. Minor changes from v6.

---

## App state (carried forward, no changes from v6)

- App not yet in App Store
- Wave 3D v5 committed (07c5146)
- 12-week program structure: terminology sweep + dead-code deletion + week title simplification + WeekTile card cleanup + leading-edge CURRENT week algorithm + three-card visual treatment (CURRENT/COMPLETE/NEUTRAL)
- Green checkmark for completed week cards = intentional, distinct from blue session-level completion indicators
- Race date is informational only; `leadingEdgeWeek` drives CURRENT in both race + no-race modes
- "Hyrox" confirmed registered trademark — cannot appear in HR branding

---

## Ask Coach — CLOSED (v6 final state, no changes)

All Ask Coach work CLOSED across E2 + E3-B + E3-C. Last session shipped E3-C.

---

## Pending waves (carry-forward)

### Wave 3E (next pre-launch wave)
- Splash screen bug (sim shows SC instead of HR on refresh)
- Transparent-bg fix
- Review prompt via expo-store-review

### Wave 3F (post-launch)
- Achievements / badges system
- First workout, first block, first cycle, 10/25/50 workout milestones, 7-day streak

### v1.1 (deferred)
- Apple Health integration

---

## App Store submission path (carry-forward)

Pending before first submission:
1. Wave 3E completion
2. App Store description
3. Screenshots (6.9" Display canonical, scales to all sizes)
4. EAS production build
5. TestFlight cycle

---

## FB community outreach (IN FLIGHT — added v7)

**HYROX UK Community Facebook group:**
- 30K members, private group
- Mark approved into group earlier this session
- Admin list confirmed (search order):
  1. **Emma Waring** — All-star contributor, first-listed admin → **primary target**
  2. Athalie Redwood-Mills — academic, Senior Lecturer at Nottingham Trent → fallback if Emma doesn't respond in 24-48h
  3. Paul Cocksedge — third option

**Rule check:**
- Group Rule 4 ("No promotions or spam") targets aesthetics/MLM/crypto specifically — free-to-100 offer for indie fitness app is structurally distinct from rule target
- Group Rule 6 (ticket scalping) doesn't apply

### DM script (LOCKED)

> Hi Emma,
>
> I'm Mark, a solo developer who's been training for Hyrox events for the past two years. I built a 12-week training app called Hybrid Rockstar that I'm getting ready to launch.
>
> I noticed Rule 4 about promotions — completely understand the intent. What I'd like to propose is **giving away free lifetime access to the first 100 members of this community before public launch**, in exchange for any honest feedback. No promo codes for purchase, no funnel — just gifts to early supporters in a community that helped me build something useful.
>
> I'd be happy to send you the App Store description and a draft of the post for your review before I share anything. And of course if you'd rather I not post, I'll respect that — no hard feelings.
>
> Thanks for considering it.
>
> Best,
> Mark

**Pre-fire checklist before Mark sends DM:**
- Verify App Store promo code count available (Apple gives ~100 promo codes per app per quarter, 28-day expiry) — confirms "first 100" framing is actually deliverable
- Promo codes located via App Store Connect → HR app → Pricing and Availability → Promo Codes section

**Workflow:**
1. Mark DMs Emma (script above)
2. Wait 24-48 hours for response
3. If no response → fallback to Athalie
4. If admin approves → Mark posts to group with promo code distribution
5. First 100 redemptions → seed user base + feedback

---

## Mark's next action items (HR-specific)

1. Verify App Store Connect promo code count (CINC task, ~2 min)
2. DM Emma Waring with locked script
3. Wait for response

No Claude action items until Emma responds OR Wave 3E is authorized.

---

## Tools & files (carry-forward)

- Repo: `~/Desktop/hybrid-rockstar`
- App icon: locked
- Expo/EAS pipeline: configured
- expo-store-review: integrated (per Wave 3E spec)

---

## Backlog

- Wave 3E (splash screen, transparent-bg, review prompt)
- Wave 3F (achievements/badges)
- v1.1 (Apple Health)
- App Store assets (description, screenshots)
- Branding question: app name shows "HR" or "Hybrid Rockstar" abbrev — confirm before App Store description draft

---

## Next session

HR is parked pending two parallel paths:
- Mark DM Emma Waring → wait for admin response
- Mark verify promo code availability via CINC

No CC work scheduled for HR next session. Phase 1 PP work takes priority.
