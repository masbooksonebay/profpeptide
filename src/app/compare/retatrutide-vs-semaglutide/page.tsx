import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/compare/retatrutide-vs-semaglutide" },
  title: "Retatrutide vs Semaglutide — GLP Triple Agonist vs Single Agonist | Prof. Peptide",
  description:
    "Retatrutide vs Semaglutide research comparison: weight loss data, FDA status, cardiovascular evidence, dosing, and which to choose.",
};

const rows = [
  ["Mechanism", "GLP-1 + GIP + Glucagon (triple agonist)", "GLP-1 only (single agonist)"],
  ["Brand Names", "None yet — investigational", "Ozempic (diabetes), Wegovy (obesity), Rybelsus (oral)"],
  ["FDA Approval", "Phase 3 trials; approval expected 2027–2028", "Diabetes: 2017. Obesity (Wegovy): 2021"],
  ["Average Weight Loss", "~28.7% at 12mg over 68 weeks (TRIUMPH-4)", "~14.9% at 2.4mg over 68 weeks (STEP 1)"],
  ["Blood Sugar Control", "Reduces HbA1c ~2.0%", "Reduces HbA1c ~1–2%"],
  ["Dosing", "Once weekly injection. 2 → 4 → 6 → 9 → 12 mg", "Once weekly injection (Ozempic/Wegovy) or daily oral (Rybelsus). 0.25 → 0.5 → 1.0 → 1.7 → 2.4 mg"],
  ["GI Side Effects", "Nausea, vomiting, diarrhea — common, dose-dependent", "Same — most well-characterized in this comparison"],
  ["Unique Side Effects", "Dysesthesia (skin tingling/burning) ~21% at 12mg", "None unique"],
  ["Cardiovascular Data", "TRIUMPH-3 CVOT pending (2027+)", "SUSTAIN-6 and SELECT — proven CV risk reduction"],
  ["Other Approved Indications", "None", "Cardiovascular risk reduction; chronic kidney disease in T2D"],
  ["Availability", "Research-grade only — clinical trials and research peptide vendors", "Prescription only (insurance/cash)"],
  ["Long-term Safety Data", "<2 years", "8+ years"],
  ["Key Trial", "TRIUMPH program Phase 3", "STEP 1, SUSTAIN, SELECT"],
];

export default function RetatrutideVsSemaglutidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Retatrutide vs Semaglutide — GLP Triple Agonist vs Single Agonist","description":"Retatrutide vs Semaglutide research comparison: weight loss data, FDA status, cardiovascular evidence, dosing, and which to choose.","url":"https://profpeptide.com/compare/retatrutide-vs-semaglutide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Comparisons","item":"https://profpeptide.com/compare"},{"@type":"ListItem","position":3,"name":"Retatrutide vs Semaglutide — GLP Triple Agonist vs Single Agonist"}]}} />
    <div className="section max-w-4xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Retatrutide vs Semaglutide &mdash; Triple Agonist vs Single Agonist Comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">Semaglutide and Retatrutide sit at opposite ends of the GLP class. Semaglutide activates one receptor (GLP-1) and is FDA-approved with the longest safety record in the class. Retatrutide activates three (GLP-1, GIP, and glucagon) and is still investigational, but Phase 3 trials show it producing nearly twice the weight loss. Here&apos;s how they compare.</p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#1e293b]">
              <th className="text-left px-4 py-3 font-semibold text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-1/4"></th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">Retatrutide</th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">Semaglutide</th>
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
          <p className="text-sm text-gray-600 dark:text-slate-300">Maximum weight loss is the priority and FDA approval / prescription access aren&apos;t required. Best for research settings exploring the cutting edge of the GLP class.</p>
        </div>
        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Choose Semaglutide if:</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300">You want the most established FDA-approved option with years of safety data, proven cardiovascular benefit, and the broadest list of approved indications. Best for users who want a long track record.</p>
        </div>
        <div className="border border-[#0891b2]/20 rounded-xl p-5 bg-[#0891b2]/10">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Consider the bigger picture:</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300">For the full picture of the GLP class evolution, see the <Link href="/compare/semaglutide-vs-tirzepatide-vs-retatrutide" className="text-[#0891b2] hover:underline">Semaglutide vs Tirzepatide vs Retatrutide</Link> 3-way comparison.</p>
        </div>
      </div>

      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300">Retatrutide is the most powerful weight loss peptide in trials so far. <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link> has the most established safety record, the only proven cardiovascular benefit in the class (SELECT trial), and the most approved indications. Retatrutide&apos;s dysesthesia signal (~21% at 12mg) is the most notable side-effect difference between the two.</p>
      </div>

      <div className="flex gap-3 mb-8">
        <Link href="/peptides/retatrutide" className="btn-primary text-sm">Retatrutide Profile</Link>
        <Link href="/peptides/semaglutide" className="btn-outline text-sm">Semaglutide Profile</Link>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed">For educational and research purposes only. Not medical advice.</p>
    </div>
    </>
  );
}
