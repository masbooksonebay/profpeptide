// scripts/gsc-inspect.mjs — Search Console URL Inspection, per-URL index/crawl status.
//
// WHAT THIS PROVES: whether Google has crawled a URL, what it decided about indexing it, which
// sitemap referred it in, and what canonical Google actually selected (which can silently differ
// from ours). WHAT IT DOES NOT PROVE: ranking, clicks, or snippet wording — that is
// gsc-analytics.mjs's job. The two are complementary reads on the same property, not overlapping.
//
// AUTH: service-account JWT bearer via scripts/lib/gsc-auth.mjs. No consent flow — a service
// account either has property access or it doesn't, so a failure here is diagnostic: 401 means
// the credential itself is bad, 403 means the property GRANT is insufficient for this method
// (report it; do not silently retry with broader scope — see gsc-auth.mjs's error split).
// Scope is read-only (webmasters.readonly) — this tool only ever inspects, never modifies.
//
// DEFAULT URL SET: every <loc> in public/sitemap-*.xml (the committed build's own sitemap output
// — same file check:sitemap-coverage.mjs reads), so "what did we tell Google exists" and "what
// does Google think about it" are checked against the same list. Pass explicit URLs on argv to
// inspect a subset instead.
//
// QUOTA — URL Inspection is 2,000/day and 600/min PER SITE (Google's stated caps, not ours).
// Paced to a SAFETY MARGIN under both (not the raw limit): the run stops and reports exactly
// where if either would be exceeded, rather than eating a 429/quota error blind.
//
// Run:
//   node scripts/gsc-inspect.mjs                                   # every sitemap URL
//   node scripts/gsc-inspect.mjs https://profpeptide.com/coupons    # explicit URL(s)
//   node scripts/gsc-inspect.mjs --key /path/to/key.json            # override the credential path
//   node scripts/gsc-inspect.mjs --json out.json                    # also write the JSON form to a file
import { readFileSync, readdirSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createTokenManager, gscFetch } from "./lib/gsc-auth.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(root, "public");

const DEFAULT_KEY_PATH = "/Users/mark/.config/profpeptide/profpeptide-gsc-api-0fee325915c2.json";
const SITE_URL = "sc-domain:profpeptide.com";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const INSPECT_ENDPOINT = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect";

// Google's stated caps, per site. We pace to a margin under them, not up to them.
const DAILY_QUOTA = 2000;
const PER_MINUTE_QUOTA = 600;
const SAFETY = 0.85;
const DAILY_BUDGET = Math.floor(DAILY_QUOTA * SAFETY); // 1700
const PER_MINUTE_BUDGET = Math.floor(PER_MINUTE_QUOTA * SAFETY); // 510

// ── argv ──────────────────────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
function flagValue(name) {
  const i = argv.indexOf(name);
  return i !== -1 ? argv[i + 1] : null;
}
const keyPath = flagValue("--key") ?? DEFAULT_KEY_PATH;
const jsonOut = flagValue("--json");
const explicitUrls = argv.filter((a) => a.startsWith("http"));

// ── default URL set: every <loc> in the committed sitemap ───────────────────────────────────────
function sitemapUrls() {
  const files = existsSync(PUBLIC) ? readdirSync(PUBLIC).filter((f) => /^sitemap-\d+\.xml$/.test(f)) : [];
  if (!files.length) {
    console.error(`No public/sitemap-*.xml found. Run \`npm run build\` first, or pass URLs explicitly.`);
    process.exit(1);
  }
  const urls = [];
  for (const f of files) {
    const xml = readFileSync(join(PUBLIC, f), "utf8");
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.push(m[1]);
  }
  return urls;
}

const urls = explicitUrls.length ? explicitUrls : sitemapUrls();
console.log(`Inspecting ${urls.length} URL(s) against ${SITE_URL}${explicitUrls.length ? "" : " (from public/sitemap-*.xml)"}.\n`);

// ── rate limiter: sliding 60s window, paced to PER_MINUTE_BUDGET ────────────────────────────────
const sentAt = [];
async function paceOne() {
  const now = Date.now();
  while (sentAt.length && now - sentAt[0] > 60_000) sentAt.shift();
  if (sentAt.length >= PER_MINUTE_BUDGET) {
    const waitMs = 60_000 - (now - sentAt[0]) + 50;
    console.log(`  … pacing: at the per-minute budget (${PER_MINUTE_BUDGET}/min), waiting ${Math.ceil(waitMs / 1000)}s`);
    await new Promise((r) => setTimeout(r, waitMs));
  }
  sentAt.push(Date.now());
}

function fmtDate(iso) {
  return iso ? iso.slice(0, 10) : "—";
}

async function inspectOne(tokenManager, url, { retried = false } = {}) {
  let body;
  try {
    body = await gscFetch(INSPECT_ENDPOINT, {
      accessToken: await tokenManager.getToken(),
      method: "POST",
      body: { inspectionUrl: url, siteUrl: SITE_URL },
    });
  } catch (e) {
    // Reactive fallback: proactive refresh (createTokenManager) should prevent this, but a 401
    // that arrives anyway (clock skew, a revoked token) gets exactly ONE forced-refresh retry
    // before giving up — no silent retry loop.
    if (e.status === 401 && !retried) {
      await tokenManager.forceRefresh();
      return inspectOne(tokenManager, url, { retried: true });
    }
    throw e;
  }
  const r = body.inspectionResult?.indexStatusResult ?? {};
  const issues = [];
  if (r.robotsTxtState && r.robotsTxtState !== "ALLOWED") issues.push(`robots:${r.robotsTxtState}`);
  if (r.indexingState && r.indexingState !== "INDEXING_ALLOWED") issues.push(`indexing:${r.indexingState}`);
  if (r.pageFetchState && r.pageFetchState !== "SUCCESSFUL") issues.push(`fetch:${r.pageFetchState}`);
  // Trailing slash only ("https://x/" vs "https://x") is not a real mismatch — Google's own two
  // fields are inconsistent about it (observed on the bare root URL), so normalize before diffing.
  const stripSlash = (u) => u?.replace(/\/$/, "");
  if (r.userCanonical && r.googleCanonical && stripSlash(r.userCanonical) !== stripSlash(r.googleCanonical)) {
    issues.push(`canonical-mismatch (ours: ${r.userCanonical})`);
  }
  return {
    url,
    verdict: r.verdict ?? "—",
    coverageState: r.coverageState ?? "—",
    lastCrawlTime: r.lastCrawlTime ?? null,
    lastCrawlDate: fmtDate(r.lastCrawlTime),
    referringSitemap: r.sitemap?.length ? r.sitemap.join(", ") : "none detected",
    googleCanonical: r.googleCanonical ?? "—",
    issues: issues.length ? issues.join("; ") : "none",
    crawledAs: r.crawledAs ?? "—",
    inspectionResultLink: body.inspectionResult?.inspectionResultLink ?? null,
  };
}

// ── run ───────────────────────────────────────────────────────────────────────────────────────
const tokenManager = createTokenManager(keyPath, SCOPE);
try {
  await tokenManager.getToken();
} catch (e) {
  console.error(`AUTH FAILED — could not obtain an access token.\n\n${e.message}`);
  process.exit(1);
}
console.log("Access token obtained (service account authenticated). Refreshes automatically for a long run.\n");

const results = [];
let stoppedEarly = null;
for (let i = 0; i < urls.length; i++) {
  if (results.length >= DAILY_BUDGET) {
    stoppedEarly = { at: i, reason: `daily budget (${DAILY_BUDGET} of stated ${DAILY_QUOTA}/day) reached` };
    break;
  }
  await paceOne();
  const url = urls[i];
  try {
    const r = await inspectOne(tokenManager, url);
    results.push(r);
    console.log(`  [${i + 1}/${urls.length}] ${r.verdict.padEnd(9)} ${r.coverageState.padEnd(28)} ${url}`);
  } catch (e) {
    if (e.status === 403) {
      console.error(
        `\n🔴 403 on ${url} — the service account's property GRANT is likely insufficient for` +
          ` this method (Full may not cover URL Inspection). Reporting rather than working around it.\n`,
      );
      stoppedEarly = { at: i, reason: "403 — permission insufficient", error: e.message };
      break;
    }
    console.error(`  [${i + 1}/${urls.length}] ERROR ${url}: ${e.message}`);
    results.push({ url, error: e.message });
  }
}

// ── readable table ───────────────────────────────────────────────────────────────────────────
console.log("\n" + "=".repeat(100));
console.log("URL INSPECTION RESULTS");
console.log("=".repeat(100));
for (const r of results) {
  if (r.error) {
    console.log(`\n${r.url}\n  ERROR: ${r.error}`);
    continue;
  }
  console.log(`\n${r.url}`);
  console.log(`  Index status     : ${r.verdict} — ${r.coverageState}`);
  console.log(`  Last crawl       : ${r.lastCrawlDate}`);
  console.log(`  Referring sitemap: ${r.referringSitemap}`);
  console.log(`  Google canonical : ${r.googleCanonical}`);
  console.log(`  Issues           : ${r.issues}`);
}

if (stoppedEarly) {
  console.log(`\n🔴 STOPPED EARLY at URL ${stoppedEarly.at + 1}/${urls.length} — ${stoppedEarly.reason}`);
  if (stoppedEarly.error) console.log(`   ${stoppedEarly.error}`);
}

console.log(`\nInspected ${results.length}/${urls.length} URL(s).`);

// ── machine-readable form ────────────────────────────────────────────────────────────────────
const machine = { site: SITE_URL, ranAt: new Date().toISOString(), requested: urls.length, inspected: results.length, stoppedEarly, results };
console.log("\n=== MACHINE-READABLE (JSON) ===");
console.log(JSON.stringify(machine, null, 2));

if (jsonOut) {
  writeFileSync(jsonOut, JSON.stringify(machine, null, 2));
  console.log(`\nAlso wrote ${jsonOut}`);
}
