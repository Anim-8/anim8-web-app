import React from 'react'

const SectionVisual = () => {
    return (
        <div className="relative w-full h-80 md:h-full flex items-center justify-center bg-gradient-to-br from-cyan-800/40 to-slate-900/30 rounded-2xl border border-white/10 shadow-inner">
            <div className="text-center px-6 py-4 rounded-xl border border-indigo-400 text-indigo-300 bg-black/30 backdrop-blur-md animate-pulse">
                <p className="text-sm uppercase tracking-wide">Visual Placeholder</p>
                <p className="text-lg font-semibold mt-1">Cortex Integration Map</p>
                <p className="text-xs mt-2 text-white/60">
                    Will illustrate real-time data loops, software modules, and control logic architecture.
                </p>
            </div>
        </div>
    )
}

export default SectionVisual