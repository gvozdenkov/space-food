import { AuthService, ForgotPassword, ResWithMessage, ResponseError } from '#shared/api';
import { ROUTE } from '#shared/config';
import { CookieService } from '#shared/lib';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useForgotPasswordMutation = () => {
  const navigate = useNavigate();

  return useMutation<ResWithMessage, ResponseError, ForgotPassword>({
    mutationFn: AuthService.forgotPassword,
    onSuccess: () => {
      CookieService.setResetPasswordRights();
      navigate(ROUTE.RESET_PASSWORD);
    },
  });
};
