import React from 'react';

const MetrologyText: React.FC = () => {
  return (
    <div className="text-left">
      <h2 className="text-4xl font-bold mb-6 text-white">
        📐 Specialized Dimensional Services — <br />
        <span className="text-primary">Metrology That Matters</span>
      </h2>
      <p className="text-lg text-white max-w-xl mb-8">
        Precision isn’t optional — it’s foundational. Our metrology experts bring Tesla-caliber rigor to your
        most critical production challenges. From measurement planning to turnkey system design, we create clarity
        in complexity and ensure your dimensional integrity is never left to chance.
      </p>

      {/* <ul className="text-white text-sm space-y-3 list-disc pl-6">
        <li><strong className="text-cyan-300">Measurement Plan Design:</strong> Build robust plans aligned with product intent and GD&T standards.</li>
        <li><strong className="text-cyan-300">Turnkey Metrology Systems:</strong> From sensor selection to full implementation and commissioning.</li>
        <li><strong className="text-cyan-300">GD&T and Tolerance Analysis:</strong> Identify critical interfaces, stack-ups, and inspection strategies.</li>
        <li><strong className="text-cyan-300">Dimensional Monitoring & Analytics:</strong> Integrate live feedback loops into your control systems via Cortex.</li>
      </ul> */}
    </div>
  );
};

export default MetrologyText;
