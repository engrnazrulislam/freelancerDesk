import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://freelancer-platform-iota.vercel.app/api/v1",
});

export default apiClient;
