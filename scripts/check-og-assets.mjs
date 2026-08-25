// scripts/check-og-assets.mjs — proves every DYNAMIC OG image route bundles the brand assets it
// reads, so it can't ENOENT → 500 in production.
//
// THE FAILURE THIS CATCHES: a metadata image route (opengraph-image / twitter-image) under a
// dynamic segment ([compound], [slug]) renders at REQUEST time as a serverless function — Next 14.2
// will not statically prerender it (generateStaticParams doesn't help; verified). Its generator
// reads brand assets from public/ at render time (loadAssets / loadNewsAssets in
// src/lib/coupon-og.tsx). Vercel's file tracer does NOT bundle public/ into a function unless
// next.config.js's experimental.outputFileTracingIncludes force-includes them — so readFile throws
// ENOENT and the card 500s. That is exactly how every /prices/* OG card (since d99c44d) and /faq/*
// card shipped cardless. Static OG routes (each /coupons/<vendor>, /about, /compare, …) prerender
// the PNG at BUILD time — where the files are on disk — so they never hit a runtime read and are
// exempt here.
//
// WHY A BUILD-TIME GUARD WORKS (a runtime-only 500): the bug never reproduces in `next start`
// (files on disk), so a curl of a local server always 200s. But the FUNCTION FILE TRACE is
// deterministic at build — route.js.nft.json lists exactly what ships with the function — so we
// assert against the trace, not a live request.
//
// DISCOVERY, not a hand list: the dynamic OG routes come from .next/routes-manifest.json's
// dynamicRoutes, and the required assets come from parsing the generators/loaders in coupon-og.tsx.
// A new dynamic OG route added later is picked up automatically; if it reads assets that aren't
// traced, this fails loudly.
//
// Run: npm run check:og-assets   (post-build; in the build chain after `next build`)

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (...p) => join(root, ...p);

// ── parse coupon-og.tsx: each loader's public/ assets, and generator → loader ──────────────
const og = readFileSync(P("src/lib/coupon-og.tsx"), "utf8");

// loader name -> [ "public/…", … ] (the files it readFile()s)
const LOADER_ASSETS = {};
for (const m of og.matchAll(/function (load[A-Za-z]+)\s*\(/g)) {
  const name = m[1];
  const body = og.slice(m.index).match(/\{[\s\S]*?\n\}/);
  const assets = body ? [...body[0].matchAll(/readFile\(join\([^,]+,\s*"(public\/[^"]+)"\)/g)].map((x) => x[1]) : [];
  if (assets.length) LOADER_ASSETS[name] = [...new Set(assets)];
}
// generator (generateXxxOg) -> the loader it awaits
const GEN_LOADER = {};
for (const m of og.matchAll(/export async function (generate[A-Za-z]+Og)\b[\s\S]*?await (load[A-Za-z]+)\(\)/g)) {
  GEN_LOADER[m[1]] = m[2];
}

// ── dynamic OG routes, straight from the build manifest ────────────────────────────────────
const routesManifest = P(".next/routes-manifest.json");
if (!existsSync(routesManifest)) {
  console.error("check:og-assets: .next/routes-manifest.json missing — run `next build` first.");
  process.exit(1);
}
const dynamicOgRoutes = (JSON.parse(readFileSync(routesManifest, "utf8")).dynamicRoutes || [])
  .map((r) => r.page)
  .filter((page) => /\/(opengraph|twitter)-image$/.test(page))
  .sort();

// ── check each dynamic OG route's function trace includes its generator's assets ────────────
const failures = [];
for (const page of dynamicOgRoutes) {
  const src = P("src/app", `${page}.tsx`);
  if (!existsSync(src)) { failures.push(`${page}: route source not found (${src})`); continue; }
  const code = readFileSync(src, "utf8");

  const gen = Object.keys(GEN_LOADER).find((g) => code.includes(g));
  if (!gen) {
    // A dynamic OG route we can't reason about is a risk, not a pass — fail loud so it gets wired in.
    failures.push(`${page}: could not resolve which coupon-og generator it uses — extend check:og-assets so its assets are verified.`);
    continue;
  }
  const required = LOADER_ASSETS[GEN_LOADER[gen]] || [];
  if (!required.length) { failures.push(`${page}: generator ${gen} → loader ${GEN_LOADER[gen]} has no parseable assets — check the parser.`); continue; }

  const nft = P(".next/server/app", page, "route.js.nft.json");
  if (!existsSync(nft)) { failures.push(`${page}: no route.js.nft.json (${nft}) — build first.`); continue; }
  const traced = JSON.parse(readFileSync(nft, "utf8")).files || [];
  const missing = required.filter((asset) => !traced.some((f) => f.endsWith(asset)));
  if (missing.length) {
    failures.push(`${page} (${gen} → ${GEN_LOADER[gen]}): function trace is MISSING ${missing.join(", ")}`);
  }
}

if (failures.length) {
  console.error("check:og-assets FAILED — dynamic OG route(s) will ENOENT → 500 in production:\n");
  for (const f of failures) console.error(`  ✗ ${f}`);
  console.error("\nA dynamic OG route reads public/ assets at runtime but they are not bundled into its");
  console.error("serverless function. Fix: add the route's glob to experimental.outputFileTracingIncludes");
  console.error("in next.config.js with the missing assets (mirror the /coupons/** entry).");
  process.exit(1);
}

console.log(`check:og-assets OK — ${dynamicOgRoutes.length} dynamic OG route(s); each bundles its generator's public/ assets.`);
