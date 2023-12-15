import axios from "axios";

export const baseURL = "http://127.0.0.1:8000";

const api = axios.create({ baseURL: baseURL });

api.interceptors.response.use(
  (response) => response.data,
  (err) => Promise.reject(err)
);

export default api;
