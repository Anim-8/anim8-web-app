import React from 'react'
import AmbientOverlay from '../../ui/AmbientOverlay'

const AnalogyText: React.FC = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-20">
            <div className="z-10 w-full max-w-3xl mx-auto">
                <div className="max-w-3xl text-white text-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        The Commissioning Analogy
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300">
                        You wouldn’t expect a robot to install itself and run OEE flawlessly on Day 1.
                        Why should software be any different?
                    </p>

                    <p className="text-base md:text-lg text-gray-400">
                        Traditional manufacturing lines go through a meticulous commissioning process:
                        mechanical installation, logic programming, interface tuning, and gradual ramp-up.
                        Cortex follows the same philosophy.
                    </p>

                    <p className="text-base md:text-lg text-gray-400">
                        Unlike traditional plug-and-play tools, Cortex is designed like a line —
                        customized, integrated, and evolved alongside your operations. It’s not just
                        software — it’s the cognitive control system of your factory.
                    </p>
                </div>
            </div>
            <AmbientOverlay />
        </div>
    )
}

export default AnalogyText