import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Garcinia Cambogia — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Garcinia cambogia profile covering HCA mechanism, ATP citrate lyase inhibition, mixed weight loss evidence, and honest efficacy assessment.",
};

export default function GarciniaCambogiaPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Garcinia Cambogia","description":"Garcinia cambogia profile covering HCA mechanism, ATP citrate lyase inhibition, mixed weight loss evidence, and honest efficacy assessment.","url":"https://profpeptide.com/supplements/garcinia-cambogia","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Garcinia Cambogia"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Garcinia Cambogia </h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: HCA, hydroxycitric acid, Malabar tamarind, Garcinia gummi-gutta</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The tropical fruit extract once heralded as a weight loss breakthrough</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Garcinia cambogia is a tropical fruit native to Southeast Asia and India whose rind contains high concentrations of hydroxycitric acid (HCA) — the active compound claimed to inhibit fat synthesis, suppress appetite, and reduce food intake. It was widely popularized in the early 2010s as a weight loss supplement. The reality is more nuanced: while animal studies and some early human trials showed promising effects, more rigorous meta-analyses have found modest and inconsistent weight loss results in humans. It remains popular but is considered one of the weaker evidence supplements in the metabolic category. Its primary interest is theoretical — for those who prefer natural approaches and want a supplement that may provide mild appetite modulation.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Mild appetite suppression via serotonin modulation",
              "ATP citrate lyase inhibition reducing fat synthesis",
              "Modest weight loss in some studies",
              "May reduce belly fat accumulation",
              "Some evidence for blood sugar and lipid improvement",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "ATP Citrate Lyase Inhibition — HCA inhibits ATP citrate lyase, the enzyme that converts citrate into acetyl-CoA — a key building block for fat and cholesterol synthesis in the liver. By blocking this enzyme, HCA theoretically reduces the conversion of excess carbohydrates into stored fat.",
              "Serotonin Modulation — HCA may increase serotonin levels in the brain, which could reduce appetite and emotional eating. This mechanism is theoretical in humans though supported by some animal data.",
              "Gluconeogenesis Reduction — HCA may reduce hepatic glucose production, contributing to modest blood sugar regulation.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Evidence is mixed. A 2011 Cochrane-style systematic review and meta-analysis found garcinia cambogia produced a small but statistically significant weight loss of approximately 0.88 kg vs. placebo. However, the clinical significance of this effect is debated, and several well-designed trials found no significant effect. A 2020 meta-analysis of 9 RCTs found modest reductions in body weight and BMI but noted significant heterogeneity between studies and generally poor study quality. Most researchers consider the evidence insufficient to recommend it as a primary weight loss intervention.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 500–1000mg HCA (standardized to 50–60% HCA) taken 30–60 minutes before meals",
              "Duration: Studies typically run 8–12 weeks",
              "Note: Effects are modest — best viewed as complementary to diet and exercise",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Generally considered safe at recommended doses. Most common side effects are mild GI symptoms. Rare cases of liver toxicity have been reported, primarily with high-dose products — stay within recommended dosing. Not recommended during pregnancy. May interact with diabetes medications and statins.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Onakpoya I, et al. The Use of Garcinia Extract (Hydroxycitric Acid) as a Weight Loss Supplement. J Obes. 2011.",
              "Chuah LO, et al. Updates on antiobesity effect of Garcinia origin (HCA) as complementary and alternative weight management resource. Evid Based Complement Alternat Med. 2013.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Weight Loss", "HCA", "Appetite", "Mixed Evidence"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      
      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/supplements/berberine" className="text-sm font-medium text-[#0891b2] hover:underline">Berberine</Link>
        <Link href="/supplements/green-tea-extract" className="text-sm font-medium text-[#0891b2] hover:underline">Green Tea Extract</Link>
        <Link href="/supplements/glucomannan" className="text-sm font-medium text-[#0891b2] hover:underline">Glucomannan</Link>
        </div>
      </div>

<div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=garcinia+cambogia&tag=profpeptide-20"
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
