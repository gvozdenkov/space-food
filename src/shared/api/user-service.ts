import { authApi } from './api-setup';
import { Credentials, User } from './types';

type Props = Pick<Credentials, 'name' | 'email' | 'password'>;
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
