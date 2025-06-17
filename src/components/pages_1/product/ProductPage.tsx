import HMISection from './HMISection';
import SectionTextWithVisual from '../../ui/section/SectionTextWithVisual';
import Page from '../../ui/Page';
import ClosingSection from '../../ui/ClosingSection';
import CTAButtons from './CTAButtons';
import useModal from '../../../hooks/useModal';
import AnalogyText from './AnalogyText';
import SectionVerticalWithCards, { type VerticalSection } from '../../ui/section/SectionVerticalWithCards';
import productSections from './config';
import type { BaseSection } from '../../../models/common/Section';


const ProductPage: React.FC = () => {
  const { open, openModal, closeModal } = useModal()
  return (
    <Page>
      {/* <section id="hero" className="h-screen snap-start">
        <ProductHeroSection />
      </section> */}
      <ProductSection>
        <AnalogyText />
      </ProductSection>
      <ProductSection>
        <HMISection />
      </ProductSection>
      {
        productSections.map(section =>
          <ProductSection key={section.title}>
            {section.variant === "stacked" ? <SectionVerticalWithCards section={section as VerticalSection} /> : <SectionTextWithVisual section={section as BaseSection} />}
          </ProductSection>
        )
      }
      <ProductSection>
        <ClosingSection
          titleSlot={<>Let’s Commission Your Cortex – <span className="text-cyan-400">Bring It to Life</span></>}
          description='You don’t just install Cortex — you animate it. We don’t sell dashboards.We partner to build consciousness into your enterprise, one signal at a time.'
          buttonSlot={<CTAButtons handleClick={openModal} />}
          open={open}
          handleClose={closeModal}
        />
      </ProductSection>
    </Page>
  );
};

const ProductSection: React.FC<{ children: React.ReactNode }> = ({ children }) => <section className="h-auto md:h-screen snap-start">{children}</section>

export default ProductPage;

