# SCS_REF_INDEX v10
**Supersedes v9. Updated 2026-08-19.**

Task → docs. **Consult first on any workstream load.**

---

## CURRENT VERSIONS

| Doc | Version | Covers |
|---|---|---|
| **PP_MASTER** | v19 addendum | Site architecture, profile scope |
| **PP_SNIPPET_INVESTIGATION** | **v2 ← NEW** | The SERP title/snippet problem, the treatment, Round 5 result, invalid controls, anti-attribution vendors, `/go/` measurement |
| **PP_PRICES** | **v7 ← NEW** | Weekend cadence, shrink floor, blend_total fix, skip ledger, Aero manual path, vendor exit checklist |
| **PP_COMMISSIONS** | **v9 ← NEW** | Earner ranking, attribution classification + the Ignite correction, public-code conflicts, temporary rates |
| **PP_X_POSTS** | **v50 ← NEW** | RUO line, sale-post shape, news-post shape, line-4 sources, X card cache |
| **PP_INDEXING** | **v24 ← NEW** | Quota is 10, GSC staleness rule, what's worth submitting, the experiment pages |
| **PP_INBOUND_VENDORS** | **v3 ← NEW** | The four-month auto-reply outage, intake gates, the nine owed replies, paid-placement policy |
| PP_SEO | v26 addenda | Indexing rule, settled diagnoses |
| PP_VENDOR_PAGES | v4 | Coupon page structure |
| PP_SITE_DESIGN | v4 addendum | Price grid, visual system |
| PP_COMPETITORS | v1 | Peptide Critic, PeptideStack, peptidecomp |
| HR_SOCIAL | v17 | Carousel/reel format, slide structure, caption |
| HR_MASTER | v15 | App state |
| SC_MASTER_ACTIVE | v5.14 | Strength Cycle |
| WN_MASTER_ACTIVE | v1.2 | Weightlifting Nation |
| WL_MASTER_ACTIVE | v2.4 | Capstone operations |
| SCS_MP | v6.26 addendum | One prompt at a time |

---

## IN-REPO DOCS — not in the project folder

⚠️ These live in the profpeptide repo. CC reads them directly; they are **not** attached to chats.

| Path | Holds |
|---|---|
| `docs/serp-observations/` | Round 1 + Round 5 CSVs, notes, README recording the invalid control group. **Rounds 2–4 exist only in a closed CINC session** |
| `docs/PP_COUPON_SALIENCE_EXPERIMENT.md` | Cohorts, treatment definition, the 4-of-5 sequence |
| `docs/PP_ATTRIBUTION_BASIS.md` | Vendor attribution classification and basis |
| `docs/PP_VENDOR_EXIT_CHECKLIST.md` | Permanent vs temporary vendor removal |
| `scripts/price-pull/skip-ledger.json` | Skipped vendors, reasons, pending reverts |
| `scripts/price-pull/README.md` | Pipeline notes — **includes the Ascension 50% VERIFIED record** |

---

## TASK → DOCS

**SEO / snippets** → PP_SNIPPET_INVESTIGATION v2 · PP_SEO · PP_INDEXING v24 · `docs/serp-observations/`

**Prices / weekend pull** → PP_PRICES v7 · `skip-ledger.json` · `scripts/price-pull/README.md`

**X posts** → PP_X_POSTS v50 · the vendor's own coupon page for line 4

**Vendor rates / attribution** → PP_COMMISSIONS v9 · `docs/PP_ATTRIBUTION_BASIS.md`

**Inbound vendors** → PP_INBOUND_VENDORS v3

**Coupon page structure** → PP_VENDOR_PAGES v4 · PP_SITE_DESIGN v4

**HR social** → HR_SOCIAL v17 · HR_PROGRAM_EXPORT · SC_FORM_CUES_EXPORT

---

## 🔴 STANDING CORRECTIONS

**Ascension's 50% is VERIFIED.** Mark cart-tested it multiple times. A `vendor-pins.ts` comment claiming otherwise was wrong and was removed 2026-08-19. `scripts/price-pull/README.md` had it right all along.

**Ignite Peptides is PROVEN, not cut.** Vendor-confirmed 2026-08-19: `PROF10` bound to account 5024, credits without a click, paid out.

**The domain-in-prose theory is dead.** Present on 100% of ranked pages and 96% of not-ranked. It was added to 20 pages anyway as a low-cost experiment on pages that don't rank — **not** as a validated fix.

**GSC reflects last crawl, not now.** Five false alarms in one week. Verify against the artifact before treating any reading as a defect.
