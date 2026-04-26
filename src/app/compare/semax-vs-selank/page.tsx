import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/compare/semax-vs-selank" },
  title: "Semax vs Selank — Cognitive Peptide Comparison | Prof. Peptide",
  description: "Semax vs Selank comparison — mechanisms, cognitive effects, anxiety, neuroprotection, and how to choose between these two Russian nootropic peptides.",
};

const rows = [
  ["Origin", "ACTH (adrenocorticotropic hormone \u2014 the body's stress hormone) (4-7) analog", "Tuftsin (a naturally occurring immune-modulating peptide that Selank is derived from) analog"],
  ["Primary Mechanism", "BDNF (brain-derived neurotrophic factor \u2014 protects and grows neurons) upregulation, trkB (the BDNF receptor) activation, neuroprotection", "GABA-A (the brain's primary inhibitory receptor \u2014 calms neural activity) receptor allosteric modulation (changing receptor sensitivity rather than directly activating), BDNF modulation"],
  ["Primary Effect", "Cognitive enhancement, neuroprotection, stroke recovery", "Anxiolytic (anxiety-reducing) \u2014 reduces anxiety without sedation or dependence"],
  ["Anxiety", "Moderate anxiolytic effects secondary", "Primary effect \u2014 comparable to benzodiazepines in one RCT without side effects"],
  ["Cognitive Enhancement", "Primary \u2014 improves attention, memory, executive function", "Secondary \u2014 anti-fatigue and mild psychostimulant effects"],
  ["Neuroprotection", "Strongest application \u2014 used clinically in Russia for stroke", "Present \u2014 BDNF mediated, protective against alcohol-induced cognitive decline"],
  ["Clinical Use (Russia)", "Approved for stroke, encephalopathy, Parkinson\u2019s, ADHD", "Approved as anxiolytic for generalized anxiety disorder"],
  ["Dependence Risk", "None demonstrated", "None \u2014 key advantage over benzodiazepines"],
  ["Administration", "Intranasal spray", "Intranasal spray"],
  ["Sedation", "None", "None \u2014 anxiolytic without sedation"],
  ["Human Trial Data", "Limited English-language data \u2014 mostly Russian publications", "One RCT (62 patients, GAD) \u2014 comparable to medazepam"],
];

export default function SemaxVsSelankPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Semax vs Selank — Cognitive Peptide Comparison","description":"Semax vs Selank comparison — mechanisms, cognitive effects, anxiety, neuroprotection, and how to choose between these two Russian nootropic peptides.","url":"https://profpeptide.com/compare/semax-vs-selank","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Comparisons","item":"https://profpeptide.com/compare"},{"@type":"ListItem","position":3,"name":"Semax vs Selank — Cognitive Peptide Comparison"}]}} />
    <div className="section max-w-4xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Semax vs Selank &mdash; Cognitive Peptide Comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">Semax and Selank are both synthetic nootropic peptides developed in Russia, both approved for clinical use there, and both studied for cognitive and anxiolytic effects. They work through different mechanisms and have distinct primary strengths &mdash; Semax is the cognitive enhancer and neuroprotector, Selank is the anxiolytic with cognitive benefits.</p>

      <div className="mb-8 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Why Russian peptide research diverged from Western</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
          Both Semax and Selank were developed in Soviet/Russian neuroscience institutes starting in the 1980s. Russian peptide research took a different path from Western pharmacology, focusing heavily on small synthetic peptides modeled on natural neuropeptides &mdash; a class largely overlooked in Western drug development.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
          Semax is derived from ACTH (adrenocorticotropic hormone, the body&apos;s stress response peptide). Specifically, it&apos;s a fragment of ACTH (positions 4-7) modified to remove ACTH&apos;s hormone-stimulating effects while preserving its cognitive and neuroprotective properties. The result: a peptide that boosts BDNF (brain-derived neurotrophic factor &mdash; protects and grows neurons) and supports cognition without affecting cortisol.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
          Selank is derived from tuftsin, an immunoregulatory peptide naturally produced from immunoglobulins. The modification gave Selank anxiolytic (anxiety-reducing) properties without the sedation, dependence, or memory effects associated with benzodiazepines. It works through a different mechanism than benzos &mdash; modulating GABA-A receptors allosterically rather than activating them directly.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Both are FDA-unapproved in the US but ARE approved by Russia&apos;s regulatory body for clinical use. Both administer intranasally (sprays). Both have peer-reviewed Russian research and growing English-language interest. The key differences come down to primary effect: Semax for cognition and neuroprotection, Selank for anxiety reduction.
        </p>
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
            <th className="text-left px-4 py-3 font-semibold text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-1/4"></th>
            <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">Semax</th>
            <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">Selank</th>
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
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Which one is right for you?</h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-4">
          Both peptides are research compounds in the US (FDA-unapproved) but clinically used in Russia. Application choice depends primarily on what you&apos;re researching: cognition or anxiety.
        </p>
        <div className="space-y-4">
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Cognitive enhancement, focus, mental performance</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Semax is the more direct match. Russian clinical research approves it for stroke recovery, encephalopathy, ADHD, and cognitive impairment &mdash; all centered on its BDNF-elevating, neuroprotective mechanism. Self-reported effects in research-using populations include improved focus, mental clarity, and faster learning. Onset is fairly quick (within hours of intranasal dosing).
            </p>
          </div>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Anxiety reduction without sedation or dependence</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Selank is the more direct match. Russia approves it for generalized anxiety disorder (GAD). The standout feature: in one RCT (62 patients with GAD), Selank was comparable to medazepam &mdash; a benzodiazepine &mdash; in anxiety reduction, but without sedation, memory impairment, or dependence risk. For research interested in anxiolysis without benzodiazepine downsides, this is an unusual peptide.
            </p>
          </div>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Stress recovery, neuroprotection, brain injury research</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Both have neuroprotective evidence, but Semax has stronger data for acute neuroprotection (stroke, traumatic brain injury, cognitive decline). Russian clinics use Semax post-stroke. Selank&apos;s neuroprotection is more about chronic stress resistance &mdash; protective against alcohol-induced cognitive decline in animal models.
            </p>
          </div>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Stack approach (cognitive + anxiety together)</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Some research protocols use both. Mechanisms don&apos;t overlap (BDNF/trkB for Semax, GABA-A allosteric modulation for Selank), so combined effects are theoretically additive. The combination is sometimes positioned as &ldquo;Semax for productivity, Selank for stress.&rdquo; No formal research has compared the stack to single-peptide protocols.
            </p>
          </div>
        </div>
      </div>

      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300">Choose <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link> if the primary research interest is cognitive enhancement, neuroprotection, or stroke-related outcomes. Choose <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link> if the primary interest is anxiety reduction without sedation or dependence risk. They complement each other well &mdash; Semax for cognition, Selank for stress &mdash; and are sometimes studied together.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">How are these legal in Russia but not the US?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Russia&apos;s regulatory framework approved both peptides through their pharmacological standards based on Russian-conducted clinical trials. The FDA requires its own trials for US approval, which neither peptide has undergone. This is a common pattern with Russian peptides &mdash; they&apos;re sold legally in Russia as approved medications, but in the US they&apos;re sold only as research compounds. No legal pathway currently exists to import either for human use in the US.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">How are they administered?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Both are intranasal sprays. The intranasal route is critical &mdash; it allows the peptides to cross the blood-brain barrier directly via nasal-to-CNS pathways, avoiding the digestive degradation that would happen with oral dosing. Effects begin within 15&ndash;60 minutes. Standard research dosing is 1&ndash;3 sprays per nostril per session, dosed 2&ndash;4 times daily.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Are there side effects?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Both have unusually clean side effect profiles in research. Semax: rare mild irritation at the application site, occasional headache. Selank: rare drowsiness or mild dizziness, no dependence or withdrawal even after extended use. Neither causes the cognitive blunting, dependence, or rebound symptoms associated with conventional anxiolytics.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Can I take Semax and Selank together?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Yes, no documented interactions. Mechanisms are different (BDNF vs GABA-A) so combined effects are likely additive. Some research protocols dose Semax in the morning (cognitive enhancement) and Selank in the evening or as needed (anxiety reduction).
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">How does Selank compare to benzodiazepines?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              One RCT (62 patients with GAD, Russian, 2008) compared Selank to medazepam: comparable anxiety reduction, but Selank produced no sedation, no memory impairment, no dependence, and no rebound anxiety on discontinuation. This trial is small and not independently replicated outside Russia. The mechanism (allosteric GABA-A modulation) is biologically plausible for explaining the cleaner effect profile.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Will these show up on drug tests?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Neither is on standard drug screening panels (5-panel, 10-panel, expanded employment panels). They&apos;re not tested for in WADA athletic screening either, though policy may evolve as awareness grows. Custom mass-spectrometry testing could detect them, but no commercial tests target these peptides.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-8">
        <Link href="/peptides/semax" className="btn-primary text-sm">Semax Profile</Link>
        <Link href="/peptides/selank" className="btn-outline text-sm">Selank Profile</Link>
      </div>
      <p className="text-xs text-gray-400 dark:text-slate-500">For educational and research purposes only. Not medical advice. Not for human use.</p>
    </div>
    </>
  );
}
