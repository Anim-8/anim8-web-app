import React from 'react';

const ContinuousEvolutionText: React.FC = () => {
  return (
    <div className="text-left">
      <h2 className="text-4xl font-bold mb-6 text-white">
        Continuous Evolution — <br />
        <span className="text-primary">Built to Evolve 🦋</span>
      </h2>
      <p className="text-lg text-white max-w-xl mb-8">
        We don’t deliver static tools — we commission living systems. Our engagements are designed
        to scale, adapt, and improve with every cycle. With Cortex at the core, we embed your enterprise
        in a self-reinforcing loop of learning, performance, and transformation.
      </p>

      <ul className="text-white text-sm space-y-3 list-disc pl-6">
        <li><strong className="text-cyan-300">Cyclical Methodology:</strong> Diagnostic → Design → Implementation → Feedback → Evolution.</li>
        <li><strong className="text-cyan-300">Self-Improving Logic:</strong> Cortex refines itself using historical and live data to close the loop.</li>
        <li><strong className="text-cyan-300">Performance Dashboards:</strong> Monitor KPIs, drift, and anomalies to tune continuously.</li>
        <li><strong className="text-cyan-300">Partnership Model:</strong> We grow with you — from first pilot to full-scale autonomy.</li>
      </ul>
    </div>
  );
};

export default ContinuousEvolutionText;
