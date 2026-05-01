import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";

export const metadata = {
  alternates: { canonical: "/supplements/glycine" },
  title: "Glycine for Sleep: Evidence, Dosing, and Mechanism | Prof Peptide",
  description:
    "Glycine is a non-essential amino acid with surprising sleep evidence. Research shows 3g before bed reduces sleep latency, improves sleep quality, and reduces next-day fatigue. Mechanism, dosing, and safety profile.",
};

const amazonHref = "https://www.amazon.com/s?k=glycine+powder&tag=profpeptide-20";

const faqs: { q: string; a: string }[] = [
  {
    q: "How much glycine should I take for sleep?",
    a: "3 grams (3,000 mg), 30-60 minutes before bed. This is the dose used in all major human clinical trials on glycine and sleep. Higher doses are not better studied for sleep and offer no clear additional benefit.",
  },
  {
    q: "Can I take glycine with melatonin or magnesium?",
    a: "Yes. Glycine works through a different mechanism than melatonin and is generally compatible with magnesium glycinate (which is itself a magnesium-glycine compound). No known interactions between these three.",
  },
  {
    q: "Will glycine make me groggy in the morning?",
    a: "Generally no — one of glycine's distinguishing features in research is improved next-day alertness rather than the morning grogginess associated with many sleep aids. If anything, subjects in research studies reported feeling more refreshed.",
  },
  {
    q: "How long until glycine starts working?",
    a: "Most research studies measured effects within the first few nights of use. Some people report noticeable improvement in sleep quality within 2-3 nights; others may need 1-2 weeks of consistent use to see effects.",
  },
  {
    q: "Does glycine come from animal sources?",
    a: "Most commercial glycine is produced via industrial fermentation, making it suitable for vegan and vegetarian diets. Glycine is also naturally abundant in collagen-containing foods like bone broth, skin, and connective tissue.",
  },
];

const keyFacts: { label: string; value: string }[] = [
  { label: "Form", value: "Amino acid, typically as powder or capsules" },
  { label: "Standard sleep dose", value: "3 grams (3,000 mg), 30-60 minutes before bed" },
  { label: "Evidence tier", value: "Moderate — multiple small-to-medium RCTs with consistent positive results" },
  { label: "Mechanism", value: "Inhibitory neurotransmitter, NMDA receptor co-agonist, lowers core body temperature" },
  { label: "Approval status", value: "Dietary supplement; widely available" },
];

export default function GlycinePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Glycine","description":"Glycine is a non-essential amino acid with sleep evidence. Research shows 3g before bed reduces sleep latency, improves sleep quality, and reduces next-day fatigue.","url":"https://profpeptide.com/supplements/glycine","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Glycine"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Glycine</h1>
        <span className="tag">Sleep &amp; Recovery</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: L-glycine, aminoacetic acid</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The simplest amino acid — and an evidence-supported sleep aid</p>

      <div className="space-y-8">
        <div className="rounded-xl p-5 bg-[#0891b2]/10 border border-[#0891b2]/20">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0891b2] mb-2">Quick Answer</p>
          <p className="text-sm text-gray-700 dark:text-slate-200 leading-relaxed">
            Glycine is the smallest amino acid in the human body and an inhibitory neurotransmitter. Multiple controlled trials show that 3 grams taken 30-60 minutes before bed improves subjective sleep quality, shortens time to fall asleep, and reduces next-day fatigue. The mechanism appears to involve lowering core body temperature — a key biological signal for sleep onset. The safety profile is excellent, the effective dose is modest, and unlike many sleep aids, glycine doesn&apos;t cause next-day grogginess.
          </p>
        </div>

        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Key Facts</p>
          <ul className="space-y-2">
            {keyFacts.map((f) => (
              <li key={f.label} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">{f.label}:</span> {f.value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What does glycine do?</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Glycine is the smallest amino acid the body uses, and it serves multiple roles. It&apos;s a building block of collagen (which is why bone broth and connective tissue are rich sources). It&apos;s a co-agonist at NMDA receptors. And critically for sleep, it acts as an inhibitory neurotransmitter at glycine receptors, particularly in the brainstem.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            The most likely mechanism behind glycine&apos;s sleep effects is its action on core body temperature. Falling asleep requires a drop in core body temperature; this is part of why a warm bath an hour before bed can help. Glycine appears to facilitate this drop by promoting vasodilation in the extremities, allowing the body to shed heat. Polysomnographic studies show that glycine before bed reduces sleep onset latency and increases the time spent in slow-wave sleep, suggesting an effect on actual sleep architecture rather than just subjective perception.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the research shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">Three controlled trials anchor the evidence base:</p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Inagawa et al. (2006, Journal of Clinical Sleep Medicine)</span> found that 3 grams of glycine before bed in adults with mild sleep complaints significantly reduced sleep onset latency and improved subjective sleep satisfaction.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Yamadera et al. (2007, Sleep and Biological Rhythms)</span> used polysomnography to confirm that 3 g of glycine before bed reduced sleep onset latency and improved subjective sleep quality, with the polysomnographic data showing measurable changes in sleep architecture.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Bannai et al. (2012, Journal of Pharmacological Sciences)</span> extended these findings, showing that 3 g of glycine before bed improved sleep efficiency, increased REM sleep, and reduced sleep latency.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            A follow-up study examined daytime performance after partial sleep restriction. Subjects given 3 g of glycine before sleep showed reduced fatigue and improved psychomotor vigilance test performance compared to placebo, suggesting the benefits extend beyond just feeling more rested.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            The effect size is modest in absolute terms — these aren&apos;t dramatic sedative effects — but the consistency across studies and the combination of subjective and objective improvements is unusual for a natural sleep aid.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Considerations and unknowns</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            The 3-gram dose used in research is significantly larger than what you&apos;d get from food (a typical serving of bone broth provides only a few hundred milligrams) but still well within safety limits. A 9-gram safety study found no serious adverse events at three times the standard dose.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Glycine has a faintly sweet taste, which makes the powder form palatable in water. Capsules require taking 4-6 large capsules to reach 3 grams, which some people find inconvenient.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Existing supplement overlap:</span> magnesium glycinate (a chelated form of magnesium bound to glycine) already contains some glycine, though typical sleep doses of magnesium glycinate provide far less than 3 grams of glycine.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Most studies have run for short durations (a few nights to a few weeks). Long-term daily use of supraphysiological glycine doses has not been extensively studied, though no safety signals have emerged.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            People taking clozapine (an antipsychotic) should avoid supplemental glycine, as it can interfere with the medication&apos;s effectiveness. Otherwise, glycine has very few known drug interactions.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Studies have generally been small (10-20 subjects) and conducted on populations with mild sleep complaints rather than diagnosed insomnia. Effects in severe insomnia or chronic sleep disorders are less well established.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to evaluate quality</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Glycine is one of the simpler supplements to evaluate. It&apos;s a single amino acid produced by reliable industrial fermentation processes and verified easily by standard lab tests.
          </p>
          <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Look for products that:</p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Are third-party tested (USP, NSF, or ConsumerLab certifications)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">List &ldquo;glycine&rdquo; or &ldquo;L-glycine&rdquo; as the only active ingredient (avoid proprietary blends if you want to dose precisely)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Are produced in cGMP-certified facilities</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Have minimal additives — pure glycine powder is essentially flavorless to faintly sweet, no need for fillers or flavorings</li>
          </ul>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Pharmaceutical-grade glycine is widely available at low cost; you don&apos;t need to pay a premium for this one.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Where to Buy</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Glycine is widely available as both bulk powder and capsules. Powder is more economical and easier to dose at the 3-gram research-supported level.
          </p>
          <a href={amazonHref} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm inline-block">
            Shop glycine on Amazon &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i}>
                <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">{f.q}</h3>
                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Amino Acid", "Sleep Quality", "Body Temperature", "Next-Day Alertness"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <PageDisclaimer />
    </div>
    </>
  );
}
