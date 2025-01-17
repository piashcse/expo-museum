import axios from 'axios';
import * as AxiosLogger from 'axios-logger';
import { expoMuseumApi } from '@/src/redux/RTKQuery';
import { useAppStore } from '@/src/zustand/useAppStore';
import configureAppStore from '@/src/store/Store';

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((config) => {
  const token = useAppStore.getState().token;
  // Add bearer token to headers
  config.headers.Authorization = `Bearer ${token}`;
  // Keep the original logger
  AxiosLogger.requestLogger(config);
  console.log('Authorization header', config.headers);
  return config;
}, AxiosLogger.errorLogger);

axiosInstance.interceptors.response.use(
  AxiosLogger.responseLogger,
  AxiosLogger.errorLogger
);

axiosInstance.interceptors.response.use(
  AxiosLogger.responseLogger, // Log response
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 (Unauthorized) errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Prevent infinite retry loops

      try {
        // Trigger the RTK Query `postRefreshToken` mutation
        const { data } = await configureAppStore().dispatch(
          expoMuseumApi.endpoints.postRefreshToken.initiate()
        );
        // Update token in Zustand store
        useAppStore.getState().saveToken(data as string);

        // Update Authorization header with the new token
        originalRequest.headers.Authorization = `Bearer ${useAppStore.getState().getToken()}`;

        // Retry the original request
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Failed to refresh token:', refreshError);
        // Clear user data and token in Zustand store on failure
        useAppStore.getState().clearToken();
        //TODO [Navigate to login screen]

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
