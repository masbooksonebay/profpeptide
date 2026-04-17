import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Green Tea Extract — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Green tea extract (EGCG) profile covering fat oxidation, COMT inhibition, caffeine synergy, cardiovascular benefits, and dosage guidance.",
};

export default function GreenTeaExtractPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Green Tea Extract","description":"Green tea extract (EGCG) profile covering fat oxidation, COMT inhibition, caffeine synergy, cardiovascular benefits, and dosage guidance.","url":"https://profpeptide.com/supplements/green-tea-extract","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Green Tea Extract"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Green Tea Extract </h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: EGCG, epigallocatechin gallate, GTE, Camellia sinensis extract</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The ancient metabolism booster backed by modern science</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Green tea extract is a concentrated form of the bioactive compounds found in green tea leaves (Camellia sinensis), standardized primarily for epigallocatechin gallate (EGCG) — the most potent catechin polyphenol and the primary driver of green tea&apos;s metabolic and health benefits. Green tea has been consumed for thousands of years in Asia, and the past 30 years of research have produced an impressive body of evidence supporting EGCG&apos;s effects on metabolism, fat oxidation, cardiovascular health, cognitive function, and cancer prevention. Green tea extract is one of the most widely studied natural supplements and a common ingredient in evidence-based weight management formulations.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Increased fat oxidation and metabolic rate",
              "Synergistic effect with caffeine for thermogenesis",
              "Cardiovascular protection and LDL reduction",
              "Neuroprotective effects and cognitive support",
              "Antioxidant protection — one of the highest ORAC values",
              "Anti-inflammatory effects",
              "Modest weight loss support",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "COMT Inhibition — EGCG inhibits catechol-O-methyltransferase (COMT), the enzyme that breaks down norepinephrine. By preserving norepinephrine signaling, EGCG enhances thermogenesis (heat production) and fat oxidation in adipose tissue. This mechanism is significantly amplified by caffeine, which increases norepinephrine release — explaining the synergistic effect of the caffeine + EGCG combination.",
              "Fat Oxidation Enhancement — Multiple studies show that green tea extract increases fat oxidation during both exercise and rest. Meta-analyses confirm green tea catechins increase fat burning by 10–16% during moderate-intensity exercise.",
              "AMPK Activation — EGCG activates AMPK similarly to berberine and metformin, improving insulin sensitivity and glucose metabolism.",
              "Antioxidant Activity — EGCG is one of the most potent antioxidants found in food, scavenging free radicals and reducing oxidative stress. It protects LDL cholesterol from oxidation — a key step in atherosclerosis development.",
              "Anti-inflammatory Signaling — EGCG inhibits NF-κB signaling, reducing production of inflammatory cytokines. This broad anti-inflammatory effect contributes to cardiovascular and metabolic protection.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            A meta-analysis of 11 RCTs found green tea catechins plus caffeine produced significant reductions in body weight (−1.38 kg), BMI, and waist circumference vs. control. Fat oxidation studies consistently show 10–16% increases in fat burning during exercise. Cardiovascular research shows significant LDL reduction and improved endothelial function. Epidemiological studies from Japan link regular green tea consumption to reduced risk of cardiovascular disease, type 2 diabetes, and all-cause mortality. Cognitive research suggests EGCG promotes neuroplasticity and may reduce risk of neurodegenerative disease.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 400–800mg standardized extract (minimum 45% EGCG) daily",
              "With caffeine: The combination dramatically amplifies fat-burning effects",
              "Timing: With meals to reduce potential stomach irritation",
              "Note: High doses on empty stomach can cause nausea",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Generally safe at typical doses. High doses (above 800mg EGCG daily) have been associated with liver stress in rare cases — stay within recommended dosing. Caffeine content in extract varies — check product labeling. May interact with blood thinners including warfarin. Contains natural caffeine — consider total caffeine intake.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Hursel R, et al. The effects of catechin rich teas and caffeine on energy expenditure and fat oxidation: a meta-analysis. Obes Rev. 2011.",
              "Zheng XX, et al. Green tea intake lowers fasting serum total and LDL cholesterol. Am J Clin Nutr. 2011.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Fat Oxidation", "EGCG", "Antioxidant", "Thermogenesis"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      
      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/supplements/caffeine" className="text-sm font-medium text-[#0891b2] hover:underline">Caffeine</Link>
        <Link href="/supplements/berberine" className="text-sm font-medium text-[#0891b2] hover:underline">Berberine</Link>
        <Link href="/supplements/alpha-lipoic-acid" className="text-sm font-medium text-[#0891b2] hover:underline">Alpha Lipoic Acid</Link>
        </div>
      </div>

<div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=green+tea+extract+EGCG&tag=profpeptide-20"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm inline-block"
        >
          Search on Amazon &rarr;
        </a>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
    </>
  );
}
