import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/supplements/l-citrulline-malate" },
  title: "L-Citrulline Malate — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "L-citrulline malate profile covering nitric oxide production, endurance improvement, muscle soreness reduction, and pre-workout dosage.",
};

export default function LCitrullineMalatePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"L-Citrulline Malate","description":"L-citrulline malate profile covering nitric oxide production, endurance improvement, muscle soreness reduction, and pre-workout dosage.","url":"https://profpeptide.com/supplements/l-citrulline-malate","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"L-Citrulline Malate"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">L-Citrulline Malate</h1>
        <span className="tag">Performance &amp; Energy</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Citrulline malate, CM, L-citrulline DL-malate</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The pre-workout that actually improves endurance, pumps, and recovery</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            L-citrulline malate is a compound of the amino acid L-citrulline bound to malic acid (malate) in a 2:1 ratio. L-citrulline is a non-essential amino acid found naturally in watermelon that serves as a precursor to L-arginine — and paradoxically, supplementing citrulline raises blood arginine levels more effectively than supplementing arginine directly, because citrulline bypasses first-pass metabolism in the liver that degrades much of oral arginine before it reaches circulation. Arginine is the substrate for nitric oxide synthase — the enzyme that produces nitric oxide (NO), the signaling molecule that dilates blood vessels, increases blood flow to working muscles, and produces the &quot;pump&quot; sensation during training. The malate component contributes independently to aerobic energy production and fatigue reduction. Together, citrulline malate improves endurance performance, reduces muscle soreness, enhances muscle pump, and supports recovery — making it one of the most evidence-backed pre-workout compounds available.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Increased nitric oxide production and muscle blood flow",
              "Improved endurance and resistance to fatigue",
              "Reduced muscle soreness after training",
              "Enhanced muscle pump during resistance exercise",
              "Greater training volume (more reps per set)",
              "Faster recovery between sessions",
              "More effective than L-arginine for raising blood arginine levels",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Arginine and Nitric Oxide Production — Citrulline is converted to arginine in the kidneys, bypassing liver degradation. Arginine then serves as substrate for nitric oxide synthase (NOS), producing nitric oxide — a potent vasodilator that relaxes smooth muscle in blood vessel walls, increasing vessel diameter and blood flow to working muscles.",
              "Enhanced Oxygen and Nutrient Delivery — Increased nitric oxide-mediated vasodilation improves delivery of oxygen, glucose, and amino acids to contracting muscles during exercise, delaying the onset of fatigue and supporting greater work output.",
              "Ammonia Clearance — Citrulline is part of the urea cycle and helps clear ammonia — a fatigue-inducing metabolic byproduct that accumulates during intense exercise. Faster ammonia clearance reduces exercise-associated fatigue.",
              "Malate's Role — Malic acid is an intermediate in the citric acid cycle (Krebs cycle) — the central pathway for aerobic energy production. Malate supplementation may support ATP production and reduce lactate accumulation, contributing to the anti-fatigue effects of the compound beyond citrulline's NO mechanism.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            A landmark 2010 RCT by P&eacute;rez-Guisado and Jakeman found that 8g of citrulline malate before an upper-body resistance training session significantly increased the number of repetitions performed to failure (by 52.92%), reduced muscle soreness by 40% at 24 and 48 hours post-exercise, and increased ATP production by 34%. A meta-analysis of 12 RCTs found citrulline malate significantly improved exercise performance, reduced soreness, and enhanced recovery. Endurance research shows improvements in cycling time trial performance and reduced perceived effort. Research consistently shows citrulline is superior to arginine for raising plasma arginine and nitric oxide levels.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 6–8g citrulline malate (2:1 form) taken 30–60 minutes before exercise",
              "Timing: Pre-workout — effects are acute and performance-based",
              "Pure L-citrulline dose: If using pure L-citrulline (not malate), 3–4g provides equivalent citrulline",
              "Consistency: Benefits accumulate with regular use but acute effects are present from first dose",
              "Best for: Resistance training, HIIT, endurance sports, any training with repeated high-effort sets",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Very safe with an excellent safety profile. Most common side effect is mild GI discomfort at high doses — taking with food reduces this. May cause modest blood pressure reductions due to vasodilation — generally favorable but relevant for those on blood pressure medications. No serious adverse effects documented in research.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/beta-alanine" className="text-[#0891b2] hover:underline">Beta-Alanine</Link> | <Link href="/supplements/creatine" className="text-[#0891b2] hover:underline">Creatine</Link> | <Link href="/supplements/bcaas" className="text-[#0891b2] hover:underline">BCAAs</Link> | <Link href="/supplements/electrolyte-powders" className="text-[#0891b2] hover:underline">Electrolyte Powders</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Pérez-Guisado J, Jakeman PM. Citrulline malate enhances athletic anaerobic performance and relieves muscle soreness. J Strength Cond Res. 2010.",
              "Rhim HC, et al. Effect of citrulline on post-exercise rating of perceived exertion, muscle soreness, and blood lactate levels: A systematic review and meta-analysis. J Sport Health Sci. 2020.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Nitric Oxide", "Pre-Workout", "Endurance", "Recovery"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=l-citrulline+malate&tag=profpeptide-20"
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
