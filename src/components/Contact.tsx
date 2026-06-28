import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Youtube, MessageCircle } from "lucide-react";
import { site } from "../data/site";
import { fadeUp, stagger, inView } from "../lib/motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // No-backend default: compose a prefilled email. Swap this handler for a
  // POST to your API / Formspree / Resend endpoint when ready.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-lg border border-ink-600 bg-ink-800 px-4 py-3 text-bone placeholder:text-ash/70 transition-colors focus:border-gold focus:outline-none";

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left — invitation + details */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-5">
            Let's Create
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
          >
            Got a moment worth
            <br />
            <span className="text-gold-grad italic">immortalizing?</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-base leading-relaxed text-ash"
          >
            Weddings, brand films, drone work or a wild idea — tell me about it.
            I reply to every serious enquiry within 24 hours.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 text-bone transition-colors hover:text-gold"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-600">
                <Mail size={18} />
              </span>
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 text-bone transition-colors hover:text-gold"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-600">
                <Phone size={18} />
              </span>
              {site.phone}
            </a>
            <p className="flex items-center gap-4 text-ash">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-600">
                <MapPin size={18} />
              </span>
              {site.location}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex gap-3">
            {[
              { icon: Instagram, href: site.socials.instagram, label: "Instagram" },
              { icon: Youtube, href: site.socials.youtube, label: "YouTube" },
              { icon: MessageCircle, href: site.socials.whatsapp, label: "WhatsApp" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-600 text-bone transition-colors hover:border-gold hover:text-gold"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — form */}
        <motion.form
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-ink-600 bg-ink-800/50 p-7 sm:p-9"
        >
          <div>
            <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-ash">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-ash">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-ash">
              About your project
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me what you're dreaming up…"
              className={`${field} resize-none`}
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Send Enquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}
