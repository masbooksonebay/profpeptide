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
  path: "/peptides/cibinetide",
  title: "Cibinetide (ARA-290) — Mechanism, Phase 2 Trials, Evidence Status | Prof. Peptide",
  description:
    "Cibinetide (ARA-290) research profile: innate repair receptor mechanism, human Phase 2 trial data, dosing used in studies, evidence status, and limitations.",
});

const faqs = [
  {
    q: "Is Cibinetide FDA-approved?",
    a: "No. Cibinetide (ARA-290) is not FDA-approved for any indication. It is an investigational compound that reached Phase 2/2b trials but has not advanced to Phase 3. It did receive US Orphan Drug and Fast Track designations for sarcoidosis-associated neuropathic pain — these are development incentives that ease the regulatory path, not statements that the drug works or is approved.",
  },
  {
    q: "How is Cibinetide different from EPO?",
    a: (
      <>
        Cibinetide is derived from the helix-B region of erythropoietin (EPO) but is engineered to be non-erythropoietic. It activates the innate repair receptor (the EPO-receptor/&beta;-common-receptor complex) that drives tissue protection, without engaging the EPOR homodimer that stimulates red-blood-cell production. In practical terms, it does not raise hematocrit and does not carry EPO&apos;s thrombotic and hypertensive erythropoietic risks. [1]
      </>
    ),
  },
  {
    q: "Does Cibinetide have real human trial data?",
    a: "Yes — more than most research peptides. Randomized, placebo-controlled Phase 2 trials tested it in sarcoidosis-associated small-fiber neuropathy [2], type 2 diabetes [3], and a Phase 2b dose-ranging study [4]. Important caveats: the trials were small (roughly 36 and 64 participants), short (28 days), and several primary endpoints were surrogate nerve-fiber biomarkers rather than long-term clinical outcomes. There is no Phase 3 confirmation.",
  },
  {
    q: "What dose was used in the trials?",
    a: "The studied regimen was 4 mg per day subcutaneously for 28 days. The Phase 2b dose-ranging study compared 1, 4, and 8 mg/day; the 4 mg dose was the one that significantly increased nerve-fiber abundance. [4] These are investigational trial doses, not an approved or endorsed human protocol.",
  },
  {
    q: "Does Cibinetide raise hematocrit like EPO?",
    a: "No. Its defining feature is that it is non-erythropoietic — it does not stimulate red-blood-cell production and does not raise hematocrit. This is the central pharmacological contrast with EPO and the reason the helix-B-derived peptides were engineered in the first place. [1]",
  },
  {
    q: "Where can I buy Cibinetide?",
    a: (
      <>
        Cibinetide (ARA-290) is sold only as a research-grade peptide for laboratory use. In PP&apos;s vetted vendor directory it is currently listed by Swiss Chems &mdash; see{" "}
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
    title: "Nonerythropoietic, tissue-protective peptides derived from the tertiary structure of erythropoietin",
    authors: "Brines M, Patel NSA, Villa P, et al.",
    journal: "Proc Natl Acad Sci U S A / PubMed",
    year: "2008",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/18676614/",
    summary:
      "Origin-of-mechanism paper (preclinical). Delimited EPO's tissue-protective activity to short peptides derived from its helix-B domain — the ARA-290 lineage — which protect tissue via the EPO-receptor/β-common-receptor complex WITHOUT stimulating red-cell production. This is the mechanistic basis for a non-erythropoietic, tissue-protective peptide.",
  },
  {
    title: "ARA 290 improves symptoms in patients with sarcoidosis-associated small nerve fiber loss and increases corneal nerve fiber density",
    authors: "Dahan A, Dunne A, Swartjes M, et al.",
    journal: "Mol Med / PubMed",
    year: "2013",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/24136731/",
    summary:
      "Human Phase 2 RCT. Sarcoidosis patients with small-fiber neuropathy received 28 days of daily subcutaneous ARA-290 (4 mg) or placebo. Treated patients showed improved neuropathic symptoms and increased corneal nerve fiber density — a surrogate biomarker of small-fiber regeneration.",
  },
  {
    title: "ARA 290, a nonerythropoietic peptide engineered from erythropoietin, improves metabolic control and neuropathic symptoms in patients with type 2 diabetes",
    authors: "Brines M, Dunne AN, van Velzen M, et al.",
    journal: "Mol Med / PubMed",
    year: "2015",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/25387363/",
    summary:
      "Human Phase 2 RCT. Type 2 diabetes patients self-injected 4 mg/day subcutaneous ARA-290 or placebo for 28 days. Treated subjects showed improved HbA1c and lipid measures and reduced neuropathic symptoms versus placebo, over a short 28-day window.",
  },
  {
    title: "Cibinetide improves corneal nerve fiber abundance in patients with sarcoidosis-associated small nerve fiber loss and neuropathic pain",
    authors: "Culver DA, Dahan A, Bajorunas D, et al.",
    journal: "Invest Ophthalmol Vis Sci / PubMed",
    year: "2017",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/28475703/",
    summary:
      "Human Phase 2b dose-ranging RCT (1/4/8 mg/day subcutaneous vs placebo, 28 days, N=64). The 4 mg dose significantly increased corneal and skin nerve-fiber abundance, consistent with a nerve-regeneration effect, with pain reduction in the subgroup with moderate-to-severe baseline pain.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Cibinetide work?",
    intro:
      "Cibinetide (ARA-290) is an 11-amino-acid peptide derived from the helix-B domain of erythropoietin (EPO). It activates the innate repair receptor (IRR) — a heterocomplex of the EPO receptor and the β-common receptor (CD131) — driving anti-inflammatory, anti-apoptotic, and tissue-repair signaling. Crucially, it does NOT engage the EPOR homodimer that drives red-blood-cell production, so unlike EPO it does not raise hematocrit or carry EPO's thrombotic and hypertensive erythropoietic risks.",
    body: [
      "Helix-B origin [1]. Cibinetide is engineered from the helix-B region of erythropoietin. Brines and colleagues delimited EPO's tissue-protective activity to short helix-B-derived peptides that retain protective signaling while shedding erythropoietic activity.",
      "Innate repair receptor (IRR) agonism [1]. It binds the innate repair receptor — a heterocomplex of the EPO receptor and the β-common receptor (CD131). This receptor is expressed on injured and inflamed tissue and mediates EPO's tissue-protective, rather than red-cell-stimulating, effects.",
      "Anti-inflammatory and anti-apoptotic signaling [1][2]. IRR activation drives anti-inflammatory and anti-apoptotic pathways associated with tissue protection and repair, including in peripheral nerve tissue in the human trials.",
      "Non-erythropoietic by design [1]. Because it does not engage the EPOR homodimer responsible for erythropoiesis, cibinetide does not raise hematocrit and lacks the thrombotic and hypertensive risks that accompany EPO's red-cell-stimulating activity. This is the central pharmacological distinction from EPO.",
      "Nerve-fiber effects in humans [2][4]. In Phase 2 and Phase 2b trials, cibinetide was associated with increased corneal and skin nerve-fiber abundance — a surrogate marker consistent with small-fiber nerve regeneration.",
    ],
  },
  {
    id: "research",
    title: "What is Cibinetide used for?",
    intro:
      "Unlike most research peptides, cibinetide has real human Phase 2 randomized controlled trial data. It was investigated for sarcoidosis-associated small-fiber neuropathy and type 2 diabetic neuropathy, with a Phase 2b dose-ranging study confirming nerve-fiber effects at 4 mg/day. Endpoints were largely surrogate nerve-fiber biomarkers, the trials were small (N≈36 and 64) and short (28 days), and there is no Phase 3 confirmation.",
    body: [
      "Sarcoidosis small-fiber neuropathy — Phase 2 RCT [2]. Sarcoidosis patients with small-fiber neuropathy given 28 days of daily subcutaneous ARA-290 (4 mg) versus placebo showed improved neuropathic symptoms and increased corneal nerve fiber density (Dahan 2013).",
      "Type 2 diabetes — Phase 2 RCT [3]. Type 2 diabetes patients self-injecting 4 mg/day subcutaneous ARA-290 for 28 days showed improved HbA1c and lipid measures and reduced neuropathic symptoms versus placebo (Brines 2014/2015).",
      "Phase 2b dose-ranging [4]. A dose-ranging RCT (1/4/8 mg/day subcutaneous, 28 days, N=64) found that the 4 mg dose significantly increased corneal and skin nerve-fiber abundance, with pain reduction in those with moderate-to-severe baseline pain (Culver 2017).",
      "Preclinical mechanism [1]. Brines and Cerami's 2008 PNAS work established the non-erythropoietic, tissue-protective mechanism of the helix-B-derived peptides that cibinetide belongs to.",
      "Evidence caveats. Endpoints were largely surrogate nerve-fiber biomarkers rather than long-term clinical outcomes; trials were small and short (28 days); and no Phase 3 trial has confirmed these findings.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Cibinetide take to work?",
    intro:
      "The human trials measured outcomes over a fixed 28-day course of daily subcutaneous dosing. Nerve-fiber and symptom changes were assessed at the end of that 28-day window; the trials were not designed to characterize onset within days, and there is no reliable durability data beyond the short trial periods.",
    content:
      "In the Phase 2 and Phase 2b trials, cibinetide was given as 4 mg/day subcutaneously for 28 days, with neuropathic-symptom and nerve-fiber outcomes measured at the end of that period. Because these were short fixed-duration studies, there is no well-characterized day-by-day onset curve, and durability beyond a few weeks was not established. Effects reported (reduced neuropathic symptoms, increased corneal and skin nerve-fiber abundance) reflect the 28-day trial endpoint rather than a validated long-term trajectory. All of this is investigational — cibinetide is not an approved human therapy.",
  },
  {
    id: "dosing",
    title: "How is Cibinetide dosed?",
    intro:
      "Cibinetide is the rare research peptide with real trial dosing to report. The studied regimen was 4 mg per day subcutaneously for 28 days; the Phase 2b dose-ranging study compared 1, 4, and 8 mg/day, and 4 mg was the effective dose on nerve endpoints. This is presented as the investigational trial dose — not an approved, endorsed, or recommended human protocol.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Studied regimen.</span> 4 mg/day subcutaneously for 28 days &mdash; the dose used in the sarcoidosis and type 2 diabetes Phase 2 trials. [2][3]</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dose-ranging.</span> The Phase 2b study tested 1, 4, and 8 mg/day; the 4 mg dose was the one that significantly increased nerve-fiber abundance. [4]</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Daily subcutaneous self-injection, as used in the trials.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Duration.</span> Trials ran for 28 days; there is no established protocol beyond that window.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Status.</span> These are investigational trial doses. Cibinetide is not FDA-approved and there is no endorsed human protocol.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate a dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is Cibinetide administered?",
    intro: (
      <>
        In the human trials, cibinetide was given as a once-daily subcutaneous injection &mdash; under the skin, not into muscle &mdash; using a small insulin syringe. The trials did not specify food timing. For the practical mechanics of insulin syringes, units vs mg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
        guide. Note that cibinetide is investigational and this reflects trial procedure, not an approved human protocol.
      </>
    ),
    node: (
      <div className="space-y-4">
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">What the trials used</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Route</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Subcutaneous injection</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency / best time</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once daily per trials; no specific time of day established</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not specified in the trials</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Short peptide, brief &mdash; no PMID-verified human half-life value; not independently confirmed</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Standard rotation between abdomen, thigh, upper arm</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Per-dose, daily &mdash; each dose given once per day over the 28-day course</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Because cibinetide&apos;s trial doses are relatively large (1&ndash;8 mg), reconstitution volume matters for drawing accurate amounts. The table below is anchored to the actual trial-relevant masses (1 mg, 4 mg, 8 mg) and shows the U-100 insulin-syringe unit draw at two common concentrations (100 units = 1 mL). Even though these are the real doses used in studies, cibinetide remains investigational and is not an approved human protocol &mdash; treat this as reference math for laboratory handling only.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">1 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">4 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">8 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">20 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">10 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">80 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mg.</span> At 20 mg/mL each unit on a U-100 syringe delivers 0.2 mg; at 10 mg/mL each unit delivers 0.1 mg &mdash; the reconstitution concentration determines the mg-per-unit conversion. For a primer on reading insulin syringes, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Cibinetide stack well with?",
    intro:
      "There are no studied cibinetide combinations. It is a non-erythropoietic, tissue-protective and anti-inflammatory peptide, conceptually adjacent to recovery peptides, but no controlled trial has tested it in any stack. The peptides below are listed only for orientation within the tissue-repair space — there is no controlled evidence of synergy with cibinetide, and none should be inferred.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">No studied combinations.</span> Every human cibinetide trial used it as a single agent. Any stack is speculative and unsupported by controlled data.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Recovery-peptide neighbors.</span> Compounds like{" "}
          <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
          and{" "}
          <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>{" "}
          occupy the same broad tissue-repair category, but no study has combined them with cibinetide.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Other tissue-protective peptides.</span>{" "}
          <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>,{" "}
          <Link href="/peptides/ss-31" className="text-[#3A759F] hover:underline">SS-31</Link>, and{" "}
          <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>{" "}
          are mechanistically distinct; listing them here is for orientation only, not a recommendation to combine.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Do not invent synergy.</span> Because cibinetide&apos;s only human data comes from single-agent Phase 2 trials, any additive or synergistic benefit with these peptides is unproven.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Cibinetide?",
    intro:
      "In the Phase 2 and Phase 2b trials, cibinetide was generally well tolerated over the 28-day dosing period, with mild injection-site reactions the most commonly noted effect. Because it is non-erythropoietic, it does NOT raise hematocrit — a key safety contrast with EPO. The important limitation is duration: safety beyond a few weeks has not been established, and the trial populations were small.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild, local, and the most commonly reported effect over the 28-day trials.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Generally well tolerated.</span> Across the Phase 2 trials, daily subcutaneous dosing for 28 days was tolerated without notable systemic toxicity signals. [2][3]</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Notable contrast with EPO
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Does NOT raise hematocrit.</span> Because it is non-erythropoietic, cibinetide does not stimulate red-blood-cell production, so it does not carry EPO&apos;s hematocrit rise or the associated thrombotic and hypertensive risks. [1]</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious / less-established (rare or unknown)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Long-term safety not established.</span> Human data does not extend meaningfully beyond the 28-day trial windows.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Small trial populations.</span> The controlled trials enrolled roughly 36 and 64 participants, limiting detection of uncommon adverse events.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No Phase 3.</span> Without a large confirmatory trial, the full safety profile remains incompletely characterized.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Cibinetide interact with other drugs?",
    intro:
      "No significant drug-drug interaction data for cibinetide has been published. The trials did not report clinically meaningful interactions, but they were small and short, so any interaction profile should be considered unknown rather than established.",
    body: [
      "No published drug-drug interaction studies. There is no dedicated interaction data for cibinetide in the peer-reviewed literature.",
      "Interactions are theoretical only. Any concern about combining cibinetide with other agents is speculative given the absence of controlled interaction data.",
      "Small, short trials. The Phase 2 studies were not designed or powered to detect drug-drug interactions.",
    ],
  },
  {
    id: "storage",
    title: "How should Cibinetide be stored?",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted solution: Store at 2–8°C; use within 28–30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Never freeze reconstituted solution.",
      "Protect from light. Store in original carton.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Cibinetide research?",
    intro:
      "Cibinetide has more human data than most research peptides — but the evidence is still early and narrow. It is not approved anywhere; the controlled trials were small (N≈36 and 64) and short (28 days); several primary endpoints were surrogate nerve-fiber biomarkers rather than long-term clinical outcomes; there is no Phase 3; and durability beyond a few weeks is unestablished.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Cibinetide (ARA-290) is not FDA-approved and holds no marketing approval in any jurisdiction. It reached Phase 2/2b but never advanced to Phase 3. The US Orphan Drug and Fast Track designations it received for sarcoidosis-associated neuropathic pain are development incentives that ease the regulatory pathway &mdash; they are NOT statements of efficacy or approval.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The controlled human trials were small (roughly 36 and 64 participants) and short (28 days). Several primary endpoints were surrogate nerve-fiber biomarkers &mdash; such as corneal nerve fiber density &mdash; rather than long-term clinical outcomes, and no Phase 3 study has confirmed these findings. Durability of any benefit beyond a few weeks was not established.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The sponsor, Araim Pharmaceuticals, has reportedly ceased operations. This is press-level information, not a peer-reviewed source, and should be treated as such &mdash; but it is relevant context for why the program did not progress to Phase 3. Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Cibinetide",
    intro:
      "Cibinetide (ARA-290) is not FDA-approved for any human use and is sold only as a research-grade peptide. In PP's vetted vendor directory it is currently listed by Swiss Chems. Vendors highlighted here have been evaluated for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "swiss-chems", note: "Lists Cibinetide (ARA-290) · published batch COAs · code PROF10" },
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
    title: "Cibinetide FAQ",
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
          Brines M, Patel NSA, Villa P, et al. Nonerythropoietic, tissue-protective peptides derived from the tertiary structure of erythropoietin. Proc Natl Acad Sci U S A. 2008;105(31):10925-10930.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18676614/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18676614/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Dahan A, Dunne A, Swartjes M, et al. ARA 290 improves symptoms in patients with sarcoidosis-associated small nerve fiber loss and increases corneal nerve fiber density. Mol Med. 2013;19(1):334-345.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/24136731/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/24136731/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Brines M, Dunne AN, van Velzen M, et al. ARA 290, a nonerythropoietic peptide engineered from erythropoietin, improves metabolic control and neuropathic symptoms in patients with type 2 diabetes. Mol Med. 2015;20(1):658-666.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/25387363/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/25387363/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Culver DA, Dahan A, Bajorunas D, et al. Cibinetide improves corneal nerve fiber abundance in patients with sarcoidosis-associated small nerve fiber loss and neuropathic pain. Invest Ophthalmol Vis Sci. 2017;58(6):BIO52-BIO60.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/28475703/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/28475703/
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

export default function CibinetidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Cibinetide (ARA-290)","description":"Cibinetide (ARA-290) research profile: innate repair receptor mechanism, human Phase 2 trial data, dosing used in studies, evidence status, and limitations.","url":"https://profpeptide.com/peptides/cibinetide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Cibinetide"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Cibinetide</h1>
        <span className="tag">Tissue Repair</span>
        <span className="tag">Investigational</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: July 21, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> ARA-290, cibinetide, erythropoietin helix-B-derived peptide (HBSP-related)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Peptide Class:</span> Non-erythropoietic, EPO-derived tissue-protective peptide &mdash; innate repair receptor (IRR) agonist; 11-amino-acid peptide
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; investigational. Reached Phase 2/2b; no Phase 3. Sponsor: Araim Pharmaceuticals. Received US Orphan Drug (and Fast Track) designation for sarcoidosis-associated neuropathic pain &mdash; a development incentive, NOT an efficacy approval.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is Cibinetide?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Cibinetide (ARA-290) is an 11-amino-acid peptide derived from the helix-B domain of erythropoietin (EPO). It activates the innate repair receptor (IRR) &mdash; a heterocomplex of the EPO receptor and the &beta;-common receptor (CD131) &mdash; driving anti-inflammatory, anti-apoptotic, tissue-repair signaling, while NOT engaging the EPOR homodimer that raises red-blood-cell counts. Unlike most research peptides, cibinetide has real human Phase 2 randomized controlled trial data in sarcoidosis-associated small-fiber neuropathy and type 2 diabetic neuropathy &mdash; though the trials were small, short (28 days), largely used surrogate nerve-fiber endpoints, and were never confirmed in Phase 3. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported research findings:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Activates the innate repair receptor (EPOR/&beta;-common-receptor complex) for tissue-protective signaling</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Non-erythropoietic &mdash; does not raise hematocrit or carry EPO&apos;s thrombotic/hypertensive risks</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved neuropathic symptoms in Phase 2 sarcoidosis and type 2 diabetes trials</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Increased corneal and skin nerve-fiber abundance (surrogate biomarker) at 4 mg/day</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Generally well tolerated over the 28-day trial periods</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> Trials used 4 mg/day subcutaneously for 28 days (investigational). The Phase 2b dose-ranging study tested 1/4/8 mg/day, and 4 mg was the effective dose on nerve endpoints. This is a trial regimen, not an approved or endorsed human protocol.
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
        {["Tissue Repair", "Investigational", "Innate Repair Receptor", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#3A759F] hover:underline">BPC-157</Link>
        <Link href="/peptides/tb-500" className="text-sm font-medium text-[#3A759F] hover:underline">TB-500</Link>
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#3A759F] hover:underline">GHK-Cu</Link>
        <Link href="/peptides/ss-31" className="text-sm font-medium text-[#3A759F] hover:underline">SS-31</Link>
        <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>
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
    <ContactLink pageName="Cibinetide" pagePath="/peptides/cibinetide" />
    </div>
    </>
  );
}
