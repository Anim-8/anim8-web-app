import React from 'react';

const ServiceCTAText: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
        Let’s Commission <span className="text-primary">Your Cortex</span>
      </h2>
      <p className="text-lg text-white max-w-2xl mx-auto mb-10">
        Whether you're just beginning your transformation or ready to scale toward autonomy,
        our team is here to architect, animate, and evolve your factory — together.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold shadow hover:bg-primary/80 transition">
          Book a Diagnostic
        </button>
        <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
          Talk to a System Architect
        </button>
      </div>
    </div>
  );
};

export default ServiceCTAText;
