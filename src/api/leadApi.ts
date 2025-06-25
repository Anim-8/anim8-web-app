// src/api/leadApi.ts
import apiClient from "./client";

type LeadPayload = {
  email: string;
  name?: string;
  company?: string;
  message?: string;
  source: string;
  location?: string;
  tags?: string[];
};

export const submitLead = async (data: LeadPayload) => await apiClient.post("/contact", data).then(res => res.data)
