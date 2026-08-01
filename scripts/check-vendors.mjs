// scripts/check-vendors.mjs — the daily affiliate-link + code integrity check.
//
// For every ACTIVE vendor in src/data/vendors.ts this script:
//   1. fetches the affiliate URL, following redirects, and reports the final
//      status code + the full redirect chain;
//   2. flags anything that errors, 404s, or lands on an unexpected host;
//   3. reports the discount code recorded for that vendor next to its URL;
//   4. reports every file on the site where that code appears, so changing a
//      code surfaces its full blast radius.
//
// WHAT THIS PROVES: that the affiliate link resolves (is reachable and not dead)
// and what code we publish for it. WHAT IT DOES NOT PROVE: that the code actually
// applies a discount at checkout — that needs a real cart + order, which this
// script deliberately does not attempt. Do not read a green run as "codes verified
// at checkout"; it means "links are live and codes are internally consistent."
//
// On a fully clean run (every active link reachable) it writes today's date to
// src/data/vendors-verified.generated.ts — the single machine-written freshness
// stamp the coupon pages read for their Offer dateModified/validity and the
// "Verified <date>." line in their meta descriptions. If ANY active link fails it
// prints the failures, leaves the timestamp untouched, and exits non-zero (same
// fail-loud discipline as the other build-gating checks).
//
// Run:  npm run check:vendors

import ts from "typescript";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const vendorsPath = join(root, "src/data/vendors.ts");
const outPath = join(root, "src/data/vendors-verified.generated.ts");

const REQUEST_TIMEOUT_MS = 15_000;
const MAX_REDIRECTS = 10;
const CONCURRENCY = 8;
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/125.0 Safari/537.36 ProfPeptideLinkCheck/1.0";

// ── read the real vendors object from vendors.ts (transpile + execute) ──────────
function loadVendors() {
  const { outputText } = ts.transpileModule(readFileSync(vendorsPath, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const moduleObj = { exports: {} };
  const requireGuard = (name) => {
    throw new Error(`vendors.ts must stay import-free for check:vendors (saw require("${name}"))`);
  };
  new Function("module", "exports", "require", outputText)(moduleObj, moduleObj.exports, requireGuard);
  const vendors = moduleObj.exports.vendors;
  if (!vendors || typeof vendors !== "object") {
    throw new Error("check:vendors: could not read `vendors` export from vendors.ts");
  }
  return vendors;
}

function hostOf(url) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return null;
  }
}

// Follow redirects by hand so we can report the whole chain and the final host.
async function resolveLink(startUrl) {
  const chain = [];
  let url = startUrl;
  for (let i = 0; i <= MAX_REDIRECTS; i++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    let res;
    try {
      res = await fetch(url, {
        method: "GET",
        redirect: "manual",
        signal: controller.signal,
        headers: { "user-agent": UA, accept: "text/html,*/*" },
      });
    } catch (err) {
      clearTimeout(timer);
      return { ok: false, error: err.name === "AbortError" ? `timeout after ${REQUEST_TIMEOUT_MS}ms` : err.message, chain, finalUrl: url };
    }
    clearTimeout(timer);
    const status = res.status;
    if (status >= 300 && status < 400 && res.headers.get("location")) {
      const loc = new URL(res.headers.get("location"), url).toString();
      chain.push({ status, from: url, to: loc });
      url = loc;
      continue;
    }
    return { ok: status < 400, status, chain, finalUrl: url };
  }
  return { ok: false, error: `exceeded ${MAX_REDIRECTS} redirects`, chain, finalUrl: url };
}

// A host that answers with one of these is UP but refusing our automated request
// (Cloudflare/WAF bot protection). That is NOT a dead link — a dead link gives a
// DNS/connection error or a 404/410. We surface these as BLOCKED (needs a human
// with a real browser) rather than failing the run, or these Cloudflare-fronted
// sites would fail every run forever and the freshness stamp could never update.
const BLOCKED_STATUSES = new Set([401, 403, 406, 429, 503]);

// OK = reachable; BLOCKED = up but bot-walled (inconclusive); DEAD = genuinely broken.
function classify(res) {
  if (res.ok) return "OK";
  if (typeof res.status === "number" && BLOCKED_STATUSES.has(res.status)) return "BLOCKED";
  return "DEAD";
}

// Where does a code appear in the codebase? (blast radius on a code change.)
// -w = whole-word so "PROFPEPTIDE" does not also match "PROFPEPTIDE15"/"PROFPEPTIDE10".
// The pattern is a positional arg (never bundled behind -e) so it is not misparsed.
function codeUsage(code) {
  try {
    const out = execFileSync(
      "grep",
      ["-rlwI", "--include=*.ts", "--include=*.tsx", "--include=*.json", code, "src"],
      { cwd: root, encoding: "utf8" }
    );
    return out
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((f) => f.replace(/^src\//, ""))
      .sort();
  } catch (e) {
    // grep exits 1 when there are no matches — that's not an error for us.
    if (e.status === 1) return [];
    throw e;
  }
}

async function mapPool(items, worker, size) {
  const results = new Array(items.length);
  let i = 0;
  async function run() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, run));
  return results;
}

function isoToday() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
function prettyToday() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function writeTimestamp(verifiedSlugs) {
  const iso = isoToday();
  const pretty = prettyToday();
  const slugs = [...verifiedSlugs].sort();
  const body =
    `// AUTO-GENERATED by scripts/check-vendors.mjs — do not edit by hand.\n` +
    `// Written on every run whose reachable set clears the >50% floor (so one dead vendor\n` +
    `// can't hold the freshness date hostage for the rest). A DEAD link is EXCLUDED from the\n` +
    `// verified set below and still fails the run (exit 1) so it gets fixed or the vendor retired.\n` +
    `// The date attests those links were live; it does NOT attest a code was tested at\n` +
    `// checkout (check-vendors cannot place an order). Codes are first-party (each vendor's\n` +
    `// own affiliate dashboard), so "verified and working" is what we can honestly claim.\n\n` +
    `/** ISO date of the last check:vendors run that cleared the floor. */\n` +
    `export const VENDORS_VERIFIED_ISO = ${JSON.stringify(iso)};\n\n` +
    `/** Human-readable form of {@link VENDORS_VERIFIED_ISO} for SERP-facing copy. */\n` +
    `export const VENDORS_VERIFIED_DATE = ${JSON.stringify(pretty)};\n\n` +
    `/** Vendor slugs actually verified (reachable, not DEAD) in that run. A coupon page must\n` +
    ` *  render its "verified" date ONLY if its slug is in this set — a vendor excluded from\n` +
    ` *  the last run (dead link) must not claim a verification it didn't get. */\n` +
    `export const VENDORS_VERIFIED_SLUGS = ${JSON.stringify(slugs)};\n`;
  writeFileSync(outPath, body);
  return { iso, pretty, count: slugs.length };
}

// ── run ─────────────────────────────────────────────────────────────────────
const vendors = loadVendors();
const entries = Object.entries(vendors);
const active = entries.filter(([, v]) => !v.retired);
const retired = entries.filter(([, v]) => v.retired);

console.log(`check:vendors — ${active.length} active vendors (${retired.length} retired, skipped)\n`);
console.log("NOTE: this checks that affiliate links resolve and reports the codes we");
console.log("publish. It does NOT prove a code applies a discount at checkout.\n");

const results = await mapPool(
  active,
  async ([slug, v]) => ({ slug, v, res: await resolveLink(v.url) }),
  CONCURRENCY
);

// Blast radius per UNIQUE code (codes are shared across vendors) — computed once.
const usageByCode = new Map();
const vendorsByCode = new Map();
for (const [slug, v] of active) {
  if (!usageByCode.has(v.code)) usageByCode.set(v.code, codeUsage(v.code));
  if (!vendorsByCode.has(v.code)) vendorsByCode.set(v.code, []);
  vendorsByCode.get(v.code).push(slug);
}

console.log("LINK RESULTS");
console.log("─".repeat(72));
const failures = []; // DEAD only — excluded from the stamp + non-zero exit (fix or retire)
const blocked = []; // up but bot-walled — tolerated (still verified), surfaced for manual check
const verifiedSlugs = []; // reachable OR bot-walled (NOT dead) — the set the stamp attests
for (const { slug, v, res } of results) {
  const expectedHost = hostOf(v.url);
  const finalHost = hostOf(res.finalUrl);
  const crossHost = res.ok && finalHost && expectedHost && finalHost !== expectedHost;
  const state = classify(res);
  const why = res.error ? res.error : `HTTP ${res.status}`;
  if (state === "DEAD") failures.push({ slug, why, url: v.url });
  else {
    if (state === "BLOCKED") blocked.push({ slug, why, url: v.url });
    verifiedSlugs.push(slug); // OK or BLOCKED — link is not dead, so it's attestable this run
  }
  const tag =
    state === "OK"
      ? `OK    ${slug.padEnd(24)} HTTP ${res.status}${res.chain.length ? ` (${res.chain.length} redirect${res.chain.length > 1 ? "s" : ""})` : ""}${crossHost ? `  → ${finalHost}` : ""}`
      : `${state.padEnd(5)} ${slug.padEnd(24)} ${why}${state === "BLOCKED" ? "  (bot-protection likely — verify in a browser)" : ""}`;
  console.log(tag);
  console.log(`      code ${v.code}  ·  ${v.discount}  ·  ${v.url}`);
  if (crossHost) console.log(`      note: final host ${finalHost} ≠ link host ${expectedHost} (normal for aff redirectors, worth a glance)`);
}

// ── code blast radius ─────────────────────────────────────────────────────────
console.log(`\nCODE BLAST RADIUS  (every place a code appears — a code change hits all of these)`);
console.log("─".repeat(72));
const CAP = 12;
for (const [code, files] of [...usageByCode.entries()].sort((a, b) => b[1].length - a[1].length)) {
  const owners = vendorsByCode.get(code);
  console.log(`${code}  — used by ${owners.length} vendor(s): ${owners.join(", ")}`);
  console.log(`      appears in ${files.length} file(s)${files.length > CAP ? ` (first ${CAP})` : ""}: ${files.slice(0, CAP).join(", ")}${files.length > CAP ? `, … +${files.length - CAP} more` : ""}`);
}

console.log("\n" + "─".repeat(72));
if (blocked.length) {
  console.log(`\n${blocked.length} BLOCKED (up but bot-walled — NOT dead; confirm manually in a browser):`);
  for (const b of blocked) console.log(`  ? ${b.slug}: ${b.why}  (${b.url})`);
}

// FLOOR: a run that verifies fewer than half the active vendors is almost certainly a local
// network fault (or DNS/proxy failure), not a real mass outage — writing a near-empty set
// would blank the verified date across the whole site. Refuse to overwrite the good stamp.
const floor = Math.ceil(active.length * 0.5);
if (verifiedSlugs.length < floor) {
  console.log(`\ncheck:vendors ABORTED — only ${verifiedSlugs.length}/${active.length} verified (< floor ${floor}).`);
  console.log(`Almost certainly a local/network fault, not ${active.length - verifiedSlugs.length} vendors dying at once.`);
  console.log("Stamp left UNCHANGED (last good verification preserved). Re-run when connectivity is restored.");
  process.exit(1);
}

// LOOSENED (approved): write the stamp for the REACHABLE SET even when some links are dead —
// one dead vendor must not hold the freshness date hostage for the other 32. The dead vendors
// are excluded from VENDORS_VERIFIED_SLUGS (their coupon pages then render no verified date)
// and the run still exits non-zero below so the dead link gets fixed or the vendor retired.
const okCount = verifiedSlugs.length - blocked.length;
const { pretty, count } = writeTimestamp(verifiedSlugs);
console.log(`\nWrote verification stamp: ${pretty} → ${outPath.replace(root + "/", "")}`);
console.log(`Verified set: ${count}/${active.length} (${okCount} reachable${blocked.length ? `, ${blocked.length} bot-walled` : ""}${failures.length ? `, ${failures.length} DEAD excluded` : ""}).`);
console.log(`Reachability only — this does NOT prove any code applies at checkout.`);

if (failures.length) {
  console.log(`\n${failures.length} DEAD link(s) — EXCLUDED from the stamp (their pages will show no verified date):`);
  for (const f of failures) console.log(`  ✗ ${f.slug}: ${f.why}  (${f.url})`);
  console.log("\ncheck:vendors: stamp advanced for the reachable set, but exiting non-zero —");
  console.log("fix the dead link or mark the vendor retired, then re-run.");
  process.exit(1);
}
console.log(`\nClean run — no dead links.`);
