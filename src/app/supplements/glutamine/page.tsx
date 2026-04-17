import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Glutamine — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Glutamine supplement profile covering gut barrier support, immune cell fuel, muscle recovery, and clinical nutrition evidence.",
};

export default function GlutaminePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Glutamine","description":"Glutamine supplement profile covering gut barrier support, immune cell fuel, muscle recovery, and clinical nutrition evidence.","url":"https://profpeptide.com/supplements/glutamine","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Glutamine"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Glutamine </h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: L-glutamine, glutamine monohydrate</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The conditionally essential amino acid that fuels gut cells and immune function</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Glutamine is the most abundant amino acid in the human body and the primary fuel source for rapidly dividing cells including enterocytes (gut lining cells), immune cells, and cells in wound healing. Under normal conditions, the body can synthesize sufficient glutamine — making it &quot;non-essential.&quot; However, during periods of intense physical stress, illness, surgery, burns, or overtraining, glutamine demand can exceed production capacity, making it conditionally essential. This is where supplementation becomes most relevant. Glutamine plays critical roles in gut barrier integrity, immune system support, nitrogen transport, and muscle protein synthesis. It is widely used in clinical nutrition for critically ill patients and has a meaningful evidence base for gut health and immune function in athletic contexts.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Gut lining integrity and permeability reduction",
              "Immune system support during high-stress periods",
              "Muscle protein synthesis support",
              "Recovery from intense exercise and overtraining",
              "Clinical use in critical illness and post-surgical recovery",
              "Nitrogen transport between tissues",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Gut Barrier Support — Enterocytes (the cells lining the intestinal wall) use glutamine as their primary energy source. During stress or intense exercise, depleted glutamine levels can compromise the integrity of the gut barrier — increasing intestinal permeability (leaky gut). Supplementation maintains gut lining integrity and tight junction function.",
              "Immune Cell Fuel — Lymphocytes, macrophages, and neutrophils rely heavily on glutamine for rapid proliferation and function during immune challenges. Glutamine depletion during illness or overtraining impairs immune cell activity — potentially explaining the increased infection susceptibility in overtrained athletes.",
              "Muscle Protein Synthesis — Glutamine stimulates muscle protein synthesis and reduces protein catabolism, particularly during caloric restriction or intense training phases. It also supports glycogen synthesis in muscle cells.",
              "Nitrogen Transport — Glutamine carries nitrogen between tissues — releasing it where needed for amino acid synthesis and nucleotide production. This transport function is critical during tissue repair and wound healing.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Clinical evidence is strongest for critical illness and post-surgical recovery — multiple RCTs and meta-analyses support intravenous glutamine for reducing infection risk and hospital stay in ICU patients. Gut health research shows oral glutamine reduces intestinal permeability markers and improves gut barrier function in athletes and patients with inflammatory bowel conditions. Athletic recovery research is mixed for healthy athletes with adequate nutrition — glutamine supplementation shows most benefit when training volume is very high or nutrition is suboptimal. A meta-analysis found glutamine supplementation reduced post-exercise muscle soreness and improved recovery markers.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 5–10g daily; up to 20–30g in divided doses during illness or intense training blocks",
              "⏱Timing: Post-workout and before bed are popular windows for muscle recovery",
              "Clinical use: Higher doses under medical supervision for gut conditions and post-surgical recovery",
              "Most useful during: Heavy training blocks, illness recovery, gut issues, caloric restriction",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Exceptionally safe — one of the most well-tolerated amino acid supplements. Mild GI symptoms at high doses. No significant adverse effects reported in studies using up to 30g daily for extended periods. People with kidney disease should use caution with high amino acid supplementation. Not recommended in rare genetic conditions involving glutamine metabolism disorders.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Newsholme P. Why is L-glutamine metabolism important to cells of the immune system? J Nutr. 2001.",
              "Cruzat V, et al. Glutamine: Metabolism and Immune Function, Supplementation and Clinical Translation. Nutrients. 2018.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Gut Health", "Immune", "Recovery", "Conditionally Essential"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      
      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/supplements/collagen-peptides" className="text-sm font-medium text-[#0891b2] hover:underline">Collagen Peptides</Link>
        <Link href="/supplements/zinc-carnosine" className="text-sm font-medium text-[#0891b2] hover:underline">Zinc Carnosine</Link>
        <Link href="/supplements/probiotics" className="text-sm font-medium text-[#0891b2] hover:underline">Probiotics</Link>
        </div>
      </div>

<div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=l-glutamine+supplement&tag=profpeptide-20"
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
