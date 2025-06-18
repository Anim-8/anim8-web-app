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

export const submitLead = async (data: LeadPayload) => {
  const res = await apiClient.post("/leads", data);
  return res.data;
};
