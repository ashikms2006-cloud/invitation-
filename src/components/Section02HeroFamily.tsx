import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export const Section02HeroFamily: React.FC = () => {
  return (
    <section id="hero-family" className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#090807] via-[#14100c] to-[#0d0b09]">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4af37]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10 text-center">
        {/* Editorial Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#1e1912]/70 text-[#fae084] font-montserrat text-xs tracking-widest uppercase mb-4"
        >
          <Sparkles size={13} />
          <span>One Special Family Day</span>
          <Sparkles size={13} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black text-gold-gradient uppercase tracking-widest mb-4"
        >
          A DAY TO REMEMBER
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-garamond italic text-xl sm:text-2xl md:text-3xl text-[#f3e7ce] max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          “Three precious celebrations, one beautiful family, and a day filled with faith, love and togetherness.”
        </motion.p>

        {/* Layered Photography Grid with Cinematic Depth */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto">
          {/* Left: Granddaughter Andrina Denny (First Holy Communion) */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:col-span-4 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 bg-[#14110d] shadow-[0_15px_40px_rgba(0,0,0,0.8)] group-hover:border-[#fae084] transition-all duration-500 transform group-hover:scale-102">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/assets/poster_andrina.jpg"
                  alt="Andrina Denny First Holy Communion"
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="font-montserrat text-[10px] tracking-widest uppercase font-bold text-[#fae084] bg-[#090807]/80 px-2.5 py-1 rounded-full border border-[#d4af37]/30 inline-block mb-1">
                  Granddaughter
                </span>
                <h4 className="font-cinzel text-lg font-bold text-[#ffffff]">
                  Andrina Denny
                </h4>
                <p className="font-garamond italic text-xs text-[#d4af37]">
                  First Holy Communion
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center: Grandparents Francis & Rosily (50th Golden Jubilee) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="md:col-span-4 relative group z-10"
          >
            <div className="relative rounded-3xl overflow-hidden border-3 border-[#fae084] bg-[#1a1510] shadow-[0_20px_60px_rgba(212,175,55,0.35)] transform group-hover:scale-104 transition-all duration-500">
              {/* Golden Crown Badge */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-[#fae084] to-[#aa7a1e] text-[#090807] font-montserrat font-black text-[10px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow-lg border border-[#ffffff]">
                50 Years Golden Jubilee
              </div>

              <div className="aspect-[3/4.2] overflow-hidden pt-2">
                <img
                  src="/assets/poster_anniversary.png"
                  alt="Francis & Rosily 50th Wedding Anniversary"
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-[#090807]/20 to-transparent opacity-85" />
              <div className="absolute bottom-5 left-4 right-4 text-center">
                <span className="font-montserrat text-[10px] tracking-widest uppercase font-bold text-[#fae084] block mb-1">
                  Grandparents
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-black text-gold-gradient">
                  Francis & Rosily
                </h3>
                <p className="font-garamond italic text-sm text-[#f3e7ce]">
                  50th Wedding Anniversary
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Grandson Dhaniel Daison (First Holy Communion) */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:col-span-4 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 bg-[#14110d] shadow-[0_15px_40px_rgba(0,0,0,0.8)] group-hover:border-[#fae084] transition-all duration-500 transform group-hover:scale-102">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/assets/poster_dhaniel.jpg"
                  alt="Dhaniel Daison First Holy Communion"
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="font-montserrat text-[10px] tracking-widest uppercase font-bold text-[#fae084] bg-[#090807]/80 px-2.5 py-1 rounded-full border border-[#d4af37]/30 inline-block mb-1">
                  Grandson
                </span>
                <h4 className="font-cinzel text-lg font-bold text-[#ffffff]">
                  Dhaniel Daison
                </h4>
                <p className="font-garamond italic text-xs text-[#d4af37]">
                  First Holy Communion
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
