import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Award } from 'lucide-react';

export const Section08Anniversary50: React.FC = () => {
  return (
    <section id="anniversary" className="relative py-32 px-4 sm:px-6 bg-gradient-to-b from-[#0d0b08] via-[#1a140d] to-[#090807] overflow-hidden">
      {/* Background radial gold aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#d4af37]/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left / Poster Image of Couple */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              <div className="relative rounded-3xl overflow-hidden border-3 border-[#fae084] shadow-[0_20px_60px_rgba(212,175,55,0.4)] bg-[#14110c]">
                <img
                  src="/assets/poster_anniversary.png"
                  alt="Francis & Rosily 50th Anniversary"
                  className="w-full h-auto object-cover transform group-hover:scale-104 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-[#fae084] text-[#090807] font-montserrat font-black text-xs uppercase tracking-widest shadow-xl border border-[#ffffff] whitespace-nowrap">
                Still the Same Team ❤️
              </div>
            </div>
          </motion.div>

          {/* Right / Big Typographic 50 & Tribute */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Giant "50" */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="font-cinzel text-7xl sm:text-9xl font-black text-gold-gradient tracking-tight leading-none">
                50
              </span>
              <div className="flex flex-col text-left">
                <span className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#ffffff] uppercase tracking-wider">
                  YEARS OF
                </span>
                <span className="font-cinzel text-2xl sm:text-4xl font-extrabold text-gold-gradient uppercase tracking-wider">
                  LOVE
                </span>
              </div>
            </div>

            {/* Names */}
            <div>
              <h3 className="font-cinzel text-3xl sm:text-5xl font-black text-[#fae084] tracking-wide">
                FRANCIS & ROSILY
              </h3>
              <p className="font-garamond italic text-xl sm:text-2xl text-[#d4af37] font-semibold mt-1">
                Golden Wedding Jubilee Celebration
              </p>
            </div>

            {/* Supporting Tribute Copy */}
            <p className="font-garamond italic text-2xl sm:text-3xl text-[#fff0d0] leading-relaxed">
              “Five decades of love, laughter, togetherness and a beautiful journey.”
            </p>

            {/* Editorial highlights */}
            <div className="pt-4 border-t border-[#d4af37]/30 grid grid-cols-2 gap-4 text-left font-montserrat text-xs">
              <div className="p-3.5 rounded-xl bg-[#1d170f] border border-[#d4af37]/30">
                <span className="text-[#fae084] font-bold block uppercase mb-1">
                  1976 — 2026
                </span>
                <p className="text-[#c4b8a3]">
                  A half-century foundation of steadfast devotion & family unity.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1d170f] border border-[#d4af37]/30">
                <span className="text-[#fae084] font-bold block uppercase mb-1">
                  Three Generations
                </span>
                <p className="text-[#c4b8a3]">
                  Their love blossoming through children and grandchildren.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
