/**
 * GrainOverlay — a fixed, non-interactive cinematic atmosphere layer.
 * Combines an animated film grain with a soft vignette for that "shot on
 * film" feel. Sits above content but ignores pointer events.
 */
export default function GrainOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[60]" aria-hidden="true">
      <div className="film-grain absolute inset-0 opacity-[0.06] animate-flicker mix-blend-overlay" />
      <div className="vignette absolute inset-0" />
    </div>
  );
}
