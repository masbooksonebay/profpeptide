import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/selank" },
  title: "Selank — Russian Anxiolytic Peptide, GABA, Mechanism, Dosage | Prof. Peptide",
  description:
    "Selank research profile: GABAergic anxiolysis without sedation, intranasal dosing protocol, Semax stack, Russian clinical history, side effects.",
};

const faqs = [
  {
    q: "Is Selank FDA-approved?",
    a: "No. Selank is approved as a prescription medication in Russia for generalized anxiety disorder and neurasthenia. It is not FDA-approved in the United States or EMA-approved in Europe. Outside Russia, Selank is sold as a research-grade peptide.",
  },
  {
    q: "How does Selank compare to benzodiazepines?",
    a: "In Russian clinical trials (Zozulya et al. 2008), Selank produced anxiolytic effects comparable to medazepam in 62 GAD patients. Critical differences: NO sedation, NO cognitive impairment, NO tolerance development, NO physical dependence, NO withdrawal syndrome. Selank also has additional anti-asthenic (anti-fatigue) and mild psychostimulant properties that benzodiazepines lack.",
  },
  {
    q: "How is Selank different from Semax?",
    a: "Both are Russian heptapeptides with Pro-Gly-Pro stabilization. Selank is derived from tuftsin and primarily acts on GABA and serotonergic systems — best for anxiety without sedation. Semax is derived from ACTH(4-7) and primarily targets BDNF and dopaminergic systems — best for cognitive enhancement and stroke recovery. They are commonly stacked: Semax morning for focus, Selank later for calm.",
  },
  {
    q: "Will Selank make me drowsy?",
    a: "No — this is its key advantage over benzodiazepines and most prescription anxiolytics. Selank reduces anxiety while preserving alertness and cognitive function. Some users report mild stimulating effect, which is why morning/afternoon dosing is preferred over late evening.",
  },
  {
    q: "How quickly does it work?",
    a: "Anxiolytic effects are typically reported within 10–30 minutes of intranasal dosing. Many users notice calm from the first dose. Cumulative cognitive and stress-resilience benefits build over the standard 14-day course.",
  },
  {
    q: "Does Selank cause dependence?",
    a: "No. Russian clinical studies spanning decades have documented no tolerance development, no physical dependence, and no withdrawal syndrome. This is a defining advantage over benzodiazepines and other GABAergic anxiolytics.",
  },
  {
    q: "Should I cycle Selank?",
    a: "Russian clinical protocols use fixed 14-day courses with breaks. Outside Russia, the 2-week-on/2-week-off pattern is common. Continuous long-term use beyond several months has limited published data — cycling is the conservative approach.",
  },
  {
    q: "Where can I buy Selank?",
    a: (
      <>
        Outside Russia, Selank is sold by specialty research peptide vendors as research-grade material. Choose vendors that provide third-party testing (HPLC purity, mass spectrometric identity confirmation). PP maintains a list of vetted vendors with verified discount codes — see{" "}
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const sections = [
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "GABAergic Modulation [1] — Selank acts as a positive allosteric modulator of GABA-A receptor signaling without binding the benzodiazepine site. This produces anxiolytic effects without the sedation, cognitive impairment, and dependence associated with benzodiazepines.",
      "Serotonin Metabolism [2] — Russian studies report increased 5-HIAA to serotonin ratios in the hypothalamus and striatum, indicating accelerated serotonin turnover. Dopamine metabolism shifts in the same direction.",
      "BDNF Upregulation [3] — Single intranasal Selank doses produce measurable upregulation of BDNF and NGF mRNA in the hippocampus within hours. This contributes to the cognitive-supportive effects observed clinically.",
      "Enkephalinase Inhibition [4] — Like Semax, Selank inhibits enzymes that degrade endogenous enkephalins, prolonging their activity. This contributes to anti-stress effects through endogenous opioid system modulation.",
      "Immunomodulation [5] — As a tuftsin analog, Selank retains immunomodulatory properties. It enhances phagocytic activity of monocytes and neutrophils, modulates IL-6 expression, and influences T-helper cell cytokine balance.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Generalized Anxiety Disorder [6] — Russian non-inferiority clinical trial in 62 GAD patients (Zozulya et al. 2008) showed Selank produced anxiolytic effects comparable to medazepam (a benzodiazepine), with additional antiasthenic and psychostimulant properties. Russian regulatory approval is based on this evidence.",
      "Cognitive Performance Under Stress [7] — Animal and human studies show Selank preserves or improves cognitive performance in elevated plus maze, light-dark box, open field, and human stress paradigms. Unlike benzodiazepines, no cognitive impairment occurs.",
      "Neurasthenia and Asthenic Syndrome — Approved Russian indication. Standard dosing for 14 days has shown efficacy in neurasthenia (chronic fatigue with cognitive features) without the sedating effects of conventional treatments.",
      "BDNF and Plasticity [3] — Mechanism studies establish Selank's BDNF effects parallel those of Semax, but with stronger anxiolytic phenotype. Combined Semax+Selank protocols leverage complementary mechanisms.",
      "Cytokine Modulation — Tuftsin-derived immunomodulatory activity is documented in research. Selank has been explored as adjunctive treatment during viral infections, though clinical evidence remains limited.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "Selank effects develop quickly. Anxiolytic effects are typically reported within 10–30 minutes of intranasal dosing. Subjective calm and reduced anxiety often appear within the first dose. Cumulative benefits build over the standard 14-day course. Cognitive and immune effects develop over days to weeks of consistent dosing. Russian clinical protocols use fixed 14-day courses with no tolerance development reported.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Selank is administered intranasally as a 0.15% solution (1.5 mg/mL). The intranasal route allows partial nose-to-brain transport via olfactory and trigeminal pathways. Subcutaneous administration is also used in research contexts. Oral bioavailability is effectively zero.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standard intranasal protocol (Russian approved): 250–300 mcg per nostril, 2–3 times daily, for 14-day courses. Approximates 1,500–2,250 mcg/day total.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Lower-end starting dose: 200 mcg per nostril, 2× daily — for first-time users to assess tolerance.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Subcutaneous research dosing: 250–500 mcg per injection, once daily.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Course length: 14 days standard. Cycling: 2–4 weeks on, 2–4 weeks off, mirrors Russian clinical protocols. No tolerance reported in clinical studies.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Empty stomach not required: Selank effects are independent of food timing.</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Russian clinical practice typically uses fixed 14-day courses for GAD or neurasthenia. Outside Russia, biohacker protocols often run continuous low-dose for several weeks then take a break. The 2-week-on/2-week-off cycle is conservative given limited long-term Western data, even though no tolerance has been documented.
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side Effects & Safety",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild nasal irritation (intranasal route)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild stimulating effect (avoid late evening dosing)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Slight headache (especially first doses)</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild fatigue after end of dosing course</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Transient mild dizziness</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild gastrointestinal discomfort</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No serious adverse events documented in Russian clinical trials</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No physical dependence or withdrawal symptoms reported</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Long-term safety beyond 14-day courses in healthy individuals not formally established</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Selank has one of the cleanest safety profiles of any anxiolytic compound. Russian clinical use spanning decades has documented no addictive potential, no tolerance development, no withdrawal syndrome, and no significant cognitive or motor impairment. This combination of efficacy and safety profile is unusual among anxiety treatments — most options carry sedation, dependence risk, or both. Western-standard long-term safety data remains limited.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Intranasal (preferred — fastest CNS access via nose-to-brain transport) or subcutaneous injection.",
      "Time of day: Morning and afternoon. Avoid late evening dosing — Selank can have mild stimulating effect that may affect sleep.",
      "Intranasal technique: Tilt head slightly back. Apply 1–2 drops per nostril. Do not blow nose for 30+ minutes after dosing.",
      "Reconstitution: For 0.15% solution: 5 mg vial + 3.3 mL bacteriostatic water = 1.5 mg/mL (~75 mcg per drop in standard nasal dropper).",
      "Site rotation (subcutaneous): Use a different site each injection (abdomen, thigh, upper arm).",
      "Missed dose: Skip and resume next scheduled dose. Effects are cumulative across the 14-day course.",
      "Cycle: 14 days standard, with 2–4 week breaks between courses.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Semax — the gold standard pairing. Semax for cognitive enhancement (morning) + Selank for calm (afternoon/evening). The two work via complementary mechanisms (BDNF/dopamine vs GABA/serotonin) without redundancy. See{" "}
          <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">
            Semax
          </Link>
          .
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">BPC-157 — generally compatible; no direct interaction. Common in general health/recovery stacks.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">L-Theanine — additive calming effect; safe combination.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Adaptogenic herbs (rhodiola, ashwagandha) — generally compatible. Some users report potentiated stress resilience.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Caffeine — Selank counterbalances jitter from caffeine while preserving cognitive benefit.</li>
      </ol>
    ),
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Benzodiazepines — both modulate GABA but at different sites. Combination is theoretically additive but not redundant. Limited safety data on combination.",
      "SSRIs and serotonergic medications — Selank modulates serotonin metabolism; combine cautiously.",
      "Alcohol — limited data; theoretical additive sedation possible at high doses.",
      "No major drug-drug interactions reported in published research.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted nasal solution: Store at 2–8°C; use within 14–28 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Never freeze reconstituted solution.",
      "Protect from light. Store in original carton or amber dropper bottle.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Selank is approved in Russia as a prescription anxiolytic for generalized anxiety disorder and neurasthenia. It is NOT FDA-approved in the United States. Most clinical evidence comes from Russian-language studies — including the key non-inferiority trial vs medazepam (Zozulya et al. 2008, n=62) — that have not been independently replicated in large Western trials.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The mechanism of GABA modulation is incompletely characterized. Selank&apos;s exact binding site on GABA-A is unclear — it does NOT bind the benzodiazepine site, which would explain the lack of sedation and dependence, but the alternative site has not been definitively identified.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade material sold outside Russian pharmaceutical channels is intended for laboratory use only. Purity and potency vary by vendor — third-party testing is recommended.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency does not currently include Selank on the prohibited list.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              {f.a}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "references",
    title: "References",
    node: (
      <ol className="list-decimal list-inside space-y-2">
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Selank.{" "}
          <a href="https://en.wikipedia.org/wiki/Selank" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Selank
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Kozlovskaya MM, Kozlovskii II, Val&apos;dman EA, Seredenin SB. Selank and short peptides of the tuftsin family in the regulation of adaptive behavior in stress. Neurosci Behav Physiol. 2003;33(9):853-60.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/14969416/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/14969416/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Inozemtseva LS, Karpenko EA, Dolotov OV, et al. Intranasal administration of the peptide Selank regulates BDNF expression in the rat hippocampus in vivo. Dokl Biol Sci. 2008;421:241-3.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18841779/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18841779/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Kost NV, Sokolov OY, Gabaeva MV, et al. Semax and selank inhibit the enkephalin-degrading enzymes from human serum. Russ J Bioorg Chem. 2001;27(3):180-3.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11443939/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11443939/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Kolomin T, Shadrina M, Slominsky P, Limborska S. A new generation of drugs: synthetic peptides based on natural regulatory peptides. Neuroscience and Medicine. 2013;4:223-252.{" "}
          <a href="https://www.scirp.org/journal/paperinformation.aspx?paperid=42089" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.scirp.org/journal/paperinformation.aspx?paperid=42089
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Zozulya AA, Neznamov GG, Siuniakov TS, et al. Efficacy and possible mechanisms of action of a new peptide anxiolytic selank in the therapy of generalized anxiety disorders and neurasthenia. Zh Nevrol Psikhiatr Im S S Korsakova. 2008;108(4):38-48.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18454097/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18454097/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Volchegorskii IA, Miroshnichenko IY, Rassokhina LM, Faizullin RM. Anxiolytic and antidepressant action of selank in alloxan diabetes-induced cognitive deficit. Bull Exp Biol Med. 2017;164(2):137-141.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29177900/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29177900/
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function SelankPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Selank","description":"Selank research profile: GABAergic anxiolysis without sedation, intranasal dosing protocol, Semax stack, Russian clinical history, side effects.","url":"https://profpeptide.com/peptides/selank","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Selank"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Selank</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: TP-7, Tuftsin Analog, Russian Anxiolytic Peptide
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Selank is a synthetic heptapeptide (Thr-Lys-Pro-Arg-Pro-Gly-Pro) developed in the 1990s at the Institute of Molecular Genetics of the Russian Academy of Sciences. It combines tuftsin (an endogenous immunomodulatory tetrapeptide derived from immunoglobulin G) with the same Pro-Gly-Pro stabilizing tail used in Semax. Selank produces anxiolytic effects comparable to benzodiazepines like medazepam in Russian clinical trials — but without sedation, cognitive impairment, tolerance, or withdrawal. It is approved in Russia for generalized anxiety disorder (GAD) and neurasthenia. The peptide also retains immunomodulatory activity from its tuftsin parent, making it pharmacologically unique among anxiolytics.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Anxiolytic effect comparable to medazepam in clinical studies</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No sedation, cognitive impairment, or motor effects</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No tolerance, dependence, or withdrawal</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">BDNF upregulation in hippocampus</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Modulates GABA-A receptor signaling, serotonin, and dopamine</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Immunomodulation (IL-6 modulation, T-helper balance) from tuftsin parent</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Standard intranasal protocol: 200–500 mcg per nostril, 2–3 times daily, administered as 0.15% solution. Standard course: 14 days. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Selank is approved as a prescription medication in Russia but not FDA-approved in the US. It is sold by specialty research peptide vendors as research-grade material. See{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current options.
          </p>
        </div>
      </div>

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.node && s.node}
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
        {["Cognitive & Nootropic", "Anxiolytic", "Russian-Approved", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/semax" className="text-sm font-medium text-[#0891b2] hover:underline">Semax</Link>
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157</Link>
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#0891b2] hover:underline">Wolverine Stack</Link>
        </div>
      </div>

<div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
          Need to calculate a dose?
        </p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution
          and dosing math.
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
            href="https://www.amazon.com/s?k=cognitive+nootropic+supplements&tag=profpeptide-20"
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
