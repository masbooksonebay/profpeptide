import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/supplements/vitamin-c" },
  title: "Vitamin C — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Vitamin C supplement profile covering collagen cofactor role, immune support, antioxidant defense, iron absorption, and exercise recovery.",
};

export default function VitaminCPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Vitamin C","description":"Vitamin C supplement profile covering collagen cofactor role, immune support, antioxidant defense, iron absorption, and exercise recovery.","url":"https://profpeptide.com/supplements/vitamin-c","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Vitamin C"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Vitamin C </h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Ascorbic acid, ascorbate, L-ascorbic acid</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The essential vitamin your body can&apos;t make — critical for collagen and immunity</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Vitamin C (ascorbic acid) is an essential water-soluble vitamin that humans cannot synthesize — unlike most animals — making dietary or supplemental intake critical. It is required for collagen synthesis (it is an irreplaceable cofactor for the enzymes prolyl hydroxylase and lysyl hydroxylase that stabilize collagen&apos;s triple helix structure), immune function, iron absorption, antioxidant defense, and neurotransmitter synthesis. Severe deficiency causes scurvy — a disease of collagen breakdown. While most people get adequate vitamin C from diet, supplementation is relevant for athletes (increased oxidative stress), smokers (depleted faster), people under high stress, and those seeking specific therapeutic effects. Vitamin C has one of the best safety profiles in nutrition — it is water-soluble and excess is excreted.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Immune system support",
              "Essential for collagen synthesis",
              "Exercise recovery and reduced muscle soreness",
              "Antioxidant protection against oxidative stress",
              "Enhanced iron absorption from plant sources",
              "Neurotransmitter synthesis (dopamine, norepinephrine)",
              "Cardiovascular protection",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Collagen Cofactor — Vitamin C is the essential cofactor for prolyl and lysyl hydroxylases — enzymes that hydroxylate proline and lysine residues in collagen chains. This hydroxylation is required for the formation of stable collagen triple helix structures. Without adequate vitamin C, collagen is structurally weak and cannot properly form — the mechanism behind scurvy. This makes vitamin C indispensable for wound healing, tissue repair, and connective tissue maintenance.",
              "Antioxidant Action — Vitamin C is one of the most important water-soluble antioxidants in the body, donating electrons to neutralize reactive oxygen species including superoxide, hydroxyl radicals, and singlet oxygen. It also regenerates vitamin E from its oxidized form, creating a synergistic antioxidant network.",
              "Immune Stimulation — Vitamin C accumulates in immune cells at concentrations 50–100 times higher than plasma levels. It supports neutrophil function, enhances lymphocyte proliferation, and stimulates antibody production. During infection, vitamin C is rapidly depleted.",
              "Iron Absorption Enhancement — Vitamin C converts non-heme iron (from plant foods) from the ferric to ferrous form, dramatically increasing its intestinal absorption. Taking vitamin C with iron-rich plant foods or iron supplements significantly improves iron status.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Collagen synthesis research confirms vitamin C is essential — studies by Shaw et al. demonstrated that vitamin C-enriched gelatin taken before exercise significantly increased collagen synthesis markers compared to placebo. Immune research shows regular vitamin C supplementation reduces duration of common cold by 8% in adults and 14% in children, and may prevent colds in people under extreme physical stress. Cardiovascular research shows associations between higher vitamin C intake and reduced cardiovascular risk, reduced blood pressure, and improved endothelial function. Exercise recovery research suggests vitamin C reduces markers of oxidative stress but very high doses may blunt training adaptations.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "General health dose: 500–1000mg daily",
              "Exercise recovery: 1000mg taken after exercise",
              "Collagen synthesis: Take with collagen supplements — the combination is essential for maximizing collagen production",
              "High dose caution: Doses above 2000mg daily may cause GI upset and diarrhea; very high doses may interfere with training adaptations by blunting oxidative stress signals that drive adaptation",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Extremely safe — water-soluble and excess excreted in urine. Most common side effect at high doses is loose stools or GI discomfort (tolerable upper limit 2000mg/day). Large doses may increase kidney stone risk in those predisposed — particularly oxalate stones. Rare: interference with certain lab tests at very high doses.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Shaw G, et al. Vitamin C-enriched gelatin supplementation before intermittent activity augments collagen synthesis. Am J Clin Nutr. 2017.",
              "Hemilä H, Chalker E. Vitamin C for preventing and treating the common cold. Cochrane Database Syst Rev. 2013.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Collagen", "Immune", "Antioxidant", "Essential Vitamin"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      
      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/supplements/collagen-peptides" className="text-sm font-medium text-[#0891b2] hover:underline">Collagen Peptides</Link>
        <Link href="/supplements/zinc" className="text-sm font-medium text-[#0891b2] hover:underline">Zinc</Link>
        <Link href="/supplements/vitamin-d3" className="text-sm font-medium text-[#0891b2] hover:underline">Vitamin D3</Link>
        </div>
      </div>

<div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=vitamin+c+supplement&tag=profpeptide-20"
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
