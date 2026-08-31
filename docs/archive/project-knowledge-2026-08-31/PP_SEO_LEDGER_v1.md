# PP SEO — INDEX-STATUS LEDGER — v1

**Status:** ACTIVE OPERATIONAL TRACKER — the single per-URL index-status record + CINC-run log.
**Created:** June 19, 2026.
**Pairs with:** PP_SEO (narrative/strategy + diagnosis) and its Request-Indexing LOG. This ledger is the *operational* layer — it exists so we **stop re-doing the same GSC checks**.

---

## ⭐ WHY THIS EXISTS (the efficiency fix)

We kept asking CINC to re-pull buckets and re-inspect the same URLs because nothing persisted per-page status between runs. **Proven 6/19:** the GSC "Discovered/Crawled – not indexed" snapshot was dated **6/11 (8 days stale)**; when CINC live-inspected 11 "not indexed" candidates, **10 were already indexed.** A maintained ledger skips that wasted pass.

**Two hard rules this ledger encodes:**
1. **GSC bucket reports lag ~8 days — do NOT trust them as current status.** Live **URL Inspection** is truth. Always record the date + method of a status.
2. **Every CINC GSC run READS this ledger first** (skip anything already ✅ Indexed or ⏳ Pending) **and WRITES its findings back** (Section E + status moves). The ledger accretes verified status so the real work pool only shrinks.

---

## 🗂️ Status legend

| Mark | Meaning |
|---|---|
| ✅ **INDEXED** | Confirmed via live URL Inspection (date recorded). Do not re-check or re-request. |
| ⏳ **REQUESTED — PENDING** | Indexing requested; awaiting crawl. ~30-day re-request window. Do not re-request before window clears. |
| 🔵 **KNOWN-NOT-INDEXED** | Confirmed not indexed, not excluded — **eligible to request.** |
| ⛔ **EXCLUDED-BY-DESIGN** | Should not / cannot be indexed; reason recorded. **Never request.** |
| ❓ **UNVERIFIED** | In the sitemap but not individually status-checked yet. Status unknown — don't assume. |

> Sitemap baseline (6/19): `sitemap.xml` + `sitemap-0.xml`, **167 discovered URLs**, last read 6/19, Success, no errors. Indexed (GSC overview, stale 6/11): 147. Not-indexed pool (stale 6/11): 101 — but ~40 of that is image-route noise now being noindex'd, and much of the rest is already indexed per live checks. **Real not-indexed *content* pool is small** (PP core diagnosis: position/CTR, not indexing).

---

## A. ✅ CONFIRMED INDEXED — verified live 6/19/2026

These were live-inspected via GSC URL Inspection on 6/19 and returned "indexed." **Do not re-check or re-request.**

| URL | Verified | Method |
|---|---|---|
| /news/eco2026-oral-glp1-recap-may-2026 | 6/19 | URL Inspection |
| /news/fda-503b-glp1-bulk-compounding-2026 | 6/19 | URL Inspection |
| /peptides/tirzepatide | 6/19 | URL Inspection (distinct from excluded /tirzepatideresearch) |
| /peptides/melanotan-i | 6/19 | URL Inspection |
| /peptides/vip | 6/19 | URL Inspection |
| /supplements/spermidine | 6/19 | URL Inspection |
| /supplements/l-citrulline-malate | 6/19 | URL Inspection |
| /supplements/lions-mane | 6/19 | URL Inspection |
| /supplements/maca-root | 6/19 | URL Inspection |
| /coupons/synthesis-peptides | 6/19 | URL Inspection |
| /peptides/garcinia-cambogia *(supplement)* | 6/17 | Indexed-on-recrawl (logged v7) |

---

## B. ⏳ REQUESTED — PENDING (do not re-request before window clears)

| URL | Requested | Window clears ~ | GSC diagnosis at request | Notes |
|---|---|---|---|---|
| /news/amgen-maritide-glp1-gip-explainer-2026 | **6/19** | ~7/19 | "Duplicate without user-selected canonical" | **Root cause found:** canonical was ABSENT when Googlebot crawled 6/14 → Google assigned an external canonical (`marcustheatres.com`) → excluded. Canonical is **now present + correct live** (matches indexed articles). Re-crawl requested; should index on its own URL. *(Open: CC checking whether news-route canonical is robustly slug-derived so this can't recur — result pending.)* |
| /peptides/mk-677 | 6/18 | ~7/18 | Crawled – not indexed | content page |
| /peptides/follistatin | 6/18 | ~7/18 | Crawled – not indexed | content page |
| /supplements/fish-oil | 6/18 | ~7/18 | Crawled – not indexed | still not indexed as of 6/19 live check; within window |
| /supplements/glutamine | 6/18 | ~7/18 | Crawled – not indexed | content page |
| /hybrid-rockstar/support | 6/18 | ~7/18 | Discovered – not indexed | app support (low value) |
| /strength-cycle/support | 6/18 | ~7/18 | Discovered – not indexed | app support (low value) |
| ⚠️ /research/tb-500 | 6/18 | — | Crawled – not indexed | **Mistake — do not repeat.** Now ⛔ EXCLUDED (301'd, Finding B). Moved to Section C. |
| /peptides/retatrutide | 6/17 | ~7/17 | Crawled – not indexed | **re-verify live next run** — may already be indexed |
| /peptides/sermorelin | 6/17 | ~7/17 | Crawled – not indexed | re-verify live next run |
| /peptides/igf-1-lr3 | 6/17 | ~7/17 | Crawled – not indexed | re-verify live next run |
| /peptides/tb-500 | 6/17 | ~7/17 | Crawled – not indexed | re-verify live next run |
| /peptides/kpv | 6/17 | ~7/17 | Crawled – not indexed | re-verify live next run |
| /peptides/selank | 6/17 | ~7/17 | Crawled – not indexed | re-verify live next run |
| /peptides/glow | 6/17 | ~7/17 | Crawled – not indexed | re-verify live next run |

> ⚠️ **Gap to close:** the 6/17 batch was "eleven" but only **7 are captured here** (named in available docs). The other ~4 aren't recorded — recover them from GSC's request history or the v7 LOG and add them, or treat the 7 as the known set.
> 💡 **High-value next action:** given today's finding that most "not indexed" pages were actually indexed, **live-inspect the entire 6/17 + 6/18 pending list next run** — several are likely ✅ now and can be moved out of Pending, shrinking the tracked pool.

---

## C. ⛔ EXCLUDED-BY-DESIGN — never request (reason recorded)

All confirmed **live as of 6/19** (deploy verified: commits `2afa710` noindex + `6c4c563` 301s are on origin/main and serving).

| URL pattern | Disposition | Reason |
|---|---|---|
| `/coupons/[vendor]/opengraph-image` (ALL vendors) | 200 + `X-Robots-Tag: noindex` | Dynamic OG card-image endpoint, not a content page. ~40 of these flooded the "Discovered" bucket. Google correctly omits them. *(Finding A, `2afa710`.)* |
| `/coupons/[vendor]/twitter-image` (ALL vendors) | 200 + `noindex` | Same — Twitter card-image endpoint. |
| `/research/*` (e.g. /research/tb-500, /research/follistatin) | **301** → `/peptides/[slug]` | Legacy path; canonical is `/peptides/[slug]`. *(Finding B, `6c4c563`.)* |
| `/tirzepatideresearch` | **301** → `/peptides/tirzepatide` | Concatenated legacy URL. |
| bare `/tesamorelin` | **301** → `/peptides/tesamorelin` | Bare legacy slug. ⚠️ **NOT the same as `/peptides/tesamorelin`**, which is a real indexable page (see Section D). |
| `www.` variants (all) | 308/301 → apex | Host canonicalization. |
| `/compare/retatrutide-vs-semaglutide` | redirect → 3-way compare | Consolidated. *(Self-canonical-vs-consolidation decision still pending in PP_SEO.)* |
| `/coupons/particle-peptides` | redirect | Retired vendor. |
| `/coupons/fusion-peptide` | redirect | Retired vendor. |

---

## D. 🔵 KNOWN-NOT-INDEXED / ❓ UNVERIFIED — to check or request

**🔵 Eligible to request (confirmed real pages, not yet confirmed indexed):**
| URL | Note |
|---|---|
| /peptides/tesamorelin | **Real canonical page — should index.** Appeared in Crawled-not-indexed (6/11). Do NOT confuse with the excluded bare `/tesamorelin`. Live-inspect next run; request if still not indexed. |

**❓ UNVERIFIED pool:** the remaining sitemap URLs (~167 total minus the ~25 with a status above) have **not been individually status-checked**. Do not assume their state. They get classified as CINC live-inspects them over future runs (or as they surface in buckets). **Don't guess — verify.**

*Known content surfaces not yet individually ledgered:* the full `/peptides/` library (~48 profiles), the `/supplements/` set, `/bioregulators`, `/compare/*`, `/news/*`, `/coupons/[vendor]` pages, support pages. Most are presumed indexed (PP's core pool is healthy) but only the ones in Section A are *confirmed*.

---

## E. 📒 CINC RUN LOG (chronological — so we never repeat a run blind)

**6/19/2026 — Run 3 (validate + request, post-deploy-confirm):**
- Deploy confirmed live first (CC: all 8 SEO+citation commits on origin/main, Vercel Ready; 301s + image noindex + citation fixes all serving). CINC's earlier "old behavior" read was **stale edge cache**, not a failure.
- Started **Validate Fix** on 2 buckets: "Page with redirect" (9 URLs) + "Excluded by 'noindex' tag" (1 URL). Results land in a few days.
- Live-inspected 11 candidates → **10 already indexed** (Section A), **1 requested** (/news/amgen-maritide — canonical issue, Section B). Quota used: **1 of ~10–12.**
- Key learning banked: bucket snapshot was 8 days stale; live inspection is truth.

**6/18/2026 — Run 2 (request):**
- Pulled both buckets; requested 11, **hit daily quota at #12.** ~half the quota leaked to image routes (now permanent-exclude). Genuine content requested: mk-677, follistatin, fish-oil, glutamine (+ 2 app-support, +1 legacy mistake /research/tb-500).
- Surfaced Finding A (image routes) + Finding B (legacy URLs) → both since fixed + deployed.

**6/17/2026 — Run 1 (request):**
- Requested 11 (quota not hit). Sitemap 167 confirmed. garcinia-cambogia resolved (indexed on recrawl). Logged the (later-retired) "thin-content" cluster.

---

## F. 🔁 STANDING PROTOCOL — every CINC GSC run follows this

1. **READ this ledger first.** Build the skip-set: everything ✅ INDEXED (Section A) + everything ⏳ PENDING still in-window (Section B) + everything ⛔ EXCLUDED (Section C). Never request or re-check those.
2. **Pull the live buckets** (Crawled / Discovered – not indexed) — but treat counts as ~8 days stale.
3. **Cross-reference** each surfaced URL against the ledger. For anything not already classified, **live-inspect it** (URL Inspection) to get *current* truth — don't trust the bucket label.
4. **Request indexing** only for 🔵 KNOWN-NOT-INDEXED genuine content pages, up to daily quota (~10–12). Respect Section C excludes absolutely.
5. **Opportunistically re-verify** a slice of the ⏳ PENDING list each run — many resolve to ✅ silently (as 10/11 did on 6/19). Move resolved ones to Section A.
6. **WRITE BACK:** append a Run Log entry (Section E) and update every URL's status (A/B/C/D). Deliver the updated ledger as the new version.

**CINC report → ledger format (so updates are drop-in).** End every CINC GSC prompt with: *"Report (a) each URL inspected + its live status, (b) exactly which URLs you requested (verbatim), (c) which buckets you validated, (d) anything that moved from not-indexed → indexed."* That output maps directly into Sections A/B/E.

---

## 📅 Changelog
**v1 (June 19, 2026):** Created. Seeded with verified status from the 6/17–6/19 CINC runs: 11 confirmed-indexed (Section A), 14 requested-pending (Section B, incl. maritide canonical case), the full excluded-by-design registry with reasons (Section C, deploy-confirmed live), the tesamorelin canonical-vs-bare distinction (Section D), the 3-run CINC log (Section E), and the read-first/write-back standing protocol (Section F). Open gaps flagged: 4 unrecovered 6/17 URLs; the unverified sitemap remainder; pending CC result on news-route canonical robustness.

---

**Cross-ref:** PP_SEO (narrative + diagnosis) · PP_X_POSTS · PP_MASTER (+ addenda) · SCS_MP.
