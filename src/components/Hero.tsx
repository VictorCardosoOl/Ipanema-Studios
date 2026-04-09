import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Panel - Cream */}
      <div className="bg-cream p-8 md:p-12 flex flex-col justify-between min-h-[50vh] md:min-h-screen pt-24">
        <header>
          <h1 className="text-xl font-medium tracking-tight opacity-0">Ipanema Studios</h1>
        </header>
        
        <nav className="w-full max-w-md mt-24 md:mt-0" aria-label="Main Navigation">
          <ul className="text-sm font-medium tracking-wide">
            {[
              { name: 'sobre', link: '#about', page: '03' },
              { name: 'valores', link: '#values', page: '09' },
              { name: 'missão', link: '#mission', page: '16' },
              { name: 'processo', link: '#process', page: '19' },
              { name: 'portfólio', link: '#portfolio', page: '22' },
              { name: 'contato', link: '#contact', page: '24' },
            ].map((item, i) => (
              <li key={i} className="border-b border-charcoal/30 last:border-0">
                <a href={item.link} className="flex justify-between py-3 hover:opacity-60 transition-opacity">
                  <span>{item.name}</span>
                  <span>{item.page}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Right Panel - Charcoal */}
      <div className="bg-charcoal text-cream p-8 md:p-12 flex flex-col min-h-[50vh] md:min-h-screen relative pt-24">
        <div className="flex justify-between text-[10px] uppercase tracking-widest opacity-70">
          <span>Perfil da Agência</span>
          <span>2026</span>
          <span>01 / 06</span>
        </div>
        
        <div className="flex-grow flex items-center justify-center p-8 md:p-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full max-w-sm aspect-[3/4]"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
              alt="Minimalist Architecture" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              // LCP image, no lazy loading
            />
            {/* Overlapping smaller image for editorial feel */}
            <div className="absolute -bottom-12 -left-12 w-2/3 aspect-square border-4 border-charcoal" aria-hidden="true">
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" 
                alt="" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
