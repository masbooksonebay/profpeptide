import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/compare/semaglutide-vs-tirzepatide" },
  title: "Semaglutide vs Tirzepatide — GLP-1 Comparison | Prof. Peptide",
  description:
    "Semaglutide vs Tirzepatide comparison — mechanism, weight loss data, FDA approval status, side effects, and key clinical trial results.",
};

const rows = [
  ["Mechanism", "GLP-1 receptor agonist (single agonist)", "Dual GLP-1 + GIP receptor agonist"],
  ["Brand Names", "Ozempic (diabetes), Wegovy (obesity), Rybelsus (oral)", "Mounjaro (diabetes), Zepbound (obesity)"],
  ["FDA Approval", "Diabetes: 2017. Obesity (Wegovy): 2021", "Diabetes: 2022. Obesity (Zepbound): 2023"],
  ["Average Weight Loss", "10\u201315% body weight (Wegovy trials)", "15\u201322% body weight (Zepbound/SURMOUNT trials)"],
  ["Head-to-Head Data", "SURMOUNT-5 (2025, NEJM): Tirzepatide superior", "Same trial \u2014 ~47% more weight loss than semaglutide at 72 weeks"],
  ["GI Side Effects", "Nausea, vomiting, diarrhea \u2014 common, usually transient", "Similar profile \u2014 some evidence of fewer GI side effects at higher doses"],
  ["Dosing", "Once weekly subcutaneous (or daily oral for Rybelsus)", "Once weekly subcutaneous injection"],
  ["Blood Sugar Control", "Reduces HbA1c 1\u20132%", "Reduces HbA1c 2\u20132.5% (stronger glucose control)"],
  ["Cardiovascular Data", "SUSTAIN-6, SELECT trials \u2014 significant CV risk reduction", "SURPASS-CVOT \u2014 cardiovascular outcomes trial ongoing"],
  ["Research Status", "Most studied GLP-1 agonist \u2014 extensive long-term data", "Newer \u2014 strong Phase 3 data, long-term data still accumulating"],
];

export default function SemaglutideVsTirzepatidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Semaglutide vs Tirzepatide — GLP-1 Comparison","description":"Semaglutide vs Tirzepatide comparison — mechanism, weight loss data, FDA approval status, side effects, and key clinical trial results.","url":"https://profpeptide.com/compare/semaglutide-vs-tirzepatide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Comparisons","item":"https://profpeptide.com/compare"},{"@type":"ListItem","position":3,"name":"Semaglutide vs Tirzepatide — GLP-1 Comparison"}]}} />
    <div className="section max-w-4xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Semaglutide vs Tirzepatide &mdash; GLP-1 Peptide Comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">Semaglutide and Tirzepatide are the two most clinically significant metabolic peptides of the past decade. Both are FDA-approved and backed by large-scale Phase 3 trials. Tirzepatide is newer and shows greater average weight loss, but semaglutide has a longer track record and broader approval history.</p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#1e293b]">
              <th className="text-left px-4 py-3 font-semibold text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-1/4"></th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">Semaglutide</th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">Tirzepatide</th>
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
        <p className="text-sm text-gray-600 dark:text-slate-300">Tirzepatide produces greater average weight loss and better blood sugar control in head-to-head data. <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link> has a longer track record, broader approval history, and more long-term safety data. Both are prescription medications, but both are also widely available as research-grade peptides through specialty vendors. See <Link href="/coupons" className="text-[#0891b2] hover:underline">Verified Discount Codes</Link> for current options.</p>
      </div>

      <div className="flex gap-3 mb-8">
        <Link href="/peptides/semaglutide" className="btn-primary text-sm">Semaglutide Profile</Link>
        <Link href="/peptides/tirzepatide" className="btn-outline text-sm">Tirzepatide Profile</Link>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed">For educational and research purposes only. Not medical advice.</p>
    </div>
    </>
  );
}
