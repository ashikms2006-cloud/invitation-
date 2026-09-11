import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Sparkles } from 'lucide-react';
import { PosterData } from './PosterLightbox';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioEngine';

interface Section03ThreeCardsProps {
  posters: PosterData[];
  onOpenPoster: (index: number) => void;
}

export const Section03ThreeCards: React.FC<Section03ThreeCardsProps> = ({
  posters,
  onOpenPoster,
}) => {
  const handleCardClick = (index: number) => {
    audioEngine.playCelebrationChime();
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#ffffff', '#fae084', '#d4af37', '#aa7a1e'],
    });
    onOpenPoster(index);
  };

  return (
    <section id="celebrations" className="relative py-20 px-4 sm:px-6 bg-[#fdfbf7] overflow-hidden border-t border-[#d4af37]/20">
      {/* Background Soft Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#fae084]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d4af37]/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10 text-center">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/50 bg-[#ffffff] text-[#8a6405] font-montserrat text-xs tracking-widest uppercase mb-4 shadow-sm"
        >
          <Sparkles size={13} className="text-[#b8860b]" />
          <span>Three Sacred Milestones • One Holy Day</span>
          <Sparkles size={13} className="text-[#b8860b]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black text-[#1f1a14] uppercase tracking-wider mb-3"
        >
          THREE CELEBRATIONS.<br /><span className="text-gold-gradient">ONE SPECIAL DAY.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-garamond italic text-lg sm:text-2xl text-[#5e5343] max-w-2xl mx-auto mb-12"
        >
          Each milestone holds equal sacred joy in the hearts of our family. Tap any poster to inspect in full detail.
        </motion.p>

        {/* 3 Equal-Sized Interactive Poster Cards in White & Gold */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 items-stretch">
          {posters.map((poster, index) => (
            <motion.div
              key={poster.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="flex flex-col h-full"
            >
              <div
                onClick={() => handleCardClick(index)}
                className="group relative flex-1 flex flex-col rounded-3xl overflow-hidden border-2 border-[#d4af37]/40 bg-[#ffffff] p-3.5 sm:p-4 shadow-[0_10px_35px_rgba(184,134,11,0.12)] hover:border-[#b8860b] hover:shadow-[0_15px_45px_rgba(184,134,11,0.25)] transition-all duration-500 cursor-pointer"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-[11px] font-montserrat uppercase tracking-wider font-bold text-[#8a6405] bg-[#f7f2e7] border border-[#d4af37]/40 px-3 py-0.5 rounded-full shadow-sm">
                    {poster.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[#8a6405] group-hover:text-[#b8860b] text-xs font-montserrat transition-colors">
                    <Maximize2 size={14} className="group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline text-[11px]">Enlarge</span>
                  </div>
                </div>

                {/* Poster Image Container */}
                <div className="relative aspect-[3/4.8] w-full rounded-2xl overflow-hidden bg-[#faf7f0] border border-[#d4af37]/30 shadow-inner">
                  <img
                    src={poster.src}
                    alt={poster.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3.5 rounded-full bg-white/95 border border-[#d4af37] text-[#8a6405] shadow-xl scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 size={22} />
                    </div>
                  </div>
                </div>

                {/* Card Information */}
                <div className="pt-4 pb-1 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[#1f1a14] group-hover:text-[#b8860b] transition-colors mb-1">
                      {poster.title}
                    </h3>
                    <p className="font-garamond italic text-sm text-[#8a6405] font-semibold mb-2">
                      {poster.subtitle}
                    </p>
                  </div>

                  <p className="font-montserrat text-xs text-[#5e5343] line-clamp-2 px-2">
                    {poster.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
