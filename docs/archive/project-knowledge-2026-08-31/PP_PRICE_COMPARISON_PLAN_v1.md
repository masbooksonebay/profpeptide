# PP Price-Comparison Section — Plan & Competitive Teardown

**Status:** PLANNING — competitive teardown complete (July 13, 2026). Build pending CINC traffic-sizing.
**Version:** v1
**Owner split:** Mark pulls price data (monthly); Claude designs structure + specs CC; CC builds; CINC sizes competitors.

---

## 🎯 THE CONCEPT

A peptide price-comparison section on profpeptide.com: per-compound tables showing vendor prices, with PP's affiliate codes applied. Validated by referral data — peptiprices = 10.8% of Orbitrex's referrals; peptidecritic = 72% of ezpeptides' referrals. High-intent search traffic ("[compound] price," "cheapest [compound]") converts to vendor referrals = PP's affiliate model.

**PP's differentiator vs. pure-comparison sites:** PP already has the CONTENT half — peptide profiles, verified brand, honest COA/testing per vendor. Competitors have prices but no trusted content ecosystem. PP can link each compound → its profile, each vendor → its coupon page/COA. That's the moat.

---

## 🔍 COMPETITIVE TEARDOWN (fetched live July 13, 2026)

### PeptiPrices (peptiprices.com) — the PURE PRICE-TOOL model
- **Structure:** ONE filterable master `/prices` page. ~64 compounds as cards; each card shows top-3 cheapest vendors + "+N more" expandable. Filter chips (Retatrutide, Tirz, etc.), sort by popularity/name/price/category.
- **🔑 DUAL PRICE per vendor:** shows `$36.00*` (with code, prominent) AND `$40.00` (struck-through, without). THIS IS THE CODE-ADVANTAGE MODEL — confirmed as industry-standard winning pattern.
- **🔑 PER-MG NORMALIZATION:** `Total` vs `mg/mL` toggle — normalizes across vial sizes so a 10mg@$40 vs 20mg@$70 compare honestly. MUST-HAVE.
- **Every link is their affiliate link** (`?ref=PEPTI`, `/aff/pepti`, `?coupon=PEPTI`). ~60 vendor relationships (footer).
- **Cheapest-first sort** within each compound (with code applied) → best deal surfaces first.
- **Stock status** (In/Out) per vendor.
- **SEO:** meta keywords stuffed with "cheap [compound]" + every vendor name. Next.js.
- **⚠️ Their vendor roster overlaps PP's targets:** Ion Peptide, LA Peptides, Orbitrex, EZ, Simple Peptide, Modern Aminos, Glacier — they already monetize vendors PP is chasing. Space is competitive + proven; SPEED matters.
- **Weakness:** pure prices, NO content/testing/purity depth. This is PP's opening.

### Peptide Critic (peptidecritic.com) — the ECOSYSTEM model (broader)
- **Vendor reviews + star ratings** (community-driven; EZ 4.7/76 reviews, Glacier 4.7/46) — Yelp-for-peptide-vendors.
- **Price Index** ($/mg ranges per compound, "68 vendors," compare-vendor links) — same price core.
- **Coupon codes** section (codes like PEPTIDECRI10) — same affiliate model.
- **Community message board** (user-generated content engine).
- **Their OWN store** — sells research pens/injectors/gear ($27–149) = 2nd revenue stream.
- **"Lab Report" blog** — hands-on testing, COAs, vendor findings.
- **Tools:** reconstitution calc, stockpile calc, label maker, bloodwork.
- **Google AdSense** = 3rd revenue stream. Built on Drupal.
- **Uses GLP code-names as page names** (GLP3-R, GLP2-T) — same obfuscation pattern.

### ⚠️ FINNRICK — DO NOT BUILD ON (copyright + methodology risk)
- Finnrick = independent purity-testing service, publishes purity/dose rankings (8,923 vials tested). Data-rich BUT:
  1. **Republishing their rankings = likely ToS/copyright violation** (their proprietary dataset is their whole business).
  2. **Their tested vendors are raw-material/Chinese-manufacturer names** (Peptide Partners, SRY Labs, Guangzhou Jeep, Tianjin Finder) — NOT PP's consumer-retail affiliates. Vendor mismatch = doesn't serve PP's model.
  3. **Active controversy:** peptidecritic has published pieces attacking Finnrick's methodology ("Its Ratings Are Already a Joke") AND documented a "Failed Copyright Strike" in this space. Confirms copyright fights are real here.
- **DECISION (LOCKED):** SKIP purity-comparison pages built on Finnrick. Instead: LINK to Finnrick as a cited resource ("for independent third-party purity testing, see Finnrick") + lean on PP vendors' OWN published COAs for the purity story. Citation/linking = fine; republishing their dataset = not.

---

## 🏗️ PP BUILD PLAN (decisions locked)

### Compounds — START WITH TOP 8 (high-search, high-intent, most vendors carry):
Retatrutide, Tirzepatide, Semaglutide (the GLP trio = traffic engine), BPC-157, TB-500, GHK-Cu, CJC-1295/Ipamorelin, NAD+. (Expand to long-tail after format proves out — don't launch 30 thin pages.)

### Structure — HYBRID (beats both competitors):
- **Master `/prices` filterable page** (like PeptiPrices — proven UX: filter chips, sort, cards)
- **PLUS per-compound pages** (`/prices/retatrutide` etc.) — each ranks for "[compound] price," ties into PP's existing profile for that compound. (PeptiPrices only has the master page; per-compound pages = extra SEO surface + PP's content-linking edge.)
- Per-compound page links → PP's peptide PROFILE for that compound + each vendor → PP's coupon page.

### Must-have features (from teardown):
1. **Dual price:** with-code (prominent) + without-code (struck through) — code-advantage model.
2. **Per-mg normalization toggle** (Total vs $/mg) — honest cross-size comparison.
3. **Cheapest-first sort** (post-code) within each compound.
4. **Stock status** per vendor (if pullable).
5. **Comprehensive listing:** include big non-affiliate vendors (base price, no affiliate link) for credibility; affiliate vendors get discounted price + linked CTA.
6. **`PRICES_UPDATED_DATE` single-constant** (reuse proven CODES_VERIFIED_DATE pattern) — visible "Prices updated [date]" stamp; one-line monthly bump.

### PP's differentiators (do what competitors can't):
- Link each compound → PP profile (content depth)
- Link each vendor → PP coupon page + honest COA/testing note (verified brand)
- Finnrick as a cited purity RESOURCE (not republished)

### Honesty guardrail (RULE #0):
Table must be REAL. If a non-affiliate vendor is genuinely cheaper post-code, show it. Trust > one click. (The comprehensive-but-honest approach is what makes people believe the whole table — worth more than gaming it.)

### Maintenance model:
Monthly (~2 hrs, first of month): Mark pulls prices → CC updates data + bumps PRICES_UPDATED_DATE → deploy. Page shows "Prices updated [date]."

---

## 📋 SEQUENCE
1. ✅ Competitive teardown (this doc)
2. ⏳ CINC traffic-sizing (peptiprices/peptidecritic visits + keywords + organic %) — sizes the prize, confirms 8 pages vs fewer
3. Mark pulls affiliate-vendor prices for the 8 compounds (fast — known vendors) → real launch data
4. Claude specs + CC builds master + per-compound pages (affiliate vendors first)
5. 2nd pass: add top 10+ non-affiliate big vendors' base prices (comprehensiveness)
6. Monthly maintenance cadence begins

---

## 🔗 Cross-refs
PP_VENDOR_PROSPECTING v12 (vendor traffic/terms) · SCS_MP v6.13 (deploy patterns) · vendors.ts (affiliate codes source)
