// src/api/analyticsApi.ts
import apiClient from "./client";

export type AnalyticsEventType = 
  | 'page_view'
  | 'article_view'
  | 'share_click'
  | 'email_signup'
  | 'scroll_depth'
  | 'time_on_page'
  | 'link_click';

export type SharePlatform = 'linkedin' | 'twitter' | 'copy_link';

export interface AnalyticsEventMetadata {
  // Article information
  articleSlug?: string;
  articleTitle?: string;
  
  // Share information
  platform?: SharePlatform;
  
  // Engagement metrics
  scrollDepth?: number; // 0-100
  timeOnPage?: number; // seconds
  
  // Traffic source
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  
  // Session tracking
  sessionId?: string;
  
  // External links
  url?: string;
  
  // Page path
  path?: string;
  
  // Allow additional fields
  [key: string]: any;
}

export interface AnalyticsEventPayload {
  eventType: AnalyticsEventType;
  timestamp: string; // ISO date string
  metadata: AnalyticsEventMetadata;
}

export interface AnalyticsEventResponse {
  success: boolean;
  message: string;
  event_id?: string;
}

/**
 * Track an analytics event
 */
export const trackEvent = async (
  data: AnalyticsEventPayload
): Promise<AnalyticsEventResponse> => {
  return await apiClient
    .post("/analytics", data)
    .then(res => res.data);
};

/**
 * Helper function to get current timestamp in ISO format
 */
export const getCurrentTimestamp = (): string => {
  return new Date().toISOString();
};