import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ProfileTOC from "@/components/ProfileTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/adipotide",
  title: "Adipotide (FTPP) — Mechanism, Research, Evidence Status | Prof. Peptide",
  description:
    "Adipotide (FTPP) research profile: adipose-vascular homing mechanism, preclinical evidence, the terminated Phase 1 trial, evidence status, and why no validated human dose exists.",
});

const faqs = [
  {
    q: "Is there a validated human dose for adipotide?",
    a: "No. There is no established, validated human dose or protocol for adipotide. The only human-relevant figure is the starting dose from the single terminated Phase 1 trial (NCT01262664): 0.03 mg/kg subcutaneously once daily across a 28-day cycle, derived from the obese-primate regimen. That is an investigational starting dose from a trial that enrolled only 4 of a planned 39 patients and posted no results — it is not an endorsed protocol.",
  },
  {
    q: "Has adipotide been tested in humans?",
    a: "Only once, and it was never completed. A first-in-human Phase 1 oncology trial (NCT01262664) at MD Anderson opened but was terminated early with only 4 of 39 planned patients enrolled, and no results were ever published or posted. Every positive efficacy finding for adipotide comes from mice and monkeys. There is no demonstrated human efficacy and no characterized human safety profile.",
  },
  {
    q: "What is the main safety concern with adipotide?",
    a: "In obese rhesus monkeys, the dose-limiting toxicity was reversible kidney (renal) change — it was the effect that capped how high the dose could go. That signal was reversible in the monkey model, but whether it is reversible, or even occurs the same way, in humans is unknown because the human trial was never completed. Injection-site reactions and off-target apoptosis are additional theoretical concerns.",
  },
  {
    q: "How is adipotide different from GLP-1 drugs like retatrutide or semaglutide?",
    a: "Mechanistically they share nothing. GLP-1 and dual/triple incretin agonists act on gut-hormone receptors to modulate appetite and metabolism. Adipotide instead homes to the blood vessels that feed white fat and triggers apoptosis of that vasculature, causing the fat to be resorbed secondarily. Adipotide is sometimes discussed alongside metabolic peptides because of the shared weight-loss theme, but it is a fundamentally different — and far less validated — approach.",
  },
  {
    q: "Where can I buy adipotide?",
    a: (
      <>
        Adipotide is sold by a limited number of research-peptide suppliers as a research chemical only. In PP&apos;s vetted directory it is currently listed by Swiss Chems &mdash; see the{" "}
        <Link href="/coupons" className="text-[#3A759F] hover:underline">
          Verified Discount Codes &rarr;
        </Link>{" "}
        page for current options.
      </>
    ),
  },
];

const studies = [
  {
    title: "Reversal of obesity by targeted ablation of adipose tissue",
    authors: "Kolonin MG, Saha PK, Chan L, Pasqualini R, Arap W.",
    journal: "Nature Medicine / PubMed",
    year: "2004",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/15133506/",
    summary: "Landmark mouse study; a phage-display-derived peptide (CKGGRAKDC) that homes to white-fat vasculature and binds prohibitin, fused to a proapoptotic payload, ablated white adipose tissue and reversed obesity in obese mice.",
  },
  {
    title: "A peptidomimetic targeting white fat causes weight loss and improved insulin resistance in obese monkeys",
    authors: "Barnhart KF, Christianson DR, Hanley PW, et al.",
    journal: "Science Translational Medicine / PubMed",
    year: "2011",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/22072637/",
    summary: "Obese rhesus monkeys given daily subcutaneous adipotide for 28 days lost ~11% body weight and improved insulin sensitivity; the paper reported dose-dependent, reversible renal (kidney) changes as the dose-limiting toxicity.",
  },
  {
    title: "Prohibitin/annexin 2 interaction regulates fatty acid transport in adipose tissue",
    authors: "Salameh A, Daquinag AC, Staquicini DI, et al.",
    journal: "JCI Insight / PubMed",
    year: "2016",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/27468426/",
    summary: "Mechanistic follow-up establishing that prohibitin and annexin A2 form a complex with the fatty-acid transporter CD36 on white-fat vascular endothelium — grounding adipotide's docking target.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Adipotide work?",
    intro:
      "Adipotide is a two-part (chimeric) peptidomimetic. A homing domain (CKGGRAKDC) seeks out prohibitin, a protein that sits with annexin A2 on the endothelium — the inner lining — of the blood vessels that feed white adipose tissue. Once docked there, the peptide's second part, a proapoptotic payload written D(KLAKLAK)2, disrupts mitochondria and triggers apoptosis of that fat-feeding vasculature. Starved of its blood supply, the surrounding fat is resorbed. Every step of this mechanism has been demonstrated in animals only — none of it has been confirmed to occur in humans.",
    body: [
      "Adipose-vascular homing [1][3]. The CKGGRAKDC domain was identified by phage display as a sequence that homes to the vasculature of white adipose tissue, where it binds prohibitin — a protein presented, together with annexin A2, on the endothelium of fat-feeding blood vessels.",
      "Proapoptotic payload [1]. Fused to the homing domain is D(KLAKLAK)2, a synthetic amphipathic peptide that is relatively inert outside cells but disrupts mitochondrial membranes once internalized, initiating programmed cell death (apoptosis).",
      "Apoptosis of fat-feeding vasculature [1][2]. By concentrating the apoptotic payload on white-fat endothelium, adipotide triggers death of those vascular cells. This is a vascular-targeting strategy borrowed from tumor-vasculature work — the fat is not attacked directly.",
      "Secondary adipocyte resorption [1][2]. With their local blood supply ablated, the adipocytes the vessels once fed are resorbed. In animal models this produced measurable loss of white adipose tissue and body weight.",
      "Docking-target biology [3]. Follow-up work established that prohibitin and annexin A2 form a complex with the fatty-acid transporter CD36 on white-fat vascular endothelium, clarifying the molecular target adipotide relies on.",
      "Species caveat. All of the above was demonstrated in mice and monkeys. There is no human data confirming that adipotide homes, ablates, or resorbs fat in people as it does in animals.",
    ],
  },
  {
    id: "research",
    title: "What is Adipotide used for?",
    intro:
      "Adipotide has been studied as an anti-obesity and, briefly, an oncology candidate — but its evidence base is almost entirely preclinical. Obese mice and obese monkeys lost fat and body weight on it, and the monkey study also showed improved insulin resistance. The one human trial ever opened was an oncology Phase 1 study that was terminated early and never reported. There is no demonstrated human efficacy or safety for any indication.",
    body: [
      "Obesity reversal in mice [1]. Kolonin and colleagues (2004) showed that the CKGGRAKDC-D(KLAKLAK)2 peptide ablated white adipose tissue and reversed obesity in obese mice — the foundational proof-of-concept for the whole approach.",
      "Weight loss and insulin resistance in obese monkeys [2]. Barnhart and colleagues (2011) gave obese rhesus monkeys daily subcutaneous adipotide for 28 days; the animals lost roughly 11% of body weight and showed improved insulin sensitivity. Crucially, the same paper reported dose-dependent, reversible renal (kidney) changes as the dose-limiting toxicity.",
      "Docking-target mechanism [3]. Salameh and colleagues (2016) established the prohibitin/annexin A2/CD36 complex on white-fat endothelium, grounding the biology adipotide exploits.",
      "Human evidence — none demonstrated. The only human study, a first-in-human Phase 1 oncology trial (NCT01262664) at MD Anderson, was terminated early with 4 of 39 planned patients enrolled and no results published or posted. Adipotide has never shown efficacy or a characterized safety profile in humans.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Adipotide take to work?",
    intro:
      "There is no human timeline for adipotide because there is no completed human study to derive one from. Any figure would be an extrapolation from animals, and animal-to-human timelines do not transfer reliably.",
    content:
      "In the obese-monkey study, measurable weight loss (~11%) accumulated over a 28-day daily dosing cycle. That is an animal figure, not a human one. Because the single human trial was terminated before it produced data, no onset, no time-to-effect, and no duration-of-effect have been established in people. Treat any claimed human timeline as unsupported.",
  },
  {
    id: "dosing",
    title: "How is Adipotide dosed?",
    intro:
      "There is no validated human dose or protocol for adipotide. This is the single most important thing to understand about the compound. The only human-relevant figure that exists is the starting dose from the terminated Phase 1 trial — presented below strictly as an investigational reference point, not an endorsed protocol.",
    node: (
      <div className="space-y-3">
        <div className="p-4 border border-[#3A759F]/20 bg-[#3A759F]/10 rounded-xl">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">No validated human dose exists.</span> Adipotide has no established, safe, effective human dosing protocol. The figure below is not a recommendation &mdash; it is the starting dose from a trial that was halted after enrolling 4 of 39 patients and never reported results.
          </p>
        </div>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Investigational starting dose (reference only).</span> The Phase 1 trial (NCT01262664) used 0.03 mg/kg subcutaneously once daily across a 28-day cycle, a regimen derived from the obese-primate work. This is the only human-relevant number on record.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Why it is not a protocol.</span> The trial was terminated early with no efficacy or safety readout. A starting dose from a halted, unreported study is not evidence of a safe or effective human dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dose-limiting toxicity in animals.</span> In obese monkeys, reversible renal (kidney) change was the effect that capped the dose. Any human dosing consideration is shadowed by an unresolved kidney-safety question.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Adipotide is mechanistically unrelated to GLP-1 and incretin metabolic peptides such as{" "}
          <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">retatrutide</Link>{" "}
          even though it is sometimes discussed alongside them. Do not assume any dosing convention from those compounds carries over.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is Adipotide administered?",
    intro:
      "In the animal studies and the terminated human trial, adipotide was given as a once-daily subcutaneous injection. Beyond the route itself, almost nothing about administration is established: no validated timing, no food rules, no characterized human half-life. The table below reflects that — most rows are honestly marked \"not established.\"",
    node: (
      <div className="space-y-4">
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Route</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Subcutaneous injection (route used in animal studies and the Phase 1 trial)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not established &mdash; no human timing data</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not established &mdash; no fasting or with-food guidance exists</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Standard subcutaneous practice &mdash; rotate abdomen, thigh, upper arm</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not characterized in humans</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not established</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math (illustrative only).</span> The columns below are generic mg&rarr;U-100-unit conversion arithmetic to show how reconstitution volume changes syringe draw &mdash; they are <span className="font-semibold">illustrative reconstitution math only, not recommended doses</span>, because no validated human dose for adipotide exists. All units are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 10 mg vial. For the mechanics of insulin syringes and subcutaneous technique, see the{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
          guide.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">1 mg</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">2 mg</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">3 mg</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3.33 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">90 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reminder.</span> The mg amounts in the columns above are arbitrary reference points chosen to demonstrate the arithmetic. They are not dose recommendations. Because there is no validated human dose for adipotide, treat these figures purely as a worked example of unit conversion.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Adipotide stack well with?",
    intro:
      "There are no studied human stacks for adipotide. Because its own human efficacy and safety are unestablished, combining it with anything is entirely unvalidated. It is sometimes discussed alongside metabolic and GLP-1 peptides, but that reflects a shared weight-loss theme, not a shared or synergistic mechanism.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No evidence-based stacks.</span> No human study has evaluated adipotide in combination with any other compound. There is no basis to claim synergy with anything.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Mechanistically unrelated to metabolic peptides.</span> Adipotide is often mentioned near GLP-1 and incretin agonists such as{" "}
          <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">retatrutide</Link>, and metabolic compounds like{" "}
          <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>,{" "}
          <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>, and{" "}
          <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>. Those act on gut-hormone or metabolic pathways; adipotide ablates fat vasculature. The overlap is thematic, not mechanistic.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No invented synergy.</span> Any protocol pairing adipotide with a metabolic peptide is speculative. Given adipotide&apos;s unresolved renal-safety signal and absent human data, stacking compounds its unknowns rather than reducing them.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Adipotide?",
    intro:
      "The most important safety signal for adipotide comes from animals, not humans: in obese monkeys the dose-limiting toxicity was reversible kidney (renal) change. It was reversible in that model, but whether it is reversible — or even occurs the same way — in humans is unknown, because the single human trial was terminated before a safety profile could be established. Everything below should be read against that backdrop of unknown human safety.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Most notable signal (from animal data)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Renal (kidney) change.</span> Dose-limiting in obese monkeys and reversible in that model. Human relevance, severity, and reversibility are unknown.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Expected with any injectable
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection-site reactions.</span> Redness, irritation, or discomfort at the subcutaneous injection site, as with any injectable peptide.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious / unresolved
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Renal effects in humans.</span> The animal kidney signal has never been cleared in people; it is the central open safety question.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Unknown long-term human safety.</span> No human study ran long enough to characterize any safety profile.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical off-target apoptosis.</span> A proapoptotic payload that reaches tissues other than fat vasculature could, in principle, harm them. This risk is unquantified in humans.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Because adipotide has no characterized human safety profile, none of these can be assigned a real-world frequency. The honest summary is that adipotide&apos;s human safety is unknown, and the one concrete toxicity signal on record is renal.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Adipotide interact with other drugs?",
    intro:
      "There is no human drug-interaction data for adipotide. Any interaction concern is theoretical, inferred from its mechanism rather than observed in people.",
    body: [
      "No human interaction studies. No published research characterizes adipotide's interactions with any drug in humans.",
      "Theoretical renal caution. Given the animal kidney signal, co-administration with nephrotoxic drugs would be a theoretical concern — but this has not been studied.",
      "No established pharmacokinetic interactions. Because adipotide's human pharmacokinetics are uncharacterized, drug-drug PK interactions cannot be described.",
    ],
  },
  {
    id: "storage",
    title: "How should Adipotide be stored?",
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
    title: "What are the limitations of Adipotide research?",
    intro:
      "This is the most important section on the page. Adipotide has no proven human efficacy and no characterized human safety. The one human trial ever opened was halted early and never reported. A dose-limiting kidney-toxicity signal appeared in primates. Every positive result is from animals. Read the evidence accordingly.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">No proven human efficacy or safety.</span> Adipotide has never demonstrated efficacy in humans, and no human safety profile has been established. The compound&apos;s reputation rests entirely on animal data.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">The only human trial was halted and never reported.</span> The first-in-human Phase 1 oncology study (NCT01262664, MD Anderson) was terminated early with 4 of 39 planned patients enrolled, and no results were ever published or posted. There is effectively no human evidence to evaluate.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">A renal-toxicity signal is unresolved.</span> In obese monkeys, reversible kidney change was the dose-limiting toxicity. Because the human trial never generated a safety readout, whether this signal appears — or reverses — in people is unknown.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">All positive data are preclinical.</span> Obesity reversal, ~11% weight loss, and improved insulin resistance were all observed in mice and monkeys. Animal metabolic results routinely fail to translate to humans, and adipotide has not cleared that bar. It is not approved for any use and is sold for laboratory research only.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Adipotide",
    intro:
      "Adipotide is not FDA-approved and is sold only as a research-grade peptide, by a limited number of research suppliers. In PP's vetted directory it is currently listed by Swiss Chems. As with any unvalidated research compound, published batch documentation and third-party testing matter more, not less.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "swiss-chems", note: "Lists Adipotide (FTPP) · published batch COAs · code PROF10" },
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
    title: "Adipotide FAQ",
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
          Kolonin MG, Saha PK, Chan L, Pasqualini R, Arap W. Reversal of obesity by targeted ablation of adipose tissue. Nat Med. 2004;10(6):625-632.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/15133506/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/15133506/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Barnhart KF, Christianson DR, Hanley PW, et al. A peptidomimetic targeting white fat causes weight loss and improved insulin resistance in obese monkeys. Sci Transl Med. 2011;3(108):108ra112.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22072637/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22072637/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Salameh A, Daquinag AC, Staquicini DI, et al. Prohibitin/annexin 2 interaction regulates fatty acid transport in adipose tissue. JCI Insight. 2016;1(10):e86351.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27468426/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27468426/
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

const tocSections = [
  { id: "overview", title: "What is Adipotide?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function AdipotidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Adipotide (FTPP)","description":"Adipotide (FTPP) research profile: adipose-vascular homing mechanism, preclinical evidence, the terminated Phase 1 trial, evidence status, and why no validated human dose exists.","url":"https://profpeptide.com/peptides/adipotide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Adipotide"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">Adipotide</h1>
        <span className="tag">Metabolic</span>
        <span className="tag">Investigational</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">
        Last reviewed: July 21, 2026
      </p>

      {/* Quick Facts — key facts already present on this page, in a scannable grid */}
      <section aria-label="Quick Facts" className="panel-card mb-10 overflow-hidden">
        <div className="px-5 py-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-[#16181B] dark:text-slate-100 mb-3">
            Quick Facts
          </h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">What it is</dt>
              <dd className="text-base text-[#16181B] dark:text-slate-100">A fat-targeted proapoptotic peptidomimetic (FTPP) that homes to the blood vessels feeding white fat and kills that blood supply, causing the fat to be resorbed. Demonstrated in mice and monkeys only &mdash; no demonstrated human efficacy.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Subcutaneous injection (investigational &mdash; the route used in animal studies and the terminated Phase 1 trial)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Not characterized in humans</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">No validated human dose &mdash; the only reference figure is the terminated Phase 1 starting dose (0.03 mg/kg subcutaneously once daily, 28-day cycle)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Not FDA-approved &mdash; investigational. The sole Phase 1 trial (NCT01262664) was terminated with no results; no human efficacy; renal-tox signal in primates.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Mobile "Jump to section" (collapses cleanly; rail TOC is hidden on mobile) */}
      <ProfileTOC sections={tocSections} variant="mobile" />

      {/* Two-column: primary content + right rail */}
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 lg:items-start">
        <main className="min-w-0">

      <div id="overview" className="scroll-mt-24">
        <h2 className="section-heading mb-3">What is Adipotide?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Adipotide (also called FTPP, for fat-targeted proapoptotic peptide, or by the code Prohibitin-TP01) is a synthetic chimeric proapoptotic peptidomimetic first described by Kolonin and colleagues in 2004. It fuses a homing sequence (CKGGRAKDC) that seeks the blood vessels feeding white fat to a proapoptotic payload, D(KLAKLAK)2 &mdash; written in full as the construct CKGGRAKDC-GG-D(KLAKLAK)2 &mdash; that kills those vessels, causing the surrounding fat to be resorbed. In obese mice and obese monkeys it produced striking fat and weight loss, but the single human trial ever opened was terminated early and never reported, and a kidney-toxicity signal appeared in primates. It is mechanistically unrelated to GLP-1 metabolic peptides such as{" "}
            <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">retatrutide</Link>{" "}
            despite sometimes being discussed alongside them. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Ablation of white adipose tissue by targeting its vasculature (animal models)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reversal of obesity in obese mice (Kolonin 2004)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">~11% body-weight loss over 28 days in obese rhesus monkeys (Barnhart 2011)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved insulin resistance in the obese-monkey study</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Selective, prohibitin-directed mechanism that spares fat directly and targets its blood supply</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">All of the above are preclinical (animal) findings &mdash; none have been demonstrated in humans</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> No validated human dose has been established. The only human-relevant figure is the terminated Phase 1 starting dose (0.03 mg/kg subcutaneously once daily for a 28-day cycle), presented as an investigational reference point &mdash; not an endorsed protocol.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> Adipotide is sold by a limited number of research suppliers. In PP&apos;s vetted directory it is currently listed by Swiss Chems &mdash; see{" "}
            <Link href="/coupons" className="text-[#3A759F] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current options.
          </p>
        </div>
      </div>

      {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-24 mt-12 border-t-2 border-brand/30 pt-12">
            <h2 className="section-heading mb-3">
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

      <div className="flex flex-wrap gap-2 mt-8">
        {["Metabolic", "Investigational", "Proapoptotic", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/mots-c" className="text-sm font-medium text-[#3A759F] hover:underline">MOTS-c</Link>
        <Link href="/peptides/5-amino-1mq" className="text-sm font-medium text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
        <Link href="/peptides/aod-9604" className="text-sm font-medium text-[#3A759F] hover:underline">AOD-9604</Link>
        <Link href="/peptides/retatrutide" className="text-sm font-medium text-[#3A759F] hover:underline">Retatrutide</Link>
        <Link href="/peptides/tesamorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Tesamorelin</Link>
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
    <ContactLink pageName="Adipotide" pagePath="/peptides/adipotide" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
