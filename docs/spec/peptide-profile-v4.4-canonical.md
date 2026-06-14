# Peptide Profile v4.4+ Canonical Spec

**Version:** v4.4+
**Date locked:** May 23, 2026
**Wave:** V44-1
**Commit range:** `a0a9d59` (Follistatin, Phase 1 start) through `09977c8` (Cagrisema, Phase 2 final) — 23 commits
**Status:** Authoritative. PP_MASTER references this file for the canonical spec.

## Exemplar pages

| Role | Peptide | Path |
|---|---|---|
| Single-peptide structural baseline | Tirzepatide | `src/app/peptides/tirzepatide/page.tsx` |
| Single-peptide w/ latest-research callout | Retatrutide | `src/app/peptides/retatrutide/page.tsx` |
| Blend variant exemplar | CagriSema | `src/app/peptides/cagrisema/page.tsx` |
| Oral-form variant exemplar | MK-677 | `src/app/peptides/mk-677/page.tsx` |
| Topical + injectable variant | GHK-Cu | `src/app/peptides/ghk-cu/page.tsx` |
| Nasal route variant | Selank | `src/app/peptides/selank/page.tsx` |
| On-demand dosing variant | PT-141 | `src/app/peptides/pt-141/page.tsx` |

---

## Table of Contents

1. [Single-Peptide Canonical Spec](#1-single-peptide-canonical-spec)
2. [Blend Variant Spec](#2-blend-variant-spec-cagrisema-derived)
3. [Variant Forms](#3-variant-forms)
4. [Per-Page Judgment Criteria — D1–D5](#4-per-page-judgment-criteria--d1d5-framework)
5. [Vendor JSON Adherence Rule](#5-vendor-json-adherence-rule)
6. [Backlog](#6-backlog)
7. [Cross-References](#7-cross-references)

---

## 1. Single-Peptide Canonical Spec

### 1.1 File Structure & Imports

Every canonical v4.4+ peptide profile is a single `page.tsx` Next.js App Router file at `src/app/peptides/[peptide]/page.tsx`. The locked import set is:

```tsx
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
```

Additional imports are forbidden unless the page has a documented variant requirement (e.g., a comparison chart component). The metadata is built by `buildPageMetadata` with `path`, `title`, `description`:

```tsx
export const metadata = buildPageMetadata({
  path: "/peptides/[peptide]",
  title: "[Peptide] — [Differentiator], Mechanism, Dosage, [Trial/Brand] | Prof. Peptide",
  description: "[Peptide] research profile: mechanism, [evidence base], dosing protocol, side effects, FAQ, and regulatory status.",
});
```

### 1.2 Metadata Block — 3-line (locked for single peptides)

The metadata block sits directly under the H1 + tag chips + "Last reviewed:" line, before the overview section. Exactly **3 lines** for single peptides:

```tsx
<div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
    <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> [aliases, brand names, code IDs]
  </p>
  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
    <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> [pharmacological class]
  </p>
  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
    <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> [FDA/EMA/investigational + dates]
  </p>
</div>
```

**Field rules:**
- `Also Known As:` — comma-separated; include code numbers (LY3437943), brand names (Mounjaro), class abbreviations.
- `Peptide Class:` — pharmacological category (e.g., "GIP/GLP-1 Dual Receptor Agonist"). Not the dosing route or chemical family.
- `Regulatory Status:` — FDA + EMA status. Include approval dates where applicable. Use "Investigational — Phase 3 trials, not FDA-approved" pattern for unapproved.

### 1.3 Latest Research Callout (conditional — see D1)

When applicable, placed **after** the metadata block, **before** the overview. Uses the cyan-tinted callout container:

```tsx
<div className="mb-8 p-4 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
    <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Latest research:</span> [event summary — trial readout, regulatory action, NDA filing, news event]{" "}
    <Link href="/news/[slug]" className="text-[#0891b2] hover:underline">Read the full breakdown &rarr;</Link>
  </p>
</div>
```

If no dedicated `/news/` article exists, **omit** the "Read the full breakdown" link — keep the summary text only. Reference exemplar: Retatrutide (with link, TRIUMPH-1) vs CagriSema (without link, NDA filing).

### 1.4 Overview Block

The first H2 after the metadata is **"What is [Peptide]?"** (id=`overview`, not part of the H2-count sections — sits outside the `sections` array). Pattern:

```tsx
<div id="overview" className="scroll-mt-20">
  <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is [Peptide]?</h2>
  <div className="space-y-4">
    <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
      [Lead paragraph: what it is, who developed it, primary mechanism in plain English, comparison to nearest peer, key headline result, regulatory snapshot. Include inline links to related peptide pages.]
    </p>
    <div>
      <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
        Reported benefits:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">[Benefit 1 — quantified where possible]</li>
        {/* 5-7 bullets total */}
      </ul>
    </div>
    <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
      <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> [Dose + route + frequency + range. One sentence.]
    </p>
    <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
      <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> [Brief vendor pointer + /coupons link.]
    </p>
  </div>
</div>
```

### 1.5 14-H2 Section Taxonomy (canonical, locked)

The `sections` array defines the body content in fixed order. Section titles use **question-style** for content sections, **declarative** for the closing three (references, studies). Locked titles:

| # | id | title | Pattern |
|---|---|---|---|
| 1 | `mechanism` | How does [Peptide] work? | intro + body[] |
| 2 | `research` | What is [Peptide] used for? | intro + body[] |
| 3 | `timeline` | How long does [Peptide] take to work? | intro + content |
| 4 | `dosing` | How is [Peptide] dosed? | intro + node |
| 5 | `how-to-take` | How is [Peptide] administered? | intro + node (with aspect table + recon table) |
| 6 | `stacks` | What does [Peptide] stack well with? | intro + node (ordered list) |
| 7 | `side-effects` | What are the side effects of [Peptide]? | intro + node (3-tier: common / less common / serious) |
| 8 | `interactions` | Does [Peptide] interact with other drugs? | intro + body[] |
| 9 | `storage` | How should [Peptide] be stored? | body[] (no intro by convention) |
| 10 | `limitations` | What are the limitations of [Peptide] research? | intro + node |
| 11 | `where-to-buy` | Where to source [Peptide] | intro + node (VendorHighlightBlock) |
| 12 | `faq` | [Peptide] FAQ | node (faqs.map) |
| 13 | `references` | References | node (ordered list) |
| 14 | `studies` | Published Studies | node (studies.map) |

**Section shape (TypeScript-ish):**

```tsx
type Section =
  | { id: string; title: string; intro?: string | JSX.Element; body: string[] }
  | { id: string; title: string; intro?: string | JSX.Element; content: string }
  | { id: string; title: string; intro?: string | JSX.Element; node: JSX.Element };
```

The render loop (locked) handles all three shapes:

```tsx
<div className="space-y-8">
  {sections.map((s) => (
    <div key={s.id} id={s.id} className="scroll-mt-20">
      <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
        {s.title}
      </h2>
      {s.intro && (
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
          {s.intro}
        </p>
      )}
      {s.node && s.node}
      {s.content && (
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
      )}
      {s.body && (
        <ol className="list-decimal list-inside space-y-1">
          {s.body.map((item, i) => (
            <li key={i} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      )}
    </div>
  ))}
</div>
```

### 1.6 Aspect Table (6-row, locked structure)

The aspect table lives inside the `how-to-take` section's `node`. Two columns: **Aspect** and **Recommendation**. Six standard rows:

```tsx
<div className="overflow-x-auto -mx-4 sm:mx-0">
  <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
    <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
      <tr>
        <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Aspect</th>
        <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Recommendation</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
      <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td>
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300">[once weekly / daily / 5 days on, 2 off, etc.]</td>
      </tr>
      <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300">[evening / morning / pre-meal / etc.]</td>
      </tr>
      <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300">[fasting required / no fasting / pre-meal / etc.]</td>
      </tr>
      <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300">[Rotate abdomen, thigh, upper arm — avoid same site within 2 weeks]</td>
      </tr>
      <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">[Variant-specific row]</td>
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300">[e.g., "Cycling" for melanocortin agonists, "Component co-titration" for blends]</td>
      </tr>
      <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Missed dose</td>
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300">{"[<X days late: take. >X days late: skip and resume.]"}</td>
      </tr>
    </tbody>
  </table>
</div>
```

**Row variants by route:**
- Subcutaneous (default): `Injection site rotation` row included.
- Oral (MK-677): replace `Injection site rotation` with `Route` row (e.g., "Oral capsule, swallowed whole").
- Nasal (Selank, Semax, PT-141): replace `Injection site rotation` with `Route` row + `Nostril alternation` (alternate nostrils per dose).
- Topical (GHK-Cu): replace `Injection site rotation` with `Application site` (e.g., "Targeted area; rotate sites if multi-area protocol").

### 1.7 Reconstitution Table (locked structure)

For injectable peptides only. Lives below the aspect table within the `how-to-take` node. Uses U-100 insulin syringe units (100 units = 1 mL).

```tsx
<p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
  <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table below assumes a [vial size] mg vial — adjust proportionally for [other sizes].
</p>

<div className="overflow-x-auto -mx-4 sm:mx-0">
  <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
    <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
      <tr>
        <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
        <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
        <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">[Dose 1]</th>
        <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">[Dose 2]</th>
        <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">[Dose 3]</th>
        <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">[Dose 4]</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
      {/* 3 typical rows: 1 mL, 2 mL, 3 mL BAC water volumes */}
    </tbody>
  </table>
</div>
<p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
  *[Footnote explaining draw caveats — e.g., doses above ~100 units exceed insulin syringe capacity at low concentrations.]
</p>
```

**Unit math: `units = mL × 100`** where mL = (dose mg / concentration mg/mL).

**No reconstitution table for:**
- Oral peptides (MK-677, oral semaglutide if added).
- Topical-only peptides (some GHK-Cu protocols).
- Pre-filled pen formulations (use only for research-grade reconstitution).

### 1.8 Dose Escalation Table (conditional — see D2)

Used when the trial protocol has ≥3 escalation steps. If 1–2 steps or single dose, use an ordered list (`<ol>`) instead.

Canonical exemplar — Cagrilintide-style escalation:

```tsx
<div className="overflow-x-auto -mx-4 sm:mx-0">
  <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
    <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
      <tr>
        <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Week</th>
        <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Typical dose</th>
        <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Notes</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
      <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1–4</td>
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">[starting dose]</td>
        <td className="px-4 py-3 text-gray-700 dark:text-slate-300">[GI tolerance / titration note]</td>
      </tr>
      {/* 4-5 rows total covering weeks 1–maintenance+ */}
    </tbody>
  </table>
</div>
<p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
  *[Footnote — trial protocol source, dose-tier rationale.]
</p>
```

### 1.9 Where-to-Buy / VendorHighlightBlock

The `where-to-buy` section uses the canonical block. Highlights are pulled from `src/data/peptide-vendors.json` (3 vendors max per page, prioritizing the canonical GLP-cluster for GLP-class peptides and Editor's Pick vendors otherwise):

```tsx
{
  id: "where-to-buy",
  title: "Where to source [Peptide]",
  intro: "[1–2 sentences: regulatory status + vetting blurb]",
  node: (
    <div className="space-y-4">
      <VendorHighlightBlock
        highlights={[
          { slug: "[vendor-slug-1]", note: "[note from peptide-vendors.json]" },
          { slug: "[vendor-slug-2]", note: "[note from peptide-vendors.json]" },
          { slug: "[vendor-slug-3]", note: "[note from peptide-vendors.json]" },
        ]}
      />
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          See all 17 verified vendors &rarr;
        </Link>
      </p>
    </div>
  ),
},
```

**Tail copy:** "See all 17 verified vendors →" — keep the count current with the master vendor inventory. As of v4.4+ lock (May 23, 2026), the count is 17.

### 1.10 FAQ / References / Studies blocks

**FAQ array** (8–12 questions per page, mixing strings and JSX answers):

```tsx
const faqs = [
  { q: "[Question]?", a: "[Plain-string answer.]" },
  { q: "[Question with linked answer]?", a: (<>Answer with <Link href="/peptides/x" className="text-[#0891b2] hover:underline">inline link</Link>.</>) },
];
```

**FAQ section:**
```tsx
{
  id: "faq",
  title: "[Peptide] FAQ",
  node: (
    <div className="space-y-4">
      {faqs.map((f, i) => (
        <div key={i}>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">{f.q}</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{f.a}</p>
        </div>
      ))}
    </div>
  ),
},
```

> **Backlog flag:** FAQ answers rendered as `<p>{f.a}</p>` cannot contain block-level elements. When `f.a` is JSX with `<Link>` inside, fine. When it contains nested `<p>` or `<ul>`, the FAQItem JSX-in-string bug surfaces (`[[backlog_faqitem_jsx_bug]]`). Keep FAQ answers to single-paragraph JSX.

**References block** (numbered ordered list, links open in new tab):
```tsx
<ol className="list-decimal list-inside space-y-2">
  <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
    [Author Last F, Author Last F, et al.] [Title]. [Journal]. [Year];[Vol]:[Pages].{" "}
    <a href="[url]" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">[url]</a>
  </li>
  {/* 5-10 references */}
</ol>
```

**Studies array** (5–8 plain-English summaries):
```tsx
const studies = [
  {
    title: "[Trial / paper title]",
    authors: "[Author list]",
    journal: "[Journal]",
    year: "[YYYY]",
    access: "Open Access" | "Paywalled",
    url: "[url]",
    summary: "[150-300 word plain-English summary covering: trial design, sample size, duration, primary endpoint, key result, take-home meaning.]",
  },
];
```

**Studies render:**
```tsx
{studies.map((s, i) => (
  <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
    <div className="flex flex-wrap items-center gap-2 mb-2">
      <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
    </div>
    <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
    <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
    <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
  </div>
))}
```

### 1.11 Related Peptides + Comparisons blocks

After the section render loop and the tag chips. Two adjacent containers — neutral and accent:

```tsx
<div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
  <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Peptides</h2>
  <div className="flex flex-wrap gap-4">
    <Link href="/peptides/[related-1]" className="text-sm font-medium text-[#0891b2] hover:underline">[Name]</Link>
    {/* 3-5 related peptides */}
  </div>
</div>

{/* Optional — see D-criteria for inclusion */}
<div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
  <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
  <div className="flex flex-wrap gap-4">
    <Link href="/compare/[a-vs-b]" className="text-sm font-medium text-[#0891b2] hover:underline">[A] vs [B] &rarr;</Link>
    {/* link each /compare/* page that includes this peptide */}
  </div>
</div>
```

**Comparisons inclusion rule:** Include the block only if at least one `/compare/*` page references this peptide. Otherwise omit entirely (do not render an empty block).

### 1.12 JsonLd — Article + BreadcrumbList

Two `<JsonLd>` calls at the top of the return, before the wrapper `<div>`:

```tsx
<JsonLd data={{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Peptide]",
  "description": "[Same as buildPageMetadata description]",
  "url": "https://profpeptide.com/peptides/[peptide]",
  "publisher": {
    "@type": "Organization",
    "name": "Prof. Peptide",
    "url": "https://profpeptide.com"
  }
}} />
<JsonLd data={{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
    { "@type": "ListItem", "position": 2, "name": "Peptides", "item": "https://profpeptide.com/peptides" },
    { "@type": "ListItem", "position": 3, "name": "[Peptide]" }
  ]
}} />
```

### 1.13 Tags + Calculator CTA + Footer chrome

After Comparisons block:

```tsx
<div className="flex flex-wrap gap-2 mt-8">
  {["[Tag 1]", "[Tag 2]", "[Tag 3]", "[Tag 4]"].map((tag) => (
    <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">
      {tag}
    </span>
  ))}
</div>

<div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
  <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
    Need to calculate a dose?
  </p>
  <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
    Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
  </p>
  <Link href="/calculator" className="btn-primary text-sm">
    Open Calculator
  </Link>
</div>

<PageDisclaimer />
<ContactLink pageName="[Peptide]" pagePath="/peptides/[peptide]" />
```

### 1.14 TOC sections derivation

```tsx
const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));
```

Placed before the export. The `<PageTOC sections={tocSections} />` is rendered between the overview block and the section render loop.

### 1.15 First-mention linking

First-mention linking: the first time any peptide/blend that has its own profile page is named in body prose, that first occurrence is the internal `<Link href="/peptides/SLUG">`. Never link a later occurrence while leaving the first as plain text. Don't self-link the page's own subject — but on a stack/combo profile, the individual component peptides ARE linked on their first appearance (e.g. the opening "X + Y" sentence links X and Y there).

"Body prose" means the overview block plus the section render content (mechanism through studies, including FAQ answers). The footer Related Peptides / Related Blends / Comparisons blocks are navigation, not prose — they always link and are exempt from the first-mention rule. "First mention" is judged in rendered document order (overview first, then the `sections` array in order), not source-file order.

---

## 2. Blend Variant Spec (Cagrisema-derived)

Blend variant applies when a peptide profile covers a fixed-dose combination of ≥2 distinct component peptides that each have their own standalone profile page in `src/app/peptides/`.

### 2.1 4-line Metadata Block

Blends use a **4-line** metadata block. The fourth line is `Component peptides:`, linking inline to each child profile page.

```tsx
<div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
    <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> [aliases]
  </p>
  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
    <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> [Fixed-dose [A] + [B] blend]
  </p>
  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
    <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> [status]
  </p>
  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
    <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Component peptides:</span>{" "}
    <Link href="/peptides/[component-a]" className="text-[#0891b2] hover:underline">[Component A]</Link>
    {" + "}
    <Link href="/peptides/[component-b]" className="text-[#0891b2] hover:underline">[Component B]</Link>{" "}
    ([ratio + maintenance dose context])
  </p>
</div>
```

### 2.2 15-H2 Structure (canonical 14 + combination-mechanism)

Blends use a **15-H2** structure: the canonical 14 H2s plus one inserted H2 between `mechanism` and `research`.

| # | id | title | Notes |
|---|---|---|---|
| 1 | `mechanism` | How does [Blend] work? | Covers each component's individual mechanism in plain English; uses inline links to component profile pages |
| 2 | `combination-mechanism` | How do [Component A] and [Component B] work together? | **Blend-only.** Carries the synergy / non-redundance argument; quantifies additive or super-additive effects vs each monotherapy |
| 3–15 | (same as canonical 14) | (same titles) | Research → Studies, unchanged |

### 2.3 Dose Escalation Table (component columns)

Blends with co-titration use a 4-column table: Week / Component A / Component B / Combined total.

```tsx
<thead className="bg-gray-100 dark:bg-[#1e2d3d]">
  <tr>
    <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Week</th>
    <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">[Component A]</th>
    <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">[Component B]</th>
    <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Combined total</th>
  </tr>
</thead>
```

Footnote (after the table) explains lockstep escalation:

```tsx
<p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
  *Both components are co-titrated in lockstep — the pre-blended product fixes the [ratio] ratio at every step. To adjust the ratio independently, researchers must buy the two component peptides separately rather than using a pre-blend.
</p>
```

### 2.4 Reconstitution Table (single, with per-component breakout footnote)

Blends use a **single** reconstitution table treating the pre-blend as one product (label = combined total mg). The footnote breaks out the per-component mass at the maintenance dose. Exemplar header row:

```tsx
<th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">[Dose 1] combined</th>
```

Footnote:
```tsx
<p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
  *Combined-total dose values: at [maintenance combined mg] mg combined (the [trial] maintenance dose), each draw delivers [A mg] [Component A] + [B mg] [Component B].
</p>
```

### 2.5 Aspect Table — adds blend-specific row

Blends use a **6-row aspect table** with an added `Component co-titration` row (replacing or appended to the variant-row slot):

```tsx
<tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
  <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Component co-titration</td>
  <td className="px-4 py-3 text-gray-700 dark:text-slate-300">[Component A] and [Component B] escalate together in lockstep; pre-blend locks the ratio at [ratio]</td>
</tr>
```

### 2.6 Inline Component Cross-Link Pattern

Component links appear in body text at three places minimum:
1. **Mechanism section** — first mention of each component (e.g., "Cagrilintide is a long-acting amylin analogue..." with `<Link>` wrapping the name).
2. **Combination-mechanism section** — synergy argument naturally repeats both names.
3. **Stacks section** — under "Avoid stacking with..." lists, link to both component profile pages.

The metadata block's `Component peptides:` field provides the high-prominence top-of-page link.

### 2.7 Blend Title Convention

Use the question-style H2 titles applied to the blend name. Example: `"How does CagriSema work?"` (not "How do CagriSema work?" — treat the blend as a single named compound, plural-agreement-wise).

---

## 3. Variant Forms

### 3.1 Oral-form variant (MK-677 exemplar)

When the peptide is administered orally (capsule, tablet, sublingual):

- **No reconstitution table** — skip entirely.
- **No units-vs-mcg paragraph** — skip the U-100 syringe math intro.
- **Aspect table `Injection site rotation` row** → replaced with `Route` (e.g., "Oral capsule, swallowed whole").
- **Storage section** — remove "Reconstitute with BAC water" line. Adjust shelf-life language for solid form.
- **Side-effect tiers** — no injection-site reactions row.
- **Overview / metadata** — Peptide Class should note oral bioavailability (e.g., "Oral ghrelin mimetic" for MK-677).

### 3.2 Topical + injectable variant (GHK-Cu exemplar)

For peptides with multiple routes of administration in common use:

- **Two protocol sub-sections within `dosing`** — one per route. Use `<h3>` subheaders.
- **Two `Route` rows in aspect table** OR present both inline.
- **Two reconstitution tables** if both routes use reconstitution (rare); typically only the injectable route has a recon table, and the topical formulation gets a separate concentration paragraph.
- **`how-to-take` node** — explicitly compares routes, when to choose each.

### 3.3 Multi-route variant (NAD+ exemplar)

NAD+ has four common routes: subcutaneous, intranasal, sublingual, IV. Pattern:

- **Dosing section** — single intro + node with route-by-route subsections (`<h3>` per route).
- **Aspect table `Route` row** lists all four routes; supplementary `Bioavailability` row clarifies relative absorption.
- **Reconstitution math** — only show for the route(s) that require it (subcutaneous typically); flag others as pre-formulated.
- **Side effects** — note that route changes the side-effect profile (IV: flushing; SC: injection-site reactions; intranasal: nasal irritation).

### 3.4 Nasal route variant (PT-141, Selank, Semax)

- **Aspect table** — replace `Injection site rotation` with `Route` (e.g., "Intranasal spray") + add `Nostril alternation` (alternate nostrils per dose).
- **Storage** — note that nasal solutions are typically pre-formulated and shipped ready-to-use; reconstitution not always applicable.
- **Side effects** — include nasal-specific row (irritation, dryness, post-nasal taste).
- **Vendor notes** — many vendors sell as "Nasal format" — preserve this differentiator note from peptide-vendors.json.

### 3.5 On-demand dosing variant (PT-141, Melanotan II)

For peptides taken episodically rather than chronically:

- **Aspect table** — `Frequency` row reads "On-demand" or "As needed, with X-hour minimum interval"; `Cycling` row may apply for melanocortin agonists with hard cumulative ceilings.
- **Dose escalation table** typically skipped — single-dose protocol.
- **Hard ceiling warnings** — surface upfront for melanocortin agonists (cumulative MT-II tanning ceiling, lifetime PT-141 cardiovascular event reports).
- **Side effects** — include short-term acute event tiers separate from chronic-use tiers.

---

## 4. Per-Page Judgment Criteria — D1–D5 Framework

These five binary judgment calls determine which optional elements apply per page. Each conversion documents the answer in its commit message.

### D1 — Latest Research Callout

**Question:** Should this page render the cyan Latest research callout?

**Criteria — render YES if all of these are true:**
- A trial readout, regulatory action (NDA filing, FDA approval, EMA approval, expansion), or major peer-reviewed publication occurred **within the last 90 days** of page review.
- The event is material to the page's headline claim or evidence base.
- The event has a primary source citable in the references array.

**Render NO when:**
- Last meaningful event was >90 days ago.
- Event is preclinical-only or industry rumor without primary source.
- Page is content-stable (e.g., MOTS-c, GHK-Cu without recent news).

**Exemplars:**
- YES: Retatrutide (TRIUMPH-1 May 2026), Tesamorelin (Egrifta WR FDA Mar 2025), Cagrilintide (REDEFINE 1 publication 2025), CagriSema (Dec 2025 NDA filing).
- NO: Tirzepatide (no fresh news; stable approval), BPC-157, KPV, Selank.

**Link rule:** If a dedicated `/news/[slug]` article exists, include "Read the full breakdown →" link. If not, omit the link.

### D2 — Dose Escalation Table vs Ordered List

**Question:** Should dosing use a table or an ordered list?

**Criteria — table YES if:**
- Protocol has ≥3 distinct escalation steps with different doses.
- Steps map to time windows (weeks) with notes per step.
- For blends: any co-titration of ≥2 components.

**List instead when:**
- Single-dose or 2-step protocol.
- Simple range without time-based escalation (e.g., "0.2–0.4 mg/day as tolerated").
- On-demand dosing with no escalation.

**Exemplars:**
- TABLE: Tirzepatide (6 steps), CagriSema (5 steps × 4 columns), Retatrutide (4 steps), Cagrilintide (5 steps).
- LIST: PT-141 (on-demand), KPV (single dose), BPC-157 (range), Selank/Semax (range).

### D3 — Aspect Table Content

**Question:** Which variant-specific row populates the aspect table's 5th row (after Frequency / Best time / Food / Site rotation, before Missed dose)?

**Standard 5th-row options:**
- Subcutaneous default: omit the variant row (5 rows total) OR add `Cycling` for cycled protocols.
- Blends: `Component co-titration` (locked text).
- Melanocortin agonists: `Cycling` with hard-ceiling reference.
- Nasal: `Nostril alternation`.
- Oral: skip the row (Route already replaces site rotation).
- On-demand: `Pre-dose timing` (PT-141 — 30–60 min pre-event).

**Render rule:** Always 5 or 6 rows. Never fewer than 5 rows.

### D4 — Related Blends Block

**Question:** Should the page include a "Related Blends" callout linking to internal blend products that include this peptide?

**Criteria — include YES if:**
- The peptide is a component in ≥1 internal blend page (GH-Stack, GLOW, KLOW, Semax-Selank, Wolverine, CagriSema).
- The blend page is published (not a placeholder).

**Render NO when:**
- No blends contain this peptide.
- Blend page is in draft.

**Exemplars:**
- YES: Semax (Semax-Selank blend), Selank (Semax-Selank blend), CJC-1295 (GH-Stack), Ipamorelin (GH-Stack), Cagrilintide (CagriSema), Semaglutide (CagriSema), GHK-Cu (GLOW/KLOW).
- NO: KPV (no blends), Follistatin, DSIP, Melanotan II.

**Placement:** Same row as Related Peptides block, before Comparisons. Use the same gray container styling.

### D5 — New-to-Research Link

**Question:** Should the overview block include the "New to peptide research?" link to `/guides/peptide-research-basics`?

**Criteria — include YES if:**
- Peptide is in the top ~20 highest-traffic peptides (GLP cluster, BPC-157, TB-500, KPV, MK-677, Tesamorelin, etc.).
- Page targets first-time researchers learning about a class.

**Render NO when:**
- Page is niche or expert-targeted (DSIP, Melanotan II, Selank, Semax).
- Page assumes baseline familiarity (advanced stacks, blend products).

**Placement:** Last sentence of the overview block's lead paragraph, after the comparison-to-peers context.

---

## 5. Vendor JSON Adherence Rule

**Locked rule:** Every page's `VendorHighlightBlock` highlights array MUST reference only vendor slugs that appear in `src/data/peptide-vendors.json` for that peptide. Notes in the highlights array MUST match the notes in the JSON for that peptide-vendor pair.

**Validation steps before commit:**
1. Open `src/data/peptide-vendors.json`. Find the peptide's entry.
2. The 3 highlights chosen must each have a corresponding entry in the JSON.
3. The `note` field in each highlight must match the JSON's `note` for that vendor on that peptide.
4. If a vendor is missing from the JSON for a peptide but is known to carry it, **add the JSON entry first**, then commit both files together (as done for Cagrisema in `09977c8`).

**Authority chain:**
- `peptide-vendors.json` = ground truth for which vendors carry which peptides.
- Individual page TSX = display layer, must match JSON.
- Vendor catalog pages = read from `src/data/vendors.ts` for shared vendor metadata (name, code, discount, detailPage URL).

**Counterexample (avoided):** Phase 1 initial commits used canonical GLP-cluster vendors for Follistatin / IGF-1 LR3 / Epitalon without checking JSON carriage. Fix commit `a24c527` corrected this. **Do not repeat.**

---

## 6. Backlog

### 6.1 V44-blend-1 — Pre-Phase-1 blend re-audit

The 5 blends below were converted to v4.4 **before** the blend variant spec was finalized (Phase 2 final commit `09977c8`, May 23, 2026). They may not have all blend variant elements (4-line metadata, combination-mechanism H2, component co-titration aspect row, single recon table + per-component footnote).

**Wave V44-blend-1 scope (do not start in this wave):**

| Page | Path | Likely gaps |
|---|---|---|
| GH-Stack | `src/app/peptides/gh-stack/page.tsx` | 4-line metadata, combination-mechanism H2, component co-titration row |
| GLOW | `src/app/peptides/glow/page.tsx` | 4-line metadata, combination-mechanism H2, component links in stacks |
| KLOW | `src/app/peptides/klow/page.tsx` | 4-line metadata, combination-mechanism H2, component links in stacks |
| Semax-Selank | `src/app/peptides/semax-selank/page.tsx` | 4-line metadata, combination-mechanism H2, route variant (nasal) + blend variant overlap |
| Wolverine | `src/app/peptides/wolverine/page.tsx` | 4-line metadata, combination-mechanism H2, component co-titration |

**Acceptance criteria for V44-blend-1:**
- Each page passes the 15-H2 structural check.
- Each page renders the 4-line metadata block with `Component peptides:` field linking to all component child profiles.
- Each page surfaces the synergy / non-redundance argument in a dedicated `combination-mechanism` H2.
- Vendor highlights validated against `peptide-vendors.json` (add entries where missing).
- Single commit per page.

### 6.2 Other backlog items

- **FAQItem JSX-in-string bug** — Coupon pages render literal `<Link>` as text in FAQItem answers (see `[[backlog_faqitem_jsx_bug]]`). Deferred to local CC; do not re-pitch /schedule.
- **GSC trailing-slash "Redirect error"** — Usually transient; curl + control compare before changing code (see `[[project_gsc_redirect_errors]]`).

---

## 7. Cross-References

**This spec is authoritative.** PP_MASTER v9 (and any future version) should reference this file for the canonical peptide profile spec rather than duplicating its contents. To update the spec, update this file and bump the version + date-locked header.

**Related documents:**
- `src/data/peptide-vendors.json` — vendor carriage source of truth.
- `src/data/vendors.ts` — vendor catalog (name, discount code, URL, detailPage).
- `src/components/VendorHighlightBlock.tsx` — vendor block render component.
- `src/components/PageTOC.tsx` — table of contents component.
- `src/components/JsonLd.tsx` — structured data injection.
- `src/components/PageDisclaimer.tsx` — locked footer disclaimer.
- `src/components/ContactLink.tsx` — locked footer contact link.
- `src/lib/seo.ts` — `buildPageMetadata` helper.

**Exemplar commits (verbatim references for any future page conversion):**

| Commit | Page | Role |
|---|---|---|
| `538f4bb` (pre-wave) | Tirzepatide | Single-peptide structural baseline (existing) |
| `9c42abf` (pre-wave) | Retatrutide | Single-peptide w/ latest-research callout (existing) |
| `a0a9d59` | Follistatin | Phase 1 — first conversion |
| `bdc2c6d` | IGF-1 LR3 | Phase 1 |
| `e6d4759` | Epitalon | Phase 1 |
| `a24c527` | (vendor fix) | Vendor JSON adherence rule established |
| `606c053` | BPC-157 | Phase 2 — single-peptide canonical |
| `83d382a` | MK-677 | Phase 2 — oral-form variant |
| `022f21c` | GHK-Cu | Phase 2 — topical + injectable variant |
| `f7f5b27` | NAD+ | Phase 2 — multi-route variant |
| `3ed75dc` | PT-141 | Phase 2 — on-demand + nasal variant |
| `9a8b1c3` | Melanotan II | Phase 2 — hard-ceiling cycling variant |
| `b9a1ffb` | Selank | Phase 2 — nasal route |
| `39e58ad` | Semax | Phase 2 — nasal route |
| `09977c8` | CagriSema | Phase 2 final — blend variant (15-H2) |

End of spec.
