import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Core Components (Sempre carregados)
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import { Preloader } from './components/ui/Preloader';
import { ErrorBoundary } from './components/ErrorBoundary';

// Data / Constants
import { NAVIGATION_CONFIG } from './config/navigation';

import HeroPortfolio from './components/HeroPortfolio';
import Process from './components/Process';
import AboutMe from './components/AboutMe';
import Values from './components/Values';
import FAQSection from './components/FAQSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      }
    });

    // Refresh ScrollTrigger when local fonts finish loading
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });
  }, []);

  // Refresh ScrollTrigger when Preloader finishes and reveals the DOM
  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }
  }, [isLoaded]);

  return (
    <main className="w-full min-h-screen bg-cream text-charcoal selection:bg-charcoal selection:text-cream">
      {/* Wayfinding: Progress Bar */}
      <div 
        ref={progressRef}
        className="fixed top-0 left-0 right-0 h-[2px] bg-charcoal z-[60] origin-left scale-x-0"
      />
      
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      <SmoothScroll isLocked={!isLoaded} />
      <Navbar 
        items={NAVIGATION_CONFIG}
        logoText="Victor Cardoso"
      />
      
      {/* O DOM renderiza no tamanho natural para o GSAP calcular, mas fica invisível e intocável até carregar */}
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ErrorBoundary>
          <HeroPortfolio />
          <Process />
          <AboutMe />
          <Values />
          <FAQSection />
          <Contact />
          <Footer />
        </ErrorBoundary>
      </div>
    </main>
  );
}
