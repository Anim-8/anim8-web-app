import React from 'react';
import DiagnosticText from './DiagnosticText';

const DiagnosticSection: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center px-6 py-24 text-center">
      <div className="w-full max-w-5xl z-10">
        <DiagnosticText />
      </div>
    </div>
  );
};

export default DiagnosticSection;

