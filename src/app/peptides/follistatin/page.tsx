import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/follistatin" },
  title: "Follistatin — FS-344 Myostatin Inhibitor, Mechanism, Dosage | Prof. Peptide",
  description:
    "Follistatin (FS-344) research profile: myostatin inhibition mechanism, dosing protocol, gene therapy data, side effects, and clinical evidence.",
};

const faqs = [
  {
    q: "What's the difference between FS-344, FS-315, and FS-288?",
    a: "FS-344 is the 344-amino-acid precursor protein that's the standard injectable form. After injection, it's cleaved in vivo into FS-315 (the 315-amino-acid circulating isoform that targets muscle and binds myostatin systemically) and FS-288 (the 288-amino-acid tissue-bound isoform that concentrates in reproductive tissue and binds activin). Injecting FS-344 produces both — you can't get pure myostatin inhibition without some activin/reproductive effect.",
  },
  {
    q: "Does the injectable peptide work as well as gene therapy?",
    a: "Almost certainly not. Gene therapy with AAV1-FS344 produces sustained follistatin expression for 15+ months from a single dose, generating dramatic muscle growth (15% circumference in primates, improved ambulation in BMD patients). Injectable FS-344 has a 90-minute half-life and clears rapidly, so effects are far more modest. Most reliable injectable peptide effects are seen in 2–4 week pulses combined with training.",
  },
  {
    q: "Will follistatin affect my fertility?",
    a: "Possibly. Follistatin binds activin, which regulates FSH (follicle-stimulating hormone). Activin pathway modulation can affect reproductive hormones during use. Most reported effects are transient and resolve after cycling off. If fertility is an active concern, monitor reproductive hormones during cycles or consider alternative compounds. The FS-288 isoform (which concentrates in gonads) is the source of most reproductive effect.",
  },
  {
    q: "Why is follistatin so expensive?",
    a: "Follistatin is a 344-amino-acid glycoprotein, one of the largest research peptides. It requires recombinant expression in mammalian or yeast systems rather than standard solid-phase peptide synthesis. The production complexity drives cost — extremely cheap product is suspect for purity or content.",
  },
  {
    q: "How long are typical cycles?",
    a: "10–30 days on, 3–4 weeks off (off-period 2–3x the cycle length). Most experienced users run shorter cycles — 10–14 days — to limit reproductive hormone effects and rotate through other compounds. Continuous use is not studied and not recommended.",
  },
  {
    q: "Is follistatin the same as myostatin inhibitors like ACE-031 or YK11?",
    a: "Different mechanisms in the same general direction. Follistatin is the natural endogenous myostatin inhibitor — it binds and neutralizes myostatin directly. ACE-031 (a soluble decoy receptor) and YK11 (a SARM) target the myostatin pathway through different mechanisms with different side effect profiles. Follistatin has the most direct mechanism but the most uncertain injectable peptide human data.",
  },
  {
    q: "Can follistatin be stacked with IGF-1 LR3?",
    a: "Yes — this is one of the most mechanistically complementary stacks. Follistatin removes the myostatin growth ceiling; IGF-1 LR3 amplifies the growth signal directly through IGF-1 receptors. Some users combine both with GH secretagogues for an aggressive anabolic protocol. Side effects compound — careful cycling and dose titration are essential.",
  },
  {
    q: "Where can I buy follistatin?",
    a: (
      <>
        Follistatin is sold by specialty research peptide vendors. Counterfeit and underdosed product is common — verify Certificate of Analysis before purchase. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "Myostatin Neutralization [1] — Follistatin binds myostatin with extremely high affinity (Kd ~5–10 pM), forming a complex that prevents myostatin from binding to its receptor (ActRIIB) on muscle cells. With the myostatin signal blocked, muscle protein synthesis tilts toward net accretion.",
      "Activin A Binding [2] — Follistatin also binds activin A, which has additional growth-suppressive effects beyond myostatin. The dual mechanism is part of why follistatin produces greater muscle effects than myostatin-only inhibitors.",
      "Isoform Cleavage [1][3] — Injected FS-344 is cleaved in vivo into two functional isoforms: FS-315 (the circulating form, lower affinity for activin) and FS-288 (tissue-bound, higher affinity for activin, concentrates in gonads). FS-315 is responsible for systemic muscle effects; FS-288 carries reproductive-tissue activity.",
      "Satellite Cell Proliferation [4] — Follistatin promotes satellite cell (muscle stem cell) proliferation, supporting muscle regeneration and enabling hyperplasia (new muscle fiber formation) in addition to hypertrophy.",
      "ActRIIB Pathway Modulation [3] — By blocking myostatin's binding to ActRIIB, follistatin prevents the downstream cascade that activates SMAD2/3 transcription factors and ultimately the gene expression patterns that limit muscle growth.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Muscular Dystrophy Gene Therapy [3] — The strongest follistatin clinical evidence comes from AAV1-FS344 gene therapy trials in Becker muscular dystrophy patients (Mendell et al., Mol Ther 2015). Patients showed improved ambulation and increased muscle strength after a single intramuscular injection of the gene therapy vector.",
      "Primate Muscle Growth [5] — In cynomolgus macaque monkeys, AAV1-FS344 gene therapy injected into the quadriceps produced 15% circumference increase at 8 weeks, with effects persisting 15+ months from a single dose. The study demonstrated both efficacy and long-term safety.",
      "Mighty Mice Studies — Mice with FS-344 overexpression showed up to 2x normal muscle mass. Mice with both myostatin deletion AND FS-344 overexpression showed nearly 4x normal muscle mass, suggesting follistatin works through additional pathways beyond pure myostatin inhibition.",
      "Sarcopenia and Aging Models — Follistatin is studied in age-related muscle wasting models. Theoretical applications in elderly populations are promising but unvalidated for injectable peptide use.",
      "Injectable Peptide Human Data [6] — Minimal. Most peer-reviewed follistatin human data comes from gene therapy approaches. The injectable peptide form (FS-344) has a ~90-minute half-life and limited published efficacy data, with most use coming from research and bodybuilding communities.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "Follistatin effects develop over the cycle. Most users report noticeable strength and muscle fullness within the first 2 weeks of consistent dosing. Gene therapy studies (which produce sustained expression) showed measurable changes by week 8. Injectable peptide effects are likely much more modest than gene therapy results due to the short half-life and rapid clearance. Most reliable effects come when paired with consistent resistance training, adequate calories, and sufficient protein intake.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Follistatin (FS-344) is administered as a daily subcutaneous injection. The 90-minute half-life requires daily dosing during cycles to maintain effective levels. Dosing protocols are derived from community/research practice rather than validated clinical trials.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Conservative starting dose: 100 mcg per day for the first cycle to assess tolerance and response</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standard dose: 100–200 mcg per day</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Maximum recommended: 200 mcg per day; doses above this have been associated with adverse events including a case report of central serous chorioretinopathy (vision impairment) at 1 mg single dose</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: 10–30 days on, with off-periods 2–3 times the cycle length (typically 3–4 weeks off)</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Continuous use is not studied and not recommended</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Cycle structure rationale: follistatin cycling is designed to allow the body to re-establish baseline myostatin levels and any reproductive hormone changes to normalize. Some users do shorter, more frequent pulses (e.g., 10 days on, 3 weeks off, repeated) for sustained effect with reduced reproductive impact. Most experienced users keep cycles short — 10–14 days — and stack with longer-cycle compounds rather than running follistatin alone for extended periods.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild injection site reactions</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Headache or fatigue during cycles</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild flu-like symptoms (uncommon)</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reproductive hormone changes — follistatin binds activin, which regulates FSH. Changes in FSH and downstream reproductive hormones can occur during use</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Joint pain or stiffness</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild bloating or fluid retention</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Central serous chorioretinopathy (vision impairment) — case report at 1 mg single dose (10x typical), resolved after discontinuation. Never exceed 200 mcg/day</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical risk of fertility effects from sustained activin pathway modulation</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical risk of accelerated growth in pre-existing tumors due to satellite cell and growth pathway activation</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Follistatin&apos;s safety profile is the most uncertain among muscle-building peptides because injectable peptide human data is minimal. Gene therapy approaches have shown clean safety profiles in primates and Becker muscular dystrophy patients, but those results don&apos;t directly translate to injectable peptide use. Reproductive considerations are real — monitor reproductive hormones if fertility is a concern. Cycling on/off is essential, not optional.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin). Common injection sites: abdomen, thigh, upper arm.",
      "Time of day: Any time, but consistent. Many users inject morning or post-workout.",
      "With or without food: Either is fine.",
      "Site rotation: Use a different site each day to reduce irritation.",
      "Reconstitution: Use bacteriostatic water for injection. Add water slowly down the inside wall of the vial — do not spray directly onto powder. Gently swirl or roll until dissolved. Do not shake — follistatin is a large protein that denatures with rough handling.",
      "Typical reconstitution: 1 mg vial + 2 mL BAC water = 500 mcg/mL. A 100 mcg dose = 0.20 mL on a U-100 insulin syringe.",
      "Missed dose: Skip and resume next day. Do not double-dose.",
      "Cycle: 10–30 days on, 3–4 weeks off. Avoid continuous use.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "IGF-1 LR3 — direct synergy. Follistatin removes the myostatin growth ceiling; IGF-1 LR3 amplifies the growth signal. The most mechanistically complementary stack for advanced muscle-building research.",
      "GH secretagogues (CJC-1295, Ipamorelin, MK-677) — combined for systemic growth hormone elevation alongside myostatin inhibition. Different pathways, additive effects.",
      "BPC-157 / TB-500 — paired for recovery support during anabolic cycles. The healing peptides accelerate tissue repair while follistatin removes growth limits.",
      "Resistance training + adequate protein — essential. Aim for 1.6–2.2 g protein per kg bodyweight. Without training stimulus, follistatin's effects are minimal.",
      "Avoid stacking with multiple myostatin-targeting compounds simultaneously — redundant mechanism, increased side effect risk without proportional benefit.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Reproductive hormone medications — follistatin's activin binding affects FSH regulation. Theoretical interaction with fertility treatments, hormonal contraceptives, or testosterone-related medications.",
      "Other myostatin pathway compounds — combination is redundant; not recommended.",
      "Anabolic-androgenic steroids — theoretical synergy via different mechanisms; combination increases overall side effect risk.",
      "No major drug-drug interactions reported in published research.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; 2–8°C acceptable for short-term.",
      "Reconstituted solution: Refrigerate at 2–8°C; use within 7–14 days (shorter than most peptides because follistatin is a fragile glycoprotein).",
      "Reconstitute with bacteriostatic water for injection (BAC water). Add water slowly down the inside wall of the vial. Gently swirl — do not shake.",
      "Never freeze reconstituted solution.",
      "Protect from light. Store in original carton.",
      "Discard if cloudy, discolored, or contains particles. Follistatin is more prone to denaturation than smaller peptides.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Follistatin (FS-344) injectable peptide is not FDA-approved for any human use. The strongest clinical evidence for follistatin comes from AAV1-FS344 gene therapy trials in Becker muscular dystrophy, not injectable peptide use. Gene therapy provides sustained expression for months from a single dose; injectable peptide has a 90-minute half-life requiring daily injection.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Most injectable peptide use sits outside published research. Effects on muscle in humans from subcutaneous injection are not formally validated through controlled trials. Doses, cycles, and outcomes are derived from research community practice rather than clinical evidence.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency added follistatin to the prohibited list in 2019 under Section S2 (peptide hormones). Subject to doping detection methods.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Counterfeit follistatin is common in the gray market. Recombinant production is expensive — extremely cheap product is suspect. Certificate of Analysis verification is critical.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade material is sold for laboratory use only and is not approved for human consumption.
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
          Rodino-Klapac LR, Haidet AM, Kota J, et al. Inhibition of myostatin with emphasis on follistatin as a therapy for muscle disease. Muscle Nerve. 2009;39(3):283-96.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2717722/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC2717722/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Lee SJ. Quadrupling muscle mass in mice by targeting TGF-β signaling pathways. PLoS One. 2007;2(8):e789.{" "}
          <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0000789" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0000789
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Mendell JR, Sahenk Z, Malik V, et al. A phase 1/2a follistatin gene therapy trial for Becker muscular dystrophy. Mol Ther. 2015;23(1):192-201.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5240576/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC5240576/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Iezzi S, Di Padova M, Serra C, et al. Deacetylase inhibitors increase muscle cell size by promoting myoblast recruitment and fusion through induction of follistatin. Dev Cell. 2004;6(5):673-84.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/15130492/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/15130492/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Kota J, Handy CR, Haidet AM, et al. Follistatin gene delivery enhances muscle growth and strength in nonhuman primates. Sci Transl Med. 2009;1(6):6ra15.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2852878/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC2852878/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Datta-Mannan A, Yaden B, Krishnan V, et al. An engineered human follistatin variant: insights into the pharmacokinetic and pharmacodynamic relationships of a novel molecule with broad therapeutic potential. J Pharmacol Exp Ther. 2013;344(3):616-23.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23230213/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23230213/
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function FollistatinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Follistatin","description":"Follistatin (FS-344) research profile: myostatin inhibition mechanism, dosing protocol, gene therapy data, side effects, and clinical evidence.","url":"https://profpeptide.com/peptides/follistatin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Follistatin"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Follistatin</h1>
        <span className="tag">Performance &amp; Energy</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: FS-344, Follistatin 344, Myostatin Inhibitor
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Follistatin is a naturally occurring single-chain glycoprotein that functions as a potent inhibitor of the myostatin pathway. Myostatin is the body&apos;s primary negative regulator of skeletal muscle growth — it places a ceiling on how much muscle a person can build. By binding and neutralizing myostatin, follistatin allows muscle growth beyond normal genetic limits. The injectable research form is FS-344, a 344-amino-acid precursor protein that the body cleaves into two functional isoforms: FS-315 (circulating, muscle-targeting) and FS-288 (tissue-bound, gonad-concentrated). Strong gene therapy data exists in primates (15% muscle growth persisting 15+ months) and Becker muscular dystrophy patients; injectable peptide human data is minimal.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Inhibits myostatin, removing the body&apos;s primary muscle growth ceiling</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Enables both hypertrophy (bigger fibers) and hyperplasia (more fibers)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Inhibits activin A, providing dual-action anti-catabolic effect</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Promotes satellite cell proliferation for enhanced muscle regeneration</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reduces fat deposition (myostatin deficiency lowers adipogenesis)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Strong gene therapy efficacy data in primates and humans</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Most research protocols use 100–200 mcg per day administered subcutaneously, in 10–30 day cycles followed by 3–4 weeks off. Daily dosing is required because the injectable peptide has a ~90-minute half-life. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Follistatin is not FDA-approved and is sold only as a research-grade peptide. It is one of the most expensive research peptides per milligram due to recombinant production complexity. See{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current research-grade options.
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
        {["Muscle Growth", "Myostatin Inhibitor", "Anabolic", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/igf-1-lr3" className="text-sm font-medium text-[#0891b2] hover:underline">IGF-1 LR3</Link>
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295</Link>
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Ipamorelin</Link>
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
            href="https://www.amazon.com/s?k=performance+energy+supplements&tag=profpeptide-20"
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
