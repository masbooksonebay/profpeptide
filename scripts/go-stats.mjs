// scripts/go-stats.mjs — read the /go/ click counters from Vercel KV and print a table.
//
// Needs the KV env in scope (KV_REST_API_URL + KV_REST_API_TOKEN). Two ways to get them:
//   • `vercel env pull .env.local` (once the KV store is provisioned + linked), then
//     `node --env-file=.env.local scripts/go-stats.mjs`
//   • or run it in any context where those vars are already set.
// Keys are `go:{slug}:{from}:{YYYY-MM-DD}` (INCR counters). This sums them by vendor and by surface,
// with an optional day filter: `node scripts/go-stats.mjs 2026-08-19`.
import { kv } from "@vercel/kv";

if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
  console.error("KV env missing (KV_REST_API_URL / KV_REST_API_TOKEN). Provision the KV store, then");
  console.error("`vercel env pull .env.local` and run: node --env-file=.env.local scripts/go-stats.mjs");
  process.exit(1);
}

const dayFilter = process.argv[2]; // optional YYYY-MM-DD

// Scan all go:* keys (SCAN cursor loop — safe on large sets).
const keys = [];
let cursor = 0;
do {
  const [next, batch] = await kv.scan(cursor, { match: "go:*", count: 1000 });
  keys.push(...batch);
  cursor = Number(next);
} while (cursor !== 0);

const wanted = dayFilter ? keys.filter((k) => k.endsWith(":" + dayFilter)) : keys;
if (!wanted.length) {
  console.log(dayFilter ? `No /go/ clicks recorded for ${dayFilter}.` : "No /go/ clicks recorded yet.");
  process.exit(0);
}

const values = await kv.mget(...wanted);
const byVendor = {};
const bySurface = {};
let total = 0;
wanted.forEach((key, i) => {
  const n = Number(values[i]) || 0;
  const [, slug, from] = key.split(":"); // go:{slug}:{from}:{day}
  byVendor[slug] = (byVendor[slug] || 0) + n;
  bySurface[from] = (bySurface[from] || 0) + n;
  total += n;
});

const table = (obj) =>
  Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `  ${String(v).padStart(6)}  ${k}`)
    .join("\n");

console.log(`/go/ clicks${dayFilter ? ` on ${dayFilter}` : " (all-time)"} — total ${total}\n`);
console.log("By vendor:\n" + table(byVendor));
console.log("\nBy surface:\n" + table(bySurface));
