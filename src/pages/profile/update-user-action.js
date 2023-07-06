import { redirect } from 'react-router-dom';
import { PATH } from '../../utils/config';
import { UserService, setUser } from '../../features/user';

export const updateUserAction =
  (dispatch) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const { name, email, password } = Object.fromEntries(formData);

    const res = await UserService.editMe({ name, email, password });
    console.log(res);

    const { user } = res;

    dispatch(setUser({ user }));

    // return res;
    return redirect(PATH.PROFILE);
  };
