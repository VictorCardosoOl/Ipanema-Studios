import { motion } from 'motion/react';

export default function Portfolio() {
  const projects = [
    {
      title: "Lumina Residences",
      category: "Plataforma Imobiliária",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Aura Skincare",
      category: "Experiência de E-Commerce",
      image: "https://images.unsplash.com/photo-1615397323758-1e0e4179323c?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="min-h-screen bg-charcoal text-cream py-32 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-24 border-b border-cream/10 pb-12">
          <h2 className="text-5xl md:text-8xl font-serif font-light tracking-tight">Trabalhos <br/><span className="italic opacity-40">Selecionados</span></h2>
          <span className="text-[10px] uppercase tracking-widest opacity-50 mb-4">Página 05 / 06</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          {projects.map((project, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-[4/5] overflow-hidden mb-8 relative bg-stone-900">
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-serif mb-2">{project.title}</h3>
                  <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">{project.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center group-hover:bg-cream group-hover:text-charcoal transition-all duration-500 transform group-hover:rotate-45">
                  <span className="text-xl" aria-hidden="true">↗</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
