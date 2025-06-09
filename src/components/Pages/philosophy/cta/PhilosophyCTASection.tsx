import React from 'react';

const PhilosophyCTASection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6 md:px-20">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-black pointer-events-none" />

      {/* Text */}
      <div className="z-10 max-w-3xl space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Let’s Awaken Your Enterprise
        </h2>
        <p className="text-lg md:text-xl text-text-secondary font-light">
          If you resonate with our philosophy, we invite you to connect.  
          Discover what animation could mean for your factory, your team, your future.
        </p>
        <div className="mt-6">
          <a
            href="/#contact"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhilosophyCTASection;
