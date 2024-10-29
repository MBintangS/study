import axios from "axios";

const api_url = "";
const api_key = "";

let ip;

try {
  const res = await axios.get("https://api.ipify.org/?format=json");
  ip = res.data.ip;
} catch (error) {
  console.log(error);
}

const config = {
  baseURL: api_url,
  headers: {
    "Content-Type": "application/json",
    "X-User-IP": ip,
    "x-api-key": api_key,
  },
};
const baseApi = axios.create(config);

export default baseApi;
