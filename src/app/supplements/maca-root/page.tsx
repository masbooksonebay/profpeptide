import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/maca-root",
  title: "Maca Root: Non-Hormonal Libido, Black for Sperm, the SSRI Adjunct",
  description:
    "Maca root dosing (1.5–3 g), the non-hormonal libido mechanism that distinguishes it from testosterone boosters, color variety selection (black for sperm, red for prostate), and the SSRI-induced sexual dysfunction evidence.",
});

const faqs = [
  {
    q: "Does maca root raise testosterone?",
    a: (
      <>
        No — and this is what makes maca unique among libido supplements. Multiple human RCTs have measured serum testosterone, estrogen, LH, and FSH before and after maca supplementation and found no significant hormonal changes (Gonzales 2002 is the foundational study showing libido improvement without testosterone change). Maca&apos;s libido-enhancing effects operate through different mechanisms — likely involving dopaminergic and noradrenergic neurotransmitter pathways that regulate sexual motivation in the brain, plus adaptogenic effects on stress hormone balance. For some users this is a feature (no concerns about hormonal feedback or hormone-sensitive conditions); for others, it&apos;s a limitation (no anabolic muscle-building benefit like with testosterone-supporting compounds). If your goal is genuine testosterone elevation, look at{" "}
        <Link href="/supplements/tongkat-ali" className="text-[#3A759F] hover:underline">Tongkat Ali</Link>{" "}
        — which does have testosterone-elevating evidence in eugonadal-low and late-onset-hypogonadal men.
      </>
    ),
  },
  {
    q: "What's the difference between black, red, and yellow maca?",
    a: "Different bioactive profiles for different applications. All three are the same species (Lepidium meyenii); color variation reflects different cultivars and growing conditions. Yellow maca is the most common and best for general energy/libido — has the broadest evidence base because most trials used yellow or mixed-color maca. Black maca has the strongest evidence for male fertility specifically — sperm count, motility, and seminal volume improvements documented in trials (Gonzales 2001 series). Red maca has been studied for benign prostatic hyperplasia (BPH) — modest prostate-volume reduction in animal and small human trials. If you don't have a specific goal: yellow maca is the default. For male fertility: black maca. For prostate concerns: red maca.",
  },
  {
    q: "How much maca should I take?",
    a: "1.5–3 g daily of maca powder or extract. Gonzales 2002 used 1.5 g and 3 g arms — both produced libido improvements, with no clear dose-response difference between them. 3 g/day is the commonly used dose in subsequent trials. Higher doses (6–9 g) have been studied in some male fertility trials but produce more GI discomfort with no clear additional benefit. Gelatinized maca (starch-removed) is better tolerated than raw maca and is the standard supplement form. Effect typically emerges over 4–8 weeks of consistent daily use — maca is not an acute supplement.",
  },
  {
    q: "Can maca help with SSRI-induced sexual dysfunction?",
    a: (
      <>
        Yes, with modest but real effect. A 2008 RCT by Dording et al. in remitted depression patients with SSRI-induced sexual dysfunction documented that high-dose maca (3 g/day for 12 weeks) significantly improved sexual function scores compared to placebo. SSRI-induced sexual dysfunction is one of the more troublesome side effects of antidepressant therapy and has limited established treatments — maca&apos;s non-hormonal mechanism is particularly relevant here because patients on SSRIs often have additional reasons to avoid hormonal interventions. The effect size is modest; it&apos;s not a replacement for working with prescriber to optimize antidepressant choice. But for patients staying on their SSRI who want a supplemental option, maca has reasonable evidence. Coordinate with prescriber.
      </>
    ),
  },
  {
    q: "Does maca work for postmenopausal women?",
    a: "Yes — and this is one of maca's better-documented use cases. A 2008 RCT by Brooks et al. in postmenopausal women documented that 3.5 g/day maca for 6 weeks reduced anxiety, depression symptoms, and sexual dysfunction scores compared to placebo — without affecting serum estradiol or other hormones. A 2015 trial in Chinese postmenopausal women replicated the sexual function and mood improvements. Postmenopausal sexual dysfunction has limited non-hormonal treatment options; maca's mechanism (non-hormonal, with mood + sexual function effects) fits this population well. Coordinate with healthcare provider, particularly if you have hormone-sensitive cancer history (even though maca doesn't directly alter hormones, the reproductive-system effects make oncology coordination appropriate).",
  },
  {
    q: "When will I notice maca working?",
    a: "Maca is a chronic supplement, not an acute one. Most users notice initial effects over 2–4 weeks of consistent daily use, with full effects emerging over 8–12 weeks. Gonzales 2002 used 12-week protocols. If you're 6 weeks in with no effect, consider trying a different color variety (e.g., switch from yellow to black) or increase dose modestly (e.g., 1.5 g → 3 g). If you're 12 weeks in with no effect, maca probably isn't the right tool for your situation — non-response rate is real and not yet predictable from baseline factors.",
  },
  {
    q: "Is maca safe long-term?",
    a: "Yes, with one caveat. Maca has been consumed as a food in Peru for thousands of years, and human trials at 1.5–3 g/day for 12 weeks document no significant adverse events. Long-term safety (years of daily use) is supported by traditional use but less by trial data. The caveat: maca contains glucosinolates (like other cruciferous plants — broccoli, cauliflower, kale) that can theoretically affect thyroid function at high doses in iodine-deficient individuals. Practical considerations: don't exceed 3 g/day for prolonged periods unless under healthcare provider supervision; ensure adequate iodine intake; gelatinized maca has lower glucosinolate content than raw maca. Pregnancy and breastfeeding safety isn't well-characterized in trials — avoid in these contexts.",
  },
  {
    q: "Can I stack maca with Tongkat Ali or other libido supplements?",
    a: (
      <>
        Yes — different mechanisms make these stackable rather than redundant.{" "}
        <Link href="/supplements/tongkat-ali" className="text-[#3A759F] hover:underline">Tongkat Ali</Link>{" "}
        works through testosterone elevation (SHBG reduction, aromatase inhibition, cortisol modulation) — a hormonal mechanism.{" "}
        <Link href="/supplements/maca-root" className="text-[#3A759F] hover:underline">Maca</Link>{" "}
        works through neurotransmitter modulation and adaptogenic stress reduction — a non-hormonal mechanism.{" "}
        <Link href="/supplements/l-citrulline" className="text-[#3A759F] hover:underline">L-citrulline</Link>{" "}
        works through NO-mediated vasodilation — a vascular mechanism. The three together address libido (maca), hormones (tongkat ali), and physical erectile mechanism (citrulline) — comprehensive non-prescription sexual health support. Coordinate with healthcare provider, particularly if you have hormone-sensitive conditions or are on prescription sexual health medications.
      </>
    ),
  },
];

const studies = [
  {
    title: "Effect of Lepidium meyenii (Maca) on Sexual Desire and Its Absent Relationship with Serum Testosterone Levels in Adult Healthy Men",
    authors: "Gonzales GF, Cordova A, Vega K, Chung A, Villena A, Góñez C, Castillo S",
    journal: "Andrologia",
    year: "2002",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/12472620/",
    summary: "A 12-week RCT of maca (1.5 g/day, 3 g/day, or placebo) in healthy men. Both maca doses significantly improved self-reported sexual desire scores vs placebo, with no significant difference between doses. Critically, serum testosterone, estradiol, FSH, LH, and prolactin were unchanged across all groups. This is the foundational reference for maca's non-hormonal mechanism and is the most-cited single source for the &quot;maca improves libido without raising testosterone&quot; finding that distinguishes it from herbal testosterone boosters.",
  },
  {
    title: "Maca (L. meyenii) for Improving Sexual Function: A Systematic Review",
    authors: "Shin BC, Lee MS, Yang EJ, Lim HS, Ernst E",
    journal: "BMC Complementary and Alternative Medicine",
    year: "2010",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/20691074/",
    summary: "A systematic review identifying 4 RCTs of maca for sexual function (healthy men, postmenopausal women, and SSRI-induced sexual dysfunction populations). Meta-analysis was limited by trial heterogeneity but the qualitative summary supported maca's libido-enhancing effects across populations. Shin 2010 is the most-cited review-level reference and the basis for maca's inclusion in modern integrative medicine sexual health protocols.",
  },
  {
    title: "Effects of Lepidium meyenii (Maca) on Sexual Dysfunction Caused by Antidepressant Drugs",
    authors: "Dording CM, Fisher L, Papakostas G, et al.",
    journal: "CNS Neuroscience &amp; Therapeutics",
    year: "2008",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/18801111/",
    summary: "A 12-week RCT of maca (1.5 g/day vs 3 g/day) in patients with remitted depression and ongoing SSRI-induced sexual dysfunction. The 3 g/day arm significantly improved sexual function scores vs the 1.5 g/day arm. The foundational reference for maca's SSRI-induced sexual dysfunction indication — a clinically important niche because SSRI sexual side effects are common and have few established treatments.",
  },
  {
    title: "Beneficial Effects of Lepidium meyenii (Maca) on Psychological Symptoms and Measures of Sexual Dysfunction in Postmenopausal Women",
    authors: "Brooks NA, Wilcox G, Walker KZ, Ashton JF, Cox MB, Stojanovska L",
    journal: "Menopause",
    year: "2008",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18784609/",
    summary: "A 6-week RCT of maca (3.5 g/day) in postmenopausal women. Maca significantly reduced anxiety and depression symptoms and improved sexual function scores compared to placebo. Serum estradiol, FSH, and LH were unchanged. The foundational reference for maca's postmenopausal use case — particularly important because postmenopausal sexual dysfunction has limited non-hormonal treatment options.",
  },
  {
    title: "Effect of Two Different Doses of Red Maca in Men with Mild Symptoms of Benign Prostatic Hyperplasia",
    authors: "Gonzales C, Leiva-Revilla J, Rubio J, Gasco M, Gonzales GF",
    journal: "Andrologia",
    year: "2012",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/22236001/",
    summary: "A 12-week trial of red maca (0.6 g/day or 1.2 g/day) in men with mild benign prostatic hyperplasia. Both doses reduced prostate volume and improved IPSS (International Prostate Symptom Score) compared to baseline. Specific to red maca (not black or yellow). One of the foundational references for the &quot;color matters&quot; framing — red maca for prostate, black for fertility, yellow for general use.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does maca root work?",
    intro:
      "Maca's defining mechanism is what it doesn't do: it doesn't raise testosterone, estrogen, LH, or FSH. Multiple human trials measuring serum hormones before and after maca supplementation have documented no significant hormonal changes. Maca's libido-enhancing and mood effects operate through neurotransmitter modulation (likely dopaminergic and noradrenergic), HPA axis modulation (adaptogenic stress reduction), and direct effects on reproductive tissue — without altering peripheral hormone levels.",
    body: [
      "Non-hormonal libido enhancement. Multiple RCTs (Gonzales 2002, Brooks 2008) document maca improves sexual desire scores while serum testosterone, estradiol, FSH, LH, and prolactin remain unchanged. This mechanistic distinction separates maca from herbal &quot;testosterone boosters&quot; — and makes maca relevant for populations where hormonal interventions are contraindicated (postmenopausal women, hormone-sensitive cancer history, SSRI-induced sexual dysfunction).",
      "Dopaminergic and noradrenergic modulation (proposed). Maca's bioactive compounds — macamides and macaenes (long-chain fatty acid amides unique to maca) — likely modulate neurotransmitter systems involved in sexual motivation and arousal. The mechanism isn't fully characterized at the receptor level but consistently produces effects on sexual desire scores without hormonal changes.",
      "Adaptogenic stress reduction. Maca is classified as an adaptogen — modulating the hypothalamic-pituitary-adrenal (HPA) axis response to stress. Chronic stress is a major contributor to reduced libido and sexual dysfunction; maca's effect on the stress response may indirectly support reproductive function by reducing the cortisol burden that suppresses libido and reproductive hormones.",
      "Sperm quality support (black maca specifically). Black maca specifically — not yellow or red — has been documented in trials (Gonzales 2001 series, Melnikovova 2015) to improve sperm count, motility, morphology, and seminal volume. Mechanism appears to involve direct effects on spermatogenesis rather than testosterone elevation (which doesn't occur). Useful for male fertility workups.",
      "Prostate effects (red maca specifically). Red maca specifically has been studied for benign prostatic hyperplasia — Gonzales 2012 documented modest prostate volume reduction and IPSS improvement with red maca at 0.6–1.2 g/day. Mechanism isn't fully characterized but may involve effects on prostate-tissue glucocorticoid receptors.",
      "Mood and depression support. Brooks 2008 documented maca reduced anxiety and depression symptoms in postmenopausal women. Dording 2008 documented improvements in SSRI-induced sexual dysfunction adjacent to depression management. The mood-supporting mechanism likely overlaps with the libido-supporting neurotransmitter mechanisms.",
      "Energy and exercise performance (modest). Endurance cycling trials documented modest improvements in time-trial performance with maca supplementation. Mechanism unclear — possibly adaptogenic + dopaminergic effects on perceived effort. Effect size is smaller than for libido and mood applications.",
    ],
  },
  {
    id: "research",
    title: "What does maca root actually do?",
    intro:
      "Maca has one of the better evidence bases among traditional libido-supporting botanicals — multiple RCTs across men, postmenopausal women, and SSRI-induced sexual dysfunction populations. The honest summary: libido effects are moderate and replicated; testosterone is not affected; black maca specifically improves sperm parameters; postmenopausal mood and sexual function are supported by replicated trial data.",
    body: [
      "Sexual desire / libido in healthy men (Moderate). Gonzales 2002 (1.5–3 g/day, 12 weeks) documented significant libido improvement vs placebo, no testosterone change. Shin 2010 systematic review confirmed across 4 RCTs.",
      "Sexual desire / function in postmenopausal women (Moderate). Brooks 2008 (3.5 g/day, 6 weeks) documented significant sexual function improvement and reduced anxiety/depression vs placebo, no estradiol change. Particularly relevant for users avoiding hormone replacement therapy.",
      "SSRI-induced sexual dysfunction (Moderate). Dording 2008 (3 g/day vs 1.5 g/day, 12 weeks) documented dose-dependent sexual function improvement in depressed patients with SSRI-induced sexual dysfunction. Clinically relevant niche.",
      "Male fertility / sperm parameters (Moderate — black maca specifically). Gonzales 2001 series, Melnikovova 2015 documented black maca specifically improves sperm count, motility, and seminal volume. Not all maca color variants produce this effect — the &quot;color matters&quot; distinction is real.",
      "Mood and depression symptoms (Moderate in postmenopausal women, Modest in general populations). Brooks 2008 and related trials document reduced anxiety/depression scores in postmenopausal women. Less robust evidence in general or male populations.",
      "Benign prostatic hyperplasia (Modest — red maca specifically). Gonzales 2012 (red maca, 0.6–1.2 g/day) documented prostate volume reduction and IPSS improvement. Small trial base; needs replication.",
      "Energy and exercise endurance (Modest). Cycling trials show modest performance improvements. Not a primary use case.",
      "Hormonal levels (Negative — and this is a feature, not a bug). Multiple trials confirm maca does NOT alter testosterone, estradiol, FSH, LH, or prolactin. This is mechanistically distinctive among libido supplements.",
      "Testosterone in eugonadal men (Negative). Don't use maca for testosterone elevation — it doesn't do this. Use Tongkat Ali for that goal (see Related Supplements).",
    ],
  },
  {
    id: "dosing",
    title: "How is maca root dosed?",
    intro:
      "Maca dosing is straightforward and consistent across applications: 1.5–3 g daily of gelatinized maca powder or extract. Effect emerges over 4–8 weeks of consistent daily use; this is a chronic supplement, not an acute one. Color variety matters more than dose — black for fertility, red for prostate, yellow for general use.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">General libido / energy.</span> 1.5–3 g daily, gelatinized maca powder or extract, any color variety (yellow is default).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">SSRI-induced sexual dysfunction.</span> 3 g/day (Dording 2008 dose — superior to 1.5 g/day in that trial). Coordinate with prescribing psychiatrist.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Postmenopausal sexual / mood support.</span> 3–3.5 g/day (Brooks 2008 used 3.5 g). Yellow or black maca.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Male fertility / sperm parameters.</span> Black maca specifically, 1.5–3 g/day for 1–3 months. Gonzales 2001 series and subsequent trials.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Benign prostatic hyperplasia.</span> Red maca specifically, 0.6–1.2 g/day (Gonzales 2012 dose). Smaller evidence base — consider as adjunct, not replacement for urology workup.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Athletic / endurance performance.</span> 3 g/day. Modest effect — not a primary use case.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: maca is chronic. Initial effects 2–4 weeks; full effects 8–12 weeks. Most trials are 6–12 weeks in duration. If you&apos;re 12 weeks in with no effect, consider switching color variety or accept that maca isn&apos;t the right tool for your goal.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Form note.</span> Gelatinized maca (starch-removed, more digestible, lower glucosinolate content) is the standard supplement form and what most trials have used. Raw maca powder is harder to digest and produces more GI discomfort. Extract products vary in standardization — for trial-equivalent dosing, gelatinized powder is most reliable.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take maca root",
    intro:
      "Maca is taken orally as powder or capsules. Powder is the more common form (added to smoothies, coffee, oatmeal, or food) and is cost-efficient at typical doses. The practical considerations are gelatinized vs raw form, color variety for specific applications, timing (morning preferred to avoid sleep disruption), and consistency (chronic daily use).",
    node: (
      <div className="space-y-4">
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1–2× daily. Single 3 g morning dose is acceptable; split 1.5 g AM + 1.5 g afternoon for steadier intake if preferred.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Morning preferred — maca can be mildly energizing and may interfere with sleep if taken late. Avoid taking after 4 PM.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">With or without food per tolerance. Maca powder mixes well into smoothies, oatmeal, yogurt, coffee, or hot cereal. Earthy/malty flavor blends well with chocolate and banana.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Gelatinized maca powder is the practical default — better digestibility and trial-equivalent dosing. Capsules are acceptable but cost-inefficient at 3 g/day (typically 6+ capsules per dose). Color variety: yellow (default), black (fertility), red (prostate).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Authentic Peruvian-grown maca preferred (geographic origin matters for traditional cultivation conditions). Gelatinized form. Third-party tested for heavy metals (lead, cadmium). Reputable brands: The Maca Team, Navitas, Anthony&apos;s, Now Foods, Sol Raiz.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / storage</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No formal cycling required — trials used 6–12 weeks continuous. Some users cycle 4 weeks on / 1 week off; no clinical evidence either way. Store in cool dry conditions; powder is hygroscopic.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does maca root stack with?",
    intro:
      "Maca pairs naturally with other sexual-health supplements that work through different mechanisms — and with mood/adaptogen supplements that share some HPA-axis territory. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Maca&apos;s sexual-health application overlaps mechanistically with melanocortin-receptor peptides — particularly PT-141 (bremelanotide) for sexual function via central nervous system melanocortin signaling. Maca and PT-141 address different facets of the same problem (motivation vs central arousal), though direct combination evidence doesn&apos;t exist in trials. For libido contexts driven by stress / HPA dysregulation, maca&apos;s adaptogenic mechanism complements{" "}
            <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
            healing applications where chronic stress is the limiting factor. No formal stack RCT evidence; mechanism-based combination.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/tongkat-ali" className="text-[#3A759F] hover:underline">Tongkat Ali</Link>{" "}
              — different mechanism (testosterone elevation via SHBG/aromatase/cortisol). Maca handles non-hormonal libido and mood; tongkat ali handles hormonal testosterone support. Complementary for men with both libido and testosterone-low complaints.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/l-citrulline" className="text-[#3A759F] hover:underline">L-citrulline</Link>{" "}
              — vascular/erectile mechanism. Maca addresses libido motivation; citrulline addresses physical erectile vasodilation. Comprehensive sexual-health stack.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/ashwagandha" className="text-[#3A759F] hover:underline">Ashwagandha</Link>{" "}
              — overlapping adaptogen mechanism (HPA axis cortisol modulation). Mechanistically additive for stress-driven libido issues. May produce more pronounced fatigue/sedation than maca alone — start with one, then add.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/rhodiola-rosea" className="text-[#3A759F] hover:underline">Rhodiola</Link>{" "}
              — adaptogen with stronger energy/cognitive profile than maca. Compatible stacking; some overlap in CNS dopaminergic effects.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/zinc" className="text-[#3A759F] hover:underline">Zinc</Link>{" "}
              — foundational mineral for testosterone synthesis (relevant for male fertility stack with black maca).
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/fenugreek" className="text-[#3A759F] hover:underline">Fenugreek</Link>{" "}
              — alternative herbal libido/testosterone option; different bioactive profile. Pick one rather than stack.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              SSRI / SNRI antidepressants — maca&apos;s SSRI-induced sexual dysfunction indication (Dording 2008). Coordinate with prescribing psychiatrist.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stress management.</span> Maca&apos;s adaptogenic mechanism works best alongside actual stress reduction — sleep, meditation, exercise. Maca isn&apos;t a substitute for addressing chronic stress drivers.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Iodine sufficiency.</span> Maca&apos;s glucosinolate content can theoretically affect thyroid function in iodine-deficient users. Ensure adequate iodine intake (seafood, iodized salt, dairy).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Consistent daily timing.</span> Maca effects are chronic, not acute. Daily morning routine produces best results.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Adequate sleep.</span> Sexual function and libido are dramatically affected by sleep debt — maca cannot overcome chronic sleep deprivation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Exercise.</span> Regular exercise independently improves libido, mood, and sexual function. Maca&apos;s effect adds to exercise rather than substituting.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid evening dosing.</span> Mildly energizing — can interfere with sleep if taken late.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Maca has been consumed as a food in Peru for thousands of years and has an excellent safety profile in human trials at typical doses. The main practical considerations are mild GI discomfort with raw forms, glucosinolate-thyroid interaction at high doses in iodine-deficient users, and contraindication during pregnancy/breastfeeding due to limited safety data.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort with raw maca — gelatinized form resolves this in most users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild energizing effect — can interfere with sleep if taken late in the day. Morning dosing resolves this.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Earthy/malty flavor preference issues — practical not safety.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Thyroid interaction at high doses in iodine-deficient users.</span> Maca contains glucosinolates (like other cruciferous plants). At very high doses (10+ g/day) in iodine-deficient individuals, theoretical thyroid function effects. Gelatinized maca has lower glucosinolate content and ensures most users don&apos;t hit this concern.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pregnancy and breastfeeding safety not well-characterized.</span> Avoid in pregnant or breastfeeding users; coordinate with obstetrician if otherwise.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hormone-sensitive condition coordination.</span> Even though maca doesn&apos;t directly raise hormones, the reproductive-system effects make oncology coordination appropriate in users with breast, prostate, ovarian, or uterine cancer history.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Heavy-metal contamination risk in non-third-party-tested products.</span> Maca grown in mineral-rich Andean soils can accumulate lead and cadmium. Third-party testing matters.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">SSRI / SNRI antidepressants.</span> Maca&apos;s indication for SSRI-induced sexual dysfunction (Dording 2008). Coordinate with prescriber. No clinically significant pharmacokinetic interactions documented.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Thyroid medications — no documented interaction at standard doses; theoretical concern at very high doses in iodine-deficient users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Hormone-sensitive condition medications (tamoxifen, aromatase inhibitors, GnRH agonists) — coordinate with oncology even though maca doesn&apos;t directly alter hormones.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anticoagulants — no documented interaction.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other adaptogens (ashwagandha, rhodiola) — additive HPA-axis effects; well-tolerated combinations but watch for excessive fatigue/sedation.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about maca",
    intro:
      "Maca has a stronger evidence base than most traditional libido botanicals, but several questions remain around its mechanism, the color-variety distinctions, and long-term safety.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Non-hormonal mechanism details.</span> Maca consistently improves libido without altering peripheral hormones, but the receptor-level mechanism isn&apos;t fully characterized. Likely involves dopaminergic and noradrenergic pathways; the specific bioactive compound(s) producing the effect (macamides? macaenes? something else?) aren&apos;t definitively identified.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Color variety differential effects.</span> Black maca specifically improves sperm parameters; red maca specifically affects prostate volume; yellow maca is the general-use variety. The mechanism behind these differential effects isn&apos;t fully characterized — differences in macamide profile? glucosinolate content? other phytochemicals? The pattern is real in trials but the why isn&apos;t precisely understood.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term safety beyond 12 weeks.</span> Most trials are 6–12 weeks. Traditional use in Peru supports years of daily consumption as food, but trial data for multi-year supplemental use is more limited.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal dose ceiling and dose-response.</span> Gonzales 2002 found no significant difference between 1.5 g and 3 g; Dording 2008 found 3 g superior to 1.5 g. The dose-response isn&apos;t precisely characterized — whether 4–6 g produces additional benefit isn&apos;t well-studied.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Individual non-response rate.</span> A meaningful fraction of users see no effect from maca despite consistent 12-week protocols. Determinants of response (genetics, gut microbiome, baseline mood/libido state, color variety match) aren&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Extract vs powder bioequivalence.</span> Most trials used gelatinized powder. Concentrated extracts vary widely in standardization. Whether 500 mg of a 6:1 extract is equivalent to 3 g of powder isn&apos;t well-tested across products.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Mechanism of mood / antidepressant effect.</span> The mood improvements in postmenopausal women (Brooks 2008) and the SSRI-induced sexual dysfunction improvement (Dording 2008) suggest direct CNS effects on mood — but the mechanism vs simply downstream of libido improvement isn&apos;t precisely separated.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy maca root",
    intro:
      "Maca is widely available as gelatinized powder or capsules. Quality varies significantly — origin (authentic Peruvian high-altitude vs lower-grade sources), processing (gelatinized vs raw), color variety, and heavy-metal testing all matter. Third-party testing is more important here than in many supplements due to soil heavy-metal accumulation potential.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Authentic Peruvian-grown maca</span> — Junín plateau cultivation conditions. Geographic origin matters for traditional cultivation that produces trial-quality material.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Gelatinized form preferred</span> — starch removed, more digestible, lower glucosinolate content, what most trials used.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Color variety matches goal</span> — yellow for general use, black for male fertility/sperm, red for prostate/BPH. Some products are blends — fine for general use, less optimal for goal-specific applications.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested for heavy metals</span> — lead and cadmium can accumulate from mineral-rich Andean soils. USP, NSF, ConsumerLab, or brand-specific COA disclosure.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Powder form for cost efficiency</span> — 3 g/day is much cheaper from powder than capsules (typically 6+ capsules per dose). Mixes into smoothies, oatmeal, coffee.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands</span> — The Maca Team, Navitas Organics, Anthony&apos;s, Now Foods, Sol Raiz Organics. Premium brands tend to disclose origin and heavy-metal testing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid &quot;maca extract&quot; products without standardization details</span> — concentration claims (4:1, 10:1) can vary widely in actual bioactive content.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid combo &quot;male enhancement&quot; or &quot;libido booster&quot; blends</span> — these often combine sub-therapeutic maca with stimulants and unstudied combinations.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=gelatinized+maca+root+peruvian&tag=profpeptide-20" label="Maca Root" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Maca Root FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
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
          Gonzales GF, Cordova A, Vega K, et al. Effect of Lepidium meyenii (Maca) on sexual desire and its absent relationship with serum testosterone levels in adult healthy men. Andrologia. 2002;34(6):367-372.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/12472620/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/12472620/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Shin BC, Lee MS, Yang EJ, Lim HS, Ernst E. Maca (L. meyenii) for improving sexual function: a systematic review. BMC Complement Altern Med. 2010;10:44.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20691074/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20691074/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Dording CM, Fisher L, Papakostas G, et al. A double-blind, randomized, pilot dose-finding study of maca root (L. meyenii) for the management of SSRI-induced sexual dysfunction. CNS Neurosci Ther. 2008;14(3):182-191.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18801111/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18801111/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Brooks NA, Wilcox G, Walker KZ, Ashton JF, Cox MB, Stojanovska L. Beneficial effects of Lepidium meyenii (Maca) on psychological symptoms and measures of sexual dysfunction in postmenopausal women are not related to estrogen or androgen content. Menopause. 2008;15(6):1157-1162.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18784609/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18784609/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Gonzales C, Leiva-Revilla J, Rubio J, Gasco M, Gonzales GF. Effect of red maca (Lepidium meyenii) on prostate zinc levels in rats with testosterone-induced prostatic hyperplasia. Andrologia. 2012;44 Suppl 1:362-369.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22236001/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22236001/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Melnikovova I, Fait T, Kolarova M, Fernandez EC, Milella L. Effect of Lepidium meyenii Walp. on semen parameters and serum hormone levels in healthy adult men: a double-blind, randomized, placebo-controlled pilot study. Evid Based Complement Alternat Med. 2015;2015:324369.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/26421049/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/26421049/
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
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does maca root raise testosterone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Multiple human RCTs have measured serum testosterone, estrogen, LH, and FSH before and after maca supplementation and found no significant hormonal changes (Gonzales 2002). Maca's libido-enhancing effects operate through different mechanisms — likely dopaminergic and noradrenergic pathways. For genuine testosterone elevation, look at Tongkat Ali — which does have testosterone-elevating evidence in eugonadal-low and late-onset-hypogonadal men."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between black, red, and yellow maca?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different bioactive profiles for different applications. Yellow maca is the most common and best for general energy/libido. Black maca has the strongest evidence for male fertility specifically (sperm count, motility, and seminal volume improvements). Red maca has been studied for benign prostatic hyperplasia. If you don't have a specific goal: yellow maca is the default."
      }
    },
    {
      "@type": "Question",
      "name": "How much maca should I take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1.5–3 g daily of gelatinized maca powder or extract. Gonzales 2002 used 1.5 g and 3 g arms — both produced libido improvements. 3 g/day is the commonly used dose. Effect typically emerges over 4–8 weeks of consistent daily use."
      }
    },
    {
      "@type": "Question",
      "name": "Can maca help with SSRI-induced sexual dysfunction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, with modest but real effect. Dording 2008 RCT in remitted depression patients with SSRI-induced sexual dysfunction documented that high-dose maca (3 g/day for 12 weeks) significantly improved sexual function scores compared to placebo. Maca's non-hormonal mechanism is particularly relevant here. Coordinate with prescriber."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Maca Root: Non-Hormonal Libido, Black for Sperm, the SSRI Adjunct",
  "description": "Maca root dosing (1.5–3 g), the non-hormonal libido mechanism that distinguishes it from testosterone boosters, color variety selection (black for sperm, red for prostate), and the SSRI-induced sexual dysfunction evidence.",
  "url": "https://profpeptide.com/supplements/maca-root",
  "datePublished": "2026-04-15T00:00:00Z",
  "dateModified": "2026-05-27T00:00:00Z",
  "author": {
    "@type": "Organization",
    "name": "Prof. Peptide Editorial Team",
    "url": "https://profpeptide.com/about"
  },
  "reviewedBy": {
    "@type": "Organization",
    "name": "Prof. Peptide Editorial Team",
    "url": "https://profpeptide.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Prof. Peptide",
    "url": "https://profpeptide.com"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
    { "@type": "ListItem", "position": 2, "name": "Supplements", "item": "https://profpeptide.com/supplements" },
    { "@type": "ListItem", "position": 3, "name": "Maca Root" }
  ]
};

export default function MacaRootPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Maca Root</h1>
        <span className="tag">Sexual Health</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 27, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Lepidium meyenii, Peruvian ginseng, maca powder, gelatinized maca, black maca (fertility focus), red maca (prostate focus), yellow maca (general use)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Andean cruciferous root vegetable / non-hormonal libido enhancer / adaptogen with HPA-axis modulation / dopaminergic and noradrenergic neurotransmitter modulator / male fertility support (black variety specifically)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Moderate across multiple sub-tiers — <span className="font-semibold">Libido</span> (Gonzales 2002, Shin 2010 systematic review): consistent across men, postmenopausal women, and SSRI-induced sexual dysfunction populations. <span className="font-semibold">Testosterone</span>: negative — maca does NOT raise testosterone, estradiol, LH, or FSH; this is mechanistically distinctive. <span className="font-semibold">Mood</span> (Brooks 2008): reduced anxiety/depression scores in postmenopausal women. <span className="font-semibold">Male fertility</span> (Melnikovova 2015, Gonzales 2001 series): black maca specifically improves sperm parameters. <span className="font-semibold">BPH</span> (Gonzales 2012): red maca specifically. Color variety differential is real.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is maca root?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Maca (Lepidium meyenii) is a cruciferous root vegetable native to the high-altitude plateaus of the Peruvian Andes — cultivated and consumed for over 2,000 years as a food staple and traditional remedy for fertility, libido, and energy. Among modern libido supplements, maca&apos;s mechanism is uniquely defined by what it doesn&apos;t do: it doesn&apos;t raise testosterone, estradiol, LH, or FSH. Multiple human RCTs measuring serum hormones before and after maca supplementation have found no significant hormonal changes — and yet libido scores, sexual function scores, and (in postmenopausal women) mood scores consistently improve vs placebo. Maca&apos;s mechanism appears to operate through neurotransmitter modulation (likely dopaminergic and noradrenergic pathways), adaptogenic HPA-axis effects on cortisol, and possibly direct effects on reproductive tissue — without altering peripheral hormone levels. The bioactive compounds — macamides and macaenes (long-chain fatty acid amides unique to Lepidium meyenii) — are likely the active agents but receptor-level mechanism isn&apos;t fully characterized. Three color varieties are commercially available and have meaningfully different applications: yellow maca (general use, default choice) is the most-studied broadly; black maca (Gonzales 2001 series, Melnikovova 2015) specifically improves sperm parameters and is the variety for male fertility applications; red maca (Gonzales 2012) specifically affects prostate volume and has been studied for benign prostatic hyperplasia. Gonzales 2002 is the foundational mens&apos;-libido trial (12 weeks, 1.5–3 g/day, significant libido improvement without testosterone change). Brooks 2008 documented postmenopausal sexual and mood improvements at 3.5 g/day. Dording 2008 documented SSRI-induced sexual dysfunction improvement at 3 g/day in remitted depression patients — a clinically important niche because SSRI sexual side effects are common and have few established treatments. Shin 2010 is the systematic review covering the broader trial base.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved sexual desire and libido in men (Gonzales 2002, 12 weeks at 1.5–3 g/day)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved sexual function in postmenopausal women without estradiol change (Brooks 2008)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced anxiety and depression symptoms in postmenopausal women (Brooks 2008)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improvement in SSRI-induced sexual dysfunction (Dording 2008, 3 g/day)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sperm count, motility, and seminal volume improvements (black maca; Melnikovova 2015)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced prostate volume in benign prostatic hyperplasia (red maca; Gonzales 2012)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Adaptogenic stress and HPA-axis modulation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest endurance / cycling performance improvements</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 1.5–3 g daily of gelatinized maca powder or extract. 3 g/day is the most commonly used trial dose. Effect emerges over 4–8 weeks; full effects 8–12 weeks. Morning dosing preferred (mildly energizing). Color variety: yellow (default), black (fertility), red (prostate).
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Watch for:</span> Mild energizing effect — avoid evening dosing; glucosinolate-thyroid interaction theoretical concern at very high doses in iodine-deficient users (gelatinized form lower in glucosinolates); pregnancy and breastfeeding safety not well-characterized (avoid); hormone-sensitive condition coordination appropriate even though maca doesn&apos;t alter hormones; heavy-metal accumulation risk in non-third-party-tested products.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=gelatinized+maca+root+peruvian&tag=profpeptide-20" label="Maca Root" />
        </div>
      </div>

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.intro && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                {s.intro}
              </p>
            )}
            {s.node && s.node}
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
        {["Libido", "Non-Hormonal", "Adaptogen", "Black Maca", "Postmenopausal", "SSRI Dysfunction"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/tongkat-ali" className="text-sm font-medium text-[#3A759F] hover:underline">Tongkat Ali</Link>
          <Link href="/supplements/l-citrulline" className="text-sm font-medium text-[#3A759F] hover:underline">L-Citrulline</Link>
          <Link href="/supplements/ashwagandha" className="text-sm font-medium text-[#3A759F] hover:underline">Ashwagandha</Link>
          <Link href="/supplements/rhodiola-rosea" className="text-sm font-medium text-[#3A759F] hover:underline">Rhodiola Rosea</Link>
          <Link href="/supplements/fenugreek" className="text-sm font-medium text-[#3A759F] hover:underline">Fenugreek</Link>
          <Link href="/supplements/zinc" className="text-sm font-medium text-[#3A759F] hover:underline">Zinc</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Maca Root" pagePath="/supplements/maca-root" />
    </div>
    </>
  );
}
