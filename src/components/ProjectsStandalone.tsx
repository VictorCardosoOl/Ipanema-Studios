/**
 * 🚀 Projects Section (Standalone)
 * -------------------------------------------------------------
 * Dependências necessárias para este componente funcionar em outro projeto:
 * npm install gsap lenis lucide-react clsx motion
 * 
 * Este arquivo foi unificado para facilitar a cópia para outros projetos.
 * Contém os dados, componentes visuais (Magnetic, Reveal, ContentModal, ProjectDetailContent)
 * e o componente principal (Projects).
 */

import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, PanInfo, useSpring } from 'motion/react';
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import clsx from 'clsx';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── 1. DADOS DOS PROJETOS (Anteriormente em constants.tsx) ───────────

export const PROJECTS = [
  {
    title: 'Lumina Architecture',
    category: 'SaaS / Plataforma',
    year: '2024',
    description: 'Sistema completo de gestão de ativos digitais para arquitetos, incluindo renderização na nuvem e vitrine de projetos.',
    tags: ['Next.js 14', 'AWS S3', 'Stripe Connect', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&q=80&w=800'
    ],
    link: '#',
    caseStudy: {
      challenge: 'O cliente enfrentava alta latência ao carregar portfólios 4K para leads internacionais.',
      solution: 'Reescrevi a arquitetura usando Next.js com Image Optimization na borda (Edge).',
      result: 'Tempo de carregamento (LCP) reduzido de 4.2s para 0.8s.'
    }
  },
  {
    title: 'Apex Finance Dashboard',
    category: 'Fintech / Dashboard',
    year: '2023',
    description: 'Painel de controle financeiro em tempo real para traders institucionais.',
    tags: ['WebSockets', 'D3.js', 'Node.js', 'Redis'],
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800'
    ],
    link: '#',
    caseStudy: {
      challenge: 'A versão anterior sofria com "stale data" e travamentos.',
      solution: 'Implementei WebSockets para streaming de dados em tempo real.',
      result: 'Capacidade de processar 5x mais dados sem lag.'
    }
  },
  {
    title: 'Velvet E-commerce',
    category: 'Headless Commerce',
    year: '2023',
    description: 'Loja conceito para marca de luxo, focada em animações fluídas.',
    tags: ['Shopify Headless', 'Framer Motion', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
    ],
    link: '#',
    caseStudy: {
      challenge: 'A marca desejava uma experiência de "app nativo" na web.',
      solution: 'Desenvolvi um frontend Headless usando Next.js.',
      result: 'Aumento de 25% no ticket médio.'
    }
  }
];

// ── 2. COMPONENTES UI AUXILIARES ──────────────────────────────────────

// Reveal Component
interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  y?: number;
  className?: string;
  variant?: 'translate' | 'clip' | 'blur' | 'chars';
}

const Reveal: React.FC<RevealProps> = ({
  children,
  width = 'fit-content',
  delay = 0,
  y = 50,
  className = '',
  variant = 'translate',
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const el      = innerRef.current;
    const wrapper = wrapperRef.current;
    if (!el || !wrapper) return;

    const delaySec = delay / 1000;

    const ctx = gsap.context(() => {
      if (variant === 'clip') {
        gsap.set(wrapper, { overflow: 'hidden' });
        gsap.fromTo(el, { yPercent: 105 }, {
          yPercent: 0, duration: 1.0, delay: delaySec, ease: 'power3.out',
          scrollTrigger: { trigger: wrapper, start: 'top 88%', once: true },
        });
        return;
      }
      if (variant === 'chars') {
        const textNode = el.querySelector('[data-chars]') ?? el.firstElementChild ?? el;
        const text = (textNode as HTMLElement).textContent ?? '';
        (textNode as HTMLElement).innerHTML = '';
        (textNode as HTMLElement).style.overflow = 'hidden';

        const spans: HTMLSpanElement[] = [];
        text.split('').forEach((char) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.display = 'inline-block';
          (textNode as HTMLElement).appendChild(span);
          spans.push(span);
        });

        gsap.fromTo(spans, { yPercent: 110, opacity: 0 }, {
          yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.025, delay: delaySec, ease: 'power3.out',
          scrollTrigger: { trigger: wrapper, start: 'top 88%', once: true },
        });
        return;
      }
      if (variant === 'blur') {
        gsap.fromTo(el, { opacity: 0, scale: 1.06, filter: 'blur(10px)' }, {
          opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.0, delay: delaySec, ease: 'power3.out',
          scrollTrigger: { trigger: wrapper, start: 'top 88%', once: true },
        });
        return;
      }
      // 'translate' (padrão)
      gsap.fromTo(el, { opacity: 0, y }, {
        opacity: 1, y: 0, duration: 0.9, delay: delaySec, ease: 'power3.out',
        scrollTrigger: { trigger: wrapper, start: 'top 90%', once: true },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [variant, delay, y]);

  return (
    <div ref={wrapperRef} style={{ width }} className={`relative ${className}`}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
};

// Magnetic Component
interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
}
const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };
  const reset = () => setPosition({ x: 0, y: 0 });

  const { x, y } = position;
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const motionX = useSpring(x, springConfig);
  const motionY = useSpring(y, springConfig);

  return (
    <motion.div ref={ref} style={{ x: motionX, y: motionY }} onMouseMove={handleMouse} onMouseLeave={reset}>
      {React.cloneElement(children as React.ReactElement<any>, {
        style: { ...(children as React.ReactElement<any>).props.style }
      })}
    </motion.div>
  );
};

// ContentModal Component
interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  category?: string;
  theme?: 'light' | 'dark';
  children: React.ReactNode;
}
const ContentModal: React.FC<ContentModalProps> = ({ 
  isOpen, onClose, theme = 'dark', children 
}) => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const scopedLenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      setMounted(false);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    let rafId: number;
    let timer: NodeJS.Timeout;

    if (isOpen) {
      document.body.style.overflow = 'hidden';

      timer = setTimeout(() => {
        if (modalContainerRef.current && modalContentRef.current) {
            const scopedLenis = new Lenis({
                wrapper: modalContainerRef.current,
                content: modalContentRef.current,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
            });
            scopedLenisRef.current = scopedLenis;
            function raf(time: number) {
                scopedLenis.raf(time);
                rafId = requestAnimationFrame(raf);
            }
            rafId = requestAnimationFrame(raf);
        }
      }, 300);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
      if (scopedLenisRef.current) {
        scopedLenisRef.current.destroy();
        scopedLenisRef.current = null;
      }
      if (isOpen) {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen]);

  useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) onClose(); };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    if (info.offset.y > 100 || info.velocity.y > 200) onClose();
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[9998] bg-[#000000]/95 cursor-pointer"
          aria-hidden="true"
        />
      )}
      {isOpen && (
        <motion.div
          key="modal-container"
          initial={{ y: "100%" }}
          animate={{ y: isMobile ? "0%" : "2%", transition: { type: "spring", damping: 30, stiffness: 300, mass: 1 } }} 
          exit={{ y: "100%", transition: { duration: 0.4, ease: "easeInOut" } }}
          drag={isMobile ? "y" : false}
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={{ top: 0, bottom: 0.2 }}
          onDragEnd={handleDragEnd}
          className={`fixed left-0 right-0 bottom-0 z-[9999] w-full bg-[#FFFFFF] shadow-2xl overflow-hidden flex flex-col ${isMobile ? 'h-[100dvh] rounded-none' : 'h-[98vh] rounded-t-[2rem] max-w-[96vw] mx-auto'}`}
        >
          <div className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex items-start justify-end pointer-events-none">
             <div className="pointer-events-auto">
              <Magnetic strength={0.3}>
                  <button 
                  onClick={onClose}
                  className={`w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg group ${theme === 'light' ? 'bg-[#000000] border border-[#000000] text-white hover:bg-[#111111]' : 'bg-white/10 border border-white/20 text-white hover:bg-white hover:text-[#000000]'}`}
                  >
                  <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                  </button>
              </Magnetic>
             </div>
          </div>
          <div ref={modalContainerRef} className="flex-grow h-full w-full overflow-y-auto relative bg-[#FFFFFF] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" data-lenis-prevent>
             <div ref={modalContentRef} className="will-change-transform">
                 {children}
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

// ── 3. PROJECT DETAIL CONTENT ─────────────────────────────────────────

const MotionImg = motion.img as any;
const MotionH1 = motion.h1 as any;

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 50 : -50, opacity: 0, scale: 1.05, filter: "blur(4px)" }),
  center: { zIndex: 1, x: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 50 : -50, opacity: 0, scale: 0.95, filter: "blur(4px)" })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

const ProjectDetailContent: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const galleryImages = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];
  const imageIndex = ((page % galleryImages.length) + galleryImages.length) % galleryImages.length;

  const paginate = (newDirection: number) => setPage([page + newDirection, newDirection]);

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <div className="w-full h-[60vh] md:h-[75vh] relative overflow-hidden bg-[#000000]">
        <MotionImg 
          src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80"
          initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/20 to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 z-10">
            <Reveal>
                <MotionH1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-light text-[#FFFFFF] tracking-tighter leading-[0.9] mb-8">{project.title}</MotionH1>
            </Reveal>
            <Reveal delay={100}>
                <div className="flex flex-wrap items-center gap-6 text-[#FFFFFF]/80 border-t border-white/10 pt-6">
                   <div className="flex flex-col"><span className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Ano</span><span className="font-mono text-sm">{project.year}</span></div>
                   <div className="flex flex-col"><span className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Categoria</span><span className="font-mono text-sm">{project.category}</span></div>
                </div>
            </Reveal>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 relative z-10 bg-[#FFFFFF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-24">
            <div className="lg:col-span-3 order-2 lg:order-1">
               <div className="sticky top-24 space-y-12">
                   <div>
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-[#000000]/40 mb-4 border-b border-[#000000]/10 pb-2">Tech Stack</span>
                      <div className="flex flex-col gap-3">
                        {project.tags.map((tag, i) => (
                           <div key={i} className="flex items-center gap-2 text-sm text-[#000000] font-medium"><span className="w-1.5 h-1.5 bg-[#999999] rounded-full"></span> {tag}</div>
                        ))}
                      </div>
                   </div>
                   <div>
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-[#000000]/40 mb-4 border-b border-[#000000]/10 pb-2">Deploy</span>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#000000] hover:text-[#999999] transition-colors group">
                        Acessar Projeto <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                   </div>
               </div>
            </div>
            <div className="lg:col-span-9 order-1 lg:order-2">
               <div className="mb-24">
                  <Reveal width="100%">
                    <p className="text-xl md:text-3xl lg:text-4xl font-serif font-light text-[#000000] leading-[1.4] indent-12 md:indent-24">
                      {project.description} Como desenvolvedor responsável, foquei em criar uma arquitetura limpa e manutenível. O objetivo principal foi garantir performance sem sacrificar a fidelidade visual do design.
                    </p>
                  </Reveal>
               </div>
               {project.caseStudy && (
                 <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-32 border-t border-[#000000]/10 pt-16">
                       <Reveal><span className="text-xs font-mono text-[#999999] mb-4 block uppercase tracking-widest">01 / O Desafio</span><h3 className="text-2xl font-serif font-light text-[#000000] mb-6">{project.caseStudy.challenge}</h3></Reveal>
                       <Reveal delay={100}><span className="text-xs font-mono text-[#999999] mb-4 block uppercase tracking-widest">02 / A Solução (Code)</span><h3 className="text-2xl font-serif font-light text-[#000000] mb-6">{project.caseStudy.solution}</h3></Reveal>
                    </div>
                    <Reveal width="100%">
                        <div className="bg-[#000000] text-white p-8 md:p-16 rounded-sm relative overflow-hidden mb-32 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-[#000000] opacity-50"></div>
                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6 block">Impacto Técnico</span>
                                    <h4 className="text-6xl md:text-9xl font-serif font-light tracking-tighter leading-[0.8] mb-4">{project.caseStudy.result.split(' ').find(w => w.includes('%') || w.match(/\d/)) || "100%"}</h4>
                                    <p className="text-lg text-white/70 font-light max-w-sm">{project.caseStudy.result}</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                 </>
               )}
               <div className="space-y-8">
                  <div className="flex items-center justify-between border-b border-[#000000]/10 pb-4">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-[#000000]/40">Interface & Código</span>
                     <span className="text-[10px] font-mono text-[#000000]/40">{imageIndex + 1} / {galleryImages.length}</span>
                  </div>
                  <div className="relative aspect-video bg-[#000000]/5 overflow-hidden rounded-sm group shadow-inner">
                      <AnimatePresence initial={false} custom={direction}>
                          <MotionImg
                             key={page} src={galleryImages[imageIndex]} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit"
                             transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 }, scale: { duration: 0.4 } }}
                             drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={1}
                             onDragEnd={(e: any, { offset, velocity }: any) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) paginate(1);
                                else if (swipe > swipeConfidenceThreshold) paginate(-1);
                             }} alt={`Gallery image ${imageIndex + 1}`} className="absolute w-full h-full object-cover"
                          />
                      </AnimatePresence>
                      <button onClick={() => paginate(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-[#000000]/80 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-[#000000] hover:scale-110 z-10"><ChevronLeft size={20} /></button>
                      <button onClick={() => paginate(1)} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-[#000000]/80 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-[#000000] hover:scale-110 z-10"><ChevronRight size={20} /></button>
                  </div>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                      {galleryImages.map((img, idx) => (
                          <div key={idx} onClick={() => setPage([idx, idx > imageIndex ? 1 : -1])} className={`relative aspect-square cursor-pointer overflow-hidden rounded-sm transition-all duration-300 ${imageIndex === idx ? 'ring-2 ring-[#000000] ring-offset-2 opacity-100 scale-105 shadow-md' : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0'}`}>
                             <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                          </div>
                      ))}
                  </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

// ── 4. COMPONENTE PRINCIPAL (Projects) ──────────────────────────────────

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevActiveRef = useRef(0);

  const sectionRef  = useRef<HTMLElement>(null);
  const leftRef     = useRef<HTMLDivElement>(null);
  const rightRef    = useRef<HTMLDivElement>(null);
  const imageRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const imgElemRefs = useRef<(HTMLImageElement | null)[]>([]);
  const watermarkRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const rowRefs     = useRef<(HTMLDivElement | null)[]>([]);

  // NOTA: useLenis foi removido da dependência externa, caso use Lenis no projeto pai, você deve ligá-lo ao GSAP ScrollTrigger aqui.
  
  useLayoutEffect(() => {
    if (!leftRef.current || !rightRef.current || !sectionRef.current) return;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${rightRef.current!.offsetHeight - window.innerHeight}`,
          pin: leftRef.current,
          pinSpacing: false,
          anticipatePin: 1,
        });
      });
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  useEffect(() => {
    const obs: IntersectionObserver[] = [];
    imageRefs.current.forEach((el, idx) => {
      if (!el) return;
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(idx); },
        { rootMargin: '-49% 0px -49% 0px', threshold: 0 }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    const prev = prevActiveRef.current;
    const curr = activeIndex;
    prevActiveRef.current = curr;

    if (prev === curr) return;

    const prevRow = rowRefs.current[prev];
    if (prevRow) gsap.to(prevRow, { opacity: 0.22, duration: 0.4, ease: 'power2.out' });

    const currRow = rowRefs.current[curr];
    if (currRow) gsap.fromTo(currRow, { opacity: 0.22, x: -6 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' });

    const prevWm = watermarkRefs.current[prev];
    if (prevWm) gsap.to(prevWm, { opacity: 0, y: -10, duration: 0.35, ease: 'power2.in' });

    const currWm = watermarkRefs.current[curr];
    if (currWm) gsap.fromTo(currWm, { opacity: 0, y: 12, filter: 'blur(4px)' }, { opacity: 0.7, y: 0, filter: 'blur(0px)', duration: 0.55, ease: 'power3.out' });
  }, [activeIndex]);

  const handleImageEnter = (idx: number) => {
    const img = imgElemRefs.current[idx];
    if (img) gsap.to(img, { scale: 1.05, duration: 0.7, ease: 'power2.out', overwrite: 'auto' });
  };
  const handleImageLeave = (idx: number) => {
    const img = imgElemRefs.current[idx];
    if (img) gsap.to(img, { scale: 1, duration: 0.7, ease: 'power2.out', overwrite: 'auto' });
  };

  return (
    <section ref={sectionRef} id="projects-standalone" className="w-full bg-white relative">
      <div ref={rightRef} className="w-full flex flex-col lg:flex-row">
        <div ref={leftRef} className="hidden lg:flex lg:w-1/2 h-screen flex-col justify-between py-20 pl-16 pr-12 bg-white z-10">
          <div className="overflow-hidden">
            <h2 className="font-inter font-bold text-[#161719] tracking-tighter uppercase leading-[0.85]" style={{ fontSize: 'clamp(2rem, 4.5vw, 68px)' }}>Obras<br />Selecionadas</h2>
          </div>
          <div className="flex flex-col gap-3">
            {PROJECTS.map((project, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div key={idx} ref={el => { rowRefs.current[idx] = el; }} onClick={() => setSelectedProject(project)} className={clsx('flex justify-between items-baseline cursor-pointer', isActive ? 'opacity-100' : 'opacity-[0.22]')}>
                  <span className={clsx('font-inter transition-all duration-300', isActive ? 'text-lg font-bold uppercase text-[#161719]' : 'text-lg font-normal text-[#161719]')}>{(idx + 1).toString().padStart(2, '0')} {project.title}</span>
                  <span className={clsx('font-inter text-sm transition-all duration-300', isActive ? 'font-bold text-[#161719]' : 'font-normal text-[#161719]')}>{project.year}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col">
          {PROJECTS.map((project, index) => (
            <div key={index} ref={el => { imageRefs.current[index] = el; }} className="relative w-full overflow-hidden cursor-pointer group" style={{ height: '100vh' }} onClick={() => setSelectedProject(project)} onMouseEnter={() => handleImageEnter(index)} onMouseLeave={() => handleImageLeave(index)}>
              <img ref={el => { imgElemRefs.current[index] = el; }} src={project.image} alt={project.title} className="w-full h-full object-cover will-change-transform" />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span ref={el => { watermarkRefs.current[index] = el; }} className="text-white font-inter font-light text-2xl md:text-4xl tracking-widest" style={{ opacity: index === 0 ? 0.7 : 0 }}>© {project.title.toLowerCase()}</span>
              </div>
              <div className="absolute bottom-8 left-6 flex flex-col gap-1 lg:hidden">
                <span className="text-white font-inter font-bold text-2xl tracking-tighter">{project.title}</span>
                <span className="text-white/60 font-inter text-sm uppercase tracking-widest">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContentModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} title={selectedProject?.title} category={selectedProject?.category}>
        {selectedProject && <ProjectDetailContent project={selectedProject} />}
      </ContentModal>
    </section>
  );
};

export default Projects;
