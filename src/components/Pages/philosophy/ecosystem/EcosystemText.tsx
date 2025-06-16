import React from 'react';

const EcosystemText: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-left md:text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
          The Ecosystem — <br />
          <span className="text-primary">Bridge Builders of Industry</span>
        </h2>

        <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto">
          The manufacturing problem is too vast for any single player to solve.
          That’s why we’re building an ecosystem — a merit-based alliance of specialized solution providers
          working together to tackle the industry's most complex challenges.
        </p>

        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Anim8 acts as the living interface between advanced technology creators and the manufacturing world —
          translating frontier tech into practical industrial transformation.
        </p>
      </div>
    </div>
  );
};

export default EcosystemText;
