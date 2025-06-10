import ServiceHeroSection from './hero/ServiceHeroSection';
import config from './service.json'
import SectionTextWithVisual from '../../ui/section/SectionTextWithVisual';
import Page from '../../ui/Page';
import ClosingSection from '../../ui/ClosingSection';
import useModal from '../../../hooks/useModal';

const sections = config.sections

const ServicePage: React.FC = () => {
  const { open, openModal, closeModal, source } = useModal()
  return (
    <Page>
      <Section>
        <ServiceHeroSection />
      </Section>
      {
        sections.map(section => <Section key={section.title}>
          <SectionTextWithVisual section={section} />
        </Section>)
      }
      <Section>
        <ClosingSection
          titleSlot={<>Let&rsquo;s Commission <span className="text-primary">Your Cortex</span></>}
          description="Whether you're just beginning your transformation or ready to scale toward autonomy, our team is here to architect, animate, and evolve your factory — together."
          buttonSlot={
            <>
              <button
                onClick={() => openModal('service-cta-diagnostic')}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold shadow hover:bg-primary/80 transition"
              >
                Book a Diagnostic
              </button>

              <button
                onClick={() => openModal('service-cta-architect')}
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Talk to a System Architect
              </button>
            </>
          }
          open={open}
          handleClose={closeModal}
          source={source ?? ''}
        />
      </Section>
    </Page>
  );
};

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => <section className="h-screen snap-start">{children}</section>

export default ServicePage;
