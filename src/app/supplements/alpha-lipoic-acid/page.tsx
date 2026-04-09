import Link from "next/link";

export const metadata = {
  title: "Alpha Lipoic Acid — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Alpha lipoic acid profile covering universal antioxidant mechanism, diabetic neuropathy evidence, insulin sensitivity, and R-ALA vs S-ALA forms.",
};

export default function AlphaLipoicAcidPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Alpha Lipoic Acid </h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: ALA, thioctic acid, lipoic acid</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The universal antioxidant that works in both fat and water</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Alpha lipoic acid (ALA) is a naturally occurring organosulfur compound produced in small amounts by the body and found in trace amounts in foods like red meat, spinach, and broccoli. It serves as a cofactor for several mitochondrial enzyme complexes involved in energy metabolism, and is one of the most versatile antioxidants known — uniquely active in both fat-soluble and water-soluble environments, unlike most antioxidants which are active in only one. ALA is well-established as a treatment for diabetic peripheral neuropathy in Europe (particularly Germany) where it has been used medicinally since the 1960s, and has an evidence base supporting improvements in insulin sensitivity, nerve function, and weight management. It also regenerates other antioxidants including vitamins C and E and glutathione.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Mitochondrial energy production support",
              "Universal antioxidant — fat AND water soluble",
              "Diabetic peripheral neuropathy treatment (well established)",
              "Insulin sensitivity improvement",
              "Modest weight loss support",
              "Regenerates vitamins C, E, and glutathione",
              "Anti-inflammatory effects",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "AMPK Activation — Like berberine and metformin, ALA activates AMPK, improving insulin sensitivity, increasing glucose uptake in peripheral tissues, and reducing fat synthesis.",
              "Mitochondrial Cofactor — ALA is an essential cofactor for pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase — key enzymes in the citric acid cycle. Supplementation supports mitochondrial energy production efficiency.",
              "Universal Antioxidant — ALA's unique chemical structure makes it both fat-soluble and water-soluble, allowing it to neutralize free radicals in virtually all cellular compartments. This comprehensive antioxidant coverage distinguishes it from most other antioxidants.",
              "Antioxidant Regeneration — ALA regenerates oxidized forms of vitamins C, E, coenzyme Q10, and glutathione — effectively amplifying the antioxidant capacity of these other compounds.",
              "Nerve Protection — In diabetic neuropathy, ALA reduces oxidative stress in nerve tissue, improves nerve conduction velocity, and reduces pain, numbness, and tingling. This is the most clinically validated application of ALA.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Diabetic neuropathy is the best-established application — multiple European RCTs show intravenous ALA significantly improves neuropathy symptoms, and oral ALA produces moderate but consistent benefits. Insulin sensitivity research shows ALA improves glucose disposal and reduces insulin resistance in insulin-resistant subjects. A meta-analysis found ALA supplementation significantly reduced body weight and BMI, with greater effects at higher doses. Anti-inflammatory research shows significant reductions in CRP, IL-6, and TNF-alpha with ALA supplementation.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 300–600mg daily for metabolic effects; 600–1800mg for neuropathy (often under medical supervision)",
              "Timing: On an empty stomach for best absorption — food reduces bioavailability by up to 30%",
              "Duration: Neuropathy benefits typically seen after 4–5 weeks; metabolic effects with longer-term use",
              "R-ALA vs. S-ALA: R-alpha lipoic acid is the naturally occurring, more bioactive form",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Well tolerated at typical doses. Most common side effects are mild GI symptoms. May lower blood sugar — monitor glucose levels if taking diabetes medications. May affect thyroid hormone levels at high doses. Rare: skin rash. R-ALA is more potent and bioavailable than racemic ALA — lower doses may be needed.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed"><Link href="/supplements/berberine" className="text-[#0891b2] hover:underline">Berberine</Link> | <Link href="/supplements/coq10" className="text-[#0891b2] hover:underline">CoQ10</Link> | <Link href="/supplements/magnesium" className="text-[#0891b2] hover:underline">Magnesium</Link> — ALA pairs well with these for comprehensive metabolic and antioxidant support.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Ziegler D, et al. Treatment of symptomatic diabetic peripheral neuropathy with the antioxidant alpha-lipoic acid. Diabetologia. 1995.",
              "Golbidi S, et al. Diabetes and alpha lipoic acid. Front Pharmacol. 2011.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Antioxidant", "Neuropathy", "AMPK", "Mitochondria"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=alpha+lipoic+acid&tag=profpeptide-20"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm inline-block"
        >
          Search on Amazon &rarr;
        </a>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
  );
}
