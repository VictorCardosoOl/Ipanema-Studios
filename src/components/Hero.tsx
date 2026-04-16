import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from './ui/Image';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in nav items one by one
      gsap.from("nav li", {
        x: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5
      });

      // Parallax effect for images
      gsap.to(".hero-image-main", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(".hero-image-sub", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="h-[100dvh] w-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 overflow-hidden">
      {/* Left Panel - Cream */}
      <div className="bg-cream px-6 pb-4 pt-24 md:px-12 md:pb-6 md:pt-32 3xl:px-24 3xl:pb-12 3xl:pt-40 flex flex-col justify-between h-full min-h-0">
        <header className="shrink-0">
          <h1 className="text-xl 3xl:text-3xl font-medium tracking-tight">Formosa Studios</h1>
          <p className="mt-4 text-sm md:text-base text-charcoal/70 max-w-sm">Criamos experiências digitais que unem estética impecável e engenharia de ponta.</p>
        </header>
        
        <nav className="w-full max-w-md 3xl:max-w-xl mt-auto shrink-0" aria-label="Main Navigation">
          <ul className="text-[10px] md:text-xs 3xl:text-sm font-medium tracking-wide">
            {[
              { name: 'Trabalhos', link: '#portfolio', page: '02' },
              { name: 'Serviços', link: '#services', page: '03' },
              { name: 'Quem Somos', link: '#mission', page: '04' },
              { name: 'Valores', link: '#values', page: '05' },
              { name: 'Contato', link: '#contact', page: '06' },
            ].map((item, i) => (
              <li key={i} className="border-b border-charcoal/20 last:border-0">
                <a href={item.link} className="flex justify-between py-1 md:py-1.5 hover:opacity-60 transition-opacity focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream outline-none rounded-sm">
                  <span>{item.name}</span>
                  <span>{item.page}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Right Panel - Charcoal */}
      <div className="bg-charcoal text-cream px-6 pb-4 pt-6 md:px-12 md:pb-6 md:pt-32 3xl:px-24 3xl:pb-12 3xl:pt-40 flex flex-col h-full relative min-h-0">
        <div className="flex justify-between text-[10px] 3xl:text-xs uppercase tracking-widest opacity-80 font-bold shrink-0">
          <span>Estúdio de Design</span>
          <span className="hidden md:inline">2026</span>
          <span>01 / 06</span>
        </div>
        
        <div className="flex-grow flex items-center justify-center p-4 md:p-8 3xl:p-16 min-h-0">
          <div className="relative w-full max-w-[160px] sm:max-w-[200px] md:max-w-sm 3xl:max-w-lg aspect-[3/4] overflow-visible bg-stone-900">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
              alt="Minimalist Architecture" 
              className="hero-image-main w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            {/* Overlapping smaller image for editorial feel */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 w-2/3 aspect-square border-4 border-charcoal z-10 shadow-2xl overflow-hidden bg-stone-800">
              <Image 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" 
                alt="" 
                className="hero-image-sub w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
