import axios from 'axios';

export const submitLead = async (leadData: any) => {
  return axios.post('/api/leads', leadData);
};
