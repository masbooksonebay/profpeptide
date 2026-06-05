import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CategoryIcon } from "@/components/CategoryIcon";

export const metadata = {
  alternates: { canonical: "/peptides" },
  title: "Peptide Library — 42 Research Peptide Profiles | Prof. Peptide",
  description:
    "Browse 42 research peptide profiles organized by category. Mechanisms, research summaries, dosage guidance, and safety information for each compound.",
};

const categories = [
  {
    name: "Metabolic & Weight Loss",
    slug: "metabolic",
    peptides: [
      { name: "AOD-9604", slug: "aod-9604" },
      { name: "Cagrilintide", slug: "cagrilintide" },
      { name: "CagriSema", slug: "cagrisema" },
      { name: "Metabolic Blend (NAD+ / MOTS-c / 5-Amino-1MQ)", slug: "nad-mots-c-5-amino-1mq" },
      { name: "MOTS-c", slug: "mots-c" },
      { name: "Retatrutide", slug: "retatrutide" },
      { name: "Semaglutide", slug: "semaglutide" },
      { name: "Semaglutide + BPC-157", slug: "semaglutide-bpc-157" },
      { name: "Tirzepatide", slug: "tirzepatide" },
      { name: "Tirzepatide + BPC-157", slug: "tirzepatide-bpc-157" },
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
      { name: "CJC-1295", slug: "cjc-1295" },
      { name: "CJC-1295 DAC + Ipamorelin", slug: "cjc-1295-dac-ipamorelin" },
      { name: "CJC-1295 + Ipamorelin (GH Stack)", slug: "gh-stack" },
      { name: "Ipamorelin", slug: "ipamorelin" },
      { name: "MK-677", slug: "mk-677" },
      { name: "MK-677 + Ipamorelin", slug: "mk-677-ipamorelin" },
      { name: "Sermorelin", slug: "sermorelin" },
      { name: "Sermorelin + Ipamorelin", slug: "sermorelin-ipamorelin" },
      { name: "Tesamorelin", slug: "tesamorelin" },
      { name: "Tesamorelin + Ipamorelin", slug: "tesamorelin-ipamorelin" },
    ],
  },
  {
    name: "Cognitive & Nootropic",
    slug: "cognitive",
    peptides: [
      { name: "Selank", slug: "selank" },
      { name: "Semax", slug: "semax" },
      { name: "Semax + Selank", slug: "semax-selank" },
    ],
  },
  {
    name: "Skin Health & Anti-Aging",
    slug: "skin-health",
    peptides: [
      { name: "GHK-Cu", slug: "ghk-cu" },
      { name: "GLOW", slug: "glow" },
      { name: "KLOW", slug: "klow" },
      { name: "Melanotan II", slug: "melanotan-ii" },
    ],
  },
  {
    name: "Gut Health & Immunity",
    slug: "gut-health",
    peptides: [
      { name: "KPV", slug: "kpv" },
      { name: "KPV + BPC-157", slug: "kpv-bpc-157" },
      { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1" },
    ],
  },
  {
    name: "Sleep & Recovery",
    slug: "sleep-recovery",
    peptides: [
      { name: "DSIP", slug: "dsip" },
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
    // TODO: Leave Epitalon under Longevity for now. Add sibling Khavinson
    // bioregulators (Cardiogen, Cortagen) here as their profiles go live.
    name: "Bioregulators",
    slug: "bioregulators",
    peptides: [
      { name: "Pinealon", slug: "pinealon" },
      { name: "Thymogen", slug: "thymogen" },
    ],
  },
  {
    name: "Sexual Health",
    slug: "sexual-health",
    peptides: [
      { name: "PT-141", slug: "pt-141" },
      { name: "PT-141 + Oxytocin", slug: "pt-141-oxytocin" },
    ],
  },
];

export default function PeptidesPage({ searchParams }: { searchParams: { category?: string } }) {
  const filter = searchParams.category;
  const filtered = filter ? categories.filter((c) => c.slug === filter) : categories;

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides"}]}} />
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Research Profiles</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Peptide Library</h1>
        <p className="text-gray-500 dark:text-slate-400 max-w-xl text-lg leading-relaxed">
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
