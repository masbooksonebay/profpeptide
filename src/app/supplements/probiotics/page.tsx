import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/supplements/probiotics" },
  title: "Probiotics — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Probiotics supplement profile covering gut microbiome restoration, IBS symptom reduction, immune modulation, and strain selection guidance.",
};

export default function ProbioticsPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Probiotics","description":"Probiotics supplement profile covering gut microbiome restoration, IBS symptom reduction, immune modulation, and strain selection guidance.","url":"https://profpeptide.com/supplements/probiotics","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Probiotics"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Probiotics</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Lactobacillus, Bifidobacterium, live cultures, beneficial bacteria</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The live bacteria that keep your gut — and your whole body — in balance</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Probiotics are live microorganisms that, when administered in adequate amounts, confer a health benefit on the host. They are primarily bacteria — most commonly species from the Lactobacillus and Bifidobacterium genera — that colonize the gastrointestinal tract and interact with the existing gut microbiome, intestinal epithelium, and immune system. The human gut contains approximately 38 trillion bacteria — outnumbering human cells — and this microbial ecosystem (the gut microbiome) plays fundamental roles in digestion, immune regulation, neurotransmitter production, inflammation control, and metabolic health. Disruptions to the gut microbiome through antibiotics, poor diet, stress, illness, or aging can impair all these functions. Probiotics are the most extensively researched intervention for restoring and maintaining microbiome health. Different strains have different effects — strain specificity matters enormously, and not all probiotics are equal for all conditions.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Restores gut microbiome balance after antibiotics or illness","Reduces symptoms of IBS including bloating, pain, and irregular bowel habits","Prevents and treats antibiotic-associated diarrhea","Enhances immune function through gut-immune axis","Reduces duration of upper respiratory tract infections","Supports mental health through the gut-brain axis","Improves lactose digestion"].map((b) => (<p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Colonization Resistance — Probiotic bacteria compete with pathogenic organisms for adhesion sites on intestinal epithelium and for nutrients, reducing the ability of harmful bacteria to colonize the gut.","Gut Barrier Reinforcement — Probiotics strengthen tight junctions between intestinal epithelial cells, reducing intestinal permeability and preventing bacterial translocation — a key mechanism in both gut and systemic health.","Immune Modulation — Approximately 70% of the immune system is located in and around the gut. Probiotics interact with Peyer's patches and gut-associated lymphoid tissue (GALT), modulating immune responses — increasing secretory IgA, natural killer cell activity, and regulatory T-cell populations.","Neurotransmitter Production — Gut bacteria produce or regulate production of serotonin (90% of serotonin is produced in the gut), GABA, and other neurotransmitters that communicate with the brain via the vagus nerve — the mechanistic basis of the gut-brain axis.","Short-Chain Fatty Acid Production — Probiotics ferment dietary fiber to produce short-chain fatty acids (SCFAs) — particularly butyrate, propionate, and acetate — which fuel colonocytes, reduce inflammation, and support gut barrier integrity."].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">A 2019 meta-analysis of 82 RCTs found probiotics significantly reduced overall IBS symptom severity and improved quality of life. Prevention of antibiotic-associated diarrhea is one of the strongest evidence areas — a Cochrane review of 63 RCTs found probiotics reduced AAD risk by 51%. Immune research shows Lactobacillus and Bifidobacterium strains reduce duration and severity of upper respiratory infections. Gut-brain axis research shows specific strains (particularly Lactobacillus rhamnosus) reduce anxiety and depression markers in animal models, with emerging human evidence. Lactobacillus acidophilus is specifically effective for improving lactose digestion.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {["Typical dose: 1–100 billion CFU (colony forming units) daily — higher CFU does not always mean better; strain matters more","Timing: With or just before meals — food buffers stomach acid and improves survival to the intestine","After antibiotics: Take probiotics 2 hours apart from antibiotic doses; continue for at least 2 weeks after finishing antibiotics","Storage: Many require refrigeration — check product labeling","Strain selection: Match strain to condition — Lactobacillus rhamnosus GG for AAD; Bifidobacterium infantis for IBS; multi-strain for general health"].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Excellent safety profile in healthy adults. Most common initial side effects are temporary bloating and gas as the microbiome adjusts — typically resolves within 1–2 weeks. Rare serious adverse events in severely immunocompromised individuals — these patients should consult a physician before using probiotics. Quality varies enormously — look for products with guaranteed CFU at expiration date, not manufacture date.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/prebiotics" className="text-[#0891b2] hover:underline">Prebiotics</Link> | <Link href="/supplements/magnesium" className="text-[#0891b2] hover:underline">Magnesium</Link> | <Link href="/supplements/zinc" className="text-[#0891b2] hover:underline">Zinc</Link> | <Link href="/supplements/fish-oil" className="text-[#0891b2] hover:underline">Fish Oil</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Ford AC, et al. Efficacy of prebiotics, probiotics, and synbiotics in irritable bowel syndrome and chronic idiopathic constipation: systematic review and meta-analysis. Am J Gastroenterol. 2014.","Hempel S, et al. Probiotics for the prevention and treatment of antibiotic-associated diarrhea. JAMA. 2012."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Microbiome", "IBS", "Immune", "Strain-Specific"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=probiotics+supplement&tag=profpeptide-20"
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
