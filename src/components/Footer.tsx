import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cream text-charcoal pt-16 pb-8 px-8 md:px-12 lg:px-16 flex flex-col justify-between min-h-screen border-t border-charcoal/10">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full max-w-[1920px] mx-auto">
        {/* Col 1: Social & Contact (Span 4) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="flex items-baseline gap-4">
            <span className="text-sm text-charcoal/50 w-24">social media:</span>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a>
              <a href="#" className="hover:opacity-70 transition-opacity">GitHub</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
            </div>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-sm text-charcoal/50 w-24">say hello:</span>
            <a href="mailto:hello@formosastudios.com" className="text-sm hover:opacity-70 transition-opacity">hello@formosastudios.com</a>
          </div>
        </div>

        {/* Col 2: Studio (Span 4) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 font-bold">O ESTÚDIO</span>
          <div className="text-sm leading-relaxed">
            <p className="font-serif text-base mb-1">Estúdio Formosa</p>
            <p className="text-charcoal/70">Vila Formosa, São Paulo</p>
            <p className="text-charcoal/70">Brasil</p>
          </div>
        </div>

        {/* Col 4: Navigation (Span 4) */}
        <div className="md:col-span-4 flex flex-wrap justify-start md:justify-end gap-x-6 gap-y-2 text-sm uppercase tracking-wide">
          <a href="#" className="hover:opacity-70 transition-opacity">HOME</a>
          <a href="#portfolio" className="hover:opacity-70 transition-opacity">PROJECTS</a>
          <a href="#mission" className="hover:opacity-70 transition-opacity">ABOUT</a>
          <a href="#services" className="hover:opacity-70 transition-opacity">SERVICES</a>
          <a href="#faq" className="hover:opacity-70 transition-opacity">FAQ</a>
        </div>
      </div>

      {/* Middle Section: Huge Typography */}
      <div className="flex-grow flex items-center justify-center py-12 md:py-24 w-full overflow-hidden">
        <h2 className="font-serif text-[22vw] leading-none tracking-tight text-charcoal select-none text-center w-full">
          Formosa
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end w-full max-w-[1920px] mx-auto">
        {/* Left: Spacer to keep center alignment */}
        <div className="w-[144px] hidden md:block shrink-0"></div>

        {/* Center: Copyright */}
        <div className="text-xs text-charcoal/40 pb-4 text-center hidden md:block">
          &copy; {currentYear} Formosa Studios | Design & Engenharia
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
      <div className="text-xs text-charcoal/40 mt-8 text-center md:hidden">
        &copy; {currentYear} Formosa Studios | Design & Engenharia
      </div>
    </footer>
  );
};

export default Footer;
