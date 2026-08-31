# PP_VENDOR_PAGES — v3 Addendum (July 20, 2026)

**Status:** ACTIVE drop-in. Append to / version into PP_VENDOR_PAGES v2 (governing) and cross-referenced by PP_VENDOR_PROSPECTING v18 + PP_X_POSTS v45.
**Purpose:** Captures decisions made the night of July 20, 2026 — the new editorial vendor-list rule, Swiss Chems onboarding, and the peptide-profile build backlog surfaced by the Swiss Chems audit.

---

## 🆕 EDITORIAL RULE (LOCKED) — vendor compound lists are CURATED to PP's scope, not exhaustive vendor catalogs

**Rule:** A vendor page's "Popular compounds by research area" list contains only **research peptides AND peptide-adjacent research compounds that PP profiles or will profile.** Compounds outside that world are **omitted entirely — not listed as plain text.**

- The test is NOT strictly "is it a peptide." It's **"is it a research compound in the peptide-research world / commonly grouped with peptides."** PP already profiles non-peptides that qualify (5-Amino-1MQ, MOTS-C, GHK-Cu, MK-677) because researchers looking at peptides look at them too.
- **Out of scope → omit:** clinical hormones (HCG, HMG), biologic drugs / fusion proteins (ACE-031/Ramatercept), native growth-factor proteins (Myostatin/GDF-8 itself), non-peptide prescription drugs.
- **Corollary — "listed = linkable":** if a compound is important enough to list, it's important enough to have a profile. So a vendor list should have **no permanent plain-text stragglers**: every listed compound either (a) has a profile and is linked, or (b) is on the build backlog and will be linked once built. Anything neither → omit.
- **This is already the de-facto convention** across PP's existing vendor pages (they never listed every SKU a vendor carries — only the profile-worthy ones). Midwest and the new Swiss Chems page were the *inconsistent* ones; this rule brings them into line.
- **First-mention internal linking still applies** within the list (link first occurrence of any profiled compound; don't double-link later mentions — EXCEPT product-list contexts where each distinct product entry is linked for list consistency, e.g. the Aero CJC-1295 standalone + blend case).

**Consistency sweep (queued, post-push):** audit ALL existing vendor pages for stray out-of-scope listed compounds and remove them (apply this rule site-wide). Pairs naturally with the profile-build work since we're already touching vendor pages to add links.

---

## 🆕 NEW VENDOR — Swiss Chems (onboarded July 20, 2026; LIVE)

- **Affiliate:** Mark is now a Swiss Chems affiliate.
- **Code:** `PROF10` · **Discount:** 10% (page shipped as "Save 10%").
- **Affiliate/shop link (LOCKED, use exactly):** `https://swisschems.is/?ref=PROF10`
  - ⚠️ **Unverified tracking:** Mark confirmed this is his link (first-hand). The tracking mechanism (cookie/redirect) is NOT visible in fetched HTML, and Swiss Chems runs a separate partner portal (`partners.swisschems.is`). Link *resolves*; crediting is only confirmable in Mark's partner dashboard. **If commissions don't appear, verify the tracking URL first.**
- **Slug:** `/coupons/swiss-chems`. **Surfaces:** all 3 (coupon page + Featured Vendors card + /vendors directory entry).
- **Positioning:** PEPTIDE-FORWARD. They also sell SARMs/nootropics (their catalog center-of-gravity is actually SARMs — Enclomiphene, MK-677, Cardarine, RAD-150, etc.), but PP presents them for their genuinely deep peptide catalog. Do NOT foreground SARMs.
- **Testing standout (cite MECHANISM, not a bare number):** public **Independent Test Results** page + per-product **verification system** (verify a product against its batch record), backing a 99%+ purity guarantee, independent third-party testing (HPLC identity/concentration + mass spec structure). Lead with the public COA + verification mechanism.
- **Catalog strength:** deep GH-secretagogue / IGF bench; broad peptide coverage across all PP categories. 48-product peptide catalog verified July 20.

---

## 🆕 PEPTIDE-PROFILE BUILD BACKLOG (from Swiss Chems audit, July 20 — queued post-push)

The Swiss Chems audit found 14 unlinked compounds; classification and scope calls locked:

**BUILD (~10 profiles — in scope, real literature):**
| Compound | Priority | Cross-vendor reach |
|---|---|---|
| **GHRP-2** | ⭐ HIGH | 3 pages (particle, vital-core, swiss-chems) |
| **GHRP-6** | ⭐ HIGH | 3 pages |
| **Hexarelin** | ⭐ HIGH | 3 pages |
| IGF-1 DES | normal | swiss-chems only |
| MGF | normal | (PEG-MGF likely folds into this profile) |
| PEG-MGF | normal | combine w/ MGF |
| Adipotide (FTPP) | normal | landmark Nat Med 2004 + 2011 primate; Phase I halted (nephrotox) |
| Cibinetide (ARA-290) | normal | EPO-derived tissue-repair; multiple Phase 2 |
| Gonadorelin | normal | GnRH decapeptide — real peptide, in scope |
| GnRH (Triptorelin) | normal | GnRH agonist decapeptide — in scope |

- **Priority batch = GHRP-2 + GHRP-6 + Hexarelin** — each lights up 3 vendor pages, same GH-secretagogue class, natural research/build batch. Build these FIRST.
- Each profile = full v4.4 canonical (mechanism/dosing/research/PK/references), evidence-honest, real PMIDs only. Same care as the Adamax build.

**REMOVED as out of scope (July 20 — no profiles, omitted from Swiss Chems list + FAQ):**
- **HCG** (Human Chorionic Gonadotropin — clinical glycoprotein hormone)
- **HMG** (Human Menopausal Gonadotropin — clinical fertility hormone)
- **ACE-031 / Ramatercept** (ActRIIB-Fc fusion-protein biologic; discontinued DMD drug)
- **Myostatin** (CC verified Swiss Chems' product = GDF-8 native protein itself, a recombinant biologic — NOT an inhibitor/follistatin-type; the inhibitors PP profiles are Follistatin + would-be ACE-031)

---

## 🆕 Adamax profile — honest limited-evidence precedent (built July 20; LIVE)

- **Finding:** Adamax has **zero peer-reviewed primary literature** (PubMed = 0; all claims trace to vendor/blog). Marketed as a doubly-modified Semax/adamantane analog (N-Acetyl-Semax-Adamantane).
- **Decision:** BUILD the profile anyway (full v4.4 structure) — describing what it's *claimed* to be + honestly stating no studies exist is genuinely useful to a researcher evaluating it. The honesty IS the value.
- **Precedent / how to handle no-literature compounds:** (1) attribute all claims AS claims ("marketed as"); (2) the **Semax distinction** — real Semax literature may appear ONLY as clearly-labeled family/analog context, NEVER dressed up as Adamax evidence; (3) foreground the evidence gap plainly (PK uncharacterized, dosing not established); (4) no fabricated citations; (5) omit reconstitution table (no established dose = would fabricate precision) and comparisons block (no /compare pages exist). Adamax correctly landed on the **standard** template (metadata block + PageTOC).
