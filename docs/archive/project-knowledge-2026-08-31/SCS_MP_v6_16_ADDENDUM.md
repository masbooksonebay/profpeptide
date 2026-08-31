# SCS_MP — v6.16 Addendum (July 22–23, 2026)

**Status:** ACTIVE drop-in. Append to / version into SCS_MP v6.15 (governing studio master).

---

## 🔒 PUSH / DEPLOY EXECUTION — Claude gives CC the push prompt (LOCKED)

Pushing to main is **CC's job**, not Mark's. Mark does not paste git or deploy commands into a plain terminal.

- **Decision** to push = Mark's (he reviews parked commits and says go). **Execution** = CC's.
- Claude writes a **push prompt to the CC repo tab** — never a bare `git push` command block for Mark to run.
- This covers **all** terminal commands, not just pushes (dev-server starts, builds, status checks — all go to CC).
- PP site auto-deploys on push to main — **the push IS the deploy.** Never a separate vercel command, never Vercel MCP (different account, 403).
- Default unchanged: CC parks (commit, no push) until Mark approves; then Claude gives CC the go-ahead prompt.

## 🚫 Do not narrate RULE #0

Mark knows the verify-before-asserting rule. Announcing "per RULE #0, let me check the source first" wastes tokens on something already understood. **Verify silently, then answer.** The rule still fully applies — only the meta-commentary is removed. (Extends the existing no-meta-commentary-before-acting preference.)

---

## 🏁 PP LIBRARY MILESTONE — 62/62 profiles on the rich template

The BPC-157 rich-template rollout is **complete** across the entire peptide library (pilot 3 → batches of 10/10/10/12 singles → 8+8 blends). Full spec, blend handling, and reusable process learnings live in **PP_SITE_DESIGN v3 Addendum**.

**Studio-level takeaways (portable to HR/SC/WN library-wide work):**
1. **Pilot before sweeping.** The 3-page pilot caught a TOC defect that existed in the *template source itself* — without it, 61 pages inherit the bug.
2. **The artifact beats the brief.** Claude's route/status flags went stale twice and the page was right both times. Flags are prompts to check, not facts to apply. This is the "artifact is the source, not the doc describing it" principle applied to Claude's own instructions.
3. **10–12-wide agent fan-out is the practical ceiling** — expect ~2–3 drops per batch; recover by reverting the partial to clean original and redoing, never by patching in place.
4. **Concurrent edits corrupt the dev server** (500s with clean tsc) — restart before render QC.
5. **Locked-format gates need explicit checks**, because agents improvise formats when the data is awkward.

---

## 📇 GSC REQUEST INDEXING — quota confirmed

**11 submissions per calendar day**, confirmed empirically July 21 (11 landed clean; #12 refused with "exceeded your daily quota"). Resets midnight, shared across all properties.
- **CINC does the Request Indexing clicks** — this is CINC's job in Mark's workflow.
- **Already-indexed / canonical'd / noindex pages are FREE skips** — inspection costs no quota; only actual submissions count. Queue 20+ so free skips don't cap real submissions.
- **Never manufacture junk submissions to force a quota error.** Submit only pages that genuinely need indexing; a maxed quota blocks same-day urgent indexing for zero benefit. Full rule in **PP_INDEXING v23 Addendum**.

---

## 🎨 HR SOCIAL TEMPLATE — run-day + wrapping fixes (repo templates, `hybrid-rockstar-site`)

Two template-level bugs found and fixed at source rather than hand-corrected per post:

1. **Run-day block prefixes.** The templates shipped a mandatory `[A1]`-style prefix cell, so run-day fillers invented `W1/M1/C1` to satisfy a slot that couldn't be empty. **Fix:** reel `row()` prefix cell is now conditional (`prefix ? span : null`); carousel gained a named **"RUN-DAY ROW — no prefix cell"** duplicate-me pattern. Strength rows unchanged (A1/A2/B1/B2 intact). Rule written into both templates' comments: *run days pass null; never invent letter+number tags.*
2. **Divider rule collided with wrapped session names.** Reel scene 2 positioned the headline at `top: 260` and the divider at a hardcoded `top: 430`. One-line names cleared it; **"COMPROMISED RUNNING"** wrapped to two lines and the rule cut through the second word. **Fix:** headline + rule now share one flow container, rule follows with `marginTop: 48` — one-line geometry is pixel-identical to before, two-line names get the same gap below. Carousel has no equivalent fixed rule (its cover is a flex column) — left byte-untouched rather than adding a comment about a hazard it doesn't have.

**Carry-forward gotcha:** workout-row tops are still hand-positioned per day, so a two-line session name pushes the rule ~122px lower and rows below may need a per-day nudge.

**Design-principle learning:** both bugs are the same class — *the template assumes a shape most days happen to fit, and breaks on the day that doesn't.* Fix at the template so the wrong output becomes unrepresentable by default, rather than correcting each post.

---

## 🎯 PP FAVICON — SERP appearance

- Scale-only fix shipped (`1.12×` about center, tilt/shape/`#3A759F` unchanged): ink coverage at 16px went **~36% → 54%**. `apple-icon.png` deliberately excluded — iOS masks/rounds it, so it keeps its ~8–10% safe-area margin.
- **Google's favicon docs confirm:** no way to control SERP display size or background. Source file must be square, ≥8×8px, **>48×48px recommended**. Two actionable requirements: **Googlebot-Image must be able to crawl the favicon file** (separate from Googlebot crawling the homepage), and the **favicon URL must stay stable** — change the artwork, never the path.
- **Open option:** filled-background version (solid `#3A759F` with the tag knocked out in white) would take ink coverage to ~100% — the only remaining lever for apparent size. Recommended over black: reads well in both light and dark SERPs, where black would disappear against dark mode. Not yet built.

---

## 💰 PP AFFILIATE — vendor-discount risk (STILL OPEN)

**Peptide Partners' own public discount currently beats the `PROFPEPTIDE` affiliate code**, producing ~zero conversions. Firing posts for that vendor spends distribution driving buyers to a checkout where they take the better public discount and PP earns nothing.

**Rule:** before drafting vendor posts, check the affiliate code is actually competitive with the vendor's public promo. A code that loses to the vendor's own sale is worse than not posting — it pays the distribution cost and hands over the sale.

**Highest-value open action:** vendor outreach asking whether `PROFPEPTIDE` can be **matched to or stacked on** their public promos. Generalizes to every code-driven vendor. Not yet drafted.
