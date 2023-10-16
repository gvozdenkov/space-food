import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { QUERYKEY } from '#shared/config';
import { CookieService } from '#shared/lib';
import { AuthService } from '#shared/api';
import { AxiosError } from 'axios';
import { ApiError } from '#shared/api/types';
import { AuthRes } from '#shared/api/auth-service';

type LoginMutationData = {
  email: string;
  password: string;
};

export const useLogInMutation = ({ redirectTo }: { redirectTo: string }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<AuthRes, AxiosError<ApiError>, LoginMutationData>({
    mutationKey: [QUERYKEY.USER],
    mutationFn: AuthService.login,
    onSuccess: ({ accessToken: token, refreshToken }: AuthRes) => {
      const accessToken = token.split(' ')[1];

      CookieService.setAccessToken(accessToken);
      CookieService.setRefreshToken(refreshToken);

      queryClient.invalidateQueries({ queryKey: [QUERYKEY.USER] });

      navigate(redirectTo);
    },
  });
};
