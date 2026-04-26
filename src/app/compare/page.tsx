import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/compare" },
  title: "Peptide & Supplement Comparisons | Prof. Peptide",
  description:
    "Side-by-side research comparisons for peptides and supplements. Covers BPC-157 vs TB-500, Semaglutide vs Tirzepatide, Berberine vs Metformin, NMN vs Niacin, and more.",
};

const comparisons = [
  {
    title: "BPC-157 vs TB-500",
    desc: "Recovery peptide comparison — mechanism, tissue targets, and how to choose between them.",
    href: "/compare/bpc-157-vs-tb-500",
    tag: "Recovery",
  },
  {
    title: "Semaglutide vs Tirzepatide",
    desc: "GLP-1 comparison — weight loss data, FDA status, and head-to-head clinical trial results.",
    href: "/compare/semaglutide-vs-tirzepatide",
    tag: "Metabolic",
  },
  {
    title: "Semaglutide vs Tirzepatide vs Retatrutide",
    desc: "Three generations of GLP-1 peptides compared — single, dual, and triple agonist side by side.",
    href: "/compare/semaglutide-vs-tirzepatide-vs-retatrutide",
    tag: "Metabolic",
  },
  {
    title: "Retatrutide vs Tirzepatide",
    desc: "Triple agonist vs dual agonist — weight loss data, side effect profiles, and FDA status compared.",
    href: "/compare/retatrutide-vs-tirzepatide",
    tag: "Metabolic",
  },
  {
    title: "Retatrutide vs Semaglutide",
    desc: "Three-receptor vs single-receptor GLP — weight loss data, cardiovascular evidence, and FDA status compared.",
    href: "/compare/retatrutide-vs-semaglutide",
    tag: "Metabolic",
  },
  {
    title: "Berberine vs Metformin",
    desc: "Blood sugar comparison — AMPK activation, clinical data, cost, and when to use each.",
    href: "/compare/berberine-vs-metformin",
    tag: "Metabolic",
  },
  {
    title: "NMN vs Niacin",
    desc: "NAD+ precursor comparison — pathways, cost, flushing, and what the research actually shows.",
    href: "/compare/nmn-vs-niacin",
    tag: "Longevity",
  },
  {
    title: "Creatine vs Beta-Alanine",
    desc: "Performance supplement comparison — explosive power vs endurance, and whether to take both.",
    href: "/compare/creatine-vs-beta-alanine",
    tag: "Performance",
  },
  {
    title: "CJC-1295 vs Sermorelin vs Ipamorelin",
    desc: "Growth hormone peptide comparison — GHRH analogs vs GHRP, half-lives, and stacking rationale.",
    href: "/compare/cjc-1295-vs-sermorelin-vs-ipamorelin",
    tag: "Growth Hormone",
  },
  {
    title: "BPC-157 vs GHK-Cu",
    desc: "Healing peptide comparison — systemic tissue repair vs skin regeneration and gene modulation.",
    href: "/compare/bpc-157-vs-ghk-cu",
    tag: "Recovery",
  },
  {
    title: "Ashwagandha vs Rhodiola Rosea",
    desc: "Adaptogen comparison — chronic stress and sleep vs acute mental performance and endurance.",
    href: "/compare/ashwagandha-vs-rhodiola-rosea",
    tag: "Adaptogens",
  },
  {
    title: "NMN vs NR vs Niacin",
    desc: "NAD+ precursor triple comparison — pathways, cost, flushing, and 2026 head-to-head trial data.",
    href: "/compare/nmn-vs-nr-vs-niacin",
    tag: "Longevity",
  },
  {
    title: "Epitalon vs NAD+",
    desc: "Longevity comparison — telomere biology vs mitochondrial metabolism, evidence quality, and cost.",
    href: "/compare/epitalon-vs-nad-plus",
    tag: "Longevity",
  },
  {
    title: "Semax vs Selank",
    desc: "Cognitive peptide comparison — neuroprotection vs anxiolytic, both approved in Russia.",
    href: "/compare/semax-vs-selank",
    tag: "Cognitive",
  },
];

export default function ComparePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Comparisons"}]}} />
    <div className="section max-w-3xl">
      <span className="tag mb-3 inline-block">Research Comparisons</span>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Comparisons</h1>
      <p className="text-gray-500 dark:text-slate-400 max-w-xl text-sm leading-relaxed mb-10">
        Side-by-side research breakdowns to help you understand the differences between commonly compared peptides and supplements.
      </p>
      <div className="space-y-4">
        {comparisons.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="block border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="tag text-xs">{c.tag}</span>
            </div>
            <h2 className="text-base font-semibold text-[#1e2d3d] dark:text-slate-100 group-hover:text-[#0891b2] transition-colors mb-1">
              {c.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-slate-400">{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
