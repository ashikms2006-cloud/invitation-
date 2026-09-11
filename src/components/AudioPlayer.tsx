import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  const togglePlay = () => {
    const nextState = audioEngine.toggle();
    setIsPlaying(nextState);
    setHasInteracted(true);
  };

  useEffect(() => {
    // Attempt graceful audio start on first user interaction anywhere
    const handleFirstClick = () => {
      if (!hasInteracted) {
        // We can leave audio manual or prompt with a glowing badge
      }
    };
    window.addEventListener('click', handleFirstClick, { once: true });
    return () => window.removeEventListener('click', handleFirstClick);
  }, [hasInteracted]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Visual pulse hint */}
      {!isPlaying && (
        <div className="hidden md:flex items-center gap-1.5 bg-[#1a1610]/90 border border-[#d4af37]/40 px-3.5 py-1.5 rounded-full text-xs font-montserrat text-[#fae084] shadow-lg backdrop-blur-md animate-pulse">
          <Sparkles size={13} className="text-[#fae084]" />
          <span>Tap for Sacred Music</span>
        </div>
      )}

      {/* Main audio toggle button */}
      <button
        onClick={togglePlay}
        className={`relative group flex items-center justify-center w-13 h-13 rounded-full border transition-all duration-300 shadow-2xl backdrop-blur-xl ${
          isPlaying
            ? 'bg-[#d4af37] border-[#fff] text-[#090807] gold-glow scale-105'
            : 'bg-[#14110d]/90 border-[#d4af37]/50 text-[#fae084] hover:border-[#fae084] hover:scale-105'
        }`}
        title={isPlaying ? 'Mute Sacred Hymn' : 'Play Sacred Hymn'}
        aria-label={isPlaying ? 'Mute Sacred Hymn' : 'Play Sacred Hymn'}
      >
        {/* Equalizer animation bars when active */}
        {isPlaying ? (
          <div className="flex items-center gap-0.5">
            <span className="w-1 bg-[#090807] h-3.5 animate-bounce rounded-full [animation-delay:0ms]"></span>
            <span className="w-1 bg-[#090807] h-5 animate-bounce rounded-full [animation-delay:150ms]"></span>
            <span className="w-1 bg-[#090807] h-4 animate-bounce rounded-full [animation-delay:300ms]"></span>
            <span className="w-1 bg-[#090807] h-2.5 animate-bounce rounded-full [animation-delay:75ms]"></span>
          </div>
        ) : (
          <Music size={20} className="transition-transform group-hover:rotate-12" />
        )}

        {/* Ambient Ring */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-[#fae084]/60 animate-ping pointer-events-none opacity-40"></span>
        )}
      </button>
    </div>
  );
};
