// components/sections/CTASection/CTAText.tsx
import React from 'react';

const CTAText: React.FC = () => {
  return (
    <div className="text-white w-full text-center max-w-5xl mx-auto space-y-8 px-4">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Let’s Commission Your Cortex – <span className="text-cyan-400">Bring It to Life</span>
      </h2>

      <p className="text-lg md:text-xl max-w-3xl mx-auto">
        You don’t just install Cortex — you animate it. We don’t sell dashboards. We partner to build consciousness into your enterprise, one signal at a time.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition">
          Book a Discovery Session
        </button>
        <button className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition">
          Get a Diagnostic
        </button>
        <button className="bg-white hover:bg-gray-100 text-cyan-800 font-semibold py-3 px-8 rounded-full shadow-lg transition">
          See the Dimensional HMI in Action
        </button>
      </div>
    </div>
  );
};

export default CTAText;
