import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/compare/retatrutide-vs-tirzepatide",
  title: "Retatrutide vs Tirzepatide — GLP Triple Agonist vs Dual Agonist | Prof. Peptide",
  description:
    "Retatrutide vs Tirzepatide research comparison: weight loss data, FDA status, side effect profiles, dosing, and which to choose.",
});

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

const faqs = [
  {
    q: "Is retatrutide stronger than tirzepatide?",
    a: "In trials, retatrutide has produced greater average weight loss. As a triple agonist (GLP-1 + GIP + glucagon), at its 12 mg dose it reached ~24.2% average weight loss over 48 weeks in Phase 2 and ~28.7% over 68 weeks in the Phase 3 TRIUMPH-4 trial, with the weight-loss curve still declining. Tirzepatide, a dual agonist (GLP-1 + GIP), reached ~22.5% over 72 weeks in SURMOUNT-1. So retatrutide shows higher efficacy in trials — but it is still investigational, whereas tirzepatide is FDA-approved and available now.",
  },
  {
    q: "Is retatrutide FDA-approved?",
    a: "No. Retatrutide is still investigational and in Phase 3 trials (the TRIUMPH program); it is not FDA-approved and is not commercially available — research-grade material only. Tirzepatide, by contrast, is FDA-approved: for type 2 diabetes (Mounjaro, 2022) and for obesity (Zepbound, 2023). Retatrutide approval is expected around 2027–2028 based on current trial timelines.",
  },
  {
    q: "Can you switch from tirzepatide to retatrutide?",
    a: "That is a prescriber-led medical decision, and for now it is largely hypothetical outside a clinical trial, because retatrutide is not commercially available. Both are once-weekly injectables that share GLP-1 and GIP activity (retatrutide adds a third, glucagon, receptor), so the classes are related — but there is no established cross-titration protocol, and any transition should be managed by a physician. Retatrutide is currently accessible only through clinical trials or as a research-use-only compound.",
  },
  {
    q: "How much more weight loss does retatrutide show?",
    a: "A few percentage points of body weight in the trial data. Retatrutide reached ~24.2% at 48 weeks (Phase 2) and ~28.7% at 68 weeks (TRIUMPH-4), versus ~22.5% for tirzepatide over 72 weeks (SURMOUNT-1). The gap partly reflects retatrutide's third (glucagon) receptor and longer-running trials whose weight-loss curves had not yet plateaued. These figures come from different trials and durations, so they are not a direct head-to-head comparison.",
  },
  {
    q: "What are the main side effects of each?",
    a: "Both cause dose-dependent gastrointestinal effects — nausea, vomiting, and diarrhea — usually worst during dose escalation. Retatrutide additionally shows a distinctive dysesthesia signal (skin tingling or burning) reported in roughly 21% of participants at the 12 mg dose, which is not seen with tirzepatide, plus a heart-rate increase of about 5–10 bpm. Tirzepatide's GI profile is broadly similar and possibly slightly milder at high doses. Retatrutide's longer-term safety is still being characterized in Phase 3.",
  },
];

export default function RetatrutideVsTirzepatidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Retatrutide vs Tirzepatide — GLP Triple Agonist vs Dual Agonist","description":"Retatrutide vs Tirzepatide research comparison: weight loss data, FDA status, side effect profiles, dosing, and which to choose.","url":"https://profpeptide.com/compare/retatrutide-vs-tirzepatide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Comparisons","item":"https://profpeptide.com/compare"},{"@type":"ListItem","position":3,"name":"Retatrutide vs Tirzepatide — GLP Triple Agonist vs Dual Agonist"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-4xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Retatrutide vs Tirzepatide &mdash; Triple Agonist vs Dual Agonist Comparison</h1>
      <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl"><Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">Retatrutide</Link> and <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link> are both injectable peptides for weight loss and metabolic health, but they work on different numbers of receptors. Tirzepatide is FDA-approved and activates two receptors (GLP-1 and GIP). Retatrutide is investigational and activates three (GLP-1, GIP, and glucagon), which appears to drive even greater weight loss in trials. Here&apos;s how they compare.</p>

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
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Dosing</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">Both are once-weekly subcutaneous injections titrated slowly upward to limit gastrointestinal side effects. These are the trial/label escalation schedules, provided for research context — retatrutide is research-use-only and neither should be dosed without medical oversight.</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-slate-300">
          <li><span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Retatrutide:</span> once weekly, titrating 2 → 4 → 6 → 9 → 12 mg over roughly 16+ weeks (12 mg is the top trial dose).</li>
          <li><span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Tirzepatide:</span> once weekly, titrating 2.5 → 5 → 7.5 → 10 → 12.5 → 15 mg over roughly 20+ weeks (15 mg is the top label dose).</li>
        </ul>
      </div>

      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-8">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">The two share a gastrointestinal profile; the clearest difference is retatrutide&apos;s dysesthesia signal.</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-slate-300">
          <li><span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Shared (both):</span> dose-dependent nausea, vomiting, and diarrhea — usually worst during dose escalation.</li>
          <li><span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Retatrutide-specific:</span> dysesthesia (skin tingling or burning) in ~21% at 12 mg — not seen with tirzepatide — plus a heart-rate increase of ~5–10 bpm.</li>
          <li><span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Tirzepatide:</span> GI profile broadly similar, possibly slightly milder at high doses; long-term safety established across years of clinical use.</li>
          <li><span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Note:</span> retatrutide&apos;s longer-term safety is still being characterized in Phase 3 (cardiovascular outcome data pending).</li>
        </ul>
      </div>

      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-8">
        <h2 className="text-xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-2">Bottom Line</h2>
        <p className="text-lg text-gray-600 dark:text-slate-300">Retatrutide produces the largest average weight loss seen in any obesity drug, but it&apos;s still investigational. Tirzepatide has FDA approval, prescription access, and an established safety record. The dysesthesia signal in retatrutide trials (~21% at 12mg) is the most notable difference in side effect profiles.</p>
      </div>

      <div className="flex gap-3 mb-8">
        <Link href="/peptides/retatrutide" className="btn-primary text-sm">Retatrutide Profile</Link>
        <Link href="/peptides/tirzepatide" className="btn-outline text-sm">Tirzepatide Profile</Link>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">{f.q}</h3>
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related comparisons</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/compare/semaglutide-vs-tirzepatide-vs-retatrutide" className="text-sm font-medium text-[#0891b2] hover:underline">Semaglutide vs Tirzepatide vs Retatrutide &rarr;</Link>
          <Link href="/compare/retatrutide-vs-semaglutide" className="text-sm font-medium text-[#0891b2] hover:underline">Retatrutide vs Semaglutide &rarr;</Link>
          <Link href="/compare/semaglutide-vs-tirzepatide" className="text-sm font-medium text-[#0891b2] hover:underline">Semaglutide vs Tirzepatide &rarr;</Link>
        </div>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed">For educational and research purposes only. Not medical advice.</p>
    <ContactLink pageName="Retatrutide vs Tirzepatide — Triple Agonist vs Dual Agonist Comparison" pagePath="/compare/retatrutide-vs-tirzepatide" />
    </div>
    </>
  );
}
