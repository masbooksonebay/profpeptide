import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Zinc — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Zinc supplement profile covering immune cell development, cold duration reduction, gut barrier support, testosterone, and form comparison.",
};

export default function ZincPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Zinc","description":"Zinc supplement profile covering immune cell development, cold duration reduction, gut barrier support, testosterone, and form comparison.","url":"https://www.profpeptide.com/supplements/zinc","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://www.profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Zinc"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Zinc</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Zinc picolinate, zinc bisglycinate, zinc citrate, zinc gluconate, zinc acetate</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The essential mineral at the center of immune defense and gut integrity</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Zinc is an essential trace mineral that serves as a structural component or catalytic cofactor in over 300 enzymes and more than 1,000 transcription factors — making it second only to iron among trace minerals in biological importance. It is indispensable for immune function, DNA synthesis, protein synthesis, wound healing, cell division, and taste and smell sensation. Zinc is particularly concentrated in immune cells and the gut epithelium — two of its most critical sites of action. Zinc deficiency impairs virtually every aspect of immune function, increases gut permeability, and is associated with increased susceptibility to infection, poor wound healing, and impaired growth. Global zinc deficiency is estimated to affect approximately 2 billion people, and even marginal deficiency is common in elderly populations, vegetarians, athletes, and people with gastrointestinal conditions that impair absorption. Unlike some minerals that can be stored in the body, zinc has no dedicated storage depot — daily intake is required to maintain adequate status.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Essential for immune cell development and function","Reduces duration and severity of common cold","Supports gut barrier integrity and tight junction function","Required for wound healing and tissue repair","Supports testosterone production in deficient individuals","Essential for taste, smell, and appetite","Antioxidant and anti-inflammatory effects"].map((b) => (<p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Immune Cell Development — Zinc is required for the development and activation of T lymphocytes, natural killer cells, neutrophils, macrophages, and B cells. Zinc deficiency causes thymic atrophy and profound impairment of cell-mediated immunity — zinc repletion restores immune function in deficient individuals.","Tight Junction Support — Zinc directly supports the expression and assembly of tight junction proteins in intestinal epithelial cells — including occludin, claudin, and ZO-1. This makes zinc fundamental for gut barrier integrity and prevention of intestinal hyperpermeability.","Antioxidant Defense — Zinc is a structural component of superoxide dismutase (SOD) — one of the body's primary antioxidant enzymes. It also stabilizes cell membranes against oxidative damage by competing with pro-oxidant metals for binding sites.","Testosterone and Hormone Support — Zinc is a cofactor for 5-alpha reductase and plays a direct role in testosterone synthesis. Zinc deficiency is associated with hypogonadism and reduced testosterone, and repletion in deficient men restores testosterone levels.","Antiviral Activity — Zinc ions inhibit RNA-dependent RNA polymerase — an enzyme used by many viruses for replication. This is the mechanistic basis for zinc's anti-rhinovirus effects and the rationale for zinc lozenges during cold illness."].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cold duration evidence is strong — a Cochrane review and meta-analysis found zinc lozenges or syrup reduced the duration of the common cold by approximately 33% when started within 24 hours of symptom onset. Gut barrier research shows zinc supplementation significantly reduces intestinal permeability markers and improves clinical outcomes in intestinal conditions. Testosterone research confirms zinc deficiency causes hypogonadism and that repletion in deficient men increases testosterone. Wound healing research shows zinc is essential for all phases of wound healing and supplementation accelerates healing in deficient individuals. Elderly populations consistently show immune improvements with zinc supplementation reflecting high rates of subclinical deficiency in this group.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {["Typical dose: 15–30mg elemental zinc daily","Zinc picolinate: Highest bioavailability — best for general supplementation","Zinc bisglycinate: Very well absorbed and gentle on stomach","Zinc citrate: Good bioavailability","Zinc gluconate: Common in lozenges for cold treatment","Zinc oxide: Poorest bioavailability — avoid for internal supplementation","Cold treatment: Zinc acetate or gluconate lozenges (at least 13mg ionic zinc per lozenge) started within 24 hours of symptoms","Take with food to reduce nausea; avoid taking with calcium or iron which compete for absorption"].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Safe at recommended doses. Most common side effect is nausea — taking with food resolves this. Upper tolerable limit is 40mg elemental zinc daily from supplements — chronic excess causes copper deficiency (they compete for absorption), immune suppression, and reduced HDL cholesterol. If taking long-term zinc above 25mg, consider adding 1–2mg copper to prevent depletion. Zinc lozenges can leave a metallic taste.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/magnesium" className="text-[#0891b2] hover:underline">Magnesium</Link> | <Link href="/supplements/vitamin-d3" className="text-[#0891b2] hover:underline">Vitamin D3</Link> | <Link href="/supplements/probiotics" className="text-[#0891b2] hover:underline">Probiotics</Link> | <Link href="/supplements/fish-oil" className="text-[#0891b2] hover:underline">Fish Oil</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Singh M, Das RR. Zinc for the common cold. Cochrane Database Syst Rev. 2013.","Prasad AS. Zinc in human health: effect of zinc on immune cells. Mol Med. 2008."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Immune", "Cold Duration", "Gut Barrier", "2 Billion Deficient"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=zinc+picolinate&tag=profpeptide-20"
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
