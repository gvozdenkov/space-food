import { UserService, setUser } from '../../features/user';

export const updateUserAction =
  (dispatch) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const { name, email, password } = Object.fromEntries(formData);

    const res = await UserService.editMe({ name, email, password });

    const { user } = res;

    dispatch(setUser({ user }));

    return res;
  };
