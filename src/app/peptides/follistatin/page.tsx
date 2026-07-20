import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/follistatin",
  title: "Follistatin — FS-344 Myostatin Inhibitor, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "Follistatin (FS-344) research profile: myostatin inhibition mechanism, dosing protocol, gene therapy data, side effects, FAQ, and current regulatory status.",
});

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
    a: (
      <>
        Yes &mdash; this is one of the most mechanistically complementary stacks. Follistatin removes the myostatin growth ceiling;{" "}
        <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>{" "}
        amplifies the growth signal directly through IGF-1 receptors. Some users combine both with GH secretagogues for an aggressive anabolic protocol. Side effects compound &mdash; careful cycling and dose titration are essential.
      </>
    ),
  },
  {
    q: "Where can I buy follistatin?",
    a: (
      <>
        Follistatin is sold by specialty research peptide vendors. Counterfeit and underdosed product is common &mdash; verify Certificate of Analysis before purchase. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
        <Link href="/coupons" className="text-[#3A759F] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const studies = [
  {
    title: "Follistatin Complexes Myostatin and Antagonises Myostatin-Mediated Inhibition of Myogenesis",
    authors: "Amthor H, et al.",
    journal: "Developmental Biology / PubMed",
    year: "2004",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/15136138/",
    summary: "The foundational study establishing the direct molecular interaction between follistatin and myostatin — the key biological relationship that makes follistatin relevant to muscle growth research. The researchers demonstrated that follistatin binds myostatin with extremely high affinity and physically blocks it from executing its muscle-suppressing function. When chick limb buds were treated with myostatin alone, expression of the myogenic genes Pax-3 and MyoD was severely reduced — but when follistatin was added alongside myostatin, this inhibition was completely blocked. This established follistatin as myostatin’s natural antagonist and the scientific foundation for all subsequent FS344 research.",
  },
  {
    title: "Long-Term Enhancement of Skeletal Muscle Mass and Strength by Single Gene Administration of Myostatin Inhibitors",
    authors: "Haidet AM, Rizo L, Handy C, et al.",
    journal: "Proceedings of the National Academy of Sciences (PNAS) / PMC",
    year: "2008",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2393740/",
    summary: "A landmark study showing that a single intramuscular injection of AAV1-FS344 produced sustained increases in muscle mass and strength for over two years in both normal and dystrophic mice — including when treatment was started in aged animals. FS344 outperformed other myostatin inhibitors (GASP-1, FLRG) in terms of both muscle size and functional strength improvement. Crucially the study found no adverse effects on cardiac pathology or reproductive capacity in male or female treated animals — directly addressing the primary safety concern (FSH suppression) that had limited earlier follistatin research. This paper was the foundation for the first human clinical trial.",
  },
  {
    title: "Inhibition of Myostatin with Emphasis on Follistatin as a Therapy for Muscle Disease",
    authors: "Rodino-Klapac LR, Haidet AM, Kota J, et al.",
    journal: "Muscle & Nerve / PMC",
    year: "2009",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2717722/",
    summary: "A comprehensive review establishing the scientific rationale for FS344 as a muscle disease therapeutic. The paper explains why the FS344 isoform specifically was selected for clinical development — its 10-fold lower affinity for activin compared to FS288 means it is far less likely to suppress FSH and interfere with reproductive function, the primary safety concern with follistatin. The review documents that AAV1-FS344 produced grip strength improvements in treated mice for over two years, and that muscle mass was increased across all treated animals. This paper set the stage for the first human clinical trial.",
  },
  {
    title: "Follistatin Induces Muscle Hypertrophy Through Satellite Cell Proliferation and Inhibition of Both Myostatin and Activin",
    authors: "Gilson H, Schakman O, Kalista S, et al.",
    journal: "American Journal of Physiology — Endocrinology and Metabolism",
    year: "2009",
    access: "Open Access",
    url: "https://journals.physiology.org/doi/full/10.1152/ajpendo.00193.2009",
    summary: "This study revealed that follistatin’s muscle-building effects operate through two distinct mechanisms — myostatin inhibition AND activin inhibition — and that satellite cells (muscle stem cells) play a critical role. FS overexpression increased muscle weight by 37% in normal animals but only 20% in irradiated animals (which lacked functional satellite cells), confirming that satellite cell proliferation drives a significant portion of the hypertrophic effect. Strikingly, FS produced equal muscle hypertrophy in both normal mice AND myostatin knockout mice — proving that follistatin’s muscle growth effects extend well beyond simply blocking myostatin, implicating activin and other TGF-β family members as additional targets.",
  },
  {
    title: "Follistatin Gene Therapy Improves Ambulation in Becker Muscular Dystrophy",
    authors: "Al-Zaidy SA, Sahenk Z, Rodino-Klapac LR, et al.",
    journal: "Journal of Neuromuscular Diseases / PMC",
    year: "2015",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5240576/",
    summary: "The first human clinical trial of follistatin gene therapy — a landmark study delivering FS344 via intramuscular injection to patients with Becker muscular dystrophy. Six patients received bilateral quadriceps injections and were followed for safety and efficacy. The trial demonstrated that FS344 gene delivery was safe and well tolerated in humans, with no adverse reproductive effects or organ toxicity. Functional improvements in ambulation (walking ability) were observed in treated patients. This study represents the bridge between decades of animal research and human clinical application of follistatin — establishing its safety profile in humans for the first time.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Follistatin work?",
    intro:
      "Follistatin works by binding myostatin — the body's natural brake on muscle growth — and preventing it from signaling muscle cells to stop growing. It also binds activin A and promotes satellite cell proliferation, giving it three distinct mechanisms that together produce muscle growth beyond normal genetic limits. The injectable peptide form (FS-344) is cleaved in vivo into two isoforms with different tissue affinities, which is what gives follistatin both its muscle effect and its reproductive-hormone side-effect profile.",
    body: [
      "Myostatin Neutralization [1]. Follistatin binds myostatin with extremely high affinity (Kd ~5–10 pM), forming a complex that prevents myostatin from binding to its receptor (ActRIIB) on muscle cells. With the myostatin signal blocked, muscle protein synthesis tilts toward net accretion.",
      "Activin A Binding [2]. Follistatin also binds activin A, which has additional growth-suppressive effects beyond myostatin. The dual mechanism is part of why follistatin produces greater muscle effects than myostatin-only inhibitors.",
      "Isoform Cleavage [1][3]. Injected FS-344 is cleaved in vivo into two functional isoforms: FS-315 (the circulating form, lower affinity for activin) and FS-288 (tissue-bound, higher affinity for activin, concentrates in gonads). FS-315 is responsible for systemic muscle effects; FS-288 carries reproductive-tissue activity.",
      "Satellite Cell Proliferation [4]. Follistatin promotes satellite cell (muscle stem cell) proliferation, supporting muscle regeneration and enabling hyperplasia (new muscle fiber formation) in addition to hypertrophy.",
      "ActRIIB Pathway Modulation [3]. By blocking myostatin's binding to ActRIIB, follistatin prevents the downstream cascade that activates SMAD2/3 transcription factors and ultimately the gene expression patterns that limit muscle growth.",
    ],
  },
  {
    id: "research",
    title: "What is Follistatin used for?",
    intro:
      "Follistatin's strongest clinical evidence comes from gene therapy approaches in muscular dystrophy and primate models, not injectable peptide use. The injectable form (FS-344) has minimal published human data — most use sits in research and bodybuilding communities. The research areas below cover the published evidence base across gene therapy, animal models, and the limited injectable peptide data that exists.",
    body: [
      "Muscular Dystrophy Gene Therapy [3]. The strongest follistatin clinical evidence comes from AAV1-FS344 gene therapy trials in Becker muscular dystrophy patients (Mendell et al., Mol Ther 2015). Patients showed improved ambulation and increased muscle strength after a single intramuscular injection of the gene therapy vector.",
      "Primate Muscle Growth [5]. In cynomolgus macaque monkeys, AAV1-FS344 gene therapy injected into the quadriceps produced 15% circumference increase at 8 weeks, with effects persisting 15+ months from a single dose. The study demonstrated both efficacy and long-term safety.",
      "Mighty Mice Studies. Mice with FS-344 overexpression showed up to 2x normal muscle mass. Mice with both myostatin deletion AND FS-344 overexpression showed nearly 4x normal muscle mass, suggesting follistatin works through additional pathways beyond pure myostatin inhibition.",
      "Sarcopenia and Aging Models. Follistatin is studied in age-related muscle wasting models. Theoretical applications in elderly populations are promising but unvalidated for injectable peptide use.",
      "Injectable Peptide Human Data [6]. Minimal. Most peer-reviewed follistatin human data comes from gene therapy approaches. The injectable peptide form (FS-344) has a ~90-minute half-life and limited published efficacy data, with most use coming from research and bodybuilding communities.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Follistatin take to work?",
    intro:
      "Follistatin effects develop over the cycle, with most users reporting strength and muscle fullness within 2 weeks of consistent daily dosing. Injectable peptide effects are likely more modest than gene therapy results due to the short half-life and rapid clearance. Pairing with consistent resistance training and adequate protein is essential — without the training stimulus, follistatin removes a ceiling that isn't being pushed against.",
    content:
      "Most users report noticeable strength and muscle fullness within the first 2 weeks of consistent dosing. Gene therapy studies (which produce sustained expression) showed measurable changes by week 8. Injectable peptide effects are likely much more modest than gene therapy results due to the short half-life and rapid clearance. Most reliable effects come when paired with consistent resistance training, adequate calories, and sufficient protein intake — without the training stimulus, follistatin's myostatin inhibition removes a ceiling that isn't being actively pushed against.",
  },
  {
    id: "dosing",
    title: "How is Follistatin dosed?",
    intro:
      "Follistatin (FS-344) is administered as a daily subcutaneous injection during cycles. The ~90-minute half-life requires daily dosing during cycles to maintain effective levels. Cycle structure (10–30 days on, 3–4 weeks off) is standard practice to allow reproductive hormone changes to normalize and to limit cumulative activin pathway modulation. Dosing protocols are derived from community/research practice rather than validated clinical trials.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Conservative starting dose.</span> 100 mcg per day for the first cycle to assess tolerance and response.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard dose.</span> 100–200 mcg per day.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Maximum recommended.</span> 200 mcg per day. Doses above this have been associated with adverse events including a case report of central serous chorioretinopathy (vision impairment) at a 1 mg single dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 10–30 days on, with off-periods 2–3 times the cycle length (typically 3–4 weeks off).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Continuous use.</span> Not studied and not recommended.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Cycle structure rationale: follistatin cycling is designed to allow the body to re-establish baseline myostatin levels and any reproductive hormone changes to normalize. Some users do shorter, more frequent pulses (e.g., 10 days on, 3 weeks off, repeated) for sustained effect with reduced reproductive impact. Most experienced users keep cycles short — 10–14 days — and stack with longer-cycle compounds rather than running follistatin alone for extended periods.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate your dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is Follistatin administered?",
    intro: (
      <>
        Follistatin is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; daily during the cycle, using a small insulin syringe. Reconstitution technique matters more for follistatin than for most peptides: FS-344 is a 344-amino-acid fragile glycoprotein that denatures with rough handling. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection, daily during the cycle. Common sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Any time, but consistent. Many users inject in the morning or post-workout to align peak levels with training stimulus.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Either is fine.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each day to reduce localized irritation. Stay at least 1 inch from previous injection sites.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Skip and resume the next day. Do not double-dose &mdash; the short half-life means a doubled dose would briefly spike well above the recommended ceiling without sustained benefit.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution handling.</span> Add bacteriostatic water slowly down the inside wall of the vial &mdash; do not spray directly onto powder. Gently swirl or roll until dissolved. Do not shake. Follistatin is a large glycoprotein and denatures with rough handling.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> 10–30 days on, 3–4 weeks off. Avoid continuous use.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> Follistatin is administered daily via subcutaneous injection during the cycle. Unlike long-acting GLP-class peptides, follistatin&apos;s ~90-minute half-life means each injection&apos;s effect window is short &mdash; daily consistency matters more than precise time of day. The two timing variables that matter most are cycle structure (10–30 days on, 3–4 weeks off) and pairing with training (many users inject pre- or post-workout to align peak levels with the training stimulus).
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Daily during the cycle (10–30 days on, 3–4 weeks off)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Any consistent time &mdash; many users inject pre- or post-workout</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No fasting required; inject with or without food</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm &mdash; avoid same site on consecutive days</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~90 minutes (1.5 hours)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Functional steady-state reached within ~3 days at consistent daily dosing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. Follistatin research vials are typically 1 mg. Because Follistatin doses are small (50–200 mcg daily during cycles), 2 mL reconstitution is the common research convention &mdash; it gives clean whole-number units across the dose range and uses gentle dilution that respects the protein&apos;s fragility. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 1 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">50 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">100 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">150 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">200 mcg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">0.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">0.33 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">45 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 1 mg vial, each unit drawn delivers 10 mcg of Follistatin at 1 mL reconstitution, 5 mcg at 2 mL, and 3.3 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Follistatin stack well with?",
    intro:
      "Follistatin pairs naturally with anabolic and recovery peptides because it removes the myostatin growth ceiling without directly providing growth signal. The cleanest additions are IGF-1 LR3 (for direct growth signal through IGF-1 receptors) and GH secretagogues (for systemic GH/IGF-1 elevation). The recovery peptides (BPC-157, TB-500) are added during anabolic cycles to support connective tissue under heavier loads. The things to avoid are other myostatin-pathway compounds — redundant mechanism, no proportional benefit.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">IGF-1 LR3.</span> Direct synergy. Follistatin removes the myostatin growth ceiling;{" "}
          <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>{" "}
          amplifies the growth signal. The most mechanistically complementary stack for advanced muscle-building research.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GH secretagogues.</span>{" "}
          <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>{" "}
          (CJC-1295 + Ipamorelin) or{" "}
          <Link href="/peptides/mk-677" className="text-[#3A759F] hover:underline">MK-677</Link>{" "}
          are combined for systemic growth hormone elevation alongside myostatin inhibition. Different pathways, additive effects.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Recovery peptides during anabolic cycles.</span>{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">Wolverine Stack</Link>{" "}
          (BPC-157 + TB-500) accelerates tissue repair while follistatin removes growth limits &mdash; useful when heavier training loads put more strain on tendons and joints.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Resistance training + 1.6–2.2 g/kg protein.</span> Essential. Without training stimulus and sufficient protein, follistatin&apos;s effects are minimal &mdash; the myostatin ceiling is only worth removing if growth is being actively driven.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: multiple myostatin-pathway compounds.</span> Stacking with other myostatin-targeting compounds (ACE-031, YK11) is redundant mechanism with increased side-effect risk and no proportional benefit.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Follistatin?",
    intro:
      "Follistatin's side-effect profile is the most uncertain among muscle-building peptides because injectable peptide human data is minimal. Gene therapy approaches have shown clean safety profiles in primates and Becker muscular dystrophy patients, but those results don't translate directly to injectable peptide use. The main concerns are reproductive hormone modulation (via activin binding) and a documented case of vision impairment at a single 1 mg dose (10x typical). Cycling on/off is essential, not optional.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness or irritation at the injection site, especially with daily dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache or fatigue.</span> Reported during cycles, typically mild.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild flu-like symptoms.</span> Uncommon but reported, usually in the first few days of a cycle.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reproductive hormone changes.</span> Follistatin binds activin, which regulates FSH. Changes in FSH and downstream reproductive hormones can occur during use &mdash; typically transient and resolve after cycling off.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Joint pain or stiffness.</span> Reported during anabolic cycles, often related to rapid strength gains outpacing connective tissue adaptation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild bloating or fluid retention.</span> Inconsistent across users.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Central serous chorioretinopathy.</span> Vision impairment &mdash; documented in a case report at a 1 mg single dose (10x typical), resolved after discontinuation. Never exceed 200 mcg/day.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical fertility effects.</span> Sustained activin pathway modulation could affect long-term reproductive function. Monitor reproductive hormones if fertility is an active concern.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical tumor growth acceleration.</span> Satellite cell and growth pathway activation could accelerate pre-existing tumors. Contraindicated if there is any history of malignancy.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Follistatin&apos;s safety profile is the most uncertain among muscle-building peptides because injectable peptide human data is minimal. Gene therapy approaches have shown clean safety profiles in primates and Becker muscular dystrophy patients, but those results don&apos;t directly translate to injectable peptide use. Reproductive considerations are real &mdash; monitor reproductive hormones if fertility is a concern. Cycling on/off is essential, not optional.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Follistatin interact with other drugs?",
    intro:
      "Follistatin's most relevant interactions are with reproductive hormone medications (via its activin/FSH effect), other myostatin-pathway compounds (redundant mechanism), and anabolic-androgenic steroids (theoretical synergy with compounding side-effect risk). No major drug-drug pharmacokinetic interactions have been reported in published research.",
    body: [
      "Reproductive hormone medications. Follistatin's activin binding affects FSH regulation. Theoretical interaction with fertility treatments, hormonal contraceptives, or testosterone-related medications.",
      "Other myostatin pathway compounds (ACE-031, YK11). Combination is redundant mechanism with increased side-effect risk; not recommended.",
      "Anabolic-androgenic steroids. Theoretical synergy via different mechanisms; combination increases overall side-effect risk including joint/connective-tissue strain from compounded growth signaling.",
      "No major drug-drug pharmacokinetic interactions reported in published research.",
    ],
  },
  {
    id: "storage",
    title: "How should Follistatin be stored?",
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
    title: "What are the limitations of Follistatin research?",
    intro:
      "Follistatin (FS-344) injectable peptide is not FDA-approved for any human use. The strongest clinical evidence comes from AAV1-FS344 gene therapy trials in Becker muscular dystrophy, not injectable peptide use. Most injectable peptide use sits outside published research, and the World Anti-Doping Agency added follistatin to the prohibited list in 2019. Counterfeit product is common — verify Certificate of Analysis before purchase.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Follistatin (FS-344) injectable peptide is not FDA-approved for any human use. The strongest clinical evidence for follistatin comes from AAV1-FS344 gene therapy trials in Becker muscular dystrophy, not injectable peptide use. Gene therapy provides sustained expression for months from a single dose; injectable peptide has a 90-minute half-life requiring daily injection.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most injectable peptide use sits outside published research. Effects on muscle in humans from subcutaneous injection are not formally validated through controlled trials. Doses, cycles, and outcomes are derived from research community practice rather than clinical evidence.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency added follistatin to the prohibited list in 2019 under Section S2 (peptide hormones). It is subject to doping detection methods.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Counterfeit follistatin is common in the gray market. Recombinant production is expensive &mdash; extremely cheap product is suspect. Certificate of Analysis verification is critical.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Follistatin",
    intro:
      "Follistatin is not FDA-approved and is sold only as a research-grade peptide. It is one of the most expensive research peptides per milligram due to recombinant production complexity, and counterfeit or underdosed product is common — verify Certificate of Analysis before purchase. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "behemoth-labz", note: "Widest research catalog" },
            { slug: "purerawz" },
            { slug: "royal-peptides" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#3A759F] hover:underline">
            See all {activeVendorCount} verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Follistatin FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Rodino-Klapac LR, Haidet AM, Kota J, et al. Inhibition of myostatin with emphasis on follistatin as a therapy for muscle disease. Muscle Nerve. 2009;39(3):283-96.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2717722/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC2717722/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Lee SJ. Quadrupling muscle mass in mice by targeting TGF-β signaling pathways. PLoS One. 2007;2(8):e789.{" "}
          <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0000789" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0000789
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Mendell JR, Sahenk Z, Malik V, et al. A phase 1/2a follistatin gene therapy trial for Becker muscular dystrophy. Mol Ther. 2015;23(1):192-201.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/25322757/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/25322757/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Iezzi S, Di Padova M, Serra C, et al. Deacetylase inhibitors increase muscle cell size by promoting myoblast recruitment and fusion through induction of follistatin. Dev Cell. 2004;6(5):673-84.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/15130492/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/15130492/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kota J, Handy CR, Haidet AM, et al. Follistatin gene delivery enhances muscle growth and strength in nonhuman primates. Sci Transl Med. 2009;1(6):6ra15.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2852878/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC2852878/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Datta-Mannan A, Yaden B, Krishnan V, et al. An engineered human follistatin variant: insights into the pharmacokinetic and pharmacodynamic relationships of a novel molecule with broad therapeutic potential. J Pharmacol Exp Ther. 2013;344(3):616-23.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23249626/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23249626/
          </a>
        </li>
      </ol>
    ),
  },
  {
    id: "studies",
    title: "Published Studies",
    node: (
      <div className="space-y-6">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Plain-English summaries of the peer-reviewed studies behind the claims above. Click any title to read the source paper.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#3A759F] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function FollistatinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Follistatin","description":"Follistatin (FS-344) research profile: myostatin inhibition mechanism, dosing protocol, gene therapy data, side effects, FAQ, and current regulatory status.","url":"https://profpeptide.com/peptides/follistatin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Follistatin"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Follistatin</h1>
        <span className="tag">Performance &amp; Energy</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 23, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> FS-344, Follistatin 344, Myostatin Inhibitor
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Peptide Class:</span> Recombinant Glycoprotein &mdash; Myostatin / Activin Inhibitor
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; research-use only. WADA-prohibited (Section S2, 2019).
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is Follistatin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Follistatin is a naturally occurring single-chain glycoprotein that functions as a potent inhibitor of the myostatin pathway. Myostatin is the body&apos;s primary negative regulator of skeletal muscle growth &mdash; it places a ceiling on how much muscle a person can build. By binding and neutralizing myostatin, follistatin allows muscle growth beyond normal genetic limits. The injectable research form is FS-344, a 344-amino-acid precursor protein that the body cleaves into two functional isoforms: FS-315 (circulating, muscle-targeting) and FS-288 (tissue-bound, gonad-concentrated). Strong gene therapy data exists in primates (15% muscle growth persisting 15+ months) and Becker muscular dystrophy patients; injectable peptide human data is minimal. Often stacked with{" "}
            <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>{" "}
            or the{" "}
            <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>{" "}
            for compounded anabolic effect. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Inhibits myostatin, removing the body&apos;s primary muscle growth ceiling</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Enables both hypertrophy (bigger fibers) and hyperplasia (more fibers)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Inhibits activin A, providing dual-action anti-catabolic effect</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Promotes satellite cell proliferation for enhanced muscle regeneration</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduces fat deposition (myostatin deficiency lowers adipogenesis)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Strong gene therapy efficacy data in primates and humans</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> Most research protocols use 100–200 mcg per day administered subcutaneously, in 10–30 day cycles followed by 3–4 weeks off. Daily dosing is required because the injectable peptide has a ~90-minute half-life. Doses above 200 mcg/day have been associated with adverse events including a case report of vision impairment at 1 mg.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
            <Link href="/coupons" className="text-[#3A759F] hover:underline">
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
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.intro && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                {s.intro}
              </p>
            )}
            {s.node && s.node}
            {s.content && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/igf-1-lr3" className="text-sm font-medium text-[#3A759F] hover:underline">IGF-1 LR3</Link>
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#3A759F] hover:underline">CJC-1295</Link>
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Ipamorelin</Link>
        <Link href="/peptides/mk-677" className="text-sm font-medium text-[#3A759F] hover:underline">MK-677</Link>
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#3A759F] hover:underline">BPC-157</Link>
        <Link href="/peptides/tb-500" className="text-sm font-medium text-[#3A759F] hover:underline">TB-500</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/gh-stack" className="text-sm font-medium text-[#3A759F] hover:underline">GH Stack</Link>
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#3A759F] hover:underline">Wolverine Stack</Link>
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

      <PageDisclaimer />
    <ContactLink pageName="Follistatin" pagePath="/peptides/follistatin" />
    </div>
    </>
  );
}
