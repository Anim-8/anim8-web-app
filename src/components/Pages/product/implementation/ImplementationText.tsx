import React from 'react';

const ImplementationText: React.FC = () => {
  return (
    <div className="text-white max-w-xl space-y-6">
      <h2 className="text-4xl font-bold leading-tight">
        Implementation – <span className="text-cyan-400">From Ramp to Autonomy</span>
      </h2>

      <p className="text-lg">
        Cortex isn't installed — it evolves. Our implementation strategy reflects this transformation, guiding factories from hands-on integration to full self-regulation.
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="text-cyan-300 font-semibold">Ramp Phase</h3>
          <p className="text-sm text-white/80">
            During ramp, Anim8 engineers work shoulder-to-shoulder with your team. Together we tune logic, build workflows, and dial in every interaction.
          </p>
        </div>
        <div>
          <h3 className="text-cyan-300 font-semibold">Stabilization</h3>
          <p className="text-sm text-white/80">
            As Cortex stabilizes, the spotlight shifts. Client engineers take more control, our team fades back. The system starts to breathe on its own.
          </p>
        </div>
        <div>
          <h3 className="text-cyan-300 font-semibold">Autonomy</h3>
          <p className="text-sm text-white/80">
            Cortex now predicts and adapts. Operators monitor instead of intervene. It’s not just software anymore — it’s your factory’s second brain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImplementationText;
