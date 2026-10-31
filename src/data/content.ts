import {
  Film,
  Plane,
  Clapperboard,
  Image as ImageIcon,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// ── About stats ──────────────────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "100+", label: "Projects Shot" },
  { value: "80+", label: "Happy Clients" },
  { value: "3+", label: "Years Behind the Lens" },
  { value: "∞", label: "Unlimited Passion" },
];

// ── Services ─────────────────────────────────────────────────────────────────
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Film,
    title: "Video Editing",
    description:
      "Story-first edits with cinematic color grading, sound design and pacing that holds attention frame to frame.",
  },
  {
    icon: Plane,
    title: "Drone Cinematography",
    description:
      "Licensed aerial shots that open up scale — sweeping reveals, top-downs and dynamic chase moves.",
  },
  {
    icon: Clapperboard,
    title: "Cinematic Films",
    description:
      "Weddings, brands and short films directed and shot like cinema, not coverage.",
  },
  {
    icon: ImageIcon,
    title: "Poster Design",
    description:
      "Bold key-art and promotional posters that carry the film's mood into a single still.",
  },
  {
    icon: Sparkles,
    title: "Reels & Shorts",
    description:
      "Scroll-stopping vertical edits engineered for reach, rhythm and retention.",
  },
];

// ── Portfolio ────────────────────────────────────────────────────────────────
export type WorkCategory = "Videography" | "Photography" | "Drone" | "Reels";

export interface WorkItem {
  id: string;
  title: string;
  category: WorkCategory;
  /** Poster/thumbnail image. Swap for Arjun's real stills. */
  thumb: string;
  /** Optional looping preview that plays on hover (muted .mp4). */
  preview?: string;
  /** Full media opened in the lightbox. Image URL or embeddable video URL. */
  full: string;
  /** "image" renders a still; "video" renders an embedded/HTML5 player. */
  type: "image" | "video";
  /** Portrait reels render in a 9:16 frame; everything else is landscape. */
  vertical?: boolean;
}

// Placeholder media. Replace `thumb`/`preview`/`full` with real assets pulled
// from @arjunmehra.films. Stock images keep the layout production-ready.
const img = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=1200&q=70`;

export const work: WorkItem[] = [
  {
    id: "w1",
    title: "Golden Hour Vows",
    category: "Videography",
    type: "video",
    thumb: img("photo-1519741497674-611481863552"),
    full: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "w2",
    title: "Above the Valley",
    category: "Drone",
    type: "image",
    thumb: img("photo-1506905925346-21bda4d32df4"),
    full: img("photo-1506905925346-21bda4d32df4"),
  },
  {
    id: "w3",
    title: "Portrait in Shadow",
    category: "Photography",
    type: "image",
    thumb: img("photo-1500648767791-00dcc994a43e"),
    full: img("photo-1500648767791-00dcc994a43e"),
  },
  {
    id: "w4",
    title: "Neon Nights",
    category: "Reels",
    type: "video",
    vertical: true,
    thumb: img("photo-1492684223066-81342ee5ff30"),
    full: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "w5",
    title: "Coastline Sweep",
    category: "Drone",
    type: "image",
    thumb: img("photo-1505228395891-9a51e7e86bf6"),
    full: img("photo-1505228395891-9a51e7e86bf6"),
  },
  {
    id: "w6",
    title: "The First Look",
    category: "Videography",
    type: "video",
    thumb: img("photo-1511285560929-80b456fea0bc"),
    full: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "w7",
    title: "Street Light Study",
    category: "Photography",
    type: "image",
    thumb: img("photo-1449034446853-66c86144b0ad"),
    full: img("photo-1449034446853-66c86144b0ad"),
  },
  {
    id: "w8",
    title: "60s of Motion",
    category: "Reels",
    type: "video",
    vertical: true,
    thumb: img("photo-1485846234645-a62644f84728"),
    full: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "w9",
    title: "Mountain Light",
    category: "Drone",
    type: "image",
    thumb: img("photo-1464822759023-fed622ff2c3b"),
    full: img("photo-1464822759023-fed622ff2c3b"),
  },
];

export const workFilters: ("All" | WorkCategory)[] = [
  "All",
  "Videography",
  "Photography",
  "Drone",
  "Reels",
];

// ── Testimonials ─────────────────────────────────────────────────────────────
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Arjun didn't just film our wedding — he captured the feeling of the day. Watching it back, we relive every emotion.",
    name: "Aarav & Meera",
    role: "Wedding Film",
  },
  {
    quote:
      "Our brand reel tripled our engagement in a week. The pacing, the grade, the sound — every frame was intentional.",
    name: "Riya Kapoor",
    role: "Founder, Bloom Studio",
  },
  {
    quote:
      "The drone footage gave our resort a scale we'd never shown before. Bookings went up the month it launched.",
    name: "Vikram Singh",
    role: "Hospitality Marketing",
  },
];
