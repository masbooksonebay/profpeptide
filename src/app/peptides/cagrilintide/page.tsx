import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WhereToBuy from "@/components/WhereToBuy";

export const metadata = {
  alternates: { canonical: "/peptides/cagrilintide" },
  title: "Cagrilintide — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "Evidence-based profile of Cagrilintide, a long-acting amylin analog studied for appetite suppression and weight management in combination with GLP-1 agonists.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Cagrilintide is a synthetic, long-acting analog of human amylin — a peptide hormone co-secreted with insulin by pancreatic beta cells. Developed by Novo Nordisk, it has been engineered for once-weekly subcutaneous administration through specific amino acid substitutions and fatty acid modification. Cagrilintide is most actively studied as a combination therapy with semaglutide, marketed clinically as CagriSema, and represents one of the most closely watched metabolic drug candidates currently in Phase 3 trials.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    content:
      "Cagrilintide activates amylin receptors and calcitonin receptors throughout the central nervous system, particularly in the area postrema and the nucleus of the solitary tract. Amylin receptor activation slows gastric emptying, suppresses glucagon secretion after meals, and signals satiety to the hypothalamic feeding centers. Unlike GLP-1 agonists which work primarily at the GLP-1 receptor, cagrilintide works through a parallel pathway — which is why the combination with semaglutide produces greater weight loss than either compound alone. The fatty acid tail in cagrilintide binds to serum albumin, extending its half-life and enabling the once-weekly dosing schedule.",
  },
  {
    id: "research",
    title: "Key Research Areas",
    content:
      "Clinical and preclinical research has focused on: (1) Monotherapy for obesity — Phase 2 trials showed 10.8% mean weight loss at 26 weeks with cagrilintide alone. (2) Combination with semaglutide (CagriSema) — Phase 2 trials demonstrated 17.1% weight loss at 32 weeks, significantly greater than semaglutide alone. (3) Type 2 diabetes management — CagriSema showed superior HbA1c reduction compared to semaglutide in trials. (4) Glycemic control via glucagon suppression and slowed gastric emptying. (5) Cardiovascular and metabolic endpoints — ongoing REDEFINE trial program. (6) Comparative potency vs tirzepatide in head-to-head obesity studies.",
  },
  {
    id: "benefits",
    title: "Observed Benefits",
    content:
      "In clinical trials the most consistently reported benefits include: significant body weight reduction (10-20% at one year when combined with semaglutide); reduced appetite and meal size; improved glycemic control in type 2 diabetes populations; decreased post-prandial glucagon response; lower blood pressure in some populations; and a tolerability profile that may differ from pure GLP-1 agonists regarding gastrointestinal side effects. Unlike GLP-1 agonists which primarily target appetite via GLP-1R, the amylin pathway may offer a complementary mechanism that reduces some GI adverse effects.",
  },
  {
    id: "halflife",
    title: "Half-Life and Stability",
    content:
      "Cagrilintide has an estimated half-life of approximately 159 hours (about 6.6 days), making it suitable for once-weekly subcutaneous administration. The fatty acid modification (palmitic acid linker) facilitates reversible albumin binding, which extends systemic circulation time. Lyophilized powder is stable at -20 degrees C for extended periods; reconstituted solution should be stored at 4 degrees C and used within standard peptide timeframes (typically 4 weeks when properly stored).",
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "Important caveats apply to the cagrilintide literature: (1) No monotherapy formulation has been FDA approved; all approvals to date remain pending. (2) Long-term safety data beyond 2 years is limited. (3) Most human data comes from Novo Nordisk-sponsored trials, which creates sponsor-concentration bias pending independent replication. (4) Injection site reactions are more commonly reported than with some other injectable peptides. (5) Cagrilintide is not approved by the FDA, EMA, or any major regulatory body for therapeutic use as of 2026. (6) Head-to-head data against tirzepatide remains preliminary. (7) The synergy mechanism between amylin and GLP-1 pathways is well-described but not yet fully characterized at the receptor-signaling level.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "The most studied combination is cagrilintide with semaglutide (CagriSema, 2.4 mg cagrilintide + 2.4 mg semaglutide weekly), which forms the basis of the Phase 3 REDEFINE program. In research contexts, cagrilintide has also been studied alongside other GLP-1 analogs and in combination with tirzepatide (experimentally). Research suggests the amylin + GLP-1 pairing produces additive effects on weight loss while potentially reducing GI adverse effects compared to higher-dose GLP-1 monotherapy.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "Lau DCW, et al. (2021). Once-weekly cagrilintide for weight management in people with overweight and obesity: a multicentre, randomised, double-blind, placebo-controlled and active-controlled, dose-finding phase 2 trial. Lancet. 398(10317):2160-2172.",
      "Enebo LB, et al. (2021). Safety, tolerability, pharmacokinetics, and pharmacodynamics of concomitant administration of multiple doses of cagrilintide with semaglutide 2\u00B74 mg for weight management: a randomised, controlled, phase 1b trial. Lancet. 397(10286):1736-1748.",
      "Frias JP, et al. (2023). Efficacy and safety of co-administered once-weekly cagrilintide 2\u00B74 mg with once-weekly semaglutide 2\u00B74 mg in type 2 diabetes: a multicentre, randomised, double-blind, active-controlled, phase 2 trial. Lancet. 402(10403):720-730.",
      "Kruse T, et al. (2021). Development of Cagrilintide, a Long-Acting Amylin Analogue. J Med Chem. 64(15):11183-11194.",
      "Novo Nordisk. (2024). REDEFINE clinical trial program overview.",
    ],
  },
];

export default function CagrilintidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Cagrilintide","description":"Evidence-based profile of Cagrilintide, a long-acting amylin analog studied for appetite suppression and weight management in combination with GLP-1 agonists.","url":"https://profpeptide.com/peptides/cagrilintide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Cagrilintide"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Cagrilintide</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700/50 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved &mdash; Phase 3 Trials
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Amylin Analog, CagriSema (in combination with semaglutide)
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.content && (
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((ref, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                    {ref}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Amylin Analog", "Weight Loss", "CagriSema", "Phase 3", "Investigational"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/peptides/semaglutide" className="text-sm font-medium text-[#0891b2] hover:underline">Semaglutide</Link>
          <Link href="/peptides/tirzepatide" className="text-sm font-medium text-[#0891b2] hover:underline">Tirzepatide</Link>
          <Link href="/peptides/retatrutide" className="text-sm font-medium text-[#0891b2] hover:underline">Retatrutide</Link>
        </div>
      </div>
      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/compare/cagrilintide-vs-semaglutide" className="text-sm font-medium text-[#0891b2] hover:underline">Cagrilintide vs Semaglutide &rarr;</Link>
          <Link href="/compare/cagrisema-vs-tirzepatide" className="text-sm font-medium text-[#0891b2] hover:underline">CagriSema vs Tirzepatide &rarr;</Link>
        </div>
      </div>

      <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>

      <WhereToBuy peptide="cagrilintide" />
    </div>
    </>
  );
}
