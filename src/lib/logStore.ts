// Local-only persistence for the Peptide Reconstitution Log.
// Everything lives in the browser's localStorage — no account, no server, no network.

import type { DoseUnit } from "./reconstitution";

export const STORAGE_KEY = "pp_log_v1";

export interface LogEntry {
  id: string;
  compound: string;
  vialMg: number;
  bacWaterMl: number;
  desiredDose: number;
  doseUnit: DoseUnit;
  reconstitutionDate: string; // YYYY-MM-DD
  notes?: string;
  source?: string;
  lot?: string;
  discardByDate?: string;
  createdAt: string; // ISO timestamp
}

export type NewLogEntry = Omit<LogEntry, "id" | "createdAt">;

function isBrowser(): boolean {
  return typeof window !== "undefined" && !!window.localStorage;
}

export function newId(): string {
  if (isBrowser() && typeof window.crypto?.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
}

export function getEntries(): LogEntry[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as LogEntry[]) : [];
  } catch {
    return [];
  }
}

function writeAll(entries: LogEntry[]): void {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function addEntry(entry: NewLogEntry): LogEntry {
  const full: LogEntry = { ...entry, id: newId(), createdAt: new Date().toISOString() };
  const entries = getEntries();
  entries.push(full);
  writeAll(entries);
  return full;
}

export function updateEntry(id: string, patch: Partial<NewLogEntry>): void {
  writeAll(getEntries().map((e) => (e.id === id ? { ...e, ...patch } : e)));
}

export function deleteEntry(id: string): void {
  writeAll(getEntries().filter((e) => e.id !== id));
}

export function clearAll(): void {
  if (!isBrowser()) return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export function replaceAll(entries: LogEntry[]): void {
  writeAll(entries);
}

// --- Export / import -------------------------------------------------------

export function toJSON(entries: LogEntry[]): string {
  return JSON.stringify(entries, null, 2);
}

const CSV_COLUMNS: (keyof LogEntry)[] = [
  "compound", "vialMg", "bacWaterMl", "desiredDose", "doseUnit",
  "reconstitutionDate", "notes", "source", "lot", "discardByDate",
  "createdAt", "id",
];

function csvCell(value: unknown): string {
  const s = value == null ? "" : String(value);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function toCSV(entries: LogEntry[]): string {
  const header = CSV_COLUMNS.join(",");
  const rows = entries.map((e) => CSV_COLUMNS.map((c) => csvCell(e[c])).join(","));
  return [header, ...rows].join("\r\n");
}

/** Parse imported JSON back into entries; throws on malformed input. */
export function parseImport(json: string): LogEntry[] {
  const data = JSON.parse(json);
  if (!Array.isArray(data)) throw new Error("Expected a JSON array of log entries.");
  return data.map((raw) => {
    const e = (raw ?? {}) as Partial<LogEntry>;
    if (typeof e.compound !== "string" || typeof e.vialMg !== "number") {
      throw new Error("Malformed entry: each entry needs at least a compound and vialMg.");
    }
    return {
      id: typeof e.id === "string" ? e.id : newId(),
      compound: e.compound,
      vialMg: e.vialMg,
      bacWaterMl: Number(e.bacWaterMl) || 0,
      desiredDose: Number(e.desiredDose) || 0,
      doseUnit: e.doseUnit === "mg" ? "mg" : "mcg",
      reconstitutionDate: typeof e.reconstitutionDate === "string" ? e.reconstitutionDate : "",
      notes: typeof e.notes === "string" ? e.notes : undefined,
      source: typeof e.source === "string" ? e.source : undefined,
      lot: typeof e.lot === "string" ? e.lot : undefined,
      discardByDate: typeof e.discardByDate === "string" ? e.discardByDate : undefined,
      createdAt: typeof e.createdAt === "string" ? e.createdAt : new Date().toISOString(),
    } as LogEntry;
  });
}
