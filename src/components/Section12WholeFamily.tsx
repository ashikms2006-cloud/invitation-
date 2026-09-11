import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Flame } from 'lucide-react';

export const Section12WholeFamily: React.FC = () => {
  const familyWords = [
    { word: 'COUSINS.', delay: 0.1, color: 'text-[#fae084]' },
    { word: 'BROTHERS.', delay: 0.2, color: 'text-[#f09433]' },
    { word: 'SISTERS.', delay: 0.3, color: 'text-[#e1306c]' },
    { word: 'PARENTS.', delay: 0.4, color: 'text-[#fd1d1d]' },
    { word: 'GRANDPARENTS.', delay: 0.5, color: 'text-[#fae084]' },
    { word: 'CHILDREN.', delay: 0.6, color: 'text-[#833ab4]' },
    { word: 'EVERYONE.', delay: 0.7, color: 'text-ig-gradient font-black' },
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 bg-gradient-to-b from-[#09050e] via-[#150a1b] to-[#0b0512] overflow-hidden text-center">
      {/* Background Energy Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-br from-[#833ab4]/15 via-[#fd1d1d]/15 to-[#fae084]/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 space-y-12">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#fae084]/40 bg-[#220e24] text-[#fae084] font-montserrat text-xs tracking-widest uppercase font-bold shadow-lg"
        >
          <Users size={15} />
          <span>UNITED AS ONE BLOOD & FAITH</span>
          <Users size={15} />
        </motion.div>

        {/* Major Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-cinzel text-3xl sm:text-6xl md:text-7xl font-black text-[#ffffff] uppercase tracking-wider leading-tight"
        >
          THE WHOLE FAMILY<br />
          <span className="text-ig-gradient">IS COMING TOGETHER.</span>
        </motion.h2>

        {/* Fast Animated Words Grid / Stagger */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 max-w-4xl mx-auto py-6">
          {familyWords.map((item) => (
            <motion.div
              key={item.word}
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay, type: 'spring' }}
              className="px-4 sm:px-6 py-2.5 rounded-2xl bg-[#1d0e22] border border-[#e1306c]/40 shadow-xl"
            >
              <span className={`font-outfit text-xl sm:text-3xl md:text-4xl font-extrabold tracking-wider ${item.color}`}>
                {item.word}
              </span>
            </motion.div>
          ))}
        </div>

        {/* The 3 Pillars Finale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="space-y-3 pt-6"
        >
          <p className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-extrabold text-gold-gradient tracking-widest uppercase">
            ONE FAMILY. ONE PLACE.
          </p>
          <p className="font-outfit text-3xl sm:text-5xl md:text-6xl font-black text-[#ffffff] tracking-tight uppercase">
            ONE UNFORGETTABLE DAY.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
