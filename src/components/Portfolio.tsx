import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Maximize2 } from "lucide-react";
import { work, workFilters, type WorkItem } from "../data/content";
import { fadeUp, inView } from "../lib/motion";
import Lightbox from "./Lightbox";

function WorkCard({
  item,
  onOpen,
}: {
  item: WorkItem;
  onOpen: (w: WorkItem) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay the muted preview on hover; reset on leave.
  const handleEnter = () => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  };
  const handleLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <motion.button
      type="button"
      variants={fadeUp}
      onClick={() => onOpen(item)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative block w-full overflow-hidden rounded-xl border border-ink-600 bg-ink-800 text-left focus-visible:ring-2 focus-visible:ring-gold"
    >
      <div className={item.vertical ? "aspect-[9/16]" : "aspect-[4/3]"}>
        <img
          src={item.thumb}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Optional hover video preview layered over the thumb */}
        {item.preview && (
          <video
            ref={videoRef}
            src={item.preview}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
      </div>

      {/* Gradient + caption */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-90" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
            {item.category}
          </p>
          <h3 className="mt-1 font-display text-lg font-medium text-bone">
            {item.title}
          </h3>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink-600 bg-ink/60 text-bone backdrop-blur-sm transition-all duration-300 group-hover:border-gold group-hover:text-gold">
          {item.type === "video" ? (
            <Play size={15} className="fill-current" />
          ) : (
            <Maximize2 size={15} />
          )}
        </span>
      </div>
    </motion.button>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof workFilters)[number]>("All");
  const [active, setActive] = useState<WorkItem | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? work : work.filter((w) => w.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="container-x">
        {/* Header + filters */}
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={inView}
            variants={fadeUp}
          >
            <p className="eyebrow mb-5">Selected Work</p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              The <span className="text-gold-grad italic">portfolio</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-2">
            {workFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-300 ${
                  filter === f
                    ? "border-gold bg-gold text-ink"
                    : "border-ink-600 text-ash hover:border-gold hover:text-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <WorkCard item={item} onOpen={setActive} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <Lightbox item={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
