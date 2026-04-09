import Link from "next/link";

export const metadata = {
  title: "Prebiotics — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Prebiotics supplement profile covering selective fermentation, butyrate production, Bifidobacterium growth, and synbiotic combination approach.",
};

export default function PrebioticsPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Prebiotics</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Inulin, FOS, GOS, resistant starch, dietary fiber, chicory root</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The food that feeds your good bacteria</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Prebiotics are selectively fermented dietary ingredients that support the growth and activity of beneficial microorganisms in the gut — essentially, they are the food that feeds probiotics and the existing beneficial bacteria in your microbiome. The most well-studied prebiotics are inulin, fructooligosaccharides (FOS), galactooligosaccharides (GOS), and resistant starch — all forms of non-digestible carbohydrates that pass through the small intestine intact and are fermented by beneficial bacteria in the colon. Unlike probiotics (which introduce new bacteria), prebiotics selectively nourish the beneficial bacteria already present — particularly Bifidobacterium and Lactobacillus species — amplifying their populations and activity. The distinction between prebiotics and dietary fiber is narrowing — many high-fiber foods provide prebiotic benefits, but concentrated prebiotic supplements offer higher doses of specific substrates for targeted microbiome support.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Selectively feeds and amplifies beneficial gut bacteria","Increases production of butyrate and other SCFAs","Improves bowel regularity and stool consistency","Enhances calcium and magnesium absorption","Supports immune function through microbiome optimization","Reduces blood glucose response after meals","Synergistic with probiotics as a combined synbiotic approach"].map((b) => (<p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Selective Fermentation — Prebiotic substrates resist digestion in the small intestine and arrive intact in the colon where they are selectively fermented by beneficial bacteria — primarily Bifidobacterium and Lactobacillus. This selectivity is the defining characteristic of a prebiotic — it nourishes beneficial rather than harmful bacteria.","SCFA Production — Bacterial fermentation of prebiotics produces short-chain fatty acids — butyrate, propionate, and acetate. Butyrate is the primary fuel for colonocytes (colon cells), supports gut barrier integrity, has anti-inflammatory effects, and may have anti-cancer properties in the colon.","Calcium and Mineral Absorption — Prebiotics acidify the colon environment through SCFA production, which increases solubility and absorption of calcium, magnesium, and other minerals — a meaningful benefit for bone health.","Immune Modulation — By increasing Bifidobacterium populations and SCFA production, prebiotics modulate gut-associated immune function — increasing regulatory T-cells and reducing inflammatory cytokine production."].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">A meta-analysis found prebiotic supplementation significantly increased Bifidobacterium populations and improved stool consistency and frequency. GOS supplementation specifically has been shown to reduce upper respiratory tract infections in elderly subjects. Inulin and FOS supplementation improves calcium absorption — a 2005 RCT in adolescent girls found inulin-type fructans significantly increased calcium absorption and bone mineral density. Blood glucose research shows prebiotics reduce postprandial glucose and insulin responses, with mechanisms including delayed gastric emptying and reduced glucose absorption. Combined probiotic and prebiotic (synbiotic) approaches show additive benefits across multiple conditions.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {["Typical dose: 3–10g daily — start low and increase gradually to minimize gas and bloating","Common sources: Inulin powder (from chicory root), FOS supplements, GOS supplements","Natural food sources: Garlic, onions, leeks, asparagus, bananas, oats, Jerusalem artichoke","Timing: With meals — mixed into food or beverages","Synbiotic approach: Combine with probiotics for enhanced benefit"].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Safe but commonly cause gas, bloating, and abdominal discomfort — especially at higher doses or when starting supplementation. Starting with 2–3g and gradually increasing over 2–3 weeks significantly reduces GI side effects. People with FODMAP sensitivities or IBS may need to start very slowly or use specific prebiotic types. Not suitable for some IBS subtypes where fermentable carbohydrates worsen symptoms.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/probiotics" className="text-[#0891b2] hover:underline">Probiotics</Link> | <Link href="/supplements/magnesium" className="text-[#0891b2] hover:underline">Magnesium</Link> | <Link href="/supplements/zinc" className="text-[#0891b2] hover:underline">Zinc</Link> | <Link href="/supplements/fish-oil" className="text-[#0891b2] hover:underline">Fish Oil</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Slavin J. Fiber and Prebiotics: Mechanisms and Health Benefits. Nutrients. 2013.","Roberfroid M, et al. Prebiotic effects: metabolic and health benefits. Br J Nutr. 2010."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Fiber", "Butyrate", "Bifidobacterium", "Synbiotic"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=prebiotics+supplement&tag=profpeptide-20"
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
