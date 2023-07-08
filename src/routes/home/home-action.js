import { api } from '../../app/api-setup';

export const makeOrderAction =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const { ingredients } = Object.fromEntries(formData);

    const order = await api.post('orders', {
      ingredients: JSON.parse(ingredients),
    });

    return order.data;
  };
