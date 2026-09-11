import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, MessageCircleHeart } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { audioEngine } from '../utils/audioEngine';

interface NavigationBarProps {
  onOpenRSVP: () => void;
  onOpenFamilyCousinzz: () => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  onOpenRSVP,
  onOpenFamilyCousinzz,
}) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Gold Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-[#f7f2e7]">
        <div
          className="h-full bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#aa7a1e] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Header */}
      <header
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl transition-all duration-500 rounded-full px-4 md:px-6 py-2.5 flex items-center justify-between border ${
          scrolled
            ? 'bg-[#ffffff]/92 border-[#d4af37]/60 shadow-[0_10px_35px_rgba(184,134,11,0.18)] backdrop-blur-xl'
            : 'bg-[#ffffff]/70 border-[#d4af37]/30 shadow-sm backdrop-blur-md'
        }`}
      >
        {/* Brand / Monogram */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group text-left cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#fae084] to-[#d4af37] flex items-center justify-center text-[#090807] font-cinzel font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
            3•1
          </div>
          <div className="hidden sm:block">
            <span className="font-cinzel text-xs font-bold tracking-widest text-[#1f1a14] block">
              ONE BIG CELEBRATION
            </span>
            <span className="font-garamond italic text-[11px] text-[#8a6405] block font-semibold">
              Francis & Rosily • Andrina • Dhaniel
            </span>
          </div>
        </button>

        {/* Quick Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 font-montserrat text-xs font-bold tracking-wider text-[#5e5343]">
          <button
            onClick={() => scrollToSection('celebrations')}
            className="hover:text-[#8a6405] transition-colors cursor-pointer"
          >
            3 Celebrations
          </button>
          <button
            onClick={() => scrollToSection('anniversary')}
            className="hover:text-[#8a6405] transition-colors cursor-pointer"
          >
            50th Jubilee
          </button>
          <button
            onClick={() => scrollToSection('event-hub')}
            className="hover:text-[#8a6405] transition-colors cursor-pointer"
          >
            Date & Venue
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              audioEngine.playCelebrationChime();
              onOpenFamilyCousinzz();
            }}
            className="relative group overflow-hidden px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#e1306c] text-[#090807] font-montserrat font-extrabold text-xs tracking-wider uppercase hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5 shadow-[0_2px_12px_rgba(212,175,55,0.4)] border border-white/80"
          >
            <div className="animate-btn-shimmer" />
            <span className="hidden lg:inline">Enjoy With Us</span>
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm ring-1 ring-white/50">
              <InstagramIcon size={9} />
            </span>
            <span className="font-black text-[11px] tracking-wide">@familycousinzz</span>
          </button>

          <button
            onClick={onOpenRSVP}
            className="px-3.5 sm:px-4 py-1.5 rounded-full bg-[#1f1a14] text-[#fae084] font-montserrat font-bold text-xs tracking-wider uppercase shadow-sm hover:bg-[#322a21] hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <MessageCircleHeart size={14} />
            <span>RSVP</span>
          </button>
        </div>
      </header>
    </>
  );
};
