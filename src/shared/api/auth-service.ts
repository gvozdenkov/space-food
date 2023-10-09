import { authApi } from './api-setup';
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

type AuthRes = Tokens & {
  success: boolean;
  user: User;
};

type RefreshRes = Tokens & {
  success: boolean;
};

const ENDPOINT = 'auth';

export const login = async ({ email, password }: Login) => {
  const res = await authApi.post<AuthRes>(`/${ENDPOINT}/login`, {
    email,
    password,
  });

  return res.data;
};

const logout = async (refreshToken?: string) => {
  return await authApi.post<ResWithMessage>(`/${ENDPOINT}/logout`, {
    token: refreshToken,
  });
};

const register = async ({ name, email, password }: Register) => {
  const res = await authApi.post<AuthRes>(`/${ENDPOINT}/register`, {
    name,
    email,
    password,
  });

  return res.data;
};

const forgotPassword = async ({ email }: ForgotPassword) => {
  const res = await authApi.post<ResWithMessage>(`/password-reset`, {
    email,
  });

  return res.data;
};

const resetPassword = async ({ password, token }: ResetPassword) => {
  const res = await authApi.post<ResWithMessage>(`/password-reset/reset`, {
    password,
    token,
  });

  return res.data;
};

const refreshAccessToken = async (refreshToken: string | undefined) => {
  return await authApi.post<RefreshRes>(`/${ENDPOINT}/token`, {
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
