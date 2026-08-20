// scripts/prove-go-count.mjs — proves the /go/ counter increments, end-to-end, with NO Vercel KV
// provisioned: it stands up an in-process Upstash-REST mock, points @vercel/kv at it, and runs the
// REAL recordGoClick (from src/lib/go-count.ts) twice — showing the exact key and the value 1 -> 2.
import http from "node:http";
import { readFileSync } from "node:fs";
import ts from "typescript";

// Load the REAL count logic (go-count.ts is import-free, so transpile + run standalone).
const src = readFileSync(new URL("../src/lib/go-count.ts", import.meta.url), "utf8");
const js = ts.transpileModule(src, { compilerOptions: { module: "commonjs", target: "es2020" } }).outputText;
const mod = { exports: {} };
new Function("exports", "module", "require", js)(mod.exports, mod, () => ({}));
const { recordGoClick, goCountKey, utcDay } = mod.exports;

// In-memory store + a mock that speaks enough of the Upstash REST protocol for INCR (single + pipeline).
const store = {};
const seen = [];
function runCmd(arr) {
  const op = String(arr[0] || "").toLowerCase();
  if (op === "incr") {
    const key = arr[1];
    store[key] = (store[key] || 0) + 1;
    seen.push(`INCR ${key} -> ${store[key]}`);
    return store[key];
  }
  return null;
}
const server = http.createServer((req, res) => {
  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", () => {
    let payload;
    try { payload = JSON.parse(body); } catch { payload = req.url.split("/").filter(Boolean).map(decodeURIComponent); }
    res.setHeader("content-type", "application/json");
    if (req.url.includes("pipeline") || (Array.isArray(payload) && Array.isArray(payload[0]))) {
      res.end(JSON.stringify(payload.map((c) => ({ result: runCmd(c) }))));
    } else {
      res.end(JSON.stringify({ result: runCmd(payload) }));
    }
  });
});
await new Promise((r) => server.listen(0, r));
const port = server.address().port;
process.env.KV_REST_API_URL = `http://127.0.0.1:${port}`;
process.env.KV_REST_API_TOKEN = "mock-token";

// Import @vercel/kv AFTER the env is set (it reads the URL/token lazily on first command).
const { kv } = await import("@vercel/kv");

const fixed = new Date("2026-08-19T12:00:00Z");
const expectedKey = goCountKey("midwest-peptide", "coupon-card", utcDay(fixed));
console.log("expected key:", expectedKey);
console.log("--- simulate TWO clicks: /go/midwest-peptide?from=coupon-card ---");
await recordGoClick((k) => kv.incr(k), "midwest-peptide", "coupon-card", fixed);
await recordGoClick((k) => kv.incr(k), "midwest-peptide", "coupon-card", fixed);
// also a different surface + an unknown ?from to show bucketing
await recordGoClick((k) => kv.incr(k), "midwest-peptide", "coupon-reveal", fixed);
await recordGoClick((k) => kv.incr(k), "midwest-peptide", "totally-made-up", fixed);

console.log("\nwhat @vercel/kv actually sent the mock:");
seen.forEach((l) => console.log("  " + l));
console.log("\nfinal KV state:", JSON.stringify(store, null, 0));
server.close();
