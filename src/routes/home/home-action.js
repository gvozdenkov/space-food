import { redirect } from 'react-router-dom';
import { api } from '../../app/api-setup';
import { UserService } from '../../features/user';
import { PATH } from '../../utils/config';
import { orderReseted } from '../../features/burger-constructor/services/order-slice';

export const makeOrderAction =
  (dispatch) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const { ingredients } = Object.fromEntries(formData);

    try {
      const user = await UserService.getMe();

      if (!user) {
        return redirect(PATH.LOGIN);
      }

      const order = await api.post('orders', {
        ingredients: JSON.parse(ingredients),
      });

      dispatch(orderReseted());

      const orderNumber = order.data.order.number;
      return redirect(`/order/${orderNumber}`);
    } catch (err) {
      console.error('make order err:', err);
      return err;
    }
  };
