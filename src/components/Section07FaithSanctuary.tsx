import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Section07FaithSanctuary: React.FC = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 bg-gradient-to-b from-[#090807] via-[#16120b] to-[#0d0b08] overflow-hidden text-center">
      {/* Sacred Church Light & Radiance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#fae084]/25 via-[#d4af37]/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10">
        {/* Glowing Holy Cross & Dove Iconography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center mb-8"
        >
          {/* Holy Cross SVG */}
          <div className="relative mb-4">
            <svg
              className="w-16 h-24 sm:w-20 sm:h-28 text-[#fae084] filter drop-shadow-[0_0_25px_rgba(250,224,132,0.8)]"
              viewBox="0 0 100 140"
              fill="currentColor"
            >
              {/* Vertical Beam */}
              <rect x="42" y="10" width="16" height="120" rx="3" fill="url(#crossGold)" />
              {/* Horizontal Beam */}
              <rect x="15" y="38" width="70" height="16" rx="3" fill="url(#crossGold)" />
              {/* Center Glow */}
              <circle cx="50" cy="46" r="6" fill="#ffffff" />
              <defs>
                <linearGradient id="crossGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#fff5cc" />
                  <stop offset="50%" stop-color="#fae084" />
                  <stop offset="100%" stop-color="#aa7a1e" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#fae084] font-bold">
            Sacred Holy Communion
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black text-gold-gradient uppercase tracking-widest mb-12"
        >
          A DAY OF FAITH
        </motion.h2>

        {/* Sacred Scriptures with White Flowers & Chalice Motif */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Scripture 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="p-8 rounded-2xl bg-[#14100b]/80 border border-[#d4af37]/40 shadow-xl backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl text-[#fae084] font-garamond block mb-3">🕊️</span>
              <p className="font-garamond italic text-2xl sm:text-3xl text-[#ffffff] leading-relaxed mb-4">
                “I am the bread of life.”
              </p>
              <p className="font-garamond text-base text-[#e6decb]/90 italic">
                Whoever comes to me shall not hunger, and whoever believes in me shall never thirst.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#d4af37]/20">
              <span className="font-montserrat text-xs tracking-widest text-[#fae084] font-bold uppercase">
                JOHN 6:35
              </span>
            </div>
          </motion.div>

          {/* Scripture 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="p-8 rounded-2xl bg-[#14100b]/80 border border-[#d4af37]/40 shadow-xl backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl text-[#fae084] font-garamond block mb-3">🥖 🍷</span>
              <p className="font-garamond italic text-2xl sm:text-3xl text-[#ffffff] leading-relaxed mb-4">
                “This is my body given for you;”
              </p>
              <p className="font-garamond text-base text-[#e6decb]/90 italic">
                Do this in remembrance of me. May your heart always stay close to Jesus, today and always.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#d4af37]/20">
              <span className="font-montserrat text-xs tracking-widest text-[#fae084] font-bold uppercase">
                LUKE 22:19
              </span>
            </div>
          </motion.div>
        </div>

        {/* Peaceful Closing Note */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-garamond italic text-lg sm:text-xl text-[#d4af37] max-w-xl mx-auto"
        >
          Praying for abundant grace, divine protection, and deep joy upon Andrina Denny and Dhaniel Daison as they receive the Holy Eucharist.
        </motion.p>
      </div>
    </section>
  );
};
