import ProductHeroSection from './hero/ProductHeroSection';
import HMISection from './hmi/HMISection';
import productConfig from './product.json'
import SectionTextWithVisual from '../../ui/section/SectionTextWithVisual';
import type { ServiceSection } from '../../../models/service/ServiceSection';
import Page from '../../ui/Page';
import ClosingSection from '../../ui/ClosingSection';
import CTAButtons from './CTAButtons';
import useModal from '../../../hooks/useModal';

const sections = productConfig.items
const closingSections = [<HMISection />]

const ProductPage: React.FC = () => {
  const { open, openModal, closeModal } = useModal()
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
      <ProductSection>
        <ClosingSection
        titleSlot={<>Let’s Commission Your Cortex – <span className="text-cyan-400">Bring It to Life</span></>}
        description='You don’t just install Cortex — you animate it. We don’t sell dashboards.We partner to build consciousness into your enterprise, one signal at a time.'
        buttonSlot={<CTAButtons handleClick={openModal} /> }
        open={open}
        handleClose={closeModal}
      />
      </ProductSection>
    </Page>
  );
};

const ProductSection: React.FC<{ children: React.ReactNode }> = ({ children }) => <section className="h-screen snap-start">{children}</section>

export default ProductPage;

