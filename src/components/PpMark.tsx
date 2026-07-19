// Prof. Peptide "Pp" brand mark — the potrace-traced app icon (letterforms as
// PATHS, not CSS text, so they can never overflow). Inline (not an <img>) so the
// tile interior can swap navy by theme: #0f172a in light (matches the app icon /
// favicon) and #1e2d3d in dark, where the header itself is #0f172a and a #0f172a
// tile would dissolve. Cyan #3A759F border and #f0f4f8 letters stay constant.
export default function PpMark({
  className,
  style,
  interior,
}: {
  className?: string;
  style?: React.CSSProperties;
  /** Force the tile interior color (bypasses the theme swap). Used by the dev
   *  comparison swatches; the header omits it and gets the light/dark swap. */
  interior?: string;
}) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className={className}
      style={style}
      role="img"
      aria-label="Prof. Peptide"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rounded tile: themeable navy interior + brand-cyan border (~3px at 56px).
          Interior swaps #0f172a (light) / #1e2d3d (dark) unless `interior` forces it. */}
      <rect
        x="30" y="30" width="964" height="964" rx="145" ry="145"
        className={interior ? undefined : "fill-[#0f172a] dark:fill-[#1e2d3d]"}
        fill={interior}
        stroke="#3A759F" strokeWidth="60"
      />
      {/* "Pp" letterforms (traced), off-white. */}
      <g transform="translate(512,512) scale(1.65644) translate(-519.5,-521.5)">
        <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)" fill="#f0f4f8">
          <path d="M2750 5435 l0 -1505 300 0 300 0 0 569 0 568 388 6 c541 8 668 26 850 123 170 89 284 207 368 379 65 135 87 243 87 440 0 302 -70 491 -248 670 -88 89 -167 141 -275 181 -164 62 -355 74 -1172 74 l-598 0 0 -1505z m1248 985 c205 -21 322 -93 391 -240 23 -49 26 -67 26 -170 0 -104 -3 -120 -27 -173 -34 -72 -65 -111 -130 -160 -101 -75 -244 -97 -649 -97 l-259 0 0 425 0 425 274 0 c151 0 319 -5 374 -10z M6625 6161 c-193 -31 -384 -143 -508 -297 l-52 -66 -3 156 -3 156 -264 0 -265 0 0 -1505 0 -1505 285 0 285 0 0 540 0 541 94 -83 c52 -46 119 -98 150 -117 264 -159 597 -144 866 39 64 44 192 174 239 243 84 123 152 312 183 502 19 122 16 438 -6 560 -63 351 -230 602 -497 749 -133 72 -355 111 -504 87z m88 -471 c173 -54 293 -213 333 -441 21 -123 16 -408 -10 -519 -56 -236 -206 -384 -404 -397 -95 -7 -164 7 -245 50 -67 35 -159 129 -199 203 -91 168 -120 512 -63 736 75 289 329 448 588 368z" />
        </g>
      </g>
    </svg>
  );
}
