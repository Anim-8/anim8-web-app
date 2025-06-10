import React from 'react';

const SoftwareText: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Custom Software Design & Integration — <br />
          <span className="text-primary">The Digital Nervous System 🧠</span>
        </h2>

        <p className="text-lg text-white/80 max-w-3xl mx-auto mt-4">
          Your factory isn’t generic — neither should your software be.
          We design and build fully custom applications that connect your machines, people, and data
          into a cohesive digital architecture tailored for evolution. This is where integration meets intelligence.
        </p>
      </div>

      {/* <ul className="space-y-4 text-white text-base list-disc list-inside max-w-3xl mx-auto text-left">
        <li>
          <strong className="text-indigo-300">Custom Interfaces:</strong> Build tools that fit your workflow, not the other way around.
        </li>
        <li>
          <strong className="text-indigo-300">AI-Powered Logic:</strong> Automate decisions, detect patterns, and accelerate insight loops.
        </li>
        <li>
          <strong className="text-indigo-300">System Bridges:</strong> Seamlessly connect legacy tools, sensors, MES, ERP, and more.
        </li>
        <li>
          <strong className="text-indigo-300">Data Infrastructure:</strong> Lay the foundation for secure, scalable, cross-site intelligence.
        </li>
      </ul> */}
    </div>
  );
};

export default SoftwareText;
