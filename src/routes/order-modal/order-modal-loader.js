import { api } from '../../app/api-setup';
import { QUERYKEY } from '../../utils/config';

export const orderDetailsQuery = (number) => ({
  queryKey: [QUERYKEY.ORDER_DETAILS, number],
  queryFn: async () => {
    const order = await api.get(`orders/${number}`);

    if (!order) {
      throw new Response('', {
        status: 404,
        statusText: 'Order Not Found',
      });
    }

    return order?.data?.orders[0];
  },
});

// return data or fetch it
export const orderModalLoader =
  (queryClient) =>
  async ({ params }) =>
    await queryClient.ensureQueryData(orderDetailsQuery(params.number));
