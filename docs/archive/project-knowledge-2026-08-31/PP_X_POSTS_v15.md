# PP X POSTS REFERENCE DOC v15

**Status:** ACTIVE REFERENCE — single source of truth for PP X promotional posts workstream
**Version:** v15 (May 17, 2026)
**Source:** Updated from v14 (May 12, 2026)
**Cross-referenced in:** PP_MASTER.md, SCS MP

---

## v14 → v15 CHANGELOG

**Format update — v3.2 introduced (May 17, 2026):**

The post tier order has been reorganized to put the affiliate code near the top, optimized for Twitter's 280-character timeline truncation. The new format applies to all subsequent vendor days.

**Specific format changes (vs v3.0/v3.1):**

1. **Opener ends with `!`** (was period)
2. **Code line moved to immediately after the opener** (was last tier — now visible in 280-char preview before "Show more")
3. **🔥 emoji added after the discount** — explicit exception to the v3.0 no-emoji rule for the code line specifically
4. **"Also has [other GLPs]" + GLP-class context combined into a single paragraph** (was two paragraphs)
5. **Link on its own line at end** (unchanged)

**Template variant note — v3.1 non-GLP variant introduced (May 16, 2026):**

For vendors where GLPs are VIP-gated or otherwise not publicly accessible, the v3.1 non-GLP variant uses the same tier structure but features the vendor's available non-GLP catalog instead of Sema/Tirz/Reta. First used for Limitless Biotech (Cycle 3 #9). Full content spec for v3.1 captured separately from yesterday's session — apply Limitless posts as template reference.

**Cycle 3 advances (v14 → v15):**

- ✅ Vital Core Research #7 (May 13)
- ✅ Apollo Peptides #8 (May 14-15)
- ✅ Limitless Biotech #9 (May 16, FIRST use of v3.1 non-GLP variant — GLPs VIP-gated at Limitless)
- ✅ EZ Peptides #10 (May 17, FIRST use of v3.2 format with code-at-top)

---

## HEADER SNAPSHOT (May 17, 2026 v15)

**Template version:** v3.2 (format update — code-at-top, exclamation opener, 🔥 on code line, merged tier 2)
**Content variants:** v3.0 GLP-focused (default) | v3.1 non-GLP variant (for VIP-gated vendors)
**Cycle 3 status:** 10 of ~15 vendors complete (~67%)
**Baseline:** Cycle 1 closed (16 vendors), Cycle 2 closed (15 vendors), Cycle 3 in progress.
**Next vendor under v3.2:** Royal Peptides (PROF10 code per existing exception map)

---

## v3.2 TEMPLATE STRUCTURE (CURRENT)

**Vendor day = 4 X posts (Post A style only)**

Each post features one GLP (or available peptide for v3.1 variant) as lead. Post 4 features the combined framing.

**v3.2 post structure (6 paragraphs, blank line between each):**

```
Paragraph 1: "[Vendor] has [Lead peptide] in stock!"

Paragraph 2: "Use code [CODE] for [DISCOUNT]. 🔥"

Paragraph 3: Research-grounded fact about the lead peptide (1-2 sentences)

Paragraph 4 (Posts 1-3): "[Vendor] also has [Other peptide] and [Other peptide] in stock. [Brief contextual line about class breadth — merged into same paragraph]"
              (Post 4): Single combined framing covering all 3 peptides as one statement

Paragraph 5: Vendor differentiator
             - Third-party testing lab (named if known)
             - 99%+ HPLC purity (when applicable)
             - Publicly published COAs
             - US-based (when applicable)
             - Years operating (when applicable)

Paragraph 6: https://profpeptide.com/coupons
```

**Account assignments (randomize per vendor day):**

- 4 accounts: PP / PREM / PEAK / CORE
- Each account posts ONE of the 4 posts
- Post 1 leads with Semaglutide (or first peptide in v3.1)
- Post 2 leads with Tirzepatide (or second peptide in v3.1)
- Post 3 leads with Retatrutide (or third peptide in v3.1)
- Post 4 leads with "all 3 in stock" combined framing
- Randomize which account gets which post (rotate from prior vendor day's assignment)

**Linking:**
- All 4 posts link to https://profpeptide.com/coupons
- NO links to vendor URLs
- Link on its own line at end (paragraph 6)

**Code:** vendor-specific per existing code map (PROFPEPTIDE / PROF10 / PROFPEPTIDE15 — exceptions apply for PureRawz, Behemoth Labz, Oasis Labs, Royal Peptides)

---

## v3.2 CONTENT RULES

**Inherits from v2.10/v3.0:**
- No dosing
- No prices
- No marketing language ("amazing," "incredible," etc.)
- No urgency ("limited time," "act fast," etc.)
- **No vial sizes** (v2.10 lock — still applies)
- Frame differentiators around third-party testing transparency, COAs, purity verification, public lab certifications
- Research findings only — no dosing protocols, no medical advice voice

**NEW v3.2:**
- **🔥 emoji ALLOWED on the code line** (paragraph 2) — explicit exception to no-emoji rule
- **No other emojis anywhere else** in the post
- Opener ends with `!` (not `.`)
- Code line is paragraph 2 (not last)

**Content variant — v3.0 (default):**
- GLP-class peptides only (Sema/Tirz/Reta + All-3 combined)
- Used when vendor has all 3 GLPs publicly accessible
- Cycle 3 #7-8, #10+ default

**Content variant — v3.1 (non-GLP):**
- Used when vendor has GLPs VIP-gated or otherwise not publicly accessible
- Features vendor's available non-GLP catalog instead
- First used: Limitless Biotech (Cycle 3 #9)
- Full content spec: reference Limitless posts from May 16 session as template
- Maintains v3.2 format structure (code-at-top etc.)

---

## CATALOG VARIANCE HANDLING

Not all vendors carry all 3 GLPs publicly. Default assumption: vendor has Semaglutide + Tirzepatide + Retatrutide publicly accessible. Verify before drafting.

**If vendor has all 3 GLPs publicly accessible** → v3.0 content variant (default): 4 posts (3 individual leads + 1 all-3 combined).

**If vendor has GLPs VIP-gated or hidden** → v3.1 non-GLP content variant: feature available non-GLP catalog.

**If vendor carries only 2 GLPs publicly** → adapted v3.0: 3 posts (2 individual leads + 1 combined "both" framing). One account skips this vendor day; rotate skip across vendor days.

**If vendor carries only 1 GLP publicly** → adapted v3.0: 2 posts (1 individual lead + 1 variant angle on same GLP). Two accounts skip this vendor day. Consider whether vendor warrants inclusion given limited catalog.

**If vendor carries 0 GLPs publicly** → v3.1 non-GLP variant.

---

## RANDOMIZATION WORKFLOW

**Step 1:** Verify vendor catalog. Web-fetch the vendor's product pages to confirm GLP availability and accessibility (public vs VIP-gated).

**Step 2:** Determine content variant (v3.0 default vs v3.1 non-GLP).

**Step 3:** Confirm vendor is NOT on active 5-vendor audit log. If on log, SKIP and select next queue vendor.

**Step 4:** Identify named third-party testing lab if available. If not specifically named, use generic "independent third-party laboratory" framing.

**Step 5:** Randomize 4 accounts (PP / PREM / PEAK / CORE) to the 4 posts. Rotate from prior vendor day's assignment to avoid back-to-back repeats.

**Step 6:** Draft 4 posts following v3.2 format structure.

**Step 7:** Post in chat as click-to-copy code blocks for Mark.

**Step 8:** After Mark confirms posted, ASK whether to update tracker now or queue for end-of-session. Default end-of-session batched.

---

## CYCLE 3 PROGRESSION (UPDATED v15)

✅ Peptide Partners #1 (May 6, FIRST USE of v2.10)
✅ Spartan Peptides #2 (May 8)
✅ BioCollex #3 (May 10)
✅ Ascension Peptides #4 (May 11)
✅ PureRawz #5 (May 11)
✅ Behemoth Labz #6 (May 12, LAST USE of v2.10)
✅ Vital Core Research #7 (May 13, FIRST USE of v3.0)
✅ Apollo Peptides #8 (May 14-15)
✅ Limitless Biotech #9 (May 16, FIRST USE of v3.1 non-GLP variant)
✅ EZ Peptides #10 (May 17, FIRST USE of v3.2 format with code-at-top)

⏳ Vendor #11+ — under v3.2 (next eligible queue vendor)

**Queue order (excluding active audit log vendors):**
- Royal Peptides (PROF10 — code exception)

**Active audit log (SKIP for now):**
- Oasis Labs (Apr 26) — Dakota Hosley, awaiting response
- Ignite Peptides (May 4) — Antonio, awaiting response
- Fusion Peptide (May 4) — Heather Hendrix, awaiting response
- Almighty Peptides (May 6 evening) — contact@almightypeptides.com, awaiting response

⏸️ Integrative Peptides — DEFERRED carryover from Cycle 2 (catalog mismatch — oral-only specialty)

---

## TEMPLATE EVOLUTION HISTORY

**v3.2 (May 17, 2026)** — CURRENT
- Format update: code-at-top, exclamation opener, 🔥 emoji exception on code line, merged tier 2
- Twitter 280-char truncation optimization
- First used: EZ Peptides Cycle 3 #10
- Applies to both v3.0 (GLP) and v3.1 (non-GLP) content variants

**v3.1 (May 16, 2026)** — Active variant
- Non-GLP content variant for VIP-gated or hidden-catalog vendors
- First used: Limitless Biotech Cycle 3 #9
- Full content spec: reference Limitless posts as template

**v3.0 (May 12, 2026)** — Active variant, format superseded by v3.2
- GLP-focused content (Sema/Tirz/Reta + All-3)
- 4 posts/vendor day, Post B paused
- Original tier order (opener → research → also-has → context → differentiator → code → link) superseded by v3.2

**v2.10 (May 6, 2026)** — SUPERSEDED
- 4-category coordinated 8-post structure
- Post B informational posts active
- Used Cycle 3 vendors #1-6 (Peptide Partners through Behemoth Labz)

[Earlier versions v2.9 → v2.4 — see v11 for detail]

---

## RANDOMIZATION ARCHIVE

**EZ Peptides Cycle 3 #10, May 17, 2026 (v3.2 first use):**
- PP → Post 4 (All 3 combined)
- PREM → Post 3 (Retatrutide lead)
- PEAK → Post 1 (Semaglutide lead)
- CORE → Post 2 (Tirzepatide lead)

**EZ differentiators used:**
- QR-code-linked third-party COA per product
- >99% verified pharmaceutical-grade purity
- US-based supplier
- 4+ years of consistent independent testing documentation

**Limitless Biotech Cycle 3 #9, May 16, 2026 (v3.1 first use):**
- Randomization: see May 16 session record
- Content: non-GLP catalog (GLPs VIP-gated at Limitless)

**Apollo Peptides Cycle 3 #8, May 14-15:**
- Randomization: see session record

**Vital Core Research Cycle 3 #7, May 13 (v3.0 first use):**
- Randomization: see session record

**Behemoth Labz Cycle 3 #6, May 12 (v2.10 final shipped vendor):**
- PP → GH / Ipamorelin
- PREM → Cognitive / Semax
- PEAK → Recovery / BPC-157
- CORE → Metabolic / Retatrutide

**Behemoth differentiators used:**
- Colmaric Analyticals LLC (Goodlettsville TN) as named third-party lab
- 99%+ HPLC purity
- Publicly published COAs (COA tab + product page access)
- US-based, operating since 2014

---

## APOLLO-PRECEDENT SUBSTITUTION (v2.10 reference — retained for audit)

When a vendor doesn't carry a standalone peptide for the assigned category lead, substitute the vendor's available combo/blend in that category.

Established precedents from v2.10 era:

- **GH category — no standalone Ipamorelin → CJC-1295/Ipamorelin combo**
  - Apollo (Cycle 2)
  - Spartan Peptides (Cycle 3, v12)
  - BioCollex (Cycle 3, v13)

- **Cognitive category — no standalone Semax → vendor-available cognitive peptide**
  - Apollo: Epithalon (Cycle 2)

- **Recovery category — no standalone BPC-157 → BPC-157/TB-500 Wolverine-style blend**
  - BioCollex: BPC-157/TB-500 10MG (Wolverine blend) (Cycle 3, v13)

**v3.0+ NOTE:** Apollo-precedent substitution does NOT apply to v3.0/v3.2 GLP variant since GLPs are typically standalone (no combo equivalents). Catalog Variance Handling governs v3.0/v3.2 missing-peptide scenarios. May apply to v3.1 non-GLP variant if vendor has thin catalog.

---

## VENDOR PROFILE CACHE

[Unchanged from v13 — see v13 for BIOCOLLEX, SPARTAN, and all detail profiles for PEPTIDE PARTNERS, ASCENSION, PURERAWZ, BEHEMOTH LABZ, ALMIGHTY, VITAL CORE, FUSION, APOLLO, IGNITE, OASIS, ROYAL, INTEGRATIVE.]

**EZ Peptides profile (verified May 17 this session, full detail):**
- ezpeptides.com / code PROFPEPTIDE 15%
- US-based supplier
- 4+ years operating (domain established by 2022)
- Third-party COA documentation per product (QR-code linked)
- >99% pharmaceutical-grade purity (per COA)
- ~75 products in shop catalog (per ezpeptides.com/shop)
- Catalog covers GLPs (Sema/Tirz/Reta), GH category (Ipa/CJC-1295/Sermorelin/Tesa/MK-677), Recovery (BPC-157/TB-500/TB-4-FRAG/GHK-Cu), Cognitive (Selank/Semax/Epithalon), Performance (Follistatin-344/IGF-1 LR3/MGF), Other (PT-141/Melanotan-2/5-Amino-1MQ)
- Third-party lab specifically named: not captured in v15 — future audit can verify

**Behemoth Labz profile (verified May 12, full detail):**
[Unchanged from v14]

---

## THINGS TO NEVER DO (v3.2 ADDITIONS)

Inherits all v2.10 + v3.0 + v3.1 prohibitions PLUS:

- **Never use emojis EXCEPT the 🔥 on the code line (paragraph 2)** — v3.2 explicit exception, no other emojis anywhere
- **Never put the code line at the bottom** — v3.2 puts it in paragraph 2 for 280-char preview visibility
- **Never split "also has" mention and GLP-class context into separate paragraphs** — v3.2 merges into single paragraph 4
- **Never end the opener with a period** — v3.2 uses exclamation point

**Carried forward from prior versions:**

- **Never include non-GLP peptides in v3.0 GLP-content vendor days.** Cycle 3 GLP-content vendors are GLP-focused.
- **Never draft Post B informational posts under v3.0/v3.1/v3.2.** Paused indefinitely until reactivation decision.
- **Never assume vendor carries all 3 GLPs without verification.** Always confirm catalog before drafting (web-fetch vendor's GLP product pages).
- **Never default to 8 posts for v3.0/v3.1/v3.2 vendor days.** Current = 4 posts.
- **Never default to PROFPEPTIDE code for PureRawz / Behemoth Labz / Oasis Labs / Royal Peptides.** Exception codes apply per existing code map.
- **Never mention vial sizes** (v2.10 lock — still applies)
- **Never include dosing, prices, marketing language, urgency language**

---

## REACTIVATION DECISION CRITERIA (Future)

**Post B informational posts reactivation:**
- Reactivate if v3.0/v3.2 GLP-only posts underperform OR if non-GLP category data improves materially
- Reactivate if Mark wants to test mixed-format experimentation
- Decision deferred indefinitely; v3.0/v3.2 runs through end of Cycle 3 minimum

**Non-GLP category re-inclusion in default content:**
- v3.1 non-GLP variant already exists for VIP-gated vendors
- Default re-inclusion across all vendors deferred indefinitely

**Mixed-format vendor days:**
- Possible v3.3+ pattern: 2 GLP-lead posts + 2 non-GLP-category posts per vendor day
- Defer until v3.0/v3.2 baseline data accumulates (minimum: full Cycle 3 completion)

---

## CORE WORKFLOW RULES (unchanged from v14)

- Vendor days are ALWAYS COORDINATED by default — under v3.2 this means 4 posts across 4 accounts, randomized
- Each vendor day = randomize 4 accounts × 4 posts
- Post A opener (v3.2): "[Vendor] has [peptide] in stock!"
- Post A link: https://profpeptide.com/coupons (NEVER vendor URL)
- 6-paragraph post structure: blank line between every paragraph, single 🔥 emoji allowed on code line only, no dosing/prices/marketing/urgency
- VIAL-SIZE PROHIBITION: Never mention vial sizes. Frame differentiators around third-party testing transparency, independently verifiable COAs, purity verification, public lab certifications.

**X ACCOUNTS:**
- @peptide_pros (PP)
- @premierpeptides (PREM)
- @peakpeptides (PEAK)
- @corepeptides (CORE)

**POST-VENDOR-DAY WORKFLOW (per Rule #C):** When Mark confirms a vendor was posted, acknowledge in chat and ASK whether to update tracker now or queue for end-of-session. Default end-of-session batched.

---

## 4-TIER AFFILIATE ATTRIBUTION

[Unchanged from v11 — see v11 for detail.]

---

*End of PP X POSTS REFERENCE DOC v15 — Project knowledge file updated May 17, 2026.*
