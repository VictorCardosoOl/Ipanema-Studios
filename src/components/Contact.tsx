import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-cream text-charcoal py-24 px-8 md:px-12 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left: Copy */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight mb-6">Vamos construir<br/>algo<br/>excepcional.</h2>
            <p className="text-sm opacity-80 max-w-sm leading-relaxed">
              Seja lançando uma nova marca ou reimaginando uma plataforma existente, nossa equipe está pronta para dar vida à sua visão com precisão e elegância.
            </p>
          </div>
          
          <div className="mt-16 md:mt-0">
            <div className="text-[10px] uppercase tracking-widest opacity-50 mb-2">Contato</div>
            <a href="mailto:hello@ipanemastudios.com" className="text-lg hover:opacity-70 transition-opacity">hello@ipanemastudios.com</a>
          </div>
        </div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-charcoal text-cream p-8 md:p-12"
        >
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[10px] uppercase tracking-widest opacity-70">Nome</label>
              <input type="text" id="name" className="bg-transparent border-b border-cream/30 pb-2 focus:outline-none focus:border-cream transition-colors text-sm" placeholder="João Silva" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[10px] uppercase tracking-widest opacity-70">E-mail</label>
              <input type="email" id="email" className="bg-transparent border-b border-cream/30 pb-2 focus:outline-none focus:border-cream transition-colors text-sm" placeholder="joao@exemplo.com" required />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="text-[10px] uppercase tracking-widest opacity-70">Orçamento</label>
              <select id="budget" className="bg-transparent border-b border-cream/30 pb-2 focus:outline-none focus:border-cream transition-colors text-sm appearance-none rounded-none">
                <option value="" className="bg-charcoal text-cream">Selecione uma faixa</option>
                <option value="10k-25k" className="bg-charcoal text-cream">R$ 10k - R$ 25k</option>
                <option value="25k-50k" className="bg-charcoal text-cream">R$ 25k - R$ 50k</option>
                <option value="50k+" className="bg-charcoal text-cream">R$ 50k+</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="text-[10px] uppercase tracking-widest opacity-70">Detalhes do Projeto</label>
              <textarea id="details" rows={3} className="bg-transparent border-b border-cream/30 pb-2 focus:outline-none focus:border-cream transition-colors text-sm resize-none" placeholder="Conte-nos sobre sua visão..." required></textarea>
            </div>

            <button type="submit" className="mt-4 border border-cream rounded-full px-8 py-3 text-sm hover:bg-cream hover:text-charcoal transition-colors self-start">
              Enviar Mensagem
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
