import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

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

  const isValidEmail = useCallback((email: string): boolean => EMAIL_REGEX.test(email), []);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const details = formData.get('details')?.toString().trim();

    if (!name || !email || !details) {
      setErrorMessage('Preencha todos os campos obrigatórios.');
      setFormState('error');
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage('Insira um e-mail válido.');
      setFormState('error');
      return;
    }

    setFormState('loading');
    setErrorMessage('');
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState('success');
      setTimeout(() => {
        setFormState('idle');
        formRef.current?.reset();
      }, 3000);
    } catch {
      setErrorMessage('Erro inesperado. Tente novamente.');
      setFormState('error');
    }
  }, [isValidEmail]);

  return (
    <section id="contact" ref={containerRef} className="min-h-screen bg-charcoal text-cream py-32 3xl:py-48 px-8 md:px-12 3xl:px-24 flex flex-col justify-center border-t border-cream/10">
      <div className="max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 3xl:gap-32">
          
          {/* Left: Typography & Info */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="contact-reveal">
              <span className="text-[10px] 3xl:text-xs uppercase tracking-[0.3em] opacity-50 font-bold mb-8 block">Inicie seu projeto</span>
              <h2 className="text-[12vw] lg:text-[8vw] 3xl:text-[9rem] leading-[0.85] font-serif font-light tracking-tighter mb-12">
                Vamos <br/><span className="italic opacity-70">conversar.</span>
              </h2>
            </div>
            
            <div className="contact-reveal grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 lg:mt-32">
              <div>
                <span className="text-[10px] 3xl:text-xs uppercase tracking-widest opacity-50 font-bold mb-4 block">Novos Negócios</span>
                <a href="mailto:hello@formosastudios.com" className="text-lg 3xl:text-2xl hover:opacity-70 transition-opacity font-medium">hello@formosastudios.com</a>
              </div>
              <div>
                <span className="text-[10px] 3xl:text-xs uppercase tracking-widest opacity-50 font-bold mb-4 block">Localização</span>
                <p className="text-lg 3xl:text-2xl opacity-90 font-medium">Rio de Janeiro, BR<br/>Atendimento Global</p>
              </div>
            </div>
          </div>

          {/* Right: Minimalist Form */}
          <div className="lg:col-span-5 lg:pl-12 flex flex-col justify-center relative">
            {formState === 'success' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal z-10 contact-reveal">
                <div className="w-20 h-20 rounded-full border border-cream/30 flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif mb-4">Mensagem Enviada</h3>
                <p className="text-base opacity-70">Retornaremos em até 24 horas.</p>
              </div>
            )}

            <form ref={formRef} className={`contact-reveal flex flex-col gap-12 3xl:gap-16 transition-opacity duration-500 ${formState === 'loading' ? 'opacity-50 pointer-events-none' : ''}`} onSubmit={handleSubmit} noValidate>
              
              {formState === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-200 px-6 py-4 rounded-sm text-sm">
                  {errorMessage}
                </div>
              )}

              <div className="relative group">
                <input type="text" id="name" name="name" className="w-full bg-transparent border-b border-cream/30 py-4 text-xl 3xl:text-3xl focus:outline-none focus:border-cream transition-colors peer placeholder-transparent" placeholder="Nome" required />
                <label htmlFor="name" className="absolute left-0 top-4 text-cream/50 text-xl 3xl:text-3xl transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-cream peer-valid:-top-6 peer-valid:text-xs peer-valid:text-cream cursor-text">Seu Nome</label>
              </div>
              
              <div className="relative group">
                <input type="email" id="email" name="email" className="w-full bg-transparent border-b border-cream/30 py-4 text-xl 3xl:text-3xl focus:outline-none focus:border-cream transition-colors peer placeholder-transparent" placeholder="E-mail" required />
                <label htmlFor="email" className="absolute left-0 top-4 text-cream/50 text-xl 3xl:text-3xl transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-cream peer-valid:-top-6 peer-valid:text-xs peer-valid:text-cream cursor-text">Seu E-mail</label>
              </div>

              <div className="relative group">
                <textarea id="details" name="details" rows={1} className="w-full bg-transparent border-b border-cream/30 py-4 text-xl 3xl:text-3xl focus:outline-none focus:border-cream transition-colors peer placeholder-transparent resize-none min-h-[60px]" placeholder="Detalhes" required></textarea>
                <label htmlFor="details" className="absolute left-0 top-4 text-cream/50 text-xl 3xl:text-3xl transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-cream peer-valid:-top-6 peer-valid:text-xs peer-valid:text-cream cursor-text">Sobre o Projeto</label>
              </div>

              <button type="submit" disabled={formState === 'loading'} className="mt-8 border border-cream/30 rounded-full px-12 py-6 text-sm 3xl:text-lg uppercase tracking-widest hover:bg-cream hover:text-charcoal transition-all self-start font-bold focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal outline-none disabled:opacity-50 flex items-center gap-4 group">
                {formState === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
