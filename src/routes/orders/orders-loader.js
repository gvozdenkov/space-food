import { QUERYKEY } from '../../utils/config';

export const ordersQuery = () => ({
  queryKey: [QUERYKEY.PROFILE_ORDERS],
  queryFn: async () => {
    return Promise.resolve({
      success: true,
      orders: [],
      total: 0,
      totalToday: 0,
    });
  },
});

export const ordersLoader = (queryClient) => async () =>
  await queryClient.ensureQueryData(ordersQuery());
