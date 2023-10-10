import { publicApi } from '#shared/api';
import { QUERYKEY } from '#shared/config';
import { QueryClient, useQuery } from '@tanstack/react-query';

export const orderDetailsQuery = (number: string) => ({
  queryKey: [QUERYKEY.ORDER_DETAILS, number],
  queryFn: async () => {
    const order = await publicApi.get(`orders/${number}`);

    if (!order) {
      throw new Response('', {
        status: 404,
        statusText: 'Order Not Found',
      });
    }

    return order?.data?.orders[0];
  },
});

export const useOrderDetailsQuery = (number: string) => {
  return useQuery(orderDetailsQuery(number));
};

// return data or fetch it
export const orderModalLoader =
  (queryClient: QueryClient) =>
  async ({ params }) =>
    await queryClient.ensureQueryData(orderDetailsQuery(params.number));
