import axios from "axios";
import * as SecureStore from "expo-secure-store";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    // Get the access token from SecureStore
    const accessToken = await SecureStore.getItemAsync("accessToken");

    if (accessToken) {
      // Set the authorization header for the request
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Log out (No access token or invalid access token)
      console.log("Error 401, Logging out");
    }
    return Promise.reject(error);
  }
);

export default api;
