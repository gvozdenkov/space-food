import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { publicApi } from '#shared/api';
import { Credentials, User } from '#shared/api/types';
import { QUERYKEY, ROUTE } from '#shared/config';
import { CookieService } from '#shared/lib';

type Props = Pick<Credentials, 'name' | 'email' | 'password'>;
type RegisterRes = {
  success: boolean;
  user: User;
  accessToken: string;
  refreshToken: string;
};

const registerMutation = async ({ name, email, password }: Props) => {
  const res = await publicApi.post<RegisterRes>('/auth/register', {
    name,
    email,
    password,
  });

  return res.data;
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [QUERYKEY.USER],
    mutationFn: registerMutation,
    onSuccess: ({ accessToken: token, refreshToken }) => {
      const accessToken = token.split(' ')[1];

      CookieService.setAccessToken(accessToken);
      CookieService.setRefreshToken(refreshToken);

      queryClient.invalidateQueries({ queryKey: [QUERYKEY.USER] });

      navigate(ROUTE.HOME);
    },
  });
};
