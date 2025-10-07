import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import ClientLogos from '@/components/ClientLogos';
import PortfolioSection from '@/components/PortfolioSection';
import PortfolioSectionMobile from '@/components/PortfolioSectionMobile';
import PortfolioWorksSection from '@/components/PortfolioWorksSection';
import ReviewsSection from '@/components/ReviewsSection';
import CircularCTA from '@/components/CircularCTA';
import PortfolioSeeMoreCTA from '@/components/PortfolioSeeMoreCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      <main>
        <HeroSection />
        <PortfolioSection />
        <PortfolioSectionMobile />
        
        {/* 5 content sections with alternating connector animations */}
        <ContentSection connectorVariant="circle-line" showClientLogos={true} />
        <ContentSection connectorVariant="line-circle" showClientLogos={true} />
        <ContentSection connectorVariant="circle-line" showClientLogos={true} />
        <ContentSection connectorVariant="line-circle" showClientLogos={true} />
        <ContentSection connectorVariant="line-only" showClientLogos={true} />
        
        {/* Portfolio works section */}
        <PortfolioWorksSection />
        
        {/* Reviews section */}
        <ReviewsSection />
      </main>

      {/* Fixed client logos and CTA appear on content sections only */}
      <ClientLogos />
      <CircularCTA />
      <PortfolioSeeMoreCTA />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
