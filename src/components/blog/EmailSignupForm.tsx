import React, { useState } from 'react';
import { analytics } from '../../services/analyticsService';
import { submitSubscription } from '../../api/subscriptionApi';

interface EmailSignupFormProps {
  articleSlug?: string;
  articleTitle?: string;
  compact?: boolean;
}

type SubmissionState = 'idle' | 'loading' | 'success' | 'error';

const EmailSignupForm: React.FC<EmailSignupFormProps> = ({ 
  articleSlug, 
  articleTitle,
  compact = false 
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error state
    setErrorMessage('');

    // Validate email
    if (!email.trim()) {
      setErrorMessage('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Set loading state
    setSubmissionState('loading');

    try {
      await submitSubscription({
        email: email.trim(),
        name: name.trim() || undefined,
        source: 'blog_subscription',
        tags: ['email-signup', 'blog'],
        message: articleTitle 
          ? `Subscribed from article: ${articleTitle}` 
          : 'Subscribed from blog',
      });

      // Success!
      setSubmissionState('success');
      setName('');
      setEmail('');
      
      // Track successful signup
      analytics.trackEmailSignup(articleSlug, articleTitle);
      
      // Reset to idle after 5 seconds
      setTimeout(() => {
        setSubmissionState('idle');
      }, 5000);

    } catch (error) {
      setSubmissionState('error');
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'Something went wrong. Please try again.'
      );
    }
  };

  // Success state
  if (submissionState === 'success') {
    return (
      <div 
        className={`rounded-lg p-8 text-center ${compact ? 'p-6' : 'p-8'}`}
        style={{ 
          backgroundColor: 'rgba(0, 255, 163, 0.1)',
          border: '2px solid var(--color-accent-primary)'
        }}
      >
        <div className="mb-4">
          <svg 
            className="w-16 h-16 mx-auto" 
            style={{ color: 'var(--color-accent-primary)' }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        <h3 
          className="text-2xl font-bold mb-2"
          style={{ 
            fontFamily: 'var(--font-header)', 
            color: 'var(--color-text-white)' 
          }}
        >
          You're subscribed!
        </h3>
        <p 
          style={{ 
            fontFamily: 'var(--font-body)', 
            color: 'rgba(234, 234, 234, 0.8)' 
          }}
        >
          We'll send the next article in this series straight to your inbox.
        </p>
      </div>
    );
  }

  // Form state
  return (
    <div 
      className={`rounded-lg ${compact ? 'p-6' : 'p-8'}`}
      style={{ 
        backgroundColor: 'rgba(0, 255, 163, 0.05)',
        border: '1px solid var(--color-accent-primary)'
      }}
    >
      <h3 
        className={`font-bold mb-2 ${compact ? 'text-xl' : 'text-2xl'}`}
        style={{ 
          fontFamily: 'var(--font-header)', 
          color: 'var(--color-text-white)' 
        }}
      >
        Don't miss the next article
      </h3>
      <p 
        className="mb-6"
        style={{ 
          fontFamily: 'var(--font-body)', 
          color: 'rgba(234, 234, 234, 0.7)',
          fontSize: compact ? '0.9rem' : '1rem'
        }}
      >
        Get the next article in this series delivered to your inbox. No spam, just thoughtful content on metrology transformation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name field (optional) */}
        <div>
          <label 
            htmlFor="name"
            className="block text-sm font-medium mb-2"
            style={{ 
              fontFamily: 'var(--font-body)', 
              color: 'rgba(234, 234, 234, 0.9)' 
            }}
          >
            Name (optional)
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={submissionState === 'loading'}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg transition-colors"
            style={{
              fontFamily: 'var(--font-body)',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(0, 255, 163, 0.3)',
              color: 'var(--color-text-white)',
            }}
          />
        </div>

        {/* Email field (required) */}
        <div>
          <label 
            htmlFor="email"
            className="block text-sm font-medium mb-2"
            style={{ 
              fontFamily: 'var(--font-body)', 
              color: 'rgba(234, 234, 234, 0.9)' 
            }}
          >
            Email address <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submissionState === 'loading'}
            required
            placeholder="you@company.com"
            className="w-full px-4 py-3 rounded-lg transition-colors"
            style={{
              fontFamily: 'var(--font-body)',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(0, 255, 163, 0.3)',
              color: 'var(--color-text-white)',
            }}
          />
        </div>

        {/* Error message */}
        {errorMessage && (
          <div 
            className="text-sm p-3 rounded"
            style={{ 
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              color: '#ff6b6b',
              fontFamily: 'var(--font-body)'
            }}
          >
            {errorMessage}
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={submissionState === 'loading'}
          className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 disabled:opacity-50"
          style={{
            fontFamily: 'var(--font-body)',
            backgroundColor: 'var(--color-accent-primary)',
            color: 'var(--color-background)',
          }}
        >
          {submissionState === 'loading' ? 'Subscribing...' : 'Subscribe to Series'}
        </button>

        {/* Privacy notice */}
        <p 
          className="text-xs text-center"
          style={{ 
            fontFamily: 'var(--font-body)', 
            color: 'rgba(234, 234, 234, 0.5)' 
          }}
        >
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};

export default EmailSignupForm;