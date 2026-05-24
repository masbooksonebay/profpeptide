import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/alpha-gpc",
  title: "Alpha-GPC: What Biohackers Need to Know About Acetylcholine Boosting",
  description:
    "Alpha-GPC dosing, mechanism, and real-world results for cognitive enhancement. Plus how it stacks with cognitive peptides like Semax and Selank.",
});

const faqs = [
  {
    q: "What's the difference between Alpha-GPC and CDP-choline?",
    a: (
      <>
        Both raise brain acetylcholine, but they take different routes. Alpha-GPC delivers choline plus glycerophosphocholine (a phosphatidylcholine precursor used in neuronal membranes). CDP-choline (citicoline) delivers choline plus cytidine, which converts to uridine — separately useful for dopamine receptor density. Alpha-GPC raises brain choline faster and higher; CDP-choline produces a smaller but longer peak and adds the uridine pathway. For acute cognitive or pre-workout use, Alpha-GPC wins on speed. For long-term stacks alongside racetams or for dopamine-adjacent goals, CDP-choline is often preferred. Cost-wise, CDP-choline is meaningfully cheaper per dose.
      </>
    ),
  },
  {
    q: "Will Alpha-GPC actually raise growth hormone?",
    a: "Yes — but it's an acute, exercise-coupled effect, not a chronic GH protocol. Ziegenfuss 2008 found 600 mg taken 60–90 minutes before resistance exercise produced a 44% higher peak GH response versus placebo, with downstream improvements in lower-body force production. Without the exercise stimulus, the GH effect is small. Treat this as a workout-day adjunct, not a daily GH-axis intervention. For sustained GH support, peptides in the GH cluster (Sermorelin, Ipamorelin, CJC-1295) do the actual work.",
  },
  {
    q: "Can I take Alpha-GPC every day long-term?",
    a: "Short-to-medium-term daily use is well-tolerated in the published literature, including 1200 mg/day for 3–6 months in dementia trials. The open question is multi-year high-dose use in healthy adults — that data doesn't exist. The realistic answer: daily 300–600 mg appears safe based on current evidence, but stay aware of total choline intake from other sources (eggs, organ meats, multivitamins) and don't pile on additional high-choline supplements unnecessarily.",
  },
  {
    q: "Does Alpha-GPC raise TMAO? Should I be worried?",
    a: "Possibly modestly, and it depends on your gut microbiome more than your choline intake. TMAO (trimethylamine N-oxide) is produced when gut bacteria metabolize choline, then your liver oxidizes the trimethylamine. Observational studies link high blood TMAO to cardiovascular risk, but causality and the dose-response relationship in humans remain debated. If you have established cardiovascular disease or high baseline TMAO, talk to a clinician before high-dose long-term use. For most healthy users at typical 300–600 mg doses, this is a watch-list item, not a stop-light.",
  },
  {
    q: "Why does Alpha-GPC clump in the jar?",
    a: "Because it's hygroscopic — it pulls moisture out of the air aggressively. Within hours of opening a jar of bulk powder, you'll see clumping and surface caking. This is why most users prefer capsules (the gelatin or veg shell isolates the active from atmospheric humidity). If you do buy powder, transfer to a small airtight container with a desiccant pack and don't store in the bathroom or kitchen. Clumped Alpha-GPC isn't dangerous — it's just hard to dose accurately.",
  },
  {
    q: "Can I stack Alpha-GPC with Semax or Selank?",
    a: (
      <>
        Yes — and the stack is mechanistically natural.{" "}
        <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>{" "}
        is an ACTH(4-10) analog that modulates BDNF and neurotrophic signaling;{" "}
        <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link>{" "}
        is a tuftsin analog with anxiolytic and mild nootropic effects via GABA modulation. Neither peptide directly increases acetylcholine — they work upstream and laterally. Alpha-GPC supplies the cholinergic substrate, so the combination addresses different layers of cognitive function: peptides for neurotrophic and emotional regulation, Alpha-GPC for the acetylcholine fuel. No known negative interactions, but introduce one variable at a time so you can tell what's actually doing what.
      </>
    ),
  },
  {
    q: "What's the right dose for cognitive vs. pre-workout?",
    a: "For daily cognitive support: 300–400 mg in the morning is the typical baseline; 600 mg if you're stacking with a racetam or working through demanding cognitive load. For pre-workout GH and force-production effects: 600 mg taken 60–90 minutes before training is the Ziegenfuss protocol. Dementia research uses 1200 mg/day in divided doses — clinically supervised, not the healthy-user starting point. Most users plateau on benefit above 600 mg/day.",
  },
  {
    q: "Does Alpha-GPC work for ADHD or attention issues?",
    a: "Indirectly and inconsistently. The cholinergic system is involved in attention regulation, and some users report improved focus on Alpha-GPC. But ADHD is dominantly a dopamine/norepinephrine condition, not a cholinergic one, and the controlled trial evidence for Alpha-GPC in ADHD specifically is thin. As a stack alongside established ADHD treatment, it may help some users with mental clarity; as a standalone ADHD intervention, the evidence doesn't support it.",
  },
];

const studies = [
  {
    title: "Multicentre Study of L-Alpha-Glycerylphosphorylcholine vs ST200 in Probable Senile Dementia of Alzheimer's Type",
    authors: "Parnetti L, Abate G, Bartorelli L, et al.",
    journal: "Drugs & Aging",
    year: "1993",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/8443594/",
    summary: "A multicentre Italian clinical trial of Alpha-GPC (1200 mg/day) in patients with probable Alzheimer's-type dementia over 90 days, comparing it to a reference cognitive medication. Alpha-GPC produced significant improvements in cognitive function, memory, and behavioral parameters versus baseline, with a favorable tolerability profile. The trial formed part of the evidence base supporting Alpha-GPC's prescription approval in Italy (sold as Gliatilin) for cognitive impairment and dementia.",
  },
  {
    title: "Cognitive Improvement in Mild to Moderate Alzheimer's Dementia After Treatment with Choline Alphoscerate: Multicentre Open-Label Trial",
    authors: "De Jesus Moreno Moreno M",
    journal: "Clinical Therapeutics",
    year: "2003",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/12637119/",
    summary: "An open-label multicentre study of 261 patients with mild-to-moderate Alzheimer's dementia receiving 1200 mg/day Alpha-GPC for 180 days. Investigators documented statistically significant improvements in MMSE and ADAS-Cog scores, with good tolerability across the cohort. This is one of the larger published trials of Alpha-GPC in dementia and informs the dose-duration evidence base for cognitive use cases beyond healthy users.",
  },
  {
    title: "Acute Supplementation with Alpha-Glycerylphosphorylcholine Augments Growth Hormone Response to, and Peak Force Production During, Resistance Exercise",
    authors: "Ziegenfuss T, Landis J, Hofheins J",
    journal: "Journal of the International Society of Sports Nutrition",
    year: "2008",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/19660150/",
    summary: "A crossover RCT in resistance-trained men comparing 600 mg Alpha-GPC vs placebo taken 60–90 minutes before a squat protocol. Alpha-GPC produced a 44% higher peak growth hormone response and significantly greater peak isometric force production at the bottom of the squat versus placebo. The trial established the acute pre-workout dose and timing that the supplement community has since standardized on. The GH spike is exercise-dependent; in resting conditions, the effect is small.",
  },
  {
    title: "Effects of L-Alpha-Glycerylphosphorylcholine on Lower Body Force Production in Trained Adults: A Pilot Study",
    authors: "Bellar D, LeBlanc NR, Campbell B",
    journal: "Journal of the International Society of Sports Nutrition",
    year: "2015",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/26525096/",
    summary: "A pilot crossover trial of 600 mg Alpha-GPC vs placebo 45 minutes before a lower-body force-testing protocol. Alpha-GPC produced significantly greater isometric mid-thigh pull force versus placebo, replicating the force-production findings of Ziegenfuss 2008 with a different testing modality. Sample size was small, but the directional consistency across independent labs is part of why the pre-workout dose-timing protocol is now standard.",
  },
  {
    title: "Acute Choline Alphoscerate Improves Reaction Performance in Young Adults",
    authors: "Marcus L, Soileau J, Judge LW, Bellar D",
    journal: "Journal of the International Society of Sports Nutrition",
    year: "2017",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/28919842/",
    summary: "A double-blind RCT of 200 mg or 400 mg Alpha-GPC vs placebo in healthy young adults, evaluating reaction time, attention, and cognitive performance. Both doses produced significant improvements in reaction performance compared to placebo, with the 400 mg dose generally more effective. This is one of the few RCTs in healthy young adults (most positive cognitive evidence is in dementia populations) and supports use cases beyond age-related cognitive decline.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Alpha-GPC work?",
    intro:
      "Alpha-GPC works through two parallel mechanisms: it raises brain acetylcholine by supplying highly bioavailable choline that crosses the blood-brain barrier, and it provides glycerophosphocholine — a structural precursor used to build phosphatidylcholine in neuronal cell membranes. The acetylcholine arm drives the cognitive effects (attention, memory, focus). The membrane arm contributes to neuronal integrity and signaling efficiency over time.",
    body: [
      "Acetylcholine precursor. Alpha-GPC is absorbed efficiently from the gut and crosses the blood-brain barrier, where it's hydrolyzed to free choline and glycerophosphate. The free choline pool is then used by choline acetyltransferase to synthesize acetylcholine — the neurotransmitter central to attention, working memory, episodic memory consolidation, and the cholinergic system that declines in Alzheimer's disease.",
      "Highest brain bioavailability of common choline sources. Head-to-head data and pharmacokinetic modeling consistently rank Alpha-GPC above choline bitartrate and CDP-choline for raising plasma and brain choline levels. This is the structural reason Alpha-GPC is the choline source used in clinical dementia trials rather than cheaper alternatives.",
      "Neuronal membrane support. Glycerophosphocholine is a direct precursor to phosphatidylcholine, the dominant phospholipid in neuronal cell membranes. Long-term supplementation supports membrane fluidity, vesicle integrity, and the lipid environment that cholinergic signaling depends on.",
      "Cholinergic stimulation of the hypothalamic-pituitary axis. The acute growth hormone spike documented in exercise research is attributed to cholinergic activation of the hypothalamic-pituitary axis — Alpha-GPC raises acetylcholine availability, which modulates GHRH release. This effect is exercise-coupled; in resting states the GH response is much smaller.",
    ],
  },
  {
    id: "research",
    title: "What does Alpha-GPC actually do?",
    intro:
      "Alpha-GPC has one of the more substantial evidence bases of any cognitive supplement. The strongest published evidence is in dementia populations (Italian RCTs that led to prescription approval in Italy as Gliatilin); the next-strongest evidence is the acute exercise/GH literature; healthy young-adult cognitive evidence is real but more variable.",
    body: [
      "Dementia and cognitive impairment (Strong). Italian RCTs at 1200 mg/day for 90–180 days in Alzheimer's-type dementia and vascular dementia have shown significant improvements in cognitive function, memory, and global assessment scales (MMSE, ADAS-Cog). Evidence base behind prescription approval in Italy. See Parnetti 1993 and De Jesus Moreno Moreno 2003 in Published Studies.",
      "Acute growth hormone response in exercise (Moderate). Ziegenfuss 2008 documented a 44% higher peak GH response and greater isometric force production with 600 mg pre-workout vs placebo. Bellar 2015 replicated the force production finding. The GH effect is exercise-coupled and acute — not a chronic GH protocol.",
      "Healthy young-adult cognition (Moderate). Marcus 2017 found 200 mg and 400 mg significantly improved reaction performance in healthy young adults. Other healthy-adult trials show smaller or null effects on working memory, suggesting the cognitive benefit is most reliable for attention and reaction time, less robust for higher-order memory tasks.",
      "Stroke recovery (Emerging). Some Italian observational and pilot trials suggest cognitive benefit in stroke recovery and vascular cognitive impairment, but the evidence is weaker than in Alzheimer's-type dementia.",
      "Nootropic stack synergy (Anecdotal + mechanism-based). Widely used as the cholinergic baseline in racetam stacks (piracetam, aniracetam, oxiracetam) because racetams increase acetylcholine receptor density without supplying substrate — Alpha-GPC provides what racetams demand. RCT evidence for the combined stack is limited; the rationale is pharmacological.",
    ],
  },
  {
    id: "dosing",
    title: "How is Alpha-GPC dosed?",
    intro:
      "Dose depends on the goal: cognitive baseline, pre-workout GH protocol, or clinical dementia protocol. Most healthy users plateau on benefit above 600 mg/day. Higher doses (1200 mg) are clinically supervised in dementia populations and not the recommended starting point for healthy use.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cognitive baseline.</span> 300–400 mg once daily in the morning. Sufficient for daily focus, attention, and working memory support.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cognitive-demanding day or racetam stack.</span> 600 mg once daily, morning. The upper end of the routine cognitive use range.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-workout (Ziegenfuss protocol).</span> 600 mg taken 60–90 minutes before training. Coupled to the workout stimulus to maximize acute GH response and force production.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Clinical dementia research.</span> 1200 mg/day in divided doses (typically 400 mg three times daily). Reserved for clinically supervised use — not a healthy-user starting point.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Most users notice subjective focus and clarity effects within 30–60 minutes of dosing. Cognitive benefits build over the first 1–2 weeks of daily use. Pre-workout GH effects are acute and dose-coupled; they do not require a loading phase.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> Many supplements list &ldquo;Alpha-GPC complex&rdquo; or use a 50% standardized extract — meaning a 300 mg capsule of &ldquo;Alpha-GPC complex&rdquo; may contain only 150 mg of actual alpha-glycerophosphocholine. Read the label for actual Alpha-GPC content, not complex mass.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take Alpha-GPC",
    intro:
      "Alpha-GPC is taken orally, typically as a capsule or softgel. Powder is available but presents handling challenges (hygroscopic — see Storage). The points below cover the practical details that experienced users converge on.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once daily for cognitive use; 60–90 min pre-workout for exercise/GH protocol</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Morning for cognitive use; pre-training for exercise GH effect. Avoid evening dosing if you&apos;re sensitive — some users report sleep disruption.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Either — absorption is not food-dependent</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Capsule preferred (powder is hygroscopic — clumps in humid air); softgels also work; sublingual options exist but offer no clear advantage</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Look for &ldquo;50% Alpha-GPC&rdquo; on powder labels (1 g powder = 500 mg actual). Capsule labels should state actual Alpha-GPC mg, not &ldquo;complex&rdquo; mass.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling needed — daily use is well-tolerated. Some users cycle off periodically to assess subjective benefit.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Alpha-GPC stack with?",
    intro:
      "Alpha-GPC is one of the most stack-friendly cognitive supplements. The acetylcholine substrate it provides is what other cognitive interventions either require (racetams) or work alongside (nootropic peptides). The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Alpha-GPC pairs naturally with the Russian-origin cognitive peptide cluster.{" "}
            <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>{" "}
            (an ACTH(4-10) analog) modulates BDNF and neurotrophic signaling.{" "}
            <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link>{" "}
            (a tuftsin analog) provides anxiolytic and mild nootropic effects through GABA modulation. Neither peptide directly increases acetylcholine — they work upstream and laterally. Alpha-GPC supplies the cholinergic fuel, so the combined stack addresses different layers: peptides for neurotrophic and emotional regulation, Alpha-GPC for the acetylcholine substrate. Introduce one variable at a time when starting a new stack so you can tell what&apos;s actually doing what.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/lions-mane" className="text-[#0891b2] hover:underline">Lion&apos;s Mane</Link>{" "}
              — BDNF/NGF stimulation pairs with Alpha-GPC&apos;s acetylcholine supply; classic nootropic combination for sustained cognitive support.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/l-theanine" className="text-[#0891b2] hover:underline">L-Theanine</Link>{" "}
              — alpha-wave focus state without the jittery edge of stimulants. Pairs especially well with Alpha-GPC + caffeine.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/phosphatidylserine" className="text-[#0891b2] hover:underline">Phosphatidylserine</Link>{" "}
              — cortisol-blunting + cognitive support. Complementary to Alpha-GPC&apos;s membrane-support arm.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/bacopa-monnieri" className="text-[#0891b2] hover:underline">Bacopa Monnieri</Link>{" "}
              — long-term memory consolidation; effects build over weeks. Different timescale from Alpha-GPC but a natural daily companion.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Racetams (piracetam, aniracetam, oxiracetam). Not on PP but commonly stacked. Racetams increase acetylcholine receptor activity; Alpha-GPC supplies the substrate. Stacking the two is the pharmacological rationale most racetam users cite.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mental-work timing.</span> Take 30–60 minutes before deep cognitive work; effects build within the first hour.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Training timing.</span> 60–90 minutes pre-workout for the GH and force-production effects. Pair with creatine if performance is the goal.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Caffeine.</span> Synergistic. Caffeine raises arousal and adenosine resistance; Alpha-GPC raises acetylcholine availability. Watch total stimulant load.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep timing.</span> Avoid evening dosing if you&apos;re sensitive — cholinergic activation can disrupt REM architecture in some users.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Alpha-GPC is well-tolerated at typical doses in published trials. The two clusters of concern are short-term GI/headache effects (common, transient) and longer-term total-choline considerations (TMAO, fishy body odor at very high cumulative intake).",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Headache — most common at higher single doses (600 mg+) or when stacking with other cholinergic agents</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort — nausea or stomach upset, typically resolves with food or dose reduction</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Dizziness or mild brain fog at very high doses (above 1200 mg)</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sleep disruption with evening dosing in some users</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Fishy body odor at sustained high choline intake (Alpha-GPC + other dietary choline sources combined) — caused by trimethylamine production. Lower the dose or total choline load.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Elevated TMAO (trimethylamine N-oxide) — observational link to cardiovascular risk. Mechanism in humans debated; dose-response unclear. Watch if you have known cardiovascular disease.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Lower mood or irritability in sensitive users — over-stimulation of the cholinergic system can produce these effects in a subset of users.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anticholinergic medications (some antihistamines, tricyclic antidepressants, certain bladder medications) — Alpha-GPC&apos;s pro-cholinergic effect may partially oppose these drugs. Consult a clinician if you&apos;re on chronic anticholinergic therapy.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cholinesterase inhibitors (donepezil, rivastigmine — Alzheimer&apos;s drugs) — additive cholinergic effect. Coordinate with the prescribing clinician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other high-choline supplements (CDP-choline, choline bitartrate, phosphatidylcholine, lecithin) — stacking is fine but watch total choline load. Most users don&apos;t need to combine sources.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stimulants (caffeine, modafinil, ADHD medications) — synergistic for focus, but watch total cognitive load. Reduce caffeine if you notice over-stimulation.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "storage",
    title: "How should Alpha-GPC be stored?",
    intro:
      "Alpha-GPC is hygroscopic — it pulls moisture aggressively from air. This is the single most important storage detail for the powder form. Capsules are largely insulated by the gelatin or veg shell but still benefit from proper storage.",
    body: [
      "Capsules and softgels: Store at room temperature in the original sealed container. Once opened, use within 6–12 months. Refrigeration is not required but doesn't hurt in humid climates.",
      "Powder (bulk): Transfer to a small airtight container with a fresh desiccant pack immediately on opening. Avoid the bathroom or kitchen — these are the highest-humidity rooms in most homes. Clumping is harmless but makes dosing inaccurate.",
      "Do not store in direct sunlight or above 25°C / 77°F for extended periods.",
      "If powder has clumped: break up gently. Heavily caked or discolored powder should be discarded — moisture absorption can support microbial growth at the surface.",
      "Shelf life: typically 18–24 months from manufacture when sealed; 6–12 months after opening for capsules. Check the manufacture date when buying — Alpha-GPC sitting on a warehouse shelf for 18+ months pre-purchase is not what you want.",
    ],
  },
  {
    id: "limitations",
    title: "What we don't know yet about Alpha-GPC",
    intro:
      "Alpha-GPC has strong evidence in dementia populations and decent acute evidence in healthy adults, but several open questions remain — particularly around chronic high-dose safety, cardiovascular signal, and the gap between dementia-population effects and healthy-user transfer.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term safety in healthy adults.</span> Most of the high-dose evidence (1200 mg/day) comes from 3–6 month dementia trials. Multi-year daily use in healthy users is not characterized in controlled trials. The current best inference is that 300–600 mg/day appears safe based on tolerability data, but the long horizon is genuinely unknown.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">TMAO and cardiovascular signal.</span> High dietary or supplemental choline can raise serum TMAO via gut microbial metabolism. Observational studies link high TMAO to atherosclerosis and major adverse cardiovascular events. The dose-response relationship, the importance of individual microbiome composition, and the question of whether intervention TMAO meaningfully drives clinical events in healthy users — all remain open. This is a watch-list item, not a stop-light.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Dose-response above 600 mg.</span> Most healthy-user benefit appears to plateau above 600 mg. Whether 1200 mg adds value, has neutral effect, or introduces sub-clinical downsides in healthy populations is not well-characterized — that dose is studied in dementia, not in healthy adults.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Healthy young-adult cognitive transfer.</span> The most positive cognitive evidence comes from dementia trials. Healthy young-adult RCTs (Marcus 2017 and others) show benefits for reaction time and attention, but the effect sizes are smaller and the higher-order memory evidence is weaker. Treat &ldquo;works for dementia therefore works for you&rdquo; with appropriate skepticism.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Where studies disagree.</span> The acute GH magnitude varies substantially across exercise studies (some show 44%+ peak GH increase, others show smaller effects). Working memory and attention findings in healthy users are not uniformly positive — sample sizes are small, protocols differ, and some trials report null results. The directional signal across the corpus is positive but the heterogeneity is real.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Population specificity.</span> The strongest data is in older adults with cognitive impairment. Athletes have decent acute pre-workout evidence. Healthy non-athlete adults occupy a middle ground with smaller effect sizes. Pediatric, pregnancy, and severe-cardiovascular-disease populations have insufficient data.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy Alpha-GPC",
    intro:
      "Alpha-GPC is available over-the-counter in most markets (prescription-only in Italy, where it's sold as Gliatilin). Quality varies considerably — particularly around standardization disclosure and label accuracy. The quality markers below are the screen we use before clicking through to a retailer.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">300–600 mg per capsule of actual Alpha-GPC</span> — not &ldquo;Alpha-GPC complex&rdquo; mass. Read the label carefully.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">50% standardization disclosure on powders</span> — confirms the powder is the active form, not a diluted carrier blend.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, or ConsumerLab certifications signal independent verification.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vegetarian capsule</span> if that matters to you (most are HPMC; some still use gelatin).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary blends</span> that obscure the actual Alpha-GPC dose alongside fillers.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fresh manufacture date</span> — avoid jars sitting on warehouse shelves &gt;18 months pre-purchase.</li>
          </ul>
        </div>
        <a
          href="https://www.amazon.com/s?k=alpha+gpc&tag=profpeptide-20"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm inline-block"
        >
          Search Alpha-GPC on Amazon &rarr;
        </a>
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Alpha-GPC FAQ",
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
          Parnetti L, Abate G, Bartorelli L, et al. Multicentre study of l-alpha-glycerylphosphorylcholine vs ST200 among patients with probable senile dementia of Alzheimer&apos;s type. Drugs Aging. 1993;3(2):159-164.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/8443594/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/8443594/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          De Jesus Moreno Moreno M. Cognitive improvement in mild to moderate Alzheimer&apos;s dementia after treatment with the acetylcholine precursor choline alphoscerate: a multicenter, double-blind, randomized, placebo-controlled trial. Clin Ther. 2003;25(1):178-193.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/12637119/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/12637119/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ziegenfuss T, Landis J, Hofheins J. Acute supplementation with alpha-glycerylphosphorylcholine augments growth hormone response to, and peak force production during, resistance exercise. J Int Soc Sports Nutr. 2008;5(Suppl 1):P15.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/19660150/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/19660150/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bellar D, LeBlanc NR, Campbell B. The effect of 6 days of alpha glycerylphosphorylcholine on isometric strength. J Int Soc Sports Nutr. 2015;12:42.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/26525096/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/26525096/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Marcus L, Soileau J, Judge LW, Bellar D. Evaluation of the effects of two doses of alpha glycerylphosphorylcholine on physical and psychomotor performance. J Int Soc Sports Nutr. 2017;14:39.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/28919842/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/28919842/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kawamura T, Okubo T, Sato K, et al. Glycerophosphocholine enhances growth hormone secretion and fat oxidation in young adults. Nutrition. 2012;28(11-12):1122-1126.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22673596/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22673596/
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
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
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
      "name": "What's the difference between Alpha-GPC and CDP-choline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both raise brain acetylcholine, but they take different routes. Alpha-GPC delivers choline plus glycerophosphocholine (a phosphatidylcholine precursor used in neuronal membranes). CDP-choline (citicoline) delivers choline plus cytidine, which converts to uridine — separately useful for dopamine receptor density. Alpha-GPC raises brain choline faster and higher; CDP-choline produces a smaller but longer peak and adds the uridine pathway. For acute cognitive or pre-workout use, Alpha-GPC wins on speed. For long-term stacks alongside racetams or for dopamine-adjacent goals, CDP-choline is often preferred. Cost-wise, CDP-choline is meaningfully cheaper per dose."
      }
    },
    {
      "@type": "Question",
      "name": "Will Alpha-GPC actually raise growth hormone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — but it's an acute, exercise-coupled effect, not a chronic GH protocol. Ziegenfuss 2008 found 600 mg taken 60–90 minutes before resistance exercise produced a 44% higher peak GH response versus placebo, with downstream improvements in lower-body force production. Without the exercise stimulus, the GH effect is small. Treat this as a workout-day adjunct, not a daily GH-axis intervention. For sustained GH support, peptides in the GH cluster (Sermorelin, Ipamorelin, CJC-1295) do the actual work."
      }
    },
    {
      "@type": "Question",
      "name": "Can I take Alpha-GPC every day long-term?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Short-to-medium-term daily use is well-tolerated in the published literature, including 1200 mg/day for 3–6 months in dementia trials. The open question is multi-year high-dose use in healthy adults — that data doesn't exist. The realistic answer: daily 300–600 mg appears safe based on current evidence, but stay aware of total choline intake from other sources (eggs, organ meats, multivitamins) and don't pile on additional high-choline supplements unnecessarily."
      }
    },
    {
      "@type": "Question",
      "name": "Does Alpha-GPC raise TMAO? Should I be worried?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Possibly modestly, and it depends on your gut microbiome more than your choline intake. TMAO (trimethylamine N-oxide) is produced when gut bacteria metabolize choline, then your liver oxidizes the trimethylamine. Observational studies link high blood TMAO to cardiovascular risk, but causality and the dose-response relationship in humans remain debated. If you have established cardiovascular disease or high baseline TMAO, talk to a clinician before high-dose long-term use. For most healthy users at typical 300–600 mg doses, this is a watch-list item, not a stop-light."
      }
    },
    {
      "@type": "Question",
      "name": "Why does Alpha-GPC clump in the jar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because it's hygroscopic — it pulls moisture out of the air aggressively. Within hours of opening a jar of bulk powder, you'll see clumping and surface caking. This is why most users prefer capsules (the gelatin or veg shell isolates the active from atmospheric humidity). If you do buy powder, transfer to a small airtight container with a desiccant pack and don't store in the bathroom or kitchen. Clumped Alpha-GPC isn't dangerous — it's just hard to dose accurately."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack Alpha-GPC with Semax or Selank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and the stack is mechanistically natural. Semax is an ACTH(4-10) analog that modulates BDNF and neurotrophic signaling; Selank is a tuftsin analog with anxiolytic and mild nootropic effects via GABA modulation. Neither peptide directly increases acetylcholine — they work upstream and laterally. Alpha-GPC supplies the cholinergic substrate, so the combination addresses different layers of cognitive function: peptides for neurotrophic and emotional regulation, Alpha-GPC for the acetylcholine fuel. No known negative interactions, but introduce one variable at a time so you can tell what's actually doing what."
      }
    },
    {
      "@type": "Question",
      "name": "What's the right dose for cognitive vs. pre-workout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For daily cognitive support: 300–400 mg in the morning is the typical baseline; 600 mg if you're stacking with a racetam or working through demanding cognitive load. For pre-workout GH and force-production effects: 600 mg taken 60–90 minutes before training is the Ziegenfuss protocol. Dementia research uses 1200 mg/day in divided doses — clinically supervised, not the healthy-user starting point. Most users plateau on benefit above 600 mg/day."
      }
    },
    {
      "@type": "Question",
      "name": "Does Alpha-GPC work for ADHD or attention issues?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indirectly and inconsistently. The cholinergic system is involved in attention regulation, and some users report improved focus on Alpha-GPC. But ADHD is dominantly a dopamine/norepinephrine condition, not a cholinergic one, and the controlled trial evidence for Alpha-GPC in ADHD specifically is thin. As a stack alongside established ADHD treatment, it may help some users with mental clarity; as a standalone ADHD intervention, the evidence doesn't support it."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Alpha-GPC: What Biohackers Need to Know About Acetylcholine Boosting",
  "description": "Alpha-GPC dosing, mechanism, and real-world results for cognitive enhancement. Plus how it stacks with cognitive peptides like Semax and Selank.",
  "url": "https://profpeptide.com/supplements/alpha-gpc",
  "datePublished": "2026-04-07",
  "dateModified": "2026-05-24",
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
    { "@type": "ListItem", "position": 3, "name": "Alpha-GPC" }
  ]
};

export default function AlphaGPCPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Alpha-GPC</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 24, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Alpha-glycerophosphocholine, L-alpha glycerylphosphorylcholine, choline alfoscerate, Gliatilin (Italian Rx brand)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Choline-containing phospholipid / acetylcholine precursor
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Strong — multiple Italian RCTs in dementia (prescription in Italy as Gliatilin), Ziegenfuss 2008 GH/exercise RCT, multiple healthy-user reaction-time and force-production RCTs
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Alpha-GPC?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Alpha-GPC (alpha-glycerophosphocholine) is the most bioavailable, brain-penetrant choline source available as a supplement. It outperforms choline bitartrate and CDP-choline for raising plasma and brain choline — the substrate the brain needs to synthesize acetylcholine, the neurotransmitter central to attention, memory, and learning. Approximately 90% of adults don&apos;t consume adequate dietary choline, so the supplement bridges a real nutritional gap. In Italy, Alpha-GPC is sold as a prescription drug (Gliatilin) for cognitive impairment and dementia; in the rest of the world, it&apos;s available over-the-counter and widely used in nootropic stacks. The biohacker case is built on three things: a substantial dementia RCT base, acute exercise GH and force-production evidence, and a strong mechanistic rationale for stacking with{" "}
            <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">cognitive peptides</Link>{" "}
            that work via different pathways.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Most effective choline source for raising brain acetylcholine</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved attention, reaction time, and working memory in healthy users (RCT evidence)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Significant cognitive improvements in Alzheimer&apos;s-type and vascular dementia at clinical doses</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Acute growth hormone release (+44% peak) coupled to resistance exercise</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Enhanced lower-body force production at pre-workout doses</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Neuronal membrane support via phosphatidylcholine precursor pathway</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Substrate for racetam stacks (piracetam, aniracetam, oxiracetam)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 300–600 mg once daily for cognitive baseline; 600 mg taken 60–90 minutes pre-workout for the acute GH and force-production effect; 1200 mg/day in divided doses for clinical dementia research (not a healthy-user starting point).
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Available over-the-counter from most supplement retailers. Quality varies — review the quality-markers checklist in the Where to Buy section below before purchasing.{" "}
            <a href="https://www.amazon.com/s?k=alpha+gpc&tag=profpeptide-20" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0891b2] hover:underline">Shop Alpha-GPC on Amazon &rarr;</a>
          </p>
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
        {["Acetylcholine", "Choline", "Cognitive", "Pre-Workout GH", "Rx in Italy"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/lions-mane" className="text-sm font-medium text-[#0891b2] hover:underline">Lion&apos;s Mane</Link>
          <Link href="/supplements/bacopa-monnieri" className="text-sm font-medium text-[#0891b2] hover:underline">Bacopa Monnieri</Link>
          <Link href="/supplements/phosphatidylserine" className="text-sm font-medium text-[#0891b2] hover:underline">Phosphatidylserine</Link>
          <Link href="/supplements/l-theanine" className="text-sm font-medium text-[#0891b2] hover:underline">L-Theanine</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Alpha-GPC" pagePath="/supplements/alpha-gpc" />
    </div>
    </>
  );
}
