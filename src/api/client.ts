import axios from "axios";
import { BASE_URL_WITH_EXTENSION } from "../environment";

const apiClient = axios.create({
  baseURL: BASE_URL_WITH_EXTENSION,
  headers: {
    "Content-Type": "application/json"
  },
});

export default apiClient;