import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { formRef, formState, errorMessage, handleSubmit } = useContactForm();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="min-h-screen bg-cream text-charcoal py-32 3xl:py-48 px-6 md:px-12 3xl:px-24 flex flex-col justify-center">
      <div className="max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Huge Title */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="contact-reveal text-[18vw] lg:text-[7vw] leading-[0.9] font-sans font-medium tracking-tight text-charcoal">
              Contato
            </h2>
          </div>

          {/* Right: Content & Form */}
          <div className="lg:col-span-7 flex flex-col relative">
            <p className="contact-reveal text-lg md:text-xl lg:text-2xl font-sans text-charcoal/80 leading-relaxed max-w-2xl mb-8">
              Se você tem dúvidas ou precisa de informações gerais, por favor preencha este formulário para solicitar as informações necessárias. Será uma honra ajudar você.
            </p>

            {formState === 'success' && (
              <div role="status" aria-live="polite" className="absolute inset-0 flex flex-col items-start justify-center bg-cream z-10 contact-reveal">
                <h3 className="text-3xl font-sans font-medium mb-4 text-charcoal">Mensagem Enviada</h3>
                <p className="text-lg text-charcoal/60">Retornaremos em até 24 horas.</p>
              </div>
            )}

            <form ref={formRef} className={`contact-reveal flex flex-col gap-8 mb-8 transition-opacity duration-500 ${formState === 'loading' ? 'opacity-50 pointer-events-none' : ''}`} onSubmit={handleSubmit} noValidate>
              {formState === 'error' && (
                <div role="alert" aria-live="polite" className="bg-red-50 border border-red-100 text-red-600 px-6 py-4 rounded-sm text-sm font-sans">
                  {errorMessage}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Nome" 
                  required
                  className="w-full bg-transparent border-b border-charcoal/20 py-4 text-base md:text-lg focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/40 font-sans"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="E-mail" 
                  required
                  className="w-full bg-transparent border-b border-charcoal/20 py-4 text-base md:text-lg focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/40 font-sans"
                />
              </div>
              <textarea 
                name="details" 
                placeholder="Como podemos ajudar?" 
                rows={3}
                required
                className="w-full bg-transparent border-b border-charcoal/20 py-4 text-base md:text-lg focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/40 font-sans resize-none"
              />
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={formState === 'loading'}
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity disabled:opacity-50"
                >
                  {formState === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <hr className="contact-reveal border-charcoal/20 mb-8" />

            {/* Contact Info (2 columns) */}
            <div className="contact-reveal grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 text-charcoal">Informações Gerais</h4>
                <div className="text-sm font-sans text-charcoal/80 space-y-6">
                  <div>
                    <p className="font-medium text-charcoal mb-1">Estúdio Formosa</p>
                    <p>Vila Formosa, São Paulo</p>
                    <p>Brasil</p>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal mb-1">Telefone</p>
                    <p>+55 11 99999-9999</p>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal mb-1">E-mail</p>
                    <a href="mailto:hello@formosastudios.com" className="hover:opacity-60 transition-opacity">hello@formosastudios.com</a>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 text-charcoal">Redes Sociais</h4>
                <ul className="text-sm font-sans text-charcoal/80 space-y-3">
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Instagram</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Facebook</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Twitter</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">LinkedIn</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
