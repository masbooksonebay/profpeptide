import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/supplements/l-arginine" },
  title: "L-Arginine — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "L-Arginine supplement profile covering nitric oxide precursor role, growth hormone secretion, cardiovascular support, and wound healing.",
};

export default function LArgininePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"L-Arginine","description":"L-Arginine supplement profile covering nitric oxide precursor role, growth hormone secretion, cardiovascular support, and wound healing.","url":"https://profpeptide.com/supplements/l-arginine","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"L-Arginine"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">L-Arginine</h1>
        <span className="tag">Growth Hormone Support</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Arginine, L-arginine HCl, arginine alpha-ketoglutarate (AAKG)</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The nitric oxide precursor and growth hormone secretagogue</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            L-arginine is a semi-essential amino acid found in red meat, poultry, fish, and dairy that serves as the direct substrate for nitric oxide synthase — the enzyme that produces nitric oxide (NO), the signaling molecule that dilates blood vessels and increases blood flow. L-arginine also stimulates growth hormone release from the pituitary gland, particularly when taken at rest or before sleep, making it a traditional GH-support supplement. However, L-arginine&apos;s effectiveness as a sports supplement is significantly limited by its poor oral bioavailability — the liver and intestines extract a large proportion of oral arginine before it reaches systemic circulation. This is why L-citrulline has largely replaced L-arginine for nitric oxide and performance applications — citrulline bypasses liver metabolism and raises blood arginine levels more effectively than arginine itself. L-arginine remains relevant for its GH-releasing effects, wound healing, and cardiovascular applications.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Nitric oxide precursor — supports blood vessel dilation",
              "Stimulates growth hormone release from the pituitary",
              "Supports wound healing and immune function",
              "Cardiovascular protection through NO-mediated vasodilation",
              "Supports male fertility and sperm function",
              "Synergistic with ornithine for GH release at rest",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Nitric Oxide Production — L-arginine is the direct substrate for nitric oxide synthase (NOS) — producing NO that relaxes vascular smooth muscle, dilates blood vessels, and increases blood flow. This vasodilation supports cardiovascular health and theoretically improves exercise performance, though oral bioavailability limits practical performance effects.",
              "Growth Hormone Secretion — L-arginine stimulates somatotroph cells in the anterior pituitary to release growth hormone by inhibiting somatostatin — the hormone that suppresses GH release. This effect is most pronounced at rest and during sleep, making nighttime dosing a common protocol.",
              "Urea Cycle Function — Arginine is a key intermediate in the urea cycle, facilitating the conversion of toxic ammonia to urea for excretion. This supports liver detoxification and nitrogen balance during high-protein diets.",
              "Immune and Wound Healing — Arginine is conditionally essential during illness, surgery, and injury — rapidly dividing immune cells and healing tissue have high arginine requirements. It supports T-cell proliferation, macrophage function, and collagen synthesis.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            GH research shows intravenous arginine consistently stimulates significant GH release. Oral arginine&apos;s GH-stimulating effects are more modest — a dose of 5–9g has been shown to increase GH in resting conditions. However, arginine taken around exercise may blunt the exercise-induced GH spike rather than enhance it. Cardiovascular research shows modest blood pressure reductions with arginine supplementation in hypertensive individuals. Wound healing research in clinical settings (post-surgery) supports arginine supplementation for faster healing. The sports performance evidence for oral arginine is weaker than for L-citrulline — citrulline is now preferred for exercise performance applications.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {[
              "GH support: 3–9g taken before bed on an empty stomach — most effective for GH release at rest",
              "Cardiovascular: 3–6g daily in divided doses",
              "Wound healing: Often used at higher doses (6–20g) under medical supervision",
              "Note: L-citrulline is superior to L-arginine for pre-workout nitric oxide and performance applications",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Generally safe at typical doses. Common side effects at higher doses include GI upset, nausea, and diarrhea. May lower blood pressure — caution with antihypertensive medications. May worsen herpes outbreaks — lysine supplementation or caution advised in those with recurrent herpes. High doses may cause electrolyte imbalances. Not recommended immediately after heart attack — clinical guidance needed.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/l-citrulline-malate" className="text-[#0891b2] hover:underline">L-Citrulline Malate</Link> | <Link href="/supplements/zma" className="text-[#0891b2] hover:underline">ZMA</Link> | <Link href="/supplements/ashwagandha" className="text-[#0891b2] hover:underline">Ashwagandha</Link> | <Link href="/supplements/gaba" className="text-[#0891b2] hover:underline">GABA</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Kanaley JA. Growth hormone, arginine and exercise. Curr Opin Clin Nutr Metab Care. 2008.",
              "Lubec B, et al. L-arginine reduces lipid peroxidation in patients with diabetes mellitus. Free Radic Biol Med. 1997.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Nitric Oxide", "Growth Hormone", "Cardiovascular", "Wound Healing"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=l-arginine+supplement&tag=profpeptide-20"
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
