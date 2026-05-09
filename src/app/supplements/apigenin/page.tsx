import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ContactLink from "@/components/ContactLink";

export const metadata = {
  alternates: { canonical: "/supplements/apigenin" },
  title: "Apigenin: Sleep, GABA, and CD38/NAD+ Evidence | Prof Peptide",
  description:
    "Apigenin is the flavonoid in chamomile tea responsible for its calming effect. Evidence for sleep, GABA-A receptor binding, and CD38 inhibition for NAD+ preservation. Dosing, mechanism, and what's still uncertain.",
};

const amazonHref = "https://www.amazon.com/s?k=apigenin&tag=profpeptide-20";

const faqs: { q: string; a: string }[] = [
  {
    q: "How much apigenin should I take?",
    a: "50 mg taken 30-60 minutes before bed is the most common protocol, popularized in part by Andrew Huberman's recommendations. This dose is extrapolated from animal data and chamomile extract studies rather than direct human RCTs of pure apigenin. Start at 50 mg and adjust based on individual response.",
  },
  {
    q: "How does apigenin compare to chamomile tea?",
    a: "A typical cup of chamomile tea provides perhaps 1-5 mg of apigenin. A 50 mg supplement provides roughly 10-50x that amount in concentrated form. The tea may be more pleasant as a wind-down ritual; the supplement provides more bioavailable apigenin if you want the dose-dependent effects studied in research.",
  },
  {
    q: "Can I take apigenin with melatonin or other sleep supplements?",
    a: "Apigenin works through the GABAergic pathway, distinct from melatonin's circadian mechanism. The two can be combined, and some sleep stacks use both. Apigenin combines reasonably with magnesium (a co-activator at GABA-A receptors) and L-theanine. Avoid combining with prescription benzodiazepines or sedatives without medical guidance.",
  },
  {
    q: "Will apigenin cause dependence or tolerance like Xanax?",
    a: "Current evidence suggests no. Apigenin is a partial agonist at the benzodiazepine binding site, meaning it has a ceiling on receptor activation that prevents the receptor downregulation responsible for benzodiazepine dependence. Long-term human studies on dependency are limited but no signals have emerged so far.",
  },
  {
    q: "Is the CD38/NAD+ longevity story for real?",
    a: "The mechanism (CD38 inhibition preserving NAD+) is well-established in cell and animal studies. Whether oral apigenin at typical doses produces meaningful NAD+ elevation in humans, and whether this translates to longevity outcomes, remains unproven. The longevity claim is mechanistically plausible but not yet validated by human trials.",
  },
];

const keyFacts: { label: string; value: string }[] = [
  { label: "Form", value: "Capsules (typically 50 mg standalone extract); also via chamomile tea or chamomile extract" },
  { label: "Common dose for sleep", value: "50 mg, 30-60 minutes before bed" },
  { label: "Evidence tier", value: "Moderate animal evidence; preliminary human evidence (mostly via chamomile extract)" },
  { label: "Mechanism", value: "GABA-A receptor partial agonist (benzodiazepine binding site); CD38 inhibition (preserves NAD+)" },
  { label: "Approval status", value: "Dietary supplement; food-source apigenin GRAS" },
];

export default function ApigeninPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Apigenin","description":"Apigenin is the flavonoid in chamomile tea responsible for its calming effect. Evidence for sleep, GABA-A receptor binding, and CD38 inhibition.","url":"https://profpeptide.com/supplements/apigenin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Apigenin"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Apigenin</h1>
        <span className="tag">Sleep &amp; Recovery</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: 4&apos;,5,7-trihydroxyflavone, chamomile flavonoid</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The chamomile flavonoid behind one of the oldest sleep traditions</p>

      <div className="space-y-8">
        <div className="rounded-xl p-5 bg-[#0891b2]/10 border border-[#0891b2]/20">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0891b2] mb-2">Quick Answer</p>
          <p className="text-lg text-gray-700 dark:text-slate-200 leading-relaxed">
            Apigenin is a flavonoid found in chamomile, parsley, celery, and citrus fruits. It&apos;s the active compound thought to give chamomile tea its calming, sleep-promoting effect. Apigenin binds to the benzodiazepine site on GABA-A receptors — the same receptor system targeted by anti-anxiety medications — but as a partial agonist, meaning it produces calming effects without the dependence or withdrawal seen with prescription benzodiazepines. Apigenin also inhibits CD38, an enzyme that consumes NAD+, giving it a secondary longevity-relevant mechanism. Human evidence is largely from chamomile extract studies; standalone apigenin extracts are newer and less studied.
          </p>
        </div>

        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Key Facts</p>
          <ul className="space-y-2">
            {keyFacts.map((f) => (
              <li key={f.label} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">{f.label}:</span> {f.value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What does apigenin do?</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Apigenin is a plant flavonoid — one of thousands of polyphenolic compounds plants produce. Its concentration in foods is highest in dried chamomile flowers (the source of chamomile tea), parsley, celery, and citrus peels.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            The most-studied mechanism for apigenin&apos;s calming effect is binding at the benzodiazepine site of GABA-A receptors. GABA is the brain&apos;s primary inhibitory neurotransmitter — when GABA-A receptors are activated, neuronal firing slows, producing the calming effect we associate with anti-anxiety medications and sleep aids. Apigenin is a partial agonist at this site, meaning it activates the receptor less fully than benzodiazepines do. This partial activation appears to be enough to produce mild calming and sleep-supporting effects without the dependence, tolerance, and withdrawal characteristic of prescription benzodiazepines.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            A second mechanism that&apos;s gained attention: apigenin inhibits CD38, an enzyme that breaks down NAD+. NAD+ is a coenzyme essential for cellular energy metabolism, and NAD+ levels decline with age. By inhibiting CD38, apigenin may help preserve NAD+ levels — a connection to the broader longevity supplement category.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the research shows</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            The apigenin evidence base is heterogeneous. The strongest data comes from chamomile extract studies, where apigenin is the principal active flavonoid:
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Chamomile extract has shown anxiolytic effects in randomized controlled trials in adults with generalized anxiety disorder. Effects on sleep have been reported in older adults, with chamomile extract improving sleep quality measures over several weeks of supplementation.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Animal studies on isolated apigenin show sedative and anxiolytic effects via the GABAergic pathway, with sedative effects blocked by flumazenil — confirming the benzodiazepine-site mechanism. Multiple animal models also show reduced anxiety-like behavior at doses comparable to typical human supplementation when scaled.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            CD38/NAD+ research is largely preclinical. In animal models, apigenin elevates NAD+ levels and improves markers of metabolic health. Translation to human longevity outcomes has not been demonstrated in controlled trials.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Honest caveats:</span> most evidence on isolated apigenin (rather than chamomile extract) is from animal studies or in vitro work. The 50 mg evening dose that&apos;s become popular online is not directly validated by large human RCTs of pure apigenin — it&apos;s extrapolated from animal dosing and chamomile extract data. Direct human trials of standalone apigenin for sleep are limited.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Considerations and unknowns</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Source matters significantly.</span> Most commercial apigenin supplements are derived from chamomile extract concentrated to a stated apigenin percentage (often 98%). Some are synthetic. Quality varies, and independent testing has occasionally found products with much less apigenin than the label claims.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Apigenin is poorly water-soluble. Bioavailability of oral apigenin is modest, and taking it with a small amount of dietary fat (such as a few nuts or a teaspoon of olive oil) may improve absorption.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Drug interactions:</span> apigenin can inhibit several cytochrome P450 enzymes (CYP2C9, CYP3A4 in particular). This can theoretically affect blood levels of medications metabolized by these enzymes, including blood thinners, some statins, and certain antidepressants. Anyone on prescription medications should check with a doctor before adding apigenin.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Pregnancy:</span> chamomile (and by extension apigenin) has historically been associated with concerns about uterine activity at very high doses. Pregnant women should avoid concentrated apigenin supplements and consult their healthcare provider before use.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            People with asteraceae allergies (ragweed, daisies, chrysanthemums) may have allergic reactions to chamomile-derived apigenin.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            The CD38/NAD+ longevity story is mechanistically interesting but largely unproven in humans. Treating apigenin as a sleep aid with a possible longevity bonus is more honest than treating it as a longevity intervention with sleep benefits.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to evaluate quality</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Apigenin supplements vary substantially in actual content vs. label claim. Quality markers help.
          </p>
          <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Look for products that:</p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">State the apigenin percentage clearly (98%+ apigenin extracts are most commonly studied)</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Specify the source (chamomile extract is the conventional source; synthetic versions exist)</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Are third-party tested for content accuracy and contaminants</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Are produced in cGMP-certified facilities</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Provide a Certificate of Analysis (COA) on request</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Use 50 mg or comparable doses per capsule (matching the typical evening protocol)</li>
          </ul>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Avoid:</span> proprietary blends that don&apos;t disclose the actual apigenin amount, products with implausibly low prices for high-concentration extracts, and products without third-party verification.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Where to Buy</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Apigenin is available primarily as standalone extract supplements (often 50 mg capsules) and as chamomile extract products that may or may not standardize to apigenin content. For verified high-apigenin extracts, online supplement retailers offer the widest selection.
          </p>
          <a href={amazonHref} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm inline-block">
            Shop apigenin on Amazon &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">{f.q}</h3>
                <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Chamomile", "GABA-A", "CD38 / NAD+", "Anxiolytic"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Apigenin" pagePath="/supplements/apigenin" />
    </div>
    </>
  );
}
