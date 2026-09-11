import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowDown } from 'lucide-react';

export const Section04FamilyTree: React.FC = () => {
  return (
    <section id="family-story" className="relative py-28 px-4 sm:px-6 bg-gradient-to-b from-[#0c0a08] via-[#16120c] to-[#0c0a08] overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#1d1810] text-[#fae084] font-montserrat text-xs tracking-widest uppercase mb-4"
        >
          <Sparkles size={13} />
          <span>Generations of Devotion</span>
          <Sparkles size={13} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black text-gold-gradient uppercase tracking-wider mb-6"
        >
          THE LOVE THAT<br />CONNECTS THEM ALL
        </motion.h2>

        {/* Emotional Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-2 mb-16"
        >
          <p className="font-garamond italic text-2xl sm:text-3xl md:text-4xl text-[#fff0d0]">
            “50 years of love. Two new steps of faith. One family celebrating together.”
          </p>
          <p className="font-montserrat text-xs sm:text-sm text-[#d4af37] tracking-wider uppercase font-semibold">
            Francis & Rosily’s Golden Heritage Blessed in Their Grandchildren
          </p>
        </motion.div>

        {/* Visual Pedigree / Relationship Tree */}
        <div className="flex flex-col items-center">
          {/* Top Node: Grandparents Francis & Rosily */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gradient-to-b from-[#221c13] to-[#14100b] border-2 border-[#fae084] shadow-[0_10px_35px_rgba(212,175,55,0.3)] max-w-sm">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#fae084] mb-3 shadow-md">
                <img
                  src="/assets/poster_anniversary.png"
                  alt="Francis & Rosily"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-montserrat text-[10px] tracking-widest text-[#fae084] uppercase font-bold bg-[#090807] px-3 py-0.5 rounded-full border border-[#d4af37]/30 mb-1">
                GRANDPARENTS
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[#ffffff]">
                Francis & Rosily
              </h3>
              <p className="font-garamond italic text-xs text-[#d4af37]">
                50th Wedding Anniversary • Golden Jubilee
              </p>
            </div>
          </motion.div>

          {/* Golden Connecting Line with Arrow */}
          <div className="relative flex flex-col items-center my-4">
            <div className="w-0.5 h-12 bg-gradient-to-b from-[#fae084] via-[#d4af37] to-[#fae084]" />
            <div className="w-8 h-8 rounded-full bg-[#1e1810] border border-[#d4af37] flex items-center justify-center text-[#fae084] shadow-md my-1">
              <Heart size={14} className="fill-[#d4af37]" />
            </div>
            <div className="w-0.5 h-12 bg-gradient-to-b from-[#fae084] via-[#d4af37] to-[#fae084]" />
            
            {/* Horizontal Branching Bar */}
            <div className="w-64 sm:w-96 h-0.5 bg-gradient-to-r from-transparent via-[#fae084] to-transparent relative">
              <div className="absolute left-0 top-0 w-0.5 h-6 bg-[#fae084]" />
              <div className="absolute right-0 top-0 w-0.5 h-6 bg-[#fae084]" />
            </div>
          </div>

          {/* Bottom Nodes: Grandchildren Andrina & Dhaniel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 w-full max-w-2xl mt-4">
            {/* Andrina Denny */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center p-5 rounded-2xl bg-gradient-to-b from-[#1c1710] to-[#120f0a] border border-[#d4af37]/50 shadow-xl"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#d4af37] mb-3 shadow-md">
                <img
                  src="/assets/poster_andrina.jpg"
                  alt="Andrina Denny"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-montserrat text-[10px] tracking-widest text-[#fae084] uppercase font-bold bg-[#090807] px-2.5 py-0.5 rounded-full border border-[#d4af37]/30 mb-1">
                GRANDDAUGHTER
              </span>
              <h4 className="font-cinzel text-lg font-bold text-[#ffffff]">
                Andrina Denny
              </h4>
              <p className="font-garamond italic text-xs text-[#d4af37]">
                First Holy Communion
              </p>
            </motion.div>

            {/* Dhaniel Daison */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center p-5 rounded-2xl bg-gradient-to-b from-[#1c1710] to-[#120f0a] border border-[#d4af37]/50 shadow-xl"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#d4af37] mb-3 shadow-md">
                <img
                  src="/assets/poster_dhaniel.jpg"
                  alt="Dhaniel Daison"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-montserrat text-[10px] tracking-widest text-[#fae084] uppercase font-bold bg-[#090807] px-2.5 py-0.5 rounded-full border border-[#d4af37]/30 mb-1">
                GRANDSON
              </span>
              <h4 className="font-cinzel text-lg font-bold text-[#ffffff]">
                Dhaniel Daison
              </h4>
              <p className="font-garamond italic text-xs text-[#d4af37]">
                First Holy Communion
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
