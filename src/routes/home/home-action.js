import { api } from '../../services/api-setup';

export const makeOrderAction =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const { ingredients } = Object.fromEntries(formData);

    // try {
    //   const user = await UserService.getMe();
    //   if (user) {
    //     await api.post('orders', {
    //       ingredients: JSON.parse(ingredients),
    //     });
    //     return null;
    //   } else {
    //     return redirect(PATH.HOME);
    //   }
    // } catch (err) {
    //   console.log('no user');
    //   return redirect(PATH.HOME);
    // }

    const order = await api.post('orders', {
      ingredients: JSON.parse(ingredients),
    });

    return order.data;
  };
