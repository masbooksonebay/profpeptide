// scripts/go-stats.mjs — CLI view of the /go/ click counters.
//
// ⚠️ PREFER THE ROUTE. /api/go-stats on a PREVIEW deployment is the supported way to read these
// numbers, because the KV credentials are Vercel *Sensitive* vars — write-only, so
// `vercel env pull` SUCCEEDS but writes them as empty strings (verified 2026-09-02: non-sensitive
// vars in the same pull come down populated, so this is per-variable, not a broken link). Nothing
// can hand this script a token except a human copying one out of the dashboard, which is exactly
// what the route exists to avoid. This file stays for the case where the env is ALREADY in scope
// (a Vercel shell, CI) and for local debugging.
//
//   node --env-file=<file-with-KV-vars> scripts/go-stats.mjs            # all time
//   node --env-file=<file> scripts/go-stats.mjs 2026-09-01              # one day
//   node --env-file=<file> scripts/go-stats.mjs --since 2026-08-25      # from a date
//
// READ-ONLY: uses KV_REST_API_READ_ONLY_TOKEN and does NOT fall back to the read/write token —
// a reporting tool should not hold a write credential.
//
// Aggregation and text rendering come from src/lib/go-stats.ts, executed through
// ts.transpileModule (the same approach gen-content-dates.mjs uses) so this CLI and the route
// share ONE implementation and cannot drift on a number.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { createClient } from "@vercel/kv";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function execModule(rel) {
  const src = readFileSync(join(root, rel), "utf8");
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const mod = { exports: {} };
  new Function("module", "exports", "require", outputText)(mod, mod.exports, () => ({}));
  return mod.exports;
}

const { aggregateGoStats, parseGoKey, renderGoStatsText } = execModule("src/lib/go-stats.ts");

const url = process.env.KV_REST_API_URL;
const token = process.env.KV_REST_API_READ_ONLY_TOKEN;
if (!url || !token) {
  console.error("KV read-only env missing.\n");
  console.error("  KV_REST_API_URL             : " + (url ? "set" : "MISSING"));
  console.error("  KV_REST_API_READ_ONLY_TOKEN : " + (token ? "set" : "MISSING"));
  console.error("\n`vercel env pull` will NOT fix this — these are Sensitive (write-only) vars, so the");
  console.error("pull writes them as empty strings.\n");
  console.error("USE THE ROUTE INSTEAD: open /api/go-stats?format=text on a PREVIEW deployment");
  console.error("(it reads the env in-place, so no token ever leaves Vercel).");
  process.exit(1);
}

const args = process.argv.slice(2);
const sinceIdx = args.indexOf("--since");
const since = sinceIdx !== -1 ? args[sinceIdx + 1] : null;
const day = args.find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a) && a !== since) || null;

const kv = createClient({ url, token });

const keys = [];
let cursor = 0;
do {
  const [next, batch] = await kv.scan(cursor, { match: "go:*", count: 1000 });
  keys.push(...batch);
  cursor = Number(next);
} while (cursor !== 0);

if (!keys.length) {
  console.log("No go:* keys in KV at all — the route has recorded nothing yet.");
  process.exit(0);
}

const selected = keys.filter((k) => {
  const p = parseGoKey(k);
  if (!p) return false;
  if (day) return p.day === day;
  if (since) return p.day >= since;
  return true;
});

if (!selected.length) {
  console.log(`No /go/ clicks for ${day ?? `since ${since}`} (${keys.length} go:* key(s) exist overall).`);
  process.exit(0);
}

const values = await kv.mget(...selected);
const scope = day ? `day ${day}` : since ? `since ${since}` : "all time";
console.log(renderGoStatsText(aggregateGoStats(selected, values), scope));
