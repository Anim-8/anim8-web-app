import React from 'react';

const WhyItWorksText: React.FC = () => {
  return (
    <div className="text-white max-w-2xl space-y-6">
      <h2 className="text-4xl font-bold leading-tight">
        Why It Works – <span className="text-cyan-400">A System Built on First Principles 🥇</span>
      </h2>

      <p className="text-lg">
        Cortex is engineered, not configured. Our foundation is not trend, but principle. Every decision in our system flows from physics, data, and logic.
      </p>

      <ul className="list-disc list-inside text-sm space-y-2 text-white/80">
        <li>
          <strong className="text-white">Physics-based root cause logic:</strong> We trace issues to their physical origin — not symptoms.
        </li>
        <li>
          <strong className="text-white">Unbiased tech stack:</strong> No vendor lock-in. We choose the right tool for the job every time.
        </li>
        <li>
          <strong className="text-white">Statistical & empirical methods:</strong> Built-in rigor to validate outcomes and decisions.
        </li>
        <li>
          <strong className="text-white">Polyglot data handling:</strong> Seamless fusion of structured, semi-structured, and unstructured data, continuously improved.
        </li>
      </ul>
    </div>
  );
};

export default WhyItWorksText;
