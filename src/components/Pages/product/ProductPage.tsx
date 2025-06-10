import AnalogySection from './analogy/AnalogySection';
import CrewSection from './crew/CrewSection';
import CTASection from './cta/CTASection';
import ProductHeroSection from './hero/ProductHeroSection';
import HMISection from './hmi/HMISection';
import WhyItWorksSection from './whyitworks/WhyItWorksSection';
import productConfig from './product.json'
import SectionTextWithVisual from '../../ui/section/SectionTextWithVisual';
import type { ServiceSection } from '../../../models/service/ServiceSection';

const sections = productConfig.items

const ProductPage: React.FC = () => {
  return (
    <div className="h-screen bg-background h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section id="hero" className="h-screen snap-start">
        <ProductHeroSection />
      </section>

      {
        sections.map(section => 
        <section className="h-screen snap-start">
          <SectionTextWithVisual section={section as ServiceSection} />
        </section>
        )
      }
      
      <section id="analogy" className="h-screen snap-start">
        <AnalogySection />
      </section>
      
      <section id="hmi" className="h-screen snap-start">
        <HMISection />
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

