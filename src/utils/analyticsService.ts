// Analytics Service for tracking blog engagement

export type AnalyticsEventType = 
  | 'page_view'
  | 'article_view'
  | 'share_click'
  | 'email_signup'
  | 'scroll_depth'
  | 'time_on_page'
  | 'link_click';

export interface AnalyticsEvent {
  eventType: AnalyticsEventType;
  timestamp: string;
  metadata: {
    // Page/Article data
    articleSlug?: string;
    articleTitle?: string;
    
    // Share data
    platform?: 'linkedin' | 'twitter' | 'copy_link';
    
    // User engagement data
    scrollDepth?: number; // 0-100
    timeOnPage?: number; // seconds
    
    // Traffic source
    referrer?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    
    // Session data
    sessionId?: string;
    
    // Any additional data
    [key: string]: any;
  };
}

class AnalyticsService {
  private sessionId: string;
  private startTime: number;
  private maxScrollDepth: number = 0;
  private apiEndpoint: string = '/api/v1/analytics';

  constructor() {
    this.sessionId = this.getOrCreateSessionId();
    this.startTime = Date.now();
  }

  /**
   * Generate or retrieve session ID from sessionStorage
   */
  private getOrCreateSessionId(): string {
    const existingSessionId = sessionStorage.getItem('analytics_session_id');
    if (existingSessionId) {
      return existingSessionId;
    }

    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('analytics_session_id', newSessionId);
    return newSessionId;
  }

  /**
   * Parse UTM parameters from URL
   */
  private getUtmParams(): { utmSource?: string; utmMedium?: string; utmCampaign?: string } {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utmSource: urlParams.get('utm_source') || undefined,
      utmMedium: urlParams.get('utm_medium') || undefined,
      utmCampaign: urlParams.get('utm_campaign') || undefined,
    };
  }

  /**
   * Send event to analytics endpoint
   */
  private async sendEvent(event: AnalyticsEvent): Promise<void> {
    try {
      await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.error('Analytics tracking error:', error);
      // Fail silently - don't disrupt user experience
    }
  }

  /**
   * Track page view
   */
  public trackPageView(path: string): void {
    const event: AnalyticsEvent = {
      eventType: 'page_view',
      timestamp: new Date().toISOString(),
      metadata: {
        path,
        referrer: document.referrer,
        sessionId: this.sessionId,
        ...this.getUtmParams(),
      },
    };

    this.sendEvent(event);
  }

  /**
   * Track article view with metadata
   */
  public trackArticleView(slug: string, title: string): void {
    const event: AnalyticsEvent = {
      eventType: 'article_view',
      timestamp: new Date().toISOString(),
      metadata: {
        articleSlug: slug,
        articleTitle: title,
        referrer: document.referrer,
        sessionId: this.sessionId,
        ...this.getUtmParams(),
      },
    };

    this.sendEvent(event);
  }

  /**
   * Track social share button clicks
   */
  public trackShareClick(
    platform: 'linkedin' | 'twitter' | 'copy_link',
    articleSlug: string,
    articleTitle: string
  ): void {
    const event: AnalyticsEvent = {
      eventType: 'share_click',
      timestamp: new Date().toISOString(),
      metadata: {
        platform,
        articleSlug,
        articleTitle,
        sessionId: this.sessionId,
      },
    };

    this.sendEvent(event);
  }

  /**
   * Track email signup
   */
  public trackEmailSignup(articleSlug?: string, articleTitle?: string): void {
    const event: AnalyticsEvent = {
      eventType: 'email_signup',
      timestamp: new Date().toISOString(),
      metadata: {
        articleSlug,
        articleTitle,
        sessionId: this.sessionId,
        ...this.getUtmParams(),
      },
    };

    this.sendEvent(event);
  }

  /**
   * Track scroll depth
   */
  public trackScrollDepth(depth: number, articleSlug?: string): void {
    // Only track if this is a new maximum
    if (depth > this.maxScrollDepth) {
      this.maxScrollDepth = depth;

      // Only send at milestones: 25%, 50%, 75%, 100%
      const milestones = [25, 50, 75, 100];
      if (milestones.includes(Math.floor(depth))) {
        const event: AnalyticsEvent = {
          eventType: 'scroll_depth',
          timestamp: new Date().toISOString(),
          metadata: {
            scrollDepth: Math.floor(depth),
            articleSlug,
            sessionId: this.sessionId,
          },
        };

        this.sendEvent(event);
      }
    }
  }

  /**
   * Track time spent on page (called when user leaves)
   */
  public trackTimeOnPage(articleSlug?: string, articleTitle?: string): void {
    const timeSpent = Math.floor((Date.now() - this.startTime) / 1000); // seconds

    const event: AnalyticsEvent = {
      eventType: 'time_on_page',
      timestamp: new Date().toISOString(),
      metadata: {
        timeOnPage: timeSpent,
        articleSlug,
        articleTitle,
        sessionId: this.sessionId,
        maxScrollDepth: this.maxScrollDepth,
      },
    };

    this.sendEvent(event);
  }

  /**
   * Track external link clicks
   */
  public trackLinkClick(url: string, articleSlug?: string): void {
    const event: AnalyticsEvent = {
      eventType: 'link_click',
      timestamp: new Date().toISOString(),
      metadata: {
        url,
        articleSlug,
        sessionId: this.sessionId,
      },
    };

    this.sendEvent(event);
  }

  /**
   * Initialize scroll tracking
   */
  public initScrollTracking(articleSlug?: string): () => void {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollDepth = ((scrollTop + windowHeight) / documentHeight) * 100;

      this.trackScrollDepth(Math.min(scrollDepth, 100), articleSlug);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Return cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }

  /**
   * Initialize time tracking (tracks on page unload)
   */
  public initTimeTracking(articleSlug?: string, articleTitle?: string): () => void {
    const handleUnload = () => {
      this.trackTimeOnPage(articleSlug, articleTitle);
    };

    window.addEventListener('beforeunload', handleUnload);

    // Return cleanup function
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }
}

// Export singleton instance
export const analytics = new AnalyticsService();

export default analytics;