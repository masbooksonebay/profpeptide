"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { computeReconstitution, type DoseUnit } from "@/lib/reconstitution";
import { mgDefaultFor } from "@/data/compounds";
import CompoundCombobox from "@/components/CompoundCombobox";
import {
  type LogEntry,
  getEntries,
  addEntry,
  updateEntry,
  deleteEntry,
  clearAll,
  replaceAll,
  toJSON,
  toCSV,
  parseImport,
} from "@/lib/logStore";

const inputCls =
  "w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-slate-600 text-sm text-gray-800 dark:text-slate-200 placeholder-gray-400 dark:placeholder-slate-500 bg-gray-50 dark:bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#3A759F] transition";
const labelCls = "block text-sm font-medium mb-1.5 text-[#16181B] dark:text-slate-200";
const cardCls =
  "bg-white dark:bg-[#1e293b] border border-[#D9DEE4] dark:border-slate-700 rounded-xl p-6 shadow-sm";

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function download(filename: string, content: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const emptyForm = {
  compound: "",
  vialMg: "",
  bacWaterMl: "",
  desiredDose: "",
  doseUnit: "mcg" as DoseUnit,
  reconstitutionDate: "",
  notes: "",
  source: "",
  lot: "",
  discardByDate: "",
};

type FormState = typeof emptyForm;

export default function LogPage() {
  const [mounted, setMounted] = useState(false);
  const [entries, setEntries] = useState<LogEntry[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [flash, setFlash] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);

  // Load saved entries + default date only on the client (avoids hydration mismatch).
  useEffect(() => {
    setEntries(getEntries());
    setForm((f) => ({ ...f, reconstitutionDate: f.reconstitutionDate || todayStr() }));
    setMounted(true);
  }, []);

  const refresh = () => setEntries(getEntries());
  const set = (k: keyof FormState, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onCompoundChange = (v: string) => {
    setForm((f) => ({
      ...f,
      compound: v,
      doseUnit: mgDefaultFor(v) ? "mg" : f.doseUnit,
    }));
  };

  const flashMsg = (m: string) => {
    setFlash(m);
    window.setTimeout(() => setFlash(""), 3000);
  };

  // Live-computed results from current form values (derived, never stored).
  const live = computeReconstitution({
    vialMg: parseFloat(form.vialMg),
    bacWaterMl: parseFloat(form.bacWaterMl),
    dose: parseFloat(form.desiredDose),
    doseUnit: form.doseUnit,
  });

  const canSave =
    form.compound.trim().length > 0 &&
    parseFloat(form.vialMg) > 0 &&
    parseFloat(form.bacWaterMl) > 0 &&
    parseFloat(form.desiredDose) > 0;

  const resetForm = () => {
    setForm({ ...emptyForm, reconstitutionDate: todayStr() });
    setEditingId(null);
  };

  const handleSave = () => {
    if (!canSave) return;
    const payload = {
      compound: form.compound.trim(),
      vialMg: parseFloat(form.vialMg),
      bacWaterMl: parseFloat(form.bacWaterMl),
      desiredDose: parseFloat(form.desiredDose),
      doseUnit: form.doseUnit,
      reconstitutionDate: form.reconstitutionDate || todayStr(),
      notes: form.notes.trim() || undefined,
      source: form.source.trim() || undefined,
      lot: form.lot.trim() || undefined,
      discardByDate: form.discardByDate || undefined,
    };
    if (editingId) {
      updateEntry(editingId, payload);
      flashMsg("Entry updated.");
    } else {
      addEntry(payload);
      flashMsg("Saved to log.");
    }
    refresh();
    resetForm();
  };

  const handleEdit = (e: LogEntry) => {
    setEditingId(e.id);
    setForm({
      compound: e.compound,
      vialMg: String(e.vialMg),
      bacWaterMl: String(e.bacWaterMl),
      desiredDose: String(e.desiredDose),
      doseUnit: e.doseUnit,
      reconstitutionDate: e.reconstitutionDate || todayStr(),
      notes: e.notes ?? "",
      source: e.source ?? "",
      lot: e.lot ?? "",
      discardByDate: e.discardByDate ?? "",
    });
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (e: LogEntry) => {
    if (!window.confirm(`Delete the log entry for "${e.compound}"? This cannot be undone.`)) return;
    deleteEntry(e.id);
    if (editingId === e.id) resetForm();
    refresh();
  };

  const handleClearAll = () => {
    if (entries.length === 0) return;
    if (!window.confirm(`Delete all ${entries.length} log entries? This cannot be undone.`)) return;
    clearAll();
    resetForm();
    refresh();
    flashMsg("All entries cleared.");
  };

  const handleExportJSON = () => download("peptide-log.json", toJSON(getEntries()), "application/json");
  const handleExportCSV = () => download("peptide-log.csv", toCSV(getEntries()), "text/csv");

  const handleImport = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = parseImport(String(reader.result));
        const current = getEntries();
        const byId = new Map(current.map((e) => [e.id, e] as const));
        for (const e of imported) byId.set(e.id, e); // merge by id (restore-safe)
        replaceAll(Array.from(byId.values()));
        refresh();
        flashMsg(`Imported ${imported.length} ${imported.length === 1 ? "entry" : "entries"}.`);
      } catch (err) {
        flashMsg(`Import failed: ${err instanceof Error ? err.message : "invalid file"}`);
      }
      if (fileRef.current) fileRef.current.value = "";
    };
    reader.readAsText(file);
  };

  const sorted = [...entries].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <main className="bg-white dark:bg-[#0f172a] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">

        {/* Header */}
        <div className="mb-8">
          <span className="tag mb-4 inline-block">Tracker</span>
          <h1
            className="text-3xl sm:text-4xl font-semibold mb-3 text-[#16181B] dark:text-slate-100"
            style={{ letterSpacing: "-0.02em" }}
          >
            Peptide Protocol Log
          </h1>
          <p className="text-gray-500 dark:text-slate-400 text-base max-w-xl">
            Keep a running record of your reconstituted vials — compound, BAC water volume,
            concentration, draw volume, and syringe units — alongside source, lot, and
            discard-by dates. Uses the same math as the{" "}
            <Link href="/calculator" className="text-[#3A759F] hover:underline">reconstitution calculator</Link>.
          </p>
        </div>

        {/* Full protocol tracking lives in the iOS app */}
        <div className="mb-8 rounded-xl px-5 py-4 bg-[#3A759F]/10 border border-[#3A759F]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#16181B] dark:text-slate-100">
              Full protocol tracking is in the Prof. Peptide iOS app
            </p>
            <p className="text-sm text-gray-600 dark:text-slate-300 mt-0.5">
              Log doses, see estimated levels, and run protocols on the go. This web log keeps your reconstitution records on this device.
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-3">
            <Link href="/app" className="btn-outline text-sm whitespace-nowrap">Learn more</Link>
            <a
              href="https://apps.apple.com/app/prof-peptide/id6761995269"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm whitespace-nowrap"
            >
              Download on the App Store
            </a>
          </div>
        </div>

        {/* Privacy microcopy */}
        <div className="mb-8 rounded-lg px-4 py-3 bg-[#3A759F]/10 border border-[#3A759F]/20 text-sm text-[#16181B] dark:text-slate-200">
          Your log is saved on this device only — no account needed, and nothing leaves your browser. Cross-device sync is coming soon. For now, use Export to back up your log or move it to another device.
        </div>

        {flash && (
          <div className="mb-6 rounded-md px-4 py-2.5 text-sm bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 text-green-700 dark:text-green-300">
            {flash}
          </div>
        )}

        {/* Form + live results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className={cardCls}>
            <h2 className="text-lg font-semibold mb-6 text-[#16181B] dark:text-slate-100">
              {editingId ? "Edit Entry" : "Add Entry"}
            </h2>

            <div className="space-y-5">
              <div>
                <label className={labelCls} htmlFor="compound">Compound</label>
                <CompoundCombobox
                  id="compound"
                  value={form.compound}
                  onChange={onCompoundChange}
                  placeholder="Search compounds — name or brand…"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls} htmlFor="vialMg">Vial Size (mg)</label>
                  <input id="vialMg" type="number" min="0" step="any" placeholder="e.g. 5"
                    value={form.vialMg} onChange={(e) => set("vialMg", e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="bacWaterMl">BAC Water (mL)</label>
                  <input id="bacWaterMl" type="number" min="0" step="any" placeholder="e.g. 2"
                    value={form.bacWaterMl} onChange={(e) => set("bacWaterMl", e.target.value)} className={inputCls} />
                </div>
              </div>

              <div>
                <label className={labelCls} htmlFor="desiredDose">Desired Dose</label>
                <div className="flex gap-2 items-center">
                  <input id="desiredDose" type="number" min="0" step="any"
                    placeholder={form.doseUnit === "mcg" ? "e.g. 250" : "e.g. 0.25"}
                    value={form.desiredDose} onChange={(e) => set("desiredDose", e.target.value)}
                    className={`flex-1 ${inputCls}`} />
                  <div className="flex rounded-md overflow-hidden border border-gray-300 dark:border-slate-600">
                    {(["mcg", "mg"] as DoseUnit[]).map((u) => (
                      <button key={u} type="button" onClick={() => set("doseUnit", u)}
                        className={`px-3.5 py-2.5 text-sm font-medium transition-colors ${
                          form.doseUnit === u
                            ? "bg-[#3A759F] text-white"
                            : "bg-gray-50 dark:bg-[#0f172a] text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700"
                        }`}>
                        {u}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls} htmlFor="reconDate">Reconstitution Date</label>
                  <input id="reconDate" type="date" value={form.reconstitutionDate}
                    onChange={(e) => set("reconstitutionDate", e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="discardBy">Discard By (optional)</label>
                  <input id="discardBy" type="date" value={form.discardByDate}
                    onChange={(e) => set("discardByDate", e.target.value)} className={inputCls} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls} htmlFor="source">Source (optional)</label>
                  <input id="source" type="text" placeholder="e.g. vendor name"
                    value={form.source} onChange={(e) => set("source", e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="lot">Lot / Batch (optional)</label>
                  <input id="lot" type="text" placeholder="e.g. A1234"
                    value={form.lot} onChange={(e) => set("lot", e.target.value)} className={inputCls} />
                </div>
              </div>

              <div>
                <label className={labelCls} htmlFor="notes">Notes (optional)</label>
                <textarea id="notes" rows={3} placeholder="Free-text notes"
                  value={form.notes} onChange={(e) => set("notes", e.target.value)}
                  className={`${inputCls} resize-y`} />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={handleSave} disabled={!canSave}
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed">
                {editingId ? "Update Entry" : "Save to Log"}
              </button>
              <button onClick={resetForm} className="btn-outline">
                {editingId ? "Cancel" : "Clear Form"}
              </button>
            </div>
          </div>

          {/* Live results */}
          <div className={`${cardCls} flex flex-col`}>
            <h2 className="text-lg font-semibold mb-6 text-[#16181B] dark:text-slate-100">
              Calculated Results
            </h2>
            {!live ? (
              <div className="flex-1 flex items-center justify-center min-h-[200px]">
                <p className="text-gray-400 dark:text-slate-500 text-sm text-center">
                  Enter vial size, BAC water, and dose to see concentration, draw volume, and syringe units.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="rounded-lg p-4 bg-[#3A759F]/10 border border-[#3A759F]/20">
                  <p className="text-xs font-medium uppercase tracking-wide mb-1 text-[#3A759F]">Concentration</p>
                  <p className="text-2xl font-semibold text-[#16181B] dark:text-slate-100">
                    {live.concentrationMcgPerMl.toFixed(2)}{" "}
                    <span className="text-base font-normal text-gray-500 dark:text-slate-400">mcg / mL</span>
                  </p>
                  <p className="text-sm text-gray-500 dark:text-slate-400 mt-0.5">
                    {live.concentrationMgPerMl.toFixed(3)} mg / mL
                  </p>
                </div>
                <div className="rounded-lg p-4 bg-[#3A759F]/10 border border-[#3A759F]/20">
                  <p className="text-xs font-medium uppercase tracking-wide mb-1 text-[#3A759F]">Draw Volume</p>
                  <p className="text-2xl font-semibold text-[#16181B] dark:text-slate-100">
                    {live.drawVolumeMl.toFixed(3)}{" "}
                    <span className="text-base font-normal text-gray-500 dark:text-slate-400">mL</span>
                  </p>
                </div>
                <div className="rounded-lg p-4 bg-[#3A759F]/10 border border-[#3A759F]/20">
                  <p className="text-xs font-medium uppercase tracking-wide mb-1 text-[#3A759F]">Insulin Syringe Units (U-100)</p>
                  <p className="text-2xl font-semibold text-[#16181B] dark:text-slate-100">
                    {live.syringeUnits.toFixed(1)}{" "}
                    <span className="text-base font-normal text-gray-500 dark:text-slate-400">units</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Saved entries */}
        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100">
              Saved Entries{mounted && entries.length > 0 ? ` (${entries.length})` : ""}
            </h2>
            <div className="flex flex-wrap gap-2">
              <button onClick={handleExportJSON} disabled={entries.length === 0}
                className="text-sm px-3 py-1.5 rounded-md border border-gray-300 dark:border-slate-600 text-gray-600 dark:text-slate-300 hover:border-[#3A759F] hover:text-[#3A759F] transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                Export JSON
              </button>
              <button onClick={handleExportCSV} disabled={entries.length === 0}
                className="text-sm px-3 py-1.5 rounded-md border border-gray-300 dark:border-slate-600 text-gray-600 dark:text-slate-300 hover:border-[#3A759F] hover:text-[#3A759F] transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                Export CSV
              </button>
              <button onClick={() => fileRef.current?.click()}
                className="text-sm px-3 py-1.5 rounded-md border border-gray-300 dark:border-slate-600 text-gray-600 dark:text-slate-300 hover:border-[#3A759F] hover:text-[#3A759F] transition-colors">
                Import JSON
              </button>
              <button onClick={handleClearAll} disabled={entries.length === 0}
                className="text-sm px-3 py-1.5 rounded-md border border-red-300 dark:border-red-700/60 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                Clear All
              </button>
              <input ref={fileRef} type="file" accept="application/json,.json" className="hidden"
                onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImport(f); }} />
            </div>
          </div>

          {!mounted ? null : sorted.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 dark:border-slate-700 p-10 text-center text-sm text-gray-400 dark:text-slate-500">
              No entries yet. Fill in the form above and click <strong>Save to Log</strong>.
            </div>
          ) : (
            <div className="space-y-3">
              {sorted.map((e) => {
                const r = computeReconstitution({
                  vialMg: e.vialMg, bacWaterMl: e.bacWaterMl, dose: e.desiredDose, doseUnit: e.doseUnit,
                });
                return (
                  <div key={e.id} className="bg-white dark:bg-[#1e293b] border border-[#D9DEE4] dark:border-slate-700 rounded-xl p-5 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-[#16181B] dark:text-slate-100">{e.compound}</h3>
                        <p className="text-sm text-gray-500 dark:text-slate-400 mt-0.5">
                          {e.vialMg} mg vial · {e.bacWaterMl} mL BAC · {e.desiredDose} {e.doseUnit} dose
                          {e.reconstitutionDate ? <> · reconstituted {e.reconstitutionDate}</> : null}
                        </p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <button onClick={() => handleEdit(e)}
                          className="text-sm px-3 py-1.5 rounded-md border border-gray-300 dark:border-slate-600 text-gray-600 dark:text-slate-300 hover:border-[#3A759F] hover:text-[#3A759F] transition-colors">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(e)}
                          className="text-sm px-3 py-1.5 rounded-md border border-red-300 dark:border-red-700/60 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                          Delete
                        </button>
                      </div>
                    </div>

                    {r && (
                      <div className="grid grid-cols-3 gap-3 mt-4">
                        <div className="rounded-lg p-3 bg-gray-50 dark:bg-[#0f172a] border border-gray-100 dark:border-slate-700">
                          <p className="text-[11px] font-medium uppercase tracking-wide text-[#3A759F]">Concentration</p>
                          <p className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mt-0.5">{r.concentrationMcgPerMl.toFixed(2)} mcg/mL</p>
                          <p className="text-[11px] text-gray-400 dark:text-slate-500">{r.concentrationMgPerMl.toFixed(3)} mg/mL</p>
                        </div>
                        <div className="rounded-lg p-3 bg-gray-50 dark:bg-[#0f172a] border border-gray-100 dark:border-slate-700">
                          <p className="text-[11px] font-medium uppercase tracking-wide text-[#3A759F]">Draw Volume</p>
                          <p className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mt-0.5">{r.drawVolumeMl.toFixed(3)} mL</p>
                        </div>
                        <div className="rounded-lg p-3 bg-gray-50 dark:bg-[#0f172a] border border-gray-100 dark:border-slate-700">
                          <p className="text-[11px] font-medium uppercase tracking-wide text-[#3A759F]">Syringe Units</p>
                          <p className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mt-0.5">{r.syringeUnits.toFixed(1)} U-100</p>
                        </div>
                      </div>
                    )}

                    {(e.source || e.lot || e.discardByDate || e.notes) && (
                      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-slate-700 text-sm text-gray-600 dark:text-slate-300 space-y-1">
                        {(e.source || e.lot || e.discardByDate) && (
                          <p className="text-xs text-gray-500 dark:text-slate-400">
                            {e.source ? <>Source: {e.source}</> : null}
                            {e.source && (e.lot || e.discardByDate) ? " · " : null}
                            {e.lot ? <>Lot: {e.lot}</> : null}
                            {e.lot && e.discardByDate ? " · " : null}
                            {e.discardByDate ? <>Discard by: {e.discardByDate}</> : null}
                          </p>
                        )}
                        {e.notes ? <p className="whitespace-pre-wrap">{e.notes}</p> : null}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Disclaimer — same language as the Calculator */}
        <p className="mt-10 text-xs text-gray-400 dark:text-slate-500 text-center max-w-2xl mx-auto leading-relaxed">
          For educational and research purposes only. Not medical advice. Not for human use.
          This tool only records what you enter — it does not recommend any dose, protocol, or schedule.
          Always verify calculations independently before use.
        </p>
      </div>
    </main>
  );
}
