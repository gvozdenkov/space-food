import { publicApi } from '#shared/api';
import { QUERYKEY } from '#shared/config';
import { QueryClient } from '@tanstack/react-query';

export const orderDetailsQuery = (number: number) => ({
  queryKey: [QUERYKEY.ORDER_DETAILS, number],
  queryFn: async () => {
    const order = await publicApi.get(`orders/${number}`);

    if (!order) {
      throw new Response('', {
        status: 404,
        statusText: 'Order Not Found',
      });
    }
    console.log('get order: ', order);
    return order?.data?.orders[0];
  },
});

// return data or fetch it
export const orderModalLoader =
  (queryClient: QueryClient) =>
  async ({ params }) =>
    await queryClient.ensureQueryData(orderDetailsQuery(params.number));
