import React from 'react';

const DiagnosticText: React.FC = () => {
  return (
    <div className="text-left">
      <h2 className="text-4xl font-bold mb-6 text-white leading-snug">
        The Diagnostic — <br />
        <span className="text-primary">Your Enterprise MRI</span>
      </h2>
      <p className="text-lg text-white max-w-xl mb-8">
        Every transformation starts with clarity. Our Diagnostic is a deep, systemic evaluation of your manufacturing ecosystem — from design to data.
        We map your position across the <strong className="text-cyan-300">Animation Spectrum</strong> (Manual → Automated → Animated) and generate a precise roadmap for evolution.
      </p>

      <ul className="space-y-3 text-white text-base list-disc pl-6">
        <li>
          <strong className="text-cyan-300">Animation Spectrum Report:</strong> Assess current operational maturity.
        </li>
        <li>
          <strong className="text-cyan-300">Brain-Body Mapping:</strong> Identify disconnects between equipment and digital systems.
        </li>
        <li>
          <strong className="text-cyan-300">System Bottleneck Analysis:</strong> Highlight inefficiencies and performance traps.
        </li>
        <li>
          <strong className="text-cyan-300">Budget + ROI Forecast:</strong> Deliver a financial blueprint for transformation.
        </li>
      </ul>
    </div>
  );
};

export default DiagnosticText;
