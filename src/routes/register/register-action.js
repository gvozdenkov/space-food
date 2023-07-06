import { redirect } from 'react-router-dom';
import { AuthService } from '../../features/auth';
import { setUser } from '../../features/user';
import { CookieService } from '../../utils/cookie-service';
import { PATH } from '../../utils/config';

export const registerAction =
  (dispatch) =>
  async ({ request }) => {
    const formData = await request.formData();
    const registerData = Object.fromEntries(formData);

    const { accessToken: token, refreshToken, user } = await AuthService.register(registerData);
    const accessToken = token.split(' ')[1];

    CookieService.setAccessToken(accessToken);
    CookieService.setRefreshToken(refreshToken);

    dispatch(setUser({ user }));

    return redirect(PATH.HOME);
  };
