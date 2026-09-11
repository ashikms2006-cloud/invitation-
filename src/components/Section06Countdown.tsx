import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { EVENT_DETAILS } from '../utils/calendarExport';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
}

export const Section06Countdown: React.FC = () => {
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
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isFinished: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isFinished: false,
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#090807] overflow-hidden border-y border-[#d4af37]/20">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#d4af37]/40 bg-[#16120b] text-[#fae084] font-montserrat text-xs tracking-widest uppercase mb-4"
        >
          <Sparkles size={13} />
          <span>Anticipating The Holy Gathering</span>
          <Sparkles size={13} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-cinzel text-3xl sm:text-5xl font-black text-gold-gradient uppercase tracking-widest mb-10"
        >
          THE COUNTDOWN BEGINS
        </motion.h2>

        {timeLeft.isFinished ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 rounded-3xl bg-gradient-to-r from-[#fae084]/20 via-[#d4af37]/30 to-[#fae084]/20 border-2 border-[#fae084] text-[#fae084] shadow-2xl"
          >
            <h3 className="font-cinzel text-3xl sm:text-5xl font-black tracking-widest">
              THE DAY IS HERE ❤️
            </h3>
            <p className="font-garamond italic text-xl text-[#ffffff] mt-2">
              Join us in celebration and prayers!
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {timeUnits.map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1c160e] to-[#110e0a] border border-[#d4af37]/40 shadow-xl"
              >
                <span className="font-cinzel text-4xl sm:text-6xl font-black text-gold-gradient tracking-tight">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="font-montserrat text-xs sm:text-sm tracking-widest uppercase font-bold text-[#d4af37] mt-2">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
