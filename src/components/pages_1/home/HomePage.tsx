import HeroSection from './hero/HeroSection';
import PhilosophyHeroSection from './PhilosophyHeroSection';
import ProductHeroSection from '../product/hero/ProductHeroSection';
import ServiceHero from './ServiceHero';
import LeadModal from '../../shared/LeadModal';
import useModal from '../../../hooks/useModal';
import { useNavigate } from 'react-router-dom';


const HomePage: React.FC = () => {
  const { open, source, openModal, closeModal } = useModal();
  const navigate = useNavigate()
  return (
    <>
    <div className="w-full overflow-y-scroll scroll-smooth scrollwidth snap-none md:snap-y md:snap-mandatory">
      <section id="hero" className="h-auto md:h-screen snap-start">
        <HeroSection />
      </section>
      <section id="product" className="h-auto md:h-screen snap-start">
        <ProductHeroSection />
      </section>
      <section id="service" className="h-auto md:h-screen snap-start">
        <ServiceHero onModalClick={openModal} onNav={() => navigate("service")} />
      </section>
      <section id="philosophy" className="h-auto md:h-screen snap-start">
        <PhilosophyHeroSection onModalClick={openModal} onNav={() => navigate("philosophy")} />
      </section>
    </div>
    <LeadModal isOpen={open} onClose={closeModal} source={source} />
    </>
  );
};

export default HomePage;
