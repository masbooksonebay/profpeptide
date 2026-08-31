# V44-supp-1 Phase 1 — CC Kickoff Prompt

**Purpose:** Click-to-copy CC prompt to start the supplement profile conversion wave Phase 1.

**Workflow:** Open a fresh CC terminal tab in `~/Desktop/profpeptide`, run wake-up sequence, paste the prompt below.

---

## Wake-up sequence (2 code blocks)

```
cd ~/Desktop/profpeptide
```

```
claude --dangerously-skip-permissions
```

---

## Phase 1 prompt (paste after CC launches)

```
Wave V44-supp-1 — Phase 1 conversion wave

═══════════════════════════════════════════════════
CONTEXT
═══════════════════════════════════════════════════

Wave V44-1 (peptide profile refactor) shipped May 24, 2026. All 31 
peptide profiles are on v4.4+ canonical at:
  docs/spec/peptide-profile-v4.4-canonical.md

Wave V44-supp-1 Phase 0 audit completed May 24, 2026 at:
  docs/spec/wave-v44-supp-1-phase0-audit.md (commit 54668bc)

All 12 spec questions from Phase 0 audit Section 8 have been 
resolved. This prompt locks the v4.4-supp variant spec and starts 
Phase 1 conversion of 5 exemplar pages.

═══════════════════════════════════════════════════
v4.4-supp VARIANT SPEC — LOCKED DECISIONS
═══════════════════════════════════════════════════

Adapted from peptide v4.4+ canonical with these supplement-specific 
changes:

1. METADATA BLOCK — 3 lines:
   - Also Known As
   - Supplement Class
   - Evidence Tier (Strong / Moderate / Emerging)
   (Peptide's "Regulatory Status" line REPLACED with Evidence Tier)

2. H2 TAXONOMY — 10 H2s (drops Timeline, makes Storage conditional):
   - What is [Supplement]?
   - How does [Supplement] work?
   - Reported benefits
   - How is [Supplement] taken?
   - Latest research (conditional — include only if qualifying study 
     exists in 12-month window)
   - How to take [Supplement] (Aspect table)
   - Stacks
   - Side effects + interactions
   - Storage (conditional — include only when refrigeration/oxidation/
     expiry concerns exist)
   - What we don't know yet (Limitations renamed)
   - Where to buy [Supplement]
   - FAQ
   - References
   - Published Studies (Strong-tier only, ~15 pages site-wide)

3. ASPECT TABLE — 6 rows:
   - Frequency
   - Best time
   - Food (with/without/either)
   - Form (capsule / powder / sublingual / etc.)
   - Standardization marker (REPLACES peptide's Missed dose row)
   - Cycling (if applicable; else state "no cycling needed")

4. RECONSTITUTION TABLE — REMOVED for oral supplements
   - Replaced with optional Form Comparison callout for multi-form 
     supplements (e.g., curcumin BCM-95 vs piperine variants)

5. WHERE-TO-BUY:
   - Primary: Amazon Associates search link (current pattern)
   - Add quality-markers callout above the link (e.g., "Look for: 
     KSM-66 standardization, third-party tested, capsule not 
     tablet")
   - Future-flex: SupplementVendorBlock for direct affiliates (e.g., 
     Nutricost, Renue By Science) when partnerships exist

6. LIMITATIONS H2 — Renamed "What we don't know yet" or "Where the 
   research stands". Curiosity-positive framing (NOT WebMD-alarmist). 
   Content covers:
   - "How strong is the evidence?" — research quality
   - "Where studies disagree" — heterogeneity
   - "What dose actually works" — dose-response uncertainty
   - "Who's been studied" — population specificity

7. STACKS H2 — 3-area framing:
   - With peptides (asymmetric: supplement → peptide ONLY in this 
     in-context section; no Related Peptides block)
   - With supplements (cross-link to other supplements where natural)
   - With lifestyle (training, sleep, diet integrations)

8. NO CALCULATOR CTA FOOTER (peptide pages have this; supplement 
   pages drop entirely without replacement)

9. TITLE TAG + META DESCRIPTION (new mandate):
   - Title: question-style or curiosity-hook (NOT "Supplement Name 
     - Prof Peptide")
   - Meta description: 150-160 chars, answer search intent, 
     biohacker tone (not WebMD-alarmist)
   - Examples:
     * Title: "Alpha-GPC: What Biohackers Need to Know About 
       Acetylcholine Boosting"
     * Meta: "Alpha-GPC dosing, mechanism, and real-world results 
       for cognitive enhancement. Plus how it stacks with cognitive 
       peptides like Semax and Selank."

10. JSON-LD SCHEMA — MANDATORY across all v4.4-supp pages:
    - FAQPage schema wrapping the FAQ H2 section
    - Article schema on the page itself
    - Author, datePublished, dateModified, reviewedBy populated
    - Validate via Google Rich Results Test before commit

11. ASYMMETRIC CROSS-LINK STRATEGY — LOCKED:
    - Peptide → Supplement: REQUIRED for strong matches (Related 
      Supplements block on peptide pages, Phase V44-xref-1)
    - Supplement → Peptide: ONLY in-context mentions inside Stacks 
      H2. NO Related Peptides block on supplement pages.
    - Rationale: Peptide pages have higher authority; one-way link 
      passes equity downhill to boost supplement pages

12. TONAL POSITIONING — LOCKED:
    - Plain-language question headers (Healthline-style readability)
    - Biohacker depth (assume reader is informed, not casual)
    - NOT WebMD-alarmist (no DANGER/WARNING/LIMITATIONS framing)
    - Reference style: confident, curious, honest about gaps

═══════════════════════════════════════════════════
PHASE 1 EXEMPLAR LINEUP — LOCKED ORDER
═══════════════════════════════════════════════════

Convert in this order with HARD STOP after exemplar #1:

1. alpha-gpc       (241 imp, pos 78 — highest volume; cognitive 
                    cross-link to Semax, Selank)
2. caffeine-l-theanine (221 imp, pos 82 — second highest; STACK PAGE 
                    test; focus cross-link to Semax)
3. zinc-carnosine  (141 imp, pos 59 — near page 1; gut healing cross-
                    link to BPC-157, KPV)
4. berberine       (5 imp, pos 7.4 — quick-win position move; GLP 
                    cross-link to Sema/Tirz/Reta)
5. nmn             (9 imp, pos 33 — tri-link variant test: NMN supp ↔ 
                    NAD+ peptide ↔ NAD+ supp; longevity category)

═══════════════════════════════════════════════════
HARD STOP DISCIPLINE
═══════════════════════════════════════════════════

After conversion #1 (alpha-gpc) commits successfully, HARD STOP for 
Mark visual + spec review. Do NOT proceed to caffeine-l-theanine 
until Mark approves the alpha-gpc result.

This mirrors V44-1 Phase 1 discipline: validate the spec on the 
first conversion before applying to remaining 4.

═══════════════════════════════════════════════════
EXECUTION — alpha-gpc conversion
═══════════════════════════════════════════════════

1. Read current state:
   - Open src/app/supplements/alpha-gpc/page.tsx
   - Open the live page via web_fetch (use ?v=v44supp1 query string)
   - Identify current H2 structure, vendor block, metadata, schema

2. Read reference specs:
   - docs/spec/peptide-profile-v4.4-canonical.md (peptide canonical)
   - docs/spec/wave-v44-supp-1-phase0-audit.md (supplement audit)

3. Convert alpha-gpc/page.tsx to v4.4-supp:
   - Apply all 12 spec adaptations above
   - Use Alpha-GPC's existing content as source material; reframe 
     into question-style H2s; expand where thin; tighten where 
     bloated
   - Add Related Supplements block? NO — that's V44-xref-1 wave 
     (peptide page side only)
   - Add in-context "Stacks with peptides" subsection mentioning 
     Semax, Selank where natural (asymmetric cross-link allowed)
   - Use Amazon Associates link with quality-markers callout 
     ("Look for: alpha-GPC dose 300-600mg per capsule, third-party 
     tested, vegetarian capsule")
   - Add FAQPage + Article JSON-LD
   - Add benefit-led title tag + 150-160 char meta description

4. Type-check + render-check:
   - Run pages dev server locally if needed
   - Verify no TypeScript errors
   - Verify page renders cleanly

5. Single commit:
   - Subject: "v4.4-supp refactor: Alpha-GPC profile page"
   - Body: brief diff summary including H2 changes, schema added, 
     metadata/title updates
   - DO NOT PUSH

6. Report back:
   - Commit SHA
   - +/- diff line count
   - Brief summary of what changed
   - Any judgment calls made (with reasoning)
   - HARD STOP for Mark review

═══════════════════════════════════════════════════
DISCIPLINE
═══════════════════════════════════════════════════

- NO push (Mark decides push timing for whole wave)
- NO modifications to other supplement pages this conversion
- NO modifications to peptide pages this conversion (V44-xref-1 is 
  separate)
- Reference docs/spec/ for canonical specs (don't reinvent patterns)
- Single commit per page conversion
- HARD STOP after each Phase 1 conversion for Mark spec validation

Standing by for any clarifying questions before starting. Otherwise 
proceed with alpha-gpc.
```

---

## After alpha-gpc lands

When CC reports completion of alpha-gpc:
1. Mark visually audits the live preview (vercel preview or local dev server)
2. Mark approves OR requests spec adjustments
3. If approved → fire next conversion (caffeine-l-theanine) with prompt:

```
Approved. Proceed with caffeine-l-theanine — same spec, same 
discipline. HARD STOP after commit.
```

4. Repeat for zinc-carnosine, berberine, nmn

After all 5 Phase 1 exemplars committed:
- Bundle review (visual audit of all 5 live)
- Spec lock confirmation
- Push decision (Mark's call: push Phase 1 now, or bundle with Phase 2)
- Phase 2 authorization (48 remaining supplements by GSC impression order)

---

## Reference paths in repo

- `docs/spec/peptide-profile-v4.4-canonical.md` — peptide canonical (pushed)
- `docs/spec/wave-v44-supp-1-phase0-audit.md` — supplement audit (committed `54668bc`, unpushed)
- `src/app/supplements/[slug]/page.tsx` — supplement profile pages
- `src/data/peptide-vendors.json` — peptide vendor data (reference for SupplementVendorBlock future spec)
