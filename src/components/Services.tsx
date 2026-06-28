import { motion } from "framer-motion";
import { services } from "../data/content";
import { fadeUp, stagger, inView } from "../lib/motion";

export default function Services() {
  return (
    <section id="services" className="relative border-y border-ink-600/60 py-28 sm:py-36">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={stagger}
          className="mb-16 max-w-2xl"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-5">
            What I Do
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
          >
            Services built around
            <span className="text-gold-grad italic"> story</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={stagger}
          className="grid gap-px overflow-hidden rounded-2xl border border-ink-600 bg-ink-600 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                variants={fadeUp}
                className="group relative bg-ink-800 p-8 transition-colors duration-300 hover:bg-ink-700"
              >
                {/* Top gold accent line on hover */}
                <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                <div className="mb-6 inline-flex rounded-xl border border-ink-600 bg-ink p-3.5 text-gold transition-colors duration-300 group-hover:border-gold/50">
                  <Icon size={24} strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-2xl font-medium text-bone">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  {s.description}
                </p>
              </motion.article>
            );
          })}

          {/* CTA tile to balance the 5-item grid */}
          <motion.a
            href="#contact"
            variants={fadeUp}
            className="group flex flex-col justify-between bg-gold p-8 text-ink transition-colors duration-300 hover:bg-gold-light"
          >
            <p className="font-mono text-xs uppercase tracking-widest2">
              Have a vision?
            </p>
            <h3 className="mt-10 font-display text-2xl font-semibold leading-tight">
              Let's turn it into a masterpiece →
            </h3>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
