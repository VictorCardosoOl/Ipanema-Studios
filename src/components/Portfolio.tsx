import React, { useState, useEffect, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolio';
import Image from './ui/Image';
import { Button } from './ui/Button';
import { Heading } from './ui/Heading';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  useEffect(() => {
    if (contentRef.current) {
      const elements = contentRef.current.children;
      gsap.fromTo(
        elements,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", overwrite: true }
      );
    }
  }, [currentSlide]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        snap: {
          snapTo: 0.5, // Snaps to the exact center of the section
          duration: { min: 0.2, max: 0.6 },
          ease: "power2.inOut"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > 50) {
      nextSlide();
    } else if (touchStartX.current - touchEndX < -50) {
      prevSlide();
    }
  };

  return (
    <section 
      id="portfolio" 
      ref={sectionRef} 
      className="relative w-full h-[100dvh] bg-white flex items-center justify-center p-4 md:p-8 lg:p-10 cursor-ew-resize"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full overflow-hidden rounded-sm">
        {/* Background Images */}
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out cursor-explore ${
              currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30 z-10" />
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full cursor-default">
          <div className="max-w-2xl" ref={contentRef}>
            <Heading size="h1" themeColor="white" className="mb-6">
              {projects[currentSlide].title}
            </Heading>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-sans font-light leading-relaxed max-w-xl">
              {projects[currentSlide].description}
            </p>
            <Button asChild variant="whiteOutline" size="lg">
              <a href={projects[currentSlide].link}>
                Ver Projeto
              </a>
            </Button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-center gap-3 z-20 cursor-default">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className="relative flex items-center justify-center w-6 h-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full group"
              aria-label={`Ir para o projeto ${idx + 1}`}
            >
              {currentSlide === idx && (
                <span className="absolute inset-0 border border-white rounded-full" />
              )}
              <span 
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  currentSlide === idx ? 'bg-white' : 'bg-white/50 group-hover:bg-white/80'
                }`} 
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
