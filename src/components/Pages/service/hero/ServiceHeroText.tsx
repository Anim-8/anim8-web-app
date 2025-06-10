import React from 'react';

const ServiceHeroText: React.FC<{ openModal: (source: string) => void }> = ({ openModal }) => {
  return (
    <div className="text-left z-10">
      <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
        We Don’t Just Fix Problems. <br />
        <span className="text-primary">We Commission Revolutions.</span>
      </h1>

      <p className="text-lg text-white max-w-xl mb-8">
        As Advanced Manufacturing System Architects, we reimagine what factories can become. From diagnostics to metrology,
        from custom software to AI orchestration — we design and integrate intelligent, evolving systems that empower your enterprise to think, adapt, and scale.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => openModal('service-hero-diagnostic')}
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/80 transition"
        >
          Start with a Diagnostic
        </button>

        <button
          onClick={() => openModal('service-hero-architect')}
          className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
        >
          Talk to an Architect
        </button>
      </div>
    </div>
  );
};

export default ServiceHeroText;
