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
  path: "/peptides/ghrp-2",
  title: "GHRP-2 (Pralmorelin) — GH Secretagogue, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "GHRP-2 research profile: ghrelin-receptor (GHSR-1a) agonist mechanism, GH-stimulation and appetite effects, dosing, cortisol/prolactin caveat, CJC-1295 stack, FAQ.",
});

const faqs = [
  {
    q: "How is GHRP-2 different from GHRP-6 and Ipamorelin?",
    a: (
      <>
        All three activate the same ghrelin/GH-secretagogue receptor (GHSR-1a). The differences are potency and selectivity. GHRP-2 is a more potent GH releaser than{" "}
        <Link href="/peptides/ghrp-6" className="text-[#3A759F] hover:underline">GHRP-6</Link>{" "}
        and produces less appetite stimulation, but it still raises cortisol, prolactin, and ACTH modestly.{" "}
        <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>{" "}
        is the most selective of the group &mdash; GH-only, with essentially no cortisol or prolactin effect. GHRP-2 sits in the middle: stronger GH release than ipamorelin, cleaner than GHRP-6.
    </>
    ),
  },
  {
    q: "Is GHRP-2 approved for anything?",
    a: "GHRP-2 (pralmorelin) is approved in Japan as a diagnostic agent for growth hormone deficiency — a single IV dose provokes a GH pulse that is measured to assess pituitary function. It is not FDA-approved for any therapeutic use in the United States and is sold elsewhere only as a research-grade peptide.",
  },
  {
    q: "Does GHRP-2 raise cortisol?",
    a: "Modestly, yes. Unlike ipamorelin (which is cortisol-sparing), GHRP-2 produces a small rise in cortisol, prolactin, and ACTH alongside GH. The effect is smaller than GHRP-6 but real — it is the main reason ipamorelin is often preferred for long-term use while GHRP-2 is favored where maximal GH release matters.",
  },
  {
    q: "Will GHRP-2 make me hungry?",
    a: "Yes, to a degree. GHRP-2 activates the ghrelin receptor, so appetite increases for a period after dosing — in a controlled study, healthy men ate about 36% more during a GHRP-2 infusion than with saline. The effect is real but generally less intense than GHRP-6. Bedtime dosing lets many users sleep through it.",
  },
  {
    q: "Should I stack GHRP-2 with CJC-1295?",
    a: (
      <>
        That is the standard pairing. GHRP-2 activates the ghrelin receptor while{" "}
        <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
        activates the GHRH receptor; together they produce a larger GH pulse than either alone. Combining GHRP-2 with another ghrelin-receptor agonist (GHRP-6, hexarelin, ipamorelin, MK-677) is redundant.
      </>
    ),
  },
  {
    q: "How quickly does GHRP-2 work?",
    a: "The GH pulse is immediate — peak GH typically occurs within about 15–60 minutes of a subcutaneous dose. Downstream effects (IGF-1 elevation, body-composition change) build over weeks of consistent dosing. The plasma half-life is short (roughly 30 minutes), so timing matters more than sustained blood levels.",
  },
  {
    q: "Where can I buy GHRP-2?",
    a: (
      <>
        GHRP-2 is sold by specialty research-peptide vendors. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
        <Link href="/coupons" className="text-[#3A759F] hover:underline">Verified Discount Codes &rarr;</Link>.
      </>
    ),
  },
];

const studies = [
  {
    title: "Growth hormone releasing peptide-2 (GHRP-2), like ghrelin, increases food intake in healthy men",
    authors: "Laferrère B, Abraham C, Russell CD, Bowers CY, et al.",
    journal: "J Clin Endocrinol Metab / PubMed",
    year: "2005",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/15699539/",
    summary: "A controlled human study showing that GHRP-2, like the natural hormone ghrelin, stimulates appetite: seven lean healthy men ate roughly 36% more during a GHRP-2 infusion than during saline. It is the clearest human demonstration that GHRP-2's ghrelin-receptor activity produces a real, measurable increase in food intake — not just GH release.",
  },
  {
    title: "A simple diagnostic test using GH-releasing peptide-2 in adult GH deficiency",
    authors: "Chihara K, Kodama H, Kaji H, et al.",
    journal: "Eur J Endocrinol / PubMed",
    year: "2007",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/17609397/",
    summary: "A validation of GHRP-2 as a provocative diagnostic test for adult growth-hormone deficiency: a single 100 mcg intravenous dose produces a reproducible GH peak within about an hour, with a defined cut-off distinguishing GH-deficient patients. This is the basis for GHRP-2's (pralmorelin's) approved diagnostic use in Japan and underlines how potent and reliable its GH-releasing action is.",
  },
  {
    title: "Changes in appetite and body weight in response to long-term oral administration of the ghrelin agonist GHRP-2 in growth-hormone-deficient children",
    authors: "Mericq V, Cassorla F, Bowers CY, et al.",
    journal: "J Clin Endocrinol Metab / PubMed",
    year: "2003",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/14513874/",
    summary: "A longer-term study in GH-deficient children showing that repeated GHRP-2 administration increases appetite and body weight over time — consistent with sustained ghrelin-receptor activity. It illustrates both the GH-axis effect and the appetite effect persisting with ongoing dosing rather than fading immediately.",
  },
  {
    title: "The Safety and Efficacy of Growth Hormone Secretagogues",
    authors: "Sigalos JT, Pastuszak AW",
    journal: "Sex Med Rev / PubMed",
    year: "2018",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/28400207/",
    summary: "A clinical review of the growth-hormone-secretagogue class (GHRP-2, GHRP-6, ipamorelin, and others). It summarizes the shared ghrelin-receptor mechanism, contrasts the compounds' selectivity, and is candid about the limited long-term human safety data — a useful evidence-honest anchor for GHRP-2's real research standing versus its marketing.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does GHRP-2 work?",
    intro:
      "GHRP-2 is a synthetic hexapeptide that activates the ghrelin/growth-hormone-secretagogue receptor (GHSR-1a) on pituitary somatotrophs and hypothalamic neurons — the same receptor the natural hormone ghrelin uses. Receptor activation drives a Gq/PLC calcium cascade that triggers a pulse of growth-hormone release, while also amplifying GHRH signaling and blunting somatostatin. Unlike ipamorelin, GHRP-2 is not fully GH-selective — it produces a modest rise in cortisol, prolactin, and ACTH.",
    body: [
      "GHSR-1a receptor activation [1][2]. GHRP-2 binds the ghrelin receptor (GHSR-1a) on somatotrophs and in the hypothalamus. This is the receptor for which ghrelin is the endogenous ligand [2]; GHRP-2 is a synthetic ghrelin mimic optimized for GH release.",
      "Calcium/PLC signaling [1]. Receptor activation couples to Gq/11, driving phospholipase-C and IP3-mediated intracellular calcium rise in somatotrophs — a mechanism distinct from the Gs/cAMP pathway used by GHRH-class peptides, which is why GHRP-2 and CJC-1295 act synergistically.",
      "Pulsatile GH release + somatostatin suppression [4]. GHRP-2 amplifies the natural pulsatile GH pattern rather than producing a continuous flood, and it reduces the inhibitory tone of somatostatin — preserving the feedback loops that make secretagogues safer than direct GH.",
      "Appetite via the ghrelin pathway [3]. Because GHRP-2 activates the ghrelin receptor, it also stimulates appetite — human infusion increased food intake ~36% versus saline [3]. This is a smaller effect than GHRP-6 but a defining feature of the ghrelin-receptor agonists.",
      "Partial selectivity [4]. GHRP-2 raises cortisol, prolactin, and ACTH modestly alongside GH — more than ipamorelin, less than GHRP-6. This is the trade-off for its strong GH-releasing potency.",
    ],
  },
  {
    id: "research",
    title: "What is GHRP-2 used for?",
    intro:
      "GHRP-2's evidence base is the strongest of the classic GHRPs on the GH axis: it is a validated GH-stimulation diagnostic (approved as pralmorelin in Japan), with human data on GH/IGF-1 elevation and appetite. Body-composition and anti-aging uses are extrapolated from GH physiology and clinical practice rather than controlled trials. It is not FDA-approved.",
    body: [
      "Growth-hormone stimulation / diagnostics [4]. GHRP-2 reliably provokes a GH pulse; a single 100 mcg IV dose is used as a provocative test for GH deficiency, and it is approved for this diagnostic use in Japan (pralmorelin).",
      "IGF-1 elevation [4]. Repeated GHRP-2 dosing raises IGF-1 downstream of GH — the mechanism behind its research use for body composition and recovery.",
      "Appetite and body weight [3][5]. Human and pediatric studies document increased food intake and body weight with GHRP-2, reflecting its ghrelin-receptor activity — relevant to research on cachexia and appetite loss.",
      "Body composition (extrapolated). Lean-mass and fat-loss effects are inferred from GH/IGF-1 physiology and clinical observation, not from controlled GHRP-2 trials.",
      "Limited long-term human data [6]. As the class review notes, controlled long-term safety and efficacy trials of GHRP-2 are lacking; most non-diagnostic use is off-label or research-grade.",
    ],
  },
  {
    id: "timeline",
    title: "How long does GHRP-2 take to work?",
    intro:
      "GHRP-2 produces an immediate GH pulse but cumulative physical effects that build over weeks. The GH peak occurs within roughly 15–60 minutes of a dose; downstream IGF-1 elevation appears within days of consistent dosing, and body-composition changes over 8–12 weeks.",
    content:
      "The GH response is fast — a measurable pulse within about 15–60 minutes of a subcutaneous dose, which is why GHRP-2 works as a provocative diagnostic. IGF-1 rises within days of consistent dosing. Subjective and body-composition changes (recovery, lean mass, fat loss) build over 8–12 weeks. Because the plasma half-life is short (roughly 30 minutes), each dose is a discrete pulse — timing (bedtime, empty stomach) matters more than sustained blood levels. Expect a transient appetite increase after dosing.",
  },
  {
    id: "dosing",
    title: "How is GHRP-2 dosed?",
    intro:
      "GHRP-2 is given by subcutaneous injection. Research protocols commonly use 100–300 mcg per dose, once to three times daily, on an empty stomach — bedtime is the most common single-dose timing. It is frequently combined with CJC-1295 for dual-pathway GH release.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard dose.</span> 100–300 mcg subcutaneously per injection, on an empty stomach.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Bedtime dosing.</span> A single dose 30–60 minutes before sleep aligns with the natural overnight GH peak and lets you sleep through the appetite spike.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Multiple daily dosing.</span> 100–200 mcg 2–3× daily (e.g. morning, mid-day, bedtime) for sustained effect.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Saturation caveat.</span> Doses much above ~1 mcg/kg give little extra GH but more cortisol/prolactin — higher is not better with GHRP-2.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 8–12 weeks on, with time off; often run alongside a GHRH analog.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          GHRP-2 is most often stacked with{" "}
          <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
          (ghrelin receptor + GHRH receptor = synergistic GH release). The pre-blended{" "}
          <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>{" "}
          uses the same principle with ipamorelin.
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
    title: "How is GHRP-2 administered?",
    intro: (
      <>
        GHRP-2 is given as a subcutaneous injection using a small insulin syringe, on an empty stomach &mdash; food-driven insulin blunts the GH response. Bedtime dosing aligns with the natural overnight GH peak. For syringe mechanics and units-vs-mcg conversion, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Common sites: abdomen, thigh, upper arm.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Bedtime is most common; a pre-workout dose is sometimes added. Empty stomach in all cases.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Empty stomach required (2+ hours after eating, no food for ~30 min after) — insulin blunts GH release.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Rotate sites each injection; stay at least 1 inch from the previous site.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Appetite spike.</span> Expect increased hunger for 30–60 minutes after dosing (ghrelin-receptor activation).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Skip and resume the next scheduled dose; do not double up.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> 8–12 weeks on, with time off.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> GHRP-2&apos;s short (~30-minute) half-life means each dose is a discrete GH pulse. Stacking the dose onto the natural overnight GH surge (bedtime) and keeping the stomach empty are the two variables that most affect the response. Dose size has a ceiling — beyond roughly 1 mcg/kg, additional GHRP-2 mostly adds cortisol and prolactin, not GH.
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
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">1–3× daily during the cycle (most users dose once at bedtime)</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">Bedtime preferred &mdash; aligns with the natural overnight GH peak</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">Empty stomach required &mdash; 2+ hours after eating, 30+ min before next meal</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">~30 minutes (plasma)</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">Per-pulse effect &mdash; each dose triggers a discrete GH pulse rather than a sustained level</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> GHRP-2 research vials are typically 5 mg. Because doses are small (100–300 mcg), 2 mL or 3 mL reconstitution gives more precise unit draws. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 5 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">100 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">200 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">300 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">500 mcg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">8 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">18 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 5 mg vial, each unit delivers 50 mcg at 1 mL reconstitution, 25 mcg at 2 mL, and 16.7 mcg at 3 mL. For a primer on reading insulin syringes, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does GHRP-2 stack well with?",
    intro:
      "GHRP-2's canonical pairing is a GHRH analog (CJC-1295 or sermorelin) — different receptor, synergistic GH pulse. It does NOT stack usefully with other ghrelin-receptor agonists (GHRP-6, hexarelin, ipamorelin, MK-677) — those are redundant. Recovery peptides pair cleanly.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">CJC-1295 / sermorelin (GHRH analogs).</span>{" "}
          <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
          or{" "}
          <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>{" "}
          activate the GHRH receptor while GHRP-2 activates the ghrelin receptor &mdash; dual-pathway synergy. The{" "}
          <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>{" "}
          uses this principle.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Recovery peptides.</span> BPC-157 and TB-500 pair cleanly for tissue repair during a GH-driven anabolic block.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: other ghrelin-receptor agonists.</span>{" "}
          <Link href="/peptides/ghrp-6" className="text-[#3A759F] hover:underline">GHRP-6</Link>,{" "}
          <Link href="/peptides/hexarelin" className="text-[#3A759F] hover:underline">Hexarelin</Link>,{" "}
          <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, and{" "}
          <Link href="/peptides/mk-677" className="text-[#3A759F] hover:underline">MK-677</Link>{" "}
          hit the same receptor &mdash; combining them is redundant.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training.</span> Exercise-induced GH release adds to the GHRP-2 pulse.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of GHRP-2?",
    intro:
      "GHRP-2 is generally well tolerated but is not cortisol-sparing. The most common effects are a transient appetite spike, mild injection-site reactions, and GH-related water retention or tingling. Its distinguishing caveat versus ipamorelin is a modest rise in cortisol and prolactin. Long-term controlled human safety data is limited.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Common (most users)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Increased appetite.</span> Transient (30–60 minutes) via ghrelin-receptor activation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection-site reactions.</span> Mild redness or irritation, usually brief.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild water retention / tingling.</span> GH-related; often eases with lower doses.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Less common (moderate)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Modest cortisol / prolactin rise.</span> Smaller than GHRP-6 but present; can cause lethargy or, rarely, mild prolactin-related effects at higher doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild headache or flushing.</span> Inconsistent across users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reduced insulin sensitivity.</span> Sustained GH elevation can modestly raise fasting glucose.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Serious (rare)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Long-term human safety data is limited.</span> Most controlled studies are short or diagnostic single-dose.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical tumor-growth risk.</span> GH/IGF-1 elevation could accelerate a pre-existing malignancy; contraindicated with active cancer.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          GHRP-2 trades a little selectivity for stronger GH release than ipamorelin. Users who are sensitive to cortisol or prolactin effects, or who want the cleanest long-term profile, often prefer ipamorelin; those prioritizing GH potency choose GHRP-2. Monitor IGF-1 and glucose with sustained use.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does GHRP-2 interact with other drugs?",
    intro:
      "GHRP-2's interactions are mostly about redundancy with other ghrelin-receptor agonists and blunting by insulin/steroids. No major pharmacokinetic drug-drug interactions are reported.",
    body: [
      "Insulin and corticosteroids. Both blunt GH release; time dosing away from meals and steroid administration.",
      "Other ghrelin-receptor agonists (GHRP-6, hexarelin, ipamorelin, MK-677). Redundant via the same receptor; no additive GH benefit.",
      "Direct human growth hormone (HGH). Combining is generally unnecessary — GHRP-2 stimulates endogenous GH, and exogenous HGH bypasses the feedback that makes secretagogues safer.",
      "No significant drug-drug pharmacokinetic interactions reported in published research.",
    ],
  },
  {
    id: "storage",
    title: "How should GHRP-2 be stored?",
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
    title: "What are the limitations of GHRP-2 research?",
    intro:
      "GHRP-2 is well characterized on the GH axis but not FDA-approved for therapy; its only regulatory approval is as a diagnostic agent (pralmorelin) in Japan. Body-composition and anti-aging claims rest on GH physiology and clinical practice, not controlled GHRP-2 trials. It is WADA-prohibited in sport.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          GHRP-2 is not FDA-approved for any therapeutic use. Its GH-releasing potency is well documented — enough to support an approved diagnostic role in Japan — but that does not translate to approved treatment indications elsewhere.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Evidence for body-composition, recovery, and anti-aging use is extrapolated from GH/IGF-1 physiology and clinical observation rather than controlled long-term trials of GHRP-2 itself. It is not cortisol-sparing, a real difference from ipamorelin.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits GHRP-2 in sport under Section S2 (peptide hormones/secretagogues). Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source GHRP-2",
    intro:
      "GHRP-2 is sold only as a research-grade peptide outside its diagnostic approval. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "amino-club", note: "ISO 17025 tested · batch COAs" },
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "swiss-chems", note: "Deep growth-hormone bench" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#3A759F] hover:underline">See all {activeVendorCount} verified vendors &rarr;</Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "GHRP-2 FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-1">{f.q}</h3>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{f.a}</p>
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
          Bowers CY, Momany FA, Reynolds GA, Hong A. On the in vitro and in vivo activity of a new synthetic hexapeptide that acts on the pituitary to specifically release growth hormone. Endocrinology. 1984;114(5):1537-45.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/6714155/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">https://pubmed.ncbi.nlm.nih.gov/6714155/</a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kojima M, Hosoda H, Date Y, et al. Ghrelin is a growth-hormone-releasing acylated peptide from stomach. Nature. 1999;402(6762):656-60.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/10604470/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">https://pubmed.ncbi.nlm.nih.gov/10604470/</a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Laferrère B, Abraham C, Russell CD, Bowers CY, et al. Growth hormone releasing peptide-2 (GHRP-2), like ghrelin, increases food intake in healthy men. J Clin Endocrinol Metab. 2005;90(2):611-4.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/15699539/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">https://pubmed.ncbi.nlm.nih.gov/15699539/</a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Chihara K, Kodama H, Kaji H, et al. A simple diagnostic test using GH-releasing peptide-2 in adult GH deficiency. Eur J Endocrinol. 2007;157(1):19-27.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17609397/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">https://pubmed.ncbi.nlm.nih.gov/17609397/</a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Mericq V, Cassorla F, Bowers CY, et al. Changes in appetite and body weight in response to long-term oral administration of the ghrelin agonist GHRP-2 in growth-hormone-deficient children. J Clin Endocrinol Metab. 2003;88(4):1476-81.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/14513874/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">https://pubmed.ncbi.nlm.nih.gov/14513874/</a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sigalos JT, Pastuszak AW. The Safety and Efficacy of Growth Hormone Secretagogues. Sex Med Rev. 2018;6(1):45-53.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/28400207/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">https://pubmed.ncbi.nlm.nih.gov/28400207/</a>
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

export default function GHRP2Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"GHRP-2","description":"GHRP-2 (pralmorelin) research profile: ghrelin-receptor agonist mechanism, GH-stimulation and appetite effects, dosing, cortisol/prolactin caveat, CJC-1295 stack, FAQ.","url":"https://profpeptide.com/peptides/ghrp-2","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"GHRP-2"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link href="/peptides" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">GHRP-2</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Last reviewed: July 21, 2026</p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> Pralmorelin, KP-102, GHRP-KP, Growth Hormone Releasing Peptide-2
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Peptide Class:</span> Synthetic Hexapeptide &mdash; GHSR-1a (Ghrelin Receptor) Agonist / GH Secretagogue
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved. Approved in Japan as a GH-deficiency diagnostic (pralmorelin). Research-use only elsewhere. WADA-prohibited (Section S2).
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is GHRP-2?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            GHRP-2 (pralmorelin, D-Ala-D-2-Nal-Ala-Trp-D-Phe-Lys-NH2) is a synthetic hexapeptide growth-hormone secretagogue that activates the ghrelin receptor (GHSR-1a). It is more potent at releasing GH than the original{" "}
            <Link href="/peptides/ghrp-6" className="text-[#3A759F] hover:underline">GHRP-6</Link>{" "}
            and more GH-selective, though not fully cortisol-sparing like{" "}
            <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>. Its GH-releasing action is reliable enough that it is used as an approved diagnostic test for GH deficiency in Japan. Most research combines it with a GHRH analog such as{" "}
            <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
            for a larger, dual-pathway GH pulse. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Reported benefits:</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Potent, reliable pulsatile GH release via the ghrelin receptor</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Raises IGF-1 downstream of GH; supports lean mass and fat loss (extrapolated)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Appetite stimulation (ghrelin-like) &mdash; useful in cachexia research</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Validated GH-provocative diagnostic (approved as pralmorelin in Japan)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Synergizes with GHRH analogs (CJC-1295/sermorelin) for a bigger GH pulse</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Caveat: not cortisol-sparing &mdash; modest cortisol/prolactin rise</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> Most protocols use 100–300 mcg subcutaneously, 1–3 times daily, on an empty stomach — bedtime is the most common single-dose timing. Doses much above ~1 mcg/kg add cortisol, not GH.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
            <Link href="/coupons" className="text-[#3A759F] hover:underline">Verified Discount Codes &rarr;</Link> for current options.
          </p>
        </div>
      </div>

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">{s.title}</h2>
            {s.intro && (<p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">{s.intro}</p>)}
            {s.node && s.node}
            {s.content && (<p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>)}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (<li key={i} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Growth Hormone", "GHRP", "GHSR Agonist", "Research-Grade"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/ghrp-6" className="text-sm font-medium text-[#3A759F] hover:underline">GHRP-6</Link>
        <Link href="/peptides/hexarelin" className="text-sm font-medium text-[#3A759F] hover:underline">Hexarelin</Link>
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Ipamorelin</Link>
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#3A759F] hover:underline">CJC-1295</Link>
        <Link href="/peptides/mk-677" className="text-sm font-medium text-[#3A759F] hover:underline">MK-677</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/gh-stack" className="text-sm font-medium text-[#3A759F] hover:underline">GH Stack</Link>
        </div>
      </div>

<div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.</p>
        <Link href="/calculator" className="btn-primary text-sm">Open Calculator</Link>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="GHRP-2" pagePath="/peptides/ghrp-2" />
    </div>
    </>
  );
}
