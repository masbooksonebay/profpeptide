// scripts/check-go-redirects.mjs — the /go/{slug} attribution guard.
//
// The tracked redirect must 302 to vendors[slug].url BYTE-FOR-BYTE — path, query, param order,
// encoding, trailing slash. The one way that silently breaks is routing the URL through `new URL()`,
// which normalizes `domain?query` → `domain/?query` and can re-encode a ref param, mutating the
// affiliate token. This guard enforces two things at build time:
//   1. STATIC: src/app/go/[slug]/route.ts sets Location to the raw target (goTarget), never
//      `new URL(target)` / `.toString()` on it. A future edit that normalizes the target fails here.
//   2. REPORT: for every active coupon vendor, whether `new URL(url).toString()` differs from the raw
//      url — the set of vendors whose attribution WOULD be corrupted if the raw-passthrough rule were
//      ever violated. (Runtime proof that the live Location matches is the /go/ live spot-check.)
//
// Run:  npm run check:go-redirects
// Exit: 0 = route passes raw + report printed; 1 = the route normalizes the target (attribution risk).

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Active coupon vendors (skip retired — they redirect and carry no affiliate card) + their url.
const vt = readFileSync(join(root, "src/data/vendors.ts"), "utf8");
const vendors = [];
for (const m of vt.matchAll(/^ {2}"([a-z0-9-]+)":\s*\{([\s\S]*?)^ {2}\},/gm)) {
  const [, slug, body] = m;
  if (/\bretired:\s*true\b/.test(body)) continue;
  const um = body.match(/url:\s*"([^"]+)"/);
  if (um) vendors.push({ slug, url: um[1] });
}

// Which URLs would new URL() normalization mutate? (raw !== normalized)
const mutated = [];
for (const { slug, url } of vendors) {
  let norm;
  try { norm = new URL(url).toString(); } catch { norm = "(invalid URL)"; }
  if (url !== norm) mutated.push({ slug, url, norm });
}

// STATIC assert: the route must NOT normalize the target. Fail if it calls new URL()/.toString() on
// the goTarget/target value (the /coupons fallback legitimately uses new URL(), so we key on `target`).
// Strip comments first — a comment that says "NOT new URL(target)" must not trip the check.
const routeSrc = readFileSync(join(root, "src/app/go/[slug]/route.ts"), "utf8")
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\/\/[^\n]*/g, "");
const normalizesTarget =
  /new URL\(\s*target\b/.test(routeSrc) || /\btarget\b[^;\n]*\.toString\(\)/.test(routeSrc);

console.log(`check:go-redirects — ${vendors.length} active coupon vendor(s) checked.`);
if (mutated.length) {
  console.log(`  ${mutated.length} URL(s) that new URL() normalization WOULD mutate (must pass raw):`);
  for (const { slug, url, norm } of mutated) {
    console.log(`    • ${slug}\n        raw : ${url}\n        norm: ${norm}`);
  }
} else {
  console.log("  0 URLs are altered by URL normalization on the current set.");
}

if (normalizesTarget) {
  console.error(
    "\ncheck:go-redirects FAILED — src/app/go/[slug]/route.ts normalizes the affiliate target " +
      "(new URL(target) / target.toString()). That mutates the ref token on the URL(s) above. " +
      "Set Location to the raw goTarget(slug) string instead.",
  );
  process.exit(1);
}

console.log("  route passes the affiliate URL RAW (no new URL()/toString on the target) — attribution preserved.");
