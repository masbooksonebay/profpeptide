import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Sermorelin — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "Sermorelin research profile covering GHRH 1-29 mechanism, pituitary preservation, former FDA approval history, and off-label clinical use.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Sermorelin is a synthetic peptide representing the first 29 amino acids of endogenous growth hormone-releasing hormone (GHRH 1-29) — the shortest fully functional fragment of GHRH capable of activating pituitary GHRH receptors and stimulating GH release. It was originally FDA approved in 1997 under the brand name Geref for treating growth hormone deficiency in children, and separately as a diagnostic agent for GH secretion assessment in adults. In 2008, the manufacturer (EMD Serono) discontinued commercial production for business reasons — not safety concerns — and sermorelin was moved to the FDA's Discontinued Drug Product List. Despite this, sermorelin is not a controlled substance, and licensed physicians can legally prescribe it off-label to adults through compounding pharmacies. It has since found a second application in functional and anti-aging medicine as a gentler alternative to direct recombinant human growth hormone (rhGH) replacement. Sermorelin's key advantage over rhGH is that it stimulates the pituitary's own GH production rather than replacing it directly, preserving the natural negative feedback loop via somatostatin and avoiding the suppression of endogenous GH synthesis.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "GHRH Receptor Agonism [1] — Sermorelin binds to GHRH receptors on somatotroph cells in the anterior pituitary gland, mimicking endogenous GHRH signaling. This triggers cAMP production and downstream GH gene transcription and secretion.",
      "Pulsatile GH Release with Feedback Preservation [2] — Unlike exogenous recombinant HGH which overrides the body's regulatory systems, sermorelin stimulates pulsatile GH release while preserving the somatostatin negative feedback loop. This prevents GH levels from becoming pathologically elevated and maintains physiological hormone rhythms.",
      "Pituitary Preservation and Stimulation [2] — Sermorelin maintains and stimulates GH gene transcription in pituitary somatotrophs, helping preserve pituitary GH secretory capacity that naturally declines with age. It supports the growth hormone neuroendocrine axis — the first hormonal axis to deteriorate with aging.",
      "Downstream IGF-1 Production [1] — GH released in response to sermorelin stimulates hepatic IGF-1 production, mediating the anabolic and metabolic effects associated with GH axis activity.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Pediatric Growth Hormone Deficiency [3] — Sermorelin was FDA approved and extensively studied for treating growth failure in children with GH deficiency. Daily sermorelin injections improved growth rates in 74% of children within 6 months in clinical studies.",
      "Adult Growth Hormone Deficiency and Anti-Aging [2] — While not formally approved for adult use, sermorelin is studied and prescribed off-label for age-related GH decline, adult GHD, body composition improvement, sleep quality, and general wellness optimization.",
      "Comparison to rhGH [2] — Sermorelin's stimulation-based mechanism is considered safer for long-term use than direct rhGH replacement, which creates unnaturally sustained GH elevation, suppresses endogenous GH production, and carries higher risks of side effects including insulin resistance, fluid retention, and joint pain.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research and Clinical Use",
    body: [
      "Improved growth rates in pediatric GH deficiency (74% response rate in clinical studies)",
      "Preservation of natural pulsatile GH release patterns",
      "Maintained somatostatin feedback preventing GH excess",
      "Preservation of pituitary GH secretory function",
      "Potential improvements in body composition, sleep quality, energy, and recovery in adults",
      "Lower side effect profile compared to direct rhGH replacement",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Structure: 29 amino acid fragment of GHRH (GHRH 1-29)",
      "Half-life: Approximately 10–12 minutes (rapidly cleared by proteolytic enzymes)",
      "Administration: Subcutaneous injection, typically at night to align with natural GH pulsatility",
      "Stability: Sensitive to proteolytic degradation — shorter half-life than CJC-1295 or tesamorelin",
    ],
  },
  {
    id: "fda-status",
    title: "FDA Approval Status",
    content:
      "Sermorelin was FDA approved in 1997 (brand name Geref) for pediatric growth hormone deficiency and as a diagnostic agent. The manufacturer discontinued production in 2008 for commercial reasons — not safety concerns. Sermorelin is no longer on the FDA approved drug list. It is not a controlled substance and may be legally prescribed off-label by licensed physicians through compounding pharmacies.",
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "(1) Sermorelin's clinical evidence base is primarily from pediatric GH deficiency — adult optimization data is limited and largely anecdotal or from small studies. (2) No large-scale RCTs establishing efficacy for adult anti-aging or body composition optimization. (3) Short half-life requires careful timing of injections. (4) Quality and potency of compounded sermorelin varies between pharmacies. (5) No longer available as an FDA-approved standardized pharmaceutical product.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "Sermorelin is sometimes studied with Ipamorelin or other GHRPs for synergistic GH stimulation, similar to the CJC-1295 + Ipamorelin GH Stack protocol.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "ScienceDirect Topics. Sermorelin — an overview. https://www.sciencedirect.com/topics/medicine-and-dentistry/sermorelin",
      "Wikipedia. Sermorelin. https://en.wikipedia.org/wiki/Sermorelin",
      "Eden. Is Sermorelin Safe? FDA, Risks and Side Effects. 2025. https://www.tryeden.com/post/is-sermorelin-safe",
    ],
  },
];

export default function SermorelinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Sermorelin","description":"Sermorelin research profile covering GHRH 1-29 mechanism, pituitary preservation, former FDA approval history, and off-label clinical use.","url":"https://www.profpeptide.com/peptides/sermorelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://www.profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Sermorelin"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Sermorelin</h1>
        <span className="tag">Growth Hormone</span>
        <span className="text-xs bg-gray-200 text-gray-600 dark:text-slate-300 border border-gray-300 px-2.5 py-1 rounded-full font-medium">
          Previously FDA Approved — Discontinued 2008
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: GHRH 1-29, Geref (discontinued brand name)
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.content && (
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["GH Axis", "GHRH", "Anti-Aging", "Compounded"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      
      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Ipamorelin</Link>
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295</Link>
        <Link href="/peptides/tesamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Tesamorelin</Link>
        </div>
      </div>
      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/cjc-1295-vs-sermorelin-vs-ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295 vs Sermorelin vs Ipamorelin &rarr;</Link>
        </div>
      </div>

<div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/coupons" className="btn-primary text-sm text-center">
            View Verified Discount Codes &rarr;
          </Link>
          <a
            href="https://www.amazon.com/s?k=growth+hormone+supplements&tag=profpeptide-20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm text-center"
          >
            Search Related Supplements on Amazon &rarr;
          </a>
        </div>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
    </>
  );
}
