// scripts/gen-search-index.mjs — DERIVES the site search index from the single sources.
//
// WHY THIS EXISTS
// The search index used to be a hand-typed array (src/lib/search-index.ts) that drifted to
// 133 entries while the site grew past 300 pages — guides, most news, bioregulators and every
// vendor coupon page were unsearchable. This generator rebuilds the index from the SAME data
// modules the rest of the site already derives from, so it can never fall behind again:
//
//   peptides      <- src/data/peptideCategories.ts   (peptideCategories[].peptides)
//   supplements   <- src/data/supplements.ts         (supplements)
//   news          <- src/data/news.ts                (articles)
//   coupons       <- src/data/vendors.slugs.json     (non-retired only) + vendors.ts (names)
//   glossary      <- src/data/glossary.ts            (glossarySections, one entry per term)
//   prices        <- src/data/prices.index.json      (indexable compounds only)
//   comparisons   <- src/app/compare/*/page.tsx      (buildPageMetadata title, parsed)
//   guides        <- src/app/guides/*/page.tsx       (buildPageMetadata title, parsed)
//   hub pages     <- src/data/routes.ts + HUB_PAGES  (the stable navigational anchors)
//
// RETIRED VENDORS ARE EXCLUDED — a coupon result that 308-redirects is a defect. Same
// `retired` flag the sitemap uses (vendors.slugs.json), so flipping it de-indexes a vendor.
//
// Output: src/lib/search-index.generated.ts (committed). Regenerate with `node scripts/gen-search-index.mjs`.
// scripts/check-search-index.mjs re-runs buildEntries() and fails the build if the committed
// file is stale relative to the sources / pages on disk.

import ts from "typescript";
import { readFileSync, existsSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (...p) => join(root, ...p);

// Execute an import-light TS data module (transpile -> CJS -> run). Type-only imports elide;
// a real require throws (these modules must stay dependency-free), same as check-grids.mjs.
function execModule(relPath) {
  const src = readFileSync(P(relPath), "utf8");
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const mod = { exports: {} };
  const requireGuard = (name) => {
    throw new Error(`${relPath} must stay import-free for gen-search-index (saw require("${name}"))`);
  };
  new Function("module", "exports", "require", outputText)(mod, mod.exports, requireGuard);
  return mod.exports;
}

// Parse the `title:` / `description:` string literals out of a page's buildPageMetadata({...}) call.
// Handles double-quoted single-line literals (compare/guides use these); strips a trailing brand suffix.
function parsePageMeta(pageAbsPath) {
  const src = readFileSync(pageAbsPath, "utf8");
  const titleM = src.match(/title:\s*"((?:[^"\\]|\\.)*)"/);
  const descM = src.match(/description:\s*"((?:[^"\\]|\\.)*)"/);
  const unescape = (s) => (s ? s.replace(/\\"/g, '"').replace(/\s*\|\s*Prof\. Peptide\s*$/, "").trim() : "");
  return { title: unescape(titleM?.[1]), description: unescape(descM?.[1]) };
}

// ── single-source loads ─────────────────────────────────────────────────────
const { peptideCategories } = execModule("src/data/peptideCategories.ts");
const { supplements } = execModule("src/data/supplements.ts");
const { articles } = execModule("src/data/news.ts");
const { glossarySections } = execModule("src/data/glossary.ts");
const { faqQuestions } = execModule("src/data/faqQuestions.ts");
const { vendors } = execModule("src/data/vendors.ts");
const { routes } = execModule("src/data/routes.ts");
const priceIndex = JSON.parse(readFileSync(P("src/data/prices.index.json"), "utf8"));
const blendIndex = JSON.parse(readFileSync(P("src/data/blends.index.json"), "utf8"));

// slug -> display name, for price-page titles (peptides + supplements cover the compound slugs).
const nameBySlug = {};
for (const c of peptideCategories) for (const p of c.peptides) nameBySlug[p.slug] = p.name;
for (const s of supplements) nameBySlug[s.slug] = s.name;
const titleCase = (slug) => slug.split("-").map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w)).join(" ");

// ── build the entries ───────────────────────────────────────────────────────
export function buildEntries() {
  const entries = [];
  const push = (title, url, category, description = "", tags = []) =>
    entries.push({ title, url, category, description, tags });

  // Peptides (all profiles, incl. every bioregulator — from the taxonomy, not a hand list).
  // The compound's library category is carried as a tag (a real attribute, not a synonym) so a
  // category word finds its members — e.g. "bioregulator" → Pinealon/Thymogen/Cortagen/Cardiogen.
  for (const c of peptideCategories)
    for (const p of c.peptides) push(p.name, `/peptides/${p.slug}`, "peptide", "", [c.name.toLowerCase()]);

  // Supplements (category tags likewise, so "nootropic"/"sleep" surface their members)
  for (const s of supplements) push(s.name, `/supplements/${s.slug}`, "supplement", "", (s.categories || []).map((c) => c.replace(/-/g, " ")));

  // Comparisons (title parsed from each page's own metadata)
  for (const slug of dirsIn("src/app/compare")) {
    const { title, description } = parsePageMeta(P("src/app/compare", slug, "page.tsx"));
    const head = (title || titleCase(slug)).split(" — ");
    push(head[0], `/compare/${slug}`, "comparison", head[1] || description || "");
  }

  // Guides
  for (const slug of dirsIn("src/app/guides")) {
    const { title, description } = parsePageMeta(P("src/app/guides", slug, "page.tsx"));
    push(title || titleCase(slug), `/guides/${slug}`, "guide", description);
  }

  // FAQ question pages (/faq/[slug]) — one googled question each. searchTags carry the exact
  // GSC queries (e.g. "needle size") so the page is findable by how it's actually searched.
  for (const q of faqQuestions) push(q.question, `/faq/${q.slug}`, "guide", q.metaDescription, q.searchTags);

  // News articles
  for (const a of articles) push(a.title, `/news/${a.slug}`, "news", a.excerpt || "");

  // Coupon pages — NON-RETIRED vendors with a deployed page only (retired -> excluded, so a
  // result can never 308-redirect). `retired` is read straight from the vendors registry (not the
  // gitignored vendors.slugs.json), so this needs no build-order dependency.
  for (const slug of Object.keys(vendors)) {
    if (vendors[slug].retired) continue;
    if (!existsSync(P("src/app/coupons", slug, "page.tsx"))) continue;
    push(`${vendors[slug].name} Discount Code`, `/coupons/${slug}`, "coupon", `${vendors[slug].name} coupon code and promo offer`);
  }

  // Price comparison pages — indexable compounds + blends only (thin/noindex ones excluded).
  // Compounds and blends share the /prices/[compound] route, so dedupe by URL.
  const pricedUrls = new Set();
  for (const row of [...priceIndex, ...blendIndex]) {
    if (!row.indexable) continue;
    const url = `/prices/${row.slug}`;
    if (pricedUrls.has(url)) continue;
    pricedUrls.add(url);
    const name = nameBySlug[row.slug] || titleCase(row.slug);
    push(`${name} Prices`, url, "price", `Compare ${name} prices across vendors`);
  }

  // Glossary — one entry per term (so "reconstitution", "lyophilized", etc. are findable).
  for (const sec of glossarySections)
    for (const [term, def] of sec.terms) push(term, "/glossary", "glossary", def);

  // Hub / navigational pages. routes.ts owns the six primary destinations; HUB_PAGES adds the
  // remaining stable anchors. This is the ONLY curated set — a dozen fixed top-level pages that
  // do not grow, not a content list. (Flagged in the task report.)
  for (const key of ["peptides", "verifiedVendors", "featuredVendors", "prices", "coupons", "calculator"]) {
    const r = routes[key];
    if (r) push(r.longLabel, r.href, "page", r.subline);
  }
  for (const [title, url, description] of HUB_PAGES) push(title, url, "page", description);

  return entries;
}

const HUB_PAGES = [
  ["Supplement Library", "/supplements", "Browse all supplement profiles"],
  ["Comparisons", "/compare", "Side-by-side compound comparisons"],
  ["News", "/news", "Latest peptide news and updates"],
  ["Guides", "/guides", "How-to guides for peptide research"],
  ["Glossary", "/glossary", "Peptide & supplement research glossary"],
  ["FAQ", "/faq", "Frequently asked questions"],
  ["Vendor Testing Index", "/vendor-testing-index", "Third-party testing by vendor"],
  ["Prof. Peptide App", "/app", "Get the Prof. Peptide app"],
];

function dirsIn(rel) {
  const dir = P(rel);
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(dir, d.name, "page.tsx")))
    .map((d) => d.name)
    .sort();
}

export function serialize(entries) {
  const body = entries
    .map((e) => `  ${JSON.stringify(e)},`)
    .join("\n");
  return (
    `// AUTO-GENERATED by scripts/gen-search-index.mjs — DO NOT EDIT BY HAND.\n` +
    `// Regenerate: node scripts/gen-search-index.mjs. Staleness is enforced by\n` +
    `// scripts/check-search-index.mjs (fails the build if this drifts from the sources).\n` +
    `import type { SearchEntry } from "./search-index";\n\n` +
    `export const generatedSearchIndex: SearchEntry[] = [\n${body}\n];\n`
  );
}

// Run directly -> write the file.
if (import.meta.url === `file://${process.argv[1]}`) {
  const entries = buildEntries();
  writeFileSync(P("src/lib/search-index.generated.ts"), serialize(entries));
  const byCat = {};
  for (const e of entries) byCat[e.category] = (byCat[e.category] || 0) + 1;
  console.log(`gen-search-index: wrote ${entries.length} entries →`, byCat);
}
