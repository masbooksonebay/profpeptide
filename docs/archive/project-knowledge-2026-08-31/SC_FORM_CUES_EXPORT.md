# Strength Cycle — Form / Technique Cue Export

**Repo:** `/Users/mark/dev/strength-cycle` (`masbooksonebay/strength-cycle`, Expo/React Native)
**Source of all structured cues:** `constants/programContent.ts` → `TECHNIQUE: TechniqueContent[]` (lines 8–84)
**Data shape:** per-movement record `{ lift: string; setup: string[]; execution: string[]; mistakes: string[] }`
**Movements covered:** Squat, Bench Press, Deadlift, Overhead Press (the 4 main 5/3/1 lifts). No accessory movements.
**Surfaced in:**
- `components/workout/TechniqueTipsModal.tsx` — per-lift modal (SETUP / EXECUTION / COMMON MISTAKES), opened from the Wendler 5/3/1 workout screen (`app/(tabs)/_screens/Wendler531WorkoutScreen.tsx:417`); lookup via `techniqueForLift(liftName)` matched case-insensitively on `lift`.
- `components/ProgramGuide.tsx` — the "Technique Tips" accordion section renders the same `TECHNIQUE` array (Setup / Execution / Common mistakes) for all lifts at once.

Everything below is verbatim — no rounding, summarizing, reordering, or paraphrasing.

---

## Squat

**SETUP**
- Bar positioned on upper traps (high bar) or rear delts (low bar) — low bar for powerlifting-style 5/3/1
- Feet shoulder-width to slightly wider, toes angled out 15–30°
- Hands grip bar tight, elbows down, chest up, big breath into belly before unrack

**EXECUTION**
- Break at hips and knees simultaneously, not just knees
- Descend until hip crease is below top of knee (parallel or below)
- Knees track over toes, not caving inward
- Drive up through mid-foot and heel, chest leading

**COMMON MISTAKES**
- Knees caving in on the way up (weak glutes/cues)
- Rounding lower back at the bottom ("butt wink") — reduce depth or mobility work
- Good-morning pattern on heavy sets (hips shoot up first) — re-focus on chest-leading

---

## Bench Press

**SETUP**
- Feet planted flat, shoulders retracted and pulled into bench, slight arch in upper back
- Grip roughly 1.5x shoulder width — find what puts forearms vertical at chest
- Unrack with straight arms, settle bar over shoulders before descending

**EXECUTION**
- Lower bar under control to mid-chest (nipple line for most)
- Keep elbows tucked ~45–60° from torso, not flared to 90°
- Pause optional on heavy sets; paused reps build raw strength
- Drive bar up and slightly back toward face, not straight up

**COMMON MISTAKES**
- Elbows flaring out to 90° — increases shoulder strain, reduces leverage
- Bouncing bar off chest — reduces training stimulus and risks injury
- Losing upper back tightness mid-set — reset between reps if needed

---

## Deadlift

**SETUP**
- Bar over mid-foot, close to shins
- Feet hip-width, toes slightly out (conventional) or wider (sumo — choose one style per cycle, don't alternate)
- Grip just outside knees, hips higher than knees, chest up, lats engaged (think "bend the bar around you")

**EXECUTION**
- Take slack out of bar before pulling — feel the plates lift off slightly
- Push the floor away with legs first, bar stays in contact with shins and thighs
- Lock out with hips, not by leaning back; stand tall, don't hyperextend
- Control descent or drop (bumpers only)

**COMMON MISTAKES**
- Lower back rounding under load — reduce weight, fix setup, consider mobility work
- Hips shooting up first (turning the lift into a stiff-leg deadlift) — re-cue "push floor away with legs"
- Jerking the bar off the floor — take slack out first, build tension before pull

---

## Overhead Press

**SETUP**
- Bar in front rack position, resting on shoulders with elbows slightly in front of bar
- Grip just outside shoulder-width, wrists stacked over elbows
- Feet hip-to-shoulder width, glutes and core braced hard (no leg drive on strict press)

**EXECUTION**
- Press bar straight up, moving head back slightly to clear chin
- Once bar clears forehead, push head through — finish with bar over mid-foot, ears between arms
- Squeeze glutes throughout to prevent lower back hyperextension

**COMMON MISTAKES**
- Leaning back excessively to press the bar — turns it into a standing incline press, strains lower back
- Bar drifting forward on the press — keep it vertical, push through the bar
- Soft core/glutes — bracing is what keeps the press strict and the lower back safe

---

## Appendix — Adjacent per-movement text (NOT form cues)

The same file also holds `LIFT_DESCRIPTIONS` (lines 96–125): 2-line program/philosophy blurbs per lift, surfaced in `ProgramGuide.tsx`. These are descriptive, not technique cues — included verbatim for completeness, clearly separated.

### Squat
- The foundational lower-body compound movement. Heavy squats drive total-body strength by loading the quads, glutes, hamstrings, and entire bracing system together.
- In 5/3/1, squats are typically the most technically demanding lift and the one most sensitive to sleep, food, and recovery — start the TM conservatively.

### Bench Press
- The primary upper-body horizontal press. Builds chest, anterior deltoids, and triceps, with significant contribution from the upper back for stability.
- In 5/3/1, expect bench to progress the slowest of the four lifts — plan for small, sustainable TM increases and lots of volume.

### Deadlift
- A full-body pull from the floor. Trains the posterior chain — glutes, hamstrings, spinal erectors — along with grip, lats, and core.
- Because the deadlift is so taxing, 5/3/1 intentionally keeps volume low on working sets. Don't add junk volume.

### Overhead Press
- The strict standing press — no leg drive. Trains shoulders, triceps, and upper chest, with the whole core working to keep the lift vertical.
- Progress slower than bench for most lifters. Small plates and patience are essential here.
