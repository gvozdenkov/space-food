import { authApi } from '../../../app/api-setup';

export const editUser = async ({ name, email, password }) => {
  const res = await authApi.patch('/user', {
    name,
    email,
    password,
  });

  return res.data;
};

const getMe = async () => {
  return await authApi.get('/user');
};

export const UserService = {
  editUser,
  getMe,
};
