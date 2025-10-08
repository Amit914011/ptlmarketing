import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8080/api/v1",
  baseURL: "https://ptlmarketing-backend-7fg9.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // ✅ important for cookies
});

export default api;
