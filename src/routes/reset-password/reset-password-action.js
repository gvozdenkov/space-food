import { redirect } from 'react-router-dom';
import { AuthService } from '../../features/auth';
import { PATH } from '../../utils/config';
import { CookieService } from '../../utils/cookie-service';

export const resetPasswordAction =
  () =>
  async ({ request }) => {
    const formData = await request.formData();
    const { password, token } = Object.fromEntries(formData);

    const { success } = await AuthService.resetPassword({ password, token });

    if (success) {
      CookieService.removeResetPasswordRights();
      return redirect(PATH.LOGIN);
    }

    return null;
  };
