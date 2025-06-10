import React from 'react';
import ecosystem from'../../../../assets/ecosystem.webp';

const EcosystemVisual: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-start mt-[-40px]">
      <img
        src={ecosystem}
        alt="Anim8 bridging technology and manufacturing"
        className="w-[80%] max-w-[400px] h-auto object-contain rounded-xl shadow-lg"
      />
    </div>
  );
};

export default EcosystemVisual;
