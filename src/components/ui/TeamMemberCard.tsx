// components/ui/TeamMemberCard.tsx
import React from "react";

interface TeamMemberCardProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  title,
  description,
  imageSrc
}) => {
  return (
    <div className="rounded-2xl p-6 bg-[radial-gradient(#0b0f14,#050608)] border border-[#2A2F35] shadow-[0_0_30px_rgba(0,196,255,0.05)] max-w-sm w-full">
      <h3 className="text-xl font-semibold text-[#00C4FF] mb-2">{name}</h3>
      <p className="text-sm font-medium text-gray-300 mb-4">{title}</p>
      <p className="text-sm text-gray-400 leading-relaxed mb-6">{description}</p>
      <div className="w-full flex justify-center">
        <img
          src={imageSrc}
          alt={name}
          className="rounded-xl border-2 border-[#00C4FF] max-w-[200px] h-auto"
        />
      </div>
    </div>
  );
};

export default TeamMemberCard;
