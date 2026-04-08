import Link from "next/link";

export const metadata = {
  title: "GH Stack — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "GH Stack (CJC-1295 + Ipamorelin) research profile covering dual-pathway GH synergy, GHRH + GHRP mechanisms, and combination rationale.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "The GH Stack is the popular name for the combination of CJC-1295 (without DAC) and Ipamorelin — two synthetic peptides that activate complementary but distinct receptor pathways governing growth hormone (GH) release from the anterior pituitary. CJC-1295 is a GHRH analog that activates the GHRH receptor (GHRHR), while Ipamorelin is a selective ghrelin receptor agonist that activates the growth hormone secretagogue receptor type 1a (GHS-R1a). When both pathways are stimulated simultaneously, the intracellular signaling cascades interact synergistically — producing GH output significantly greater than either compound achieves independently, while maintaining a physiologically relevant pulsatile release pattern. Ipamorelin's defining selectivity — robust GH release with no significant cortisol, ACTH, or prolactin elevation — makes it the preferred GHRP partner for CJC-1295. The GH Stack is one of the most researched and widely studied growth hormone secretagogue combinations in peptide research.",
  },
  {
    id: "how-they-work-together",
    title: "How They Work Together",
    body: [
      "CJC-1295 Role [1] — CJC-1295 without DAC acts as the sustained GHRH signal, binding to GHRH receptors on pituitary somatotrophs and activating cAMP-dependent GH gene transcription and secretion. It primes the somatotroph and provides the biochemical foundation for GH synthesis. Its approximately 30-minute half-life produces discrete GH pulses that mirror physiological GHRH pulsatility.",
      "Ipamorelin Role [2] — Ipamorelin acts through the separate GHS-R1a (ghrelin receptor) pathway on the same pituitary somatotrophs, triggering rapid calcium-mediated GH secretion. It produces an earlier onset, more acute GH pulse that complements CJC-1295's sustained receptor engagement. Critically, it does this without elevating cortisol, ACTH, prolactin, FSH, LH, or TSH.",
      "The Synergy [3] — The GHRH + GHRP synergy is well documented in research. Simultaneous activation of both receptor pathways produces supraadditive GH release — greater than the arithmetic sum of each compound's individual effect. This occurs because the cAMP pathway (CJC-1295/GHRHR) and the calcium/PKC pathway (Ipamorelin/GHS-R1a) converge and amplify each other at the secretory machinery of the somatotroph. The result is amplified pulsatile GH output in a pattern that closely mirrors natural GH secretion.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "GHRH + GHRP Synergy [3] — Research established that simultaneous stimulation of both receptor pathways produces a synergistic GH response. CJC-1295 studies in humans demonstrated 2–10 fold GH increases above baseline; the addition of Ipamorelin amplifies this further through complementary receptor engagement.",
      "Body Composition [1] — Elevated GH and downstream IGF-1 promote lean muscle synthesis, fat metabolism (particularly visceral fat), improved body composition, and enhanced tissue repair — the primary research areas for the GH Stack.",
      "Sleep Quality [1] — Growth hormone is predominantly secreted during slow-wave sleep. GH Stack protocols administered before sleep are studied for their potential to enhance slow-wave sleep quality and the associated restorative processes.",
      "Recovery and Tissue Repair [1] — Elevated GH and IGF-1 levels support faster recovery from exercise-induced muscle damage and injury through enhanced protein synthesis and cellular repair mechanisms.",
      "Anti-Aging and Sarcopenia Prevention [1] — GH axis activity declines significantly with age. The GH Stack is studied as a means of supporting GH axis function in older adults to counteract age-related muscle loss, fat accumulation, and metabolic decline.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Synergistic GH amplification beyond individual compound effects",
      "Physiologically relevant pulsatile GH release pattern",
      "Elevated IGF-1 supporting anabolic and metabolic processes",
      "No significant cortisol or ACTH elevation (Ipamorelin selectivity)",
      "Potential improvements in body composition, lean mass, and fat metabolism",
      "Enhanced sleep quality through GH-mediated slow-wave sleep support",
      "Accelerated recovery from exercise and tissue repair",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "(1) Most evidence is from preclinical models and small human studies — large-scale RCTs are lacking. (2) Long-term effects of sustained GH stimulation via dual-pathway activation are not fully established. (3) Theoretical risks include insulin resistance, receptor desensitization with prolonged use, and theoretical mitogenic effects from chronic IGF-1 elevation. (4) Neither CJC-1295 nor Ipamorelin is FDA approved. (5) Both compounds are prohibited in competitive sport by WADA. (6) Optimal dosing ratios, timing, and cycle lengths for the combination remain under investigation.",
  },
  {
    id: "individual-profiles",
    title: "Individual Peptide Profiles",
    links: [
      { name: "CJC-1295 Full Research Profile", href: "/peptides/cjc-1295" },
      { name: "Ipamorelin Full Research Profile", href: "/peptides/ipamorelin" },
    ],
  },
  {
    id: "references",
    title: "References",
    body: [
      "Spartan Peptides. CJC-1295 and Ipamorelin: The Research-Backed Growth Hormone Peptide Blend. 2026. https://spartanpeptides.com/blog/cjc-1295-ipamorelin-complete-2026-research-guide/",
      "PubMed. Ipamorelin, the first selective growth hormone secretagogue. 1998. https://pubmed.ncbi.nlm.nih.gov/9849822/",
      "PubMed. Prolonged stimulation of growth hormone and IGF-I secretion by CJC-1295. 2006. https://pubmed.ncbi.nlm.nih.gov/16352683/",
    ],
  },
];

export default function GHStackPage() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0D7377] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">GH Stack</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">CJC-1295 + Ipamorelin</span>
        <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved — Research Use Only
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-8">
        Also Known As: CJC-1295 + Ipamorelin Stack, GHRH + GHRP Stack
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
            {s.links && (
              <div className="space-y-2">
                {s.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-[#0D7377] hover:underline"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D7377] flex-shrink-0" />
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["GH Axis", "Combination Stack", "Recovery", "Preclinical"].map((tag) => (
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
