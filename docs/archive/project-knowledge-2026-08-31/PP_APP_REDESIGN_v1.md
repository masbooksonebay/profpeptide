# PP App Redesign — Competitive Teardown & Design Direction

**Status:** ACTIVE — design-direction reference for the PP app premium redesign
**Version:** v1 (June 23, 2026)
**Owner of build:** CC (frontend-design) once token spec + CC prompt are written
**Related:** PP_MASTER, theme.ts (`constants/theme.ts`), the post-merge 5-tab app structure

---

## 0. Purpose

Captures the conclusions from the competitive teardown of Shotsy, Pep AI, and PeptidePal so the design direction survives a new chat even though the screenshot images do NOT carry over between conversations. A new chat inherits these decisions from this doc; the screenshots themselves must be re-uploaded if pixel-level reference is needed again.

---

## 1. Apps analyzed (mode + relevance)

| App | Mode | Relevance to PP | What it proved |
|---|---|---|---|
| **Shotsy** | Light | Single-med GLP tracker, no library | Confirmed the **populated PK/level curve** ("Estimated Medication Levels") as the hero premium signal. Light. |
| **Pep AI** | Light default **+ Dark toggle** + 6 accent themes | **Closest structural sibling to PP** — multi-compound tracker w/ research library, schedule/create, application-site, dose-history, reconstitution calculator | Near-identical RUO posture; half-life as **opt-in per-compound setting**; compound-builder flow is PP's Tier 2 template |
| **PeptidePal** | **Dark** | Dark reference (PP's base is dark) | Breaks the "white always wins" assumption — polished apps **commit to a deliberate version of whichever mode**, not an auto-invert |

**Net pattern:** It is NOT a universal "white wins" law. Shotsy light, Pep AI light-default-with-dark-toggle, PeptidePal dark. The throughline is that **the polished ones commit to a deliberately designed version of their chosen mode.** Auto-inversion is the enemy.

---

## 2. KEY DECISION — Light + Dark, both hand-tuned (Path C / hybrid)

**Ship light as default, dark as an option, anchored on PP's existing cyan accent.**

Rationale:
- PP's hero differentiator is the **PK curve**; charts/data-viz read better on light backgrounds (more contrast headroom for axis labels, dashed projections, gradient fills, scrub callouts). Clinical-trust cue is a secondary fit with the RUO register.
- Light-default + dark-toggle is the proven pattern (Pep AI ships exactly this). De-risks the call: dark-preferring researcher/biohacker users keep dark; charts get the light surface they need by default.
- This is the best/most-durable choice, not the shortcut — more work than staying all-dark, but the right foundation.

### 2a. The polish problem (Mark's own diagnosis — LOCKED)

PP's current white mode on **both app and website is basic because it's a mechanical inversion of the dark theme** (hues flipped in luminance). Auto-inversion always looks cheap because **good light and dark themes are NOT inverses of each other.** The token spec must define light and dark as **two first-class, hand-tuned themes sharing one accent identity** — not one palette inverted.

| | Dark mode | Light mode |
|---|---|---|
| **Elevation** | by lightness (raised cards get *lighter* than bg) | by shadow (white cards separated by soft diffuse shadows, à la Pep AI) |
| **Accent** | saturated accents pop against dark | accent must be *darkened* to hold contrast on white — PP cyan `#0891b2` likely needs to go a step deeper for text/icons to pass WCAG on white |
| **Separation** | shadows barely register → borders/glows do the work | needs subtle gray bg behind raised white cards or everything flattens |

**Implementation requirement:** components reference **semantic tokens** (`--surface`, `--surface-raised`, `--accent`, `--accent-on-light`, etc.) so each mode resolves them correctly. Two hand-tuned palettes, separate surface ramps, separate elevation strategy (shadow vs lightness), accent variants tuned per-mode. This is what makes it look polished instead of inverted — on both app and site.

**Accent identity:** Keep PP's **cyan `#0891b2`** as the core accent. Do NOT copy Pep AI's blue→purple gradient (that's their identity). Differentiate on accent while matching the structural light-default pattern.

---

## 3. KEY DECISION — Half-life / PK curve architecture

The **compound research detail** (Pep AI's 5-Amino-1MQ page) is the credibility model for PP's PK differentiator:

- Shows a **"Half-Life & Peak Time"** block: two stat cards (Half-life 6.9h / Time to peak 1h).
- Honesty hedge: "Shown in hours when current research supports a value. Route, formulation, and study design can change these numbers."
- **Cites the specific source per PK value** — a "Sources used for the half-life and peak-time values above" section listing the exact PubMed/PMC papers, tagged "Used for: Half-life."

**Implications for PP:**
1. This is the defensible, evidence-honest way to ship PK data in an RUO app — matches the evidence-honesty posture PP's CC profile-build prompts already enforce. PP can do it *better* (deeper website research content to draw from).
2. **PeptideProfile schema requirement:** each compound needs half-life value + time-to-peak + **per-value source citations**. Single-source PeptideProfile feeds both app (PK curve) and site.
3. Half-life lives in **two places** — (a) read-only research/Learn surface (descriptive, cited) and (b) the compound-builder's **opt-in "Half life settings" (Off by default)** which is user-confirmed input that drives the projection. Clean separation: education vs. functional input. The opt-in pattern sidesteps the "are you giving dosing guidance" worry because the *user* enters/confirms the half-life.

**Compound-builder flow (Pep AI = PP Tier 2 template):** Compound (typeahead + "Common Compounds" list) → Administration (injectable/oral/nasal/sublingual/topical) → Total Amount → BAC Water → Dosage/Titration (**Fixed vs Titration** toggle) → More Options: Reconstituted Date, **Half life settings (Off default)**, Nickname.

---

## 4. KEY DECISION — Onboarding: cut hard (3–4 screens, not 11)

Steal Pep AI's per-screen **craft** (one bold question, progress bar up top, pinned gradient CTA) but NOT its length. Pep AI collects age/sex/height/weight only because it does BMI/calorie math — PP doesn't, so those are pure friction.

**PP funnel:** consent/disclaimer (needed for RUO anyway) → optional creator code (ties to affiliate model) → notifications → done.

Note: Pep AI captures a **creator/referral code at onboarding** ("Did a creator send you?") — relevant to PP's Goaffpro/affiliate apparatus; ties installs to creator/vendor codes. Parked as a pattern worth adopting.

---

## 5. KEY DECISION — Nutrition / meal-tracking: SKIP (confirmed)

Seen across 6+ screens in Pep AI's Pro bundle (Lifestyle tab, Nutrition calculator, Meal Scan). Skip for PP because:
- Head-on fight with MyFitnessPal/Cronometer — commodity, hard to win.
- Ongoing cost (food-DB licensing + photo/barcode AI).
- Not PP's moat. PP's moat is PK-curve/half-life depth + research library + affiliate ecosystem; nutrition dilutes it.

(The only thing the onboarding body-metrics fed in Pep AI was a Mifflin-St Jeor calorie estimate — nearly free math IF ever wanted, but still not core and not worth the meal-logging apparatus.)

PP-specific asset to KEEP visible: the **"Codes" tab** (affiliate/vendor codes) — Pep AI has nothing equivalent; don't bury it.

---

## 6. RUO posture confirmation (reassuring for Tier 2 legal call)

A direct competitor (Pep AI) ships pre-fill compound data, half-life settings, and a reconstitution calculator while holding a research-only framing. Their gates:
- Calculator: "Research calculator only… you provide the values and the app only converts them into syringe units."
- Research Library: "Educational research information only. Not medical advice and not a recommendation to use any compound."
- Pep Bot: "cannot provide dosing, preparation, administration, or medical advice."

Useful evidence for Mark's Tier 2 disclaimer legal call: the full premium tracker can be built **without softening** the compliance posture.

---

## 7. Design DNA gap (current PP vs. target)

- **Current PP:** single flat elevation (#1e293b cards on #0f172a, hairline border, no shadow/depth), single cyan accent doing everything, system typography w/ no scale, unstructured whitespace.
- **Target (Pep AI-class polish):** real soft elevation (light mode: white cards + diffuse shadows ~20px radius; dark mode: lightness-based elevation), a tuned type scale w/ a display weight for headers, semantic-token theming, one anatomical body-map asset reused across application-site + workout views.

---

## 8. Outstanding before the build (CC stays parked until done)

1. **Capture a POPULATED PK/level curve** — the single most valuable remaining reference (the hero component). Best sources: Shotsy "Estimated Medication Levels" (confirmed to plot), or any app's level chart once a dose is logged WITH a half-life set. PeptidePal dark home/today + any dark curve especially wanted (PP starts from dark; zero polished-dark curve reference so far).
   - **How to populate one:** Add Compound → set Total Amount → More Options → Half-life ON + value → Save → Log a dose with a time → return to Home/Track; the level card ("Level"/"Estimated Medication Levels"/"Half-Life") should now plot.
2. **Write the consolidated token spec** — theme.ts: light-default palette anchored on cyan `#0891b2`, hand-tuned dark variant, elevation tokens (shadow vs lightness per mode), type scale, card system, semantic token names.
3. **Write the frontend-design CC prompt** — PK-curve component spec'd FIRST, then the broader theme application.

**Screenshot reminder:** images do NOT carry between chats. To give a new chat full visual context, re-upload the key screens. Minimum set that actually drives the build: a populated PK curve, the Add-Compound half-life flow, and the compound research detail. The rest (settings, empty states, onboarding) are captured well enough in this doc.

---

## Changelog
**June 23, 2026 (v1):** Initial teardown doc. Locks: light+dark both hand-tuned (Path C, cyan-anchored, no auto-invert); PK curve + half-life-as-opt-in architecture w/ per-value source citations; onboarding cut to 3–4 screens; nutrition/meal-tracking skipped; RUO posture confirmed shippable. Outstanding: populated-curve capture → token spec → frontend-design CC prompt.
