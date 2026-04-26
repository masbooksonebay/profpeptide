import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/compare/semaglutide-vs-tirzepatide-vs-retatrutide" },
  title: "Semaglutide vs Tirzepatide vs Retatrutide — GLP-1 Comparison | Prof. Peptide",
  description:
    "Semaglutide vs Tirzepatide vs Retatrutide — mechanism, weight loss data, FDA status, and how all three GLP-1 peptides compare side by side.",
};

const rows = [
  ["Generation", "1st", "2nd", "3rd — investigational (still in clinical trials, not yet approved for sale)"],
  ["Receptors Targeted", "GLP-1 only", "GLP-1 + GIP", "GLP-1 + GIP + Glucagon"],
  ["Nickname", "GLP-1 agonist", "Dual agonist", "Triple agonist (sometimes called \u201CTriple G\u201D for the three receptors it targets)"],
  ["Brand Names", "Ozempic, Wegovy, Rybelsus", "Mounjaro, Zepbound", "None yet \u2014 not FDA approved"],
  ["FDA Status", "Approved (diabetes 2017, obesity 2021)", "Approved (diabetes 2022, obesity 2023)", "Phase 3 trials (TRIUMPH program) \u2014 approval expected 2027\u20132028"],
  ["Average Weight Loss", "~14.9% over 68 weeks (STEP 1 trial)", "~22.5% over 72 weeks (SURMOUNT-1)", "~24.2% at 12mg dose (Phase 2/3 data)"],
  ["Blood Sugar Control", "Reduces HbA1c (a 3-month blood sugar marker) ~1\u20132%", "Reduces HbA1c ~2\u20132.5%", "Early data shows superior glucose control"],
  ["Liver Fat Reduction", "Moderate", "Significant", "Up to 86% reduction (Phase 3 TRIUMPH-4 data)"],
  ["GI Side Effects", "Nausea, vomiting, diarrhea \u2014 common", "Similar \u2014 possibly slightly more at high doses", "Similar profile \u2014 still being characterized"],
  ["Dosing", "Once weekly injection (or daily oral)", "Once weekly injection", "Once weekly injection (expected)"],
  ["Availability", "Widely available globally", "Widely available globally", "Clinical trials only \u2014 not commercially available"],
  ["Key Trial", "STEP 1 (NEJM 2021)", "SURMOUNT-1, SURPASS-2", "TRIUMPH program Phase 3"],
];

export default function TripleGLP1ComparisonPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Semaglutide vs Tirzepatide vs Retatrutide — GLP-1 Comparison","description":"Semaglutide vs Tirzepatide vs Retatrutide — mechanism, weight loss data, FDA status, and how all three GLP-1 peptides compare side by side.","url":"https://profpeptide.com/compare/semaglutide-vs-tirzepatide-vs-retatrutide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Comparisons","item":"https://profpeptide.com/compare"},{"@type":"ListItem","position":3,"name":"Semaglutide vs Tirzepatide vs Retatrutide — GLP-1 Comparison"}]}} />
    <div className="section max-w-5xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Semaglutide vs Tirzepatide vs Retatrutide &mdash; GLP-1 Comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">Three generations of GLP-1 metabolic peptides &mdash; each adding another receptor to the mix. Semaglutide targets one receptor, Tirzepatide two, and Retatrutide three. Each generation has shown greater average weight loss than the last. Here&apos;s how they compare based on clinical trial data.</p>

      <div className="mb-8 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Why three receptors?</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
          The &ldquo;generation&rdquo; framing isn&apos;t just marketing &mdash; each receptor adds a different metabolic mechanism.
        </p>
        <div className="space-y-3">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <strong className="text-[#1e2d3d] dark:text-slate-100">GLP-1 (all three drugs target this)</strong> &mdash; Reduces appetite, slows gastric emptying, stimulates insulin release. This is the foundation of weight loss.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <strong className="text-[#1e2d3d] dark:text-slate-100">GIP (added in tirzepatide and retatrutide)</strong> &mdash; Improves insulin sensitivity, modulates fat storage, may reduce nausea side effects compared to GLP-1 alone.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <strong className="text-[#1e2d3d] dark:text-slate-100">Glucagon (added only in retatrutide)</strong> &mdash; Increases energy expenditure and burns liver fat directly. This is why retatrutide shows up to 86% liver fat reduction in trials.
          </p>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mt-3">
          More receptors means more mechanisms working in parallel &mdash; but also more unknowns about long-term effects.
        </p>
      </div>

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

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Which one is right for you?</h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-4">
          This is general framing for educational purposes &mdash; the actual decision should involve your prescribing physician. Insurance coverage, BMI thresholds, and individual health history all matter.
        </p>
        <div className="space-y-4">
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">First-time considering GLP-1 therapy</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Semaglutide is the most-studied option with the longest safety record (FDA-approved 2017 for diabetes, 2021 for obesity). It&apos;s the natural starting point for most patients new to this class. Available as Ozempic (diabetes), Wegovy (obesity), or Rybelsus (oral form).
            </p>
          </div>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Already taking semaglutide, want stronger results</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Tirzepatide has now beaten semaglutide head-to-head in the SURMOUNT-5 trial &mdash; about 22.5% weight loss vs 14.9%. The dual GLP-1/GIP mechanism produces more weight loss with similar tolerability. Most patients who plateau on semaglutide find tirzepatide makes meaningful additional progress.
            </p>
          </div>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Have type 2 diabetes plus obesity</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              All three address both conditions, but tirzepatide currently has the strongest combined profile &mdash; FDA-approved for both diabetes (Mounjaro) and obesity (Zepbound), with HbA1c reduction of 2&ndash;2.5% and weight loss approaching 22.5%. Semaglutide is also dual-approved and may be preferred where insurance favors Ozempic/Wegovy coverage.
            </p>
          </div>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Want maximum weight loss, willing to wait</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Retatrutide shows the most dramatic results in trials &mdash; about 24.2% weight loss at 12mg dose plus up to 86% liver fat reduction &mdash; but is not yet FDA-approved. Phase 3 TRIUMPH trials are running through 2026&ndash;2027, with approval expected in 2027 or 2028. Until then, retatrutide is only available through clinical trials.
            </p>
          </div>
        </div>
      </div>

      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-4">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300">Each generation shows greater efficacy than the last &mdash; but more receptors means more unknowns. <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link> has the longest safety record and broadest availability. <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link> has now beaten semaglutide head-to-head in the SURMOUNT-5 trial. <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">Retatrutide</Link> shows the most dramatic weight loss data of all three, but is not yet FDA approved and long-term safety data is still accumulating.</p>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 mb-8">Note: All three are prescription medications. Retatrutide is currently only available through clinical trials.</p>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">When will retatrutide be available?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Retatrutide is currently in Phase 3 clinical trials through Eli Lilly&apos;s TRIUMPH program. FDA approval is expected in 2027 or 2028 based on current trial timelines. Until then, the only legal way to access retatrutide is through enrollment in a clinical trial. Research-grade retatrutide is sold for laboratory research only and is not for human use.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Are GI side effects worse with each newer generation?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Not exactly. The GI side effect pattern (nausea, vomiting, diarrhea) is similar across all three drugs, with most occurring during the dose-titration phase. Some research suggests GIP receptor activation in tirzepatide may actually reduce nausea compared to semaglutide alone. Retatrutide&apos;s GI profile is still being characterized in trials but appears similar.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Which has the best safety record?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Semaglutide has 8+ years of post-market safety data (FDA-approved 2017). Tirzepatide has 4+ years (approved 2022). Retatrutide has only clinical trial safety data so far. For patients prioritizing long-term safety evidence, semaglutide has the largest body of real-world data.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">How does insurance coverage compare?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Coverage varies dramatically by plan and indication. Many insurers cover semaglutide and tirzepatide for diabetes (Ozempic, Mounjaro) but require prior authorization or deny coverage for obesity (Wegovy, Zepbound). Patients with both diabetes and obesity often have an easier path to coverage. Retatrutide has no commercial pricing yet.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Can I switch between them?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Switching between GLP-1 medications is common and generally safe under physician supervision. Most clinicians recommend a 1&ndash;2 week washout when switching to avoid additive side effects, then starting the new drug at its standard low dose for re-titration. Patients should not switch without medical guidance.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Why does retatrutide produce so much more liver fat reduction?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              The glucagon receptor (the third receptor only retatrutide targets) directly stimulates fat oxidation in the liver. This is a different mechanism from semaglutide and tirzepatide&apos;s appetite-suppression-driven weight loss. The Phase 3 TRIUMPH-4 trial reported up to 86% liver fat reduction &mdash; the most dramatic effect on hepatic fat seen in any GLP-1-class drug.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <Link href="/peptides/semaglutide" className="btn-primary text-sm">Semaglutide Profile</Link>
        <Link href="/peptides/tirzepatide" className="btn-outline text-sm">Tirzepatide Profile</Link>
        <Link href="/peptides/retatrutide" className="btn-outline text-sm">Retatrutide Profile</Link>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed">For educational and research purposes only. Not medical advice.</p>
    </div>
    </>
  );
}
