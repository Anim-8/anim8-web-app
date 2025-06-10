import ServiceHeroSection from './hero/ServiceHeroSection';
import ServiceCTASection from './cta/ServiceCTASection';
import config from './service.json'
import SectionTextWithVisual from '../../ui/section/SectionTextWithVisual';
import Page from '../../ui/Page';

const sections = config.sections

const ServicePage: React.FC = () => {
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
        <ServiceCTASection />
      </Section>
    </Page>
  );
};

const Section: React.FC<{children: React.ReactNode}> = ({ children }) => <section className="h-screen snap-start">{children}</section>

export default ServicePage;
