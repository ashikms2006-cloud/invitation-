import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioEngine';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [guestCount, setGuestCount] = useState('2');
  const [attending, setAttending] = useState<'yes' | 'blessing_only'>('yes');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    audioEngine.playCelebrationChime();

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#fae084', '#d4af37', '#aa7a1e'],
    });

    // Generate WhatsApp text
    const waText = encodeURIComponent(
      `🎉 *Family Celebration RSVP & Blessings*\n\n` +
      `*Guest Name:* ${name}\n` +
      `*Status:* ${attending === 'yes' ? '✅ Joyfully Attending' : '🕊️ Sending Prayers & Blessings'}\n` +
      `*Attending Count:* ${guestCount} Person(s)\n` +
      (message ? `*Blessing Message:* "${message}"\n` : '') +
      `\n_Celebrating Francis & Rosily's 50th Jubilee + Andrina & Dhaniel's 1st Holy Communion with @familycousinzz!_`
    );

    const waUrl = `https://wa.me/?text=${waText}`;
    window.open(waUrl, '_blank');

    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="RSVP & Celebration Wishes"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-gradient-to-b from-[#ffffff] to-[#fcfaf5] border-2 border-[#d4af37] rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(184,134,11,0.25)] text-[#1f1a14] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Foil Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#aa7a1e]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#f7f2e7] text-[#8a6405] hover:bg-[#d4af37] hover:text-white transition-all cursor-pointer shadow-sm"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#f7f2e7] border-2 border-[#d4af37] flex items-center justify-center text-[#8a6405]">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="font-cinzel text-2xl font-bold text-[#8a6405]">
              Thank You for Your Blessings!
            </h3>
            <p className="font-garamond text-lg text-[#5e5343]">
              Your RSVP and warm wishes have been formatted for the family. We look forward to celebrating this historic day together!
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-7 py-3 rounded-full bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#aa7a1e] text-[#090807] font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase hover:scale-105 transition-all cursor-pointer shadow-md"
            >
              Back to Invitation
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6 pt-1">
              <span className="font-montserrat text-xs tracking-widest text-[#8a6405] uppercase font-bold block mb-1">
                Family & Friends
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-[#1f1a14]">
                RSVP & <span className="text-gold-gradient">Warm Wishes</span>
              </h3>
              <p className="font-garamond italic text-sm text-[#8a6405] mt-1 font-semibold">
                Let us know you will be joining the big family celebration!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-montserrat text-sm">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8a6405] mb-1 font-bold">
                  Your Full Name / Family Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John & Family"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#d4af37]/50 text-[#1f1a14] placeholder-[#8c806f] focus:outline-none focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b] shadow-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8a6405] mb-1 font-bold">
                    Attendance
                  </label>
                  <select
                    value={attending}
                    onChange={(e) => setAttending(e.target.value as 'yes' | 'blessing_only')}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#d4af37]/50 text-[#1f1a14] focus:outline-none focus:border-[#b8860b] shadow-sm"
                  >
                    <option value="yes">Will Attend Joyfully</option>
                    <option value="blessing_only">Sending Blessings</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8a6405] mb-1 font-bold">
                    No. of Guests
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    disabled={attending === 'blessing_only'}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#d4af37]/50 text-[#1f1a14] focus:outline-none focus:border-[#b8860b] disabled:opacity-50 shadow-sm"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5+">5+ Family Members</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8a6405] mb-1 font-bold">
                  Personal Blessing or Message (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a sweet note for Francis & Rosily, Andrina, or Dhaniel..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#d4af37]/50 text-[#1f1a14] placeholder-[#8c806f] focus:outline-none focus:border-[#b8860b] shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-[#fae084] via-[#d4af37] to-[#aa7a1e] text-[#090807] font-montserrat font-extrabold text-xs sm:text-sm tracking-widest uppercase shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                <span>Send RSVP via WhatsApp</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
