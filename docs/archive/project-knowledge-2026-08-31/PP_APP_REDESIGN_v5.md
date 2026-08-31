# PP App Redesign — Teardown, Design Direction & Build State

**Status:** ACTIVE — design-direction reference AND implementation/build log for the PP app premium redesign.
**Version:** v5 (August 31, 2026) — 🔴 **CORRECTED AGAINST THE REPO.** v3 was two months and 86 commits stale: everything it listed as *pending* (haptics, AI chat, Apple Health) is **built**, the PK curve it called "still-unbuilt" is **built with unit tests**, and five feature areas it never mentioned exist. See **§A9 CORRECTIONS** and **§A10 WHAT SHIPPED AFTER v3**. Prior header: v3 (June 26, 2026) — adds **§A Implementation State & Locked Build Decisions** (the actual build work: Phase 2a–2c, V4 elevation, B1 [+] sheet, Stage 4 full theming, Research Library A+B redesign, Liquid Glass declined). Adds **§B Supersede notes** (the IA in old §8 and the elevation values in the theme spec are now superseded by what shipped). Carries forward v2's design direction (§1–§9: teardown, PK-curve spec, onboarding, RUO posture, nutrition-skip) **by reference — see PP_APP_REDESIGN_v2 for full text.**
**Branch:** `feat/app-premium-redesign` @ **`92ec07e`** — **+86 commits ahead of main, 0 behind**, pushed to origin, tree clean, no stashes. **main untouched at `f82f37f`** (Jun 23, in sync with origin; push is Mark's trigger).
**Marketing version:** `app.json` → **1.1.0** · **App Store live: 1.0.8** (Jul 3).
**Related:** PP_APP_THEME_SPEC v1 (token contract — elevation values partly superseded, see §B), PP_MASTER (+ addenda), `constants/theme.ts`, `components/Card.tsx`.

---

# §A. IMPLEMENTATION STATE & LOCKED BUILD DECISIONS (this session)

## A0. Execution / verification discipline (LOCKED, every app CC prompt)
- **HEADLESS ONLY** on every CC prompt: no computer-use / cliclick; CC must not tap/click/move windows or take over the screen. Verify via git, `tsc --noEmit`, `npm test`, `simctl` (openurl to navigate, `io booted screenshot` to capture), and curl only. Live GUI interaction / visual sign-off is **Mark's**. (CC kept seizing the screen via computer-use until this was made standing; also a Code-tab "hide other windows while Claude works" setting can be toggled off.)
- **Preview-route pattern (LOCKED):** for any "show me options" decision, CC builds a **throwaway** `app/<name>-preview.tsx` route, screenshots the candidates headlessly, then **deletes it**. Used this session for the [+] sheet (A/B then B1/B2) and the glass tab bar. Never ship a preview route.
- **Recurring CC commit quirk (benign):** when a path is `git rm`'d, a follow-up `git add` of that path aborts before staging other files, so the first commit captures only the deletion. CC has self-caught + amended every time (sheet build, glass cleanup). Not a problem — just expect the amend.
- **Branch hygiene:** all redesign work on `feat/app-premium-redesign`; **main is never pushed by Claude/CC** — Mark triggers the push. Per-stage logical commits, explicit-path staging, never `git add -A`.

## A1. Elevation — FINAL (V4) — LOCKED
Long tuning arc (V1→V4) resolved to the **"Pep-AI float"**:
- Light page background **`#f7f8fa`** (near-white, intentionally *not* pure white so white cards lift).
- Light card = **two-layer shadow**: outer wide penumbra `shadowOffset{0,16}/radius 40/opacity 0.12` + inner tight contact `{0,2}/6/0.10`, `shadowColor #0f172a`, `elevation 8`.
- Implemented via a **reusable `components/Card.tsx`** (nested Views: outer penumbra + inner contact in LIGHT; **lightness + border** in DARK — dark cardOuter/cardInner are no-ops). `theme.ts` has separate `lightElevation` / `darkElevation` objects (clean split).
- **STANDING RULE: every white / card-like surface uses `<Card>`.**
- **Confirmed learnings:** float comes from a SOFT/DIFFUSE two-layer shadow on a NEAR-WHITE page, *not* page-darkness contrast. The earlier "blinding" complaint was screen-brightness (dark chat → light app), not the design.
- **Stage 4 shadow re-tune (modals/callouts):** light `callout` `0 16px 40px @0.18 → 0 12px 36px @0.12`; `modal` `→ 0 16px 40px @0.14` — soft float matching the cards (the old heavy `0.18` values are gone).

## A2. Information architecture — FINAL — LOCKED (supersedes old §8)
**Tab bar: Home · Track · [+] · Vendors · Profile. Launches on Home.**
- **Home** = glance/read dashboard (PK-curve area + **read-only** "Today" + nav cards incl. the Research Library card + the "Results" stub). No Taken/Skip on Home.
- **Track** = do/edit (schedule / protocol builder + dose log **with Taken/Skip**).
- **Center [+]** = an **action button, not a route** → opens the action sheet (below).
- **Calculator** removed from the tab bar; reachable via [+]; its **History segment** (reconstitution log) intact.
- **Learn** removed from the tab bar → surfaced as the **"Research Library" card on Home** → the redesigned Research Library screen.
- Phase-2c Stage 1 skeleton **reviewed + passed** (7-point check: launches Home; Track has Taken/Skip; Home Today read-only; [+] reaches all 3 flows; Calculator+History via [+]; BPC-157 data intact across the Home/Track split; tab bar correct).

## A3. [+] action sheet — FINAL = **B1 standalone tiles** — LOCKED
- No "Quick Actions" header (removed).
- Three actions as **standalone `<Card>` tiles** (no wrapping container), each = tinted accent icon-chip + bold label, gaps between, floating **above the tab bar** over a dimmed backdrop (tap-scrim dismiss), clearing the home indicator (`TAB_BAR_HEIGHT = 88` shared const).
- Actions + routes: **Log Dose** (`checkmark-circle-outline`) → `/track`; **New Protocol** (`add-circle-outline`) → `/track?action=new-protocol`; **Calculator** (`calculator-outline`) → `/calculator`.
- Themed light + dark. (Chose B1 over B2-in-a-container after a rendered compare — the container muted the float.)

## A4. Research Library redesign — FINAL — LOCKED (Stages A + B done)
The former Learn screen (`app/(tabs)/learn.tsx`), fully rebuilt and theme-migrated:
- **One system:** the old "Browse by Category" buttons AND the separate compound list were **merged into a single accordion.** Each category = a `<Card>` header (icon + name + **count pill** + chevron), collapsed by default; expands to peptide rows (name + one-line descriptor + chevron) nested in the same card; independent multi-open.
- **Search** (pinned top) filters the accordion live + **auto-expands** categories with matches; empty → all collapsed; matches name + descriptor.
- **Ordering (LOCKED):** **categories follow profpeptide.com `/peptides` taxonomy order** (sourced from the app's own `categoryIcons` key order, which mirrors the site's `?category=` URLs — NOT alphabetized): Metabolic & Weight Loss → Recovery & Tissue Repair → Performance & Energy → Growth Hormone → Cognitive & Nootropic → Skin Health & Anti-Aging → Gut Health & Immunity → Sleep & Recovery → Longevity → Bioregulators → Sexual Health. **Peptides within each category = alphabetical (A–Z).**
- **Peptide tap → summary popup** (themed `<Card>` modal, light+dark, tap-scrim dismiss): name + 2–3 sentence summary + "Learn more on profpeptide.com" → `/peptides/<slug>`.
- **Footer:** quiet "Visit profpeptide.com" text link + 3 social icons (moved from mid-screen; no loud CTA).
- **Supplements removed** (in-app only — website supplement pages + peptide deep-links untouched). 48 peptide entries intact.
- **Vocab (LOCKED):** screen = **"Research Library"**; list label = **"Compounds"**.

### A4a. Peptide popup summary sourcing (LOCKED — strict order, never invent/embellish)
1. **PRIMARY:** the app's EXISTING per-peptide data (`desc` + `benefits` fields) — already PP-verified, RUO-framed. *(All 48 were composed from this alone this session — 0 enriched, 0 freshly researched.)*
2. **ENRICH where thin:** pull from that peptide's profpeptide.com `/peptides/<slug>` page (PP's own verified content) — reuse PP framing/facts, don't freelance.
3. **FALLBACK:** brief fresh research, RUO-safe, no embellishment.
- Any enrichment/research must be **listed/auditable** per peptide. Summaries live in the **data layer** (slug-keyed `SUMMARIES` map / `summary` field), not inline JSX. Row keeps the one-liner; popup shows the fuller version.

## A5. Liquid Glass (iOS 26) — DECLINED this cycle, queued next — LOCKED
- The floating frosted pill tab bar (Yahoo Finance style) is Apple's iOS 26 **Liquid Glass** material.
- **`expo-blur` approximation evaluated** (throwaway preview, light+dark) and **declined**: it's a *static frost* (no real lensing/refraction over scrolling content), renders flatter on sim, and making it real = ripping out the expo-router `tabBar` + app-wide safe-area/scroll-clearance work (high blast radius mid-submission) + a likely redo once Expo ships native iOS 26 support. Preview deleted, `expo-blur` uninstalled (clean).
- **DECISION:** pursue **real** Liquid Glass **next cycle, once Expo/RN ships native iOS 26 support** — at which point a floating glass tab bar pairs naturally with the V4 floating-card language. Don't ship the fake.

## A6. App pre-submission queue — 🔴 SUPERSEDED, ALL ITEMS BUILT (see §A9)

*v3's queue read: haptics → AI chat → submit, with Apple Health/Results as an open decision leaning "next cycle."* **All three are implemented on the branch.** The queue as written is historical; §A9 records actual state.

## A6b. 🔴 VERSIONING — READ THIS BEFORE ANY BUILD

**`VERSIONING.md` (in-repo, dated 2026-08-22, sourced from App Store Connect) is AUTHORITATIVE over this doc on anything version-related.**

- **Marketing version is LOCAL** — `app.json` → `expo.version` = **1.1.0**. This is what appears on the App Store.
- **Build number is REMOTE** — `eas.json` sets `appVersionSource: "remote"` with `autoIncrement: true` on production. EAS owns it; **there is deliberately no `buildNumber` in app.json** (confirmed absent, as is Android `versionCode`).
- **App Store released:** 1.0.1 (May 14) · 1.0.2 (May 17) · 1.0.7 (Jun 7) · **1.0.8 (Jul 3) — currently live**
- **TestFlight only:** 1.0.0, 1.0.5, 1.0.6 · **Never existed:** 1.0.3, 1.0.4 · **Highest build number:** 1.0.10
- 🔴 **GIT DOES NOT RECORD WHAT SHIPPED.** 1.0.7 and 1.0.8 were **built from uncommitted working-tree edits and never committed** — committed `main` sat at 1.0.5 while the App Store was two releases ahead. Never infer a release from git history on this repo.

## A7. Small follow-ups (non-blocking, logged)
- **Cold-deep-link guard:** cold-launching directly to `/track?action=new-protocol` as the very first route throws "navigate before mounting" (`router.setParams` before Root Layout mounts). The real [+]→New Protocol path reaches Track warm and works. Guard the param effect until nav is ready. Pre-existing, out of Stage 4 scope.
- **`www` canonical:** the Research Library popup "Learn more" links use `https://www.profpeptide.com/...` (with `www`); most site work this session used the apex `profpeptide.com`. Confirm `www`→apex redirect (or both serve) so the link lands.
- **A–Z blend grouping (cosmetic):** strict A–Z interleaves CJC variants with the CJC+Ipamorelin blend. Fine as-is; future "group blends" tweak if it ever bugs.

## A9. 🔴 CORRECTIONS — what v3 got wrong (repo-verified, 2026-08-30)

Every item below was listed in v3 as pending, open, or unbuilt. **All are implemented.**

| v3 said | Repo says |
|---|---|
| **Haptics** — queue item 2, unbuilt | ✅ **BUILT.** `lib/haptics.ts` + **136 call sites**. Fires via `tabBarButton` (the `listeners` prop is dropped). ⚠️ **Deliberately NOT gated on Reduce Motion** — governed by iOS System Haptics only. **This contradicts v3's spec line "respect reduce-motion"** — the shipped behavior is the decision |
| **AI chat** — queue item 3, "biggest build", unbuilt | ✅ **BUILT.** `app/chat.tsx`, 401 lines, streams from `https://profpeptide.com/api/coach`, renders markdown |
| **Apple Health / Results** — OPEN DECISION, "Claude's lean: next cycle, not this one" | ✅ **BUILT THIS CYCLE.** `@kingstinct/react-native-healthkit ^14.0.2`, config plugin in `app.json`, `lib/healthkit.ts` bridge, **read AND write** (write enabled for weight only). `app/results.tsx` is **918 lines** — manual entry, HealthKit, trends, bloodwork. **The decision is closed by the build** |
| **PK curve** — §C, "still-unbuilt", spec only | ✅ **BUILT.** ~10 commits: hero estimated-level chart, a pure multi-dose superposition engine **with unit tests**, 7D/30D/90D/All-time, DAC disambiguation, adaptive sampling, citation/disclaimer behind an (i) popover |

**What genuinely does NOT exist:** OCR/PDF bloodwork import. `lib/bloodworkStore.ts` records that Apple Health has no quantity type for those markers — **manual-only by design**, not a gap.

**Codebase hygiene, verified:** **zero** `TODO`/`FIXME`/`HACK`/"coming soon"/"not implemented" markers across `app/`, `components/`, `lib/`. No commented-out alternatives, no competing implementations, no feature flags gating unfinished work. **10 test files** run under `npm test` with `TZ=America/New_York` pinned (schedule math, calendar data, results store, trends, PK model, custom compounds, bloodwork, backup, PK data, compounds).

`app/(tabs)/add.tsx` is 8 lines but is **intentional, not a stub** — a placeholder route for the center `[+]` tab slot that redirects to Home if deep-linked.

## A9b. 🔴 REACHABILITY — every screen is reachable, but two will fool an auditor

Every `router.push/replace/navigate` target was traced against every route file. **No unreachable screens.**

| Route | Entry point |
|---|---|
| `index`, `track`, `vendors`, `profile` | Tab bar |
| **`calculator`** | **`[+]` sheet only — `href: null`, NOT in the tab bar** |
| **`learn`** | **Home nav card only — `href: null`, NOT in the tab bar** |
| `chat`, `calendar`, `results` | Home |
| `trends` | Results metric cards + bloodwork groups |
| `history` | Trends |
| `about`, `privacy` | Profile |
| `add` | None by design — redirect stub |

⚠️ **Calculator and Learn are full screens deliberately kept out of the tab bar** (`href: null`, per a comment in `_layout.tsx`). Anyone auditing "is Calculator reachable?" from the tab bar will conclude wrongly.

⚠️ **Method note worth keeping:** a first-pass grep reported `/trends` as having zero inbound links. Wrong — it's navigated via a template literal (`` router.push(`/trends?metric=${m.key}`) ``) that a literal-string grep misses. **Reachability checks must handle template literals.**

## A9c. OPEN DECISIONS — visible in the code

1. 🔴 **The app's AI chat has NO retrieval, and is now out of step with the website.** `lib/aiPrompt.ts` states verbatim: *"(Live database retrieval is not enabled in this version.)"* The prompt instructs the model to point at profpeptide.com/PubMed rather than cite specifics. **The site's chat shipped Aug 28–29 with a 226-page retrieval corpus, guardrails, and citation** (see PP_AI_CHAT v1). Whether the app follows is an open product decision. Note the app route is `/api/coach` — a *different* endpoint from the site's `/api/chat`, and it uses `ANTHROPIC_API_KEY` while the site uses `ANTHROPIC_API_KEY_CHAT`.
2. **HealthKit is device-only** — `lib/healthkit.ts`: *"HealthKit cannot run in the simulator."* No simulator review can cover it.
3. **`feat/codes-learn-data-sync`** — one unmerged local commit renaming a Codes display name "Peptides.gg" → "Peptides GG" in `app/(tabs)/discounts.tsx`. ⚠️ **That file no longer exists on the feature branch** (Codes tab restructured), so the commit may not apply. Decide: re-apply the rename in its new home, or delete the branch. *(Note: the site made the same de-domain change — PP_X_POSTS §8.)*
4. **Two merged branches still present locally** — `feat/merge-learn-tab`, `fix/schedule-tz-offbyone`. Safe to delete.

## A10. WHAT SHIPPED AFTER v3 — the 86 commits, grouped by feature

v3's §A8 table covers work through `bc50c02` (Jun 26). Everything below landed after, through `92ec07e` (Aug 24).

| Area | ~Commits | What |
|---|---|---|
| **Design tokens & theming** | ~20 | Two-mode semantic tokens; global chrome; body/modal/calculator/vendors migrations; `Card` with two-layer shadow; near-white page tone. **Plus an August second pass** (Aug 21–22): light recolored to the website steel-blue system, **accent corrected to Capstone `#3E7CA8`** (from a `#3A759F` drift), and the app **flipped to light-default** |
| **Navigation restructure** | ~8 | Track·Calculator·Learn·Sourcing·Profile → Home/Track split, center `[+]` action button + quick-action sheet, Sourcing → Vendors |
| **PK curve engine** | ~10 | See §A9 — built, tested |
| **Results / body composition** | ~12 | Manual entry + trends (Stage A); Apple HealthKit read/write (Stage B); lean-body-mass derivation with provenance labels; ft+in height; metric glyphs |
| **Trends & History** | ~6 | `TrendChart`, tested trends engine, detail + history calendar screens, axis-tick fixes |
| **Calendar / dose logging** | ~8 | Month calendar with per-day detail and backfill logging; shared `MonthCalendar`; sticky month headers; **composite dose keys fixing duplicate-key collisions**; `amountAtDose` snapshotting for titration-correct history |
| **AI Research Assistant** | ~5 | See §A9 |
| **Compounds data** | ~4 | Full site parity, brand aliases, CJC DAC/no-DAC split, Cagrilintide, blend composition labels, alphabetized pickers |
| **Haptics** | ~4 | See §A9 |
| **Vendors** | ~3 | Trust/criteria screen, redirect to profpeptide.com, headline changes |
| **Versioning** | 1 | Marketing version → 1.1.0 |
| **Throwaway preview routes** | ~10 | Icon options, elevation variants, glass tab bar, sheet layouts — **all created AND deleted within the branch. None survive** |

⚠️ **NONE of this is in any shipped build.** The App Store is on 1.0.8 (Jul 3); the entire 86-commit branch — tokens, PK curve, Results/HealthKit, Trends, calendar/backfill, AI chat, haptics, compound data, the accent correction, and 1.1.0 itself — is unreleased.

## A8. Phase / commit history (this redesign, branch `feat/app-premium-redesign`)
| Phase | What | Key SHAs |
|---|---|---|
| 2a | AI chat-bubble icon, Sourcing→Vendors rename, guarded dev-seed History, icon-options (all kept) | `c10d40a` `67dcc92` `888e1ea` `5acc681` |
| 2b | Token migration: chrome + Track body; shadow-vs-lightness split | `11f1115` `e39a2d0` |
| Elev | V3 Card adoption → **V4 lock** | `15b833e` `c33f953` `bd4fb36` `752b8e5` |
| 2c S1 | IA restructure (Home/Track/[+]/Vendors/Profile) — reviewed/passed | `72decfd` |
| 2c [+] | B1 tile sheet (real) | `29718ca` |
| 2c S2 | Learn→Home Research Library card + Supplements removal | `d5cc023` `4eecee0` |
| RL A | Research Library rebuild + theme migration (accordion/search/footer) | `15f3808` |
| Glass | preview built `a22072f` → declined → cleaned up `a7fd3bb` | `a22072f` `a7fd3bb` |
| Stage 4 | All legacy surfaces → tokens (Track modals / Calculator / ReconHistory / Vendors); shadow re-tune; legacy palette retired | `e30205f` `822926c` `f523967` |
| RL B | Peptide summary popup + category/peptide ordering | `bc50c02` |

**Current THEMED surfaces (light+dark correct):** Home, Track body, Profile, Research Library, [+] tile sheet, chrome, Track modals (New Protocol + detail), Calculator, ReconstitutionHistory, Vendors. **Legacy palette fully retired** (zero refs app-wide; `colors`/`spacing`/`borderRadius` exports removed).

---

# §B. SUPERSEDE NOTES (what shipped vs. the June-23 direction docs)
- **IA:** v2 §8 described the pre-merge 5-tab (`Calculator·Log·Schedule·Learn·Discounts`) and Pep AI's reference structure. **Superseded by §A2:** the shipped IA is **Home · Track · [+] · Vendors · Profile**.
- **Elevation values:** PP_APP_THEME_SPEC v1 §3 proposed a 3-rung shadow ladder (`--shadow-md 0 4px 20px @0.08`, etc.) and `--bg #f5f7fa`. **Superseded by §A1:** shipped is `--bg #f7f8fa` + the **V4 two-layer** card shadow via `<Card>`, with modal/callout softened to `@0.12`/`@0.14` in Stage 4. The theme spec's *principles* (two hand-tuned themes, shadow-vs-lightness split, cyan anchor, AA discipline) all hold; only the specific shadow/`--bg` numbers are updated by what was tuned in-app.
- **Everything else in v2 / theme-spec v1 stands** — esp. the **PK Curve Component Spec (v2 §9)** and **token contract** — and remains the direction for the still-unbuilt PK curve + the AI chat RUO posture.

---

# §C. Design direction — carried forward UNCHANGED from v2 (see PP_APP_REDESIGN_v2 for full text)
- **§1–§2** Teardown (Shotsy/Pep AI/PeptidePal) + the light+dark-both-hand-tuned decision (Path C, cyan `#0891b2` anchor, no auto-invert; dark = elevation-by-lightness, light = elevation-by-shadow).
- **§3** Half-life / PK-curve architecture (opt-in per-compound, Off by default; per-value PubMed/PMC citations; PeptideProfile single source feeding app + site).
- **§4** Onboarding cut to 3–4 screens (consent/disclaimer → optional creator code → notifications); steal Pep AI's per-screen craft, not its 11-screen length; creator-code-at-onboarding adopted.
- **§5** Nutrition / meal-tracking **SKIP** (confirmed).
- **§6** RUO posture confirmed shippable (Pep AI ships full tracker + PK curve + calculator on research-only framing; opt-in half-life is the mechanism).
- **§9** **PK Curve Component Spec** (the hero component CC builds first): solid-past / dotted-future split at "Now"; hollow scrub ring + value/timestamp callout; distinct dose-marker dot; compound + timeframe dropdowns; ceiling label + dashed gridlines; gradient fill; per-mode rendering. **Still the spec for when the curve gets built.**

---

## 📅 Changelog
**June 26, 2026 (v3):** Added §A (implementation state + locked build decisions: HEADLESS-only + preview-route discipline; **V4 elevation final** via reusable `<Card>`; **IA final** Home·Track·[+]·Vendors·Profile; **[+] = B1 standalone tiles**; **Stage 4** full legacy-surface theming + shadow re-tune + legacy-palette retirement; **Research Library A+B** redesign incl. accordion, search, site-ordered categories + A–Z peptides, summary popup with locked sourcing hierarchy, Supplements removed; **Liquid Glass declined this cycle, queued next**; pre-submission queue haptics→AI→submit; Apple Health/Results open decision; small follow-ups). Added §B supersede notes (IA §8, theme-spec elevation values). §C carries v2 design direction forward by reference. Branch `feat/app-premium-redesign` @ `bc50c02`; main untouched `f82f37f`.
**June 23, 2026 (v2):** PK Curve Component Spec from live capture; full teardown confirmations. *(See PP_APP_REDESIGN_v2.)*
**June 23, 2026 (v1):** Initial teardown + design-direction locks.

---

*Design direction + build log for the PP premium redesign. RULE #0 governs. CC owns build; Claude instructs (HEADLESS only). Branch `feat/app-premium-redesign` @ **`92ec07e`** (+86 vs main), main untouched at `f82f37f`. **The pre-submission queue is BUILT** — haptics, AI chat, and Apple Health/Results all shipped to the branch. Next: Mark's device review → submit. Open: app-chat retrieval parity with the site (§A9c).*

---

## 📅 Changelog — v4

**August 30, 2026 (v4):** 🔴 Corrected against the repo after v3 went two months / 86 commits stale. **§A9 CORRECTIONS** — haptics, AI chat, Apple Health/Results, and the PK curve are all BUILT (v3 listed all four as pending or unbuilt); the Apple Health open decision is closed by the build; haptics deliberately NOT reduce-motion-gated, contradicting v3's spec line. **§A6b VERSIONING** — VERSIONING.md is authoritative; marketing version is local (1.1.0), build number is EAS-remote; **git does not record what shipped** (1.0.7 and 1.0.8 built from uncommitted working-tree edits). **§A9b REACHABILITY** — all screens reachable; Calculator and Learn are `href: null` and will fool a tab-bar audit; template-literal navigation defeats a literal grep. **§A9c OPEN DECISIONS** — the app's chat has no retrieval and is now out of step with the site's 226-page corpus; HealthKit is device-only; one orphan branch commit; two merged branches to delete. **§A10** — the 86 post-v3 commits grouped by feature, including five areas v3 never mentioned (Results/body comp, Trends & History, calendar/dose logging, compounds parity, the August accent correction to `#3E7CA8` + light-default flip). Nothing in the branch is in any shipped build.


---

## A11. 🆕 AUG 31 DELTA — chat parity route, PDF import, icon, build state

### /api/chat-app — the 1.1.1 retrieval route is LIVE (site repo, `fcdce83`)
App-framed second route on profpeptide.com reusing the site's corpus/retrieval/guardrail libraries (single-sourced — a forked copy is the bug this design prevents). **Commerce machinery ABSENT by construction** — grep-proven zero coupon/discount/price/affiliate code on the route; this is the App Review surface. Key = ANTHROPIC_API_KEY (coach key, blast-radius separation held). Rate limit: per-install `x-pp-install-id` header 40/day + IP fallback + 500/day IP anti-rotation ceiling, `chatapp:` keyspace separate from web. App-help answers carried over from lib/aiPrompt.ts. Same custom SSE shape as /api/chat.
**Client repoint = 1.1.1:** endpoint swap + SSE parser rewrite + 🔴 privacy copy update (app currently logs NOTHING; the route logs question text + salted-hashed install id, 30-day TTL — disclosure gate before the client ships).

### PDF bloodwork import — BUILT + PARKED (app repo, uncommitted)
Mark green-lit; recon-loop broken on his instruction. Built Epic-first on his real Kaiser PDF:
- `modules/pdf-text-extract/` — first-party PDFKit wrapper (NOT the 13-star npm package), lazy-guarded so Expo Go still boots
- `lib/labParse/` — generic core (de-frag, noise filter, label-anchor primitives, non-numeric tolerance) + `epic.ts` anchor set + registry. 🔴 Lab detection required: unknown format → manual fallback, never Epic-anchors-on-Quest
- `app/import-bloodwork.tsx` review screen — NOTHING saves unconfirmed; all-candidate ranges (Epic prints 12 for Total T — user picks theirs, app never guesses demographics); units captured as printed, flagged if outside allowed set (Kaiser's ng/mL for totalT = flagged, not converted)
- Results "Import PDF" entry; scanned-PDF ("" text) and password empty states
- 95/95 tests. Real-PDF results: SHBG 20 parsed correctly amid axis-label noise (16.5/55.9); Total T ">15.000" and Free T "Unable to Calculate" correctly null → user types
⚠️ **Untested anchors:** estradiol, hematocrit, PSA (sample was T-panel only; hematocrit most uncertain — CBC section). Quest/LabCorp = one new sameLine strategy + anchor file each, NOT a rewrite.
**AWAITING: Mark's device test** (dev build → Results → Import PDF → Kaiser PDF).

### App icon — decision pending
Old "Pp" tile REJECTED (recreated artwork — the standing rule). Mark's direction: site mark = research identity (glasses); app needs a TOOL identity (protocol tracking). **15 candidates incoming** — 5 prompt directions × Ideogram/ChatGPT/CD (open brief · abstract · single-object-elevated · brand-adjacent · constraint-free). Judge at 60px on a real home screen. Winner → CC mechanical resize only. 🔴 Source must be FULL SQUARE, sharp corners — iOS masks it; pre-rounded = double-clip wedges. Original glasses image: ~/Downloads, Aug 6 (if site-mark fallback wanted).

### Build/EAS state
Expo account **markshurtliff** · Apple ID markshurtliff@gmail.com · team VCT64S7K6P. Dev build SUCCEEDED after `npm install -g eas-cli` (21.2.0 was stale — "Build request failed" after upload = outdated CLI). ⚠️ Dev build = shell needing Metro (`npx expo start --dev-client`, same Wi-Fi); **preview build** (`eas build --profile preview`) is the standalone tester for HealthKit/haptics — check eas.json has the profile. Provisioning profile has ONE registered device.
**1.1.0 ship plan unchanged:** coach chat as-is; retrieval + privacy copy = 1.1.1. No release pressure (Mark).
