import React from 'react';

const WhyAnim8Text: React.FC = () => {
  return (
    <div className="text-left">
      <h2 className="text-4xl font-bold mb-6 text-white">
        Why Anim8 — <br />
        <span className="text-primary">This Is a Different Kind of Partnership 🤝</span>
      </h2>
      <p className="text-lg text-white max-w-xl mb-8">
        We’re not a vendor. We’re your system co-architect, diagnostic partner, and long-term evolution guide.
        What makes Anim8 different is not just what we build — it's how we think, how we collaborate, and how we commit to your transformation.
      </p>

      {/* <ul className="text-white text-sm space-y-3 list-disc pl-6">
        <li><strong className="text-cyan-300">Technology-Agnostic:</strong> We choose what's best for your ROI — not our resale margin.</li>
        <li><strong className="text-cyan-300">Tesla-Proven Expertise:</strong> We’ve led transformation from concept to execution on the world stage.</li>
        <li><strong className="text-cyan-300">First-Principles Logic:</strong> Every decision is rooted in physics, data, and system thinking.</li>
        <li><strong className="text-cyan-300">Emotional Intelligence:</strong> We design with human operators, not just machines, in mind.</li>
      </ul> */}
    </div>
  );
};

export default WhyAnim8Text;
