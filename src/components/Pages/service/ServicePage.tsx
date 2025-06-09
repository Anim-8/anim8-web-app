import ServiceHeroSection from './hero/ServiceHeroSection';
import ServiceCTASection from './cta/ServiceCTASection';
import config from './service.json'
import ServiceSection from './ServiceSection';

const sections = config.sections

const ServicePage: React.FC = () => {
  return (
    <div className="h-screen bg-background w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <Section>
        <ServiceHeroSection />
      </Section>
      {
        sections.map(section => <Section key={section.title}>
          <ServiceSection section={section} />
        </Section>)
      }
      <Section>
        <ServiceCTASection />
      </Section>
    </div>
  );
};

const Section: React.FC<{children: React.ReactNode}> = ({ children }) => <section className="h-screen snap-start">{children}</section>

export default ServicePage;
