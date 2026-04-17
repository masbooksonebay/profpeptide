import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "NMN — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "NMN supplement profile covering NAD+ precursor mechanism, sirtuin activation, mitochondrial biogenesis, telomere support, and clinical trial data.",
};

export default function NMNPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"NMN","description":"NMN supplement profile covering NAD+ precursor mechanism, sirtuin activation, mitochondrial biogenesis, telomere support, and clinical trial data.","url":"https://profpeptide.com/supplements/nmn","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"NMN"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">NMN</h1>
        <span className="tag">Longevity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Nicotinamide mononucleotide, beta-NMN, NMN powder</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The NAD+ precursor at the frontier of longevity science</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Nicotinamide mononucleotide (NMN) is a naturally occurring nucleotide found in trace amounts in foods including edamame, broccoli, and avocado. It is a direct precursor to NAD+ (nicotinamide adenine dinucleotide) — the essential coenzyme that fuels energy production, activates sirtuins (longevity proteins), supports DNA repair, and regulates cellular stress responses. NAD+ levels decline by up to 50% between youth and old age, and this decline is causally linked to hallmarks of aging including mitochondrial dysfunction, genomic instability, and impaired cellular repair. NMN raises NAD+ levels more efficiently than NAD+ itself (which is poorly absorbed orally) by entering the NAD+ salvage pathway after absorption. It has become one of the most researched and commercially significant longevity supplements following influential animal studies showing dramatic health and lifespan benefits, and is now backed by a growing number of human clinical trials. David Sinclair of Harvard Medical School — one of the world&apos;s leading aging researchers — has been one of the most prominent advocates for NMN research.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Raises NAD+ levels efficiently — the foundational longevity molecule","Activates sirtuins SIRT1-7 — the longevity gene regulators","Supports mitochondrial function and energy production","Enhances DNA repair capacity","Improves insulin sensitivity and metabolic health","May increase muscle strength and endurance in older adults","Supports cardiovascular function and vascular health"].map((b) => (<p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["NAD+ Precursor — NMN is converted to NAD+ via the enzyme NMNAT (nicotinamide mononucleotide adenylyltransferase) after absorption. Research suggests NMN may also be transported directly into cells via a dedicated NMN transporter (Slc12a8) discovered in 2019, allowing even more efficient conversion than previously understood.","Sirtuin Activation — NAD+ is the essential cofactor for all seven sirtuin enzymes (SIRT1-7). By raising NAD+, NMN enables sirtuin activity across multiple cellular compartments — nucleus (SIRT1, SIRT2, SIRT6, SIRT7), mitochondria (SIRT3, SIRT4, SIRT5) — supporting DNA repair, metabolic regulation, and stress resistance.","PARP Support — NAD+ fuels PARP enzymes that repair DNA strand breaks. Age-related accumulation of DNA damage increases PARP activity and depletes NAD+ — creating a vicious cycle that NMN supplementation can help interrupt.","Mitochondrial Biogenesis — NMN-driven NAD+ elevation activates PGC-1\u03B1 via SIRT1, stimulating mitochondrial biogenesis — the creation of new, healthy mitochondria to replace dysfunctional ones that accumulate with aging."].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Animal studies are impressive — NMN supplementation in aged mice improved energy metabolism, insulin sensitivity, eye function, bone density, immune function, and physical activity within weeks. A 2019 study showed NMN improved muscle strength and endurance in aged mice. Human clinical trials are now emerging. A 2021 Japanese RCT found NMN supplementation significantly increased blood NAD+ levels and improved muscle function in older men. A 2022 study in overweight adults found NMN improved insulin sensitivity and muscle performance. A 2023 study found NMN supplementation in adults aged 45–60 increased telomere length in white blood cells. Washington University research found NMN improved muscle insulin sensitivity in postmenopausal women with prediabetes.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {["Typical dose: 250–500mg daily — most human trials use 250–500mg","Timing: Morning with or without food — some prefer sublingual NMN powder for potentially faster absorption","Stability: NMN is sensitive to heat and moisture — store in a cool dry place or refrigerate","Combine with: Resveratrol is frequently studied alongside NMN — resveratrol activates sirtuins while NMN provides the NAD+ fuel they require","Form: Capsules, powder, and sublingual tablets are all available — sublingual may improve bioavailability"].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Well tolerated in human trials to date. No serious adverse effects reported in studies using up to 1200mg daily. Most common mild effects are nausea and GI discomfort at higher doses. Long-term safety data in humans is still accumulating — NMN supplements have only been widely available since around 2018. Theoretically, sustained NAD+ elevation could influence cancer cell metabolism — this remains an area of ongoing research and monitoring. People with active cancer should consult an oncologist before using NAD+ precursors.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/resveratrol" className="text-[#0891b2] hover:underline">Resveratrol</Link> | <Link href="/supplements/coq10" className="text-[#0891b2] hover:underline">CoQ10</Link> | <Link href="/supplements/quercetin" className="text-[#0891b2] hover:underline">Quercetin</Link> | <Link href="/supplements/spermidine" className="text-[#0891b2] hover:underline">Spermidine</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Yoshino M, et al. Nicotinamide mononucleotide increases muscle insulin sensitivity in prediabetic women. Science. 2021.","Igarashi M, et al. Chronic nicotinamide mononucleotide supplementation elevates blood nicotinamide adenine dinucleotide levels and alters muscle function in healthy older men. NPJ Aging. 2022."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["NAD+", "Sirtuins", "Mitochondria", "Longevity"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=NMN+supplement&tag=profpeptide-20"
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
