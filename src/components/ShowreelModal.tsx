import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useScrollLock } from "../hooks/useScrollLock";
import { useEffect } from "react";

interface Props {
  url: string;
  onClose: () => void;
}

/** Detect a local/self-hosted video file vs an embeddable (YouTube/Vimeo) URL. */
const isFileVideo = (url: string) => /\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(url);

/**
 * ShowreelModal — full-screen cinematic video overlay with letterbox bars.
 * Plays either an HTML5 <video> (local .mp4) or an iframe embed.
 */
export default function ShowreelModal({ url, onClose }: Props) {
  useScrollLock(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Showreel"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close showreel"
        className="absolute right-5 top-5 z-10 rounded-full border border-ink-600 p-2.5 text-bone transition-colors hover:border-gold hover:text-gold"
      >
        <X size={22} />
      </button>

      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative aspect-video w-full max-w-6xl px-4"
      >
        {isFileVideo(url) ? (
          <video
            src={url}
            controls
            autoPlay
            playsInline
            className="h-full w-full rounded-lg bg-black shadow-gold"
          />
        ) : (
          <iframe
            src={`${url}?autoplay=1&rel=0`}
            title="Arjun Mehra Showreel"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            className="aspect-video h-full w-full rounded-lg bg-black shadow-gold"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
