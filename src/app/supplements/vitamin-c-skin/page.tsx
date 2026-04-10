import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Vitamin C for Skin — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Vitamin C for skin profile covering collagen hydroxylation, melanin inhibition, UV protection, vitamin E regeneration, and dosage.",
};

export default function VitaminCSkinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Vitamin C for Skin","description":"Vitamin C for skin profile covering collagen hydroxylation, melanin inhibition, UV protection, vitamin E regeneration, and dosage.","url":"https://www.profpeptide.com/supplements/vitamin-c-skin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://www.profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Vitamin C for Skin"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Vitamin C</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Ascorbic acid, ascorbate, L-ascorbic acid</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The irreplaceable vitamin behind every collagen molecule in your body</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Vitamin C (ascorbic acid) is an essential water-soluble vitamin that plays a uniquely central role in skin health — it is an irreplaceable cofactor for the enzymes that build and stabilize collagen, the primary structural protein of the skin. Without adequate vitamin C, the collagen synthesis machinery breaks down — causing structurally weak collagen that cannot properly form the dense dermis that gives skin its firmness and resistance to wrinkling. Beyond collagen, vitamin C is one of the most potent antioxidants in skin tissue — protecting against UV-induced oxidative damage, reducing hyperpigmentation by inhibiting melanin synthesis, and regenerating other antioxidants including vitamin E. Vitamin C concentrations in the skin are significantly higher than in blood plasma, reflecting its critical importance in cutaneous physiology. Skin vitamin C levels decline with age and UV exposure — making supplementation and topical application increasingly relevant as part of an anti-aging strategy. Importantly, vitamin C works synergistically with collagen peptides — their combination produces greater collagen synthesis benefits than either alone.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Irreplaceable cofactor for collagen synthesis",
              "Powerful antioxidant protecting skin from UV damage",
              "Reduces hyperpigmentation and brightens skin tone",
              "Regenerates vitamin E in skin tissue",
              "Synergistic with collagen peptides for skin benefits",
              "Supports wound healing and scar reduction",
              "Reduces photoaging from UV exposure",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Collagen Hydroxylation — Vitamin C is the essential cofactor for prolyl hydroxylase and lysyl hydroxylase — enzymes that add hydroxyl groups to proline and lysine residues in collagen chains. This hydroxylation is required for the formation of stable collagen triple-helix structures and cross-links between collagen fibers. Without adequate vitamin C, collagen is produced but structurally weak and prone to breakdown.",
              "Melanin Inhibition — Vitamin C inhibits tyrosinase — the rate-limiting enzyme in melanin synthesis — reducing hyperpigmentation from UV exposure, hormonal changes, and aging. This tyrosinase-inhibiting effect is responsible for the skin-brightening properties of topical vitamin C serums.",
              "Antioxidant Skin Protection — Vitamin C is the dominant water-soluble antioxidant in the skin, neutralizing reactive oxygen species generated by UV radiation, pollution, and metabolic processes that damage collagen, elastin, and DNA in skin cells.",
              "Vitamin E Regeneration — Vitamin C regenerates oxidized vitamin E (tocopheroxyl radical) back to its active antioxidant form, creating a synergistic antioxidant network that provides comprehensive protection against oxidative skin damage.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            A landmark study by Shaw et al. demonstrated that vitamin C-enriched gelatin taken before exercise significantly increased serum collagen synthesis markers — establishing the essential role of vitamin C in active collagen production. Topical vitamin C research is extensive — a systematic review found topical ascorbic acid significantly improved photoaged skin including wrinkle depth and skin tone. Oral vitamin C research shows skin vitamin C levels correlate inversely with wrinkle depth in population studies. A clinical study found oral vitamin C supplementation improved skin elasticity and reduced transepidermal water loss. Research combining oral collagen peptides with vitamin C consistently shows superior outcomes to collagen alone.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "Skin support dose: 500–1000mg daily",
              "Always pair with collagen peptides — vitamin C is essential for maximizing collagen synthesis benefits",
              "Topical and oral: Both routes are effective and complementary — topical targets specific areas while oral supports systemic collagen production",
              "Timing: With collagen supplements for synergistic effect",
              "Note: Vitamin C above 2000mg daily may cause GI upset — most skin benefits are achieved at 500–1000mg",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Exceptionally safe — water-soluble and excess excreted. Main side effect at high doses is GI discomfort and loose stools. Tolerable upper limit is 2000mg daily. Very high doses (above 2g) may increase kidney stone risk in predisposed individuals. Topical vitamin C can cause irritation at high concentrations — start with lower percentage formulations.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/collagen-peptides" className="text-[#0891b2] hover:underline">Collagen Peptides</Link> | <Link href="/supplements/hyaluronic-acid" className="text-[#0891b2] hover:underline">Hyaluronic Acid</Link> | <Link href="/supplements/biotin" className="text-[#0891b2] hover:underline">Biotin</Link> | <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu peptide</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Shaw G, et al. Vitamin C-enriched gelatin supplementation before intermittent activity augments collagen synthesis. Am J Clin Nutr. 2017.",
              "Pullar JM, et al. The Roles of Vitamin C in Skin Health. Nutrients. 2017.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Collagen Cofactor", "Brightening", "UV Protection", "Antioxidant"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=vitamin+c+serum+skin&tag=profpeptide-20"
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
