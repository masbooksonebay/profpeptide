# Strength Cycle Studios — Master Plan (MP)

**Status:** ACTIVE REFERENCE — studio-level master plan
**Version:** v6.4 (May 23, 2026 evening) — Capstone Peptides LLC formed (full corporate block added), v4.4+ canonical spec evolution noted, multi-root-cause investigation discipline codified, API push-verify step locked, terminal-restart workstream enumeration discipline locked
**Parent entity:** SCS LLC (Strength Cycle Studios, LLC, Virginia, EIN 42-1888796)

---

## 📍 Status Snapshot (May 23, 2026 evening)

**THREE-LANE PORTFOLIO ARCHITECTURE (LOCKED in v6):**
- **Lane 1 — Apps:** SC (v1.0.4 ready, sim audit pending), HR (LIVE, FB promo workstream queued), PP App (v1.0.1 LIVE), WN (planned)
- **Lane 2 — PP Affiliate:** profpeptide.com — Wave V44-1 v4.4+ structural refactor in flight (Phase 1 complete, Phase 2 pending fire)
- **Lane 3 — White Label:** **Capstone Peptides LLC FORMED**, RF contract SIGNED, onboarding next

**Capacity planning:** 30-50 hrs/week steady-state total across all three lanes

---

## 🏢 Corporate Structure (UPDATED v6.4)

### SCS LLC
- **Strength Cycle Studios, LLC**
- Virginia
- EIN: 42-1888796
- Holdings: SC, HR, PP App, WN, profpeptide.com (content/affiliate)
- Sole member: Mark Shurtliff

### Capstone Peptides LLC (NEW v6.4)
- **Capstone Peptides, LLC**
- Virginia
- VA Entity ID: 12021441
- EIN: 42-2730855
- **Sister LLC to SCS LLC (NOT subsidiary)** — sister-LLC structure isolates liability between content/affiliate (SCS) and merchant-of-record (Capstone)
- Holdings: capstonepeptides.com merchant operations, RapidFulfillment fulfillment relationship
- Sole member: Mark Shurtliff
- Email of record: mark@capstonepeptides.com (Cloudflare Email Routing → markshurtliff@gmail.com)

**Note:** v6 RULE #D ("All SCS-related assets default to SCS LLC ownership") still applies with its WL carve-out — Capstone-specific assets sit inside Capstone LLC, not SCS.

---

## 🚦 Standing Rules (Universal)

[RULES #A through #6 unchanged — see v6.3 for full text]

### RULE #7 (NEW v6.4) — Multi-root-cause investigation discipline

**Principle:** When something "keeps regressing" or recurs across sessions, audit MULTIPLE potential root causes independently. Don't assume single-root.

**Origin:** May 23 Ask Coach quality workstream had TWO root causes simultaneously:
1. Unpushed API commits (deploy chain) — local code was correct but production served stale code
2. Prompt structure (content layer) — push-back triggers inline as bullet vs extracted to top-level COACHING CORRECTIONS section

Either alone wouldn't have fully fixed the recurring bug. Both needed to be addressed.

**Investigation checklist for recurring bugs:**
- ✅ Local code change correct?
- ✅ Committed?
- ✅ Pushed to remote?
- ✅ Deploy succeeded?
- ✅ Production actually serving the latest code? (sanity-check: hit endpoint, compare response shape)
- ✅ Source content (prompts, configs, copy) structurally correct, not just textually correct?
- ✅ Cache invalidation if applicable?

### RULE #8 (NEW v6.4) — API push verification step

**Principle:** After any commit to an API repo, BEFORE declaring the wave done, verify the commit is pushed and deployed.

**Why:** May 23 Ask Coach root cause discovery showed unpushed API commits can mask as "code defect" symptoms for hours. The verification step is cheap and catches the gap definitively.

**Standard verification (post-commit):**

```
cd ~/Desktop/<api-repo>
git log --oneline origin/main..main  # Should be empty after push
# If non-empty, push:
git push origin main
# Then verify Vercel deploy reaches "Ready" status before sim re-test
```

**Pattern locked:** Any future coach prompt wave, API config change, or similar API-backed work follows this verification step before declaring complete.

### RULE #9 (NEW v6.4) — Terminal-restart workstream enumeration

**Principle:** When restarting Terminal (or otherwise resetting context), EXPLICITLY enumerate ALL open workstreams before resuming. Don't let workstreams silently drop.

**Origin:** May 23 — after macOS TCC EPERM forced Terminal restart, Mark resumed only SC and PP work. The HR/E3-C workstream silently fell off the active queue. Wasn't surfaced until end of session when Mark noticed Ask Coach tone wasn't actually fixed.

**Pattern:** On terminal restart or session resume, Claude should ask Mark to enumerate ALL open workstreams ("you mentioned SC and PP — what about HR's E3-C? Is that still on the queue or deferred?"). Don't infer dropping; ask explicitly.

---

## 🔒 v4.4+ Canonical Spec Evolution (NEW v6.4 — cross-ref)

The PP_MASTER v4.4 spec (locked in v6) has EVOLVED to v4.4+ during the Wave V44-1 refactor work. The new canonical structure:

- 15 H2 sections (vs prior 14), with Half-Life and Legal collapsed into other sections
- 3-line metadata block format (Also Known As / Peptide Class / Regulatory Status)
- 6-row Aspect table in how-to-take (Half-Life data lives here now)
- 3-row Reconstitution table
- Conditional Latest research callout, Dose escalation table, Related Blends block
- Live exemplars: Tirzepatide (structural baseline) + Retatrutide (conditional elements)

**Authority:** PP_MASTER v9 holds the full canonical spec. This is the cross-reference pointer.

**Drift prevention discipline:** Going forward, when a peptide page gets a structural update (not just content tweaks), the PP_MASTER spec section gets updated in the SAME wave. Single source of truth maintained, no silent drift.

---

## 🛡️ macOS TCC Permissions (UPDATED v6.4)

**Recurring issue:** EPERM errors on `~/Desktop/*` repos when CC tries to read files. Indicates macOS TCC (Transparency, Consent, Control) layer denied access.

**Fix (locked):**
1. System Settings → Privacy & Security → Full Disk Access → grant for Terminal.app
2. System Settings → Privacy & Security → Accessibility → grant for Terminal.app (some macOS versions)
3. **Fully quit Terminal** (Cmd+Q, not just close window — apps in dock with dots persist)
4. **Relaunch Terminal** — new permission scope applies

**Recurrence pattern:** TCC permissions can be revoked by:
- macOS major version updates (resets TCC scope for some apps)
- Certain System Settings actions
- Time-based aging (rare)

**Periodic re-verification worth doing:** If `cat ~/Desktop/anyrepo/anyfile` from Terminal fails with permission denied, run the fix sequence again.

---

## 🚀 Process Patterns Captured This Session

### Coach prompt tone discipline template

The canonical pattern for ANY coach prompt opener tone work:

1. **Extract push-back triggers** to top-level COACHING CORRECTIONS section (separate from COACHING STYLE)
2. **Advisory framing intro** — explicit "forward-looking questions deserve substantive answers first; never open by telling user they're getting ahead of themselves"
3. **Good/Bad tone-example pair** in TONE EXAMPLES block
4. **Type-check clean** (npx tsc --noEmit)
5. **Push and verify** per RULE #8

### v4.4+ peptide page conversion workflow

For Wave V44-1 / Phase 2 / future conversion work:

1. Use Tirzepatide as live structural exemplar + lift Retatrutide patterns when warranted
2. Apply per-page judgment on conditional elements per criteria locked in PP_MASTER v9
3. Restructure + addition (NOT rewrite) — preserve existing content where it maps to new structure
4. Individual commits per page
5. Bundle commits unpushed until end-of-wave decision

### Recurring bug investigation discipline

Per RULE #7, when a bug appears to recur across sessions, do NOT just patch the symptom. Investigate:
- Deploy chain (is the latest code actually live?)
- Content structure (is the source content structurally correct?)
- Cache layers (any stale layer between dev and prod?)
- Pattern: confirm THREE roots have been checked before declaring single-root.

---

## 🔗 Cross-References

- **PP_MASTER v9** — v4.4+ canonical spec, conversion tracker, vendor lock
- **PP_INDEXING v19** — GSC state, June 6 escalation, baseline 134
- **PP_X_POSTS v19** — Ascension 50% lock, paragraph-3 decision
- **SC_MASTER_ACTIVE v5.10** — v1.0.4 ship gate, Wave J-1/J-4 SHAs, Ask Coach closure
- **HR_MASTER v6** — Ask Coach closure, HR FB promo workstream
- **WL_MASTER_ACTIVE v1.6** — Capstone LLC formed, RF contract signed

---

## 📅 Changelog

**May 23, 2026 evening (this session — v6.3 → v6.4):**
- ✅ Capstone Peptides LLC FORMED (Virginia, EIN 42-2730855, sister-LLC to SCS)
- ✅ RapidFulfillment contract SIGNED via PDF flatten workflow
- ✅ Ask Coach workstream CLOSED (E2 + E3-B + E3-C all deployed, 3 coaches aligned)
- ✅ PP Wave V44-1 Phase 1 complete (Follistatin, IGF-1 LR3, Epitalon converted)
- ✅ PP indexing v19 — June 6 escalation threshold locked
- ✅ Ascension 50% discount lock surfaced and codified
- ✅ HR FB community outreach workstream queued (HYROX UK Community pending admin approval)
- ✅ RULE #7 (multi-root-cause investigation) codified
- ✅ RULE #8 (API push verification) codified
- ✅ RULE #9 (terminal-restart workstream enumeration) codified
- ✅ v4.4+ canonical spec evolution noted, cross-ref to PP_MASTER v9
- ✅ SC v1.0.4 Waves J-1, J-4, J-5, E3-C complete; ship gate = sim audit only

**Prior session entries:** unchanged. See v6.3 for May 22 changes (DEV-CLIENT vs EXPO-GO, X account lockout pattern, RULE #6 vendor DD principle).

---

*v6.4 anchor. Three lanes active. v4.4+ spec stable. Capstone post-formation. SC ship-ready pending sim audit.*
