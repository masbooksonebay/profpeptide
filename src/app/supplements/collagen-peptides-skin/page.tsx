import Link from "next/link";

export const metadata = {
  title: "Collagen Peptides for Skin — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Collagen peptides for skin profile covering fibroblast stimulation, wrinkle reduction, elasticity improvement, and vitamin C synergy.",
};

export default function CollagenPeptidesSkinPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Collagen Peptides</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Hydrolyzed collagen, collagen hydrolysate, marine collagen, bovine collagen</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">Rebuild your skin from the inside out</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Collagen is the most abundant protein in the human body and the primary structural protein of the skin — comprising approximately 75–80% of the dry weight of skin. It forms a dense, organized network in the dermis that provides firmness, elasticity, and resistance to wrinkling. From around age 25, collagen production declines at approximately 1% per year — and this decline accelerates with UV exposure, smoking, poor nutrition, and stress. The result is progressively thinner skin, reduced elasticity, deeper wrinkles, and loss of that characteristic youthful plumpness. Collagen peptides are hydrolyzed collagen — broken into small bioactive peptides that are efficiently absorbed through the gut, travel through the bloodstream, and accumulate in skin tissue where they stimulate fibroblasts to increase collagen synthesis. Unlike topical collagen (which cannot penetrate the skin barrier), oral collagen peptides are absorbed systemically and have demonstrated measurable effects on skin elasticity, hydration, wrinkle depth, and dermal collagen density in multiple clinical trials.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">✨ Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Improves skin elasticity and firmness",
              "Reduces wrinkle depth and fine lines",
              "Increases skin hydration and moisture retention",
              "Stimulates fibroblasts to produce new collagen",
              "Supports dermal collagen density",
              "Reduces cellulite appearance with long-term use",
              "Supports nail strength and growth",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Fibroblast Stimulation — Absorbed collagen peptides — particularly the dipeptide Pro-Hyp (proline-hydroxyproline) — stimulate dermal fibroblasts to increase production of new collagen, elastin, and hyaluronic acid. This is a direct signaling effect, not merely providing raw material.",
              "Dermal Accumulation — Radioactive labeling studies have tracked absorbed collagen peptides specifically to skin tissue, confirming they accumulate in the dermis where they exert their fibroblast-stimulating effects.",
              "Hyaluronic Acid Induction — Collagen peptides stimulate hyaluronic acid synthase expression in fibroblasts, increasing the skin's own hyaluronic acid production — enhancing moisture retention from within.",
              "Antioxidant Effects — Marine collagen peptides in particular have demonstrated antioxidant activity, scavenging free radicals that contribute to UV-induced skin aging.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            A 2019 systematic review and meta-analysis of 19 RCTs involving 1,125 participants found oral collagen supplementation significantly improved skin elasticity, hydration, and reduced wrinkle scores — with effects sustained beyond the supplementation period. A 2023 clinical trial by Yuvan Research using a novel collagen-adjacent GHK-Cu formulation demonstrated 28% average increase in collagen density after 3 months. A 2014 double-blind RCT found 2.5g collagen peptides daily for 8 weeks significantly improved skin elasticity vs. placebo in women aged 35–55. Studies in women over 40 consistently show improvements in skin moisture content, roughness, and elasticity after 8–12 weeks.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "Skin benefits: 2.5–10g daily — lower doses (2.5g) show efficacy in skin-focused trials",
              "Always take with vitamin C — it is an essential cofactor for collagen synthesis",
              "Duration: Minimum 8–12 weeks for visible skin improvements; ongoing use maintains benefits",
              "Marine collagen: Type I collagen — most relevant for skin; bovine also contains Type I and III",
              "Timing: Can be taken any time — mix into beverages, smoothies, or foods",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Excellent safety profile. Mild GI discomfort in some individuals. Always animal-derived — bovine, marine, or porcine — not suitable for vegans. Check source if fish or shellfish allergies are a concern (marine collagen). Hypercalcemia risk with very high doses of marine collagen — stay within recommended ranges.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/vitamin-c" className="text-[#0D7377] hover:underline">Vitamin C</Link> | <Link href="/supplements/hyaluronic-acid" className="text-[#0D7377] hover:underline">Hyaluronic Acid</Link> | <Link href="/supplements/biotin" className="text-[#0D7377] hover:underline">Biotin</Link> | <Link href="/peptides/ghk-cu" className="text-[#0D7377] hover:underline">GHK-Cu peptide</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "de Miranda RB, et al. Effects of hydrolyzed collagen supplementation on skin aging — a systematic review and meta-analysis. Int J Dermatol. 2021.",
              "Proksch E, et al. Oral supplementation of specific collagen peptides has beneficial effects on human skin physiology: a double-blind, placebo-controlled study. Skin Pharmacol Physiol. 2014.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Skin", "Elasticity", "Wrinkles", "Hydration"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
