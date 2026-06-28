import { useEffect, useRef } from "react";

/**
 * EmberCanvas — lightweight canvas particle field of slow, drifting gold
 * embers. Pure canvas (no deps), DPR-aware, pauses for reduced-motion users
 * and when the tab is hidden. Rendered behind the hero content.
 */
export default function EmberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let raf = 0;

    type Ember = {
      x: number;
      y: number;
      r: number;
      vy: number;
      vx: number;
      a: number;
      tw: number;
    };
    let embers: Ember[] = [];

    const make = (): Ember => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.4,
      vy: -(Math.random() * 0.35 + 0.08),
      vx: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.5 + 0.2,
      tw: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Scale particle count to screen area (kept modest for performance).
      const count = Math.min(90, Math.floor((width * height) / 16000));
      embers = Array.from({ length: count }, make);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const e of embers) {
        e.y += e.vy;
        e.x += e.vx;
        e.tw += 0.03;
        const flicker = e.a + Math.sin(e.tw) * 0.15;
        if (e.y < -10) {
          e.y = height + 10;
          e.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 178, 58, ${Math.max(0, flicker)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(232, 178, 58, 0.6)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    if (!prefersReduced) {
      draw();
    } else {
      // Render a single static frame.
      draw();
      cancelAnimationFrame(raf);
    }

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!prefersReduced) draw();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
