import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, PartyPopper, MessageCircleHeart, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioEngine';

interface Section15GrandFinaleProps {
  onOpenRSVP: () => void;
}

export const Section15GrandFinale: React.FC<Section15GrandFinaleProps> = ({ onOpenRSVP }) => {
  const triggerGrandFinaleConfetti = () => {
    audioEngine.playCelebrationChime();
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#fae084', '#d4af37', '#e1306c', '#833ab4', '#ffffff'],
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Francis & Rosily 50th Anniversary + Andrina & Dhaniel 1st Communion',
          text: 'You are warmly invited to celebrate one big family milestone with us and feel the FAMILYCOUSINZZZ energy!',
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or fallback
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Celebration invitation link copied to clipboard!');
    }
  };

  return (
    <section className="relative min-h-screen py-32 px-4 sm:px-6 bg-gradient-to-b from-[#09050e] via-[#140e0b] to-[#080706] overflow-hidden text-center flex flex-col justify-between">
      {/* Cinematic Golden Light Radiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-[#d4af37]/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10 space-y-12">
        {/* Slow Cinematic Family Photo Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="relative max-w-xl mx-auto rounded-3xl overflow-hidden border-3 border-[#fae084] shadow-[0_25px_70px_rgba(212,175,55,0.4)] group"
        >
          <div className="aspect-[4/3] overflow-hidden bg-[#12100d]">
            <img
              src="/assets/family/couple_hero_1789007437940.jpg"
              alt="Grand Family Celebration"
              className="w-full h-full object-cover object-center filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-1000"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#fae084] bg-black/60 px-4 py-1 rounded-full border border-[#d4af37]/40">
              One Precious Family
            </span>
          </div>
        </motion.div>

        {/* Narrative Flow */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-garamond italic text-2xl sm:text-3xl text-[#fae084]"
          >
            “FAITH BROUGHT US TOGETHER.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-garamond italic text-2xl sm:text-3xl text-[#ffffff]"
          >
            “LOVE MADE US FAMILY.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-cinzel text-xl sm:text-2xl text-[#d4af37] tracking-widest uppercase font-bold"
          >
            AND TODAY…
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-black text-gold-gradient tracking-wider uppercase leading-tight"
          >
            WE CELEBRATE TOGETHER.
          </motion.h2>
        </div>

        {/* The 3 Celebrants Badge Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-center"
        >
          <div className="p-4 rounded-2xl bg-[#1a140d]/90 border border-[#d4af37]/40 shadow-md">
            <span className="font-montserrat text-[10px] text-[#fae084] font-bold uppercase tracking-widest block mb-1">
              50 YEARS OF LOVE
            </span>
            <h4 className="font-cinzel text-base font-bold text-white">
              Francis & Rosily
            </h4>
          </div>

          <div className="p-4 rounded-2xl bg-[#1a140d]/90 border border-[#d4af37]/40 shadow-md">
            <span className="font-montserrat text-[10px] text-[#fae084] font-bold uppercase tracking-widest block mb-1">
              FIRST HOLY COMMUNION
            </span>
            <h4 className="font-cinzel text-base font-bold text-white">
              Andrina Denny
            </h4>
          </div>

          <div className="p-4 rounded-2xl bg-[#1a140d]/90 border border-[#d4af37]/40 shadow-md">
            <span className="font-montserrat text-[10px] text-[#fae084] font-bold uppercase tracking-widest block mb-1">
              FIRST HOLY COMMUNION
            </span>
            <h4 className="font-cinzel text-base font-bold text-white">
              Dhaniel Daison
            </h4>
          </div>
        </motion.div>

        {/* Grand Synthesis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="space-y-4 pt-6"
        >
          <p className="font-cinzel text-xl sm:text-3xl md:text-4xl font-extrabold text-[#ffffff] tracking-wider uppercase">
            ONE FAMILY. THREE BLESSINGS.<br />ONE UNFORGETTABLE DAY.
          </p>

          <h1 className="font-outfit text-5xl sm:text-8xl font-black text-ig-gradient tracking-tight uppercase">
            FAMILYCOUSINZZZ ❤️
          </h1>

          <p className="font-outfit text-2xl sm:text-4xl font-black text-[#fae084] uppercase tracking-wide">
            LET THE FAMILY GATHERING BEGIN!
          </p>
        </motion.div>

        {/* Action Buttons: RSVP & Share */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onOpenRSVP}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#aa7a1e] text-[#090807] font-montserrat font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(212,175,55,0.8)] hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
          >
            <MessageCircleHeart size={18} />
            <span>SEND RSVP & FAMILY WISHES</span>
          </button>

          <button
            onClick={handleShare}
            className="px-8 py-4 rounded-full bg-[#1b150f] border border-[#d4af37] text-[#fae084] font-montserrat font-bold text-sm tracking-widest uppercase hover:bg-[#281f14] hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
          >
            <Share2 size={18} />
            <span>SHARE INVITATION WITH FAMILY</span>
          </button>
        </motion.div>
      </div>

      {/* Footer Copyright */}
      <footer className="mt-20 pt-8 border-t border-[#d4af37]/20 text-xs font-montserrat text-[#8c806f] space-y-2">
        <p>
          Francis & Rosily • Andrina Denny • Dhaniel Daison • FAMILYCOUSINZZZ
        </p>
        <p className="text-[11px] text-[#5e5548]">
          Saturday, 12th September 2026 • 11:00 AM • St. Thomas Church, Thuruthur, Kerala
        </p>
      </footer>
    </section>
  );
};
