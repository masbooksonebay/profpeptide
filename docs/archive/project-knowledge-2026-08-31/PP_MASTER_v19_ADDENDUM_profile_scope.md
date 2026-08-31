# PP_MASTER — ADDENDUM: Profile scope

**Status:** ACTIVE addendum to PP_MASTER v18.
**Date:** August 13, 2026
**Records:** why PP does not build a profile for every compound that has a price page.

---

## 🔒 THE RULE

**A `/prices/<slug>` page existing is not a reason to build a `/peptides/<slug>` profile.**

Price pages generate automatically from the price pipeline — any compound with rows gets one, and the ≥3-vendor gate makes it indexable. Profiles are hand-built research pages and are scoped deliberately.

**A compound earns a profile when it clears BOTH gates:**

| Gate | Test |
|---|---|
| **Vendor coverage** | Enough of the roster carries it that buyers are actually shopping for it |
| **Published literature** | Enough peer-reviewed research to fill the profile spec honestly, without padding or leaning on manufacturer claims |

**Either gate alone is not enough.** The failure modes look different and both produce a bad page:

- **Coverage without literature** → a profile padded with thin or vendor-sourced evidence. PP's whole claim is that its research is real; a page that can't source its sections undermines that.
- **Literature without coverage** → a well-researched page for a compound almost nobody sells. It ranks for a query with no commercial intent behind it and adds a maintenance surface for nothing.

---

## Worked examples

**Cartalax — coverage, no literature. NOT PROFILED.**
14 vendors carry it. English peer-reviewed research is thin, largely from the Khavinson group and often published in Russian. The same holds for Vilon (10), Ovagen, Pancragen and Vesugen (8 each). These get a **priced `/prices` page linked from `/bioregulators`** and no profile. That's the correct treatment — the price comparison is genuinely useful; a research page would be padding.

**SNAP-8 — coverage, wrong shape. NOT PROFILED.**
16 vendors, more than many profiled compounds. But it's a **topical cosmetic** peptide: the headline efficacy figure traces to an n=17 manufacturer-originated study, and PP's dosing section assumes an injectable with a reconstitution protocol. The spec doesn't map. Rejected on the literature gate even though coverage is strong.

**Survodutide (7 vendors) and Mazdutide (5) — thin coverage, strong literature. PROFILED, Aug 13 2026.**
The exception, and the reasoning matters. Low vendor counts here reflect **novelty, not absence of demand** — both are late-stage pharmaceutical compounds in PP's highest-demand category, with multiple published RCTs (Survodutide: three Phase 2s including a positive biopsy-endpoint MASH trial in NEJM; Mazdutide: two Phase 3 obesity trials plus China NMPA approval). Cartalax has few readers *and* thin evidence; these have deep evidence and a field that is filling rather than absent.

⚠️ **This exception is narrow.** It applies where low coverage is a timing artifact for a compound with genuine pharmaceutical development behind it — not as a general licence to profile anything well-researched.

---

## What unprofiled priced compounds get instead

Not nothing. The correct treatment is **linkage, not a profile**:

- The `/prices/<slug>` page stays indexable at ≥3 vendors
- It gets linked from the relevant hub, in prose or a list — `/bioregulators` links all ten unprofiled bioregulators to their price pages
- `check:prices-orphan` fails the build if an indexable price page carries no inbound link

That closes the dead-end problem without committing to a research page nobody can source.

---

## ⚠️ Note to future sessions

**Do not report "N compounds have price pages and no profile" as a gap.** It's a deliberate scope decision, and the number will always be non-zero by design. Recorded because it was surfaced as a defect on Aug 13, 2026, before Mark corrected it.

The useful version of that report is different: *which unprofiled priced compounds clear BOTH gates and are therefore build candidates* — and, separately, *which indexable price pages have no inbound link*, which is a real defect the orphan guard now catches.

---

*Addendum to PP_MASTER v18. Fold into the next full version.*
