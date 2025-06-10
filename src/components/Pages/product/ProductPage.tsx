import CTASection from './cta/CTASection';
import ProductHeroSection from './hero/ProductHeroSection';
import HMISection from './hmi/HMISection';
import productConfig from './product.json'
import SectionTextWithVisual from '../../ui/section/SectionTextWithVisual';
import type { ServiceSection } from '../../../models/service/ServiceSection';
import Page from '../../ui/Page';

const sections = productConfig.items
const closingSections = [<HMISection />, <CTASection />]

const ProductPage: React.FC = () => {
  return (
    <Page>
      <section id="hero" className="h-screen snap-start">
        <ProductHeroSection />
      </section>
      {
        sections.map(section => 
        <ProductSection key={section.title}>
          <SectionTextWithVisual section={section as ServiceSection} />
        </ProductSection>
        )
      }
      {
        closingSections.map((c, i) => <ProductSection key={i}>{c}</ProductSection>)
      }
    </Page>
  );
};

const ProductSection: React.FC<{children: React.ReactNode}> = ({ children }) => <section className="h-screen snap-start">{children}</section>

export default ProductPage;

