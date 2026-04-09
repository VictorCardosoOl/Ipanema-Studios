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
    <section id="portfolio" className="min-h-screen bg-charcoal text-cream py-24 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-cream/20 pb-8">
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight">Trabalhos Selecionados</h2>
          <span className="text-[10px] uppercase tracking-widest opacity-70">Página 05 / 06</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-[4/3] overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-serif mb-1">{project.title}</h3>
                  <p className="text-xs uppercase tracking-widest opacity-60">{project.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center group-hover:bg-cream group-hover:text-charcoal transition-colors">
                  <span className="text-lg" aria-hidden="true">↗</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
