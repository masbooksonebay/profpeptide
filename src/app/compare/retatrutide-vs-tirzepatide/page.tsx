import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/compare/retatrutide-vs-tirzepatide" },
  title: "Retatrutide vs Tirzepatide — GLP Triple Agonist vs Dual Agonist | Prof. Peptide",
  description:
    "Retatrutide vs Tirzepatide research comparison: weight loss data, FDA status, side effect profiles, dosing, and which to choose.",
};

const rows = [
  ["Mechanism", "GLP-1 + GIP + Glucagon (triple agonist)", "GLP-1 + GIP (dual agonist)"],
  ["Brand Names", "None yet — investigational", "Mounjaro (diabetes), Zepbound (obesity)"],
  ["FDA Approval", "Phase 3 trials (TRIUMPH program); approval expected 2027–2028", "Diabetes: 2022. Obesity (Zepbound): 2023"],
  ["Average Weight Loss", "~28.7% at 12mg over 68 weeks (TRIUMPH-4)", "~22.5% at 15mg over 72 weeks (SURMOUNT-1)"],
  ["Blood Sugar Control", "Reduces HbA1c ~2.0% (TRANSCEND-T2D-1, 12mg, 40wk)", "Reduces HbA1c ~2–2.5%"],
  ["Dosing", "Once weekly injection. Titrates 2 → 4 → 6 → 9 → 12 mg over 16+ weeks", "Once weekly injection. Titrates 2.5 → 5 → 7.5 → 10 → 12.5 → 15 mg over 20+ weeks"],
  ["GI Side Effects", "Nausea, vomiting, diarrhea — common, dose-dependent", "Similar profile — possibly slightly milder at high doses"],
  ["Unique Side Effects", "Dysesthesia (skin tingling/burning) ~21% at 12mg — not seen with Tirzepatide", "None unique to this comparison"],
  ["Heart Rate", "Increase of 5–10 bpm peaking around week 24", "Mild increase in some users"],
  ["Cardiovascular Data", "TRIUMPH-3 CVOT pending (results expected 2027+)", "SURPASS-CVOT ongoing"],
  ["Availability", "Research-grade only — clinical trials and research peptide vendors", "Prescription only (insurance/cash)"],
  ["Key Trial", "TRIUMPH program Phase 3", "SURMOUNT-1, SURPASS-2"],
];

export default function RetatrutideVsTirzepatidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Retatrutide vs Tirzepatide — GLP Triple Agonist vs Dual Agonist","description":"Retatrutide vs Tirzepatide research comparison: weight loss data, FDA status, side effect profiles, dosing, and which to choose.","url":"https://profpeptide.com/compare/retatrutide-vs-tirzepatide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Comparisons","item":"https://profpeptide.com/compare"},{"@type":"ListItem","position":3,"name":"Retatrutide vs Tirzepatide — GLP Triple Agonist vs Dual Agonist"}]}} />
    <div className="section max-w-4xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Retatrutide vs Tirzepatide &mdash; Triple Agonist vs Dual Agonist Comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">Retatrutide and Tirzepatide are both injectable peptides for weight loss and metabolic health, but they work on different numbers of receptors. Tirzepatide is FDA-approved and activates two receptors (GLP-1 and GIP). Retatrutide is investigational and activates three (GLP-1, GIP, and glucagon), which appears to drive even greater weight loss in trials. Here&apos;s how they compare.</p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#1e293b]">
              <th className="text-left px-4 py-3 font-semibold text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-1/4"></th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">Retatrutide</th>
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

      <div className="space-y-4 mb-8">
        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Choose Retatrutide if:</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300">You&apos;re researching the highest-efficacy weight loss data available, can tolerate the dysesthesia risk, and don&apos;t need an FDA-approved or insurance-covered option. Best for research settings.</p>
        </div>
        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Choose Tirzepatide if:</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300">You want an FDA-approved option backed by years of clinical use, prescription access, and slightly milder dysesthesia profile. Best when prescription path matters.</p>
        </div>
        <div className="border border-[#0891b2]/20 rounded-xl p-5 bg-[#0891b2]/10">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Consider the bigger picture:</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300">For users tracking the GLP class as a whole, see the <Link href="/compare/semaglutide-vs-tirzepatide-vs-retatrutide" className="text-[#0891b2] hover:underline">Semaglutide vs Tirzepatide vs Retatrutide</Link> 3-way comparison.</p>
        </div>
      </div>

      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300">Retatrutide produces the largest average weight loss seen in any obesity drug, but it&apos;s still investigational. <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link> has FDA approval, prescription access, and an established safety record. The dysesthesia signal in retatrutide trials (~21% at 12mg) is the most notable difference in side effect profiles.</p>
      </div>

      <div className="flex gap-3 mb-8">
        <Link href="/peptides/retatrutide" className="btn-primary text-sm">Retatrutide Profile</Link>
        <Link href="/peptides/tirzepatide" className="btn-outline text-sm">Tirzepatide Profile</Link>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed">For educational and research purposes only. Not medical advice.</p>
    </div>
    </>
  );
}
