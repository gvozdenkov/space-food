import { QUERYKEY } from '#shared/config';
import { QueryClient } from '@tanstack/react-query';

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

export const feedLoader = (queryClient: QueryClient) => async () =>
  await queryClient.ensureQueryData(orderFeedQuery());

export const profileFeedQuery = () => ({
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

export const profileFeedLoader = (queryClient: QueryClient) => async () =>
  await queryClient.ensureQueryData(profileFeedQuery());
