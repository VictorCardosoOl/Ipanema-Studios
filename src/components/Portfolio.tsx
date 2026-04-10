import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Lumina Residences",
      category: "Plataforma Imobiliária",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Aura Skincare",
      category: "Experiência de E-Commerce",
      image: "https://images.unsplash.com/photo-1615397323758-1e0e4179323c?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".portfolio-grid",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
      
      gsap.from(".portfolio-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".portfolio-cta",
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={containerRef} className="min-h-screen bg-charcoal text-cream py-32 3xl:py-48 px-8 md:px-12 3xl:px-24">
      <div className="max-w-7xl 3xl:max-w-screen-3xl mx-auto">
        <div className="flex justify-between items-end mb-24 3xl:mb-32 border-b border-cream/10 pb-12 3xl:pb-16">
          <h2 className="text-5xl md:text-8xl 3xl:text-[10rem] font-serif font-light tracking-tight">Trabalhos <br/><span className="italic opacity-60">Selecionados</span></h2>
          <span className="text-[10px] 3xl:text-xs uppercase tracking-widest opacity-80 font-semibold mb-4 3xl:mb-8">Página 02 / 05</span>
        </div>

        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 3xl:gap-48">
          {projects.map((project, idx) => (
            <article 
              key={idx}
              className="portfolio-item group cursor-pointer"
            >
              <div className="w-full aspect-[4/5] overflow-hidden mb-8 relative bg-stone-900">
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl 3xl:text-5xl font-serif mb-2 3xl:mb-4">{project.title}</h3>
                  <p className="text-[10px] 3xl:text-xs uppercase tracking-[0.3em] opacity-80 font-semibold">{project.category}</p>
                </div>
                <div className="w-12 h-12 3xl:w-16 3xl:h-16 rounded-full border border-cream/20 flex items-center justify-center group-hover:bg-cream group-hover:text-charcoal transition-all duration-500 transform group-hover:rotate-45">
                  <span className="text-xl 3xl:text-3xl" aria-hidden="true">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Secondary CTA */}
        <div className="portfolio-cta mt-32 3xl:mt-48 pt-16 3xl:pt-24 border-t border-cream/10 flex flex-col items-center text-center">
          <h3 className="text-3xl md:text-5xl 3xl:text-7xl font-serif mb-8 3xl:mb-12">Gostou do que viu?</h3>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 border border-cream/20 rounded-full px-8 py-4 3xl:px-12 3xl:py-6 text-xs 3xl:text-sm uppercase tracking-widest hover:bg-cream hover:text-charcoal transition-all group focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal outline-none"
          >
            Vamos conversar
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
