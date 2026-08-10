// scripts/check-og-metadata.mjs — the OpenGraph-metadata guard.
//
// Two failures shipped in Aug 2026, both invisible until a page was actually shared:
//   1. Every hub with a BARE `export const metadata = { title, description }` (no openGraph)
//      inherited the root layout's openGraph WHOLESALE — og:title "Prof. Peptide",
//      og:description the site default, and og:url the HOMEPAGE — even though its <title>
//      was correct. /coupons (PP's highest-value social surface) shared generically and
//      attributed every share to the homepage.
//   2. /news set openGraph.title/description but omitted url, so og:url inherited the homepage.
// Next never derives og:title from <title>, and it shallow-merges a child openGraph over the
// parent — so an omitted field silently falls through to the site default. This guard makes
// that class un-shippable.
//
// TWO ASSERTIONS, per indexable route:
//   A1. og:url MUST equal the page's canonical (self-referencing). Fail when og:url points
//       elsewhere — the homepage especially.
//   A2. og:title / og:description MUST NOT be silently defaulted: if a page's <title> differs
//       from the site default but og:title equals the default ("Prof. Peptide"), fail. Same
//       for description.
//
// MECHANISM — RESOLVED metadata, not a static AST guess (inheritance IS the bug, and a static
// pass can't see it):
//   • Static routes: read the RESOLVED <head> from the prerendered HTML in .next/server/app
//     (the same "consume built output" approach check:sitemap-noindex uses). MUST run AFTER
//     `next build`.
//   • Dynamic routes (ƒ — /peptides & /supplements force dynamic via searchParams, so they
//     produce NO prerendered HTML): resolve their `metadata` export directly — transpile the
//     page module and evaluate it, applying the SAME openGraph inheritance defaults Next would
//     at render time (an omitted og field resolves to the site default). Without this the two
//     hubs I just fixed would be silently skipped.
//
// The site defaults are DERIVED from the homepage (index.html) at runtime — the homepage has no
// metadata override, so its resolved <head> IS the root default. No hand-kept constants to rot.
//
// Allowlisted: the homepage "/" (og:title == default and og:url == homepage are CORRECT there).
// Skipped: noindex routes (OG is not consumed) — detected from the rendered robots meta (static)
// or a literal robots:{index:false} in source (dynamic).
//
// Run:  npm run check:og-metadata   (in the build chain, AFTER next build)
// Exit: 0 = every checked page self-references og:url and carries page-specific og:title/desc;
//       1 = at least one violation (or the built output is missing).

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const APP = join(root, "src", "app");
const NEXT_APP = join(root, ".next", "server", "app");
const SITE = "https://profpeptide.com";

// ── built-output presence ─────────────────────────────────────────────────────
const HOME_HTML = join(NEXT_APP, "index.html");
if (!existsSync(NEXT_APP) || !existsSync(HOME_HTML)) {
  console.error(
    "check:og-metadata FAILED — no prerendered output at .next/server/app (index.html missing).\n" +
      "  This guard reads RESOLVED metadata from the build; run `next build` first.\n" +
      "  In the build chain it runs after `next build`, so a normal build satisfies it.",
  );
  process.exit(1);
}

// ── HTML <head> extraction (order-agnostic) ───────────────────────────────────
const decode = (s) =>
  s == null
    ? s
    : s
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#(?:39|x27);/g, "'")
        .replace(/&#x2F;/g, "/");
const attrOf = (tag, name) => {
  const m = tag.match(new RegExp(`\\b${name}="([^"]*)"`));
  return m ? m[1] : null;
};
function metaByProperty(html, prop) {
  for (const m of html.matchAll(/<meta\b[^>]*>/g)) if (attrOf(m[0], "property") === prop) return attrOf(m[0], "content");
  return null;
}
function metaByName(html, name) {
  for (const m of html.matchAll(/<meta\b[^>]*>/g)) if (attrOf(m[0], "name") === name) return attrOf(m[0], "content");
  return null;
}
function canonicalOf(html) {
  for (const m of html.matchAll(/<link\b[^>]*>/g)) if (attrOf(m[0], "rel") === "canonical") return attrOf(m[0], "href");
  return null;
}
const titleOf = (html) => {
  const m = html.match(/<title>([\s\S]*?)<\/title>/);
  return m ? m[1] : null;
};

function fieldsFromHtml(html) {
  return {
    title: decode(titleOf(html)),
    metaDesc: decode(metaByName(html, "description")),
    canonical: canonicalOf(html),
    ogUrl: metaByProperty(html, "og:url"),
    ogTitle: decode(metaByProperty(html, "og:title")),
    ogDesc: decode(metaByProperty(html, "og:description")),
    noindex: /noindex/i.test(metaByName(html, "robots") || ""),
  };
}

// ── site defaults, derived from the homepage's resolved head ───────────────────
const home = fieldsFromHtml(readFileSync(HOME_HTML, "utf8"));
const DEFAULT_TITLE = home.title;
const DEFAULT_META_DESC = home.metaDesc;
const DEFAULT_OG_TITLE = home.ogTitle; // "Prof. Peptide"
const DEFAULT_OG_DESC = home.ogDesc; // "Evidence-based peptide education and research tools."

// ── dynamic-route resolver: transpile the page module + read its metadata export ──
// @/*.ts (pure lib/data, e.g. seo.ts, peptideCategories.ts) is loaded for real so counts and
// buildPageMetadata evaluate; @/*.tsx components and node_modules (next/link, react/jsx-runtime)
// are stubbed — they're only referenced inside the page component, never while `metadata`
// (a top-level const) is being evaluated.
const STUB = new Proxy(function () {}, { get: () => STUB, apply: () => STUB });
const tsCache = new Map();
function loadTsModule(abs) {
  if (tsCache.has(abs)) return tsCache.get(abs);
  const js = ts.transpileModule(readFileSync(abs, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const mod = { exports: {} };
  tsCache.set(abs, mod.exports);
  const shimRequire = (spec) => {
    if (spec.startsWith("@/")) {
      const p = join(root, "src", spec.slice(2));
      if (existsSync(`${p}.ts`)) return loadTsModule(`${p}.ts`); // pure lib/data
    }
    return STUB; // .tsx components, next/*, react/*
  };
  // eslint-disable-next-line no-new-func
  new Function("exports", "require", "module", "__filename", "__dirname", js)(
    mod.exports,
    shimRequire,
    mod,
    abs,
    dirname(abs),
  );
  tsCache.set(abs, mod.exports);
  return mod.exports;
}
function fieldsFromExport(route) {
  const base = route === "/" ? "" : route;
  const file = [join(APP, base, "page.tsx"), join(APP, base, "layout.tsx")].find(
    (f) => existsSync(f) && /export\s+const\s+metadata\b/.test(readFileSync(f, "utf8")),
  );
  if (!file) return null;
  const meta = loadTsModule(file).metadata;
  if (!meta) return null;
  const robots = readFileSync(file, "utf8");
  const canonical = meta.alternates?.canonical ?? null;
  // Apply the same inheritance Next would at render: an omitted og field resolves to the default.
  return {
    title: meta.title ?? DEFAULT_TITLE,
    metaDesc: meta.description ?? DEFAULT_META_DESC,
    canonical,
    ogUrl: meta.openGraph?.url ?? SITE, // omitted og:url renders as the homepage default
    ogTitle: meta.openGraph?.title ?? DEFAULT_OG_TITLE,
    ogDesc: meta.openGraph?.description ?? DEFAULT_OG_DESC,
    noindex: /robots\s*:\s*\{[^}]*index\s*:\s*false/.test(robots),
  };
}

// ── route inventory ───────────────────────────────────────────────────────────
// Static routes: every prerendered *.html (skip Next internals like _not-found).
const staticRoutes = new Map(); // route -> html path
(function walk(dir) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, name.name);
    if (name.isDirectory()) walk(full);
    else if (name.name.endsWith(".html") && !name.name.startsWith("_")) {
      const rel = relative(NEXT_APP, full).replace(/\.html$/, "").split(sep).join("/");
      staticRoutes.set(rel === "index" ? "/" : `/${rel}`, full);
    }
  }
})(NEXT_APP);

// Dynamic routes: a src/app page whose route has no prerendered HTML (ƒ dynamic). Skip [param]
// template dirs — their concrete instances are in the static set.
const dynamicRoutes = [];
(function walk(dir) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    if (!name.isDirectory()) continue;
    if (name.name.includes("[") || name.name.startsWith("(") || name.name.startsWith("@")) {
      walk(join(dir, name.name));
      continue;
    }
    walk(join(dir, name.name));
  }
  if (existsSync(join(dir, "page.tsx"))) {
    const rel = relative(APP, dir).split(sep).join("/");
    const route = rel === "" ? "/" : `/${rel}`;
    if (!rel.includes("[") && !staticRoutes.has(route)) dynamicRoutes.push(route);
  }
})(APP);

// ── assertions ────────────────────────────────────────────────────────────────
const norm = (u) => (u ? u.replace(/\/+$/, "") || SITE : u);
const failures = [];
function check(route, f, mode) {
  if (route === "/") return; // homepage: default og is correct here
  if (f.noindex) return; // OG not consumed on noindex pages

  const absCanonical = f.canonical ? (f.canonical.startsWith("http") ? f.canonical : SITE + f.canonical) : null;
  // A1 — og:url must equal canonical (self-referencing).
  if (!f.ogUrl) failures.push({ route, mode, rule: "A1", why: "og:url is missing (renders as the homepage default)" });
  else if (!absCanonical) failures.push({ route, mode, rule: "A1", why: "no canonical to self-reference against" });
  else if (norm(f.ogUrl) !== norm(absCanonical))
    failures.push({ route, mode, rule: "A1", why: `og:url "${f.ogUrl}" != canonical "${absCanonical}"` });

  // A2 — og:title / og:description must not be the site default while the page's own differs.
  if (f.ogTitle === DEFAULT_OG_TITLE && f.title !== DEFAULT_TITLE)
    failures.push({ route, mode, rule: "A2", why: `og:title is the site default ("${DEFAULT_OG_TITLE}") while <title> is page-specific` });
  if (f.ogDesc === DEFAULT_OG_DESC && f.metaDesc !== DEFAULT_META_DESC)
    failures.push({ route, mode, rule: "A2", why: "og:description is the site default while the page description is page-specific" });
}

let checked = 0;
for (const [route, html] of staticRoutes) {
  if (route === "/") continue;
  const f = fieldsFromHtml(readFileSync(html, "utf8"));
  if (f.noindex) continue;
  check(route, f, "static");
  checked++;
}
for (const route of dynamicRoutes) {
  const f = fieldsFromExport(route);
  if (!f || f.noindex) continue;
  check(route, f, "dynamic");
  checked++;
}

// ── report ────────────────────────────────────────────────────────────────────
if (failures.length) {
  console.error(`check:og-metadata FAILED — ${failures.length} OpenGraph violation(s) across ${checked} checked page(s):\n`);
  for (const v of failures) console.error(`  ✗ [${v.rule} · ${v.mode}] ${v.route} — ${v.why}`);
  console.error(
    "\n  Route each affected page through buildPageMetadata({ path, title, description, useDefaultOgImage: false })\n" +
      "  (see src/lib/seo.ts) so og:url is self-referencing and og:title/description are page-specific.",
  );
  process.exit(1);
}

console.log(
  `check:og-metadata OK — ${checked} indexable page(s): og:url self-references canonical, ` +
    `and no page serves the default og:title/description while its own differs ` +
    `(${staticRoutes.size - 1} static via prerendered HTML, ${dynamicRoutes.length} dynamic via metadata export).`,
);
