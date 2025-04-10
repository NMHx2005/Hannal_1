import axios from 'axios';
import { QueryClient } from 'react-query';

// Create axios instance
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle token refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem(import.meta.env.VITE_REFRESH_TOKEN_KEY);
        const response = await api.post('/auth/refresh', { refreshToken });
        const { token } = response.data;
        
        localStorage.setItem(import.meta.env.VITE_AUTH_TOKEN_KEY, token);
        originalRequest.headers.Authorization = `Bearer ${token}`;
        
        return api(originalRequest);
      } catch (error) {
        // Handle refresh token error (e.g., logout user)
        localStorage.removeItem(import.meta.env.VITE_AUTH_TOKEN_KEY);
        localStorage.removeItem(import.meta.env.VITE_REFRESH_TOKEN_KEY);
        window.location.href = '/login';
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

// Create React Query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// getAllProductAPI
export const getUsersAPI = () => {
    const URL_BACKEND = `users`;
    return api.get(URL_BACKEND);
};