import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-form-container", {
        x: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form-container",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset form after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" ref={containerRef} className="min-h-screen bg-cream text-charcoal py-24 3xl:py-40 px-8 md:px-12 3xl:px-24 flex flex-col justify-center">
      <div className="max-w-5xl 3xl:max-w-screen-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 3xl:gap-32">
        
        {/* Left: Copy */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-7xl 3xl:text-8xl font-serif font-light tracking-tight mb-6 3xl:mb-12">Vamos construir<br/>algo<br/>excepcional.</h2>
            <p className="text-base 3xl:text-xl opacity-90 max-w-sm 3xl:max-w-lg leading-relaxed font-medium">
              Seja lançando uma nova marca ou reimaginando uma plataforma existente, nossa equipe está pronta para dar vida à sua visão com precisão e elegância.
            </p>
          </div>
          
          <div className="mt-16 md:mt-0 3xl:mt-32">
            <div className="text-[10px] 3xl:text-xs uppercase tracking-widest opacity-80 font-bold mb-2 3xl:mb-4">Contato</div>
            <a href="mailto:hello@ipanemastudios.com" className="text-lg 3xl:text-2xl hover:opacity-70 transition-opacity font-medium focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream outline-none rounded-sm">hello@ipanemastudios.com</a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-container bg-charcoal text-cream p-8 md:p-12 3xl:p-20 relative overflow-hidden">
          {formState === 'success' ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal text-center p-8 z-10">
              <div className="w-16 h-16 rounded-full border-2 border-cream flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-2">Mensagem Enviada</h3>
              <p className="text-sm opacity-70">Entraremos em contato em breve.</p>
            </div>
          ) : null}

          <form className={`flex flex-col gap-8 3xl:gap-12 transition-opacity duration-500 ${formState === 'loading' ? 'opacity-50 pointer-events-none' : ''}`} onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 3xl:gap-4">
              <label htmlFor="name" className="text-[10px] 3xl:text-xs uppercase tracking-widest opacity-90 font-bold">Nome</label>
              <input type="text" id="name" className="bg-transparent border-b border-cream/50 pb-2 3xl:pb-4 focus:outline-none focus:border-cream transition-colors text-base 3xl:text-xl" placeholder="João Silva" required />
            </div>
            
            <div className="flex flex-col gap-2 3xl:gap-4">
              <label htmlFor="email" className="text-[10px] 3xl:text-xs uppercase tracking-widest opacity-90 font-bold">E-mail</label>
              <input type="email" id="email" className="bg-transparent border-b border-cream/50 pb-2 3xl:pb-4 focus:outline-none focus:border-cream transition-colors text-base 3xl:text-xl" placeholder="joao@exemplo.com" required />
            </div>

            <div className="flex flex-col gap-2 3xl:gap-4">
              <label htmlFor="budget" className="text-[10px] 3xl:text-xs uppercase tracking-widest opacity-90 font-bold">Orçamento</label>
              <select id="budget" className="bg-transparent border-b border-cream/50 pb-2 3xl:pb-4 focus:outline-none focus:border-cream transition-colors text-base 3xl:text-xl appearance-none rounded-none">
                <option value="" className="bg-charcoal text-cream">Selecione uma faixa</option>
                <option value="10k-25k" className="bg-charcoal text-cream">R$ 10k - R$ 25k</option>
                <option value="25k-50k" className="bg-charcoal text-cream">R$ 25k - R$ 50k</option>
                <option value="50k+" className="bg-charcoal text-cream">R$ 50k+</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 3xl:gap-4">
              <label htmlFor="details" className="text-[10px] 3xl:text-xs uppercase tracking-widest opacity-90 font-bold">Detalhes do Projeto</label>
              <textarea id="details" rows={3} className="bg-transparent border-b border-cream/50 pb-2 3xl:pb-4 focus:outline-none focus:border-cream transition-colors text-base 3xl:text-xl resize-none" placeholder="Conte-nos sobre sua visão..." required></textarea>
            </div>

            <button type="submit" disabled={formState === 'loading'} className="mt-4 3xl:mt-8 border border-cream rounded-full px-8 py-3 3xl:px-12 3xl:py-5 text-sm 3xl:text-base hover:bg-cream hover:text-charcoal transition-colors self-start font-bold focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal outline-none disabled:opacity-50 flex items-center gap-2">
              {formState === 'loading' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : 'Enviar Mensagem'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
