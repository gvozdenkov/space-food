import { redirect } from 'react-router-dom';
import { CookieService } from '../../utils/cookie-service';
import { AuthService } from '../../features/auth/services/auth-service';
import { setUser } from '../../features/user';

export const loginAction =
  (dispatch) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const { email, password, redirectTo } = Object.fromEntries(formData);
    console.log('cred:', { email, password });

    const { accessToken: token, refreshToken, user } = await AuthService.login({ email, password });
    const accessToken = token.split(' ')[1];
    console.log('accessToken:', accessToken);

    // expires in days: accessToken expires at 20 min
    CookieService.setAccessToken(accessToken);
    CookieService.setRefreshToken(refreshToken);

    dispatch(setUser({ user }));

    return redirect(redirectTo);
  };
