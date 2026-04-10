import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CategoryIcon } from "@/components/CategoryIcon";

export const metadata = {
  title: "Peptide Library — 24 Research Peptide Profiles | Prof. Peptide",
  description:
    "Browse 24 research peptide profiles organized by category. Mechanisms, research summaries, dosage guidance, and safety information for each compound.",
};

const categories = [
  {
    name: "Metabolic & Weight Loss",
    slug: "metabolic",
    peptides: [
      { name: "Semaglutide", slug: "semaglutide" },
      { name: "Tirzepatide", slug: "tirzepatide" },
      { name: "Retatrutide", slug: "retatrutide" },
      { name: "AOD-9604", slug: "aod-9604" },
      { name: "MOTS-c", slug: "mots-c" },
    ],
  },
  {
    name: "Recovery & Tissue Repair",
    slug: "recovery",
    peptides: [
      { name: "BPC-157", slug: "bpc-157" },
      { name: "TB-500", slug: "tb-500" },
      { name: "Wolverine Stack", slug: "wolverine-stack" },
    ],
  },
  {
    name: "Performance & Energy",
    slug: "performance",
    peptides: [
      { name: "IGF-1 LR3", slug: "igf-1-lr3" },
      { name: "Follistatin", slug: "follistatin" },
    ],
  },
  {
    name: "Growth Hormone",
    slug: "growth-hormone",
    peptides: [
      { name: "Ipamorelin", slug: "ipamorelin" },
      { name: "CJC-1295", slug: "cjc-1295" },
      { name: "Sermorelin", slug: "sermorelin" },
      { name: "Tesamorelin", slug: "tesamorelin" },
    ],
  },
  {
    name: "Cognitive & Nootropic",
    slug: "cognitive",
    peptides: [
      { name: "Semax", slug: "semax" },
      { name: "Selank", slug: "selank" },
    ],
  },
  {
    name: "Skin Health & Anti-Aging",
    slug: "skin-health",
    peptides: [
      { name: "GHK-Cu", slug: "ghk-cu" },
      { name: "GLOW", slug: "glow" },
      { name: "Melanotan II", slug: "melanotan-ii" },
    ],
  },
  {
    name: "Gut Health & Immunity",
    slug: "gut-health",
    peptides: [
      { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1" },
    ],
  },
  {
    name: "Longevity",
    slug: "longevity",
    peptides: [
      { name: "Epitalon", slug: "epitalon" },
      { name: "NAD+", slug: "nad-plus" },
    ],
  },
  {
    name: "Sexual Health",
    slug: "sexual-health",
    peptides: [
      { name: "PT-141", slug: "pt-141" },
    ],
  },
];

export default function PeptidesPage({ searchParams }: { searchParams: { category?: string } }) {
  const filter = searchParams.category;
  const filtered = filter ? categories.filter((c) => c.slug === filter) : categories;

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides"}]}} />
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Research Profiles</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Peptide Library</h1>
        <p className="text-gray-500 dark:text-slate-400 max-w-xl text-sm leading-relaxed">
          Research profiles organized by category. Click any peptide to read the full profile including mechanism of action, key research findings, and references.
        </p>
        {filter && (
          <Link href="/peptides" className="text-xs text-[#0891b2] hover:underline mt-2 inline-block">
            &larr; Show all categories
          </Link>
        )}
      </div>

      <div className="space-y-10">
        {filtered.map((cat) => (
          <div key={cat.name}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-4 pb-2 border-b border-gray-100 dark:border-slate-800 flex items-center gap-2">
              <CategoryIcon name={cat.name} /> {cat.name}
            </h2>
            <ul className="space-y-2">
              {cat.peptides.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/peptides/${p.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2d3d] dark:text-slate-200 hover:text-[#0891b2] transition-all duration-150 hover:scale-105 origin-left group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-slate-600 group-hover:bg-[#0891b2] transition-colors flex-shrink-0" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
