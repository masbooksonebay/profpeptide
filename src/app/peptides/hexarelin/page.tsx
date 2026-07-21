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
  path: "/peptides/hexarelin",
  title: "Hexarelin — Potent GH Secretagogue, CD36 Cardiac Research, Dosage, Side Effects | Prof. Peptide",
  description:
    "Hexarelin research profile: potent ghrelin-receptor GH secretagogue, CD36-mediated cardiac effects independent of GH, receptor desensitization, dosing, FAQ.",
});

const faqs = [
  {
    q: "How is Hexarelin different from GHRP-2, GHRP-6, and Ipamorelin?",
    a: (
      <>
        Hexarelin is the most potent acute GH releaser of the group and is unusually stable (a methylated tryptophan resists breakdown). Its distinctive feature is a second target: hexarelin also binds the CD36 receptor in the heart and blood vessels, giving it cardiovascular effects the other GHRPs do not share. The trade-off is desensitization &mdash; its GH response fades with continuous daily use faster than{" "}
        <Link href="/peptides/ghrp-2" className="text-[#3A759F] hover:underline">GHRP-2</Link>,{" "}
        <Link href="/peptides/ghrp-6" className="text-[#3A759F] hover:underline">GHRP-6</Link>, or the selective{" "}
        <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>.
      </>
    ),
  },
  {
    q: "What is the CD36 / cardiac research about?",
    a: "Beyond the ghrelin receptor, hexarelin binds CD36 — a scavenger receptor expressed in cardiomyocytes and the vasculature. Through CD36, hexarelin shows cardioprotective effects in animal models (improved left-ventricular function after myocardial infarction, altered coronary perfusion) that appear largely independent of growth hormone. This is the main reason hexarelin is studied differently from the other GHRPs, though the work is preclinical and was not carried to approval.",
  },
  {
    q: "Why does the GH effect fade over time?",
    a: "Continuous daily hexarelin dosing desensitizes the GH response — the pituitary becomes less responsive and GH release attenuates over days to weeks. This receptor desensitization is more pronounced with hexarelin than with the other common GHRPs and is why research protocols typically cycle it or use it intermittently rather than continuously.",
  },
  {
    q: "Does Hexarelin raise cortisol?",
    a: "Yes, modestly — like GHRP-2 and GHRP-6, hexarelin is not fully GH-selective and produces some cortisol, prolactin, and ACTH response (more than ipamorelin). Its appetite effect is present but generally less than GHRP-6.",
  },
  {
    q: "Should I stack Hexarelin with CJC-1295?",
    a: (
      <>
        Yes for GH purposes &mdash; a GHRH analog such as{" "}
        <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
        activates a different receptor and synergizes with hexarelin's ghrelin-receptor action. Stacking hexarelin with another ghrelin-receptor agonist (GHRP-2, GHRP-6, ipamorelin, MK-677) is redundant. Because of desensitization, hexarelin is often cycled rather than run continuously.
      </>
    ),
  },
  {
    q: "Where can I buy Hexarelin?",
    a: (
      <>
        Hexarelin is sold by specialty research-peptide vendors. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
        <Link href="/coupons" className="text-[#3A759F] hover:underline">Verified Discount Codes &rarr;</Link>.
      </>
    ),
  },
];

const studies = [
  {
    title: "CD36 mediates the cardiovascular action of growth hormone-releasing peptides in the heart",
    authors: "Bodart V, Febbraio M, Demers A, et al.",
    journal: "Circ Res / PubMed",
    year: "2002",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/11988484/",
    summary: "The key mechanistic study showing hexarelin's cardiovascular effects run through CD36 — a scavenger receptor in cardiomyocytes and microvascular endothelium — rather than through the growth-hormone-secretagogue receptor. Using CD36-null mice and genetically deficient rats, the authors demonstrated that hexarelin's dose-dependent change in coronary perfusion pressure requires CD36, establishing the second, GH-independent target that sets hexarelin apart from the other GHRPs.",
  },
  {
    title: "The growth hormone secretagogue hexarelin improves cardiac function in rats after experimental myocardial infarction",
    authors: "Tivesten A, Bollano E, Caidahl K, et al.",
    journal: "Endocrinology / PubMed",
    year: "2000",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/10614623/",
    summary: "A preclinical study showing hexarelin improved cardiac function and decreased peripheral resistance in rats after myocardial infarction — to an extent similar to growth hormone itself. It is a central piece of the evidence that hexarelin has cardioprotective activity, and (read alongside the CD36 work) that a meaningful part of this action does not depend on GH release.",
  },
  {
    title: "On the in vitro and in vivo activity of a new synthetic hexapeptide that acts on the pituitary to specifically release growth hormone",
    authors: "Bowers CY, Momany FA, Reynolds GA, Hong A",
    journal: "Endocrinology / PubMed",
    year: "1984",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/6714155/",
    summary: "The founding GHRP paper (GHRP-6). Hexarelin is a later, methylated analog of this original hexapeptide, engineered for greater potency and metabolic stability — so this study is the class ancestor from which hexarelin's GH-releasing action derives.",
  },
  {
    title: "The Safety and Efficacy of Growth Hormone Secretagogues",
    authors: "Sigalos JT, Pastuszak AW",
    journal: "Sex Med Rev / PubMed",
    year: "2018",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/28400207/",
    summary: "A clinical review of the GH-secretagogue class. It situates hexarelin as a potent but desensitization-prone GHRP and notes the thin long-term human data across the class — an evidence-honest anchor for separating hexarelin's real (largely preclinical) cardiac research from marketing claims.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Hexarelin work?",
    intro:
      "Hexarelin is a potent synthetic hexapeptide GH secretagogue — a methylated analog of GHRP-6 built for greater potency and stability. It has two targets: the ghrelin receptor (GHSR-1a) on the pituitary, which drives GH release, and the CD36 scavenger receptor in the heart and vasculature, which underlies its cardiovascular effects independent of GH. Its GH response desensitizes with continuous use.",
    body: [
      "GHSR-1a receptor activation [3]. Hexarelin (His-D-2-methyl-Trp-Ala-Trp-D-Phe-Lys-NH2) binds the ghrelin receptor on pituitary somatotrophs, triggering a pulse of GH via the Gq/PLC calcium pathway. The 2-methyl-tryptophan modification makes it more potent and more metabolically stable than the parent GHRP-6 [3].",
      "CD36 receptor / cardiac action [1][2]. Uniquely among the common GHRPs, hexarelin also binds CD36 — a scavenger receptor expressed in cardiomyocytes and microvascular endothelium. Through CD36 it produces cardiovascular effects (changes in coronary perfusion, improved post-infarction left-ventricular function) that are largely independent of GH release [1][2].",
      "Somatostatin suppression + GHRH synergy. Like other GHRPs, hexarelin blunts somatostatin and synergizes with GHRH-class peptides (different receptor), producing a larger combined GH pulse.",
      "Desensitization. Continuous daily dosing attenuates the GH response over days to weeks — hexarelin desensitizes the pituitary more readily than the other common GHRPs, which is why it is typically cycled.",
      "Partial selectivity. Hexarelin raises cortisol, prolactin, and ACTH modestly (more than ipamorelin); its appetite effect is present but generally milder than GHRP-6.",
    ],
  },
  {
    id: "research",
    title: "What is Hexarelin used for?",
    intro:
      "Hexarelin's research splits into two threads: GH stimulation (potent, but limited by desensitization) and a distinctive cardiovascular line of work via CD36 that is largely GH-independent. The cardiac research is preclinical and was not carried to approval. Body-composition uses are extrapolated from GH physiology. It is not FDA-approved.",
    body: [
      "Potent GH stimulation [3][4]. Hexarelin is among the most potent acute GH releasers of the GHRP class, though the effect attenuates with continuous dosing.",
      "Cardioprotection via CD36 [1][2]. In animal models, hexarelin improves left-ventricular function after myocardial infarction and modulates coronary perfusion — effects mediated substantially by CD36 rather than GH. This is hexarelin's distinctive research area.",
      "IGF-1 and body composition (extrapolated). GH-driven IGF-1 elevation supports lean mass and fat loss in principle; controlled long-term hexarelin trials are lacking.",
      "Cytoprotective signals. Broader tissue-protective effects have been reported in preclinical GHRP research, with hexarelin's cardiac data the most developed example.",
      "Limited long-term human data [4]. The class review notes sparse controlled long-term human efficacy and safety data; desensitization further limits sustained GH use.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Hexarelin take to work?",
    intro:
      "Hexarelin produces a strong, fast GH pulse, but the GH response wanes with continuous use. The pulse appears within roughly 15–60 minutes of a dose; IGF-1 rises over days, but sustained daily dosing leads to desensitization within days to weeks.",
    content:
      "The GH pulse is fast and potent — within about 15–60 minutes of a subcutaneous dose. IGF-1 rises over days of consistent dosing. The important caveat unique to hexarelin is desensitization: with continuous daily dosing the GH response attenuates over days to weeks, so many protocols cycle hexarelin (on/off) or use it intermittently rather than continuously. Cardiovascular effects seen in animal models develop over the dosing period and are studied separately from the GH response. Plasma half-life is short (roughly 30–70 minutes).",
  },
  {
    id: "dosing",
    title: "How is Hexarelin dosed?",
    intro:
      "Hexarelin is given by subcutaneous injection, commonly 100–200 mcg per dose, once to three times daily, on an empty stomach. Because of desensitization, it is usually cycled (e.g. shorter blocks with breaks) rather than run continuously, and is often paired with a GHRH analog.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard dose.</span> 100–200 mcg subcutaneously per injection, on an empty stomach.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Bedtime dosing.</span> A single dose 30–60 minutes before sleep aligns with the natural overnight GH peak.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle to limit desensitization.</span> Hexarelin desensitizes faster than other GHRPs — shorter blocks (e.g. a few weeks) with breaks, or intermittent use, preserve the GH response.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Saturation caveat.</span> Beyond roughly 1–2 mcg/kg, extra dose mostly adds cortisol/prolactin, not GH.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cardiovascular research dosing.</span> The CD36/cardiac literature uses its own model-specific dosing and is not a human protocol.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          For GH purposes, hexarelin is stacked with{" "}
          <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
          (different receptor, synergistic pulse); the pre-blended{" "}
          <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>{" "}
          uses this principle with ipamorelin.
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
    title: "How is Hexarelin administered?",
    intro: (
      <>
        Hexarelin is given as a subcutaneous injection using a small insulin syringe, on an empty stomach so food-driven insulin does not blunt the GH response. Because of desensitization, it is typically cycled. For syringe mechanics and units-vs-mcg conversion, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Common sites: abdomen, thigh, upper arm.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Bedtime is common; empty stomach in all cases.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Empty stomach required (2+ hours after eating, ~30 min before next meal) — insulin blunts GH release.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle to preserve response.</span> Continuous daily use desensitizes the GH pathway; shorter blocks with breaks maintain effect.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Rotate sites each injection; stay at least 1 inch from the previous site.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Skip and resume the next scheduled dose; do not double up.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> Intermittent / cycled use rather than continuous, specifically because of desensitization.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> Hexarelin&apos;s short half-life makes each dose a discrete, potent GH pulse — but its defining practical variable is desensitization. Unlike the other GHRPs, running hexarelin continuously blunts its own GH effect, so cycling is not optional for sustained results. Empty-stomach timing still matters for each pulse.
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
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">1–3× daily during a cycled block</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">Bedtime preferred &mdash; aligns with the natural overnight GH peak</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">Empty stomach required &mdash; 2+ hours after eating, 30+ min before next meal</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">~30–70 minutes (plasma)</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300">Per-pulse effect that desensitizes with continuous use &mdash; cycle to maintain the GH response</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Hexarelin research vials are typically 5 mg. Because doses are small (100–200 mcg), 2 mL or 3 mL reconstitution gives more precise unit draws. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 5 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">100 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">150 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">200 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">300 mcg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">8 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td></tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50"><td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">9 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td><td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">18 units</td></tr>
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
    title: "What does Hexarelin stack well with?",
    intro:
      "For GH, hexarelin's canonical pairing is a GHRH analog (CJC-1295 or sermorelin) — different receptor, synergistic pulse. It does NOT stack usefully with other ghrelin-receptor agonists (GHRP-2, GHRP-6, ipamorelin, MK-677). Because of desensitization, cycling matters more than stacking.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">CJC-1295 / sermorelin (GHRH analogs).</span>{" "}
          <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
          or{" "}
          <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>{" "}
          add a second receptor pathway for a larger GH pulse. The{" "}
          <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>{" "}
          uses this principle.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Recovery peptides.</span> BPC-157 and TB-500 pair cleanly for tissue repair during a GH-driven block.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: other ghrelin-receptor agonists.</span>{" "}
          <Link href="/peptides/ghrp-2" className="text-[#3A759F] hover:underline">GHRP-2</Link>,{" "}
          <Link href="/peptides/ghrp-6" className="text-[#3A759F] hover:underline">GHRP-6</Link>,{" "}
          <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, and{" "}
          <Link href="/peptides/mk-677" className="text-[#3A759F] hover:underline">MK-677</Link>{" "}
          hit the same receptor &mdash; combining is redundant.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycling &gt; stacking.</span> Because hexarelin desensitizes, managing on/off timing does more for sustained results than adding compounds.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Hexarelin?",
    intro:
      "Hexarelin shares the GHRP side-effect profile — mild injection-site reactions, some appetite, and GH-related water retention — plus a modest cortisol/prolactin rise (it is not GH-selective). Its two distinctive considerations are desensitization of the GH response and, on the cardiovascular side, effects that are still being characterized preclinically. Long-term human safety data is limited.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Common (most users)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection-site reactions.</span> Mild redness or irritation, usually brief.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild appetite increase.</span> Present but generally milder than GHRP-6.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Water retention / tingling.</span> GH-related; often eases with lower doses.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Less common (moderate)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Waning GH response (desensitization).</span> With continuous use, the GH effect fades &mdash; a functional limitation more than a toxicity.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cortisol / prolactin rise.</span> Modest; more than ipamorelin.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reduced insulin sensitivity.</span> Sustained GH elevation can modestly raise fasting glucose.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Serious (rare)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cardiovascular effects are not fully characterized in humans.</span> Hexarelin's CD36-mediated cardiac actions are mostly preclinical; long-term human cardiovascular safety is not established.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical tumor-growth risk.</span> GH/IGF-1 elevation could accelerate a pre-existing malignancy; contraindicated with active cancer.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Hexarelin&apos;s desensitization means it is best used cycled rather than continuously. Its cardiovascular research is genuinely interesting but preclinical &mdash; it should not be read as evidence of a proven human cardiac benefit. Monitor IGF-1 and glucose with sustained use.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Hexarelin interact with other drugs?",
    intro:
      "Hexarelin's interactions are mainly redundancy with other ghrelin-receptor agonists and blunting by insulin/steroids. Its CD36 activity introduces a theoretical cardiovascular-drug consideration that is not well characterized. No major pharmacokinetic drug-drug interactions are reported.",
    body: [
      "Insulin and corticosteroids. Both blunt GH release; time dosing away from meals and steroid administration.",
      "Other ghrelin-receptor agonists (GHRP-2, GHRP-6, ipamorelin, MK-677). Redundant via the same receptor; no additive GH benefit.",
      "Cardiovascular medications. Given hexarelin's CD36-mediated cardiac activity, caution is reasonable alongside cardiovascular drugs — though this interaction is theoretical and not well studied.",
      "Direct human growth hormone (HGH). Generally unnecessary to combine — hexarelin stimulates endogenous GH; exogenous HGH bypasses regulatory feedback.",
    ],
  },
  {
    id: "storage",
    title: "How should Hexarelin be stored?",
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
    title: "What are the limitations of Hexarelin research?",
    intro:
      "Hexarelin is a potent GHRP with a distinctive but preclinical cardiovascular research profile. It is not FDA-approved for any use; its GH utility is limited by desensitization, and its cardiac effects have not been established in controlled human trials. It is WADA-prohibited in sport.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Hexarelin is not FDA-approved for any therapeutic use. Its GH-releasing potency is real, but continuous use desensitizes the response — a functional ceiling that distinguishes it from the other GHRPs.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Its most distinctive research — CD36-mediated cardioprotection independent of GH — is compelling but almost entirely preclinical (rodent models). It should not be read as evidence of a proven cardiovascular benefit in people; controlled human cardiovascular trials do not exist.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits hexarelin in sport under Section S2 (peptide hormones/secretagogues). Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Hexarelin",
    intro:
      "Hexarelin is sold only as a research-grade peptide. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
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
    title: "Hexarelin FAQ",
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
          Bodart V, Febbraio M, Demers A, et al. CD36 mediates the cardiovascular action of growth hormone-releasing peptides in the heart. Circ Res. 2002;90(8):844-9.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11988484/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">https://pubmed.ncbi.nlm.nih.gov/11988484/</a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tivesten A, Bollano E, Caidahl K, et al. The growth hormone secretagogue hexarelin improves cardiac function in rats after experimental myocardial infarction. Endocrinology. 2000;141(1):60-6.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/10614623/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">https://pubmed.ncbi.nlm.nih.gov/10614623/</a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bowers CY, Momany FA, Reynolds GA, Hong A. On the in vitro and in vivo activity of a new synthetic hexapeptide that acts on the pituitary to specifically release growth hormone. Endocrinology. 1984;114(5):1537-45.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/6714155/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">https://pubmed.ncbi.nlm.nih.gov/6714155/</a>
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

export default function HexarelinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Hexarelin","description":"Hexarelin research profile: potent ghrelin-receptor GH secretagogue, CD36-mediated cardiac effects independent of GH, receptor desensitization, dosing, FAQ.","url":"https://profpeptide.com/peptides/hexarelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Hexarelin"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link href="/peptides" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Hexarelin</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Last reviewed: July 21, 2026</p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> Examorelin, Hexarelin acetate, His-D-2-methyl-Trp-Ala-Trp-D-Phe-Lys-NH2
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Peptide Class:</span> Synthetic Hexapeptide &mdash; GHSR-1a (Ghrelin Receptor) + CD36 Agonist / GH Secretagogue
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; research-use only. WADA-prohibited (Section S2).
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is Hexarelin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Hexarelin (examorelin; His-D-2-methyl-Trp-Ala-Trp-D-Phe-Lys-NH2) is a potent synthetic hexapeptide growth-hormone secretagogue — a methylated, more stable analog of the original{" "}
            <Link href="/peptides/ghrp-6" className="text-[#3A759F] hover:underline">GHRP-6</Link>. It activates the ghrelin receptor (GHSR-1a) to release a strong GH pulse, but its distinctive feature is a second receptor: hexarelin also binds CD36 in the heart and vasculature, giving it cardioprotective effects in animal models that appear largely independent of GH. Two caveats define its practical use: the GH response desensitizes with continuous dosing (so it is cycled), and its cardiac research — while genuinely interesting — is preclinical. Like{" "}
            <Link href="/peptides/ghrp-2" className="text-[#3A759F] hover:underline">GHRP-2</Link>, it is not fully GH-selective. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Reported benefits:</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Potent pulsatile GH release via the ghrelin receptor (most potent of the classic GHRPs)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Distinctive CD36-mediated cardioprotective effects in animal models, largely GH-independent</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Raises IGF-1 downstream of GH; supports lean mass (extrapolated)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Synergizes with GHRH analogs (CJC-1295/sermorelin) for a larger GH pulse</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Caveat: GH response desensitizes with continuous use &mdash; must be cycled</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Caveat: not GH-selective (modest cortisol/prolactin); cardiac data is preclinical</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> Most protocols use 100–200 mcg subcutaneously, 1–3 times daily, on an empty stomach — cycled rather than continuous because of desensitization. Beyond ~1–2 mcg/kg, extra dose adds cortisol, not GH.
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
        {["Growth Hormone", "GHRP", "CD36 / Cardiac", "Research-Grade"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/ghrp-2" className="text-sm font-medium text-[#3A759F] hover:underline">GHRP-2</Link>
        <Link href="/peptides/ghrp-6" className="text-sm font-medium text-[#3A759F] hover:underline">GHRP-6</Link>
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
    <ContactLink pageName="Hexarelin" pagePath="/peptides/hexarelin" />
    </div>
    </>
  );
}
