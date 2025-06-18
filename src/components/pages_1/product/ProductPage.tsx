import HMISection from './HMISection';
import SectionTextWithVisual from '../../ui/section/SectionTextWithVisual';
import Page from '../../ui/Page';
import ClosingSection from '../../ui/ClosingSection';
import useModal from '../../../hooks/useModal';
import AnalogyText from './AnalogyText';
import SectionVerticalWithCards, { type VerticalSection } from '../../ui/section/SectionVerticalWithCards';
import productSections from './config';
import type { BaseSection } from '../../../models/common/Section';
import Button from '../../ui/Button';


const ProductPage: React.FC = () => {
  const { open, openModal, closeModal, source } = useModal()
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
          buttonSlot={
            <>
              <Button
                onClick={() => openModal('product-discovery')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
              >
                Book a Discovery Session
              </Button>

              <Button
                onClick={() => openModal('product-diagnostic')}
                className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
              >
                Get a Diagnostic
              </Button>

              <Button
                onClick={() => openModal('product-hmi')}
                className="bg-white hover:bg-gray-100 text-cyan-800 font-semibold py-3 px-8 rounded-full shadow-lg transition"
              >
                See the Dimensional HMI in Action
              </Button>
            </>
          }
          open={open}
          handleClose={closeModal}
          source={source ?? ''}
        />
      </ProductSection>
    </Page>
  );
};

const ProductSection: React.FC<{ children: React.ReactNode }> = ({ children }) => <section className="h-auto md:h-screen snap-start">{children}</section>

export default ProductPage;

