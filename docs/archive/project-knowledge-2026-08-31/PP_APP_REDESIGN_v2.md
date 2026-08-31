# PP App Redesign — Competitive Teardown & Design Direction

**Status:** ACTIVE — design-direction reference for the PP app premium redesign
**Version:** v2 (June 23, 2026) — adds the **PK Curve Component Spec** (captured from a populated Pep AI curve in BOTH light + dark mode), folds in the full-teardown confirmations, and marks the populated-curve capture DONE. Carries all v1 decisions forward unchanged.
**Owner of build:** CC (frontend-design) once token spec + CC prompt are written
**Related:** PP_MASTER, PP_MASTER Addendum v4, theme.ts (`constants/theme.ts`), the post-merge 5-tab app structure

---

## 0. Purpose

Captures the conclusions from the competitive teardown of Shotsy, Pep AI, and PeptidePal so the design direction survives a new chat even though the screenshot images do NOT carry over between conversations. A new chat inherits these decisions from this doc; the screenshots themselves must be re-uploaded if pixel-level reference is needed again.

**v2 note:** The hero PK-curve component has now been captured in a live populated state (Pep AI, BPC-157, half-life 4h / peak 1h, single 2mg dose logged ~2h prior) in **both light and dark mode**. Section 9 records its mechanics in text so the build no longer depends on the screenshots persisting. This was the single capture that gated the token spec.

---

## 1. Apps analyzed (mode + relevance)

| App | Mode | Relevance to PP | What it proved |
|---|---|---|---|
| **Shotsy** | Light | Single-med GLP tracker, no library | Confirmed the **populated PK/level curve** ("Estimated Medication Levels") as the hero premium signal. Light. |
| **Pep AI** | Light default **+ Dark toggle** + 6 accent themes | **Closest structural sibling to PP** — multi-compound tracker w/ research library, schedule/create, application-site, dose-history, reconstitution calculator | Near-identical RUO posture; half-life as **opt-in per-compound setting**; compound-builder flow is PP's Tier 2 template. **Now fully teardown-captured (June 23).** |
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

**Dark-elevation thesis CONFIRMED by capture (June 23):** in Pep AI's dark Home, the curve card and content cards are raised by **lightness** — the card sits a visible step lighter than the near-black page (`~#0b0f1a` page vs. `~#151a26` card), with no hard drop-shadow doing the work. This is exactly the "dark = elevation by lightness; light = elevation by diffuse shadow" split the token spec must encode. Two separate elevation strategies, not one shadow system reused across modes.

**Implementation requirement:** components reference **semantic tokens** (`--surface`, `--surface-raised`, `--accent`, `--accent-on-light`, etc.) so each mode resolves them correctly. Two hand-tuned palettes, separate surface ramps, separate elevation strategy (shadow vs lightness), accent variants tuned per-mode. This is what makes it look polished instead of inverted — on both app and site.

**Accent identity:** Keep PP's **cyan `#0891b2`** as the core accent. Do NOT copy Pep AI's blue→purple gradient (that's their identity), and note their curve line reads as a brighter **blue (~`#3b82f6`)** — we adopt their curve *structure*, not their hue. Differentiate on accent while matching the structural light-default pattern.

---

## 3. KEY DECISION — Half-life / PK curve architecture

The **compound research detail** (Pep AI's 5-Amino-1MQ page) is the credibility model for PP's PK differentiator. **Captured in full June 23** — it renders exactly as the doc anticipated:

- A **"Half-Life & Peak Time"** block: two stat cards (Half-life 6.9h / Time to peak 1h).
- Honesty hedge verbatim: "Shown in hours when current research supports a value. Route, formulation, and study design can change these numbers."
- A **Sources** section split into **"General Research References"** (PubMed / PMC links) AND a separate **"Sources used for the half-life and peak-time values above"** block — each PK source tagged **"Used for: Half-life"** with the specific paper (e.g. "PubMed: LC-MS/MS assay for 5-amino-1-methyl quinolinium in rat plasma"). This is the per-value citation model, visually confirmed.
- Plus: Overview, Research Focus, How It Works, Research Status ("Primarily preclinical research" / "Not approved for medical use"), and an amber **Important Notes** RUO callout.

**Implications for PP:**
1. This is the defensible, evidence-honest way to ship PK data in an RUO app — matches the evidence-honesty posture PP's CC profile-build prompts already enforce. PP can do it *better* (deeper website research content to draw from).
2. **PeptideProfile schema requirement:** each compound needs half-life value + time-to-peak + **per-value source citations** (split general-refs vs. PK-value-refs, each PK ref tagged with which value it supports). Single-source PeptideProfile feeds both app (PK curve) and site.
3. Half-life lives in **two places** — (a) read-only research/Learn surface (descriptive, cited) and (b) the compound-builder's **opt-in "Half life settings" (Off by default)** which is user-confirmed input that drives the projection. Clean separation: education vs. functional input. The opt-in pattern sidesteps the "are you giving dosing guidance" worry because the *user* enters/confirms the half-life.

**Compound-builder flow (Pep AI = PP Tier 2 template) — CONFIRMED line-for-line June 23:**
Compound (typeahead "e.g., BPC-157, Tirzepatide" + **"Common Compounds"** list: BPC-157, TB-500, Thymosin Alpha-1, Thymosin Beta-4, Wegovy/Semaglutide…) → Administration (**Injectable / Oral / Nasal spray / Sublingual / Topical**) → Total Amount (mg) → BAC Water → Dosage/Titration (**Fixed vs Titration** toggle) → **More Options**: Reconstituted Date · **Half life settings (Off by default)** · Nickname (Optional). The Half-life settings modal is a simple toggle + two numeric fields: **Half-life (hours)** and **Peak Time**.

---

## 4. KEY DECISION — Onboarding: cut hard (3–4 screens, not 11)

**CONFIRMED June 23: Pep AI's onboarding is 11 screens** (the top progress bar shows 11 segments). Steal the per-screen **craft** (one bold question, progress bar up top, pinned gradient CTA) but NOT its length. Pep AI collects age/sex/height/weight (Images: age picker, I-am male/female, height, weight) **only** because it does BMI/calorie math downstream — PP doesn't, so those are pure friction.

**PP funnel:** consent/disclaimer (needed for RUO anyway) → optional creator code (ties to affiliate model) → notifications → done.

**Creator-code-at-onboarding CONFIRMED + recommended to adopt:** Pep AI captures a creator/referral code at onboarding ("Did a creator send you? Enter their referral code to support them!" with a Send / Skip split) — directly relevant to PP's Goaffpro/affiliate apparatus; ties installs to creator/vendor codes. Adopt this pattern.

Also seen in their onboarding (craft references, not to copy wholesale): a "Choose Your Look" screen (Light/Dark + 6 accent themes incl. a dark "Eclipse"), a rating-prompt screen, a "Where did you hear about us" attribution screen, an Apple Health connect screen, and a 3-day-free-trial / paywall sequence.

---

## 5. KEY DECISION — Nutrition / meal-tracking: SKIP (confirmed)

Seen across 6+ screens in Pep AI's Pro bundle (Lifestyle tab, Nutrition calculator, Meal Scan). Skip for PP because:
- Head-on fight with MyFitnessPal/Cronometer — commodity, hard to win.
- Ongoing cost (food-DB licensing + photo/barcode AI).
- Not PP's moat. PP's moat is PK-curve/half-life depth + research library + affiliate ecosystem; nutrition dilutes it.

(The only thing the onboarding body-metrics fed in Pep AI was a Mifflin-St Jeor calorie estimate — the Calculator's Nutrition tab shows it producing a 2661 cal/day target from age/sex/height/weight/activity/goal. Nearly free math IF ever wanted, but still not core and not worth the meal-logging apparatus.)

PP-specific asset to KEEP visible: the **"Codes" tab** (affiliate/vendor codes) — Pep AI has nothing equivalent; don't bury it.

---

## 6. RUO posture confirmation (reassuring for Tier 2 legal call)

A direct competitor (Pep AI) ships pre-fill compound data, half-life settings, a reconstitution calculator, AND a populated PK curve while holding a research-only framing. Gates confirmed verbatim June 23:
- Calculator: **"Research calculator only"** — "a mathematical utility for research and educational use only… you provide the values and the app only converts them into syringe units."
- Research Library: **"Educational research information only. Not medical advice and not a recommendation to use any compound."**
- Pep Bot: **"cannot provide dosing, preparation, administration, or medical advice."** ("Pep Bot can use a minimal summary of your saved app data… Insights are based on your logged data only and are not medical advice.")
- Disclaimer/Consent onboarding screen: "for personal tracking and education only—not medical advice, diagnosis, treatment, or dosing guidance."
- App-wide footer: "For informational purposes only. Not medical advice."

Useful evidence for Mark's Tier 2 disclaimer legal call: the full premium tracker — including the populated PK curve and pre-filled compounds — can be built **without softening** the compliance posture. The opt-in (user-confirmed) half-life is the mechanism that keeps the projection on the right side of the line.

---

## 7. Design DNA gap (current PP vs. target)

- **Current PP:** single flat elevation (#1e293b cards on #0f172a, hairline border, no shadow/depth), single cyan accent doing everything, system typography w/ no scale, unstructured whitespace.
- **Target (Pep AI-class polish):** real soft elevation (light mode: white cards + diffuse shadows ~20px radius; dark mode: lightness-based elevation — confirmed), a tuned type scale w/ a display weight for headers, semantic-token theming, one anatomical body-map asset reused across application-site + workout views.

---

## 8. KEY DECISION — App version + structure notes (reference)

Pep AI build teardown was **v3.0.2 (290)**. Five-tab structure: **Home · Track · [+] · Lifestyle · Profile**, with a center floating "+" that opens an action sheet (Add Compound / Add Cycle / Add Schedule / Log Dose / Log Nutrition / Log Weight / Log Side Effect, plus Calculator + Meal Scan tiles). PP's confirmed structure differs — current 5 tabs are **Calculator · Log · Schedule · Learn · Discounts** (post-merge; see PP_MASTER Addendum v4), eventual 4-tab end-state. The Pep AI "+" action-sheet pattern is a strong reference for consolidating PP's create/log actions.

---

## 9. PK CURVE COMPONENT SPEC (NEW v2 — the hero component, captured live)

Captured from Pep AI's Home "Level/medication" card in a populated state, **both light and dark mode**. This is the single most valuable reference and the component CC builds FIRST. Recorded as text because the screenshots do not persist into a new chat.

### 9a. What it is
A per-compound **estimated-level-over-time chart** living on the Home tab. It plots how much of the compound is estimated to be "on board" right now and where it's trending — driven by the user-confirmed half-life + peak-time. It is the visual answer to "how much do I have in my system?" and is PP's hero premium signal.

### 9b. The defining mechanic — solid past / dotted future, split at "Now"
- A **vertical dashed "Now" line** divides the chart at the present moment.
- **Left of Now → SOLID line:** the actual/known trajectory. Flat baseline at 0 until the dose event, a sharp near-vertical rise to peak at the dose, then solid through to Now.
- **Right of Now → DOTTED line:** the projected future decay along the half-life. Same color, dotted style.
- This solid-actual / dotted-projected split is the whole credibility gesture — it visually distinguishes recorded fact from model projection. **Non-negotiable in the PP build.**

### 9c. Markers & scrub interaction
- **Hollow ring marker** rides the line at the scrub point (default at Now); a **floating callout bubble** above it shows value + timestamp, e.g. "1.67 mg / Jun 23, 11:24 PM".
- A **solid purple dot** sits on the baseline at the actual logged-dose event (distinct from the scrub ring) — marks "dose logged here."
- Scrubbing moves the ring + callout along the curve.

### 9d. Card chrome
- **Header left:** compound selector dropdown ("BPC-157 ⌄") — the curve is per-compound, switchable.
- **Header right:** info `(i)` icon + **timeframe dropdown ("1D ⌄")** — zoomable window (1D and presumably wider ranges).
- **Y-axis:** a ceiling/peak reference label top-left (e.g. "2.24 mg") + faint horizontal dashed gridlines. Axis is in dose units (mg).
- **X-axis:** time-of-day ticks (e.g. 11 AM · 7 PM · 3 AM · 11 AM for a 1D window centered on now).
- **Gradient area fill** beneath the curve (fades to transparent toward baseline).
- The card is one of two swipeable cards on Home (page-dots below); the sibling card carries Last dose / Level / Next-dose summary tiles.

### 9e. Mode rendering (both captured)
- **Light:** white card, soft diffuse shadow, blue line on white, light gradient fill, dark axis text.
- **Dark:** card raised by **lightness** above near-black page (no hard shadow), same blue line, darker translucent gradient fill, light axis text. Confirms the dark-elevation thesis in §2a.
- **PP adaptation:** keep the structure exactly; swap the line/accent from Pep AI blue `~#3b82f6` to PP cyan `#0891b2` (darkened per-mode as needed for contrast). Keep the dose-marker dot a distinct second accent so it reads against the line color.

### 9f. Data inputs (ties to §3 + the compound builder)
The curve needs, per compound: dose amount + dose timestamp (from the dose log) and half-life + peak-time (from the opt-in Half-life settings). With Half-life **Off**, the card should fall back to the non-projected "Level/Last dose" summary rather than a flat/empty plot. Half-life ON + ≥1 logged dose → the curve plots.

---

## 10. Outstanding before the build

1. ~~**Capture a POPULATED PK/level curve**~~ ✅ **DONE (June 23)** — captured light + dark; mechanics recorded in §9. Screenshots won't persist, but §9 is the durable spec.
2. **Write the consolidated token spec** — theme.ts: light-default palette anchored on cyan `#0891b2`, hand-tuned dark variant, elevation tokens (shadow vs lightness per mode), type scale, card system, semantic token names. **← now unblocked; next step.**
3. **Write the frontend-design CC prompt** — PK-curve component (per §9) spec'd FIRST, then the broader theme application.

**Screenshot reminder:** images do NOT carry between chats. §9 now makes the curve build independent of the screenshots. If pixel-level reference is wanted again, re-upload: the populated curve (light + dark), the Add-Compound half-life flow, and the compound research detail.

---

## Changelog
**June 23, 2026 (v2):** Added **§9 PK Curve Component Spec** from a live populated capture in light + dark (solid-past/dotted-future split at "Now"; hollow scrub ring + value/timestamp callout; purple dose-marker dot; compound + timeframe dropdowns; ceiling label + dashed gridlines; gradient fill; per-mode rendering). Confirmed dark-elevation-by-lightness thesis (§2a) and the per-value source-citation model on the compound research detail (§3). Logged full-teardown confirmations: 11-screen onboarding, creator-code-at-onboarding (adopt), compound-builder flow line-for-line, RUO gate copy verbatim (§6), app v3.0.2/5-tab "+" action-sheet (§8). Marked the populated-curve capture DONE; token spec is now the next step.
**June 23, 2026 (v1):** Initial teardown doc. Locks: light+dark both hand-tuned (Path C, cyan-anchored, no auto-invert); PK curve + half-life-as-opt-in architecture w/ per-value source citations; onboarding cut to 3–4 screens; nutrition/meal-tracking skipped; RUO posture confirmed shippable. Outstanding: populated-curve capture → token spec → frontend-design CC prompt.
