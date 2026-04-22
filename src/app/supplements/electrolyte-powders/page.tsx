import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/supplements/electrolyte-powders" },
  title: "Electrolyte Powders — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Electrolyte powders profile covering sodium balance, hyponatremia prevention, endurance performance, and hydration optimization.",
};

export default function ElectrolytePowdersPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Electrolyte Powders","description":"Electrolyte powders profile covering sodium balance, hyponatremia prevention, endurance performance, and hydration optimization.","url":"https://profpeptide.com/supplements/electrolyte-powders","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Electrolyte Powders"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Electrolyte Powders</h1>
        <span className="tag">Performance &amp; Energy</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Electrolytes, sports drinks, hydration supplements, mineral supplements</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">Sweat smart — replenish what exercise takes away</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Electrolytes are electrically charged minerals dissolved in body fluids that are essential for nerve conduction, muscle contraction, fluid balance, and pH regulation. The primary electrolytes lost through sweat are sodium, potassium, magnesium, and chloride — with sodium being the most critical for hydration and performance. Electrolyte powders are concentrated mineral supplements designed to replenish these losses during and after exercise, hot weather exposure, or illness. While plain water is adequate for short, low-intensity activities, electrolyte replacement becomes increasingly important as exercise duration, intensity, and sweat rate increase. Sodium is particularly critical — it drives fluid retention and triggers thirst, making it the cornerstone of effective hydration. Many commercial sports drinks prioritize sugar over electrolyte content — quality electrolyte powders provide clinically relevant electrolyte doses without unnecessary sugar.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Prevents hyponatremia (dangerously low sodium) during prolonged exercise",
              "Maintains plasma volume and cardiovascular performance",
              "Reduces muscle cramps associated with electrolyte depletion",
              "Improves endurance performance in hot conditions",
              "Supports recovery after heavy sweating",
              "Maintains cognitive function during prolonged exercise",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Sodium and Fluid Balance — Sodium is the primary determinant of extracellular fluid volume. When sodium is depleted through sweat without replacement, plasma volume contracts, impairing cardiovascular performance and increasing perceived effort. Replacing sodium drives fluid retention and maintains plasma volume.",
              "Nerve and Muscle Function — Potassium and sodium work together to maintain the electrochemical gradients across cell membranes that drive nerve impulses and muscle contractions. Depletion disrupts these gradients, contributing to weakness, cramping, and impaired coordination.",
              "Magnesium's Role — Magnesium is involved in over 300 enzymatic reactions, including ATP production and muscle relaxation. Magnesium depletion during exercise can contribute to muscle cramps, fatigue, and reduced power output.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Research consistently shows electrolyte supplementation improves performance in endurance events exceeding 60–90 minutes and in hot conditions. Sodium replacement specifically prevents exercise-associated hyponatremia — a potentially dangerous dilutional condition seen in endurance athletes who drink excessive plain water. Studies show sodium-containing beverages improve fluid retention compared to plain water. Magnesium supplementation reduces exercise-induced cramping in deficient individuals. Sweat rate and electrolyte loss vary enormously between individuals — &quot;salty sweaters&quot; have significantly higher sodium losses and greater supplementation needs.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "Timing: During exercise lasting more than 60 minutes; in hot or humid conditions",
              "Sodium: Prioritize — aim for 500–1000mg sodium per hour during prolonged sweating",
              "Potassium: 200–400mg per serving supports sodium balance",
              "Magnesium: 50–150mg to support muscle function",
              "Choose products without excessive sugar unless using for rapid energy alongside hydration",
              "Individual sweat testing can personalize electrolyte replacement for serious athletes",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Extremely safe when used appropriately. Excessive sodium in sedentary individuals with hypertension warrants caution. High-dose magnesium can cause diarrhea — start with lower doses. The main risk is not electrolyte supplementation but hyponatremia from drinking too much plain water during prolonged exercise without sodium replacement.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/magnesium" className="text-[#0891b2] hover:underline">Magnesium</Link> | <Link href="/supplements/creatine" className="text-[#0891b2] hover:underline">Creatine</Link> | <Link href="/supplements/protein-powder" className="text-[#0891b2] hover:underline">Protein Powder</Link> | <Link href="/supplements/bcaas" className="text-[#0891b2] hover:underline">BCAAs</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Shirreffs SM, Sawka MN. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci. 2011.",
              "Hew-Butler T, et al. Statement of the Third International Exercise-Associated Hyponatremia Consensus Development Conference. Clin J Sport Med. 2015.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Hydration", "Sodium", "Endurance", "Recovery"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=electrolyte+powder&tag=profpeptide-20"
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
