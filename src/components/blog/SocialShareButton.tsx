import React, { useState } from 'react';
import analytics from '../../utils/analyticsService';


interface SocialShareButtonsProps {
  url: string;
  title: string;
  description?: string;
  articleSlug?: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ 
  url, 
  title, 
  description = '',
  articleSlug 
}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleLinkedInShare = () => {
    // Track the share click
    analytics.trackShareClick('linkedin', articleSlug || '', title);
    
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer,width=600,height=600');
  };

  const handleTwitterShare = () => {
    // Track the share click
    analytics.trackShareClick('twitter', articleSlug || '', title);
    
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      
      // Track the copy action
      analytics.trackShareClick('copy_link', articleSlug || '', title);
      
      setCopySuccess(true);
      
      // Reset after 2 seconds
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const buttonBaseStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '1px solid rgba(0, 255, 163, 0.3)',
    backgroundColor: 'rgba(0, 255, 163, 0.05)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: 'rgba(234, 234, 234, 0.7)',
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: 'rgba(0, 255, 163, 0.1)',
    borderColor: 'var(--color-accent-primary)',
    color: 'var(--color-accent-primary)',
  };

  return (
    <div className="flex items-center gap-3">
      <span 
        className="text-sm font-medium mr-2"
        style={{ 
          fontFamily: 'var(--font-body)', 
          color: 'rgba(234, 234, 234, 0.6)' 
        }}
      >
        Share:
      </span>

      {/* LinkedIn */}
      <button
        onClick={handleLinkedInShare}
        aria-label="Share on LinkedIn"
        style={buttonBaseStyle}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, buttonHoverStyle);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, buttonBaseStyle);
        }}
        title="Share on LinkedIn"
      >
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </button>

      {/* Twitter/X */}
      <button
        onClick={handleTwitterShare}
        aria-label="Share on Twitter/X"
        style={buttonBaseStyle}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, buttonHoverStyle);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, buttonBaseStyle);
        }}
        title="Share on Twitter/X"
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </button>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        aria-label="Copy link"
        style={{
          ...buttonBaseStyle,
          position: 'relative',
        }}
        onMouseEnter={(e) => {
          if (!copySuccess) {
            Object.assign(e.currentTarget.style, buttonHoverStyle);
          }
        }}
        onMouseLeave={(e) => {
          if (!copySuccess) {
            Object.assign(e.currentTarget.style, buttonBaseStyle);
          }
        }}
        title={copySuccess ? 'Link copied!' : 'Copy link'}
      >
        {copySuccess ? (
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="var(--color-accent-primary)"
            strokeWidth="2.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        )}
      </button>

      {/* Copy Success Message */}
      {copySuccess && (
        <span 
          className="text-sm font-medium animate-fade-in"
          style={{ 
            fontFamily: 'var(--font-body)', 
            color: 'var(--color-accent-primary)' 
          }}
        >
          Copied!
        </span>
      )}
    </div>
  );
};

export default SocialShareButtons;