import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import EmberCanvas from "./EmberCanvas";
import { site } from "../data/site";

interface Props {
  onWatchShowreel: () => void;
}

const marqueeItems = [
  "Cinematic Films",
  "Drone Cinematography",
  "Wedding Stories",
  "Brand Reels",
  "Photography",
  "Color Grading",
];

export default function Hero({ onWatchShowreel }: Props) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image layer — REPLACE with Shinu's hero portrait */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=70"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
          fetchPriority="high"
        />
        {/* Tonal gradients to seat the type */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/60" />
      </div>

      {/* Gold volumetric light-sweep — the hero's signature atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-1/4 top-0 h-full w-1/3 animate-sweep bg-gradient-to-r from-transparent via-gold/25 to-transparent blur-2xl" />
      </div>

      {/* Drifting embers */}
      <div className="absolute inset-0" aria-hidden="true">
        <EmberCanvas />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          {site.role}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-semibold leading-[0.92] tracking-tight"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="block text-bone"
          >
            I Don't Just Edit,
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            className="block italic text-gold-grad"
          >
            I Tell Stories
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-7 max-w-xl text-balance text-base text-ash sm:text-lg"
        >
          Cinematic visual storyteller capturing weddings, brands and the world
          from the sky — {site.tagline.toLowerCase()}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.66 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button type="button" onClick={onWatchShowreel} className="btn-primary">
            <Play size={16} className="fill-ink" />
            Watch Showreel
          </button>
          <a href="#work" className="btn-ghost">
            View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-24 z-10 text-ash transition-colors hover:text-gold sm:bottom-28"
      >
        <ArrowDown size={22} className="animate-floaty" />
      </motion.a>

      {/* Bottom marquee strip */}
      <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden border-y border-ink-600/60 bg-ink/40 py-3 backdrop-blur-sm">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-mono text-xs uppercase tracking-widest2 text-ash"
            >
              {item}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
