import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/dsip" },
  title: "DSIP — Delta Sleep-Inducing Peptide, Mechanism, Dosage | Prof. Peptide",
  description:
    "DSIP (Delta Sleep-Inducing Peptide) research profile: sleep modulation mechanism, dosing protocol, FDA immunogenicity flag, side effects.",
};

const faqs = [
  {
    q: "Does DSIP actually induce sleep?",
    a: "The original name reflects the 1977 discovery context — DSIP was isolated from rabbits in deep delta-wave sleep. Modern research describes DSIP more accurately as a sleep-modulating substance that improves disturbed sleep with minimal effect on healthy sleepers. It is NOT a direct sedative like a benzodiazepine. Some research even shows DSIP given during the day produces improved sleep on the next night — suggesting downstream regulatory effects, not acute sedation.",
  },
  {
    q: "Is DSIP safe?",
    a: "Long-term safety is not established. Available animal studies show low acute toxicity, but the FDA has explicitly flagged DSIP for potential immunogenicity — meaning the body may mount an immune response. Most modern human clinical experience is anecdotal and limited. DSIP has the weakest safety database of any peptide on Prof. Peptide.",
  },
  {
    q: "How does DSIP differ from melatonin?",
    a: "Mechanism completely different. Melatonin regulates sleep timing through circadian receptors. DSIP appears to affect sleep depth and recovery quality, with possible anti-stress and hormonal effects. Melatonin has decades of human safety data; DSIP has very limited modern human research. Melatonin is generally a safer first choice for sleep difficulty.",
  },
  {
    q: "Why does DSIP appear in breast milk?",
    a: "DSIP-like substances are present in human breast milk at higher concentrations than in plasma. Some researchers have hypothesized this contributes to post-feeding sleep tendencies in newborns, though this remains unproven.",
  },
  {
    q: "What's the right dose?",
    a: "There is no standardized clinical dose. Original IV human studies used 25 nmol/kg (~21 mcg/kg). Modern subcutaneous protocols typically use 100–200 mcg per dose, but this is derived from biohacker community reports rather than clinical trials. Start low (50–100 mcg) and titrate up only if needed.",
  },
  {
    q: "Should I take DSIP daily?",
    a: "Continuous daily long-term use lacks safety data. Most protocols use 5–7 days on with breaks. Given the FDA's immunogenicity flag and limited human clinical experience, conservative cycling is the prudent approach.",
  },
  {
    q: "How does DSIP compare to other sleep peptides?",
    a: "DSIP is the only widely-discussed 'sleep peptide' with substantial historical research. Other sleep-related peptides (orexin antagonists, melatonin analogs) work through different mechanisms and have stronger clinical evidence. For severe sleep disturbance, DSIP should NOT be a first-line option — established treatments with FDA approval and known safety profiles are safer choices.",
  },
  {
    q: "Where can I buy DSIP?",
    a: (
      <>
        DSIP is not FDA-approved and is sold by specialty research peptide vendors. Quality varies and the FDA has flagged immunogenicity concerns — third-party testing is especially important. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "Sleep Modulation [1] — DSIP acts more as a sleep-promoting substance than a direct sedative. Its activity is greatest in subjects with disturbed sleep, with minimal effect on healthy sleepers. A dose given during the day may improve sleep on subsequent nights — suggesting downstream regulatory effects rather than acute sedation.",
      "Receptor Mechanism Unclear — DSIP's molecular targets are incompletely characterized. Its effects may involve NMDA receptors, GABA-A and glycine receptor sites, and α1-adrenergic receptors. The mechanism by which it modulates sleep architecture is not definitively established.",
      "Stress Axis Modulation [2] — DSIP decreases basal corticotropin levels and blocks ACTH release. It reduces CRF-induced corticosterone release. This anti-stress effect may be primary, with sleep effects emerging downstream of stress reduction.",
      "Antioxidant Activity [3] — DSIP has been shown to enhance the efficiency of oxidative phosphorylation in rat mitochondria and activate natural antioxidant mechanisms. A 2011 study concluded a 'strong antioxidant effect' in rat models.",
      "Hormonal and Endocrine Effects — DSIP has been observed to stimulate luteinizing hormone (LH) release, stimulate somatotrophin (GH) secretion via GHRH-like effect, and inhibit somatostatin secretion. It also normalizes blood pressure and myocardial contraction in some models.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Disturbed Sleep [4] — Early human research showed DSIP improved sleep in chronic insomnia patients and normalized disturbed sleep patterns. The effect is most pronounced in patients with sleep disturbance rather than healthy sleepers.",
      "Stress and Anxiolytic Effects [2] — Russian research has explored DSIP's role in stress resistance. The peptide blocks corticotropin and reduces stress hormones in animal models, and has been associated with anxiolytic effects in rodent paradigms.",
      "Cerebral Ischemia and Stroke [5] — Multiple Russian studies show DSIP reduces ischemic damage in stroke models. A 2021 MDPI study showed intranasal DSIP improved motor function recovery in rats after focal stroke.",
      "Antinociception (Pain Reduction) [6] — Centrally administered DSIP shows antinociceptive (pain-reducing) effects in animal pain models. Mechanism unclear.",
      "Geroprotection — A long-term mouse study showed DSIP injections decreased spontaneous tumor incidence 2.6-fold, slowed age-related estrous decline, decreased chromosome aberrations 22.6%, and increased maximum lifespan 24.1%. Limited replication and species generalizability.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "DSIP effects develop on multiple timescales. Acute effects on disturbed sleep may appear from the first dose, though the most consistent reports describe improved sleep over the following 1–7 days. Some research suggests DSIP given during the day produces improved sleep on subsequent nights — implying delayed/downstream effects rather than direct sedation. Long-term effects (stress resilience, antioxidant) build over weeks. The peptide's plasma half-life is short, but biological effects persist much longer than pharmacokinetics would predict.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          DSIP is typically administered as a subcutaneous injection at bedtime. Intravenous and intranasal routes have also been used in research. There is no standardized dosing protocol — most ranges come from limited human studies and biohacker reports.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standard research dose: 100–200 mcg subcutaneously at bedtime</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Higher dose ranges: 250–500 mcg subcutaneously, used in some sleep protocols</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Original IV human studies: 25 nmol/kg intravenously (~0.025 mcmol/kg = ~21 mcg/kg) — much lower than typical SC dosing</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: 5–7 days on, with breaks. Continuous daily long-term use is uncommon and lacks safety data.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Intranasal use: 100–250 mcg before bed, similar to SC dosing</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          DSIP dosing is among the least standardized of any peptide on Prof. Peptide. Original research used IV doses in nmol/kg ranges that don&apos;t translate cleanly to subcutaneous mcg dosing. Most modern protocols are derived from biohacker community reports rather than clinical trials. Start at the low end (50–100 mcg) for first-time use and titrate up only if needed.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Daytime drowsiness if dose is too high or mistimed</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild headache or dizziness</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild gastrointestinal discomfort, nausea (occasional)</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hormonal fluctuations (DSIP affects LH, GH, somatostatin)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild fluid retention</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild fatigue or grogginess</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Potential immunogenicity — FDA has flagged DSIP for risk of immune-mediated adverse reactions</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Long-term safety unknown — most research is short-term animal studies</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No published cases of severe adverse events from DSIP, though clinical experience is very limited</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          DSIP has the weakest safety database of any peptide on Prof. Peptide. The FDA has explicitly flagged DSIP for potential immunogenicity in compounded preparations — meaning the body may mount an immune response that is potentially serious. Most published safety data comes from short-term animal studies and limited human research from the 1980s–1990s. Long-term effects are unknown. The 2001 European Journal of Anaesthesiology editorial described DSIP as &ldquo;incredibly safe&rdquo; based on the lack of acute toxicity in animal studies, but the absence of harm signals in limited research is not the same as proven long-term safety.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection at bedtime is the most common route. Intranasal also used.",
      "Time of day: 30–60 minutes before sleep. Some protocols use daytime dosing for the next-night effect.",
      "With or without food: Either is fine — DSIP can be absorbed orally (unusual for a peptide), but injection is preferred for research dosing.",
      "Site rotation: Use a different site each injection (abdomen, thigh, upper arm).",
      "Reconstitution: 5 mg vial + 2.5 mL bacteriostatic water = 2 mg/mL (200 mcg per 0.1 mL on U-100 insulin syringe).",
      "Missed dose: Skip and resume next scheduled dose. Do not double-dose.",
      "Cycle: 5–7 days on, with breaks. Avoid continuous daily long-term use given limited safety data.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "Magnesium glycinate — additive sleep support; common safe combination.",
      "L-Theanine — additive calming effect; safe combination.",
      "BPC-157 — different mechanism (healing/gut) — no direct interaction. Compatible in general protocols.",
      "Selank — anxiolytic effect may complement DSIP's stress-reduction; no published interaction data.",
      "Avoid stacking with sedatives, benzodiazepines, alcohol — possible additive sedation risk.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Sedatives and benzodiazepines — possible additive CNS depression; combine with caution.",
      "Alcohol — limited data; avoid combination given DSIP's CNS effects.",
      "Hormonal medications — DSIP affects LH, GH, somatostatin; theoretical interaction with hormone replacement or fertility treatments.",
      "No major drug-drug interactions formally documented (largely because DSIP has limited modern clinical study).",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted solution: Store at 2–8°C; use within 14–28 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Never freeze reconstituted solution.",
      "Protect from light. Store in original carton.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          DSIP has one of the weakest evidence bases of any peptide on Prof. Peptide. It is NOT FDA-approved for any human use. The FDA has explicitly flagged DSIP-containing compounded drugs for potential immunogenicity risk, meaning the body may perceive DSIP as a threat and mount a potentially serious immune response.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Most published research on DSIP comes from the 1970s–1990s, with limited modern human clinical trials. The mechanism of action remains incompletely characterized after 50 years of research. Some studies failed to replicate the original sleep-promoting findings. Modern reviewers describe DSIP as &ldquo;a fascinating but unfinished chapter in peptide research&rdquo; rather than a proven sleep therapy.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Conflicting evidence exists on DSIP&apos;s involvement in sleep regulation — some studies link it to slow-wave sleep promotion and REM suppression, others show no consistent sleep effects. The original &ldquo;delta sleep-inducing&rdquo; name reflects the discovery context, not validated clinical action.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade DSIP material is sold for laboratory use only. Purity and potency vary by vendor — and given the FDA&apos;s immunogenicity flag, third-party testing is especially important for any DSIP product.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency does not currently include DSIP on the prohibited list, but the peptide&apos;s effects on GH and LH could theoretically have sport-related implications.
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
          Pollard BJ, Pomfrett CJ. Delta sleep-inducing peptide. Eur J Anaesthesiol. 2001;18(7):419-22.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11437868/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11437868/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Graf MV, Kastin AJ, Coy DH, Fischman AJ. Delta-sleep-inducing peptide reduces CRF-induced corticosterone release. Neuroendocrinology. 1985;41(5):353-6.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/2999626/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/2999626/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Delta-sleep-inducing peptide.{" "}
          <a href="https://en.wikipedia.org/wiki/Delta-sleep-inducing_peptide" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Delta-sleep-inducing_peptide
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Schneider-Helmert D. Acute and delayed effects of DSIP (delta sleep-inducing peptide) on human sleep behavior. Int J Clin Pharmacol Ther Toxicol. 1981;19(8):341-5.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/6895513/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/6895513/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Khvatova EM, Belousova ID, Sazanova EI, et al. Delta Sleep-Inducing Peptide Recovers Motor Function in SD Rats after Focal Stroke. Molecules. 2021;26(17):5173.{" "}
          <a href="https://www.mdpi.com/1420-3049/26/17/5173" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.mdpi.com/1420-3049/26/17/5173
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Larbig W, Gerber WD, Kluck M, Schoenenberger GA. Therapeutic effects of delta-sleep-inducing peptide (DSIP) in patients with chronic, pronounced pain episodes. A clinical pilot study. Eur Neurol. 1984;23(5):372-85.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/6437793/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/6437793/
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function DSIPPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"DSIP","description":"DSIP (Delta Sleep-Inducing Peptide) research profile: sleep modulation mechanism, dosing protocol, FDA immunogenicity flag, side effects.","url":"https://profpeptide.com/peptides/dsip","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"DSIP"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">DSIP</h1>
        <span className="tag">Sleep &amp; Recovery</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Delta Sleep-Inducing Peptide, Emideltide, WAGGDASGE
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            DSIP (Delta Sleep-Inducing Peptide) is a naturally occurring nonapeptide (Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu) first isolated in 1977 from the cerebral venous blood of rabbits exhibiting deep slow-wave (delta) sleep. It is found in human brain, plasma, and breast milk. Unlike typical peptides, DSIP can cross the blood-brain barrier and is partially absorbed via the gut. Despite its name and decades of research, DSIP&apos;s role as a primary sleep-regulating compound remains uncertain — modern research describes it more accurately as a sleep-modulating substance that improves disturbed sleep without significantly affecting healthy sleepers. It also has documented anti-stress, antioxidant, and possible neuroprotective effects.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">May improve slow-wave (delta) sleep depth in disturbed sleepers</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Anti-stress: blocks corticotropin release, reduces CRF-induced corticosterone</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Antioxidant effects in animal models</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Possible neuroprotection in stroke models</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Antinociceptive (pain-reducing) effects in animal research</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No sedation in healthy individuals — modulates rather than forces sleep</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Typical research dose: 100–200 mcg subcutaneously at bedtime. Cycle 5–7 days, then break. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> DSIP is not FDA-approved and is sold only as a research-grade peptide. Note that the FDA has flagged DSIP for potential immunogenicity concerns. See{" "}
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
        {["Sleep & Recovery", "Neuropeptide", "Stress Modulation", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/selank" className="text-sm font-medium text-[#0891b2] hover:underline">Selank</Link>
        <Link href="/peptides/semax" className="text-sm font-medium text-[#0891b2] hover:underline">Semax</Link>
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157</Link>
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
            href="https://www.amazon.com/s?k=sleep+recovery+supplements&tag=profpeptide-20"
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
