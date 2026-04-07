import Link from "next/link";

export const metadata = {
  title: "Ipamorelin Research Profile | Prof. Peptide",
  description:
    "Ipamorelin research profile — selective ghrelin receptor agonist mechanism, GH release without cortisol elevation, synergy with CJC-1295, and references.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Ipamorelin is a synthetic pentapeptide growth hormone secretagogue (GHS) and the first selective ghrelin receptor agonist developed specifically to stimulate GH release with minimal off-target hormonal effects. Developed by Novo Nordisk in the late 1990s, ipamorelin activates the growth hormone secretagogue receptor type 1a (GHS-R1a) — the same receptor targeted by the endogenous hunger hormone ghrelin — to trigger pulsatile GH release from the anterior pituitary. Its defining characteristic is selectivity: unlike earlier GHRPs (GHRP-2, GHRP-6) which significantly elevate cortisol and ACTH alongside GH, ipamorelin produces robust GH release with no significant effect on cortisol, prolactin, ACTH, FSH, LH, or TSH — even at doses more than 200 times its effective GH-releasing dose. This clean selectivity profile makes it the most studied GHRP for combination protocols. Ipamorelin is not FDA approved and is classified as a research compound.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "GHS-R1a Receptor Agonism [1] — Ipamorelin binds to and activates the growth hormone secretagogue receptor type 1a (GHS-R1a) — a ghrelin-sensitive receptor located on somatotroph cells in the hypothalamus and anterior pituitary. This binding triggers G-protein activation through the G\u03B1q/11 subunit.",
      "Intracellular Calcium Signaling [1] — GHS-R1a activation by ipamorelin triggers the phospholipase C (PLC) pathway, hydrolyzing PIP2 into IP3 and diacylglycerol (DAG). IP3 facilitates calcium release from the endoplasmic reticulum while DAG activates protein kinase C — both converging on the secretory machinery of somatotrophs to trigger GH release.",
      "Selective GH Release Without Cortisol Elevation [2] — A landmark pharmacological study established that ipamorelin produces GH release comparable to GHRP-6 in potency and efficacy, but crucially does not elevate ACTH or cortisol levels even at doses more than 200-fold higher than its GH-releasing ED50. This selectivity distinguishes it from all previous GHRPs.",
      "Dual-Pathway Synergy with CJC-1295 [3] — Ipamorelin activates the GHS-R1a pathway while CJC-1295 activates the separate GHRH receptor pathway. Simultaneous activation of both produces supraadditive GH release — greater than the sum of either compound alone — through complementary intracellular signaling cascades.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Selectivity Profile — Landmark Pharmacology Study [2] — The definitive 1998 study published in European Journal of Endocrinology established ipamorelin as the first GHRP-receptor agonist with GH release selectivity comparable to GHRH itself — robust GH stimulation with no significant cortisol, ACTH, prolactin, FSH, LH, or TSH elevation.",
      "GH Stack with CJC-1295 [3] — Combining ipamorelin with CJC-1295 represents the most researched GHRH+GHRP synergy pair. The combination produces amplified pulsatile GH output by simultaneously engaging both the GHRH receptor and ghrelin receptor pathways.",
      "Body Composition and Metabolic Research [3] — GH elevation via ipamorelin stimulation promotes lean muscle synthesis, fat metabolism, improved sleep quality, and tissue repair through downstream IGF-1 signaling.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Robust GH release comparable to GHRP-6 in potency and efficacy",
      "No significant cortisol, ACTH, prolactin, FSH, LH, or TSH elevation — even at supraphysiological doses",
      "Synergistic GH amplification when combined with CJC-1295",
      "Physiologically relevant pulsatile GH release pattern",
      "Potential improvements in body composition, recovery, and sleep via GH/IGF-1 axis",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Structure: Pentapeptide (Aib-His-D-2-Nal-D-Phe-Lys-NH2) — 5 amino acids",
      "Half-life: Approximately 2 hours",
      "Administration: Subcutaneous injection",
      "Onset: Rapid GH release, typically within 15–30 minutes of injection",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "Ipamorelin research carries important limitations: (1) The landmark selectivity data comes primarily from animal studies; comprehensive long-term human trial data is limited. (2) Long-term effects of sustained GH stimulation on pituitary function and downstream systems are not fully established. (3) Theoretical risks of chronic IGF-1 elevation include insulin resistance and mitogenic effects. (4) Ipamorelin is not FDA approved for any therapeutic use. (5) Prohibited by WADA in competitive sport.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "Ipamorelin is most commonly studied with CJC-1295 — the GH Stack — for synergistic dual-pathway GH stimulation. Also studied with IGF-1 LR3 for downstream anabolic amplification and BPC-157/TB-500 for broader recovery protocols.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "IRE Journals. The Mechanism of Action and Synergy of CJC-1295 And Ipamorelin Peptide Blend. 2026. https://www.irejournals.com/paper-details/1714043",
      "PubMed. Ipamorelin, the first selective growth hormone secretagogue. 1998. https://pubmed.ncbi.nlm.nih.gov/9849822/",
      "Spartan Peptides. CJC-1295 and Ipamorelin: The Research-Backed Growth Hormone Peptide Blend. 2026. https://spartanpeptides.com/blog/cjc-1295-ipamorelin-complete-2026-research-guide/",
    ],
  },
];

export default function IpamorelinPage() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0D7377] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Ipamorelin</h1>
        <span className="tag">Growth Hormone</span>
        <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved — Research Use Only
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-8">
        Also Known As: NNC 26-0161
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">
              {s.title}
            </h2>
            {s.content && (
              <p className="text-sm text-gray-600 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["GH Axis", "Selective GHRP", "Recovery", "Preclinical"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <p className="text-sm font-medium text-gray-700 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>
    </div>
  );
}
