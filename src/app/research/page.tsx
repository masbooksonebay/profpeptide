import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CategoryIcon } from "@/components/CategoryIcon";

export const metadata = {
  alternates: { canonical: "/research" },
  title: "Peptide Research — Peer-Reviewed Study Summaries | Prof. Peptide",
  description:
    "Plain-English summaries of peer-reviewed peptide research. Key studies on BPC-157, Semaglutide, Tirzepatide, GHK-Cu, PT-141, and 20+ more compounds.",
};

const categories = [
  {
    name: "Metabolic & Weight Loss",
    peptides: [
      { name: "AOD-9604", slug: "aod-9604", active: true },
      { name: "Cagrilintide", slug: "cagrilintide", active: true },
      { name: "MOTS-c", slug: "mots-c", active: true },
      { name: "Retatrutide", slug: "retatrutide", active: true },
      { name: "Semaglutide", slug: "semaglutide", active: true },
      { name: "Tirzepatide", slug: "tirzepatide", active: true },
    ],
  },
  {
    name: "Recovery & Tissue Repair",
    peptides: [
      { name: "BPC-157", slug: "bpc-157", active: true },
      { name: "TB-500", slug: "tb-500", active: true },
      { name: "Wolverine Stack", slug: "wolverine-stack", active: true },
    ],
  },
  {
    name: "Performance & Energy",
    peptides: [
      { name: "IGF-1 LR3", slug: "igf-1-lr3", active: true },
      { name: "Follistatin", slug: "follistatin", active: true },
    ],
  },
  {
    name: "Growth Hormone",
    peptides: [
      { name: "CJC-1295", slug: "cjc-1295", active: true },
      { name: "Ipamorelin", slug: "ipamorelin", active: true },
      { name: "Sermorelin", slug: "sermorelin", active: true },
      { name: "Tesamorelin", slug: "tesamorelin", active: true },
      { name: "GH Stack", slug: "gh-stack", active: true },
    ],
  },
  {
    name: "Cognitive & Nootropic",
    peptides: [
      { name: "Semax", slug: "semax", active: true },
      { name: "Selank", slug: "selank", active: true },
    ],
  },
  {
    name: "Skin Health & Anti-Aging",
    peptides: [
      { name: "GHK-Cu", slug: "ghk-cu", active: true },
      { name: "Melanotan II", slug: "melanotan-ii", active: true },
    ],
  },
  {
    name: "Gut Health & Immunity",
    peptides: [
      { name: "KPV", slug: "kpv", active: true },
      { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1", active: true },
    ],
  },
  {
    name: "Sleep & Recovery",
    peptides: [
      { name: "DSIP", slug: "dsip", active: true },
    ],
  },
  {
    name: "Longevity",
    peptides: [
      { name: "Epitalon", slug: "epitalon", active: true },
      { name: "NAD+", slug: "nad-plus", active: true },
    ],
  },
  {
    name: "Sexual Health",
    peptides: [
      { name: "PT-141", slug: "pt-141", active: true },
    ],
  },
];

export default function ResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research"}]}} />
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Peer-Reviewed Studies</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Research</h1>
        <p className="text-gray-500 dark:text-slate-400 max-w-xl text-sm leading-relaxed">
          Peer-reviewed research summaries organized by peptide. Click any peptide to read key studies and plain-English summaries.
        </p>
      </div>

      <div className="space-y-10">
        {categories.map((cat) => (
          <div key={cat.name}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-4 pb-2 border-b border-gray-100 dark:border-slate-800 flex items-center gap-2">
              <CategoryIcon name={cat.name} /> {cat.name}
            </h2>
            <ul className="space-y-2">
              {cat.peptides.map((p) =>
                "active" in p && p.active ? (
                  <li key={p.slug}>
                    <Link
                      href={`/research/${p.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2d3d] dark:text-slate-200 hover:text-[#0891b2] transition-all duration-150 hover:scale-105 origin-left group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-slate-600 group-hover:bg-[#0891b2] transition-colors flex-shrink-0" />
                      {p.name}
                    </Link>
                  </li>
                ) : (
                  <li key={p.slug} className="inline-flex items-center gap-2 text-sm text-gray-400 dark:text-slate-500">
                    <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-slate-700 flex-shrink-0" />
                    {p.name}
                    <span className="text-xs bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-slate-500 px-2 py-0.5 rounded-full">Coming Soon</span>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
