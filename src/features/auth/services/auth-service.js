import { api } from '../../../app/api-setup';

export const login = async ({ email, password }) => {
  const res = await api.post('/auth/login', {
    email,
    password,
  });

  return res.data;
};

const logout = async (refreshToken) => {
  return await api.post('/auth/logout', {
    token: refreshToken,
  });
};

const register = async ({ name, email, password }) => {
  const res = await api.post('/auth/register', {
    name,
    email,
    password,
  });

  return res.data;
};

const forgotPassword = async ({ email }) => {
  const res = await api.post('/password-reset', {
    email,
  });

  return res.data;
};

const resetPassword = async ({ password, token }) => {
  const res = await api.post('/password-reset/reset', {
    password,
    token,
  });

  return res.data;
};

const refreshAccessToken = async (refreshToken) => {
  return await api.post('/auth/token', {
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
