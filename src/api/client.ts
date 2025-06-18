import axios from "axios";
import { BASE_URL_WITH_EXTENSION } from "../environment";

const apiClient = axios.create({
  baseURL: BASE_URL_WITH_EXTENSION,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: false // unless you're doing auth
});

export default apiClient;