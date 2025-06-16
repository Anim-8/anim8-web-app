import React, { useEffect, useRef, useState } from 'react';
import ArcRail from './ArcRail';

const HeroTextGlowingBox: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setArcReady] = useState(false);

  const arcWidth = 1400;
  const arcHeight = 120;

  useEffect(() => {
    const update = () => setArcReady(true);
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="absolute top-[45vh] w-full flex justify-center z-20">
      {/* Shared layout container */}
      <div className="relative w-full flex justify-center">

        {/* ✅ Arc Behind the Box */}
        <div
          style={{
            position: 'absolute',
            top: 30,
            left: '50%',
            transform: `translateX(-${arcWidth / 2}px)`,
            width: `${arcWidth}px`,
            height: `${arcHeight}px`,
            zIndex: -1, // was -1 → now visible
            overflow: 'visible', // allow arc to glow outside bounds
            pointerEvents: 'none', // optional: keeps mouse flow clean
          }}
        >
          <ArcRail width={arcWidth} height={arcHeight} />
        </div>

        {/* ✅ The Glowing Text Box */}
        <div
          ref={containerRef}
          className="px-8 py-4 bg-background rounded-xl border border-blue-glow/40 backdrop-blur-sm shadow-[0_0_24px_#00C4FF55] max-w-3xl text-center"
        >
          <h1 className="text-[2rem] text-blue-glow font-header leading-tight mb-6 opacity-100">
            Anim8: Evolving Manufacturing Conciousness
          </h1>
          <p className="text-size-md text-white font-body opacity-100">
            Anim8 integrates modern system architectures to solve all of your hardest manufacturing problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroTextGlowingBox;
