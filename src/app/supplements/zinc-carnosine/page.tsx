import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/supplements/zinc-carnosine" },
  title: "Zinc Carnosine — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Zinc carnosine profile covering gut mucosal repair, ulcer healing, leaky gut support, athlete gut health, and PepZin GI dosage.",
};

export default function ZincCarnosinePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Zinc Carnosine","description":"Zinc carnosine profile covering gut mucosal repair, ulcer healing, leaky gut support, athlete gut health, and PepZin GI dosage.","url":"https://profpeptide.com/supplements/zinc-carnosine","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Zinc Carnosine"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Zinc Carnosine </h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Polaprezinc, zinc L-carnosine, ZnC, PepZin GI</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The gut-healing compound trusted by gastroenterologists for decades</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Zinc carnosine (polaprezinc) is a chelated compound of zinc and the dipeptide L-carnosine in a 1:1 molar ratio. This chelation is critical — it creates a compound with dramatically different properties and gut-specific benefits compared to taking zinc and carnosine separately. Zinc carnosine has been used as a prescription medication in Japan since 1994 for the treatment of gastric ulcers and H. pylori infection, and has accumulated an impressive evidence base for gut mucosal protection, repair, and integrity. It is now widely used in functional medicine as a foundational gut healing compound. Its benefits extend beyond the stomach to the entire GI tract — supporting the intestinal barrier, reducing gut permeability, and accelerating healing of damaged mucosal tissue. It is often used as part of protocols for leaky gut, NSAID-induced GI damage, and athletic gut issues.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Gastric ulcer prevention and healing",
              "H. pylori eradication support",
              "Gut mucosal repair and leaky gut support",
              "NSAID-induced gut damage protection",
              "Exercise-induced gut permeability reduction in athletes",
              "Antioxidant protection of gut lining",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Mucosal Adhesion — The chelated zinc-carnosine compound has a unique property — it physically adheres to damaged mucosal tissue in the stomach and intestines, concentrating its protective and healing effects at sites of injury rather than being rapidly absorbed into systemic circulation. This targeted delivery is why the chelated form outperforms zinc and carnosine taken separately.",
              "Mucosal Prostaglandin Stimulation — Zinc carnosine stimulates prostaglandin E2 production in gastric mucosa, enhancing the production of protective mucus and increasing mucosal blood flow — the body's own gastroprotective mechanisms.",
              "Antioxidant Protection — Both zinc and carnosine are independently potent antioxidants. Their chelated form provides sustained antioxidant protection at mucosal surfaces, reducing oxidative damage from acid, enzymes, and free radicals.",
              "Tight Junction Support — Zinc carnosine supports the integrity of tight junctions between intestinal epithelial cells — the molecular \"zippers\" that control what passes through the gut wall. By strengthening tight junctions, it reduces intestinal hyperpermeability (leaky gut).",
              "Heat Shock Protein Induction — Zinc carnosine induces heat shock proteins in gut mucosal cells, which protect cells from stress and accelerate repair after damage.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            A 2001 double-blind RCT found zinc carnosine significantly improved gastric ulcer healing rates vs. placebo over 8 weeks. Multiple studies confirm benefits for H. pylori eradication when added to standard antibiotic triple therapy. A landmark 2011 study by Davison et al. found that zinc carnosine supplementation significantly reduced exercise-induced gut permeability increases in endurance athletes — a significant finding for athlete gut health. Research on NSAID users shows zinc carnosine protects against NSAID-induced gastric damage and small intestinal permeability increases. Clinical use in Japan for over 30 years provides substantial real-world safety and efficacy data.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 75mg twice daily with meals (37.5mg zinc carnosine per capsule in most products)",
              "⏱Timing: With meals for gastric protection; some protocols use before bed for overnight mucosal repair",
              "Duration: Gut healing benefits typically seen over 4–8 weeks",
              "Note: Often used as part of a broader gut healing protocol with probiotics, glutamine, and collagen",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Excellent safety profile — used as a prescription drug in Japan for 30+ years with a well-established record. Most common minor effects are mild GI symptoms. Zinc content means caution with high-dose zinc from multiple sources — zinc toxicity is possible with excessive combined intake (upper limit 40mg elemental zinc daily). Not recommended in pregnancy without medical supervision.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Mahmood A, et al. Zinc carnosine, a health food supplement that stabilises small bowel integrity and stimulates gut repair processes. Gut. 2007.",
              "Davison G, et al. Zinc carnosine works with bovine colostrum in truncating heavy exercise-induced increase in gut permeability in healthy volunteers. Am J Clin Nutr. 2016.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Gut Health", "Ulcer Healing", "Leaky Gut", "Rx in Japan"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      
      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/supplements/glutamine" className="text-sm font-medium text-[#0891b2] hover:underline">Glutamine</Link>
        <Link href="/supplements/probiotics" className="text-sm font-medium text-[#0891b2] hover:underline">Probiotics</Link>
        <Link href="/supplements/collagen-peptides" className="text-sm font-medium text-[#0891b2] hover:underline">Collagen Peptides</Link>
        </div>
      </div>

<div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=zinc+carnosine&tag=profpeptide-20"
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
