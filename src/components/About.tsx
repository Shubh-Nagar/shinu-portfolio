import { motion } from "framer-motion";
import { stats } from "../data/content";
import { fadeUp, stagger, inView } from "../lib/motion";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Portrait — REPLACE with Arjun's real photo */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={fadeUp}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          <div className="relative overflow-hidden rounded-2xl border border-ink-600">
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=70"
              alt="Arjun Mehra behind the camera"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          </div>
          {/* Floating signature card */}
          <div className="absolute -bottom-5 -right-3 rounded-xl border border-gold/40 bg-ink-800/90 px-5 py-3 backdrop-blur-sm sm:-right-6">
            <p className="font-display text-lg italic text-gold">Arjun Mehra</p>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-ash">
              Director / DP
            </p>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-5">
            The Storyteller
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
          >
            Every frame is a feeling
            <br />
            <span className="text-gold-grad italic">waiting to be felt.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-relaxed text-ash"
          >
            I'm Arjun — a cinematographer and drone pilot based in Indore. For
            over three years I've been chasing light, emotion and motion across
            weddings, brand films and the skies above. My work lives where
            technical craft meets raw feeling: deliberate framing, intentional
            color and edits that breathe.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-base leading-relaxed text-ash"
          >
            I don't shoot events. I direct memories — and turn the ordinary into
            something worth replaying for a lifetime.
          </motion.p>

          {/* Stats */}
          <motion.dl
            variants={stagger}
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-600 bg-ink-600 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="bg-ink-800 px-5 py-6 text-center"
              >
                <dt className="font-display text-3xl font-semibold text-gold sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-2 font-mono text-[10px] uppercase tracking-wider text-ash">
                  {s.label}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
