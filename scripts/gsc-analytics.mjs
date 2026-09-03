// scripts/gsc-analytics.mjs — Search Analytics: snippet-rewrite candidates for coupon pages.
//
// WHAT THIS ANSWERS THAT URL INSPECTION CANNOT: URL Inspection reports what Google decided about
// a page's indexing. It says nothing about how that page performs once it's shown — a page can be
// PASS/indexed and still get far fewer clicks than its ranking position should earn, because
// Google rewrote its title/snippet in the SERP. That was the Spartan signature: a good position,
// a suppressed CTR. This script finds every coupon page that looks like Spartan did.
//
// METHOD:
//   1. One Search Analytics query, dimensions [page, query], for the whole property over the date
//      range — no page filter, so the SAME response yields two things at once:
//        (a) an EMPIRICAL CTR-by-position curve, built from ALL rows on the SITE (not an external
//            CTR table — the task was explicit that the expectation must come from our own data);
//        (b) the coupon-page rows, filtered down to "brand-plus-coupon" queries per vendor.
//   2. For each vendor's coupon page: aggregate its brand-plus-coupon rows to actual clicks /
//      impressions / CTR / impression-weighted average position.
//   3. Look up the SITE'S OWN expected CTR at that rounded position from the curve in (1a).
//   4. Rank pages by (expected − actual) CTR, descending. A large positive gap is a candidate:
//      ranking earns more clicks than the page is getting.
//
// BRAND-PLUS-COUPON HEURISTIC (documented, not hidden): a query counts as "brand-plus-coupon" for
// vendor V if it contains every token of V's name (from vendors.ts, in any order) AND matches
// /coupon|code|discount|promo|deal/i. This is a heuristic, not a Search Console feature — a short
// or generic vendor name could over-match. Read the underlying query rows (machine-readable form)
// before acting on a candidate, don't just trust the ranked number.
//
// AUTH: same service-account flow as gsc-inspect.mjs (scripts/lib/gsc-auth.mjs), read-only scope.
//
// Run:
//   node scripts/gsc-analytics.mjs                            # last 28 days
//   node scripts/gsc-analytics.mjs --days 90                  # last 90 days
//   node scripts/gsc-analytics.mjs --start 2026-07-01 --end 2026-07-31
//   node scripts/gsc-analytics.mjs --key /path/to/key.json --json out.json
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { createTokenManager, gscFetch } from "./lib/gsc-auth.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const DEFAULT_KEY_PATH = "/Users/mark/.config/profpeptide/profpeptide-gsc-api-0fee325915c2.json";
const SITE_URL = "sc-domain:profpeptide.com";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const QUERY_ENDPOINT = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`;
const ROW_LIMIT = 25000; // GSC's per-request max
// GSC data typically lags ~2-3 days before it's stable; end the range a few days back rather
// than "today", so the last days aren't reporting on incomplete data.
const DATA_LAG_DAYS = 3;
const MIN_BUCKET_IMPRESSIONS = 50; // don't trust a position bucket's expected-CTR on thin data
const MIN_PAGE_IMPRESSIONS = 10; // don't rank a page on near-zero traffic

// ── argv ──────────────────────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
function flagValue(name) {
  const i = argv.indexOf(name);
  return i !== -1 ? argv[i + 1] : null;
}
const keyPath = flagValue("--key") ?? DEFAULT_KEY_PATH;
const jsonOut = flagValue("--json");

function isoDate(d) {
  return d.toISOString().slice(0, 10);
}
const daysArg = flagValue("--days");
const endArg = flagValue("--end");
const startArg = flagValue("--start");
const endDate = endArg ?? isoDate(new Date(Date.now() - DATA_LAG_DAYS * 86_400_000));
const startDate =
  startArg ??
  isoDate(new Date(Date.now() - (DATA_LAG_DAYS + Number(daysArg ?? 28)) * 86_400_000));

// ── load active vendors (coupon slug -> canonical URL + name tokens) ────────────────────────────
function loadVendors() {
  const { outputText } = ts.transpileModule(readFileSync(join(root, "src/data/vendors.ts"), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const mod = { exports: {} };
  new Function("module", "exports", "require", outputText)(mod, mod.exports, () => {
    throw new Error("vendors.ts must stay import-free");
  });
  return mod.exports.vendors;
}
function nameTokens(name) {
  return name.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
}
const vendors = loadVendors();
const couponPages = new Map(); // normalized page URL -> { slug, name, tokens }
for (const [slug, v] of Object.entries(vendors)) {
  if (v.retired) continue;
  couponPages.set(`https://profpeptide.com/coupons/${slug}`, { slug, name: v.name, tokens: nameTokens(v.name) });
}

const COUPON_RE = /coupon|code|discount|promo|deal/i;
function isBrandPlusCoupon(query, tokens) {
  const q = query.toLowerCase();
  return tokens.every((t) => q.includes(t)) && COUPON_RE.test(q);
}
function normalizePage(url) {
  return url.replace(/\/+$/, "").split("?")[0].split("#")[0];
}

// ── fetch (paginated) ────────────────────────────────────────────────────────────────────────
async function fetchAllRows(tokenManager) {
  const rows = [];
  let startRow = 0;
  for (;;) {
    let body;
    try {
      body = await gscFetch(QUERY_ENDPOINT, {
        accessToken: await tokenManager.getToken(),
        method: "POST",
        body: {
          startDate,
          endDate,
          dimensions: ["page", "query"],
          rowLimit: ROW_LIMIT,
          startRow,
        },
      });
    } catch (e) {
      // Same reactive fallback as gsc-inspect.mjs: one forced refresh on an unexpected 401, then
      // give up rather than retry forever. Pagination here can run long on a big property.
      if (e.status === 401) {
        await tokenManager.forceRefresh();
        body = await gscFetch(QUERY_ENDPOINT, {
          accessToken: await tokenManager.getToken(),
          method: "POST",
          body: { startDate, endDate, dimensions: ["page", "query"], rowLimit: ROW_LIMIT, startRow },
        });
      } else {
        throw e;
      }
    }
    const batch = body.rows ?? [];
    rows.push(...batch);
    if (batch.length < ROW_LIMIT) break;
    startRow += ROW_LIMIT;
  }
  return rows;
}

// ── run ───────────────────────────────────────────────────────────────────────────────────────
const tokenManager = createTokenManager(keyPath, SCOPE);
try {
  await tokenManager.getToken();
} catch (e) {
  console.error(`AUTH FAILED — could not obtain an access token.\n\n${e.message}`);
  process.exit(1);
}
console.log(`Access token obtained. Querying Search Analytics for ${SITE_URL}, ${startDate} .. ${endDate}...\n`);

let rows;
try {
  rows = await fetchAllRows(tokenManager);
} catch (e) {
  if (e.status === 403) {
    console.error(
      `\n🔴 403 on searchAnalytics/query — the service account's property GRANT is likely` +
        ` insufficient for this method (Full may not cover Search Analytics). Reporting rather` +
        ` than working around it.\n\n${e.message}`,
    );
  } else {
    console.error(`QUERY FAILED: ${e.message}`);
  }
  process.exit(1);
}
console.log(`Retrieved ${rows.length} (page, query) row(s) for the date range.\n`);

// ── (a) empirical CTR-by-position curve, from ALL rows sitewide ────────────────────────────────
const bucket = new Map(); // roundedPosition -> { clicks, impressions }
for (const r of rows) {
  const pos = Math.round(r.position);
  const b = bucket.get(pos) ?? { clicks: 0, impressions: 0 };
  b.clicks += r.clicks;
  b.impressions += r.impressions;
  bucket.set(pos, b);
}
function expectedCtrAt(pos) {
  // Exact bucket if it has enough data; otherwise widen outward (±1, ±2, ...) up to 5 steps.
  for (let d = 0; d <= 5; d++) {
    for (const p of d === 0 ? [pos] : [pos - d, pos + d]) {
      const b = bucket.get(p);
      if (b && b.impressions >= MIN_BUCKET_IMPRESSIONS) return { ctr: b.clicks / b.impressions, atPosition: p, impressions: b.impressions };
    }
  }
  return null;
}

// ── (b) coupon-page brand-plus-coupon rows, aggregated per page ────────────────────────────────
const perPage = new Map(); // normalized coupon URL -> { slug, name, clicks, impressions, posWeighted, queries: [] }
for (const r of rows) {
  const page = normalizePage(r.keys[0]);
  const meta = couponPages.get(page);
  if (!meta) continue;
  const query = r.keys[1];
  if (!isBrandPlusCoupon(query, meta.tokens)) continue;
  const agg = perPage.get(page) ?? { slug: meta.slug, name: meta.name, page, clicks: 0, impressions: 0, posWeighted: 0, queries: [] };
  agg.clicks += r.clicks;
  agg.impressions += r.impressions;
  agg.posWeighted += r.position * r.impressions;
  agg.queries.push({ query, clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position });
  perPage.set(page, agg);
}

const candidates = [];
for (const agg of perPage.values()) {
  if (agg.impressions < MIN_PAGE_IMPRESSIONS) continue;
  const actualCtr = agg.clicks / agg.impressions;
  const avgPosition = agg.posWeighted / agg.impressions;
  const exp = expectedCtrAt(Math.round(avgPosition));
  candidates.push({
    slug: agg.slug,
    name: agg.name,
    page: agg.page,
    clicks: agg.clicks,
    impressions: agg.impressions,
    avgPosition: Math.round(avgPosition * 10) / 10,
    actualCtr: Math.round(actualCtr * 10000) / 100, // percent, 2dp
    expectedCtr: exp ? Math.round(exp.ctr * 10000) / 100 : null,
    expectedAtPosition: exp?.atPosition ?? null,
    expectedFromImpressions: exp?.impressions ?? null,
    gapPct: exp ? Math.round((exp.ctr - actualCtr) * 10000) / 100 : null,
    queryCount: agg.queries.length,
    queries: agg.queries.sort((a, b) => b.impressions - a.impressions),
  });
}
candidates.sort((a, b) => (b.gapPct ?? -Infinity) - (a.gapPct ?? -Infinity));

// ── readable table ───────────────────────────────────────────────────────────────────────────
console.log("=".repeat(100));
console.log("EXPECTED CTR BY POSITION (this site's own data, sitewide)");
console.log("=".repeat(100));
const bucketRows = [...bucket.entries()].filter(([, b]) => b.impressions >= MIN_BUCKET_IMPRESSIONS).sort((a, b) => a[0] - b[0]);
for (const [pos, b] of bucketRows) {
  console.log(`  pos ${String(pos).padStart(3)}   ctr ${((b.clicks / b.impressions) * 100).toFixed(2).padStart(6)}%   (${b.impressions} impressions)`);
}
if (!bucketRows.length) console.log("  (no position bucket cleared the minimum-impressions threshold — too little data)");

console.log("\n" + "=".repeat(100));
console.log(`SNIPPET-REWRITE CANDIDATES — vendor coupon pages, brand-plus-coupon queries, ${startDate}..${endDate}`);
console.log("Ranked by (expected − actual) CTR at the page's own average position. Large positive gap = candidate.");
console.log("=".repeat(100));
if (!candidates.length) {
  console.log(`  No coupon page cleared ${MIN_PAGE_IMPRESSIONS} impressions on a brand-plus-coupon query in this range.`);
}
for (const c of candidates) {
  console.log(
    `\n${c.name} (/coupons/${c.slug})` +
      `\n  clicks=${c.clicks}  impressions=${c.impressions}  avg position=${c.avgPosition}  queries=${c.queryCount}` +
      `\n  actual CTR   : ${c.actualCtr}%` +
      `\n  expected CTR : ${c.expectedCtr != null ? `${c.expectedCtr}% (from this site's position-${c.expectedAtPosition} bucket, ${c.expectedFromImpressions} impressions)` : "no bucket with enough data near this position"}` +
      `\n  gap          : ${c.gapPct != null ? `${c.gapPct > 0 ? "+" : ""}${c.gapPct} pts` : "—"}`,
  );
}

console.log(`\n\nScanned ${perPage.size} coupon page(s) with at least one brand-plus-coupon impression; ${candidates.length} cleared the ${MIN_PAGE_IMPRESSIONS}-impression floor and are ranked above.`);

// ── machine-readable form ────────────────────────────────────────────────────────────────────
const machine = {
  site: SITE_URL,
  ranAt: new Date().toISOString(),
  dateRange: { startDate, endDate },
  totalRows: rows.length,
  positionCurve: bucketRows.map(([pos, b]) => ({ position: pos, ctr: b.clicks / b.impressions, impressions: b.impressions })),
  candidates,
};
console.log("\n=== MACHINE-READABLE (JSON) ===");
console.log(JSON.stringify(machine, null, 2));

if (jsonOut) {
  writeFileSync(jsonOut, JSON.stringify(machine, null, 2));
  console.log(`\nAlso wrote ${jsonOut}`);
}
