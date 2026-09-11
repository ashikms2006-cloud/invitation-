import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Zap, Camera } from 'lucide-react';

export const Section09Transition: React.FC = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 bg-gradient-to-b from-[#090807] via-[#150912] to-[#0d0711] overflow-hidden text-center">
      {/* Dynamic atmospheric energy glow (Gold shifting into Instagram neon pink/purple) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#d4af37]/20 via-[#e1306c]/25 to-[#833ab4]/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10 space-y-10">
        {/* Floating camera / flash icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="inline-flex p-4 rounded-full bg-gradient-to-tr from-[#fd1d1d] to-[#833ab4] text-[#ffffff] shadow-2xl neon-ig-glow"
        >
          <Camera size={32} />
        </motion.div>

        {/* Reveal 1: "BUT THIS ISN’T THE END…" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <span className="font-montserrat text-xs tracking-[0.4em] uppercase font-bold text-[#fae084] block">
            GET READY FOR THE ENERGY
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black text-[#ffffff] tracking-wider uppercase">
            BUT THIS ISN’T THE END…
          </h2>
        </motion.div>

        {/* Dramatic Pause / Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '160px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 bg-gradient-to-r from-[#fae084] via-[#e1306c] to-[#833ab4] mx-auto rounded-full"
        />

        {/* Reveal 2: “THE FAMILY IS COMING.” */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h3 className="font-outfit text-4xl sm:text-7xl md:text-8xl font-black text-ig-gradient tracking-tight uppercase leading-none">
            THE FAMILY IS COMING.
          </h3>
          <p className="font-montserrat text-sm sm:text-lg text-[#e6decb] uppercase tracking-widest max-w-xl mx-auto font-medium">
            Brace yourselves for the laughter, reels, chaos & unforgettable vibes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
