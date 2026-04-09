import Link from "next/link";

export const metadata = {
  title: "Semaglutide vs Tirzepatide vs Retatrutide — GLP-1 Comparison | Prof. Peptide",
  description:
    "Semaglutide vs Tirzepatide vs Retatrutide — mechanism, weight loss data, FDA status, and how all three GLP-1 peptides compare side by side.",
};

const rows = [
  ["Generation", "1st", "2nd", "3rd (investigational)"],
  ["Receptors Targeted", "GLP-1 only", "GLP-1 + GIP", "GLP-1 + GIP + Glucagon"],
  ["Nickname", "GLP-1 agonist", "Dual agonist", "Triple agonist / \u201CTriple G\u201D"],
  ["Brand Names", "Ozempic, Wegovy, Rybelsus", "Mounjaro, Zepbound", "None yet \u2014 not FDA approved"],
  ["FDA Status", "Approved (diabetes 2017, obesity 2021)", "Approved (diabetes 2022, obesity 2023)", "Phase 3 trials (TRIUMPH program) \u2014 approval expected 2027\u20132028"],
  ["Average Weight Loss", "~14.9% over 68 weeks (STEP 1 trial)", "~22.5% over 72 weeks (SURMOUNT-1)", "~24.2% at 12mg dose (Phase 2/3 data)"],
  ["Blood Sugar Control", "Reduces HbA1c ~1\u20132%", "Reduces HbA1c ~2\u20132.5%", "Early data shows superior glucose control"],
  ["Liver Fat Reduction", "Moderate", "Significant", "Up to 86% reduction (Phase 3 TRIUMPH-4 data)"],
  ["GI Side Effects", "Nausea, vomiting, diarrhea \u2014 common", "Similar \u2014 possibly slightly more at high doses", "Similar profile \u2014 still being characterized"],
  ["Dosing", "Once weekly injection (or daily oral)", "Once weekly injection", "Once weekly injection (expected)"],
  ["Availability", "Widely available globally", "Widely available globally", "Clinical trials only \u2014 not commercially available"],
  ["Key Trial", "STEP 1 (NEJM 2021)", "SURMOUNT-1, SURPASS-2", "TRIUMPH program Phase 3"],
];

export default function TripleGLP1ComparisonPage() {
  return (
    <div className="section max-w-5xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Semaglutide vs Tirzepatide vs Retatrutide &mdash; GLP-1 Comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">Three generations of GLP-1 metabolic peptides &mdash; each adding another receptor to the mix. Semaglutide targets one receptor, Tirzepatide two, and Retatrutide three. Each generation has shown greater average weight loss than the last. Here&apos;s how they compare based on clinical trial data.</p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#1e293b]">
              <th className="text-left px-4 py-3 font-semibold text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-1/5"></th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[26.6%]">Semaglutide</th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[26.6%]">Tirzepatide</th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[26.6%]">Retatrutide</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, a, b, c], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-[#0f172a]" : "bg-gray-50/50 dark:bg-slate-800/50"}>
                <td className="px-4 py-3 font-medium text-[#1e2d3d] dark:text-slate-100 border-b border-gray-100 dark:border-slate-700">{label}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{a}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{b}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-4">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300">Each generation shows greater efficacy than the last &mdash; but more receptors means more unknowns. <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link> has the longest safety record and broadest availability. <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link> has now beaten semaglutide head-to-head in the SURMOUNT-5 trial. <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">Retatrutide</Link> shows the most dramatic weight loss data of all three, but is not yet FDA approved and long-term safety data is still accumulating.</p>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 mb-8">Note: All three are prescription medications. Retatrutide is currently only available through clinical trials.</p>

      <div className="flex flex-wrap gap-3 mb-8">
        <Link href="/peptides/semaglutide" className="btn-primary text-sm">Semaglutide Profile</Link>
        <Link href="/peptides/tirzepatide" className="btn-outline text-sm">Tirzepatide Profile</Link>
        <Link href="/peptides/retatrutide" className="btn-outline text-sm">Retatrutide Profile</Link>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed">For educational and research purposes only. Not medical advice.</p>
    </div>
  );
}
