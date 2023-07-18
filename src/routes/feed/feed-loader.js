import { QUERYKEY } from '../../utils/config';

export const orderFeedQuery = () => ({
  queryKey: [QUERYKEY.FEED],
  queryFn: async () => {
    return Promise.resolve({
      success: true,
      orders: [],
      total: 0,
      totalToday: 0,
    });
  },
});

export const orderFeedLoader = (queryClient) => async () =>
  await queryClient.ensureQueryData(orderFeedQuery());
