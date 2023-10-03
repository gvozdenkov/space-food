import { ROUTE } from '#shared/config';
import { redirect } from 'react-router-dom';

export const logoutAction = () => async () => {
  // const refreshToken = CookieService.getRefreshToken();

  // await AuthService.logout(refreshToken);

  // CookieService.removeTokens();
  // queryClient.resetQueries({ queryKey: QUERYKEY.USER, exact: true });
  console.log('user logout and redirect to /');
  return redirect(ROUTE.HOME);
};
