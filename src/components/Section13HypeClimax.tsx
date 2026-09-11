import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Zap, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioEngine';

export const Section13HypeClimax: React.FC = () => {
  const [triggered, setTriggered] = useState(false);

  const fireMegaConfetti = () => {
    audioEngine.playCelebrationChime();
    setTriggered(true);

    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#fae084', '#d4af37', '#e1306c', '#833ab4', '#fd1d1d', '#ffffff'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const buzzWords = [
    'THE REELS.',
    'THE LAUGHS.',
    'THE CHAOS.',
    'THE DANCE.',
    'THE FOOD.',
    'THE PHOTOS.',
    'THE MEMORIES.',
  ];

  return (
    <section className="relative min-h-screen py-32 px-4 sm:px-6 bg-[#060408] overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Dark Cinematic Vignette & Neon Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-[#e1306c]/25 via-[#833ab4]/25 to-[#f09433]/25 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 space-y-10">
        {/* Floating Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#fae084] bg-[#1a0c1a] text-[#fae084] font-montserrat text-xs tracking-widest uppercase font-black shadow-[0_0_25px_rgba(250,224,132,0.4)]"
        >
          <Flame size={16} className="text-[#fd1d1d] animate-bounce" />
          <span>THE MIDNIGHT HYPE CLIMAX</span>
          <Flame size={16} className="text-[#fd1d1d] animate-bounce" />
        </motion.div>

        {/* Huge Brand Typography */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-outfit text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black text-ig-gradient tracking-tighter uppercase leading-none drop-shadow-[0_15px_40px_rgba(225,48,108,0.5)]"
        >
          FAMILYCOUSINZZZ
        </motion.h2>

        {/* Rapid Buzz Words Stream */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 max-w-4xl mx-auto">
          {buzzWords.map((word, idx) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="px-4 py-1.5 rounded-full bg-[#180d1a] border border-[#e1306c]/40 font-montserrat font-bold text-xs sm:text-sm text-[#ffffff] tracking-wider uppercase shadow-md"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Everyone's Coming */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <h3 className="font-cinzel text-3xl sm:text-5xl font-black text-[#fae084] tracking-widest uppercase">
            EVERYONE'S COMING.
          </h3>
        </motion.div>

        {/* Huge Final Reveal & Interactive Confetti Burst */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8, type: 'spring' }}
          className="pt-6 space-y-6"
        >
          <h1 className="font-outfit text-4xl sm:text-7xl md:text-8xl font-black text-[#ffffff] tracking-tight uppercase leading-tight drop-shadow-2xl">
            LET THE FAMILY GATHERING BEGIN!
          </h1>

          <button
            onClick={fireMegaConfetti}
            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-[#fae084] via-[#e1306c] to-[#833ab4] text-[#ffffff] font-outfit font-black text-base sm:text-xl tracking-wider uppercase shadow-[0_0_50px_rgba(225,48,108,0.7)] hover:scale-108 hover:shadow-[0_0_80px_rgba(250,224,132,0.9)] transition-all duration-300 cursor-pointer inline-flex items-center gap-3"
          >
            <PartyPopper size={24} className="text-[#fae084] group-hover:rotate-12 transition-transform" />
            <span>🎉 CELEBRATE WITH US! (TAP FOR CONFETTI)</span>
            <Sparkles size={24} className="text-[#fae084]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
