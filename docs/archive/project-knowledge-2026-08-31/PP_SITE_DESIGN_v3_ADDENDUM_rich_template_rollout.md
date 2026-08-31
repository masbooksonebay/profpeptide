# PP_SITE_DESIGN — v3 Addendum: Rich-Template Rollout COMPLETE (July 22–23, 2026)

**Status:** ACTIVE drop-in. Append to / version into PP_SITE_DESIGN v2 (governing). Cross-ref: PP_MASTER v15, SCS_MP v6.15.

---

## 🏁 MILESTONE — 62/62 profiles on the rich template

The BPC-157 rich template has been rolled out to the **entire peptide library**. Starting state was 1 rich (bpc-157) + 61 standard; ending state is **62 rich / 0 standard**.

**Sequence run:** pilot (3) → Batch 1 (10 high-value A singles) → Batch 2 (10) → Batch 3 (10) → Batch 4 (12, finished all singles) → Batch 5 (8 blends) → Batch 6 (8 blends, completed sweep).

---

## 📐 THE RICH TEMPLATE (locked — this is now the library standard)

Shell transform, applied identically to every profile:
- `PageTOC` → `ProfileTOC`; container `max-w-3xl` → `max-w-6xl`; h1 gains `sm:text-4xl tracking-tight`
- 3-line metadata block (4-line on blends) **removed**, replaced by the `.panel-card` **Quick Facts box** (bordered, hover removed)
- Mobile `ProfileTOC` + two-column grid `lg:grid-cols-[minmax(0,1fr)_260px]` with sticky `<aside>` rail
- Sections use `.section-heading` with `scroll-mt-24 mt-12 border-t-2 border-brand/30 pt-12` accent-rule dividers
- Body untouched — all sections, internal links, references, FAQ/JSON-LD, tags, Related blocks preserved. Shell transform, never a body rewrite.

### 🔒 QUICK FACTS — LOCKED 5 FIELDS, exact labels, in this order
1. **What it is** (`text-base`, primary — plain-language, function-first)
2. **How it's taken** (`text-sm`)
3. **Half-life** (`text-sm`)
4. **Typical research dose** (`text-sm`)
5. **Research status** (`text-sm`)

**NO "Also known as" field** — aliases live in prose.

**Label rule (hard):** never rename a label because a compound's data is awkward. If a value is unknown, keep the label and write an honest value ("Not characterized in humans", "No validated human dose", "No validated route"). *Batch 3 caught two agents renaming Half-life → "Trial dose" and Typical research dose → "Studied for" on evidence-thin compounds. An exact-label check is now a required QC gate on every batch.*

### 🔒 TOC RULE — overview first
```js
const tocSections = [
  { id: "overview", title: "What is [X]?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];
```
**Why:** the "What is X?" overview renders as a separate `<div id="overview">` OUTSIDE the `sections` array, so `sections.map()` alone starts the TOC at "How does X work?" — the overview is missing entirely. **This bug was in bpc-157 itself** (the template source), so the pilots faithfully inherited it. Caught at pilot stage and fixed on all four rich pages before the sweep — otherwise all 62 would have shipped with it.

---

## 🧬 BLEND-SPECIFIC HANDLING (16 blends)

Blends use a **4-line metadata block** (adds a component line) and a 15-H2 body. Same shell transform, plus:

1. **Component cross-links are MANDATORY.** Every component peptide links to its own `/peptides/` profile on first mention in prose, and each link must resolve. This is the internal-linking spine of the library — the 4-line metadata removal is exactly where a careless edit drops them.
2. **"What it is" = fixed-dose combination**, naming each component explicitly. Never describe a blend as if it were a single compound. *Exception observed:* where a page frames something as a community stack rather than a manufactured blend (aod-9604-mots-c), name the components without over-asserting "fixed-dose."
3. **"How it's taken" / "Typical research dose"** reflect the **co-titration / combined protocol**, not one component's solo dosing. Mixed-route blends are common (mk-677 oral + ipamorelin SC; nad-stack SC/IV/oral; pt-141 SC + oxytocin nasal; semax-selank intranasal).
4. **"Half-life"** — state per component if the page documents them; honest unknown otherwise. Keep the label.
5. **Component-approved ≠ blend-approved.** Where components are individually FDA-approved (Egrifta, Geref, Vyleesi, Pitocin, Ozempic, Mounjaro), state the distinction explicitly: the component is approved, the combination is not an approved product.

**Bonus outcome:** the mandatory cross-link pass surfaced **two component links that never existed on those pages at all** — `5-amino-1mq` (NAD+ stack) and `oxytocin` (PT-141+Oxytocin). Pre-existing gaps, not transform casualties.

---

## 🎓 REUSABLE PROCESS LEARNINGS (for the next library-wide operation)

1. **Pilot before sweeping.** The 3-page pilot caught the missing-overview TOC bug *and* traced it to the template source. Without it, 61 pages inherit the defect.
2. **The page beats the brief.** Claude's route/status flags went stale twice and the page was right both times (semaglutide-bpc-157 is SC-only, not IM/IV/oral; SS-31/elamipretide is FDA-approved as Forzinity since Sept 2025, not "Phase 3"). **Flags are prompts to CHECK, not facts to apply.** Agents should derive route and regulatory status from each page's own content.
3. **Exact-label QC gate is required.** The fan-out reliably produces the shell but improvises *labels* when data is uncomfortable. Check exact label strings before committing every batch.
4. **10–12-wide fan-out is the practical ceiling.** Expect ~2–3 agents per batch to drop mid-edit on API errors. Recovery pattern: revert the partial to clean original → redo the transform manually → verify div-balance. Never patch a partial in place (an over-close on cagrilintide cost a round-trip).
5. **Concurrent edits corrupt the dev server.** Rapid parallel writes put `.next` into a 500 error-boundary state even when `tsc` is clean. Restart the dev server before render QC — the 500s are server state, not page defects.
6. **Verify with direct greps, not inline loops.** A malformed loop false-flagged component links as MISSING across a whole batch. Per-file greps on served HTML are authoritative.
7. **One commit per profile, staged by explicit path.** Keeps batches reviewable and revertible at page granularity.
8. **Evidence-honesty survives the sweep only if instructed.** Pages built with careful thin-evidence framing (adamax "no peer-reviewed literature", adipotide "Phase 1 terminated / renal-tox", mgf "contested, Fornaro replication failure", igf-1-des "NOT mecasermin/Increlex") must have that nuance **lifted into Quick Facts, not flattened** into a generic line.

---

## 🔎 OPEN FOLLOW-UP

- **SS-31 research status could be tighter.** Forzinity (elamipretide) received **accelerated** FDA approval Sept 19 2025 for Barth syndrome — but it **missed both primary endpoints** (6-minute walk test, total fatigue score); approval rested on knee-extensor strength in the open-label extension, an intermediate endpoint, with continued approval contingent on confirmatory trials. Current page says "FDA-approved as Forzinity," which is accurate but less qualified than the adipotide/mgf framing. Suggested: *"Elamipretide received FDA accelerated approval as Forzinity (Sept 2025) for Barth syndrome, based on an intermediate endpoint after missing its primary endpoints; research-grade SS-31 is unapproved."*
