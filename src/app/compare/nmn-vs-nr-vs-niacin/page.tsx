import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/compare/nmn-vs-nr-vs-niacin" },
  title: "NMN vs NR vs Niacin — NAD+ Precursor Comparison | Prof. Peptide",
  description: "NMN vs NR vs Niacin — how each raises NAD+, what the research shows, cost differences, side effects, and which is best for longevity.",
};

const rows = [
  ["Pathway to NAD+", "NMNAT enzymes (may convert to NR first)", "NRK pathway \u2014 enters cells directly, converts to NMN then NAD+", "Preiss-Handler pathway \u2014 3-step process"],
  ["Efficacy (Human Data)", "Significantly raises whole-blood NAD+", "Significantly raises whole-blood NAD+", "Raises NAD+ \u2014 some n=1 data suggests comparable potency per mg"],
  ["Head-to-Head", "NMN and NR comparable \u2014 2026 Nature Metabolism RCT (n=65)", "NMN and NR comparable \u2014 same trial", "NAM (nicotinamide) only transient effect in same trial"],
  ["Flush", "None", "None", "Yes \u2014 \u201Cniacin flush\u201D common at effective doses"],
  ["Cholesterol Effects", "Not demonstrated", "Not demonstrated", "Raises HDL, lowers LDL/triglycerides \u2014 FDA-approved for dyslipidemia"],
  ["Cellular Entry", "Debated \u2014 may require conversion to NR first", "Direct cellular entry via transporters", "Indirect \u2014 multiple conversion steps"],
  ["Human Trial Volume", "20+ clinical studies", "40+ clinical studies \u2014 more established", "Decades of data as supplement and medication"],
  ["Regulatory Status", "FDA reviewing as potential drug ingredient", "GRAS status \u2014 well-established supplement", "Long-established supplement and medication"],
  ["Cost", "$50\u2013150/month", "$30\u201380/month", "$5\u201315/month"],
  ["Best For", "Those prioritizing convenience, no flush", "Best-studied NAD+ precursor, no flush", "Budget-conscious, also want cholesterol benefits"],
];

export default function NMNvsNRvsNiacinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"NMN vs NR vs Niacin — NAD+ Precursor Comparison","description":"NMN vs NR vs Niacin — how each raises NAD+, what the research shows, cost differences, side effects, and which is best for longevity.","url":"https://profpeptide.com/compare/nmn-vs-nr-vs-niacin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Comparisons","item":"https://profpeptide.com/compare"},{"@type":"ListItem","position":3,"name":"NMN vs NR vs Niacin — NAD+ Precursor Comparison"}]}} />
    <div className="section max-w-5xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">NMN vs NR vs Niacin &mdash; NAD+ Precursor Comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">All three raise NAD+ levels but through different pathways, at vastly different costs, and with different side effect profiles. A 2026 head-to-head human clinical trial in Nature Metabolism found NMN and NR comparable in raising blood NAD+, while nicotinamide (NAM) produced only a transient effect. Here&apos;s how all three compare.</p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
            <th className="text-left px-4 py-3 font-semibold text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-1/5"></th>
            <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700">NMN</th>
            <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700">NR</th>
            <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700">Niacin</th>
          </tr></thead>
          <tbody>{rows.map(([label, a, b, c], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-[#0f172a]" : "bg-gray-50/50 dark:bg-slate-800/50"}>
              <td className="px-4 py-3 font-medium text-[#1e2d3d] dark:text-slate-100 border-b border-gray-100 dark:border-slate-700">{label}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{a}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{b}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{c}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300">NR has the strongest human trial base and is generally considered the best-studied option. <Link href="/supplements/nmn" className="text-[#0891b2] hover:underline">NMN</Link> is comparable in efficacy but costs more and has a more uncertain regulatory future. Niacin raises <Link href="/supplements/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link> at ~1% of the cost but causes flushing and has different downstream effects. All three effectively raise NAD+ &mdash; the choice comes down to budget, flush tolerance, and secondary goals.</p>
      </div>
      <p className="text-xs text-gray-400 dark:text-slate-500">For educational and research purposes only. Not medical advice.</p>
    </div>
    </>
  );
}
