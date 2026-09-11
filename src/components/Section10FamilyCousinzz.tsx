import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Heart, Zap } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Section10FamilyCousinzz: React.FC = () => {
  return (
    <section id="familycousinzz-vibe" className="relative py-32 px-4 sm:px-6 bg-[#0c0711] overflow-hidden text-center">
      {/* Background Neon Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#f09433]/20 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10 space-y-8">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e1306c]/40 bg-[#1f0d1b] text-[#fd1d1d] font-montserrat text-xs tracking-widest uppercase font-bold shadow-lg"
        >
          <Flame size={14} className="text-[#fd1d1d] animate-bounce" />
          <span>THE OFFICIAL VIBE OF THE FAMILY</span>
          <Flame size={14} className="text-[#fd1d1d] animate-bounce" />
        </motion.div>

        {/* Headline: "AND OF COURSE…" */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-cinzel text-2xl sm:text-4xl text-[#fae084] tracking-widest uppercase font-semibold"
        >
          AND OF COURSE…
        </motion.p>

        {/* Dramatic Reveal: "FAMILYCOUSINZZZ" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h2 className="font-outfit text-5xl sm:text-8xl md:text-9xl font-black text-ig-gradient tracking-tight uppercase leading-none drop-shadow-[0_10px_35px_rgba(225,48,108,0.4)]">
            FAMILYCOUSINZZZ
          </h2>
          <p className="font-garamond italic text-2xl sm:text-3xl text-[#ffffff] font-medium">
            “Where the family moments become memories.”
          </p>
        </motion.div>

        {/* Four Real Truths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6"
        >
          {[
            { tag: 'Real Cousins', icon: '🫂' },
            { tag: 'Real Laughter', icon: '😂' },
            { tag: 'Real Chaos', icon: '⚡' },
            { tag: 'Real Celebrations', icon: '🥳' },
          ].map((item, idx) => (
            <div
              key={item.tag}
              className="p-4 rounded-2xl bg-[#1a0f1d]/90 border border-[#e1306c]/30 shadow-lg text-center"
            >
              <span className="text-2xl block mb-1">{item.icon}</span>
              <span className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#ffffff]">
                {item.tag}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Closing animated line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-6"
        >
          <p className="font-montserrat text-sm sm:text-base text-[#e6decb] uppercase tracking-widest font-semibold bg-[#180b18] px-6 py-3 rounded-full border border-[#e1306c]/40 inline-block shadow-md">
            “Because every family function needs a little <span className="text-ig-gradient font-black">FAMILYCOUSINZZZ</span> energy.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};
