import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Heart } from 'lucide-react';

interface Section01CinematicIntroProps {
  onEnter: () => void;
}

export const Section01CinematicIntro: React.FC<Section01CinematicIntroProps> = ({ onEnter }) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 700);   // "ONE DAY"
    const t2 = setTimeout(() => setStep(2), 2400);  // "THREE BEAUTIFUL CELEBRATIONS"
    const t3 = setTimeout(() => setStep(3), 4200);  // "ONE BIG FAMILY"
    const t4 = setTimeout(() => setStep(4), 5800);  // "Faith • Love • Family • Togetherness"

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#18140e] via-[#0f0d0a] to-[#090807]">
      {/* Church Light Rays Visual Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[700px] bg-gradient-to-b from-[#fae084]/20 via-[#d4af37]/10 to-transparent blur-3xl opacity-60 transform -rotate-12" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[700px] bg-gradient-to-b from-[#fae084]/15 via-[#d4af37]/5 to-transparent blur-2xl opacity-50 transform rotate-12" />
      </div>

      {/* Decorative Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#1e1912]/80 backdrop-blur-md shadow-lg"
      >
        <Sparkles size={14} className="text-[#fae084]" />
        <span className="font-cinzel text-xs uppercase tracking-widest text-[#fae084]">
          A Sacred & Joyful Milestone
        </span>
        <Sparkles size={14} className="text-[#fae084]" />
      </motion.div>

      {/* Sequential Cinematic Typography Reveals */}
      <div className="min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-center max-w-4xl">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, scale: 0.85, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, scale: 1, letterSpacing: '0.35em' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(8px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold text-gold-gradient tracking-widest uppercase">
                ONE DAY
              </h1>
              <p className="font-garamond italic text-lg sm:text-2xl text-[#d4af37]/80">
                A date written in divine timing
              </p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(8px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <span className="font-montserrat text-xs tracking-widest text-[#fae084] uppercase font-semibold">
                Three Generations of Grace
              </span>
              <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-extrabold text-gold-gradient tracking-wider uppercase leading-tight">
                THREE BEAUTIFUL<br />CELEBRATIONS
              </h1>
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="font-montserrat text-xs tracking-[0.3em] text-[#fae084] uppercase font-bold">
                  United In Joy & Gratitude
                </span>
                <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gold-gradient tracking-wider uppercase leading-none">
                  ONE BIG FAMILY
                </h1>
              </div>

              {/* Four Pillars */}
              {step >= 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0 }}
                  className="space-y-6"
                >
                  <p className="font-garamond italic text-xl sm:text-3xl md:text-4xl text-[#fff0d0] tracking-wide">
                    Faith <span className="text-[#d4af37] mx-2">•</span> Love{' '}
                    <span className="text-[#d4af37] mx-2">•</span> Family{' '}
                    <span className="text-[#d4af37] mx-2">•</span> Togetherness
                  </p>

                  <p className="font-montserrat text-xs sm:text-sm text-[#e6decb]/80 max-w-xl mx-auto uppercase tracking-widest">
                    Francis & Rosily’s 50th Jubilee & Andrina & Dhaniel’s First Holy Communion
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enter / Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1 }}
        className="mt-12 sm:mt-16 flex flex-col items-center gap-3 z-10"
      >
        <button
          onClick={onEnter}
          className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#aa7a1e] text-[#090807] font-montserrat font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2"
        >
          <span>Enter The Celebration</span>
          <Sparkles size={16} className="text-[#090807] group-hover:rotate-45 transition-transform" />
        </button>

        <div className="flex flex-col items-center text-[#d4af37]/60 text-xs font-montserrat tracking-widest uppercase mt-3">
          <span className="text-[10px]">Scroll to explore</span>
          <ChevronDown size={18} className="animate-bounce text-[#fae084] mt-1" />
        </div>
      </motion.div>
    </section>
  );
};
