import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/content";
import { fadeUp, stagger, inView } from "../lib/motion";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative border-y border-ink-600/60 py-28 sm:py-36"
    >
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={fadeUp}
          className="mb-16 max-w-2xl"
        >
          <p className="eyebrow mb-5">Client Voices</p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Stories worth
            <span className="text-gold-grad italic"> retelling</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={stagger}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-ink-600 bg-ink-800 p-8"
            >
              <Quote size={28} className="mb-5 text-gold" />
              <blockquote className="flex-1 text-base leading-relaxed text-bone/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-7 border-t border-ink-600 pt-5">
                <p className="font-display text-lg text-bone">{t.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-ash">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
