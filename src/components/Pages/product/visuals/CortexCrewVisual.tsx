import React from 'react'

const CortexCrewVisual: React.FC = () => {
  return (
    <div className="relative w-full h-80 md:h-full flex items-center justify-center bg-gradient-to-br from-cyan-800/40 to-slate-900/30 rounded-2xl border border-white/10 shadow-inner px-6 py-8">
      <blockquote className="text-center text-white/80 italic max-w-xl mx-auto">
        “We’ve stood on the line. We’ve debugged torque curves at 3AM.
        We didn’t just write Cortex — we lived it.”
        <footer className="mt-4 text-cyan-300 not-italic font-semibold">– The Cortex Crew</footer>
      </blockquote>
    </div>
  )
}

export default CortexCrewVisual