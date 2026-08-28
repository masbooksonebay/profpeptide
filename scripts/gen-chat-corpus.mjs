// scripts/gen-chat-corpus.mjs — DERIVES the AI-chat retrieval corpus from the site's own pages.
//
// WHY THIS EXISTS
// Phase 1 recon found search-index.generated.ts is navigation-only (title/url/category — no body
// text). This generator extracts the actual retrievable PROSE — the same text a visitor reads —
// from the page.tsx source files, so a future chat feature can answer strictly from what the site
// already says. No second editorial layer: the corpus is a mechanical extraction of the pages'
// own text, not a hand-written summary that could drift from a profile-audit rewrite.
//
// SOURCES (mirrors gen-search-index.mjs's single-source discipline):
//   peptides, supplements, bioregulators, guides  <- page.tsx `sections`/`faqs`/`studies` arrays
//   comparisons                                    <- page.tsx `rows` tuples + intro/verdict prose
//   coupon/vendor pages                            <- page.tsx full JSX body (FAQItem + prose)
//   faq/[slug] pages                                <- src/data/faqQuestions.ts (import-free data;
//                                                       reuses the site's own faqAnswerText())
//
// EXCLUSION RULE (locked spec): discount codes, prices, and stock status are NEVER extracted into
// the corpus. Two layers catch them:
//   1. AST-level: any `{expr}` JSX interpolation or `${expr}` template interpolation that isn't a
//      already-captured local array (e.g. `{discountPct}`, `{v.code}`, `{autoApply ? ... : ...}`)
//      is replaced with a REDACT token — refuse rather than guess at the value.
//   2. Regex backstop: a final pass over the assembled text catches LITERAL code/price strings the
//      AST layer wouldn't flag (e.g. "PROFPEPTIDE" typed directly in FAQ prose, "$150", "Save 20%").
// Every substitution is COUNTED and reported (silent-drop is not allowed — refuse, but always count).
//
// Output: src/lib/chat-corpus.generated.ts (committed). Regenerate with `node scripts/gen-chat-corpus.mjs`.
// scripts/check-chat-corpus.mjs re-runs buildCorpus() and fails the build if the committed file is
// stale — same contract as search-index.generated.ts / check-search-index.mjs.

import ts from "typescript";
import { readFileSync, existsSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (...p) => join(root, ...p);

const REDACT = "[[REDACTED]]";

// ── import-free module execution (identical technique to gen-search-index.mjs / check-grids.mjs) ──
function execModule(relPath) {
  const src = readFileSync(P(relPath), "utf8");
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const mod = { exports: {} };
  const requireGuard = (name) => {
    throw new Error(`${relPath} must stay import-free for gen-chat-corpus (saw require("${name}"))`);
  };
  new Function("module", "exports", "require", outputText)(mod, mod.exports, requireGuard);
  return mod.exports;
}

// ── regex backstop (belt-and-suspenders on top of the AST-level redaction) ─────────────────────
// Broader than check-codes.mjs's Tier-1 CODE_RE on purpose: this is REDACTION, not validation —
// it must also catch sale-code variants like PROFPEPTIDE50/PROFPEPTIDE25 that the guard's narrower
// pattern deliberately excludes. NOT case-insensitive: real codes on this site are always rendered
// uppercase (roster convention, confirmed 2026-08-27 — order-my-peptides/athena-peptides were just
// normalized to match). An /i flag here would also make the [A-Z0-9] class match lowercase, so
// "PROF" + "ile" (from the ordinary word "profile") would false-positive — confirmed empirically:
// an early version of this pattern redacted ~9 tokens per peptide profile, 100% of them "profile"/
// "ProfileTOC"/"profpeptide.com" domain text, zero real codes.
const CODE_PATTERN = /\bPROF[A-Z0-9]{2,}\b/g;
const PRICE_PATTERN = /\$\d[\d,]*(?:\.\d{1,2})?/g;
const DISCOUNT_PATTERN = /\b\d{1,3}%\s*(?:off\b|discount\b)|\bSave\s+\d{1,3}%/gi;
const STOCK_PATTERN = /\b(?:in stock|out of stock|sold out|back[- ]?order(?:ed)?)\b/gi;

function redactLiterals(text, counter) {
  let n = 0;
  const hit = () => {
    n += 1;
    return REDACT;
  };
  let out = text.replace(CODE_PATTERN, hit).replace(PRICE_PATTERN, hit).replace(DISCOUNT_PATTERN, hit).replace(STOCK_PATTERN, hit);
  counter.count += n;
  return out;
}

// ── generic literal/JSX text walker ─────────────────────────────────────────────────────────────
// Returns a flat array of text fragments (caller joins/formats). `skipNames` is the set of
// top-level array-variable names already extracted by a dedicated handler (sections/faqs/rows/
// studies/lineup) — a `{name.map(...)}` JSX reference to one of those is SKIPPED here (its content
// is already captured), not redacted as a leaked dynamic value.
function walk(node, sf, counter, skipNames, out = []) {
  if (!node) return out;

  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    const t = node.text.trim();
    if (t) out.push(t);
    return out;
  }

  if (ts.isTemplateExpression(node)) {
    if (node.head.text.trim()) out.push(node.head.text.trim());
    for (const span of node.templateSpans) {
      counter.count += 1;
      out.push(REDACT);
      const tail = span.literal.text.trim();
      if (tail) out.push(tail);
    }
    return out;
  }

  if (ts.isArrayLiteralExpression(node)) {
    for (const el of node.elements) walk(el, sf, counter, skipNames, out);
    return out;
  }

  if (ts.isObjectLiteralExpression(node)) {
    for (const prop of node.properties) {
      if (ts.isPropertyAssignment(prop)) walk(prop.initializer, sf, counter, skipNames, out);
    }
    return out;
  }

  if (ts.isParenthesizedExpression(node)) return walk(node.expression, sf, counter, skipNames, out);

  if (ts.isConditionalExpression(node)) {
    walk(node.whenTrue, sf, counter, skipNames, out);
    walk(node.whenFalse, sf, counter, skipNames, out);
    return out;
  }

  if (ts.isJsxFragment(node)) {
    for (const c of node.children) walk(c, sf, counter, skipNames, out);
    return out;
  }

  if (ts.isJsxElement(node)) {
    const tag = node.openingElement.tagName.getText(sf);
    // FAQItem is captured once, whole-file, by extractInlineFaqItems() into the page's dedicated
    // `faqs` field — skip here so its Q/A text isn't duplicated into the generic body prose too.
    if (tag === "FAQItem") return out;
    for (const c of node.children) walk(c, sf, counter, skipNames, out);
    // Block-level tags get a sentence boundary so extracted text doesn't run together.
    if (/^(p|div|li|h1|h2|h3|h4|dt|dd|tr|section)$/i.test(tag)) out.push("");
    return out;
  }

  if (ts.isJsxSelfClosingElement(node)) {
    const tag = node.tagName.getText(sf);
    if (tag === "FAQItem") return out; // see note above
    return out; // Link/img/br etc with no children carry no extractable text here.
  }

  if (ts.isJsxText(node)) {
    const t = node.text.replace(/\s+/g, " ").trim();
    if (t) out.push(t);
    return out;
  }

  if (ts.isJsxExpression(node)) {
    const expr = node.expression;
    if (!expr) return out;
    if (ts.isStringLiteral(expr) || ts.isNoSubstitutionTemplateLiteral(expr) || ts.isTemplateExpression(expr)) {
      return walk(expr, sf, counter, skipNames, out);
    }
    if (ts.isConditionalExpression(expr)) return walk(expr, sf, counter, skipNames, out);
    if (ts.isJsxElement(expr) || ts.isJsxFragment(expr) || ts.isJsxSelfClosingElement(expr)) {
      return walk(expr, sf, counter, skipNames, out);
    }
    // `{name.map(...)}` referencing an already-extracted named array — skip, not a leak.
    if (ts.isCallExpression(expr) && ts.isPropertyAccessExpression(expr.expression)) {
      const base = expr.expression.expression;
      if (ts.isIdentifier(base) && skipNames.has(base.text)) return out;
    }
    if (ts.isCallExpression(expr) && ts.isIdentifier(expr.expression) && skipNames.has(expr.expression.text)) {
      return out;
    }
    // Anything else (`{discountPct}`, `{v.code}`, `{someFn()}`) is a genuine dynamic value.
    counter.count += 1;
    out.push(REDACT);
    return out;
  }

  return out;
}

function walkFaqItem(openingLike, sf, counter, skipNames, out) {
  let q = "",
    a = [];
  for (const attr of openingLike.attributes.properties) {
    if (!ts.isJsxAttribute(attr) || !attr.initializer) continue;
    const name = attr.name.getText(sf);
    const init = attr.initializer;
    const value = ts.isStringLiteral(init) ? [init.text] : ts.isJsxExpression(init) ? walk(init, sf, counter, skipNames, []) : [];
    if (name === "q") q = value.join(" ").trim();
    if (name === "a") a = value;
  }
  const aText = a.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  if (q || aText) out.push(`Q: ${q} A: ${aText}`);
  return out;
}

function textOf(node, sf, counter, skipNames) {
  return walk(node, sf, counter, skipNames, [])
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

// ── find top-level `const <name> = [...]` array declarations by name ───────────────────────────
function findTopArray(sourceFile, name) {
  for (const stmt of sourceFile.statements) {
    if (!ts.isVariableStatement(stmt)) continue;
    for (const decl of stmt.declarationList.declarations) {
      if (ts.isIdentifier(decl.name) && decl.name.text === name && decl.initializer && ts.isArrayLiteralExpression(decl.initializer)) {
        return decl.initializer;
      }
    }
  }
  return null;
}

function findDefaultExportReturn(sourceFile) {
  let found = null;
  const visit = (node) => {
    if (found) return;
    if (ts.isFunctionDeclaration(node) && node.modifiers?.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword)) {
      found = node.body;
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  if (!found) return null;
  let ret = null;
  const findReturn = (node) => {
    if (ret) return;
    if (ts.isReturnStatement(node) && node.expression) ret = node.expression;
    ts.forEachChild(node, findReturn);
  };
  findReturn(found);
  return ret;
}

// Coupon pages write their FAQ accordion as inline `<FAQItem q="..." a="..."/>` JSX (no top-level
// `faqs` array to find) — a documented blind spot for sweeps that only read named data arrays.
// Scan the WHOLE file for FAQItem elements anywhere, regardless of nesting. Peptide/supplement/
// guide pages render their faqs via `{faqs.map(...)}`, never a literal <FAQItem>, so there is no
// overlap with extractFaqs() — this only fires for pages that actually use inline FAQItem JSX.
function extractInlineFaqItems(sourceFile, sf, counter) {
  const out = [];
  const visit = (node) => {
    const isFaqItem =
      (ts.isJsxSelfClosingElement(node) && node.tagName.getText(sf) === "FAQItem") ||
      (ts.isJsxElement(node) && node.openingElement.tagName.getText(sf) === "FAQItem");
    if (isFaqItem) {
      const opening = ts.isJsxElement(node) ? node.openingElement : node;
      const items = walkFaqItem(opening, sf, counter, new Set(), []);
      for (const line of items) {
        const m = line.match(/^Q: (.*) A: (.*)$/s);
        if (m) out.push({ q: m[1], a: m[2] });
      }
      return; // don't recurse into an already-handled FAQItem's own attribute expressions again
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return out;
}

// buildPageMetadata's inline `title: "..."` string covers most page types, but coupon pages build
// their title in a shared lib function (buildCouponMetadata) from vendors.ts, not a literal string
// in page.tsx — so pageTitle() finds nothing for them. Fall back to the page's own <h1> text, which
// every template renders directly (and which redactLiterals() already scrubs of any code/discount
// figure the H1 contains, e.g. "Athena Peptides Discount Code: PROFPEPTIDE — Save 10%").
function findFirstH1Text(sourceFile, sf, counter) {
  let text = "";
  const visit = (node) => {
    if (text) return;
    if (ts.isJsxElement(node) && node.openingElement.tagName.getText(sf) === "h1") {
      text = textOf(node, sf, counter, new Set());
      return;
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return text;
}

// ── dedicated per-shape extractors (sections/faqs/studies get real structure; everything else
//    falls through to the generic object-literal walker) ───────────────────────────────────────
function extractSections(arrayNode, sf, counter) {
  const out = [];
  for (const el of arrayNode.elements) {
    if (!ts.isObjectLiteralExpression(el)) continue;
    let heading = "";
    const bodyParts = [];
    for (const prop of el.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;
      const key = prop.name.getText(sf);
      if (key === "title") heading = textOf(prop.initializer, sf, counter, new Set());
      else if (key === "id") continue;
      else bodyParts.push(textOf(prop.initializer, sf, counter, new Set()));
    }
    const text = bodyParts.filter(Boolean).join(" ").trim();
    if (heading || text) out.push({ heading, text });
  }
  return out;
}

function extractFaqs(arrayNode, sf, counter) {
  const out = [];
  for (const el of arrayNode.elements) {
    if (!ts.isObjectLiteralExpression(el)) continue;
    let q = "",
      a = "";
    for (const prop of el.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;
      const key = prop.name.getText(sf);
      if (key === "q") q = textOf(prop.initializer, sf, counter, new Set());
      else if (key === "a") a = textOf(prop.initializer, sf, counter, new Set());
    }
    if (q || a) out.push({ q, a });
  }
  return out;
}

function extractStudies(arrayNode, sf, counter) {
  const out = [];
  for (const el of arrayNode.elements) {
    if (!ts.isObjectLiteralExpression(el)) continue;
    const f = {};
    for (const prop of el.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;
      f[prop.name.getText(sf)] = textOf(prop.initializer, sf, counter, new Set());
    }
    const cite = [f.title, f.authors && `(${f.authors}${f.year ? ", " + f.year : ""})`, f.summary].filter(Boolean).join(" ");
    if (cite) out.push(cite);
  }
  return out;
}

function extractGenericArray(arrayNode, sf, counter) {
  // Fallback for shapes with no dedicated extractor (e.g. bioregulators' `lineup`): join each
  // object's own key: value pairs into one line per element.
  const out = [];
  for (const el of arrayNode.elements) {
    if (ts.isObjectLiteralExpression(el)) {
      const parts = [];
      for (const prop of el.properties) {
        if (!ts.isPropertyAssignment(prop)) continue;
        const key = prop.name.getText(sf);
        const val = textOf(prop.initializer, sf, counter, new Set());
        if (val) parts.push(`${key}: ${val}`);
      }
      if (parts.length) out.push(parts.join(". "));
    } else {
      const t = textOf(el, sf, counter, new Set());
      if (t) out.push(t);
    }
  }
  return out;
}

// Comparison pages: `const rows = [[label, a, b], ...]` — no dedicated column-header JSX search;
// the two subjects come from the page title ("X vs Y ...").
function extractRows(arrayNode, sf, counter, subjectA, subjectB) {
  const out = [];
  for (const el of arrayNode.elements) {
    if (!ts.isArrayLiteralExpression(el) || el.elements.length < 2) continue;
    const cells = el.elements.map((c) => textOf(c, sf, counter, new Set()));
    const [label, a, b] = cells;
    if (!label) continue;
    if (b !== undefined) out.push(`${label}: ${subjectA || "A"} — ${a}. ${subjectB || "B"} — ${b}.`);
    else out.push(`${label}: ${a}`);
  }
  return out;
}

function pageTitle(sourceFile) {
  // buildPageMetadata({ title: "..." }) — same literal-parse technique as gen-search-index.mjs.
  const src = sourceFile.getFullText();
  const m = src.match(/title:\s*"((?:[^"\\]|\\.)*)"/);
  if (!m) return "";
  return m[1]
    .replace(/\\"/g, '"')
    .replace(/\s*\|\s*Prof\. Peptide\s*$/, "")
    .trim();
}

// ── per-page-family extraction ──────────────────────────────────────────────────────────────────
function extractPage(absPath, url, category) {
  const src = readFileSync(absPath, "utf8");
  const sf = ts.createSourceFile(absPath, src, ts.ScriptTarget.ES2020, true, ts.ScriptKind.TSX);
  const counter = { count: 0 };
  let title = pageTitle(sf);

  const namedArrays = ["sections", "faqs", "studies", "rows", "lineup"];
  const found = {};
  for (const name of namedArrays) found[name] = findTopArray(sf, name);
  const skipNames = new Set(Object.keys(found).filter((k) => found[k]));

  const sections = found.sections ? extractSections(found.sections, sf, counter) : [];
  let faqs = found.faqs ? extractFaqs(found.faqs, sf, counter) : [];
  const studies = found.studies ? extractStudies(found.studies, sf, counter) : [];

  // Coupon pages have no top-level `faqs` array (inline <FAQItem> JSX instead) and no inline
  // `title: "..."` literal (title comes from buildCouponMetadata, not this file) — cover both.
  if (faqs.length === 0) faqs = extractInlineFaqItems(sf, sf, counter);
  if (!title) title = findFirstH1Text(sf, sf, counter);

  const extraSections = [];
  if (found.rows) {
    const [subjectA, subjectB] = title.split(/\s+vs\.?\s+/i);
    const rowLines = extractRows(found.rows, sf, counter, subjectA?.trim(), subjectB?.trim());
    if (rowLines.length) extraSections.push({ heading: "Comparison", text: rowLines.join(" ") });
  }
  if (found.lineup) {
    const lineupLines = extractGenericArray(found.lineup, sf, counter);
    if (lineupLines.length) extraSections.push({ heading: "Compounds covered", text: lineupLines.join(" ") });
  }

  // Full-body JSX walk catches hand-written prose not sourced from a named array (intro <p> tags,
  // coupon-page catalog-by-area <dl> blocks, bioregulator mechanism/evidence prose, comparison
  // verdict blocks) while skipping `{name.map(...)}` over arrays already extracted above.
  const bodyReturn = findDefaultExportReturn(sf);
  const bodyText = bodyReturn ? textOf(bodyReturn, sf, counter, skipNames) : "";
  if (bodyText) extraSections.push({ heading: "Page content", text: bodyText });

  const allSections = [...sections, ...extraSections].map((s) => ({
    heading: redactLiterals(s.heading, counter),
    text: redactLiterals(s.text, counter),
  }));
  faqs = faqs.map((f) => ({ q: redactLiterals(f.q, counter), a: redactLiterals(f.a, counter) }));
  const studiesText = redactLiterals(studies.join(" "), counter);

  const fullText = [
    ...allSections.map((s) => (s.heading ? `${s.heading}: ${s.text}` : s.text)),
    ...faqs.map((f) => `Q: ${f.q} A: ${f.a}`),
    studiesText ? `Studies: ${studiesText}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  return {
    url,
    title: redactLiterals(title, counter),
    category,
    sections: allSections.filter((s) => s.text),
    faqs: faqs.filter((f) => f.q || f.a),
    studies: studiesText,
    fullText,
    tokenEstimate: Math.ceil(fullText.length / 4),
    redactions: counter.count,
  };
}

function extractFaqQuestionsModule() {
  const { faqQuestions, faqAnswerText } = execModule("src/data/faqQuestions.ts");
  const counter = { count: 0 };
  return faqQuestions.map((q) => {
    const rawText = faqAnswerText(q);
    const text = redactLiterals(rawText, counter);
    return {
      url: `/faq/${q.slug}`,
      title: redactLiterals(q.question, counter),
      category: "faq",
      sections: [{ heading: "", text }],
      faqs: [{ q: q.question, a: text }],
      studies: "",
      fullText: `Q: ${q.question} A: ${text}`,
      tokenEstimate: Math.ceil(text.length / 4),
      redactions: counter.count,
    };
  });
}

function dirsIn(rel) {
  const dir = P(rel);
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(dir, d.name, "page.tsx")))
    .map((d) => d.name)
    .sort();
}

const SKIPPED = [];

export function buildCorpus() {
  const pages = [];

  for (const [rel, prefix, category] of [
    ["src/app/peptides", "/peptides", "peptide"],
    ["src/app/supplements", "/supplements", "supplement"],
    ["src/app/guides", "/guides", "guide"],
    ["src/app/compare", "/compare", "comparison"],
    ["src/app/coupons", "/coupons", "vendor"],
  ]) {
    for (const slug of dirsIn(rel)) {
      const abs = P(rel, slug, "page.tsx");
      const p = extractPage(abs, `${prefix}/${slug}`, category);
      if (!p.fullText) {
        SKIPPED.push(`${prefix}/${slug} — no extractable content found`);
        continue;
      }
      pages.push(p);
    }
  }

  // Bioregulators: a single article page, not a per-entity directory.
  const bioregAbs = P("src/app/bioregulators/page.tsx");
  if (existsSync(bioregAbs)) {
    const p = extractPage(bioregAbs, "/bioregulators", "guide");
    if (p.fullText) pages.push(p);
  }

  pages.push(...extractFaqQuestionsModule());

  pages.sort((a, b) => a.url.localeCompare(b.url));
  return pages;
}

export function serialize(pages) {
  const totalRedactions = pages.reduce((s, p) => s + p.redactions, 0);
  const lines = [
    "// AUTO-GENERATED by scripts/gen-chat-corpus.mjs — DO NOT EDIT BY HAND.",
    "// Regenerate: node scripts/gen-chat-corpus.mjs. Staleness is enforced by",
    "// scripts/check-chat-corpus.mjs (fails the build if this drifts from the sources).",
    "//",
    `// ${pages.length} pages, ${totalRedactions} code/price/stock redaction(s) applied.`,
    "import type { ChatCorpusPage } from \"./chat-corpus\";",
    "",
    "export const generatedChatCorpus: ChatCorpusPage[] = " + JSON.stringify(pages, null, 2) + ";",
    "",
  ];
  return lines.join("\n");
}

// CLI entry point — write the generated file and report stats.
if (import.meta.url === `file://${process.argv[1]}`) {
  const pages = buildCorpus();
  const out = serialize(pages);
  writeFileSync(P("src/lib/chat-corpus.generated.ts"), out);

  const totalTokens = pages.reduce((s, p) => s + p.tokenEstimate, 0);
  const totalRedactions = pages.reduce((s, p) => s + p.redactions, 0);
  const sizes = pages.map((p) => p.tokenEstimate);
  const maxPage = pages.reduce((max, p) => (p.tokenEstimate > (max?.tokenEstimate ?? -1) ? p : max), null);

  console.log(`gen-chat-corpus: wrote ${pages.length} pages -> src/lib/chat-corpus.generated.ts`);
  console.log(`  total tokens (est.): ${totalTokens.toLocaleString()}`);
  console.log(`  avg tokens/page: ${Math.round(totalTokens / pages.length).toLocaleString()}`);
  console.log(`  max tokens/page: ${maxPage.tokenEstimate.toLocaleString()} (${maxPage.url})`);
  console.log(`  code/price/stock redactions: ${totalRedactions}`);
  if (SKIPPED.length) {
    console.log(`  ⚠ skipped ${SKIPPED.length} page(s) with no extractable content:`);
    for (const s of SKIPPED) console.log(`    - ${s}`);
  }
}
