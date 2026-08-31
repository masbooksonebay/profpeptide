// scripts/gen-vendor-placement.mjs — emits docs/PP_VENDOR_PLACEMENT.md, the compound x vendor
// stock matrix that governs where vendor cards may be placed.
//
// WHY IT IS GENERATED, NOT WRITTEN: placement decisions have to answer "does this vendor actually
// stock this compound", and the only trustworthy answer is a price row — verified stock, not a
// marketing page. A hand-maintained matrix would be stale the first time a price pull ran, and a
// stale matrix produces the one thing a vendor card must never be: a link to a vendor that does
// not sell the peptide. Regenerate with:
//
//     node scripts/gen-vendor-placement.mjs
//
// Sources: src/data/prices.generated.ts (single-compound rows), prices.blends.generated.ts
// (blend rows), vendors.ts (roster + retired), attribution.ts (LISTED allowlist), and the
// /peptides route directory (which profiles actually exist).
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Same transpile+execute path the other guards use — these data modules are import-light by
// contract, so a require() here means someone broke that contract and we want to know loudly.
function execModule(rel, label) {
  const { outputText } = ts.transpileModule(readFileSync(join(root, rel), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const mod = { exports: {} };
  const req = (name) => {
    // type-only imports elide; a real require is a contract break EXCEPT for the known
    // intra-data imports, which we satisfy from what we've already loaded.
    if (name === "./prices") return {};
    if (name === "./attribution") return execModule("src/data/attribution.ts", "attribution.ts");
    if (name === "./vendors") return execModule("src/data/vendors.ts", "vendors.ts");
    throw new Error(`${label} must stay import-light (saw require("${name}"))`);
  };
  new Function("module", "exports", "require", outputText)(mod, mod.exports, req);
  return mod.exports;
}

const { vendors } = execModule("src/data/vendors.ts", "vendors.ts");
const { LISTED } = execModule("src/data/attribution.ts", "attribution.ts");
const { generatedPriceEntries } = execModule("src/data/prices.generated.ts", "prices.generated.ts");
const { generatedBlendEntries } = execModule("src/data/prices.blends.generated.ts", "prices.blends.generated.ts");

// 🔒 THE PRIORITY ORDER (Mark, 2026-08-30). Cards render in this order, and ONLY where the vendor
// has a price row for the compound — a card for a vendor that does not stock it is a broken click.
const PRIORITY = ["capstone-peptides", "amino-club", "peptide-partners", "glacier-aminos"];

const profiles = readdirSync(join(root, "src/app/peptides"), { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

const isRetired = (slug) => Boolean(vendors[slug]?.retired);

// compound -> Set(vendor) from BOTH surfaces; retired vendors excluded (they render nowhere).
const stock = new Map();
const add = (compound, vendor) => {
  if (!compound || !vendor || isRetired(vendor)) return;
  if (!stock.has(compound)) stock.set(compound, new Set());
  stock.get(compound).add(vendor);
};
for (const e of generatedPriceEntries) add(e.compound, e.vendor);
for (const e of generatedBlendEntries) add(e.blend, e.vendor);

const listedStock = (slug) =>
  [...(stock.get(slug) ?? [])].filter((v) => LISTED.has(v)).sort();

const rows = profiles.map((slug) => {
  const all = listedStock(slug);
  // TRACKED = the price pipeline holds at least one row under THIS slug. A profile can be
  // untracked while the compound is very much sold — gh-stack is the worked example: its rows
  // live under the blend slug `cjc-1295-no-dac-ipamorelin`, and nothing maps the two. On those
  // profiles the vendor block falls back to the hand-curated `highlights` list, which is NOT
  // stock-verified. Recorded separately so this doc never implies "nobody stocks it" when the
  // truth is "we hold no data under this name".
  const tracked = (stock.get(slug) ?? new Set()).size > 0;
  return {
    slug,
    tracked,
    priority: PRIORITY.filter((v) => all.includes(v)),
    others: all.filter((v) => !PRIORITY.includes(v)),
    total: all.length,
  };
});
const untracked = rows.filter((r) => !r.tracked);

// UNDER-DISTRIBUTED: a vendor stocking a compound that NO priority vendor carries. Those are the
// earned-placement candidates — a card there varies by page for a real reason (actual stock),
// which is the property Google credits and a site-wide identical block lacks.
const under = new Map();
for (const r of rows) {
  if (r.priority.length > 0 || !r.tracked) continue;
  for (const v of r.others) {
    if (!under.has(v)) under.set(v, []);
    under.get(v).push(r.slug);
  }
}

const dist = {};
for (const r of rows) dist[r.priority.length] = (dist[r.priority.length] ?? 0) + 1;

const L = [];
L.push("# Vendor placement matrix");
L.push("");
L.push("> ⚠️ **GENERATED — DO NOT EDIT BY HAND.** Regenerate with `node scripts/gen-vendor-placement.mjs`.");
L.push("> Source of truth is the price data (verified stock), never a vendor's marketing pages.");
L.push("");
L.push("A vendor card may be placed on a profile **only where that vendor has a price row for the");
L.push("compound**. A card for a vendor that does not stock the peptide is a broken click, so this");
L.push("matrix — not editorial preference — decides placement.");
L.push("");
L.push(`Priority order: ${PRIORITY.map((v) => vendors[v]?.name ?? v).join(" → ")}`);
L.push("");
L.push("## Priority-card count per profile");
L.push("");
L.push("| priority cards | profiles |");
L.push("| --- | --- |");
for (const k of Object.keys(dist).sort()) L.push(`| ${k} | ${dist[k]} |`);
L.push(`| **total** | **${rows.length}** |`);
L.push("");
L.push("## Priority-vendor coverage");
L.push("");
L.push("| vendor | profiles stocked |");
L.push("| --- | --- |");
for (const v of PRIORITY) {
  const n = rows.filter((r) => r.priority.includes(v)).length;
  L.push(`| ${vendors[v]?.name ?? v} | ${n} |`);
}
L.push("");
L.push("## ⚠️ Profiles the price pipeline does not track under their own slug");
L.push("");
L.push(`${untracked.length} of ${rows.length}. These hold no price row under the profile slug, so the`);
L.push("vendor block falls back to the hand-curated `highlights` list on the profile — which is NOT");
L.push("stock-verified. Absence here means *we hold no data under this name*, not that nobody stocks it:");
L.push("gh-stack is sold widely, but its rows sit under the blend slug `cjc-1295-no-dac-ipamorelin`");
L.push("and nothing maps the two.");
L.push("");
L.push("| profile |");
L.push("| --- |");
for (const r of untracked) L.push(`| ${r.slug} |`);
L.push("");
L.push("## Profiles with ZERO priority-vendor coverage (but tracked)");
L.push("");
const zero = rows.filter((r) => r.priority.length === 0 && r.tracked);
L.push(`${zero.length} of ${rows.length} profiles. These render no priority card at all.`);
L.push("");
L.push("| profile | listed vendors stocking it |");
L.push("| --- | --- |");
for (const r of zero) L.push(`| ${r.slug} | ${r.others.length ? r.others.join(", ") : "_none_"} |`);
L.push("");
L.push("## Under-distributed vendors — earned-placement candidates");
L.push("");
L.push("Vendors stocking compounds **no priority vendor carries**. A card for one of these on such a");
L.push("profile is a link that varies by page for a real reason.");
L.push("");
L.push("| vendor | compounds only it (and other non-priority vendors) cover |");
L.push("| --- | --- |");
for (const [v, cs] of [...under.entries()].sort((a, b) => b[1].length - a[1].length)) {
  L.push(`| ${vendors[v]?.name ?? v} (${cs.length}) | ${cs.join(", ")} |`);
}
L.push("");
L.push("## Full matrix");
L.push("");
L.push("| profile | priority cards (in order) | other listed vendors | total |");
L.push("| --- | --- | --- | --- |");
for (const r of rows) {
  L.push(`| ${r.slug} | ${r.priority.join(", ") || "—"} | ${r.others.join(", ") || "—"} | ${r.total} |`);
}
L.push("");

writeFileSync(join(root, "docs/PP_VENDOR_PLACEMENT.md"), L.join("\n"));
console.log(
  `gen-vendor-placement: ${rows.length} profiles, ` +
    `${Object.entries(dist).map(([k, v]) => `${v}@${k}`).join(" ")} priority-card distribution, ` +
    `${zero.length} tracked-with-zero-priority, ${untracked.length} untracked, ` +
    `${under.size} under-distributed vendor(s) -> docs/PP_VENDOR_PLACEMENT.md`
);
