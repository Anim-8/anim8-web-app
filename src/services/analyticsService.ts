// src/services/analyticsService.ts
import { 
  trackEvent, 
  getCurrentTimestamp,
  AnalyticsEventType,
  SharePlatform,
  AnalyticsEventMetadata 
} from '../api/analyticsApi';

class AnalyticsService {
  private sessionId: string;
  private startTime: number;
  private maxScrollDepth: number = 0;

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
   * Track event with error handling
   */
  private async sendEvent(eventType: AnalyticsEventType, metadata: AnalyticsEventMetadata): Promise<void> {
    try {
      await trackEvent({
        eventType,
        timestamp: getCurrentTimestamp(),
        metadata: {
          ...metadata,
          sessionId: this.sessionId,
        }
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
    this.sendEvent('page_view', {
      path,
      referrer: document.referrer,
      ...this.getUtmParams(),
    });
  }

  /**
   * Track article view with metadata
   */
  public trackArticleView(slug: string, title: string): void {
    this.sendEvent('article_view', {
      articleSlug: slug,
      articleTitle: title,
      referrer: document.referrer,
      ...this.getUtmParams(),
    });
  }

  /**
   * Track social share button clicks
   */
  public trackShareClick(
    platform: SharePlatform,
    articleSlug: string,
    articleTitle: string
  ): void {
    this.sendEvent('share_click', {
      platform,
      articleSlug,
      articleTitle,
    });
  }

  /**
   * Track email signup
   */
  public trackEmailSignup(articleSlug?: string, articleTitle?: string): void {
    this.sendEvent('email_signup', {
      articleSlug,
      articleTitle,
      ...this.getUtmParams(),
    });
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
        this.sendEvent('scroll_depth', {
          scrollDepth: Math.floor(depth),
          articleSlug,
        });
      }
    }
  }

  /**
   * Track time spent on page (called when user leaves)
   */
  public trackTimeOnPage(articleSlug?: string, articleTitle?: string): void {
    const timeSpent = Math.floor((Date.now() - this.startTime) / 1000); // seconds

    this.sendEvent('time_on_page', {
      timeOnPage: timeSpent,
      articleSlug,
      articleTitle,
      maxScrollDepth: this.maxScrollDepth,
    });
  }

  /**
   * Track external link clicks
   */
  public trackLinkClick(url: string, articleSlug?: string): void {
    this.sendEvent('link_click', {
      url,
      articleSlug,
    });
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