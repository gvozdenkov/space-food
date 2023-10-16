import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { QUERYKEY } from '#shared/config';
import { CookieService } from '#shared/lib';
import { AuthService, Login, ResponseError } from '#shared/api';
import { AuthRes } from '#shared/api';

export const useLogInMutation = ({ redirectTo }: { redirectTo: string }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<AuthRes, ResponseError, Login>({
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
