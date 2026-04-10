import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Epitalon vs NAD+ — Longevity Supplement Comparison | Prof. Peptide",
  description: "Epitalon vs NAD+ comparison — how these two longevity compounds work, what the research shows, and how they differ in mechanism, evidence, and use.",
};

const rows = [
  ["Type", "Synthetic tetrapeptide (Ala-Glu-Asp-Gly)", "Coenzyme \u2014 supplemented via precursors NMN or NR"],
  ["Origin", "Derived from pineal gland peptide epithalamin \u2014 developed in Russia", "Natural coenzyme present in all living cells"],
  ["Primary Mechanism", "Telomerase activation, epigenetic regulation, circadian rhythm restoration", "Sirtuin activation, PARP activation, mitochondrial energy metabolism"],
  ["Key Benefit", "Telomere lengthening \u2014 extends cellular replicative lifespan", "NAD+ restoration \u2014 reverses age-related metabolic decline"],
  ["Research Volume", "Primarily one Russian research group (Khavinson) \u2014 limited independent replication", "Large and growing international trial base"],
  ["Human Trial Quality", "Small studies \u2014 blood cell telomere length in elderly", "Multiple RCTs \u2014 NAD+ elevation consistently confirmed"],
  ["Independent Replication", "Limited \u2014 2025 UK study is first major independent confirmation", "Strong \u2014 multiple independent labs globally"],
  ["Pineal/Circadian Effects", "Restores melatonin secretion in aged animals and humans", "Not directly studied"],
  ["Regulatory Status", "Not FDA approved \u2014 research use", "Supplement (NMN regulatory status uncertain in US)"],
  ["Administration", "Injectable or oral", "Oral supplement (NMN or NR capsules)"],
  ["Cost", "$50\u2013200/course", "$30\u2013150/month ongoing"],
];

export default function EpitalonVsNADPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Epitalon vs NAD+ — Longevity Supplement Comparison","description":"Epitalon vs NAD+ comparison — how these two longevity compounds work, what the research shows, and how they differ in mechanism, evidence, and use.","url":"https://www.profpeptide.com/compare/epitalon-vs-nad-plus","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Comparisons","item":"https://www.profpeptide.com/compare"},{"@type":"ListItem","position":3,"name":"Epitalon vs NAD+ — Longevity Supplement Comparison"}]}} />
    <div className="section max-w-4xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Epitalon vs NAD+ &mdash; Longevity Compound Comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">Epitalon and NAD+ are two of the most discussed compounds in longevity research &mdash; but they work through completely different mechanisms and have very different evidence bases. Epitalon is a research peptide targeting telomere biology. NAD+ (via NMN or NR) targets mitochondrial function and cellular energy metabolism.</p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
            <th className="text-left px-4 py-3 font-semibold text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-1/4"></th>
            <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">Epitalon</th>
            <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">NAD+ (via NMN/NR)</th>
          </tr></thead>
          <tbody>{rows.map(([label, a, b], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-[#0f172a]" : "bg-gray-50/50 dark:bg-slate-800/50"}>
              <td className="px-4 py-3 font-medium text-[#1e2d3d] dark:text-slate-100 border-b border-gray-100 dark:border-slate-700">{label}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{a}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{b}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300">NAD+ precursors have far more robust and independently replicated human evidence. <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link> has fascinating telomere biology but the evidence base is narrow and concentrated in a single research group. They target entirely different aging mechanisms and could theoretically be studied together as part of a comprehensive longevity protocol.</p>
      </div>
      <div className="flex gap-3 mb-8">
        <Link href="/peptides/epitalon" className="btn-primary text-sm">Epitalon Profile</Link>
        <Link href="/supplements/nad-plus" className="btn-outline text-sm">NAD+ Profile</Link>
        <Link href="/supplements/nmn" className="btn-outline text-sm">NMN Profile</Link>
      </div>
      <p className="text-xs text-gray-400 dark:text-slate-500">For educational and research purposes only. Not medical advice.</p>
    </div>
    </>
  );
}
