import { motion } from 'motion/react';

export default function Process() {
  return (
    <section id="process" className="min-h-screen grid grid-cols-1 md:grid-cols-12 bg-cream text-charcoal border-t border-charcoal/10">
      {/* Image Column (Left) */}
      <div className="md:col-span-4 relative h-[50vh] md:h-screen bg-sage overflow-hidden">
        {/* Top Left Label */}
        <div className="absolute top-8 left-8 z-20 text-[9px] uppercase tracking-widest font-medium opacity-80">
          Bastidores do Estúdio
        </div>
        
        {/* Moodboard Composition */}
        <div className="absolute inset-0 p-8 pt-24 flex items-center justify-center" aria-hidden="true">
           {/* Background texture */}
           <img 
              src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
              referrerPolicy="no-referrer"
              loading="lazy"
           />
           
           {/* Main framed image */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="relative w-[80%] aspect-[3/4] bg-white p-4 shadow-2xl z-10 border border-charcoal/5"
           >
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop" 
                alt="" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
           </motion.div>

           {/* A&C Card */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
             className="absolute left-4 top-1/3 bg-white p-4 shadow-lg z-20 w-32 aspect-square flex flex-col border border-charcoal/5"
           >
              <span className="font-serif text-xl font-bold">A&C</span>
              <div className="mt-auto border-t border-charcoal/20 pt-2 text-[8px] uppercase tracking-wider">
                Design Studio
              </div>
           </motion.div>
        </div>
      </div>

      {/* Vertical Title Column (Middle) */}
      <div className="md:col-span-2 border-y md:border-y-0 md:border-r border-charcoal/10 flex items-center justify-center py-16 md:py-0 bg-cream">
        <h2 
          className="text-7xl md:text-8xl lg:text-[10rem] font-sans font-medium tracking-[0.15em] uppercase text-charcoal opacity-10"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Processo
        </h2>
      </div>

      {/* Content Column (Right) */}
      <div className="md:col-span-6 flex flex-col min-h-[50vh] md:min-h-screen bg-cream relative">
        {/* Top Right Label */}
        <div className="absolute top-8 right-8 text-[9px] uppercase tracking-widest font-medium opacity-80">
          Página 04 / 06
        </div>
        
        {/* Text Grid at the bottom */}
        <div className="flex-grow flex items-end p-8 md:p-16 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full max-w-3xl">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h3 className="text-[10px] font-bold tracking-widest uppercase mb-4 border-b border-charcoal/10 pb-2">01 / Descoberta & Visão</h3>
              <p className="text-xs leading-relaxed opacity-80 text-justify">
                Começamos entendendo a identidade central da sua marca, público-alvo e objetivos principais. Esse mergulho profundo garante que nossa direção estratégica esteja perfeitamente alinhada com seus objetivos de negócios.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
              <h3 className="text-[10px] font-bold tracking-widest uppercase mb-4 border-b border-charcoal/10 pb-2">02 / Escopo Técnico</h3>
              <p className="text-xs leading-relaxed opacity-80 text-justify">
                Em seguida, mapeamos os requisitos funcionais. Desde preferências de CMS e integrações de terceiros até benchmarks de performance, definimos a arquitetura técnica que impulsionará sua plataforma.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <h3 className="text-[10px] font-bold tracking-widest uppercase mb-4 border-b border-charcoal/10 pb-2">03 / Direção Estética</h3>
              <p className="text-xs leading-relaxed opacity-80 text-justify">
                Curamos moodboards e referências visuais para estabelecer a identidade visual. Esta fase colaborativa nos ajuda a definir a tipografia, paletas de cores e a vibração editorial geral antes do início do design.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
              <h3 className="text-[10px] font-bold tracking-widest uppercase mb-4 border-b border-charcoal/10 pb-2">04 / Cronograma & Proposta</h3>
              <p className="text-xs leading-relaxed opacity-80 text-justify">
                Por fim, sintetizamos nossas descobertas em um cronograma de projeto abrangente. Você receberá um cronograma detalhado, entregáveis claros e um plano estruturado descrevendo exatamente como daremos vida à sua visão.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
