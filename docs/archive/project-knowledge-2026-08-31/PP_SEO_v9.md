# PP SEO — v9

**Status:** ACTIVE
**Version:** v9 (June 19, 2026) — logs the **site-wide citation-integrity crisis + repair** (the "thin-content depth pass" from v7/v8 turned out to be misdiagnosed: the 7 pages were already deep; the real defect was hallucinated PMIDs library-wide). Records the **5-batch NCBI-verified repair** that fixed all 47 citation-bearing peptide pages, banks the **root-cause learning + mandatory pre-publish citation-verification gate**, and **closes Findings A & B** (shipped) and the **thin-content depth task** (retired).
**Supersedes:** v8 (carries its routine, Log, and permanent-exclude list forward, amended).

---

## 🆕 Session work — June 19, 2026

### 1. 🔴 The "thin-content depth pass" was a misdiagnosis — the real defect was hallucinated citations site-wide

The v7/v8 plan treated 7 peptide profiles (retatrutide, sermorelin, igf-1-lr3, tb-500, kpv, selank, glow) as **thin content** not getting indexed, with a CC depth-pass as the fix. When CC went to execute, verify-first surfaced two facts that inverted the premise:

- **The 7 pages were NOT thin.** All were already at full flagship depth — 13–14 sections, 3–5 studies, 7–9 FAQs, ~3,000–3,900 words, in the same range as bpc-157 / semaglutide / tirzepatide / follistatin. Their last real content edits predated the request. Padding them would have violated "flag, don't pad." **Depth pass cancelled — correctly.**
- **A site-wide citation-integrity failure was the actual problem.** The page generator had **hallucinated PMIDs across the whole library**: the citation *text* (authors / title / journal) is real and on-topic, but the PMID *digits* are wrong and resolve to unrelated real papers (e.g. a Thymosin β4 wound-healing cite pointing to a schizophrenia imaging paper; a retatrutide trial cite pointing to an "Africa CDC" article; a BPC-157 cite linking a fabricated nature.com DOI that resolves to a *physics* paper). Footprint at discovery: **46–47 peptide pages, ~133 distinct PMIDs, ~380 citation instances**, plus PMC-ID errors, journal/year metadata drift, placeholder authors ("PMC Research Group"), and weak/predatory sources (vendor blogs, SCIRP, genesispub-mislabeled-as-JSCR).

**This was never an SEO lever — it's a credibility/liability fix.** A research-framed peptide site whose citations don't resolve is a trust problem the moment anyone checks one. SEO upside (helpful-content/accuracy signals) is indirect and slow; the repair was done on its own merits. PP's actual traffic lever remains **position/CTR**, not this.

### 2. ✅ Site-wide citation repair — 5 batches, all NCBI-verified, COMPLETE

Repaired as one batched workstream, CC-owned (research + verification + code), with a fixed repair taxonomy and write-time NCBI re-verification on every ID. **Entire 47-page citation-bearing library now clean.**

**Repair taxonomy (locked — reuse for any future citation audit):**
- **Wrong ID, real paper exists** → swap to verified correct ID (re-fetch + confirm title+authors at write time).
- **Metadata drift** (right paper/link, wrong displayed journal/year/authors, or placeholder authors) → fix displayed metadata, keep the correct link.
- **Wrong PMC** → correct, re-verified.
- **Fabricated (no real paper matches the claim):** (a) claim covered by another verified cite on the page → drop the ref, repoint/renumber the dependent inline `[n]` marker; (b) claim load-bearing and NOT covered elsewhere → strip the fake ID, keep the claim, **FLAG for Mark** — never invent/approximate a PMID, never silently delete a claim.
- **Weak/predatory source** → replace with a peer-reviewed source supporting the same claim (NCBI-verified); if none, drop + soften/remove the claim.

**Batch ledger:**

| Batch | Pages | Commit | Notes |
|---|---|---|---|
| 1 | 7 (retatrutide, sermorelin, igf-1-lr3, tb-500, kpv, selank, glow) | `6545427` | kpv clean; 2 fabricated refs dropped + repointed |
| 2.1 | 10 (bpc-157, semaglutide, tirzepatide, follistatin, ipamorelin, pt-141, aod-9604, melanotan-ii, nad-plus, semax-selank) | `4d08516` | flagships; bpc-157 had a fabricated nature.com DOI (physics paper) |
| 2.2 | 10 (semax, klow, pt-141-oxytocin, wolverine-stack, cardiogen, dsip, epitalon, kpv-bpc-157, mk-677-ipamorelin, semaglutide-bpc-157) | `f576dc2` | cardiogen clean; write-time check caught a missed page + an off-by-one that looked fabricated but was real |
| 2.3 | 7 combo/GH pages (tirzepatide-bpc-157, sermorelin-ipamorelin, tesamorelin-ipamorelin, tesamorelin, cjc-1295-dac-ipamorelin, cjc-1295, gh-stack, ss-31, thymogen, vip) | `2977305` | — |
| 2.4 (final) | 6 of 11 audited (nad-mots-c-5-amino-1mq, pinealon, thymosin-alpha-1, mots-c, mk-677, ghk-cu) | `acf7924` | 5 audited clean (aod-9604-mots-c, cortagen, cagrilintide, cagrisema, 5-amino-1mq) |
| pinealon | 1 | `f6822f2` | NEEDS-YOUR-CALL resolved — R4 (Linkova PCNA/p21, non-PubMed-indexed, uncovered) **dropped**; markers renumbered to clean [1]–[7] |

Acceptance held on every batch: every cited PMID/PMC re-resolves to a title+author-matching paper; no placeholders/weak sources remain; `tsc --noEmit` + `npm run build` clean; staged-paths-only; sitemap lastmod churn reverted. **Zero genuine "no-source" claims left stranded; zero PMIDs invented.**

### 3. ⭐ ROOT-CAUSE LEARNING + mandatory pre-publish citation gate (DURABLE FIX)

**Root cause:** AI-generated peptide profiles were shipped with citations that were **never verified against NCBI at build time.** The model produced plausible author/title/journal strings paired with plausible-but-wrong PMID/PMC digits. Because the *text* read as legitimate and on-topic, nothing flagged it until an ID was actually resolved. This is a systemic failure mode of AI-written reference lists, not a one-off.

**LOCKED GATE — every AI-written or AI-edited profile that cites literature must pass NCBI title+author verification BEFORE it ships.** No citation goes live unverified. Specifically, any CC profile-build or citation-touching prompt must include, as an acceptance check:

> Every cited PMID/PMC must resolve via NCBI E-utilities to a record whose **title + first authors match the claim on the page**. Re-fetch and confirm each ID **at write time** — never trust a remembered, model-generated, or audit-listed ID. Never invent or approximate an ID. Fabricated/unverifiable cites follow the repair taxonomy (re-source → drop+repoint → flag); a load-bearing uncovered claim is flagged, never silently kept or deleted.

**Reusable verification harness (CC pattern, proven across all 5 batches):** batch-resolve every PMID/PMC through NCBI E-utilities (esummary), compare returned title/authors against the page's claimed text, then do a **second write-time confirmation** as each edit is applied (this second pass repeatedly caught errors the first audit missed — off-by-one PMIDs, a page that silently didn't get written, metadata that named the wrong authors for a correct link). Treat this two-pass resolve-then-reconfirm as the standard for any citation work going forward.

**Generalize beyond peptides:** the same gate applies to any future AI-written content that cites sources — supplement profiles, blend/stack pages, /news posts, bioregulators. If it cites a paper, the ID is verified at write time or it doesn't ship.

### 4. ✅ Findings A & B (from v8) — SHIPPED

- **Finding A (OG/Twitter image routes):** `X-Robots-Tag: noindex` added via `next.config.js headers()` on `/:path*/opengraph-image` + `/:path*/twitter-image` (sitemap was already clean — next-sitemap exclude+transform already dropped them; verified). Commit `2afa710`.
- **Finding B (legacy URLs):** the 4 legacy redirects already existed but emitted **308**; converted to explicit **301** → canonical `/peptides/<slug>` (/research/follistatin, /research/tb-500, /tirzepatideresearch, /tesamorelin). None in sitemap; no internal links referenced them. Commit `6c4c563`.

Both remain **permanent-exclude** from Request-Indexing (§5 carried forward). These plus the 5 citation commits = the unpushed/just-pushed stack this session.

### 5. ✅ Thin-content depth task — RETIRED

The v7/v8 "thin-content peptide cluster + CC depth task" (retatrutide, sermorelin, igf-1-lr3, tb-500, kpv, selank, glow) is **closed, not deferred.** The pages were already deep; the premise was stale. Do not re-open or re-request these as a depth pass. (Their citations were the actual issue, now fixed in Batch 1.)

---

## Carried forward from v8 (June 18) — UNCHANGED unless noted

- **Bucket-driven Request-Indexing routine** (v7 §2, amended v8 §4: exclude image + legacy routes before requesting). Still the standing weekly/weekend GSC routine.
- **Request-Indexing LOG** (v8 §5): the 6/18 pending eleven + 6/17 pending eleven remain off-limits until their ~30-day windows clear. **Amend:** the 7 "thin profiles" noted there no longer await a depth pass (task retired, §5 above) — their fix shipped as citation repair.
- **Permanent-exclude (never request):** all `*/opengraph-image` + `*/twitter-image` routes; legacy/off-pattern URLs (`/research/*`, `/tirzepatideresearch`, bare `/tesamorelin`, `www.` variants — **now 301'd**, Finding B shipped); `/compare/retatrutide-vs-semaglutide`; `/coupons/particle-peptides`; `/coupons/fusion-peptide`.
- **Core diagnosis unchanged: position/CTR, not indexing.** Real not-indexed content pool is small. Don't manufacture quota usage on noise.
- `/compare/retatrutide-vs-semaglutide` self-canonical-vs-consolidation decision still pending.
- Vendor coupon cross-link rollout complete (21/21); ~525 internal `/peptides/` links.

*(v6/v5 items — sitemap pollution fix, 3-phase cleanups, www→apex, bioregulator cluster — carried by reference; see v7/v8.)*

---

## 📌 Open items after this session

- **Push the stack** (Mark's call / done): 2 SEO commits (`2afa710`, `6c4c563`) + 5 citation commits (`6545427`, `4d08516`, `f576dc2`, `2977305`, `acf7924`, `f6822f2`). PP auto-deploys on push to main.
- **Apply the §3 citation gate** to every future AI-written profile/news/supplement/blend prompt (blend-stack buildout especially — it's the next big content workstream).
- Resume the standing weekend GSC query-mining routine for the actual lever (position/CTR): Bucket A page-1-zero-click rewrites, Bucket B buried/depth, affiliate-acquisition list.

---

**Cross-ref:** PP_BIOREGULATORS v1 · PP_MASTER v15 (+ Addendum v3) · PP_X_POSTS v34 · PP_VENDOR_PAGES v2 · SCS_MP (+ Addendum: Repo Layout v1) · WL_MASTER v2.x.

---

## 📅 Changelog
**v9 (June 19, 2026):** Logged the site-wide **citation-integrity crisis + 5-batch repair** (all 47 citation-bearing peptide pages now NCBI-verified). Recorded the **misdiagnosis** (the "thin-content" 7 were already deep; hallucinated PMIDs were the real defect) and **retired the thin-content depth task**. Closed **Findings A & B** (shipped: `2afa710` noindex, `6c4c563` 301s). Banked the **root-cause learning + mandatory pre-publish NCBI citation-verification gate** and the reusable two-pass resolve-then-reconfirm harness. Resolved the **pinealon NEEDS-YOUR-CALL** (uncovered unsourceable claim dropped). Supersedes v8.
**v8 (June 18, 2026):** Logged the 6/18 CINC run (quota hit at #12). Surfaced Findings A (OG/Twitter image routes) + B (malformed legacy URLs). Refined routine to exclude image + legacy routes; expanded permanent-exclude; corrected CINC's "continue image routes" note. Superseded v7.
**v7 (June 17, 2026):** Logged the 6/17 CINC run; added the standing bucket-driven Request-Indexing routine + Log; logged the (now-retired) thin-content cluster. Superseded both v6 files.
