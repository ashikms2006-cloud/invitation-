import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const FaithAndBlessingsSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#fdfbf7] overflow-hidden text-center border-t border-[#d4af37]/20">
      {/* Background Radiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#d4af37]/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10 space-y-8">
        {/* Holy Cross Motif */}
        <div className="flex flex-col items-center justify-center">
          <svg
            className="w-12 h-16 text-[#b8860b] filter drop-shadow-[0_4px_12px_rgba(184,134,11,0.35)] mb-2"
            viewBox="0 0 100 140"
            fill="currentColor"
          >
            <rect x="42" y="10" width="16" height="120" rx="3" fill="#b8860b" />
            <rect x="15" y="38" width="70" height="16" rx="3" fill="#b8860b" />
            <circle cx="50" cy="46" r="6" fill="#fae084" />
          </svg>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#d4af37]/50 bg-[#ffffff] text-[#8a6405] font-montserrat text-xs tracking-widest uppercase font-bold shadow-sm mb-2">
            <Sparkles size={13} className="text-[#b8860b]" />
            <span>Sacred Sacrament & Blessings</span>
            <Sparkles size={13} className="text-[#b8860b]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-black text-[#1f1a14] uppercase tracking-wide">
            A DAY OF <span className="text-gold-gradient">FAITH & BLESSINGS</span>
          </h2>
        </div>

        {/* Compact Scriptures in White & Gold */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto text-left">
          <div className="p-6 rounded-2xl bg-white border-2 border-[#d4af37]/40 shadow-[0_10px_30px_rgba(184,134,11,0.1)] hover:border-[#b8860b] transition-all">
            <p className="font-garamond italic text-xl text-[#1f1a14] mb-3 leading-relaxed">
              “I am the bread of life. Whoever comes to me shall not hunger, and whoever believes in me shall never thirst.”
            </p>
            <span className="inline-block font-montserrat text-[11px] font-bold text-[#8a6405] bg-[#f7f2e7] px-3 py-1 rounded-full uppercase tracking-widest border border-[#d4af37]/40">
              JOHN 6:35
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border-2 border-[#d4af37]/40 shadow-[0_10px_30px_rgba(184,134,11,0.1)] hover:border-[#b8860b] transition-all">
            <p className="font-garamond italic text-xl text-[#1f1a14] mb-3 leading-relaxed">
              “This is my body given for you; do this in remembrance of me.”
            </p>
            <span className="inline-block font-montserrat text-[11px] font-bold text-[#8a6405] bg-[#f7f2e7] px-3 py-1 rounded-full uppercase tracking-widest border border-[#d4af37]/40">
              LUKE 22:19
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
