import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export const QUERYKEY = {
  INGREDIENTS: 'ingredients',
  USER: 'user',
  PROFILE_ORDERS: 'profile-orders',
  FEED: 'feed',
  ORDER_DETAILS: 'order-details',
} as const;
