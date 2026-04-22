import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/supplements/bcaas" },
  title: "BCAAs — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "BCAAs supplement profile covering leucine mTOR activation, muscle soreness reduction, fasted training use, and context-dependent benefits.",
};

export default function BCAAsPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"BCAAs","description":"BCAAs supplement profile covering leucine mTOR activation, muscle soreness reduction, fasted training use, and context-dependent benefits.","url":"https://profpeptide.com/supplements/bcaas","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"BCAAs"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">BCAAs</h1>
        <span className="tag">Performance &amp; Energy</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Branched-chain amino acids, leucine, isoleucine, valine, BCAA powder</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The three amino acids that trigger muscle building — and whether you need them</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            BCAAs (branched-chain amino acids) are three essential amino acids — leucine, isoleucine, and valine — named for their branched chemical structure. They constitute approximately 35% of the essential amino acids in muscle protein and are unique in being metabolized primarily in muscle rather than the liver, making them directly available as fuel during exercise. Leucine is the most important of the three — it is the primary activator of mTOR, the master regulator of muscle protein synthesis. BCAA supplements have been intensely marketed for decades, and while the underlying science is solid, the practical benefit depends heavily on context. For people already consuming adequate total protein (1.6–2.2g/kg/day from complete protein sources like whey, meat, or eggs), additional BCAAs provide minimal incremental benefit. BCAAs are most valuable in specific scenarios: fasted training, caloric restriction, vegan diets with incomplete proteins, or very prolonged exercise.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Leucine directly triggers muscle protein synthesis via mTOR activation",
              "Reduces exercise-induced muscle damage and soreness",
              "Provides fuel during prolonged exercise",
              "May reduce mental fatigue during endurance exercise by competing with tryptophan for brain entry",
              "Supports muscle preservation during caloric restriction",
              "Useful for fasted training or when complete protein is unavailable",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "mTOR Activation — Leucine is the primary activator of mTORC1 — the master regulator of muscle protein synthesis. Even small increases in leucine availability can trigger a muscle protein synthesis response, making leucine the most anabolically important single amino acid.",
              "Anti-Catabolic Effects — During prolonged exercise or caloric restriction, BCAAs reduce muscle protein breakdown by providing alternative fuel for muscle cells and signaling anti-catabolic pathways, reducing the net loss of muscle tissue.",
              "Central Fatigue Reduction — Tryptophan competes with BCAAs for transport across the blood-brain barrier. During prolonged exercise, as BCAA levels drop and tryptophan rises, more tryptophan enters the brain and is converted to serotonin — contributing to fatigue. Supplementing BCAAs may compete with tryptophan uptake, reducing central fatigue.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Meta-analyses show BCAAs reduce delayed onset muscle soreness (DOMS) and markers of muscle damage following resistance exercise. Leucine specifically has been shown to maximally stimulate muscle protein synthesis at 2–3g per dose. However, research also shows that whey protein (which contains BCAAs plus other essential amino acids) produces greater muscle protein synthesis than equivalent doses of BCAAs alone — confirming that BCAAs work best as part of a complete protein rather than in isolation. The case for BCAAs is strongest in fasted states, plant-based diets, and prolonged endurance activities.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 5–10g per serving; minimum 2–3g leucine to trigger mTOR",
              "Timing: Before or during fasted training; during prolonged endurance exercise; between meals on caloric restriction",
              "Ratio: Common ratios are 2:1:1 (leucine:isoleucine:valine) — higher leucine ratios (4:1:1) may be more effective for muscle protein synthesis",
              "Most effective when: Training fasted, following a plant-based diet, in a caloric deficit, or during prolonged exercise without access to whole food protein",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Extremely safe — BCAAs are amino acids found in all protein foods. No known toxicity at supplemental doses. May cause mild GI upset at high doses. Note: If consuming adequate complete protein from food or whey, additional BCAA supplements provide limited additional benefit — whole protein sources are superior and more cost-effective.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/protein-powder" className="text-[#0891b2] hover:underline">Protein Powder</Link> | <Link href="/supplements/creatine" className="text-[#0891b2] hover:underline">Creatine</Link> | <Link href="/supplements/glutamine" className="text-[#0891b2] hover:underline">Glutamine</Link> | <Link href="/supplements/beta-alanine" className="text-[#0891b2] hover:underline">Beta-Alanine</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Wolfe RR. Branched-chain amino acids and muscle protein synthesis in humans: myth or reality? J Int Soc Sports Nutr. 2017.",
              "Plotkin DL, et al. Isolated Leucine and Branched-Chain Amino Acid Supplementation for Enhancing Muscular Strength and Hypertrophy: A Narrative Review. Int J Sport Nutr Exerc Metab. 2021.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Leucine", "mTOR", "Fasted Training", "Context-Dependent"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=BCAA+supplement&tag=profpeptide-20"
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
