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
  path: "/peptides/mk-677",
  title: "MK-677 (Ibutamoren) — Oral GH Secretagogue, Dosing, Side Effects | Prof. Peptide",
  description:
    "MK-677 (ibutamoren) research profile: oral ghrelin receptor mechanism, 24-hour GH/IGF-1 elevation, dosing protocol, side effects, FAQ, WADA status.",
});

const faqs = [
  {
    q: "Is MK-677 a peptide?",
    a: "Technically no — MK-677 is a non-peptide small molecule that mimics ghrelin at the GHS-R1a receptor. It's included on Prof. Peptide because it acts on the same GH/IGF-1 axis as peptide secretagogues (sermorelin, ipamorelin, tesamorelin) and is commonly compared to them. The functional effects (pulsatile GH stimulation, IGF-1 elevation) are similar despite the structural difference.",
  },
  {
    q: "Is MK-677 FDA-approved?",
    a: "No. MK-677 (ibutamoren) reached Phase 2 clinical trials with Merck but was never FDA-approved. Merck did not pursue full approval, partially due to side effect profile concerns (appetite, water retention) for the original GH deficiency indication. Research-grade MK-677 is sold as a research compound — quality varies by source.",
  },
  {
    q: "How is MK-677 different from injectable GH secretagogues?",
    a: (
      <>
        Two main differences. (1) Route — MK-677 is oral;{" "}
        <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">sermorelin</Link>
        /
        <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">ipamorelin</Link>
        /
        <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">tesamorelin</Link>{" "}
        are injectable. (2) Duration — MK-677 produces 24-hour sustained GH/IGF-1 elevation per dose; injectable secretagogues produce sharper, shorter pulses tied to dose timing. The oral convenience is a major advantage; the trade-off is the more sustained (less pulsatile) GH environment, which some users find produces more side effects.
      </>
    ),
  },
  {
    q: "Will MK-677 cause weight gain?",
    a: "Yes, in most users. MK-677 increases appetite (ghrelin receptor activation in the hypothalamus) and causes water retention in the first 2–4 weeks. The 1-year RCT in healthy older adults showed increased fat-free mass without change in fat mass — but real-world weight gain is common, particularly for users not actively managing calorie intake during the initial appetite spike.",
  },
  {
    q: "Does MK-677 affect blood sugar?",
    a: "Yes, mildly. MK-677 elevates fasting glucose and may decrease insulin sensitivity slightly during use. The 1-year RCT data showed acceptable tolerability at 25 mg/day in healthy older adults, but pre-diabetic individuals should monitor glucose closely. Insulin sensitivity supports (e.g., metformin if prescribed) are sometimes used to counter this effect.",
  },
  {
    q: "How long until I see results?",
    a: "GH/IGF-1 elevation: measurable within hours of the first dose. Subjective effects (improved sleep, increased appetite, faster recovery): 1–2 weeks. Lean mass changes: 8–12 weeks measurable. Skin/hair quality changes: 12+ weeks.",
  },
  {
    q: "Is MK-677 banned by WADA?",
    a: "Yes. MK-677 is on the WADA Prohibited List under Section S2 (Hormones — Growth Hormone Releasers). Tested athletes should NOT use MK-677. Detection methods exist for the compound and its metabolites.",
  },
  {
    q: "Where can I buy MK-677?",
    a: (
      <>
        MK-677 is sold as a research compound by specialty vendors. Quality varies dramatically &mdash; third-party HPLC and mass spectrometric testing is essential. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Effects of an Oral Ghrelin Mimetic on Body Composition and Clinical Outcomes in Healthy Older Adults",
    authors: "Nass R, Pezzoli SS, Oliveri MC, et al.",
    journal: "Annals of Internal Medicine / PMC",
    year: "2008",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2757071/",
    summary: "The landmark 1-year randomized controlled trial of MK-677 in 65 healthy adults aged 60–81. Daily 25 mg MK-677 increased GH and IGF-1 to levels seen in healthy young adults, increased fat-free mass without change in fat mass, and was acceptably tolerated. This is the strongest controlled human evidence for MK-677's effects on body composition and the GH/IGF-1 axis in older adults.",
  },
  {
    title: "Stimulation of the GH-IGF-I Axis by Daily Oral MK-677 in Healthy Elderly Subjects",
    authors: "Chapman IM, Bach MA, Van Cauter E, et al.",
    journal: "J Clin Endocrinol Metab",
    year: "1996",
    access: "Abstract available",
    url: "https://pubmed.ncbi.nlm.nih.gov/8954023/",
    summary: "An earlier Merck study establishing the pharmacology of daily oral MK-677 in elderly subjects. The study showed that daily oral dosing produced sustained 24-hour GH/IGF-1 axis stimulation — a key finding that distinguished MK-677 from the injectable GHRPs of that era and supported the development of MK-677 as a once-daily oral therapy.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does MK-677 work?",
    intro:
      "MK-677 is a non-peptide small molecule that selectively agonizes the GHS-R1a (ghrelin) receptor in the hypothalamus and pituitary. It mimics ghrelin's GH-stimulating action with greater selectivity than endogenous ghrelin, triggering pulsatile GH release while also increasing GHRH signaling and reducing somatostatin's inhibitory tone. The 24-hour pharmacokinetic profile produces sustained GH/IGF-1 elevation per dose — a key distinction from injectable GHRPs that produce shorter, sharper pulses.",
    body: [
      "Ghrelin Receptor Agonism [1]. Selective non-peptide agonist at GHS-R1a (growth hormone secretagogue receptor) in the hypothalamus and pituitary. Mimics ghrelin's GH-stimulating action with much greater receptor selectivity than endogenous ghrelin.",
      "Pulsatile GH Release [2]. Triggers physiological pulsatile GH secretion from the anterior pituitary. The pattern matches deep-sleep and exercise-induced GH pulses. Up to 50–100% above baseline GH levels per dose.",
      "IGF-1 Elevation [3]. GH stimulates hepatic IGF-1 production. Sustained IGF-1 elevation drives anabolic effects: protein synthesis, nitrogen retention, collagen formation, lipolysis. The sustained 24-hour pattern is distinct from injectable GHRPs.",
      "Multi-Pathway Action [4]. Increases GHRH signaling, decreases somatostatin (which normally inhibits GH), promotes GHRH receptor activation, and restrains somatostatin receptor signaling. Net effect: amplified GH secretion through coordinated upstream regulation.",
      "Appetite Stimulation. Ghrelin receptor activation in the hypothalamus increases hunger. This is a significant side effect (or benefit, depending on goals) and the primary reason Merck did not pursue MK-677 approval for the original GH deficiency indication.",
    ],
  },
  {
    id: "research",
    title: "What is MK-677 used for?",
    intro:
      "MK-677's research evidence base centers on the Merck 1-year RCT in healthy older adults showing increased fat-free mass without change in fat mass at 25 mg/day. Beyond that, evidence spans hip fracture recovery trials, body composition research in athletes (largely observational), sleep architecture studies (increased REM and slow-wave sleep), and the original GH deficiency development pathway (which Merck did not complete).",
    body: [
      "Healthy Older Adults RCT [5]. Merck Phase 2: 65 healthy adults aged 60–81, 1-year RCT, 25 mg/day vs placebo. MK-677 increased GH and IGF-1 to levels of healthy young adults. Increased fat-free mass. No change in visceral fat. Acceptable tolerability.",
      "Hip Fracture Recovery. Trials in elderly hip fracture patients showed improved functional recovery in some endpoints. Interest stemmed from the potential to support healing in elderly populations with reduced GH/IGF-1.",
      "Body Composition (Athletes) [6]. Anecdotal community use shows lean mass gains, increased recovery, and improved sleep. Limited controlled athlete data — most evidence in this population is observational.",
      "Sleep Architecture. Independent studies have shown increased REM and slow-wave sleep duration with MK-677. Sleep quality improvements are among the most consistently reported subjective effects.",
      "GH Deficiency. Original Merck development pathway. Never reached approval, partially due to appetite/water retention concerns making it unsuitable for the target population.",
    ],
  },
  {
    id: "timeline",
    title: "How long does MK-677 take to work?",
    intro:
      "MK-677 effects develop on multiple timescales. GH/IGF-1 elevation is measurable within hours of the first dose. Subjective effects (sleep, appetite, recovery) appear over 1–2 weeks. Lean mass changes are measurable at 8–12 weeks. Skin and hair quality changes take 12+ weeks. Discontinuation effects: GH/IGF-1 returns to baseline within days of stopping — no HPG axis suppression like AAS, no need for post-cycle therapy.",
    content:
      "GH/IGF-1 elevation is measurable within hours of the first dose. Subjective effects (improved sleep, increased appetite, faster recovery) typically appear within 1–2 weeks. Lean mass changes are measurable at 8–12 weeks. Skin and hair quality changes take 12+ weeks. Discontinuation effects: GH/IGF-1 returns to baseline within days of stopping — no HPG axis suppression like anabolic-androgenic steroids, so no need for post-cycle therapy.",
  },
  {
    id: "dosing",
    title: "How is MK-677 dosed?",
    intro:
      "MK-677 is taken orally as a capsule or liquid solution. The 24-hour sustained GH/IGF-1 elevation per dose makes single bedtime dosing the standard protocol. Standard research dose is 25 mg/day at bedtime — the dose used in Merck's 1-year RCT. Some users start at 12.5 mg/day for 1–2 weeks to assess tolerance. Cycle length is typically 8–16 weeks, though extended protocols (6+ months) are common given continued IGF-1 elevation without HPG axis suppression.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard research dose.</span> 25 mg/day orally, taken at bedtime.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Starter dose.</span> Some users start at 12.5 mg/day for 1–2 weeks to assess tolerance.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Bedtime &mdash; leverages natural GH pulse during deep sleep.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 8–16 weeks typical. Some users run extended protocols (6+ months) given continued IGF-1 elevation without HPG axis suppression.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Daily dosing.</span> Continuous daily dosing is the norm &mdash; unlike injectable secretagogues, no need for &ldquo;pulse&rdquo; timing.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Don&apos;t split daily dose.</span> Single bedtime dose maintains sustained 24-hour elevation.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Discontinuation: GH/IGF-1 returns to baseline within days of stopping. No HPG axis suppression like anabolic-androgenic steroids &mdash; no need for post-cycle therapy.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is MK-677 administered?",
    intro: (
      <>
        MK-677 is taken orally &mdash; capsule or liquid solution. It&apos;s the only GH-axis compound on Prof. Peptide with an oral route as the primary administration mode, which gives it a major convenience advantage over injectable secretagogues. The 24-hour sustained pharmacology makes once-daily bedtime dosing the standard protocol.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Oral &mdash; capsule or liquid solution. No injection required.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Bedtime. Leverages natural sleep-onset GH pulse.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Either. Empty stomach may produce faster absorption but isn&apos;t required.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Don&apos;t split the dose.</span> Single bedtime dose maintains sustained 24-hour elevation &mdash; splitting fragments the pharmacology unnecessarily.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Take when remembered if same evening; skip and resume next bedtime if it&apos;s morning.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Storage.</span> Capsules at room temperature, dry, dark. Liquid solutions refrigerate after opening.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> MK-677&apos;s ~24-hour half-life produces sustained 24-hour GH/IGF-1 elevation per dose &mdash; very different from injectable GHRPs which produce sharper, shorter pulses. Bedtime dosing is preferred because it leverages the natural sleep-onset GH pulse, and the appetite spike from ghrelin receptor activation is more tolerable when you can sleep through it. No empty-stomach requirement (the oral pharmacokinetics aren&apos;t blunted by food the way injectable GHRH analogs are).
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once daily during the cycle (8–16 weeks typical, extended protocols common)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Bedtime &mdash; aligns with natural overnight GH peak and lets you sleep through the appetite spike</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No fasting required; can be taken with or without food</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Route</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Oral &mdash; capsule or liquid solution</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~24 hours</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Reached within ~5–7 days of consistent daily dosing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Oral vs injectable.</span> MK-677&apos;s oral route is its primary practical advantage over injectable GH secretagogues. There&apos;s no reconstitution math, no syringe technique, no injection-site rotation. The trade-off is the more sustained (less pulsatile) GH environment, which some users find produces more side effects than the sharper pulses from{" "}
          <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">ipamorelin</Link>{" "}
          or{" "}
          <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does MK-677 stack well with?",
    intro:
      "MK-677's 24-hour sustained effect doesn't require pairing with other GH peptides for efficacy — standalone use is the norm. The most important non-pairing is avoiding injectable GH secretagogues (sermorelin, ipamorelin, tesamorelin) — redundant ghrelin/GHRH pathway, no additive benefit. Insulin sensitivity supports (berberine, metformin if prescribed) help counter MK-677's glucose-elevation effect.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standalone use.</span> MK-677&apos;s 24-hour sustained effect doesn&apos;t require pairing with other GH peptides for efficacy.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: injectable GH secretagogues.</span>{" "}
          <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>,{" "}
          <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">ipamorelin</Link>,{" "}
          <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">tesamorelin</Link>{" "}
          &mdash; redundant ghrelin/GHRH pathway, no additive benefit.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">BPC-157.</span>{" "}
          <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
          &mdash; different mechanism, generally compatible for recovery support.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Insulin sensitivity supports.</span> Berberine, metformin (if prescribed) &mdash; to counter MK-677&apos;s glucose-elevation effect.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Strength training.</span> Leverages elevated IGF-1 for hypertrophy.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Adequate protein (1.6–2.2 g/kg bodyweight).</span> Necessary to capture the anabolic potential.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of MK-677?",
    intro:
      "MK-677's most reliable side effects are increased appetite (significant — the primary reason Merck didn't pursue approval for GH deficiency), water retention in the first 2–4 weeks, mild lethargy, and vivid dreams. Less common moderate effects include peripheral edema and elevated fasting glucose. Pre-diabetic individuals should monitor glucose closely. The 1-year RCT in healthy older adults at 25 mg/day showed acceptable tolerability; long-term safety beyond 2 years is not formally characterized.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Increased appetite.</span> Significant &mdash; the primary side effect. Ghrelin receptor activation in the hypothalamus drives hunger.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Water retention.</span> Transient, first 2–4 weeks.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild lethargy.</span> Common in the first week of dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vivid dreams.</span> Reported by most users; consistent with REM-sleep enhancement.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Numbness or tingling in extremities.</span> Peripheral edema-related.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Elevated fasting glucose.</span> Mild; monitor in pre-diabetic users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild blood pressure changes.</span> Inconsistent across users.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Insulin resistance.</span> Pre-diabetic glucose elevation in long-term high-dose use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical cardiovascular hypertrophy concerns.</span> At supraphysiological IGF-1 levels &mdash; not documented at standard doses but flagged in bodybuilding-context discussions.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cortisol elevation.</span> Mild but measurable.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          MK-677 elevates cortisol slightly and can elevate fasting glucose. Pre-diabetic individuals should monitor closely. The 1-year RCT data showed acceptable tolerability in healthy older adults at 25 mg/day. Long-term safety beyond 2 years is not formally characterized in healthy adults.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does MK-677 interact with other drugs?",
    intro:
      "MK-677's most relevant interactions are with insulin and antidiabetic drugs (MK-677 may increase insulin resistance — monitor glucose), corticosteroids (cortisol load amplification), and other GH secretagogues (redundant pathway). No documented major SSRI/CNS-medication interactions. Direct HGH combinations are generally unnecessary.",
    body: [
      "Insulin and antidiabetic drugs. MK-677 may increase insulin resistance. Monitor glucose during therapy.",
      "Corticosteroids. MK-677 raises cortisol modestly; combination amplifies cortisol load.",
      "Other GH secretagogues. Redundant via the same pathway, not recommended.",
      "SSRIs and CNS medications. Limited data; no documented major interactions.",
      "Direct HGH. Combining is generally unnecessary and may produce supraphysiological IGF-1 levels.",
    ],
  },
  {
    id: "storage",
    title: "How should MK-677 be stored?",
    body: [
      "Capsules: room temperature, dry, dark.",
      "Liquid solutions: refrigerate after opening.",
      "Don't expose to extreme heat or light.",
      "Keep in original container.",
      "Discard liquid solutions if cloudy or discolored.",
      "Check expiration date — MK-677 can degrade in solution over time.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of MK-677 research?",
    intro:
      "MK-677 is not FDA-approved despite reaching Phase 2 trials. Merck did not pursue full approval, partially due to side-effect profile concerns (appetite, water retention) for the original GH deficiency indication. Research-grade MK-677 is sold as a 'research compound' — quality varies by source. WADA-prohibited (Section S2). Long-term safety beyond 2 years is not formally characterized in healthy adults.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          MK-677 (ibutamoren) is NOT FDA-approved despite reaching Phase 2 trials. Merck did not pursue full approval, partially due to side effect profile concerns (appetite, water retention) for the original GH deficiency indication.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade MK-677 is sold as a &ldquo;research compound&rdquo; &mdash; quality varies by source. Independent third-party testing (HPLC, mass spectrometry) recommended.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Some bodybuilding contexts have raised concerns about cardiovascular hypertrophy at supraphysiological IGF-1 levels &mdash; not documented at standard 25 mg doses but worth flagging. Long-term safety beyond 2 years is not formally characterized in healthy adults.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: MK-677 IS on the WADA Prohibited List (S2 Hormones &mdash; Growth Hormone Releasers). Tested athletes should NOT use.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source MK-677",
    intro:
      "MK-677 is not FDA-approved and is sold as a research compound by specialty vendors. Quality varies dramatically — third-party HPLC and mass spectrometric testing is essential. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "peptide-partners" },
            { slug: "ascension-peptides" },
            { slug: "vital-core-research" },
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
    title: "MK-677 FAQ",
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
          Wikipedia. Ibutamoren.{" "}
          <a href="https://en.wikipedia.org/wiki/Ibutamoren" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://en.wikipedia.org/wiki/Ibutamoren
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Nass R, Pezzoli SS, Oliveri MC, et al. Effects of an oral ghrelin mimetic on body composition and clinical outcomes in healthy older adults: a randomized trial. Ann Intern Med. 2008;149(9):601-11.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2757071/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC2757071/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Chapman IM, Bach MA, Van Cauter E, et al. Stimulation of the growth hormone (GH)-insulin-like growth factor I axis by daily oral administration of a GH secretagogue (MK-677) in healthy elderly subjects. J Clin Endocrinol Metab. 1996;81(12):4249-57.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/8954023/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/8954023/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          WADA Prohibited List 2026. World Anti-Doping Agency.
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
  { id: "overview", title: "What is MK-677?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function MK677Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"MK-677 (Ibutamoren)","description":"MK-677 (ibutamoren) research profile: oral ghrelin receptor mechanism, 24-hour GH/IGF-1 elevation, dosing protocol, side effects, FAQ, WADA status.","url":"https://profpeptide.com/peptides/mk-677","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"MK-677"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">MK-677</h1>
        <span className="tag">Performance &amp; Energy</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">
        Last reviewed: May 23, 2026
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
              <dd className="text-base text-[#16181B] dark:text-slate-100">An orally active, lab-made ghrelin mimetic (GH secretagogue) that signals the pituitary to release the body&apos;s own growth hormone &mdash; studied for lean mass, recovery, sleep, and appetite.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Oral &mdash; capsule or liquid, once daily at bedtime</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">~24 hours</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">25 mg once daily (some start at 12.5 mg), in 8&ndash;16 week cycles</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Not FDA-approved &mdash; research use only. WADA-prohibited (S2).</dd>
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
        <h2 className="section-heading mb-3">What is MK-677?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            MK-677 (ibutamoren) is an orally active, non-peptide ghrelin receptor agonist developed by Merck in the 1990s as a potential treatment for growth hormone deficiency, muscle wasting, and osteoporosis. It is also cataloged under the developmental codes MK-0677 and L-163,191, the salt form ibutamoren mesylate, and the later names LUM-201 and Oratrope. Despite Phase 2 trial data showing 24-hour sustained elevation of GH and IGF-1, MK-677 was never FDA-approved and remains an investigational compound. Unlike injectable GH secretagogues ({" "}
            <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">sermorelin</Link>,{" "}
            <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">ipamorelin</Link>,{" "}
            <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">tesamorelin</Link>
            ), MK-677 is taken orally &mdash; a major convenience advantage. It mimics ghrelin at the GHS-R1a receptor, triggering pulsatile GH release that preserves natural feedback loops, unlike exogenous GH injection which suppresses endogenous production. Note: MK-677 is technically NOT a peptide &mdash; it&apos;s a non-peptide small molecule ghrelin mimetic &mdash; but is included on Prof. Peptide because it acts on the same GH/IGF-1 axis as peptide secretagogues and is commonly compared to them. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sustained GH and IGF-1 elevation (24-hour duration per dose)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Increased lean body mass without change in fat mass (1-year RCT data)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved sleep quality (deeper slow-wave sleep)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Increased appetite (useful for muscle gain, problematic for cutting)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Oral administration &mdash; no injections</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Bone density improvement (1-year RCT)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> Standard research dose: 25 mg/day orally, taken at bedtime. This is the dose used in Merck&apos;s 1-year RCT in healthy older adults. Some users start at 12.5 mg/day for 1–2 weeks to assess tolerance.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> MK-677 is not FDA-approved and is sold as a research compound. PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
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
        {["Performance & Energy", "Oral GH Secretagogue", "WADA-Prohibited", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Ipamorelin</Link>
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#3A759F] hover:underline">CJC-1295</Link>
        <Link href="/peptides/sermorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Sermorelin</Link>
        <Link href="/peptides/tesamorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Tesamorelin</Link>
        <Link href="/peptides/igf-1-lr3" className="text-sm font-medium text-[#3A759F] hover:underline">IGF-1 LR3</Link>
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
    <ContactLink pageName="MK-677" pagePath="/peptides/mk-677" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
