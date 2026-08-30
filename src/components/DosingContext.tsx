// The one-line explanation of WHY a dosing section can carry both trial figures and community
// conventions without contradicting itself.
//
// WHY IT EXISTS: a reader who sees "the trials used 2 mg" beside "the community convention is twice
// weekly" reasonably assumes the site is endorsing both, or muddling them. It is doing neither —
// it labels them separately because they are different KINDS of fact, and reports rather than
// recommends either. That distinction is the whole editorial posture of the profile-audit work
// (fixes 2-5), and until now it was implicit in the wording and stated nowhere.
//
// WHY IT IS A COMPONENT: the disclaimer audit found 16 distinct hand-written disclaimer texts across
// 26 pages, and six label variants for one destination before the BackLink extraction. Inline text
// repeated across 60+ profiles drifts — reliably, on this codebase. One source, one edit forever.
//
// WHY IT SITS AT THE DOSING SECTION, not in the footer: it answers a misunderstanding formed at a
// specific point on the page. Footer boilerplate is skipped by exactly the reader who needs this.
//
// 🔒 NOT A LEGAL DISCLAIMER, and deliberately not styled like one. The amber RUO/medical-advice box
// (components/Disclaimer.tsx) is a separate thing serving a separate purpose; making this look the
// same would train readers to skip it along with the boilerplate. It is a quiet editorial note.
export default function DosingContext() {
  return (
    <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed border-l-2 border-[#D9DEE4] dark:border-slate-700 pl-3 mb-4">
      Prof. Peptide reports what trials established and what research communities practice, labelled
      separately. Neither is a recommendation.
    </p>
  );
}
