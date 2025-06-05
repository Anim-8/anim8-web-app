import ServiceHeroSection from './hero/ServiceHeroSection';
import DiagnosticSection from './diagnostic/DiagnosticSection';
import SoftwareSection from './software/SoftwareSection';
import MetrologySection from './metrology/MetrologySection';
import CortexIntegrationSection from './cortex/CortexIntegrationSection';
import ContinuousEvolutionSection from './evolution/ContinuousEvolutionSection';
import WhyAnim8Section from './whyanim8/WhyAnim8Section';
import ServiceCTASection from './cta/ServiceCTASection';

const ServicePage: React.FC = () => {
  return (
    <div className="h-screen bg-background w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section id="hero" className="h-screen snap-start">
        <ServiceHeroSection />
      </section>

      <section id="diagnostic" className="h-screen snap-start">
        <DiagnosticSection />
      </section>

      <section id="software" className="h-screen snap-start">
        <SoftwareSection />
      </section>

      <section id="metrology" className="h-screen snap-start">
        <MetrologySection />
      </section>

      <section id="cortex" className="h-screen snap-start">
        <CortexIntegrationSection />
      </section>

      <section id="evolution" className="h-screen snap-start">
        <ContinuousEvolutionSection />
      </section>

      <section id="whyanim8" className="h-screen snap-start">
        <WhyAnim8Section />
      </section>

      <section id="cta" className="h-screen snap-start">
        <ServiceCTASection />
      </section>
    </div>
  );
};

export default ServicePage;
