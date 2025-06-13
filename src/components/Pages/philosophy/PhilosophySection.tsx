import React from 'react'
import type { PhilosophySection as PhilosophyModel } from '../../../models/common/Section';
import AmbientOverlay from '../../ui/AmbientOverlay';

export interface PhilosophySectionProps {
    section: PhilosophyModel
}

const PhilosophySection: React.FC<PhilosophySectionProps> = ({ section: { title, description, footer, itemTitle, items, visualSlot, overlayColor } }) => {
    return (
        <section className="h-screen snap-start">
            <div className="relative w-full h-full flex items-center justify-between flex-col md:flex-row px-6 md:px-20 py-20">
                <div className="w-full md:w-1/3 z-10">
                    <div className="space-y-6 text-white">
                        <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
                        <p className="text-lg text-text-secondary leading-relaxed font-light">{description}</p>
                        <p className="text-lg text-text-secondary leading-relaxed font-light">
                            {itemTitle}
                            <br />
                            {items.map((item, i) => (
                                <span key={i}>
                                    <span className="font-semibold text-white">{item.label}</span> {item.value}
                                    <br />
                                </span>
                            ))}
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed font-light">{footer}</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-10 md:mt-0 z-10 flex justify-center items-center">
                    { visualSlot }
                </div>
                <AmbientOverlay overlay={overlayColor} />
            </div>
        </section>
    )
}

export default PhilosophySection