import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, Heart } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { audioEngine } from '../utils/audioEngine';

interface HeroProps {
  onExplore: () => void;
  onOpenFamilyCousinzz: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onExplore, onOpenFamilyCousinzz }) => {
  const handleOpenVibes = () => {
    audioEngine.playCelebrationChime();
    onOpenFamilyCousinzz();
  };

  return (
    <section className="relative min-h-[90vh] py-24 px-4 sm:px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#fbf8f0] via-[#fdfbf7] to-[#fbf8f0]">
      {/* Church Golden Sunbeam Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#fae084]/35 via-[#d4af37]/15 to-transparent blur-3xl opacity-80" />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10 space-y-7">
        {/* Top Sacred Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#d4af37]/60 bg-[#ffffff]/90 backdrop-blur-md shadow-sm"
        >
          <Sparkles size={14} className="text-[#b8860b]" />
          <span className="font-cinzel text-xs uppercase tracking-widest text-[#8a6405] font-bold">
            One Big Family Celebration
          </span>
          <Sparkles size={14} className="text-[#b8860b]" />
        </motion.div>

        {/* Main Headline in Rich Metallic Gold & Charcoal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-black text-[#1f1a14] uppercase tracking-wide leading-tight">
            ONE DAY. <span className="text-gold-gradient">THREE BLESSINGS.</span><br />
            ONE BIG FAMILY.
          </h1>
          <p className="font-garamond italic text-2xl sm:text-3xl md:text-4xl text-[#8a6405]">
            Faith <span className="text-[#d4af37] mx-1.5">•</span> Love{' '}
            <span className="text-[#d4af37] mx-1.5">•</span> Family{' '}
            <span className="text-[#d4af37] mx-1.5">•</span> Togetherness
          </p>
        </motion.div>

        {/* 3 Celebrants Quick Visual Cards in White & Gold */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 max-w-3xl mx-auto"
        >
          {/* Celebrant 1 */}
          <div className="p-4 rounded-2xl bg-white border border-[#d4af37]/40 shadow-sm text-center">
            <span className="text-[10px] font-montserrat uppercase tracking-wider font-bold text-[#8a6405] block mb-1">
              First Holy Communion
            </span>
            <h3 className="font-cinzel text-lg font-bold text-[#1f1a14]">
              Andrina Denny
            </h3>
            <span className="text-xs font-garamond italic text-[#b8860b]">Granddaughter</span>
          </div>

          {/* Celebrant 2 (Anniversary Center) */}
          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#ffffff] to-[#faf5e8] border-2 border-[#d4af37] shadow-md text-center">
            <span className="text-[10px] font-montserrat uppercase tracking-wider font-black text-[#8a6405] block mb-1">
              50th Wedding Anniversary
            </span>
            <h3 className="font-cinzel text-lg font-bold text-gold-gradient">
              Francis & Rosily
            </h3>
            <span className="text-xs font-garamond italic text-[#8a6405] font-semibold">Golden Jubilee • Grandparents</span>
          </div>

          {/* Celebrant 3 */}
          <div className="p-4 rounded-2xl bg-white border border-[#d4af37]/40 shadow-sm text-center">
            <span className="text-[10px] font-montserrat uppercase tracking-wider font-bold text-[#8a6405] block mb-1">
              First Holy Communion
            </span>
            <h3 className="font-cinzel text-lg font-bold text-[#1f1a14]">
              Dhaniel Daison
            </h3>
            <span className="text-xs font-garamond italic text-[#b8860b]">Grandson</span>
          </div>
        </motion.div>

        {/* Action Buttons: View Details + Reworked Irresistible Enjoy With Us Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-3.5"
        >
          <button
            onClick={onExplore}
            className="px-6 sm:px-7 py-3.5 rounded-full bg-[#1f1a14] text-[#fae084] font-montserrat font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-[#322a21] hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2 shadow-md"
          >
            <span>View Invitation Details</span>
            <ArrowDown size={15} />
          </button>

          {/* Magnetic & Irresistible "Enjoy With Us" Button with Instagram Symbol & Shimmer */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenVibes}
            className="relative group overflow-hidden px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#e1306c] text-[#090807] font-montserrat font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.6)] animate-pulse-glow transition-all cursor-pointer inline-flex items-center gap-2 border-2 border-white/80"
          >
            {/* Continuous Shimmer Light Ray */}
            <div className="animate-btn-shimmer" />

            <Sparkles size={16} className="text-[#090807] animate-spin [animation-duration:6s] shrink-0" />
            
            <span>ENJOY WITH US</span>
            
            {/* Instagram Symbol Badge */}
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm ring-1 ring-white/60 shrink-0">
              <InstagramIcon size={12} />
            </span>

            <span className="font-black text-[#090807] tracking-widest">
              @FAMILYCOUSINZZ
            </span>

            <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full bg-black/15 text-[10px] font-black text-[#090807] tracking-tight">
              TAP TO UNLOCK 🔥
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
