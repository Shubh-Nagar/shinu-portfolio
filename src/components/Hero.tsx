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
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden lg:block"
    >
      {/* Dark base + warm glow behind Shinu (ties his bokeh into the page) */}
      <div className="absolute inset-0 bg-ink" aria-hidden="true">
        <div className="absolute right-0 top-1/2 h-[80%] w-2/3 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(217,122,43,0.22),transparent_65%)] blur-2xl" />
      </div>

      {/* Gold volumetric light-sweep — hero signature */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-1/4 top-0 h-full w-1/3 animate-sweep bg-gradient-to-r from-transparent via-gold/20 to-transparent blur-2xl" />
      </div>

      {/* Drifting embers */}
      <div className="absolute inset-0" aria-hidden="true">
        <EmberCanvas />
      </div>

      {/* Shinu — desktop: bleeds from the right; mobile: stacked below the copy */}
      <motion.img
        src="/shinu-hero.png"
        alt="Shinu Rajoriya holding a gimbal-mounted cinema camera"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        loading="eager"
        fetchPriority="high"
        className="order-2 z-[5] mx-auto mt-6 max-h-[46vh] w-auto select-none object-contain
                   lg:absolute lg:bottom-0 lg:right-0 lg:order-none lg:mx-0 lg:mt-0
                   lg:h-[94%] lg:max-h-none xl:right-[2%]"
      />

      {/* Copy */}
      <div className="container-x relative z-10 order-1 lg:flex lg:min-h-[100svh] lg:items-center">
        <div className="max-w-xl text-center lg:max-w-[52%] lg:text-left">
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
            className="font-display font-semibold leading-[0.92] tracking-tight text-[clamp(2.5rem,7vw,6rem)]"
          >
            <motion.span
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="block text-bone"
            >
              I Don't Just Edit,
            </motion.span>
            <motion.span
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
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
            className="mx-auto mt-7 max-w-md text-balance text-base text-ash sm:text-lg lg:mx-0"
          >
            Cinematic editor & visual storyteller capturing weddings, brands and
            the world from the sky — {site.tagline.toLowerCase()}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.66 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
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
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 text-ash transition-colors hover:text-gold sm:bottom-28 lg:left-12 lg:block lg:translate-x-0"
      >
        <ArrowDown size={22} className="animate-floaty" />
      </motion.a>

      {/* Bottom marquee strip */}
      <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden border-y border-ink-600/60 bg-ink/60 py-3 backdrop-blur-sm">
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
