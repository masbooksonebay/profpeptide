# Strength Cycle Studios — Master Plan (MP)

**Status:** ACTIVE REFERENCE — studio-level master plan
**Version:** v6.2 (May 20, 2026 evening) — cross-cutting workflow lessons + Capstone email identity standard + search-project-knowledge-first rule
**Parent entity:** SCS LLC (Strength Cycle Studios, LLC, Virginia, EIN 42-1888796)

---

## 📍 Status Snapshot (May 20, 2026 evening)

**THREE-LANE PORTFOLIO ARCHITECTURE (LOCKED in v6):**
- **Lane 1 — Apps:** SC (Strength Cycle, iOS, 5/3/1 + TM + 3x5 Strength rebuild in progress), HR (Hybrid Rockstar, iOS, in Apple Review), PP App (iOS, v1.0.2 in Apple Review), WN (Weightlifting Nation, planned)
- **Lane 2 — PP Affiliate:** profpeptide.com content + vendor affiliate program
- **Lane 3 — White Label:** Capstone Peptides (planned LLC subsidiary; coming-soon deployed)

**Capacity planning:** 30-50 hrs/week steady-state total across all three lanes

---

## 🚦 Standing Rules (Universal)

### RULE #A — Self-contained ref doc snapshots
Frozen ref docs are self-contained snapshots of stable rules. Active trackers carry dynamic state and may reference frozen via `[Unchanged — see r{frozen doc id}]`.

### RULE #B — Mid-session ref doc updates require Mark's call
NEVER auto-rewrite ref docs mid-session. ALWAYS ASK Mark first: "Update ref doc now or queue for end-of-session?" Default to end-of-session batched updates.

### RULE #C — Ref doc speed (frozen + active split)
- Frozen doc = stable rules, definitions, format specs, premise + rationale, things-never-to-do. Updated when fundamentals change.
- Active tracker = dynamic state, recent changelog, current cycle/batch, profile cache. Under 1,500 words target.

### RULE #D — All SCS-related assets default to SCS LLC ownership
Established Apr 24, 2026. **v6 CARVE-OUT:** White Label assets default to WL LLC ownership (NOT SCS). Capstone Peptides domain registrations, payment processor accounts, banking, vendor contracts, customer data sit inside WL LLC. SCS owns WL LLC as sole member but does not directly hold WL assets.

### RULE #1 — EAS upload behavior
EAS uploads the WORKING TREE, not just committed git history. Verify `git status` is clean before any production build.

### RULE #2 — Memory + ref doc duality
Save important info to BOTH memory AND the appropriate ref doc. Never delete old drafts.

### RULE #3 — Never push code without working locally first
Test in simulator or ad hoc build before pushing. **v6 NOTE:** PP commits skip localhost dev-server entirely — Vercel auto-deploy + cache-bust audit on profpeptide.com replaces local testing for content/page changes. Working-locally rule still applies for substantive code changes (Next.js architecture, API routes, build config).

### RULE #4 (NEW v6.2) — Industry-comparison-first for design decisions
When recommending UX patterns, **compare against industry standards (Strong/Hevy/Boostcamp for apps; canonical methodology source for programming; ro.co/thorne for ecommerce) FIRST, then recommend.** Internal codebase consistency is a tiebreaker, not a primary criterion. Lesson source: Mark caught Claude twice this session for skipping this step (SS recommendations + WL fulfillment model).

### RULE #5 (NEW v6.2) — Search project knowledge first for portfolio-state questions
When Mark asks about portfolio state (current partners, candidates, prior decisions, vendor relationships, business unit status), **search project knowledge BEFORE answering from memory.** Memory has lossy recency bias; project knowledge has the authoritative ref doc state. Lesson source: this session's WL Master miss — answered from memory when ref doc explicitly contained the Tier 1 partner shortlist.

---

## 🎯 Communication Rules (Mark's Preferences)

- **TL;DR required** at end of any response longer than ~3 short paragraphs
- **Markdown links** for verification URLs, dashboards, references — `[display text](url)` format. Plain URLs fine inside code blocks
- **No wellness commentary.** Never suggest resting, stopping, breaking, or resuming later
- **No time-of-day language** (tonight, this morning, today, later, before bed, first thing tomorrow) unless Mark first uses such language in the same conversation
- **No session-length references.** Never reference fatigue, stopping points, or duration
- **No emoji** unless Mark uses one first or asks for them

---

## 🔧 Workflow Conventions

### Click-to-copy prompts in chat
Never tell Mark "go find the prompt in Gmail." Deliver CC and CINC prompts as click-to-copy code blocks directly in chat.

### Delegation defaults
- **CC (Claude Code)** — terminal/code work; per-project terminal tabs
- **CINC (Claude in Chrome)** — browser-based dashboard tasks (App Store Connect, Cloudflare, Vercel, etc.)
- **Scanning/verification** — delegate with "report back" pattern

### CC workflow conventions
- Wake-up sequence in separate code blocks: `cd ~/Desktop/[repo]` → `claude --dangerously-skip-permissions` → prompt
- Parallelize CC across repo tabs; `/exit` before `eas build`
- Git email must be `masbooksonebay@gmail.com` for Vercel compatibility
- CC never modifies icons (use Perplexity → SVG → cloudconvert.com → CC handles Expo asset packaging only)

### CC scope discipline nuance (NEW v6.2)
"Don't touch X" means "don't expand scope," NOT "don't apply forced compile fixes that schema changes make necessary." Stage 1 SS rebuild's changeUnits fix is the canonical example: 4-key → 7-key schema change FORCED a generic-conversion fix in context.tsx; that fix is the minimum required to keep tsc clean, NOT scope expansion. Option 1 (apply forced fix) is correct; Option 2 (leave tsc broken until Stage 2) is wrong.

### CC misattribution awareness (NEW v6.2)
File mtimes + naming conventions are NOT sufficient evidence of code authorship. Working-tree audits should distinguish:
- "Code authored by Mark" (requires explicit confirmation only)
- "Code authored by prior CC session" (default assumption for uncommitted work without Mark's explicit authorship claim)

Lesson source: SS rebuild discovery this session — May 12 uncommitted work was misattributed as Mark's hand-coding by both this Claude session AND the prior CC Wave 2 audit. Mark never programmed SS code.

### Stage discipline in multi-stage rebuilds (NEW v6.2)
Atomic verifiable stages prevent context overflow + mid-rebuild errors. Each stage:
- Single focused scope
- Verifiable outcome (tsc clean, commit, push)
- CC report identifies any scope-forcing fixes
- Mark approves any scope expansion before CC acts

### Site fetch rule (PP work)
Always use `web_fetch` to open profpeptide.com live pages directly before writing any CC prompt touching an existing page. Append a fresh unique query string (`?v=2`, `?audit=N`) to force fresh fetch — never reuse a prior query string. Mark's browser is authoritative.

### macOS TCC mid-session revocation handling (NEW v6.2)
macOS TCC permissions can revoke mid-session, blocking ~/Desktop/* git operations. **Workaround:** clone-and-push via `gh repo clone <repo> ~/<repo>-work`, work in non-TCC-gated path, push, Vercel auto-deploys, post-restart sync Desktop via `git pull`. **Long-term fix:** relocate repos out of ~/Desktop/ to ~/projects/ or ~/src/ (bypasses macOS TCC Desktop folder protections entirely). **Restart requirement:** Cmd+Q on Terminal.app required for grant refresh; restarting tab/window insufficient.

### Vercel deploy verification pattern
After `git push` + Vercel auto-deploy wait, curl-verify the **canonical URL** (not cache-buster `?v=N`) with grep for the expected change. Vercel's edge cache occasionally serves stale HTML for ~30-60 seconds post-deploy on canonical URLs; cache-buster URLs are always fresh but don't verify the actual user-facing path.

---

## 🔐 Credential Rules

Never receive credentials (EPP codes, passwords, API keys, 2FA codes, session tokens) via chat. Identifiers (legal info, account IDs, paths) are safe.

---

## 📊 Stock Research Rule

For each stock, conduct fresh independent research. Analyze: (1) complete fundamentals, (2) complete technicals, (3) macro at 3 levels — Global / Industry / Company. Provide objective analysis, not portfolio fit advice.

---

## 🆔 Mark's Identity Facts (durable)

- 30+ year lifter, deep powerlifting/strength training methodology knowledge
- **Attorney** (durable context for legal/IP/risk discussions; skip basics, focus on tactical detail and tradeoffs)
- Plays Wizard card game with brothers (motivated W app — currently REMOVED from portfolio)
- Sells books on eBay as side operation
- Conducts market research for subscriber base, options trading focus
- LLC: SCS LLC, EIN 42-1888796, VA Entity ID 12000401, D-U-N-S 144999413, Apple Team ID VCT64S7K6P
- Apple LLC enrollment: case 102887649950 escalated to internal team May 6 2026, no ETA

### Email identity conventions (UPDATED v6.2)

- **Personal:** markshurtliff@gmail.com
- **PP/SCS:** profpeptide@gmail.com
- **eBay:** masbooksonebay@gmail.com (also used for Vercel git commits)
- **Capstone (NEW v6.2):** mark@capstonepeptides.com (Cloudflare Email Routing → markshurtliff@gmail.com; strict separation from PP/SCS per WL_MASTER_FROZEN)

---

## 📚 Ref Doc Architecture

### Frozen + active split (RULE #C)

| Workstream | Frozen Doc | Active Doc | Current Version |
|---|---|---|---|
| Studio Master Plan | (single doc) | SCS_MP | v6.2 |
| Strength Cycle (SC) | SC_MASTER_FROZEN | SC_MASTER_ACTIVE | v5.8 |
| Hybrid Rockstar (HR) | (single doc) | HR_MASTER | v4 |
| Prof Peptide (PP) | (single doc) | PP_MASTER | v7 |
| PP X Posts | (single doc) | PP_X_POSTS | v17 |
| White Label (Capstone) | WL_MASTER_FROZEN | WL_MASTER_ACTIVE | v1.4 |
| Weightlifting Nation (WN) | WN_MASTER_FROZEN | WN_MASTER_ACTIVE | (locked May 10) |

### Active specs
- PP CONTENT TEMPLATE v4.4 (supersedes v4.3)
- HR Cycle 1 v3.2 PROGRAMMING DOC
- WN Russia Methodology Spec v3

---

## 🛒 Vendor Verification Rule

Verify corporate domicile (not just marketing claims). Cernum Biosciences lesson — European number formatting (94,99 $) revealed Estonian base despite "USA" marketing. **Number formatting tells:** `94,99 $` (comma decimal, currency after) reveals European origin; `$94.99` (period decimal, currency before) is US format.

PR placement vs independent journalism distinction: ABNewswire, kake.com, "The Future of Things" are paid placement services, NOT independent reviews.

---

## 📅 Changelog

**May 20, 2026 (this session — v6.1 → v6.2):**
- ✅ **RULE #4 added:** Industry-comparison-first for design decisions (lesson source: Mark caught Claude twice this session)
- ✅ **RULE #5 added:** Search project knowledge first for portfolio-state questions (lesson source: WL Master miss this session)
- ✅ **CC scope discipline nuance captured:** "Don't touch X" ≠ "don't apply forced compile fixes from schema changes"
- ✅ **CC misattribution awareness captured:** File mtimes don't prove authorship
- ✅ **Stage discipline pattern captured:** Atomic verifiable stages for multi-stage rebuilds
- ✅ **macOS TCC mid-session revocation pattern captured:** Workaround + long-term fix
- ✅ **Capstone email identity standard added:** mark@capstonepeptides.com → markshurtliff@gmail.com

**Prior session entries:** unchanged. See v6.1 history.

---

## 🔗 Cross-References

All workstream ref docs (SC, HR, PP, WL, WN) cross-reference SCS_MP as parent doc.

---

*Studio master plan. Updated when cross-cutting principles change, workflow lessons codify, identity facts update, or rule set evolves.*
