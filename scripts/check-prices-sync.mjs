// scripts/check-prices-sync.mjs — proves the committed price artifacts match the master doc.
//
// prices.generated.ts and prices.index.json are COMMITTED artifacts produced by
// scripts/price-pull/to_prices.py from docs/PP_PRICE_DATA_MASTER_v1.md. Nothing else verified
// that they actually match the doc — so a corrupted doc could be regenerated into a corrupted
// artifact (both committed) and no guard would notice, and a hand-edit to the artifact (or a
// forgotten regenerate after a doc edit) would silently drift. This runs the transform in
// --emit mode (deterministic: PRICES_UPDATED comes from the doc, not today's date), captures
// stdout, and diffs it against the committed files. Any divergence FAILS the build.
//
// Fix on failure: `python3 scripts/price-pull/to_prices.py` to regenerate — but first look at
// WHY it drifted (a doc edit that wasn't regenerated? a hand-edited artifact? a corruption?).
//
// Run:  npm run check:prices-sync   (also in the build chain; FAILS on drift)

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const toPrices = join(root, "scripts/price-pull/to_prices.py");

const targets = [
  { emit: "prices", file: "src/data/prices.generated.ts" },
  { emit: "index", file: "src/data/prices.index.json" },
  { emit: "blends", file: "src/data/prices.blends.generated.ts" },
  { emit: "blends-index", file: "src/data/blends.index.json" },
];

let drift = false;
for (const t of targets) {
  let fresh;
  try {
    fresh = execFileSync("python3", [toPrices, "--emit", t.emit], {
      cwd: root, encoding: "utf8", maxBuffer: 32 * 1024 * 1024,
    });
  } catch (e) {
    console.error(`check:prices-sync FAILED — to_prices.py --emit ${t.emit} errored:\n${e.stderr || e.message}`);
    process.exit(1);
  }
  const committed = readFileSync(join(root, t.file), "utf8");
  if (fresh === committed) {
    console.log(`check:prices-sync OK — ${t.file} matches the master doc.`);
  } else {
    drift = true;
    // first differing line, for a useful message
    const f = fresh.split("\n"), c = committed.split("\n");
    let i = 0;
    while (i < Math.min(f.length, c.length) && f[i] === c[i]) i++;
    console.error(`\ncheck:prices-sync FAILED — ${t.file} has DRIFTED from the master doc.`);
    console.error(`  committed lines: ${c.length}, doc-would-generate: ${f.length}`);
    console.error(`  first divergence @ line ${i + 1}:`);
    console.error(`    committed: ${JSON.stringify(c[i])}`);
    console.error(`    from doc : ${JSON.stringify(f[i])}`);
  }
}

if (drift) {
  console.error(`\nThe committed artifact does not match docs/PP_PRICE_DATA_MASTER_v1.md.`);
  console.error(`Investigate the cause, then regenerate: python3 scripts/price-pull/to_prices.py`);
  process.exit(1);
}
