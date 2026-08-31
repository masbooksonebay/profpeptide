# SCS_REF_INDEX v11
**Supersedes v10. Updated 2026-08-20.**

Task → docs. **Consult first on any workstream load.**

---

## CURRENT VERSIONS

| Doc | Version | Covers |
|---|---|---|
| **PP_X_POSTS** | **v51 ← NEW (full replacement)** | Sources, locked format, no character limit, sale check, six-category set, line-4 hybrid table, link selection, coded compounds, de-domain, news posts, vendor code master, vendor-own-offer conflicts |
| PP_MASTER | v19 addendum | Site architecture, profile scope |
| PP_SNIPPET_INVESTIGATION | v2 | The SERP title/snippet problem, the treatment, Round 5 result, invalid controls, anti-attribution vendors, `/go/` measurement |
| PP_PRICES | v7 | Weekend cadence, shrink floor, blend_total fix, skip ledger, Aero manual path, vendor exit checklist |
| PP_COMMISSIONS | v9 | Earner ranking, attribution classification + the Ignite correction, public-code conflicts, temporary rates |
| PP_INDEXING | v24 | Quota is 10, GSC staleness rule, what's worth submitting, the experiment pages |
| PP_INBOUND_VENDORS | v3 | The four-month auto-reply outage, intake gates, the nine owed replies, paid-placement policy |
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

**⚠️ PP_X_POSTS v49, v50 and the v47/v48/sale-post addenda are SUPERSEDED.** v51 is a full replacement and stands alone. Do not read them as supplements.

---

## IN-REPO DOCS — not in the project folder

⚠️ These live in the profpeptide repo. CC reads them directly; they are **not** attached to chats.

| Path | Holds |
|---|---|
| `docs/serp-observations/` | Round 1 + Round 5 CSVs, notes, README recording the invalid control group. **Rounds 2–4 exist only in a closed CINC session** |
| `docs/PP_COUPON_SALIENCE_EXPERIMENT.md` | Cohorts, treatment definition, the 4-of-5 sequence |
| `docs/PP_ATTRIBUTION_BASIS.md` | Vendor attribution classification and basis |
| `docs/PP_VENDOR_EXIT_CHECKLIST.md` | Permanent vs temporary vendor removal |
| `src/data/reveal-gate-vendors.ts` | The reveal-gated vendors + the accepted midwest `?ref=` residual |
| `scripts/price-pull/skip-ledger.json` | Skipped vendors, reasons, pending reverts |
| `scripts/price-pull/README.md` | Pipeline notes — **includes the Ascension 50% VERIFIED record** |

---

## TASK → DOCS

**X posts** → **PP_X_POSTS v51 (this doc alone)** · PP's live `/coupons/<slug>` for code, catalog, line 4 · the vendor's own site for stock and the sale check
⚠️ **Sources are PP's own pages and the vendor's own site. Aggregators and competitor sites are never sources.** See v51 §0.

**SEO / snippets** → PP_SNIPPET_INVESTIGATION v2 · PP_SEO · PP_INDEXING v24 · `docs/serp-observations/`

**Prices / weekend pull** → PP_PRICES v7 · `skip-ledger.json` · `scripts/price-pull/README.md`

**Vendor rates / attribution** → PP_COMMISSIONS v9 · `docs/PP_ATTRIBUTION_BASIS.md`

**Reveal gate / anti-attribution** → PP_SNIPPET_INVESTIGATION v2 · PP_COMMISSIONS v9 · `src/data/reveal-gate-vendors.ts` · PP_X_POSTS v51 §11 *(the posting view)*

**Inbound vendors** → PP_INBOUND_VENDORS v3

**Coupon page structure** → PP_VENDOR_PAGES v4 · PP_SITE_DESIGN v4

**HR social** → HR_SOCIAL v17 · HR_PROGRAM_EXPORT · SC_FORM_CUES_EXPORT

---

## 🔴 STANDING CORRECTIONS

**Midwest's `PROFPEPTIDE` WORKS.** Mark verified at checkout 2026-08-20 — **both `PROFPEPTIDE` and `PROF10` redeem.** PP_COMMISSIONS v9 and PP_SNIPPET_INVESTIGATION v2 both record it as returning "Invalid coupon code." **Both are wrong** and need correcting at their next version. Midwest is reveal-gated because its public `SITEWIDE30` beats PP's 10%, **not** because anything is broken.

**Ascension's 50% is VERIFIED.** Mark cart-tested it multiple times. A `vendor-pins.ts` comment claiming otherwise was wrong and was removed 2026-08-19.

**Ignite Peptides is PROVEN, not cut.** Vendor-confirmed 2026-08-19: `PROF10` bound to account 5024, credits without a click, paid out.

**The domain-in-prose theory is dead.** Present on 100% of ranked pages and 96% of not-ranked. It was added to 20 pages anyway as a low-cost experiment on pages that don't rank — **not** as a validated fix.

**GSC reflects last crawl, not now.** Five false alarms in one week. Verify against the artifact before treating any reading as a defect.

**`/vendor-testing-index` renders no discount codes.** It has no code field and no code column. A claim that codes are exposed there is wrong — the listing page that does expose them is **`/vendors`**.

---

## 6) HYGIENE RULES

1. Version in the filename; current version in this index.
2. Successors declare what they supersede.
3. **Negative findings are findings.**
4. Docs describing live state go stale fastest — regenerate from the artifact, date the claim.
5. Update this index whenever anything moves.
6. Frozen snapshots are deliberate archives.
7. Reissue this index in the same batch as any doc it references.
8. Section pointers die with versions.
9. **Counts in docs are claims, not facts.**
10. **Distinguish *fixed* from *made-safe*.**
11. **A dashboard field is an observation, not a diagnosis.**
12. **Diagnose the pipeline, not just the code.**
13. **Population before sample.**
14. **An exclusion is not automatically a defect.** Classify before counting.
15. **Check the last-crawl date before opening an investigation.**
16. **The doc holds rules; the repo holds state.**
17. **Data exports carry a window — record it.**
18. **When a business model inverts a standard metric, write the inversion at the top of the doc.**
19. 🆕 **A delta doc must be indexed alongside what it amends — or replaced.** This index pointed X posts at PP_X_POSTS v50, a delta whose header said v49 remained in force. Drafting from v50 alone produced a post set on a partial rule set: a skipped sale check, missing code disclosures, a retired character cap treated as live, and a line 4 rewritten when one was already recorded. **Prefer full replacements. Where a delta must exist, this index names both.**
20. 🆕 **A "still in force" summary section is not the rules.** v50 §7 compressed a six-category post set to four. Summaries of superseded docs are lossy by construction — read the source or fold it into a replacement.
21. 🆕 **A roster of time-boxed items does not belong in a rules doc.** The X-posts LIVE SALES table was 9–13 days stale on read and held an already-expired entry. Rules are durable; promotions are not. **Deleted 2026-08-20 — Mark flags notable sales directly.**

---

## 📅 Changelog

**v11 (August 20, 2026):** **PP_X_POSTS v51** supersedes v49 + v50 + all addenda as a full replacement — RUO line retired, live-sales table deleted, no-character-limit restated, line-4 hybrid table, `?v=4` hub URL, six-category set restored. Midwest `PROFPEPTIDE` standing correction added. `/vendor-testing-index` correction added. `reveal-gate-vendors.ts` added to in-repo docs. Hygiene rules 19, 20, 21.

**v10 (August 19, 2026):** PP_SNIPPET_INVESTIGATION v2, PP_PRICES v7, PP_COMMISSIONS v9, PP_X_POSTS v50, PP_INDEXING v24, PP_INBOUND_VENDORS v3.
**v9–v1:** see prior versions.

---

*Parked: the reveal-gate leak fix (5 pages, awaiting approval). Next: the /prices accepted residual stands until traffic justifies revisiting.*
