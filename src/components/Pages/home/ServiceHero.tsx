import React from 'react';
import { useNavigate } from 'react-router'; // ✅ you're using this version
import useModal from '../../../hooks/useModal';
import LeadModal from '../../shared/LeadModal';

const ServiceHero: React.FC = () => {
  const navigate = useNavigate();
  const { open, source, openModal, closeModal } = useModal();

  return (
    <div className="relative w-full min-h-[60vh] flex items-center justify-center px-8 py-40 text-center">
      <div className="z-10 max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          We Don’t Just Fix Problems. <br />
          <span className="text-primary">We Commission Revolutions.</span>
        </h1>
        <p className="text-lg text-white/80">
          As Advanced Manufacturing System Architects, we reimagine what factories can become. From diagnostics to metrology,
          from custom software to AI orchestration — we design and integrate intelligent, evolving systems that empower your enterprise to think, adapt, and scale.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
          <button
            onClick={() => openModal('service-langing-diagnostic')}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/80 transition cursor-pointer"
          >
            Start with a Diagnostic
          </button>

          <button
            onClick={() => openModal('service-hero-architect')}
            className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition cursor-pointer"
          >
            Talk to an Architect
          </button>

          <button
            onClick={() => navigate('/service')}
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition cursor-pointer"
          >
            Discover Our Services
          </button>
        </div>
      </div>

      <LeadModal isOpen={open} onClose={closeModal} source={source} />
    </div>
  );
};

export default ServiceHero;
