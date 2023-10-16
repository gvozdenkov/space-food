import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { QUERYKEY } from '#shared/config';
import { CookieService } from '#shared/lib';
import { AuthService } from '#shared/api';

export const useLogOutMutation = ({ redirectTo }: { redirectTo: string }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [QUERYKEY.USER],
    mutationFn: AuthService.logout,
    onSuccess: () => {
      CookieService.removeTokens();

      queryClient.invalidateQueries({ queryKey: [QUERYKEY.USER] });

      navigate(redirectTo);
    },
  });
};
