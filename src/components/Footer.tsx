import React from 'react';
import { Instagram, Linkedin, Twitter, ArrowUpRight, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal text-white py-32 3xl:py-48 px-6 3xl:px-24 overflow-hidden border-t border-white/10">
      {/* 2. Background Typography */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 pointer-events-none select-none z-0">
        <span className="font-display text-[20vw] leading-none text-white/10 uppercase tracking-tighter whitespace-nowrap">
          IPANEMA
        </span>
      </div>

      <div className="max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 3xl:gap-24 lg:gap-0">
          
          {/* Col 1: Identity */}
          <div className="lg:pr-12 3xl:pr-24 lg:border-r border-white/20">
            <h2 className="font-display text-5xl 3xl:text-7xl text-white mb-6 3xl:mb-10">Ipanema Studios</h2>
            <p className="font-serif italic text-2xl 3xl:text-4xl text-white/80 leading-relaxed">
              Elevando o padrão digital através de design editorial e engenharia de precisão.
            </p>
          </div>

          {/* Col 2: Local/CTA */}
          <div className="lg:px-12 3xl:px-24 lg:border-r border-white/20">
            <span className="text-[10px] 3xl:text-xs font-sans uppercase tracking-[0.4em] text-white/60 font-bold mb-8 3xl:mb-12 block">Localização</span>
            <p className="text-sm 3xl:text-lg text-white/90 mb-10 3xl:mb-16 leading-loose font-medium">
              Rio de Janeiro, Brasil<br />
              Atendimento Global / Remoto
            </p>
            <a 
              href="#contact" 
              className="group flex items-center gap-3 text-white hover:text-white/80 transition-all text-xs uppercase tracking-widest font-bold focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal outline-none rounded-sm"
            >
              Vamos conversar
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Col 3: Social */}
          <div className="lg:px-12 3xl:px-24 lg:border-r border-white/20">
            <span className="text-[10px] 3xl:text-xs font-sans uppercase tracking-[0.4em] text-white/60 font-bold mb-8 3xl:mb-12 block">Social</span>
            <ul className="space-y-6 3xl:space-y-8">
              {[
                { name: 'Instagram', icon: <Instagram size={16} />, url: '#' },
                { name: 'LinkedIn', icon: <Linkedin size={16} />, url: '#' },
                { name: 'Twitter', icon: <Twitter size={16} />, url: '#' },
                { name: 'GitHub', icon: <Github size={16} />, url: '#' },
              ].map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.url} 
                    className="flex items-center gap-4 text-white/80 hover:text-white transition-all group font-medium focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal outline-none rounded-sm"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    <span className="text-xs uppercase tracking-widest">{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Menu/Credits */}
          <div className="lg:pl-12 3xl:pl-24">
            <span className="text-[10px] 3xl:text-xs font-sans uppercase tracking-[0.4em] text-white/60 font-bold mb-8 3xl:mb-12 block">Navegação</span>
            <ul className="space-y-4 3xl:space-y-6 mb-16 3xl:mb-24">
              {[
                { name: 'Sobre', url: '#about' },
                { name: 'Processo', url: '#process' },
                { name: 'Portfólio', url: '#portfolio' },
                { name: 'FAQ', url: '#faq' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="text-xs uppercase tracking-widest text-white/80 hover:text-white transition-all hover:translate-x-2 inline-block font-bold focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal outline-none rounded-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="pt-10 border-t border-white/20">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 leading-relaxed font-medium">
                &copy; {currentYear} Ipanema Studios.<br />
                Desenvolvido com excelência técnica.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
