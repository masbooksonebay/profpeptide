# Hybrid Rockstar — Master Ref Doc

**Status:** ACTIVE — single doc structure
**Version:** v11 (June 17, 2026) — adds the **v1.0.1 HYROX-accuracy release** (build 11), the **EAS marketing-version mechanics correction (LOCKED)**, the **ASC 1.0.1 prep (parked for submit)**, the **external-TestFlight setup**, and **Kayleigh's beta-feedback triage**. Carries v10 forward (X launch, OG card, social strategy) unchanged.
**Cross-referenced in:** SCS_MP

---

## 🆕 v1.0.1 — HYROX accuracy release (June 17, 2026)

**Trigger:** Kayleigh (Facebook beta tester) flagged 3 items. Two were factual errors (fixed); one is a programming judgment call (held).

**Fix 1 — Sled push weights.** Pro Men was **225 → 202 kg** (correct, sled included). CC also caught and fixed **Pro Women 132 → 152 kg**. Full verified table: **Open M 152 / Open W 102 / Pro M 202 / Pro W 152.**

**Fix 2 — Burpee Broad Jump cue.** The app's "full extension at the top" requirement **overstated** the rule and was removed. Enforced HYROX gates: chest + thighs to the floor; both feet take off and land together (parallel); feet must not pass the hands on rising. A full upright stand is **not** required (frog-style is legal).
- Files touched: `constants/race.ts`, `data/rules.ts`, `lib/coachPrompt.ts`, `lib/divisions.ts`. **Left `constants/hyroxMovements.ts` untouched** — its "full body extended" is the correct flat-bottom plank standard, not the top-stand gate.
- Commits **`46eca7e`..`72b3b53`**, tsc clean, pushed.

**Fix 3 — wk1-2 strength sessions ran ~30-35 min vs the 45 advertised** ("room for another exercise"). This is a **programming judgment call, NOT a factual fix** — **HELD** for the next programming pass / beta decision. ⏳ **OPEN — Mark decision.**

⚠️ **Tech-debt flagged:** the sled weights live in **5 files and had drifted 3 ways**. → **Future CC task: consolidate sled/division weights to a single source of truth** so they can't desync again.

### Build → ASC → TestFlight
- **EAS build 11 = v1.0.1** (.ipa ready). Build URL: `https://expo.dev/accounts/markshurtliff/projects/hybrid-rockstar/builds/a8364694-08b7-4a92-a5ef-6814f6f7f573`
- **ASC 1.0.1 prepped via CINC, parked for submit:** version created; "What's New" pasted (*Accuracy improvements: corrected Pro sled push weights / refined burpee broad jump guidance / minor fixes*); **build 11 attached**; no export-compliance prompt (the encryption flag in `app.json` auto-answered it); **"Manually release this version" set** (ASC had defaulted to *automatic* — CINC flipped it). **Hard-stopped at Submit.** → **Mark: inspect → Submit for Review → manually Release after approval.**
- **External TestFlight available now** (build 11 is in ASC). CINC prompt ready: **public-link** model for Kayleigh + the FB beta group; fill Test Info (feedback email `markshurtliff@gmail.com`, what-to-test = the accuracy fixes); enable the group's public link; **pause before submitting for Beta App Review**; never release. ⏳ **PENDING run.** (Public link works immediately, but external testers can't install until Mark submits build 11 for Beta App Review and Apple clears it.)

---

## 🔧 EAS versioning mechanics — CORRECTED (LOCKED)

**The old note was WRONG** ("app.json version edits are ineffective; use `eas build:version:set --platform ios` before each build"). Proven false this session.

**Correct mechanics:**
- `appVersionSource: "remote"` + `autoIncrement: true` governs **only the buildNumber** — EAS auto-increments it each build (confirmed: "Incremented buildNumber from 10 to 11").
- The **marketing version** (`version` in `app.json`) is **edited directly in `app.json` and committed BEFORE the build** (commit `ebb3815` did the 1.0.0 → 1.0.1 bump). If you don't commit first, EAS archives the old version.
- `eas build:version:set` is for the **build number only**, is **interactive**, and does **NOT** take a positional marketing version — `eas build:version:set --platform ios 1.0.1` **FAILS** ("Unexpected argument").
- Run `eas build` / `eas submit` **outside a CC session** (`/exit` first) or in a fresh plain terminal tab. EAS builds run in the cloud (track via expo.dev → Builds, `eas build:list`, or email; the build continues even if the terminal disconnects).
- Use `eas whoami` as a 2-second connectivity probe if a build fails with `getaddrinfo ENOTFOUND api.expo.dev` (that's flaky DNS, not config).

**This supersedes the EAS note in SC_MASTER_FROZEN and older SCS_MP.**

---

## 📍 Status Snapshot (updated June 17, 2026)

| Component | State |
|---|---|
| App version | **v1.0.0 LIVE; v1.0.1 (build 11) prepped in ASC, parked for submit** (accuracy release) |
| ASC ID | 6762101905 · App Store URL `https://apps.apple.com/app/id6762101905` |
| App repo | `hybrid-rockstar` (Expo) — **relocating ~/Desktop → ~/dev** (see SCS_MP repo-relocation §; confirm path before use) |
| Backend | `hybrid-rockstar-api` (Next.js/Vercel, shared with SC) — same relocation |
| Marketing site | `hybrid-rockstar-site` — static HTML, **`vercel --prod`** (NO git remote), aliased to hybridrockstar.app — same relocation |
| X account | **@hybrid_rockstar** — verified ✓ |

---

## Carried forward from v10 (June 7) — UNCHANGED
- **OG social card** built/deployed + **X cache lesson (LOCKED):** post `https://hybridrockstar.app/?v=2` to force a fresh scrape (works because the image is a real static PNG and there's no hard canonical).
- **Social-promotion strategy (PLANNED):** X = ball-roller/content engine; **IG Reels + FB HYROX groups = the real target.** Time-boxed daily program-sample campaign (safe — app is free, sticky features stay gated). Cadence: feature posts 1-2×/week (weekends) + workout posts midweek. IG = workout-as-image + caption-as-coaching; needs a branded workout-image template. FB groups: participate genuinely, no cold app links.
- **First launch post** finalized (first-100-free-for-life; post with `?v=2` link).
- **HYROX trademark/etymology** (nominative only; "Hybrid Rockstar" = community backronym).
- **Locked design** (green=week / blue=session; `leadingEdgeWeek`; three-card treatment).
- **6 FB HYROX groups** joined + v2 community post template.
- **Prior v1.0.1 prep-queue items** (carry forward, status separate from the accuracy build): Cloudflare Email Routing; in-app feedback email `.shop`→`.app`; Wave 3F achievements/badges.

---

## 🎯 Next Milestones
1. **Inspect → Submit for Review → manually Release** HR v1.0.1 (build 11).
2. **Run the external-TestFlight CINC prompt** → submit build 11 for Beta App Review → share the public link with Kayleigh + the FB beta group.
3. **Decide the wk1-2 strength-block question** (Kayleigh's 3rd item).
4. **CC task: consolidate sled/division weights to a single source of truth.**
5. Post the launch post (`?v=2`); roll out the posting cadence; build the workout-image template; research the HYROX IG/FB landscape.

## 📅 Changelog
**June 17 (v10 → v11):** v1.0.1 HYROX-accuracy release — sled Pro M 225→202 + Pro W 132→152, BBJ cue de-overstated (`46eca7e`..`72b3b53`); EAS build 11; **EAS marketing-version mechanics corrected (LOCKED)**; ASC 1.0.1 prepped + parked (manual release set); external-TestFlight setup ready; Kayleigh's wk1-2 item held as a programming call; sled-weights-single-source-of-truth flagged as CC tech-debt; repos relocating to ~/dev.
**June 7 (v9 → v10):** X account verified; OG card + `?v=2` cache lesson; social-promotion strategy; first launch post; marketing-site repo documented.
**Prior:** see v9 (groups, trademark/etymology, design).

## 🔗 Cross-References
- **SCS_MP** — parent; repo-relocation §; EAS mechanics; HYROX outreach pattern
- **PP_X_POSTS** — X posting conventions
- **SC_MASTER** — sibling EAS app (its old EAS note is superseded here)

---

*HR v1.0.0 live; v1.0.1 accuracy build (11) parked in ASC for Mark to submit + release. EAS marketing-version mechanics corrected. External TestFlight ready for Kayleigh + the FB beta group.*
