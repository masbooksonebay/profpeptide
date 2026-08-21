// scripts/check-go-routing.mjs — anti-regression guard for /go/ affiliate routing (Phase A).
//
// Every outbound vendor click on the Phase-A surfaces MUST route through /go/{slug} so it is
// counted; a raw affiliate URL there is a silent regression (the commission lands but the click is
// invisible to PP). This asserts, against the BUILT HTML, that those surfaces render ZERO links to a
// vendor destination host — only /go/ links.
//
// Phase-A surfaces: /coupons (hub), /prices/*, /peptides/*, /best-peptide-vendors,
// /peptide-sciences-alternatives. Per-vendor /coupons/{slug} pages are EXCLUDED — their
// VendorProductGrid product deep-links are Phase B (deliberately not routed; /go/ can't carry a deep
// target yet). This guard does not touch or weaken check:go-redirects, which validates the /go/
// route itself.
//
// Runs POST-build (reads .next/server/app/*.html). Exit 0 = all routed; 1 = a raw affiliate href.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const APP = join(root, ".next/server/app");

// Vendor destination hosts from vendors.ts (exact + www-variance, so www.aminoclub.com is caught).
const vt = readFileSync(join(root, "src/data/vendors.ts"), "utf8");
const hosts = new Set();
for (const m of vt.matchAll(/url:\s*"([^"]+)"/g)) {
  try {
    const h = new URL(m[1]).host;
    const bare = h.replace(/^www\./, "");
    hosts.add(h);
    hosts.add(bare);
    hosts.add("www." + bare);
  } catch {}
}

// Phase-A page predicate (path without .html). Excludes /coupons/{slug}.
function isPhaseA(p) {
  if (p === "/coupons") return true;
  if (p.startsWith("/prices/")) return true;
  if (p.startsWith("/peptides/")) return true;
  if (p === "/best-peptide-vendors") return true;
  if (p === "/peptide-sciences-alternatives") return true;
  return false;
}

function walk(dir, base = "") {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p, base ? `${base}/${name}` : name));
    else if (name.endsWith(".html")) out.push({ rel: base ? `${base}/${name}` : name, path: p });
  }
  return out;
}

const HREF = /href="(https?:\/\/[^"]+)"/g;
const offenders = [];
let scanned = 0;
for (const { rel, path } of walk(APP)) {
  const page = "/" + rel.replace(/\.html$/, "");
  if (!isPhaseA(page)) continue;
  scanned++;
  const html = readFileSync(path, "utf8");
  for (const m of html.matchAll(HREF)) {
    let host;
    try {
      host = new URL(m[1].replace(/&amp;/g, "&")).host;
    } catch {
      continue;
    }
    if (hosts.has(host)) offenders.push({ page, url: m[1] });
  }
}

if (offenders.length) {
  const byPage = {};
  for (const o of offenders) (byPage[o.page] ??= []).push(o.url);
  console.error(`\ncheck:go-routing FAILED — ${offenders.length} raw affiliate href(s) on Phase-A surfaces (must route through /go/):`);
  for (const [page, urls] of Object.entries(byPage).sort((a, b) => b[1].length - a[1].length)) {
    console.error(`    • ${page}  (${urls.length})  e.g. ${urls[0]}`);
  }
  console.error(`  Route them through /go/{slug}?from={surface}. Per-vendor /coupons/{slug} product grids are Phase B — excluded.`);
  process.exit(1);
}
console.log(`check:go-routing OK — ${scanned} Phase-A page(s): every outbound vendor link routes through /go/, 0 raw affiliate hrefs.`);
