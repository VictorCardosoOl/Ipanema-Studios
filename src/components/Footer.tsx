import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { Heading } from './ui/Heading';
import DecryptedText from './ui/DecryptedText';

const Footer = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={containerRef} className="bg-cream text-charcoal pt-8 pb-6 flex flex-col justify-between border-t border-charcoal/10">
      {/* Top Section */}
      <div className="container-fluid grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Col 1: Social & Contact (Span 5) */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <span className="text-fluid-label uppercase tracking-widest text-charcoal/60 font-bold w-32 shrink-0">Redes Sociais</span>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm font-sans">
              <a href="#" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm">LinkedIn</a>
              <a href="#" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm">GitHub</a>
              <a href="#" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm">Instagram</a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <span className="text-fluid-label uppercase tracking-widest text-charcoal/60 font-bold w-32 shrink-0">Diga Olá</span>
            <a href="mailto:hello@victorcardoso.com" className="text-sm font-sans hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm">hello@victorcardoso.com</a>
          </div>
        </div>

        {/* Col 2: Studio (Span 3) */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="text-fluid-label uppercase tracking-widest text-charcoal/60 font-bold">O Estúdio</span>
          <div className="text-sm font-sans leading-relaxed">
            <p className="font-serif text-lg italic mb-1">Victor Cardoso</p>
            <p className="text-charcoal/70">São Paulo</p>
            <p className="text-charcoal/70">Brasil</p>
          </div>
        </div>

        {/* Col 3: Navigation (Span 4) */}
        <div className="md:col-span-4 flex flex-col sm:flex-row flex-wrap justify-start md:justify-end gap-x-8 gap-y-4 text-fluid-label font-bold uppercase tracking-widest">
          <a href="#" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm">Home</a>
          <a href="#portfolio" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm">Projetos</a>
          <a href="#mission" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm">Sobre</a>
          <a href="#services" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm">Serviços</a>
        </div>
      </div>

      {/* Middle Section: Huge Typography */}
      <div className="flex-grow flex items-center justify-center py-6 md:py-8 w-full overflow-hidden">
        <Heading size="huge" className="select-none text-center w-full flex justify-center uppercase">
          <DecryptedText 
            text="VICTOR CARDOSO"
            speed={60}
            maxIterations={15}
            characters="A&C1234!?"
            animateOn="view"
            revealDirection="center"
          />
        </Heading>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end w-full max-w-[1920px] mx-auto">
        {/* Left: Spacer to keep center alignment */}
        <div className="w-[144px] hidden md:block shrink-0"></div>

        {/* Center: Copyright */}
        <div className="text-xs text-charcoal/60 pb-4 text-center hidden md:block">
          &copy; {currentYear} Victor Cardoso | Design & Engenharia
        </div>

        {/* Right: Buttons */}
        <div className="flex gap-4 shrink-0 ml-auto md:ml-0">
          <button 
            onClick={scrollToTop}
            className="w-16 h-16 rounded-full border border-charcoal/10 bg-white flex items-center justify-center hover:bg-charcoal/5 transition-colors focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-charcoal stroke-[1.5]" />
          </button>
          <button 
            className="w-16 h-16 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream outline-none"
            aria-label="Chat"
          >
            <MessageCircle size={24} className="text-white stroke-[1.5]" />
          </button>
        </div>
      </div>
      
      {/* Mobile Copyright */}
      <div className="text-xs text-charcoal/60 mt-8 text-center md:hidden">
        &copy; {currentYear} Victor Cardoso | Design & Engenharia
      </div>
    </footer>
  );
};

export default Footer;
