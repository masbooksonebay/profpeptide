const INLINE = "w-[1.1em] h-[1.1em] inline-block align-[-0.15em]";
const BLOCK = "w-6 h-6";

const icons: Record<string, React.ReactNode> = {
  /* ── Category icons (Ionicons outline, viewBox 512) ── */
  "flame-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={INLINE}>
      <path d="M112,320c0-93,124-165,96-272,66,0,192,96,192,272a144,144,0,0,1-288,0Z" />
      <path d="M320,368c0,57.71-32,80-64,80s-64-22.29-64-80,40-86,32-128C266,240,320,310.29,320,368Z" />
    </svg>
  ),
  "medical-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={INLINE}>
      <path d="M429.93,174.27l-16.47-28.59a15.49,15.49,0,0,0-21.15-5.7l-98.39,57a4,4,0,0,1-6-3.5L288,80a16,16,0,0,0-16-16H240a16,16,0,0,0-16,16l.07,113.57a4,4,0,0,1-6,3.5l-98.39-57a15.49,15.49,0,0,0-21.15,5.7L82.07,174.37a15.42,15.42,0,0,0,5.69,21.1l98.49,57.08a4,4,0,0,1,0,6.9L87.76,316.53a15.54,15.54,0,0,0-5.69,21.1l16.47,28.59a15.49,15.49,0,0,0,21.15,5.7l98.39-57a4,4,0,0,1,6,3.5L224,432a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16l-.07-113.67a4,4,0,0,1,6-3.5l98.39,57a15.49,15.49,0,0,0,21.15-5.7l16.47-28.59a15.42,15.42,0,0,0-5.69-21.1l-98.49-57.08a4,4,0,0,1,0-6.9l98.49-57.08A15.51,15.51,0,0,0,429.93,174.27Z" />
    </svg>
  ),
  "flash-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={INLINE}>
      <path d="M315.27,33,96,304H224L192.49,477.23a2.36,2.36,0,0,0,2.33,2.77h0a2.36,2.36,0,0,0,1.89-.95L416,208H288L319.66,34.75A2.45,2.45,0,0,0,317.22,32h0A2.42,2.42,0,0,0,315.27,33Z" />
    </svg>
  ),
  "trending-up-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={INLINE}>
      <polyline points="352 144 464 144 464 256" />
      <path d="M48,368,169.37,246.63a32,32,0,0,1,45.26,0l50.74,50.74a32,32,0,0,0,45.26,0L448,160" />
    </svg>
  ),
  "bulb-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={INLINE}>
      <path d="M304,384V360c0-29,31.54-56.43,52-76,28.84-27.57,44-64.61,44-108,0-80-63.73-144-144-144A143.6,143.6,0,0,0,112,176c0,41.84,15.81,81.39,44,108,20.35,19.21,52,46.7,52,76v24" />
      <line x1="224" y1="480" x2="288" y2="480" />
      <line x1="208" y1="432" x2="304" y2="432" />
      <line x1="256" y1="384" x2="256" y2="256" />
      <path d="M294,240s-21.51,16-38,16-38-16-38-16" />
    </svg>
  ),
  "sparkles-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={INLINE}>
      <path d="M259.92,262.91,216.4,149.77a9,9,0,0,0-16.8,0L156.08,262.91a9,9,0,0,1-5.17,5.17L37.77,311.6a9,9,0,0,0,0,16.8l113.14,43.52a9,9,0,0,1,5.17,5.17L199.6,490.23a9,9,0,0,0,16.8,0l43.52-113.14a9,9,0,0,1,5.17-5.17L378.23,328.4a9,9,0,0,0,0-16.8L265.09,268.08A9,9,0,0,1,259.92,262.91Z" />
      <polygon points="108 68 88 16 68 68 16 88 68 108 88 160 108 108 160 88 108 68" />
      <polygon points="426.67 117.33 400 48 373.33 117.33 304 144 373.33 170.67 400 240 426.67 170.67 496 144 426.67 117.33" />
    </svg>
  ),
  "shield-checkmark-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={INLINE}>
      <polyline points="336 176 225.2 304 176 255.8" />
      <path d="M463.1,112.37C373.68,96.33,336.71,84.45,256,48,175.29,84.45,138.32,96.33,48.9,112.37,32.7,369.13,240.58,457.79,256,464,271.42,457.79,479.3,369.13,463.1,112.37Z" />
    </svg>
  ),
  "infinite-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeMiterlimit={10} className={INLINE}>
      <path d="M256,256s-48-96-126-96c-54.12,0-98,43-98,96s43.88,96,98,96c37.51,0,71-22.41,94-48" />
      <path d="M256,256s48,96,126,96c54.12,0,98-43,98-96s-43.88-96-98-96c-37.51,0-71,22.41-94,48" />
    </svg>
  ),
  "heart-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={INLINE}>
      <path d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z" />
    </svg>
  ),

  /* ── Feature / section icons (Ionicons outline, viewBox 512) ── */
  "flask-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeMiterlimit={10} className={BLOCK}>
      <line x1="176" y1="48" x2="336" y2="48" />
      <line x1="118" y1="304" x2="394" y2="304" />
      <path d="M208,48v93.48a64.09,64.09,0,0,1-9.88,34.18L73.21,373.49C48.4,412.78,76.63,464,123.08,464H388.92c46.45,0,74.68-51.22,49.87-90.51L313.87,175.66A64.09,64.09,0,0,1,304,141.48V48" />
    </svg>
  ),
  "bag-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={BLOCK}>
      <path d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z" />
      <path d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32" />
    </svg>
  ),
  "calculator-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={BLOCK}>
      <rect x="112" y="48" width="288" height="416" rx="32" ry="32" />
      <rect x="160.01" y="112" width="191.99" height="64" />
      <circle cx="168" cy="248" r="24" fill="currentColor" stroke="none" />
      <circle cx="256" cy="248" r="24" fill="currentColor" stroke="none" />
      <circle cx="344" cy="248" r="24" fill="currentColor" stroke="none" />
      <circle cx="168" cy="328" r="24" fill="currentColor" stroke="none" />
      <circle cx="256" cy="328" r="24" fill="currentColor" stroke="none" />
      <circle cx="168" cy="408" r="24" fill="currentColor" stroke="none" />
      <circle cx="256" cy="408" r="24" fill="currentColor" stroke="none" />
      <rect x="320" y="304" width="48" height="128" rx="24" ry="24" fill="currentColor" stroke="none" />
    </svg>
  ),
  "pricetag-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={BLOCK}>
      <path d="M435.25,48H312.35a14.46,14.46,0,0,0-10.2,4.2L56.45,297.9a28.85,28.85,0,0,0,0,40.7l117,117a28.85,28.85,0,0,0,40.7,0L459.75,210a14.46,14.46,0,0,0,4.2-10.2V76.8A28.66,28.66,0,0,0,435.25,48Z" />
      <path d="M384,160a32,32,0,1,1,32-32A32,32,0,0,1,384,160Z" fill="currentColor" stroke="none" />
    </svg>
  ),
  "book-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={BLOCK}>
      <path d="M256,160c16-63.16,76.43-95.41,208-96a15.94,15.94,0,0,1,16,16V368a16,16,0,0,1-16,16c-128,0-177.45,25.81-208,64-30.37-38-80-64-208-64-9.88,0-16-8.05-16-17.93V80A15.94,15.94,0,0,1,48,64C179.57,64.59,240,96.84,256,160Z" />
      <line x1="256" y1="160" x2="256" y2="448" />
    </svg>
  ),
  "help-circle-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeMiterlimit={10} className={BLOCK}>
      <path d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z" />
      <path d="M200,202.29s.84-17.5,19.57-32.57C230.68,160.77,244,158.18,256,158c10.93-.14,20.69,1.67,26.53,4.45,10,4.76,29.47,16.38,29.47,41.09,0,26-17,37.81-36.37,50.8S251,281.43,251,296" strokeWidth={28} strokeLinecap="round" />
      <circle cx="250" cy="348" r="20" fill="currentColor" stroke="none" />
    </svg>
  ),
  "phone-portrait-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={BLOCK}>
      <rect x="128" y="16" width="256" height="480" rx="48" ry="48" />
      <path d="M176,16h24a8,8,0,0,1,8,8h0a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16h0a8,8,0,0,1,8-8h24" />
    </svg>
  ),

  /* ── App page extra icons ── */
  "clipboard-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeMiterlimit={10} className={BLOCK}>
      <path d="M336,64h32a48,48,0,0,1,48,48V432a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V112a48,48,0,0,1,48-48h32" />
      <rect x="176" y="32" width="160" height="64" rx="26.13" ry="26.13" />
    </svg>
  ),
  "time-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} className={BLOCK}>
      <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" strokeMiterlimit={10} />
      <polyline points="256 128 256 272 352 272" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "lock-closed-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={BLOCK}>
      <path d="M336,208V113a80,80,0,0,0-160,0v95" />
      <rect x="96" y="208" width="320" height="272" rx="48" ry="48" />
    </svg>
  ),
  "chatbubble-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeMiterlimit={10} className={BLOCK}>
      <path d="M87.49,380c1.19-4.38-1.44-10.47-3.95-14.86A44.86,44.86,0,0,0,81,361.34a199.81,199.81,0,0,1-33-110C47.65,139.09,140.73,48,255.83,48,356.21,48,440,117.54,459.58,209.85A199,199,0,0,1,464,251.49c0,112.41-89.49,204.93-204.59,204.93-18.3,0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09,31.09,0,0,0-11.12-2.07,30.71,30.71,0,0,0-12.09,2.43L81.51,462.78A16,16,0,0,1,76.84,464a9.6,9.6,0,0,1-9.57-9.74,15.85,15.85,0,0,1,.6-3.29Z" />
    </svg>
  ),

  /* ── FAQ section icons ── */
  "beaker-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" className={INLINE}>
      <path d="M445.2,48.05,398,48H128C73.7,48,64,83.7,64,96c30.3,4.2,48,8,48,40V400A64,64,0,0,0,176,464H368a64,64,0,0,0,64-64V96c0-19,11.5-38.35,12.6-40,1.2-1.9,3.4-4.4,3.4-5.5S447.7,48.05,445.2,48.05Z" />
      <line x1="112" y1="176" x2="432" y2="176" />
    </svg>
  ),
  "search-outline": (
    <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth={32} strokeMiterlimit={10} className={INLINE}>
      <path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z" />
      <line x1="338.29" y1="338.29" x2="448" y2="448" strokeLinecap="round" />
    </svg>
  ),
};

// Map category names to icon keys
const categoryMap: Record<string, string> = {
  "Metabolic & Weight Loss": "flame-outline",
  "Recovery & Tissue Repair": "medical-outline",
  "Performance & Energy": "flash-outline",
  "Growth Hormone": "trending-up-outline",
  "Growth Hormone Support": "trending-up-outline",
  "Cognitive & Nootropic": "bulb-outline",
  "Skin Health & Anti-Aging": "sparkles-outline",
  "Gut Health & Immunity": "shield-checkmark-outline",
  "Longevity": "infinite-outline",
  "Sexual Health": "heart-outline",
};

export function CategoryIcon({ name, className }: { name: string; className?: string }) {
  const key = categoryMap[name];
  const icon = key ? icons[key] : null;
  if (!icon) return null;
  return <span className={`text-[#0891b2] ${className ?? ""}`}>{icon}</span>;
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const icon = icons[name];
  if (!icon) return null;
  return <span className={className}>{icon}</span>;
}

export { categoryMap };
export default icons;
