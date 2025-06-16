import React from 'react'
import kaizen from '../../../../assets/kaizen.webp'

const ContinuosImprovementVisual = () => {
    return (
        <div className="relative w-full h-[34rem] md:h-[40rem] flex items-center justify-center rounded-2xl overflow-hidden bg-transparent">
            <img
                src={kaizen}
                alt="Humanoid Nervous System Visualization"
                className="h-[75%] md:h-[85%] object-contain drop-shadow-2xl"
            />
        </div>
    )
}

export default ContinuosImprovementVisual