import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

// Create an axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error);
    throw error.response?.data || { message: "An error occurred" };
  }
);

export default api;

export const sendOTP = async (phoneNumber) => {
  try {
    return await api.post("/auth/send-otp", { phoneNumber });
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
};

export const verifyOTP = async (phoneNumber, otp, userData = null) => {
  try {
    return await api.post("/auth/verify-otp", { phoneNumber, otp, userData });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    return await api.post("/auth/create-user", userData);
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
