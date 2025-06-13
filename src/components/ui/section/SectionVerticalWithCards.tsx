import React, { useEffect, useState } from 'react'
import AmbientOverlay from '../AmbientOverlay'
import { motion } from 'framer-motion';
import SectionTitleDescription from './SectionTitleDescription';

export interface VerticalSection {
    title: string;
    subtitle: string;
    description: string;
    items: { title: string, emoji?: string, description: string }[]
    overlayColor: string
}

interface SectionVerticalWithCardsProps {
    section: VerticalSection
}

const SectionVerticalWithCards: React.FC<SectionVerticalWithCardsProps> = ({ section: { title, subtitle, items, description, overlayColor } }) => {
    const [focusedIndex, setFocusedIndex] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setFocusedIndex((prev) => (prev + 1) % items.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 text-center">
            <div className="w-full max-w-6xl z-10">
                <div className="relative text-white space-y-12">
                    <SectionTitleDescription title={title} subtitle={subtitle} description={description} />
                    <div className="relative z-10 flex flex-col md:flex-row justify-center items-start gap-6">
                        {items.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={false}
                                animate={{
                                    scale: idx === focusedIndex ? 1.05 : 1,
                                    boxShadow: idx === focusedIndex
                                        ? '0 0 30px rgba(0, 255, 255, 0.15)'
                                        : '0 0 0 rgba(0, 0, 0, 0)',
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 120,
                                    damping: 15,
                                }}
                                className="flex-1 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4 transition duration-300"
                            >
                                <motion.div
                                    className="text-3xl"
                                    animate={{ scale: idx === focusedIndex ? [1, 1.1, 1] : 1 }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {phase.emoji}
                                </motion.div>
                                <h3 className="text-cyan-300 font-semibold text-lg">{phase.title}</h3>
                                <p className="text-sm text-white/80">{phase.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <AmbientOverlay overlay={overlayColor} />
        </div>
    )
}

export default SectionVerticalWithCards