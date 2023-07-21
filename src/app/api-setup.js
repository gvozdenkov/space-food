import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { store } from './store';
import { CookieService } from '../utils/cookie-service';
import { AuthService } from '../features/auth';
import { removeUser } from '../features/profile';

const baseURL = 'https://norma.nomoreparties.space/api';
const headers = {
  'Content-Type': 'application/json',
};

const createApi = ({ baseURL, headers, withReAuth = false }) => {
  const api = axios.create({
    baseURL,
    headers,
  });

  if (withReAuth) {
    api.interceptors.request.use(
      (config) => {
        const accessToken = CookieService.getAccessToken();

        if (accessToken) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    api.interceptors.response.use(
      (res) => res,
      async (err) => {
        const originalRequest = err?.config;
        const errMessage = err.response?.data?.message;

        // Access Token was expired
        if (errMessage?.includes('should be authorised') && !originalRequest.retry) {
          try {
            originalRequest.retry = true;
            // refresh accessToken
            const rs = await AuthService.refreshAccessToken(CookieService.getRefreshToken());

            const { accessToken: token, refreshToken } = rs.data;
            const accessToken = token.split(' ')[1];

            CookieService.setAccessToken(accessToken);
            CookieService.setRefreshToken(refreshToken);

            return api({
              ...originalRequest,
              headers: { ...originalRequest.headers, Authorization: `Bearer ${accessToken}` },
              retry: true,
            });
          } catch (err) {
            // refresh token faild. Logout user
            store.dispatch(removeUser());
            CookieService.removeTokens();
          }
        }
      },
    );
  }

  return api;
};

export const api = createApi({ baseURL, headers });
export const authApi = createApi({ baseURL: `${baseURL}/auth`, headers, withReAuth: true });
export const createOrderApi = createApi({ baseURL, headers, withReAuth: true });

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
    },
  },
});
