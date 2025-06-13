import HeroSection from './hero/HeroSection';
import homeConfig from './home.json'
import HomeSection from './HomeSection';

const sections = homeConfig.items

const HomePage: React.FC = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory scrollwidth">
      <section id="hero" className="h-screen snap-start">
        <HeroSection />
      </section>
      {
        sections.map((section) => <Section id={section.id} key={section.id}>
          <HomeSection title={section.title} description={section.description} leadType={section.leadType} />
        </Section>)
      }
    </div>
  );
};

const Section: React.FC<{id: string, children: React.ReactNode}> = ({ id, children }) => {
  return (
    <section id={id} className="h-screen w-full snap-start snap-always">{children}</section>
  )
}

export default HomePage;
