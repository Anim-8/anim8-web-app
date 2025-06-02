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
  imageSrc,
}) => {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{
        width: '100%',
        maxWidth: '24rem', // replaces `max-w-sm`
        padding: 'var(--space-md)',
        borderRadius: 'var(--radius-xl)',
        background: 'radial-gradient(var(--color-background), #050608)',
        border: '1px solid #2A2F35',
        boxShadow: 'var(--shadow-elevated)',
      }}
    >
      {/* Image */}
      <img
        src={imageSrc}
        alt={name}
        style={{
          marginBottom: 'var(--space-md)',
          borderRadius: 'var(--radius-lg)',
          border: '2px solid var(--color-blue-glow)',
          maxWidth: '180px',
          width: '100%',
          height: 'auto',
        }}
      />

      {/* Name */}
      <h3
        style={{
          fontSize: 'var(--font-size-xl)',
          fontFamily: 'var(--font-header)',
          fontWeight: 600,
          color: 'var(--color-blue-glow)',
          marginBottom: 'var(--space-xs)',
        }}
      >
        {name}
      </h3>

      {/* Title */}
      <p
        style={{
          fontSize: 'var(--font-size-sm)',
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          color: 'color-mix(in srgb, var(--color-text-white) 80%, transparent)',
          marginBottom: 'var(--space-sm)',
        }}
      >
        {title}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: 'var(--font-size-sm)',
          fontFamily: 'var(--font-body)',
          color: 'color-mix(in srgb, var(--color-text-white) 60%, transparent)',
          lineHeight: '1.6',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default TeamMemberCard;
