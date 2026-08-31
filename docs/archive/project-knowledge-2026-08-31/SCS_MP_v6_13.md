# Strength Cycle Studios — Master Playbook

**Status:** ACTIVE — studio-level strategy, cross-cutting workflow rules, portfolio decisions
**Version:** v6.13 (July 13, 2026) — adds the **App-repo git-backup rule** (push after app work; EAS builds from local git and never forces a push, unlike auto-deploying sites) and the **Affiliate-attribution verification rule** (confirm BOTH code + link paths actually track before investing promotion/a page). Carries v6.12 forward unchanged.
**Cross-referenced in:** all per-app MASTER docs

---

## 🚦 RULE #0 — VERIFY BEFORE ASSERTING (no guessing) — HIGHEST PRIORITY, GOVERNS ALL OTHER RULES

Never guess, theorize, assume, or reconstruct from memory anything with a knowable correct value — formats, names, codes, discounts, catalog contents, whether a page/file exists, prior decisions, portfolio state. Check the source FIRST: (1) the relevant ref doc/knowledge file — **after a compaction, re-read it; never trust the summary**; (2) live data (`web_fetch` / `vendors.ts` / the live page); (3) fresh web research. If the source can't be reached, **say the value is unverified rather than filling it in.** When unsure, **stop and check.**

> **Corollary (June 1):** "absent from the ref docs" ≠ "doesn't exist." Defer to Mark's first-hand knowledge of his own assets faster, AND close doc gaps so it stops recurring.

> **Reinforced (June 26):** RULE #0 earned its keep repeatedly this session — CC's recon caught that the `/coupons` hub grouping (curated `sections` array) is **decoupled** from `vendors.ts` `bestDeal` badge flags (naively flipping the flag would've been wrong); and a whole-repo grep found the stale "vetted vendors: Peptides.gg" line on **5 files/13 occurrences**, not the 3 briefed. Also caught two vendor name-collisions (Amino Club ≠ Amino X; the real `aminoclub.com` vs. clone domains) by checking PP's own coupon page rather than guessing.

---

## 🤝 Execution model — CC owns build work; Claude instructs (v6.10, unchanged)

For any **build task** (researched page/profile/feature/code), **CC owns the whole job: research + content-writing + code.** Claude provides the **spec**, the **structural template/exemplar**, the **content guardrails**, and the **acceptance checks** — and does NOT pre-research or pre-write the content/code. **What stays Claude's:** strategy/decisions; short marketing copy (X posts, email, vendor bios); cross-tab orchestration (writing CC/CINC prompts + sequencing); and verification/spot-check of CC output. CSS inside a CINC prompt is the one inline-code exception.

### 🆕 HEADLESS-ONLY rule for CC (LOCKED — every CC prompt, v6.12)
Append to **every** CC prompt, app or site:
> **HEADLESS ONLY** — do NOT use computer-use or cliclick; do not tap/click/move windows or take over the screen. Verify via git, `tsc`/build, `npm test`, `simctl` (openurl to navigate, `io booted screenshot` to capture), and curl only. Leave all live GUI interaction / visual sign-off to Mark.

Why: CC repeatedly seized the laptop screen via computer-use to drive the simulator. Headless verification (git/build/test/simctl-screenshot/curl) never touches the screen; the *taps* do. Two reinforcements: (a) a Code-tab setting "hide other windows while Claude works" can be toggled off; (b) the rule belongs on **site** prompts too (git/build/curl), not just app prompts. **Preview-route discipline:** for "show me options" decisions, CC builds a throwaway `app/<name>-preview.tsx`, screenshots headlessly, then deletes it — never ships it.

### 🆕 Claude Code multi-session note (v6.12)
Claude Code **desktop** supports multiple parallel **sessions** (sidebar "+ New session" / Cmd+N; Ctrl+Tab to cycle; Cmd-click a sidebar entry to view two at once). Each session is independent context; for Git repos each session gets its own **isolated worktree**, so changes don't collide until committed. This is the supported way to run the **app repo** (`~/dev/profpeptide-app`) and **site repo** (`~/dev/profpeptide`) sessions at once — one per repo, never paste an app prompt into the site session or vice-versa. Token use is ~additive per live session (fine on Max). Desktop is single-window (view one at a time / two via Cmd-click); true multi-window isn't supported yet.

---

## 🆕 Sequencing principle — App-first for shared models; site SEO/content independent (LOCKED — v6.12)

When a feature shares a **conceptual model** across the app and the site (peptide taxonomy, vendor data, PK/half-life, the PeptideProfile schema, blend/stack pages), **define it once in the app where it's hardest, ship it, then mirror it to the site** — don't invent it twice and reconcile drift later. Building site *features* in parallel while the app's model is still churning makes the site chase a moving target.

Two buckets:
- **Site FEATURES that share a model with the app → app-first, mirror after** (PeptideProfile structured-data schema, blend/stack profile pages, PK/citation data).
- **Site SEO / content / vendor / ops work → independent, runs anytime** (GSC recrawl/indexing, weekend query-mining, stale-copy fixes, vendor adds, X posts). These have their own clock and should NOT wait on the app. *(This session's Amino X add + Amino Club posts are exactly the right kind of "do anytime" site work; the PeptideProfile schema is exactly the kind to hold until the app defines it.)*

Also retained: **"good-enough-to-launch-and-switch-later"** for vendor/partner selection; **quality-first** for product + content.

---

## 🌐 Site Portfolio — [Unchanged — see v6.9/v6.11 for full 8-zone table]
Hosting model: code on Vercel + a domain Mark owns + Cloudflare DNS (grey cloud / DNS-only) → Vercel. PP auto-deploys on push to main; brand sites via `vercel deploy --prod`. **Vercel MCP is a different account, 403-forbidden from Mark's team — never use it for PP deploys.**

## 🏗️ SCS brand-site deploy pattern — [Unchanged — see v6.11]
CC builds → Vercel linked → **`RESEND_API_KEY` per-project** set in a REAL terminal (`vercel env add … production`, never chat) → CINC does Vercel domain + Cloudflare DNS (grey cloud, Domain Connect "Auto configure") → Let's Encrypt → web_fetch the live URL before declaring live.

---

## 🏢 Portfolio Snapshot (June 26, 2026)

| App | State | Version |
|---|---|---|
| **PP** | LIVE worldwide; **premium redesign on `feat/app-premium-redesign` (unpushed, main `f82f37f`)** — Phase 2c + Stage 4 + Research Library A/B done; next = haptics → AI chat → submit | v1.0.x live |
| **SC** | LIVE worldwide (Texas Method committed local-only, unpushed) | v1.0.4 live |
| **HR** | LIVE worldwide; v1.0.1 build 11 parked in ASC | v1.0.0 live |
| **WN** | iOS pre-build (spec phase); marketing site LIVE | — |

---

## (Carried forward UNCHANGED — see v6.8/v6.9/v6.11 for full text)
- **Community-Group Outreach Pattern** · **Studio-Standard Soft-Launch Pattern** · **Capstone Storefront Platform Decision** (gated on Denise's banking/platform rec).
- **CINC + CC Workflow Rules:** CINC never clicks "Release This Version" / never "Submit for Review" without a pause checkpoint; CC wake-up sequence, parallel repo tabs, `/exit` before `eas build`, git `masbooksonebay@gmail.com`, never modifies icons, **never `git add -A` while parked/uncommitted work exists** (staged-files-only, explicit paths).
- **Terminal-command delivery (LOCKED):** always specify which terminal/tab + prerequisite `cd ~/dev/[repo]`; never a bare command; each command in its own click-to-copy fenced block.
- **PP local spot-check routine (LOCKED):** on CC batch-complete, auto-provide `npm run dev` + clickable localhost links (flagged pages first), note to wait for "Ready."
- **EAS marketing-version mechanics** (v6.11): `version` in app.json edited + committed directly; `eas build:version:set` is build-number-only/interactive.
- **Repo location `~/dev/`** (out of iCloud-Desktop; TCC lesson — v6.11).
- **Standing Rule Set** — full numbered catalogue in frozen snapshots (v6.2/6.3/6.5). RULE #0 outranks all.

---

## 💾 App-repo git backup — PUSH after app work (NEW v6.13)

**Websites auto-protect; app repos don't.** Brand sites deploy via `git push origin main` (push is *required* to go live, so it always happens). But the **apps ship via EAS → TestFlight → App Store, which builds from LOCAL git state and never forces a push to GitHub.** So an app can be built, shipped, and live while its commits sit only on Mark's laptop. This bit us July 13:

- **PP app** had **86 commits (incl. likely-published code) unpushed** — GitHub `main` was stuck at a June 6 baseline, 5 commits + the entire `feat/app-premium-redesign` branch stranded local-only. Backed up (branch pushed, then a clean fast-forward push of main). *The scary "+10,984 uncommitted lines" was actually the branch-vs-main diff — committed work, not uncommitted; the real risk was "not backed up," not "about to be discarded."*
- **HR app** commits *were* synced, but `git fetch` was **silently broken** by a corrupt ref (`refs/remotes/origin/main 2`, a Finder "… 2" duplicate) — which disables the "your branch is ahead" warning, i.e. the exact mechanism that hides future stranding. Fixed by removing the stray ref.
- **SC app** was clean (proves the push habit *did* happen sometimes — this was a specific lapse, not total).

**Why it gets missed:** app version/release management happens in **EAS + app.json for Apple's benefit** (getting version names consistent on Apple's end), which bypasses GitHub entirely — so the push falls through the cracks while attention is on the App Store side. (This session's version-naming churn — a TestFlight resubmit just to fix a version name — is exactly that dynamic.)

**THE RULES:**
1. **After ANY app work — every commit, every EAS build — explicitly `git push origin <branch>`.** Don't rely on a deploy step to force it; the app pipeline doesn't.
2. **Push feature branches too** (not just main) — a "done but unmerged" redesign branch is otherwise single-copy on the laptop.
3. **Periodically verify `git fetch` works** on app repos — a broken fetch silently hides drift. If fetch errors on a bad ref, remove the stray ref (read-only investigate first).
4. Every app-repo CC prompt Claude writes ends with a push, same as the site prompts.

---

## 🔗 Affiliate-attribution verification — test BOTH paths before investing (NEW v6.13)

PP earns two ways per vendor: **code-based** (commission when the discount code is used) AND **link-based** (cookie when the affiliate link is clicked). Before building a vendor page or investing promotion, confirm attribution actually *functions* — a vendor you can't get paid from is worth zero regardless of traffic/growth.

- **Code path is self-evident:** test the code at checkout; redemptions are visible.
- **Link path is a blind spot:** clicks → cookie → later purchase attributes *silently*; zero results could mean "nobody bought" OR "tracking silently failed" — indistinguishable from the dashboard.
- **The 2-minute diagnostic:** click your own affiliate link in a clean/incognito browser and check whether the dashboard logs the **traffic/click** (not a purchase). Registers → link tracking works. Zero → link tracking is broken.
- **Fusion Peptide (July 13) — cautionary case:** dashboard showed **0 across the board** (clicks + referrals) while every other vendor tracked hundreds–thousands. Vendor confirmed they went **"BOGO always → codes don't work"** — so code attribution is dead by design, yet they kept emailing affiliates to promote. Open question whether *link* tracking still fires. **Deprioritized** — promoting a vendor whose model can't attribute you = donating free traffic. However fast a vendor grows (Fusion ↑436%), growth you can't monetize isn't yours.
- **Geography is also a screening factor:** PP's audience is US-skewed. US-market vendors rank ahead of EU-only regardless of traffic (Beyond=Poland geo-gate, Cellpept=EU/Romania, nova-biolabs=UAE). Confirm US shipping + usable affiliate pay before prioritizing a non-US vendor. See PP_VENDOR_PROSPECTING for the full ledger.

---

## 📅 Changelog
**July 13, 2026 (v6.12 → v6.13):**
- ✅ **App-repo git-backup rule** — push after every app commit/EAS build; the EAS→TestFlight pipeline builds from local git and never forces a push (unlike auto-deploying sites), so app commits get stranded. Found + fixed: PP app (86 commits unpushed → backed up), HR app (broken git fetch from corrupt ref → fixed), SC app (clean). Verify fetch health periodically.
- ✅ **Affiliate-attribution verification rule** — confirm BOTH code + link paths track before investing in a vendor page/promotion (test code at checkout; click own link in incognito to confirm dashboard logs traffic). Fusion Peptide deprioritized (BOGO model, codes don't attribute). Geography added as a screening factor (US-market > EU-only regardless of traffic).

**June 26, 2026 (v6.11 → v6.12):**
- ✅ **App-first-for-shared-models sequencing principle** added (shared-model site features follow the app + mirror; site SEO/content/vendor work runs independently).
- ✅ **HEADLESS-ONLY CC rule** added to the execution model (no computer-use/cliclick on any CC prompt; verify via git/build/test/simctl-screenshot/curl; preview-route discipline).
- ✅ **Claude Code multi-session note** (isolated worktrees; app + site sessions in parallel, one per repo).
- ✅ RULE #0 reinforced with this session's catches (hub-grouping vs badge-flag decoupling; whole-repo grep > briefed count; vendor name-collision checks).
- ✅ Portfolio snapshot: PP premium redesign progress logged (branch unpushed; next = haptics → AI → submit).

**June 17, 2026 (v6.10 → v6.11):** Repo relocation `~/Desktop` → `~/dev` + TCC lesson; EAS marketing-version mechanics corrected; PP_SEO v7.
**June 14, 2026 (v6.9 → v6.10):** Execution-model rule (CC owns research + content + code; Claude instructs).

---

## 🔗 Cross-References
- **PP_MASTER v15 (+ Addendum v4)** · **PP_APP_REDESIGN v3** · **PP_APP_THEME_SPEC v1** · **PP_SEO v10** · **PP_X_POSTS v36** · **PP_VENDOR_PAGES v2** · **SC_MASTER_ACTIVE v5.14 / FROZEN v5.3** · **HR_MASTER v11** · **WN_MASTER_ACTIVE v1.2 / FROZEN v1.1** · **WL_MASTER_ACTIVE v2.x**

---

*Studio master playbook. RULE #0 governs all. CC owns build work (HEADLESS only); Claude instructs. App-first for shared models; site SEO/content independent. PP premium redesign mid-flight on `feat/app-premium-redesign` (unpushed).*
