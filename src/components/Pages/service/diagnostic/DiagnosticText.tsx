import React from 'react';

const features = [
  {
    title: 'Animation Spectrum Report',
    description: 'Assess current operational maturity.',
  },
  {
    title: 'Brain-Body Mapping',
    description: 'Identify disconnects between equipment and digital systems.',
  },
  {
    title: 'System Bottleneck Analysis',
    description: 'Highlight inefficiencies and performance traps.',
  },
  {
    title: 'Budget + ROI Forecast',
    description: 'Deliver a financial blueprint for transformation.',
  },
];

const DiagnosticText: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
          🔬 The Diagnostic — <br />
          <span className="text-primary">Your Enterprise MRI</span>
        </h2>

        <p className="text-lg text-white/80 max-w-3xl mx-auto mt-4">
          Every transformation starts with clarity. Our Diagnostic is a deep, systemic evaluation of your manufacturing ecosystem — from design to data.
          We map your position across the <strong className="text-cyan-300">Animation Spectrum</strong> (Manual → Automated → Animated) and generate a precise roadmap for evolution.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 p-6 transition duration-300 shadow hover:shadow-cyan-400/10"
          >
            <h4 className="text-lg font-semibold text-cyan-300 mb-2">{feature.title}</h4>
            <p className="text-sm text-white/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagnosticText;
