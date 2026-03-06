import HeroSection from '@/components/HeroSection';
import EmotionMap from '@/components/EmotionMap';
import InsightSection from '@/components/InsightSection';
import PsychologySection from '@/components/PsychologySection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EmotionMap />
      <InsightSection />
      <PsychologySection />
    </div>
  );
};

export default Index;
