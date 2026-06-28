import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useScrollLock } from "../hooks/useScrollLock";
import type { WorkItem } from "../data/content";

interface Props {
  item: WorkItem;
  onClose: () => void;
}

const isFileVideo = (url: string) => /\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(url);

/** Lightbox — opens a portfolio image or video over a dimmed backdrop. */
export default function Lightbox({ item, onClose }: Props) {
  useScrollLock(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const frameClass = item.vertical
    ? "aspect-[9/16] max-h-[85vh] w-auto"
    : "aspect-video w-full max-w-5xl";

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 rounded-full border border-ink-600 p-2.5 text-bone transition-colors hover:border-gold hover:text-gold"
      >
        <X size={22} />
      </button>

      <motion.figure
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className={`relative ${frameClass}`}
      >
        {item.type === "image" ? (
          <img
            src={item.full}
            alt={item.title}
            className="h-full w-full rounded-lg object-contain shadow-gold"
          />
        ) : isFileVideo(item.full) ? (
          <video
            src={item.full}
            controls
            autoPlay
            playsInline
            className="h-full w-full rounded-lg bg-black shadow-gold"
          />
        ) : (
          <iframe
            src={`${item.full}?autoplay=1&rel=0`}
            title={item.title}
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            className="h-full w-full rounded-lg bg-black shadow-gold"
          />
        )}
        <figcaption className="mt-4 text-center font-mono text-xs uppercase tracking-wider text-ash">
          {item.title} — {item.category}
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}
