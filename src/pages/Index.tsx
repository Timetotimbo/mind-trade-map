import HeroSection from '@/components/HeroSection';
import EmotionMap from '@/components/EmotionMap';
import InsightSection from '@/components/InsightSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EmotionMap />
      <InsightSection />
    </div>
  );
};

export default Index;
