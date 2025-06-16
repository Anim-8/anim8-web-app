import React from 'react'
import LeadModal from '../shared/LeadModal';

interface ClosingSectionProps {
    titleSlot: React.ReactNode;
    description: string;
    buttonSlot?: React.ReactNode;
    open: boolean;
    handleClose: () => void;
    source?: string;
}

const ClosingSection: React.FC<ClosingSectionProps> = ({ titleSlot, description, buttonSlot, open, handleClose, source }) => {
    return (
        <>
            <div className="relative w-full h-full flex items-center justify-center px-6 md:px-20 py-20">
                <div className="w-full max-w-5xl z-10">
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                            {titleSlot}
                        </h2>
                        <p className="text-lg text-white max-w-2xl mx-auto mb-10">{description}</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            {buttonSlot}
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/30 to-black pointer-events-none" />
            </div>
            <LeadModal isOpen={open} onClose={handleClose} source={source ?? ''} />
        </>
    )
}

export default ClosingSection