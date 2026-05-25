import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/caffeine-l-theanine",
  title: "Caffeine + L-Theanine: Why This 1:2 Stack Beats Coffee Alone",
  description:
    "Caffeine + L-Theanine dosing (1:2 ratio), mechanism, and the synergy research showing this stack outperforms caffeine alone — without the jitter bump.",
});

const faqs = [
  {
    q: "Why is 1:2 the canonical ratio?",
    a: "Because that's the ratio Owen et al. 2008 used in the landmark crossover RCT that established the synergy (50 mg caffeine + 100 mg L-theanine in their protocol — same 1:2). Follow-up trials (Haskell 2008, Giesbrecht 2010, Einother 2010) used variations around 1:1 to 1:4 and showed broadly consistent results, but the 1:2 ratio at 100 mg caffeine + 200 mg L-theanine is the dose pair that most supplement products and most published positive trials converge on. It's not magic — it's the most-replicated dose pair in the literature.",
  },
  {
    q: "Should I take this every day or cycle it?",
    a: "The L-theanine half doesn't require cycling — it's a non-essential amino acid with no known tolerance buildup. The caffeine half does. Daily caffeine use produces tolerance within 1–2 weeks, blunting the alertness effect and creating mild dependence (the morning-coffee headache if you skip it). Most heavy users cycle caffeine with 1–2 day breaks per week, or do a periodic 1-week deload every 2–3 months to reset sensitivity. You can keep L-theanine going through the deload — it's the caffeine that needs the reset.",
  },
  {
    q: "What's the difference between this and just drinking tea?",
    a: "Brewed tea contains both compounds naturally — a strong cup of black tea has roughly 40–70 mg caffeine and 15–40 mg L-theanine, depending on cultivar and steep time. That's much less L-theanine than the studied 1:2 stack dose, and the ratio in tea is closer to 1:0.5 — not enough theanine to fully blunt caffeine's anxiogenic edge. Tea is calmer than coffee because of theanine, but a 1:2 supplement stack delivers the synergy at research-protocol doses. Tea is a habit; the supplement is a targeted dose.",
  },
  {
    q: "Can I take L-theanine alone to 'cancel' jitter from coffee?",
    a: "Yes — and this is one of the most practical uses of standalone L-theanine. 100–200 mg taken alongside a normal cup of coffee meaningfully reduces caffeine-induced anxiety, racing thoughts, and the cardiovascular stimulation effect, without dampening the alertness. If you don't want to swap your coffee habit but want the synergy benefit, this is the lowest-friction protocol. Many users keep L-theanine capsules next to the coffee maker for exactly this reason.",
  },
  {
    q: "Best timing for cognitive work vs training?",
    a: "Cognitive work: 30–60 minutes before sustained-attention tasks. Effects build over the first hour and last 3–4 hours of clean focus before tapering. Training: 30–60 minutes pre-workout for the alertness + reduced perceived exertion effect. Caffeine has well-established acute exercise performance benefits; L-theanine doesn't add to the physical performance side, but it does smooth the heart rate and anxiety bump that high pre-workout caffeine doses produce. Either way, cut off the dose by mid-afternoon to protect sleep.",
  },
  {
    q: "Does L-theanine work for caffeine-induced anxiety?",
    a: "Yes, and the evidence on this specific use is among the most replicated findings in the L-theanine literature. Haskell 2008 and Owen 2008 both documented that the combination produces measurably less subjective tension/anxiety than caffeine alone at matched caffeine doses. The mechanism appears to be a combination of GABA modulation, alpha-wave promotion, and direct attenuation of caffeine-mediated sympathetic activation. If caffeine makes you anxious, theanine is the most evidence-backed intervention short of dose reduction.",
  },
  {
    q: "Can I stack this with Semax or other nootropics?",
    a: (
      <>
        Yes — and{" "}
        <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>{" "}
        is mechanistically the natural peptide bridge from this stack. Caffeine raises arousal and dopamine availability; L-theanine smooths the curve via GABA and alpha-wave modulation; Semax adds BDNF-mediated neurotrophic signaling on top. The three operate on different pathways, so the combined effect tends to layer rather than overlap. Other supplement nootropics ({" "}
        <Link href="/supplements/alpha-gpc" className="text-[#0891b2] hover:underline">Alpha-GPC</Link>{" "}
        for cholinergic substrate,{" "}
        <Link href="/supplements/lions-mane" className="text-[#0891b2] hover:underline">Lion&apos;s Mane</Link>{" "}
        for BDNF/NGF,{" "}
        <Link href="/supplements/bacopa-monnieri" className="text-[#0891b2] hover:underline">Bacopa</Link>{" "}
        for long-term memory consolidation) also stack cleanly. Introduce one variable at a time so you can tell what&apos;s actually doing what.
      </>
    ),
  },
  {
    q: "Will this affect my sleep if I take it in the afternoon?",
    a: "The caffeine half will — even at 100 mg, caffeine has a half-life of roughly 5–6 hours in most adults (longer in slow metabolizers; shorter in some pregnancies and in heavy smokers). A 2 p.m. dose still has measurable caffeine in your system at 8 p.m. The L-theanine half is sleep-neutral and may even slightly aid sleep onset at higher doses. Practical rule: stop caffeine by 12 p.m. if you're sensitive, 2 p.m. if you're average, never later than 4 p.m. unless you've validated that you metabolize caffeine fast.",
  },
];

const studies = [
  {
    title: "The Combined Effects of L-Theanine and Caffeine on Cognitive Performance and Mood",
    authors: "Owen GN, Parnell H, De Bruin EA, Rycroft JA",
    journal: "Nutritional Neuroscience",
    year: "2008",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18681988/",
    summary: "The landmark double-blind crossover RCT that established the caffeine + L-theanine synergy on attention and mood. 27 healthy adults received 50 mg caffeine, 100 mg L-theanine, the combination, or placebo across four sessions. The combination produced significantly better attention-switching accuracy and significantly greater reduction in distracting-information susceptibility than either compound alone. Subjective alertness improved on both caffeine and the combination but not on theanine alone. This trial set the 1:2 ratio reference protocol that the supplement market has since standardized on.",
  },
  {
    title: "The Effects of L-Theanine, Caffeine and Their Combination on Cognition and Mood",
    authors: "Haskell CF, Kennedy DO, Milne AL, Wesnes KA, Scholey AB",
    journal: "Biological Psychology",
    year: "2008",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18006208/",
    summary: "A double-blind randomized trial in 27 healthy adults examining 150 mg caffeine, 250 mg L-theanine, the combination, and placebo on cognition and mood. The combination produced faster reaction times, improved word recognition, and greater subjective alertness than either compound alone. Caffeine alone produced more anxiety and tension; the combination did not. The trial directly demonstrated that L-theanine selectively attenuates caffeine's anxiogenic effects while preserving and even enhancing its cognitive benefits — the affirmative mitigation finding that defines the synergy.",
  },
  {
    title: "The Effects of L-Theanine and Caffeine Alone and in Combination on Cognitive Performance",
    authors: "Giesbrecht T, Rycroft JA, Rowson MJ, De Bruin EA",
    journal: "Nutritional Neuroscience",
    year: "2010",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/20546655/",
    summary: "A double-blind crossover trial in 20 healthy adults using lower doses than the earlier Owen/Haskell trials (40 mg caffeine + 97 mg L-theanine — roughly 1:2.4) to determine whether the synergy holds at sub-Owen-protocol doses. The combination significantly improved cognitive performance on demanding attention tasks and reduced mental fatigue versus placebo, replicating the Owen 2008 findings at lower doses. The trial extended the dose-response evidence base downward and showed the synergy is robust below the canonical 1:2 100/200 mg protocol.",
  },
  {
    title: "L-Theanine and Caffeine Improve Task Switching but Not Intersensory Attention or Subjective Alertness",
    authors: "Einöther SJ, Martens VE, Rycroft JA, De Bruin EA",
    journal: "Appetite",
    year: "2010",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/20079384/",
    summary: "A double-blind crossover trial in 30 young adults examining the combination's effects on a battery of cognitive tasks. Task-switching accuracy improved significantly under the combination versus placebo, replicating the Owen 2008 attention-switching finding. Intersensory attention and subjective alertness did not differ. The trial helps map which cognitive domains the synergy reliably affects (executive control, attention switching) versus which it doesn't (basic vigilance, subjective alertness). Useful for setting expectations — the stack is not a stimulant; it's a cognitive control aid.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Caffeine + L-Theanine work?",
    intro:
      "The stack works because the two compounds engage different neurochemical pathways and the second compound selectively dampens the first compound's downside without dampening its upside. Caffeine drives alertness via adenosine receptor antagonism and downstream dopamine/norepinephrine; L-theanine increases alpha-wave activity and modulates GABA/glutamate balance to produce calm focus. The combined effect is what the published synergy literature has consistently shown: caffeine's cognitive benefit, minus most of its anxiogenic and cardiovascular edge.",
    body: [
      "Caffeine: adenosine antagonism. Caffeine is a non-selective antagonist of adenosine A1 and A2A receptors. Adenosine accumulates through the day and binds these receptors to produce drowsiness; caffeine displaces it, disinhibiting downstream dopamine and norepinephrine release. Result: increased alertness, faster reaction times, suppressed perception of fatigue. See the standalone profile of caffeine for the full mechanism.",
      "L-theanine: alpha-wave modulation. L-theanine is a glutamate analog that crosses the blood-brain barrier and modulates GABA and glutamate signaling. EEG studies consistently show it increases alpha-wave activity (8–13 Hz) — the brain-wave band associated with relaxed alertness, creativity, and flow states. It does this without producing sedation, which is what differentiates it from anxiolytic drugs like benzodiazepines. See the standalone profile of L-theanine for the full mechanism.",
      "The synergy. Caffeine alone tends to push the autonomic nervous system toward sympathetic activation — heart rate up, blood pressure up, anxiety up in sensitive users. L-theanine attenuates this sympathetic component selectively, without dampening the dopaminergic alertness path that drives the cognitive benefit. The net effect documented in Owen 2008 and Haskell 2008: comparable or better cognitive performance versus caffeine alone, with measurably less anxiety, jitter, and tension.",
      "EEG signature. Caffeine reduces alpha-wave activity; L-theanine increases it. Combined, the two produce a balanced alpha/beta state that EEG studies associate with focused-but-calm cognition — the neurochemical correlate of the subjective &ldquo;flow&rdquo; experience users describe.",
      "Why this stack outperforms either compound alone for cognitive work. Caffeine alone delivers alertness but with autonomic noise. L-theanine alone delivers calm but with minimal alertness gain. The combination delivers alertness with reduced noise. For sustained focus tasks (writing, coding, studying, complex problem-solving), the lower-noise version of caffeine&apos;s alertness is materially more useful than the unmodulated version.",
    ],
  },
  {
    id: "research",
    title: "What does the Caffeine + L-Theanine stack actually do?",
    intro:
      "Four foundational double-blind crossover RCTs (Owen 2008, Haskell 2008, Giesbrecht 2010, Einother 2010) and a growing body of follow-up trials anchor this stack's evidence base. The strongest findings are on attention switching, executive control, and the anxiety-mitigation effect; the weaker findings are on basic vigilance and subjective alertness. Treat the stack as an executive-function aid, not a generic energy boost.",
    body: [
      "Attention switching and executive control (Strong). Owen 2008 and Einother 2010 both documented significant improvements in attention-switching accuracy and the ability to suppress distractor information under the combination versus caffeine alone. This is the most-replicated finding in the literature and the strongest case for using the stack on cognitively demanding work.",
      "Reaction time and word recognition (Strong). Haskell 2008 found faster reaction times and improved word recognition under the combination versus either compound alone. Multiple smaller trials have replicated the reaction-time finding.",
      "Anxiety attenuation (Strong, affirmative). Both Owen 2008 and Haskell 2008 documented that the combination produced significantly less subjective tension and anxiety than caffeine alone at matched caffeine doses. This is the affirmative case for adding L-theanine to existing caffeine routines — not just a side-effect mitigation, but a measured RCT outcome.",
      "Mental fatigue reduction (Moderate). Giesbrecht 2010 found the combination reduced mental fatigue during sustained cognitive tasks even at lower doses (40 mg caffeine + 97 mg L-theanine). The dose-response evidence holds below the canonical 1:2 100/200 mg protocol.",
      "Basic vigilance and subjective alertness (Mixed). Einother 2010 found the combination did not improve intersensory attention or subjective alertness — the synergy is real but it&apos;s not a generic stimulant. The benefit is concentrated in executive control and attention switching, not raw arousal.",
      "Cardiovascular attenuation (Moderate). Several trials have documented that L-theanine partially attenuates the blood-pressure and heart-rate bump that caffeine alone produces. Effect size varies by individual and dose; the directional signal is consistent.",
      "Long-term cognitive transfer (Limited). Most published evidence is acute single-dose. Whether daily long-term use produces sustained cognitive gains beyond what the acute effect delivers is not well characterized. Treat this stack as an acute task-day intervention, not a chronic nootropic.",
    ],
  },
  {
    id: "dosing",
    title: "How is Caffeine + L-Theanine dosed?",
    intro:
      "The canonical research-protocol baseline is 100 mg caffeine + 200 mg L-theanine — the 1:2 ratio Owen 2008 used and the dose pair most supplement products converge on. The published dose range spans 1:1 to 1:4 across trials. Adjust the caffeine half down if you&apos;re caffeine-sensitive; adjust both up if you have caffeine tolerance and the standard dose feels weak.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Light starting dose.</span> 50 mg caffeine + 100 mg L-theanine (1:2). Good first-time dose for caffeine-sensitive users or users new to the stack.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard / canonical.</span> 100 mg caffeine + 200 mg L-theanine (1:2). The Owen 2008 reference protocol and the most-replicated dose pair. Default starting point for most healthy adults.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">High-tolerance / extended-focus.</span> 200 mg caffeine + 400 mg L-theanine (1:2). For caffeine-tolerant users or long cognitive sessions. Don&apos;t exceed 400 mg total daily caffeine from all sources for most adults.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anxiety-reduction protocol (theanine-heavy).</span> 100 mg caffeine + 300–400 mg L-theanine (1:3 to 1:4). If caffeine anxiety is the limiting factor, push the theanine ratio higher; the cognitive benefit is preserved at 1:3 and 1:4 ratios in trial data.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Onset is 30–60 minutes after dosing. Effects last 3–4 hours of clean focus before tapering. Total caffeine duration in the system is longer (5–6 hour half-life — relevant for sleep timing).
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Combined supplement vs separates.</span> Pre-blended caffeine+L-theanine capsules are convenient but lock the ratio. Separate caffeine tablets + L-theanine capsules let you adjust the ratio per session (lower caffeine for evening cognitive work; theanine-heavy for anxiety days). Separates are typically cheaper per dose.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">If you already drink coffee.</span> A standard cup of brewed coffee has 80–100 mg caffeine. Adding 200 mg standalone L-theanine to a normal coffee converts it to the canonical 1:2 protocol without changing your habit. This is the lowest-friction entry point to the stack.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take Caffeine + L-Theanine",
    intro:
      "Both compounds are taken orally as capsules, tablets, or (for caffeine) brewed beverages. The points below cover the practical details that experienced users converge on.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once or twice daily for cognitive use; pre-workout for training. Avoid stacking multiple doses within the same caffeine half-life window (5–6 hours).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Morning for daily cognitive work; 30–60 min pre-workout for training; cut off by 12–2 p.m. to protect sleep (later if you metabolize caffeine fast)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Either — absorption is not food-dependent. Some users prefer with a small meal to slow caffeine absorption and smooth the curve.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Combined caffeine + L-theanine capsules for convenience, or separate caffeine tablets + L-theanine capsules for ratio flexibility. Avoid pre-workout proprietary blends that obscure the actual mg per component.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Suntheanine&reg; branded L-theanine (Taiyo — 99%+ purity, third-party validated) is the lab-grade reference; pharmaceutical-grade USP caffeine for the stimulant half. Both components clearly labeled in mg, no proprietary blends.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">L-theanine: no cycling needed (no tolerance). Caffeine: daily tolerance builds within 1–2 weeks — take 1–2 caffeine-free days per week, or do a 1-week deload every 2–3 months to reset sensitivity. Keep L-theanine going through the caffeine deload.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Caffeine + L-Theanine stack with?",
    intro:
      "This stack is itself the foundational cognitive supplement protocol — most other cognitive aids layer on top of it rather than replacing it. The three categories below cover the natural stacking adjacents.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            The natural peptide bridge is{" "}
            <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>{" "}
            — an ACTH(4-10) analog used as a cognitive nootropic in the Russian medical tradition. Mechanistically the three operate on different pathways: caffeine raises arousal and dopamine availability; L-theanine smooths the curve through GABA modulation and alpha-wave promotion; Semax adds BDNF-mediated neurotrophic signaling on top. The combined effect tends to layer rather than overlap. Practical protocol: take caffeine + L-theanine first thing on a focus day; layer Semax (intranasal) 30–60 minutes before deep work. Introduce one variable at a time so you can tell what&apos;s actually doing what.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/alpha-gpc" className="text-[#0891b2] hover:underline">Alpha-GPC</Link>{" "}
              — cholinergic substrate. Adds acetylcholine fuel to the alertness + alpha-wave focus the stack provides. The most natural cognitive stack addition.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/lions-mane" className="text-[#0891b2] hover:underline">Lion&apos;s Mane</Link>{" "}
              — BDNF/NGF stimulation. Long-term cognitive support that complements the acute effect of caffeine + L-theanine.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/bacopa-monnieri" className="text-[#0891b2] hover:underline">Bacopa Monnieri</Link>{" "}
              — long-term memory consolidation. Effects build over weeks; different timescale from the stack but a natural daily companion for sustained cognitive work.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/rhodiola-rosea" className="text-[#0891b2] hover:underline">Rhodiola Rosea</Link>{" "}
              — adaptogen with mild stimulant properties. Pairs well with the stack for endurance cognitive work; reduces fatigue without compounding caffeine&apos;s autonomic load.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/caffeine" className="text-[#0891b2] hover:underline">Caffeine</Link>{" "}
              and{" "}
              <Link href="/supplements/l-theanine" className="text-[#0891b2] hover:underline">L-Theanine</Link>{" "}
              — see the standalone profiles for solo dosing context, source notes, and individual side-effect profiles.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              L-Tyrosine. Catecholamine precursor; helpful for sustained-attention work and sleep-deprived cognitive performance. Not on PP but commonly stacked. Stacks cleanly with the canonical 1:2 protocol.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Morning vs afternoon.</span> Most users front-load the stack in the morning. Afternoon use is fine for caffeine-fast-metabolizers but risks sleep impact for slow metabolizers.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep cutoff.</span> 6 hours before bed is the standard rule. 8 hours if you&apos;re sensitive. Caffeine&apos;s half-life is the longest variable here.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fasted vs fed.</span> Fasted dosing produces a faster, sharper onset; fed dosing smooths the curve and reduces GI sensitivity. Both work.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Training timing.</span> 30–60 minutes pre-workout for the alertness + reduced perceived exertion effect. L-theanine doesn&apos;t add to physical performance but it does smooth the heart-rate bump from high pre-workout caffeine doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Caffeine deload.</span> Take 1–2 caffeine-free days per week (or a 1-week deload every 2–3 months) to preserve sensitivity. Keep L-theanine going through the deload — only the caffeine half needs the reset.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "The stack is well-tolerated for healthy adults. Most side effects come from the caffeine half — and notably, L-theanine demonstrably mitigates several of them (anxiety, sympathetic activation, sleep disruption at lower caffeine doses). That mitigation is an affirmative finding from the RCT literature, not just a side benefit. Flag below tracks individual-compound effects and the interaction profile.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly caffeine-driven)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Jitter, restlessness, or hand tremor at higher caffeine doses (200+ mg) — L-theanine attenuates but does not eliminate this</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild sleep disruption with late dosing — caffeine half-life is 5–6 hours; afternoon doses still measurably present at bedtime</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Increased urination and mild dehydration — caffeine&apos;s diuretic effect; offset with water</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Caffeine dependence and withdrawal headache with daily use — predictable, reversible with a 1-week deload</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI upset on empty stomach at higher doses — take with food if sensitive</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">L-theanine-specific (minimal)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Excellent safety profile — no documented toxicity at any reasonable supplement dose</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild sedation reported at very high doses (&gt;400 mg in caffeine-naive users)</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Slight blood-pressure reduction in some users — usually a benefit, but watch if you&apos;re on antihypertensive medication</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Affirmative mitigation — what L-theanine fixes</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Caffeine-induced anxiety and subjective tension — significantly reduced in the combination versus caffeine alone (Owen 2008, Haskell 2008)</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Caffeine-induced blood-pressure and heart-rate bumps — partially attenuated in published trials</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">&ldquo;Caffeine crash&rdquo; on the back end — smoother taper than caffeine alone</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sleep-onset disruption from afternoon caffeine — modestly improved by L-theanine&apos;s mild sleep-onset effect</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other stimulants (nicotine, ADHD medications, ephedrine, decongestants) — compounded sympathetic activation. Watch total stimulant load.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Antidepressants (especially MAOIs and SSRIs) — caffeine can interact with serotonergic drugs; consult a clinician if you&apos;re on chronic treatment.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Antihypertensive medications — both caffeine and L-theanine have blood-pressure effects (opposing directions). Coordinate with the prescribing clinician if you&apos;re on chronic BP medication.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Benzodiazepines and GABAergic medications — L-theanine modestly modulates GABA; the interaction is mild but worth knowing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Alcohol — caffeine masks alcohol&apos;s sedating effect without reducing impairment. Combining is a common but well-documented bad idea.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy — caffeine intake should be limited during pregnancy (typically &lt;200 mg/day per most clinical guidelines). L-theanine has limited pregnancy data; default to avoid.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about the stack",
    intro:
      "The acute synergy is well-established. The longer-horizon and population-specific questions are less settled — and the L-theanine mechanism specifically is still debated despite decades of research.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term cognitive transfer.</span> Most positive evidence is acute single-dose. Whether daily long-term use produces sustained cognitive gains beyond the acute effect, or whether the effect is fully captured each session and doesn&apos;t compound, is not well-characterized. Treat this stack as an acute task-day intervention, not a chronic brain-builder.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">L-theanine&apos;s exact mechanism.</span> Three theories compete: alpha-wave promotion via direct EEG modulation, GABA receptor modulation, and glutamate balance via NMDA modulation. The EEG signal is replicated; the molecular pathway is still debated. Practical effect is documented; pharmacological precision is not.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal ratio in different populations.</span> Most trials are healthy young adults (university students, 20–35 years). Older adults, high-caffeine-tolerance users, slow caffeine metabolizers (CYP1A2 variant carriers), and chronic-anxiety populations are underrepresented. The 1:2 ratio is the default, but personalization data is thin.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Suntheanine&reg; vs generic L-theanine.</span> Suntheanine is the branded, lab-grade form used in most published RCTs. Whether generic L-theanine produces equivalent effects at matched doses is plausible but not directly tested in head-to-head trials. Most users find generic effective; the lab-grade reference matters more for replicating trial protocols precisely.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Chronic stress and clinical anxiety.</span> Most trials measure acute task-induced anxiety in healthy participants, not chronic anxiety disorders. Whether the stack helps clinical anxiety populations isn&apos;t adequately tested.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Where studies disagree.</span> Subjective cognitive benefit reports are highly variable across trials. Some healthy-adult RCTs show smaller effects or null results on specific cognitive domains (basic vigilance, intersensory attention). The directional signal across the corpus is positive on attention switching and executive control, but the magnitude varies and individual response is variable.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy Caffeine + L-Theanine",
    intro:
      "Both compounds are widely available over-the-counter. The decision is whether to buy a pre-blended capsule (convenient, locked ratio) or separate caffeine tablets + L-theanine capsules (flexible, often cheaper, lets you adjust the ratio per session). Quality varies more than expected — the markers below are the screen we use.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">100 mg caffeine + 200 mg L-theanine per capsule</span> (1:2 canonical ratio) — the most-replicated dose pair</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Suntheanine&reg; branded L-theanine</span> (Taiyo) — lab-grade reference; 99%+ purity; third-party validated</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pharmaceutical-grade USP caffeine</span> (anhydrous) — not naturopathic / herbal-extract caffeine</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, or ConsumerLab certifications signal independent verification</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary blends</span> — actual mg per component clearly labeled, not buried in a &ldquo;cognitive matrix&rdquo;</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vegetarian capsule</span> preferred (most are HPMC; some still use gelatin)</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fresh manufacture date</span> — avoid jars sitting on warehouse shelves &gt;18 months pre-purchase</li>
          </ul>
        </div>
        <a
          href="https://www.amazon.com/s?k=caffeine+l-theanine&tag=profpeptide-20"
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="btn-primary text-sm inline-block"
        >
          Search Caffeine + L-Theanine on Amazon &rarr;
        </a>
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Caffeine + L-Theanine FAQ",
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
          Owen GN, Parnell H, De Bruin EA, Rycroft JA. The combined effects of L-theanine and caffeine on cognitive performance and mood. Nutr Neurosci. 2008;11(4):193-198.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18681988/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18681988/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Haskell CF, Kennedy DO, Milne AL, Wesnes KA, Scholey AB. The effects of L-theanine, caffeine and their combination on cognition and mood. Biol Psychol. 2008;77(2):113-122.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18006208/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18006208/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Giesbrecht T, Rycroft JA, Rowson MJ, De Bruin EA. The combination of L-theanine and caffeine improves cognitive performance and increases subjective alertness. Nutr Neurosci. 2010;13(6):283-290.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20546655/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20546655/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Einöther SJ, Martens VE, Rycroft JA, De Bruin EA. L-theanine and caffeine improve task switching but not intersensory attention or subjective alertness. Appetite. 2010;54(2):406-409.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20079384/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20079384/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Nobre AC, Rao A, Owen GN. L-theanine, a natural constituent in tea, and its effect on mental state. Asia Pac J Clin Nutr. 2008;17 Suppl 1:167-168.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18296328/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18296328/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Camfield DA, Stough C, Farrimond J, Scholey AB. Acute effects of tea constituents L-theanine, caffeine, and epigallocatechin gallate on cognitive function and mood: a systematic review and meta-analysis. Nutr Rev. 2014;72(8):507-522.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/24946991/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/24946991/
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
      "name": "Why is 1:2 the canonical ratio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because that's the ratio Owen et al. 2008 used in the landmark crossover RCT that established the synergy (50 mg caffeine + 100 mg L-theanine in their protocol — same 1:2). Follow-up trials (Haskell 2008, Giesbrecht 2010, Einother 2010) used variations around 1:1 to 1:4 and showed broadly consistent results, but the 1:2 ratio at 100 mg caffeine + 200 mg L-theanine is the dose pair that most supplement products and most published positive trials converge on. It's not magic — it's the most-replicated dose pair in the literature."
      }
    },
    {
      "@type": "Question",
      "name": "Should I take this every day or cycle it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The L-theanine half doesn't require cycling — it's a non-essential amino acid with no known tolerance buildup. The caffeine half does. Daily caffeine use produces tolerance within 1–2 weeks, blunting the alertness effect and creating mild dependence (the morning-coffee headache if you skip it). Most heavy users cycle caffeine with 1–2 day breaks per week, or do a periodic 1-week deload every 2–3 months to reset sensitivity. You can keep L-theanine going through the deload — it's the caffeine that needs the reset."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between this and just drinking tea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brewed tea contains both compounds naturally — a strong cup of black tea has roughly 40–70 mg caffeine and 15–40 mg L-theanine, depending on cultivar and steep time. That's much less L-theanine than the studied 1:2 stack dose, and the ratio in tea is closer to 1:0.5 — not enough theanine to fully blunt caffeine's anxiogenic edge. Tea is calmer than coffee because of theanine, but a 1:2 supplement stack delivers the synergy at research-protocol doses. Tea is a habit; the supplement is a targeted dose."
      }
    },
    {
      "@type": "Question",
      "name": "Can I take L-theanine alone to 'cancel' jitter from coffee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and this is one of the most practical uses of standalone L-theanine. 100–200 mg taken alongside a normal cup of coffee meaningfully reduces caffeine-induced anxiety, racing thoughts, and the cardiovascular stimulation effect, without dampening the alertness. If you don't want to swap your coffee habit but want the synergy benefit, this is the lowest-friction protocol. Many users keep L-theanine capsules next to the coffee maker for exactly this reason."
      }
    },
    {
      "@type": "Question",
      "name": "Best timing for cognitive work vs training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cognitive work: 30–60 minutes before sustained-attention tasks. Effects build over the first hour and last 3–4 hours of clean focus before tapering. Training: 30–60 minutes pre-workout for the alertness + reduced perceived exertion effect. Caffeine has well-established acute exercise performance benefits; L-theanine doesn't add to the physical performance side, but it does smooth the heart rate and anxiety bump that high pre-workout caffeine doses produce. Either way, cut off the dose by mid-afternoon to protect sleep."
      }
    },
    {
      "@type": "Question",
      "name": "Does L-theanine work for caffeine-induced anxiety?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and the evidence on this specific use is among the most replicated findings in the L-theanine literature. Haskell 2008 and Owen 2008 both documented that the combination produces measurably less subjective tension/anxiety than caffeine alone at matched caffeine doses. The mechanism appears to be a combination of GABA modulation, alpha-wave promotion, and direct attenuation of caffeine-mediated sympathetic activation. If caffeine makes you anxious, theanine is the most evidence-backed intervention short of dose reduction."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack this with Semax or other nootropics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and Semax is mechanistically the natural peptide bridge from this stack. Caffeine raises arousal and dopamine availability; L-theanine smooths the curve via GABA and alpha-wave modulation; Semax adds BDNF-mediated neurotrophic signaling on top. The three operate on different pathways, so the combined effect tends to layer rather than overlap. Other supplement nootropics (Alpha-GPC for cholinergic substrate, Lion's Mane for BDNF/NGF, Bacopa for long-term memory consolidation) also stack cleanly. Introduce one variable at a time so you can tell what's actually doing what."
      }
    },
    {
      "@type": "Question",
      "name": "Will this affect my sleep if I take it in the afternoon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The caffeine half will — even at 100 mg, caffeine has a half-life of roughly 5–6 hours in most adults (longer in slow metabolizers; shorter in some pregnancies and in heavy smokers). A 2 p.m. dose still has measurable caffeine in your system at 8 p.m. The L-theanine half is sleep-neutral and may even slightly aid sleep onset at higher doses. Practical rule: stop caffeine by 12 p.m. if you're sensitive, 2 p.m. if you're average, never later than 4 p.m. unless you've validated that you metabolize caffeine fast."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Caffeine + L-Theanine: Why This 1:2 Stack Beats Coffee Alone",
  "description": "Caffeine + L-Theanine dosing (1:2 ratio), mechanism, and the synergy research showing this stack outperforms caffeine alone — without the jitter bump.",
  "url": "https://profpeptide.com/supplements/caffeine-l-theanine",
  "datePublished": "2026-04-07T00:00:00Z",
  "dateModified": "2026-05-24T00:00:00Z",
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
    { "@type": "ListItem", "position": 3, "name": "Caffeine + L-Theanine" }
  ]
};

export default function CaffeineLTheaninePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Caffeine + L-Theanine</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
        <span className="tag">Performance &amp; Energy</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 24, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Smart caffeine, the focus stack, caffeine+theanine, &ldquo;tea-like&rdquo; stack
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Stimulant + amino acid stack (adenosine receptor antagonist + alpha-wave / GABA modulator)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Component supplements:</span>{" "}
          <Link href="/supplements/caffeine" className="text-[#0891b2] hover:underline">Caffeine</Link>
          {" + "}
          <Link href="/supplements/l-theanine" className="text-[#0891b2] hover:underline">L-Theanine</Link>{" "}
          (canonical 1:2 ratio, ~100 mg caffeine + 200 mg L-theanine)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Strong — multiple double-blind crossover RCTs (Owen 2008, Haskell 2008, Giesbrecht 2010, Einother 2010) independently replicate the synergy on attention switching, executive control, reaction time, and anxiety mitigation; meta-analysis support (Camfield 2014)
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is the Caffeine + L-Theanine stack?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Caffeine + L-Theanine is one of the most extensively researched cognitive supplement stacks in existence — and one of the few where the synergy between two compounds is demonstrably better than either compound alone in published RCTs.{" "}
            <Link href="/supplements/caffeine" className="text-[#0891b2] hover:underline">Caffeine</Link>{" "}
            is the world&apos;s most-used psychoactive compound, an adenosine receptor antagonist that drives alertness, faster reaction times, and reduced perception of fatigue.{" "}
            <Link href="/supplements/l-theanine" className="text-[#0891b2] hover:underline">L-theanine</Link>{" "}
            is an amino acid found almost exclusively in tea leaves (Camellia sinensis) that promotes alpha-wave activity and modulates GABA, producing calm focus without sedation. Combined at the canonical 1:2 ratio (~100 mg caffeine + 200 mg L-theanine), they produce the alertness and executive-control benefit of caffeine, minus most of its anxiety, jitter, and cardiovascular edge. This is the neurochemical reason tea feels calmer than coffee — and the protocol most biohackers settle on once they&apos;ve experimented past coffee alone.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Focused alertness without the jitter, anxiety, or BP bump of caffeine alone (RCT-documented)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Significantly improved attention switching and executive control vs caffeine alone (Owen 2008, Einother 2010)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Faster reaction times and better word recognition under cognitive load (Haskell 2008)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sustained focus through demanding tasks (3–4+ hours of clean window)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Smoother &ldquo;caffeine taper&rdquo; on the back end — less crash</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced caffeine-induced anxiety and subjective tension (significant in multiple RCTs)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Compatible with daily use; ratio adjustable for individual caffeine tolerance</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> Canonical 1:2 ratio — 100 mg caffeine + 200 mg L-theanine — taken 30–60 minutes before sustained-attention tasks. The published dose range spans 1:1 to 1:4; the 1:2 protocol is the most-replicated. Light starting dose: 50 mg caffeine + 100 mg L-theanine. High-tolerance: 200 mg caffeine + 400 mg L-theanine.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Available over-the-counter as combined capsules or separate caffeine tablets + L-theanine capsules. Quality varies — review the quality-markers checklist in the Where to Buy section below before purchasing.{" "}
            <a href="https://www.amazon.com/s?k=caffeine+l-theanine&tag=profpeptide-20" target="_blank" rel="sponsored nofollow noopener noreferrer" className="font-semibold text-[#0891b2] hover:underline">Shop Caffeine + L-Theanine on Amazon &rarr;</a>
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
        {["Cognitive Stack", "1:2 Ratio", "Synergy", "Alpha Waves", "Focus", "Anxiety Mitigation"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/caffeine" className="text-sm font-medium text-[#0891b2] hover:underline">Caffeine</Link>
          <Link href="/supplements/l-theanine" className="text-sm font-medium text-[#0891b2] hover:underline">L-Theanine</Link>
          <Link href="/supplements/alpha-gpc" className="text-sm font-medium text-[#0891b2] hover:underline">Alpha-GPC</Link>
          <Link href="/supplements/lions-mane" className="text-sm font-medium text-[#0891b2] hover:underline">Lion&apos;s Mane</Link>
          <Link href="/supplements/bacopa-monnieri" className="text-sm font-medium text-[#0891b2] hover:underline">Bacopa Monnieri</Link>
          <Link href="/supplements/rhodiola-rosea" className="text-sm font-medium text-[#0891b2] hover:underline">Rhodiola Rosea</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Caffeine + L-Theanine" pagePath="/supplements/caffeine-l-theanine" />
    </div>
    </>
  );
}
