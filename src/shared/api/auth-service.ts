import { publicApi } from './api-setup';
import { Credentials, User } from './types';

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

type Login = Pick<Credentials, 'email' | 'password'>;
type Register = Pick<Credentials, 'email' | 'password' | 'name'>;
type ForgotPassword = Pick<Credentials, 'email'>;
type ResetPassword = Pick<Credentials, 'password' | 'token'>;

type ResWithMessage = {
  success: boolean;
  message: string;
};

export type AuthRes = Tokens & {
  success: boolean;
  user: User;
};

type RefreshRes = Tokens & {
  success: boolean;
};

const ENDPOINT = 'auth';

export const login = async ({ email, password }: Login) => {
  const res = await publicApi.post<AuthRes>(`/${ENDPOINT}/login`, {
    email,
    password,
  });

  return res.data;
};

const logout = async (refreshToken?: string) => {
  return await publicApi.post<ResWithMessage>(`/${ENDPOINT}/logout`, {
    token: refreshToken,
  });
};

const register = async ({ name, email, password }: Register) => {
  const res = await publicApi.post<AuthRes>(`/${ENDPOINT}/register`, {
    name,
    email,
    password,
  });

  return res.data;
};

const forgotPassword = async ({ email }: ForgotPassword) => {
  const res = await publicApi.post<ResWithMessage>(`/password-reset`, {
    email,
  });

  return res.data;
};

const resetPassword = async ({ password, token }: ResetPassword) => {
  const res = await publicApi.post<ResWithMessage>(`/password-reset/reset`, {
    password,
    token,
  });

  return res.data;
};

const refreshAccessToken = async (refreshToken: string | undefined) => {
  return await publicApi.post<RefreshRes>(`/${ENDPOINT}/token`, {
    token: refreshToken,
  });
};

export const AuthService = {
  login,
  logout,
  register,
  forgotPassword,
  resetPassword,
  refreshAccessToken,
};
