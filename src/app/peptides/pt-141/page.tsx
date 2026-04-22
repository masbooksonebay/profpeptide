import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/peptides/pt-141" },
  title: "PT-141 — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "PT-141 (Bremelanotide) research profile covering FDA-approved CNS mechanism for sexual desire, RECONNECT trial data, and off-label male ED use.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "PT-141 (generic name: bremelanotide, brand name: Vyleesi) is a synthetic cyclic heptapeptide derived from alpha-melanocyte-stimulating hormone (\u03B1-MSH) that functions as a selective melanocortin receptor agonist. It was developed by Palatin Technologies as a refined metabolite-derived analog of Melanotan II \u2014 the tanning peptide that famously caused spontaneous erections in nine out of ten male volunteers during early human testing, prompting an entirely new research direction. Unlike Viagra, Cialis, and other PDE5 inhibitors that work by increasing blood flow to genital tissue in response to existing arousal, PT-141 works upstream in the sexual response cascade \u2014 directly activating the neural circuits in the brain responsible for generating sexual desire and arousal. This central nervous system mechanism makes it the first and only FDA-approved on-demand treatment for acquired, generalized hypoactive sexual desire disorder (HSDD) in premenopausal women, approved in June 2019 as Vyleesi. It is not FDA approved for men, though off-label use for male sexual dysfunction is growing with a Phase 2 clinical trial of bremelanotide for erectile dysfunction launched in 2024. PT-141's central mechanism is particularly clinically meaningful for patients whose sexual dysfunction stems from reduced central drive \u2014 including those with psychogenic dysfunction, stress-related libido loss, or failure to respond to PDE5 inhibitors.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "MC3R and MC4R Agonism \u2014 Central Nervous System [1] \u2014 PT-141 selectively activates melanocortin-3 receptors (MC3R) and melanocortin-4 receptors (MC4R) in the hypothalamus and limbic system \u2014 brain regions governing sexual motivation, reward, and arousal. This selectivity contrasts with Melanotan II which non-selectively activates all five melanocortin receptor subtypes including MC1R (pigmentation) and produces a broader range of side effects.",
      "Dopamine Release in Reward Circuits [2] \u2014 MC4R activation by PT-141 in the medial preoptic area of the hypothalamus triggers dopamine release into reward and motivation centers including the nucleus accumbens. This dopaminergic activation generates sexual desire itself rather than simply facilitating physical response to pre-existing desire \u2014 a fundamentally different mechanism from vascular-targeted therapies.",
      "Central vs. Peripheral Mechanism [3] \u2014 PDE5 inhibitors (sildenafil, tadalafil) work peripherally \u2014 they enhance blood flow in genital tissue in response to stimulation that already exists. PT-141 works centrally \u2014 it acts on the brain's arousal pathways to generate sexual desire and arousal from the neurological level up. This is why PT-141 can be effective in patients who fail PDE5 inhibitor therapy and why it addresses psychogenic and desire-based sexual dysfunction rather than purely vascular dysfunction.",
      "Neurotransmitter Pathway Modulation [4] \u2014 Based on preclinical studies, bremelanotide acts on physiologic and neurobiologic components of sexual function by modulating neurotransmitter pathways involved in sexual desire and arousal \u2014 including dopaminergic, serotonergic, and melanocortinergic signaling.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Female HSDD \u2014 RECONNECT Phase 3 Trials [4] \u2014 The FDA approval was based on two parallel Phase 3 clinical trials (RECONNECT studies 301 and 302) enrolling over 1,200 premenopausal women with HSDD. The trials demonstrated statistically significant and clinically meaningful improvements in sexual desire and reductions in distress with 1.75 mg bremelanotide administered as needed. A 52-week open-label extension confirmed sustained efficacy and a favorable long-term safety profile.",
      "Male Erectile Dysfunction \u2014 Off-Label Research [2] \u2014 Early clinical trials established bremelanotide's ability to produce erectile responses in men including those who failed PDE5 inhibitor therapy. A Phase 2 study launched in 2024 by Palatin Technologies evaluating bremelanotide combined with a PDE5 inhibitor in 50 PDE5-nonresponsive men aims to establish formal male ED efficacy data toward potential FDA approval. Earlier studies showed 67% of PT-141 recipients reported improved erections vs 33% placebo, and a study in 180 sildenafil-resistant men showed 62% improvement with PT-141.",
      "PDE5 Inhibitor Non-Responders [2] \u2014 A key clinical distinction for PT-141 is its different mechanism from PDE5 inhibitors. A study examining the combination of bremelanotide and sildenafil in inadequate PDE5i responders found the combination induced a clinically significant enhanced erectile response \u2014 suggesting complementary rather than redundant mechanisms.",
      "Historical Discovery \u2014 The Melanotan II Connection [2] \u2014 The development history of PT-141 is notable: a University of Arizona researcher self-administered Melanotan II and unexpectedly experienced a prolonged erection \u2014 the accidental discovery that melanocortin receptor activation profoundly affects sexual function. This led to the deliberate development of bremelanotide as a more selective, refined analog specifically targeting sexual dysfunction without the non-selective receptor activation of Melanotan II.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "FDA-approved for HSDD in premenopausal women with demonstrated Phase 3 efficacy",
      "Statistically significant improvements in sexual desire scores vs placebo",
      "Significant reductions in sexual distress (FSDS-DAO scores)",
      "Increased number of satisfying sexual events",
      "67% improvement in erectile function vs 33% placebo in men",
      "62% improvement in sildenafil-resistant erectile dysfunction study",
      "Clinically significant enhanced erectile response when combined with PDE5 inhibitors",
      "Non-hormonal mechanism \u2014 suitable for women who cannot use estrogen or testosterone therapies",
      "On-demand dosing with onset within 45 minutes",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Structure: Cyclic heptapeptide derived from \u03B1-MSH \u2014 7 amino acids",
      "Dose: 1.75 mg subcutaneous injection (FDA-approved female dose); 1.25\u20132 mg studied in males",
      "Administration: Subcutaneous injection at least 45 minutes before sexual activity",
      "Maximum frequency: One dose per 24 hours; no more than 8 doses per month",
      "Mean maximum plasma concentration: 72.8 ng/mL after subcutaneous administration",
      "Onset: Within 45 minutes to 1 hour",
    ],
  },
  {
    id: "fda-status",
    title: "FDA Approval Status",
    content:
      "PT-141 (bremelanotide) is FDA approved as Vyleesi for the treatment of acquired, generalized hypoactive sexual desire disorder (HSDD) in premenopausal women. It is not FDA approved for use in men \u2014 off-label prescribing by physicians is legally permissible. A Phase 2 trial for male erectile dysfunction was launched in 2024. Note: PT-141 is distinct from Melanotan II \u2014 Melanotan II is not FDA approved for any indication. PT-141/bremelanotide is a selective refined analog that achieved full FDA approval.",
  },
  {
    id: "limitations",
    title: "Side Effects and Limitations",
    content:
      "Most common side effects from Phase 3 trials and 52-week extension: nausea (40.4%), flushing (20.6%), headache (12.0%). These are generally transient and mild. Rare: temporary blood pressure increases (mean 1.9 mmHg systolic), hyperpigmentation at injection site. Contraindications: cardiovascular disease or high cardiovascular risk \u2014 blood pressure effects require caution. Not recommended with alcohol due to combined cardiovascular effects. Maximum 8 doses per month to avoid cumulative side effects. Intranasal formulation was discontinued in early development due to greater blood pressure effects \u2014 subcutaneous injection is the standard route.",
  },
  {
    id: "related",
    title: "Related Peptides",
    links: [
      { name: "Melanotan II \u2014 non-selective melanocortin agonist, predecessor compound, not FDA approved", href: "/peptides/melanotan-ii" },
    ],
  },
  {
    id: "references",
    title: "References",
    body: [
      "PMC. Bremelanotide for Treatment of Female Hypoactive Sexual Desire. https://pmc.ncbi.nlm.nih.gov/articles/PMC8788464/",
      "Men's Reproductive Health. PT-141 for Men: A New Drug to Treat Erectile Dysfunction and Low Libido. 2025. https://mensreproductivehealth.com/pt-141-for-men-a-new-drug-to-treat-erectile-dysfunction-and-low-libido/",
      "Form Blends. PT-141 / Bremelanotide (Vyleesi): FDA-Approved Peptide for Hypoactive Sexual Desire \u2014 Complete Guide. 2025. https://formblends.com/research/specialty/pt141-bremelanotide-sexual-dysfunction",
      "PMC. Long-Term Safety and Efficacy of Bremelanotide for Hypoactive Sexual Desire Disorder. 2019. https://pmc.ncbi.nlm.nih.gov/articles/PMC6819023/",
    ],
  },
];

export default function PT141Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"PT-141","description":"PT-141 (Bremelanotide) research profile covering FDA-approved CNS mechanism for sexual desire, RECONNECT trial data, and off-label male ED use.","url":"https://profpeptide.com/peptides/pt-141","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"PT-141"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">PT-141</h1>
        <span className="tag">Sexual Health</span>
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full font-medium">
          FDA Approved — HSDD in Premenopausal Women
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Bremelanotide, Vyleesi
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
            {s.links && (
              <div className="space-y-2">
                {s.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-[#0891b2] hover:underline"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0891b2] flex-shrink-0" />
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Sexual Health", "Melanocortin", "FDA Approved", "CNS Mechanism"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
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
            href="https://www.amazon.com/s?k=sexual+health+supplements&tag=profpeptide-20"
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
