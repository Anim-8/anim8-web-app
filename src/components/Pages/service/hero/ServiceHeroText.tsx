import React from 'react';

const ServiceHeroText: React.FC<{ triggerModal: (source: string) => void }> = ({ triggerModal }) => {
  return (
    <div className="z-10 max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        We Don’t Just Fix Problems.  <br />
        <span className="text-primary">We Commission Revolutions. 🫡</span>
      </h1>

      <p className="text-lg text-white/80">
        As Advanced Manufacturing System Architects, we reimagine what factories can become. From diagnostics to metrology,
        from custom software to AI orchestration — we design and integrate intelligent, evolving systems that empower your enterprise to think, adapt, and scale.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => triggerModal('service-hero-diagnostic')}
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/80 transition"
        >
          Start with a Diagnostic
        </button>

        <button
          onClick={() => triggerModal('service-hero-architect')}
          className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
        >
          Talk to an Architect
        </button>
      </div>
    </div>
  );
};

export default ServiceHeroText;
