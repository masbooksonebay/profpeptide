import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "NAD+ — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "NAD+ supplement profile covering cellular energy, sirtuin activation, DNA repair, NMN and NR precursors, clinical trial evidence, and dosage guidance.",
};

export default function NADPlusSupplementPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"NAD+","description":"NAD+ supplement profile covering cellular energy, sirtuin activation, DNA repair, NMN and NR precursors, clinical trial evidence, and dosage guidance.","url":"https://www.profpeptide.com/supplements/nad-plus","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://www.profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"NAD+"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">NAD+</h1>
        <span className="tag">Longevity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Nicotinamide Adenine Dinucleotide, NAD, Coenzyme I. Precursors: NMN (Nicotinamide Mononucleotide), NR (Nicotinamide Riboside)</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The essential coenzyme behind cellular energy, DNA repair, and longevity</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in every living cell, essential to energy metabolism, DNA repair, and cellular signaling. NAD+ levels decline significantly with age — by middle age, levels may be roughly half of what they were in youth. This decline is associated with reduced cellular energy production, impaired DNA repair, and increased vulnerability to age-related disease. Rather than supplementing NAD+ directly (which has poor bioavailability), most protocols use NAD+ precursors — primarily NMN (Nicotinamide Mononucleotide) and NR (Nicotinamide Riboside) — which the body converts into NAD+.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Cellular energy production — NAD+ is essential to mitochondrial function and ATP synthesis",
              "DNA repair — activates PARP enzymes responsible for repairing damaged DNA strands",
              "Sirtuin activation — sirtuins are longevity-associated enzymes that require NAD+ to function",
              "Cognitive support — NAD+ supports neuronal energy metabolism and brain function",
              "Metabolic health — involved in insulin sensitivity and glucose metabolism",
              "Anti-aging — restoring NAD+ levels may slow aspects of cellular aging",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">NAD+ functions as an electron carrier in cellular respiration, shuttling electrons during the conversion of nutrients into ATP — the cell&apos;s primary energy currency. It also serves as a substrate for sirtuins (SIRT1–SIRT7), enzymes that regulate gene expression, stress responses, and cellular repair processes. Additionally, NAD+ activates PARP enzymes that detect and repair DNA strand breaks. Because oral NAD+ has limited bioavailability, precursor compounds NMN and NR are the preferred supplementation route — both are efficiently absorbed and converted to NAD+ in tissues.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Human clinical trials have confirmed that oral NMN and NR supplementation effectively raises blood NAD+ levels. A 2018 randomized controlled trial published in Nature Communications found that NR supplementation significantly elevated whole blood NAD+ metabolism in healthy middle-aged and older adults and was well tolerated. A 2022 Japanese trial demonstrated that 250mg daily NMN supplementation over 12 weeks significantly increased NAD+ metabolite concentrations and showed nominally significant improvements in gait speed and grip strength in older men. A 2024 meta-analysis of 12 randomized controlled trials confirmed NMN consistently raises blood NAD+ levels, though most clinically relevant metabolic outcomes require larger trials to confirm. Research is active and expanding — NAD+ restoration represents one of the most studied areas in longevity science.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "NMN: 250mg–2g daily, taken sublingually or orally in the morning",
              "NR: 300mg–1g daily, oral capsule",
              "NAD+ IV infusion: clinical setting only",
              "Andrew Huberman takes 1–2g NMN sublingually each morning and 500mg NR daily",
              "Best taken in the morning due to mild energizing effects",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">NMN and NR are generally well tolerated in clinical trials. Common mild side effects include nausea and flushing at higher doses. Note: The FDA ruled in 2023 that NMN cannot be sold as a dietary supplement (it was filed as an investigational drug), though it remains widely available. NR remains available as a supplement. Long-term safety data in humans is still accumulating. Consult a healthcare provider before use.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/nmn" className="text-[#0891b2] hover:underline">NMN</Link> | <Link href="/supplements/resveratrol" className="text-[#0891b2] hover:underline">Resveratrol</Link> | <Link href="/supplements/coq10" className="text-[#0891b2] hover:underline">CoQ10</Link> | <Link href="/supplements/quercetin" className="text-[#0891b2] hover:underline">Quercetin</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Martens CR, et al. Chronic nicotinamide riboside supplementation is well-tolerated and elevates NAD+ in healthy middle-aged and older adults. Nature Communications. 2018.",
              "Igarashi M, et al. Chronic nicotinamide mononucleotide supplementation elevates blood NAD+ levels and alters muscle function in healthy older men. NPJ Aging. 2022.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["NAD+", "Sirtuins", "Mitochondria", "Longevity"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Read the full NAD+ research</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">5 key studies summarized in plain English covering NMN and NR human trials, cognitive function, and metabolic health.</p>
        <Link href="/research/nad-plus" className="btn-primary text-sm">NAD+ Research</Link>
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=NAD+supplement+NMN&tag=profpeptide-20"
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
