import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleHeart, Share2, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { audioEngine } from '../utils/audioEngine';

interface FinalProps {
  onOpenRSVP: () => void;
  onOpenFamilyCousinzz: () => void;
}

export const FinalRSVPSection: React.FC<FinalProps> = ({ onOpenRSVP, onOpenFamilyCousinzz }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Francis & Rosily 50th Anniversary + Andrina & Dhaniel 1st Communion',
          text: 'You are warmly invited to celebrate one big family milestone with us!',
          url: window.location.href,
        });
      } catch (err) {
        // Fallback
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Celebration invitation link copied to clipboard!');
    }
  };

  const handleOpenVibes = () => {
    audioEngine.playCelebrationChime();
    onOpenFamilyCousinzz();
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#fdfbf7] overflow-hidden text-center border-t border-[#d4af37]/20">
      <div className="max-w-4xl w-full mx-auto relative z-10 space-y-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#ffffff] to-[#faf5e8] border-2 border-[#d4af37] shadow-[0_15px_45px_rgba(184,134,11,0.15)] space-y-6">
          <div className="space-y-2">
            <p className="font-garamond italic text-2xl sm:text-3xl text-[#8a6405] font-bold">
              “FAITH BROUGHT US TOGETHER. LOVE MADE US FAMILY.”
            </p>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-[#1f1a14] uppercase tracking-wide">
              WE CELEBRATE <span className="text-gold-gradient">TOGETHER</span>
            </h2>
            <p className="font-montserrat text-xs sm:text-sm text-[#5e5343] uppercase tracking-widest font-semibold">
              Francis & Rosily (50 Years) • Andrina Denny • Dhaniel Daison
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenRSVP}
              className="px-7 py-3.5 sm:py-4 rounded-full bg-[#1f1a14] text-[#fae084] font-montserrat font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-[#322a21] hover:scale-105 transition-all cursor-pointer flex items-center gap-2 shadow-md"
            >
              <MessageCircleHeart size={18} />
              <span>SEND RSVP VIA WHATSAPP</span>
            </button>

            {/* Reworked Irresistible "Enjoy With Us" Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenVibes}
              className="relative group overflow-hidden px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#e1306c] text-[#090807] font-montserrat font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.6)] animate-pulse-glow transition-all cursor-pointer flex items-center gap-2 border-2 border-white/80"
            >
              <div className="animate-btn-shimmer" />
              <Sparkles size={16} className="text-[#090807] shrink-0" />
              <span>ENJOY WITH US</span>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm ring-1 ring-white/60 shrink-0">
                <InstagramIcon size={12} />
              </span>
              <span className="font-black text-[#090807] tracking-widest">@FAMILYCOUSINZZ</span>
            </motion.button>

            <button
              onClick={handleShare}
              className="px-6 py-3.5 sm:py-4 rounded-full bg-white border-2 border-[#d4af37] text-[#8a6405] font-montserrat font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-[#f7f2e7] hover:scale-105 transition-all cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <Share2 size={17} />
              <span>SHARE INVITATION</span>
            </button>
          </div>
        </div>

        {/* Compact Clean Footer */}
        <footer className="pt-6 text-xs font-montserrat text-[#8a6405] space-y-1">
          <p className="text-[#1f1a14] font-bold">
            Francis & Rosily • Andrina Denny • Dhaniel Daison • @familycousinzz
          </p>
          <p className="text-[11px] text-[#7d705c]">
            Saturday, 12th September 2026 • 11:00 AM • St. Thomas Church, 56XP+PWH, Thuruthoor, Puthenvelikara, Kerala 683594
          </p>
        </footer>
      </div>
    </section>
  );
};
