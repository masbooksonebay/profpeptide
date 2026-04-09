import Link from "next/link";

export const metadata = {
  title: "Curcumin — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Curcumin supplement profile covering NF-κB inhibition, anti-inflammatory effects, joint pain relief, bioavailability solutions, and dosage.",
};

export default function CurcuminPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Curcumin </h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Turmeric extract, diferuloylmethane, BCM-95, Meriva, Theracurmin</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">Nature&apos;s most powerful anti-inflammatory compound — if you can absorb it</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Curcumin is the primary bioactive polyphenol in turmeric (Curcuma longa) — the bright yellow spice used for thousands of years in Ayurvedic and traditional Chinese medicine. It is one of the most extensively studied natural compounds for inflammation and pain, with over 3,000 published studies. Curcumin&apos;s core mechanism is inhibition of NF-κB — the master regulator of inflammatory gene expression — producing broad anti-inflammatory effects comparable to NSAIDs like ibuprofen in some studies, without the gastrointestinal and cardiovascular side effects. The major challenge with curcumin is bioavailability — standard curcumin powder is poorly absorbed. Modern formulations (BCM-95, Meriva phospholipid complex, Theracurmin nanoparticles, piperine co-administration) dramatically improve absorption and are essential for clinical effect.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Powerful anti-inflammatory — comparable to NSAIDs in some studies",
              "Exercise-induced muscle soreness reduction",
              "Joint pain and osteoarthritis symptom relief",
              "Neuroprotective and potential cognitive benefits",
              "Cardiovascular protection",
              "Antioxidant and anti-cancer research",
              "Recovery from exercise and injury",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "NF-κB Inhibition — Curcumin's primary anti-inflammatory mechanism is inhibition of nuclear factor-kappa B (NF-κB) — the transcription factor that activates genes encoding inflammatory cytokines including TNF-α, IL-1β, IL-6, and COX-2. By blocking NF-κB activation, curcumin reduces inflammatory gene expression broadly.",
              "COX and LOX Inhibition — Curcumin inhibits cyclooxygenase (COX-1, COX-2) and lipoxygenase (LOX) enzymes — the targets of NSAIDs and aspirin — reducing prostaglandin and leukotriene synthesis. This is the mechanism behind its anti-pain and anti-inflammatory effects comparable to ibuprofen.",
              "BDNF Upregulation — Curcumin increases brain-derived neurotrophic factor (BDNF) expression, supporting neuroplasticity and potentially explaining observed antidepressant effects.",
              "Antioxidant Activity — Curcumin directly scavenges free radicals and upregulates endogenous antioxidant enzymes including superoxide dismutase, catalase, and glutathione peroxidase.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            A meta-analysis of 8 RCTs found curcumin supplementation significantly reduced markers of exercise-induced muscle damage (CK, LDH) and reduced muscle soreness vs. placebo. Osteoarthritis research is robust — a 2021 meta-analysis found curcumin produced significant pain reduction and functional improvement comparable to NSAIDs with fewer GI side effects. Cardiovascular research shows improvements in endothelial function and reductions in LDL oxidation. Mood and cognitive research suggests curcumin may have antidepressant effects and neuroprotective properties through BDNF upregulation.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 500–1000mg of high-bioavailability extract daily",
              "With piperine: Black pepper extract (piperine, BioPerine) increases curcumin absorption by up to 2000%",
              "With fat: Curcumin is fat-soluble — take with a fatty meal for better absorption",
              "Duration: Anti-inflammatory effects typically seen within 4–8 weeks of consistent use",
              "Choose wisely: Standard turmeric powder or low-quality curcumin has minimal bioavailability — choose BCM-95, Meriva, Theracurmin, or curcumin + piperine formulations",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Very safe at typical doses. Mild GI effects including nausea at high doses. May have blood-thinning properties — use caution with anticoagulant medications. High doses not recommended during pregnancy. May interfere with iron absorption — separate from iron supplements. The excellent safety profile is well established across multiple clinical trials.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Paultre K, et al. Therapeutic effects of turmeric or curcumin extract on pain and function for individuals with knee osteoarthritis. BMJ Open Sport Exerc Med. 2021.",
              "Hewlings SJ, Kalman DS. Curcumin: A Review of Its Effects on Human Health. Foods. 2017.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Anti-Inflammatory", "Joint Health", "NF-κB", "Bioavailability"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=curcumin+turmeric&tag=profpeptide-20"
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
