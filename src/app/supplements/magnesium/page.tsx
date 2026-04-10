import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Magnesium — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Magnesium supplement profile covering 300+ enzymatic reactions, sleep quality, blood pressure, glycinate vs citrate forms, and optimal dosage.",
};

export default function MagnesiumPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Magnesium","description":"Magnesium supplement profile covering 300+ enzymatic reactions, sleep quality, blood pressure, glycinate vs citrate forms, and optimal dosage.","url":"https://www.profpeptide.com/supplements/magnesium","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://www.profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Magnesium"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Magnesium</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Magnesium glycinate, magnesium citrate, magnesium malate, magnesium oxide</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The mineral involved in 300+ enzymatic reactions that most people don&apos;t get enough of</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Magnesium is an essential mineral and the fourth most abundant cation in the human body, serving as a cofactor for over 300 enzymatic reactions including ATP production, DNA synthesis, protein synthesis, muscle contraction, nerve transmission, and blood glucose regulation. It is the second most abundant intracellular cation after potassium, and approximately 50–60% of total body magnesium is stored in bone. Despite its fundamental importance, magnesium deficiency is remarkably common — surveys suggest 45–68% of Americans do not consume the recommended daily amount, and modern agricultural practices have reduced magnesium content in soil and food compared to previous generations. Chronic low magnesium intake is associated with increased risk of hypertension, type 2 diabetes, cardiovascular disease, depression, migraine, and impaired immune function. Magnesium&apos;s relevance to gut health is both direct (it regulates bowel motility and intestinal permeability) and systemic (its deficiency drives inflammation and impairs immune function throughout the body).</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Cofactor for 300+ enzymatic reactions — foundational for cellular function","Improves sleep quality and promotes relaxation","Reduces muscle cramps and improves muscle recovery","Lowers blood pressure in hypertensive individuals","Improves insulin sensitivity and blood glucose regulation","Reduces frequency of migraines","Supports gut motility and relieves constipation"].map((b) => (<p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["ATP Production — Magnesium is required for ATP (adenosine triphosphate) to be biologically active — ATP must be bound to magnesium to function as cellular energy currency. Magnesium deficiency directly impairs every energy-requiring process in the body.","GABA Receptor Activation — Magnesium activates GABA receptors and reduces excitatory NMDA receptor activity, producing calming and sleep-promoting effects. This is the mechanism behind magnesium's well-documented sleep quality improvements.","Calcium Channel Regulation — Magnesium acts as a natural calcium channel blocker — regulating calcium entry into cells. This explains its cardiovascular effects including blood pressure reduction and antiarrhythmic properties.","Insulin Sensitivity — Magnesium is a cofactor for insulin receptor tyrosine kinase — required for proper insulin signaling. Deficiency impairs glucose uptake and contributes to insulin resistance.","Gut Motility — Magnesium draws water into the intestine through osmotic action (particularly magnesium citrate and oxide forms), stimulating bowel motility — making it an effective treatment for constipation."].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">A meta-analysis of 34 RCTs found magnesium supplementation significantly reduced systolic and diastolic blood pressure. A 2016 meta-analysis confirmed significant improvements in sleep quality, particularly in older adults. Diabetes research shows magnesium supplementation improves fasting glucose and insulin sensitivity in insulin-resistant individuals. Migraine prevention evidence is strong — a meta-analysis found magnesium supplementation significantly reduced migraine frequency. Muscle function research shows magnesium reduces exercise-induced cramps and improves recovery. A 2022 meta-analysis confirmed significant sleep quality improvements with supplementation.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {["Typical dose: 200–400mg elemental magnesium daily","Magnesium glycinate: Best for sleep, anxiety, general supplementation — high bioavailability, gentle on GI","Magnesium citrate: Good bioavailability, mild laxative effect — useful for constipation","Magnesium malate: Good for energy and muscle pain — combines magnesium with malic acid","Magnesium oxide: Poorest bioavailability, strongest laxative effect — not ideal for general supplementation","Timing: Evening for sleep benefits; with meals for general use"].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Very safe at recommended doses. Main side effect is diarrhea and loose stools — dose-dependent and form-dependent (oxide most, glycinate least). The tolerable upper limit from supplements is 350mg daily for adults — above this, diarrhea risk increases. People with kidney disease should consult a healthcare provider before supplementing as kidneys regulate magnesium excretion. May interact with certain antibiotics and bisphosphonates — separate by 2 hours.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/zinc" className="text-[#0891b2] hover:underline">Zinc</Link> | <Link href="/supplements/vitamin-d3" className="text-[#0891b2] hover:underline">Vitamin D3</Link> | <Link href="/supplements/fish-oil" className="text-[#0891b2] hover:underline">Fish Oil</Link> | <Link href="/supplements/zma" className="text-[#0891b2] hover:underline">ZMA</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Zhang X, et al. Effects of magnesium supplementation on blood pressure: a meta-analysis of randomized double-blind placebo-controlled trials. Hypertension. 2016.","Abbasi B, et al. The effect of magnesium supplementation on primary insomnia in elderly: a double-blind placebo-controlled clinical trial. J Res Med Sci. 2012."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Sleep", "Blood Pressure", "300+ Enzymes", "45-68% Deficient"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=magnesium+glycinate&tag=profpeptide-20"
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
