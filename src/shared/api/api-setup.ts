import axios, { AxiosError, RawAxiosRequestHeaders } from 'axios';
import { CookieService } from '#shared/lib';
import { AuthService } from './auth-service';
import { ApiError } from './types';

type Headers = RawAxiosRequestHeaders;

type Props = {
  baseURL: string;
  headers?: Headers;
  withReAuth?: boolean;
};

const createApi = ({ baseURL, headers, withReAuth = false }: Props) => {
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
            CookieService.removeTokens();
          }
        }
      },
    );
  }

  return api;
};

const baseURL = import.meta.env.VITE_BASE_URL;
const headers = {
  'Content-Type': 'application/json',
};

export const publicApi = createApi({ baseURL, headers });
export const authApi = createApi({ baseURL, headers, withReAuth: true });
export const createOrderApi = createApi({ baseURL, headers, withReAuth: true });

export type ResponseError = AxiosError<ApiError>;
