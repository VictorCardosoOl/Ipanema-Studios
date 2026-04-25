import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import Lenis from 'lenis';
import { X } from 'lucide-react';
import Image from './ui/Image';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const scopedLenisRef = useRef<Lenis | null>(null);

  // Lógica de Scroll Isolado (Lenis)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Trava body
      
      // Inicia Lenis apenas no Modal após mount
      const timeout = setTimeout(() => {
        if (modalContainerRef.current && modalContentRef.current) {
            const scopedLenis = new Lenis({
                wrapper: modalContainerRef.current,
                content: modalContentRef.current,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease Out Quart
                orientation: 'vertical',
                touchMultiplier: 2,
            });
            scopedLenisRef.current = scopedLenis;
            
            function raf(time: number) {
                scopedLenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }
      }, 300); // Delay para permitir animação de entrada

      return () => {
         clearTimeout(timeout);
         document.body.style.overflow = '';
         scopedLenisRef.current?.destroy();
      };
    } else {
      document.body.style.overflow = '';
      scopedLenisRef.current?.destroy();
    }
  }, [isOpen]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            onClick={onClose} 
            className="fixed inset-0 bg-black/90 z-[9998]" 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            exit={{opacity:0}} 
          />
          
          <motion.div
            layoutId={`modal-container-${project.id || project.title}`}
            initial={{ y: "100%" }}
            animate={{ y: "2%", transition: { type: "spring", damping: 30, stiffness: 300 } }}
            exit={{ y: "100%", transition: { duration: 0.4, ease: "easeInOut" } }} // Tween na saída
            className="fixed inset-0 z-[9999] bg-[#0a0a0a] text-[#f5f5f0] rounded-t-[2rem] h-[98vh] overflow-hidden shadow-2xl"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100) onClose();
            }}
          >
            {/* Container de Scroll para o Lenis */}
            <div ref={modalContainerRef} className="h-full w-full overflow-y-auto hidden-scrollbar bg-[#f4f2ee] text-[#111111]">
               <div ref={modalContentRef} className="pb-32 flex flex-col items-center">
                  
                  {/* Fundo com Tipografia Gigante (Estética Don Molinico) */}
                  <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none flex justify-center pt-20 md:pt-32 opacity-5 select-none">
                     <span className="text-[15vw] font-bold uppercase tracking-tighter whitespace-nowrap">
                        {project.title}
                     </span>
                  </div>

                  {/* Detalhes / Header Centralizado */}
                  <div className="container mx-auto px-6 mt-24 md:mt-40 mb-12 flex flex-col items-center text-center relative z-10">
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex gap-4 items-center mb-6 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#E30613]" // Vermelho Don Molinico accent
                     >
                        <span>Projeto</span>
                        <span className="w-1 h-1 rounded-full bg-[#E30613]"></span>
                        <span>2026</span>
                     </motion.div>

                     <motion.h2 
                       layoutId={`title-${project.title}`} 
                       className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[11rem] font-sans font-extrabold uppercase leading-[0.85] tracking-tighter max-w-[90vw]"
                     >
                        {project.title}
                     </motion.h2>
                  </div>

                  {/* Hero Image Flutuante com Bordas Arredondadas */}
                  <div className="w-full max-w-[90vw] md:max-w-[75vw] xl:max-w-[65vw] aspect-[4/3] md:aspect-video relative z-20 mt-8 mb-24">
                     <motion.div 
                       layoutId={`image-${project.title}`} 
                       className="absolute inset-0 w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
                     >
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                        />
                     </motion.div>
                  </div>

                  {/* Conteúdo / Tipografia Secundária */}
                  <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center text-center relative z-10">
                     <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col items-center"
                     >
                        <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-16 max-w-3xl">
                           TRADUZINDO A COMPLEXIDADE DA OPERAÇÃO EM UMA INTERFACE BRUTALMENTE MINIMALISTA E EFICIENTE.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full border-t border-black/10 pt-16">
                           <div className="flex flex-col items-center">
                              <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-3 font-bold">Cliente</h4>
                              <p className="text-lg font-medium">{project.title} Corp.</p>
                           </div>
                           <div className="flex flex-col items-center">
                              <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-3 font-bold">Serviços</h4>
                              <p className="text-lg font-medium">Design System, UX/UI</p>
                           </div>
                           <div className="flex flex-col items-center">
                              <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-3 font-bold">Plataforma</h4>
                              <p className="text-lg font-medium">Web / Kiosk</p>
                           </div>
                        </div>

                        <p className="text-lg md:text-xl opacity-70 leading-relaxed font-light mt-24 max-w-2xl text-center">
                           {project.description} Criamos uma arquitetura de navegação inovadora, aliada a um sistema de design que prioriza o espaço negativo e o contraste profundo, entregando uma experiência imersiva inspirada nos melhores estúdios europeus.
                        </p>
                     </motion.div>
                  </div>

               </div>
            </div>
            
            {/* Botão Fechar Flutuante */}
            <button 
               onClick={onClose} 
               className="absolute top-6 right-6 md:top-8 md:right-8 z-50 w-12 h-12 bg-black/5 hover:bg-black text-black hover:text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md"
            >
               <X size={20} />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
