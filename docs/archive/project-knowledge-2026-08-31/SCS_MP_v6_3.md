# Strength Cycle Studios — Master Plan (MP)

**Status:** ACTIVE REFERENCE — studio-level master plan
**Version:** v6.3 (May 22, 2026 evening) — DEV-CLIENT vs EXPO-GO diagnostic + TCC re-verification checkpoint + refined vendor DD principle + X account multi-account-switching lockout pattern
**Parent entity:** SCS LLC (Strength Cycle Studios, LLC, Virginia, EIN 42-1888796)

---

## 📍 Status Snapshot (May 22, 2026 evening)

**THREE-LANE PORTFOLIO ARCHITECTURE (LOCKED in v6):**
- **Lane 1 — Apps:** SC (Strength Cycle, iOS, v1.0.4 polish phase complete, all waves committed locally awaiting sim verification + deploy), HR (Hybrid Rockstar, iOS, LIVE on App Store), PP App (iOS, v1.0.1 LIVE / v1.0.2 status TBC), WN (Weightlifting Nation, planned)
- **Lane 2 — PP Affiliate:** profpeptide.com content + vendor affiliate program + @profpeptideapp launch announcement live
- **Lane 3 — White Label:** Capstone Peptides (planned LLC subsidiary; coming-soon deployed; RapidFulfillment DD substantially complete, three blockers before signing)

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

### RULE #4 — Industry-comparison-first for design decisions
When recommending UX patterns, **compare against industry standards (Strong/Hevy/Boostcamp for apps; canonical methodology source for programming; ro.co/thorne for ecommerce) FIRST, then recommend.** Internal codebase consistency is a tiebreaker, not a primary criterion.

### RULE #5 — Search project knowledge first for portfolio-state questions
When Mark asks about portfolio state (current partners, candidates, prior decisions, vendor relationships, business unit status), **search project knowledge BEFORE answering from memory.** Memory has lossy recency bias; project knowledge has the authoritative ref doc state.

### RULE #6 (NEW v6.3) — Refined vendor DD principle
**Vendor decisions are made on "good enough to launch and switch later if needed," NOT "ideal forever partner."** Vendor landscape in niche verticals (peptide fulfillment, hyrox training, etc.) doesn't reward extended search. Identify three classes of risks:
- **Launch blockers** — must resolve BEFORE signing (e.g., payment processor credentialing, integration architecture, deposit dollar amount)
- **Yellow flags** — accept with awareness, document in ref doc (e.g., verbal-only contract carve-outs without written addendum)
- **Resolvable post-signing** — proceed (e.g., product quality verification on first test orders)

Replaced prior "never PG against opaque supplier" framing. The PG framing was correct in principle but too binary for actual dropship contracts where signup obligations are minimal and exit terms are clean.

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

### CC scope discipline nuance
"Don't touch X" means "don't expand scope," NOT "don't apply forced compile fixes that schema changes make necessary." Stage 1 SS rebuild's changeUnits fix is the canonical example.

### CC misattribution awareness
File mtimes + naming conventions are NOT sufficient evidence of code authorship. Working-tree audits should distinguish:
- "Code authored by Mark" (requires explicit confirmation only)
- "Code authored by prior CC session" (default assumption for uncommitted work without Mark's explicit authorship claim)

### Stage discipline in multi-stage rebuilds
Atomic verifiable stages prevent context overflow + mid-rebuild errors. Each stage:
- Single focused scope
- Verifiable outcome (tsc clean, commit, push)
- CC report identifies any scope-forcing fixes
- Mark approves any scope expansion before CC acts

### Site fetch rule (PP work)
Always use `web_fetch` to open profpeptide.com live pages directly before writing any CC prompt touching an existing page. Append a fresh unique query string (`?v=2`, `?audit=N`) to force fresh fetch — never reuse a prior query string. Mark's browser is authoritative.

### macOS TCC mid-session revocation handling
macOS TCC permissions can revoke mid-session, blocking ~/Desktop/* git operations. **Workaround:** clone-and-push via `gh repo clone <repo> ~/<repo>-work`, work in non-TCC-gated path, push, Vercel auto-deploys, post-restart sync Desktop via `git pull`. **Long-term fix:** relocate repos out of ~/Desktop/ to ~/projects/ or ~/src/ (bypasses macOS TCC Desktop folder protections entirely). **Restart requirement:** Cmd+Q on Terminal.app required for grant refresh; restarting tab/window insufficient.

### TCC grant re-verification checkpoint (NEW v6.3)
**macOS TCC permissions can be lost between CC waves** during heavy sim/Metro work — not just at session boundaries. Hit twice in the May 22 session during SC PASS 1 verification. Symptom: EPERM on `~/Desktop/*` operations CC was previously able to perform. Diagnostic protocol:
1. Smoke test `ls ~/Desktop/[repo]` first when EPERM appears mid-wave
2. If smoke test fails, Cmd-Q terminal → System Settings → Privacy & Security → Files and Folders / Full Disk Access → confirm both Terminal entries enabled → restart terminal entirely (Cmd-Q, not just window close) → retry
3. Re-grant doesn't require restarting Mac; just terminal-quit-relaunch with grant intact

### DEV-CLIENT vs EXPO-GO diagnostic checkpoint (NEW v6.3)
**When sim isn't reflecting code changes despite Metro running, check dev-client vs Expo Go BEFORE chasing AsyncStorage/routing/Metro caching.**

SC is a dev-client project (prebuilt `ios/` directory + custom `strengthcycle` URL scheme). When `simctl uninstall com.strengthcycle.app` runs and no dev client is installed, `expo start` + `i` falls back to launching **Expo Go** (`host.exp.Exponent`) with a stale cached pre-wave bundle. AsyncStorage container for `com.strengthcycle.app` gets wiped repeatedly but the running app is Expo Go (wrong bundle ID, wrong storage container).

**Symptom signature:**
- Sim runs an app that LOOKS like the SCS app
- Code changes don't appear after Metro reload
- AsyncStorage resets don't take effect
- Bundle ID in dev menu shows `host.exp.Exponent` (Expo Go) instead of the project's bundle ID

**Fix:** `npx expo run:ios --device <UDID>` — rebuilds and reinstalls the dev client cleanly. Do NOT press `i` in Metro after a `simctl uninstall` — that's the trap.

**Repo state check:** if `ios/` directory exists in the project root + custom scheme defined in `app.json`, it's a dev-client project and pressing `i` in Metro to a fresh sim will fail this way.

### Vercel deploy verification pattern
After `git push` + Vercel auto-deploy wait, curl-verify the **canonical URL** (not cache-buster `?v=N`) with grep for the expected change. Vercel's edge cache occasionally serves stale HTML for ~30-60 seconds post-deploy on canonical URLs; cache-buster URLs are always fresh but don't verify the actual user-facing path.

### X account multi-account-switching pattern (NEW v6.3)
Rapidly switching between multiple X accounts on the same device + IP combination triggers X's bot-detection at the login-flow level. Symptom: "Oops, something went wrong. Please try again later." on `x.com/i/flow/login` BEFORE entering credentials. Public profile browsing continues to work (read access unaffected) — only the login endpoint is rate-limited.

**Bypass paths (in order of cleanliness):**
1. Different device + different IP (e.g., iPad on cellular) — clean bypass, login works
2. Different device + same IP (e.g., iPad on home WiFi) — bypass if flag is fingerprint-only; fails if IP-level
3. Same device + different IP (e.g., laptop tethered to phone hotspot) — bypass if device fingerprint is the issue
4. Wait 24-48h with no login attempts from flagged IP

**Triggers (avoid in future):**
- Rapid account switching on same device
- Repeated failed login attempts (each retry extends rate limit)
- Browser automation drivers (Selenium, CDP, CINC) — even on legitimate browsers

**Once logged in:** iOS session tokens survive IP/network changes, so a login obtained on cellular persists when device returns to WiFi. Don't log out mid-session.

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

### Email identity conventions

- **Personal:** markshurtliff@gmail.com
- **PP/SCS:** profpeptide@gmail.com
- **eBay:** masbooksonebay@gmail.com (also used for Vercel git commits)
- **Capstone:** mark@capstonepeptides.com (Cloudflare Email Routing → markshurtliff@gmail.com; strict separation from PP/SCS per WL_MASTER_FROZEN; still in warmup, partner outreach continues from markshurtliff@gmail.com)

---

## 📚 Ref Doc Architecture

### Frozen + active split (RULE #C)

| Workstream | Frozen Doc | Active Doc | Current Version |
|---|---|---|---|
| Studio Master Plan | (single doc) | SCS_MP | v6.3 |
| Strength Cycle (SC) | SC_MASTER_FROZEN | SC_MASTER_ACTIVE | v5.9 |
| Hybrid Rockstar (HR) | (single doc) | HR_MASTER | v5 |
| Prof Peptide (PP) | (single doc) | PP_MASTER | v8 |
| PP X Posts | (single doc) | PP_X_POSTS | v18 |
| White Label (Capstone) | WL_MASTER_FROZEN | WL_MASTER_ACTIVE | v1.5 |
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

**May 22, 2026 (this session — v6.2 → v6.3):**
- ✅ **RULE #6 added:** Refined vendor DD principle (good-enough-to-launch + three-class risk taxonomy)
- ✅ **TCC grant re-verification checkpoint captured:** macOS TCC can lose grants between CC waves, not just at session boundaries
- ✅ **DEV-CLIENT vs EXPO-GO diagnostic checkpoint captured:** symptom signature + fix for when sim doesn't reflect code changes
- ✅ **X account multi-account-switching pattern captured:** lockout symptoms + bypass paths + triggers to avoid

**Prior session entries:** unchanged. See v6.2 history.

---

## 🔗 Cross-References

All workstream ref docs (SC, HR, PP, WL, WN) cross-reference SCS_MP as parent doc.

---

*Studio master plan. Updated when cross-cutting principles change, workflow lessons codify, identity facts update, or rule set evolves.*
