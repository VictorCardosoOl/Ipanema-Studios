import React, { useState, useEffect, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Tērmique",
    description: "brand strategy, naming, visual and verbal identity, stationery and collateral design, graphic materials and social media design",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Lumina",
    description: "real estate platform, user experience, interface design, 3d rendering integration, digital marketing",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Aura",
    description: "e-commerce experience, packaging design, brand identity, art direction, social media",
    image: "https://images.unsplash.com/photo-1615397323758-1e0e4179323c?q=80&w=2000&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Vanguard",
    description: "mobile application, fintech, user interface, design system, interactive prototyping",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    link: "#"
  }
];

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
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

  return (
    <section id="portfolio" ref={sectionRef} className="relative w-full h-[100dvh] bg-white flex items-center justify-center p-4 md:p-8 lg:p-10">
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Images */}
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full">
          <div className="max-w-2xl" ref={contentRef}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white mb-6 tracking-tight">
              {projects[currentSlide].title}
            </h2>
            <p className="text-lg md:text-xl text-white mb-10 font-sans font-bold leading-snug max-w-xl">
              {projects[currentSlide].description}
            </p>
            <a
              href={projects[currentSlide].link}
              className="inline-flex items-center justify-center px-6 py-2 border border-white text-white rounded-sm hover:bg-white hover:text-charcoal transition-colors duration-300 text-xs font-sans font-medium tracking-wide focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal outline-none"
            >
              view project
            </a>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-center gap-3 z-20">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className="relative flex items-center justify-center w-6 h-6 focus:outline-none group"
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
