import { Suspense, lazy, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import GrainOverlay from "./components/GrainOverlay";
import { site } from "./data/site";

// Code splitting: below-the-fold sections load on demand to keep the initial
// bundle small and the hero painting fast.
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ShowreelModal = lazy(() => import("./components/ShowreelModal"));

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <>
      
      <Navbar />

      <main>
        <Hero onWatchShowreel={() => setShowreelOpen(true)} />

        {/* Sections stream in as their chunks resolve. */}
        <Suspense fallback={<div className="h-px" />}>
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Full-screen showreel */}
      <Suspense fallback={null}>
        <AnimatePresence>
          {showreelOpen && (
            <ShowreelModal
              url={site.showreelUrl}
              onClose={() => setShowreelOpen(false)}
            />
          )}
        </AnimatePresence>
      </Suspense>
    </>
  );
}
