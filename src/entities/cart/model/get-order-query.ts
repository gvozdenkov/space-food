import { publicApi } from '#shared/api';
import { GetOrderRes } from '#shared/api/types';
import { QUERYKEY } from '#shared/config';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { LoaderFunction } from 'react-router-dom';

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

type Params = {
  number: string;
};

export const orderModalLoader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ params }): Promise<GetOrderRes> => {
    const typedParams = params as unknown as Params;
    return await queryClient.ensureQueryData(orderDetailsQuery(typedParams.number));
  };
