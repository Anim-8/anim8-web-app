import React from 'react'
import GradientButton from '../../ui/GradientButton';
import useModal from '../../../hooks/useModal';
import LeadModal from '../../leads/LeadModal';

interface HomeSectionProps {
    title: string;
    description: string;
    leadType: string;
}

const HomeSection:React.FC<HomeSectionProps> = ({ title, description, leadType }) => {
    const { open, source, openModal, closeModal } = useModal();

    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-8 py-20 bg-background text-center">
            <h2 className="text-2xl font-semibold text-white mb-6">{title}</h2>
            <p className="text-base text-white max-w-xl mb-6">{description}</p>
            <GradientButton text="Join the mouvement" onClick={() => openModal(leadType)} />
            <LeadModal isOpen={open} onClose={closeModal} source={source} />
        </div>
    );
}

export default HomeSection