import { redirect } from 'react-router-dom';
import { CookieService } from '../../utils/cookie-service';
import { PATH } from '../../utils/config';

export const resetPasswordLoader = () => () => {
  const isResetAllowed = CookieService.getResetPasswordRights();

  return isResetAllowed ? null : redirect(PATH.FORGOT_PASSWORD);
};
