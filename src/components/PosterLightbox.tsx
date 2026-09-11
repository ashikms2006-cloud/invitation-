import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, Download, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export interface PosterData {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  tag: string;
  scripture?: string;
  description: string;
}

interface PosterLightboxProps {
  posters: PosterData[];
  activePosterIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const PosterLightbox: React.FC<PosterLightboxProps> = ({
  posters,
  activePosterIndex,
  onClose,
  onSelectIndex,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  useEffect(() => {
    setZoomLevel(1);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePosterIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectIndex((activePosterIndex + 1) % posters.length);
      if (e.key === 'ArrowLeft') onSelectIndex((activePosterIndex - 1 + posters.length) % posters.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePosterIndex, posters.length, onClose, onSelectIndex]);

  if (activePosterIndex === null) return null;
  const currentPoster = posters[activePosterIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentPoster.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xl transition-all duration-300 animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center bg-[#ffffff] border-2 border-[#d4af37] rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(184,134,11,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between px-5 py-3.5 border-b border-[#d4af37]/30 bg-[#fdfbf7] z-10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full bg-[#f7f2e7] border border-[#d4af37]/50 text-[#8a6405] font-montserrat text-xs font-bold uppercase tracking-wider">
              {currentPoster.tag}
            </span>
            <span className="font-cinzel text-sm text-[#1f1a14] hidden sm:inline font-bold">
              {currentPoster.title}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 2.0))}
              className="p-1.5 rounded-lg bg-[#f7f2e7] text-[#8a6405] hover:bg-[#d4af37] hover:text-white transition-colors cursor-pointer"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn size={18} />
            </button>
            <button
              onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75))}
              className="p-1.5 rounded-lg bg-[#f7f2e7] text-[#8a6405] hover:bg-[#d4af37] hover:text-white transition-colors cursor-pointer"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut size={18} />
            </button>
            <a
              href={currentPoster.src}
              download={`${currentPoster.id}_invitation_poster`}
              className="p-1.5 rounded-lg bg-[#f7f2e7] text-[#8a6405] hover:bg-[#d4af37] hover:text-white transition-colors cursor-pointer"
              title="Download Poster"
              aria-label="Download Poster"
            >
              <Download size={18} />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#f7f2e7] text-[#8a6405] hover:bg-[#d4af37] hover:text-white transition-all ml-2 cursor-pointer"
              title="Close Modal"
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Poster Image Display Area */}
        <div className="relative flex-1 w-full overflow-auto flex items-center justify-center p-3 sm:p-6 bg-[#faf7f0]">
          <img
            src={currentPoster.src}
            alt={currentPoster.title}
            className="max-h-[68vh] w-auto object-contain rounded-xl shadow-xl transition-transform duration-200 border border-[#d4af37]/40"
            style={{ transform: `scale(${zoomLevel})` }}
          />

          {/* Previous Button */}
          <button
            onClick={() => onSelectIndex((activePosterIndex - 1 + posters.length) % posters.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 border border-[#d4af37] text-[#8a6405] hover:bg-[#d4af37] hover:text-white transition-all cursor-pointer shadow-lg"
            aria-label="Previous Poster"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next Button */}
          <button
            onClick={() => onSelectIndex((activePosterIndex + 1) % posters.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 border border-[#d4af37] text-[#8a6405] hover:bg-[#d4af37] hover:text-white transition-all cursor-pointer shadow-lg"
            aria-label="Next Poster"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Footer Details */}
        <div className="w-full px-6 py-4 bg-[#fdfbf7] border-t border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <h3 className="font-cinzel text-lg text-[#1f1a14] font-bold tracking-wide">
              {currentPoster.title}
            </h3>
            <p className="font-garamond italic text-sm text-[#8a6405] font-semibold">
              {currentPoster.subtitle}
            </p>
          </div>
          {currentPoster.scripture && (
            <div className="max-w-md bg-white px-4 py-2 rounded-xl border border-[#d4af37]/30 text-xs font-garamond italic text-[#5e5343] shadow-sm">
              "{currentPoster.scripture}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
