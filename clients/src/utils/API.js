import axios from "axios";

// create instace for axios
const API = axios.create({
  baseURL: "http://localhost:5050",
  withCredentials: true,
  timeout: 24000,
});

export default API;
