import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CheckIn from '@/components/CheckIn';
import EmotionMap from '@/components/EmotionMap';
import InsightSection from '@/components/InsightSection';
import PsychologySection from '@/components/PsychologySection';

const Index = () => {
  // The card lit up on the map, and the card whose details are open
  const [selected, setSelected] = useState<string | null>(null);
  const [detail, setDetail] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CheckIn
        onShowOnMap={id => {
          setSelected(id);
          document.getElementById('atlas')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <EmotionMap selected={selected} onSelect={setSelected} detail={detail} onDetail={setDetail} />
      <InsightSection />
      <PsychologySection />
    </div>
  );
};

export default Index;
