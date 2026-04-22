import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/supplements/quercetin" },
  title: "Quercetin — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Quercetin supplement profile covering senolytic activity, NF-κB inhibition, zinc ionophore mechanism, and Mayo Clinic aging research.",
};

export default function QuercetinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Quercetin","description":"Quercetin supplement profile covering senolytic activity, NF-κB inhibition, zinc ionophore mechanism, and Mayo Clinic aging research.","url":"https://profpeptide.com/supplements/quercetin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Quercetin"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Quercetin</h1>
        <span className="tag">Longevity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Quercetin dihydrate, quercetin phytosome, isoquercetin</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The senolytic flavonoid that clears aging cells and fights inflammation</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Quercetin is a flavonoid polyphenol found abundantly in foods including onions, apples, capers, berries, and leafy greens — making it one of the most widely consumed dietary polyphenols. It has a broad range of documented biological activities including anti-inflammatory, antioxidant, antiviral, antihistamine, and most notably for longevity research — senolytic properties. Senolytics are compounds that selectively induce apoptosis (programmed cell death) in senescent cells — the dysfunctional &quot;zombie cells&quot; that accumulate with aging, resist normal cell death, and release a toxic inflammatory cocktail called the senescence-associated secretory phenotype (SASP) that drives chronic inflammation and tissue dysfunction. Quercetin, particularly in combination with the cancer drug dasatinib, is one of the most studied senolytic combinations in aging research. It is also a potent zinc ionophore — it facilitates the transport of zinc into cells, which has antiviral implications. Quercetin&apos;s role in longevity research has grown significantly and it is now considered one of the most promising multi-target natural compounds in the space.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Senolytic activity — selectively clears senescent zombie cells","Potent anti-inflammatory via NF-\u03BAB and NLRP3 inflammasome inhibition","Zinc ionophore — enhances cellular zinc uptake","Antioxidant protection across cellular compartments","Antihistamine effects — reduces allergic inflammatory responses","Antiviral activity","Cardiovascular protection — reduces blood pressure and LDL oxidation"].map((b) => (<p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Senolytic Mechanism — Quercetin inhibits anti-apoptotic pathways specifically in senescent cells — including PI3K/AKT and BCL-2/BCL-XL survival pathways — making senescent cells more susceptible to programmed cell death while leaving normal cells unaffected. This selective clearing of senescent cells reduces SASP-driven inflammation and may rejuvenate tissue function.","NF-\u03BAB and NLRP3 Inhibition — Quercetin inhibits NF-\u03BAB (master inflammatory transcription factor) and the NLRP3 inflammasome — a key driver of sterile chronic inflammation associated with aging. This dual anti-inflammatory action distinguishes it from simpler antioxidants.","Zinc Ionophore Activity — Quercetin facilitates zinc transport across cell membranes, increasing intracellular zinc concentrations. Zinc inhibits RNA-dependent RNA polymerase used by many viruses for replication — this zinc ionophore mechanism has antiviral implications.","AMPK Activation and mTOR Inhibition — Quercetin activates AMPK and inhibits mTOR — two key longevity signaling pathways also targeted by rapamycin and caloric restriction — contributing to its anti-aging effects."].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">The Mayo Clinic&apos;s aging research group has conducted landmark studies on quercetin as a senolytic. A 2019 pilot clinical trial found the dasatinib + quercetin combination reduced senescent cell burden in adipose tissue of patients with diabetic kidney disease. A 2021 study found the combination reduced physical dysfunction in patients with idiopathic pulmonary fibrosis. Anti-inflammatory research consistently shows quercetin reduces CRP, IL-6, and TNF-alpha. Blood pressure meta-analyses confirm significant reductions in systolic and diastolic blood pressure. Antiviral research shows quercetin combined with zinc inhibits viral replication. Bioavailability studies show quercetin phytosome form has dramatically improved absorption vs. standard quercetin.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {["Typical dose: 500–1000mg daily for anti-inflammatory effects","Senolytic protocol: Higher doses (1000–2000mg) used in senolytic research — often in intermittent cycles rather than daily","Combine with: Zinc to maximize the zinc ionophore benefit; bromelain to enhance absorption; resveratrol for synergistic anti-inflammatory effects","Bioavailability: Quercetin phytosome (Quercefit) or isoquercetin have significantly better absorption than standard quercetin powder","Timing: With meals — fat improves absorption"].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Well tolerated at typical doses. Most common side effects are mild GI discomfort and headache. High doses may cause kidney stress with prolonged use — stay within recommended ranges. May interact with certain antibiotics, cyclosporine, and blood thinners. May inhibit cytochrome P450 enzymes affecting drug metabolism. Not recommended during pregnancy or breastfeeding at supplemental doses.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/nmn" className="text-[#0891b2] hover:underline">NMN</Link> | <Link href="/supplements/resveratrol" className="text-[#0891b2] hover:underline">Resveratrol</Link> | <Link href="/supplements/spermidine" className="text-[#0891b2] hover:underline">Spermidine</Link> | <Link href="/supplements/coq10" className="text-[#0891b2] hover:underline">CoQ10</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Kirkland JL, Tchkonia T. Senolytic drugs: from discovery to translation. J Intern Med. 2020.","Hussain SA, et al. Quercetin: A Promising Flavonoid for Therapeutic Interventions in Aging and Age-related Diseases. Curr Pharm Des. 2021."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Senolytic", "Zinc Ionophore", "NLRP3", "Mayo Clinic"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=quercetin+supplement&tag=profpeptide-20"
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
