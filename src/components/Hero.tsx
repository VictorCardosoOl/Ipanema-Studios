import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
    <section id="hero" ref={containerRef} className="w-full h-[calc(100vh-60px)] min-h-[500px] mt-[60px] flex flex-col md:flex-row overflow-hidden">
      {/* Left Panel - Cream */}
      <div className="bg-cream w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-12 lg:p-16 flex flex-col">
        <header>
          <h1 className="text-2xl md:text-4xl font-medium tracking-tight">Formosa Studios</h1>
        </header>
        
        <nav className="w-full max-w-md mt-auto" aria-label="Main Navigation">
          <ul className="text-sm md:text-base lg:text-lg font-medium tracking-wide">
            {[
              { name: 'trabalhos', link: '#portfolio', page: '02' },
              { name: 'serviços', link: '#services', page: '03' },
              { name: 'quem somos', link: '#mission', page: '04' },
              { name: 'valores', link: '#values', page: '05' },
              { name: 'contato', link: '#contact', page: '06' },
            ].map((item, i) => (
              <li key={i} className="border-b border-charcoal/30 last:border-0">
                <a href={item.link} className="flex justify-between py-2 md:py-3 hover:opacity-60 transition-opacity focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream outline-none rounded-sm">
                  <span>{item.name}</span>
                  <span>{item.page}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Right Panel - Charcoal */}
      <div className="bg-charcoal text-cream w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-12 lg:p-16 flex flex-col relative">
        <div className="flex justify-between text-[10px] md:text-xs uppercase tracking-widest opacity-80 font-bold">
          <span>Perfil da Agência</span>
          <span>2026</span>
          <span>01 / 06</span>
        </div>
        
        <div className="flex-grow flex items-center justify-center min-h-0 mt-4 md:mt-0">
          <div className="relative w-full max-w-[160px] md:max-w-[260px] lg:max-w-[340px] aspect-[3/4] overflow-hidden bg-stone-900">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
              alt="Minimalist Architecture" 
              className="hero-image-main w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Overlapping smaller image for editorial feel */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-2/3 aspect-square border-4 border-charcoal z-10 shadow-2xl overflow-hidden bg-stone-800">
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" 
                alt="" 
                className="hero-image-sub w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
