# SCS_REF_INDEX v15
**Supersedes v14. Updated 2026-08-24.**

Task → docs. **Consult first on any workstream load.**

---

## CURRENT VERSIONS

| Doc | Version | Covers |
|---|---|---|
| **PP_X_POSTS** | **v53 ← NEW (full replacement)** | Sources, locked format, no character limit, sale check, six-category set, line-4 hybrid table, link selection, coded compounds, de-domain, news posts, vendor code master, vendor-own-offer conflicts |
| PP_MASTER | v19 addendum | Site architecture, profile scope |
| PP_SNIPPET_INVESTIGATION | v2 | The SERP title/snippet problem, the treatment, Round 5 result, invalid controls, anti-attribution vendors, `/go/` measurement |
| PP_PRICES | v7 | Weekend cadence, shrink floor, blend_total fix, skip ledger, Aero manual path, vendor exit checklist |
| PP_COMMISSIONS | v9 | Earner ranking, attribution classification + the Ignite correction, public-code conflicts, temporary rates |
| PP_INDEXING | v24 | Quota is 10, GSC staleness rule, what's worth submitting, the experiment pages |
| PP_INBOUND_VENDORS | **v5 ← NEW** | The four-month auto-reply outage, intake gates, the nine owed replies, paid-placement policy |
| PP_SEO | v26 addenda | Indexing rule, settled diagnoses |
| PP_VENDOR_PAGES | v4 | Coupon page structure |
| PP_SITE_DESIGN | v4 addendum | Price grid, visual system |
| PP_COMPETITORS | v1 | Peptide Critic, PeptideStack, peptidecomp |
| **HR_SOCIAL** | **v18 ← NEW** | Carousel/reel format, slide structure, caption. **Reel filenames corrected**; photo source and build order documented |
| **HR_INSTAGRAM_PROCESS** | **v2 ← NEW** | The operational how-to — trigger, read order, prompt structures, the six recorded failures |
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
| `src/data/search-aliases.ts` | 🆕 Search synonym/alias table — **hand-edited, extend freely** |
| `scripts/gen-search-index.mjs` | 🆕 Derives the 330-entry search index from the single sources |
| `docs/PP_VENDOR_EXIT_CHECKLIST.md` | PERMANENT vs TEMPORARY vendor removal. ⚠️ fusion + synthesis are complete TEMPORARY hides; permanent removal steps never run |
| `scripts/price-pull/skip-ledger.json` | Skipped vendors, reasons, pending reverts |
| `scripts/price-pull/README.md` | Pipeline notes — **includes the Ascension 50% VERIFIED record** |

---

## TASK → DOCS

**X posts** → **PP_X_POSTS v53 (this doc alone)** · PP's live `/coupons/<slug>` for code, catalog, line 4 · the vendor's own site for stock and the sale check
⚠️ **Sources are PP's own pages and the vendor's own site. Aggregators and competitor sites are never sources.** See v51 §0.

**SEO / snippets** → PP_SNIPPET_INVESTIGATION v2 · PP_SEO · PP_INDEXING v24 · `docs/serp-observations/`

**Prices / weekend pull** → PP_PRICES v7 · `skip-ledger.json` · `scripts/price-pull/README.md`

**Vendor rates / attribution** → PP_COMMISSIONS v9 · `docs/PP_ATTRIBUTION_BASIS.md`

**Reveal gate / anti-attribution** → PP_SNIPPET_INVESTIGATION v2 · PP_COMMISSIONS v9 · `src/data/reveal-gate-vendors.ts` · PP_X_POSTS v51 §11 *(the posting view)*

**Inbound vendors** → PP_INBOUND_VENDORS v5

**Coupon page structure** → PP_VENDOR_PAGES v4 · PP_SITE_DESIGN v4

**HR social / Instagram** → **HR_SOCIAL v18** (authority) · **HR_INSTAGRAM_PROCESS v2** (how-to) · HR_PROGRAM_EXPORT · SC_FORM_CUES_EXPORT *(strength days only)*
⚠️ Mark attaches the session photo to the CD chat's library. One CD chat, carousel first, then the reel.

---

## 🔴 STANDING CORRECTIONS

**The FAQ project (PP_FAQ v1 §1) — do not lose this framing again:** people google specific questions; PP answers *that question* on one page, comprehensively, so they don't have to dig through Reddit — then links to the canonical page for depth. Reported-trial-dosing questions ("how often do you take reta") are IN scope; personal advice is not. **Cannibalization with profiles is a non-concern — Mark, explicitly: the profiles aren't getting clicks anyway.** This was re-explained multiple times before being recorded; it is now recorded. Nav label **FAQ**, hub is the existing /faq page, routes are `/faq/[slug]` in question form.

**HR reel template filenames — the docs were wrong until 2026-08-23.** The correct names are **`HR_REEL_TEMPLATE_scene.jsx`** and **`HR_REEL_TEMPLATE_assets.js`**, not `_scene.jsx` / `_assets.js`. Confirmed from CD's quote-back of the wrapper's own x-import. ⚠️ Any doc or prompt still using the short names points at files that don't exist.

**HR Instagram is posted through W8D5** (2026-08-23, per Mark — the feed itself cannot be checked from chat). **Next is W8D6 — Half-Sim, race-order stations 5–8.** ⚠️ Simulation day: hashtag is `#hybridracing`, and FullRox is *strongly recommended* while HalfRox is a **fallback only**.

**The salience control group is DISSOLVED (2026-08-23).** All 48 live coupon pages carry every applicable treatment change — no controls, no exceptions. `coupon-sentence-vendors.ts` records the dissolution. ⚠️ Older docs describing a control group (almighty, amino-x, royal, spartan, ameano, modern-aminos, purerawz) are **stale** — do not re-exclude those pages.

**Aero's code is PROFPEPTIDE, not PROFPEPTIDE15.** PP_X_POSTS v52 and earlier were wrong; vendors.ts and every live surface carry PROFPEPTIDE. The `?ref=PROF15` in Aero's URL is a GoAffPro affiliate identifier, not the coupon code.

**Aero prefixes BOTH tirzepatide and semaglutide with `GLP1`** — contradicting the tier key. That is Aero's own SKU naming, recorded accurately. Not a PP error. Do not "fix" it.

**Decode framing is the bare parenthetical** — `Retatrutide (GLP-RT)`. "listed as" / "sold as" / "coded as" are retired.

**Site search was rebuilt 2026-08-23.** Hand-typed 133-entry array → **330-entry derived index** generated at build time, with a staleness guard in the build chain. ⚠️ **The alias table lives at `src/data/search-aliases.ts`** — add a line whenever a search returns nothing. Glossary terms were extracted to `src/data/glossary.ts` so the page and search read one source.

**PP does not police vendor sites.** PP is responsible for what PP publishes. Questionable vendor claims (efficacy, trial outcomes, testimonials, dosing) are **omitted** from PP, never repeated or attributed; benign-but-unverifiable facts are **attributed** — *"Vendor states…"*; only genuinely serious issues get raised with the vendor. The original Gate E in PP_INBOUND_VENDORS v4 said the opposite and **was wrong** — see v5 §Gate E.

**🔴 The affiliate platform map is STRANDED.** PP_COMMISSIONS_v6_ADDENDUM_platform_map was written to be inserted as §7 of PP_COMMISSIONS. **It never was — v9 carries no platform content.** The only vendor→platform mapping lives in that unmerged addendum, and it self-describes as incomplete and partly inferred. ⚠️ It also **contradicts PP_VENDOR_PROSPECTING v20 §8**, which marks Post Affiliate Pro a dead end while the addendum identifies PAP as the platform behind the Spartan/Almighty/Ignite binding failures. Unresolved. Fold into PP_COMMISSIONS v10 as a real section.

**Refersion is NOT a dead end — it has two vendors.** v20 §8 records Refersion as researched and dead. Mark, 2026-08-22: **Apollo and Axios**. PP is already an Apollo affiliate and has applied to Axios. Correct at v20's next version.

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

**v15 (August 24, 2026):** **PP_FAQ v1** created as the governing doc for the FAQ section — Mark's framing crystallized after repeated re-explanation. PP_ANSWERS demoted to research record. Standing correction added so the framing survives session boundaries.

**v14 (August 23, 2026):** **HR_SOCIAL v18** (reel filenames corrected; photo source and build order documented; STATE updated to W8D5). **HR_INSTAGRAM_PROCESS v2** added to the index. Standing corrections: the reel filename error and current HR posting state.

**v13 (August 23, 2026):** **PP_X_POSTS v53** (Aero code corrected; decode framing standardized to the bare parenthetical; blank-OG-card rule softened). **PP_ANSWERS v2** added to the index. Standing corrections: control group dissolved · Aero code + GLP1 naming · decode framing · the search rebuild and where the alias table lives.

**v12 (August 22, 2026):** **PP_X_POSTS v52** (attribution reframed; questionable claims omitted not attributed; Amino Club 35% temporary w/ Aug 31 expiry; temporary rates never touch the vendor page). **PP_INBOUND_VENDORS v5** (Gate E rewritten as an authoring rule). Standing corrections added: PP doesn't police vendor sites · the stranded platform map · Refersion has two vendors.

**v11 (August 20, 2026):** **PP_X_POSTS v51** supersedes v49 + v50 + all addenda as a full replacement — RUO line retired, live-sales table deleted, no-character-limit restated, line-4 hybrid table, `?v=4` hub URL, six-category set restored. Midwest `PROFPEPTIDE` standing correction added. `/vendor-testing-index` correction added. `reveal-gate-vendors.ts` added to in-repo docs. Hygiene rules 19, 20, 21.

**v10 (August 19, 2026):** PP_SNIPPET_INVESTIGATION v2, PP_PRICES v7, PP_COMMISSIONS v9, PP_X_POSTS v50, PP_INDEXING v24, PP_INBOUND_VENDORS v3.
**v9–v1:** see prior versions.

---

*Parked: the reveal-gate leak fix (5 pages, awaiting approval). Next: the /prices accepted residual stands until traffic justifies revisiting.*
