import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PartyPopper, Bell, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioEngine';

export const FamilyCousinzzHypeSection: React.FC = () => {
  const [flashEffect, setFlashEffect] = useState<boolean>(false);
  const instagramUrl = "https://www.instagram.com/familycousinzz?stkn=azVwc3VxcWowNmhh";

  const triggerGoldConfetti = () => {
    setFlashEffect(true);
    setTimeout(() => setFlashEffect(false), 200);
    audioEngine.playCelebrationChime();

    // Pure white & metallic gold fireworks confetti
    const count = 160;
    const defaults = {
      origin: { y: 0.65 },
      colors: ['#ffffff', '#fff5cc', '#fae084', '#d4af37', '#aa7a1e'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 35, startVelocity: 60 });
    fire(0.2, { spread: 70 });
    fire(0.35, { spread: 110, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 130, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 130, startVelocity: 45 });
  };

  return (
    <section
      id="familycousinzz-vibe"
      className="relative py-28 px-4 sm:px-6 bg-gradient-to-b from-[#0c0a08] via-[#1a140d] to-[#090807] overflow-hidden text-center border-t-2 border-[#d4af37]/40"
    >
      {/* Warm Golden Light Flash */}
      {flashEffect && (
        <div className="fixed inset-0 bg-[#fff8e7] z-50 pointer-events-none opacity-80 transition-opacity duration-150" />
      )}

      {/* Cathedral Ivory & Warm Gold Ambient Radiance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-[#d4af37] rounded-full blur-[130px]"
        />

        {/* Floating golden sparkle particles */}
        <div className="absolute top-16 left-12 text-2xl opacity-40 animate-bounce [animation-duration:4s]">✨</div>
        <div className="absolute top-1/2 right-12 text-2xl opacity-40 animate-bounce [animation-duration:5s]">🕊️</div>
        <div className="absolute bottom-16 left-16 text-2xl opacity-40 animate-bounce [animation-duration:3.5s]">🌟</div>
      </div>

      <div className="max-w-3xl w-full mx-auto relative z-10 space-y-10">
        {/* Top Gold Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#d4af37] bg-[#1a150e]/90 text-[#fae084] font-montserrat text-xs tracking-widest uppercase font-bold shadow-[0_0_25px_rgba(212,175,55,0.4)]"
        >
          <Sparkles size={14} className="text-[#fae084]" />
          <span>OFFICIAL FAMILY REEL PORTAL</span>
          <Sparkles size={14} className="text-[#fae084]" />
        </motion.div>

        {/* Majestic 3D Metallic Gold Typography for FAMILYCOUSINZZ */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-lg sm:text-2xl text-[#fae084] tracking-[0.25em] uppercase font-semibold"
          >
            AND OF COURSE…
          </motion.p>

          {/* Luxury White & Gold Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, type: 'spring' }}
            onClick={triggerGoldConfetti}
            className="relative inline-block cursor-pointer group select-none"
            title="Tap for celebration confetti!"
          >
            <h2 className="font-cinzel text-4xl sm:text-7xl md:text-8xl font-black text-gold-gradient uppercase tracking-wider drop-shadow-[0_10px_35px_rgba(212,175,55,0.5)] leading-tight">
              FAMILYCOUSINZZZ
            </h2>

            {/* Glowing Golden Underline Flourish */}
            <div className="h-1 w-48 sm:w-72 mx-auto mt-2 rounded-full bg-gradient-to-r from-transparent via-[#fae084] to-transparent shadow-[0_0_15px_#fae084]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-garamond italic text-2xl sm:text-3xl text-[#ffffff] max-w-2xl mx-auto leading-snug"
          >
            “Where the family moments become eternal memories.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-cinzel text-base sm:text-xl text-[#fae084] font-bold uppercase tracking-widest pt-2"
          >
            WANT TO WITNESS THE REAL VIBE?
          </motion.p>
        </div>

        {/* White & Gold Scannable QR Frame */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#1c160e] via-[#141009] to-[#0d0a06] border-2 border-[#d4af37]/60 shadow-[0_20px_60px_rgba(0,0,0,0.9)] max-w-lg mx-auto space-y-6 relative overflow-hidden"
        >
          {/* Top Gold Corner Accents */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fae084] to-transparent animate-pulse" />

          {/* QR Code Card in Pure White with Gold Border & Gold Laser Beam */}
          <div className="flex justify-center">
            <div className="relative p-4 rounded-3xl bg-white shadow-[0_20px_60px_rgba(212,175,55,0.4)] border-4 border-[#d4af37] max-w-[220px] w-full overflow-hidden group transform hover:scale-105 transition-transform duration-300">
              {/* Gold Laser Beam */}
              <div
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fae084] to-transparent shadow-[0_0_15px_#fae084] animate-laser pointer-events-none"
              />

              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-white p-1">
                <img
                  src="/assets/qr_familycousinzz.png"
                  alt="Official FAMILYCOUSINZZ Instagram QR Code"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-2.5 pt-2.5 border-t border-gray-200 text-center">
                <span className="font-montserrat font-black text-[11px] text-[#090807] uppercase tracking-wider block">
                  SCAN TO VISIT PROFILE
                </span>
              </div>
            </div>
          </div>

          {/* Catchy Thought & Upcoming Vibe Promise in White & Gold */}
          <div className="space-y-3 text-center pt-2">
            <p className="font-garamond italic text-xl sm:text-2xl text-[#f5f0e6] leading-relaxed">
              “The pure, unfiltered celebration reels & family moments will be dropping on this profile in the coming days!”
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#241c12] border border-[#d4af37]/50 text-[#fae084] font-montserrat text-xs font-bold shadow-md">
              <Bell size={14} className="text-[#fae084] animate-bounce" />
              <span>Follow now to receive all upcoming celebration reels!</span>
            </div>
          </div>

          {/* White & Gold Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#aa7a1e] text-[#090807] font-montserrat font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 hover:shadow-[0_0_45px_rgba(250,224,132,0.9)] transition-all duration-300 inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <InstagramIcon size={19} className="text-[#090807]" />
              <span>FOLLOW @FAMILYCOUSINZZ</span>
              <ExternalLink size={15} />
            </a>

            <button
              onClick={triggerGoldConfetti}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#1b150e] border border-[#fae084] text-[#fae084] font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#282015] hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <PartyPopper size={18} className="text-[#fae084]" />
              <span>🎉 TAP FOR CONFETTI</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
