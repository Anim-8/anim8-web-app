// src/api/analyticsApi.ts
import { AnalyticsEventPayload, AnalyticsEventResponse } from "../types/analytics.types";
import apiClient from "./client";


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