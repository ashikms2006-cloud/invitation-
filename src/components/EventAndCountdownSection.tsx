import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, Download, Sparkles } from 'lucide-react';
import { EVENT_DETAILS, getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendarExport';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
}

export const EventAndCountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  });

  useEffect(() => {
    const target = EVENT_DETAILS.startDate.getTime();
    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          isFinished: false,
        });
      }
    };
    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const googleMapUrl = "https://maps.google.com/?q=St.+Thomas+Church+Thuruthur";

  return (
    <section id="event-hub" className="relative py-20 px-4 sm:px-6 bg-[#fdfbf7] overflow-hidden border-t border-[#d4af37]/20">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 text-center space-y-10">
        {/* Heading */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/50 bg-[#ffffff] text-[#8a6405] font-montserrat text-xs tracking-widest uppercase font-bold shadow-sm">
            <Sparkles size={13} className="text-[#b8860b]" />
            <span>Event Schedule & Countdown</span>
            <Sparkles size={13} className="text-[#b8860b]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-[#1f1a14] uppercase tracking-wide">
            ONE DAY. ONE TIME. <span className="text-gold-gradient">ONE PLACE.</span>
          </h2>
          <p className="font-garamond italic text-lg sm:text-xl text-[#5e5343]">
            “All three sacred celebrations take place together.”
          </p>
        </div>

        {/* 3 Information Cards in White & Gold */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
          {/* Date */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#d4af37]/40 shadow-[0_10px_30px_rgba(184,134,11,0.1)] hover:border-[#b8860b] transition-all">
            <div className="w-12 h-12 mx-auto rounded-xl bg-[#f7f2e7] border border-[#d4af37] flex items-center justify-center text-[#8a6405] mb-3 shadow-sm">
              <Calendar size={24} />
            </div>
            <span className="font-montserrat text-[11px] font-bold text-[#8a6405] uppercase tracking-wider block mb-1">
              DATE
            </span>
            <h3 className="font-cinzel text-xl font-bold text-[#1f1a14]">
              Saturday, 12 Sept 2026
            </h3>
          </div>

          {/* Time */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#d4af37]/40 shadow-[0_10px_30px_rgba(184,134,11,0.1)] hover:border-[#b8860b] transition-all">
            <div className="w-12 h-12 mx-auto rounded-xl bg-[#f7f2e7] border border-[#d4af37] flex items-center justify-center text-[#8a6405] mb-3 shadow-sm">
              <Clock size={24} />
            </div>
            <span className="font-montserrat text-[11px] font-bold text-[#8a6405] uppercase tracking-wider block mb-1">
              TIME
            </span>
            <h3 className="font-cinzel text-xl font-bold text-[#1f1a14]">
              11:00 AM Holy Mass
            </h3>
            <span className="text-xs font-garamond italic text-[#8a6405] font-bold block mt-0.5">
              & Thanksgiving
            </span>
            <span className="text-[11px] font-garamond italic text-[#5e5343] block mt-0.5">
              Followed by Grand Reception
            </span>
          </div>

          {/* Venue */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#d4af37]/40 shadow-[0_10px_30px_rgba(184,134,11,0.1)] hover:border-[#b8860b] transition-all">
            <div className="w-12 h-12 mx-auto rounded-xl bg-[#f7f2e7] border border-[#d4af37] flex items-center justify-center text-[#8a6405] mb-3 shadow-sm">
              <MapPin size={24} />
            </div>
            <span className="font-montserrat text-[11px] font-bold text-[#8a6405] uppercase tracking-wider block mb-1">
              VENUE
            </span>
            <h3 className="font-cinzel text-xl font-bold text-[#1f1a14]">
              St. Thomas Church
            </h3>
            <span className="text-xs font-garamond italic text-[#8a6405] font-bold block mt-0.5">
              Thuruthur
            </span>
            <span className="text-[11px] font-garamond italic text-[#5e5343] block mt-0.5">
              Kerala
            </span>
          </div>
        </div>

        {/* Live Countdown Timer in White & Gold */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#ffffff] via-[#faf6ed] to-[#ffffff] border-2 border-[#d4af37] shadow-[0_15px_40px_rgba(184,134,11,0.15)] max-w-3xl mx-auto">
          <span className="font-montserrat text-xs tracking-widest text-[#8a6405] uppercase font-bold block mb-4">
            COUNTDOWN TO THE SPECIAL DAY
          </span>
          {timeLeft.isFinished ? (
            <div className="font-cinzel text-2xl font-bold text-[#8a6405]">
              THE DAY IS HERE ❤️
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
              {[
                { label: 'DAYS', val: timeLeft.days },
                { label: 'HOURS', val: timeLeft.hours },
                { label: 'MINS', val: timeLeft.minutes },
                { label: 'SECS', val: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="p-2.5 sm:p-3.5 rounded-2xl bg-white border border-[#d4af37]/40 shadow-sm">
                  <span className="font-cinzel text-2xl sm:text-4xl font-black text-gold-gradient block">
                    {String(item.val).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-montserrat font-bold text-[#5e5343] tracking-wider uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#aa7a1e] text-[#090807] font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_15px_rgba(212,175,55,0.35)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Navigation size={16} />
            <span>VIEW LOCATION (GOOGLE MAPS)</span>
          </a>

          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-white border-2 border-[#d4af37] text-[#8a6405] font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#f7f2e7] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Calendar size={16} />
            <span>ADD TO GOOGLE CALENDAR</span>
          </a>

          <button
            onClick={() => downloadIcsFile()}
            className="px-6 py-3.5 rounded-full bg-white border border-[#d4af37]/60 text-[#1f1a14] font-montserrat font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#f7f2e7] hover:text-[#8a6405] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Download size={16} />
            <span>DOWNLOAD .ICS (APPLE)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
