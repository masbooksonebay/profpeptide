import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Collagen Peptides — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Collagen peptides profile covering joint pain reduction, skin elasticity, tendon support, vitamin C synergy, and optimal dosage guidance.",
};

export default function CollagenPeptidesPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Collagen Peptides","description":"Collagen peptides profile covering joint pain reduction, skin elasticity, tendon support, vitamin C synergy, and optimal dosage guidance.","url":"https://www.profpeptide.com/supplements/collagen-peptides","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://www.profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Collagen Peptides"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Collagen Peptides </h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Hydrolyzed collagen, collagen hydrolysate, bovine collagen, marine collagen</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The building block your joints, skin, and connective tissue are literally made of</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Collagen is the most abundant protein in the human body — making up approximately 30% of total protein and forming the structural scaffold of skin, bones, tendons, ligaments, cartilage, and blood vessels. Collagen peptides are hydrolyzed collagen — broken into small bioactive peptides that are efficiently absorbed through the gut and distributed to connective tissues throughout the body. Unlike whole collagen (which is poorly absorbed), hydrolyzed collagen peptides have demonstrated bioavailability and measurable effects on collagen synthesis in skin, joints, and connective tissues. Production of collagen naturally declines from around age 25 at roughly 1% per year, accelerating visible skin aging and contributing to joint degradation. Supplemental collagen peptides provide both the amino acid building blocks (particularly glycine, proline, and hydroxyproline) and bioactive peptides that signal fibroblasts to increase collagen synthesis.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Joint pain reduction and cartilage support",
              "Skin elasticity, hydration, and wrinkle reduction",
              "Tendon and ligament strength",
              "Exercise recovery support",
              "Hair and nail strength",
              "Sports injury prevention research",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Collagen Synthesis Stimulation — Absorbed collagen peptides travel to connective tissues and stimulate fibroblasts to increase collagen synthesis. The dipeptide Pro-Hyp (proline-hydroxyproline) released during digestion has been specifically shown to stimulate human dermal fibroblasts and chondrocytes.",
              "Amino Acid Supply — Collagen is uniquely rich in glycine, proline, and hydroxyproline — amino acids that are rate-limiting for collagen synthesis but not abundant in standard dietary protein. Supplementation specifically addresses this amino acid gap.",
              "Cartilage Accumulation — Collagen peptides accumulate in cartilage tissue after absorption — radioactive labeling studies have tracked absorbed collagen peptides specifically to articular cartilage, confirming targeted delivery.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Joint health research includes multiple RCTs — a 24-week study in athletes with activity-related joint pain found significant reductions in joint pain and improved mobility vs. placebo. A 2021 meta-analysis of 15 RCTs found collagen supplementation significantly improved joint pain and function in osteoarthritis. Skin research is robust — a 2019 meta-analysis of 19 RCTs found oral collagen supplementation significantly improved skin elasticity, hydration, and reduced wrinkle depth. Sports performance research shows improved tendon cross-sectional area and reduced injury rates in athletes supplementing collagen around exercise sessions.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 10–15g daily for joint and tendon support; 2.5–10g for skin benefits",
              "Vitamin C: Always take with vitamin C — it is essential for collagen synthesis and significantly amplifies benefits",
              "⏱Exercise timing: For tendon and joint benefit, take 30–60 minutes before exercise",
              "☀Skin: Consistent daily use for 8–12 weeks to see skin improvements",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Extremely safe — collagen is a food protein with an excellent safety profile. Most common minor effects are mild GI symptoms. May contain allergens depending on source — bovine, marine, or porcine — check sourcing if allergies are a concern. Not vegan — collagen is always animal-derived.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Shaw G, et al. Vitamin C-enriched gelatin supplementation before intermittent activity augments collagen synthesis. Am J Clin Nutr. 2017.",
              "Zdzieblik D, et al. Collagen peptide supplementation in combination with resistance training improves body composition and increases muscle strength in elderly sarcopenic men. Br J Nutr. 2015.",
              "de Miranda RB, et al. Effects of hydrolyzed collagen supplementation on skin aging — a systematic review and meta-analysis. Int J Dermatol. 2021.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Joints", "Skin", "Tendons", "Vitamin C Synergy"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      
      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/supplements/vitamin-c" className="text-sm font-medium text-[#0891b2] hover:underline">Vitamin C</Link>
        <Link href="/supplements/glutamine" className="text-sm font-medium text-[#0891b2] hover:underline">Glutamine</Link>
        <Link href="/supplements/zinc-carnosine" className="text-sm font-medium text-[#0891b2] hover:underline">Zinc Carnosine</Link>
        </div>
      </div>

<div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=collagen+peptides&tag=profpeptide-20"
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
