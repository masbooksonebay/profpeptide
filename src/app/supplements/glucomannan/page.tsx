import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/supplements/glucomannan" },
  title: "Glucomannan — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Glucomannan supplement profile covering konjac fiber satiety mechanism, EFSA weight loss claim, blood sugar blunting, and dosage guidance.",
};

export default function GlucomannanPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Glucomannan","description":"Glucomannan supplement profile covering konjac fiber satiety mechanism, EFSA weight loss claim, blood sugar blunting, and dosage guidance.","url":"https://profpeptide.com/supplements/glucomannan","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Glucomannan"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Glucomannan </h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Konjac fiber, konjac glucomannan, KGM</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The viscous fiber that makes you feel full and slows sugar absorption</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Glucomannan is a highly viscous, water-soluble dietary fiber extracted from the root of the konjac plant (Amorphophallus konjac), native to Southeast Asia. It has one of the highest viscosities of any known dietary fiber — absorbing up to 50 times its weight in water to form a thick gel in the stomach. This remarkable property drives its primary benefits: powerful satiety enhancement, delayed gastric emptying, blunted post-meal blood sugar spikes, and reduced cholesterol absorption. Glucomannan is the only fiber supplement with a health claim approved by the European Food Safety Authority (EFSA) for contributing to weight loss when taken as part of an energy-restricted diet.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Extreme water absorption creating powerful fullness",
              "Blood sugar spike reduction after meals",
              "LDL cholesterol lowering",
              "Weight loss support — EFSA approved",
              "Prebiotic effect supporting gut health",
              "Constipation relief",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Gastric Expansion and Satiety — Glucomannan absorbs water in the stomach and small intestine, expanding dramatically in volume. This physical expansion creates a sensation of fullness, reduces hunger, and decreases overall caloric intake.",
              "Delayed Gastric Emptying — The viscous gel formed by glucomannan slows the rate at which food leaves the stomach, extending the period of fullness and reducing the rate of carbohydrate absorption into the bloodstream.",
              "Blood Sugar Blunting — By slowing gastric emptying and forming a gel barrier in the intestine, glucomannan reduces the speed and magnitude of post-meal glucose rises — particularly beneficial after carbohydrate-rich meals.",
              "Cholesterol Binding — Glucomannan binds bile acids in the gut, reducing cholesterol reabsorption and lowering LDL cholesterol levels — similar to the mechanism of prescription bile acid sequestrant medications.",
              "Prebiotic Fermentation — Undigested glucomannan reaches the colon where it is fermented by beneficial bacteria into short-chain fatty acids, supporting gut microbiome health.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Multiple RCTs support glucomannan for weight loss — a meta-analysis found an average weight reduction of approximately 0.8 kg over short-term supplementation with caloric restriction. A systematic review of 14 RCTs found glucomannan significantly reduced LDL cholesterol, total cholesterol, triglycerides, fasting blood glucose, and body weight. Studies specifically show reductions in post-meal blood sugar of 20–30% when glucomannan is taken before carbohydrate-heavy meals. EFSA approved the health claim: &quot;Glucomannan contributes to weight loss in the context of an energy-restricted diet&quot; — a rare distinction for a dietary supplement.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 1–3g taken 30–45 minutes before meals with 240ml of water",
              "⏱Timing: Before meals — this is critical for satiety and blood sugar effects",
              "Important: Must be taken with adequate water — taking without water risks esophageal obstruction",
              "Duration: Consistent daily use with caloric restriction for weight loss benefits",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Generally very safe. Most common effects are mild GI symptoms including bloating and increased flatulence from prebiotic fermentation. Rare but serious: esophageal obstruction if taken without sufficient water — always take with a full glass of water. May slow absorption of oral medications — take medications at least 1 hour before or 4 hours after glucomannan.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Onakpoya I, et al. The Use of Glucomannan in the Management of Obesity and Metabolic Disorders. J Am Coll Nutr. 2014.",
              "EFSA. Scientific Opinion on the substantiation of a health claim related to konjac mannan and reduction of body weight. 2010.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Fiber", "Satiety", "Blood Sugar", "EFSA Approved"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      
      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/supplements/berberine" className="text-sm font-medium text-[#0891b2] hover:underline">Berberine</Link>
        <Link href="/supplements/probiotics" className="text-sm font-medium text-[#0891b2] hover:underline">Probiotics</Link>
        <Link href="/supplements/prebiotics" className="text-sm font-medium text-[#0891b2] hover:underline">Prebiotics</Link>
        </div>
      </div>

<div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=glucomannan+supplement&tag=profpeptide-20"
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
