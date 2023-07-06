import { redirect } from 'react-router-dom';
import { PATH, QUERYKEY } from '../../utils/config';
import { persistor } from '../../app/store';
import { CookieService } from '../../utils/cookie-service';
import { removeUser } from '../../features/user';
import { AuthService } from '../../features/auth';
import { queryClient } from '../../services/api-setup';

// To use multiple actions on one rout you can assign for submit button
// <button type='submit' name='intent' value='id-for-action'>Submit</button>
// and detect action type like this:
// const actionType = formData.get('intent');
// switch (actionType) { case 'id-for-action: ....}

export const logoutAction = (dispatch) => async () => {
  const refreshToken = CookieService.getRefreshToken();

  try {
    await AuthService.logout(refreshToken);

    CookieService.removeTokens();
    queryClient.resetQueries({ queryKey: QUERYKEY.USER, exact: true });
  } catch (err) {
  } finally {
    dispatch(removeUser());
    persistor.purge();
    return redirect(PATH.LOGIN);
  }
};
