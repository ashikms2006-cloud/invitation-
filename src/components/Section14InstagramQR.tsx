import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, ExternalLink, Sparkles, Heart } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Section14InstagramQR: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/familycousinzz?stkn=azVwc3VxcWowNmhh";

  return (
    <section className="relative py-28 px-4 sm:px-6 bg-[#0a0710] overflow-hidden text-center">
      {/* Ambient Neon Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#833ab4]/20 via-[#e1306c]/20 to-[#fd1d1d]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10 space-y-8">
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#e1306c]/40 bg-[#1d0a1b] text-[#fae084] font-montserrat text-xs tracking-widest uppercase font-bold"
        >
          <InstagramIcon size={14} className="text-[#e1306c]" />
          <span>CONNECT WITH THE SQUAD</span>
        </motion.div>

        {/* Headings */}
        <div className="space-y-2">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-cinzel text-xl sm:text-3xl text-[#fae084] tracking-widest uppercase font-bold"
          >
            WANT TO SEE THE VIBE?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-outfit text-4xl sm:text-7xl font-black text-ig-gradient uppercase tracking-tight"
          >
            FOLLOW FAMILYCOUSINZZZ
          </motion.h2>
        </div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-garamond italic text-xl sm:text-2xl text-[#f3e7ce] max-w-2xl mx-auto"
        >
          “Catch the laughs, reels, memories and madness as the whole family comes together.”
        </motion.p>

        {/* Prominent QR Code Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex flex-col items-center justify-center pt-4"
        >
          <div className="relative group p-4 sm:p-6 rounded-3xl bg-[#ffffff] shadow-[0_20px_60px_rgba(225,48,108,0.4)] border-4 border-[#e1306c] max-w-xs w-full transition-transform duration-500 hover:scale-105">
            <div className="aspect-square w-full rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2">
              <img
                src="/assets/qr_familycousinzz.png"
                alt="FAMILYCOUSINZZ Instagram QR Code"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200 text-center">
              <span className="font-montserrat font-black text-xs sm:text-sm text-[#090807] uppercase tracking-wider block">
                SCAN TO JOIN THE FAMILY VIBE
              </span>
            </div>
          </div>
        </motion.div>

        {/* Clickable Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-4"
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#f09433] via-[#e1306c] to-[#833ab4] text-[#ffffff] font-montserrat font-bold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_35px_rgba(225,48,108,0.6)] hover:scale-105 hover:shadow-[0_0_55px_rgba(253,29,29,0.8)] transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
          >
            <InstagramIcon size={20} className="group-hover:rotate-12 transition-transform" />
            <span>FOLLOW @FAMILYCOUSINZZ ON INSTAGRAM</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
