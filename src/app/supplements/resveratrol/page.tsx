import Link from "next/link";

export const metadata = {
  title: "Resveratrol — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Resveratrol supplement profile covering SIRT1 activation, cardiovascular protection, caloric restriction mimicry, and NMN synergy stack.",
};

export default function ResveratrolPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Resveratrol</h1>
        <span className="tag">Longevity</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Trans-resveratrol, RSV, stilbenoid, Longevinex</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The red wine polyphenol that activates your longevity genes</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Resveratrol is a naturally occurring polyphenol stilbenoid found in the skin of red grapes, blueberries, raspberries, mulberries, and peanuts — and most famously in red wine, which sparked widespread interest in its health properties following epidemiological observations linking moderate red wine consumption to reduced cardiovascular mortality (the &quot;French Paradox&quot;). Resveratrol is a potent activator of SIRT1 — the founding member of the sirtuin longevity gene family — and this mechanism links it directly to caloric restriction mimicry, DNA repair, and metabolic regulation. David Sinclair&apos;s laboratory at Harvard identified resveratrol as a sirtuin-activating compound (STAC) in 2003, triggering an explosion of research interest. While some early findings have proven difficult to replicate and resveratrol&apos;s bioavailability is notoriously poor, it remains one of the most extensively studied polyphenols in longevity science. Its combination with NMN — resveratrol activating sirtuins while NMN provides the NAD+ fuel they require — is a popular longevity stack with a logical mechanistic rationale.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🌿 Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Activates SIRT1 — the primary longevity sirtuin","Cardiovascular protection — reduces LDL oxidation and inflammation","Anti-inflammatory effects via NF-\u03BAB inhibition","Caloric restriction mimicry — activates similar pathways to fasting","Antioxidant protection against oxidative stress","Blood sugar regulation and insulin sensitization","Neuroprotective effects in preclinical research"].map((b) => (<p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["SIRT1 Activation — Resveratrol activates SIRT1 directly as a sirtuin-activating compound (STAC), and indirectly by inhibiting phosphodiesterases (PDEs) which increases cAMP and activates AMPK — which in turn activates SIRT1. This creates a cascade that mimics many of the cellular effects of caloric restriction.","AMPK Activation — Through PDE inhibition and direct effects, resveratrol activates AMPK — the master metabolic sensor — improving insulin sensitivity, mitochondrial function, and fat oxidation.","NF-\u03BAB Inhibition — Resveratrol inhibits nuclear factor-kappa B (NF-\u03BAB) — the master inflammatory transcription factor — reducing production of inflammatory cytokines and providing systemic anti-inflammatory effects.","Antioxidant Activity — Resveratrol directly scavenges free radicals and upregulates endogenous antioxidant enzymes, protecting LDL cholesterol from oxidation — a key step in cardiovascular disease progression."].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Cardiovascular research shows resveratrol reduces LDL oxidation, improves endothelial function, and reduces inflammatory markers in human trials. A meta-analysis found resveratrol significantly reduced systolic blood pressure and fasting glucose. Metabolic research shows improved insulin sensitivity in insulin-resistant subjects. SIRT1 activation has been confirmed in human tissue. However, resveratrol&apos;s bioavailability is poor — it is rapidly metabolized and excreted, meaning very high doses or enhanced formulations are needed to achieve plasma concentrations that match in vitro effective doses. Pterostilbene — a methylated resveratrol analog — has better bioavailability and is emerging as a more effective alternative in some research.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {["Typical dose: 150–500mg trans-resveratrol daily","Bioavailability enhancement: Take with a fatty meal — fat significantly improves resveratrol absorption; some formulations use micronization or liposomal delivery for better bioavailability","Timing: With meals — particularly with dietary fat","Combine with: NMN for the complementary NAD+/sirtuin longevity stack; quercetin for synergistic anti-inflammatory effects","Form: Trans-resveratrol is the active isomer — ensure products specify trans-resveratrol not cis-resveratrol"].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Generally well tolerated at typical doses. Common side effects at higher doses include GI discomfort, nausea, and diarrhea. May have mild blood-thinning effects — caution with anticoagulant medications. At very high doses (above 1g daily) some studies show potential pro-oxidant effects — stay within reasonable dosing ranges. May interact with cytochrome P450 enzymes affecting metabolism of certain medications. Not recommended during pregnancy.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/nmn" className="text-[#0D7377] hover:underline">NMN</Link> | <Link href="/supplements/quercetin" className="text-[#0D7377] hover:underline">Quercetin</Link> | <Link href="/supplements/coq10" className="text-[#0D7377] hover:underline">CoQ10</Link> | <Link href="/supplements/spermidine" className="text-[#0D7377] hover:underline">Spermidine</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Baur JA, Sinclair DA. Therapeutic potential of resveratrol: the in vivo evidence. Nat Rev Drug Discov. 2006.","Hausenblas HA, et al. Resveratrol treatment as an adjunct to pharmacological management in type 2 diabetes mellitus — systematic review and meta-analysis. Mol Nutr Food Res. 2015."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["SIRT1", "French Paradox", "NMN Synergy", "Polyphenol"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=resveratrol+supplement&tag=profpeptide-20"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm inline-block"
        >
          Search on Amazon &rarr;
        </a>
        <p className="text-xs text-gray-400 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
  );
}
