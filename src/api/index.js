import axios from "axios";

const api_url = import.meta.env.VITE_API_URL;

const config = {
  baseURL: api_url,
  headers: {
    "Content-Type": "application/json",
  },
};
const baseApi = axios.create(config);

export default baseApi;
