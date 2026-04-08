import Link from "next/link";

export const metadata = {
  title: "Melanotan II — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "Melanotan II research profile covering melanocortin receptor mechanism, tanning effects, sexual function discovery, and safety risk assessment.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Melanotan II is a synthetic cyclic analog of alpha-melanocyte-stimulating hormone (\u03B1-MSH), a naturally occurring peptide hormone that regulates skin pigmentation, energy balance, sexual function, and inflammation through the melanocortin receptor system. It was developed in the 1980s by researchers at the University of Arizona who were investigating whether inducing protective skin pigmentation could reduce UV-related skin cancer risk. The science proved highly effective at producing tanning \u2014 but the compound also demonstrated unexpected and potent effects on sexual arousal and appetite suppression through its non-selective binding to multiple melanocortin receptor subtypes. Unlike its successor bremelanotide (PT-141), which was refined to specifically target sexual function and received FDA approval as Vyleesi, Melanotan II was never submitted for formal FDA drug approval. It remains an unregulated research compound widely sold online and used informally for tanning, despite health authority warnings in the US, UK, and Australia. Melanotan II is closely related to afamelanotide (Melanotan I), which received FDA approval in 2019 for a specific skin condition (erythropoietic protoporphyria). Melanotan II's non-selective receptor profile \u2014 binding to MC1R, MC3R, MC4R, and MC5R \u2014 gives it a broader range of physiological effects and a more concerning safety profile than its more selective relatives.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Non-Selective Melanocortin Receptor Agonism [1] \u2014 Melanotan II acts as a potent non-selective agonist at melanocortin receptors MC1, MC3, MC4, and MC5 \u2014 unlike native \u03B1-MSH which has greater receptor selectivity. It is up to 1,000 times more potent than endogenous \u03B1-MSH. Each receptor subtype mediates distinct physiological effects.",
      "MC1R Activation \u2014 Melanogenesis [2] \u2014 Binding to MC1R on melanocytes stimulates tyrosinase activity and promotes eumelanin synthesis \u2014 the brown-to-black pigment responsible for skin darkening. Melanotan II induces eumelanin production preferentially over pheomelanin (a lighter, less photoprotective pigment), producing a deep bronze tan that persists for weeks to months after discontinuation.",
      "MC3R and MC4R Activation \u2014 Appetite and Sexual Function [3] \u2014 MC3R and MC4R in the hypothalamus regulate appetite, energy homeostasis, and sexual behavior. Melanotan II's activation of MC4R produces appetite suppression and enhanced sexual arousal \u2014 the latter being the accidental discovery that led to the development of PT-141. Clinical studies confirmed that Melanotan II enhances erectile function in males and increases sexual desire and genital arousal in females.",
      "MC4R \u2014 Central Nervous System Effects [1] \u2014 Because Melanotan II crosses the blood-brain barrier and activates central MC4R, it produces CNS-mediated effects including appetite suppression, mood modulation, reduced oxidative stress in the brain, and sexual arousal. These CNS effects distinguish it from purely topical tanning agents.",
      "MC5R Activation [4] \u2014 MC5R influences exocrine gland secretion, libido, and skin repair. Melanotan II's activity at MC5R contributes to its broad physiological profile.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Tanning and Photoprotection \u2014 University of Arizona Clinical Studies [2] \u2014 Phase I clinical studies by Dorr et al. confirmed Melanotan II's effectiveness as a sunless tanning agent at low subcutaneous doses. A 2015 review identified 18 clinical trials and 21 case presentations documenting its action as a synthetic tanning agent.",
      "Sexual Function \u2014 Landmark Human Study [3] \u2014 A landmark study published in PubMed documented that Melanotan II enhanced erectile function in men with erectile dysfunction and increased sexual desire and genital arousal in women \u2014 the first documented case of a melanocortin analog regulating human sexual function. This discovery led directly to the development of bremelanotide (PT-141/Vyleesi).",
      "Appetite Suppression and Metabolic Effects [4] \u2014 Research in the International Journal of Molecular Sciences confirmed that Melanotan II activates MC4R receptors in the hypothalamus, influencing neuroendocrine regulation of hunger and satiety, leading to reduced food intake.",
      "Melanoma Risk Research [1] \u2014 A 2013 scientific review found no conclusive evidence that Melanotan II itself causes melanoma. A 2021 review concluded that increased melanoma risk in Melanotan II users is likely explained by increased UV-seeking behavior rather than direct carcinogenicity. However, at least five reported cases of melanoma during or after use have raised ongoing safety concerns, particularly in individuals with existing risk factors.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Effective sunless tanning agent in clinical trials \u2014 deep, persistent melanin-based pigmentation",
      "Enhanced erectile function in men with erectile dysfunction",
      "Increased sexual desire and genital arousal in women",
      "Appetite suppression via hypothalamic MC4R activation",
      "Preferential eumelanin production over pheomelanin",
      "Tanning effect persists weeks to months after discontinuation",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Structure: Cyclic synthetic analog of \u03B1-MSH \u2014 7 amino acids in cyclic form",
      "Potency: Up to 1,000 times more potent than endogenous \u03B1-MSH",
      "Administration: Subcutaneous injection (research use only)",
      "CNS penetration: Crosses the blood-brain barrier",
      "Effect duration: Tanning persists 4\u20138 weeks after stopping without UV maintenance",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations and Safety Concerns",
    content:
      "Melanotan II carries significant safety concerns that distinguish it from most research peptides: (1) Not FDA approved for any indication and never submitted for formal FDA drug approval \u2014 unlike its relatives afamelanotide (FDA approved) and bremelanotide (FDA approved). (2) Health authorities in the US, UK, and Australia have issued explicit warnings against use due to lack of regulatory oversight, purity concerns, and safety signals. (3) At least five reported cases of melanoma during or after use \u2014 though causation is disputed and most cases involved other risk factors including UV seeking behavior. (4) Reversible darkening of moles and freckles is commonly reported \u2014 requiring skin monitoring during use. (5) Non-selective receptor binding produces unpredictable CNS effects including nausea, facial flushing, fatigue, and spontaneous erections in males. (6) Widely sold as an unregulated research chemical online with unknown purity and dosing accuracy. (7) Prohibited in Australia and New Zealand as a controlled substance.",
  },
  {
    id: "related",
    title: "Related Peptides",
    links: [
      { name: "PT-141 (Bremelanotide) \u2014 FDA-approved selective MC4R agonist derived from Melanotan II for sexual dysfunction", href: "/peptides/pt-141" },
    ],
  },
  {
    id: "references",
    title: "References",
    body: [
      "PMC. An overview of benefits and risks of chronic melanocortin-1 receptor activation. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC11664455/",
      "Wikipedia. Melanotan II. https://en.wikipedia.org/wiki/Melanotan_II",
      "PubMed. Discovery that a melanocortin regulates sexual functions in male and female humans. 2005. https://pubmed.ncbi.nlm.nih.gov/15996790/",
      "Revolution Health and Wellness. Melanotan II Peptide: Tanning, Immunity, and Metabolic Support. 2025. https://revolutionhealth.org/blogs/news/peptide-therapy-melanotan-ii",
    ],
  },
];

export default function MelanotanIIPage() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0D7377] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Melanotan II</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
        <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved — Research Use Only
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-8">
        Also Known As: MT-II, MT-2, the &quot;Barbie Drug&quot; (informal)
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
        {["Melanocortin", "Tanning", "Sexual Function", "Research Only"].map((tag) => (
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
