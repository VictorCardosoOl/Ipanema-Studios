import React from 'react';
import { Instagram, Linkedin, Twitter, ArrowUpRight, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-stone-950 text-stone-400 py-24 px-6 overflow-hidden border-t border-stone-900">
      {/* 1. Texture Layer (Noise) */}
      <div 
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />

      {/* 2. Background Typography */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 pointer-events-none select-none z-0">
        <span className="font-display text-[18vw] leading-none text-stone-900/40 uppercase tracking-tighter whitespace-nowrap">
          IPANEMA
        </span>
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          
          {/* Col 1: Identity */}
          <div className="lg:pr-12 lg:border-r border-stone-800">
            <h2 className="font-display text-4xl text-stone-100 mb-4">Ipanema Studios</h2>
            <p className="font-serif italic text-lg text-stone-500 leading-relaxed">
              Elevando o padrão digital através de design editorial e engenharia de precisão.
            </p>
          </div>

          {/* Col 2: Local/CTA */}
          <div className="lg:px-12 lg:border-r border-stone-800">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-stone-600 mb-6 block">Localização</span>
            <p className="text-sm text-stone-400 mb-8 leading-loose">
              Rio de Janeiro, Brasil<br />
              Atendimento Global / Remoto
            </p>
            <a 
              href="#contact" 
              className="group flex items-center gap-2 text-stone-100 hover:text-white transition-colors text-sm font-medium"
            >
              Vamos conversar
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Col 3: Social */}
          <div className="lg:px-12 lg:border-r border-stone-800">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-stone-600 mb-6 block">Social</span>
            <ul className="space-y-4">
              {[
                { name: 'Instagram', icon: <Instagram size={18} />, url: '#' },
                { name: 'LinkedIn', icon: <Linkedin size={18} />, url: '#' },
                { name: 'Twitter', icon: <Twitter size={18} />, url: '#' },
                { name: 'GitHub', icon: <Github size={18} />, url: '#' },
              ].map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.url} 
                    className="flex items-center gap-3 hover:text-stone-100 transition-colors group"
                  >
                    <span className="text-stone-600 group-hover:text-stone-100 transition-colors">
                      {social.icon}
                    </span>
                    <span className="text-sm">{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Menu/Credits */}
          <div className="lg:pl-12">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-stone-600 mb-6 block">Navegação</span>
            <ul className="space-y-3 mb-12">
              {[
                { name: 'Sobre', url: '#about' },
                { name: 'Processo', url: '#process' },
                { name: 'Portfólio', url: '#portfolio' },
                { name: 'FAQ', url: '#faq' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="text-sm hover:text-stone-100 transition-all hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="pt-8 border-t border-stone-900">
              <p className="text-[10px] uppercase tracking-widest text-stone-700">
                &copy; {currentYear} Ipanema Studios.<br />
                Desenvolvido com excelência.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
