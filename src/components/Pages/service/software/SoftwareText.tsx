import React from 'react';

const SoftwareText: React.FC = () => {
  return (
    <div className="text-left">
      <h2 className="text-4xl font-bold mb-6 text-white">
        Custom Software Design & Integration — <br />
        <span className="text-primary">The Digital Nervous System</span>
      </h2>
      <p className="text-lg text-white max-w-xl mb-8">
        Your factory isn’t generic — neither should your software be.  
        We design and build fully custom applications that connect your machines, people, and data 
        into a cohesive digital architecture tailored for evolution. This is where integration meets intelligence.
      </p>

      <ul className="text-white text-sm space-y-3 list-disc pl-6">
        <li><strong>Custom Interfaces:</strong> Build tools that fit your workflow, not the other way around.</li>
        <li><strong>AI-Powered Logic:</strong> Automate decisions, detect patterns, and accelerate insight loops.</li>
        <li><strong>System Bridges:</strong> Seamlessly connect legacy tools, sensors, MES, ERP, and more.</li>
        <li><strong>Data Infrastructure:</strong> Lay the foundation for secure, scalable, cross-site intelligence.</li>
      </ul>
    </div>
  );
};

export default SoftwareText;
