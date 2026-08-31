# SCS MASTER PRINCIPLES v6

**Status:** ACTIVE REFERENCE — cross-cutting operating principles for Strength Cycle Studios, LLC
**Version:** v6 (May 16, 2026; same-day MP→WL rename pass applied)
**Source:** Updated from SCS_MP_v5.md baseline — incorporates session learnings from May 16, 2026 (White Label business unit addition + portfolio architecture expansion + standing rules from session)
**Cross-referenced in:** PP_MASTER, HR_MASTER, SC_MASTER_FROZEN, SC_MASTER_ACTIVE, WN_MASTER_FROZEN (NEW), WN_MASTER_ACTIVE (NEW), WL_MASTER_FROZEN (NEW), WL_MASTER_ACTIVE (NEW), PP_VENDORS (NEW, queued)

---

## v5 → v6 CHANGELOG

**MAJOR STRATEGIC EXPANSION:**
- 🆕 **NEW BUSINESS UNIT — White Label** (placeholder name). Separate LLC, subsidiary of SCS LLC. Merchant-of-record peptide ecommerce business. Strict separation from PP affiliate operation. Full state: WL_MASTER_FROZEN.md + WL_MASTER_ACTIVE.md.
- 🆕 **PORTFOLIO ARCHITECTURE FORMALIZED INTO 3 LANES:** Apps (PP/HR/SC/WN + future CF/Cali) + PP Affiliate (profpeptide.com content site) + White Label (peptide ecommerce, separate entity).
- 🆕 **PP "SYSTEMATIZE MODE" LOCKED** — NOT abandonment. 1-2 new peptide pages/month + monthly X post cycles + ~5-8 hrs/week maintenance. Preserves compounding SEO value (12-18 month maturation curve).
- 🆕 **CAPACITY PLANNING FRAMEWORK** — 30-50 hrs/week steady-state total across all operations; full-time-equivalent solo founder load.

**STANDING RULES NEWLY LOCKED THIS SESSION:**
- 🆕 **PP audit workflow:** Skip localhost dev-server entirely. CC commits + pushes → Vercel auto-deploys (~60-90s) → audit on profpeptide.com with cache-bust query strings.
- 🆕 **PP commit workflow:** CC handles BOTH `git commit` AND `git push origin main` in single operation when Mark gives commit instruction. (Still requires Mark instruction — not autonomous.)
- 🆕 **HR sim handoff sequence:** Every HR CC prompt requiring sim audit ends with terminate-then-openurl sequence as final mandatory step.
- 🆕 **v4.4 spec annotation clarity:** Italic `*(mechanism of action)*` shorthand in spec docs is EDITORIAL ANNOTATION, NEVER literal page content.
- 🆕 **HR trademark:** Never says "Hyrox" in consumer-facing copy.
- 🆕 **localhost dev-server-start rule:** Any localhost URLs for audit are prepended with dev-server-start command (mostly obsolete per PP audit rule, documented for HR-equivalent contexts).
- 🆕 **Vendor verification rule:** Verify corporate domicile (not just marketing claims). Cernum Biosciences lesson — European number formatting (94,99 $) revealed Estonian base despite "USA" marketing.

**DIAGNOSTIC CAPTURES THIS SESSION:**
- 🆕 **macOS TCC issue on Desktop folder:** Terminal needed Full Disk Access for `~/Desktop/profpeptide` git operations. Resolved via macOS updates installing. Workaround: move project to `~/profpeptide` to bypass TCC entirely if recurs.
- 🆕 **Node v25.9.0 + macOS EPERM uv_cwd issue:** Process can lose access to cwd mid-session. Avoid Node v25.x if encountering EPERM on uv_cwd; v22 LTS or v24 are safer.

**WORKSTREAM PROGRESS:**
- ✅ **HR Wave 3D v5 COMMITTED** as `07c5146` (Phase 1-6 + 3 fixes for leadingEdgeWeek + COMPLETE predicate + Up Next Option A walk-forward)
- ✅ **PP Blend Wave 2 COMMITTED** — Wolverine v4.4 rewrite, GH Stack v4.4 rewrite with CJC-DAC distinction, new Semax + Selank page, index gap-fix (count 29 → 32)
- ✅ **PP X Cycle 3 #9 (Limitless Biotech) DRAFTED** — first use of v3.1 non-GLP variant pattern (GLPs gated behind VIP at Limitless)
- ✅ **White Label partner research COMPLETED** — 5 vendors evaluated (YPB Tier 1, Cernum DOWNGRADED, Evolve Tier 2, RapidFulfillment too new, Unrivaled skip)
- ✅ **GoAffPro vendor research COMPLETED** — 9 vendors ranked for PP affiliate pipeline (Certified-Pep + RCHQ as Tier 1 candidates)

**SAME-DAY RENAME (May 16, 2026):**
- 🆕 **MP → WL prefix rename** — placeholder business prefix collided with "MP" = Master Plan (this doc). WL = White Label is unambiguous and matches portfolio shorthand pattern (PP / SC / HR / WN / WL / future CF + Cali). All ref docs and cross-references updated.
- 🆕 **WL payment stack locked** — ACH via Plaid + Crypto + Zelle + Wire as launch stack; card processing deferred to v2 (3-6 months post-launch). Full state in WL_MASTER_FROZEN v1.1.
- 🆕 **Banking diversification rule locked** — 2+ business bank accounts at different banks from day one. Mercury acceptable as one of two (not sole) due to peptide-business closure risk.

---

## ANTHROPIC ACCOUNT / WORKFLOW DETAILS

### Mark Identity
- 30+ year lifter, deep powerlifting/strength training methodology knowledge
- Plays Wizard card game with brothers (motivated W app — REMOVED from portfolio)
- Sells books on eBay as side operation
- Conducts market research for subscriber base, options trading focus
- Located: Fairfax, VA

### LLC / Corporate — SCS LLC (Parent)
- **Entity:** Strength Cycle Studios, LLC
- **State:** Virginia
- **EIN:** 42-1888796
- **VA Entity ID:** 12000401
- **D-U-N-S:** 144999413
- **Apple Team ID:** VCT64S7K6P
- **ASC Provider ID:** 128764046
- **Enrollment ID:** 7V247G236M
- **Account Holder:** MARK ANSON SHURTLIFF
- **Apple ID:** markshurtliff@gmail.com
- **Address:** 9712 Ashbourn Dr, Burke VA 22015-1806
- **Phone on file:** 1-909-702-6765
- **DSA org-level contact:** admin@profpeptide.com, (703) 679-8402

### LLC / Corporate — WL LLC (Planned Subsidiary)
- **Entity name:** TBD (placeholder: "WL LLC")
- **State:** TBD (Virginia default, Delaware/Wyoming under consideration)
- **Structure:** Single-member LLC, SOLE MEMBER = SCS LLC (Option A — parent-subsidiary, disregarded entity passthrough)
- **Banking:** Separate bank account REQUIRED. Peptide-friendly bank required (SCS's current bank may not allow). Candidates: Mercury, Bluevine, Relay, Easy Pay Direct.
- **Status:** Not yet formed. Full structural decisions in WL_MASTER_FROZEN.md.

### Distribution Credentials (SCS Apps)
- **Distribution Cert:** 7D7DE471C666DD26A99544B8D4A96B0A (expires Apr 9 2027)
- **Provisioning Profile:** 5YCDBB5VCY (expires Apr 9 2027)
- **Member renewal:** April 9, 2027

---

## PORTFOLIO ARCHITECTURE (NEW v6 — Three-Lane Model)

SCS portfolio formalized into three operational lanes at full buildout:

### LANE 1: Apps (SCS LLC direct)
6 iOS apps at full buildout. Methodology-respecting platforms for serious lifters.

| Slot | App | Methodology | Status |
|------|-----|-------------|--------|
| 1 | SC | Powerlifting (5/3/1 + future multi-program) | LIVE (UK + IE + AU + NZ) |
| 2 | HR | Hyrox-style hybrid fitness (NEVER call "Hyrox" in consumer copy) | TestFlight, shipping imminent — Wave 3D v5 committed May 16 |
| 3 | PP | Peptide research/education (content + companion app) | App TestFlight blocked (Apple Org pending) |
| 4 | WN | Olympic weightlifting (Russia + China + Bulgaria v1.0) | Pre-build, naming + lineup locked May 10 |
| 5 | CF | CrossFit-specific (WOD-format) | Future build |
| 6 | Cali | Calisthenics (bodyweight skill-tree) | Future build |

**Steady-state load:** ~5-10 hrs/week baseline + quarterly spikes to 15-20 hrs during iOS release cycles (every Sept) and App Store policy update windows.

### LANE 2: PP Affiliate (SCS LLC direct, content site)
profpeptide.com — peptide research/education content site with affiliate revenue model.

- 32 peptide pages live (publicly stated as "20+")
- 4 X account network (peptide_pros, premier, peak, core)
- Vendor portfolio: 17 active vendors with attribution audit log
- Monthly X post cycles (~15 vendors per cycle, 4-post promo template)
- Daily content velocity historically; **SHIFTING TO SYSTEMATIZE MODE v6 onwards**

**SYSTEMATIZE MODE (locked v6):**
- 1-2 new peptide pages/month (vs. previous daily content velocity)
- Monthly X post cycles continue (current cadence)
- Vendor pipeline maintenance (audits + onboarding new affiliates)
- **~5-8 hrs/week target** at systematize cadence
- **NOT ABANDONMENT** — preserves 12-18 month compounding SEO value
- Reviewable: increase or decrease cadence based on White Label time demand

### LANE 3: White Label (separate LLC, subsidiary of SCS)
Peptide ecommerce, merchant-of-record model. Completely separate from PP affiliate. Full state in WL_MASTER_FROZEN.md + WL_MASTER_ACTIVE.md.

- New LLC formation pending (subsidiary of SCS LLC, single-member disregarded entity)
- Custom Next.js build (Path B), same stack as PP
- Design aesthetic: ro.co / thorne.com / honestpeptide.com reference set
- Partner shortlist: YPB Tier 1 verified, Cernum DOWNGRADED, Evolve Tier 2
- **Steady-state load:** 15-25 hrs/week post-launch; 30-40 hrs/week in launch year
- **Risk profile:** HIGH (regulatory/processor/product liability)
- **Revenue ceiling:** 7-figures plausible at scale (vs PP affiliate mid-6-figures)

### Capacity Planning Total (Steady-State)
| Lane | Hours/Week |
|---|---|
| Apps maintenance baseline | 5-10 (with quarterly spikes to 15-20) |
| PP affiliate systematize | 5-8 |
| White Label steady-state | 15-25 |
| **TOTAL** | **30-50 hrs/week** |

Full-time-equivalent solo founder load. Doable but not trivial. If White Label demands more aggressive growth (>25 hrs/week), PP systematize cadence can dial down further or outsourcing (VAs, content writers) can absorb load.

---

## Critical Permanent Rules — Meta/Process

### RULE #A — FROZEN reference docs must always be full self-contained snapshots
Frozen ref docs contain stable rules, definitions, format specs, premise + rationale, things-never-to-do — content that only changes when fundamentals change. Every version of a frozen doc must be a full self-contained snapshot. Delta-only frozen versions are forbidden.

ACTIVE TRACKERS DO NOT FOLLOW RULE #A — see Rule #C below.

Applies to: SCS MP frozen sections, per-app Master Ref Doc frozen sections, WL_MASTER_FROZEN, PP_VENDORS frozen sections, all standalone spec/template docs, all canonical workflow specs.

### RULE #B — Reference Doc Storage (v8 — Project Files Canonical)
Project knowledge files are the canonical durable storage layer for SCS reference docs. Gmail drafts are legacy/historical audit trail only.

**SYNC WORKFLOW:**
1. Claude regenerates the .md file at `/mnt/user-data/outputs/[FILENAME].md`
2. `present_files` for Mark download
3. Mark drag-drops into project Files panel
4. If same filename: claude.ai auto-replaces existing file

### RULE #C — REF DOC SPEED RULE
All reference docs follow frozen + active tracker architecture.

- **FROZEN DOC:** stable rules, definitions, format specs. Updated only when fundamentals change. Self-contained per Rule #A.
- **ACTIVE TRACKER:** dynamic state, recent changelog, current cycle/batch/state. <1,500 words target.

**WHEN TO UPDATE:**
- NEVER auto-rewrite ref docs mid-session
- ALWAYS ASK Mark: "Update ref doc now or queue for end-of-session?"
- Default to end-of-session batched updates
- Direct instruction from Mark overrides default

### RULE #D — All SCS-related assets default to SCS LLC ownership (with v6 carve-out)
Established Apr 24, 2026. Permanent rule.

**v6 CARVE-OUT — White Label assets default to WL LLC ownership (NOT SCS).** Domain registrations, payment processor accounts, banking, vendor contracts, customer data, and all operational infrastructure for the white-label business sit inside WL LLC. SCS owns WL LLC as sole member but does not directly hold WL assets. Liability isolation requires strict entity-level asset separation.

### Universal Execution Rules

- **RULE #1:** EAS uploads the WORKING TREE, not just committed git history. Verify `git status` is clean before any production build.
- **RULE #2:** Save important info to BOTH memory AND the appropriate ref doc. Never delete old drafts.
- **RULE #3:** NEVER PUSH CODE WITHOUT WORKING LOCALLY FIRST. Test in simulator or ad hoc build before pushing. **v6 NOTE:** PP commits now skip localhost dev-server entirely — Vercel auto-deploy + cache-bust audit on profpeptide.com replaces local testing for content/page changes. Working-locally rule still applies for substantive code changes (Next.js architecture, API routes, build config).

---

## Glossary of Terms

- **SCS** = Strength Cycle Studios, LLC (Virginia LLC, parent studio)
- **SCS MP** = THIS DOC (studio-level master plan)
- **WL** = White Label (placeholder business name) — peptide ecommerce subsidiary of SCS (planned, not yet formed). Full state in WL_MASTER_FROZEN + WL_MASTER_ACTIVE.
- **MP** = Master Plan (as in "SCS MP" = this doc). Previously also used as placeholder prefix for the white-label business unit until May 16 rename to "WL" (avoids collision).
- **CC** = Claude Code (Anthropic's terminal-based coding agent)
- **CINC / CinC** = Claude in Chrome (browser-based agent)
- **PP** = Prof Peptide / profpeptide.com (peptide research/education site + mobile app, AFFILIATE model)
- **SC** = Strength Cycle (iOS app, 5/3/1 powerlifting programming, planned multi-program expansion)
- **HR** = Hybrid Rockstar (iOS app, Hyrox-style hybrid fitness — NEVER say "Hyrox" in consumer copy)
- **WN** = Weightlifting Nation (iOS app, Olympic weightlifting methodology-platform — locked May 10, 2026; ref docs are WN_MASTER_FROZEN + WN_MASTER_ACTIVE)
- **Oly** = Olympic weightlifting (DEPRECATED May 16, 2026 — prior internal codename for the WN project; both the codename and the Oly_MASTER filename retired in v6 cleanup). Glossary entry retained for historical reference only; all references in active ref docs now use WN.
- **W** = Wizard card app codename — REMOVED FROM PORTFOLIO May 4, 2026.
- **CF** = CrossFit-specific app (planned)
- **Cali** = Calisthenics app (planned)
- **YPB** = YourPeptideBrand.com (Tier 1 WL white-label partner candidate — Aaron Peden / Rocktomic Labs operator)
- **ASC** = App Store Connect
- **GSC** = Google Search Console
- **EAS** = Expo Application Services (build system)
- **TF** = TestFlight
- **D-U-N-S** = Dun & Bradstreet identifier required for Apple Organization account
- **UDID** = iPhone Unique Device Identifier (for ad hoc builds)
- **YOLO mode** = CC launched with --dangerously-skip-permissions (skips per-command prompts)
- **YMYL** = Your Money Your Life — Google's content classification for health/financial pages requiring elevated trust signals
- **C&P** = Certificates, Identifiers & Profiles (Apple Developer portal section)
- **RUO** = Research Use Only (regulatory positioning for unapproved research peptides)
- **MoR** = Merchant of Record (entity that processes payments and bears legal responsibility for the transaction — White Label IS the MoR; PP is NOT)
- **TCC** = Transparency, Consent, and Control (macOS privacy framework requiring app permissions for sensitive folders)

**REPO-NAME DISAMBIGUATION:**
- `profpeptide` = PP website (Next.js → profpeptide.com on Vercel)
- `profpeptide-app` = PP mobile app (Expo → TestFlight)
- `strength-cycle` = SC mobile app (Expo → App Store)
- `hybrid-rockstar` = HR mobile app (Expo)
- `hybrid-rockstar-api` = HR backend (Next.js on Vercel)
- White Label repo name TBD on build kickoff

---

## Repo Paths (Mac Desktop)

```
/Users/mark/Desktop/profpeptide          — PP website (Next.js → profpeptide.com)
/Users/mark/Desktop/profpeptide-app      — PP Expo mobile app → TestFlight
/Users/mark/Desktop/strength-cycle       — SC Expo app (ASC 6762101377)
/Users/mark/Desktop/hybrid-rockstar      — HR Expo app (ASC 6762101905)
/Users/mark/Desktop/hybrid-rockstar-api  — HR backend (Next.js on Vercel)
```

DO NOT CONFUSE: profpeptide (website) vs profpeptide-app (mobile app).

**v6 NOTE on Desktop folder + macOS TCC:** If Terminal/CC encounters EPERM on `~/Desktop/*` git operations, the workaround is to grant Full Disk Access to Terminal in System Settings → Privacy & Security, OR move the project to `~/profpeptide` (outside the TCC-protected Desktop folder). Diagnostic observed May 16; resolved after macOS system updates installed. Re-occurs may benefit from project relocation.

---

## CINC WORKFLOW RULES

### ASC Submission Prompts Must Include:
1. Explicit pause-before-submit checkpoints. After verification phase, CINC stops and waits for Mark's explicit "submit" before clicking Add for Review.
2. Never click Release This Version regardless of state.
3. Note when compliance modal is absent and explain why.
4. Survey before action — first phase read-only discovery.
5. Capture screenshots at decision points for Mark's audit trail.

---

## CC WORKFLOW RULES

### PP Commit Workflow (NEW v6)
When Mark gives commit instruction, CC handles BOTH `git commit` AND `git push origin main` in single operation. Vercel auto-deploys (~60-90s) from main. Audit on profpeptide.com with cache-bust query strings. **NOT autonomous** — still requires Mark instruction to trigger commit.

### PP Audit Workflow (NEW v6)
Skip localhost dev-server entirely for PP work. CC commits + pushes → Vercel auto-deploys → audit on profpeptide.com with cache-bust query strings. Replaces previous localhost preview pattern. Trade-off: ~90 seconds wait vs network setup friction; net positive for solo founder workflow.

### HR Sim Handoff Sequence (NEW v6)
Every HR CC prompt requiring sim audit ends with terminate-then-openurl sequence as final mandatory step:

```
# Terminate current sim instance
killall "Simulator" 2>/dev/null; sleep 2

# Open fresh sim instance pointed at app
open -a Simulator
sleep 5
xcrun simctl openurl booted exp://localhost:8081
```

### v4.4 Spec Annotation Clarity (NEW v6)
Italic `*(mechanism of action)*` shorthand inside PP content template spec docs is EDITORIAL ANNOTATION describing WHAT a section should contain. NEVER copy literally into page content. CC must interpret the italic shorthand as guidance and write actual content matching the description.

### General CC Rules (Carry-Forward)
- Mark drives the sim directly for visual verification. CC handles tsc, code changes, sim refresh only.
- CC must report at milestones for multi-phase prompts.
- All commits require Mark's explicit approval — CC drafts message, Mark approves, CC commits (now: commits AND pushes per v6 rule above).

---

## STANDING RULES — Communication / Voice / Format

### Category 1: Voice/Format Rules
1. **NEVER USE EMOJI** unless Mark uses one first or asks
2. **NEVER USE TIME-OF-DAY LANGUAGE** unless Mark introduces it first
3. **NEVER ASSUME WORKFLOW PAUSED** — execute and report
4. **NO BIG-BOLD-VERDICT-FIRST OPENERS** — don't lead with "Short answer: yes/no" in bold
5. **NEVER USE ask_user_input_v0 POPUPS** — Mark finds interactive option buttons disruptive. Ask in plain prose.
6. **SCS PROJECT PHILOSOPHY** — Mark is learning from scratch — craft endeavor. No "ship fast" pressure.
7. **TL;DR REQUIRED** — End every long response with a TL;DR.
8. **DEFAULT TO STANDARD / iOS-NATIVE** — When Mark doesn't answer a design choice, default to Apple/iOS convention. Don't re-ask.
9. **MULTI-STEP INSTRUCTIONS** — One unified top-to-bottom numbered sequence. Each terminal command = own click-to-copy code block.
10. **LINKS FORMAT** — All verification, dashboard, reference URLs as clickable markdown links `[display text](url)`.
11. **PROACTIVE IDEAS** — Proactively share ideas, alternatives, opportunities. Push back on Mark's ideas when they conflict with best practices.
12. **PP INSTAGRAM POST TEMPLATE** — (1) Short context line. (2) One tight news fact in plain declarative voice. (3) "Full breakdown linked in bio." (4) "Educational purposes only." (5) Visual = PP logo on clean background. NO hashtag stacks, NO emojis in body.
13. **INDUSTRY STANDARD PREFERENCE** — Default to Apple design conventions and established fitness apps. Push back when Mark's suggestions conflict.
14. **DEFAULT TO DELEGATION, NOT EXECUTION** — Multi-click browser tasks → CINC. Terminal/code → CC. Irreversible actions (DNS, billing, deploys) use "Ask before acting" mode on CINC.
15. **CHECK MASTER REF DOCS BEFORE INVENTING** — When Mark mentions something that may already be in a Master Ref Doc, fetch the doc FIRST (or check knowledge files) rather than reconstructing from memory.
16. **APP NAME ON FIRST SCREEN ONLY (CROSS-APP RULE)** — Across all SCS apps, app name appears ONLY on first/home screen. Interior screens show screen/feature name.
17. **FRESH RESEARCH RULE** — When Mark asks about companies, opportunities, vendors, conduct exhaustive fresh web research. Don't force-fit familiar names.
18. **STOCK RESEARCH RULE** — For each stock: (1) complete fundamentals, (2) complete technicals, (3) macro at 3 levels — Global / Industry / Company. Provide objective analysis, not portfolio fit advice.
19. **SIM VERIFICATION RULE** — Max 2-3 screenshots when verifying CC code/data integrations.
20. **FULL BUILD BEFORE COACH REVIEW** — Apps to feature parity with category leaders before coach review.
21. **MONTHLY DATE SWEEP** — First business day of each month, run audit-first April→May style sweep across profpeptide.com codebase.
22. **VENDOR DOMICILE VERIFICATION (NEW v6)** — When evaluating vendors/partners, verify corporate domicile via About Us page + contact page physical address + number/currency formatting tells (European `94,99 $` reveals non-US origin). Marketing claims of "USA" are not sufficient.

### Category 2: CC Workflow Rules
23. **ICON HANDOFF RULE** — CC NEVER modifies app icon source files.
24. **AD HOC VS TESTFLIGHT** — Default to ad hoc (`eas build --profile preview`) for Mark's iPhone testing. TestFlight (`--profile production`) for beta testers.
25. **MULTI-REPO BATCH WORKFLOW** — Parallelize CC across repo tabs by default. Run `/exit` before `eas build`.
26. **CC LAUNCH SEQUENCE** — Each command = own click-to-copy code block: (1) cd into correct repo in zsh, (2) Run `claude --dangerously-skip-permissions` in zsh, (3) Paste prompt inside CC.
27. **GIT COMMIT EMAIL** — Always masbooksonebay@gmail.com (required for Vercel compatibility).
28. **TERMINAL TAB CONVENTION** — Left to right: PP CC → HR CC → SC CC → Utility. (Future: + WL CC tab.)
29. **AD HOC BUILDS FROM CC, NOT ZSH** — Default to firing ad hoc builds inside CC with `!eas build --profile preview --platform ios`.
30. **ONE COMMAND PER CODE BLOCK** — Every terminal command goes in its own click-to-copy code block.

### Category 3: Architectural Insights (Portfolio-Level Patterns)
31. **ASC MEDIA MANAGER COMMIT PATTERN** — Screenshot uploads auto-commit at file POST. Structural changes require Save commit. Diagnostic: Choose File button over drag-drop for reliable persistence.
32. **LOCALE-BASED UNIT DEFAULTS PATTERN** — Established in SC commit `ec025c3` (kg for non-US locales, lbs for IMPERIAL_REGIONS={"US","LR","MM"}).
33. **NATIVE LIBRARY PATCHES ARE TRANSIENT** — Header patches die on next `expo prebuild`. Backlog Expo config plugin for durable patches OR upgrade affected libraries.
34. **NEW v6 — VERIFY CORPORATE DOMICILE, NOT MARKETING CLAIMS.** Cernum Biosciences lesson: homepage says "USA" but About Us says "based in Estonia"; European number formatting (94,99 $) was the giveaway. For any partner/vendor relationship with regulatory or compliance implications, corporate domicile verification is part of due diligence. PR-placement "reviews" on ABNewswire/kake.com/The Future of Things are paid placement, NOT independent journalism.
35. **NEW v6 — DUAL-BRAND PRICING TENSION IS A WHITE-LABEL PARTNER SIGNAL.** When a peptide vendor sells direct-to-consumer AND offers white-label services (Cernum, Evolve, Licensed Peptides), the wholesale-to-retail ratio determines whether the brand owner can compete on price. Investigate dual-brand pricing tension during partner evaluation.

---

## THINGS TO NEVER DO

### Universal
- **Never assume Mark wants a workflow paused or rested** — execute and report
- **Never recap a conversation's emotional tone** — focus on actions and outputs
- **Never use emoji unless Mark uses one first or asks**
- **Never use time-of-day language** unless Mark introduces it first

### App / ASC
- **Never click Release This Version in any CINC prompt**
- **Never submit ASC changes without Mark's explicit "submit" confirmation**
- **Never instruct CC to capture sim screenshots** — Mark drives sim
- **Never modify App Privacy declarations without re-verifying Data Not Collected**
- **Never re-use a prior query string when fetching profpeptide.com** — always fresh unique string
- **NEW v6: Never say "Hyrox" in HR consumer-facing copy** (trademark)

### Site
- **Never modify pages outside scope of a single-page change**
- **NEW v6: Never push commits to PP without Mark's approval** (CC pushes ARE allowed within single-instruction operations now, but always after Mark says commit)

### White Label (NEW v6)
- **Never commingle WL and SCS assets, banking, or contracts** — liability isolation requires strict entity separation
- **Never run WL payment processing through SCS bank accounts** — peptide transactions may trigger SCS bank account closure
- **Never make USA-origin claims on WL packaging based solely on partner marketing claims** — verify country-of-origin facts; FTC takes origin claims seriously
- **Never cross-promote PP and WL** — PP affiliate operation must remain fully separate from WL merchant-of-record operation (no shared customer data, no overlapping vendor relationships, no shared brand identity)
- **Never integrate WL into SCS's existing developer/banking/processor stack without dedicated entity formation first**

### Credentials
- **Never receive credentials via chat** — only identifiers safe

### Workflow
- **Never auto-update ref docs mid-session** — propose + queue for end-of-session (Mark's explicit "do it now" overrides)
- **Never re-introduce deleted UI elements** without conscious design rationale (e.g., BlockFlowIndicator deletion lesson)
- **NEW v6: Never accept a vendor's "USA-based" claim without corporate domicile verification** — number formatting, contact page address, About Us copy, currency symbol position all reveal real origin

---

## CURRENT WORKSTREAMS (May 16, 2026)

### Active Apps
- **PP** — v1.0.1 LIVE on App Store; v1.0.2 in review (submission ID `9be29de2-3499-41c8-b746-072ed08a662e`); v1.0.2 status TBD this session
- **HR** — Pre-launch; **Wave 3D v5 COMMITTED May 16 (commit `07c5146`)** — Phase 1-6 complete + 3 fixes (leadingEdgeWeek, COMPLETE predicate, Up Next Option A walk-forward); Wave 3E queued (splash investigation + transparent-bg + review prompt)
- **SC** — Wave 1a Starting Strength shipped; Wave 1b state machine prompt pending review

### Active Sites
- **profpeptide.com** — Blend Wave 2 COMMITTED May 16 (Wolverine v4.4 rewrite, GH Stack v4.4 rewrite with CJC-DAC distinction, new Semax + Selank, index gap-fix); peptide count 29 → 32; **SHIFTING TO SYSTEMATIZE MODE v6**

### Active Content
- **PP X Posts Cycle 3** — 8 of ~15 vendors complete (Apollo #8 last); **Cycle 3 #9 Limitless Biotech DRAFTED** using new **v3.1 non-GLP variant pattern** (first time — GLPs gated behind VIP at Limitless)
- **PP Indexing** — Maintenance mode; manual GSC submission cadence

### New Lane (White Label)
- **White Label business unit added v6** — Full state in WL_MASTER_FROZEN.md + WL_MASTER_ACTIVE.md
- **Partner shortlist verified:** YPB Tier 1, Cernum DOWNGRADED (Estonia), Evolve Tier 2, RapidFulfillment too new, Unrivaled skip
- **Pre-formation status:** LLC not yet formed; brand name TBD; domain TBD; processor research pending

### Queued Ref Doc Updates (Next EOS)
- **PP_VENDORS.md (NEW)** — split current + potential, GoAffPro research integration
- **HR_MASTER.md** — Wave 3D v5 details, Phase 5/6 algorithm canonical, Wave 3E/Phase 7 queues
- **PP_MASTER.md** — v4.4 template FINAL, Blend Wave 2 committed, peptide count 32, MK-677 Published Studies gap
- **PP_X_POSTS.md (v15+)** — v3.1 + v3.1 non-GLP variant locked, Cycle 3 #9 Limitless

---

## SOURCE-DOC INDEX

**PERMANENT CANONICAL REF DOCS (project knowledge files):**
- SCS_MP.md v6 — **THIS DOC** (May 16, 2026). Supersedes v5.
- PP_MASTER.md v3 — project knowledge file. Update queued for next EOS.
- SC_MASTER_FROZEN.md v5.1 + SC_MASTER_ACTIVE.md v5.5 — project knowledge files.
- HR_MASTER.md v2 — project knowledge file. Update queued for next EOS (Wave 3D v5).
- **WN_MASTER_FROZEN.md v1.0 (NEW v6)** — created May 16, 2026. Replaces Oly_MASTER (4).md v3.1. Consolidates Oly_MASTER content + WN_State_Capture into frozen pair.
- **WN_MASTER_ACTIVE.md v1.0 (NEW v6)** — created May 16, 2026. Pair to WN_MASTER_FROZEN.
- **WL_MASTER_FROZEN.md v1 (NEW v6)** — created this session.
- **WL_MASTER_ACTIVE.md v1 (NEW v6)** — created this session.

**ACTIVE WORKSTREAM REF DOCS (project knowledge files):**
- PP_X_POSTS.md v14 — project knowledge file. Update queued for next EOS (v3.1 + Cycle 3 #9 Limitless).
- PP_X_PROMO_TEMPLATE.md v2.10 — project knowledge file.
- PP_INDEXING.md v16 — project knowledge file (maintenance mode).

**QUEUED FOR CREATION:**
- **PP_VENDORS.md v1 (NEW, queued)** — current PP vendors + GoAffPro candidates + non-GoAffPro candidates.

**ACTIVE SPECS:**
- PP CONTENT TEMPLATE v4.4 (May 16) — supersedes v4.3 / v4.2
- HR Cycle 1 v3.2 PROGRAMMING DOC

**LEGAL/FINANCIAL (preserve permanently):**
- ⭐ STRENGTH CYCLE STUDIOS LLC — Business Records (April 13, 2026) — DO NOT DELETE
- DO NOT REPLY: Resolved Inquiry # 10205644 (D-U-N-S confirmation)
- Articles of Organization (Apr 13, 2026)
- Self-affidavit letter

**ARCHIVED MP VERSIONS** (preserve forever): SCS MP v1-v5 + MASTER STUDIO CHECKLIST v3.15.

---

*End of SCS MASTER PRINCIPLES v6 — May 16, 2026. Three-lane portfolio architecture formalized (Apps + PP Affiliate + White Label). White Label business unit added as separate LLC subsidiary of SCS. PP shifted to systematize mode (NOT abandonment). Standing rules locked for PP commit/push workflow, HR sim handoff, vendor domicile verification, MP/SCS asset separation. Capacity planning: 30-50 hrs/week steady-state total across all three lanes.*
