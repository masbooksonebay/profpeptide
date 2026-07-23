import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ProfileTOC from "@/components/ProfileTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/adamax",
  title: "Adamax — Marketed Semax/Adamantane Analog: Honest Evidence Review | Prof. Peptide",
  description:
    "Adamax research profile: a vendor-marketed N-acetyl-Semax adamantane analog with no peer-reviewed literature. What it is claimed to be, the real Semax family context, and an honest look at the evidence gap.",
});

const faqs = [
  {
    q: "Is there any published research on Adamax?",
    a: "No. A PubMed search returns no studies on Adamax — no clinical trials, no animal studies, no pharmacology, and no toxicology on the compound. Everything published about it is vendor marketing or anecdotal user reports. The only genuine peer-reviewed literature in this space is on its marketed parent peptide, Semax.",
  },
  {
    q: "What is Adamax, exactly?",
    a: "It is marketed as a doubly-modified analog of Semax — N-acetyl-Semax carrying a C-terminal adamantane group — intended to be more lipophilic, more resistant to enzymatic breakdown, and longer-acting than Semax. That structure is a vendor description; no independent peer-reviewed publication has confirmed the structure or identity of the material sold as Adamax.",
  },
  {
    q: "Is Adamax the same thing as Semax?",
    a: (
      <>
        No.{" "}
        <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>{" "}
        is a genuinely researched ACTH(4-7) analog with decades of Russian studies behind it. Adamax is marketed as a further-modified derivative of Semax that has no studies of its own. They are related, but Semax&apos;s evidence does not automatically transfer to Adamax &mdash; chemical modifications can change activity, potency, duration, and safety.
      </>
    ),
  },
  {
    q: "Is Adamax safe?",
    a: "Unknown. There is no toxicology or safety data on Adamax of any kind. Its parent Semax is generally well tolerated in Semax studies, but that does not establish Adamax's safety — and because commercial Adamax has no published identity or purity characterization, you are also relying entirely on a vendor's documentation to know what the material actually is.",
  },
  {
    q: "What is a typical Adamax dose?",
    a: "There is no established dose. No pharmacokinetic or dose-ranging study exists for Adamax, so any figure is a vendor suggestion or an analogy to Semax rather than an evidence-based recommendation. Because the adamantane modification is claimed to change potency and duration, even a Semax-derived dose may not translate.",
  },
  {
    q: "Where can I buy Adamax?",
    a: (
      <>
        Adamax is sold by a small number of specialty research-peptide vendors as research-grade material. Given the absence of any published characterization, third-party testing (HPLC purity and mass-spectrometric identity) matters more than usual. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
        <Link href="/coupons" className="text-[#3A759F] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

// NOTE: Every entry below is a study of the PARENT peptide Semax, included only
// as family/analog context. None is evidence for Adamax, which has no literature.
const studies = [
  {
    title: "A nootropic adrenocorticotropin analog 4-10-Semax (15 years experience in its design and study)",
    authors: "Asmarin IP, Nezavibat'ko VN, Miasoedov NF, et al.",
    journal: "Zh Vyssh Nerv Deiat Im I P Pavlova / PubMed",
    year: "1997",
    access: "Abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/9173745/",
    summary: "SEMAX STUDY — family context, not Adamax. A review of the design and study of Semax, the ACTH(4-10)/ACTH(4-7)-derived heptapeptide from which Adamax is marketed as being modified. It documents Semax's nootropic profile — stimulation of operative memory and attention, increased resistance to hypoxia, and improved brain circulation. This is the real, researched parent compound; it is included to show what family Adamax is claimed to belong to, and is not evidence that Adamax shares these properties.",
  },
  {
    title: "The heptapeptide Semax stimulates BDNF expression in different areas of the rat brain in vivo",
    authors: "Dolotov OV, Seredenina TS, Levitskaya NG, et al.",
    journal: "Dokl Biol Sci / PubMed",
    year: "2003",
    access: "Abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/14556513/",
    summary: "SEMAX STUDY — family context, not Adamax. Intranasal Semax increased brain-derived neurotrophic factor (BDNF) expression across several regions of the rat brain in vivo. Vendors extrapolate an even stronger BDNF effect for Adamax on the strength of its adamantane modification, but no such measurement has ever been made on Adamax — this finding is about Semax only.",
  },
  {
    title: "Semax and Selank inhibit the enkephalin-degrading enzymes from human serum",
    authors: "Kost NV, Sokolov OY, Gabaeva MV, et al.",
    journal: "Russ J Bioorg Chem / PubMed",
    year: "2001",
    access: "Abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/11443939/",
    summary: "SEMAX / SELANK STUDY — family context, not Adamax. Semax and the related peptide Selank inhibited enkephalin-degrading enzymes in human serum, a mechanism that may prolong endogenous opioid signaling and contribute to anti-stress effects. This is a parent/family finding; whether the modified molecule sold as Adamax retains this activity is untested.",
  },
  {
    title: "Effectiveness of Semax in the acute period of hemispheric ischemic stroke (a clinical and electrophysiological study)",
    authors: "Gusev EI, Skvortsova VI, Miasoedov NF, et al.",
    journal: "Zh Nevrol Psikhiatr Im S S Korsakova / PubMed",
    year: "1997",
    access: "Abstract",
    url: "https://pubmed.ncbi.nlm.nih.gov/11517472/",
    summary: "SEMAX STUDY — family context, not Adamax. A clinical study of Semax in 30 patients during the acute period of hemispheric ischemic stroke (vs 80 controls on standard therapy), using clinical scales and EEG/evoked-potential mapping. Semax — not Adamax — has this clinical history in Russia. No comparable study of any kind exists for Adamax.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Adamax work?",
    intro:
      "Adamax's mechanism has not been studied. Everything vendors describe is inferred from its marketed parent, Semax — a genuinely researched ACTH(4-7) analog. The mechanisms below are Semax mechanisms, offered as family context; whether the adamantane-modified molecule sold as Adamax actually shares any of them is untested.",
    body: [
      "No direct evidence. There are no published mechanistic studies on Adamax. The items below describe the parent peptide, Semax, and are presented as analog context — not as evidence for Adamax.",
      "BDNF / neurotrophin signaling (Semax, parent). Semax — not Adamax — increases BDNF expression across several regions of the rat brain in vivo [2]. Vendors extrapolate a similar, often 'amplified', BDNF effect for Adamax, but this has never been measured for the compound.",
      "Melanocortin / ACTH-fragment activity (Semax lineage). Semax is derived from the ACTH(4-7)/ACTH(4-10) sequence [1] and is proposed to act partly through melanocortin (e.g. MC4R) signaling. Adamax is marketed as retaining this activity; no data confirm it.",
      "Enkephalinase inhibition (Semax family). Semax, with the related peptide Selank, inhibits enkephalin-degrading enzymes in human serum [3], which may prolong endogenous opioid signaling. This is a Semax/Selank finding, not an Adamax finding.",
      "Adamantane modification (theory only). Attaching an adamantane group is a recognized medicinal-chemistry tactic for increasing lipophilicity and metabolic stability. For Adamax this is a plausible rationale for a longer-acting molecule — but it remains theory, with no pharmacokinetic study on the actual compound.",
    ],
  },
  {
    id: "research",
    title: "What is Adamax used for?",
    intro:
      "There is no research on Adamax to summarize. A literature search returns no peer-reviewed preclinical or clinical studies on the compound. The only relevant published evidence concerns its parent, Semax, and is presented here strictly as family context — it is not evidence that Adamax produces the same effects.",
    body: [
      "No Adamax studies exist. There are no trials, no animal studies, and no pharmacology or toxicology on Adamax specifically. It is marketed for cognition, focus, stress resilience, and neuroprotection, but none of these applications has been tested for the compound.",
      "Semax cognition research (parent). Semax has decades of Russian research as a nootropic — improving memory and attention — and a clinical history in Russia [1]. This is Semax, not Adamax.",
      "Semax and BDNF (parent). Intranasal Semax raises BDNF in the rat brain [2]. Adamax is marketed on the premise of an even stronger BDNF effect; that premise is untested.",
      "Semax in ischemic stroke (parent, clinical). Semax has been studied in patients during acute ischemic stroke in Russia [4]. No comparable study exists for Adamax.",
      "Bottom line. Any 'research applications' attributed to Adamax are borrowed from Semax. Treat them as hypotheses about Adamax, not as findings.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Adamax take to work?",
    intro:
      "Onset and duration for Adamax are not characterized in any study. The figures vendors and users cite are claims, not pharmacokinetic measurements.",
    content:
      "Vendors and user reports commonly claim a 20–40 minute onset after intranasal use and a duration longer than Semax (sometimes stated as several hours), attributing the longer action to the adamantane modification. These are marketing and anecdotal claims — no half-life, onset, or duration study has been performed on Adamax. For reference, the parent Semax has a short plasma half-life (on the order of minutes), with biological effects that outlast plasma levels via gene-expression changes; whether Adamax actually extends this is unknown.",
  },
  {
    id: "dosing",
    title: "How is Adamax dosed?",
    intro:
      "There is no established dose for Adamax. No pharmacokinetic or dose-ranging study has been conducted, so any numbers below are vendor suggestions or analogies to Semax — not study-derived recommendations.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No validated dose.</span> No Adamax study has established a safe or effective dose, route, or frequency.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vendor-suggested (intranasal).</span> Vendors commonly suggest low-hundreds-of-micrograms intranasally, once or twice daily &mdash; presented explicitly as a vendor suggestion by analogy to Semax, not as an evidence-based dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Analogy to Semax has limits.</span> Even a dose borrowed from Semax may not translate: the adamantane modification is claimed to change potency and duration.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No titration or PK basis.</span> Without pharmacokinetic data, titration, timing, and cycling for Adamax are guesswork.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          If you are reconstituting a vial, the arithmetic (mg per vial and bacteriostatic-water volume to syringe units) is the same as any peptide &mdash; use the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>. Because no dose is established for Adamax, treat any resulting number as arbitrary until real dosing data exists.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is Adamax administered?",
    intro: (
      <>
        Adamax is marketed primarily for intranasal use (like{" "}
        <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>), with subcutaneous use also mentioned. The practical notes below are general peptide-handling conventions &mdash; there is no Adamax-specific administration protocol validated in any study. For subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Marketed intranasal (primary) or subcutaneous. No route has been validated for Adamax.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Not established. Earlier in the day is suggested by analogy to Semax&apos;s mild stimulating effect, but this is extrapolation.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Concentration.</span> There is no established Adamax concentration or vial convention. Any recon volume is arbitrary in the absence of an established dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose / cycle.</span> Not defined &mdash; no protocol exists to be consistent with.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Identity caveat.</span> Because commercial Adamax is uncharacterized in the literature, technique cannot compensate for not knowing exactly what the material is &mdash; vendor third-party testing matters.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> None of the timing variables that matter for a peptide &mdash; onset, duration, frequency, cumulative effect &mdash; has been measured for Adamax. The table below is therefore mostly a record of what is <em>not</em> known, with the parent Semax noted where relevant.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">What is known</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not established &mdash; vendor suggestions only (commonly 1&ndash;2&times;/day)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not established; earlier in the day suggested by analogy to Semax</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No data; peptides of this class are generally food-independent</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Route</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Marketed intranasal or subcutaneous; no route validated for Adamax</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Uncharacterized for Adamax. Parent Semax: short (minutes). Claimed longer duration is unmeasured.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Unknown &mdash; no pharmacokinetic data exist</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution.</span> There is no established Adamax vial size, concentration, or dose, so a fixed reconstitution table would imply a precision that does not exist. The arithmetic is standard for any peptide &mdash; divide vial mass by bacteriostatic-water volume for concentration, then convert your chosen dose to U-100 syringe units with the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator</Link>. Any dose entered is a guess until dosing data exists.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Adamax stack well with?",
    intro:
      "There are no studied Adamax stacks. In nootropic communities it is combined with other cognitive compounds, but no combination has been tested for Adamax specifically. The pairings below are anecdotal and unverified.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standalone.</span> The most common way it is used &mdash; and still entirely unstudied.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Semax / Selank (family).</span> Some users run Adamax alongside or in place of{" "}
          <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>{" "}
          or{" "}
          <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>. As the marketed parent, Semax is the one with an actual evidence base; no study has compared or combined Adamax with either.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Racetams / choline sources.</span> A common anecdotal nootropic pairing. No interaction or efficacy data for Adamax.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Caffeine / L-theanine.</span> Reported anecdotally; no data on any interaction with Adamax.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Adamax?",
    intro:
      "Adamax has no published safety data of any kind — no toxicology and no adverse-event reporting from any trial, because there are no trials. What appears below is limited to scattered anecdotal reports and to the generally mild profile of its parent, Semax, in Semax studies. Absence of reported harm here reflects absence of study, not demonstrated safety.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (anecdotal, unverified)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild nasal irritation.</span> Reported with intranasal use; user-reported, not from any study.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild headache.</span> Occasionally reported; inconsistent across users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Overstimulation / disrupted sleep if dosed late.</span> Reported by analogy to Semax&apos;s mild stimulating effect.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Uncertain (no data)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Systemic effects.</span> Uncharacterized. No study has looked for them.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Individual variability.</span> Unknown &mdash; there is no cohort data of any size.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious (unknown &mdash; no data)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No toxicology or long-term safety data exist for Adamax.</span> Serious risks can be neither confirmed nor ruled out.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Unverified identity and purity.</span> Because commercial Adamax has no published characterization, what is in a given vial is itself a safety consideration.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The honest summary is that Adamax&apos;s safety is simply unknown. Its parent Semax has a clean profile in Semax studies, but a modified molecule can behave differently, and none of that work was done on Adamax.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Adamax interact with other drugs?",
    intro:
      "No drug interactions have been studied for Adamax. The notes below are theoretical, by analogy to the parent Semax, and should not be read as established.",
    body: [
      "No interaction data. No drug-drug interaction has been characterized for Adamax in any study.",
      "Theoretical, by analogy to Semax (parent). If Adamax shares Semax's neurotrophic and neurotransmitter-modulating activity, ordinary caution with serotonergic or other CNS-active drugs would be prudent — but this is extrapolation, not evidence.",
      "Unknown for everything else. With no pharmacokinetic or metabolism data, interactions with other medications cannot be predicted.",
    ],
  },
  {
    id: "storage",
    title: "How should Adamax be stored?",
    body: [
      "Lyophilized (powder) form: store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted solution: store at 2–8°C; do not freeze; use within a few weeks.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Protect from light. Store in the original carton or an amber dropper bottle.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
      "Storage cannot compensate for identity: because commercial Adamax is uncharacterized in the literature, correct handling still does not guarantee a defined product.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Adamax research?",
    intro:
      "This is the most important section on the page. Adamax is a compound with essentially no scientific record — the limitations are not caveats around a body of evidence, they are the evidence situation.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">No peer-reviewed literature.</span> A PubMed search returns no studies on Adamax. There is no preclinical or clinical evidence for its effects, potency, pharmacokinetics, or safety.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Claims are marketing or anecdotal.</span> Every stated benefit, onset, duration, and dose traces to vendor pages or user reports, not to controlled research.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Structure and identity unconfirmed.</span> The &ldquo;N-acetyl-Semax plus adamantane&rdquo; description is a vendor description. No independent published work confirms the structure of the material sold as Adamax, and purity and identity vary by vendor.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Semax evidence does not transfer.</span>{" "}
          <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>{" "}
          is genuinely studied &mdash; but chemical modifications can change activity, potency, duration, and safety. Semax data is context, not a substitute for Adamax data.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Not approved anywhere; research-use-only.</span> Adamax has no regulatory status with any agency and is not intended for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Adamax",
    intro:
      "Adamax is a niche compound sold by a small number of specialty research-peptide vendors as research-use-only material. Given the complete absence of published characterization, third-party testing (HPLC purity and mass-spectrometric identity) matters even more than usual — you are relying entirely on the vendor's documentation to know what the material is.",
    node: (
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Prefer vendors that publish batch-specific Certificates of Analysis with both purity and identity data. Because there is no reference literature for Adamax, an identity confirmation (mass spectrometry) is the only way a vendor can substantiate what the compound actually is.
        </p>
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
    title: "Adamax FAQ",
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
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          There are no references for Adamax itself &mdash; no peer-reviewed study has been published on the compound. The references below are studies of the parent peptide{" "}
          <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>{" "}
          (and the related peptide Selank), included only as family context. None is evidence for Adamax.
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Semax (parent), not Adamax.</span> Asmarin IP, Nezavibat&apos;ko VN, Miasoedov NF, et al. A nootropic adrenocorticotropin analog 4-10-Semax (15 years experience in its design and study). Zh Vyssh Nerv Deiat Im I P Pavlova. 1997.{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/9173745/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
              https://pubmed.ncbi.nlm.nih.gov/9173745/
            </a>
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Semax (parent), not Adamax.</span> Dolotov OV, Seredenina TS, Levitskaya NG, et al. The heptapeptide Semax stimulates BDNF expression in different areas of the rat brain in vivo. Dokl Biol Sci. 2003.{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/14556513/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
              https://pubmed.ncbi.nlm.nih.gov/14556513/
            </a>
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Semax / Selank (family), not Adamax.</span> Kost NV, Sokolov OY, Gabaeva MV, et al. Semax and Selank inhibit the enkephalin-degrading enzymes from human serum. Russ J Bioorg Chem. 2001.{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/11443939/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
              https://pubmed.ncbi.nlm.nih.gov/11443939/
            </a>
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Semax (parent), clinical, not Adamax.</span> Gusev EI, Skvortsova VI, Miasoedov NF, et al. Effectiveness of Semax in the acute period of hemispheric ischemic stroke. Zh Nevrol Psikhiatr Im S S Korsakova. 1997.{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/11517472/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
              https://pubmed.ncbi.nlm.nih.gov/11517472/
            </a>
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: "studies",
    title: "Published Studies",
    node: (
      <div className="space-y-6">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          There are no published studies on Adamax. The summaries below are of its parent peptide{" "}
          <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>{" "}
          (and, in one case, the related peptide Selank), included only to show what the family has &mdash; and has not &mdash; demonstrated. None is evidence for Adamax.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#3A759F] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-amber-50 text-amber-700 border border-amber-200">Semax family &mdash; not Adamax</span>
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
  { id: "overview", title: "What is Adamax?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function AdamaxPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Adamax","description":"Adamax research profile: a vendor-marketed N-acetyl-Semax adamantane analog with no peer-reviewed literature. What it is claimed to be, the real Semax family context, and an honest look at the evidence gap.","url":"https://profpeptide.com/peptides/adamax","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Adamax"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">Adamax</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
        <span className="tag">Research-Grade</span>
        <span className="tag">No Peer-Reviewed Evidence</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">
        Last reviewed: July 20, 2026
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
              <dd className="text-base text-[#16181B] dark:text-slate-100">A vendor-marketed, doubly-modified analog of Semax (N-acetyl-Semax with an adamantane group), sold for cognition &mdash; but with essentially no peer-reviewed literature of its own. Nearly everything known comes from its parent peptide, Semax.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Marketed for intranasal use (primary) or subcutaneous injection &mdash; no route validated in any study</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Uncharacterized for Adamax; parent Semax is short (minutes)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">No established dose &mdash; vendors suggest low-hundreds-of-mcg intranasally by analogy to Semax</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Not FDA-approved &mdash; research use only. No peer-reviewed literature on Adamax.</dd>
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
        <h2 className="section-heading mb-3">What is Adamax?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Adamax is a research compound sold by specialty peptide vendors and discussed in nootropic communities as a modified analog of{" "}
            <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>. Vendors describe it as N-acetyl-Semax bearing a C-terminal adamantane group &mdash; sold under vendor names such as N-Acetyl Semax Adamantane or NA-Semax-Adamantane, with no official INN or code designation &mdash; two chemical modifications intended to make it more lipophilic, more resistant to enzymatic breakdown, and longer-acting than Semax. That description is consistent across vendor sources but has not been confirmed in any peer-reviewed publication. Critically, there is no published scientific literature on Adamax itself: a PubMed search returns no studies on the compound, and every claim about its effects, potency, or pharmacokinetics traces to vendor marketing or anecdotal user reports rather than controlled research. What follows describes what Adamax is <em>marketed as</em>, places it in the context of its real, well-studied parent Semax (clearly labeled as Semax data), and is explicit about where evidence simply does not exist. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <p className="text-sm text-gray-500 dark:text-slate-400 mb-2 leading-relaxed">
              The following are marketed or anecdotally reported &mdash; none has been demonstrated in a study of Adamax.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Claimed sharper focus, executive function, and reduced &ldquo;brain fog&rdquo; (user-reported, uncontrolled)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Claimed longer duration of action than Semax (vendor claim, never measured)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Proposed BDNF / neuroplasticity support by analogy to Semax (not tested for Adamax)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Claimed resistance to enzymatic degradation from the adamantane modification (medicinal-chemistry rationale, unverified for this compound)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Marketed for cognition, stress resilience, and neuroprotection (extrapolated from Semax; no Adamax data)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> No established or study-derived dose exists for Adamax. Vendors typically suggest intranasal use in the low-hundreds-of-micrograms range by analogy to Semax &mdash; these are vendor suggestions only, not derived from any Adamax pharmacokinetic or dosing study.
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
        {["Cognitive & Nootropic", "Semax Analog", "Limited Evidence", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/semax" className="text-sm font-medium text-[#3A759F] hover:underline">Semax</Link>
        <Link href="/peptides/selank" className="text-sm font-medium text-[#3A759F] hover:underline">Selank</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/semax-selank" className="text-sm font-medium text-[#3A759F] hover:underline">Semax-Selank</Link>
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
    <ContactLink pageName="Adamax" pagePath="/peptides/adamax" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
