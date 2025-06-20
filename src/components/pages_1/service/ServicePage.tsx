import SectionTextWithVisual from '../../ui/section/SectionTextWithVisual';
import Page from '../../ui/Page';
import ClosingSection from '../../ui/ClosingSection';
import useModal from '../../../hooks/useModal';
import ServiceCardLayout from './ServiceCardLayout';
import serviceSections from './config';
import type { BaseSection } from '../../../models/common/Section';
import Button from '../../ui/Button';

// a little odd, but a switch may be the best way to scale and just add new visuals.
// we could also just switch to a typescript array and include the visual as a field

const ServicePage: React.FC = () => {
  const { open, openModal, closeModal, source } = useModal()
  return (
    <Page>
      {
        serviceSections.map(section => <Section key={section.title}>
          {
            section.variant === "simple-card" ? 
              <ServiceCardLayout { ...section } subtitleColor={section.subtitleColor} items={section.items as { title: string, description: string}[]} /> : 
              <SectionTextWithVisual section={section as BaseSection} primaryTitleColor={section?.primaryTitleColor} />
          }
        </Section>)
      }
      <Section>
        <ClosingSection
          titleSlot={<>Let&rsquo;s Commission <span className="text-primary">Your Cortex</span></>}
          description="Whether you're just beginning your transformation or ready to scale toward autonomy, our team is here to architect, animate, and evolve your factory — together."
          buttonSlot={
            <>
              <Button
                onClick={() => openModal('service-cta-diagnostic')}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold shadow hover:bg-primary/80 transition"
              >
                Book a Diagnostic
              </Button>

              <Button
                onClick={() => openModal('service-cta-architect')}
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Talk to a System Architect
              </Button>
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

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => <section className="h-auto md:h-screen snap-start">{children}</section>

export default ServicePage;
