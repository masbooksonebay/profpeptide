import Link from "next/link";

export const metadata = {
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
];

export default function ComparePage() {
  return (
    <div className="section max-w-3xl">
      <span className="tag mb-3 inline-block">Research Comparisons</span>
      <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Comparisons</h1>
      <p className="text-gray-500 max-w-xl text-sm leading-relaxed mb-10">
        Side-by-side research breakdowns to help you understand the differences between commonly compared peptides and supplements.
      </p>
      <div className="space-y-4">
        {comparisons.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="block border border-gray-100 rounded-xl p-5 hover:border-[#0D7377] hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="tag text-xs">{c.tag}</span>
            </div>
            <h2 className="text-base font-semibold text-[#1e2d3d] group-hover:text-[#0D7377] transition-colors mb-1">
              {c.title}
            </h2>
            <p className="text-sm text-gray-500">{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
