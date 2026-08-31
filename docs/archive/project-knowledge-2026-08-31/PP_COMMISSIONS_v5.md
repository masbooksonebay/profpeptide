# PP COMMISSIONS — v5

**Status:** ACTIVE. Full replacement, supersedes v2.
**Date:** August 7, 2026
**Scope:** how PP earns, how to read affiliate dashboards, and what's actually known about attribution.

---

## 1. 🔴 THE READING RULE — MOST DASHBOARDS DEFAULT TO ONE DAY

**Set the widest available date range before reading anything.** Start before the account creation date.

Limitless Biotech was recorded as "no commission activity" for months. Widened to Oct 2025 – Aug 2026, the same account shows **103 clicks, 4 conversions, $144.41 revenue.** Nothing was broken. Every report in Everflow defaults to today.

⚠️ **Exception worth knowing:** GoAffPro defaults to `Jan 1 → today`, not 30 days, and has **no date filter at all on the Payments tab**. Nothing is hidden there by a narrow window.

---

## 1b. 🔒 HOW CINC GETS INTO THE DASHBOARDS

Established across the August 8 sweeps. Give CINC this section verbatim.

### The GoAffPro vendor switcher — one session covers ~16 programs

A dropdown at the top right of any GoAffPro dashboard lists every approved program. Selecting one switches the whole dashboard to that vendor. If it routes to the vendor's storefront instead, use the browser back button.

⚠️ **The switcher is an INCOMPLETE index, not a per-account list.** EZ, Glacier and Vital Core are on the *same* account (ID 18589083) but don't appear in it — EZ isn't even in its own dropdown. There is no second account to find.

⚠️ Several names appear multiple times. Three "Treasure Coast" is really **two** — one live, one legacy stuck on "under verification." Three "Modern Aminos" are **regional storefronts**, not duplicates: `.com` live, `.eu` and `.ca` dormant with no coupon attached.

### Chrome auto-sign-in

Under `chrome://settings/passwords`, **Sign in automatically** fills *and submits* on navigation — no popup, no click. Disable the **iCloud Passwords extension** so Apple's prompt doesn't compete.

⚠️ **CINC will not click Login or submit a password**, even pre-filled by Chrome. That is a fixed line. Sessions must already be live.

### Portals that are live but look logged out

Several render a logged-out landing page while the session is actually valid on a deeper path. **Always try the inner path before concluding it's walled:**

| Vendor | Landing page says | Real path |
|---|---|---|
| **Amino Club** | empty body at `/partner-program` | `/partner-program/account/affiliate` |
| **Midwest** | `/affiliate/login` shows a form | `/affiliate/dashboard` loads directly |
| **Spartan** | `/affiliates/` shows logged-out | `panel.php` |
| **Nura** | — | embedded at `/partner-with-us/` |
| **Crush Research** | "no portal found" | `edwilaxvnipm.goaffpro.com` |

### Everflow

⚠️ The link under **My Account** is a **partner RECRUITMENT** link (`/affiliate/signup/?p=…`) — it signs people up *under* you. The real tracking link is under **Offers** or **Tracking & Asset Generator**.

### What CINC will NOT do — don't ask

Type or submit a password · complete a registration form · accept a terms/age attestation without explicit approval · request a payout · change any setting.

⚠️ Google SSO is usable **if** it signs in without a password prompt. Approve it explicitly per vendor.

---

## 1c. 🔴 A FAILED LOGIN IS ABOUT OUR ACCESS — NOT THE ACCOUNT

**This rule cost two wrong emails and two wrong diagnoses on August 8. Read it before drawing any conclusion from a dashboard CINC couldn't reach.**

> **CINC being unable to open a portal says NOTHING about whether the account exists, whether it's approved, whether attribution is working, or whether money is owed.** Report UNREACHABLE and stop. Never infer account state from an access failure.

### What went wrong, twice

**Almighty.** CINC found `/affiliate-area/` redirecting to `/affiliate-registration/` and concluded "no affiliate account exists — this is why 589 clicks produced zero attribution." **Wrong.** The real portal is `/affiliates/`, a path never tried. The account is **Approved, affiliate ID 1230**, payment email on file, and the link matches PP's published `?sld=profpeptide` exactly.

**Royal.** CINC found the Google SSO button non-functional and every guessed path 404ing, then concluded "no portal exists, `urunwnog` is almost certainly inert, Royal traffic is very likely unattributed." **Wrong on all three.** The portal is at **`/affiliates/#signup`**. `urunwnog` is Royal's **genuine** token — shown in Royal's own dashboard. And Royal is performing: **144 referrals, 9 orders, $2,323.61 sales, $214.29 pending** against a $100 minimum.

### The rule

| ❌ Never conclude from a failed login | ✅ What to report instead |
|---|---|
| "No affiliate account exists" | "Could not reach the portal at these paths: …" |
| "Attribution is broken" | "Unable to verify attribution — no dashboard access" |
| "The token is wrong / inert" | "Could not confirm the token from the portal" |
| "Traffic is unattributed" | "Unknown — requires dashboard access" |
| "$0 owed" | "Unknown — not read" |

⚠️ **Try `/affiliates/` before concluding anything.** It's the real path on **both** vendors CINC misdiagnosed, and it isn't the WordPress-plugin convention (`/affiliate-area/`) that gets guessed first.

⚠️ **A redirect to a registration page does NOT mean no account.** Platforms redirect for many reasons — wrong path, expired session cookie, a role check on that specific route.

⚠️ **A broken SSO button is a broken button.** Nothing more.

---

## 1d. ❌ DASHBOARDS NOT YET REACHED — August 8

| Vendor | URL tried | Blocker |
|---|---|---|
| **Almighty** | ~~`/affiliate-area/`~~ | ✅ **RESOLVED — real path is `/affiliates/`.** Account **Approved**, ID **1230**, payment email `profpeptide@gmail.com`, link `?sld=profpeptide` matches PP exactly. Portal offers **store credit** as a payout option. |
| **Royal** | ~~`/my-account/`~~ | ✅ **RESOLVED — real path is `/affiliates/#signup`.** Token `urunwnog` is **genuine**, shown in Royal's own portal. **144 referrals · 9 orders · $2,323.61 sales · $214.29 pending** vs a $100 minimum — **collectable now.** Payout in USDC/USDT. |
| **Ignite** | `/affiliate-area/` | ⚠️ Site is **ALIVE** — an earlier "dead domain" finding was wrong. Blocked by a mandatory researcher/age attestation needing Mark's approval. |
| Behemoth | `/affiliate-area/` | Login form. `/my-account/` offers Google SSO. ⚠️ **Try `/affiliates/` first.** |
| PureRawz | `/affiliate-area/` | Login form. ⚠️ **Try `/affiliates/` first.** |
| Ascension | `/partner-area/` | Login form. ⚠️ **Try `/affiliates/` first.** |
| Vital Core | `vitalcoreresearch.goaffpro.com` | Logged out. Password form + Google/Facebook SSO |
| Licensed Peptides | `/my-account/` | Login form. ⚠️ **Try `/affiliates/` first.** |
| BioCollex | `/affiliate-area/`, `/my-account/` | No portal found at those paths. ⚠️ **Try `/affiliates/`** — PP's link uses `?ref=profpeptidehq`, so a program exists. |
| Modern Aminos | — | Customer session live, no affiliate tab found |

> ⚠️ **Every "no portal exists" above is provisional.** Two of them turned out to be wrong. `/affiliates/` was never tried on any of these.

---

## 1d. ⚠️ SENSITIVE DATA EXPOSED IN SESSION

**EZ Peptides' Settings/Payments tab renders full bank account and routing numbers UNMASKED.** Anyone opening that tab in a live session can read them. CINC has been instructed not to transcribe them; this is a standing note, not a resolved issue.

---

## 2. 🔴 THE UNLINKED-COUPON FAILURE — THE BIGGEST ATTRIBUTION RISK PP HAS

**A discount code can work perfectly at checkout and credit nobody.**

Confirmed on **three vendors** August 8: **Almighty, Spartan, Ignite.**

### What happens

Mark asks a vendor for a code and names the one he wants. The vendor creates it — **as a standalone store coupon.** They never bind it to the affiliate account, and from their side they did exactly what was asked. The linkage step is invisible unless someone knows to look for it.

Result: the customer gets their discount, the vendor gets the sale, **and no commission is recorded.** To the vendor it looks like traffic that didn't convert. To PP it looks like clicks with no sales. Both readings are consistent, and neither surfaces the actual fault.

> 🔴 **This is the single worst failure mode for PP's business, because code attribution IS the revenue model.** Buyers read the code in a search result or an X post, go to the vendor directly, and never touch a link. If the code isn't bound, that entire path earns nothing.

### The signature — how to spot it

| Signal | What it means |
|---|---|
| **No Coupons tab in the portal** — but the code works at checkout | Almost certainly unbound |
| A coupon section exists but shows **no code attached** | Unbound |
| All recorded referrals came via **link**, none via code | Unbound, or the code has never been used |
| High clicks, near-zero conversions, code confirmed working | Unbound |

**The contrast case: Oasis.** Its coupon `prof15` IS bound — and **46 of 47 referrals came through the coupon, not the link.** That's what a correctly-configured code produces, and it's the scale of what the unbound ones are losing.

### Confirmed status by vendor

**❌ UNBOUND — code works, no linkage:**
Almighty (589 visits, all zeros, `PROFPEPTIDE` 20% applies) · Ignite (215 visits, **no Coupons tab at all**, `PROF10` applies, all 3 referrals via link) · Spartan (`PROFPEPTIDE` applies, no coupon shown in panel)

**✅ BOUND — verified in the portal:**
Amino Club · EZ (`profpeptide`) · Oasis (`prof15`) · Glacier (`profpeptide`) · Nura (`profpeptide15`) · Real Peptides · Behemoth (`PROF10`) · Vital Core (`prof20`) · the GoAffPro network (Crush, Legendary, LA, Aero, NextGen, Peptide Giants, Treasure Coast, Swiss Chems, Mile High, PureRx, Peptidology, Modern Aminos US, NOVA)

**❓ UNCHECKED:** Ascension · PureRawz · Licensed Peptides · BioCollex · Royal · Modern Aminos EU/CA *(no coupon attached — confirmed)* · Midwest · Limitless · Particle · Peptide Partners

### 🔒 THE RULE — ON EVERY NEW VENDOR

**When a vendor issues a code, confirm it is BOUND TO THE AFFILIATE ACCOUNT — not merely that it works at checkout.**

Ask explicitly: *"Is this code linked to my affiliate account, or is it a standalone store coupon?"* A working discount proves nothing.

⚠️ **If a vendor won't link the code, the relationship isn't viable.** Code attribution is the proven mechanism; a vendor whose code doesn't attribute is funding a discount PP promotes for free. That's grounds to drop them from the site.

⚠️ **This also reframes every "clicks but no conversions" vendor.** Before concluding the traffic didn't convert, check the coupon binding.

---

**Code-based attribution is the primary mechanism.** A buyer reads the code — on X, in a search result, in an AI Overview — goes directly to the vendor, and uses it. No click, no site visit, no GSC entry.

**The evidence:** Peptide Partners generates ~51% of commission history against negligible tracked site visits.

**Consequences that follow:**
- **Zero clicks is not failure.** A visible code at position 3 that nobody clicks is working as designed.
- **The code must be correct everywhere it appears** — the page, the meta description, the OG card, X posts. A dead code in a snippet is direct revenue loss. *(Glacier's `PROF10` was live in Google's snippet AND in an AI Overview after the code changed.)*
- **A code that isn't attached to the partner account credits nobody**, even though it discounts at checkout. This is the silent failure worth checking on every vendor.

---

## 3. LIMITLESS BIOTECH — FULL DIAGNOSTIC (Aug 7, 2026)

Platform: **Everflow** (`limitlessbiotech.everflowclient.io`). Partner ID **10477**, Active, created Nov 7 2025.

**Reporting, Oct 2025 – Aug 2026:** 103 clicks · 13 duplicate · 0 invalid · **4 conversions** · CVR 3.88% · RPC $1.40 · **revenue $144.41**.

**🔴 The conversion detail contradicts the summary.** Detail returns **3 records totalling $132.18** — 05/18 $59.385, 05/28 $13.182, 06/20 $59.613. A variance of one conversion and $12.23. Re-run unfiltered, same three rows.

**🟡 Clicks run continuously Oct 2025 – Aug 2026; conversions only May and June.** Nothing Nov–Apr despite steady click volume.

**🔴 A better-paying offer exists unused.** Offer 1 "Limitless Core Affiliate Program" at **15% CPS** is what PP is on. Offer 3 "Limitless Core Affiliate Program Minty" at **17% CPS**, created July 28 — **no coupon codes attached, zero activity.**

**Coupon codes attached to offer 1:** ID 1294 `profpeptide` (created Nov 13 2025, no expiry) and ID 38 `1NWmrCa` (Nov 7 2025). The partner view exposes no discount amount, no active/inactive state, and no attribution status.

**The tracking link is correct.** PP uses `https://www.limitlesslifenootropics.com/?_ef_transaction_id=&oid=1&affid=10477` — character-for-character what Everflow generates. The empty `_ef_transaction_id=` is Everflow's own output, not a defect.

**Postbacks:** none configured. Conversions, Events and CPC all return zero records.

> ⚠️ **The link in "My Account" is a PARTNER RECRUITMENT link** (`/affiliate/signup/?p=…`) — it signs people up as affiliates under you. **It is not a customer tracking link.** The real one is under **Offers** or **Tracking & Asset Generator**.

**Email sent to their admin** covering: whether PP should move to offer 3, whether coupon-code orders attribute without a click, and the conversion variance.

---

## 4. VENDOR CODE MASTER

**Read `vendors.ts` before drafting anything. This table is a convenience copy and goes stale.**

| Discount | Vendors |
|---|---|
| **50%** | Ascension |
| **20%** | Amino Club · Almighty · Vital Core (`PROF20`) · **Real Peptides** |
| **15%** | Aero (`PROFPEPTIDE15`) · Amino X (`PROF15`) · Oasis (`PROF15`) · Purity 🇨🇦 (`PROF15`) · PureRx · Nura (`PROFPEPTIDE15`) · Biolongevity |
| **10%** | Glacier · EZ · Peptide Partners · Mile High · Peptide Giants · BioCollex · Integrative · Limitless · Spartan · Particle 🇪🇺 · 99 Purity · Ameano · Behemoth · Ignite · Midwest · Royal · PureRawz · Swiss Chems · Crush |
| **5%** | Licensed Peptides · BioPure |

**Codes are case-insensitive at checkout. PP always renders them UPPERCASE.**

**🔒 Standing preference: consolidate every vendor to `PROFPEPTIDE`.** One code across the roster — easier to remember, easier to post, no lookup before drafting. Ask when next in contact with any vendor still on `PROF10`, `PROF15`, `PROF20`, `PROFPEPTIDE10` or `PROFPEPTIDE15`.

⚠️ **A code change means reissuing any live X post carrying the old one**, and the OG card caches permanently against already-shared URLs.

---

## 5. STACKING

**🔒 Affiliate codes ALWAYS stack with a vendor's sitewide sale.** Settled — don't re-verify per vendor. A 30% sitewide plus a 20% code is **44% off**, which is a post angle, not a problem.

**The exception is a vendor's OWN circulating code.** Those sometimes don't stack, and sometimes void attribution.

| Vendor | Their code | Status |
|---|---|---|
| Licensed Peptides | `save10` — 10%, double PP's 5% | Stacks; PP earns attribution. Verified at checkout. |
| Real Peptides | 25% email-signup offer | Competes with PP's 20% once the 30% sitewide ends |
| Nura | 20% email signup vs PP's 15% | **Does NOT stack.** Do not post Nura until resolved — Mark has asked them to raise PP's code to 20% |
| PureRx | own public code | **Open since July** — does a customer using their code void PP's commission? |

---

## 6. OPEN ATTRIBUTION QUESTIONS

| Vendor | Question |
|---|---|
| **Limitless** | Move to offer 3 at 17%? Do coupon orders attribute without a click? The 4-vs-3 conversion variance. |
| **PureRx** | Commission when a customer uses PureRx's own public code? *(open since July)* |
| **Nura** | Will they raise PP's code from 15% to 20%? |
| **All Everflow vendors** | Is PP's code attached to the partner account, and does a better offer tier exist unused? |

---

## 7. VENDOR BACKLINKS

**Legendary Peptides** and **Amino X** link to their PP profile from their own sites. **More are being approached.**

That's why every coupon page has to be correct — a vendor linking to a page that misrepresents them is showing it to their own customers.

**Keep this list current.** It was recorded nowhere until August 6 and existed only in memory.

---

## 8. REFRESH PROCESS

1. **Notion is the live tracker.** This markdown is the project-folder canonical reference.
2. **Set the widest date range first.** Every number is wrong without it.
3. For a Gmail refresh: "refresh the commission tracker from Gmail."
4. For dashboards: CINC, using the template in §3 — widest range, clicks, conversions, revenue, code attachment, and **whether a higher-paying offer tier exists unused.**
5. Version bump on each refresh.

---

*Code-based attribution is the mechanism. Zero clicks is not zero revenue. Set the date range before believing any number.*

---

## 🆕 §3. NEW BOUND CODES — August 9–10, 2026

Three programs approved with **Check 0 satisfied** (coupon bound to the affiliate account, portal text: *"For every purchase someone makes using your coupon code, you get the credit"*):

| Vendor | Commission | Customer discount | Cookie | Status |
|---|---|---|---|---|
| **AMP Peptides** | 15% | 15% | 7d | ✅ Live on PP · cart-verified −$6.75/$45 |
| **Improved Peptides** | 20% | **15%** | 60d | ✅ Live on PP · cart-verified −$9.75/$65 |
| **Valkyrie Peptides** | 20% | **10%** | **180d** | 🔴 Store login-walled — page blocked |

⚠️ **Commission and customer discount are different numbers.** PP publishes the customer discount only.

⚠️ **Valkyrie is asymmetric** — highest commission, lowest reader discount. Worth requesting a raise on the customer side, since code attribution carries PP's volume.

---

## 🆕 §4. PARTICLE — CODE BINDING UNCONFIRMED

Particle created `PROFPEPTIDE` on Aug 4, described as *"for your affiliate account."* **That wording is not conclusive** — Almighty, Spartan and Ignite could all have been described the same way.

**Two reasons it needs confirming rather than assuming:**
1. Particle previously showed a €0 lifetime balance traced to a hardcoded link bypassing `?refs=18075`.
2. Particle runs on **Everflow**, where PP's portal exposes **no per-coupon binding view** — so Mark cannot self-verify the way he can on GoAffPro.

**Email drafted and ready** asking directly: does an order placed with the code, by someone who never clicked the link, credit the account? **Urgency:** Particle's page was just rewritten with the verified Liquilabs certificate detail and will drive traffic.

---

## 🆕 §5. CERTIFIED-PEP — LINK-ONLY PROGRAM

Their support reply: *"You don't need that code. That's not what you use. What you're going to be sharing is your Affiliate link and then any active code we have at that time."*

⚠️ **"Any active code we have" suggests general store codes rather than affiliate-bound ones** — which would put Certified-Pep in the same category as Almighty, Spartan and Ignite.

**Email drafted** explaining PP's traffic pattern with the Oasis evidence (**46 of 47 recorded referrals came via the coupon, not the link**) and asking for a bound code. If their platform can't bind codes, the program is link-only and effectively unattributable for PP.

**Reusable framing that works in these emails:** an unbound code means the sale happens and *neither side* can see it — a gap in the vendor's program, not a favor to PP.

---

## 🆕 §6. AUGUST 10 UPDATES

### 🔴 Amino Club — the rate is 20% FIRST ORDER, 10% RECURRING

Confirmed by Mark, Aug 10. **This is the COMMISSION structure, not the customer discount** — the reader still gets 20% off with `PROFPEPTIDE`, and nothing on the site or in the Reddit codes post was wrong.

**But it changes how Amino Club is weighed.** Its $197.54 unpaid reflects a mix of first-order and recurring, and future earnings on repeat buyers run at half the portal's headline rate.

⚠️ **CHECK WHETHER OTHER VENDORS DO THIS.** A first-order-versus-recurring split is invisible from a portal's headline number. If Real Peptides (20%), Ascension (50%), Vital Core (20%) or Improved (20%) have the same structure, the commission picture differs materially from what the dashboards show. **CINC task: read the terms page inside each top-earning vendor's portal and report which split first-order from recurring.**

### 🟡 Unlinked-coupon status — moved

| Vendor | Was | Now |
|---|---|---|
| **Almighty** | Confirmed unbound, 589 visits / zero attributed | ✅ **Says it will connect the code** — monitoring |
| **Particle** | Binding unconfirmed | ✅ **Says it will connect the code** — monitoring |
| **Spartan** | Confirmed unbound | ⏳ Emailed, no response recorded |
| **Ignite** | Confirmed unbound | ⏳ Emailed, no response recorded |

**Almighty is the one to watch** — 589 recorded visits with nothing attributed is the largest confirmed loss in the ledger. If the binding is real, that traffic converts on its own within a couple of weeks.

⚠️ **Particle's wording is still ambiguous.** Their earlier reply said the code was created "for your affiliate account," which is close to what they're saying now. The actual test is whether an order placed *without* a link click credits the account.

⚠️ **A cheaper test than waiting:** place a small order using the code without clicking the link, then check the portal. Days rather than weeks, and it's what you'd want before pulling a page.

### 🔴 Vendor backlinks — measured, and the answer is zero

CC swept **all 45 vendor homepages** (curl, raw HTML) for a link to profpeptide.com. **Zero link back.** 40 reachable and none link; 5 unreachable (glacier, legendary, peptidology, purerx, vital-core — 403/JS/timeout).

**Caveats:** homepage-only, so a link on a deeper affiliate-directory page wouldn't show; JS-rendered links are invisible to curl.

**Structural reality:** PP is the affiliate. PP links *to* vendors; vendors rarely link back to an affiliate-review site. **"Vendor backlinks as an asset" is currently unrealized at zero**, and a deeper per-site crawl is low expected value.

⚠️ **And no reliable backlink count is possible at all without Ahrefs, Semrush or Majestic.** The GSC links report isn't in the repo. If exported there, CC can parse it.

### Spartan — follow-up drafted, unsent

Three items still open: coupon binding, the **10% rate against a published 7/15/20 ladder**, and the `example.com` link bug.

**The rate ask now has evidence behind it** — Job 2 read three of Spartan's six COAs and the page names MZ Biolabs, its Tucson address, the signatory, the methods, and the observed 99.44–99.97% purity range. It also corrected an understatement in Spartan's favour (COAs described as "on request" when they're published) and removed an accreditation claim their certs don't print.

