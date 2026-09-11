import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles, PartyPopper, Bell, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioEngine';

interface FamilyCousinzzModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FamilyCousinzzModal: React.FC<FamilyCousinzzModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [flashEffect, setFlashEffect] = useState<boolean>(false);
  const instagramUrl = "https://www.instagram.com/familycousinzz?stkn=azVwc3VxcWowNmhh";

  if (!isOpen) return null;

  const triggerGoldConfetti = () => {
    setFlashEffect(true);
    setTimeout(() => setFlashEffect(false), 200);
    audioEngine.playCelebrationChime();

    // Pure white & metallic gold fireworks confetti
    const count = 160;
    const defaults = {
      origin: { y: 0.6 },
      colors: ['#ffffff', '#fae084', '#d4af37', '#aa7a1e'],
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
    <div
      role="dialog"
      aria-modal="true"
      aria-label="FAMILYCOUSINZZ Official Reel Hub"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Light Flash */}
      {flashEffect && (
        <div className="fixed inset-0 bg-[#fff8e7] z-50 pointer-events-none opacity-80 transition-opacity duration-150" />
      )}

      {/* Modal Container in Pure Cathedral White & Gold */}
      <div
        className="relative max-w-lg w-full bg-gradient-to-b from-[#ffffff] to-[#fcfaf5] border-2 border-[#d4af37] rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(184,134,11,0.35)] text-center text-[#1f1a14] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Foil Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#aa7a1e]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#f7f2e7] text-[#8a6405] hover:bg-[#d4af37] hover:text-white transition-all cursor-pointer shadow-sm"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="space-y-6 pt-2">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#d4af37]/60 bg-[#fdfbf7] text-[#8a6405] font-montserrat text-xs tracking-widest uppercase font-bold shadow-sm">
            <Sparkles size={13} className="text-[#b8860b]" />
            <span>Official Family Reel Archive</span>
            <Sparkles size={13} className="text-[#b8860b]" />
          </div>

          {/* Majestic 3D Gold Title */}
          <div className="space-y-2">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-black text-gold-gradient uppercase tracking-wider leading-tight">
              FAMILYCOUSINZZZ
            </h2>
            <p className="font-garamond italic text-lg sm:text-xl text-[#5e5343]">
              “Where the family moments become eternal memories.”
            </p>
          </div>

          {/* White & Gold Scannable QR Frame */}
          <div className="flex justify-center py-1">
            <div className="relative p-3 sm:p-4 rounded-2xl bg-white shadow-[0_10px_35px_rgba(184,134,11,0.2)] border-3 border-[#d4af37] max-w-[200px] w-full overflow-hidden group">
              {/* Laser Scan Line */}
              <div className="animate-laser" />

              <div className="aspect-square w-full rounded-xl overflow-hidden bg-white p-1">
                <img
                  src="/assets/qr_familycousinzz.png"
                  alt="Official FAMILYCOUSINZZ Instagram QR Code"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-2 pt-2 border-t border-gray-200 text-center">
                <span className="font-montserrat font-black text-[10px] text-[#1f1a14] uppercase tracking-wider block">
                  SCAN TO VISIT PROFILE
                </span>
              </div>
            </div>
          </div>

          {/* Catchy Thought & Upcoming Vibe Promise */}
          <div className="space-y-2 text-center bg-[#f7f2e7]/80 p-4 rounded-2xl border border-[#d4af37]/30">
            <p className="font-garamond italic text-base sm:text-lg text-[#1f1a14] leading-snug">
              “The pure, unfiltered celebration reels & family moments will be dropping on this profile in the coming days!”
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-montserrat font-bold text-[#8a6405]">
              <Bell size={13} className="text-[#b8860b] animate-bounce" />
              <span>Follow now to receive all upcoming celebration reels!</span>
            </div>
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#aa7a1e] text-[#090807] font-montserrat font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <InstagramIcon size={17} className="text-[#090807]" />
              <span>FOLLOW @FAMILYCOUSINZZ</span>
              <ExternalLink size={14} />
            </a>

            <button
              onClick={triggerGoldConfetti}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#ffffff] border border-[#d4af37] text-[#8a6405] font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#f7f2e7] hover:scale-105 transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <PartyPopper size={16} className="text-[#b8860b]" />
              <span>🎉 CELEBRATE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
