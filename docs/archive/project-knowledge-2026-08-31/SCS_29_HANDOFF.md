# SCS 29 — HANDOFF

**From:** SCS 28 (Aug 3–4, 2026)
**Purpose:** Resume point. Read this first, then the ref docs it points at.

---

## 🔴 START HERE — outstanding CC prompts

The CC queue below is the live work. Items 1–6 shipped in SCS 28; **7–13 are outstanding.**

| # | Prompt | Status |
|---|---|---|
| 1 | Homepage sub-headline rewrite | ✅ Done — live |
| 2 | Sitewide count derivation + `check:counts` guard | ✅ Done — live |
| 3 | Homepage `<title>` — report + propose | ⏳ **Sent, never reported. Re-send.** |
| 4 | Amino Club re-pull (GLP-2/GLP-1 decode) | ✅ Done — live |
| 5 | App Store link + `/app` metadata audit | ✅ Done — reported |
| 6 | `/app` retitle + App Store link canonicalization | ✅ Done — live |
| **7** | **99 Purity + BioPure price-pull retry** | ⬜ **NEXT** |
| **8** | **Legendary verification** — COA claim vs earlier research | ⬜ |
| **9** | **`/news` article** — FDA advisory vote (time-sensitive) | ⬜ |
| **10** | **Date-in-headline audit** — `/best-peptide-vendors` H1 says July | ⬜ |
| **11** | **Trailing-slash redirect** — 11 supplement URLs | ⬜ |
| **12** | **OG image sitewide report** — ~150 pages serving squares | ⬜ |
| **13** | **Favicon requirements check** | ⬜ |

**Parked, not queued:**
- `data-nosnippet` on homepage app panel — waiting for a Google recrawl first
- Licensed Peptides price pull — in `ONBOARDING_BACKLOG`, age counter running

**#3 is blocked on nothing** — it was sent and no report came back. The homepage title still reads *"Prof. Peptide — Research Guide for Peptides and Natural Supplements"*, leading with the deprioritized section. Suggested replacement: **`Prof. Peptide — Peptide Research, Prices & Discount Codes`** (52 chars).

**#9 is the time-sensitive one.** The FDA vote was July 23–24; it's now ~12 days old and `/news` last published June 16.

---

## Prompt texts for the outstanding items

### #7 — 99 Purity + BioPure retry

```
Retry the price pull on 99-purity-peptides and biopure-peptides.
Both are marked cinc/manual because Cloudflare blocks their Store
API — but that same conclusion was reached about Crush and Spartan,
and both turned out to be reachable.

── FIRST: RE-READ WHAT YOU DID BEFORE ──
Both unblocks came from checking what the DATA was, not what the
page looked like:

  Crush Research   — "client-rendered, catalog unreachable" was
                     wrong. The catalog was server-rendered into
                     the Next.js RSC flight. Adapter: nextjs_feed
  Spartan          — "prices are ranges" was a UI artifact.
                     Per-variant prices sat in public Gatsby
                     page-data. Adapter: gatsby_pagedata
  Modern Aminos    — genuinely gated; solved with a session cookie
  Biocollex        — stale permalinks; solved with HEAD-follow at
                     pull time

Read those adapters and their registry notes before starting. The
pattern is that a blocked API doesn't mean a blocked catalog.

── THEN, FOR EACH VENDOR ──
1. What platform is it actually on? The detector called biopure
   "woo" and it 403s even the homepage to curl.
2. Is the catalog present in the served HTML — JSON-LD, RSC flight,
   __NEXT_DATA__, Gatsby page-data, an embedded storefront JSON, or
   server-rendered markup? Quote a fragment if so.
3. Is there a same-origin API route the page itself calls? Crush's
   /stock was one.
4. Does a browser-grade fetch get through where curl doesn't? You
   used WebFetch successfully on biopure earlier — say whether that
   path is repeatable inside a pull.
5. What's parseable per product: name, size, price, stock, slug.

⚠️ PUBLIC PAGES ONLY. No keys, no database enumeration, no probing
authenticated endpoints. That constraint stopped the first Crush
attempt and it stands.

⚠️ If a vendor genuinely needs credentials, say so plainly rather
than working around it.

⚠️ 99-purity's grid must compute "after 10% code" per Mark's
published figure even though their dashboard says 15%. Don't
"correct" it.

Report both. Don't build an adapter until I've seen what's
reachable.
```

### #8 — Legendary verification

```
Legendary Peptides replied with answers. Verify each before
enriching their facts.

THEIR CLAIMS:
1. COAs are listed on the product page itself, with a direct link to
   Freedom Diagnostics for verification
2. The six-point panel is run by Freedom Diagnostics
3. Fentanyl screening on Asia-sourced material is newly added and
   currently documented at
   www.legendarypeptides.com/landing.php

⚠️ Claim 1 contradicts your own research. You reported "no COA
library, no named lab, no vendor-stated purity" and left facts
empty. Either COAs were added since, or you looked in the wrong
place. Resolve it — open actual product pages and report what's
there.

VERIFY, then report before applying:
· Open at least three product pages. Is a COA present on each? Is
  there a Freedom Diagnostics verification link? Quote what you
  find and give the URLs.
· Does the certificate name Freedom Diagnostics as the issuing lab?
· Is Freedom Diagnostics accredited — ISO/IEC 17025 or equivalent?
  Check their own site, not Legendary's description.
· Fetch legendarypeptides.com/landing.php. What does it say about
  fentanyl screening? Is it every Asia-sourced batch, and does the
  result appear on the COA?
· Does any page state a purity standard?

⚠️ Their site 403s curl — you got through with WebFetch before.

── THEN, IF VERIFIED ──
Enrich their facts object:
  coa: "per-product"
  labName: "Freedom Diagnostics"
  labAccreditation: only if verified independently
  purityStandard: only if consistently stated

And revise the differentiator — currently "Third-party tested;
peptides, blends, diluents", written when they published nothing.

⚠️ Report the fentanyl finding separately. If it's documented and
every batch, that's the first vendor on the roster doing it and may
be worth more than a clause.

Report before changing anything.
```

### #9 — /news article (FDA vote)

```
Write and publish a /news article on the FDA advisory committee
peptide vote. You own the research, the copy, and the code.

This restarts the news beat — the section last published June 16.

── THE STORY ──
The FDA's Pharmacy Compounding Advisory Committee (PCAC) met
July 23-24, 2026 and voted to recommend adding six peptides to the
503A Bulks List.

  BPC-157   8-6, 1 abstention   reviewed for ulcerative colitis
  KPV       8-6, 1 abstention   wound healing, inflammation
  TB-500    8-6, 1 abstention   wound healing
  MOTS-c    7-5, 2 abstentions  obesity, osteoporosis
  Epitalon  recommended
  Semax     recommended
  Emideltide (DSIP)  REJECTED

⚠️ THE FRAMING IS THE ARTICLE. These are NON-BINDING
recommendations, not approvals. The FDA must still act through
formal rulemaking — realistically into 2027 — and RFK Jr. must sign
off as HHS Secretary. NOTHING is legal to compound today that
wasn't legal yesterday.

Expect vendors and aggregators to report this as "BPC-157 is now
legal." It isn't. PP being correct where others overstate is the
entire value of this piece — lead with the distinction.

Three separate legal events keep getting conflated: removal from
Category 2, a PCAC recommendation, and actual placement on the
Category 1 compoundable list. Only the second has happened.

── ALSO COVER ──
· The committee overruled the FDA's own scientists, who
  recommended against all seven. Staff's core objection was that
  it's chemically unclear what these peptides even are.
· Conflict-of-interest reporting: all eight new appointees voted
  yes on the first three; several represent telehealth or
  men's-health clinics that sell peptides. A UC Davis researcher
  publicly questioned the panel's composition; HHS responded that
  all members passed the standard ethics review. Report both sides.
· Prior context: FDA removed twelve peptides from Category 2
  earlier in 2026; only GHK-Cu moved to Category 1.
· Louisiana SB 253 took effect August 1, 2026 — bars state
  licensing boards from prohibiting providers supplying peptides
  from FDA-registered 503A/503B facilities.

── RESEARCH STANDARD ──
Verify every figure against primary reporting. Prefer FDA meeting
materials and the docket over secondary coverage. If sources
conflict, say so in the article rather than picking one.

⚠️ Do NOT state or imply any of these compounds are safe,
effective, or approved for human use. PP's RUO position is
unchanged by a compounding recommendation.

── LINKING ──
Locked first-mention rule. First mention of each must be the
internal link:
  /peptides/bpc-157 · /peptides/kpv · /peptides/tb-500 ·
  /peptides/mots-c · /peptides/epitalon · /peptides/semax ·
  /peptides/dsip · /peptides/ghk-cu
Verify each slug exists. Report any that don't.

── BUILD ──
Mirror the existing /news article structure. Report composed title
and description with char counts. Create per-article OG routes if
news articles carry them; if they inherit, say so.

── VERIFY ──
tsc, build, check:links, check:grids, check:freshness, check:counts.
Confirm the article appears on /news and in the homepage "Latest
News" block (currently showing June 16).

Commit and push. Poll live.
```

### #10 — Date-in-headline audit

```
Sitewide audit: every month or year baked into a page TITLE or H1.

The trigger: /best-peptide-vendors shows a derived "Updated August
2026" badge and a hardcoded H1 reading "Featured Peptide Vendors
(July 2026)". Same screen, two different months.

The freshness system covers CODES_VERIFIED_DATE, the verified pills
and the coupon descriptions. It does NOT cover headings.

── REPORT FIRST ──
Find every page whose H1, title tag, or meta description contains a
hardcoded month name or year. Report per page: the exact string,
where it's set, what it should derive from.

⚠️ MONTH names AND bare years. "(July 2026)", "2026 Guide",
"Best X of 2026" — same problem.

⚠️ Include /news articles but flag them SEPARATELY. A news headline
dated to publication is CORRECT and must not be made dynamic.

⚠️ Some hardcoded dates are deliberate — "Last reviewed" stamps
assert human review and stay hand-set. Distinguish assertions of
review from stale labels.

── THEN PROPOSE ──
For the ones that should be dynamic, what should each derive from?
The verification stamp, the price-pull date, something else? They
may not all want the same source.

── THEN A GUARD ──
Recommend a check for this class. check:freshness already validates
the description budget and warns on stamp age; the natural
extension is failing the build when a rendered title or H1 carries
a month that isn't current.

⚠️ Watch false positives — news headlines and "Last reviewed"
stamps legitimately carry past months. Say how the guard
distinguishes them, or say it can't and scope it narrower.

Report all three. Don't build.
```

### #11 — Trailing-slash redirect

```
GSC reports 12 URLs under "Redirect error" — Google could not
COMPLETE the redirect. Distinct from "Page with redirect" (18, all
intentional).

11 of the 12 are /supplements/* WITH A TRAILING SLASH:
  /supplements/magnesium/        /supplements/melatonin/
  /supplements/maca-root/        /supplements/l-citrulline-malate/
  /supplements/lions-mane/       /supplements/l-arginine/
  /supplements/l-citrulline/     /supplements/glucomannan/
  /supplements/green-tea-extract/  /supplements/hyaluronic-acid/
  /supplements/garcinia-cambogia/
Plus /research (a legacy path).

All crawled May 4 — three months ago, never investigated.

REPORT:
1. What is trailingSlash set to in next.config.js? What redirect
   does a trailing-slash supplement URL actually produce? Curl one
   with -L -I and show the full chain with status codes.
2. Any redirect rule that could conflict — a rewrite, middleware,
   a Vercel-level rule, or another next.config rule touching
   /supplements/*?
3. Could a loop exist?
4. What does /research redirect to, and does it resolve?
5. Do OTHER route families behave the same? Test trailing-slash
   /peptides/*, /coupons/*, /prices/*. If only supplements break,
   that's the clue.

⚠️ May be a live misconfiguration or a long-fixed artifact of a May
crawl — the curl chain settles it.

⚠️ Do NOT assume this explains the supplements indexing problem.
The NON-slash versions crawl fine and get declined anyway — that's
a content judgment, a separate issue.

Report only. Don't fix until I see the chains.
```

### #12 — OG image sitewide

```
Fix the OG image shape sitewide.

Content pages still use the 1024x1024 og-image.png via seo.ts while
declaring twitter:card: summary_large_image, which expects
1200x630. Same mismatch fixed on the homepage — which was one page
out of roughly 150.

Affected: ~62 peptide profiles, ~53 supplements, ~18 comparisons,
guides, news, section hubs. Coupon pages are fine (per-vendor
cards).

── REPORT FIRST ──
1. Which route families read the seo.ts default image? Counts.
2. Is a single seo.ts change enough, or do families override it?
3. Can they route through the existing brand-card generator, and
   what would it render for a content page — generic brand card, or
   something page-specific?

⚠️ Page-specific cards would be better (a card naming the compound
beats a generic one when someone shares /peptides/bpc-157), but
that's a bigger build. Report both options with costs — I'd rather
see the choice than have it made.

⚠️ NO NUMBERS on any card. X caches per URL and can't be
force-refreshed, so any count becomes permanently stale.

Report, don't build.
```

### #13 — Favicon check

```
Verify the favicon meets Google's SERP requirements.

Google requires: a square icon whose dimensions are a MULTIPLE OF
48px (48x48, 96x96, 144x144...), reachable by Googlebot, in a
supported format, declared via <link rel="icon"> on the HOMEPAGE.

Report:
1. What icon files exist, and their exact dimensions?
2. What <link rel="icon"> tags does the live homepage emit? Curl it.
3. Is anything in robots.txt blocking the icon paths or /_next/?
4. Does the declared file resolve — 200, correct MIME type?

⚠️ A favicon that isn't a 48px multiple is a known reason Google
falls back to a generic globe or keeps a cached icon.

NOTE: the new favicon IS now showing in Google results as of Aug 4,
so this may already be resolved. Confirm and close if so.

Report only.
```

---

## What shipped in SCS 28 — quick state

**PP roster: 41 active vendors.** Added this session: NOVA Labs (UAE, first Middle East vendor — required extending the region union with `AE`), Legendary, BioPure, Licensed Peptides. Nura and 99 Purity already existed.

**Price grids:** 36 vendors with published pricing. NOVA is OFF `/prices` pending the currency decision (see PP_PRICES v4).

**Homepage:** fully derived counts, definitional lead sentence, 1200×630 OG card, retitled `/app`.

**HR:** v1.0.3 build 16 **submitted to App Store review.** Privacy policy rewritten and live; App Privacy label published and complete; review notes and promotional text saved.

---

## Two things that need a decision, not a prompt

1. **`/vendor-testing-index` noindex was lifted** — it now indexes. It carries 40 vendors registry-derived and is linked from `/coupons`. Worth requesting indexing on it.

2. **Google has not recrawled the homepage since July 28.** Every homepage change since — the definitional sentence, both hero rewrites, the OG card — is unseen. Don't judge the snippet fix or reach for `data-nosnippet` until a crawl lands.

---

## Ref docs produced this session

- `SCS_29_HANDOFF.md` (this doc)
- `PP_PRICES_v4.md` — price-pull data integrity, the big one
- `SCS_MP_v6_22_ADDENDUM.md` — new studio-level rules
- `PP_MASTER_v17.md` — vendor roster + site state
- `HR_MASTER_v15.md` — App Store submission record
- `PP_X_POSTS_v46.md` — Amino Club set + Retatrutide-first rule
