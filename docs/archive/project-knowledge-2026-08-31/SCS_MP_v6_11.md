# Strength Cycle Studios — Master Playbook

**Status:** ACTIVE — studio-level strategy, cross-cutting workflow rules, portfolio decisions
**Version:** v6.11 (June 17, 2026) — adds the **repo relocation `~/Desktop` → `~/dev`** + the **TCC/iCloud lesson**, the **new repo-path convention**, the **EAS marketing-version mechanics correction (studio-level)**, and the **PP_SEO v7 pointer**. Carries v6.10 forward.
**Cross-referenced in:** all per-app MASTER docs

---

## 🚦 RULE #0 — VERIFY BEFORE ASSERTING (no guessing) — HIGHEST PRIORITY, GOVERNS ALL

Never guess, theorize, assume, or reconstruct from memory anything with a knowable correct value — formats, names, codes, discounts, catalog contents, whether a page/file exists, prior decisions, portfolio state. Check the source FIRST: (1) the ref doc/knowledge file (**after a compaction, re-read it — never trust the summary**); (2) live data (`web_fetch` / `vendors.ts` / the live page); (3) fresh research. If unreachable, **say it's unverified.** **Corollary (June 1):** "absent from the docs" ≠ "doesn't exist" — defer to Mark's first-hand knowledge of his own assets, and close the doc gap so it stops recurring.

---

## 🖥️ Repo relocation — `~/Desktop` → `~/dev` (TCC + iCloud fix) — NEW v6.11

**The lesson (LOCKED): dev repos must NOT live in iCloud-synced `~/Desktop` (or `~/Documents`/`~/Downloads`).** That location caused two recurring failures this session:

1. **macOS TCC revocation mid-session.** The terminal/CC process lost Desktop access mid-run — every file read failed with `EPERM: operation not permitted` (`cat`/`grep`/`git`/`tsc`/the harness Read tool all blocked; only `ls`, a bare directory stat, survived). `~/Desktop` is TCC-protected. **Mark's first-hand fix: a fresh terminal restart restores full access** — the lockout hits the stale long-running session, not new launches, so **no Full Disk Access toggle is needed; just relaunch the terminal and restart CC.**
2. **iCloud "optimize storage" stalls Finder moves.** Desktop folders showed iCloud cloud icons (dataless placeholders, not downloaded). A Finder "move" hung in **"Preparing to move…" indefinitely** while iCloud tried to download every file first — catastrophic for `node_modules` (tens of thousands of files). Batching all repos at once made it worse.

**The fix (durable): relocate every repo to a local, non-iCloud, non-TCC folder `~/dev`.** Method (one repo at a time):
1. **Gut regenerable artifacts first:** `rm -rf <repo>/node_modules <repo>/.next <repo>/dist <repo>/build <repo>/.turbo`. Deleting an iCloud placeholder is **instant — no download**, and it removes 90%+ of the file count, so the move stops stalling.
2. `mkdir -p ~/dev && mv ~/Desktop/<repo> ~/dev/<repo>` — then `cd ~/dev/<repo> && git status` (confirms access), then `npm install` to rebuild `node_modules` locally.
3. **NEVER re-clone.** `mv` preserves uncommitted/unpushed work; re-cloning would lose it. **Must-preserve this migration:** PP has **parked uncommitted OG files**; SC has **local-only unpushed commits** (Texas Method `5d4478c`/`cf2f526`/`93292b6`).
- CC can run this once a fresh terminal restores its access (it can't while locked out). **Status: migration in progress via CC (June 17) — confirm each repo's new path before use.**

### 📂 Repo-path convention — UPDATED v6.11
**Repo home is now `~/dev/[repo]`** (was `~/Desktop/[repo]`). Apply to all path-bearing rules below: the terminal-delivery rule, the PP local spot-check routine, and the brand-site deploy pattern (`cd ~/dev/[site] && vercel …`). Repos: `~/dev/profpeptide` (PP site), `~/dev/profpeptide-app`, `~/dev/hybrid-rockstar` (+ `hybrid-rockstar-api`, `hybrid-rockstar-site`), `~/dev/strength-cycle` (+ `strength-cycle-site`), plus WN/Capstone repos. *(Until the move confirms, a given repo may still be at `~/Desktop` — verify before issuing a path.)*

---

## 🤝 Execution model — CC owns build work; Claude instructs (v6.10, unchanged)

For any **build task** (researched page, profile, feature, or code) **CC owns the whole job: research, content-writing, AND code.** Claude hands CC the **spec** (canonical spec doc), the **structural template** (an exemplar page to mirror), the **content guardrails** (evidence-honesty, locked labels, first-mention linking, what to verify), and the **acceptance checks** (tsc clean, links resolve, refs/PMIDs verified, staged-files-only + commit + push). **Claude does NOT pre-research or pre-write content/code.** What stays Claude's: strategy/decisions; short marketing copy (X posts, email, vendor bios); cross-tab orchestration (writing CC/CINC prompts); verification/spot-check of CC output. CSS in a CINC prompt is the one inline-code exception.

---

## 🔧 EAS versioning mechanics — CORRECTED (LOCKED, studio-level) — NEW v6.11

**Supersedes the prior wrong note** ("app.json version edits ineffective; use `eas build:version:set --platform ios` before each build" — proven false on HR this session). Correct for all EAS apps (SC, HR, WN):
- `appVersionSource: "remote"` + `autoIncrement: true` → governs **only the buildNumber** (EAS auto-increments each build).
- The **marketing version** (`version` in `app.json`) is **edited directly + committed BEFORE the build** (commit first or EAS archives the old version).
- `eas build:version:set` is **build-number only**, interactive, takes **no positional marketing version** — `eas build:version:set --platform ios 1.0.1` **FAILS** ("Unexpected argument").
- Run `eas build`/`eas submit` outside CC (`/exit`) or a fresh terminal; builds run in the cloud (`eas build:list` / expo.dev). `eas whoami` = a 2-sec connectivity probe for `ENOTFOUND api.expo.dev` (flaky DNS, not config).
- See **HR_MASTER v11** for the worked example (build 11).

---

## 🔎 PP SEO — bucket-driven Request-Indexing + Log — NEW v6.11 (see PP_SEO v7)

**PP_SEO v7** adds the standing **Request-Indexing routine + dedup Log** so CINC never re-requests already-requested or already-indexed pages:
- Source candidates **only from GSC Pages report → "Crawled – not indexed" + "Discovered – not indexed"** (auto-excludes indexed pages). **Skip** redirect / proper-canonical-alternate / noindex / the two Duplicate buckets / 404 / robots (those get *Validate Fix* or a canonical fix, never Request Indexing).
- **Cross-check candidates against the Request-Indexing Log** (dated); skip anything requested in the last ~30 days. After each run, CINC reports requested URLs → append to the Log.
- Mechanics: no bulk request (one-at-a-time URL Inspection); ~10-12/day rolling 24h.
- v7 also logs the **thin-content peptide cluster** (reta + sermorelin/igf-1-lr3/tb-500/kpv/selank/glow) → **CC depth + internal-link pass** is the real fix (re-requesting alone won't index thin pages). **PP_SEO v7 supersedes BOTH v6 files** (they conflicted on garcinia; v7 keeps the corrected stale-crawl framing).

---

## 🌐 Site Portfolio — (v6.9, paths updated per relocation)

Hosting model for every SCS site: **code on Vercel + a domain Mark owns + Cloudflare DNS (grey cloud / DNS-only) → Vercel.** Brand sites deploy via `vercel deploy --prod`; PP (profpeptide.com) auto-deploys on push to main.

| Zone | State |
|---|---|
| **profpeptide.com** | ✅ LIVE — PP site (Next.js, Vercel auto-deploy from main) |
| **hybridrockstar.app** | ✅ LIVE — HR marketing site |
| **strengthcycle.app** | ✅ LIVE — SC marketing site (`strength-cycle-site`) |
| **weightliftingnation.com** | ✅ LIVE — WN coming-soon (canonical) |
| **wlnation.com** | ✅ 308 → weightliftingnation.com ("WL" = WeightLifting) |
| **capstonepeptides.com** | Coming-soon (Capstone) |
| **pandorapeptides.com** / **renaissancepeptides.com** | ❓ Mark to clarify |

**Vercel MCP note:** Claude's Vercel MCP is a DIFFERENT account, **403-forbidden** from Mark's team — use CINC or Mark's authed CLI, never Vercel MCP for PP deploys (`git push main` only).

---

## 🏗️ SCS brand-site deploy pattern (LOCKED — paths updated)
1. CC builds the repo. 2. Vercel project linked. 3. **`RESEND_API_KEY` is PER-PROJECT** — set in a REAL plain terminal: `cd ~/dev/[site] && vercel env add RESEND_API_KEY production` (paste key into the prompt, never chat) → `vercel env ls production` → `vercel deploy --prod`. A Sensitive var can't be set from a CC/`!` session (no TTY). 4. **CINC** does Vercel domain + Cloudflare DNS (**grey cloud / DNS-only**, via Domain Connect "Auto configure" — the Cloudflare SPA DNS panel has a "Still loading" bug). 5. Let's Encrypt auto-issues. 6. **web_fetch the live URL before declaring it live.** ~8 min end-to-end.

---

## 🏢 Portfolio Snapshot (June 17, 2026)

| App | State | Version |
|---|---|---|
| **PP** | LIVE worldwide | v1.0.x live |
| **SC** | LIVE worldwide | v1.0.4 live (Texas Method committed local-only, unpushed) |
| **HR** | LIVE worldwide | v1.0.0 live; **v1.0.1 build 11 parked in ASC** (accuracy release — see HR v11) |
| **WN** | iOS pre-build (spec phase); marketing site LIVE | — |

---

## (Carried forward UNCHANGED — see v6.8/v6.9 for full text)
- **Community-Group Outreach Pattern** (HR HYROX → studio-wide go-to-market).
- **Studio-Standard Soft-Launch Pattern** (AU+IE+NZ+UK → worldwide).
- **Capstone Storefront Platform Decision** (gated on Denise's banking/platform rec).
- **CINC + CC Workflow Rules:** CINC pause-before-submit discipline / never clicks "Release This Version" / never clicks "Submit for Review" without a pause checkpoint; CC wake-up sequence (`cd ~/dev/[repo]` then `claude --dangerously-skip-permissions`, separate blocks), parallel repo tabs, `/exit` before `eas build`, git `masbooksonebay@gmail.com`, never modifies icons, **never `git add -A` while OG files are parked** (staged-files-only).
- **Terminal-command delivery (LOCKED):** always specify which terminal/tab + prerequisite `cd ~/dev/[repo]` before any repo command; never a bare command.
- **PP local spot-check routine (LOCKED):** on CC batch-complete, auto-provide `cd ~/dev/profpeptide && npm run dev` + clickable `http://localhost:3000/...` links (flagged pages first), note to wait for "Ready."
- **Standing Rule Set** — full numbered catalogue in the frozen snapshots (v6.2/6.3/6.5). RULE #0 outranks all.

---

## 📅 Changelog
**June 17, 2026 (v6.10 → v6.11):**
- ✅ **Repo relocation `~/Desktop` → `~/dev`** + **TCC/iCloud lesson** (dev repos in iCloud-Desktop cause mid-session TCC `EPERM` lockouts AND stalled Finder moves on dataless files; fix = gut node_modules → `mv` → npm install, never re-clone, one at a time; fresh terminal restart restores access with no FDA toggle). New `~/dev/[repo]` path convention applied to all path-bearing rules.
- ✅ **EAS marketing-version mechanics corrected (studio-level)** — `version` in app.json is edited + committed directly; `eas build:version:set` is build-number-only/interactive and rejects a positional marketing version. Supersedes the wrong SC-frozen/older note.
- ✅ **PP_SEO v7** — bucket-driven Request-Indexing routine + dedup Log + thin-content cluster CC task; supersedes both v6 files.

**June 14, 2026 (v6.9 → v6.10):** Execution-model rule (CC owns research + content + code; Claude instructs).
**June 1, 2026 (v6.8 → v6.9):** Site portfolio reconciled; SC + WN marketing sites live; brand-site deploy pattern; PP_INDEXING → PP_SEO; RULE #0 corollary.

---

## 🔗 Cross-References
- **PP_MASTER v15 (+ Addendum v3)** · **PP_SEO v7** · **PP_X_POSTS v34** · **PP_VENDOR_PAGES v2** · **SC_MASTER_ACTIVE v5.14 / FROZEN v5.3** (EAS note superseded) · **HR_MASTER v11** · **WN_MASTER_ACTIVE v1.2 / FROZEN v1.1** · **WL_MASTER_ACTIVE v2.x**

---

*Studio master playbook. RULE #0 governs all. CC owns build work, Claude instructs. Repos relocating to `~/dev` (out of iCloud-Desktop). EAS marketing-version mechanics corrected. Three apps live; HR v1.0.1 parked in ASC.*
