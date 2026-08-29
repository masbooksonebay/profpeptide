// Splits chat answer text into plain-text and link segments, so the widget can render Prof. Peptide
// URLs as clickable links. Pure and import-free — it can be transpiled and run directly by a plain
// node test (scripts/test-chat-linkify.mjs), matching this repo's no-test-framework convention.
//
// 🔒 WHY THIS EXISTS RATHER THAN A MARKDOWN/HTML RENDERER
// The chat answer is MODEL OUTPUT, and retrieved page content flows through the model on its way
// there. Rendering it as HTML or markdown would let a crafted page emit a link pointing anywhere —
// the classic injection path. So this never parses markup and never produces markup: it scans the
// already-plain text for URLs on a STRICT ALLOWLIST and returns data the widget maps to React
// elements. There is no dangerouslySetInnerHTML anywhere in this feature, by construction.
//
// 🔒 THE ACTUAL GUARANTEE IS THE REBUILT HREF, NOT THE REGEX
// The matched text is NEVER used as the href. The href is rebuilt as PP_ORIGIN + a path validated
// against a character whitelist, so even a match this regex was never meant to make can only ever
// produce a link to profpeptide.com. The regex narrows what gets linked; the rebuild bounds where a
// link can point. Two independent controls, because one regex is a single point of failure.
//
// Every other domain — janoshik.com, finnrick.com, vendor sites — stays plain text. The allowlist
// is PP only, deliberately: we cannot vouch for a URL the model produced for anywhere else.

const PP_ORIGIN = "https://profpeptide.com";

/** Host, optional scheme, optional www, optional path. The `(?![\w.-])` stops "profpeptide.com" from
 *  matching inside a longer host like "profpeptide.com.evil.example". Path chars are an explicit
 *  whitelist (RFC 3986 minus quotes/backslash/angle brackets), never ".*". */
const PP_URL_RE = /(?:https?:\/\/)?(?:www\.)?profpeptide\.com(?![\w.-])([/?#][A-Za-z0-9\-._~%/?#=&+,:;!$'()*@[\]]*)?/gi;

/** Chars that end a sentence rather than a URL. Stripped from the END of a match so "…/bpc-157."
 *  links to /bpc-157 and leaves the period as text. Closing brackets are handled separately —
 *  they're only stripped when unbalanced, so a genuinely parenthesised path segment survives. */
const TRAILING_PUNCT = ".,;:!?'\"";

export interface LinkifySegment {
  type: "text" | "link";
  /** For "text": the literal text. For "link": the label to display (what the model wrote). */
  value: string;
  /** Only on "link" segments. Always rebuilt from PP_ORIGIN — never the raw matched text. */
  href?: string;
}

/** Strips sentence punctuation and unbalanced closers from the end of a matched URL, returning how
 *  many characters to give back to the surrounding text. */
function trailingNoiseLength(match: string): number {
  let end = match.length;
  for (;;) {
    const ch = match.charAt(end - 1);
    if (end > 0 && TRAILING_PUNCT.indexOf(ch) !== -1) {
      end -= 1;
      continue;
    }
    // A closing bracket belongs to the URL only if the URL opened it. "(see profpeptide.com/x)"
    // gives the ")" back; "/x(y)" keeps it.
    if (end > 0 && (ch === ")" || ch === "]")) {
      const open = ch === ")" ? "(" : "[";
      const head = match.slice(0, end);
      let depth = 0;
      for (let i = 0; i < head.length; i += 1) {
        if (head.charAt(i) === open) depth += 1;
        else if (head.charAt(i) === ch) depth -= 1;
      }
      if (depth < 0) {
        end -= 1;
        continue;
      }
    }
    break;
  }
  return match.length - end;
}

/** True when the character before a match makes it part of a longer token — "notprofpeptide.com",
 *  "sub.profpeptide.com", "a-profpeptide.com", "user@profpeptide.com". Those are NOT linked: they
 *  are not the host we vouch for, and silently retargeting them to the bare origin would be a lie
 *  about what the text says. */
function precededByHostChar(text: string, index: number): boolean {
  if (index === 0) return false;
  const prev = text.charAt(index - 1);
  return /[\w.\-@]/.test(prev);
}

export function linkifyPpUrls(text: string): LinkifySegment[] {
  const segments: LinkifySegment[] = [];
  if (!text) return segments;

  // A fresh regex per call: PP_URL_RE is /g and therefore stateful (lastIndex), and this runs on
  // every render during streaming — a shared instance would skip matches on alternate calls.
  const re = new RegExp(PP_URL_RE.source, "gi");
  let cursor = 0;
  let m: RegExpExecArray | null = re.exec(text);

  while (m) {
    const start = m.index;
    const raw = m[0];

    if (precededByHostChar(text, start)) {
      // Not a link — leave it for the text run and keep scanning after it.
      re.lastIndex = start + raw.length;
      m = re.exec(text);
      continue;
    }

    const keep = raw.length - trailingNoiseLength(raw);
    const label = raw.slice(0, keep);
    // Scheme/host are discarded; only the path is carried over, onto a fixed origin.
    const pathMatch = /profpeptide\.com([/?#].*)?$/i.exec(label);
    const path = pathMatch && pathMatch[1] ? pathMatch[1] : "";

    if (start > cursor) segments.push({ type: "text", value: text.slice(cursor, start) });
    segments.push({ type: "link", value: label, href: PP_ORIGIN + path });

    cursor = start + keep;
    re.lastIndex = cursor;
    m = re.exec(text);
  }

  if (cursor < text.length) segments.push({ type: "text", value: text.slice(cursor) });
  return segments;
}
