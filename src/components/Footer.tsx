import { Instagram, Youtube, MessageCircle, ArrowUp } from "lucide-react";
import { navLinks, site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-600/60 bg-ink-800/40">
      <div className="container-x py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#hero" className="font-display text-2xl font-semibold text-bone">
              Shinu<span className="text-gold">.</span>
            </a>
            <p className="mt-4 font-display text-lg italic text-gold">
              {site.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ash">
              Cinematic videographer, photographer & drone pilot based in{" "}
              {site.location}.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-ash">
              Explore
            </p>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-bone/80 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-ash">
              Follow
            </p>
            <div className="flex gap-3">
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
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 text-bone transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-600/60 pt-8 sm:flex-row">
          <p className="font-mono text-xs text-ash">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a
            href="#hero"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ash transition-colors hover:text-gold"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
