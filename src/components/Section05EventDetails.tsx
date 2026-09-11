import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, Download, Sparkles, Navigation } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendarExport';

export const Section05EventDetails: React.FC = () => {
  const googleMapUrl = "https://maps.google.com/?q=St.+Thomas+Church+Thuruthur";

  return (
    <section id="event-hub" className="relative py-28 px-4 sm:px-6 bg-[#0c0a08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#d4af37]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 text-center">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#1a150e] text-[#fae084] font-montserrat text-xs tracking-widest uppercase mb-4"
        >
          <Sparkles size={13} />
          <span>Unified Celebration Schedule</span>
          <Sparkles size={13} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black text-gold-gradient uppercase tracking-wider mb-4"
        >
          ONE DAY. ONE TIME. ONE PLACE.
        </motion.h2>

        {/* Prominent Unified Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-[#fae084]/20 via-[#d4af37]/30 to-[#fae084]/20 border border-[#fae084] text-[#fae084] font-montserrat font-bold text-sm sm:text-base tracking-widest uppercase mb-16 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
        >
          ✨ All Three Celebrations Happen Together ✨
        </motion.div>

        {/* 3 Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Card 1: DATE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-[#18140e] to-[#100d09] border border-[#d4af37]/40 shadow-xl group hover:border-[#fae084] transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#261f14] border border-[#d4af37] flex items-center justify-center text-[#fae084] mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <Calendar size={32} />
            </div>
            <span className="font-montserrat text-xs tracking-widest uppercase font-bold text-[#d4af37] mb-2">
              EVENT DATE
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-[#ffffff] mb-1">
              Saturday
            </h3>
            <p className="font-garamond text-xl font-bold text-[#fae084]">
              12th September 2026
            </p>
            <span className="font-montserrat text-xs text-[#a89c89] mt-3">
              Mark your calendar
            </span>
          </motion.div>

          {/* Card 2: TIME */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-[#18140e] to-[#100d09] border border-[#d4af37]/40 shadow-xl group hover:border-[#fae084] transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#261f14] border border-[#d4af37] flex items-center justify-center text-[#fae084] mb-5 shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-transform">
              <Clock size={32} />
            </div>
            <span className="font-montserrat text-xs tracking-widest uppercase font-bold text-[#d4af37] mb-2">
              EVENT TIME
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-[#ffffff] mb-1">
              10:30 AM
            </h3>
            <p className="font-garamond text-lg text-[#fae084] font-semibold">
              Solemn Holy Mass
            </p>
            <span className="font-montserrat text-xs text-[#a89c89] mt-3">
              Followed by Grand Family Feast & Reception
            </span>
          </motion.div>

          {/* Card 3: VENUE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-[#18140e] to-[#100d09] border border-[#d4af37]/40 shadow-xl group hover:border-[#fae084] transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#261f14] border border-[#d4af37] flex items-center justify-center text-[#fae084] mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <MapPin size={32} />
            </div>
            <span className="font-montserrat text-xs tracking-widest uppercase font-bold text-[#d4af37] mb-2">
              EVENT VENUE
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#ffffff] mb-1">
              St. Thomas Church
            </h3>
            <p className="font-garamond text-lg text-[#fae084] font-semibold">
              Thuruthur, Kerala
            </p>
            <span className="font-montserrat text-xs text-[#a89c89] mt-3">
              Parish Hall & Auditorium
            </span>
          </motion.div>
        </div>

        {/* Action Buttons: View Location & Add to Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#aa7a1e] text-[#090807] font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:scale-105 transition-all flex items-center gap-2"
          >
            <Navigation size={16} />
            <span>VIEW LOCATION (GOOGLE MAPS)</span>
            <ExternalLink size={14} />
          </a>

          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#1b160f] border border-[#d4af37] text-[#fae084] font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#282116] hover:scale-105 transition-all flex items-center gap-2"
          >
            <Calendar size={16} />
            <span>ADD TO GOOGLE CALENDAR</span>
          </a>

          <button
            onClick={() => downloadIcsFile()}
            className="px-6 py-3 rounded-full bg-[#1b160f] border border-[#d4af37]/60 text-[#f5f0e6] font-montserrat font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#282116] hover:text-[#fae084] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download size={16} />
            <span>DOWNLOAD .ICS (APPLE / OUTLOOK)</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
