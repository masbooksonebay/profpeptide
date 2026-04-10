import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "CJC-1295 — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "CJC-1295 research profile covering GHRH analog mechanism, pulsatile GH release, DAC vs non-DAC forms, and Ipamorelin synergy data.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "CJC-1295 is a synthetic analog of growth hormone-releasing hormone (GHRH), the 44-amino acid neuropeptide produced in the hypothalamus that signals the pituitary gland to release growth hormone. CJC-1295 is a tetra-substituted derivative of GHRH 1-29 — the shortest fully functional fragment of GHRH — with four amino acid substitutions that enhance stability against proteolytic degradation and improve receptor interaction. It exists in two primary forms: CJC-1295 without DAC (also called Modified GRF 1-29), which has a half-life of approximately 30 minutes and produces discrete pulsatile GH release; and CJC-1295 with DAC (Drug Affinity Complex), which features a reactive maleimide group that enables covalent binding to serum albumin, extending its half-life to several days and producing sustained GH elevation. CJC-1295 without DAC is more commonly studied in combination with Ipamorelin because pulsatile GH release more closely mirrors physiological rhythms. CJC-1295 is not FDA approved and is classified as a research compound.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "GHRH Receptor Agonism [1] — CJC-1295 binds to and activates GHRH receptors (GHRHR) on somatotroph cells in the anterior pituitary gland, mimicking the action of endogenous GHRH. This receptor activation triggers intracellular cAMP production, activating protein kinase A and enhancing both GH gene transcription and GH secretion.",
      "Stimulation of Pulsatile GH Release [2] — CJC-1295 without DAC produces discrete, pulsatile bursts of GH release that closely mirror the body's natural GH secretion patterns. This physiological release pattern is considered preferable to continuous GH elevation for preserving pituitary sensitivity and avoiding receptor desensitization.",
      "Downstream IGF-1 Elevation [1] — Growth hormone released in response to CJC-1295 stimulates the liver to produce insulin-like growth factor-1 (IGF-1), the primary mediator of GH's anabolic effects on muscle, bone, and other tissues. Clinical studies demonstrated dose-dependent increases in both GH and IGF-1 levels in healthy adult subjects.",
      "Albumin Binding — DAC Version [3] — CJC-1295 with DAC features a maleimide group at its C-terminus that forms a covalent bond with cysteine residues on serum albumin after injection, dramatically extending its half-life and producing sustained GH elevation over days rather than hours.",
      "Synergy with GHRPs [2] — CJC-1295 activates the GHRH receptor pathway while GHRPs such as Ipamorelin activate the separate ghrelin receptor (GHS-R1a) pathway. When both are activated simultaneously, the intracellular signaling cascades interact synergistically, producing GH release significantly greater than either compound achieves alone.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "GH and IGF-1 Elevation in Healthy Adults [1] — A landmark human study published in the Journal of Clinical Endocrinology and Metabolism demonstrated that CJC-1295 produced dose-dependent increases in GH levels of 2–10 fold above baseline and sustained IGF-1 elevation in healthy adult subjects, with effects lasting several days after a single injection of the DAC version.",
      "Growth Hormone Deficiency Models [3] — CJC-1295 normalized growth in GHRH knockout mice when administered once daily, demonstrating its ability to substitute for endogenous GHRH signaling in deficient states.",
      "Combination with Ipamorelin — GH Stack [2] — The combination of CJC-1295 with Ipamorelin represents one of the most researched growth hormone secretagogue pairings, exploiting both the GHRH and ghrelin receptor pathways simultaneously for amplified, synergistic GH output.",
      "Body Composition and Recovery [2] — Growth hormone released via CJC-1295 stimulation promotes lean muscle mass, fat metabolism, tissue repair, and improved sleep quality through downstream IGF-1 signaling.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Dose-dependent GH increases of 2–10 fold above baseline in human subjects",
      "Sustained IGF-1 elevation supporting anabolic processes",
      "Pulsatile GH release pattern preserving pituitary sensitivity",
      "Synergistic GH amplification when combined with Ipamorelin",
      "Potential improvements in body composition, recovery, and sleep quality via GH/IGF-1 axis",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Half-life: Approximately 30 minutes without DAC; several days with DAC",
      "Administration: Subcutaneous injection",
      "CJC-1295 without DAC: pulsatile release, preferred for combination protocols",
      "CJC-1295 with DAC: sustained GH elevation, longer dosing intervals",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "CJC-1295 research carries important limitations: (1) Most human data comes from a small number of clinical studies; large-scale RCT data is limited. (2) Long-term safety of sustained GH stimulation is not fully established. (3) The DAC version's sustained GH elevation may suppress the body's natural pulsatile GH rhythm over time. (4) Theoretical risks of sustained IGF-1 elevation include insulin resistance and potential mitogenic effects. (5) CJC-1295 is not FDA approved for any therapeutic use. (6) Prohibited by WADA in competitive sport.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "CJC-1295 is most commonly studied with Ipamorelin — the GH Stack — for synergistic dual-pathway GH stimulation. Also studied with IGF-1 LR3 for downstream anabolic amplification, and BPC-157/TB-500 for broader recovery protocols.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "PubMed. Prolonged stimulation of growth hormone and IGF-I secretion by CJC-1295 in healthy adults. 2006. https://pubmed.ncbi.nlm.nih.gov/16352683/",
      "Spartan Peptides. CJC-1295 and Ipamorelin: The Research-Backed Growth Hormone Peptide Blend. 2026. https://spartanpeptides.com/blog/cjc-1295-ipamorelin-complete-2026-research-guide/",
      "American Journal of Physiology. Once-daily administration of CJC-1295 normalizes growth in the GHRH knockout mouse. 2007. https://journals.physiology.org/doi/abs/10.1152/ajpendo.00201.2006",
    ],
  },
];

export default function CJC1295Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"CJC-1295","description":"CJC-1295 research profile covering GHRH analog mechanism, pulsatile GH release, DAC vs non-DAC forms, and Ipamorelin synergy data.","url":"https://www.profpeptide.com/peptides/cjc-1295","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://www.profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"CJC-1295"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">CJC-1295</h1>
        <span className="tag">Growth Hormone</span>
        <span className="text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700/50 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved — Research Use Only
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Modified GRF 1-29, Mod GRF 1-29, CJC-1295 without DAC, DAC:GRF (with DAC version)
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
        {["GH Axis", "GHRH", "Recovery", "Preclinical"].map((tag) => (
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
        <Link href="/peptides/sermorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Sermorelin</Link>
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
