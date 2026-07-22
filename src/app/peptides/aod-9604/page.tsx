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
  path: "/peptides/aod-9604",
  title: "AOD-9604 — Mechanism, Dosage, Side Effects, FDA Status | Prof. Peptide",
  description:
    "AOD-9604 (hGH Fragment 176-191) research profile: lipolysis mechanism, clinical trial history, dosing protocol, side effects, FAQ, and FDA regulatory status.",
});

const faqs = [
  {
    q: "Does AOD-9604 actually work for weight loss?",
    a: "Modestly, at best. The original 12-week trial showed 2.6 kg average weight loss vs 0.8 kg placebo. The longer 24-week trial in 536 participants did not show statistically significant weight loss when intensive diet and exercise were added. AOD-9604 produces real lipolysis, but the magnitude of weight loss is far below GLP-class drugs (14–25%). It is not a substitute for semaglutide or tirzepatide for clinically meaningful weight loss.",
  },
  {
    q: "Is AOD-9604 the same as growth hormone?",
    a: "No. AOD-9604 is the C-terminal fragment of growth hormone (amino acids 176–191) with a stabilizing tyrosine. It captures growth hormone's fat-burning effect but does not stimulate IGF-1 production, does not affect insulin sensitivity, and does not have growth hormone's broader endocrine effects.",
  },
  {
    q: "Why was AOD-9604 development discontinued?",
    a: "The Phase 2b 24-week trial in 536 participants failed to show statistically significant weight loss vs placebo when intensive diet and exercise were added. Without a clear efficacy signal, Metabolic Pharmaceuticals terminated the obesity drug program in 2007. The peptide was not unsafe — it was simply not effective enough to justify continued development as a drug.",
  },
  {
    q: "Is AOD-9604 safe?",
    a: "Short-term, yes. Six randomized, controlled trials in over 900 participants showed AOD-9604 is well-tolerated with no meaningful changes in IGF-1, blood glucose, blood pressure, or other monitored parameters. However, long-term data beyond 24 weeks does not exist, and the FDA cited unresolved concerns in 2024.",
  },
  {
    q: "Can I take AOD-9604 with semaglutide or tirzepatide?",
    a: (
      <>
        Some clinics promote this combination, but no controlled human data supports it. The mechanisms are different (lipolysis vs appetite suppression), so theoretical synergy exists. However, you would essentially be paying for a peptide whose modest effects are dwarfed by the GLP-class drug&apos;s effects from{" "}
        <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">semaglutide</Link>{" "}
        or{" "}
        <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">tirzepatide</Link>
        .
      </>
    ),
  },
  {
    q: "Does AOD-9604 cause side effects?",
    a: "Reported side effects in clinical trials are rare. The peptide is one of the better-tolerated compounds in obesity research. Mild injection site reactions are the most common report from real-world users.",
  },
  {
    q: "Is AOD-9604 legal?",
    a: "AOD-9604 is sold legally in the US as a research chemical for laboratory use only. It is not approved for human consumption. The FDA declined to include it on the 503A Bulks List in December 2024, restricting compounding pharmacy availability. Some non-US jurisdictions allow more flexible use.",
  },
  {
    q: "Where can I buy AOD-9604?",
    a: (
      <>
        AOD-9604 is sold through specialty research peptide vendors. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Metabolic Studies of a Synthetic Lipolytic Domain (AOD9604) of Human Growth Hormone",
    authors: "Ng FM, Sun J, Sharma L, et al.",
    journal: "Hormone Research in Paediatrics",
    year: "2000",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/11146367/",
    summary: "One of the foundational animal studies establishing AOD-9604's lipolytic mechanism. Researchers confirmed that the C-terminal fragment of growth hormone specifically activates fat breakdown in adipose tissue without affecting IGF-1 levels or insulin sensitivity.",
  },
  {
    title: "The Effects of Human GH and its Lipolytic Fragment (AOD9604) on Lipid Metabolism Following Chronic Treatment in Obese Mice and Beta(3)-AR Knock-Out Mice",
    authors: "Heffernan M, et al.",
    journal: "Endocrinology",
    year: "2001",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/11713213/",
    summary: "This study examined AOD-9604's fat-burning mechanism more deeply in obese mice — including mice without functioning beta-3 adrenergic receptors. The findings confirmed that AOD-9604 reduces fat accumulation and promotes fat oxidation through both beta-3 adrenergic and additional pathways.",
  },
  {
    title: "Safety and Tolerability of the Hexadecapeptide AOD9604 in Humans",
    authors: "Stier H, Vos E, Kenley D",
    journal: "Journal of Endocrinology and Metabolism",
    year: "2013",
    access: "Open Access",
    url: "https://jofem.org/index.php/jofem/article/view/213/278",
    summary: "The key human safety study of AOD-9604, reporting findings from trials involving over 900 participants across six studies. AOD-9604 was found to be well tolerated with no significant effects on glucose levels, IGF-1, or other metabolic markers — confirming the selective mechanism designed to avoid growth hormone's side effects.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does AOD-9604 work?",
    intro:
      "AOD-9604 mimics the fat-burning portion of human growth hormone (amino acids 176-191) without activating receptor regions responsible for IGF-1 production or insulin resistance. It targets adipose tissue specifically — stimulating lipolysis through beta-3 adrenergic activation and inhibiting new fat cell formation. The selective design captures GH's lipolytic effect while avoiding the broader endocrine effects that complicate long-term obesity treatment.",
    body: [
      "Selective Lipolysis [1]. AOD-9604 mimics the fat-burning portion of human growth hormone without activating the receptor regions responsible for IGF-1 production or insulin resistance. It targets adipose tissue specifically, breaking down stored triglycerides into glycerol and free fatty acids.",
      "Beta-3 Adrenergic Receptor Activation [2]. In animal models, AOD-9604 appears to upregulate beta-3 adrenergic receptors expressed primarily in white and brown adipose tissue. Activating these receptors triggers a cAMP-dependent cascade that activates hormone-sensitive lipase.",
      "No IGF-1 Stimulation [3]. Unlike full-length growth hormone, AOD-9604 does not stimulate IGF-1 production in any tested system. This avoids the growth-promoting effects of growth hormone that complicate long-term obesity treatment.",
      "Independent of Glucose Metabolism [3]. AOD-9604 produces fat reduction without inducing insulin resistance or affecting blood glucose. This is a meaningful contrast to full-length growth hormone, which causes hyperglycemia.",
      "Inhibits Lipogenesis [1]. In addition to stimulating fat breakdown, AOD-9604 has been shown to inhibit the formation of new fat cells in animal studies.",
    ],
  },
  {
    id: "research",
    title: "What is AOD-9604 used for?",
    intro:
      "AOD-9604's research history is largely a case study in failed drug development. The Phase 2a trial showed modest weight loss, but the larger Phase 2b 24-week trial failed to demonstrate statistically significant effect vs placebo with intensive diet and exercise. Metabolic Pharmaceuticals terminated the obesity program in 2007. Subsequent research has explored cartilage repair applications and visceral fat reduction in metabolic syndrome contexts.",
    body: [
      "Obesity (Failed Development) [4][5]. The Phase 2a 12-week trial in 300 participants showed modest weight loss (2.6 kg vs 0.8 kg placebo, statistically significant). The Phase 2b 24-week trial in 536 participants failed to show statistically significant weight loss vs placebo when an intensive diet and exercise regimen was added. Development was terminated in 2007.",
      "Cartilage Repair and Joint Health [6]. AOD-9604 has been investigated for cartilage regeneration and osteoarthritis applications. Some studies suggest it may stimulate cartilage matrix production. This research is preliminary.",
      "Visceral Fat Reduction [7]. A 2024 Phase 2b trial in metabolic syndrome patients reported 16.3% reduction in visceral adipose tissue over 12 weeks, without changes in fasting glucose or HbA1c.",
      "Safety Database [4]. Six randomized, double-blind, placebo-controlled trials with over 900 participants establish AOD-9604 as well-tolerated. No meaningful elevation in IGF-1, no changes in insulin sensitivity, no immunogenicity reactions.",
      "Mechanism Research. AOD-9604 remains useful in laboratory research as a tool for studying selective lipolytic signaling without growth hormone's broader endocrine effects.",
    ],
  },
  {
    id: "timeline",
    title: "How long does AOD-9604 take to work?",
    intro:
      "AOD-9604 effects are gradual and modest. Most users report no immediate sensation. In the original 12-week Phase 2a trial, weight loss averaged 2.6 kg (about 1% of starting weight) on the most effective dose. Real-world reports vary widely. Effects on visceral fat (abdominal fat around organs) appear to develop more reliably than total body weight loss. AOD-9604 is generally considered modest in efficacy compared to GLP-class drugs.",
    content:
      "Most users report no immediate sensation. In the original 12-week Phase 2a trial, weight loss averaged 2.6 kg (about 1% of starting weight) on the most effective dose. Real-world reports vary widely, with some users reporting modest fat loss over 8–12 weeks and others reporting no measurable change. Effects on visceral fat (abdominal fat around organs) appear to develop more reliably than total body weight loss — consistent with the lipolysis-targeted mechanism. AOD-9604 is generally considered modest in efficacy compared to GLP-class drugs.",
  },
  {
    id: "dosing",
    title: "How is AOD-9604 dosed?",
    intro:
      "AOD-9604 was tested in clinical trials in both oral and subcutaneous formulations. Research-grade material is typically used by subcutaneous injection. There is no FDA-approved dose because AOD-9604 was discontinued before approval. Common research-grade dosing is 250–500 mcg subcutaneously once daily; some protocols use 2–3 mg per week split into multiple injections.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard injectable.</span> 250–500 mcg subcutaneously once daily.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Split protocols.</span> Some protocols use 2–3 mg per week split into multiple injections.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Historical oral doses.</span> 0.25 mg, 0.5 mg, and 1.0 mg daily (oral bioavailability is poor &mdash; research has shifted to injectable).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 8–12 weeks is the most common, though there is no established standard.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Half-life is roughly 30 minutes when administered subcutaneously, which is why daily dosing is standard. Some users dose twice daily for more sustained effects. There is no separate research-grade dosing standard validated by clinical evidence &mdash; most online dosing guidance is extrapolated from the original Metabolic Pharmaceuticals trial protocols and may not produce comparable results.
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
    title: "How is AOD-9604 administered?",
    intro: (
      <>
        AOD-9604 is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; once or twice daily using a small insulin syringe. Morning empty-stomach dosing is the conventional protocol (though convention rather than evidence-based). For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection, once or twice daily. Common sites: abdomen, thigh, upper arm.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Research protocols typically use morning dosing on an empty stomach to maximize lipolytic effect &mdash; convention rather than evidence-based.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Subcutaneous AOD-9604 is unaffected by food.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each day to reduce localized irritation.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> If less than 12 hours late, take as soon as remembered. Otherwise skip and resume on the next scheduled day.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> 8–12 weeks is most common. No established break period.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> AOD-9604&apos;s ~30-minute half-life means each dose produces a brief lipolytic window. Morning empty-stomach dosing is convention rather than evidence-based &mdash; the rationale is that fasted state shifts substrate utilization toward fat oxidation, theoretically amplifying the lipolytic signal. No controlled study has compared timing protocols.
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once or twice daily during the cycle</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Morning empty stomach is conventional &mdash; not evidence-based</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">SubQ unaffected by food (oral form historically required empty stomach)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~30 minutes</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Per-pulse lipolytic effect &mdash; no traditional steady-state with short half-life</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. AOD-9604 research vials are typically 5 mg. Because doses are small (250–500 mcg), 2 mL reconstitution is the common research convention. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 5 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">100 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">250 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">500 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">750 mcg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">45 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 5 mg vial, each unit drawn delivers 50 mcg of AOD-9604 at 1 mL reconstitution, 25 mcg at 2 mL, and 16.7 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does AOD-9604 stack well with?",
    intro:
      "AOD-9604 has been historically used as a standalone in clinical trials. Some users stack with GH secretagogues (CJC-1295, ipamorelin) for synergistic fat loss, though evidence is limited. Some clinics promote stacking with GLP-class drugs (semaglutide, tirzepatide), but no controlled human data supports this combination — and the GLP drugs' weight-loss effect substantially dwarfs AOD-9604's modest contribution.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standalone use.</span> Historically the most common in clinical trials.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + caloric deficit.</span> Reasonable theoretical synergy but not clinically validated.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GLP-class drugs.</span> Some clinics promote stacking with{" "}
          <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">semaglutide</Link>{" "}
          or{" "}
          <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">tirzepatide</Link>{" "}
          for additive fat loss, but no controlled human data supports the combination.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GH secretagogues.</span>{" "}
          <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
          /{" "}
          <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">ipamorelin</Link>{" "}
          sometimes combined for synergistic fat loss in research protocols, though evidence is limited.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid: full-length growth hormone.</span> Defeats the purpose of using AOD-9604 specifically to avoid growth hormone&apos;s systemic effects.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of AOD-9604?",
    intro:
      "AOD-9604 has one of the cleanest short-term safety profiles of any peptide tested in obesity trials. The Phase 2 program found no meaningful elevation in IGF-1, blood glucose, blood pressure, heart rate, or other monitored parameters. The most-reported user effects are mild injection-site reactions. Long-term safety data beyond 24 weeks does not exist, and the FDA cited unresolved concerns in 2024 declining 503A bulks list inclusion.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild injection site reactions.</span> Redness or irritation at injection sites.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No common systemic side effects.</span> Reported in trials.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Reported infrequently.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild dizziness.</span> Uncommon.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fatigue.</span> Uncommon.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Severe allergic reactions.</span> Rare. No anti-AOD-9604 antibodies were detected in any clinical trial, suggesting low immunogenicity.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Long-term effects unknown.</span> No data beyond 24 weeks exists.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          AOD-9604 has one of the cleanest short-term safety profiles of any peptide tested in obesity trials. The Phase 2 program found no meaningful elevation in IGF-1, blood glucose, blood pressure, heart rate, or other monitored parameters. However, long-term safety data beyond 24 weeks does not exist, and the FDA cited concerns about peptide impurities and potential immunogenicity in declining 503A bulks list inclusion in December 2024.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does AOD-9604 interact with other drugs?",
    intro:
      "AOD-9604 has no known significant drug interactions in trials. Beta-blockers raise a theoretical concern (could blunt beta-3 adrenergic receptor activation), but no clinical evidence exists. Diabetes medications don't require dose adjustment because AOD-9604 doesn't affect blood glucose. Should not be combined with full-length growth hormone (overlapping receptor pathway defeats the purpose).",
    body: [
      "No known significant drug interactions in trials.",
      "Beta-blockers. Theoretical concern that beta-blockers could blunt the beta-3 adrenergic receptor activation pathway, but no clinical evidence.",
      "Diabetes medications. AOD-9604 does not affect blood glucose, so dose adjustment is not typically required.",
      "Full-length growth hormone. Should not be combined; the receptor pathways overlap.",
    ],
  },
  {
    id: "storage",
    title: "How should AOD-9604 be stored?",
    body: [
      "Lyophilized (powder) form: Store at 2–8°C sealed; freeze at -20°C for long-term storage.",
      "Reconstituted solution: Store at 2–8°C; typically stable for 28–30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Protect from light.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of AOD-9604 research?",
    intro:
      "AOD-9604 is not FDA-approved by the US, EMA in Europe, or the TGA in Australia. Development as an obesity drug was terminated in 2007 after the Phase 2b trial failed to demonstrate statistically significant weight loss versus placebo. In December 2024, the FDA declined to include AOD-9604 on the 503A Bulks List, restricting compounding pharmacy availability. WADA-prohibited as a growth hormone fragment.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          AOD-9604 is not FDA-approved by the United States, EMA in Europe, or the TGA in Australia. Development as an obesity drug was terminated in 2007 after the Phase 2b trial failed to demonstrate statistically significant weight loss versus placebo when intensive diet and exercise were added.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          In December 2024, the FDA declined to include AOD-9604 (both free base and acetate forms) on the 503A Bulks List, citing concerns about long-term safety, peptide impurities, and potential immunogenicity. This restricts the peptide&apos;s availability through compounding pharmacies in the US.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          AOD-9604 received GRAS (Generally Recognized as Safe) status conditional on publication of safety data for use in foods and dietary supplements at low doses, but this status does not authorize it for therapeutic use.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits AOD-9604 in sport as a growth hormone fragment. Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source AOD-9604",
    intro:
      "AOD-9604 is not FDA-approved and is sold only as a research-grade peptide through specialty vendors. The FDA declined to add AOD-9604 to the 503A Bulks List in December 2024, restricting compounding pharmacy availability. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "amino-club", note: "ISO 17025 tested · batch COAs" },
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "ascension-peptides" },
            { slug: "behemoth-labz" },
            { slug: "spartan-peptides" },
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
    title: "AOD-9604 FAQ",
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
          Heffernan MA, Thorburn AW, Fam B, et al. Increase of fat oxidation and weight loss in obese mice caused by chronic treatment with human growth hormone or a modified C-terminal fragment. Int J Obes. 2001.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11673763/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11673763/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ng FM, Sun J, Sharma L, et al. Metabolic studies of a synthetic lipolytic domain (AOD9604) of human growth hormone. Horm Res. 2000;53(6):274-8.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11146367/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11146367/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Stier H, Vos E, Kenley D. Safety and Tolerability of the Hexadecapeptide AOD9604 in Humans. J Endocrinol Metab. 2013;3(1-2):7-15.{" "}
          <a href="https://jofem.org/index.php/jofem/article/view/213/278" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://jofem.org/index.php/jofem/article/view/213/278
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wittert GA, Caterson ID, Bouchard C, et al. AOD9604, an orally active synthetic peptide derivative of human growth hormone, induced significant fat loss in obese subjects. Phase 2 trials, Metabolic Pharmaceuticals Ltd. 2003-2007.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Misra M. Obesity pharmacotherapy: current perspectives and future directions. Curr Cardiol Rev. 2013;9:33-54.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3584306/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC3584306/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Cartilage repair Phase 2 investigation. Metabolic Pharmaceuticals (Calzada Limited) program disclosures.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          AOD-9604 visceral adipose tissue 2024 Phase 2b metabolic syndrome trial. Industry research disclosure.
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
  { id: "overview", title: "What is AOD-9604?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function AOD9604Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"AOD-9604","description":"AOD-9604 (hGH Fragment 176-191) research profile: lipolysis mechanism, clinical trial history, dosing protocol, side effects, FAQ, and FDA regulatory status.","url":"https://profpeptide.com/peptides/aod-9604","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"AOD-9604"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">AOD-9604</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
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
              <dd className="text-base text-[#16181B] dark:text-slate-100">A modified fragment of the C-terminus of growth hormone (hGH 176-191), studied for fat loss without growth hormone&apos;s broader growth effects.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Subcutaneous injection, usually morning; historically also studied orally</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">~30 minutes (subcutaneous)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">250&ndash;500 mcg subcutaneously once daily, in 8&ndash;12 week cycles</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Not FDA-approved as a drug &mdash; research use only (holds limited GRAS food status).</dd>
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
        <h2 className="section-heading mb-3">What is AOD-9604?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            AOD-9604 &mdash; also written AOD9604 and known as Anti-Obesity Drug 9604, the hGH Fragment 176-191, or Tyr-hGH 177-191 &mdash; is a synthetic peptide fragment of human growth hormone, specifically the 16-amino-acid C-terminal sequence (amino acids 176-191) with a stabilizing tyrosine added at the front. It was developed in Australia in the 1990s to capture growth hormone&apos;s fat-burning effects without the broader hormonal side effects of full-length growth hormone. Despite six clinical trials in over 900 participants, it failed to demonstrate consistent weight loss in larger Phase 2b studies and was discontinued as a drug candidate in 2007. It remains available as a research peptide and has renewed interest for cartilage repair applications. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates lipolysis (fat breakdown) without raising blood sugar or IGF-1</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest weight reduction in early trials (2.6 kg vs 0.8 kg placebo over 12 weeks)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Selective fat-mobilization without growth hormone&apos;s broader endocrine effects</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Well-tolerated safety profile across 900+ trial participants</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Investigational interest in cartilage repair and joint applications</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No measurable effect on insulin sensitivity or glucose homeostasis</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> Historical clinical trials used oral doses of 0.25 mg, 0.5 mg, and 1.0 mg daily, plus subcutaneous formulations. Research-grade injectable AOD-9604 is typically dosed at 250–500 mcg subcutaneously once daily.
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
        {["Lipolysis", "Fat Loss", "Research-Grade", "GH Fragment"].map((tag) => (
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
        <Link href="/peptides/cagrilintide" className="text-sm font-medium text-[#3A759F] hover:underline">Cagrilintide</Link>
        <Link href="/peptides/semaglutide" className="text-sm font-medium text-[#3A759F] hover:underline">Semaglutide</Link>
        <Link href="/peptides/tirzepatide" className="text-sm font-medium text-[#3A759F] hover:underline">Tirzepatide</Link>
        <Link href="/peptides/igf-1-lr3" className="text-sm font-medium text-[#3A759F] hover:underline">IGF-1 LR3</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/aod-9604-mots-c" className="text-sm font-medium text-[#3A759F] hover:underline">AOD-9604 + MOTS-c</Link>
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
    <ContactLink pageName="AOD-9604" pagePath="/peptides/aod-9604" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
