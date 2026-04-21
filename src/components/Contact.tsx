import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Heading } from './ui/Heading';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

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
    <section 
      id="contact" 
      ref={containerRef} 
      className="bg-cream text-charcoal py-12 md:py-16 px-6 md:px-12 3xl:px-24 flex flex-col justify-center"
    >
      <div className="max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <ContactHeader />
          <ContactContent />
        </div>
      </div>
    </section>
  );
}

function ContactHeader() {
  return (
    <div className="lg:col-span-5 flex flex-col">
      <Heading size="h1" className="contact-reveal text-charcoal">
        Contato
      </Heading>
    </div>
  );
}

function ContactContent() {
  const contactForm = useContactForm();

  return (
    <div className="lg:col-span-7 flex flex-col relative">
      <p className="contact-reveal text-base md:text-lg font-sans text-charcoal/80 leading-relaxed max-w-2xl mb-6">
        Tem um grande projeto em mente? Preencha o formulário abaixo e nossa equipe de especialistas entrará em contato para transformarmos sua visão em realidade.
      </p>

      {contactForm.formState === 'success' && <SuccessMessage />}
      
      <ContactForm {...contactForm} />
      <ContactInfo />
    </div>
  );
}

function SuccessMessage() {
  return (
    <div role="status" aria-live="polite" className="absolute inset-0 flex flex-col items-start justify-center bg-cream z-10 contact-reveal">
      <div className="flex items-center gap-4 mb-4">
        <CheckCircle2 className="w-10 h-10 text-green-600" />
        <h3 className="text-3xl font-sans font-medium text-charcoal">Mensagem Enviada</h3>
      </div>
      <p className="text-lg text-charcoal/70">Agradecemos o contato. Retornaremos em até 24 horas.</p>
    </div>
  );
}

function ContactForm({ formRef, formState, errorMessage, fieldErrors, handleBlur, handleChange, handleSubmit }: ReturnType<typeof useContactForm>) {
  return (
    <form 
      ref={formRef} 
      className={`contact-reveal flex flex-col gap-8 mb-12 mt-6 transition-opacity duration-500 ${formState === 'loading' ? 'opacity-50 pointer-events-none' : ''}`} 
      onSubmit={handleSubmit} 
      noValidate
    >
      {formState === 'error' && errorMessage && (
        <div role="alert" aria-live="polite" className="bg-red-50 border border-red-100 text-red-600 px-6 py-4 rounded-sm text-sm font-sans">
          {errorMessage}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex flex-col gap-2">
          <Input 
            type="text" 
            name="name" 
            id="name"
            placeholder="Seu nome" 
            className="text-lg font-light"
            required
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!fieldErrors.name}
          />
          {fieldErrors.name && (
            <span id="name-error" className="text-[10px] uppercase tracking-widest text-red-600 font-sans mt-1" role="alert">
              {fieldErrors.name}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Input 
            type="email" 
            name="email" 
            id="email"
            placeholder="Seu e-mail profissional" 
            className="text-lg font-light"
            required
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!fieldErrors.email}
          />
          {fieldErrors.email && (
            <span id="email-error" className="text-[10px] uppercase tracking-widest text-red-600 font-sans mt-1" role="alert">
              {fieldErrors.email}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Textarea 
          name="details" 
          id="details"
          placeholder="Conte-nos sobre o seu projeto..." 
          rows={3}
          className="text-lg font-light"
          required
          aria-invalid={!!fieldErrors.details}
          aria-describedby={fieldErrors.details ? "details-error" : undefined}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!fieldErrors.details}
        />
        {fieldErrors.details && (
          <span id="details-error" className="text-[10px] uppercase tracking-widest text-red-600 font-sans mt-1" role="alert">
            {fieldErrors.details}
          </span>
        )}
      </div>
      
      <div className="pt-8">
        <button 
          type="submit" 
          disabled={formState === 'loading'}
          className="group flex items-center gap-4 text-xs md:text-sm uppercase tracking-widest font-bold text-charcoal hover:opacity-70 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm"
          aria-disabled={formState === 'loading'}
        >
          {formState === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
          <span className="w-8 h-[1px] bg-charcoal group-hover:w-12 transition-all duration-300"></span>
        </button>
      </div>
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="contact-reveal grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-charcoal/20">
      <div>
        <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 text-charcoal/70">Informações Gerais</h4>
        <div className="text-sm font-sans text-charcoal/80 space-y-4">
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
            <a href="mailto:hello@formosastudios.com" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm">hello@formosastudios.com</a>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 text-charcoal/70">Redes Sociais</h4>
        <ul className="text-sm font-sans text-charcoal/80 space-y-2">
          <li><a href="#" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm">Instagram</a></li>
          <li><a href="#" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm">Facebook</a></li>
          <li><a href="#" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm">Twitter</a></li>
          <li><a href="#" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
}
