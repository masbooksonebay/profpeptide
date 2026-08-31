# SC Master Frozen

**Status:** FROZEN REFERENCE — stable rules, structural decisions, IP rules, monetization strategy
**Version:** v5.3 (May 27, 2026) — Territory Rollout Strategy section updated to reflect worldwide ship May 27, 2026
**Cross-referenced in:** SCS_MP v6.6

---

## v5.2 → v5.3 CHANGELOG

- **Territory Rollout Strategy:** Original phased plan (UK+IE → AU+NZ → Canada → US) SUPERSEDED. Worldwide ship May 27, 2026 expanded availability to 175 countries directly. Strategy section updated to reflect actual rollout.

All other v5.2 content unchanged.

---

## 🌍 Territory Rollout Strategy (UPDATED v5.3)

**Actual rollout sequence (vs original phased plan):**

| Phase | Original plan | Actual state |
|---|---|---|
| 1 | UK + Ireland | LIVE (May 2026) |
| 2 | AU + NZ | Silently completed (added pre-May 27, 2026) |
| 3 | Canada | SUPERSEDED — included in worldwide expansion May 27, 2026 |
| 4 | United States | SUPERSEDED — included in worldwide expansion May 27, 2026 |

**Worldwide expansion (May 27, 2026):** Expanded from 4 countries (AU + IE + NZ + UK) to "All Countries or Regions" (~175 countries) via ASC Pricing and Availability. CINC-driven change. Live version at expansion: v1.0.3.

**Soft-launch validation that justified worldwide jump:** 1 download in 5 days across 4 English-speaking territories confirmed zero infrastructure risk from worldwide expansion.

**Studio-standard soft-launch pattern (now formalized):** 4 English-speaking + kg-using countries (AU + IE + NZ + UK). Same pattern used for HR's v1.0.0 launch. Worldwide jump triggered when soft-launch download data confirms zero risk of overwhelming.

---

## 🔒 Monetization Strategy (UNCHANGED from v5.2)

**Option C — Free with AI cap, paid for unlimited AI**
- Free tier: All programs supported, full logging, e1RM tracking, AMRAP tracking, AI coach with weekly query cap (cap value TBD with 1.0.5 spec)
- Paid tier (SC Pro): Unlimited AI coach queries
- All methodology / programs stay free permanently — gating methodology would weaken brand promise

**Implementation target:** SC 1.0.5 (post-1.0.4 SS launch)

**Pricing direction (not final):** $7.99/mo, $59.99/yr leaning. Mid-market positioning between Boostcamp ($4.99/$39.99) and Juggernaut ($35/mo).

**Studio bundle (Studio Pro across SC + WN + future apps):** DEFERRED.

**Pre-1.0.5 state:** No IAP. Monetization through Amazon affiliate (Gear tab) and Learn More book links.

---

## 🔒 Promo & Throttle Rules (UNCHANGED from v5.2)

**First-100 grandfathering pattern (studio-wide):**
- Promo offering for forum launches: first 100 downloads per forum/territory get free subscription access
- Mechanism: Apple promo codes (100/version cap, ASC-managed) OR server-side lifetime grant flag (custom infrastructure). Mechanism decision deferred until 1.0.5 build.
- Pattern carries across studio — WN locked the same "first 100 per territory" model

**Throttle mechanism if downloads exceed support capacity:**
- **Preferred:** Per-territory removal in ASC > Pricing and Availability. One click, no algorithm penalty, reversible in minutes.
- **Escalation:** "Remove from Sale" entirely. Keeps existing users, stops new downloads everywhere.
- **Avoid:** Full app pull from App Store. Algorithm penalty, app gets flagged abandoned in recommendations, re-launches lose momentum.

---

## 🔒 Trademark / IP Rules (UNCHANGED from v5.2)

**Per-program disclaimer requirements:**

| Program | Trademark concern | Disclaimer required |
|---|---|---|
| Wendler 5/3/1 | Jim Wendler personal name + 5/3/1 Inc | "Not affiliated with Jim Wendler or 5/3/1 Inc" |
| 3x5 Strength (Rippetoe-inspired) | Mark Rippetoe personal name + Aasgaard Company | "Not affiliated with Mark Rippetoe or The Aasgaard Company" |
| Texas Method | Methodology associated with Rippetoe but "Texas Method" name not directly trademarked | Soft disclaimer |
| 5/3/1 BBB | 5/3/1 variant — Wendler disclaimer covers | Already covered |
| GZCLP | Cody LeFever / GZCL methodology | "Not affiliated with Cody LeFever or the GZCL methodology" |
| nSuns | Anonymous Reddit user creator | Lower IP risk, soft disclaimer sufficient |

**Master disclaimer pattern:**
> "Strength Cycle is an independent training tool. Not affiliated with [Wendler, 5/3/1 Inc, Mark Rippetoe, The Aasgaard Company, Cody LeFever, etc.]. Use of this app is for personal training tracking purposes only."

**Critical rule:** never claim endorsement, partnership, certification, or official affiliation with any program creator. Always frame as "independent training tool" implementing the methodology faithfully for personal use.

---

## 🔒 ASC Submission State Glossary (UNCHANGED from v5.2)

- NOT a "needs your action" state.
- "Pending Developer Release" = Apple has approved, awaiting Mark's release click.
- "In Review" = Apple actively reviewing.
- "Waiting for Review" = in queue, hasn't started.
- "Processing for Distribution" = transient, between release click and live (~minutes).

---

## 🔗 Cross-References

- **SC_MASTER_ACTIVE.md** — current state, in-flight work, recent changelog, submission tracking
- **SCS_MP v6.6** — studio-level strategy, brand line, portfolio decisions
- **WN_MASTER (FROZEN + ACTIVE)** — sister app (AI-flagship parallel positioning, multi-system methodology platform)
- **HR_MASTER v8** — sister app (Hyrox-style single-methodology + tier toggle)
- **Apple Developer Org Conversion case 102887649950** — pending; affects developer name on SC listing
- **hybrid-rockstar-api repo** — server-side Ask Coach prompt host (shared with HR app)

---

## 📝 Frozen Doc Update History

- **v1-v3** — early SC build, single-program (5/3/1 only) positioning
- **v4** (April 2026) — Track tab refactor incorporating AMRAP Tracker
- **v5** (May 9, 2026) — FROZEN/ACTIVE split. Multi-program platform thesis codified. Territory rollout strategy formalized.
- **v5.1** (May 9, 2026) — Implementation architecture additions.
- **v5.2** (May 16, 2026) — Monetization Option C lock, Promo & Throttle Rules, Things to Never Do.
- **v5.3** (May 27, 2026) — Territory Rollout Strategy section updated to reflect Phases 1-4 superseded by worldwide ship May 27, 2026. Studio-standard soft-launch pattern documented (4 English-speaking + kg-using countries).

---

**This is the FROZEN doc. Day-to-day state lives in SC_MASTER_ACTIVE.md.**
