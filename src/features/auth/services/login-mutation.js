import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERYKEY } from '../../../utils/config';
import { AuthService } from './auth-service';
import { CookieService } from '../../../utils/cookie-service';
import { useNavigate } from 'react-router-dom';

export const useLogInMutation = ({ redirectTo }) => {
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
