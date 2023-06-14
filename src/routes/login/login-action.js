import { redirect } from 'react-router-dom';
import { JWT, PATH } from '../../utils/config';
import { AuthService } from '../../services/api/auth-api';
import Cookies from 'universal-cookie';
import { setCredentials, setUser } from '../../services/auth-slice';

export const action =
  (dispatch) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);
    const cookies = new Cookies();

    const { accessToken: token, refreshToken, user } = await AuthService.login(credentials);

    const accessToken = token.split(' ')[1];

    cookies.set(JWT.REFRESH, refreshToken, { maxAge: 2400, path: '/' });
    dispatch(setCredentials({ accessToken }));
    dispatch(setUser({ user }));

    return redirect(PATH.HOME);
  };
