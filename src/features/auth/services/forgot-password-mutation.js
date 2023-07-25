import { useMutation } from '@tanstack/react-query';
import { PATH } from '../../../utils/config';
import { useNavigate } from 'react-router-dom';
import { CookieService } from '../../../utils/cookie-service';
import { AuthService } from './auth-service';

export const useForgotPasswordMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: AuthService.forgotPassword,
    onSuccess: () => {
      CookieService.setResetPasswordRights();
      navigate(PATH.RESET_PASSWORD);
    },
  });
};
