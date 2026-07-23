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
  path: "/peptides/igf-1-des",
  title: "IGF-1 DES (DES(1-3)IGF-1) — Mechanism, Research, Evidence Status | Prof. Peptide",
  description:
    "IGF-1 DES research profile: DES(1-3)IGF-1 mechanism (IGFBP evasion), preclinical potency data, the near-total absence of human evidence, dosing gaps, side effects, and regulatory status.",
});

const faqs = [
  {
    q: "Is IGF-1 DES the same as mecasermin (Increlex)?",
    a: (
      <>
        No &mdash; and conflating the two is the most common error. Mecasermin (Increlex) is FDA-approved recombinant <span className="font-semibold">full-length</span> IGF-1. IGF-1 DES is the <span className="font-semibold">des(1-3)</span> truncation &mdash; a 67-amino-acid variant missing the N-terminal tripeptide (Gly-Pro-Glu). The approval that applies to mecasermin does <span className="font-semibold">not</span> extend to IGF-1 DES, which has no approved human use.
      </>
    ),
  },
  {
    q: "Is there any human data on IGF-1 DES?",
    a: "Essentially none. There are no controlled human efficacy or safety trials of des(1-3)IGF-1. The entire evidence base is preclinical — cell-culture bioassays and rodent studies from the late 1980s and early 1990s. Any human 'protocol' circulating in community sources is not derived from published clinical evidence.",
  },
  {
    q: "Why is des(1-3)IGF-1 more potent than intact IGF-1?",
    a: (
      <>
        Availability, not receptor affinity. Removing the N-terminal tripeptide (especially Glu3) sharply lowers binding to the IGF-binding proteins (IGFBPs) that normally sequester circulating IGF-1. Because des(1-3)IGF-1 escapes that sequestration, more free peptide reaches the type-1 IGF receptor &mdash; producing roughly 7&ndash;10x greater potency in cell assays and about 2.5x in vivo in rats [1][2][4]. Notably, des(1-3)IGF-1 binds the IGF-1 receptor <span className="font-semibold">equal to or slightly worse</span> than intact IGF-1; the potency comes from escaping IGFBPs, not from tighter receptor binding.
      </>
    ),
  },
  {
    q: "How is IGF-1 DES different from IGF-1 LR3?",
    a: (
      <>
        Both are IGFBP-evading IGF-1 variants, which is why they are often discussed together. IGF-1 DES achieves evasion by <span className="font-semibold">deleting</span> the N-terminal tripeptide; {" "}
        <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>{" "}
        achieves it by <span className="font-semibold">adding</span> a 13-residue N-terminal extension plus an Arg-for-Glu3 substitution. A frequently repeated distinction is that IGF-1 DES tends to have a shorter systemic residence &mdash; escaping IGFBP binding removes the carrier reservoir that prolongs intact IGF-1&apos;s half-life. Neither claim has been validated in controlled human pharmacokinetic studies.
      </>
    ),
  },
  {
    q: "What is the correct dose of IGF-1 DES?",
    a: "There is no validated human dosing protocol. The only quantified doses in the literature are animal (rodent subcutaneous mini-pump infusion, roughly 1–2 mg/kg/day in the Australian studies) and cell-culture nanomolar concentrations. Those are experimental parameters for animals and cells — not human doses. No published clinical evidence establishes a safe or effective human dose.",
  },
  {
    q: "Is IGF-1 DES banned in sport?",
    a: "Yes. IGF-1 and its analogues are prohibited at all times by the World Anti-Doping Agency under Section S2 (peptide hormones, growth factors, related substances). IGF-1 DES falls squarely within the IGF-1 analogue class.",
  },
  {
    q: "Where can I buy IGF-1 DES?",
    a: (
      <>
        IGF-1 DES is sold only as a research-grade material. In PP&apos;s vetted vendor directory it is currently listed by Swiss Chems &mdash; see the{" "}
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
    title:
      "Natural and synthetic forms of IGF-1 and the potent derivative destripeptide IGF-1: biological activities and receptor binding",
    authors: "Ballard FJ, Francis GL, Ross M, Bagley CJ, May B, Wallace JC.",
    journal: "Biochem Biophys Res Commun / PubMed",
    year: "1987",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/2962574/",
    summary:
      "Foundational characterization of destripeptide IGF-1. In a protein-synthesis bioassay, des(1-3)IGF-1 was roughly 7x more potent than intact IGF-1 — and, critically, this potency was NOT explained by tighter IGF-1 receptor binding. The study set up the central puzzle later resolved by the IGFBP-evasion mechanism.",
  },
  {
    title:
      "IGF-binding proteins inhibit the biological activities of IGF-1 and IGF-2 but not des-(1-3)-IGF-1",
    authors: "Ross M, Francis GL, Szabo L, Wallace JC, Ballard FJ.",
    journal: "Biochem J / PubMed",
    year: "1989",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/2539101/",
    summary:
      "The mechanistic key. IGF-binding proteins strongly suppressed the biological activity of IGF-1 and IGF-2 but had essentially no effect on des-(1-3)-IGF-1. This established that the derivative's greater potency comes from escaping IGFBP sequestration rather than from any change in receptor pharmacology.",
  },
  {
    title:
      "Increased weight gain, nitrogen retention and muscle protein synthesis following treatment of diabetic rats with IGF-1 and des(1-3)IGF-1",
    authors: "Tomas FM, Knowles SE, Owens PC, et al.",
    journal: "Biochem J / PubMed",
    year: "1991",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/1710892/",
    summary:
      "In diabetic rats, both IGF-1 and des(1-3)IGF-1 increased weight gain, nitrogen retention and muscle protein synthesis, with anabolism directed toward lean tissue. An animal model — not a human efficacy trial.",
  },
  {
    title:
      "IGF-1 and especially IGF-1 variants are anabolic in dexamethasone-treated rats",
    authors: "Tomas FM, Knowles SE, Owens PC, et al.",
    journal: "Biochem J / PubMed",
    year: "1992",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/1371669/",
    summary:
      "In a glucocorticoid-catabolic rat model, the IGFBP-evading variants des(1-3)IGF-1 and LR3-IGF-1 were roughly 2.5x more potent than intact IGF-1 despite weaker IGF-1 receptor binding — reinforcing that reduced IGFBP binding, not receptor affinity, drives in-vivo potency.",
  },
  {
    title:
      "Effects of IGF-1, IGF-2 and des(1-3)IGF-1 on growth hormone and IGF-binding protein secretion from cultured rat anterior pituitary cells",
    authors: "Simes JM, Wallace JC, Walton PE.",
    journal: "J Endocrinol / PubMed",
    year: "1991",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/1715381/",
    summary:
      "In rat anterior pituitary cell culture, des(1-3)IGF-1 affected GH and IGFBP secretion with greater potency than intact IGF-1 — again attributed to reduced local IGFBP sequestration rather than a distinct receptor mechanism.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does IGF-1 DES work?",
    intro:
      "IGF-1 DES (des(1-3)IGF-1) is a truncated IGF-1 analogue missing the N-terminal tripeptide Gly-Pro-Glu. Removing this tripeptide — especially the Glu3 residue — sharply lowers the peptide's affinity for the IGF-binding proteins (IGFBPs) that normally sequester circulating IGF-1. Because it escapes IGFBP sequestration, more free peptide reaches the type-1 IGF receptor. This is an AVAILABILITY effect, not stronger receptor binding: des(1-3)IGF-1 binds the IGF-1 receptor equal to or slightly worse than intact IGF-1.",
    body: [
      "N-terminal truncation [1]. IGF-1 DES lacks the first three N-terminal amino acids (Gly-Pro-Glu) of the 70-residue IGF-1 sequence, leaving a 67-amino-acid peptide. The deletion of Glu3 in particular is what disrupts high-affinity IGFBP binding.",
      "IGFBP evasion is the core mechanism [2]. IGF-binding proteins normally bind and sequester the great majority of circulating IGF-1 and IGF-2, blunting their activity. In the defining experiment, IGFBPs suppressed IGF-1 and IGF-2 activity but had essentially NO effect on des(1-3)IGF-1 — establishing that the derivative works by escaping IGFBP sequestration.",
      "Greater availability, not greater affinity [1][4]. Because more free peptide reaches the receptor, des(1-3)IGF-1 shows roughly 7–10x greater potency in cell assays and about 2.5x in vivo in rats. Yet in direct binding studies it binds the IGF-1 receptor equal to or slightly WORSE than intact IGF-1 — the potency is an availability effect, full stop.",
      "Downstream signaling is conventional. Once bound to the type-1 IGF receptor, the resulting signaling (PI3K/Akt and MAPK pathways driving protein synthesis and anti-catabolic effects) is the same as for intact IGF-1. IGF-1 DES does not introduce a novel signaling route — it simply delivers more agonist to the same receptor.",
      "Shorter systemic residence [2]. Escaping IGFBP binding also removes the carrier reservoir that prolongs intact IGF-1's circulating half-life. IGFBP-evasion therefore tends to SHORTEN systemic residence relative to IGFBP-bound IGF-1 — one reason free IGF peptides are understood to clear rapidly.",
    ],
  },
  {
    id: "research",
    title: "What is IGF-1 DES used for?",
    intro:
      "IGF-1 DES has been characterized almost exclusively in preclinical work: cell-culture potency and receptor-binding assays, and rodent anabolism studies from the late 1980s and early 1990s. There are no controlled human efficacy or safety trials. Everything below is animal or cell data — stated plainly so it is not mistaken for evidence of human benefit.",
    body: [
      "Potency and receptor-binding characterization [1]. Ballard 1987 established that des(1-3)IGF-1 was ~7x more potent than intact IGF-1 in a protein-synthesis bioassay, and that this potency was not explained by tighter IGF-1 receptor binding.",
      "The IGFBP-evasion mechanism [2]. Ross 1989 is the mechanistic key: IGFBPs suppressed IGF-1 and IGF-2 activity but not des(1-3)IGF-1, showing the derivative's potency comes from escaping IGFBP sequestration.",
      "Anabolism in diabetic rats [3]. Tomas 1991 found that both IGF-1 and des(1-3)IGF-1 increased weight gain, nitrogen retention and muscle protein synthesis in diabetic rats, with lean-tissue-directed anabolism.",
      "Anabolism in glucocorticoid-catabolic rats [4]. Tomas 1992 found the IGFBP-evading variants des(1-3)IGF-1 and LR3-IGF-1 were ~2.5x more potent than intact IGF-1 in dexamethasone-treated rats, despite weaker receptor binding.",
      "Pituitary GH/IGFBP secretion in vitro [5]. Simes 1991 showed des(1-3)IGF-1 affected GH and IGFBP secretion from cultured rat anterior pituitary cells with greater potency than intact IGF-1.",
      "Human evidence: essentially none. No controlled human efficacy or safety trials of IGF-1 DES exist. Claims of human body-composition or recovery benefit are extrapolations from rodent and cell data, not findings from human research.",
    ],
  },
  {
    id: "timeline",
    title: "How long does IGF-1 DES take to work?",
    intro:
      "There is no human timeline data for IGF-1 DES because there are no human trials. Any statement about how quickly effects appear in people would be speculation. What can be said is mechanistic and drawn from animals: free IGF peptides that escape IGFBP binding are understood to clear rapidly (minutes), so there is no carrier-driven sustained exposure.",
    content:
      "No human onset-of-effect data exists for IGF-1 DES — no controlled trial has measured a timeline in people. In the rodent literature, anabolic effects (weight gain, nitrogen retention, muscle protein synthesis) were measured over multi-day continuous subcutaneous infusion, not from single injections, and those parameters describe animals rather than humans. Mechanistically, because des(1-3)IGF-1 escapes the IGFBP carrier system that prolongs intact IGF-1's half-life, free IGF peptides are expected to clear within minutes — there is no verified human pharmacokinetic profile to define a meaningful onset or duration.",
  },
  {
    id: "dosing",
    title: "How is IGF-1 DES dosed?",
    intro:
      "No validated human dosing protocol for IGF-1 DES exists. The only quantified doses in the published literature are animal (rodent subcutaneous mini-pump infusion, roughly 1–2 mg/kg/day in the Australian studies) and cell-culture nanomolar concentrations. Those are experimental parameters for animals and cells — not recommendations for humans. Any human 'research dose' circulating in community sources is not derived from published clinical evidence.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No validated human dose.</span> There is no established, evidence-based human dosing protocol for IGF-1 DES. This is the single most important point in this section.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Animal dose (context only).</span> The rodent anabolism studies used continuous subcutaneous mini-pump infusion at roughly 1&ndash;2 mg/kg/day [3][4]. This is an animal experimental parameter, not a human dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cell-culture dose (context only).</span> In-vitro bioassays used nanomolar concentrations [1][2][5]. These describe a culture dish, not a person.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Community figures are not evidence.</span> Any specific human microgram figure circulating in forums or vendor copy is not traceable to a published clinical study and should not be treated as a validated dose.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Because no validated human dose exists, this profile does not recommend one. The reconstitution math shown in the next section is illustrative unit-conversion arithmetic only.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is IGF-1 DES administered?",
    intro:
      "There is no established human administration protocol for IGF-1 DES. The route reported in the animal literature is subcutaneous, but timing, food-state, and steady-state parameters were never characterized for humans. The aspect table below reports only what is actually established (very little); the reconstitution table is illustrative unit-conversion math and NOT a recommended human dose.",
    node: (
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">What is and isn&apos;t known.</span> The rodent studies delivered des(1-3)IGF-1 by continuous subcutaneous infusion, so subcutaneous is the route with any experimental precedent. Beyond that, the practical parameters people usually want &mdash; best time of day, whether to dose with food, half-life, steady-state &mdash; are simply not established for IGF-1 DES in humans. The table records that honestly rather than inventing values.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Route</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Subcutaneous (the route used in the animal literature)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not established</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not established</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No verified human PK (free IGF peptides clear in minutes)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Standard</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not established</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math (illustrative only).</span> The table below is pure unit-conversion arithmetic showing how a given mass of powder maps to draws on a U-100 insulin syringe (100 units = 1 mL). It assumes a 1 mg vial. The microgram columns are <span className="font-semibold">illustrative reconstitution math only &mdash; NOT recommended human doses</span>. No validated human dose for IGF-1 DES exists, so nothing in this table should be read as a dosing recommendation.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">20 mcg</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">50 mcg</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">100 mcg</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">0.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 1 mg vial reconstituted in 1 mL, each U-100 unit drawn corresponds to 10 mcg of powder; at 2 mL, each unit corresponds to 5 mcg. This is conversion arithmetic for laboratory handling, not a human dosing instruction. For a primer on reading insulin syringes, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does IGF-1 DES stack well with?",
    intro:
      "In community discussion IGF-1 DES is often mentioned alongside GH secretagogues and other IGF-axis peptides, on the theory that stimulating endogenous GH raises IGF-1 while a locally-acting IGF variant adds direct receptor activation. This is a rationale, not evidence: there are no controlled human studies of any IGF-1 DES stack, so no synergy claim can be substantiated. The links below are to related profiles for orientation only.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">IGF-1 LR3.</span>{" "}
          <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>{" "}
          is the other IGFBP-evading IGF-1 variant and the most common point of comparison. The two are alternative approaches to the same evasion goal &mdash; there is no evidence for combining them, and doing so would stack two IGF-1 receptor agonists with no human safety data.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GH secretagogues.</span> IGF-1 DES is often discussed alongside{" "}
          <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>,{" "}
          <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, and{" "}
          <Link href="/peptides/mk-677" className="text-[#3A759F] hover:underline">MK-677</Link>, which raise endogenous GH and IGF-1. Any combined use is community practice, not a protocol supported by controlled human data.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">No demonstrated synergy.</span> No published study has tested IGF-1 DES in a human stack. Claims of additive or synergistic benefit are speculative and should be treated as such.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of IGF-1 DES?",
    intro:
      "The human safety profile of IGF-1 DES is unknown — there are no controlled human trials to characterize it. The concerns below are extrapolated from the biology of the IGF axis in general, not from data specific to des(1-3)IGF-1 in humans. They are theoretical risks, and their absence from a list does not mean an effect is safe.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (expected from the IGF axis)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypoglycemia.</span> IGF-1 receptor activation has insulin-like metabolic effects and can lower blood glucose. This is the most predictable acute concern for any IGF-1 agonist.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection-site reactions.</span> Local redness or irritation, as with any subcutaneous peptide injection.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Less common (moderate, theoretical)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Tissue overgrowth.</span> Sustained IGF-1 receptor stimulation is theoretically capable of driving unwanted tissue growth. Not characterized for des(1-3)IGF-1 in humans.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fluid retention and related IGF/GH-axis effects.</span> Reported broadly for the IGF/GH axis; unquantified for this specific analogue.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious (theoretical, IGF-axis-wide)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Promotion of pre-existing neoplasia.</span> The IGF axis is well recognized in oncology as a growth-promoting pathway that can accelerate pre-existing tumors. This concern applies to the IGF axis generally; it has NOT been characterized for des(1-3)IGF-1 in humans, but it is the most serious theoretical risk.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Unknown human safety overall.</span> No controlled human trial has assessed the safety of IGF-1 DES. The full risk profile is genuinely uncharacterized.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The honest summary: IGF-1 DES has an unknown human safety profile. Every item above is inferred from IGF-axis biology rather than measured for this compound in people.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does IGF-1 DES interact with other drugs?",
    intro:
      "No human interaction studies of IGF-1 DES exist. The one interaction that is conceptually clear-cut is with agents affecting glucose control, because IGF-1 receptor activation has insulin-like effects. Everything else is unstudied.",
    body: [
      "Insulin and glucose-lowering agents. Because IGF-1 receptor activation lowers blood glucose, concurrent use with insulin or other hypoglycemic agents could theoretically compound hypoglycemia. This is a conceptual interaction, not one measured in humans for des(1-3)IGF-1.",
      "Other IGF-1 receptor agonists (e.g., IGF-1 LR3, full-length IGF-1). Combining agonists at the same receptor stacks the same theoretical risks (hypoglycemia, tissue overgrowth) with no human data to bound them.",
      "No characterized drug-drug pharmacokinetic interactions. There are no published human interaction studies of any kind for IGF-1 DES.",
    ],
  },
  {
    id: "storage",
    title: "How should IGF-1 DES be stored?",
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
    title: "What are the limitations of IGF-1 DES research?",
    intro:
      "This is the most important section on the page. IGF-1 DES is a preclinical research compound with no human evidence base. Read the mechanism and potency claims elsewhere on this page through that lens: they come from rodents and cell dishes, not people.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">No human efficacy or safety data.</span> There are no controlled human trials of IGF-1 DES. No human study has established that it does anything beneficial, at any dose, safely. The absence is near-total, and this profile does not paper over it.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Potency claims are rodent and cell only.</span> The headline &quot;7&ndash;10x more potent&quot; and &quot;2.5x in vivo&quot; figures come from cell bioassays and rat studies [1][4]. They describe potency in those systems, not clinical effect in humans.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Do not conflate with mecasermin (Increlex).</span> The FDA-approved drug mecasermin is recombinant full-length IGF-1. IGF-1 DES is the des(1-3) truncation and is a distinct, unapproved compound. Approval of mecasermin says nothing about the safety or efficacy of IGF-1 DES.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Vendor identity and purity are unverified.</span> Research-grade IGF-1 DES is sold without regulatory oversight of identity or purity; what is in a given vial cannot be assumed to match the label without independent testing.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Prohibited in sport.</span> The World Anti-Doping Agency prohibits IGF-1 and its analogues at all times under Section S2. IGF-1 DES is a research chemical, not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source IGF-1 DES",
    intro:
      "IGF-1 DES is not FDA-approved for any human use and is sold only as a research-grade peptide. It is a niche compound with limited vendor coverage. In PP's vetted directory it is currently listed by the vendor highlighted below, which publishes batch certificates of analysis.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "swiss-chems", note: "Lists IGF-1 DES · published batch COAs · code PROF10" },
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
    title: "IGF-1 DES FAQ",
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
          Ballard FJ, Francis GL, Ross M, Bagley CJ, May B, Wallace JC. Natural and synthetic forms of insulin-like growth factor-1 (IGF-1) and the potent derivative, destripeptide IGF-1: biological activities and receptor binding. Biochem Biophys Res Commun. 1987;149(2):398-404.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/2962574/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/2962574/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ross M, Francis GL, Szabo L, Wallace JC, Ballard FJ. Insulin-like growth factor (IGF)-binding proteins inhibit the biological activities of IGF-1 and IGF-2 but not des-(1-3)-IGF-1. Biochem J. 1989;258(1):267-272.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/2539101/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/2539101/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tomas FM, Knowles SE, Owens PC, et al. Increased weight gain, nitrogen retention and muscle protein synthesis following treatment of diabetic rats with insulin-like growth factor (IGF)-I and des(1-3)IGF-I. Biochem J. 1991;276(Pt 2):547-554.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/1710892/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/1710892/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tomas FM, Knowles SE, Owens PC, et al. Insulin-like growth factor-I (IGF-I) and especially IGF-I variants are anabolic in dexamethasone-treated rats. Biochem J. 1992;282(Pt 1):91-97.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/1371669/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/1371669/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Simes JM, Wallace JC, Walton PE. The effects of insulin-like growth factor-I (IGF-I), IGF-II and des(1-3)IGF-I, a potent IGF analogue, on growth hormone and IGF-binding protein secretion from cultured rat anterior pituitary cells. J Endocrinol. 1991;130(1):93-99.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/1715381/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/1715381/
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
          Plain-English summaries of the peer-reviewed studies behind the claims above. Every one is preclinical (cell or rodent) &mdash; there are no human trials of IGF-1 DES. Click any title to read the source paper.
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
  { id: "overview", title: "What is IGF-1 DES?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function Igf1DesPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"IGF-1 DES","description":"IGF-1 DES (des(1-3)IGF-1) research profile: IGFBP-evasion mechanism, preclinical potency data, the near-total absence of human evidence, side effects, and regulatory status.","url":"https://profpeptide.com/peptides/igf-1-des","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"IGF-1 DES"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">IGF-1 DES</h1>
        <span className="tag">Growth Factor</span>
        <span className="tag">Research-Grade</span>
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
              <dd className="text-base text-[#16181B] dark:text-slate-100">DES(1-3)IGF-1 &mdash; a truncated IGF-1 analogue missing the N-terminal tripeptide, letting it evade the IGF-binding proteins that normally sequester IGF-1 and making it markedly more potent locally.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Subcutaneous injection (the route used in the animal literature)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">No verified human PK &mdash; free IGF peptides clear in minutes</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">No validated human dose &mdash; only animal (~1&ndash;2 mg/kg/day rodent infusion) and cell-culture parameters exist</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Preclinical only &mdash; essentially no human data. NOT the same as mecasermin/Increlex (that approved drug is full-length IGF-1). WADA-prohibited (S2).</dd>
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
        <h2 className="section-heading mb-3">What is IGF-1 DES?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            IGF-1 DES &mdash; des(1-3)IGF-1, also called destripeptide IGF-1 &mdash; is a truncated 67-amino-acid analogue of insulin-like growth factor-1, missing the N-terminal tripeptide Gly-Pro-Glu. Deleting that tripeptide (especially the Glu3 residue) sharply lowers its affinity for IGF-binding proteins, so it escapes the sequestration that normally blunts circulating IGF-1 &mdash; making it markedly more potent than intact IGF-1 in cell and rodent studies. Crucially, that potency is an <span className="font-semibold">availability</span> effect, not stronger receptor binding, and the evidence base is almost entirely preclinical: there are essentially no controlled human trials. It is a distinct compound from the approved drug{" "}
            mecasermin (Increlex), which is recombinant full-length IGF-1. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Escapes IGFBP sequestration, delivering more free peptide to the IGF-1 receptor (mechanistic, from cell/rodent data)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">~7&ndash;10x greater potency than intact IGF-1 in cell assays; ~2.5x in vivo in rats [1][4]</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anabolic in rodent models (increased weight gain, nitrogen retention, muscle protein synthesis) [3][4]</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No human efficacy has been demonstrated &mdash; all reported benefits are preclinical</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> No validated human dosing protocol is established. The only quantified doses in the literature are animal (rodent subcutaneous infusion, ~1&ndash;2 mg/kg/day) and cell-culture nanomolar concentrations. Any human microgram figure circulating in community sources is not derived from published clinical evidence.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> IGF-1 DES is a niche research-grade compound. In PP&apos;s vetted directory it is currently listed by Swiss Chems. See{" "}
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
        {["Growth Factor", "IGF-1 Analogue", "IGFBP Evasion", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/mgf" className="text-sm font-medium text-[#3A759F] hover:underline">MGF</Link>
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Ipamorelin</Link>
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#3A759F] hover:underline">CJC-1295</Link>
        <Link href="/peptides/mk-677" className="text-sm font-medium text-[#3A759F] hover:underline">MK-677</Link>
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
    <ContactLink pageName="IGF-1 DES" pagePath="/peptides/igf-1-des" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
      </div>
    </>
  );
}
