import { redirect } from 'react-router-dom';
import { AuthService } from '../../features/auth';
import { PATH } from '../../utils/config';
import { CookieService } from '../../utils/cookie-service';

export const forgotPasswordAction =
  () =>
  async ({ request }) => {
    const formData = await request.formData();
    const email = Object.fromEntries(formData);

    const { success } = await AuthService.forgotPassword(email);

    if (success) {
      CookieService.setResetPasswordRights();
      return redirect(PATH.RESET_PASSWORD);
    }

    return null;
  };
