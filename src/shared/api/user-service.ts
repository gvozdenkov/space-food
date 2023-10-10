import { authApi } from './api-setup';
import { User } from './types';

type Props = {
  name?: string;
  email?: string;
  password?: string;
};

type UserRes = {
  success: boolean;
  user: User;
};

const ENDPOINT = 'auth/user';

const editUser = async ({ name, email, password }: Props) => {
  const res = await authApi.patch<UserRes>(`/${ENDPOINT}`, {
    name,
    email,
    password,
  });

  return res.data;
};

const getMe = async () => {
  return await authApi.get<UserRes>(`/${ENDPOINT}`);
};

export const UserService = {
  editUser,
  getMe,
};
