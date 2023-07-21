import { authApi } from '../../../app/api-setup';

const getMe = async () => {
  return await authApi.get('/user');
};

export const UserService = {
  getMe,
};
