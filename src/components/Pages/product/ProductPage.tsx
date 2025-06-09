import AnalogySection from './analogy/AnalogySection';
import CrewSection from './crew/CrewSection';
import CTASection from './cta/CTASection';
import ProductHeroSection from './hero/ProductHeroSection';
import HMISection from './hmi/HMISection';
import ImplementationSection from './implementation/ImplementationSection';
import WhyItWorksSection from './whyitworks/WhyItWorksSection';

const ProductPage: React.FC = () => {
  return (
    <div className="h-screen bg-background h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section id="hero" className="h-screen snap-start">
        <ProductHeroSection />
      </section>
      
      <section id="analogy" className="h-screen snap-start">
        <AnalogySection />
      </section>
      
      <section id="hmi" className="h-screen snap-start">
        <HMISection />
      </section>
      
      <section id="implementation" className="h-screen snap-start">
        <ImplementationSection />
      </section>
      
      <section id="crew" className="h-screen snap-start">
        <CrewSection />
      </section>
      
      <section id="whyitworks" className="h-screen snap-start">
        <WhyItWorksSection />
      </section>
      
      <section id="cta" className="h-screen snap-start">
        <CTASection />
      </section>
    </div>
  );
};

export default ProductPage;

