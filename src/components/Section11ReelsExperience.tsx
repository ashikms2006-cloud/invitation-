import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Sparkles, Flame, Volume2, Camera } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioEngine';

export const Section11ReelsExperience: React.FC = () => {
  const [likes, setLikes] = useState<{ [key: string]: number }>({
    'reel-1': 142,
    'reel-2': 188,
    'reel-3': 230,
    'reel-4': 195,
  });

  const [hasLiked, setHasLiked] = useState<{ [key: string]: boolean }>({});

  const handleLike = (id: string) => {
    audioEngine.playCelebrationChime();
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#e1306c', '#fd1d1d', '#fae084'],
    });

    setLikes((prev) => ({
      ...prev,
      [id]: hasLiked[id] ? prev[id] - 1 : prev[id] + 1,
    }));
    setHasLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const familyReels = [
    {
      id: 'reel-1',
      src: '/assets/family/couple_hero_1789007437940.jpg',
      tag: '50 Years Together',
      caption: 'The Golden Couple with unconditional smiles & grace ❤️✨ #GoldenJubilee #GrandparentsLove',
      audio: 'Original Audio • Family Anthems',
      rotation: '-rotate-2',
    },
    {
      id: 'reel-2',
      src: '/assets/family/media_1789008662863.jpg',
      tag: 'Cousin Vibes',
      caption: 'When the whole squad unites under one roof! Pure laughter and zero filter 🎉🔥 #FAMILYCOUSINZZ',
      audio: 'Trending Audio • Cousin Energy',
      rotation: 'rotate-2',
    },
    {
      id: 'reel-3',
      src: '/assets/poster_andrina.jpg',
      tag: 'Blessed Angel',
      caption: 'Andrina Denny radiant with holy light on her First Communion day 🕊️🙏 #HolyCommunion #Grace',
      audio: 'Sacred Hymns • Blessed Day',
      rotation: '-rotate-1',
    },
    {
      id: 'reel-4',
      src: '/assets/poster_dhaniel.jpg',
      tag: 'Faith & Joy',
      caption: 'Dhaniel Daison taking his sacred step in faith with pure dedication 🕊️✝️ #CommunionJoy #FamilyPride',
      audio: 'Sacred Hymns • Divine Blessings',
      rotation: 'rotate-1',
    },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 bg-[#09050e] overflow-hidden">
      {/* Background Floating Reaction Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 text-3xl animate-bounce [animation-duration:3s] opacity-30">❤️</div>
        <div className="absolute top-1/2 right-12 text-4xl animate-bounce [animation-duration:4s] opacity-30">🔥</div>
        <div className="absolute bottom-1/4 left-1/3 text-3xl animate-bounce [animation-duration:2.5s] opacity-30">🎉</div>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e1306c]/40 bg-[#1e0a1a] text-[#fae084] font-montserrat text-xs tracking-widest uppercase font-bold"
          >
            <Camera size={14} className="text-[#e1306c]" />
            <span>INSTAGRAM REEL FEED EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-outfit text-3xl sm:text-5xl md:text-6xl font-black text-ig-gradient uppercase tracking-tight"
          >
            REAL MOMENTS. REAL MEMORIES.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-garamond italic text-lg sm:text-2xl text-[#f5e6ce]"
          >
            Tap the hearts to send love to the family feed! Every snapshot captures the genuine happiness of this historic reunion.
          </motion.p>
        </div>

        {/* Vertical Reel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {familyReels.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="flex justify-center"
            >
              <div
                className={`relative w-full max-w-[290px] aspect-[9/16] rounded-3xl overflow-hidden border-2 border-[#e1306c]/40 bg-[#140b17] shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col justify-between group hover:border-[#fd1d1d] hover:shadow-[0_25px_60px_rgba(225,48,108,0.4)] transition-all duration-500 transform hover:scale-103 ${reel.rotation}`}
              >
                {/* Reel Media Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={reel.src}
                    alt={reel.tag}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108 filter brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />
                </div>

                {/* Top Overlay (Profile Tag & Reel Indicator) */}
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full p-[2px] bg-ig-gradient shadow-md">
                      <div className="w-full h-full rounded-full bg-[#09050e] flex items-center justify-center text-[10px] font-bold text-[#ffffff]">
                        FC
                      </div>
                    </div>
                    <div>
                      <span className="font-montserrat font-bold text-xs text-[#ffffff] block leading-tight">
                        familycousinzz
                      </span>
                      <span className="text-[10px] text-[#fae084] font-montserrat">
                        {reel.tag}
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-black/60 border border-white/20 text-[10px] font-montserrat font-semibold text-white">
                    REEL
                  </span>
                </div>

                {/* Right Floating Actions (Like, Comment, Share) */}
                <div className="relative z-10 p-4 self-end flex flex-col items-center gap-4">
                  <button
                    onClick={() => handleLike(reel.id)}
                    className="flex flex-col items-center gap-1 group/btn cursor-pointer"
                    aria-label="Like reel"
                  >
                    <div
                      className={`p-2.5 rounded-full backdrop-blur-md transition-transform active:scale-125 ${
                        hasLiked[reel.id]
                          ? 'bg-[#e1306c] text-[#ffffff] scale-110 shadow-lg'
                          : 'bg-black/50 text-[#ffffff] group-hover/btn:bg-white/20'
                      }`}
                    >
                      <Heart
                        size={20}
                        className={hasLiked[reel.id] ? 'fill-current text-white' : 'text-white'}
                      />
                    </div>
                    <span className="text-[11px] font-montserrat font-bold text-white shadow-sm">
                      {likes[reel.id]}
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      audioEngine.playCelebrationChime();
                      confetti({ particleCount: 15, spread: 40 });
                    }}
                    className="flex flex-col items-center gap-1 cursor-pointer"
                    aria-label="Comment"
                  >
                    <div className="p-2.5 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-white/20 transition-colors">
                      <MessageCircle size={20} />
                    </div>
                    <span className="text-[11px] font-montserrat font-bold text-white">
                      💬
                    </span>
                  </button>

                  <div className="p-2.5 rounded-full bg-black/50 text-white backdrop-blur-md">
                    <Share2 size={18} />
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="relative z-10 p-4 space-y-2 text-left">
                  <p className="font-montserrat text-xs text-[#ffffff] font-medium leading-relaxed drop-shadow-md">
                    {reel.caption}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#fae084] font-montserrat font-semibold">
                    <Volume2 size={12} className="animate-pulse" />
                    <span>{reel.audio}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
