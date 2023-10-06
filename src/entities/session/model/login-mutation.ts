import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthService } from '../../../shared/api/auth-service';
import { useNavigate } from 'react-router-dom';
import { QUERYKEY } from '#shared/config';
import { CookieService } from '#shared/lib';

export const useLogInMutation = ({ redirectTo }: { redirectTo: string }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [QUERYKEY.USER],
    mutationFn: AuthService.login,
    onSuccess: ({ accessToken: token, refreshToken }) => {
      const accessToken = token.split(' ')[1];

      CookieService.setAccessToken(accessToken);
      CookieService.setRefreshToken(refreshToken);

      queryClient.invalidateQueries({ queryKey: [QUERYKEY.USER] });

      navigate(redirectTo);
    },
  });
};
