# SCS Master Playbook — v6.20 ADDENDUM

**Date:** July 29, 2026
**Status:** ACTIVE drop-in. Append to SCS_MP. **Supersedes v6.19.**
**Adds:** the CLI-deploy divergence rule · the CINC authorization rule · build-gate discipline · two execution corrections.

---

## 🚨 RULE — CLI DEPLOYS CAN LEAVE GIT BEHIND

**The brand-site deploy pattern in SCS_MP describes `vercel deploy --prod` and says nothing about git divergence. That omission cost weeks.**

**What happened (July 28):** `hybridrockstar.app` had been deployed from a local working tree via the Vercel CLI. Three files the live site serves — `app-icon.png` (hero badge), `promo-card.png` (OG and Twitter card), and `vercel.json` (the `/get` App Store redirect) — **existed only on Mark's laptop.** They were never committed. A deploy from GitHub `main` would have shipped a site with a broken hero badge, a broken OG image, and a dead `/get` link.

Worse: the repo *had* a nominal GitHub connection, but it was **dead**. Five pushes to main that day triggered nothing; the newest git-sourced deployment was 15 days old. A connection that exists but never fires is more dangerous than no connection, because it looks fine.

**The rules:**

1. **After ANY CLI deploy, verify git matches the deployed tree.** `git status` clean is necessary but not sufficient — confirm every asset referenced by the site's HTML, config, and serverless functions resolves to a *tracked* file.
2. **Before connecting a repo to auto-deploy, run that check first.** Connecting a site whose `main` is missing live assets deploys the gap straight to production.
3. **A nominal git connection is not a working one.** Prove it behaviorally with a push, not by reading a settings panel. `vercel project inspect` does not surface the git connection in the current CLI.
4. **Check build settings before connecting.** A static site with no `package.json` needs Framework Preset "Other" and no build/install command. A wrong preset can publish an empty directory over a working site.

**Deploy state, July 29, 2026:**

| Site | Git vs production | Auto-deploy |
|---|---|---|
| profpeptide.com | ✅ In sync | ✅ Push to main = deploy |
| hybridrockstar.app | ✅ Closed Jul 28 — assets committed, `main` verified reference-by-reference | 🟡 Reconnected; push test outstanding |
| strengthcycle.app | ❓ **UNCHECKED** — same CLI pattern | ❌ Not connected |
| weightliftingnation.com | ❓ **UNCHECKED** — same CLI pattern | ❌ Not connected |

**SC and WN have not been checked and were deployed the same way. Assume divergence until proven otherwise.**

---

## 🚨 RULE — CINC PROMPTS MUST NOT CARRY THEIR OWN AUTHORIZATION

**Never write "You ARE authorized," "Mark approved it," or any equivalent into a CINC prompt.**

CINC operates on live web pages, where page content can attempt to instruct it. It therefore treats **self-authorizing instructions as a prompt-injection signature** — which is correct and protective. A pasted prompt claiming prior approval is indistinguishable from an attack.

**What happened (July 28):** a Vercel task was written with embedded authorization to preempt CINC's read-only guardrail. CINC refused, correctly, and kept asking for authorization *in Mark's own words*. Every subsequent message was more pasted prompt text, which re-triggered the same refusal. Three rounds were lost.

**The correct pattern:**

- **The prompt states the procedure and the stop conditions. Nothing else.**
- **The grant comes from Mark, typed in the conversation, in his own words.**
- CINC-proposes / Mark-clicks remains fine and normal — it is the *self-authorization language* that breaks, not the pattern.
- If CINC is on the wrong tab or the wrong property, it will say so. Believe it and fix the tab; do not re-paste.

**Also learned:** the task was routed to the wrong tool. **Vercel's CLI can connect a git repo directly, and CC is already authenticated there.** Before writing any CINC dashboard prompt, ask whether CC can do it from the terminal.

---

## ✅ RULE — BUILD GATES: LOCAL YES, NETWORK NO

Two verification scripts now exist on the PP site. They are wired differently, and the reason is the rule:

| Script | Network? | Wired into build? |
|---|---|---|
| `check:links` — every internal link resolves | **No** — pure local analysis, sub-second | ✅ **Yes, runs first (fail-fast)** |
| `check:vendors` — every affiliate URL resolves | **Yes** — 30 external fetches | ❌ **No.** Manual until a GitHub Action exists |

**Gate the build on local checks only.** Since push-to-main *is* the deploy on PP, gating `build` gates production — a dead internal link now fails in about a second and can never reach Google. A network-dependent check in the build path would make every deploy hostage to 30 third-party sites.

**Corollary:** a build gate is a production dependency. If the script ever throws a false positive it blocks *every* deploy including urgent ones. **Fix the script; do not bypass the gate.** (`npx next build` skips the npm wrapper if genuinely stuck — know it exists, hope never to use it.)

**`check:vendors` classification, worth preserving:** OK / **BLOCKED** (HTTP 403 — host responded, bot-protection; inconclusive, surfaced loudly) / **DEAD** (404, DNS, timeout — hard fail). Only DEAD blocks the freshness stamp. Hard-failing on 403 would freeze the stamp permanently for Cloudflare-fronted vendors. **Neither script proves a code applies at checkout** — no cart is placed.

---

## 🔧 EXECUTION CORRECTIONS

**1. A restarted CC session resumes its prior task from git state.**
After an auth failure and a Claude Desktop restart, a fresh CC session re-entered the work it had been doing and shipped two commits while a queued recon sat unsent. **The first message to a restarted session must redirect it explicitly.**

**2. Commit date ≠ deploy date.**
CC dated a mechanism to a May commit and concluded it had been live for ten weeks. Crawl records disproved it. **Because CC parks commits until Mark approves a push, authored-in-May routinely means deployed-in-July.** When commit metadata and the served artifact disagree, **the artifact wins**.

**3. Ref-doc updates are batched, not continuous.**
Five versions of one index were produced in a single afternoon. **Hold ref-doc updates until Mark calls a batch point.** If something genuinely cannot wait — a rule that would produce a wrong answer in the same session — say so and ask rather than producing a file.

**4. Give CC the review URLs, not just the instruction to flag missing ones.**
A review prompt asked CC to flag any URL absent from the review set, without including the set. CC handled it correctly, but the omission was avoidable.

---

## 📅 Changelog

**July 29, 2026 (v6.19 → v6.20):**
- 🚨 **CLI-deploy divergence rule** added, with the HR-site incident, the dead-git-connection finding, and the four-site deploy state table. SC and WN flagged unchecked.
- 🚨 **CINC self-authorization rule** added. Also: check whether CC can do a task from the CLI before writing any CINC dashboard prompt.
- ✅ **Build-gate discipline** — local checks gate the build, network checks never do; a gate is a production dependency.
- 🔧 Four execution corrections: restarted-CC resumption, commit-date ≠ deploy-date, batched ref-doc updates, supply review URLs.

---

*CLI deploys can leave git behind — verify. CINC prompts never authorize themselves — Mark does. Local checks gate the build; network checks don't.*
