import React from 'react'

interface SimpleCardProps {
    title: string;
    description: string;
    titleColor?: string;
    descriptionColor?: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ title, description, titleColor = "text-cyan-300", descriptionColor = "text-white/80" }) => {
    return (
        <div
            className="flex-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 p-6 transition duration-300 shadow hover:shadow-cyan-400/10"
        >
            <h4 className={`text-lg font-semibold ${titleColor} mb-2`}>{title}</h4>
            <p className={`text-sm ${descriptionColor}`}>{description}</p>
        </div>
    )
}

export default SimpleCard