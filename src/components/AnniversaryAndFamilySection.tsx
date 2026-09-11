import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Maximize2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioEngine';

interface AnniversarySectionProps {
  onOpenAnniversaryModal: () => void;
}

export const AnniversaryAndFamilySection: React.FC<AnniversarySectionProps> = ({
  onOpenAnniversaryModal,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    audioEngine.playCelebrationChime();
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#fae084', '#d4af37', '#aa7a1e'],
    });
    onOpenAnniversaryModal();
  };

  return (
    <section id="anniversary" className="relative py-20 px-4 sm:px-6 bg-[#fdfbf7] overflow-hidden border-t border-[#d4af37]/20">
      {/* Background Soft Golden Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4af37]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 space-y-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/50 bg-[#ffffff] text-[#8a6405] font-montserrat text-xs tracking-widest uppercase font-bold shadow-sm">
            <Sparkles size={13} className="text-[#b8860b]" />
            <span>Golden Jubilee & Family Heritage</span>
            <Sparkles size={13} className="text-[#b8860b]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-[#1f1a14] uppercase tracking-wide">
            THE LOVE THAT <span className="text-gold-gradient">CONNECTS THEM ALL</span>
          </h2>

          <p className="font-garamond italic text-xl sm:text-2xl text-[#5e5343]">
            “50 years of steadfast love. Two new steps of faith. One family celebrating together.”
          </p>
        </motion.div>

        {/* Anniversary Tribute Card in White & Gold */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-b from-[#ffffff] to-[#faf5e8] p-6 sm:p-10 rounded-3xl border-2 border-[#d4af37] shadow-[0_15px_45px_rgba(184,134,11,0.15)] relative overflow-hidden"
        >
          {/* Top Gold Foil Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#aa7a1e]" />

          {/* Left: The Official 50th Anniversary Poster */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              onClick={handleCardClick}
              className="relative group w-full max-w-xs rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-[0_10px_30px_rgba(184,134,11,0.25)] bg-[#faf7f0] cursor-pointer"
            >
              {/* Couple's Official Anniversary Poster */}
              <img
                src="/assets/poster_anniversary.jpg"
                alt="Francis & Rosily 50th Wedding Anniversary"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />

              {/* Golden Heart Badge */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-white/90 border border-[#d4af37] text-[#b8860b] shadow-md backdrop-blur-md">
                <Heart size={16} className="fill-[#d4af37] text-[#b8860b] animate-pulse" />
              </div>

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3.5 rounded-full bg-white/95 border border-[#d4af37] text-[#8a6405] shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 size={22} />
                </div>
              </div>
            </motion.div>

            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xs font-montserrat text-[#8a6405] mt-3 font-semibold flex items-center gap-1.5 cursor-pointer"
              onClick={handleCardClick}
            >
              <Sparkles size={12} className="text-[#b8860b]" />
              <span>Tap poster to enlarge full card</span>
            </motion.span>
          </div>

          {/* Right: Golden Jubilee Tribute & Family Generation Tree */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* 50 YEARS OF LOVE */}
            <div className="space-y-3">
              <div className="flex items-baseline justify-center lg:justify-start gap-3">
                <motion.span
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className="font-cinzel text-6xl sm:text-7xl md:text-8xl font-black text-gold-gradient leading-none"
                >
                  50
                </motion.span>
                <div className="text-left">
                  <span className="font-cinzel text-xl sm:text-2xl font-black text-[#1f1a14] block uppercase tracking-wider">
                    YEARS OF
                  </span>
                  <span className="font-cinzel text-xl sm:text-2xl font-black text-gold-gradient block uppercase tracking-wider">
                    LOVE
                  </span>
                </div>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-4xl font-black text-[#1f1a14] tracking-wide">
                FRANCIS & ROSILY
              </h3>
              <p className="font-garamond italic text-lg sm:text-xl text-[#8a6405] font-bold">
                Golden Wedding Jubilee Celebration
              </p>
              <p className="font-garamond italic text-lg sm:text-xl text-[#5e5343] leading-relaxed">
                “Five decades of steadfast love, laughter, togetherness, and a beautiful family journey. Still the same Team.”
              </p>
            </div>

            {/* Family Generation Tree */}
            <div className="pt-4 border-t border-[#d4af37]/30 space-y-3">
              <span className="font-montserrat text-[11px] uppercase tracking-wider text-[#8a6405] font-black block">
                FAMILY GENERATION TREE:
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs font-montserrat">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-3.5 py-1.5 rounded-xl bg-[#ffffff] border-2 border-[#d4af37] text-[#8a6405] font-bold shadow-sm"
                >
                  Francis & Rosily (Grandparents)
                </motion.span>
                <span className="text-[#b8860b] font-black text-sm">➔</span>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-3.5 py-1.5 rounded-xl bg-[#ffffff] border border-[#d4af37]/50 text-[#1f1a14] font-semibold shadow-sm"
                >
                  Andrina Denny (Granddaughter)
                </motion.span>
                <span className="text-[#b8860b] font-black text-sm">+</span>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-3.5 py-1.5 rounded-xl bg-[#ffffff] border border-[#d4af37]/50 text-[#1f1a14] font-semibold shadow-sm"
                >
                  Dhaniel Daison (Grandson)
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
