import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Bot, User } from 'lucide-react';
import { useAiChat } from '../hooks/useAiChat';
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
      className="bg-cream text-charcoal py-12 md:py-16 px-6 md:px-12 3xl:px-24 flex flex-col justify-center min-h-[80vh]"
    >
      <div className="max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <ContactHeader />
          <AiChatInterface />
        </div>
      </div>
    </section>
  );
}

function ContactHeader() {
  return (
    <div className="lg:col-span-5 flex flex-col">
      <Heading size="h1" className="contact-reveal text-charcoal mb-4">
        Scoping
      </Heading>
      <p className="contact-reveal text-sm md:text-base font-sans text-charcoal/70 leading-relaxed max-w-sm">
        Converse com nossa IA de pré-scoping para nos ajudar a entender os requisitos técnicos e de engenharia do seu desafio antes de nossa reunião de alinhamento.
      </p>
    </div>
  );
}

function AiChatInterface() {
  const { messages, isLoading, sendMessage } = useAiChat();
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="lg:col-span-7 flex flex-col relative h-[500px] border border-charcoal/10 bg-white p-4 contact-reveal shadow-sm">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-charcoal text-cream' : 'bg-sage text-charcoal'}`}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`p-3 max-w-[80%] rounded-sm text-sm font-sans ${msg.role === 'user' ? 'bg-charcoal text-cream' : 'bg-sage text-charcoal'}`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 flex-row">
            <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center shrink-0">
              <Bot size={16} />
            </div>
            <div className="p-3 max-w-[80%] rounded-sm text-sm font-sans bg-sage text-charcoal/50 flex gap-1">
              <span className="animate-bounce">.</span><span className="animate-bounce delay-100">.</span><span className="animate-bounce delay-200">.</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Descreva seu projeto ou dúvida..." 
          disabled={isLoading}
          className="flex-1 border border-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-charcoal disabled:opacity-50 font-sans bg-transparent"
        />
        <button 
          type="submit" 
          disabled={isLoading || !input.trim()}
          className="bg-charcoal text-cream px-6 py-3 flex items-center justify-center disabled:opacity-50 hover:bg-black transition-colors"
        >
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}
