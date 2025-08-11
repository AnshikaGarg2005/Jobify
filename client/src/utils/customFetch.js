// utils/customFetch.js
import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api/v1",
  withCredentials: true, // ✅ SENDS cookies like session ID
});

export default customFetch;
