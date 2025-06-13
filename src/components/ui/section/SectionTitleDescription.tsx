import React from 'react'

interface SectionTitleDescriptionProps {
    title: string;
    subtitle: string;
    description: string;
}

const SectionTitleDescription: React.FC<SectionTitleDescriptionProps> = ({ title, subtitle, description }) => {
    return (
        <div className="space-y-4 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {title} – <span className="text-cyan-400">{subtitle}</span>
            </h2>
            <p className="text-lg text-white/80">{description}</p>
        </div>
    )
}

export default SectionTitleDescription