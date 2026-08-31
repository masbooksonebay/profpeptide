# Strength Cycle Studios — Master Playbook

**Status:** ACTIVE — studio-level strategy, cross-cutting rules, execution model.
**Version:** v6.24 (August 10, 2026) — adds the six standing rules set Aug 9–10 (full sweeps, queue after every prompt, next prompt on every report, sequence by revenue, no contradictory clauses, state deliberate omissions), the **verify-the-premise** rule covering Claude's own prompts, and the Claude Design unsent-attachment behavior. Carries v6.23 forward.

---

## 🚦 RULE #0 — VERIFY BEFORE ASSERTING

Never guess, theorize, assume, or reconstruct from memory anything with a knowable correct value — formats, names, codes, discounts, catalog contents, whether a page or file exists, prior decisions, portfolio state.

Check the source first: the relevant ref doc (**after a compaction, re-read it — never trust the summary**), live data, or fresh research. If the source can't be reached, **say the value is unverified rather than filling it in.**

**Do not narrate RULE #0.** No "per RULE #0, let me check the source first." Verify silently and give the answer.

**Corollary — absence from the docs ≠ doesn't exist.** Mark's first-hand knowledge of his own assets beats a doc search. Defer to it faster, then close the doc gap.

---

## 🔴 THE TWO ACCESS RULES

Both came out of the same expensive failure and both generalize far beyond where they were found.

### A fetch failure is a statement about OUR ACCESS, not about the vendor

A 403, a redirect, an empty result, a missing registry field — these say what we could reach. They say nothing about what exists.

Report **UNREACHABLE-BY-FETCH** and stop. **Never** "gated," "on-request," "not published," "no COA," or "fails a criterion."

**Before concluding anything, try the direct-asset path.** `/wp-content/uploads/…` PDFs and images return 200 even when the HTML homepage 403s a bot — true on Glacier, Purity, Mile High, Peptidology and Licensed Peptides. **That single technique would have prevented an entire wasted afternoon.**

If it still fails, **ask Mark for a paste.** He can reach anything.

> Five vendors had their testing understated because a fetch obstacle was converted into a claim about them. In every case the evidence was public all along. **Assume a vendor publishes real testing; ask when you can't see it.**

**A cart or checkout state can differ from what a logged-out fetch sees.** Mark may be authenticated. A page that looks gated to a fetcher may be open to him, and vice versa — vital-core is genuinely walled, Glacier and Peptidology only appeared to be.

### A GSC entry describes what Google saw on its last crawl, not the site now

**Check the last-crawl date and curl the live artifact before opening any investigation.**

Four separate GSC-driven investigations this year produced **zero code changes** — the P0 canonical defect, two 404s, a duplicate cluster, and 11 trailing-slash "redirect errors" that had been correctly serving a single clean 301→200 for months.

GSC lag is ~17 days. Live-verified fixes still show as issues for weeks.

**Same shape as the fetch rule: our view of a thing is not the thing.**

---

## 🤝 EXECUTION MODEL

| Executor | Owns |
|---|---|
| **Claude (chat)** | Strategy and decisions · short marketing copy (X posts, captions, email, vendor bios) · cross-tab orchestration · writing CC/CINC prompts · verifying CC output |
| **CC** (Claude Code) | All build work — research, content-writing AND code, for any page, profile, feature or script |
| **CINC** (Claude in Chrome) | Browser/dashboard tasks. Non-destructive clicks only. No embedded authorization language. |
| **CD** (Claude Design) | Visual assets, PPTX pipeline |
| **Mark** | All final submits, approvals, releases, legal decisions, device testing, **and all posting** |

**Claude does NOT pre-research or pre-write content and hand CC a finished draft.** That idles CC and misuses the split. Hand over the spec, the structural exemplar, the guardrails, and the acceptance checks.

**Mark posts.** Claude drafts; Mark decides where and when.

---

## 📋 PROMPT DELIVERY

- **Every response to a CC/CINC/CD report ends with the next actionable prompt.** Not "say go and I'll write it" — a report response without a prompt reads as though the report wasn't processed. Flag any decision the prompt assumes.
- **Only for reports.** Do NOT append a prompt to a status request, a queue update, a direct question, or anything that isn't reviewing executor output. Never re-send a prompt for work already in flight.
- Click-to-copy fenced blocks, nothing else inside the block. Always name the tab.
- Bundle steps when one executor runs them in sequence with no human between; split when Mark must act or observe.
- Never open a CC prompt with a slash. No self-authorization language.
- **Gate every prompt on HEAD** — and expect to be wrong about it. Claude's stated HEAD has been stale repeatedly. Tell CC to report what it actually finds.

---

## 🔨 PROMPT-WRITING RULES THAT EARNED THEIR PLACE

- **Invite contradiction explicitly.** "Every fact below comes from my summary — if it doesn't match what you find, say so rather than building to it." This caught the wrong retirement commit, the GHK-Cu Category-1 direction error, a wrong row count, and a wrong premise about which pages served which OG card.
- **Prove the mechanism on ONE case before applying it to twelve.** The OG rollout would have shipped 12 no-op files; the pilot cost one.
- **Report-before-apply on anything with an FP surface.** Four reversals in one session.
- **Name the failure mode, not just the task.** "Any page emitting 0 tags is a defect — report and stop" caught a real one.
- **Poll on a marker unique to THIS build.** Two live-verification polls false-positived on pre-existing strings.
- **Ask for measured values, not declared ones.** The entire OG item existed because a file's declared dimensions disagreed with its actual ones.

---

## 🚀 PUSH / DEPLOY

**Pushing is CC's job.** Claude writes the push prompt; Mark decides. Never hand Mark a bare `git push`.

**"Push is the deploy" is RESCINDED.** The GitHub→Vercel webhook failed four times in three days, twice reporting healthy while delivering nothing.

**Every push:** wait ~3 min → `npx vercel ls` → confirm a deployment fired. If nothing does, confirm main is ahead of production, then `vercel deploy --prod`.

**Then verify the CONTENT, not the status code.** A 200 serving pre-push HTML is exactly the failure that let HR run 15 days on stale code. And the production alias can serve a CDN-cached page while the deployment URL is correct — curl the deployment URL directly to disambiguate.

**Check `git status` BEFORE committing, not after.** A deploy failed because a generated artifact was omitted while the local build passed on the working tree's copy.

---

## 🎨 ICON POLICY (PP)

**lucide-react by default** for any new or changed glyph. Do not hand-transcribe paths.

Existing hand-built glyphs **stay**. No bulk migration. Migrate one only when there's a reason to touch it.

**Fallback stays:** lucide map entry first, inline SVG behind it — so reverting any glyph is one line.

> The two glyphs that ever looked wrong were the two that were **authored** rather than transcribed: a swap path at 37% of the box width, and `compare-outline` drawing two bare rectangles despite its name. The transcriptions were fine, which is why the migration was visually near-invisible. The value is that sizing can't drift and a glyph can't be named one thing and draw another.

**Two deliberate non-fixes — don't "correct" them:** lucide's `smartphone` is a rounded rectangle with a dot where the hand-built `phone-portrait-outline` was a truer phone; consistency was chosen over it. And the FAQ/App lucide-vs-Ionicons "seams" are invisible at 24px — there's nothing to close.

---

## 🧭 COVER ALL THE BASES

When Mark asks to fix or improve something in a domain, address **everything significant in that domain** — not just what surfaced in conversation.

- Don't patch the symptom and stop. Find the class it belongs to.
- A defect found while investigating something else goes on a tracked list. Mentioning it in prose isn't tracking.
- Distinguish what's verified from what's inferred.
- Sequence by impact. If a foundational issue nullifies downstream work, gate on it.
- **A longer list with clear priorities beats a short one with gaps Mark finds later.**

---

## 🆕 STANDING RULES SET AUGUST 9–10, 2026

**1. Full sweeps, not batches.** When a domain-wide task is delegated to CC or CINC, it runs the whole surface in one pass and reports once. Do not split into batches for pacing. Log ambiguity and keep going.

**2. Queue after every CC prompt.** Every response containing a CC prompt ends with the current queue — what's sent, what's waiting, what's blocked on Mark, and what's blocked on an external party.

**3. Next prompt on every report — automatically.** When Mark delivers a CC report, the response contains the review **and** the next prompt in the queue. Do not stop at "say go and I'll write it," and do not wait to be asked.

**4. Sequence by revenue, not by queue order.** New-vendor onboardings (revenue, code already bound) outrank maintenance passes on existing pages. When CC asks how to sequence, that's the tiebreak.

**5. Don't send a prompt with a contradictory clause.** A prompt saying "finish X first if you've started it" while also assigning Y forces CC to stop and ask. State the intended order outright.

**6. State a deliberate omission the first time it appears.** Price data being deferred from vendor onboarding is a *decision*; unstated, it reads as an oversight. The same applies to any pattern that repeats — say why once, in the prompt, so it isn't re-litigated.

---

## 🆕 VERIFY THE PREMISE — including Claude's own

Claude sent CC a prompt asserting **"Amino X is walled, no cert pass, depth cannot come from testing claims."** CC checked git, found `5684ce6` ("batch 1: Legendary + **Amino X** full COA pass") and a verified **Kovera Labs** profile, and reported the premise wrong. **The walled vendor is Amino *Club*** — a different vendor with a similar name.

**Two rules from this:**
- **RULE #0 applies to Claude's own prompt premises**, not just to answers. A confident false premise in a prompt costs an executor turn and can produce wrong work if unchallenged.
- **Executors challenging a premise is correct behavior.** When CC or CINC pushes back on a stated fact, check before insisting.

**Separately, Claude invented `/prices/nad`** while writing a CINC submit list. Nothing linked to it; GSC never discovered it; the real slug is `nad-plus`. A fabricated URL in a task list is the same class of error.

---

## 🆕 THE UNSENT-ATTACHMENT BEHAVIOR (Claude Design)

**Attaching a file in a Claude Design composer writes it to `uploads/` immediately — before the message is sent.** CD then lists that directory and may use the newest file.

Observed: a `[ATTACH PHOTO]` placeholder was left unfilled in a carousel prompt; CD listed `uploads/`, found a file Mark had attached but **not sent**, and used it as slide 1. **Not clairvoyance and not a bug** — CD stated the mechanism plainly when asked.

**Practical effect:** anything attached in a CD thread is available to CD whether or not the message is sent. `[ATTACH PHOTO]` stays in prompts — it's Mark's normal workflow — but an unfilled placeholder falls back to whatever is newest.

---

## 📐 OTHER STANDING RULES

- **US English everywhere.** Color not colour, gray not grey, analyze not analyse, organize not organise, catalog not catalogue, license not licence, defense not defense, toward not towards. Mark is US-based, the apps are on the US App Store, and PP's search demand is US queries — **"color" and "colour" are different search terms.** This applies to site copy, App Store metadata, X posts, captions, code comments, template comments, ref docs and prompts. A UK spelling in a prompt can propagate into user-facing copy through CC or CD.
- **🔴 RECORD DISPROVEN PREMISES, NOT JUST FIXES.** When research kills an assumption, write down the disproof — what was assumed, what turned out to be true, and where the evidence is. A doc that records only fixes lets the same wrong premise return, and it does: the same questions have been researched twice by different executors because nobody could find the answer. **A false premise costs more than a bug, because it looks like new work every time.** Ref docs need a settled-questions section, and it should be as findable as the current-state section.
- **Answer directly.** Questions get answered in the response, not deferred to a CC prompt.
- **Number distinct issues.**
- **Ref docs: full replacements, not addenda.** A base doc plus scattered addenda can't be reliably reconciled — superseded fragments read identically to current truth in a search. Rewriting forces reconciliation. Prune history; point at the frozen snapshots.
- **Stale ref docs are findings.** A doc that produced a wrong recommendation gets surfaced, not quietly worked around.
- **Round trips, not hours.** Claude cannot observe elapsed time — a report arrives as text with no duration. Estimate in round trips, which is reasonable to reason about, and say "I don't know" on wall-clock.
- **Short app codes as standalone messages** (pp, hr, sc, wn, wl, scs, cf, cali) = context-switch signal. Load the workstream and surface state.
- **Workstream loading:** read EVERY relevant ref doc before responding. Start with SCS_REF_INDEX.

---

## 🌐 SITE PORTFOLIO

Hosting model for every SCS site: code on Vercel + a Mark-owned domain + Cloudflare DNS (gray cloud, DNS-only).

| Zone | State |
|---|---|
| **profpeptide.com** | LIVE — PP site, auto-deploys from main |
| **hybridrockstar.app** | LIVE — HR marketing |
| **strengthcycle.app** | LIVE — SC marketing |
| **weightliftingnation.com** | LIVE — WN coming-soon |
| **wlnation.com** | 308 → weightliftingnation.com |
| **capstonepeptides.com** | Coming-soon |
| pandorapeptides.com | Purpose undocumented |
| renaissancepeptides.com | Purpose undocumented |

**Vercel MCP is a different account, 403-forbidden** from Mark's team. Use CINC or Mark's authed CLI.

**New-site env vars:** sensitive vars can't be set from a CC session (no TTY). Real terminal: `cd ~/Desktop/[site] && vercel env add [KEY] production`, then CC confirms and deploys.

---

## 🏢 PORTFOLIO

| App | State |
|---|---|
| **PP** | LIVE worldwide |
| **SC** | LIVE worldwide |
| **HR** | v1.0.3 build 16 submitted to App Store review |
| **WN** | iOS pre-build (spec phase); marketing site live |
| Cali / CrossFit | Not started |

**App Store philosophy:** ship each version complete. "Complete" means end-to-end working on device — a feature that exists in the binary but is unreachable doesn't count.

---

## 🔇 DO NOT RE-FLAG

**The CC repo label / `profpeptide-app` tree behavior.** The harness sometimes labels a session or reports the tree as `profpeptide-app` while work is correctly happening in the intended repo. Known Anthropic worktree behavior. Large diffs on site-wide sweeps are also expected. Settled repeatedly. Treat the repo as correct and proceed.

---

*Full replacement. RULE #0 governs all. The two access rules are the most expensive lessons on this page — our view of a thing is not the thing.*
