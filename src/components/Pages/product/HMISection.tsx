import React from 'react';

const HMISection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 md:px-20 py-20">
      {/* Full-Width Text Block */}
      <div className="w-full max-w-screen-xl z-10">
        <div className="text-white w-full max-w-7xl mx-auto text-center space-y-10 px-4">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              The 4 HMIs – <span className="text-cyan-400">Tune the Brain with Precision Tools</span>
            </h2>

            <p className="text-lg md:text-xl max-w-4xl mx-auto">
              Cortex isn’t just software—it’s a thinking system. And like any intelligent brain, it needs a precise interface to interact with the world. Our modular HMI suite was designed to do exactly that.
            </p>

            <p className="text-lg md:text-xl max-w-4xl mx-auto">
              Each HMI focuses on a specific domain of factory intelligence—Dimensional, Process, Production, and Joining. These interfaces allow you to visualize real-time conditions, identify patterns, and act decisively.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            <div className="border border-cyan-400 bg-cyan-950/30 rounded-xl p-4 shadow-lg text-left">
              <h3 className="text-cyan-300 font-semibold text-sm">Dimensional HMI</h3>
              <p className="text-sm mt-2">
                Visualize, tune, and act on geometric conformity in real time. Think of it as your digital metrology cockpit—data in, insight out.
              </p>
            </div>

            {['Process', 'Production', 'Joining'].map((label) => (
              <div key={label} className="border border-white/10 bg-white/5 rounded-xl p-4 relative opacity-50 cursor-not-allowed text-left">
                <span className="absolute top-2 right-2 text-xs bg-yellow-600 text-white px-2 py-0.5 rounded-full">In Dev</span>
                <h3 className="text-white font-semibold text-sm">{label} HMI</h3>
                <p className="text-sm mt-2">
                  {`Our ${label} HMI is under development, designed to bring granular control and actionable insights to the ${label.toLowerCase()} domain.`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-black pointer-events-none" />
    </div>
  );
};

export default HMISection;
