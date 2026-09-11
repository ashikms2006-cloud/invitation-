import React, { useState } from 'react';
import { BackgroundFX } from './components/BackgroundFX';
import { AudioPlayer } from './components/AudioPlayer';
import { NavigationBar } from './components/NavigationBar';
import { PosterLightbox, PosterData } from './components/PosterLightbox';
import { RSVPModal } from './components/RSVPModal';
import { FamilyCousinzzModal } from './components/FamilyCousinzzModal';

// Streamlined Concise Sections (White & Gold Cathedral Aesthetic)
import { HeroSection } from './components/HeroSection';
import { Section03ThreeCards } from './components/Section03ThreeCards';
import { AnniversaryAndFamilySection } from './components/AnniversaryAndFamilySection';
import { EventAndCountdownSection } from './components/EventAndCountdownSection';
import { FaithAndBlessingsSection } from './components/FaithAndBlessingsSection';
import { FinalRSVPSection } from './components/FinalRSVPSection';

export function App() {
  const [activePosterIndex, setActivePosterIndex] = useState<number | null>(null);
  const [isRSVPOpen, setIsRSVPOpen] = useState<boolean>(false);
  const [isFamilyCousinzzOpen, setIsFamilyCousinzzOpen] = useState<boolean>(false);

  // The 3 official posters supplied by the user (Source of Truth)
  const posters: PosterData[] = [
    {
      id: 'andrina',
      title: 'Andrina Denny',
      subtitle: 'First Holy Communion',
      src: '/assets/poster_andrina.jpg',
      tag: 'Card 01 • Communion',
      scripture: 'I am the bread of life. Whoever comes to me shall not hunger, and whoever believes in me shall never thirst. — John 6:35',
      description: 'May your heart always stay close to Jesus, today and always as you receive the Holy Sacrament.',
    },
    {
      id: 'dhaniel',
      title: 'Dhaniel Daison',
      subtitle: 'First Holy Communion',
      src: '/assets/poster_dhaniel.jpg',
      tag: 'Card 02 • Communion',
      scripture: 'This is my body given for you; do this in remembrance of me. — Luke 22:19',
      description: 'A blessed milestone of faith and devotion as Dhaniel takes his holy step with our Lord.',
    },
    {
      id: 'anniversary',
      title: 'Francis & Rosily',
      subtitle: '50th Wedding Anniversary',
      src: '/assets/poster_anniversary.jpg',
      tag: 'Card 03 • Golden Jubilee',
      scripture: 'Same People, Same Love after Fifty Years. Still the same Team.',
      description: 'Fifty years of steadfast love, laughter, togetherness, and a beautiful family journey.',
    },
  ];

  const handleExplore = () => {
    const el = document.getElementById('celebrations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fdfbf7] text-[#1f1a14] selection:bg-[#d4af37]/30 selection:text-[#1f1a14]">
      {/* Dynamic Gold Particles & Soft Floating Petals */}
      <BackgroundFX />

      {/* Ambient Sacred Audio Controller */}
      <AudioPlayer />

      {/* Floating Header Navigation with Enjoy With Us trigger */}
      <NavigationBar
        onOpenRSVP={() => setIsRSVPOpen(true)}
        onOpenFamilyCousinzz={() => setIsFamilyCousinzzOpen(true)}
      />

      {/* Main Streamlined Narrative Content (Clean & Neat) */}
      <main className="relative z-10 w-full overflow-x-hidden">
        {/* 1. Hero Opening with Celebrant Cards and Enjoy With Us Button */}
        <HeroSection
          onExplore={handleExplore}
          onOpenFamilyCousinzz={() => setIsFamilyCousinzzOpen(true)}
        />

        {/* 2. Three Celebrations Equal Interactive Showcase */}
        <Section03ThreeCards
          posters={posters}
          onOpenPoster={(idx) => setActivePosterIndex(idx)}
        />

        {/* 3. 50 Years of Love (Francis & Rosily) & Family Generation Connection */}
        <AnniversaryAndFamilySection
          onOpenAnniversaryModal={() => setActivePosterIndex(2)}
        />

        {/* 4. One Date • One Time • One Place + Live Countdown */}
        <EventAndCountdownSection />

        {/* 5. A Day of Faith (Scriptures & Blessings) */}
        <FaithAndBlessingsSection />

        {/* 6. Final Blessing, WhatsApp RSVP & Enjoy With Us Button */}
        <FinalRSVPSection
          onOpenRSVP={() => setIsRSVPOpen(true)}
          onOpenFamilyCousinzz={() => setIsFamilyCousinzzOpen(true)}
        />
      </main>

      {/* Interactive FamilyCousinzz Modal (Triggered by "Enjoy With Us" Button) */}
      <FamilyCousinzzModal
        isOpen={isFamilyCousinzzOpen}
        onClose={() => setIsFamilyCousinzzOpen(false)}
      />

      {/* Full-Screen Poster Modal Lightbox */}
      <PosterLightbox
        posters={posters}
        activePosterIndex={activePosterIndex}
        onClose={() => setActivePosterIndex(null)}
        onSelectIndex={(idx) => setActivePosterIndex(idx)}
      />

      {/* WhatsApp RSVP Modal */}
      <RSVPModal
        isOpen={isRSVPOpen}
        onClose={() => setIsRSVPOpen(false)}
      />
    </div>
  );
}

export default App;
