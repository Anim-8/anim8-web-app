// src/api/subscriptionApi.ts
import apiClient from "./client";

type SubscriptionPayload = {
  email: string;
  name?: string;
  source: string;
  tags?: string[];
  message?: string;
};

export const submitSubscription = async (data: SubscriptionPayload) => 
  await apiClient.post("/contact", data).then(res => res.data);