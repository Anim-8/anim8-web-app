import ServiceHeroSection from './hero/ServiceHeroSection';
import ServiceCTASection from './cta/ServiceCTASection';
import config from './service.json'
import ServiceSection from './ServiceSection';

const sections = config.sections

const ServicePage: React.FC = () => {
  return (
    <div className="h-screen bg-background w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section id="hero" className="h-screen snap-start">
        <ServiceHeroSection />
      </section>
      {
        sections.map(section => <section id="hero" className="h-screen snap-start" key={section.title}>
          <ServiceSection section={section} />
        </section>)
      }
      <section id="cta" className="h-screen snap-start">
        <ServiceCTASection />
      </section>
    </div>
  );
};

export default ServicePage;
