import type { Variants } from "framer-motion";

// Shared scroll-reveal variants used across sections.

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

// Parent that staggers its children in sequence.
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// Standard viewport trigger — animate once, a little before fully in view.
export const inView = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -10% 0px",
} as const;
