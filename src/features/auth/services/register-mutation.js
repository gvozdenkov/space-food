import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../../app/api-setup';
import { PATH, QUERYKEY } from '../../../utils/config';
import { CookieService } from '../../../utils/cookie-service';
import { useNavigate } from 'react-router-dom';

export const registerMutation = async ({ name, email, password }) => {
  const res = await api.post('/auth/register', {
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

      navigate(PATH.HOME);
    },
  });
};
