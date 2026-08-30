// scripts/gen-content-dates.mjs — per-coupon-page CONTENT change dates for the sitemap's lastmod.
//
// THE DEFECT THIS FIXES: /coupons/<vendor> took its lastmod from that vendor's PRICE-PULL date. A
// coupon page's prose, code, FAQ and differentiator all change independently of price pulls, so any
// content edit without a pull shipped a lastmod asserting the page had not changed. Measured:
// Royal's code fix landed 2026-08-26 and its sitemap still said 2026-08-16.
//
// WHY NOT THE OBVIOUS THINGS — all three were already tried or ruled out on this project:
//   - autoLastmod:true stamps BUILD TIME, identical on every URL, bumping on every deploy. Rejected
//     in the original design and still rejected.
//   - A per-file git date AT BUILD TIME was implemented and REVERTED (4cf76bd, Aug 2026): Vercel's
//     shallow clone needs an unshallow, and CLI deploys do not upload .git at all. The config's own
//     note says "Do NOT reintroduce a per-file git date" — meaning at build time, which this obeys.
//   - Filesystem mtimes do not survive the deploy pipeline.
//
// WHAT THIS DOES INSTEAD: a committed JSON of {hash, date} per page, read as plain data at build
// time. No git, no mtimes, no clock at build. A date moves only when THAT page's content hash moves,
// which is what keeps the dates from collapsing to one value the way the reverted attempt did.
//
// git is consulted ONLY here, and only to SEED a page the map has never seen — generation runs on a
// machine that has .git, the build never does. If git is unavailable the seed falls back to today,
// which is correct for a genuinely new page.
//
// HASH INPUTS are deliberately the things that change what a reader SEES: the page source and that
// vendor's registry entry. Price rows are excluded on purpose — they already drive lastmod through
// vendorPulled, and folding them in here would re-date all ~45 pages on every pull, recreating the
// flatness that got the last attempt reverted.
//
// Output: src/data/content-dates.generated.json (committed). Guarded by check-content-dates.mjs.
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (...p) => join(root, ...p);
const OUT = P("src/data/content-dates.generated.json");

function execModule(rel) {
  const src = readFileSync(P(rel), "utf8");
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const mod = { exports: {} };
  new Function("module", "exports", "require", outputText)(mod, mod.exports, () => ({}));
  return mod.exports;
}

function couponSlugs() {
  const dir = P("src/app/coupons");
  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(dir, d.name, "page.tsx")))
    .map((d) => d.name)
    .sort();
}

/** Stable fingerprint of everything that changes what the page renders. Key order is normalised so
 *  a reordered vendors.ts entry cannot masquerade as a content change. */
export function contentHash(slug, vendors) {
  const page = readFileSync(P("src/app/coupons", slug, "page.tsx"), "utf8");
  const v = vendors[slug] ?? {};
  const normalised = JSON.stringify(v, Object.keys(v).sort());
  return createHash("sha256").update(page).update(" ").update(normalised).digest("hex").slice(0, 16);
}

function gitDate(slug) {
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%ad", "--date=short", "--", `src/app/coupons/${slug}/page.tsx`],
      { cwd: root }
    )
      .toString()
      .trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch {
    return null;
  }
}

export function buildContentDates(today) {
  const vendors = execModule("src/data/vendors.ts").vendors;
  const prev = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")).coupons ?? {} : {};
  const coupons = {};
  const changed = [];
  const seeded = [];
  for (const slug of couponSlugs()) {
    const hash = contentHash(slug, vendors);
    const before = prev[slug];
    if (!before) {
      // Never seen: seed from git history where available, else treat as new today.
      const date = gitDate(slug) ?? today;
      coupons[slug] = { hash, date };
      seeded.push(`${slug} @ ${date}`);
    } else if (before.hash !== hash) {
      // Content moved — and ONLY then does the date move. Never backwards.
      const date = today > before.date ? today : before.date;
      coupons[slug] = { hash, date };
      changed.push(`${slug} ${before.date} -> ${date}`);
    } else {
      coupons[slug] = before;
    }
  }
  return { coupons, changed, seeded };
}

export function serialize(coupons) {
  return (
    JSON.stringify(
      {
        _comment:
          "AUTO-GENERATED by scripts/gen-content-dates.mjs — DO NOT EDIT BY HAND. Regenerate: node scripts/gen-content-dates.mjs. Guarded by check-content-dates.mjs.",
        coupons,
      },
      null,
      2
    ) + "\n"
  );
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const today = new Date().toISOString().slice(0, 10);
  const { coupons, changed, seeded } = buildContentDates(today);
  writeFileSync(OUT, serialize(coupons));
  const distinct = new Set(Object.values(coupons).map((c) => c.date)).size;
  console.log(
    `gen-content-dates: wrote ${Object.keys(coupons).length} coupon page(s) -> src/data/content-dates.generated.json`
  );
  console.log(`  distinct content dates: ${distinct}`);
  if (seeded.length) console.log(`  seeded from git: ${seeded.length}`);
  if (changed.length) {
    console.log(`  content changed since last run: ${changed.length}`);
    for (const c of changed) console.log(`    - ${c}`);
  }
}
