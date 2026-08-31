# SCS_MP — v6.18 Addendum (July 25, 2026)

**Status:** ACTIVE drop-in. **SUPERSEDES the v6.17 addendum** (drafted mid-afternoon, before both apps shipped). Append/version into SCS_MP v6.16.

---

## 🔧 PORTFOLIO SNAPSHOT — CORRECTED

| App | State |
|---|---|
| **PP** | LIVE worldwide · **price-comparison section shipped July 25** (69 pages, 1,167 rows, 24 vendors) · 4 new vendors added |
| **SC** | v1.0.4 live · privacy-link fix **parked, unpushed** |
| **HR** | **v1.0.2 (build 12) live; v1.0.3 (build 16) in Beta App Review** |
| **WN** | iOS pre-build (spec phase); marketing site LIVE |

---

## 🔒 PROMPT-DELIVERY DISCIPLINE (LOCKED)

**Claude does not write a CC/CINC prompt until Mark says to.** Respond, work the decisions, then ask *"ready for a prompt?"* and stop.

**Asking once does not carry forward.** Each new prompt needs its own check-in regardless of what was approved a turn earlier. Treating a prior "go" as standing permission is the failure this rule prevents.

**Why:** drafting before decisions settle produces revision cycles — this session burned four rewrites of one CC prompt because each new decision arrived after the prompt was written.

---

## 🔒 NEVER STATE A QUOTA FIGURE IN A PROMPT (GSC — LOCKED)

**The GSC Request-Indexing daily quota CHANGES.** The ref docs have recorded a fixed number three times and been wrong each time:

| Doc | Claimed | Reality |
|---|---|---|
| v21 | "≤5, stay conservative" | under-counted |
| v23 (first) | "≥11, not pinned" | queue ran out |
| v23 (final) | "**EXACTLY 11**, confirmed" | **July 25: GSC refused at 11. Ten landed.** |

**A fixed figure is the wrong shape for this fact.** What belongs in a prompt is the behavior:

> Queue 20+. Submit every genuinely-qualifying URL until **GSC itself returns "Quota Exceeded."** Log which URL hit the wall and how many landed. Never state a number.

Stating the cap guarantees you never discover the real one — Claude wrote "the cap is exactly 11" into the July 25 prompt and CINC stopped at 10 *assuming a slot remained*. The wall is the only reliable source.

**Observed ceilings:** July 21 = 11 clean (queue exhausted, wall not reached) · **July 25 = 10, wall hit at `/prices/ipamorelin`.**

Already-indexed / noindex / canonical'd pages are **free skips** — inspecting costs nothing.

---

## 🔒 CINC's IN-CHAT CONFIRMATION IS A FIXED COST, NOT A PROMPT DEFECT

CINC will not treat text in a task brief as authorization for outbound state-changing actions — the same property that stops it clicking "Release This Version." So the ref-doc line *"CINC does the clicks, don't route to Mark"* is **aspirational**: CINC will still ask once in chat before submitting.

**It asks once per run, not once per URL** — that's already the cheap version. Write prompts expecting one "yes."

---

## 🔒 EAS + CC — THE PRECISE RULE (supersedes "run EAS outside CC")

**EAS builds run non-interactively from a CC session UNTIL signing material has to change.**

- **Simulator builds:** always fine (unsigned, profile never consulted)
- **Production builds:** fine if credentials + profile are already correct on EAS servers
- **Adding a capability invalidates the provisioning profile** → needs an authenticated Apple session (2FA) → **plain terminal**
- Recovery: run `eas build` *without* `--non-interactive`; decline "reuse the original profile," accept "generate a new one"
- **Also check:** an updated Apple Developer Program License Agreement blocks bundle-ID registration and submissions until the Account Holder accepts it at developer.apple.com

Applies to SC and WN, not just HR.

---

## 🧠 THE PATTERN THAT KEPT PAYING: RECON BEATS ASSUMPTION

Read-only recon changed the plan **every time it ran** on July 25:

- **PP price page:** the `/prices` scaffold was already noindexed (the "deploy gate" blocking work since SCS 25 was never real), and `prices.ts` was flat, not vendor-shaped — the transform was a re-key, not a restructure.
- **HR:** the "45 min advertised" premise was wrong (docs say 55–58); `divisions.ts` had Pro weights in Open rows — a **live shipping bug** nobody knew about.
- **Doubles:** Claude's instruction to hide the Pro picker came from `rules.ts` — *one of the drifted files the release existed to fix*. CC checked the rulebook and implemented the opposite. **Never source a fix from the artifact being fixed.**
- **Code audit:** CC's own "77 pages" figure was a false positive (`WhereToBuy` grep matched `isWhereToBuy`); it caught the error mid-audit by checking real JSX renders.
- **GSC:** the ASC privacy URLs were all fine — the dead `.shop` link was only in the app binary.

**Corollary:** when a prompt states a fact, invite the executor to verify rather than accept it. Several of the most valuable findings came from CC contradicting the brief.

---

## ⚠️ THE HARDCODED-VALUE FAILURE MODE (studio-wide)

Both apps hit the same class of bug on the same day:

- **HR:** station weights duplicated across 5 files, drifted 3 ways, one wrong value user-visible
- **PP:** discount codes hardcoded across 27 coupon pages + `/best-peptide-vendors` + nav links + notes + metadata + JSON-LD

**Fix pattern that works: single source of truth + a mechanical guard.** HR now has `hyrox-stations.json` + `check:weights` (which caught its own author's doc comments on first run). PP needs the equivalent — registry-sourced codes + `check:codes`.

**Rule:** when a value appears in more than one place, it will drift. Consolidate and add a check that fails the build.

---

## 🔒 SALE vs COUPON (PP, but the reasoning generalizes)

**A displayed price is what a buyer pays WITHOUT ENTERING ANY CODE.** Automatic discounts count (including cart-level auto-coupons that need no code entry); coupon-gated vendor promotions never do; PP's own code is the only code modelled.

Documented on the registry field itself, not just in a doc — so a future session hits it before misusing it.

---

## 📉 DOC-ROT — CONFIRMED TWICE

**HR_MASTER went five weeks and two shipped versions out of date** while sessions ran PP-heavy. v1.0.2 shipped June 21 unrecorded — including a full rebrand, light-mode removal, and the Shop tab's removal.

Then it happened again the same day: **HR_MASTER v12 was stale within four hours** (it said updates were paused; v1.0.3 shipped 15 commits).

**Two takeaways:**
1. **A doc that hasn't been versioned recently is not trustworthy.** Verify state against the artifact (ASC, the repo, the live site) before acting on it.
2. **RULE #0's corollary held again:** *absent from the ref docs ≠ doesn't exist.* Mark said build 12 was live; a thorough search found nothing. Mark was right. Also: the TestFlight external group with 10 testers and a live public link **already existed** — v11 recorded it as "never run."

---

## 📈 COMMUNITY-GROUP OUTREACH — FIRST HARD NUMBER

HR's downloads: **37 in the first eight weeks. Then 47 in a single day** from one HYROX Tampa Facebook group post, then 8 / 3 / 5. **63 of 100 total downloads came in four days.**

The Tampa group produced not just installs but the session's most actionable feedback (Haylee's three feature requests, all shipped in v1.0.3 within days).

**This validates the community-group outreach pattern as the studio go-to-market for niche-sport apps, and it applies forward to WN.** Remaining FB HYROX groups are worth substantially more than they looked. Regional Florida groups (Miami, Tampa, Orlando races) are the obvious next targets.

---

## ⚠️ "HEADLESS" IS OVERLOADED — spell the clause out

Two unrelated decisions both got called "headless":
1. **Screen-control rule (v6.12):** CC must not use computer-use/cliclick or take over the screen
2. **Headless-browser scraping:** rejected as unnecessary — Medusa vendors render prices server-side in the RSC flight, readable by plain urllib in 1.8s

Write the clause out instead of using the label:
> Do NOT use computer-use or cliclick — do not tap, click, move windows, or take over the screen. Verify via git, tsc, build, and curl only. (Screen control, not scraping.)

---

## 🔁 REINFORCED — all terminal commands go to CC

Violated three times in one session (handing Mark `npm run dev` blocks). Mark does not paste commands into a plain terminal. When Mark needs to review rendered output, **CC starts the dev server as a persistent background process and reports the port**; Claude supplies clickable links.

**Exception (unchanged):** a real plain terminal is required only where there's no TTY — `vercel env add`, and now **EAS when signing material changes**.

**Practical note:** the persistent dev server clobbered `.next` on several builds and blocked a queued prompt. Once review moves to a Vercel preview or the live site, kill it.

---

## 📅 Changelog
**July 25, 2026 (v6.17 → v6.18):**
- 🔧 Portfolio corrected — PP price section live; HR v1.0.3 in Beta Review
- 🔒 **Prompt-delivery discipline** — ask every time; a prior "go" isn't standing permission
- 🔒 **Never state a GSC quota figure** — it changes (11 on Jul 21, 10 on Jul 25); submit until the wall
- 🔒 **CINC's confirmation is a fixed cost**, not a prompt defect
- 🔒 **EAS rule refined** — non-interactive works until signing material changes
- 🧠 **Recon-beats-assumption** pattern recorded with five same-day instances
- ⚠️ **Hardcoded-value failure mode** named as studio-wide, with the fix pattern
- 📈 **Community-group outreach: 47 downloads in one day** from a single FB post — first hard number
- 📉 Doc-rot confirmed twice in one day

---

## 🔗 Cross-References
**HR_MASTER v13** · **PP_PRICES v1** (new) · HR_SOCIAL v12 · PP_MASTER · PP_SEO · SC_MASTER · WN_MASTER

---

*Studio addendum. RULE #0 governs all. CC owns build work and every terminal command; Claude instructs and asks before drafting. Recon before assumption; guards before drift.*
