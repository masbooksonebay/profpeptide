import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/nad-plus",
  title: "NAD+ Supplement: NMN vs NR Precursors + Oral NAD+ Trade-offs",
  description:
    "Oral NAD+ supplement (NMN vs NR), the Martens 2018 + Igarashi 2022 RCT evidence, and how it pairs with NAD+ peptide injections and longevity protocols.",
});

const faqs = [
  {
    q: "NMN vs NR vs oral NAD+ — which precursor should I take?",
    a: (
      <>
        Three different supplemental routes, each with trade-offs.{" "}
        <Link href="/supplements/nmn" className="text-[#3A759F] hover:underline">NMN</Link>{" "}
        (nicotinamide mononucleotide) is one biochemical step from NAD+ and has more recent positive trial evidence (Yoshino 2021 insulin sensitivity, Igarashi 2022 muscle function, Yi 2023 dose-response) — but FDA notified sellers in November 2022 that NMN is no longer permitted as a dietary supplement, though enforcement has been minimal. NR (nicotinamide riboside, Niagen) has the longer track record and clean regulatory status; ChromaDex-funded trials (Martens 2018, Conze 2019) reliably document NAD+ elevation. Oral NAD+ itself (the molecule, not a precursor) has poor bioavailability and is the least efficient route. Practical default: NR if you want clean regulatory status and the longer evidence base; NMN if you prefer the more proximal precursor and accept the regulatory wrinkle. The{" "}
        <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+ peptide (injectable)</Link>{" "}
        delivers NAD+ directly and bypasses the oral-bioavailability problem entirely — most aggressive option for users wanting maximum NAD+ elevation.
      </>
    ),
  },
  {
    q: "Why don't I just take oral NAD+ directly instead of a precursor?",
    a: "Because intact NAD+ is poorly absorbed across the gut wall. Most ingested NAD+ is broken down to nicotinamide and other components before crossing into circulation — meaning the actual NAD+ molecule that reaches tissue is a small fraction of the dose. NMN and NR are smaller, more bioavailable precursors that absorb intact (NR via gut Slc12a8 transporter; NMN partly via the same and partly hydrolyzed to NR before absorption), then convert to NAD+ in tissues via the salvage pathway. Some companies sell 'oral NAD+' products at lower per-mg cost than precursors, but the math doesn't favor them per dollar of actual tissue NAD+ raised. Stick with precursors for oral routes; reserve the NAD+ molecule itself for injectable / subcutaneous use.",
  },
  {
    q: "Is NMN actually legal to buy as a supplement?",
    a: "Complicated. The FDA notified NMN sellers in November 2022 that NMN is excluded from the definition of a dietary supplement under FD&C Act §201(ff)(3)(B) — because pharmaceutical company Metro International Biotech filed an Investigational New Drug application for NMN before NMN was marketed as a supplement, the FDA's position is that NMN became a drug-investigation compound. The Natural Products Association and Council for Responsible Nutrition have pushed back through legal and legislative channels. Practical reality (May 2026): NMN remains widely available from major US supplement vendors (Amazon, ProHealth Longevity, Renue By Science). Enforcement has been minimal; sales continue. The FDA's official position has not been formally reversed. Buy with awareness of the regulatory wrinkle.",
  },
  {
    q: "Does NAD+ supplementation actually do anything I can feel?",
    a: "Not dramatically. Most users report nothing perceptible in the first 4 weeks of supplementation — NAD+ isn't a stimulant or fast-acting compound. The trials measure biological-age biomarkers, muscle function, and insulin sensitivity over 8–12 weeks. Some users report mild energy or cognitive lift after several weeks of consistent use; others notice nothing subjective and rely on biomarker improvements. If you're looking for perceptible day-to-day effects, NAD+ supplementation is probably the wrong tool. If you're building a longevity protocol with biomarker-tracked outcomes, NAD+ precursors fit naturally — but expect biomarker changes, not subjective transformation.",
  },
  {
    q: "Can I stack oral NAD+ precursors with NAD+ peptide injections?",
    a: (
      <>
        Yes — and this is one of the more common protocols in serious longevity practice.{" "}
        <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+ peptide</Link>{" "}
        (injectable / subcutaneous) delivers NAD+ directly into circulation, bypassing the salvage pathway and producing the most aggressive tissue NAD+ elevation. Oral NMN or NR feeds the salvage pathway continuously through the day — different kinetics, same overall direction. Common protocol: NMN or NR daily oral baseline + NAD+ peptide injections weekly or bi-weekly as periodic loading. The two routes are complementary, not redundant. Add{" "}
        <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>{" "}
        for the pineal-axis arm of longevity, and you have the canonical NAD+ / longevity cluster.
      </>
    ),
  },
  {
    q: "Will NAD+ supplementation actually extend my life?",
    a: "Unknown on current data, despite the longevity-influencer enthusiasm. Animal-model evidence is striking — NAD+ precursor supplementation extends lifespan and healthspan in aged mice. Human lifespan trials don't exist and won't for decades (lifespan endpoints require multi-decade follow-up). Current human evidence measures intermediate biomarkers: blood NAD+ levels (reliably elevated by NMN and NR), insulin sensitivity (Yoshino 2021), muscle function (Igarashi 2022), aerobic capacity (Liao 2021), epigenetic age markers (Yi 2023). These are meaningful signals but not direct lifespan proof. If you want NAD+ to be a guaranteed longevity intervention, the evidence doesn't support that claim. If you want a mechanism-backed intervention on a pathway implicated in aging biology, NAD+ precursors are a reasonable bet — with the understanding that the human lifespan question is open.",
  },
  {
    q: "What about NAD+ IV infusions — are those better than oral?",
    a: "Faster acting but expensive and clinical-only. NAD+ IV infusions (typically 500–1,000 mg over 2–4 hours) bypass oral bioavailability and produce dramatic acute NAD+ elevation. Subjective effects (energy, mental clarity) are commonly reported during and after infusion. Used in addiction recovery clinics and longevity boutique medicine. The downsides: cost ($200–$1,000+ per infusion), time (multi-hour infusions), and the question of how long the acute elevation translates to sustained benefit. For most users, daily oral precursors at modest cost provide the bulk of the available NAD+ benefit; IV infusions are an aggressive option for users with the budget and clinic access. The injectable peptide NAD+ is a middle ground — self-administered subcutaneous, faster than oral, cheaper than IV.",
  },
  {
    q: "Can I take NAD+ with resveratrol like the Sinclair protocol?",
    a: (
      <>
        Yes, and the mechanistic rationale is reasonable. Sirtuins (the longevity proteins) are NAD+-dependent enzymes;{" "}
        <Link href="/supplements/resveratrol" className="text-[#3A759F] hover:underline">resveratrol</Link>{" "}
        activates sirtuins; NAD+ precursors supply the substrate sirtuins need to function. The two work on the same pathway at different points. Sinclair&apos;s popularized protocol pairs them daily; the trial evidence for the combination specifically is thinner than for either alone, but the pharmacological rationale is mature.{" "}
        <Link href="/supplements/spermidine" className="text-[#3A759F] hover:underline">Spermidine</Link>{" "}
        adds an autophagy-activation arm via a different mechanism (EP300 inhibition). The four-supplement longevity stack (NAD+ precursor + resveratrol + spermidine + a senolytic like fisetin/quercetin) is the dominant longevity-influencer protocol — coherent mechanistically, thin on combination-specific trial evidence.
      </>
    ),
  },
];

const studies = [
  {
    title: "Chronic Nicotinamide Riboside Supplementation Is Well-Tolerated and Elevates NAD+ in Healthy Middle-Aged and Older Adults",
    authors: "Martens CR, Denman BA, Mazzo MR, et al.",
    journal: "Nature Communications",
    year: "2018",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/29459604/",
    summary: "A 6-week randomized double-blind placebo-controlled crossover trial of 500 mg nicotinamide riboside twice daily in 24 healthy middle-aged and older adults. NR significantly elevated whole-blood NAD+ metabolism (60% increase) and was well-tolerated. The Martens 2018 trial is the foundational human pharmacology evidence that oral NR reliably raises NAD+ — and the reference document for the precursor-strategy approach to NAD+ elevation.",
  },
  {
    title: "Chronic Nicotinamide Mononucleotide Supplementation Elevates Blood NAD+ Levels and Alters Muscle Function in Healthy Older Men",
    authors: "Igarashi M, Nakagawa-Nagahama Y, Miura M, et al.",
    journal: "NPJ Aging",
    year: "2022",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/35927261/",
    summary: "A 12-week randomized double-blind placebo-controlled trial of 250 mg/day NMN in 42 healthy older men (average age 65). NMN significantly elevated blood NAD+ levels by ~38% and improved muscle function metrics including gait speed and grip strength. No serious adverse events. The Igarashi 2022 trial established that oral NMN at the standard dose reliably elevates blood NAD+ in older healthy adults and translates to measurable functional muscle improvements.",
  },
  {
    title: "Nicotinamide Mononucleotide Increases Muscle Insulin Sensitivity in Prediabetic Women",
    authors: "Yoshino M, Yoshino J, Kayser BD, et al.",
    journal: "Science",
    year: "2021",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/33888596/",
    summary: "A 10-week randomized double-blind placebo-controlled trial of 250 mg/day NMN in 25 postmenopausal women with prediabetes. NMN significantly increased muscle insulin sensitivity by hyperinsulinemic-euglycemic clamp (the gold-standard methodology) without changing body weight, body composition, blood pressure, or plasma lipids. One of the most-cited NMN human RCTs and the clearest evidence for the insulin-sensitivity-improvement use case.",
  },
  {
    title: "Safety and Metabolism of Long-Term Administration of NIAGEN (Nicotinamide Riboside Chloride) in a Randomized, Double-Blind, Placebo-Controlled Clinical Trial of Healthy Overweight Adults",
    authors: "Conze D, Brenner C, Kruger CL",
    journal: "Scientific Reports",
    year: "2019",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/31221999/",
    summary: "An 8-week randomized double-blind placebo-controlled trial of NIAGEN (nicotinamide riboside chloride, 100–300 mg twice daily) in 132 healthy overweight adults. NR significantly elevated whole-blood NAD+ in a dose-dependent manner and was well-tolerated across all doses. Establishes the NR safety profile and dose-response curve for chronic supplementation in healthy adults.",
  },
  {
    title: "Efficacy and Safety of β-Nicotinamide Mononucleotide (NMN) Supplementation in Healthy Middle-Aged Adults: A Randomized, Multicenter, Double-Blind, Placebo-Controlled, Parallel-Group, Dose-Dependent Clinical Trial",
    authors: "Yi L, Maier AB, Tao R, et al.",
    journal: "GeroScience",
    year: "2023",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/36482258/",
    summary: "A 60-day randomized double-blind placebo-controlled dose-ranging trial of 300, 600, and 900 mg/day NMN in 80 healthy middle-aged adults. All three doses significantly raised blood NAD+ versus placebo, with dose-dependent magnitude. SF-36 physical performance and biological age (DNAm Age) markers improved in the 600 mg and 900 mg arms. Yi 2023 maps the dose-response curve for NMN and supports higher-dose protocols (600–900 mg/day) for users wanting maximum biomarker response.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does NAD+ supplementation work?",
    intro:
      "Oral NAD+ supplementation works almost entirely through precursors — NMN and NR — that absorb intact, then convert to NAD+ in tissues via the salvage pathway. The supplemented NAD+ molecule itself is poorly absorbed; smart formulations bypass this with precursor strategies or non-oral routes (sublingual, liposomal, IV, subcutaneous peptide).",
    body: [
      "NAD+ in cellular metabolism. NAD+ is an essential coenzyme present in every living cell, functioning as an electron carrier in cellular respiration (shuttling electrons during ATP synthesis), a substrate for sirtuins (longevity-associated SIRT1–SIRT7 enzymes), and a substrate for PARP enzymes that detect and repair DNA strand breaks. NAD+ levels decline measurably with age — by midlife, levels may be ~50% of youthful baseline.",
      "The salvage pathway and precursor strategy. Cells synthesize NAD+ from precursors via the NAD+ salvage pathway: NR → NMN → NAD+ (or directly from tryptophan/niacin via longer pathways). Supplementing the precursors is significantly more efficient than supplementing NAD+ itself because the precursor molecules are smaller, more bioavailable, and use the cell&apos;s native synthesis machinery.",
      "Oral bioavailability problem for NAD+ itself. Intact NAD+ is poorly absorbed across the gut wall — most is degraded to nicotinamide before crossing into circulation. This is why NMN and NR are the dominant oral routes and why direct NAD+ delivery requires injectable or sublingual formulations to bypass first-pass metabolism.",
      "NR absorption and conversion. Nicotinamide riboside absorbs intact via the gut Slc12a8 transporter, then converts to NMN intracellularly via NRK1/NRK2 kinases, then to NAD+ via NMNAT enzymes. The Martens 2018 and Conze 2019 trials documented reliable ~60% blood NAD+ elevation at 500 mg twice daily NR.",
      "NMN absorption — partial intact + partial hydrolyzed. NMN absorption is partly intact (via Slc12a8) and partly hydrolyzed to NR in the gut, then reassembled to NMN inside cells. The Igarashi 2022 trial documented ~38% blood NAD+ elevation at 250 mg/day NMN; Yi 2023 dose-ranging extends this to higher doses.",
      "Sirtuin activation. NAD+ is the obligate substrate for SIRT1–SIRT7 sirtuin enzymes, which regulate gene expression, mitochondrial biogenesis, DNA repair, and stress responses. Elevating NAD+ availability is the mechanism behind the &ldquo;sirtuin activation&rdquo; framing of longevity protocols.",
      "PARP and DNA repair. NAD+ also serves as substrate for PARP enzymes that detect DNA damage and initiate repair. Age-related NAD+ decline correlates with reduced DNA-repair capacity; restoration supports this system.",
    ],
  },
  {
    id: "research",
    title: "What does NAD+ supplementation actually do?",
    intro:
      "Oral NAD+ precursor supplementation reliably elevates blood NAD+ levels — that's the most-replicated finding. Functional and clinical outcome data is mid-stage: insulin sensitivity (Yoshino 2021), muscle function (Igarashi 2022), aerobic capacity (Liao 2021), and biological-age biomarkers (Yi 2023) show improvements. Human lifespan evidence doesn't exist and won't for decades.",
    body: [
      "Blood NAD+ elevation (Strong). Multiple RCTs (Martens 2018 NR, Igarashi 2022 NMN, Conze 2019 NR, Yi 2023 NMN dose-ranging) consistently demonstrate significant blood NAD+ elevation with oral precursor supplementation. This is the most-replicated biomarker effect in the NAD+ supplement literature.",
      "Insulin sensitivity (Moderate-Strong). Yoshino 2021 in Science used hyperinsulinemic-euglycemic clamp (gold-standard methodology) to demonstrate significant muscle insulin sensitivity improvements with NMN in prediabetic postmenopausal women. Replicated in some but not all subsequent trials.",
      "Muscle function in older adults (Moderate). Igarashi 2022 documented improved gait speed and grip strength with NMN in older men. Functional improvement at clinically meaningful magnitudes.",
      "Aerobic capacity and exercise performance (Moderate). Liao 2021 (NMN dose-ranging in amateur runners) showed significant VO2max and ventilatory threshold improvements. Extends evidence base from age-related decline populations to active populations.",
      "Biological-age biomarkers (Emerging). Yi 2023 documented DNAm Age (epigenetic age clock) improvements at 600–900 mg/day NMN over 60 days. Whether epigenetic-age improvement translates to clinical longevity outcomes is open.",
      "Cognitive function (Mixed). Some trials show improvements; others null. The cognitive case is less robust than the metabolic and physical-function case.",
      "Cardiovascular biomarkers (Emerging). Some evidence for improved arterial stiffness and modest blood-pressure reduction with chronic NR supplementation. Hard cardiovascular outcomes data is limited.",
      "Lifespan (Unknown). Animal-model lifespan extension is dramatic and replicated across species; human lifespan trials don&apos;t exist. NAD+ supplementation is a mechanism-backed bet for human longevity, not proven lifespan extension.",
    ],
  },
  {
    id: "dosing",
    title: "How is NAD+ supplementation dosed?",
    intro:
      "NAD+ supplement dosing is precursor- and goal-dependent. For NR (Niagen): 300–1,000 mg/day, typically split AM + midday. For NMN: 250–900 mg/day, typically morning sublingual or oral. For oral NAD+ directly: 250–1,000 mg/day but with much lower effective tissue delivery vs precursors. Higher doses don't proportionally raise NAD+ at the upper end — the salvage pathway saturates.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">NR (nicotinamide riboside) standard.</span> 300 mg/day to start; 500–1,000 mg/day for maximum biomarker effect. The Martens 2018 trial used 1,000 mg/day (split as 500 mg twice daily). Clean regulatory status; longer trial evidence base.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">NMN standard.</span> 250–500 mg/day (Yoshino 2021, Igarashi 2022 trial range); 600–900 mg/day for users wanting larger NAD+ elevation per Yi 2023 dose-response. Take morning, sublingual or oral. FDA regulatory wrinkle (see Limitations).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Combined oral protocols.</span> Some users stack NR + NMN (e.g., 300 mg NR AM + 500 mg NMN PM). Mechanistically reasonable but not directly RCT-validated as a combination.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oral NAD+ molecule itself.</span> 250–1,000 mg/day — lower effective tissue delivery than precursors. Reasonable for users avoiding both NMN regulatory wrinkle and NR cost, but inferior bioavailability.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sublingual NMN or NAD+.</span> Held under tongue 1–2 minutes before swallowing — claims to bypass first-pass hepatic metabolism. Head-to-head bioavailability evidence vs oral is limited; reasonable for users wanting the absorption-route hedge.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: blood NAD+ levels rise within days; functional/clinical effects emerge over 8–12 weeks. Subjective effects are mild or absent; biomarker tracking is the realistic feedback loop.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> &ldquo;NAD+ booster 500 mg&rdquo; may contain 250 mg NMN + 250 mg other ingredients; &ldquo;NMN 500 mg&rdquo; should mean 500 mg actual NMN. Read for the specific precursor (NR, NMN, or NAD+) and elemental mg per serving. Branded NR (Niagen by ChromaDex) and branded NMN (Uthever, etc.) have the cleanest quality control.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take NAD+ supplements",
    intro:
      "NAD+ precursors are taken orally as capsules, sublingual tablets, or powder. The practical considerations are precursor choice (NMN vs NR vs oral NAD+), timing (morning preferred for mild energizing effect), and route (oral vs sublingual). The points below cover the details experienced users converge on.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once daily morning for lower doses; split AM + midday for higher doses (600+ mg). Maintains steadier NAD+ levels through the day.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Morning preferred — some users report mild energizing effect; evening dosing occasionally interferes with sleep. Combined NMN + circadian alignment supports natural NAD+ rhythm.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Either — absorption is not strongly food-dependent. Empty stomach is fine and may be marginally preferred for sublingual forms.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">NR (Niagen branded, clean regulatory status) or NMN (Uthever and other branded, FDA regulatory wrinkle) as capsule/powder; sublingual NMN for users wanting absorption-route hedge; oral NAD+ molecule itself is least efficient route. For maximum aggression: see <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+ peptide injectable</Link>.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Look for branded NR (Niagen by ChromaDex — the longer-track-record NR supplier) or branded NMN (Uthever, branded high-purity products). Generic NMN has had purity concerns (β-NMN vs α-NMN stereoisomers — only β-NMN is bioactive). Third-party tested for purity is the relevant screen.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling needed — chronic daily use is the trial-validated longevity model. Some users pulse around hard training events for additional support; not a tolerance-prevention concern.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does NAD+ supplementation stack with?",
    intro:
      "Oral NAD+ precursors pair naturally with the broader longevity / NAD+ / autophagy stack. The mechanism is NAD+ substrate supply, which complements direct NAD+ delivery via peptide injection, sirtuin activators, autophagy inducers, and senolytics. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Oral NAD+ precursor supplements pair naturally with the longevity peptide cluster.{" "}
            <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+ peptide</Link>{" "}
            (injectable / subcutaneous) delivers NAD+ directly into circulation, bypassing the salvage pathway and producing the most aggressive tissue NAD+ elevation. Oral precursors (NMN, NR) feed the salvage pathway continuously through the day — different kinetics, same overall direction.{" "}
            <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>{" "}
            adds the pineal-axis longevity arm — telomere maintenance and circadian regulation through a separate pathway. Common protocol: NMN or NR daily oral baseline + NAD+ peptide injections weekly or bi-weekly as periodic loading + Epitalon courses for the pineal arm. The three operate on different layers of longevity biology: oral NAD+ precursors on salvage pathway, injectable NAD+ on direct tissue delivery, Epitalon on pineal regulation. Mechanistically complementary, no known negative interactions.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/nmn" className="text-[#3A759F] hover:underline">NMN (dedicated profile)</Link>{" "}
              — the most-proximal NAD+ precursor with the most recent positive trial evidence. See dedicated profile for NMN-specific dosing and regulatory considerations.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/resveratrol" className="text-[#3A759F] hover:underline">Resveratrol</Link>{" "}
              — sirtuin activator. Sinclair-protocol pairing: NAD+ precursor provides substrate; resveratrol activates the sirtuins that use it. Mechanistically natural.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/spermidine" className="text-[#3A759F] hover:underline">Spermidine</Link>{" "}
              — autophagy activator via EP300 inhibition. Different aging-biology arm; complements NAD+ supply with cellular self-cleaning.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/quercetin" className="text-[#3A759F] hover:underline">Quercetin</Link>{" "}
              — senolytic (often paired with fisetin). Different aging-biology arm; common longevity-stack co-occupant.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/apigenin" className="text-[#3A759F] hover:underline">Apigenin</Link>{" "}
              — CD38 inhibitor. CD38 consumes NAD+; apigenin reduces this consumption, preserving NAD+ levels alongside precursor supplementation. Mechanistically synergistic with NMN/NR.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/coq10" className="text-[#3A759F] hover:underline">CoQ10</Link>{" "}
              — mitochondrial electron transport. NAD+ feeds Complex I of the electron transport chain; CoQ10 carries the electrons forward. Mechanistically natural pairing.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Intermittent fasting / time-restricted eating.</span> Fasting independently elevates NAD+ levels via SIRT1 activation. NAD+ precursor supplementation during fasting windows is mechanistically additive.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Endurance exercise.</span> Exercise raises NAD+ via NAMPT upregulation in muscle. Precursor supplementation supports the same pathway from a different angle.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Caloric restriction.</span> CR is one of the most-validated longevity interventions in animals, partly via NAD+/sirtuin pathway activation. Precursor supplementation overlaps mechanism.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Circadian alignment.</span> NAD+ levels follow a circadian rhythm peaking in early morning. Morning precursor dosing aligns with natural rhythm.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Biomarker tracking.</span> NAD+ supplementation effects are biomarker-grade, not subjective. Track DEXA, HbA1c, biological age clocks, lipid panel — not vibes.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Oral NAD+ precursors have a favorable safety profile in published trials at supplemental doses. The main practical considerations are mild GI effects, niacin-flush phenomenon at very high doses, and the open cancer-context question (NAD+ supports DNA repair but can also support tumor-cell metabolism).",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort — occasional nausea or stomach upset, particularly with NR at higher doses or on empty stomach.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild flushing — uncommon with NMN/NR (which lack the niacin-flush component); more common if user combines with high-dose niacin.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Headache or dizziness — occasionally reported, generally mild and dose-related.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard supplemental doses across the human RCT base.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Active cancer — context-dependent. NAD+ supports DNA repair (potentially protective) and PARP activity (potentially helpful or harmful depending on cancer biology), but also supports cancer-cell metabolism. Coordinate with oncologist.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Long-term safety beyond 12 months — most trial data extends to 8–12 weeks; multi-year safety is reasonable based on mechanism and short-term data but not directly characterized.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Insomnia with evening dosing — switch to morning if affected.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Chemotherapy — NAD+ precursors may affect both DNA-repair pathways and cancer-cell metabolism. Avoid during active oncology treatment without specialist input.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">PARP inhibitors (olaparib, niraparib, rucaparib) — NAD+ precursors may interact with PARP inhibitor activity. Avoid coadministration without oncologist guidance.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Niacin / nicotinic acid — high-dose niacin causes flushing via different pathway; combining at high doses may amplify flush. Most NR/NMN doses don&apos;t produce flush at typical levels.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other longevity supplements (resveratrol, spermidine, quercetin, fisetin) — fully compatible, mechanistically complementary (see Stacks section).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy and breastfeeding — insufficient data; avoid. NAD+ biology in pregnancy is poorly characterized.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about NAD+ supplementation",
    intro:
      "NAD+ supplementation is one of the more popular longevity interventions, with reliable biomarker effects but considerable open questions about translation to clinical outcomes. Several limitations affect how confidently it can be recommended.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Blood NAD+ vs tissue NAD+ vs clinical outcomes.</span> Trials reliably show oral precursors raise blood NAD+ levels. Whether blood NAD+ elevation translates to meaningful tissue NAD+ elevation in all relevant tissues (brain, heart, kidney, muscle, etc.) is less directly characterized. The chain from blood biomarker → tissue level → cellular function → clinical outcome has uncertainty at each step.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Human lifespan evidence.</span> Doesn&apos;t exist and won&apos;t for decades. Animal-model lifespan extension is striking; human extrapolation is speculative. NAD+ supplementation is a mechanism-backed bet, not a proven lifespan intervention.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">NMN regulatory uncertainty.</span> FDA notification in 2022 that NMN is excluded from dietary-supplement classification creates ongoing legal ambiguity. Enforcement has been minimal; sales continue. The situation may resolve via legislation or formal FDA reversal — or may not. Buy with awareness.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">NMN vs NR head-to-head outcomes.</span> Both precursors raise blood NAD+. Which produces larger functional/clinical effects per dollar is mechanistically debated and not rigorously head-to-head RCT-tested at scale. NR has the longer track record; NMN has more recent positive trials.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal dose-response curve.</span> Most healthy users plateau on benefit somewhere in the 500–900 mg/day range. Whether doses above 1 g/day produce meaningful additional benefit or are wasted is not well-characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cancer context dual role.</span> NAD+ supports DNA repair (protective) and PARP activity (often protective) but also fuels cancer-cell metabolism. Clinical implications for users with cancer history or active oncology treatment are not well-defined. Defer to oncologist.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">CD38 axis and apigenin pairing.</span> CD38 enzyme consumes NAD+; CD38 activity increases with age and inflammation. Apigenin (CD38 inhibitor) may complement precursor supplementation by reducing NAD+ consumption. This is mechanistically interesting but not directly RCT-validated as a combination.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy NAD+ supplements",
    intro:
      "Oral NAD+ precursors are available from supplement retailers, longevity-specialty vendors (ProHealth Longevity, Renue By Science, Tru Niagen), and Amazon. Quality varies significantly — particularly around NMN purity (β-NMN vs α-NMN stereoisomers) and NR branded vs generic. The screen below is what we use before clicking through.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">For NR: Niagen (ChromaDex)</span> — the original and most-studied NR formulation with clean regulatory status. Sold under Tru Niagen brand.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">For NMN: branded β-NMN (Uthever, etc.)</span> — purity matters because only β-NMN is bioactive; α-NMN is inactive contaminant in some cheaper products. Look for &ldquo;β-NMN&rdquo; or &ldquo;beta-nicotinamide mononucleotide&rdquo; explicitly.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Precursor mg per serving explicitly disclosed</span> — not &ldquo;NAD+ complex&rdquo; mass. Read for actual NR or NMN content.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested for purity</span> — HPLC verification of NMN stereoisomer purity is the relevant test. USP, NSF, or ConsumerLab certifications signal broader independent verification.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary &ldquo;longevity blends&rdquo;</span> that obscure the actual precursor dose alongside fillers.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sublingual options if absorption-route hedge desired</span> — held under tongue 1–2 minutes; bypasses first-pass hepatic metabolism.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fresh manufacture date</span> — NMN and NR degrade with prolonged exposure to heat and humidity. Avoid jars sitting on warehouse shelves &gt;18 months.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">NMN regulatory awareness</span> — FDA notified sellers in 2022 that NMN isn&apos;t a dietary supplement, but enforcement has been minimal. Buy with awareness.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=NAD+supplement+NMN&tag=profpeptide-20" label="NAD+ Supplement" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "NAD+ Supplement FAQ",
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
          Martens CR, Denman BA, Mazzo MR, et al. Chronic nicotinamide riboside supplementation is well-tolerated and elevates NAD+ in healthy middle-aged and older adults. Nat Commun. 2018;9(1):1286.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29459604/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29459604/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Igarashi M, Nakagawa-Nagahama Y, Miura M, et al. Chronic nicotinamide mononucleotide supplementation elevates blood NAD+ levels and alters muscle function in healthy older men. NPJ Aging. 2022;8(1):5.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/35927261/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/35927261/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Yoshino M, Yoshino J, Kayser BD, et al. Nicotinamide mononucleotide increases muscle insulin sensitivity in prediabetic women. Science. 2021;372(6547):1224-1229.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/33888596/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/33888596/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Conze D, Brenner C, Kruger CL. Safety and metabolism of long-term administration of NIAGEN (nicotinamide riboside chloride) in a randomized, double-blind, placebo-controlled clinical trial of healthy overweight adults. Sci Rep. 2019;9(1):9772.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/31221999/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/31221999/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Yi L, Maier AB, Tao R, et al. Efficacy and safety of β-nicotinamide mononucleotide (NMN) supplementation in healthy middle-aged adults: a randomized, multicenter, double-blind, placebo-controlled, parallel-group, dose-dependent clinical trial. GeroScience. 2023;45(1):29-43.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/36482258/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/36482258/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Yoshino J, Baur JA, Imai SI. NAD+ intermediates: the biology and therapeutic potential of NMN and NR. Cell Metab. 2018;27(3):513-528.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29249689/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29249689/
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
      "name": "NMN vs NR vs oral NAD+ — which precursor should I take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three different supplemental routes, each with trade-offs. NMN (nicotinamide mononucleotide) is one biochemical step from NAD+ and has more recent positive trial evidence (Yoshino 2021 insulin sensitivity, Igarashi 2022 muscle function, Yi 2023 dose-response) — but FDA notified sellers in November 2022 that NMN is no longer permitted as a dietary supplement, though enforcement has been minimal. NR (nicotinamide riboside, Niagen) has the longer track record and clean regulatory status. Oral NAD+ itself has poor bioavailability. The NAD+ peptide (injectable) delivers NAD+ directly — most aggressive option."
      }
    },
    {
      "@type": "Question",
      "name": "Why don't I just take oral NAD+ directly instead of a precursor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because intact NAD+ is poorly absorbed across the gut wall. Most ingested NAD+ is broken down to nicotinamide and other components before crossing into circulation — meaning the actual NAD+ molecule that reaches tissue is a small fraction of the dose. NMN and NR are smaller, more bioavailable precursors that absorb intact, then convert to NAD+ in tissues via the salvage pathway. Stick with precursors for oral routes; reserve the NAD+ molecule itself for injectable / subcutaneous use."
      }
    },
    {
      "@type": "Question",
      "name": "Is NMN actually legal to buy as a supplement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Complicated. The FDA notified NMN sellers in November 2022 that NMN is excluded from the definition of a dietary supplement — because pharmaceutical company Metro International Biotech filed an Investigational New Drug application for NMN before NMN was marketed as a supplement, the FDA's position is that NMN became a drug-investigation compound. Practical reality (May 2026): NMN remains widely available from major US supplement vendors. Enforcement has been minimal; sales continue. Buy with awareness of the regulatory wrinkle."
      }
    },
    {
      "@type": "Question",
      "name": "Does NAD+ supplementation actually do anything I can feel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not dramatically. Most users report nothing perceptible in the first 4 weeks of supplementation — NAD+ isn't a stimulant or fast-acting compound. The trials measure biological-age biomarkers, muscle function, and insulin sensitivity over 8–12 weeks. Some users report mild energy or cognitive lift after several weeks of consistent use; others notice nothing subjective and rely on biomarker improvements. If you're building a longevity protocol with biomarker-tracked outcomes, NAD+ precursors fit naturally — but expect biomarker changes, not subjective transformation."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack oral NAD+ precursors with NAD+ peptide injections?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and this is one of the more common protocols in serious longevity practice. NAD+ peptide (injectable / subcutaneous) delivers NAD+ directly into circulation, bypassing the salvage pathway and producing the most aggressive tissue NAD+ elevation. Oral NMN or NR feeds the salvage pathway continuously through the day — different kinetics, same overall direction. Common protocol: NMN or NR daily oral baseline + NAD+ peptide injections weekly or bi-weekly as periodic loading. Add Epitalon for the pineal-axis arm."
      }
    },
    {
      "@type": "Question",
      "name": "Will NAD+ supplementation actually extend my life?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unknown on current data. Animal-model evidence is striking — NAD+ precursor supplementation extends lifespan and healthspan in aged mice. Human lifespan trials don't exist and won't for decades. Current human evidence measures intermediate biomarkers: blood NAD+ levels (reliably elevated), insulin sensitivity (Yoshino 2021), muscle function (Igarashi 2022), aerobic capacity (Liao 2021), epigenetic age markers (Yi 2023). These are meaningful signals but not direct lifespan proof. NAD+ supplementation is a mechanism-backed bet, not a proven lifespan intervention."
      }
    },
    {
      "@type": "Question",
      "name": "What about NAD+ IV infusions — are those better than oral?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Faster acting but expensive and clinical-only. NAD+ IV infusions (typically 500–1,000 mg over 2–4 hours) bypass oral bioavailability and produce dramatic acute NAD+ elevation. Subjective effects (energy, mental clarity) are commonly reported during and after infusion. Used in addiction recovery clinics and longevity boutique medicine. The downsides: cost ($200–$1,000+ per infusion), time (multi-hour infusions), and the question of how long the acute elevation translates to sustained benefit. For most users, daily oral precursors at modest cost provide the bulk of the available NAD+ benefit; IV infusions are an aggressive option for users with the budget and clinic access."
      }
    },
    {
      "@type": "Question",
      "name": "Can I take NAD+ with resveratrol like the Sinclair protocol?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and the mechanistic rationale is reasonable. Sirtuins (the longevity proteins) are NAD+-dependent enzymes; resveratrol activates sirtuins; NAD+ precursors supply the substrate sirtuins need to function. The two work on the same pathway at different points. Sinclair's popularized protocol pairs them daily; the trial evidence for the combination specifically is thinner than for either alone, but the pharmacological rationale is mature. Spermidine adds an autophagy-activation arm via a different mechanism (EP300 inhibition)."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "NAD+ Supplement: NMN vs NR Precursors + Oral NAD+ Trade-offs",
  "description": "Oral NAD+ supplement (NMN vs NR), the Martens 2018 + Igarashi 2022 RCT evidence, and how it pairs with NAD+ peptide injections and longevity protocols.",
  "url": "https://profpeptide.com/supplements/nad-plus",
  "datePublished": "2026-04-07T00:00:00Z",
  "dateModified": "2026-05-26T00:00:00Z",
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
    { "@type": "ListItem", "position": 3, "name": "NAD+" }
  ]
};

export default function NADPlusSupplementPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">NAD+</h1>
        <span className="tag">Longevity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Nicotinamide adenine dinucleotide, NAD, Coenzyme I. Precursors: NMN (nicotinamide mononucleotide), NR (nicotinamide riboside), Niagen
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Essential pyridine nucleotide coenzyme / oral NAD+ precursor (NMN, NR) / sirtuin substrate / electron carrier in cellular respiration
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Moderate — Strong for blood NAD+ elevation across NR and NMN trials (Martens 2018, Igarashi 2022, Conze 2019, Yi 2023); Moderate for functional/clinical outcomes (Yoshino 2021 insulin sensitivity, Igarashi 2022 muscle function); human lifespan evidence does not exist and won&apos;t for decades; FDA regulatory wrinkle on NMN (November 2022 notification)
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is NAD+ supplementation?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            NAD+ (nicotinamide adenine dinucleotide) is an essential pyridine nucleotide coenzyme present in every living cell — central to energy metabolism (electron carrier in cellular respiration), longevity biology (substrate for sirtuin enzymes SIRT1–SIRT7), and DNA repair (substrate for PARP enzymes). NAD+ levels decline measurably with age, by ~50% by midlife. Direct oral NAD+ supplementation has poor bioavailability, so practical supplementation uses precursor strategies: NMN (nicotinamide mononucleotide), one biochemical step from NAD+ with recent positive trial evidence (Yoshino 2021, Igarashi 2022, Yi 2023); or NR (nicotinamide riboside, branded as Niagen by ChromaDex), with the longer track record and clean regulatory status (Martens 2018, Conze 2019). Both reliably elevate blood NAD+. The most aggressive option is the{" "}
            <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+ peptide (injectable / subcutaneous)</Link>, which delivers NAD+ directly and bypasses oral-bioavailability entirely. NAD+ supplementation pairs naturally with{" "}
            <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>{" "}
            for the pineal-axis arm of longevity. NMN has an FDA regulatory wrinkle (November 2022 notification excluding it from dietary-supplement classification) — see Limitations.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reliable blood NAD+ elevation (Martens 2018 NR ~60%; Igarashi 2022 NMN ~38%)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved muscle insulin sensitivity in prediabetic populations (Yoshino 2021 in Science, hyperinsulinemic-euglycemic clamp)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved gait speed and grip strength in older adults (Igarashi 2022)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved aerobic capacity and VO2max in active adults (Liao 2021)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Epigenetic age (DNAm Age) biomarker improvement (Yi 2023 dose-response)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sirtuin pathway activation via NAD+ substrate availability</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">PARP DNA-repair enzyme support via NAD+ substrate</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> NR (Niagen) 300–1,000 mg/day, split AM + midday. NMN 250–500 mg/day standard; 600–900 mg/day for users wanting larger NAD+ elevation per Yi 2023 dose-response. Take morning — some users report mild energizing effect; evening dosing occasionally interferes with sleep.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> NR (Niagen / Tru Niagen brand from ChromaDex) for clean regulatory status; branded β-NMN (Uthever and others) for the more proximal precursor with regulatory wrinkle. NMN purity matters (β-NMN bioactive vs α-NMN inactive) — branded products preferred. Review the quality-markers checklist in the Where to Buy section below.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=NAD+supplement+NMN&tag=profpeptide-20" label="NAD+ Supplement" />
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
        {["NAD+ Precursor", "NMN", "NR", "Sirtuins", "Mitochondrial", "Longevity"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/nmn" className="text-sm font-medium text-[#3A759F] hover:underline">NMN (dedicated profile)</Link>
          <Link href="/supplements/resveratrol" className="text-sm font-medium text-[#3A759F] hover:underline">Resveratrol</Link>
          <Link href="/supplements/spermidine" className="text-sm font-medium text-[#3A759F] hover:underline">Spermidine</Link>
          <Link href="/supplements/quercetin" className="text-sm font-medium text-[#3A759F] hover:underline">Quercetin</Link>
          <Link href="/supplements/apigenin" className="text-sm font-medium text-[#3A759F] hover:underline">Apigenin</Link>
          <Link href="/supplements/coq10" className="text-sm font-medium text-[#3A759F] hover:underline">CoQ10</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="NAD+" pagePath="/supplements/nad-plus" />
    </div>
    </>
  );
}
