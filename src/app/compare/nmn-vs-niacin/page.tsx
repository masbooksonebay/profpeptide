import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/compare/nmn-vs-niacin" },
  title: "NMN vs Niacin — NAD+ Precursor Comparison | Prof. Peptide",
  description:
    "NMN vs Niacin comparison — how they raise NAD+, what the research shows, cost differences, side effects, and which is better for longevity.",
};

const rows = [
  ["Type", "NAD+ precursor \u2014 direct biosynthesis intermediate", "Vitamin B3 form \u2014 enters via Preiss-Handler pathway"],
  ["How It Raises NAD+", "Converted to NAD+ via NMNAT enzymes (some evidence it\u2019s first converted to NR before entering cells)", "Converted via longer 3-step Preiss-Handler pathway"],
  ["Efficacy (Human Data)", "Significantly raises whole-blood NAD+ in human trials", "Raises NAD+ effectively \u2014 some n=1 data suggests comparable or superior potency per mg"],
  ["Flush Side Effect", "None", "Yes \u2014 \u201Cniacin flush\u201D (redness, warmth) is common at effective doses"],
  ["Cholesterol Effects", "Not demonstrated", "Raises HDL, lowers LDL and triglycerides \u2014 FDA-approved for dyslipidemia"],
  ["Cost", "$50\u2013150/month", "$5\u201315/month"],
  ["Regulatory Status", "FDA reviewing as potential drug ingredient \u2014 sold as supplement", "Long-established supplement and medication"],
  ["Research Volume", "Growing human trial base \u2014 20+ clinical studies", "Decades of human data as a supplement and medication"],
  ["Longevity Research", "David Sinclair takes NMN \u2014 animal data shows broad anti-aging effects", "Mixed signals \u2014 one researcher found niacin raised epigenetic aging rate despite raising NAD+"],
  ["Best For", "Those prioritizing well-studied NAD+ raising without flush", "Those prioritizing cost efficiency and cholesterol benefits"],
];

export default function NMNvsNiacinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"NMN vs Niacin — NAD+ Precursor Comparison","description":"NMN vs Niacin comparison — how they raise NAD+, what the research shows, cost differences, side effects, and which is better for longevity.","url":"https://profpeptide.com/compare/nmn-vs-niacin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Comparisons","item":"https://profpeptide.com/compare"},{"@type":"ListItem","position":3,"name":"NMN vs Niacin — NAD+ Precursor Comparison"}]}} />
    <div className="section max-w-4xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">NMN vs Niacin &mdash; NAD+ Precursor Comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">Both NMN (Nicotinamide Mononucleotide) and Niacin (Nicotinic Acid / Vitamin B3) raise NAD+ levels, but through different pathways, at vastly different costs, and with different side effect profiles. A 2026 head-to-head human clinical trial in Nature Metabolism found NMN and NR comparable in raising blood NAD+ levels, while nicotinamide (NAM) produced only a transient effect.</p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#1e293b]">
              <th className="text-left px-4 py-3 font-semibold text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-1/4"></th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">NMN</th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">Niacin</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, a, b], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-[#0f172a]" : "bg-gray-50/50 dark:bg-slate-800/50"}>
                <td className="px-4 py-3 font-medium text-[#1e2d3d] dark:text-slate-100 border-b border-gray-100 dark:border-slate-700">{label}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{a}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300">Niacin raises NAD+ at approximately 1% of the cost of NMN. The flush is manageable for most people and can be reduced with extended-release forms. <Link href="/supplements/nmn" className="text-[#0891b2] hover:underline">NMN</Link> has no flush and is simpler to use, but costs significantly more and the long-term human evidence is still developing. Both effectively raise <Link href="/supplements/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link> &mdash; the choice often comes down to budget, tolerance for flushing, and whether the cholesterol benefits of niacin are relevant.</p>
      </div>

      <div className="flex gap-3 mb-8">
        <Link href="/supplements/nmn" className="btn-primary text-sm">NMN Profile</Link>
        <Link href="/supplements/nad-plus" className="btn-outline text-sm">NAD+ Profile</Link>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed">For educational and research purposes only. Not medical advice.</p>
    </div>
    </>
  );
}
