import { motion } from "framer-motion";

/**
 * Line-art hero graphic: gimbal-mounted cinema camera inside a rotating
 * aperture ring, a hovering drone and a curling film strip. Pure SVG so it
 * stays crisp at any size and picks up the gold/ember palette.
 */
export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 600 700"
      role="img"
      aria-label="Illustration of a cinema camera on a gimbal with a drone and film strip"
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="hi-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5C451" />
          <stop offset="55%" stopColor="#E8B23A" />
          <stop offset="100%" stopColor="#D97A2B" />
        </linearGradient>
        <linearGradient id="hi-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#242428" />
          <stop offset="100%" stopColor="#121214" />
        </linearGradient>
        <radialGradient id="hi-lens" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#F5C451" stopOpacity="0.9" />
          <stop offset="35%" stopColor="#D97A2B" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0A0A0B" />
        </radialGradient>
      </defs>

      {/* Rotating aperture ring */}
      <g
        className="animate-[spin_80s_linear_infinite] [transform-box:view-box]"
        style={{ transformOrigin: "300px 370px" }}
        stroke="url(#hi-gold)"
        opacity="0.35"
      >
        <circle cx="300" cy="370" r="250" strokeWidth="1" strokeDasharray="2 10" />
        <circle cx="300" cy="370" r="225" strokeWidth="1.5" />
        <circle cx="300" cy="370" r="160" strokeWidth="1" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          const x1 = 300 + Math.cos(a) * 225;
          const y1 = 370 + Math.sin(a) * 225;
          const x2 = 300 + Math.cos(a + 1.1) * 160;
          const y2 = 370 + Math.sin(a + 1.1) * 160;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1.2" />;
        })}
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i * Math.PI) / 18;
          return (
            <line
              key={`t${i}`}
              x1={300 + Math.cos(a) * 232}
              y1={370 + Math.sin(a) * 232}
              x2={300 + Math.cos(a) * (i % 3 === 0 ? 246 : 240)}
              y2={370 + Math.sin(a) * (i % 3 === 0 ? 246 : 240)}
              strokeWidth="1"
            />
          );
        })}
      </g>

      {/* Film strip */}
      <g opacity="0.85">
        <path d="M20 640 Q 300 540 580 625" stroke="#1A1A1D" strokeWidth="46" />
        <path d="M20 623 Q 300 523 580 608" stroke="#8A857C" strokeWidth="5" strokeDasharray="6 10" opacity="0.6" />
        <path d="M20 657 Q 300 557 580 642" stroke="#8A857C" strokeWidth="5" strokeDasharray="6 10" opacity="0.6" />
        <path d="M20 640 Q 300 540 580 625" stroke="url(#hi-gold)" strokeWidth="14" strokeDasharray="34 8" opacity="0.35" />
      </g>

      {/* Gimbal + camera — gentle float */}
      <motion.g
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Handle */}
        <rect x="282" y="500" width="36" height="120" rx="18" fill="url(#hi-body)" stroke="url(#hi-gold)" strokeWidth="2" />
        <line x1="290" y1="540" x2="310" y2="540" stroke="#8A857C" strokeWidth="2" />
        <line x1="290" y1="552" x2="310" y2="552" stroke="#8A857C" strokeWidth="2" />
        <circle cx="300" cy="580" r="6" fill="#E8B23A" />

        {/* Gimbal arms + motors */}
        <path d="M300 500 V 478 H 452 V 365 H 432" stroke="url(#hi-gold)" strokeWidth="10" />
        <circle cx="300" cy="482" r="16" fill="#121214" stroke="url(#hi-gold)" strokeWidth="3" />
        <circle cx="452" cy="420" r="14" fill="#121214" stroke="url(#hi-gold)" strokeWidth="3" />
        <circle cx="428" cy="365" r="18" fill="#121214" stroke="url(#hi-gold)" strokeWidth="3" />
        <circle cx="428" cy="365" r="6" fill="#E8B23A" />

        {/* Top handle */}
        <path d="M240 300 V 272 H 370 V 300" stroke="#8A857C" strokeWidth="8" />

        {/* Monitor */}
        <rect x="318" y="210" width="96" height="62" rx="6" fill="#121214" stroke="url(#hi-gold)" strokeWidth="2.5" />
        <rect x="326" y="218" width="80" height="46" rx="3" fill="url(#hi-lens)" opacity="0.5" />
        <path d="M332 256 l16 -16 12 10 18 -20 22 26" stroke="#F4EFE6" strokeWidth="1.5" opacity="0.7" />
        <circle cx="396" cy="228" r="3" fill="#D97A2B" className="animate-flicker" />

        {/* Camera body */}
        <rect x="200" y="300" width="210" height="130" rx="14" fill="url(#hi-body)" stroke="url(#hi-gold)" strokeWidth="3" />
        <rect x="350" y="318" width="44" height="30" rx="4" stroke="#8A857C" strokeWidth="2" />
        <circle cx="372" cy="395" r="10" stroke="#8A857C" strokeWidth="2" />
        <line x1="222" y1="410" x2="330" y2="410" stroke="#242428" strokeWidth="6" />
        <circle cx="390" cy="314" r="4" fill="#D97A2B" className="animate-flicker" />

        {/* Lens barrel */}
        <rect x="128" y="322" width="74" height="86" rx="6" fill="url(#hi-body)" stroke="url(#hi-gold)" strokeWidth="3" />
        {[144, 160, 176].map((x) => (
          <line key={x} x1={x} y1="326" x2={x} y2="404" stroke="#8A857C" strokeWidth="2" />
        ))}

        {/* Matte box */}
        <path d="M128 330 L 70 296 V 434 L 128 400 Z" fill="#121214" stroke="url(#hi-gold)" strokeWidth="3" />
        <ellipse cx="96" cy="365" rx="14" ry="44" fill="url(#hi-lens)" stroke="url(#hi-gold)" strokeWidth="2" />
        <ellipse cx="92" cy="350" rx="4" ry="10" fill="#F4EFE6" opacity="0.6" />
      </motion.g>

      {/* Drone — hovering */}
      <motion.g
        animate={{ y: [0, -14, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "470px 130px" }}
      >
        <path d="M418 108 L 470 130 L 522 108 M418 152 L 470 130 L 522 152" stroke="url(#hi-gold)" strokeWidth="5" />
        {[
          [418, 104],
          [522, 104],
          [418, 148],
          [522, 148],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <line x1={cx} y1={cy} x2={cx} y2={cy + 6} stroke="#8A857C" strokeWidth="3" />
            <ellipse cx={cx} cy={cy} rx="30" ry="5" stroke="#F4EFE6" strokeWidth="1.5" opacity="0.55" className="animate-flicker" />
          </g>
        ))}
        <rect x="446" y="118" width="48" height="26" rx="10" fill="url(#hi-body)" stroke="url(#hi-gold)" strokeWidth="2.5" />
        <circle cx="470" cy="152" r="7" fill="url(#hi-lens)" stroke="url(#hi-gold)" strokeWidth="2" />
        <circle cx="482" cy="125" r="2.5" fill="#D97A2B" className="animate-flicker" />
      </motion.g>

      {/* Sparkles */}
      {[
        [110, 200, 0],
        [530, 300, 1.2],
        [150, 520, 2.1],
        [520, 470, 0.6],
      ].map(([x, y, d]) => (
        <motion.path
          key={`${x}-${y}`}
          d={`M${x} ${y - 10} L ${x + 3} ${y - 3} L ${x + 10} ${y} L ${x + 3} ${y + 3} L ${x} ${y + 10} L ${x - 3} ${y + 3} L ${x - 10} ${y} L ${x - 3} ${y - 3} Z`}
          fill="#E8B23A"
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: d }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
      ))}
    </motion.svg>
  );
}
