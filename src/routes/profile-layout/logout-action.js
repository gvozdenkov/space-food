import { redirect } from 'react-router-dom';
import { PATH, QUERYKEY } from '../../utils/config';
import { CookieService } from '../../utils/cookie-service';
import { AuthService } from '../../features/auth';
import { queryClient } from '../../app/api-setup';

// To use multiple actions on one rout you can assign for submit button
// <button type='submit' name='intent' value='id-for-action'>Submit</button>
// and detect action type like this:
// const actionType = formData.get('intent');
// switch (actionType) { case 'id-for-action: ....}

export const logoutAction = (dispatch) => async () => {
  const refreshToken = CookieService.getRefreshToken();

  await AuthService.logout(refreshToken);

  CookieService.removeTokens();
  queryClient.resetQueries({ queryKey: QUERYKEY.USER, exact: true });
  return redirect(PATH.LOGIN);
};
